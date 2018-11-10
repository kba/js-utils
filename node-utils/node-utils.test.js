const tap = require('tap')
const nodeUtils = require('.')

tap.test('node-utils', t => {
  t.test('exports', t => {
    t.plan(1)
    t.deepEquals(Object.keys(nodeUtils), [
      // utils
      'deansi',
      'jsonify',
      'lastUrlSegment',
      'parseUrl',
      'promiseSerial',
      'randomInt',
      'shortenOutput',
      'truthy',
      'urlJoin',
      'verticalConcat',
      'randomString',
      'uniq',
      'traverse',
      'deepmerge',
      'idiomaticFetch',
      'splitOnce',
      `promisify`,
      `splitArray`,
      `ensureArray`,

      // node-utils
      'fetch',
      'inspect',
      'relativizeFile',
      'mkdir',
      'rmdir',
      'uploadFile',
      'FormData',
      'corsMiddleware',
      'nedbCollectionRouteHandler',
      'StrictEventEmitter',
    ], 'all exports')
  })
  t.end()
})


tap.test('idiomaticFetch', t => {
  t.plan(2)
  const {idiomaticFetch, fetch} = nodeUtils
  Object.assign(idiomaticFetch, {fetch})
  idiomaticFetch('https://google.com', 'text')
    .then(resp => {
      t.equals(resp.status, 200)
      t.equals(!!resp.bodyData, true)
    })
})
