const tap = require('tap')

tap.test('node-utils', t => {
  t.test('exports', t => {
    t.plan(1)
    t.deepEquals(Object.keys(require('.')), [
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
