var _jsxFileName='lib/components/NatSelectInput/NatSelectInput.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');
var _ic_arrow_left_white=require('../../assets/icons/ic_arrow_left_white.png');var _ic_arrow_left_white2=_interopRequireDefault(_ic_arrow_left_white);

var _NatSelectInput=require('./NatSelectInput');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatSelectInput component default',function(){
it('Should render textInput component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatSelectInput.NatSelectInput,{label:'teste',onChangeText:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:11}})).
toJSON();

expect(button).toMatchSnapshot('NatSelectInput snapshot');
});

it('Should render textInput with icon and assistive text in component',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatSelectInput.NatSelectInput,{
label:'teste',
onChangeText:jest.fn(),
icon:_ic_arrow_left_white2.default,
iconPress:jest.fn(),
assistiveText:'teste',__source:{fileName:_jsxFileName,lineNumber:19}})).

toJSON();

expect(button).toMatchSnapshot('NatSelectInput snapshot');
});
});
//# sourceMappingURL=NatSelectInput.test.js.map