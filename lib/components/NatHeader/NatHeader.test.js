var _jsxFileName='lib/components/NatHeader/NatHeader.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');

var _NatHeader=require('./NatHeader');
var _NatHeader2=require('./NatHeader.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatHeader component',function(){
it('Should render container component correctly',function(){
var header=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatHeader.NatHeader,{
title:'Title test',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:11}})).

toJSON();

expect(header).toMatchSnapshot('NatHeader snapshot');
});

it('Should render header component with title',function(){
var wrapper=(0,_enzyme.shallow)(
_react2.default.createElement(_NatHeader.NatHeader,{
title:'Title test',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:22}}));



expect(wrapper.find(_NatHeader2.HeaderTitle).text()).toBe('Title test');
});

it('Should throw exception when header component title is empty',function(){
expect(function(){return(0,_enzyme.shallow)(
_react2.default.createElement(_NatHeader.NatHeader,{
title:'',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:33}}));}).

toThrow('Title should not empty string');
});
});
//# sourceMappingURL=NatHeader.test.js.map