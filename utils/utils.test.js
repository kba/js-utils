const tap = require('tap')
const utils = require('./dist/utils')

tap.test('utils', t => {
  t.plan(5)

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
    ])
  })

  t.test('truthy', t => {
    const {truthy} = utils
    t.equals(truthy('true'), true, "'true' -> true")
    t.equals(truthy('false'), false, "'false' -> false")
    t.equals(truthy('1'), true, "'true' -> true")
    t.equals(truthy('0'), false, "'false' -> false")
    t.equals(truthy(1), true, "'true' -> true")
    t.equals(truthy(0), false, "'false' -> false")
    t.end()
  })

  t.test('lastUrlSegment', t => {
    const {lastUrlSegment} = utils
    t.equals(lastUrlSegment('http://foo/bar',   false), 'bar', "http://foo/bar   -> 'bar'")
    t.equals(lastUrlSegment('http://foo/bar/',  false), '',    "http://foo/bar/  -> ''")
    t.equals(lastUrlSegment('http://foo/bar/',  true),  'bar', "http://foo/bar/  -> 'bar' (removeTrailing)")
    t.equals(lastUrlSegment('http://foo/bar//', true),  'bar', "http://foo/bar// -> 'bar' (removeTrailing)")
    t.end()
  })

  t.test('randomString', t => {
    t.plan(4)
    const {randomString} = utils
    t.ok(randomString().length > 3, 'random string length > 3')
    t.ok(randomString({template:'XXXX-foo'}).endsWith('-foo'), 'template used')
    t.ok(randomString({template:'XXXX-foo', prefix:'bar'}).startsWith('bar.'), 'prefix used')
    t.equals(randomString({length: 20}).length, 20, '20 characters long as requested')
  })

  t.test('uniq', t => {
    t.plan(1)
    const {uniq} = utils
    t.deepEquals(uniq([1, 2, 1, 3]), [1, 2, 3])
  })

})
