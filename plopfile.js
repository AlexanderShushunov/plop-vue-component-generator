const { componentGenerator } = require('./.plop/Component')


module.exports = function (plop, { destBasePath }) {
  const dest = destBasePath ? destBasePath : process.cwd()

  plop.setGenerator('component', componentGenerator(dest, plop))
}
