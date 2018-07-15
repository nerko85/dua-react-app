webpackHotUpdate(4,{

/***/ "./components/Container/DuaContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__ = __webpack_require__("./components/Container/DuaContainer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DuaContainer_css__);
var _jsxFileName = "/home/abdurahman/Desktop/dua-react-app/components/Container/DuaContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Search = __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Input */].Search;

var DuaWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(DuaWrapper, _Component);

  function DuaWrapper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DuaWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DuaWrapper.__proto__ || Object.getPrototypeOf(DuaWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        duas: [{
          // id:undefined,
          title: 'Nermin',
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!" // category: undefined,
          // source: undefined,
          // chain: undefined

        }, {
          // id:undefined,
          title: 'Eso Ibada',
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!" // category: undefined,
          // source: undefined,
          // chain: undefined

        }, {
          // id:undefined,
          title: 'Shalilalalaj',
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!" // category: undefined,
          // source: undefined,
          // chain: undefined

        }, {
          // id:undefined,
          title: 'Sumeja',
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!" // category: undefined,
          // source: undefined,
          // chain: undefined

        }]
      }
    }), _temp));
  }

  _createClass(DuaWrapper, [{
    key: "onHandleChange",
    value: function onHandleChange(e) {
      var duas = this.state.duas;
      var results = duas.filter(function (dua) {
        var regex = new RegExp(e.target.value, 'gi');
        return dua.title.match(regex) || dua.body.match(regex);
      });
      console.log(results);
    } // onHandleSearch(e){
    //     const text = e.target.value.toLowerCase();
    //     document.querySelectorAll('.collection-item').forEach(function(task){
    //         const item = task.innerText.toLowerCase();
    //         if(item.indexOf(text) != -1){
    //             task.style.display = 'block';
    //         } else {
    //             task.style.display = 'none';
    //         }
    //     })
    // }

  }, {
    key: "render",
    value: function render() {
      var duas = this.state.duas;
      var novo = duas.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Duas, {
          key: index,
          title: item.title,
          content: item.body,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
        span: 12,
        className: __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default.a.test,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputField, {
        duas: this.state.duas,
        onChange: this.onHandleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, novo));
    }
  }]);

  return DuaWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



var InputField =
/*#__PURE__*/
function (_Component2) {
  _inherits(InputField, _Component2);

  function InputField(props) {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Search, {
        placeholder: "input search text",
        enterButton: "Search Duas",
        size: "large",
        onChange: this.onHandleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }));
    }
  }]);

  return InputField;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Duas = function Duas(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Col */], {
    lg: {
      span: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_2__DuaContainer_css___default.a.test,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["e" /* Row */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Card */], {
    title: props.title,
    style: {
      width: 300
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, props.content))));
};

/***/ })

})
//# sourceMappingURL=4.78f9a3fb354c7c30e7eb.hot-update.js.map