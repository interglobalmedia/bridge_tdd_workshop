'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _text_input = require('../text_input');

var _text_input2 = _interopRequireDefault(_text_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            userInput: '',
            showValue: ''
        }, _this.handleInputChange = function (e) {
            _this.setState({
                userInput: e.target.value
            });
        }, _this.handleInputClick = function (e) {
            var inputValue = _this.state.userInput;
            _this.setState({
                showValue: inputValue,
                userInput: ''
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var titleStyle = {
                fontweight: 'lighter'
            };
            var style1 = {
                color: 'black',
                fontSize: '16px'
            };
            var style2 = {
                color: 'red',
                fontSize: '16px'
            };
            var appStyle = {
                margin: '60px auto',
                textAlign: 'center',
                fontFamily: 'Inconsolata, monospace',
                fontSize: '16px'
            };
            var paragraphStyle = {
                color: 'dodgerblue'
            };
            var inputStyle = this.state.userInput.length > 10 ? style2 : style1;
            return _react2.default.createElement(
                'div',
                { style: appStyle },
                _react2.default.createElement(
                    'h1',
                    { style: titleStyle },
                    'Render a paragraph!'
                ),
                _react2.default.createElement(_text_input2.default, { style: inputStyle, changed: this.handleInputChange, type: 'text', placeholder: 'type text here', value: this.state.userInput }),
                _react2.default.createElement(
                    'p',
                    { style: paragraphStyle },
                    this.state.showValue
                ),
                _react2.default.createElement(_button2.default, { clicked: function clicked(e) {
                        return _this2.handleInputClick(e);
                    }, text: 'click me' })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=/Users/mariacam/development/bridge_tdd_workshop/client/components/app/index.js.map