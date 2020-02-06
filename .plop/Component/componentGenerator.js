const path = require('path')
const { getTemplates } = require('../utils/getTemplates')

const templates = getTemplates(path.resolve(__dirname, 'templates'))

function componentGenerator (dist) {
  return {
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name'
    }],
    actions: [{
      type: 'add',
      path: path.resolve(dist, '{{pascalCase name}}/index.js'),
      templateFile: templates.index
    }, {
      type: 'add',
      path: path.resolve(dist, '{{pascalCase name}}/{{pascalCase name}}.vue'),
      templateFile: templates.Component
    }]
  }
}

module.exports = {
  componentGenerator
}
