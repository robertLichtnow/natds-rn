Object.defineProperty(exports,"__esModule",{value:true});exports.NatModalSelect=undefined;var _jsxFileName='lib/components/NatModalSelect/NatModalSelect.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatModalSelect=require('./NatModalSelect.styles');



var _NatList=require('../NatList');
var _NatAppBarSearch=require('../NatAppBarSearch');
var _Button=require('../Button');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatModalSelect=exports.NatModalSelect=function NatModalSelect(_ref)










{var action=_ref.action,buttonText=_ref.buttonText,multiSelect=_ref.multiSelect,onClose=_ref.onClose,options=_ref.options,placeholderText=_ref.placeholderText,save=_ref.save,title=_ref.title,value=_ref.value,visible=_ref.visible;var _useState=
(0,_react.useState)(value),_useState2=_slicedToArray(_useState,2),inputSelected=_useState2[0],setInputSelected=_useState2[1];var _useState3=
(0,_react.useState)([]),_useState4=_slicedToArray(_useState3,2),inputFilter=_useState4[0],setInputFilter=_useState4[1];

var selectButton=function selectButton(){
onClose(inputSelected);
};

var optionsList=function optionsList(){return options.
filter(function(item){
if(inputFilter==='')return true;

return item.title.includes(inputFilter);
}).
map(function(item){return{
dividerBottom:true,
hideIconLeft:true,
id:item.id,
title:item.title};});};


return(
_react2.default.createElement(_reactNative.Modal,{
animationType:'fade',
onRequestClose:action,
save:save,
visible:visible,__source:{fileName:_jsxFileName,lineNumber:50}},

_react2.default.createElement(_reactNative.SafeAreaView,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_NatModalSelect.ModalContent,{accessibilityLabel:title,__source:{fileName:_jsxFileName,lineNumber:57}},
_react2.default.createElement(_reactNative.View,{style:{height:59},__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_NatAppBarSearch.NatAppBarSearch,{
title:placeholderText,
value:inputFilter,
onSubmit:function onSubmit(text){return setInputFilter(text);},
showIconLeft:true,
onPressLeft:function onPressLeft(){return onClose(inputSelected);},
iconLeft:{svg:{name:'outlined-naviagtion-directionright'}},
submitOnChange:true,__source:{fileName:_jsxFileName,lineNumber:59}})),


_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:69}},
_react2.default.createElement(_NatList.NatList,{
items:optionsList(),
selected:inputSelected,
onChange:setInputSelected,
multiSelect:multiSelect,__source:{fileName:_jsxFileName,lineNumber:70}})),


_react2.default.createElement(_reactNative.View,{style:{height:48},__source:{fileName:_jsxFileName,lineNumber:77}},
_react2.default.createElement(_Button.Button,{
type:'primary',
fixedBottom:true,
label:buttonText,
onPress:selectButton,__source:{fileName:_jsxFileName,lineNumber:78}}))))));






};

NatModalSelect.propTypes={
action:_propTypes2.default.func.isRequired,
buttonText:_propTypes2.default.string,
multiSelect:_propTypes2.default.bool,
onClose:_propTypes2.default.func,
options:_propTypes2.default.arrayOf(_propTypes2.default.shape(
{
id:_propTypes2.default.string,
title:_propTypes2.default.string})),


placeholderText:_propTypes2.default.string,
save:_propTypes2.default.bool,
title:_propTypes2.default.string.isRequired,
value:_propTypes2.default.arrayOf(_propTypes2.default.string),
visible:_propTypes2.default.bool};


NatModalSelect.defaultProps={
buttonText:'Select',
multiSelect:false,
onClose:function onClose(){},
options:[],
placeholderText:'Search',
save:false,
value:[],
visible:false};
//# sourceMappingURL=NatModalSelect.js.map