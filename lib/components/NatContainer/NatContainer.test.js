var _jsxFileName='lib/components/NatContainer/NatContainer.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _reactNative=require('react-native');
require('jest-styled-components/native');

var _NatContainer=require('./NatContainer');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatContainer component',function(){
it('Should render container component correctly',function(){
var container=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatContainer.NatContainer,{__source:{fileName:_jsxFileName,lineNumber:11}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:12}},'Hello'))).

toJSON();

expect(container).toMatchSnapshot('NatContainer snapshot');
});

it('Should render container component with default styling',function(){
var container=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatContainer.NatContainer,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:22}},'Hello'))).

toJSON();

expect(container).toHaveStyleRule('background-color','#FFFFFF');
});

it('Should render container component with custom styling',function(){
var container=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatContainer.NatContainer,{color:'red',center:true,__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:32}},'Hello'))).

toJSON();

expect(container).toHaveStyleRule('background-color','red');
expect(container).toHaveStyleRule('justify-content','center');
expect(container).toHaveStyleRule('align-items','center');
});

it('should pass the props center',function(){
var containerCenter=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatContainer.NatContainer,{center:true,__source:{fileName:_jsxFileName,lineNumber:43}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:44}},'Hello'))).

toJSON();

expect(containerCenter).toHaveStyleRule('justify-content','center');
expect(containerCenter).toHaveStyleRule('align-items','center');
});
});
//# sourceMappingURL=NatContainer.test.js.map