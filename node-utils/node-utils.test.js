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
      'fetch',

      // node-utils
      'inspect',
      'relativizeFile',
      'mkdir',
      'rmdir',
      'uploadFile',
      'FormData',
    ], 'all exports')
  })
  t.end()
})
