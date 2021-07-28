exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 1999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5683);
/* harmony import */ var _styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__);





const Loader = {};

Loader.Blank = function (props) {
  let {
    children,
    show
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children, show && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loader_blank)
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Loader);

/***/ }),

/***/ 3511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6380);
/* harmony import */ var event_glue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(event_glue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2081);
/* harmony import */ var react_sheep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sheep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9337);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(691);
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5__);




var _temp, _temp2, _temp3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Nav = {};
Nav.Primary = (_temp = class extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "render", () => {
      let {
        position
      } = this.props;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_primary),
          style: {
            position
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().left),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
              children: "happy eat"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().right),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/image/round.svg",
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().figure)
            })
          })]
        })
      });
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
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_primary_bottom),
          style: {
            position
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:1"), ev => parent.goToPage("/home")),
            active: enabled("button:1", true).toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.Home, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:2"), ev => parent.goToPage("/search")),
            active: enabled("button:2").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.Search, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:3"), ev => parent.goToPage("/share")),
            active: enabled("button:3").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().big_button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.Share2, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:4"), ev => parent.goToPage("/notifications")),
            active: enabled("button:4").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.Bell, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: event_glue__WEBPACK_IMPORTED_MODULE_2___default()(setEnabled("button:5"), ev => parent.goToPage("/account")),
            active: enabled("button:5").toString(),
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.User, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          })]
        })
      });
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
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
          className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_secondary),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().back),
            onClick: onBack,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__.ArrowLeft, {
              className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label),
            children: label
          })]
        })
      });
    });
  }

}, _temp3);
/* harmony default export */ __webpack_exports__["Z"] = (Nav);

/***/ }),

/***/ 5683:
/***/ (function(module) {

// Exports
module.exports = {
	"loader_blank": "Loader_loader_blank__3QmfI",
	"animate_loader_blank": "Loader_animate_loader_blank__3il-5"
};


/***/ }),

/***/ 691:
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


/***/ })

};
;