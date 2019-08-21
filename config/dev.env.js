'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TITLE: '"Fashion Book"',
  BASE_API: '"http://staging-api.fashionbook.ng/"',
  BASE_DOMAIN: '"https://staging.fashionbook.ng"',
  BASIC_AUTH: '"dm1uX2tleTIwMTg6dm1uX2tleTIwMTg="'
  
})