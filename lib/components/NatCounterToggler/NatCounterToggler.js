Object.defineProperty(exports,"__esModule",{value:true});exports.NatCounterToggler=undefined;var _jsxFileName='lib/components/NatCounterToggler/NatCounterToggler.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _colors=require('../../assets/theme/colors/colors');
var _NatCounterToggler=require('./NatCounterToggler.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}








var NatCounterToggler=exports.NatCounterToggler=function NatCounterToggler(_ref)

{var onIncrease=_ref.onIncrease,onDecrease=_ref.onDecrease,counter=_ref.counter,color=_ref.color,width=_ref.width,height=_ref.height,min=_ref.min,max=_ref.max;var _useState=
(0,_react.useState)(true),_useState2=_slicedToArray(_useState,2),decreaseDisabled=_useState2[0],setDecreaseDisabled=_useState2[1];var _useState3=
(0,_react.useState)(false),_useState4=_slicedToArray(_useState3,2),increaseDisabled=_useState4[0],setIncreaseDisabled=_useState4[1];var _useState5=
(0,_react.useState)(_colors.colors.bw.grayLight),_useState6=_slicedToArray(_useState5,2),decreaseColor=_useState6[0],setDecreaseColor=_useState6[1];var _useState7=
(0,_react.useState)(_colors.colors.primary.white),_useState8=_slicedToArray(_useState7,2),increaseColor=_useState8[0],setIncreaseColor=_useState8[1];

var actionHandler=function actionHandler(action){
if(action==='increase'){
onIncrease();
if(counter===min){
setDecreaseColor(_colors.colors.primary.white);
setDecreaseDisabled(false);
}
if(counter+1===max){
setIncreaseColor(_colors.colors.bw.grayLight);
setIncreaseDisabled(true);
}
}else{
onDecrease();
if(counter===max){
setIncreaseColor(_colors.colors.primary.white);
setIncreaseDisabled(false);
}
if(counter-1===min){
setDecreaseColor(_colors.colors.bw.grayLight);
setDecreaseDisabled(true);
}
}
};

return _reactNative.Platform.OS==='android'?
_react2.default.createElement(_NatCounterToggler.CounterView,{color:color,width:width,height:height,__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_reactNative.TouchableNativeFeedback,{disabled:decreaseDisabled,onPress:function onPress(){return actionHandler('decrease');},__source:{fileName:_jsxFileName,lineNumber:49}},
_react2.default.createElement(_NatCounterToggler.ContentViewLeft,{color:decreaseColor,__source:{fileName:_jsxFileName,lineNumber:50}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:51}},'-'))),



_react2.default.createElement(_NatCounterToggler.ContentViewDefault,{__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:56}},counter)),


_react2.default.createElement(_reactNative.TouchableNativeFeedback,{disabled:increaseDisabled,onPress:function onPress(){return actionHandler('increase');},__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_NatCounterToggler.ContentViewRight,{color:increaseColor,__source:{fileName:_jsxFileName,lineNumber:60}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:61}},'+')))):




_react2.default.createElement(_NatCounterToggler.CounterView,{color:color,__source:{fileName:_jsxFileName,lineNumber:66}},
_react2.default.createElement(_NatCounterToggler.CustomTouchableHighlight,{disabled:decreaseDisabled,onPress:function onPress(){return actionHandler('decrease');},__source:{fileName:_jsxFileName,lineNumber:67}},
_react2.default.createElement(_NatCounterToggler.ContentViewLeft,{color:decreaseColor,__source:{fileName:_jsxFileName,lineNumber:68}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:69}},'-'))),



_react2.default.createElement(_NatCounterToggler.ContentViewDefault,{__source:{fileName:_jsxFileName,lineNumber:73}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:74}},counter)),


_react2.default.createElement(_NatCounterToggler.CustomTouchableHighlight,{disabled:increaseDisabled,onPress:function onPress(){return actionHandler('increase');},__source:{fileName:_jsxFileName,lineNumber:77}},
_react2.default.createElement(_NatCounterToggler.ContentViewRight,{color:increaseColor,__source:{fileName:_jsxFileName,lineNumber:78}},
_react2.default.createElement(_NatCounterToggler.CustomTextOperators,{__source:{fileName:_jsxFileName,lineNumber:79}},'+'))));




};

NatCounterToggler.propTypes={
color:_propTypes2.default.string.isRequired,
counter:_propTypes2.default.number.isRequired,
height:_propTypes2.default.string,
max:_propTypes2.default.number.isRequired,
min:_propTypes2.default.number.isRequired,
onDecrease:_propTypes2.default.func.isRequired,
onIncrease:_propTypes2.default.func.isRequired,
width:_propTypes2.default.string};

NatCounterToggler.defaultProps={
height:null,
width:null};
//# sourceMappingURL=NatCounterToggler.js.map