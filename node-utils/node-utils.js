module.exports = {}
Object.assign(module.exports, require('@kba/utils'))

Object.assign({
  inspect,
  relativizeFile,
  mkdir,
  rmdir,
  uploadFile,
  FormData,
})

const util = require('util')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const FormData = require('form-data')

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

/**
 * ### uploadFile({filepath, endpoint, metadata})
 *
 */
function uploadFile({
  endpoint,
  filepath,
  metadata={}
}) {
  const form = new FormData()
  Object.keys(metadata).map(k => form.append(k, metadata[k]))
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filepath)
    stream.on('error', reject)
    form.append('file', stream)
    fetch(endpoint, {
      method: 'POST',
      body: form,
    }).then(resolve).catch(reject)
  })
}

/**
 * ### FormData
 *
 * [form-data](https://github.com/form-data/form-data)
 *
 */
