/*
  Remove the unit of a length
  @param {Number} $number - Number to remove unit from
  @return {Number} - Unitless number
*/

const strip = (value) => {
  return String(value).match(/\d+/)[0]
}

module.exports = {
  strip
}
