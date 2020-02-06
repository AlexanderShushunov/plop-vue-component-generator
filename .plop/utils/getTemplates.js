const path = require('path')
const fs = require('fs')

module.exports = {
  getTemplates: function (templatesPath) {
    return fs.readdirSync(templatesPath).reduce((acc, template) => {
      const name = path.parse(template).name
      return {
        ...acc,
        [name]: path.resolve(templatesPath, template)
      }
    }, {})
  }
}
