'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  // Paths
  pagesPath: path.resolve(__dirname, '../src/pages'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsPublicPath: './static/',
  extractPublicPath: '../../',

  // Various Dev Server settings
  proxyTable: {},
  host: 'localhost', // can be overwritten by process.env.HOST
  port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  autoOpenBrowser: true,
  errorOverlay: true,
  poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

  cacheBusting: true,
  cssSourceMap: true,
  productionSourceMap: false,
  bundleAnalyzerReport: process.env.npm_config_report
}
