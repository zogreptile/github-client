const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const ENV = process.env.ENV || 'dev';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      'app.dependencies.env': path.resolve(__dirname, `../src/app.dependencies.${ENV}`),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
};
