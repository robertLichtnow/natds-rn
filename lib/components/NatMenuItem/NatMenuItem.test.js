var _jsxFileName='lib/components/NatMenuItem/NatMenuItem.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatMenuItem=require('./NatMenuItem');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatMenuItem component default',function(){
it('Should render NatMenuItem NatMenuItem ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatMenuItem.NatMenuItem,{title:'Teste',__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(button).toMatchSnapshot('NatMenuItem snapshot');
});
});
//# sourceMappingURL=NatMenuItem.test.js.map