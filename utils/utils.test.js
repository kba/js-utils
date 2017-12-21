const tap = require('tap')
const utils = require('./dist/utils')

tap.test('truthy', t => {
  const {truthy} = utils
  t.equals(truthy('true'), true, "'true' -> true")
  t.equals(truthy('false'), false, "'false' -> false")
  t.equals(truthy('1'), true, "'true' -> true")
  t.equals(truthy('0'), false, "'false' -> false")
  t.equals(truthy(1), true, "'true' -> true")
  t.equals(truthy(0), false, "'false' -> false")
  t.end()
})

tap.test('lastUrlSegment', t => {
  const {lastUrlSegment} = utils
  t.equals(lastUrlSegment('http://foo/bar',   false), 'bar', "http://foo/bar   -> 'bar'")
  t.equals(lastUrlSegment('http://foo/bar/',  false), '',    "http://foo/bar/  -> ''")
  t.equals(lastUrlSegment('http://foo/bar/',  true),  'bar', "http://foo/bar/  -> 'bar' (removeTrailing)")
  t.equals(lastUrlSegment('http://foo/bar//', true),  'bar', "http://foo/bar// -> 'bar' (removeTrailing)")
  t.end()
})
