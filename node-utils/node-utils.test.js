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
      'StrictEventEmitter',

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
    ], 'all exports')
  })
  t.end()
})


tap.test('idiomaticFetch', t => {
  t.plan(2)
  const options = {}
  if (process.env.https_proxy) {
    options.agent = new require('https-proxy-agent')(process.env.https_proxy)
  }
  const {idiomaticFetch, fetch} = nodeUtils
  Object.assign(idiomaticFetch, {fetch})
  idiomaticFetch('https://google.com', options, 'text')
    .then(resp => {
      t.equals(resp.status, 200)
      t.equals(!!resp.bodyData, true)
    })
})
