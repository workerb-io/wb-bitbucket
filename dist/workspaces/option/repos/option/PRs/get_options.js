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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/workspaces/option/repos/option/PRs/get_options.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/workspaces/option/repos/option/PRs/get_options.ts":
/*!***********************************************************************!*\
  !*** ./src/actions/workspaces/option/repos/option/PRs/get_options.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar helper_1 = __webpack_require__(/*! ../../../../../../utils/helper */ \"./src/utils/helper.ts\");\nvar prs = null;\nvar returnOptions = function () {\n    if (!options.workspaces || !options.repos) {\n        return {};\n    }\n    prs = helper_1.fetchWithAuth(\"repositories/\" + options.workspaces.uuid + \"/\" + options.repos.slug + \"/pullrequests/\");\n    if (!prs) {\n        return {};\n    }\n    return JSON.stringify({\n        add: prs.map(function (pr) { return (__assign(__assign({}, pr), { name: pr.title })); })\n    });\n};\nexports.default = returnOptions;\n\n\n//# sourceURL=webpack://main/./src/actions/workspaces/option/repos/option/PRs/get_options.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PACKAGE_NAME = exports.accessToken = exports.apiUrl = void 0;\nexports.apiUrl = 'https://api.bitbucket.org/2.0/';\nexports.accessToken = \"bWFub2pzaW5naG5lZ2k6MlJoOVBIbWR0clc1RFdkVVhYZ1U=\";\nexports.PACKAGE_NAME =  false ? undefined : \"dist\";\n\n\n//# sourceURL=webpack://main/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createPR = exports.DeleteWithAuth = exports.UpdateWithAuth = exports.fetchWithAuth = exports.decodeApiResponse = exports.getUrl = void 0;\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\nexports.getUrl = function (endPoint) {\n    return constants_1.apiUrl + endPoint;\n};\nexports.decodeApiResponse = function (result) {\n    if (!result.response) {\n        return {\n            response: {},\n            status: result.status,\n        };\n    }\n    return {\n        response: JSON.parse(result.response),\n        status: result.status,\n    };\n};\nexports.fetchWithAuth = function (endPoint) {\n    var apiResponse = httpGet(exports.getUrl(endPoint), {\n        Authorization: 'Basic ' + constants_1.accessToken\n    });\n    var decodedApiResponse = exports.decodeApiResponse(apiResponse);\n    var _a = decodedApiResponse.response, response = _a === void 0 ? {} : _a;\n    if (response.type === \"error\") {\n        throw response.error.message;\n    }\n    return response.values || null;\n};\nfunction UpdateWithAuth(endPoint, payload) {\n    var stringifiedData = payload ? JSON.stringify(payload) : null;\n    var headers = {\n        Authorization: 'Basic ' + constants_1.accessToken\n    };\n    if (stringifiedData) {\n        headers[\"content-type\"] = \"application/json\";\n    }\n    var apiResponse = httpPost(exports.getUrl(endPoint), stringifiedData, headers);\n    var decodedApiResponse = exports.decodeApiResponse(apiResponse);\n    var _a = decodedApiResponse.response, response = _a === void 0 ? {} : _a;\n    if (response.type === \"error\") {\n        notify(response.error.message, \"error\", 3000);\n        throw response.error.message;\n    }\n    return response.values;\n}\nexports.UpdateWithAuth = UpdateWithAuth;\nfunction DeleteWithAuth(endPoint) {\n    var headers = {\n        Authorization: 'Basic ' + constants_1.accessToken\n    };\n    var apiResponse = httpDelete(exports.getUrl(endPoint), null, headers);\n    var decodedApiResponse = exports.decodeApiResponse(apiResponse);\n    var _a = decodedApiResponse.response, response = _a === void 0 ? {} : _a;\n    if (response.type === \"error\") {\n        notify(response.error.message, \"error\", 3000);\n        throw response.error.message;\n    }\n    return response;\n}\nexports.DeleteWithAuth = DeleteWithAuth;\nfunction createPR(source, destination) {\n    var title = prompt(\"PR title\");\n    var payload = {\n        title: title,\n        \"source\": {\n            \"branch\": {\n                \"name\": source\n            }\n        },\n        \"destination\": {\n            \"branch\": {\n                \"name\": destination\n            }\n        }\n    };\n    try {\n        UpdateWithAuth(\"repositories/\" + options.workspaces.uuid + \"/\" + options.repos.slug + \"/pullrequests/\", payload);\n        notify(\"PR created\", \"success\", 3000);\n        reIndex([constants_1.PACKAGE_NAME, \"workspaces\", options.workspaces.name, \"repos\", options.repos.name, \"PRs\"]);\n    }\n    catch (error) {\n        throw error;\n    }\n}\nexports.createPR = createPR;\n\n\n//# sourceURL=webpack://main/./src/utils/helper.ts?");

/***/ })

/******/ });
});