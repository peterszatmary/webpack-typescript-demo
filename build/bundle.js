/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, zooSize_1, zooImpl_1, elephant_1) {
	    "use strict";
	    var zoo = new zooImpl_1.ZooImpl(zooSize_1.ZooSize.BIG);
	    var elephant = new elephant_1.Elephant("Elephant", 20);
	    console.info("Count of animals in zoo = " + zoo.getAnimalCount());
	    console.info(elephant.toString());
	    zoo.addAnimal(elephant);
	    console.info("Count of animals in zoo = " + zoo.getAnimalCount());
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    (function (ZooSize) {
	        ZooSize[ZooSize["SMALL"] = 100] = "SMALL";
	        ZooSize[ZooSize["MEDIUM"] = 2000] = "MEDIUM";
	        ZooSize[ZooSize["BIG"] = 30000] = "BIG";
	    })(exports.ZooSize || (exports.ZooSize = {}));
	    var ZooSize = exports.ZooSize;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ZooImpl = (function () {
	        function ZooImpl(zooSize) {
	            var _this = this;
	            this.zooSize = zooSize;
	            this.addAnimal = function (animal) {
	                if (_this.animalCount >= _this.size) {
	                    console.info("No place for animal.");
	                    return;
	                }
	                _this.animalCount++;
	                console.info("Animal added.");
	            };
	            this.size = zooSize;
	            this.animalCount = 0;
	        }
	        ZooImpl.prototype.getSize = function () {
	            return this.size;
	        };
	        ZooImpl.prototype.getAnimalCount = function () {
	            return this.animalCount;
	        };
	        return ZooImpl;
	    }());
	    exports.ZooImpl = ZooImpl;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, animal_1) {
	    "use strict";
	    var Elephant = (function (_super) {
	        __extends(Elephant, _super);
	        function Elephant(elName, elAge) {
	            var _this = this;
	            _super.call(this);
	            this.toString = function () {
	                return "Elephant = [ " + _this.name + " , " + _this.age + "]";
	            };
	            if (elName != null) {
	                this.name = elName;
	            }
	            if (elAge != null) {
	                this.age = elAge;
	            }
	        }
	        return Elephant;
	    }(animal_1.Animal));
	    exports.Elephant = Elephant;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var Animal = (function () {
	        function Animal() {
	        }
	        return Animal;
	    }());
	    exports.Animal = Animal;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map