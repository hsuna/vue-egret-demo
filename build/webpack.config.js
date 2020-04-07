'use strict'
const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  
  const assetsPath = _path => path.posix.join(config.assetsPublicPath, _path)

  return {
    mode: webpackEnv,
    context: path.resolve(__dirname, '../'),
    entry: './src/main.js',
    devtool: isEnvProduction 
      ? config.productionSourceMap 
      ? '#source-map'
      : false
      : 'cheap-module-eval-source-map',
    output: {
      path: config.assetsRoot,
      filename: 'js/[name].js',
      library:'Main',
      libraryTarget:'umd',
      libraryExport: "default",
    },
    devServer: isEnvDevelopment 
    ? {
        clientLogLevel: 'warning',
        historyApiFallback: {
          rewrites: [
            { from: /.*/, to: path.posix.join('/', 'index.html') },
          ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.host,
        port: PORT || config.port,
        open: config.autoOpenBrowser,
        overlay: config.errorOverlay
          ? { warnings: false, errors: true }
          : false,
        publicPath: '/',
        proxy: config.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
          poll: config.poll,
        }
      }
    : undefined,
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue-egret': 'vue-egret/dist/vue.egret.runtime.js',
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-egret-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
				},
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: assetsPath('img/[name].[hash:7].[ext]'),
          }
        }
      ]
    },
    plugins: [
      // http://vuejs.github.io/vue-loader/en/workflow/production.html
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: `"${webpackEnv}"`
        }
      }),
      ...(isEnvProduction 
      ? [
        /* new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,  
              drop_debugger: true,  
              drop_console: true
            }
          },
          sourceMap: config.productionSourceMap,
          parallel: true
        }), */
        //清理文件
        new CleanWebpackPlugin(),
         // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
      ].filter(Boolean)
      : isEnvDevelopment 
      ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
      ] 
      : []),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../public'),
          to: config.assetsRoot,
          ignore: ['.*']
        }
      ])
    ].filter(Boolean)
  }
}