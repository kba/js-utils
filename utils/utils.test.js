const tap = require('tap')
const utils = require('./dist/utils')

tap.test('utils', t => {
  t.plan(4)

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
    const {randomString} = utils
    console.log(randomString())
    console.log(randomString({template:'XXXX-foo'}))
    console.log(randomString({template:'XXXX-foo', prefix:'bar'}))
    console.log(randomString({length: 20}))
    // t.equals(lastUrlSegment('http://foo/bar',   false), 'bar', "http://foo/bar   -> 'bar'")
    // t.equals(lastUrlSegment('http://foo/bar/',  false), '',    "http://foo/bar/  -> ''")
    // t.equals(lastUrlSegment('http://foo/bar/',  true),  'bar', "http://foo/bar/  -> 'bar' (removeTrailing)")
    // t.equals(lastUrlSegment('http://foo/bar//', true),  'bar', "http://foo/bar// -> 'bar' (removeTrailing)")
    t.end()
  })

})
