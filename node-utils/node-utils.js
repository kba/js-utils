const util = require('util')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const FormData = require('form-data')
const utils = require('@kba/utils')
const fetch = require('node-fetch')

module.exports = {}
Object.assign(module.exports, utils)

Object.assign(module.exports, {
  fetch,
  inspect,
  relativizeFile,
  mkdir,
  rmdir,
  uploadFile,
  FormData,
  corsMiddleware,
  nedbCollectionRouteHandler,
})

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

/**
 * ### fetch(...args)
 *
 * [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill)
 *
 */

/**
 * ### corsMiddleware(opts)
 *
 * @return middleware that adds `Access-Control` headers.
 *
 * If `opts.allowOrigin` is `origin`, this will mirror the request header `Origin`.
 */
function corsMiddleware({
  allowOrigin='*',
  exposeHeaders=[],
  allowCredentials=true,
  allowMethods=['HEAD', 'OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders=[],
}={}) {
  exposeHeaders = utils.uniq([
    'ETag', 'Allow', 'Vary', 'Link', 'Content-Type', 'Location', 'Content-Location', 'Prefer',
    ...exposeHeaders,
  ])
  allowHeaders = utils.uniq([
    'Content-Type', 'Prefer', 'Authorization',
    ...allowHeaders,
  ])
    return (req, resp, next) => {
      let _allowOrigin =  (allowOrigin === 'origin') ? req.get('Origin') : allowOrigin
      resp.header('Access-Control-Allow-Origin',      _allowOrigin)
      resp.header('Access-Control-Allow-Credentials', allowCredentials)
      resp.header('Access-Control-Allow-Methods',     allowMethods.join(', ')),
      resp.header('Access-Control-Allow-Headers',     allowHeaders.join(', '))
      resp.header('Access-Control-Expose-Headers',    exposeHeaders.join(', '))
      next()
    }
}

/**
 * ### nedbCollectionRouteHandler(opts)
 * 
 *  Generate a handler suitable for a GET query on the root of a nedb collection.
 * 
 * ```
 * @param {DataStore} opts.collection collection to query
 * @param {Promise} postProcess augment results
 * @param {Object} projection for query results
 * @param {String} defaultSort default sort. Default: `modified.desc`
 * @param {String} regexify whether to turn string regexes into real regexes for `$regex` query fields
 * ```
 * 
 */
function nedbCollectionRouteHandler(opts={}) {
  const {
    collection,
    postProcess,
    projection,
    defaultSort,
    regexify,
  } = Object.assign({}, {
    postProcess: Promise.resolve,
    projection: {},
    defaultSort: "modified.desc",
    regexify: false,
  }, opts)
  return (req, resp, next) => {
    let {
      q='{}',
      perPage=10,
      page=1,
      sort=defaultSort
    } = req.query
    let [sortField, sortOrder] = sort.split('.')
    sortOrder = sortOrder.toLowerCase() === 'desc' ? -1 : +1
    try {
      q = JSON.parse(q)
      if (regexify) {
        utils.traverse(q).forEach(function() {
          if (this.key === '$regex' && typeof this.node === 'string') {
            this.update(new RegExp(this.node))
          }
        })
      }
    } catch (e) {
      return next(new Error(`Malformed query: '${q}': ${e}`))
    }
    collection.count(q, (err, total) => {
      if (err) return next(err)
      resp.header('X-Total-Count', total)
      collection.find(q, projection)
        .sort({[sortField]: sortOrder})
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec((err, docs) => {
          if (err)
            return next(err)
          postProcess(docs).then(() => resp.send(docs))
        })
    })
  }
}
