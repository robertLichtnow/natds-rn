var _jsxFileName='lib/components/NatAppBar/NatAppBar.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');

var _NatAppBar=require('./NatAppBar');
var _NatAppBar2=require('./NatAppBar.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatAppBar component',function(){
it('Should render container component correctly',function(){
var header=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatAppBar.NatAppBar,{
title:'Title test',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:11}})).

toJSON();

expect(header).toMatchSnapshot('NatAppBar snapshot');
});

it('Should render header component with title',function(){
var wrapper=(0,_enzyme.shallow)(
_react2.default.createElement(_NatAppBar.NatAppBar,{
title:'Title test',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:22}}));



expect(wrapper.find(_NatAppBar2.HeaderTitle).text()).toBe('Title test');
});

it('Should throw exception when header component title is empty',function(){
expect(function(){return(0,_enzyme.shallow)(
_react2.default.createElement(_NatAppBar.NatAppBar,{
title:'',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:33}}));}).

toThrow('Title should not empty string');
});
});
//# sourceMappingURL=NatAppBar.test.js.map