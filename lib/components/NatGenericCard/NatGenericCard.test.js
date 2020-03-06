var _jsxFileName='lib/components/NatGenericCard/NatGenericCard.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');
var _reactNative=require('react-native');
var _NatGenericCard=require('./NatGenericCard');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatGenericCard',function(){
it('Should match snapshot',function(){
var card=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatGenericCard.NatGenericCard,{__source:{fileName:_jsxFileName,lineNumber:10}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:11}},'Teste'))).

toJSON();

expect(card).toMatchSnapshot();
});

describe('NatGenericCard with props - children',function(){
it('Should render with correct children',function(){
var component=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatGenericCard.NatGenericCard,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:22}},'Teste'))).

toJSON();

expect(component.children[0].type).toBe('Text');
});
});
});
//# sourceMappingURL=NatGenericCard.test.js.map