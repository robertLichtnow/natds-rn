var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatButton/NatButton.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');
require('jest-styled-components/native');

var _reactNative=require('react-native');
var _NatButton=require('./NatButton');

var _NatButton2=require('./NatButton.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Button component default',function(){
it('Should render button component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatButton.NatButton,{label:'string',onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:14}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:15}},'Oi'))).

toJSON();

expect(button).toMatchSnapshot();
});

describe('when is card type',function(){
var props={};

beforeEach(function(){
props={
label:'test',
onPress:jest.fn(),
type:'card'};

});

it('Should render button component ',function(){
var button=_reactTestRenderer2.default.create(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:34}}))).toJSON();

expect(button).toMatchSnapshot();
});

it('should have an icon',function(){
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:40}})));

expect(wrapper.find(_NatButton2.ButtonIcon).length).toBe(1);
});
});

describe('when is short type',function(){
var props={};

beforeEach(function(){
props={
label:'test',
onPress:jest.fn(),
type:'short'};

});

it('Should render short button component',function(){
var button=_reactTestRenderer2.default.create(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:58}}))).toJSON();

expect(button).toMatchSnapshot();
});

it('should not have an icon',function(){
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:64}})));

expect(wrapper.find(_NatButton2.ButtonIcon).length).toBe(0);
});
});

describe('when is outline type',function(){
var props={};

beforeEach(function(){
props={
label:'test',
onPress:jest.fn(),
type:'outline'};

});

it('Should render outline button component',function(){
var button=_reactTestRenderer2.default.create(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:82}}))).toJSON();

expect(button).toMatchSnapshot();
});

it('should not have an icon',function(){
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatButton.NatButton,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:88}})));

expect(wrapper.find(_NatButton2.ButtonIcon).length).toBe(0);
});
});
});
//# sourceMappingURL=NatButton.test.js.map