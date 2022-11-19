"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchTable = void 0;

var _litElement = require("./lit-element/lit-element.js");

require("./search-form.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral([" ", " "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <button class=\"layui-btn layui-btn-sm\" lay-event=\"", "\">\n                  ", "\n                </button>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        <script type=\"text/html\" id=\"", "\">\n          <div class=\"layui-btn-container\">\n            ", "\n          </div>\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <search-form\n          searchSettings=", "\n        ></search-form>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"layui-fluid\">\n        ", "\n\n        <!--\u5B9A\u4E49\u8868\u683C-->\n        <div class=\"layui-row\">\n          <table id=\"Table\" lay-filter=\"Lay\"></table>\n        </div>\n\n        ", " ", "\n      </div>\n    "]);

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

var SearchTable =
/*#__PURE__*/
function (_LitElement) {
  _inherits(SearchTable, _LitElement);

  _createClass(SearchTable, null, [{
    key: "properties",
    get: function get() {
      return {
        renderSetting: {
          type: Object
        },
        toolbars: {
          type: Array
        }
      };
    }
  }]);

  function SearchTable() {
    _classCallCheck(this, SearchTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchTable).call(this));
  }

  _createClass(SearchTable, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.renderSearchForm(), this.renderTableToolbar(), this.renderFieldToolbar());
    }
  }, {
    key: "renderSearchForm",
    value: function renderSearchForm() {
      var searchSettings = this.searchSettings();

      if (searchSettings.length > 0) {
        return (0, _litElement.html)(_templateObject2(), JSON.stringify(searchSettings));
      }
    }
  }, {
    key: "searchSettings",
    value: function searchSettings() {
      var searchSettings = [];
      this.renderSetting.cols[0].forEach(function (col) {
        if (col.search) {
          var searchSetting = {
            field: col.field,
            label: col.label || col.title,
            valueType: col.valueType,
            valueEnum: col.valueEnum,
            tooltip: col.tooltip
          };
          searchSettings.push(searchSetting);
        }
      });
      return searchSettings;
    }
  }, {
    key: "renderTableToolbar",
    value: function renderTableToolbar() {
      if (!!this.toolbars && this.toolbars.length > 0) {
        return this.renderToolbar("toolbar", this.toolbars);
      }
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar(id, toolbars) {
      if (!!toolbars && toolbars.length > 0) {
        return (0, _litElement.html)(_templateObject3(), id, toolbars.map(function (bar) {
          return (0, _litElement.html)(_templateObject4(), bar.event, bar.text);
        }));
      }
    }
  }, {
    key: "renderFieldToolbar",
    value: function renderFieldToolbar() {
      var _this = this;

      var fieldBars = [];
      this.renderSetting.cols[0].forEach(function (col) {
        if (col.toolbar && col.toolbars) {
          var bar = {
            toolbars: col.toolbars,
            id: col.toolbar.replace("#", "")
          };
          fieldBars.push(bar);
        }
      });
      return (0, _litElement.html)(_templateObject5(), fieldBars.map(function (bar) {
        return (0, _litElement.html)(_templateObject6(), _this.renderToolbar(bar.id, bar.toolbars));
      }));
    }
  }]);

  return SearchTable;
}(_litElement.LitElement);

exports.SearchTable = SearchTable;
customElements.define("search-table", SearchTable);