'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API:'"http://10.5.100.62:8122"'
    // API:'"http://10.5.101.70:8081"'
})
