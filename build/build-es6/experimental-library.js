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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!****************************!*\
  !*** ./src/core/animal.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\r\n * Created by luisf on 10/05/2017.\r\n */\r\n/**\r\n * Created by luisf on 10/05/2017.\r\n */ class Animal {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    move(meters) {\r\n        console.log(this.name + \" moved \" + meters + \"m.\");\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Animal;\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb3JlL2FuaW1hbC50cz80NWJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGx1aXNmIG9uIDEwLzA1LzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShtZXRlcnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyBcIiBtb3ZlZCBcIiArIG1ldGVycyArIFwibS5cIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9hbmltYWwudHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBRUE7O0FBRkE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* exports provided: Animal, Horse, Snake */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(/*! ./core */ 4);\n/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, \"Animal\", function() { return __WEBPACK_IMPORTED_MODULE_0__core__[\"a\"]; });\n/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, \"Horse\", function() { return __WEBPACK_IMPORTED_MODULE_0__core__[\"b\"]; });\n/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return __WEBPACK_IMPORTED_MODULE_0__core__[\"c\"]; });\n/**\r\n * Created by luisf on 11/05/2017.\r\n */\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGx1aXNmIG9uIDExLzA1LzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* exports provided: default */
/* exports used: default */
/*!***************************!*\
  !*** ./src/core/horse.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_animal__ = __webpack_require__(/*! core/animal */ 0);\n/**\r\n * Created by luisf on 11/05/2017.\r\n */\r\n\r\nclass Horse extends __WEBPACK_IMPORTED_MODULE_0_core_animal__[\"a\" /* default */] {\r\n    constructor(name) {\r\n        super(name);\r\n        this.name = name;\r\n    }\r\n    move() {\r\n        console.log(\"Galloping...\");\r\n        super.move(45);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Horse;\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb3JlL2hvcnNlLnRzPzBjMWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbHVpc2Ygb24gMTEvMDUvMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgQW5pbWFsIGZyb20gJ2NvcmUvYW5pbWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcnNlIGV4dGVuZHMgQW5pbWFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FsbG9waW5nLi4uXCIpO1xyXG4gICAgICAgIHN1cGVyLm1vdmUoNDUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvaG9yc2UudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* exports provided: default */
/* exports used: default */
/*!***************************!*\
  !*** ./src/core/snake.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_animal__ = __webpack_require__(/*! core/animal */ 0);\n/**\r\n * Created by luisf on 11/05/2017.\r\n */\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass Snake extends __WEBPACK_IMPORTED_MODULE_0_core_animal__[\"a\" /* default */] {\r\n    constructor(name) {\r\n        super(name);\r\n        this.name = name;\r\n    }\r\n    move() {\r\n        const dress = () => {\r\n            console.log(\"Dressing....\");\r\n        };\r\n        function sleep(ms = 0) {\r\n            return new Promise(r => setTimeout(r, ms));\r\n        }\r\n        (() => __awaiter(this, void 0, void 0, function* () {\r\n            console.log('before sleeping');\r\n            yield sleep(1000);\r\n            console.log('after sleeping');\r\n        }))();\r\n        dress();\r\n        console.log(\"Slithering...\");\r\n        super.move(5);\r\n    }\r\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Snake;\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb3JlL3NuYWtlLnRzPzJjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbHVpc2Ygb24gMTEvMDUvMjAxNy5cclxuICovXHJcblxyXG5pbXBvcnQgQW5pbWFsIGZyb20gJ2NvcmUvYW5pbWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlIGV4dGVuZHMgQW5pbWFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcmVzc2luZy4uLi5cIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xlZXAobXMgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgbXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgc2xlZXBpbmcnKTtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBzbGVlcGluZycpO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIGRyZXNzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTbGl0aGVyaW5nLi4uXCIpO1xyXG4gICAgICAgIHN1cGVyLm1vdmUoNSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9zbmFrZS50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7QUFFQTs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* exports provided: Animal, Horse, Snake */
/* exports used: Animal, Horse, Snake */
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal__ = __webpack_require__(/*! ./animal */ 0);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return __WEBPACK_IMPORTED_MODULE_0__animal__[\"a\"]; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__horse__ = __webpack_require__(/*! ./horse */ 2);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return __WEBPACK_IMPORTED_MODULE_1__horse__[\"a\"]; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__snake__ = __webpack_require__(/*! ./snake */ 3);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return __WEBPACK_IMPORTED_MODULE_2__snake__[\"a\"]; });\n/**\r\n * Created by luisf on 11/05/2017.\r\n */\r\n\r\n\r\n\r\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb3JlL2luZGV4LmpzP2VmNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbHVpc2Ygb24gMTEvMDUvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuaW1hbCB9IGZyb20gJy4vYW5pbWFsJztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9yc2UgfSBmcm9tICcuL2hvcnNlJztcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU25ha2UgfSBmcm9tICcuL3NuYWtlJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb3JlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** multi index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! index.js */1);


/***/ })
/******/ ]);