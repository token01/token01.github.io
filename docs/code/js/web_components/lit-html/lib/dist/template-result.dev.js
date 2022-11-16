"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGTemplateResult = exports.TemplateResult = void 0;

var _dom = require("./dom.js");

var _template = require("./template.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
var commentMarker = " ".concat(_template.marker, " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment position.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = _template.lastAttributeNameRegex.exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : _template.nodeMarker);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template.boundAttributeSuffix + attributeMatch[3] + _template.marker;
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      var value = this.getHTML();

      if (policy !== undefined) {
        // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
      }

      template.innerHTML = value;
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */


exports.TemplateResult = TemplateResult;

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      (0, _dom.reparentNodes)(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

exports.SVGTemplateResult = SVGTemplateResult;