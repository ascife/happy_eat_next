(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_init */ "./pages/_init.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/global.css */ "./public/css/global.css");
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_global_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_init__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
        exitBeforeEnter: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "app",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/_init.js":
/*!************************!*\
  !*** ./pages/_init.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product */ "./services/product.js");
/* harmony import */ var _store_reducers_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/product */ "./store/reducers/product.js");





function Init(props) {
  const dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_services_product__WEBPACK_IMPORTED_MODULE_2__.getProducts)().then(products => {
      dispath((0,_store_reducers_product__WEBPACK_IMPORTED_MODULE_3__.initProducts)(products));
    });
  }, [dispath]);
  return props.children;
}

/* harmony default export */ __webpack_exports__["default"] = (Init);

/***/ }),

/***/ "./services/product.js":
/*!*****************************!*\
  !*** ./services/product.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProducts": function() { return /* binding */ getProducts; },
/* harmony export */   "uploadProduct": function() { return /* binding */ uploadProduct; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./util/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getProducts = () => {
  return new Promise((resolve, reject) => {
    let url = "http://192.168.0.107:4000/products/get_all";
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then(response => {
      let data = response.data;
      if (data.error === true) //ignore error
        return;
      let products = data.map(product => {
        product.imageUrl = `http://192.168.0.107:4000/${product.imageUrl}`;
        return product;
      });
      resolve(_objectSpread({}, products));
    });
  });
};
const uploadProduct = product => {
  return new Promise((resolve, reject) => {
    let url = "http://192.168.0.107:4000/products/upload";
    let formData = new FormData();
    _util__WEBPACK_IMPORTED_MODULE_1__.default.mapObject(product, (key, value) => {
      formData.set(key, value);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, formData).then(response => {
      let data = response.data;
      if (data.error === true) //ignore error
        return;
      let product = data;
      product.imageUrl = `http://192.168.0.107:4000/${product.imageUrl}`;
      resolve(product);
    });
  });
};

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./store/localstorage.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);



 //state localstorage

const persistedState = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.loadState)();
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.rootReducers, persistedState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default())));
store.subscribe(() => {
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveState)({
    persistedReducer: store.getState().persistedReducer
  });
});


/***/ }),

/***/ "./store/localstorage.js":
/*!*******************************!*\
  !*** ./store/localstorage.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadState": function() { return /* binding */ loadState; },
/* harmony export */   "saveState": function() { return /* binding */ saveState; }
/* harmony export */ });
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



/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducers": function() { return /* binding */ rootReducers; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./store/reducers/product.js");
/* harmony import */ var _persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persist */ "./store/reducers/persist.js");



const rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  productReducer: _product__WEBPACK_IMPORTED_MODULE_1__.default,
  persistReducer: _persist__WEBPACK_IMPORTED_MODULE_2__.default
});


/***/ }),

/***/ "./store/reducers/persist.js":
/*!***********************************!*\
  !*** ./store/reducers/persist.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _state = {};
function reducer(state = _state, action) {
  let updateState = nstate => _objectSpread(_objectSpread({}, nstate), state);

  return state;
}

/***/ }),

/***/ "./store/reducers/product.js":
/*!***********************************!*\
  !*** ./store/reducers/product.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; },
/* harmony export */   "initProducts": function() { return /* binding */ initProducts; },
/* harmony export */   "addProduct": function() { return /* binding */ addProduct; },
/* harmony export */   "setSelectedProduct": function() { return /* binding */ setSelectedProduct; }
/* harmony export */ });
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product */ "./services/product.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const _state = {
  products: {},
  selectedProduct: {}
};
const ADD_PRODUCT = "ADD_PRODUCT";
const INIT_PRODUCTS = "INIT_PRODUCTS";
const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
function reducer(state = _state, action) {
  let updateState = nstate => _objectSpread(_objectSpread({}, state), nstate);

  if (action.type === INIT_PRODUCTS) {
    return updateState({
      products: action.products
    });
  }

  if (action.type === ADD_PRODUCT) {
    return updateState({
      products: _objectSpread(_objectSpread({}, state.products), {}, {
        [action.product.id]: action.product
      })
    });
  }

  if (action.type === SET_SELECTED_PRODUCT) {
    return updateState({
      selectedProduct: action.product
    });
  }

  return state;
}
const initProducts = products => (dispath, getState) => {
  dispath({
    type: INIT_PRODUCTS,
    products: products
  });
};
const addProduct = product => async (dispath, getState) => {
  let uploadedProduct = await (0,_services_product__WEBPACK_IMPORTED_MODULE_0__.uploadProduct)(product);
  return dispath({
    type: ADD_PRODUCT,
    product: uploadedProduct
  });
};
const setSelectedProduct = product => (dispath, getState) => {
  dispath({
    type: SET_SELECTED_PRODUCT,
    product: product
  });
};

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const util = {};

util.mapObject = function (object, callback) {
  if (typeof object !== "object") return null;
  if (Array.isArray(object)) return object.map(callback);
  return Object.keys(object).reverse().map(key => {
    let value = object[key];
    return callback(key, value);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./public/css/global.css":
/*!*******************************!*\
  !*** ./public/css/global.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FdGljYTMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL0V0aWNhMy8uL3BhZ2VzL19pbml0LmpzIiwid2VicGFjazovL0V0aWNhMy8uL3NlcnZpY2VzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vc3RvcmUvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovL0V0aWNhMy8uL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL0V0aWNhMy8uL3N0b3JlL3JlZHVjZXJzL3BlcnNpc3QuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FdGljYTMvLi91dGlsL2luZGV4LmpzIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vRXRpY2EzL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRXRpY2EzL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9FdGljYTMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9FdGljYTMvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJJbml0IiwicHJvcHMiLCJkaXNwYXRoIiwidXNlRGlzcGF0Y2giLCJSZWFjdCIsImdldFByb2R1Y3RzIiwidGhlbiIsInByb2R1Y3RzIiwiaW5pdFByb2R1Y3RzIiwiY2hpbGRyZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJwcm9kdWN0IiwiaW1hZ2VVcmwiLCJ1cGxvYWRQcm9kdWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInV0aWwiLCJrZXkiLCJ2YWx1ZSIsInNldCIsInBlcnNpc3RlZFN0YXRlIiwibG9hZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInN1YnNjcmliZSIsInNhdmVTdGF0ZSIsInBlcnNpc3RlZFJlZHVjZXIiLCJnZXRTdGF0ZSIsInBhcnNlZFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsIkpTT04iLCJwYXJzZSIsInN0YXRlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImNvbWJpbmVSZWR1Y2VycyIsInByb2R1Y3RSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJfc3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJzZWxlY3RlZFByb2R1Y3QiLCJBRERfUFJPRFVDVCIsIklOSVRfUFJPRFVDVFMiLCJTRVRfU0VMRUNURURfUFJPRFVDVCIsInR5cGUiLCJpZCIsImFkZFByb2R1Y3QiLCJ1cGxvYWRlZFByb2R1Y3QiLCJzZXRTZWxlY3RlZFByb2R1Y3QiLCJtYXBPYmplY3QiLCJvYmplY3QiLCJjYWxsYmFjayIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULENBQWE7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWIsRUFBcUM7QUFFbkMsc0JBQ0UsOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVDLHlDQUFqQjtBQUFBLDJCQUNFLDhEQUFDLDBDQUFEO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBaUIsdUJBQWUsRUFBRSxJQUFs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Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuL19pbml0JztcclxuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7QW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJzsgXHJcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvZ2xvYmFsLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8SW5pdD5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj17dHJ1ZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwJz5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9Jbml0PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Z2V0UHJvZHVjdHN9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3QnO1xyXG5pbXBvcnQge2luaXRQcm9kdWN0c30gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvcHJvZHVjdCc7XHJcblxyXG5mdW5jdGlvbiBJbml0KHByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0aCA9IHVzZURpc3BhdGNoKCk7XHJcbiBcclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBnZXRQcm9kdWN0cygpLnRoZW4oKHByb2R1Y3RzKT0+IHtcclxuICAgICAgZGlzcGF0aChpbml0UHJvZHVjdHMocHJvZHVjdHMpKTtcclxuICAgIH0pXHJcbiAgfSwgW2Rpc3BhdGhdKVxyXG5cclxuICByZXR1cm4gcHJvcHMuY2hpbGRyZW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluaXQ7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKT0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgICBsZXQgdXJsID0gXCJodHRwOi8vMTkyLjE2OC4wLjEwNzo0MDAwL3Byb2R1Y3RzL2dldF9hbGxcIjtcclxuXHJcbiAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBcclxuICAgICAgaWYoZGF0YS5lcnJvciA9PT0gdHJ1ZSlcclxuICAgICAgICAvL2lnbm9yZSBlcnJvclxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBwcm9kdWN0cyA9IGRhdGEubWFwKChwcm9kdWN0KT0+IHtcclxuICAgICAgICBwcm9kdWN0LmltYWdlVXJsID0gYGh0dHA6Ly8xOTIuMTY4LjAuMTA3OjQwMDAvJHtwcm9kdWN0LmltYWdlVXJsfWA7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXNvbHZlKHsuLi5wcm9kdWN0c30pO1xyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkUHJvZHVjdCA9IChwcm9kdWN0KT0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgICBsZXQgdXJsID0gXCJodHRwOi8vMTkyLjE2OC4wLjEwNzo0MDAwL3Byb2R1Y3RzL3VwbG9hZFwiO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBcclxuICAgIHV0aWwubWFwT2JqZWN0KHByb2R1Y3QsIChrZXksIHZhbHVlKT0+IHtcclxuICAgICAgZm9ybURhdGEuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBheGlvcy5wb3N0KHVybCwgZm9ybURhdGEpXHJcbiAgICAudGhlbigocmVzcG9uc2UpPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICBpZihkYXRhLmVycm9yID09PSB0cnVlKVxyXG4gICAgICAgIC8vaWdub3JlIGVycm9yXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IHByb2R1Y3QgPSBkYXRhO1xyXG4gICAgICBwcm9kdWN0LmltYWdlVXJsID0gYGh0dHA6Ly8xOTIuMTY4LjAuMTA3OjQwMDAvJHtwcm9kdWN0LmltYWdlVXJsfWA7XHJcbiAgICAgIHJlc29sdmUocHJvZHVjdCk7XHJcbiAgICB9KVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtyb290UmVkdWNlcnN9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQge2xvYWRTdGF0ZSwgc2F2ZVN0YXRlfSBmcm9tICcuL2xvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG4vL3N0YXRlIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBwZXJzaXN0ZWRTdGF0ZSA9IGxvYWRTdGF0ZSgpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcnMsXHJcbiAgcGVyc2lzdGVkU3RhdGUsXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4pXHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoKCk9PiB7XHJcbiAgc2F2ZVN0YXRlKHtcclxuICAgIHBlcnNpc3RlZFJlZHVjZXI6IFxyXG4gICAgc3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgLnBlcnNpc3RlZFJlZHVjZXJcclxuICB9KVxyXG59KVxyXG5cclxuZXhwb3J0IHtzdG9yZX07IiwiY29uc3QgbG9hZFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBwYXJzZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIik7XHJcbiAgICBpZihwYXJzZWRTdGF0ZSA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHBhcnNlZFN0YXRlKTtcclxuXHJcbiAgfWNhdGNoKGVycm9yKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2F2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHBhcnNlZFN0YXRlID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZVwiLCBwYXJzZWRTdGF0ZSk7XHJcblxyXG4gIH1jYXRjaChlcnJvcikge1xyXG4gICAgLy9pZ25vcmUgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9hZFN0YXRlLCBzYXZlU3RhdGV9OyIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tICcuL3Byb2R1Y3QnO1xyXG5pbXBvcnQgcGVyc2lzdFJlZHVjZXIgZnJvbSAnLi9wZXJzaXN0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdFJlZHVjZXIsXHJcbiAgcGVyc2lzdFJlZHVjZXJcclxufSlcclxuXHJcbmV4cG9ydCB7cm9vdFJlZHVjZXJzfTsiLCJjb25zdCBfc3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU9X3N0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgdXBkYXRlU3RhdGUgPSAobnN0YXRlKT0+ICh7Li4ubnN0YXRlLCAuLi5zdGF0ZX0pO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufSIsImltcG9ydCB7dXBsb2FkUHJvZHVjdH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdCc7XHJcblxyXG5jb25zdCBfc3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IHt9LFxyXG4gIHNlbGVjdGVkUHJvZHVjdDoge31cclxufVxyXG5cclxuY29uc3QgQUREX1BST0RVQ1QgPSBcIkFERF9QUk9EVUNUXCI7XHJcbmNvbnN0IElOSVRfUFJPRFVDVFMgPSBcIklOSVRfUFJPRFVDVFNcIjtcclxuY29uc3QgU0VUX1NFTEVDVEVEX1BST0RVQ1QgPSBcIlNFVF9TRUxFQ1RFRF9QUk9EVUNUXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlPV9zdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IHVwZGF0ZVN0YXRlID0gKG5zdGF0ZSk9PiAoey4uLnN0YXRlLCAuLi5uc3RhdGV9KTtcclxuXHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IElOSVRfUFJPRFVDVFMpIHtcclxuICAgIHJldHVybiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucHJvZHVjdHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1BST0RVQ1QpIHtcclxuICAgIHJldHVybiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgW2FjdGlvbi5wcm9kdWN0LmlkXTogYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZihhY3Rpb24udHlwZSA9PT0gU0VUX1NFTEVDVEVEX1BST0RVQ1QpIHtcclxuICAgIHJldHVybiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUHJvZHVjdDogXHJcbiAgICAgIGFjdGlvbi5wcm9kdWN0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFByb2R1Y3RzID0gKHByb2R1Y3RzKT0+IChkaXNwYXRoLCBnZXRTdGF0ZSk9PiB7XHJcbiAgZGlzcGF0aCh7XHJcbiAgICB0eXBlOiBJTklUX1BST0RVQ1RTLFxyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gIH0pICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCk9PiBhc3luYyAoZGlzcGF0aCwgZ2V0U3RhdGUpPT4ge1xyXG4gIGxldCB1cGxvYWRlZFByb2R1Y3QgPSBhd2FpdCB1cGxvYWRQcm9kdWN0KHByb2R1Y3QpO1xyXG4gIHJldHVybiBkaXNwYXRoKHtcclxuICAgIHR5cGU6IEFERF9QUk9EVUNULFxyXG4gICAgcHJvZHVjdDogdXBsb2FkZWRQcm9kdWN0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkUHJvZHVjdCA9IChwcm9kdWN0KT0+IChkaXNwYXRoLCBnZXRTdGF0ZSk9PiB7ICBcclxuICBkaXNwYXRoKHtcclxuICAgIHR5cGU6IFNFVF9TRUxFQ1RFRF9QUk9EVUNULFxyXG4gICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gIH0pXHJcbn0iLCJjb25zdCB1dGlsID0ge307XHJcblxyXG51dGlsLm1hcE9iamVjdCA9IGZ1bmN0aW9uKG9iamVjdCwgY2FsbGJhY2spIHtcclxuXHJcbiAgaWYodHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIilcclxuICAgIHJldHVybiBudWxsO1xyXG5cclxuICBpZihBcnJheS5pc0FycmF5KG9iamVjdCkpXHJcbiAgICByZXR1cm4gb2JqZWN0Lm1hcChjYWxsYmFjayk7XHJcblxyXG5cclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZXZlcnNlKCkubWFwKChrZXkpPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICByZXR1cm4gY2FsbGJhY2soa2V5LCB2YWx1ZSk7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==