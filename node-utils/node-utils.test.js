const tap = require('tap')

tap.test('node-utils', t => {
  t.test('exports', t => {
    t.plan(1)
    t.deepEquals(Object.keys(require('.')), [
      // utils
      'deansi',
      'fetch',
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

      // node-utils
      'inspect',
      'relativizeFile',
      'mkdir',
      'rmdir',
      'uploadFile',
      'FormData',
    ], 'all exports')
  })
  t.skip("Not implemented")
  t.end()
})
