"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LargeInnerButton = exports.InnerButton = exports.ButtonContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: ", "px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            font-weight: 700;\n            background-color: #FBFBFB;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #555555;\n    color: #555555;\n    border-radius: 15px;\n    margin: 1px;\n    font-size: 11px;\n    cursor: pointer;\n    padding: 0 ", "px;\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 25px);\n    display: grid;\n    grid-auto-columns: auto;\n    grid-auto-flow: column;\n    align-self: center;\n    align-content: center;\n    flex-shrink: 0;\n    border-radius: 18px;\n    border: 1px solid #C5C5C5;\n    background-color: #E9E9E9;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents.default.div(_templateObject());

exports.ButtonContainer = ButtonContainer;

var InnerButton = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.large ? "30px" : "px";
}, 25 / 2, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3());
});

exports.InnerButton = InnerButton;
var LargeInnerButton = (0, _styledComponents.default)(InnerButton)(_templateObject4(), 26 + 2 * 2);
exports.LargeInnerButton = LargeInnerButton;

//# sourceMappingURL=style.js.map