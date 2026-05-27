"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nasync function register() {\n    if (true) {\n        const g = globalThis;\n        if (typeof g.localStorage === \"undefined\" || typeof g.localStorage.getItem !== \"function\") {\n            const store = {};\n            g.localStorage = {\n                getItem: (key)=>store[key] ?? null,\n                setItem: (key, value)=>{\n                    store[key] = String(value);\n                },\n                removeItem: (key)=>{\n                    delete store[key];\n                },\n                clear: ()=>{\n                    Object.keys(store).forEach((k)=>delete store[k]);\n                },\n                get length () {\n                    return Object.keys(store).length;\n                },\n                key: (index)=>Object.keys(store)[index] ?? null\n            };\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQTtJQUNwQixJQUFJQyxJQUFxQyxFQUFFO1FBQ3pDLE1BQU1HLElBQUlDO1FBQ1YsSUFDRSxPQUFPRCxFQUFFRSxZQUFZLEtBQUssZUFDMUIsT0FBTyxFQUFHQSxZQUFZLENBQWFDLE9BQU8sS0FBSyxZQUMvQztZQUNBLE1BQU1DLFFBQWdDLENBQUM7WUFDdkNKLEVBQUVFLFlBQVksR0FBRztnQkFDZkMsU0FBUyxDQUFDRSxNQUFnQkQsS0FBSyxDQUFDQyxJQUFJLElBQUk7Z0JBQ3hDQyxTQUFTLENBQUNELEtBQWFFO29CQUNyQkgsS0FBSyxDQUFDQyxJQUFJLEdBQUdHLE9BQU9EO2dCQUN0QjtnQkFDQUUsWUFBWSxDQUFDSjtvQkFDWCxPQUFPRCxLQUFLLENBQUNDLElBQUk7Z0JBQ25CO2dCQUNBSyxPQUFPO29CQUNMQyxPQUFPQyxJQUFJLENBQUNSLE9BQU9TLE9BQU8sQ0FBQyxDQUFDQyxJQUFNLE9BQU9WLEtBQUssQ0FBQ1UsRUFBRTtnQkFDbkQ7Z0JBQ0EsSUFBSUMsVUFBUztvQkFDWCxPQUFPSixPQUFPQyxJQUFJLENBQUNSLE9BQU9XLE1BQU07Z0JBQ2xDO2dCQUNBVixLQUFLLENBQUNXLFFBQWtCTCxPQUFPQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1ksTUFBTSxJQUFJO1lBQ3ZEO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMva3JpdGhpL0Rlc2t0b3AvUG9ydGZvbGlvL2luc3RydW1lbnRhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09IFwibm9kZWpzXCIpIHtcbiAgICBjb25zdCBnID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBnLmxvY2FsU3RvcmFnZSA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgdHlwZW9mIChnLmxvY2FsU3RvcmFnZSBhcyBTdG9yYWdlKS5nZXRJdGVtICE9PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IHN0b3JlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgICBnLmxvY2FsU3RvcmFnZSA9IHtcbiAgICAgICAgZ2V0SXRlbTogKGtleTogc3RyaW5nKSA9PiBzdG9yZVtrZXldID8/IG51bGwsXG4gICAgICAgIHNldEl0ZW06IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHN0b3JlW2tleV0gPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVJdGVtOiAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBkZWxldGUgc3RvcmVba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXI6ICgpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZSkuZm9yRWFjaCgoaykgPT4gZGVsZXRlIHN0b3JlW2tdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RvcmUpLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiAoaW5kZXg6IG51bWJlcikgPT4gT2JqZWN0LmtleXMoc3RvcmUpW2luZGV4XSA/PyBudWxsLFxuICAgICAgfSBhcyBTdG9yYWdlO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUlVOVElNRSIsImciLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlIiwia2V5Iiwic2V0SXRlbSIsInZhbHVlIiwiU3RyaW5nIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwibGVuZ3RoIiwiaW5kZXgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();