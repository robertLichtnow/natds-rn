var _jsxFileName='lib/components/NatSpace/NatSpace.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _reactNative=require('react-native');
require('jest-styled-components/native');

var _NatSpace=require('./NatSpace');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatSpace component',function(){
it('Should render Space component correctly',function(){
var space=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatSpace.NatSpace,{__source:{fileName:_jsxFileName,lineNumber:11}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:12}},'Hello'))).

toJSON();

expect(space).toMatchSnapshot('NatSpace snapshot');
});
});
//# sourceMappingURL=NatSpace.test.js.map