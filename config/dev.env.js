var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var langEnv = process.argv.slice(2)[0]

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LANG: langEnv
})
