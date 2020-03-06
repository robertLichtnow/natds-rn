var _jsxFileName='lib/components/NatPeriodButton/NatPeriodButton.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');
require('jest-styled-components');
var _reactNative=require('react-native');
var _NatPeriodButton=require('./NatPeriodButton');
var _NatPeriodButton2=require('./NatPeriodButton.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var setPlatform=function setPlatform(platform){
Object.defineProperty(_reactNative.Platform,'OS',{
get:jest.fn(function(){return platform;})});

};

describe('NatPeriodButton',function(){
afterEach(function(){
jest.clearAllMocks();
});

it('Should render the component correctly',function(){
var PeriodButton=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{onSelect:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:22}})).
toJSON();

expect(PeriodButton).toMatchSnapshot();
});

it('Should simulate the select click on the component on the Android platform',function(){
setPlatform('android');
var onSelectEvent=jest.fn();
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{onSelect:onSelectEvent,__source:{fileName:_jsxFileName,lineNumber:31}}));

wrapper.find(_reactNative.TouchableNativeFeedback).getElement().props.onPress();
expect(onSelectEvent.mock.calls.length).toBe(1);
});

it('Should simulate the select click on the component on the iOS platform',function(){
setPlatform('ios');
var onSelectEvent=jest.fn();
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{onSelect:onSelectEvent,__source:{fileName:_jsxFileName,lineNumber:40}}));

wrapper.find(_NatPeriodButton2.CustomTouchableOpacity).getElement().props.onPress();
expect(onSelectEvent.mock.calls.length).toBe(1);
});

it('Should the correct styling properties when selected',function(){
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{selected:true,onSelect:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:47}}));

expect(wrapper.find(_NatPeriodButton2.CheckedIcon).exists()).toBeTruthy();
});

it('Should render header component with title',function(){
var wrapper=(0,_enzyme.shallow)(
_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{
title:'Title test',
onSelect:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:54}}));



expect(wrapper.find(_NatPeriodButton2.Title).text()).toBe('Title test');
});

it('Should throw exception when the onSelect property is not passed to the component',function(){
expect(function(){return(0,_enzyme.shallow)(
_react2.default.createElement(_NatPeriodButton.NatPeriodButton,{__source:{fileName:_jsxFileName,lineNumber:65}}));}).
toThrow('Period Button needs an onSelect property to be passed to the component.');
});
});
//# sourceMappingURL=NatPeriodButton.test.js.map