(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,550];
exports.modules = {

/***/ 2588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./pages/_init.js
var _init = __webpack_require__(6122);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
// EXTERNAL MODULE: ./store/reducers/product.js
var product = __webpack_require__(6453);
;// CONCATENATED MODULE: ./store/reducers/persist.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _state = {};
function reducer(state = _state, action) {
  let updateState = nstate => _objectSpread(_objectSpread({}, nstate), state);

  return state;
}
;// CONCATENATED MODULE: ./store/reducers/index.js



const rootReducers = (0,external_redux_namespaceObject.combineReducers)({
  productReducer: product/* default */.ZP,
  persistReducer: reducer
});

;// CONCATENATED MODULE: ./store/localstorage.js
const loadState = function () {
  try {
    let parsedState = localStorage.getItem("state");
    if (parsedState === null) return undefined;
    return JSON.parse(parsedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = function (state) {
  try {
    let parsedState = JSON.stringify(state);
    localStorage.setItem("state", parsedState);
  } catch (error) {//ignore error
  }
};


;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store/index.js



 //state localstorage

const persistedState = loadState();
const store = (0,external_redux_namespaceObject.createStore)(rootReducers, persistedState, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
store.subscribe(() => {
  saveState({
    persistedReducer: store.getState().persistedReducer
  });
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(_init.default, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "app",
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })
      })
    })
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 6122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1900);
/* harmony import */ var _store_reducers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6453);







function Init(props) {
  const dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    (0,_services_product__WEBPACK_IMPORTED_MODULE_3__/* .getProducts */ .X)().then(products => {
      dispath((0,_store_reducers_product__WEBPACK_IMPORTED_MODULE_4__/* .initProducts */ .Sb)(products));
    });
  }, [dispath]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Init);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [453], function() { return __webpack_exec__(2588); });
module.exports = __webpack_exports__;

})();