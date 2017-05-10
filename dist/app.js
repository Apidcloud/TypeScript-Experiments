var SC =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * Created by luisf on 10/05/2017.\r\n */\n/**\r\n * Created by luisf on 10/05/2017.\r\n */var Animal = exports.Animal = function () {\n    function Animal(name) {\n        _classCallCheck(this, Animal);\n\n        this.name = name;\n    }\n\n    _createClass(Animal, [{\n        key: \"move\",\n        value: function move(meters) {\n            console.log(this.name + \" moved \" + meters + \"m.\");\n        }\n    }]);\n\n    return Animal;\n}();\n\nvar Snake = exports.Snake = function (_Animal) {\n    _inherits(Snake, _Animal);\n\n    function Snake() {\n        _classCallCheck(this, Snake);\n\n        return _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).apply(this, arguments));\n    }\n\n    _createClass(Snake, [{\n        key: \"move\",\n        value: function move() {\n            console.log(\"Slithering...\");\n            _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), \"move\", this).call(this, 5);\n        }\n    }]);\n\n    return Snake;\n}(Animal);\n\nvar Horse = exports.Horse = function (_Animal2) {\n    _inherits(Horse, _Animal2);\n\n    function Horse() {\n        _classCallCheck(this, Horse);\n\n        return _possibleConstructorReturn(this, (Horse.__proto__ || Object.getPrototypeOf(Horse)).apply(this, arguments));\n    }\n\n    _createClass(Horse, [{\n        key: \"move\",\n        value: function move() {\n            console.log(\"Galloping...\");\n            _get(Horse.prototype.__proto__ || Object.getPrototypeOf(Horse.prototype), \"move\", this).call(this, 45);\n        }\n    }]);\n\n    return Horse;\n}(Animal);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/animals.ts\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/animals.ts?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(0);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi animals.ts\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_animals.ts?");

/***/ })
/******/ ]);