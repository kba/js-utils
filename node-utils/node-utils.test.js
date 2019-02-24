const tap = require('tap')
const nodeUtils = require('.')

tap.test('node-utils', async t => {

  t.plan(2)

  t.test('exports', async t => {

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
      'MultiIndex',
      'rexcape',

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

  t.test('idiomaticFetch', async t => {

    console.log('hi')
    const {idiomaticFetch} = nodeUtils
    try {
      const resp = await idiomaticFetch('https://google.com', 'text')
    } catch (resp) {
      t.equals(resp.status, 301)
      t.equals(!!resp.bodyData, true)
    t.end()
    }
  })


})


