import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './components/App/AppContainer';
import { renderToString } from 'react-dom/server';
import fs from 'fs';

const app = Express()
const port = 3000

global.window = {};
window = {};

//Serve static files
app.use('/static', Express.static('dist/static'));
app.use('/favicon.ico', Express.static('dist/favicon.ico'));

// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {

  // Create a new Redux store instance
  const store = createStore(reducer);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  const styles = fs.readFileSync('dist/static/bundle.css','utf8')

  return `
    <html>
      <head>
        <title>Florian Schnell - Software Engineer - Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Bitter|Material+Icons" rel="stylesheet">
      </head>
      <body>
        <style>
          ${styles}
        </style>
        <div id="root" style="height: 100%">${html}</div>
        <script src="static/bundle.js"></script>
      </body>
    </html>`;
}

app.listen(port);
