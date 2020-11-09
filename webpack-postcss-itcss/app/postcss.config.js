const path = require('path')
const context = require('./config/webpack.config').context

// functions
const { px } = require('./src/css/tools/functions/px')
const { strip } = require('./src/css/tools/functions/strip')
const { z } = require('./src/css/tools/functions/z-index')
const { rem } = require('./src/css/tools/functions/rem')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-sassy-mixins'),
    require('postcss-conditionals'),
    require('postcss-simple-vars')({
      unknown (node, name, result) {
        node.warn(result, 'Unknown variable ' + name);
      }
    }),
    require('postcss-functions')({
      functions: {
        px,
        strip,
        z,
        rem
      }
    }),
    require('postcss-calc'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('cssnano')
  ]
}
