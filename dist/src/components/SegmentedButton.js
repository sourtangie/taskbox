"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentedButton = SegmentedButton;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SegmentedButton(_ref) {
  var className = _ref.className,
      value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      large = _ref.large;
  return /*#__PURE__*/_react.default.createElement(_style.ButtonContainer, {
    className: className
  }, options.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement(_style.InnerButton, {
      large: large,
      className: className,
      key: index,
      active: value === option,
      onClick: function onClick() {
        return onChange(option);
      }
    }, option);
  }));
}

SegmentedButton.propTypes = {
  className: _propTypes.default.string,
  value: _propTypes.default.node,
  options: _propTypes.default.node,
  onChange: _propTypes.default.node,
  large: _propTypes.default.bool
};

//# sourceMappingURL=SegmentedButton.js.map