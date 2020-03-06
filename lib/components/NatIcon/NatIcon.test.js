var _jsxFileName='lib/components/NatIcon/NatIcon.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatIcon=require('./NatIcon');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatIcon component default',function(){
it('Should render NatIcon component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatIcon.NatIcon,{__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(button).toMatchSnapshot('NatIcon snapshot');
});
});
//# sourceMappingURL=NatIcon.test.js.map