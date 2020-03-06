var _jsxFileName='lib/components/NatText/NatText.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatText=require('./NatText');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatText component default',function(){
it('Should render NatText component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatText.NatText,{value:'Teste',__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(button).toMatchSnapshot('NatText snapshot');
});
});
//# sourceMappingURL=NatText.test.js.map