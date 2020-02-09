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
  }, {
    type: 'confirm',
    name: 'vuex',
    message: 'connect with vuex'
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

    const addStubStore = {
      type: 'add',
      path: makeDist('createStubStore.js'),
      templateFile: templates['createStubStore']
    }

    const res = []
    res.push(...addBaseFiles)
    if (test) {
      res.push(addTest)
    }
    if (addStubStore) {
      res.push(addStubStore)
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
