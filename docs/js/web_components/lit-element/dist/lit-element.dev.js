"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  html: true,
  svg: true,
  TemplateResult: true,
  SVGTemplateResult: true
};
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _litHtml.html;
  }
});
Object.defineProperty(exports, "svg", {
  enumerable: true,
  get: function get() {
    return _litHtml.svg;
  }
});
Object.defineProperty(exports, "TemplateResult", {
  enumerable: true,
  get: function get() {
    return _litHtml.TemplateResult;
  }
});
Object.defineProperty(exports, "SVGTemplateResult", {
  enumerable: true,
  get: function get() {
    return _litHtml.SVGTemplateResult;
  }
});
exports.LitElement = void 0;

var _shadyRender = require("../lit-html/lib/shady-render.js");

var _updatingElement = require("./lib/updating-element.js");

Object.keys(_updatingElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updatingElement[key];
    }
  });
});

var _decorators = require("./lib/decorators.js");

Object.keys(_decorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decorators[key];
    }
  });
});

var _litHtml = require("../lit-html/lit-html.js");

var _cssTag = require("./lib/css-tag.js");

Object.keys(_cssTag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cssTag[key];
    }
  });
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.4.0');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

var renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

var LitElement =
/*#__PURE__*/
function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
  }

  _createClass(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    value: function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.constructor._getUniqueStyles();

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (_cssTag.supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s instanceof CSSStyleSheet ? s : s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var templateResult = this.render();

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


      if (templateResult !== renderNotImplemented) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */

  }, {
    key: "render",
    value: function render() {
      return renderNotImplemented;
    }
  }], [{
    key: "getStyles",

    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    value: function getStyles() {
      return this.styles;
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
        return;
      } // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.


      var userStyles = this.getStyles();

      if (Array.isArray(userStyles)) {
        // De-duplicate styles preserving the _last_ instance in the set.
        // This is a performance optimization to avoid duplicated styles that can
        // occur especially when composing via subclassing.
        // The last item is kept to try to preserve the cascade order with the
        // assumption that it's most important that last added styles override
        // previous styles.
        var addStyles = function addStyles(styles, set) {
          return styles.reduceRight(function (set, s) {
            return (// Note: On IE set.add() does not return the set
              Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
            );
          }, set);
        }; // Array.from does not work on Set in IE, otherwise return
        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


        var set = addStyles(userStyles, new Set());
        var styles = [];
        set.forEach(function (v) {
          return styles.unshift(v);
        });
        this._styles = styles;
      } else {
        this._styles = userStyles === undefined ? [] : [userStyles];
      } // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)


      this._styles = this._styles.map(function (s) {
        if (s instanceof CSSStyleSheet && !_cssTag.supportsAdoptingStyleSheets) {
          // Flatten the cssText from the passed constructible stylesheet (or
          // undetectable non-constructible stylesheet). The user might have
          // expected to update their stylesheets over time, but the alternative
          // is a crash.
          var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
            return css + rule.cssText;
          }, '');
          return (0, _cssTag.unsafeCSS)(cssText);
        }

        return s;
      });
    }
  }]);

  return LitElement;
}(_updatingElement.UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */


exports.LitElement = LitElement;
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = _shadyRender.render;