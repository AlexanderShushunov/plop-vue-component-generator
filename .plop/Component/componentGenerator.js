const path = require('path')
const { getTemplates } = require('../utils/getTemplates')

const templates = getTemplates(path.resolve(__dirname, 'templates'))

function componentGenerator (dist) {
  function makeDist (fileName) {
    return path.resolve(dist, `{{pascalCase name}}/${fileName}`)
  }

  const prompts = [{
    type: 'input',
    name: 'name',
    message: 'component name'
  }, {
    type: 'confirm',
    name: 'test',
    message: 'add jest test'
  }]

  function actions ({test}) {
    const addBaseFiles = [{
      type: 'add',
      path: makeDist('index.js'),
      templateFile: templates['index']
    }, {
      type: 'add',
      path: makeDist('{{pascalCase name}}.vue'),
      templateFile: templates['Component']
    }]

    const addTest = {
      type: 'add',
      path: makeDist('{{pascalCase name}}.spec.js'),
      templateFile: templates['Component.spec']
    }

    const res = []
    res.push(...addBaseFiles)
    if (test) {
      res.push(addTest)
    }
    return res
  }

  return {
    prompts,
    actions
  }
}

module.exports = {
  componentGenerator
}
