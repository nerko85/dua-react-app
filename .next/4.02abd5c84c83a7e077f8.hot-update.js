webpackHotUpdate(4,{

/***/ "./components/Header/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\newProject\\dua-react-app\\components\\Header\\Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 // import css from './Navigation.css';
// const Navigation = (props) => {
//     return (
//         <ul>
//             <li><Link href="/"><a>Home</a></Link></li>
//             <li><Link href="/about"><a>About</a></Link></li>
//             <li><Link href="/contact"><a>Contact</a></Link></li>
//             <li><Link href="/login"><a>Login</a></Link></li>
//         </ul>
//     );
// };
// export default Navigation;
///

var SubMenu = __WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].SubMenu;
var MenuItemGroup = __WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].ItemGroup;

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        current: 'mail'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        console.log('click ', e);

        _this.setState({
          current: e.key
        });
      }
    }), _temp));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */], {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "About"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Contact"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["a" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Log in"))));
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "./node_modules/antd/es/form/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form__ = __webpack_require__("./node_modules/antd/es/form/Form.js");

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__Form__["a" /* default */]);

/***/ }),

/***/ "./node_modules/antd/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__affix__ = __webpack_require__("./node_modules/antd/es/affix/index.js");
/* unused harmony reexport Affix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anchor__ = __webpack_require__("./node_modules/antd/es/anchor/index.js");
/* unused harmony reexport Anchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_complete__ = __webpack_require__("./node_modules/antd/es/auto-complete/index.js");
/* unused harmony reexport AutoComplete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert__ = __webpack_require__("./node_modules/antd/es/alert/index.js");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar__ = __webpack_require__("./node_modules/antd/es/avatar/index.js");
/* unused harmony reexport Avatar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__back_top__ = __webpack_require__("./node_modules/antd/es/back-top/index.js");
/* unused harmony reexport BackTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__badge__ = __webpack_require__("./node_modules/antd/es/badge/index.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb__ = __webpack_require__("./node_modules/antd/es/breadcrumb/index.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button__ = __webpack_require__("./node_modules/antd/es/button/index.js");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar__ = __webpack_require__("./node_modules/antd/es/calendar/index.js");
/* unused harmony reexport Calendar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card__ = __webpack_require__("./node_modules/antd/es/card/index.js");
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collapse__ = __webpack_require__("./node_modules/antd/es/collapse/index.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel__ = __webpack_require__("./node_modules/antd/es/carousel/index.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cascader__ = __webpack_require__("./node_modules/antd/es/cascader/index.js");
/* unused harmony reexport Cascader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkbox__ = __webpack_require__("./node_modules/antd/es/checkbox/index.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__col__ = __webpack_require__("./node_modules/antd/es/col/index.js");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__date_picker__ = __webpack_require__("./node_modules/antd/es/date-picker/index.js");
/* unused harmony reexport DatePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__divider__ = __webpack_require__("./node_modules/antd/es/divider/index.js");
/* unused harmony reexport Divider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dropdown__ = __webpack_require__("./node_modules/antd/es/dropdown/index.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form__ = __webpack_require__("./node_modules/antd/es/form/index.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__icon__ = __webpack_require__("./node_modules/antd/es/icon/index.js");
/* unused harmony reexport Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__input__ = __webpack_require__("./node_modules/antd/es/input/index.js");
/* unused harmony reexport Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__input_number__ = __webpack_require__("./node_modules/antd/es/input-number/index.js");
/* unused harmony reexport InputNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__layout__ = __webpack_require__("./node_modules/antd/es/layout/index.js");
/* unused harmony reexport Layout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__list__ = __webpack_require__("./node_modules/antd/es/list/index.js");
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__locale_provider__ = __webpack_require__("./node_modules/antd/es/locale-provider/index.js");
/* unused harmony reexport LocaleProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__message__ = __webpack_require__("./node_modules/antd/es/message/index.js");
/* unused harmony reexport message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__menu__ = __webpack_require__("./node_modules/antd/es/menu/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_27__menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modal__ = __webpack_require__("./node_modules/antd/es/modal/index.js");
/* unused harmony reexport Modal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__notification__ = __webpack_require__("./node_modules/antd/es/notification/index.js");
/* unused harmony reexport notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pagination__ = __webpack_require__("./node_modules/antd/es/pagination/index.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__popconfirm__ = __webpack_require__("./node_modules/antd/es/popconfirm/index.js");
/* unused harmony reexport Popconfirm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__popover__ = __webpack_require__("./node_modules/antd/es/popover/index.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__progress__ = __webpack_require__("./node_modules/antd/es/progress/index.js");
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__radio__ = __webpack_require__("./node_modules/antd/es/radio/index.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__rate__ = __webpack_require__("./node_modules/antd/es/rate/index.js");
/* unused harmony reexport Rate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__row__ = __webpack_require__("./node_modules/antd/es/row/index.js");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__select__ = __webpack_require__("./node_modules/antd/es/select/index.js");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__slider__ = __webpack_require__("./node_modules/antd/es/slider/index.js");
/* unused harmony reexport Slider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__spin__ = __webpack_require__("./node_modules/antd/es/spin/index.js");
/* unused harmony reexport Spin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__steps__ = __webpack_require__("./node_modules/antd/es/steps/index.js");
/* unused harmony reexport Steps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__switch__ = __webpack_require__("./node_modules/antd/es/switch/index.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__table__ = __webpack_require__("./node_modules/antd/es/table/index.js");
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__transfer__ = __webpack_require__("./node_modules/antd/es/transfer/index.js");
/* unused harmony reexport Transfer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__tree__ = __webpack_require__("./node_modules/antd/es/tree/index.js");
/* unused harmony reexport Tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__tree_select__ = __webpack_require__("./node_modules/antd/es/tree-select/index.js");
/* unused harmony reexport TreeSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__tabs__ = __webpack_require__("./node_modules/antd/es/tabs/index.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tag__ = __webpack_require__("./node_modules/antd/es/tag/index.js");
/* unused harmony reexport Tag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__time_picker__ = __webpack_require__("./node_modules/antd/es/time-picker/index.js");
/* unused harmony reexport TimePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__timeline__ = __webpack_require__("./node_modules/antd/es/timeline/index.js");
/* unused harmony reexport Timeline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__tooltip__ = __webpack_require__("./node_modules/antd/es/tooltip/index.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__mention__ = __webpack_require__("./node_modules/antd/es/mention/index.js");
/* unused harmony reexport Mention */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__upload__ = __webpack_require__("./node_modules/antd/es/upload/index.js");
/* unused harmony reexport Upload */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__version__ = __webpack_require__("./node_modules/antd/es/version/index.js");
/* unused harmony reexport version */























































/***/ })

})
//# sourceMappingURL=4.02abd5c84c83a7e077f8.hot-update.js.map