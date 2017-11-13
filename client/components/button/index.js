'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
	var buttonStyle = {
		background: 'pink',
		color: 'rebeccapurple',
		fontFamily: 'Inconsolata, monospace',
		fontSize: '16px'
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'button',
			{ onClick: props.clicked, style: buttonStyle },
			props.text
		)
	);
};

exports.default = Button;
//# sourceMappingURL=/Users/mariacam/development/bridge_tdd_workshop/client/components/button/index.js.map