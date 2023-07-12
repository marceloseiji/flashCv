const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const dotenv = require('dotenv')
const { DefinePlugin, EnvironmentPlugin } = require('webpack')

module.exports = env => {
  return {
    mode: env.mode,
    entry: './src/index',
    output: {
      clean: true,
      filename: 'bundle.js',
      path: path.resolve('dist'),
      publicPath: env.publicPath
    },
    target: 'web',
    devServer: {
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      port: env.port,
      historyApiFallback: true,
      open: true,
      hot: false,
      devMiddleware: { writeToDisk: true }
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: ['src', 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new EnvironmentPlugin({ ...process.env }),
      new DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
      }),
      new HtmlWebPackPlugin({
        template: 'public/index.html',
        hash: true,
        filename: '../dist/index.html'
      }),
      new ProgressBarPlugin({
        format:
          chalk.blueBright.bold('Build ➦ ') +
          '[:bar] ' +
          chalk.green.bold(':percent') +
          chalk.blueBright.bold('  (:elapsed seconds)'),
        clear: false
      })
    ]
  }
}
