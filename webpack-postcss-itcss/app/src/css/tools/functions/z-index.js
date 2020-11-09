/*
  Layering function
  @param {String} value - key in map
*/

const map = require('../../settings/settings.z-index')

const z = (value) => {
  if (map && map[value]) return map[value]
  return 0
}

module.exports = {
  z
}
