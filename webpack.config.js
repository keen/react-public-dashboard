const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const extendedPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: ( process.env.NODE_ENV === 'development' ) ? './test/demo/example/index.js' : './lib/DashboardViewer.js',
    vendor: path.resolve(__dirname, 'node_modules/keen-dashboard-builder/dist/viewer.min.js'),
  },

  target: 'web',

  output: {
    path: extendedPath,
    filename: `[name]${process.env.OPTIMIZE_MINIMIZE ? ".min" : ""}.js`,
    library: `${!process.env.LIBRARY ? "" : process.env.LIBRARY}`,
    libraryTarget: "umd"
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, ''),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./test/demo/index.html",
      filename: "./index.html",
      title: "Dashboard Viewer"
    }),
  ],

  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.json', '.jsx'],
  },

  optimization: {
    minimize: !!process.env.OPTIMIZE_MINIMIZE,
  },

  devtool: 'source-map',

  context: __dirname,

  mode: process.env.NODE_ENV,

  devServer: {
    contentBase: path.join(__dirname, 'test/demo'),
    publicPath: '/',
    open: true,
    watchContentBase: true,
  },

};
