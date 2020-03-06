Object.defineProperty(exports,"__esModule",{value:true});exports.NatAppBar=undefined;var _jsxFileName='lib/components/NatAppBar/NatAppBar.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _utils=require('../../utils');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');



var _NatAppBar=require('./NatAppBar.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var styles={
elevation:1,
shadowColor:'#000',
shadowOffset:{
height:2,
width:0},

shadowOpacity:0.24};


var NatAppBar=exports.NatAppBar=function NatAppBar(_ref)









{var alignTitle=_ref.alignTitle,title=_ref.title,node=_ref.node,iconLeft=_ref.iconLeft,iconRight=_ref.iconRight,onPressRight=_ref.onPressRight,onPressLeft=_ref.onPressLeft,showIconLeft=_ref.showIconLeft,showIconRight=_ref.showIconRight;
if(!title){
throw new Error('Title should not empty string');
}

var renderIcon=function renderIcon(iconData,iconPress,position){
var iconAttributes={
color:_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary,
size:24};


var styleCustom={};

if(position==='right'){
styleCustom={position:'absolute',right:0};
}

return(
_react2.default.createElement(_reactNative.View,{style:styleCustom,__source:{fileName:_jsxFileName,lineNumber:56}},
_react2.default.createElement(_NatAppBar.IconPress,{onPress:iconPress,position:position,__source:{fileName:_jsxFileName,lineNumber:57}},
(0,_utils.loadIcon)(iconData,iconAttributes))));



};

var renderNode=function renderNode(){return(
_react2.default.createElement(_reactNative.View,{style:{
bottom:0,
justifyContent:alignTitle,
left:0,
paddingLeft:16,
paddingRight:16,
position:'absolute',
right:0,
top:0},__source:{fileName:_jsxFileName,lineNumber:65}},


node));};



return(
_react2.default.createElement(_NatAppBar.HeaderWrapper,{
accessible:true,
accessibilityRole:'header',
style:styles,__source:{fileName:_jsxFileName,lineNumber:81}},

showIconLeft&&renderIcon(iconLeft,onPressLeft,'left'),
_react2.default.createElement(_reactNative.View,{style:{
alignItems:alignTitle,
bottom:0,
justifyContent:alignTitle,
left:showIconLeft?40:0,
position:'absolute',
right:showIconRight?40:0,
top:0},__source:{fileName:_jsxFileName,lineNumber:87}},


node&&renderNode(),
!node&&
_react2.default.createElement(_NatAppBar.HeaderTitle,{
accessibilityLabel:''+title,__source:{fileName:_jsxFileName,lineNumber:99}},

title)),



showIconRight&&renderIcon(iconRight,onPressRight,'right')));


};

NatAppBar.propTypes={
alignTitle:_propTypes2.default.string,
iconLeft:_propTypes2.default.shape(),
iconRight:_propTypes2.default.shape(),
node:_propTypes2.default.node,
onPressLeft:_propTypes2.default.func,
onPressRight:_propTypes2.default.func,
showIconLeft:_propTypes2.default.bool,
showIconRight:_propTypes2.default.bool,
title:_propTypes2.default.string};


NatAppBar.defaultProps={
alignTitle:'flex-start',
iconLeft:null,
iconRight:null,
node:null,
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
showIconLeft:true,
showIconRight:true,
title:null};
//# sourceMappingURL=NatAppBar.js.map