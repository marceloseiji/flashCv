require('dotenv').config()
const common = require('./common')

module.exports = common({
  mode: 'production',
  port: process.env.port,
  publicPath: process.env.PUBLIC_PATH
})
