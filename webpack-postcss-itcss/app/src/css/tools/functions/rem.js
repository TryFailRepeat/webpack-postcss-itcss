// Mixin to create a declaration whose value is a rem unit. Also provide pixel fallback.
//
// .simple-usage {
//   @include rem(padding, 10px);
// }
const { strip } = require('./strip')

const rem = (arr, base = 16) => {
  const values = arr instanceof Array ? arr : [arr]

  const remValues = values.map(value => {
    const num = strip(value)
    return (num / base) + 'rem'
  })

  return remValues.join(' ')
}

module.exports = {
  rem
}
