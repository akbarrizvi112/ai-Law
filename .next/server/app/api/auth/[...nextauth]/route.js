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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_PC_HOUSE_Downloads_ai_docs_main_1_ai_docs_main_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\PC HOUSE\\\\Downloads\\\\ai-docs-main (1)\\\\ai-docs-main\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_PC_HOUSE_Downloads_ai_docs_main_1_ai_docs_main_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNQQyUyMEhPVVNFJTVDRG93bmxvYWRzJTVDYWktZG9jcy1tYWluJTIwKDEpJTVDYWktZG9jcy1tYWluJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNQQyUyMEhPVVNFJTVDRG93bmxvYWRzJTVDYWktZG9jcy1tYWluJTIwKDEpJTVDYWktZG9jcy1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzREO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1ib3QvPzgyMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcUEMgSE9VU0VcXFxcRG93bmxvYWRzXFxcXGFpLWRvY3MtbWFpbiAoMSlcXFxcYWktZG9jcy1tYWluXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxQQyBIT1VTRVxcXFxEb3dubG9hZHNcXFxcYWktZG9jcy1tYWluICgxKVxcXFxhaS1kb2NzLW1haW5cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/authOptions */ \"(rsc)/./src/utils/authOptions.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_utils_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Q7QUFDakI7QUFFakMsTUFBTUUsVUFBVUQsZ0RBQVFBLENBQUNELDJEQUFXQTtBQUVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1ib3QvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL3V0aWxzL2F1dGhPcHRpb25zXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBS2hDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFDQU4sT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTUcsSUFBSSxDQUFDLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLElBQUk7UUFDRkssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1ib3QvLi9zcmMvbGliL21vbmdvZGIudHM/NTNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBtb25nb29zZTogYW55OyAvLyBUaGlzIG11c3QgYmUgYSBgdmFyYCBhbmQgbm90IGEgYGxldCAvIGNvbnN0YFxufVxuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiKTtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH07XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/schemas/User.ts":
/*!*****************************!*\
  !*** ./src/schemas/User.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    hash: {\n        type: String\n    },\n    salt: {\n        type: String\n    },\n    profile: {\n        firstName: {\n            type: String\n        },\n        lastName: {\n            type: String\n        },\n        image: {\n            type: String\n        }\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2NoZW1hcy9Vc2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQWFoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQUMsTUFBTTtRQUNKSixNQUFNQztJQUNSO0lBQ0FJLE1BQU07UUFDSkwsTUFBTUM7SUFDUjtJQUNBSyxTQUFTO1FBQ1BDLFdBQVc7WUFDVFAsTUFBTUM7UUFDUjtRQUNBTyxVQUFVO1lBQ1JSLE1BQU1DO1FBQ1I7UUFDQVEsT0FBTztZQUNMVCxNQUFNQztRQUNSO0lBQ0Y7QUFDRixHQUNBO0lBQUVTLFlBQVk7QUFBSztBQUdyQixpRUFBZWQsd0RBQWUsQ0FBQ2dCLEtBQUssSUFBSWhCLHFEQUFjLENBQVEsU0FBU0MsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtYm90Ly4vc3JjL3NjaGVtYXMvVXNlci50cz81NGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGhhc2g/OiBzdHJpbmc7XG4gIHNhbHQ/OiBzdHJpbmc7XG4gIHByb2ZpbGU6IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPElVc2VyPihcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB9LFxuICAgIGhhc2g6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHNhbHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHByb2ZpbGU6IHtcbiAgICAgIGZpcnN0TmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbGFzdE5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJoYXNoIiwic2FsdCIsInByb2ZpbGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImltYWdlIiwidGltZXN0YW1wcyIsIm1vZGVscyIsInVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/schemas/User.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/authOptions.ts":
/*!**********************************!*\
  !*** ./src/utils/authOptions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _schemas_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/schemas/User */ \"(rsc)/./src/schemas/User.ts\");\n\n\n\n\nconst authOptions = {\n    secret: process.env.NEXT_AUTH_SECRET,\n    pages: {\n        signIn: \"/signin\",\n        error: \"/signin\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"User Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                const email = credentials?.email;\n                const password = credentials?.password;\n                // const client = await clientPromise;\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const user = await _schemas_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email\n                });\n                if (!user) {\n                    return Promise.resolve(null);\n                }\n                const isPasswordCorrect = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, user.hash);\n                if (isPasswordCorrect) {\n                    return Promise.resolve(user);\n                } else {\n                    return Promise.reject(\"invalid user\");\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, account }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            // console.log(\"in jwt\",token)\n            return token;\n        },\n        async session ({ session, token, user }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            if (session.user) {\n                const sessionUser = await _schemas_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: session.user.email\n                });\n                session.user.name = `${sessionUser?.profile?.firstName} ${sessionUser?.profile?.lastName}`;\n                session.user.id = sessionUser._id.toString();\n            }\n            return session;\n        },\n        async signIn ({ user }) {\n            console.log(\"inside callback\");\n            await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            console.log(\"connected\", user);\n            const u = await _schemas_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                email: user.email\n            });\n            const email = user.email;\n            const name = user.name;\n            if (!u) {\n                const newUser = await _schemas_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                    email,\n                    profile: {\n                        firstName: name\n                    }\n                });\n                await newUser.save();\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvYXV0aE9wdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tFO0FBRXBDO0FBQ1E7QUFDSjtBQUUzQixNQUFNSSxjQUErQjtJQUMxQ0MsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDcENDLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQUMsV0FBVztRQUNUWiwyRUFBbUJBLENBQUM7WUFDbEJhLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFFQUUsV0FBVyxPQUFPTDtnQkFDaEIsTUFBTUMsUUFBUUQsYUFBYUM7Z0JBQzNCLE1BQU1HLFdBQVdKLGFBQWFJO2dCQUM5QixzQ0FBc0M7Z0JBQ3RDLE1BQU1oQix3REFBU0E7Z0JBRWYsTUFBTWtCLE9BQU8sTUFBTWpCLHFEQUFJQSxDQUFDa0IsT0FBTyxDQUFDO29CQUFFTjtnQkFBTTtnQkFFeEMsSUFBSSxDQUFDSyxNQUFNO29CQUNULE9BQU9FLFFBQVFDLE9BQU8sQ0FBQztnQkFDekI7Z0JBRUEsTUFBTUMsb0JBQW9CdkIsMkRBQWtCLENBQUNpQixVQUFVRSxLQUFLTSxJQUFJO2dCQUVoRSxJQUFJRixtQkFBbUI7b0JBQ3JCLE9BQU9GLFFBQVFDLE9BQU8sQ0FBQ0g7Z0JBQ3pCLE9BQU87b0JBQ0wsT0FBT0UsUUFBUUssTUFBTSxDQUFDO2dCQUN4QjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtZQUMxQixpRUFBaUU7WUFDakUsSUFBSUEsU0FBUztnQkFDWEQsTUFBTUUsV0FBVyxHQUFHRCxRQUFRRSxZQUFZO1lBQzFDO1lBQ0EsOEJBQThCO1lBQzlCLE9BQU9IO1FBQ1Q7UUFDQSxNQUFNSSxTQUFRLEVBQUVBLE9BQU8sRUFBRUosS0FBSyxFQUFFVixJQUFJLEVBQUU7WUFDcEMsdUVBQXVFO1lBQ3ZFYyxRQUFRRixXQUFXLEdBQUdGLE1BQU1FLFdBQVc7WUFDdkMsTUFBTTlCLHdEQUFTQTtZQUVmLElBQUlnQyxRQUFRZCxJQUFJLEVBQUU7Z0JBQ2hCLE1BQU1lLGNBQWMsTUFBTWhDLHFEQUFJQSxDQUFDa0IsT0FBTyxDQUFDO29CQUFFTixPQUFPbUIsUUFBUWQsSUFBSSxDQUFDTCxLQUFLO2dCQUFDO2dCQUVuRW1CLFFBQVFkLElBQUksQ0FBQ1AsSUFBSSxHQUFHLENBQUMsRUFBRXNCLGFBQWFDLFNBQVNDLFVBQVUsQ0FBQyxFQUFFRixhQUFhQyxTQUFTRSxTQUFTLENBQUM7Z0JBQzFGSixRQUFRZCxJQUFJLENBQUNtQixFQUFFLEdBQUdKLFlBQVlLLEdBQUcsQ0FBQ0MsUUFBUTtZQUM1QztZQUVBLE9BQU9QO1FBQ1Q7UUFDQSxNQUFNeEIsUUFBTyxFQUFFVSxJQUFJLEVBQUU7WUFDbkJzQixRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNekMsd0RBQVNBO1lBQ2Z3QyxRQUFRQyxHQUFHLENBQUMsYUFBYXZCO1lBQ3pCLE1BQU13QixJQUFJLE1BQU16QyxxREFBSUEsQ0FBQ2tCLE9BQU8sQ0FBQztnQkFBRU4sT0FBT0ssS0FBS0wsS0FBSztZQUFDO1lBQ2pELE1BQU1BLFFBQVFLLEtBQUtMLEtBQUs7WUFDeEIsTUFBTUYsT0FBT08sS0FBS1AsSUFBSTtZQUN0QixJQUFJLENBQUMrQixHQUFHO2dCQUNOLE1BQU1DLFVBQVUsTUFBTTFDLHFEQUFJQSxDQUFDMkMsTUFBTSxDQUFDO29CQUNoQy9CO29CQUNBcUIsU0FBUzt3QkFDUEMsV0FBV3hCO29CQUNiO2dCQUNGO2dCQUVBLE1BQU1nQyxRQUFRRSxJQUFJO1lBQ3BCO1lBQ0EsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS1ib3QvLi9zcmMvdXRpbHMvYXV0aE9wdGlvbnMudHM/NDA1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL3NjaGVtYXMvVXNlclwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX0FVVEhfU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvc2lnbmluXCIsXG4gICAgZXJyb3I6IFwiL3NpZ25pblwiLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiVXNlciBDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzPy5lbWFpbDtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQgYXMgc3RyaW5nO1xuICAgICAgICAvLyBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLmhhc2gpO1xuXG4gICAgICAgIGlmIChpc1Bhc3N3b3JkQ29ycmVjdCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiaW52YWxpZCB1c2VyXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XG4gICAgICAvLyBQZXJzaXN0IHRoZSBPQXV0aCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxuICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlbjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW4gand0XCIsdG9rZW4pXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbiBhcyBzdHJpbmc7XG4gICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBjb25zdCBzZXNzaW9uVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XG5cbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSBgJHtzZXNzaW9uVXNlcj8ucHJvZmlsZT8uZmlyc3ROYW1lfSAke3Nlc3Npb25Vc2VyPy5wcm9maWxlPy5sYXN0TmFtZX1gO1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSBzZXNzaW9uVXNlci5faWQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGNhbGxiYWNrXCIpO1xuICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZFwiLCB1c2VyKTtcbiAgICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogdXNlci5lbWFpbCB9KTtcbiAgICAgIGNvbnN0IGVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgIGNvbnN0IG5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICBpZiAoIXUpIHtcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IG5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZGJDb25uZWN0IiwiVXNlciIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfQVVUSF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmVTeW5jIiwiaGFzaCIsInJlamVjdCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwic2Vzc2lvbiIsInNlc3Npb25Vc2VyIiwicHJvZmlsZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJ1IiwibmV3VXNlciIsImNyZWF0ZSIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/authOptions.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CPC%20HOUSE%5CDownloads%5Cai-docs-main%20(1)%5Cai-docs-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();