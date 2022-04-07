/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyDocument; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/gin411/tree-store/front-end/pages/_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // we will use getinitialProps which is one of styled-components props to use it with nextjs\n// get initialProps will wait until that method has been resolved before it sends the data\n// off from the server to the browser\n// collect style will go through every single component that needs to be rendered inside\n// our components and it will rip out the CSS that it needs  and render it out to the server\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  static getInitialProps({\n    renderPage\n  }) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n    const page = renderPage( // eslint-disable-next-line react/jsx-props-no-spreading\n    App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 47\n    }, this)));\n    const styleTags = sheet.getStyleElement();\n    return _objectSpread(_objectSpread({}, page), {}, {\n      styleTags\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"en-CA\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"bod\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this);\n  }\n\n} // The reason we do this is because we need access to be able to do custom HTML attributes\n// as well as the ability to stick our CSS inside the head//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9fZG9jdW1lbnQuanM/ZTcwZCJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZW5kZXJQYWdlIiwic2hlZXQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwicGFnZSIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsInN0eWxlVGFncyIsImdldFN0eWxlRWxlbWVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxNQUFNQSxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDL0MsU0FBT0MsZUFBUCxDQUF1QjtBQUFFQztBQUFGLEdBQXZCLEVBQXVDO0FBQ3JDLFVBQU1DLEtBQUssR0FBRyxJQUFJQywrREFBSixFQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxVQUFVLEVBQ3JCO0FBQ0NJLE9BQUQsSUFBVUMsS0FBRCxJQUFXSixLQUFLLENBQUNLLGFBQU4sZUFBb0IsOERBQUMsR0FBRCxvQkFBU0QsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXBCLENBRkMsQ0FBdkI7QUFJQSxVQUFNRSxTQUFTLEdBQUdOLEtBQUssQ0FBQ08sZUFBTixFQUFsQjtBQUNBLDJDQUFZTCxJQUFaO0FBQWtCSTtBQUFsQjtBQUNEOztBQUVERSxRQUFNLEdBQUc7QUFDUCx3QkFDRSw4REFBQywrQ0FBRDtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBU0Q7O0FBckI4QyxDLENBdUJqRDtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvX2RvY3VtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE5leHRTY3JpcHQsIE1haW4gfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyB3ZSB3aWxsIHVzZSBnZXRpbml0aWFsUHJvcHMgd2hpY2ggaXMgb25lIG9mIHN0eWxlZC1jb21wb25lbnRzIHByb3BzIHRvIHVzZSBpdCB3aXRoIG5leHRqc1xuLy8gZ2V0IGluaXRpYWxQcm9wcyB3aWxsIHdhaXQgdW50aWwgdGhhdCBtZXRob2QgaGFzIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGl0IHNlbmRzIHRoZSBkYXRhXG4vLyBvZmYgZnJvbSB0aGUgc2VydmVyIHRvIHRoZSBicm93c2VyXG4vLyBjb2xsZWN0IHN0eWxlIHdpbGwgZ28gdGhyb3VnaCBldmVyeSBzaW5nbGUgY29tcG9uZW50IHRoYXQgbmVlZHMgdG8gYmUgcmVuZGVyZWQgaW5zaWRlXG4vLyBvdXIgY29tcG9uZW50cyBhbmQgaXQgd2lsbCByaXAgb3V0IHRoZSBDU1MgdGhhdCBpdCBuZWVkcyAgYW5kIHJlbmRlciBpdCBvdXQgdG8gdGhlIHNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlbmRlclBhZ2UgfSkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyUGFnZShcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nXG4gICAgICAoQXBwKSA9PiAocHJvcHMpID0+IHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KVxuICAgICk7XG4gICAgY29uc3Qgc3R5bGVUYWdzID0gc2hlZXQuZ2V0U3R5bGVFbGVtZW50KCk7XG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVUYWdzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlbi1DQVwiPlxuICAgICAgICA8Ym9kPlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZD5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG4vLyBUaGUgcmVhc29uIHdlIGRvIHRoaXMgaXMgYmVjYXVzZSB3ZSBuZWVkIGFjY2VzcyB0byBiZSBhYmxlIHRvIGRvIGN1c3RvbSBIVE1MIGF0dHJpYnV0ZXNcbi8vIGFzIHdlbGwgYXMgdGhlIGFiaWxpdHkgdG8gc3RpY2sgb3VyIENTUyBpbnNpZGUgdGhlIGhlYWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("object-assign");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-847d74","vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();