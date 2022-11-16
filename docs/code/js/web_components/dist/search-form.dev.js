"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchForm = void 0;

var _litElement = require("./lit-element/lit-element.js");

require("./search-input.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"layui-row layui-col-space10\" style=\"margin-top: 5px\">\n        <form class=\"layui-form\" action=\"\">\n          ", "\n\n          <div class=\"layui-input-inline\">\n            <button\n              class=\"layui-btn\"\n              id=\"searchBtn\"\n              lay-submit=\"\"\n              lay-filter=\"search\"\n            >\n              \u641C\u7D22\n            </button>\n          </div>\n        </form>\n      </div>\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<search-input\n            setting=\"", "\"\n          ></search-input>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<search-input\n            setting=\"", "\"\n          ></search-input>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchForm =
/*#__PURE__*/
function (_LitElement) {
  _inherits(SearchForm, _LitElement);

  _createClass(SearchForm, null, [{
    key: "properties",
    get: function get() {
      return {
        searchSettings: {
          type: Array
        }
      };
    }
  }]);

  function SearchForm() {
    _classCallCheck(this, SearchForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).call(this));
  }

  _createClass(SearchForm, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "renderSearchItems",
    value: function renderSearchItems() {
      var contentHtml = this.searchSettings.map(function (item) {
        switch (item.valueType) {
          case "text":
            return (0, _litElement.html)(_templateObject(), JSON.stringify(item));
          //可再扩展增加其他表单项

          default:
            {
              return (0, _litElement.html)(_templateObject2(), JSON.stringify(item));
            }
        }
      });
      return (0, _litElement.html)(_templateObject3(), contentHtml);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject4(), this.renderSearchItems());
    }
  }]);

  return SearchForm;
}(_litElement.LitElement);

exports.SearchForm = SearchForm;
customElements.define("search-form", SearchForm);