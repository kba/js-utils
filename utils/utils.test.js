const tap = require('tap')

tap.test('truthy', t => {
  const {truthy} = require('.')
  t.equals(truthy('true'), true, "'true' -> true")
  t.equals(truthy('false'), false, "'false' -> false")
  t.equals(truthy('1'), true, "'true' -> true")
  t.equals(truthy('0'), false, "'false' -> false")
  t.equals(truthy(1), true, "'true' -> true")
  t.equals(truthy(0), false, "'false' -> false")
  t.end()
})

tap.test('lastUrlSegment', t => {
  const {lastUrlSegment} = require('.')
  t.equals(lastUrlSegment('http://foo/bar',   false), 'bar', "http://foo/bar   -> 'bar'")
  t.equals(lastUrlSegment('http://foo/bar/',  false), '',    "http://foo/bar/  -> ''")
  t.equals(lastUrlSegment('http://foo/bar/',  true),  'bar', "http://foo/bar/  -> 'bar' (removeTrailing)")
  t.equals(lastUrlSegment('http://foo/bar//', true),  'bar', "http://foo/bar// -> 'bar' (removeTrailing)")
  t.end()
})
