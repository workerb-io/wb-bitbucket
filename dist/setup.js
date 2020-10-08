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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/setup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/setup.ts":
/*!******************************!*\
  !*** ./src/actions/setup.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nif (args[0]) {\r\n    setVar('github', [\r\n        {\r\n            name: 'accessToken',\r\n            value: args[0],\r\n        },\r\n    ]);\r\n    notify('Access token added successfully', 'success', 3000);\r\n    reIndex();\r\n}\r\nelse {\r\n    var tokenName = 'workerB';\r\n    open('https://github.com/settings/tokens');\r\n    var currentUrl = readURL();\r\n    if (currentUrl.indexOf('login') === -1) {\r\n        var allTokenNames = readAll('span.token-description a');\r\n        var previousWorkerbTokens = [];\r\n        for (var _i = 0, allTokenNames_1 = allTokenNames; _i < allTokenNames_1.length; _i++) {\r\n            var token = allTokenNames_1[_i];\r\n            if (token.toLowerCase().indexOf(tokenName) !== -1) {\r\n                previousWorkerbTokens.push(token.trim());\r\n            }\r\n        }\r\n        var workerbToken = !previousWorkerbTokens.length\r\n            ? ''\r\n            : previousWorkerbTokens.sort()[previousWorkerbTokens.length - 1];\r\n        tokenName = workerbToken\r\n            ? workerbToken.trim().slice(-1) === parseInt(workerbToken.trim().slice(-1), 10).toString()\r\n                ? \"\" + workerbToken.trim().slice(0, -1) + (Number(workerbToken.trim().slice(-1)) + 1)\r\n                : workerbToken.trim() + \"1\"\r\n            : tokenName;\r\n        click('Generate new token', {\r\n            method: 'by_text',\r\n        });\r\n        type(tokenName, '#oauth_access_description', {\r\n            method: 'by_query_selector',\r\n        });\r\n        click('.token-scope input', {\r\n            method: 'by_query_selector',\r\n        });\r\n        click('Generate token', {\r\n            method: 'by_text',\r\n        });\r\n        var newAuthToken = read('#new-oauth-token', {\r\n            method: 'by_query_selector',\r\n        });\r\n        if (!newAuthToken) {\r\n            notify(\"Access token can't be empty\", 'error', 3000);\r\n        }\r\n        else {\r\n            setVar('github', [\r\n                {\r\n                    name: 'accessToken',\r\n                    value: newAuthToken,\r\n                },\r\n            ]);\r\n            notify('Access token added successfully', 'success', 3000);\r\n            reIndex();\r\n        }\r\n    }\r\n    else {\r\n        notify('Please login into your github account first', 'error', 3000);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://main/./src/actions/setup.ts?");

/***/ })

/******/ });
});