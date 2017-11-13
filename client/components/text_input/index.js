'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement('input', { onChange: props.changed, value: props.value, type: 'text', placeholder: 'type text here', style: props.style })
	);
};
exports.default = TextInput;
//# sourceMappingURL=/Users/mariacam/development/bridge_tdd_workshop/client/components/text_input/index.js.map