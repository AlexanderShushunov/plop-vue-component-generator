const path = require('path')
const { getTemplates } = require('../utils/getTemplates')

const templates = getTemplates(path.resolve(__dirname, 'templates'))

function componentGenerator (dist, plop) {
  plop.setPartial('ComponentName', '{{pascalCase name}}');
  plop.setPartial('CssClassName', '{{kebabCase name}}');

  function makeDist (fileName) {
    return path.resolve(dist, `{{> ComponentName}}/${fileName}`)
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
  }, {
    when ({vuex}) {
      return vuex
    },
    type: 'input',
    name: 'moduleName',
    message: 'vuex module name',
    default: 'module'
  }]

  function actions ({test}) {
    const addBaseFiles = [{
      type: 'add',
      path: makeDist('index.js'),
      templateFile: templates['index']
    }, {
      type: 'add',
      path: makeDist('{{> ComponentName}}.vue'),
      templateFile: templates['Component']
    }]

    const addTest = {
      type: 'add',
      path: makeDist('{{> ComponentName}}.spec.js'),
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
