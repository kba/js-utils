# js-utils
<!-- BEGIN-MARKDOWN-TOC -->
* [`@kba/utils`](#kbautils)
	* [urlJoin(...args)](#urljoinargs)
	* [truthy(val)](#truthyval)
	* [jsonify(obj)](#jsonifyobj)
	* [randomInt(low, int)](#randomintlow-int)
	* [deansi(str)](#deansistr)
	* [verticalConcat(...strs)](#verticalconcatstrs)
	* [promiseSerial(funcs)](#promiseserialfuncs)
	* [shortenOutput(data, max=10)](#shortenoutputdata-max-10)
	* [parseURL(...args)](#parseurlargs)
	* [lastUrlSegment(url, removeTrailing=false)](#lasturlsegmenturl-removetrailing-false)
	* [randomString({prefix='', template='', length=-1})](#randomstring-prefix----template----length--1-)
* [`@kba/node-utils`](#kbanode-utils)
	* [inspect(obj)](#inspectobj)
	* [inspect.log(obj)](#inspectlogobj)
	* [relativizeFile(relPath, absPath](#relativizefilerelpath-abspath)
	* [mkdir(dir, opts)](#mkdirdir-opts)
	* [rmdir(dir, opts)](#rmdirdir-opts)
	* [uploadFile({filepath, endpoint, metadata})](#uploadfile-filepath-endpoint-metadata-)
	* [FormData](#formdata)
	* [fetch(...args)](#fetchargs)

<!-- END-MARKDOWN-TOC -->

## `@kba/utils`

<!-- BEGIN-RENDER ./utils/utils.js -->
### urlJoin(...args)

Join a base URI and possibly empty path segments
### truthy(val)

Return whether a value should be interpreted as boolean `true`.
### jsonify(obj)

Clone an object by serializing and deserializing to/from JSON
### randomInt(low, int)

A random integer between `low` and `high`
### deansi(str)

Remove ANSI color sequences from `str`.
### verticalConcat(...strs)
### promiseSerial(funcs)

resolves Promises sequentially.
https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
### shortenOutput(data, max=10)

Shorten `data` to a maximum of `max` characters.
### parseURL(...args)
### lastUrlSegment(url, removeTrailing=false)

Returns the last segment of a URL
### randomString({prefix='', template='', length=-1})
Generate a URL-friendly random string.
Template must have at least 3 `X` in a row

<!-- END-RENDER -->

## `@kba/node-utils`

All methods from [`@kba/utils`](#kbautils) and in addition:

<!-- BEGIN-RENDER ./node-utils/node-utils.js -->
### inspect(obj)

### inspect.log(obj)

### relativizeFile(relPath, absPath

### mkdir(dir, opts)

Recursively create `dir`.

@return promise
### rmdir(dir, opts)

Recursively remove `dir`.

@return promise
### uploadFile({filepath, endpoint, metadata})
### FormData
[form-data](https://github.com/form-data/form-data)
### fetch(...args)
[fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill)

<!-- END-RENDER -->
