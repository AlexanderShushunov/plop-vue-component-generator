const path = require('path')
const { componentGenerator } = require('./.plop/Component')

const dist = path.resolve(__dirname, 'src/components')

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator(dist))
}
