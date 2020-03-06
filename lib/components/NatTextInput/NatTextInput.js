Object.defineProperty(exports,"__esModule",{value:true});exports.NatTextInput=undefined;var _jsxFileName='lib/components/NatTextInput/NatTextInput.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatTextInput=require('./NatTextInput.styles');


var _utils=require('../../utils');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var NatTextInput=exports.NatTextInput=function NatTextInput(_ref)





















{var onChangeText=_ref.onChangeText,value=_ref.value,type=_ref.type,label=_ref.label,placeholder=_ref.placeholder,secureTextEntry=_ref.secureTextEntry,assistiveText=_ref.assistiveText,icon=_ref.icon,iconPress=_ref.iconPress,onFocus=_ref.onFocus,onBlur=_ref.onBlur,size=_ref.size,margin=_ref.margin,multiline=_ref.multiline,numberOfLines=_ref.numberOfLines,accessibilityLabel=_ref.accessibilityLabel,accessibilityHint=_ref.accessibilityHint,autoCapitalize=_ref.autoCapitalize,autoCorrect=_ref.autoCorrect,onSubmitEditing=_ref.onSubmitEditing,theme=_ref.theme;
var isFilled=function isFilled(){return value?'filled':'default';};var _useState=
(0,_react.useState)(isFilled()),_useState2=_slicedToArray(_useState,2),state=_useState2[0],setState=_useState2[1];

var handleOnFocus=function handleOnFocus(func){
setState('active');
onFocus&&onFocus(func);
};

var handleOnBlur=function handleOnBlur(func){
var currentState=value?'filled':'default';

setState(currentState);
onBlur&&onBlur(func);
};

var renderIcon=function renderIcon(iconData){
var iconAttributes={
color:_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary,
size:24};


return(
_react2.default.createElement(_NatTextInput.IconPress,{onPress:iconPress,__source:{fileName:_jsxFileName,lineNumber:58}},
(0,_utils.loadIcon)(iconData,iconAttributes)));


};

var defaultSize=function defaultSize(propSize,lines){
if(lines===1){
return propSize==='small'?'40px':'56px';
}
if(lines>1)return lines*40+'px';

return propSize==='small'?'40px':'56px';
};
var defaultHeight=function defaultHeight(propSize,lines){
if(lines===1){
return propSize==='small'?36:52;
}
if(lines>1)return lines*40-4;

return propSize==='small'?36:52;
};

return(
_react2.default.createElement(_NatTextInput.Wrapper,{
marginDefault:margin,
accessible:true,
accessibilityLabel:accessibilityLabel,
accessibilityHint:accessibilityHint,
theme:theme,__source:{fileName:_jsxFileName,lineNumber:82}},

label!==''&&_react2.default.createElement(_NatTextInput.Label,{type:type,state:state,theme:theme,text:label,__source:{fileName:_jsxFileName,lineNumber:89}}),
_react2.default.createElement(_NatTextInput.InputWrapper,{
type:type,
state:state,
defaultSize:defaultSize(size,numberOfLines),
theme:theme,__source:{fileName:_jsxFileName,lineNumber:90}},

_react2.default.createElement(_NatTextInput.TextInput,{
secureTextEntry:secureTextEntry,
onChangeText:onChangeText,
placeholder:placeholder,
onFocus:handleOnFocus,
onBlur:handleOnBlur,
onSubmitEditing:onSubmitEditing,
value:value,
multiline:multiline,
numberOfLines:numberOfLines,
editable:type!=='disabled',
autoCapitalize:autoCapitalize,
autoCorrect:autoCorrect,
type:type,
size:size,
state:state,
style:{height:defaultHeight(size,numberOfLines)},
theme:theme,__source:{fileName:_jsxFileName,lineNumber:96}}),

icon&&renderIcon(icon)),

assistiveText!==''&&_react2.default.createElement(_NatTextInput.AssistiveTexView,{type:type,state:state,theme:theme,text:assistiveText,__source:{fileName:_jsxFileName,lineNumber:117}})));


};

NatTextInput.propTypes={
accessibilityHint:_propTypes2.default.string,
accessibilityLabel:_propTypes2.default.string,
assistiveText:_propTypes2.default.string,
autoCapitalize:_propTypes2.default.string,
autoCorrect:_propTypes2.default.bool,
icon:_propTypes2.default.shape({
content:_propTypes2.default.any,
svg:_propTypes2.default.shape({
name:_propTypes2.default.string,
size:_propTypes2.default.number})}),


iconPress:_propTypes2.default.func,
label:_propTypes2.default.string.isRequired,
margin:_propTypes2.default.string,
multiline:_propTypes2.default.bool,
numberOfLines:_propTypes2.default.number,
onBlur:_propTypes2.default.func,
onChangeText:_propTypes2.default.func.isRequired,
onFocus:_propTypes2.default.func,
onSubmitEditing:_propTypes2.default.func,
placeholder:_propTypes2.default.string,
secureTextEntry:_propTypes2.default.bool,
size:_propTypes2.default.string,
theme:_propTypes2.default.shape({}),
type:_propTypes2.default.string,
value:_propTypes2.default.string};


NatTextInput.defaultProps={
assistiveText:'',
icon:false,
iconPress:null,
margin:'tiny',
multiline:false,
numberOfLines:1,
theme:_ThemeNaturaLight.ThemeNaturaLight,
type:'default',
value:''};
//# sourceMappingURL=NatTextInput.js.map