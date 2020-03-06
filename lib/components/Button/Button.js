Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _jsxFileName='lib/components/Button/Button.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _Button=require('./Button.styles');
var _utils=require('../../utils');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');
var _NatSpace=require('../NatSpace');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles={
elevation:1,
shadowColor:'#000',
shadowOffset:{
height:2,
width:0},

shadowOpacity:0.24};


var Button=exports.Button=function Button(_ref)














{var color=_ref.color,iconLeft=_ref.iconLeft,iconRight=_ref.iconRight,fixedBottom=_ref.fixedBottom,label=_ref.label,node=_ref.node,noUpperCase=_ref.noUpperCase,onPress=_ref.onPress,onPressLeft=_ref.onPressLeft,onPressRight=_ref.onPressRight,showIconLeft=_ref.showIconLeft,showIconRight=_ref.showIconRight,theme=_ref.theme,type=_ref.type;
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
_react2.default.createElement(_reactNative.View,{style:styleCustom,__source:{fileName:_jsxFileName,lineNumber:51}},
_react2.default.createElement(_Button.IconPress,{onPress:iconPress,position:position,__source:{fileName:_jsxFileName,lineNumber:52}},
(0,_utils.loadIcon)(iconData,iconAttributes))));



};

var renderTitle=function renderTitle(){
if(label!==''){
return(
_react2.default.createElement(_Button.ButtonText,{
type:type,
theme:theme,
color:color,
accessibilityLabel:''+label,__source:{fileName:_jsxFileName,lineNumber:62}},

noUpperCase?label:label.toUpperCase()));


}

return node;
};

return(
_react2.default.createElement(_NatSpace.NatSpace,{
backgroundColor:fixedBottom?theme.palette.background.paper:'transparent',
marginBottom:'none',
marginLeft:'none',
marginRight:'none',
marginTop:'none',
paddingBottom:fixedBottom?'tiny':'none',
paddingLeft:fixedBottom?'small':'none',
paddingRight:fixedBottom?'small':'none',
paddingTop:fixedBottom?'small':'none',__source:{fileName:_jsxFileName,lineNumber:77}},

_react2.default.createElement(_Button.ButtonWrapper,{
accessibilityRole:'button',
accessible:true,
color:color,
disabled:color==='disabled',
onPress:onPress,
style:type==='primary'&&color!=='disabled'&&styles,
theme:theme,
type:type,__source:{fileName:_jsxFileName,lineNumber:88}},

showIconLeft&&iconLeft!==null&&renderIcon(iconLeft,onPressLeft,'left'),
renderTitle(),
showIconRight&&renderIcon(iconRight,onPressRight,'right'))));



};

Button.propTypes={
color:_propTypes2.default.string,
fixedBottom:_propTypes2.default.bool,
iconLeft:_propTypes2.default.shape(),
iconRight:_propTypes2.default.shape(),
label:_propTypes2.default.string,
node:_propTypes2.default.node,
noUpperCase:_propTypes2.default.bool,
onPress:_propTypes2.default.func.isRequired,
onPressLeft:_propTypes2.default.func,
onPressRight:_propTypes2.default.func,
showIconLeft:_propTypes2.default.bool,
showIconRight:_propTypes2.default.bool,
state:_propTypes2.default.string,
theme:_propTypes2.default.shape(),
type:_propTypes2.default.string};



Button.defaultProps={
color:'default',
fixedBottom:false,
iconLeft:null,
iconRight:null,
label:'',
node:null,
noUpperCase:false,
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
showIconLeft:true,
showIconRight:true,
theme:_ThemeNaturaLight.ThemeNaturaLight,
type:'primary'};
//# sourceMappingURL=Button.js.map