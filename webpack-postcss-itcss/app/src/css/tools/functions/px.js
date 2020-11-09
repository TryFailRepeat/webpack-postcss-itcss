/*
*/

const px = (value) => {
  return (typeof value === 'string') ? value : value + 'px'
}

module.exports = {
  px
}
