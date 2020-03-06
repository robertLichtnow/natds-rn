Object.defineProperty(exports,"__esModule",{value:true});exports.NatSelectInput=undefined;var _jsxFileName='lib/components/NatSelectInput/NatSelectInput.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatSelectInput=require('./NatSelectInput.styles');


var _NatModalSelect=require('../NatModalSelect');
var _NatTextInput=require('../NatTextInput');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var NatSelectInput=exports.NatSelectInput=function NatSelectInput(_ref)
















{var accessibilityHint=_ref.accessibilityHint,accessibilityLabel=_ref.accessibilityLabel,assistiveText=_ref.assistiveText,icon=_ref.icon,label=_ref.label,margin=_ref.margin,multiSelect=_ref.multiSelect,onChange=_ref.onChange,options=_ref.options,placeholder=_ref.placeholder,searchText=_ref.searchText,selectButtonText=_ref.selectButtonText,size=_ref.size,theme=_ref.theme,type=_ref.type,value=_ref.value;var _useState=
(0,_react.useState)(value),_useState2=_slicedToArray(_useState,2),valueLocal=_useState2[0],setValueLocal=_useState2[1];var _useState3=
(0,_react.useState)(false),_useState4=_slicedToArray(_useState3,2),modalVisible=_useState4[0],setModalVisible=_useState4[1];

var defaultMargin=function defaultMargin(propMargin){
switch(propMargin){
case'none':return'0px';
case'dense':return'8px';
case'normal':return'16px';
default:return'0px';}

};

var onChangeValues=function onChangeValues(text){
onChange(text);
};

var onPressInputField=function onPressInputField(){
if(type!=='disabled')setModalVisible(true);
};

var onPressSelectButton=function onPressSelectButton(values){
setModalVisible(false);
setValueLocal(values);
onChange(values);
};

var showSelectedOptions=function showSelectedOptions(){return options.
filter(function(item){return valueLocal.includes(item.id);}).
map(function(item){return item.title;}).
join(',');};

return(
_react2.default.createElement(_NatSelectInput.Wrapper,{
defaultMargin:defaultMargin(margin),
accessible:true,
accessibilityLabel:accessibilityLabel,
accessibilityHint:accessibilityHint,
theme:theme,__source:{fileName:_jsxFileName,lineNumber:64}},

_react2.default.createElement(_NatModalSelect.NatModalSelect,{
visible:modalVisible,
onClose:onPressSelectButton,
buttonText:selectButtonText,
value:valueLocal,
placeholderText:searchText,
options:options,
multiSelect:multiSelect,__source:{fileName:_jsxFileName,lineNumber:71}}),

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPressInputField,__source:{fileName:_jsxFileName,lineNumber:80}},
_react2.default.createElement(_NatTextInput.NatTextInput,{
label:label,
placeholder:placeholder,
assistiveText:assistiveText,
onChangeText:onChangeValues,
onFocus:onPressInputField,
value:showSelectedOptions(),
size:size,
type:type,
icon:icon,__source:{fileName:_jsxFileName,lineNumber:81}}))));




};

NatSelectInput.propTypes={
accessibilityHint:_propTypes2.default.string,
accessibilityLabel:_propTypes2.default.string,
assistiveText:_propTypes2.default.string,
icon:_propTypes2.default.shape({
content:_propTypes2.default.any,
svg:_propTypes2.default.shape({
name:_propTypes2.default.string,
size:_propTypes2.default.number})}),


label:_propTypes2.default.string.isRequired,
margin:_propTypes2.default.string,
multiSelect:_propTypes2.default.bool,
onChange:_propTypes2.default.func.isRequired,
options:_propTypes2.default.arrayOf(_propTypes2.default.shape(
{
id:_propTypes2.default.string,
title:_propTypes2.default.string})),


placeholder:_propTypes2.default.string,
searchText:_propTypes2.default.string,
selectButtonText:_propTypes2.default.string,
size:_propTypes2.default.string,
theme:_propTypes2.default.shape(),
type:_propTypes2.default.string,
value:_propTypes2.default.string};


NatSelectInput.defaultProps={
icon:{
svg:{
name:'outlined-navigation-arrowbottom',
size:24}},


iconPress:null,
multiSelect:false,
numberOfLines:1,
options:[],
placeholder:'',
searchText:'Search',
selectButtonText:'Select',
theme:_ThemeNaturaLight.ThemeNaturaLight,
type:'default',
value:''};
//# sourceMappingURL=NatSelectInput.js.map