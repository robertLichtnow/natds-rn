Object.defineProperty(exports,"__esModule",{value:true});exports.NatAppBarSearch=undefined;var _jsxFileName='lib/components/NatAppBarSearch/NatAppBarSearch.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatAppBar=require('../NatAppBar');
var _NatTextInput=require('../NatTextInput');

var _NatAppBarSearch=require('./NatAppBarSearch.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var NatAppBarSearch=exports.NatAppBarSearch=function NatAppBarSearch(_ref)







{var title=_ref.title,iconRight=_ref.iconRight,onPressRight=_ref.onPressRight,_onPressLeft=_ref.onPressLeft,showIconLeft=_ref.showIconLeft,onSubmit=_ref.onSubmit,submitOnChange=_ref.submitOnChange;var _useState=

(0,_react.useState)('outlined-navigation-directionright'),_useState2=_slicedToArray(_useState,2),iconLeft=_useState2[0],setIconLeft=_useState2[1];var _useState3=
(0,_react.useState)(''),_useState4=_slicedToArray(_useState3,2),iconRightLocal=_useState4[0],setIconRightLocal=_useState4[1];var _useState5=
(0,_react.useState)(false),_useState6=_slicedToArray(_useState5,2),showIconRight=_useState6[0],setShowIconRight=_useState6[1];var _useState7=
(0,_react.useState)(''),_useState8=_slicedToArray(_useState7,2),inputSearch=_useState8[0],setInputSearch=_useState8[1];

var submitCommand=function submitCommand(event){
onSubmit(event.nativeEvent.text);
};

var clearSearch=function clearSearch(){
setInputSearch('');
onSubmit('');
};

var changeInputSearch=function changeInputSearch(text){
if(submitOnChange){
onSubmit(text);
}
setInputSearch(text);
};

var getInput=function getInput(){return(
_react2.default.createElement(_NatTextInput.NatTextInput,{
label:'',
placeholder:title,
onChangeText:changeInputSearch,
value:inputSearch,
size:'normal',
type:'none',
icon:null,
onSubmitEditing:submitCommand,__source:{fileName:_jsxFileName,lineNumber:43}}));};



(0,_react.useEffect)(function(){
if(inputSearch.length>0){
setShowIconRight(true);
setIconRightLocal('outlined-navigation-close');
}else if(iconRight&&iconRight.svg){
setShowIconRight(true);
setIconRightLocal(iconRight.svg.name);
}else{
setShowIconRight(false);
}
});

var localPressRight=function localPressRight(){
if(inputSearch.length===0){
onPressRight();
}else{
clearSearch();
}
};

return(
_react2.default.createElement(_NatAppBarSearch.HeaderWrapper,{
accessible:true,
accessibilityRole:'header',__source:{fileName:_jsxFileName,lineNumber:76}},

_react2.default.createElement(_NatAppBar.NatAppBar,{
title:title,
showIconRight:showIconRight,
showIconLeft:showIconLeft,
iconLeft:{svg:{name:iconLeft}},
iconRight:{svg:{name:iconRightLocal}},
onPressLeft:function onPressLeft(){return _onPressLeft();},
onPressRight:localPressRight,
node:getInput(),__source:{fileName:_jsxFileName,lineNumber:80}})));



};

NatAppBarSearch.propTypes={
iconLeft:_propTypes2.default.shape(),
iconRight:_propTypes2.default.shape(),
node:_propTypes2.default.node,
onPressLeft:_propTypes2.default.func,
onPressRight:_propTypes2.default.func,
onSubmit:_propTypes2.default.func,
showIconLeft:_propTypes2.default.bool,
showIconRight:_propTypes2.default.bool,
submitOnChange:_propTypes2.default.bool,
title:_propTypes2.default.string};


NatAppBarSearch.defaultProps={
iconLeft:null,
iconRight:null,
node:null,
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
onSubmit:function onSubmit(){},
showIconLeft:true,
showIconRight:true,
submitOnChange:false,
title:null};
//# sourceMappingURL=NatAppBarSearch.js.map