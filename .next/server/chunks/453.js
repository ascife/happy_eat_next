exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 1900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ getProducts; },
/* harmony export */   "t": function() { return /* binding */ uploadProduct; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7378);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getProducts = () => {
  return new Promise((resolve, reject) => {
    let url = `${"https://happy-eat-node.herokuapp.com"}/products/get_all`;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(url).then(response => {
      let data = response.data;
      if (data.error === true) //ignore error
        return;
      let products = data.map(product => {
        product.imageUrl = `${"https://happy-eat-node.herokuapp.com"}/${product.imageUrl}`;
        return product;
      });
      resolve(_objectSpread({}, products));
    });
  });
};
const uploadProduct = product => {
  return new Promise((resolve, reject) => {
    let url = `${"https://happy-eat-node.herokuapp.com"}/products/upload`;
    let formData = new FormData();
    _util__WEBPACK_IMPORTED_MODULE_1__/* .default.mapObject */ .Z.mapObject(product, (key, value) => {
      formData.set(key, value);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, formData).then(response => {
      let data = response.data;
      if (data.error === true) //ignore error
        return;
      let product = data;
      product.imageUrl = `${"https://happy-eat-node.herokuapp.com"}/${product.imageUrl}`;
      resolve(product);
    });
  });
};

/***/ }),

/***/ 6453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ reducer; },
/* harmony export */   "Sb": function() { return /* binding */ initProducts; },
/* harmony export */   "gK": function() { return /* binding */ addProduct; },
/* harmony export */   "CE": function() { return /* binding */ setSelectedProduct; }
/* harmony export */ });
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1900);
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
  let uploadedProduct = await (0,_services_product__WEBPACK_IMPORTED_MODULE_0__/* .uploadProduct */ .t)(product);
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

/***/ 7378:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const util = {};

util.mapObject = function (object, callback) {
  if (typeof object !== "object") return null;
  if (Array.isArray(object)) return object.map(callback);
  return Object.keys(object).reverse().map(key => {
    let value = object[key];
    return callback(key, value);
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (util);

/***/ })

};
;