'use strict'
const path = require('path')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const notifier = require('node-notifier')

const packageConfig = require('../package.json')
const configFactory = require('./webpack.config')
const webpackConfig = configFactory("development")

const createNotifierCallback = () => (severity, errors) => {
  if (severity !== 'error') return

  const error = errors[0]
  const filename = error.file && error.file.split('!').pop()

  notifier.notify({
    title: packageConfig.name,
    message: severity + ': ' + error.name,
    subtitle: filename || '',
    icon: path.join(__dirname, 'logo.png')
  })
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = webpackConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      webpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      webpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${webpackConfig.devServer.host}:${port}`],
        },
        onErrors: true
        ? createNotifierCallback()
        : undefined
      }))

      resolve(webpackConfig)
    }
  })
})
