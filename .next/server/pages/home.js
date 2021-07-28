(function() {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Card.module.scss */ "./components/styles/Card.module.scss");
/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\components\\Card.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Card = {};

Card.ContProduct = function (props) {
  let {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container_card_product),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
};

Card.Product = function (props) {
  let {
    image,
    onEnter
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({
    onClick: onEnter,
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_product)
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
      src: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
      onClick: onEnter,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ArrowRight, {
        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

Card.ContSocialNet = function (props) {
  let {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container_card_social_net),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
};

Card.SocialGoogle = function (props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_social_google),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/image/Account_google.svg",
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().b_sentence),
      children: "Ingresar con google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
};

Card.SocialFacebook = function (props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card_social_facebook),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/image/Account_facebook.svg",
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().b_sentence),
      children: "Ingresar con google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Loader.module.scss */ "./components/styles/Loader.module.scss");
/* harmony import */ var _styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\components\\Loader.js";


const Loader = {};

Loader.Blank = function (props) {
  let {
    children,
    show
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children, show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loader_blank)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! event-glue */ "event-glue");
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(event_glue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sheep */ "react-sheep");
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sheep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Nav.module.scss */ "./components/styles/Nav.module.scss");
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\components\\Nav.js",
    _temp,
    _temp2,
    _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Nav = {};
Nav.Primary = (_temp = class extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        position
      } = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_primary),
          style: {
            position
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().left),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
              children: "happy eat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().right),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/image/round.svg",
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().figure)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    this.sheep = react_sheep__WEBPACK_IMPORTED_MODULE_3___default()(this);
  }

}, _temp);
Nav.PrimaryBottom = (_temp2 = class extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        position,
        parent
      } = this.props;
      let {
        enabled,
        setEnabled
      } = this.sheep;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_primary_bottom),
          style: {
            position
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:1"), ev => parent.goToPage("/home")),
            active: enabled("button:1", true).toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Home, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:2"), ev => parent.goToPage("/search")),
            active: enabled("button:2").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Search, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:3"), ev => parent.goToPage("/share")),
            active: enabled("button:3").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().big_button),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Share2, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:4"), ev => parent.goToPage("/notifications")),
            active: enabled("button:4").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Bell, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:5"), ev => parent.goToPage("/account")),
            active: enabled("button:5").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.User, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    this.sheep = react_sheep__WEBPACK_IMPORTED_MODULE_3___default()(this);
  }

}, _temp2);
Nav.Secondary = (_temp3 = class extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        label,
        onBack
      } = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_secondary),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().back),
            onClick: onBack,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label),
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });
  }

}, _temp3);
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./containers/Home/Footer.js":
/*!***********************************!*\
  !*** ./containers/Home/Footer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./containers/Home/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\containers\\Home\\Footer.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //Footer Page Home

class FooterHome extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        enabled,
        setEnabled
      } = this.sheep;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
          className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FooterHome);

/***/ }),

/***/ "./containers/Home/Header.js":
/*!***********************************!*\
  !*** ./containers/Home/Header.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.js");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.scss */ "./containers/Home/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\containers\\Home\\Header.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //Header Page Home

class HeaderHome extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        enabled,
        setEnabled
      } = this.sheep;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__.default.Primary, {
            position: "sticky"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    this.parent = props.parent;
    this.sheep = props.parent.sheep;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderHome);

/***/ }),

/***/ "./containers/Home/Main.js":
/*!*********************************!*\
  !*** ./containers/Home/Main.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./util/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.js");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Main.module.scss */ "./containers/Home/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_reducers_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers/product */ "./store/reducers/product.js");


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\containers\\Home\\Main.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //Main Page Home

class MainHome extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        mapState,
        mapActions
      } = this.props;
      let parent = this.props.parent;
      let {
        enabled,
        setEnabled
      } = parent.sheep;
      let products = _util__WEBPACK_IMPORTED_MODULE_2__.default.mapObject(mapState.products, (key, product) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__.default.Product, {
          onClick: ev => mapActions.setSelectedProduct(product),
          image: product.imageUrl,
          onEnter: ev => parent.goToPage("/view")
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this);
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sentence),
              children: "productos compartidos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().body),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__.default.ContProduct, {
              children: products
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__.default.PrimaryBottom, {
            parent: this.parent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false);
    });

    this.parent = props.parent;
    this.sheep = props.parent.sheep;
    this.mapState = props.mapState;
    this.mapActions = props.mapActions;
  }

}

const mapStateToProps = ({
  productReducer
}) => {
  return {
    mapState: {
      products: productReducer.products
    }
  };
};

const mapActionsToProps = dispath => {
  return {
    mapActions: {
      setSelectedProduct: product => dispath((0,_store_reducers_product__WEBPACK_IMPORTED_MODULE_6__.setSelectedProduct)(product))
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapActionsToProps)(MainHome));

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sheep */ "react-sheep");
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sheep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _containers_Home_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Home/Header */ "./containers/Home/Header.js");
/* harmony import */ var _containers_Home_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Home/Main */ "./containers/Home/Main.js");
/* harmony import */ var _containers_Home_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Home/Footer */ "./containers/Home/Footer.js");

var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\Etica3\\pages\\home.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Home extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "goToPage", route => {
      this.sheep.setEnabled("loader")();
      setTimeout(() => next_router__WEBPACK_IMPORTED_MODULE_2___default().push(route), 800);
    });

    _defineProperty(this, "render", () => {
      let {
        Header,
        Main,
        Footer
      } = this;
      let {
        enabled,
        setEnabled
      } = this.sheep;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__.default.Blank, {
        show: enabled("loader"),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
          parent: this
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Main, {
          parent: this
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {
          parent: this
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this);
    });

    this.sheep = react_sheep__WEBPACK_IMPORTED_MODULE_3___default()(this);
    this.Header = _containers_Home_Header__WEBPACK_IMPORTED_MODULE_5__.default;
    this.Main = _containers_Home_Main__WEBPACK_IMPORTED_MODULE_6__.default;
    this.Footer = _containers_Home_Footer__WEBPACK_IMPORTED_MODULE_7__.default;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./components/styles/Card.module.scss":
/*!********************************************!*\
  !*** ./components/styles/Card.module.scss ***!
  \********************************************/
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


/***/ }),

/***/ "./components/styles/Loader.module.scss":
/*!**********************************************!*\
  !*** ./components/styles/Loader.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"loader_blank": "Loader_loader_blank__3QmfI",
	"animate_loader_blank": "Loader_animate_loader_blank__3il-5"
};


/***/ }),

/***/ "./components/styles/Nav.module.scss":
/*!*******************************************!*\
  !*** ./components/styles/Nav.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"nav_primary": "Nav_nav_primary__3uoO9",
	"left": "Nav_left__1K_lq",
	"logo": "Nav_logo__3GFyZ",
	"right": "Nav_right__2p4PG",
	"nav_primary_bottom": "Nav_nav_primary_bottom__5zwas",
	"button": "Nav_button__1dulC",
	"icon": "Nav_icon__2K59u",
	"big_button": "Nav_big_button__34vps",
	"nav_secondary": "Nav_nav_secondary__A8e3p",
	"back": "Nav_back__2m6eD",
	"label": "Nav_label__3bB_5"
};


/***/ }),

/***/ "./containers/Home/Footer.module.scss":
/*!********************************************!*\
  !*** ./containers/Home/Footer.module.scss ***!
  \********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__3CaJ5"
};


/***/ }),

/***/ "./containers/Home/Header.module.scss":
/*!********************************************!*\
  !*** ./containers/Home/Header.module.scss ***!
  \********************************************/
/***/ (function(module) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./containers/Home/Main.module.scss":
/*!******************************************!*\
  !*** ./containers/Home/Main.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main": "Main_main__2B5z2",
	"header": "Main_header__fcDcP",
	"sentence": "Main_sentence__2Bu1D",
	"body": "Main_body__2oG_Z",
	"block": "Main_block__1j6e8"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "event-glue":
/*!*****************************!*\
  !*** external "event-glue" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("event-glue");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-feather");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-sheep":
/*!******************************!*\
  !*** external "react-sheep" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-sheep");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/home.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FdGljYTMvLi9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29udGFpbmVycy9Ib21lL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9FdGljYTMvLi9jb250YWluZXJzL0hvbWUvSGVhZGVyLmpzIiwid2VicGFjazovL0V0aWNhMy8uL2NvbnRhaW5lcnMvSG9tZS9NYWluLmpzIiwid2VicGFjazovL0V0aWNhMy8uL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vc2VydmljZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FdGljYTMvLi9zdG9yZS9yZWR1Y2Vycy9wcm9kdWN0LmpzIiwid2VicGFjazovL0V0aWNhMy8uL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29tcG9uZW50cy9zdHlsZXMvQ2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9FdGljYTMvLi9jb21wb25lbnRzL3N0eWxlcy9Mb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29tcG9uZW50cy9zdHlsZXMvTmF2Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL0V0aWNhMy8uL2NvbnRhaW5lcnMvSG9tZS9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vRXRpY2EzLy4vY29udGFpbmVycy9Ib21lL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9FdGljYTMvLi9jb250YWluZXJzL0hvbWUvTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9FdGljYTMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcImV2ZW50LWdsdWVcIiIsIndlYnBhY2s6Ly9FdGljYTMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRXRpY2EzL2V4dGVybmFsIFwicmVhY3QtZmVhdGhlclwiIiwid2VicGFjazovL0V0aWNhMy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vRXRpY2EzL2V4dGVybmFsIFwicmVhY3Qtc2hlZXBcIiIsIndlYnBhY2s6Ly9FdGljYTMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXJkIiwiQ29udFByb2R1Y3QiLCJwcm9wcyIsImNoaWxkcmVuIiwic3R5bGVzIiwiUHJvZHVjdCIsImltYWdlIiwib25FbnRlciIsImNhcmRfcHJvZHVjdCIsImljb24iLCJDb250U29jaWFsTmV0IiwiU29jaWFsR29vZ2xlIiwiU29jaWFsRmFjZWJvb2siLCJMb2FkZXIiLCJCbGFuayIsInNob3ciLCJsb2FkZXJfYmxhbmsiLCJOYXYiLCJQcmltYXJ5IiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsInBvc2l0aW9uIiwiZmlndXJlIiwic2hlZXAiLCJQcmltYXJ5Qm90dG9tIiwicGFyZW50IiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJnbHVlIiwiZXYiLCJnb1RvUGFnZSIsInRvU3RyaW5nIiwiU2Vjb25kYXJ5IiwibGFiZWwiLCJvbkJhY2siLCJGb290ZXJIb21lIiwiZm9vdGVyIiwiSGVhZGVySG9tZSIsIk1haW5Ib21lIiwibWFwU3RhdGUiLCJtYXBBY3Rpb25zIiwicHJvZHVjdHMiLCJ1dGlsIiwia2V5IiwicHJvZHVjdCIsInNldFNlbGVjdGVkUHJvZHVjdCIsImltYWdlVXJsIiwibWFwU3RhdGVUb1Byb3BzIiwicHJvZHVjdFJlZHVjZXIiLCJtYXBBY3Rpb25zVG9Qcm9wcyIsImRpc3BhdGgiLCJjb25uZWN0IiwiSG9tZSIsInJvdXRlIiwic2V0VGltZW91dCIsIlJvdXRlciIsIkhlYWRlciIsIk1haW4iLCJGb290ZXIiLCJnZXRQcm9kdWN0cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJ1cGxvYWRQcm9kdWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInZhbHVlIiwic2V0IiwiX3N0YXRlIiwic2VsZWN0ZWRQcm9kdWN0IiwiQUREX1BST0RVQ1QiLCJJTklUX1BST0RVQ1RTIiwiU0VUX1NFTEVDVEVEX1BST0RVQ1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVTdGF0ZSIsIm5zdGF0ZSIsInR5cGUiLCJpZCIsImluaXRQcm9kdWN0cyIsImdldFN0YXRlIiwiYWRkUHJvZHVjdCIsInVwbG9hZGVkUHJvZHVjdCIsIm1hcE9iamVjdCIsIm9iamVjdCIsImNhbGxiYWNrIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUcsRUFBYjs7QUFFQUEsSUFBSSxDQUFDQyxXQUFMLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakMsTUFBSTtBQUFDQztBQUFELE1BQWFELEtBQWpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLHdGQUFoQjtBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQ0FSRDs7QUFVQUgsSUFBSSxDQUFDSyxPQUFMLEdBQWUsVUFBU0gsS0FBVCxFQUFnQjtBQUM3QixNQUFJO0FBQUNJLFNBQUQ7QUFBUUM7QUFBUixNQUFtQkwsS0FBdkI7QUFFQSxzQkFDRTtBQUNFLFdBQU8sRUFBRUssT0FEWDtBQUVFLGFBQVMsRUFBRUgsOEVBQW1CSTtBQUZoQyxLQUVzQ04sS0FGdEM7QUFBQSw0QkFHRTtBQUFLLGVBQVMsRUFBRUUsdUVBQWhCO0FBQThCLFNBQUcsRUFBRUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBS0U7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ2FyZCA9IHt9O1xyXG5cclxuQ2FyZC5Db250UHJvZHVjdCA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcbiAgbGV0IHtjaGlsZHJlbn0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2NhcmRfcHJvZHVjdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQ2FyZC5Qcm9kdWN0ID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuICBsZXQge2ltYWdlLCBvbkVudGVyfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBcclxuICAgICAgb25DbGljaz17b25FbnRlcn1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9wcm9kdWN0fSB7Li4ucHJvcHN9PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e2ltYWdlfS8+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17b25FbnRlcn0+XHJcbiAgICAgICAgPEljb24uQXJyb3dSaWdodCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5DYXJkLkNvbnRTb2NpYWxOZXQgPSBmdW5jdGlvbihwcm9wcykge1xyXG4gIGxldCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2NhcmRfc29jaWFsX25ldH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQ2FyZC5Tb2NpYWxHb29nbGUgPSBmdW5jdGlvbihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfc29jaWFsX2dvb2dsZX0+XHJcbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL0FjY291bnRfZ29vZ2xlLnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfS8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJfc2VudGVuY2V9PkluZ3Jlc2FyIGNvbiBnb29nbGU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkNhcmQuU29jaWFsRmFjZWJvb2sgPSBmdW5jdGlvbihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfc29jaWFsX2ZhY2Vib29rfT5cclxuICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvQWNjb3VudF9mYWNlYm9vay5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0vPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iX3NlbnRlbmNlfT5JbmdyZXNhciBjb24gZ29vZ2xlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvTG9hZGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IExvYWRlciA9IHt9O1xyXG5cclxuTG9hZGVyLkJsYW5rID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuICBsZXQge2NoaWxkcmVuLCBzaG93fSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7XHJcbiAgICAgICAgc2hvdyAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX2JsYW5rfT48L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdsdWUgZnJvbSAnZXZlbnQtZ2x1ZSc7XHJcbmltcG9ydCBzaGVlcCBmcm9tICdyZWFjdC1zaGVlcCc7XHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvTmF2Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE5hdiA9IHt9O1xyXG5cclxuTmF2LlByaW1hcnkgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc2hlZXAgPSBzaGVlcCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciA9ICgpPT4ge1xyXG4gICAgbGV0IHtwb3NpdGlvbn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfcHJpbWFyeX0gc3R5bGU9e3twb3NpdGlvbn19PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PmhhcHB5IGVhdDwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2Uvcm91bmQuc3ZnXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmlndXJlfS8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuTmF2LlByaW1hcnlCb3R0b20gPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc2hlZXAgPSBzaGVlcCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciA9ICgpPT4ge1xyXG4gICAgbGV0IHtwb3NpdGlvbiwgcGFyZW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQge2VuYWJsZWQsIHNldEVuYWJsZWR9ID0gdGhpcy5zaGVlcDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X3ByaW1hcnlfYm90dG9tfSBzdHlsZT17e3Bvc2l0aW9ufX0+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtnbHVlKHNldEVuYWJsZWQoXCJidXR0b246MVwiKSwgZXYgPT4gcGFyZW50LmdvVG9QYWdlKFwiL2hvbWVcIikpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2VuYWJsZWQoXCJidXR0b246MVwiLCB0cnVlKS50b1N0cmluZygpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbi5Ib21lIGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17Z2x1ZShzZXRFbmFibGVkKFwiYnV0dG9uOjJcIiksIGV2ID0+IHBhcmVudC5nb1RvUGFnZShcIi9zZWFyY2hcIikpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2VuYWJsZWQoXCJidXR0b246MlwiKS50b1N0cmluZygpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbi5TZWFyY2ggY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dsdWUoc2V0RW5hYmxlZChcImJ1dHRvbjozXCIpLCBldiA9PiBwYXJlbnQuZ29Ub1BhZ2UoXCIvc2hhcmVcIikpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2VuYWJsZWQoXCJidXR0b246M1wiKS50b1N0cmluZygpfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmlnX2J1dHRvbn0+XHJcbiAgICAgICAgICAgIDxJY29uLlNoYXJlMiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufS8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dsdWUoc2V0RW5hYmxlZChcImJ1dHRvbjo0XCIpLCBldiA9PiBwYXJlbnQuZ29Ub1BhZ2UoXCIvbm90aWZpY2F0aW9uc1wiKSl9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17ZW5hYmxlZChcImJ1dHRvbjo0XCIpLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxJY29uLkJlbGwgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtnbHVlKHNldEVuYWJsZWQoXCJidXR0b246NVwiKSwgZXYgPT4gcGFyZW50LmdvVG9QYWdlKFwiL2FjY291bnRcIikpfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2VuYWJsZWQoXCJidXR0b246NVwiKS50b1N0cmluZygpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8SWNvbi5Vc2VyIGNsYXNzTmFtZT17c3R5bGVzLmljb259Lz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk5hdi5TZWNvbmRhcnkgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciA9ICgpPT4ge1xyXG4gICAgbGV0IHtsYWJlbCwgb25CYWNrfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9zZWNvbmRhcnl9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrfSBvbkNsaWNrPXtvbkJhY2t9PlxyXG4gICAgICAgICAgICA8SWNvbi5BcnJvd0xlZnQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvcD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vL0Zvb3RlciBQYWdlIEhvbWVcclxuY2xhc3MgRm9vdGVySG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgdGhpcy5zaGVlcCA9IHByb3BzLnBhcmVudC5zaGVlcDtcclxuICB9XHJcblxyXG4gIHJlbmRlciA9ICgpPT4ge1xyXG4gICAgbGV0IHtlbmFibGVkLCBzZXRFbmFibGVkfSA9IHRoaXMuc2hlZXA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJIb21lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXYnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbi8vSGVhZGVyIFBhZ2UgSG9tZVxyXG5jbGFzcyBIZWFkZXJIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwcm9wcy5wYXJlbnQ7XHJcbiAgICB0aGlzLnNoZWVwID0gcHJvcHMucGFyZW50LnNoZWVwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyID0gKCk9PiB7XHJcbiAgICBsZXQge2VuYWJsZWQsIHNldEVuYWJsZWR9ID0gdGhpcy5zaGVlcDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxOYXYuUHJpbWFyeSBwb3NpdGlvbj1cInN0aWNreVwiLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJIb21lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uLy4uL3V0aWwnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdic7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtzZXRTZWxlY3RlZFByb2R1Y3R9IGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3QnO1xyXG5cclxuLy9NYWluIFBhZ2UgSG9tZVxyXG5jbGFzcyBNYWluSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucGFyZW50ID0gcHJvcHMucGFyZW50O1xyXG4gICAgdGhpcy5zaGVlcCA9IHByb3BzLnBhcmVudC5zaGVlcDtcclxuICAgIHRoaXMubWFwU3RhdGUgPSBwcm9wcy5tYXBTdGF0ZTtcclxuICAgIHRoaXMubWFwQWN0aW9ucyA9IHByb3BzLm1hcEFjdGlvbnM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgPSAoKT0+IHtcclxuICAgIGxldCB7bWFwU3RhdGUsIG1hcEFjdGlvbnN9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzLnByb3BzLnBhcmVudDtcclxuICAgIGxldCB7ZW5hYmxlZCwgc2V0RW5hYmxlZH0gPSBwYXJlbnQuc2hlZXA7XHJcblxyXG4gICAgbGV0IHByb2R1Y3RzID0gdXRpbC5tYXBPYmplY3QobWFwU3RhdGUucHJvZHVjdHMsIChrZXksIHByb2R1Y3QpPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkLlByb2R1Y3QgXHJcbiAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2V2PT5tYXBBY3Rpb25zLnNldFNlbGVjdGVkUHJvZHVjdChwcm9kdWN0KX1cclxuICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlVXJsfVxyXG4gICAgICAgICAgb25FbnRlcj17ZXY9PnBhcmVudC5nb1RvUGFnZShcIi92aWV3XCIpfS8+XHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VudGVuY2V9PlxyXG4gICAgICAgICAgICAgIHByb2R1Y3RvcyBjb21wYXJ0aWRvc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRQcm9kdWN0PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0c31cclxuICAgICAgICAgICAgPC9DYXJkLkNvbnRQcm9kdWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TmF2LlByaW1hcnlCb3R0b20gcGFyZW50PXt0aGlzLnBhcmVudH0vPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3Byb2R1Y3RSZWR1Y2VyfSk9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1hcFN0YXRlOiB7XHJcbiAgICAgIHByb2R1Y3RzOiAgcHJvZHVjdFJlZHVjZXIucHJvZHVjdHNcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcEFjdGlvbnNUb1Byb3BzID0gKGRpc3BhdGgpPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBtYXBBY3Rpb25zOiB7XHJcbiAgICAgIHNldFNlbGVjdGVkUHJvZHVjdDogKHByb2R1Y3QpPT4gXHJcbiAgICAgIGRpc3BhdGgoc2V0U2VsZWN0ZWRQcm9kdWN0KHByb2R1Y3QpKVxyXG4gICAgfSAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcEFjdGlvbnNUb1Byb3BzKShNYWluSG9tZSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzaGVlcCBmcm9tICdyZWFjdC1zaGVlcCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvSG9tZS9IZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL0hvbWUvTWFpbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29udGFpbmVycy9Ib21lL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zaGVlcCA9IHNoZWVwKHRoaXMpO1xyXG4gICAgdGhpcy5IZWFkZXIgPSBIZWFkZXI7XHJcbiAgICB0aGlzLk1haW4gPSBNYWluO1xyXG4gICAgdGhpcy5Gb290ZXIgPSBGb290ZXI7XHJcbiAgfVxyXG5cclxuICBnb1RvUGFnZSA9IChyb3V0ZSk9PiB7XHJcbiAgICB0aGlzLnNoZWVwLnNldEVuYWJsZWQoXCJsb2FkZXJcIikoKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PiBSb3V0ZXIucHVzaChyb3V0ZSksIDgwMCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgPSAoKT0+IHtcclxuICAgIGxldCB7SGVhZGVyLCBNYWluLCBGb290ZXJ9ID0gdGhpcztcclxuICAgIGxldCB7ZW5hYmxlZCwgc2V0RW5hYmxlZH0gPSB0aGlzLnNoZWVwO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TG9hZGVyLkJsYW5rIHNob3c9e2VuYWJsZWQoXCJsb2FkZXJcIil9PlxyXG4gICAgICAgIDxIZWFkZXIgcGFyZW50PXt0aGlzfS8+XHJcbiAgICAgICAgPE1haW4gcGFyZW50PXt0aGlzfS8+XHJcbiAgICAgICAgPEZvb3RlciBwYXJlbnQ9e3RoaXN9Lz5cclxuICAgICAgPC9Mb2FkZXIuQmxhbms+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKCk9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG4gICAgbGV0IHVybCA9IFwiaHR0cDovLzE5Mi4xNjguMC4xMDc6NDAwMC9wcm9kdWN0cy9nZXRfYWxsXCI7XHJcblxyXG4gICAgYXhpb3MuZ2V0KHVybClcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiB7XHJcbiAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgXHJcbiAgICAgIGlmKGRhdGEuZXJyb3IgPT09IHRydWUpXHJcbiAgICAgICAgLy9pZ25vcmUgZXJyb3JcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBsZXQgcHJvZHVjdHMgPSBkYXRhLm1hcCgocHJvZHVjdCk9PiB7XHJcbiAgICAgICAgcHJvZHVjdC5pbWFnZVVybCA9IGBodHRwOi8vMTkyLjE2OC4wLjEwNzo0MDAwLyR7cHJvZHVjdC5pbWFnZVVybH1gO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmVzb2x2ZSh7Li4ucHJvZHVjdHN9KTtcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZFByb2R1Y3QgPSAocHJvZHVjdCk9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG4gICAgbGV0IHVybCA9IFwiaHR0cDovLzE5Mi4xNjguMC4xMDc6NDAwMC9wcm9kdWN0cy91cGxvYWRcIjtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgXHJcbiAgICB1dGlsLm1hcE9iamVjdChwcm9kdWN0LCAoa2V5LCB2YWx1ZSk9PiB7XHJcbiAgICAgIGZvcm1EYXRhLnNldChrZXksIHZhbHVlKTtcclxuICAgIH0pXHJcblxyXG4gICAgYXhpb3MucG9zdCh1cmwsIGZvcm1EYXRhKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgaWYoZGF0YS5lcnJvciA9PT0gdHJ1ZSlcclxuICAgICAgICAvL2lnbm9yZSBlcnJvclxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBwcm9kdWN0ID0gZGF0YTtcclxuICAgICAgcHJvZHVjdC5pbWFnZVVybCA9IGBodHRwOi8vMTkyLjE2OC4wLjEwNzo0MDAwLyR7cHJvZHVjdC5pbWFnZVVybH1gO1xyXG4gICAgICByZXNvbHZlKHByb2R1Y3QpO1xyXG4gICAgfSlcclxuICB9KVxyXG59IiwiaW1wb3J0IHt1cGxvYWRQcm9kdWN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0JztcclxuXHJcbmNvbnN0IF9zdGF0ZSA9IHtcclxuICBwcm9kdWN0czoge30sXHJcbiAgc2VsZWN0ZWRQcm9kdWN0OiB7fVxyXG59XHJcblxyXG5jb25zdCBBRERfUFJPRFVDVCA9IFwiQUREX1BST0RVQ1RcIjtcclxuY29uc3QgSU5JVF9QUk9EVUNUUyA9IFwiSU5JVF9QUk9EVUNUU1wiO1xyXG5jb25zdCBTRVRfU0VMRUNURURfUFJPRFVDVCA9IFwiU0VUX1NFTEVDVEVEX1BST0RVQ1RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU9X3N0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgdXBkYXRlU3RhdGUgPSAobnN0YXRlKT0+ICh7Li4uc3RhdGUsIC4uLm5zdGF0ZX0pO1xyXG5cclxuICBpZihhY3Rpb24udHlwZSA9PT0gSU5JVF9QUk9EVUNUUykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wcm9kdWN0c1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmKGFjdGlvbi50eXBlID09PSBBRERfUFJPRFVDVCkge1xyXG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0cyxcclxuICAgICAgICBbYWN0aW9uLnByb2R1Y3QuaWRdOiBhY3Rpb24ucHJvZHVjdCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmKGFjdGlvbi50eXBlID09PSBTRVRfU0VMRUNURURfUFJPRFVDVCkge1xyXG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQcm9kdWN0OiBcclxuICAgICAgYWN0aW9uLnByb2R1Y3RcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0UHJvZHVjdHMgPSAocHJvZHVjdHMpPT4gKGRpc3BhdGgsIGdldFN0YXRlKT0+IHtcclxuICBkaXNwYXRoKHtcclxuICAgIHR5cGU6IElOSVRfUFJPRFVDVFMsXHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgfSkgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0KT0+IGFzeW5jIChkaXNwYXRoLCBnZXRTdGF0ZSk9PiB7XHJcbiAgbGV0IHVwbG9hZGVkUHJvZHVjdCA9IGF3YWl0IHVwbG9hZFByb2R1Y3QocHJvZHVjdCk7XHJcbiAgcmV0dXJuIGRpc3BhdGgoe1xyXG4gICAgdHlwZTogQUREX1BST0RVQ1QsXHJcbiAgICBwcm9kdWN0OiB1cGxvYWRlZFByb2R1Y3RcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRQcm9kdWN0ID0gKHByb2R1Y3QpPT4gKGRpc3BhdGgsIGdldFN0YXRlKT0+IHsgIFxyXG4gIGRpc3BhdGgoe1xyXG4gICAgdHlwZTogU0VUX1NFTEVDVEVEX1BST0RVQ1QsXHJcbiAgICBwcm9kdWN0OiBwcm9kdWN0XHJcbiAgfSlcclxufSIsImNvbnN0IHV0aWwgPSB7fTtcclxuXHJcbnV0aWwubWFwT2JqZWN0ID0gZnVuY3Rpb24ob2JqZWN0LCBjYWxsYmFjaykge1xyXG5cclxuICBpZih0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKVxyXG4gICAgcmV0dXJuIG51bGw7XHJcblxyXG4gIGlmKEFycmF5LmlzQXJyYXkob2JqZWN0KSlcclxuICAgIHJldHVybiBvYmplY3QubWFwKGNhbGxiYWNrKTtcclxuXHJcblxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnJldmVyc2UoKS5tYXAoKGtleSk9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgIHJldHVybiBjYWxsYmFjayhrZXksIHZhbHVlKTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9jYXJkX3Byb2R1Y3RcIjogXCJDYXJkX2NvbnRhaW5lcl9jYXJkX3Byb2R1Y3RfXzFmWDgtXCIsXG5cdFwiY2FyZF9wcm9kdWN0XCI6IFwiQ2FyZF9jYXJkX3Byb2R1Y3RfX3BJU0NvXCIsXG5cdFwiYnV0dG9uXCI6IFwiQ2FyZF9idXR0b25fXzM3MFM3XCIsXG5cdFwiaWNvblwiOiBcIkNhcmRfaWNvbl9faURfYTZcIixcblx0XCJjb250YWluZXJfY2FyZF9zb2NpYWxfbmV0XCI6IFwiQ2FyZF9jb250YWluZXJfY2FyZF9zb2NpYWxfbmV0X18zTGRqZ1wiLFxuXHRcImNhcmRfc29jaWFsX2dvb2dsZVwiOiBcIkNhcmRfY2FyZF9zb2NpYWxfZ29vZ2xlX18zWXItNlwiLFxuXHRcImltYWdlXCI6IFwiQ2FyZF9pbWFnZV9fcnpMclBcIixcblx0XCJiX3NlbnRlbmNlXCI6IFwiQ2FyZF9iX3NlbnRlbmNlX18zdFNGWlwiLFxuXHRcImNhcmRfc29jaWFsX2ZhY2Vib29rXCI6IFwiQ2FyZF9jYXJkX3NvY2lhbF9mYWNlYm9va19fTENobGdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlcl9ibGFua1wiOiBcIkxvYWRlcl9sb2FkZXJfYmxhbmtfXzNRbWZJXCIsXG5cdFwiYW5pbWF0ZV9sb2FkZXJfYmxhbmtcIjogXCJMb2FkZXJfYW5pbWF0ZV9sb2FkZXJfYmxhbmtfXzNpbC01XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZfcHJpbWFyeVwiOiBcIk5hdl9uYXZfcHJpbWFyeV9fM3VvTzlcIixcblx0XCJsZWZ0XCI6IFwiTmF2X2xlZnRfXzFLX2xxXCIsXG5cdFwibG9nb1wiOiBcIk5hdl9sb2dvX18zR0Z5WlwiLFxuXHRcInJpZ2h0XCI6IFwiTmF2X3JpZ2h0X18ycDRQR1wiLFxuXHRcIm5hdl9wcmltYXJ5X2JvdHRvbVwiOiBcIk5hdl9uYXZfcHJpbWFyeV9ib3R0b21fXzV6d2FzXCIsXG5cdFwiYnV0dG9uXCI6IFwiTmF2X2J1dHRvbl9fMWR1bENcIixcblx0XCJpY29uXCI6IFwiTmF2X2ljb25fXzJLNTl1XCIsXG5cdFwiYmlnX2J1dHRvblwiOiBcIk5hdl9iaWdfYnV0dG9uX18zNHZwc1wiLFxuXHRcIm5hdl9zZWNvbmRhcnlcIjogXCJOYXZfbmF2X3NlY29uZGFyeV9fQThlM3BcIixcblx0XCJiYWNrXCI6IFwiTmF2X2JhY2tfXzJtNmVEXCIsXG5cdFwibGFiZWxcIjogXCJOYXZfbGFiZWxfXzNiQl81XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zQ2FKNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiTWFpbl9tYWluX18yQjV6MlwiLFxuXHRcImhlYWRlclwiOiBcIk1haW5faGVhZGVyX19mY0RjUFwiLFxuXHRcInNlbnRlbmNlXCI6IFwiTWFpbl9zZW50ZW5jZV9fMkJ1MURcIixcblx0XCJib2R5XCI6IFwiTWFpbl9ib2R5X18yb0dfWlwiLFxuXHRcImJsb2NrXCI6IFwiTWFpbl9ibG9ja19fMWo2ZThcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudC1nbHVlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZlYXRoZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaGVlcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9