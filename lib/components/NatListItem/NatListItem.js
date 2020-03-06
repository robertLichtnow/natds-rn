Object.defineProperty(exports,"__esModule",{value:true});exports.NatListItem=undefined;var _jsxFileName='lib/components/NatListItem/NatListItem.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _utils=require('../../utils');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');




var _NatListItem=require('./NatListItem.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







var NatListItem=exports.NatListItem=function NatListItem(_ref)












{var title=_ref.title,node=_ref.node,iconLeft=_ref.iconLeft,iconRight=_ref.iconRight,hideIconLeft=_ref.hideIconLeft,hideIconRight=_ref.hideIconRight,onPressRight=_ref.onPressRight,onPressLeft=_ref.onPressLeft,onPress=_ref.onPress,dividerTop=_ref.dividerTop,dividerBottom=_ref.dividerBottom,active=_ref.active;
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
}else{
styleCustom={left:0,position:'absolute'};
}

return(
_react2.default.createElement(_reactNative.View,{style:styleCustom,__source:{fileName:_jsxFileName,lineNumber:54}},
_react2.default.createElement(_NatListItem.IconPress,{onPress:iconPress,position:position,__source:{fileName:_jsxFileName,lineNumber:55}},
(0,_utils.loadIcon)(iconData,iconAttributes))));



};

var localPress=function localPress(){
if(onPress){
onPress();
}
};

var renderTitle=function renderTitle(localTitle){return(
_react2.default.createElement(_NatListItem.TouchableOpacity,{
onPress:localPress,__source:{fileName:_jsxFileName,lineNumber:69}},

_react2.default.createElement(_NatListItem.HeaderTitle,{
accessibilityLabel:''+localTitle,__source:{fileName:_jsxFileName,lineNumber:72}},

localTitle)));};




return(
_react2.default.createElement(_NatListItem.HeaderWrapper,{
accessible:true,
accessibilityRole:'header',
dividerBottom:dividerBottom,
dividerTop:dividerTop,
active:active,__source:{fileName:_jsxFileName,lineNumber:81}},

!hideIconLeft&&renderIcon(iconLeft,onPressLeft,'left'),
_react2.default.createElement(_NatListItem.HeaderTitleView,{
hideIconLeft:hideIconLeft,
hideIconRight:hideIconRight,__source:{fileName:_jsxFileName,lineNumber:89}},

node&&node,
!node&&renderTitle(title)),

!hideIconRight&&renderIcon(iconRight,onPressRight,'right')));


};

NatListItem.propTypes={
active:_propTypes2.default.bool,
dividerBottom:_propTypes2.default.bool,
dividerTop:_propTypes2.default.bool,
hideIconLeft:_propTypes2.default.bool,
hideIconRight:_propTypes2.default.bool,
iconLeft:_propTypes2.default.shape(),
iconRight:_propTypes2.default.shape(),
node:_propTypes2.default.node,
onPress:_propTypes2.default.func,
onPressLeft:_propTypes2.default.func,
onPressRight:_propTypes2.default.func,
title:_propTypes2.default.string};


NatListItem.defaultProps={
active:false,
dividerBottom:false,
dividerTop:false,
hideIconLeft:false,
hideIconRight:false,
iconLeft:null,
iconRight:null,
node:null,
onPress:null,
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
title:null};
//# sourceMappingURL=NatListItem.js.map