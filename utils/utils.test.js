const tap = require('tap')
const utils = require('./dist/utils')
const {AssertionError} = require('assert')

tap.test('utils', t => {
  t.plan(9)

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
      'splitOnce',
      `promisify`,
      `splitArray`,
      `ensureArray`,
      'StrictEventEmitter'
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

  t.test('deepmerge', t => {
    t.plan(1)
    const {deepmerge} = utils
    t.deepEquals(
      deepmerge({foo: [1], bar: 42}, {foo: [2], baz: 23}),
      {foo: [1, 2], bar: 42, baz: 23},
      'deepmege worked'
    )
  })

  t.test('splitOnce', t => {
    const {splitOnce} = utils
    t.plan(2)

    ;[
      {data: ['foo=bar=yadda', '='], expect: ['foo', 'bar=yadda']},
      {data: ['foo=bar=yadda', '=', true], expect: ['foo=bar', 'yadda']},
    ].forEach(({data, expect}) => {
      t.deepEquals(splitOnce(...data), expect, `${data[0]} -> ${expect}`)
    })
  })

  t.test('ensureArray', t => {
    const {ensureArray} = utils
    t.plan(3)

    ;[
      {data: [1], expect: [1]},
      {data: [[2]], expect: [2]},
      {data: [[{}]], expect: [{}]},
    ].forEach(({data, expect}) => {
      t.deepEquals(ensureArray(...data), expect, `${data[0]} -> ${expect}`)
    })
  })

  t.test('StrictEventEmitter', t => {
    const {StrictEventEmitter} = utils
    class TestEmitter extends StrictEventEmitter {}
    t.plan(4)

    t.test('unknown event', t =>  {
      t.plan(1)
      const em = new TestEmitter()
      t.throws(() => em.emit('foo'), new Error("Event 'foo' not emitted by TestEmitter"))
    })

    t.test('emit/on', t =>  {
      t.plan(2)
      const em = new TestEmitter(['foo'])
      em.on('foo', () => t.ok(true, 'event caught'))
      em.emit('foo')
      em.emit('foo')
    })

    t.test('emit/once', t =>  {
      t.plan(1)
      let no = 0
      const em = new TestEmitter(['foo'])
      em.once('foo', () => t.ok(no++ == 0, 'event caught once'))
      em.emit('foo')
      em.emit('foo')
    })

    t.test('logging with ansi codes', t => {
      t.plan(1)
      console.log = (msg) => {
        t.ok(msg.match(/\x1b/), 'has ansi escape codes')
      }
      const em = new TestEmitter(['foo'], true)
      em.emit('foo')
    })

  })

})
