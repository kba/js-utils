(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})((typeof window !== 'undefined' ? window : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./utils.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isMergeableObject = function isMergeableObject(value) {\n  return isNonNullObject(value) && !isSpecial(value);\n};\n\nfunction isNonNullObject(value) {\n  return !!value && typeof value === 'object';\n}\n\nfunction isSpecial(value) {\n  var stringValue = Object.prototype.toString.call(value);\n  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);\n} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25\n\n\nvar canUseSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;\n\nfunction isReactElement(value) {\n  return value.$$typeof === REACT_ELEMENT_TYPE;\n}\n\nfunction emptyTarget(val) {\n  return Array.isArray(val) ? [] : {};\n}\n\nfunction cloneUnlessOtherwiseSpecified(value, options) {\n  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;\n}\n\nfunction defaultArrayMerge(target, source, options) {\n  return target.concat(source).map(function (element) {\n    return cloneUnlessOtherwiseSpecified(element, options);\n  });\n}\n\nfunction mergeObject(target, source, options) {\n  var destination = {};\n\n  if (options.isMergeableObject(target)) {\n    Object.keys(target).forEach(function (key) {\n      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);\n    });\n  }\n\n  Object.keys(source).forEach(function (key) {\n    if (!options.isMergeableObject(source[key]) || !target[key]) {\n      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);\n    } else {\n      destination[key] = deepmerge(target[key], source[key], options);\n    }\n  });\n  return destination;\n}\n\nfunction deepmerge(target, source, options) {\n  options = options || {};\n  options.arrayMerge = options.arrayMerge || defaultArrayMerge;\n  options.isMergeableObject = options.isMergeableObject || isMergeableObject;\n  var sourceIsArray = Array.isArray(source);\n  var targetIsArray = Array.isArray(target);\n  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;\n\n  if (!sourceAndTargetTypesMatch) {\n    return cloneUnlessOtherwiseSpecified(source, options);\n  } else if (sourceIsArray) {\n    return options.arrayMerge(target, source, options);\n  } else {\n    return mergeObject(target, source, options);\n  }\n}\n\ndeepmerge.all = function deepmergeAll(array, options) {\n  if (!Array.isArray(array)) {\n    throw new Error('first argument should be an array');\n  }\n\n  return array.reduce(function (prev, next) {\n    return deepmerge(prev, next, options);\n  }, {});\n};\n\nvar deepmerge_1 = deepmerge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (deepmerge_1);\n\n//# sourceURL=webpack://utils/./node_modules/deepmerge/dist/es.js?");

/***/ }),

/***/ "./node_modules/nanoid/format.js":
/*!***************************************!*\
  !*** ./node_modules/nanoid/format.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Secure random string generator with custom alphabet.\n *\n * Alphabet must contain 256 symbols or less. Otherwise, the generator\n * will not be secure.\n *\n * @param {generator} random The random bytes generator.\n * @param {string} alphabet Symbols to be used in new random string.\n * @param {size} size The number of symbols in new random string.\n *\n * @return {string} Random string.\n *\n * @example\n * const format = require('nanoid/format')\n *\n * function random (size) {\n *   const result = []\n *   for (let i = 0; i < size; i++) {\n *     result.push(randomByte())\n *   }\n *   return result\n * }\n *\n * format(random, \"abcdef\", 5) //=> \"fbaef\"\n *\n * @name format\n * @function\n */\nmodule.exports = function (random, alphabet, size) {\n  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;\n  var step = Math.ceil(1.6 * mask * size / alphabet.length);\n  var id = '';\n\n  while (true) {\n    var bytes = random(step);\n\n    for (var i = 0; i < step; i++) {\n      var byte = bytes[i] & mask;\n\n      if (alphabet[byte]) {\n        id += alphabet[byte];\n        if (id.length === size) return id;\n      }\n    }\n  }\n};\n/**\n * @callback generator\n * @param {number} bytes The number of bytes to generate.\n * @return {number[]} Random bytes.\n */\n\n//# sourceURL=webpack://utils/./node_modules/nanoid/format.js?");

/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty,\n    undef;\n/**\n * Decode a URI encoded string.\n *\n * @param {String} input The URI encoded string.\n * @returns {String} The decoded string.\n * @api private\n */\n\nfunction decode(input) {\n  return decodeURIComponent(input.replace(/\\+/g, ' '));\n}\n/**\n * Simple query string parser.\n *\n * @param {String} query The query string that needs to be parsed.\n * @returns {Object}\n * @api public\n */\n\n\nfunction querystring(query) {\n  var parser = /([^=?&]+)=?([^&]*)/g,\n      result = {},\n      part;\n\n  while (part = parser.exec(query)) {\n    var key = decode(part[1]),\n        value = decode(part[2]); //\n    // Prevent overriding of existing properties. This ensures that build-in\n    // methods like `toString` or __proto__ are not overriden by malicious\n    // querystrings.\n    //\n\n    if (key in result) continue;\n    result[key] = value;\n  }\n\n  return result;\n}\n/**\n * Transform a query string to an object.\n *\n * @param {Object} obj Object that should be transformed.\n * @param {String} prefix Optional prefix.\n * @returns {String}\n * @api public\n */\n\n\nfunction querystringify(obj, prefix) {\n  prefix = prefix || '';\n  var pairs = [],\n      value,\n      key; //\n  // Optionally prefix with a '?' if needed\n  //\n\n  if ('string' !== typeof prefix) prefix = '?';\n\n  for (key in obj) {\n    if (has.call(obj, key)) {\n      value = obj[key]; //\n      // Edge cases where we actually want to encode the value to an empty\n      // string instead of the stringified value.\n      //\n\n      if (!value && (value === null || value === undef || isNaN(value))) {\n        value = '';\n      }\n\n      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));\n    }\n  }\n\n  return pairs.length ? prefix + pairs.join('&') : '';\n} //\n// Expose the module.\n//\n\n\nexports.stringify = querystringify;\nexports.parse = querystring;\n\n//# sourceURL=webpack://utils/./node_modules/querystringify/index.js?");

/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Check if we're required to add a port number.\n *\n * @see https://url.spec.whatwg.org/#default-port\n * @param {Number|String} port Port number we need to check\n * @param {String} protocol Protocol we need to check against.\n * @returns {Boolean} Is it a default port for the given protocol\n * @api private\n */\n\nmodule.exports = function required(port, protocol) {\n  protocol = protocol.split(':')[0];\n  port = +port;\n  if (!port) return false;\n\n  switch (protocol) {\n    case 'http':\n    case 'ws':\n      return port !== 80;\n\n    case 'https':\n    case 'wss':\n      return port !== 443;\n\n    case 'ftp':\n      return port !== 21;\n\n    case 'gopher':\n      return port !== 70;\n\n    case 'file':\n      return false;\n  }\n\n  return port !== 0;\n};\n\n//# sourceURL=webpack://utils/./node_modules/requires-port/index.js?");

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/shortid/lib/index.js\");\n\n//# sourceURL=webpack://utils/./node_modules/shortid/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ \"./node_modules/shortid/lib/random/random-from-seed.js\");\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\nvar shuffled;\n\nfunction reset() {\n  shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n  if (!_alphabet_) {\n    if (alphabet !== ORIGINAL) {\n      alphabet = ORIGINAL;\n      reset();\n    }\n\n    return;\n  }\n\n  if (_alphabet_ === alphabet) {\n    return;\n  }\n\n  if (_alphabet_.length !== ORIGINAL.length) {\n    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n  }\n\n  var unique = _alphabet_.split('').filter(function (item, ind, arr) {\n    return ind !== arr.lastIndexOf(item);\n  });\n\n  if (unique.length) {\n    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n  }\n\n  alphabet = _alphabet_;\n  reset();\n}\n\nfunction characters(_alphabet_) {\n  setCharacters(_alphabet_);\n  return alphabet;\n}\n\nfunction setSeed(seed) {\n  randomFromSeed.seed(seed);\n\n  if (previousSeed !== seed) {\n    reset();\n    previousSeed = seed;\n  }\n}\n\nfunction shuffle() {\n  if (!alphabet) {\n    setCharacters(ORIGINAL);\n  }\n\n  var sourceArray = alphabet.split('');\n  var targetArray = [];\n  var r = randomFromSeed.nextValue();\n  var characterIndex;\n\n  while (sourceArray.length > 0) {\n    r = randomFromSeed.nextValue();\n    characterIndex = Math.floor(r * sourceArray.length);\n    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n  }\n\n  return targetArray.join('');\n}\n\nfunction getShuffled() {\n  if (shuffled) {\n    return shuffled;\n  }\n\n  shuffled = shuffle();\n  return shuffled;\n}\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\n\n\nfunction lookup(index) {\n  var alphabetShuffled = getShuffled();\n  return alphabetShuffled[index];\n}\n\nfunction get() {\n  return alphabet || ORIGINAL;\n}\n\nmodule.exports = {\n  get: get,\n  characters: characters,\n  seed: setSeed,\n  lookup: lookup,\n  shuffled: getShuffled\n};\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/alphabet.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar generate = __webpack_require__(/*! ./generate */ \"./node_modules/shortid/lib/generate.js\");\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\"); // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\n\n\nvar REDUCE_TIME = 1459707606518; // don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\n\nvar version = 6; // Counter is used when shortid is called multiple times in one second.\n\nvar counter; // Remember the last time shortid was called in case counter is needed.\n\nvar previousSeconds;\n/**\n * Generate unique id\n * Returns string id\n */\n\nfunction build(clusterWorkerId) {\n  var str = '';\n  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n  if (seconds === previousSeconds) {\n    counter++;\n  } else {\n    counter = 0;\n    previousSeconds = seconds;\n  }\n\n  str = str + generate(version);\n  str = str + generate(clusterWorkerId);\n\n  if (counter > 0) {\n    str = str + generate(counter);\n  }\n\n  str = str + generate(seconds);\n  return str;\n}\n\nmodule.exports = build;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/build.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nvar random = __webpack_require__(/*! ./random/random-byte */ \"./node_modules/shortid/lib/random/random-byte-browser.js\");\n\nvar format = __webpack_require__(/*! nanoid/format */ \"./node_modules/nanoid/format.js\");\n\nfunction generate(number) {\n  var loopCounter = 0;\n  var done;\n  var str = '';\n\n  while (!done) {\n    str = str + format(random, alphabet.get(), 1);\n    done = number < Math.pow(16, loopCounter + 1);\n    loopCounter++;\n  }\n\n  return str;\n}\n\nmodule.exports = generate;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/generate.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nvar build = __webpack_require__(/*! ./build */ \"./node_modules/shortid/lib/build.js\");\n\nvar isValid = __webpack_require__(/*! ./is-valid */ \"./node_modules/shortid/lib/is-valid.js\"); // if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\n\n\nvar clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ \"./node_modules/shortid/lib/util/cluster-worker-id-browser.js\") || 0;\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\n\nfunction seed(seedValue) {\n  alphabet.seed(seedValue);\n  return module.exports;\n}\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\n\n\nfunction worker(workerId) {\n  clusterWorkerId = workerId;\n  return module.exports;\n}\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\n\n\nfunction characters(newCharacters) {\n  if (newCharacters !== undefined) {\n    alphabet.characters(newCharacters);\n  }\n\n  return alphabet.shuffled();\n}\n/**\n * Generate unique id\n * Returns string id\n */\n\n\nfunction generate() {\n  return build(clusterWorkerId);\n} // Export all other functions as properties of the generate function\n\n\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.isValid = isValid;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/index.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet = __webpack_require__(/*! ./alphabet */ \"./node_modules/shortid/lib/alphabet.js\");\n\nfunction isShortId(id) {\n  if (!id || typeof id !== 'string' || id.length < 6) {\n    return false;\n  }\n\n  var nonAlphabetic = new RegExp('[^' + alphabet.get().replace(/[|\\\\{}()[\\]^$+*?.-]/g, '\\\\$&') + ']');\n  return !nonAlphabetic.test(id);\n}\n\nmodule.exports = isShortId;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/is-valid.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto\n\nvar randomByte;\n\nif (!crypto || !crypto.getRandomValues) {\n  randomByte = function (size) {\n    var bytes = [];\n\n    for (var i = 0; i < size; i++) {\n      bytes.push(Math.floor(Math.random() * 256));\n    }\n\n    return bytes;\n  };\n} else {\n  randomByte = function (size) {\n    return crypto.getRandomValues(new Uint8Array(size));\n  };\n}\n\nmodule.exports = randomByte;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/random/random-byte-browser.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\n\nfunction getNextValue() {\n  seed = (seed * 9301 + 49297) % 233280;\n  return seed / 233280.0;\n}\n\nfunction setSeed(_seed_) {\n  seed = _seed_;\n}\n\nmodule.exports = {\n  nextValue: getNextValue,\n  seed: setSeed\n};\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/random/random-from-seed.js?");

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = 0;\n\n//# sourceURL=webpack://utils/./node_modules/shortid/lib/util/cluster-worker-id-browser.js?");

/***/ }),

/***/ "./node_modules/traverse/index.js":
/*!****************************************!*\
  !*** ./node_modules/traverse/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var traverse = module.exports = function (obj) {\n  return new Traverse(obj);\n};\n\nfunction Traverse(obj) {\n  this.value = obj;\n}\n\nTraverse.prototype.get = function (ps) {\n  var node = this.value;\n\n  for (var i = 0; i < ps.length; i++) {\n    var key = ps[i];\n\n    if (!node || !hasOwnProperty.call(node, key)) {\n      node = undefined;\n      break;\n    }\n\n    node = node[key];\n  }\n\n  return node;\n};\n\nTraverse.prototype.has = function (ps) {\n  var node = this.value;\n\n  for (var i = 0; i < ps.length; i++) {\n    var key = ps[i];\n\n    if (!node || !hasOwnProperty.call(node, key)) {\n      return false;\n    }\n\n    node = node[key];\n  }\n\n  return true;\n};\n\nTraverse.prototype.set = function (ps, value) {\n  var node = this.value;\n\n  for (var i = 0; i < ps.length - 1; i++) {\n    var key = ps[i];\n    if (!hasOwnProperty.call(node, key)) node[key] = {};\n    node = node[key];\n  }\n\n  node[ps[i]] = value;\n  return value;\n};\n\nTraverse.prototype.map = function (cb) {\n  return walk(this.value, cb, true);\n};\n\nTraverse.prototype.forEach = function (cb) {\n  this.value = walk(this.value, cb, false);\n  return this.value;\n};\n\nTraverse.prototype.reduce = function (cb, init) {\n  var skip = arguments.length === 1;\n  var acc = skip ? this.value : init;\n  this.forEach(function (x) {\n    if (!this.isRoot || !skip) {\n      acc = cb.call(this, acc, x);\n    }\n  });\n  return acc;\n};\n\nTraverse.prototype.paths = function () {\n  var acc = [];\n  this.forEach(function (x) {\n    acc.push(this.path);\n  });\n  return acc;\n};\n\nTraverse.prototype.nodes = function () {\n  var acc = [];\n  this.forEach(function (x) {\n    acc.push(this.node);\n  });\n  return acc;\n};\n\nTraverse.prototype.clone = function () {\n  var parents = [],\n      nodes = [];\n  return function clone(src) {\n    for (var i = 0; i < parents.length; i++) {\n      if (parents[i] === src) {\n        return nodes[i];\n      }\n    }\n\n    if (typeof src === 'object' && src !== null) {\n      var dst = copy(src);\n      parents.push(src);\n      nodes.push(dst);\n      forEach(objectKeys(src), function (key) {\n        dst[key] = clone(src[key]);\n      });\n      parents.pop();\n      nodes.pop();\n      return dst;\n    } else {\n      return src;\n    }\n  }(this.value);\n};\n\nfunction walk(root, cb, immutable) {\n  var path = [];\n  var parents = [];\n  var alive = true;\n  return function walker(node_) {\n    var node = immutable ? copy(node_) : node_;\n    var modifiers = {};\n    var keepGoing = true;\n    var state = {\n      node: node,\n      node_: node_,\n      path: [].concat(path),\n      parent: parents[parents.length - 1],\n      parents: parents,\n      key: path.slice(-1)[0],\n      isRoot: path.length === 0,\n      level: path.length,\n      circular: null,\n      update: function (x, stopHere) {\n        if (!state.isRoot) {\n          state.parent.node[state.key] = x;\n        }\n\n        state.node = x;\n        if (stopHere) keepGoing = false;\n      },\n      'delete': function (stopHere) {\n        delete state.parent.node[state.key];\n        if (stopHere) keepGoing = false;\n      },\n      remove: function (stopHere) {\n        if (isArray(state.parent.node)) {\n          state.parent.node.splice(state.key, 1);\n        } else {\n          delete state.parent.node[state.key];\n        }\n\n        if (stopHere) keepGoing = false;\n      },\n      keys: null,\n      before: function (f) {\n        modifiers.before = f;\n      },\n      after: function (f) {\n        modifiers.after = f;\n      },\n      pre: function (f) {\n        modifiers.pre = f;\n      },\n      post: function (f) {\n        modifiers.post = f;\n      },\n      stop: function () {\n        alive = false;\n      },\n      block: function () {\n        keepGoing = false;\n      }\n    };\n    if (!alive) return state;\n\n    function updateState() {\n      if (typeof state.node === 'object' && state.node !== null) {\n        if (!state.keys || state.node_ !== state.node) {\n          state.keys = objectKeys(state.node);\n        }\n\n        state.isLeaf = state.keys.length == 0;\n\n        for (var i = 0; i < parents.length; i++) {\n          if (parents[i].node_ === node_) {\n            state.circular = parents[i];\n            break;\n          }\n        }\n      } else {\n        state.isLeaf = true;\n        state.keys = null;\n      }\n\n      state.notLeaf = !state.isLeaf;\n      state.notRoot = !state.isRoot;\n    }\n\n    updateState(); // use return values to update if defined\n\n    var ret = cb.call(state, state.node);\n    if (ret !== undefined && state.update) state.update(ret);\n    if (modifiers.before) modifiers.before.call(state, state.node);\n    if (!keepGoing) return state;\n\n    if (typeof state.node == 'object' && state.node !== null && !state.circular) {\n      parents.push(state);\n      updateState();\n      forEach(state.keys, function (key, i) {\n        path.push(key);\n        if (modifiers.pre) modifiers.pre.call(state, state.node[key], key);\n        var child = walker(state.node[key]);\n\n        if (immutable && hasOwnProperty.call(state.node, key)) {\n          state.node[key] = child.node;\n        }\n\n        child.isLast = i == state.keys.length - 1;\n        child.isFirst = i == 0;\n        if (modifiers.post) modifiers.post.call(state, child);\n        path.pop();\n      });\n      parents.pop();\n    }\n\n    if (modifiers.after) modifiers.after.call(state, state.node);\n    return state;\n  }(root).node;\n}\n\nfunction copy(src) {\n  if (typeof src === 'object' && src !== null) {\n    var dst;\n\n    if (isArray(src)) {\n      dst = [];\n    } else if (isDate(src)) {\n      dst = new Date(src.getTime ? src.getTime() : src);\n    } else if (isRegExp(src)) {\n      dst = new RegExp(src);\n    } else if (isError(src)) {\n      dst = {\n        message: src.message\n      };\n    } else if (isBoolean(src)) {\n      dst = new Boolean(src);\n    } else if (isNumber(src)) {\n      dst = new Number(src);\n    } else if (isString(src)) {\n      dst = new String(src);\n    } else if (Object.create && Object.getPrototypeOf) {\n      dst = Object.create(Object.getPrototypeOf(src));\n    } else if (src.constructor === Object) {\n      dst = {};\n    } else {\n      var proto = src.constructor && src.constructor.prototype || src.__proto__ || {};\n\n      var T = function () {};\n\n      T.prototype = proto;\n      dst = new T();\n    }\n\n    forEach(objectKeys(src), function (key) {\n      dst[key] = src[key];\n    });\n    return dst;\n  } else return src;\n}\n\nvar objectKeys = Object.keys || function keys(obj) {\n  var res = [];\n\n  for (var key in obj) res.push(key);\n\n  return res;\n};\n\nfunction toS(obj) {\n  return Object.prototype.toString.call(obj);\n}\n\nfunction isDate(obj) {\n  return toS(obj) === '[object Date]';\n}\n\nfunction isRegExp(obj) {\n  return toS(obj) === '[object RegExp]';\n}\n\nfunction isError(obj) {\n  return toS(obj) === '[object Error]';\n}\n\nfunction isBoolean(obj) {\n  return toS(obj) === '[object Boolean]';\n}\n\nfunction isNumber(obj) {\n  return toS(obj) === '[object Number]';\n}\n\nfunction isString(obj) {\n  return toS(obj) === '[object String]';\n}\n\nvar isArray = Array.isArray || function isArray(xs) {\n  return Object.prototype.toString.call(xs) === '[object Array]';\n};\n\nvar forEach = function (xs, fn) {\n  if (xs.forEach) return xs.forEach(fn);else for (var i = 0; i < xs.length; i++) {\n    fn(xs[i], i, xs);\n  }\n};\n\nforEach(objectKeys(Traverse.prototype), function (key) {\n  traverse[key] = function (obj) {\n    var args = [].slice.call(arguments, 1);\n    var t = new Traverse(obj);\n    return t[key].apply(t, args);\n  };\n});\n\nvar hasOwnProperty = Object.hasOwnProperty || function (obj, key) {\n  return key in obj;\n};\n\n//# sourceURL=webpack://utils/./node_modules/traverse/index.js?");

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar required = __webpack_require__(/*! requires-port */ \"./node_modules/requires-port/index.js\"),\n    qs = __webpack_require__(/*! querystringify */ \"./node_modules/querystringify/index.js\"),\n    protocolre = /^([a-z][a-z0-9.+-]*:)?(\\/\\/)?([\\S\\s]*)/i,\n    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\\/\\//;\n/**\n * These are the parse rules for the URL parser, it informs the parser\n * about:\n *\n * 0. The char it Needs to parse, if it's a string it should be done using\n *    indexOf, RegExp using exec and NaN means set as current value.\n * 1. The property we should set when parsing this value.\n * 2. Indication if it's backwards or forward parsing, when set as number it's\n *    the value of extra chars that should be split off.\n * 3. Inherit from location if non existing in the parser.\n * 4. `toLowerCase` the resulting value.\n */\n\n\nvar rules = [['#', 'hash'], // Extract from the back.\n['?', 'query'], // Extract from the back.\nfunction sanitize(address) {\n  // Sanitize what is left of the address\n  return address.replace('\\\\', '/');\n}, ['/', 'pathname'], // Extract from the back.\n['@', 'auth', 1], // Extract from the front.\n[NaN, 'host', undefined, 1, 1], // Set left over value.\n[/:(\\d+)$/, 'port', undefined, 1], // RegExp the back.\n[NaN, 'hostname', undefined, 1, 1] // Set left over.\n];\n/**\n * These properties should not be copied or inherited from. This is only needed\n * for all non blob URL's as a blob URL does not include a hash, only the\n * origin.\n *\n * @type {Object}\n * @private\n */\n\nvar ignore = {\n  hash: 1,\n  query: 1\n};\n/**\n * The location object differs when your code is loaded through a normal page,\n * Worker or through a worker using a blob. And with the blobble begins the\n * trouble as the location object will contain the URL of the blob, not the\n * location of the page where our code is loaded in. The actual origin is\n * encoded in the `pathname` so we can thankfully generate a good \"default\"\n * location from it so we can generate proper relative URL's again.\n *\n * @param {Object|String} loc Optional default location object.\n * @returns {Object} lolcation object.\n * @public\n */\n\nfunction lolcation(loc) {\n  var globalVar;\n  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};\n  var location = globalVar.location || {};\n  loc = loc || location;\n  var finaldestination = {},\n      type = typeof loc,\n      key;\n\n  if ('blob:' === loc.protocol) {\n    finaldestination = new Url(unescape(loc.pathname), {});\n  } else if ('string' === type) {\n    finaldestination = new Url(loc, {});\n\n    for (key in ignore) delete finaldestination[key];\n  } else if ('object' === type) {\n    for (key in loc) {\n      if (key in ignore) continue;\n      finaldestination[key] = loc[key];\n    }\n\n    if (finaldestination.slashes === undefined) {\n      finaldestination.slashes = slashes.test(loc.href);\n    }\n  }\n\n  return finaldestination;\n}\n/**\n * @typedef ProtocolExtract\n * @type Object\n * @property {String} protocol Protocol matched in the URL, in lowercase.\n * @property {Boolean} slashes `true` if protocol is followed by \"//\", else `false`.\n * @property {String} rest Rest of the URL that is not part of the protocol.\n */\n\n/**\n * Extract protocol information from a URL with/without double slash (\"//\").\n *\n * @param {String} address URL we want to extract from.\n * @return {ProtocolExtract} Extracted information.\n * @private\n */\n\n\nfunction extractProtocol(address) {\n  var match = protocolre.exec(address);\n  return {\n    protocol: match[1] ? match[1].toLowerCase() : '',\n    slashes: !!match[2],\n    rest: match[3]\n  };\n}\n/**\n * Resolve a relative URL pathname against a base URL pathname.\n *\n * @param {String} relative Pathname of the relative URL.\n * @param {String} base Pathname of the base URL.\n * @return {String} Resolved pathname.\n * @private\n */\n\n\nfunction resolve(relative, base) {\n  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),\n      i = path.length,\n      last = path[i - 1],\n      unshift = false,\n      up = 0;\n\n  while (i--) {\n    if (path[i] === '.') {\n      path.splice(i, 1);\n    } else if (path[i] === '..') {\n      path.splice(i, 1);\n      up++;\n    } else if (up) {\n      if (i === 0) unshift = true;\n      path.splice(i, 1);\n      up--;\n    }\n  }\n\n  if (unshift) path.unshift('');\n  if (last === '.' || last === '..') path.push('');\n  return path.join('/');\n}\n/**\n * The actual URL instance. Instead of returning an object we've opted-in to\n * create an actual constructor as it's much more memory efficient and\n * faster and it pleases my OCD.\n *\n * It is worth noting that we should not use `URL` as class name to prevent\n * clashes with the global URL instance that got introduced in browsers.\n *\n * @constructor\n * @param {String} address URL we want to parse.\n * @param {Object|String} [location] Location defaults for relative paths.\n * @param {Boolean|Function} [parser] Parser for the query string.\n * @private\n */\n\n\nfunction Url(address, location, parser) {\n  if (!(this instanceof Url)) {\n    return new Url(address, location, parser);\n  }\n\n  var relative,\n      extracted,\n      parse,\n      instruction,\n      index,\n      key,\n      instructions = rules.slice(),\n      type = typeof location,\n      url = this,\n      i = 0; //\n  // The following if statements allows this module two have compatibility with\n  // 2 different API:\n  //\n  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments\n  //    where the boolean indicates that the query string should also be parsed.\n  //\n  // 2. The `URL` interface of the browser which accepts a URL, object as\n  //    arguments. The supplied object will be used as default values / fall-back\n  //    for relative paths.\n  //\n\n  if ('object' !== type && 'string' !== type) {\n    parser = location;\n    location = null;\n  }\n\n  if (parser && 'function' !== typeof parser) parser = qs.parse;\n  location = lolcation(location); //\n  // Extract protocol information before running the instructions.\n  //\n\n  extracted = extractProtocol(address || '');\n  relative = !extracted.protocol && !extracted.slashes;\n  url.slashes = extracted.slashes || relative && location.slashes;\n  url.protocol = extracted.protocol || location.protocol || '';\n  address = extracted.rest; //\n  // When the authority component is absent the URL starts with a path\n  // component.\n  //\n\n  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];\n\n  for (; i < instructions.length; i++) {\n    instruction = instructions[i];\n\n    if (typeof instruction === 'function') {\n      address = instruction(address);\n      continue;\n    }\n\n    parse = instruction[0];\n    key = instruction[1];\n\n    if (parse !== parse) {\n      url[key] = address;\n    } else if ('string' === typeof parse) {\n      if (~(index = address.indexOf(parse))) {\n        if ('number' === typeof instruction[2]) {\n          url[key] = address.slice(0, index);\n          address = address.slice(index + instruction[2]);\n        } else {\n          url[key] = address.slice(index);\n          address = address.slice(0, index);\n        }\n      }\n    } else if (index = parse.exec(address)) {\n      url[key] = index[1];\n      address = address.slice(0, index.index);\n    }\n\n    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //\n    // Hostname, host and protocol should be lowercased so they can be used to\n    // create a proper `origin`.\n    //\n\n    if (instruction[4]) url[key] = url[key].toLowerCase();\n  } //\n  // Also parse the supplied query string in to an object. If we're supplied\n  // with a custom parser as function use that instead of the default build-in\n  // parser.\n  //\n\n\n  if (parser) url.query = parser(url.query); //\n  // If the URL is relative, resolve the pathname against the base URL.\n  //\n\n  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {\n    url.pathname = resolve(url.pathname, location.pathname);\n  } //\n  // We should not add port numbers if they are already the default port number\n  // for a given protocol. As the host also contains the port number we're going\n  // override it with the hostname which contains no port number.\n  //\n\n\n  if (!required(url.port, url.protocol)) {\n    url.host = url.hostname;\n    url.port = '';\n  } //\n  // Parse down the `auth` for the username and password.\n  //\n\n\n  url.username = url.password = '';\n\n  if (url.auth) {\n    instruction = url.auth.split(':');\n    url.username = instruction[0] || '';\n    url.password = instruction[1] || '';\n  }\n\n  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //\n  // The href is just the compiled result.\n  //\n\n  url.href = url.toString();\n}\n/**\n * This is convenience method for changing properties in the URL instance to\n * insure that they all propagate correctly.\n *\n * @param {String} part          Property we need to adjust.\n * @param {Mixed} value          The newly assigned value.\n * @param {Boolean|Function} fn  When setting the query, it will be the function\n *                               used to parse the query.\n *                               When setting the protocol, double slash will be\n *                               removed from the final url if it is true.\n * @returns {URL} URL instance for chaining.\n * @public\n */\n\n\nfunction set(part, value, fn) {\n  var url = this;\n\n  switch (part) {\n    case 'query':\n      if ('string' === typeof value && value.length) {\n        value = (fn || qs.parse)(value);\n      }\n\n      url[part] = value;\n      break;\n\n    case 'port':\n      url[part] = value;\n\n      if (!required(value, url.protocol)) {\n        url.host = url.hostname;\n        url[part] = '';\n      } else if (value) {\n        url.host = url.hostname + ':' + value;\n      }\n\n      break;\n\n    case 'hostname':\n      url[part] = value;\n      if (url.port) value += ':' + url.port;\n      url.host = value;\n      break;\n\n    case 'host':\n      url[part] = value;\n\n      if (/:\\d+$/.test(value)) {\n        value = value.split(':');\n        url.port = value.pop();\n        url.hostname = value.join(':');\n      } else {\n        url.hostname = value;\n        url.port = '';\n      }\n\n      break;\n\n    case 'protocol':\n      url.protocol = value.toLowerCase();\n      url.slashes = !fn;\n      break;\n\n    case 'pathname':\n    case 'hash':\n      if (value) {\n        var char = part === 'pathname' ? '/' : '#';\n        url[part] = value.charAt(0) !== char ? char + value : value;\n      } else {\n        url[part] = value;\n      }\n\n      break;\n\n    default:\n      url[part] = value;\n  }\n\n  for (var i = 0; i < rules.length; i++) {\n    var ins = rules[i];\n    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();\n  }\n\n  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';\n  url.href = url.toString();\n  return url;\n}\n/**\n * Transform the properties back in to a valid and full URL string.\n *\n * @param {Function} stringify Optional query stringify function.\n * @returns {String} Compiled version of the URL.\n * @public\n */\n\n\nfunction toString(stringify) {\n  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;\n  var query,\n      url = this,\n      protocol = url.protocol;\n  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';\n  var result = protocol + (url.slashes ? '//' : '');\n\n  if (url.username) {\n    result += url.username;\n    if (url.password) result += ':' + url.password;\n    result += '@';\n  }\n\n  result += url.host + url.pathname;\n  query = 'object' === typeof url.query ? stringify(url.query) : url.query;\n  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;\n  if (url.hash) result += url.hash;\n  return result;\n}\n\nUrl.prototype = {\n  set: set,\n  toString: toString\n}; //\n// Expose the URL parser and some additional properties that might be useful for\n// others or testing.\n//\n\nUrl.extractProtocol = extractProtocol;\nUrl.location = lolcation;\nUrl.qs = qs;\nmodule.exports = Url;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://utils/./node_modules/url-parse/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack://utils/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const URL = __webpack_require__(/*! url-parse */ \"./node_modules/url-parse/index.js\");\n\nconst traverse = __webpack_require__(/*! traverse */ \"./node_modules/traverse/index.js\");\n\nconst deepmerge = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/es.js\").default;\n\nconst shortid = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n\nmodule.exports = {\n  deansi,\n  jsonify,\n  lastUrlSegment,\n  parseUrl,\n  promiseSerial,\n  randomInt,\n  shortenOutput,\n  truthy,\n  urlJoin,\n  verticalConcat,\n  randomString,\n  uniq,\n  traverse,\n  deepmerge,\n  idiomaticFetch,\n  splitOnce,\n  promisify,\n  splitArray,\n  ensureArray\n  /**\n   * ### urlJoin(...args)\n   * \n   * Join a base URI and possibly empty path segments\n   */\n\n};\n\nfunction urlJoin(...args) {\n  return args.join('/').replace(/\\/\\/+/g, '/').replace(/\\/+$/, '').replace(':/', '://');\n}\n/**\n * ### truthy(val)\n * \n * Return whether a value should be interpreted as boolean `true`.\n */\n\n\nfunction truthy(val) {\n  return val === true || val === 1 || val === 'true' || val === '1';\n}\n/**\n * ### jsonify(obj)\n * \n * Clone an object by serializing and deserializing to/from JSON\n */\n\n\nfunction jsonify(obj = {}) {\n  return JSON.parse(JSON.stringify(obj));\n}\n/**\n * ### randomInt(low, int)\n * \n * A random integer between `low` and `high`\n */\n\n\nfunction randomInt(low, high) {\n  return Math.floor(Math.random() * (high - low) + low);\n}\n/**\n * ### deansi(str)\n * \n * Remove ANSI color sequences from `str`.\n */\n\n\nfunction deansi(str) {\n  return str.replace(/\\x1b\\[[^m]+m/g, '');\n}\n/**\n * ### verticalConcat(...strs)\n */\n\n\nfunction verticalConcat(...strs) {\n  // console.log(\"Vertically concatenating\", strs)\n  const lineses = strs.map(str => str.split('\\n'));\n  const ret = [...lineses.shift()];\n  lineses.map(lines => {\n    lines.map((line, i) => {\n      ret[i] += line;\n    });\n  });\n  return ret.join('\\n');\n}\n/**\n * ### promisify(callback)\n */\n\n\nfunction promisify(cb) {\n  return (...args) => {\n    return new Promise((resolve, reject) => {\n      return cb(...args, (err, ...retargs) => {\n        return err ? reject(err) : resolve(...retargs);\n      });\n    });\n  };\n}\n/**\n * ### splitArray(arr, splitel=';')\n *\n * Split an array into sub-arrays delimited by element splitel\n */\n\n\nfunction splitArray(arr, splitel = ';') {\n  const ret = [];\n  let cur = [];\n  arr.forEach(el => {\n    if (el === splitel) {\n      ret.push(cur);\n      cur = [];\n    } else {\n      cur.push(el);\n    }\n  });\n  if (cur.length) ret.push(cur);\n  return ret;\n}\n/**\n * ### promiseSerial(funcs)\n * \n * resolves Promises sequentially.\n * https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e\n */\n\n\nfunction promiseSerial(funcs) {\n  return funcs.reduce((promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));\n}\n/**\n * ### shortenOutput(data, max=10)\n * \n * Shorten `data` to a maximum of `max` characters.\n */\n\n\nfunction shortenOutput(data, max = 10) {\n  data = data.toString();\n  let ret = data.substr(0, max);\n  if (data.length > max) ret += '...';\n  return ret;\n}\n/**\n * ### parseURL(...args)\n *\n */\n\n\nfunction parseUrl(...args) {\n  return new URL(...args);\n}\n/**\n * ### lastUrlSegment(url, removeTrailing=false)\n * \n * Returns the last segment of a URL\n */\n\n\nfunction lastUrlSegment(url, removeTrailing = false) {\n  let {\n    pathname\n  } = parseUrl(url);\n  if (removeTrailing) pathname = pathname.replace(/\\/*$/, '');\n  const segments = pathname.split('/');\n  return segments[segments.length - 1];\n}\n/**\n * ### randomString({prefix='', template='', length=-1})\n *\n * Generate a URL-friendly random string.\n *\n * Template must have at least 3 `X` in a row\n *\n */\n\n\nconst xesRe = /(XXX+)/;\nshortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');\n\nfunction randomString({\n  prefix = '',\n  template = '',\n  length = -1\n} = {}) {\n  if (template && template.match(xesRe)) {\n    template.replace(xesRe, (_, xes) => length = xes.length);\n  }\n\n  let id = shortid.generate();\n\n  while (id.length < length) {\n    id += shortid.generate();\n  }\n\n  if (length > -1) id = id.substr(0, length);\n  if (template && template != '') id = template.replace(xesRe, id);\n  if (prefix && prefix != '') id = `${prefix}.${id}`;\n  return id;\n}\n/**\n * ### uniq(arr)\n *\n * Return unique literals in arr.\n */\n\n\nfunction uniq(arr = []) {\n  const ret = [];\n  arr.forEach(v => {\n    if (ret.indexOf(v) === -1) ret.push(v);\n  });\n  return ret;\n}\n/**\n * ### traverse\n *\n * See [substack/js-traverse](https://github.com/substack/js-traverse)\n *\n */\n\n/**\n * ### deepmerge\n *\n * See [KyleAMathews/deepmerge](https://github.com/KyleAMathews/deepmerge)\n */\n\n/**\n * ### idiomaticFetch\n * \n * ```js\n * idiomaticFetch(url, options={}, format='json')\n * idiomaticFetch(url, format='json')\n *\n * // in node\n * const {idiomaticFetch, fetch} = require('@kba/node-utils')\n * Object.assign(idiomaticFetch, {fetch})\n * ```\n *\n */\n\n\nfunction idiomaticFetch(url, options = {}, format = 'json') {\n  const _fetch = idiomaticFetch.fetch || fetch;\n\n  if (typeof options === 'string') [format, options] = [options, {}];\n  return new Promise((resolve, reject) => {\n    _fetch(url, options).then(resp => {\n      if (resp.ok) {\n        resp[format]().then(bodyData => {\n          Object.assign(resp, {\n            bodyData\n          });\n          resolve(resp);\n        });\n      } else {\n        resp.text().then(bodyData => {\n          Object.assign(resp, {\n            bodyData\n          });\n          reject(resp);\n        });\n      }\n    }).catch(reject);\n  });\n}\n/**\n * ### splitOnce(str, sep, rightMost=false)\n *\n * Split `str` at the first occurence of `sep`.\n */\n\n\nfunction splitOnce(str, sep, rightMost = false) {\n  const idx = str[rightMost ? 'lastIndexOf' : 'indexOf'](sep);\n  if (idx > -1) return [str.substr(0, idx), str.substr(idx + 1)];\n  return [str];\n}\n/**\n * ### ensureArray(arg)\n *\n * Ensure that arg is an array or a wrap it in one if it is not.\n */\n\n\nfunction ensureArray(arg) {\n  return Array.isArray(arg) ? arg : [arg];\n}\n\n//# sourceURL=webpack://utils/./utils.js?");

/***/ })

/******/ });
});