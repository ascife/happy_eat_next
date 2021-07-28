exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 8419:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6380);
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(event_glue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5445);
/* harmony import */ var _styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Button = {};

Button.Default = function (props) {
  let {
    children,
    className
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", _objectSpread(_objectSpread({
    className: className
  }, props), {}, {
    children: children
  }));
};

Button.ContPrimaryGrow = function (props) {
  let {
    children
  } = props;
  let className = `${(_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container_button_primary_grow)} ${props.className}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: className,
    children: children
  });
};

Button.PrimaryGrow = function (props) {
  let {
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button.Default, _objectSpread(_objectSpread({}, props), {}, {
    className: (_styles_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button_primary_grow),
    children: children
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (Button);

/***/ }),

/***/ 5445:
/***/ (function(module) {

// Exports
module.exports = {
	"container_button_primary_grow": "Button_container_button_primary_grow__3OUWM",
	"button_primary_grow": "Button_button_primary_grow__3hUeV"
};


/***/ })

};
;