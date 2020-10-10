(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/workspaces/get_options.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/workspaces/get_options.ts":
/*!***********************************************!*\
  !*** ./src/actions/workspaces/get_options.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar helper_1 = __webpack_require__(/*! ../../utils/helper */ \"./src/utils/helper.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.ts\");\r\nvar repoResponse = httpGet(helper_1.getUrl(\"workspaces\"), {\r\n    Authorization: 'Basic ' + constants_1.accessToken\r\n});\r\nvar repoApiResponse = helper_1.decodeApiResponse(repoResponse);\r\nvar workspacesResponse = repoApiResponse.response;\r\nvar workspaces = workspacesResponse.values;\r\nvar returnOptions = function () {\r\n    if (!workspaces) {\r\n        return {};\r\n    }\r\n    return JSON.stringify({\r\n        add: workspaces\r\n    });\r\n};\r\nexports.default = returnOptions;\r\n\n\n//# sourceURL=webpack://main/./src/actions/workspaces/get_options.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PACKAGE_NAME = exports.accessToken = exports.apiUrl = void 0;\r\nexports.apiUrl = 'https://api.bitbucket.org/2.0/';\r\nexports.accessToken = \"bWFub2pzaW5naG5lZ2k6MlJoOVBIbWR0clc1RFdkVVhYZ1U=\";\r\nexports.PACKAGE_NAME =  false ? undefined : \"dist\";\r\n\n\n//# sourceURL=webpack://main/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UpdateWithAuth = exports.fetchWithAuth = exports.decodeApiResponse = exports.getUrl = void 0;\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\r\nexports.getUrl = function (endPoint) {\r\n    return constants_1.apiUrl + endPoint;\r\n};\r\nexports.decodeApiResponse = function (result) {\r\n    if (!result.response) {\r\n        return {\r\n            response: {},\r\n            status: result.status,\r\n        };\r\n    }\r\n    return {\r\n        response: JSON.parse(result.response),\r\n        status: result.status,\r\n    };\r\n};\r\nexports.fetchWithAuth = function (endPoint) {\r\n    var apiResponse = httpGet(exports.getUrl(endPoint), {\r\n        Authorization: 'Basic ' + constants_1.accessToken\r\n    });\r\n    var decodedApiResponse = exports.decodeApiResponse(apiResponse);\r\n    var _a = decodedApiResponse.response, response = _a === void 0 ? {} : _a;\r\n    if (response.type === \"error\") {\r\n        throw response.error.message;\r\n    }\r\n    return response.values || null;\r\n};\r\nfunction UpdateWithAuth(endPoint, payload) {\r\n    var apiResponse = httpPost(exports.getUrl(endPoint), JSON.stringify(payload), {\r\n        Authorization: 'Basic ' + constants_1.accessToken,\r\n        \"content-type\": \"application/json\"\r\n    });\r\n    var decodedApiResponse = exports.decodeApiResponse(apiResponse);\r\n    var _a = decodedApiResponse.response, response = _a === void 0 ? {} : _a;\r\n    if (response.type === \"error\") {\r\n        notify(response.error.message, \"error\", 3000);\r\n        throw response.error.message;\r\n    }\r\n    return response.values;\r\n}\r\nexports.UpdateWithAuth = UpdateWithAuth;\r\n\n\n//# sourceURL=webpack://main/./src/utils/helper.ts?");

/***/ })

/******/ });
});