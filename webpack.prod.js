const merge = require('webpack-merge');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Visualizer(),
    new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
    }),
  ],
});