const merge = require('webpack-merge');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
    }),
  ],
});