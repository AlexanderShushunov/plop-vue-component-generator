const path = require('path')
const { getTemplates } = require('../utils/getTemplates')

const templates = getTemplates(path.resolve(__dirname, 'templates'))

function componentGenerator (dest, plop) {
  plop.setPartial('ComponentName', '{{pascalCase name}}');
  plop.setPartial('CssClassName', '{{kebabCase name}}');

  function makeDest (fileName) {
    return path.resolve(dest, `{{> ComponentName}}/${fileName}`)
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
    name: 'storybook',
    message: 'add storybook'
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

  function actions ({test, vuex, storybook}) {
    const addBaseFiles = [{
      type: 'add',
      path: makeDest('index.js'),
      templateFile: templates['index']
    }, {
      type: 'add',
      path: makeDest('{{> ComponentName}}.vue'),
      templateFile: templates['Component']
    }]

    const addTest = {
      type: 'add',
      path: makeDest('{{> ComponentName}}.spec.js'),
      templateFile: templates['Component.spec']
    }

    const addStubStore = {
      type: 'add',
      path: makeDest('createStubStore.js'),
      templateFile: templates['createStubStore']
    }

    const addStory = {
      type: 'addMany',
      destination: makeDest('stories'),
      templateFiles: templates['stories'],
      base: templates['stories']
    }

    const res = []
    res.push(...addBaseFiles)
    if (test) {
      res.push(addTest)
    }
    if (vuex) {
      res.push(addStubStore)
    }
    if (storybook) {
      res.push(addStory)
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
