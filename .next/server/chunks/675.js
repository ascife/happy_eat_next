exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 9675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9337);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2879);
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Card = {};

Card.ContProduct = function (props) {
  let {
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container_card_product),
    children: children
  });
};

Card.Product = function (props) {
  let {
    image,
    onClick
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", _objectSpread(_objectSpread({
    onClick: onClick,
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_product)
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
      src: image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowRight, {
        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
      })
    })]
  }));
};

Card.ContSocialNet = function (props) {
  let {
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container_card_social_net),
    children: children
  });
};

Card.SocialGoogle = function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_social_google),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/image/Account_google.svg",
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().b_sentence),
      children: "Ingresar con google"
    })]
  });
};

Card.SocialFacebook = function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_social_facebook),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/image/Account_facebook.svg",
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().b_sentence),
      children: "Ingresar con google"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Card);

/***/ }),

/***/ 2879:
/***/ (function(module) {

// Exports
module.exports = {
	"container_card_product": "Card_container_card_product__1fX8-",
	"card_product": "Card_card_product__pISCo",
	"button": "Card_button__370S7",
	"icon": "Card_icon__iD_a6",
	"container_card_social_net": "Card_container_card_social_net__3Ldjg",
	"card_social_google": "Card_card_social_google__3Yr-6",
	"image": "Card_image__rzLrP",
	"b_sentence": "Card_b_sentence__3tSFZ",
	"card_social_facebook": "Card_card_social_facebook__LChlg"
};


/***/ })

};
;