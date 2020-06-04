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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

throw new Error("__webpack_require__p!(function webpackMissingModule() { var e = new Error("Cannot find module 'webextension-polyfill'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())d module '../../buildin/global'\nRequire stack:\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/node/NodeSourcePlugin.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/WebpackOptionsApply.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/webpack.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/utils/validate-options.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/utils/convert-argv.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/cli.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/bin/webpack.js\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nError: Cannot find module '../../buildin/global'\nRequire stack:\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/node/NodeSourcePlugin.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/WebpackOptionsApply.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/lib/webpack.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/utils/validate-options.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/utils/convert-argv.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack-cli/bin/cli.js\n- /Users/ight/Repository/bq-extension/node_modules/webpack/bin/webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:976:15)\n    at Function.resolve (/Users/ight/Repository/bq-extension/node_modules/v8-compile-cache/v8-compile-cache.js:166:23)\n    at /Users/ight/Repository/bq-extension/node_modules/webpack/lib/node/NodeSourcePlugin.js:74:18\n    at SyncBailHook.eval [as call] (eval at create (/Users/ight/Repository/bq-extension/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:5:16)\n    at SyncBailHook.lazyCompileHook (/Users/ight/Repository/bq-extension/node_modules/tapable/lib/Hook.js:154:20)\n    at Parser.walkIdentifier (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1986:25)\n    at Parser.walkExpression (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1604:10)\n    at Parser.walkMemberExpression (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1969:8)\n    at Parser.walkPattern (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1529:10)\n    at Parser.walkAssignmentExpression (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1794:8)\n    at Parser.walkExpression (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1583:10)\n    at Parser.walkExpressionStatement (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:1022:8)\n    at Parser.walkStatement (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:964:10)\n    at Parser.walkStatements (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:868:9)\n    at Parser.parse (/Users/ight/Repository/bq-extension/node_modules/webpack/lib/Parser.js:2297:9)\n    at /Users/ight/Repository/bq-extension/node_modules/webpack/lib/NormalModule.js:482:32\n    at /Users/ight/Repository/bq-extension/node_modules/webpack/lib/NormalModule.js:358:12\n    at /Users/ight/Repository/bq-extension/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/Users/ight/Repository/bq-extension/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at Array.<anonymous> (/Users/ight/Repository/bq-extension/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/Users/ight/Repository/bq-extension/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /Users/ight/Repository/bq-extension/node_modules/webpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /Users/ight/Repository/bq-extension/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)");

/***/ })

/******/ });
//# sourceMappingURL=background.js.map