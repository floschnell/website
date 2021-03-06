const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/server.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  externals: ["express", "path", "fs", "react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, "./node_modules")],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [require("autoprefixer")];
                }
              }
            },
            "stylus-loader"
          ]
        })
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
            options: {
              root: path.resolve(__dirname, "./src/assets")
            }
          },
          {
            loader: "markdown-loader"
          }
        ]
      },
      {
        test: /(\.png$)|(\.jpe?g$)|(\.gif$)/,
        exclude: /embedded/,
        use: "null-loader"
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?mimetype=image/svg+xml'
      },
      {
        test: /.*embedded.*\.png$/,
        use: "url-loader?mimetype=image/png"
      },
      {
        test: /\.json$/,
        use: "json-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "static/bundle.css"
    })
  ]
};
