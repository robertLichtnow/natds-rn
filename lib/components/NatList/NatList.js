Object.defineProperty(exports,"__esModule",{value:true});exports.NatList=undefined;var _jsxFileName='lib/components/NatList/NatList.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatListItem=require('../NatListItem');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}



var NatList=exports.NatList=function NatList(_ref)





{var items=_ref.items,selected=_ref.selected,onChange=_ref.onChange,multiSelect=_ref.multiSelect,showHighlight=_ref.showHighlight;var _useState=
(0,_react.useState)(selected),_useState2=_slicedToArray(_useState,2),currentSelected=_useState2[0],setCurrentState=_useState2[1];

var _onPress=function _onPress(callback,item){
var result=currentSelected;

if(multiSelect){
if(currentSelected.includes(item.id)){
result=currentSelected.filter(function(select){return select!==item.id;});
}else{
result=[].concat(_toConsumableArray(currentSelected),[item.id]);
}
}else if(currentSelected.includes(item.id)){
result=currentSelected.filter(function(select){return select!==item.id;});
}else{
result=[item.id].concat();
}
setCurrentState(result);
if(callback){
callback(result);
}
if(item.onPress){
item.onPress(item);
}
};

var renderItem=function renderItem(item){return(
_react2.default.createElement(_NatListItem.NatListItem,{
title:item.title,
iconLeft:item.iconLeft,
iconRight:item.iconRight,
onPressLeft:item.onPressLeft,
onPressRight:item.onPressRight,
hideIconLeft:item.hideIconLeft,
hideIconRight:item.hideIconRight,
onPress:function onPress(){return _onPress(onChange,item);},
dividerTop:item.dividerTop,
dividerBottom:item.dividerBottom,
active:currentSelected.includes(item.id)&&showHighlight,__source:{fileName:_jsxFileName,lineNumber:44}}));};



return(
_react2.default.createElement(_reactNative.ScrollView,{keyboardShouldPersistTaps:'always',__source:{fileName:_jsxFileName,lineNumber:60}},
items.map(function(item){return renderItem(item);})));


};

NatList.propTypes={
items:_propTypes2.default.arrayOf(
_propTypes2.default.shape({
dividerBottom:_propTypes2.default.bool,
dividerTop:_propTypes2.default.bool,
hideIconLeft:_propTypes2.default.bool,
hideIconRight:_propTypes2.default.bool,
iconLeft:_propTypes2.default.shape(),
iconRight:_propTypes2.default.shape(),
id:_propTypes2.default.string.isRequired,
node:_propTypes2.default.node,
onPress:_propTypes2.default.func,
onPressLeft:_propTypes2.default.func,
onPressRight:_propTypes2.default.func,
title:_propTypes2.default.string})).

isRequired,
multiSelect:_propTypes2.default.bool,
onChange:_propTypes2.default.func,
selected:_propTypes2.default.arrayOf(
_propTypes2.default.string),

showHighlight:_propTypes2.default.bool};


NatList.defaultProps={
multiSelect:false,
onChange:function onChange(){},
selected:[],
showHighlight:true};
//# sourceMappingURL=NatList.js.map