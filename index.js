#!/usr/bin/env node
const path = require('path')
const args = process.argv.slice(2)
const { Plop, run } = require('plop')
const argv = require('minimist')(args)

const plopfile = (path.resolve(__dirname, 'plopfile.js'))

Plop.launch({
  cwd: argv.cwd,
  configPath: plopfile,
  require: argv.require,
  completion: argv.completion
}, run)
