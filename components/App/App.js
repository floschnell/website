import React from 'react';
import Navigation from '../Navigation/NavigationContainer';
import AppStyles from './App.styl';
import Page from '../Page/PageContainer';
import Header from '../Header/Header';
import RightColumn from '../RightColumn/RightColumn';

const renderPage = page => {
  const pageToRender = pageMapping[page];
  if (typeof pageToRender === 'undefined') {
    return <AboutMePage />;
  }
  return pageToRender;
};

const App = ({currentPage}) => 
  <div className={AppStyles.container}>
    <Navigation />
    <div className={AppStyles.content}>
      <Header />
      <Page />
    </div>
    <RightColumn />
  </div>;

export default App;
