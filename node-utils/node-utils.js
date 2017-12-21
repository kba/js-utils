const utils = require('@kba/utils')
const util = require('util')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const {fetch} = require('fetch-ponyfill')()

/**
 * ### inspect(obj)
 * 
 */
function inspect(obj) {
  return util.inspect(obj, {colors: true, depth: 5})
}

/**
 * ### inspect.log(obj)
 * 
 */
inspect.log = (obj) => process.nextTick(() => console.log(inspect(obj)))

/**
 * ### relativizeFile(relPath, absPath
 * 
 */
function relativizeFile(relPath, basePath='/') {
  relPath = path.normalize(relPath)
  basePath = path.normalize(basePath)
  return relPath.replace(basePath, './')
}

/**
 * ### mkdir(dir, opts)
 * 
 * Recursively create `dir`.
 * 
 * @return promise
 */
function mkdir(dir, opts={}) {
  return new Promise((resolve, reject) => {
    mkdirp(dir, opts, (err) => err ? reject(err) : resolve(dir))
  })
}

/**
 * ### rmdir(dir, opts)
 * 
 * Recursively remove `dir`.
 * 
 * @return promise
 */
function rmdir(dir, opts={}) {
  return new Promise((resolve, reject) => {
    rimraf(dir, opts, (err) => err ? reject(err) : resolve(dir))
  })
}

module.exports = {
  inspect,
  relativizeFile,
  mkdir,
  rmdir,
  fetch
}
Object.assign(module.exports, utils)
