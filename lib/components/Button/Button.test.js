var _jsxFileName='lib/components/Button/Button.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _reactNative=require('react-native');
var _Button=require('./Button');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Button component default',function(){
it('Should render button component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:11}},
_react2.default.createElement(_Button.Button,{
type:'primary',
label:'Primary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:12}}),

_react2.default.createElement(_Button.Button,{
type:'secondary',
label:'Secondary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:17}}),

_react2.default.createElement(_Button.Button,{
type:'tertiary',
label:'Tertiary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:22}}),

_react2.default.createElement(_Button.Button,{
type:'primary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:27}}),

_react2.default.createElement(_Button.Button,{
type:'secondary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:32}}),

_react2.default.createElement(_Button.Button,{
type:'tertiary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:37}}),

_react2.default.createElement(_Button.Button,{
type:'primary',
label:'Primary',
color:'primary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:42}}),

_react2.default.createElement(_Button.Button,{
type:'secondary',
label:'primary',
color:'primary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:48}}),

_react2.default.createElement(_Button.Button,{
type:'tertiary',
label:'Primary',
color:'primary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:54}}),

_react2.default.createElement(_Button.Button,{
type:'primary',
label:'secondary',
color:'secondary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:60}}),

_react2.default.createElement(_Button.Button,{
type:'secondary',
label:'secondary',
color:'secondary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:66}}),

_react2.default.createElement(_Button.Button,{
type:'tertiary',
label:'secondary',
color:'secondary',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:72}}),

_react2.default.createElement(_Button.Button,{
type:'primary',
label:'disabled',
color:'disabled',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:78}}),

_react2.default.createElement(_Button.Button,{
type:'secondary',
label:'disabled',
color:'disabled',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:84}}),

_react2.default.createElement(_Button.Button,{
type:'tertiary',
label:'disabled',
color:'disabled',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:90}}),

_react2.default.createElement(_Button.Button,{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:{svg:{name:'outlined-action-autofilter'}},
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
type:'primary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:96}}),

_react2.default.createElement(_Button.Button,{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:{svg:{name:'outlined-action-autofilter'}},
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
type:'secondary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:105}}),

_react2.default.createElement(_Button.Button,{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:{svg:{name:'outlined-action-autofilter'}},
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
type:'tertiary',
label:'Default',
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:114}}),

_react2.default.createElement(_Button.Button,{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:{svg:{name:'outlined-action-autofilter'}},
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
type:'secondary',
node:
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:130}},'Test'),

onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:123}}),

_react2.default.createElement(_Button.Button,{
type:'primary',
label:'bottom fixed',
fixedBottom:true,
onPress:function onPress(){},__source:{fileName:_jsxFileName,lineNumber:134}}))).


toJSON();

expect(button).toMatchSnapshot('Button snapshot');
});
});
//# sourceMappingURL=Button.test.js.map