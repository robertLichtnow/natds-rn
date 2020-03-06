var _jsxFileName='lib/components/NatCard/NatCard.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatCard=require('./NatCard');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatCard component default',function(){
it('Should render NatCard component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatCard.NatCard,{
title:'teste',
onPress:jest.fn(),
imageURI:'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
resume:'teste',__source:{fileName:_jsxFileName,lineNumber:10}})).

toJSON();

expect(button).toMatchSnapshot('NatCard snapshot');
});
});
//# sourceMappingURL=NatCard.test.js.map