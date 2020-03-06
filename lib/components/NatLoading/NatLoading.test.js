var _jsxFileName='lib/components/NatLoading/NatLoading.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatLoading=require('./NatLoading');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Container component',function(){
it('Should render loading component correctly',function(){
var container=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatLoading.NatLoading,{__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(container).toMatchSnapshot();
});

it('Should render loading component with static styling',function(){
var loading=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatLoading.NatLoading,{__source:{fileName:_jsxFileName,lineNumber:18}})).
toJSON();

expect(loading).toHaveStyleRule('position','absolute');
expect(loading).toHaveStyleRule('justify-content','center');
expect(loading).toHaveStyleRule('align-items','center');
expect(loading).toHaveStyleRule('right',0);
expect(loading).toHaveStyleRule('left',0);
expect(loading).toHaveStyleRule('top',0);
expect(loading).toHaveStyleRule('bottom',0);
expect(loading).toHaveStyleRule('z-index',10);
});
});
//# sourceMappingURL=NatLoading.test.js.map