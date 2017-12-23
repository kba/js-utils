const URL = require('url-parse')
const {fetch} = require('fetch-ponyfill')()

module.exports = {
  deansi,
  fetch,
  jsonify,
  lastUrlSegment,
  parseUrl,
  promiseSerial,
  randomInt,
  shortenOutput,
  truthy,
  urlJoin,
  verticalConcat,
  randomString,
}

/**
 * ### urlJoin(...args)
 * 
 * Join a base URI and possibly empty path segments
 */
function urlJoin(...args) {
  return args.join('/')
    .replace(/\/\/+/g, '/')
    .replace(/\/+$/, '')
    .replace(':/', '://')
}

/**
 * ### truthy(val)
 * 
 * Return whether a value should be interpreted as boolean `true`.
 */
function truthy(val) {
  return val === true || val === 1 || val === 'true' || val === '1'
}

/**
 * ### jsonify(obj)
 * 
 * Clone an object by serializing and deserializing to/from JSON
 */
function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * ### randomInt(low, int)
 * 
 * A random integer between `low` and `high`
 */
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

/**
 * ### deansi(str)
 * 
 * Remove ANSI color sequences from `str`.
 */
function deansi(str) {
  return str.replace(/\x1b\[[^m]+m/g, '')
}

/**
 * ### verticalConcat(...strs)
 */
function verticalConcat(...strs) {
  // console.log("Vertically concatenating", strs)
  const lineses = strs.map(str => str.split('\n'))
  const ret = [...lineses.shift()]
  lineses.map(lines => {
    lines.map((line, i) => {
      ret[i] += line
    })
  })
  return ret.join('\n')
}

/**
 * ### promiseSerial(funcs)
 * 
 * resolves Promises sequentially.
 * https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
 */
function promiseSerial(funcs) {
  return funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))
}

/**
 * ### shortenOutput(data, max=10)
 * 
 * Shorten `data` to a maximum of `max` characters.
 */
function shortenOutput(data, max=10) {
  data = data.toString()
  let ret = data.substr(0, max)
  if (data.length > max) ret += '...'
  return ret
}

/**
 * ### parseURL(...args)
 *
 */
function parseUrl(...args) {
  return new URL(...args)
}

/**
 * ### lastUrlSegment(url, removeTrailing=false)
 * 
 * Returns the last segment of a URL
 */
function lastUrlSegment(url, removeTrailing=false) {
  let {pathname} = parseUrl(url)
  if (removeTrailing) pathname = pathname.replace(/\/*$/, '')
  const segments = pathname.split('/')
  return segments[segments.length - 1]
}

/**
 * ### randomString({prefix='', template='', length=-1})
 *
 * Generate a URL-friendly random string.
 *
 * Template must have at least 3 `X` in a row
 *
 */
const shortid = require('shortid')
const xesRe = /(XXX+)/
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')
function randomString({prefix='', template='', length=-1}={}) {
  if (template && template.match(xesRe)) {
    template.replace(xesRe, (_, xes) => length = xes.length)
  }
  let id = shortid.generate()
  while (id.length < length) {
    id += shortid.generate()
  }
  if (length > -1) id = id.substr(0, length)
  if (template && template != '') id = template.replace(xesRe, id)
  if (prefix && prefix != '') id = `${prefix}.${id}`
  return id
}

/**
 * ### fetch(...args)
 *
 * [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill)
 *
 */

