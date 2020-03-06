var _jsxFileName='lib/components/NatLogo/NatLogo.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatLogo=require('./NatLogo');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatLogo component default',function(){
it('Should render NatLogo component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatLogo.NatLogo,{__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(button).toMatchSnapshot('NatLogo snapshot');
});
});
//# sourceMappingURL=NatLogo.test.js.map