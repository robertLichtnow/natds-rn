Object.defineProperty(exports,"__esModule",{value:true});exports.NatCard=undefined;var _jsxFileName='lib/components/NatCard/NatCard.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatText=require('../NatText');
var _NatImage=require('../NatImage');
var _NatCard=require('./NatCard.styles');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var defaultMargin=function defaultMargin(propMargin){
switch(propMargin){
case'micro':return'4';
case'tiny':return'8';
case'small':return'16';
case'standard':return'24';
default:return'0';}

};

var styles={
borderRadius:4,
elevation:1,
shadowColor:'#000',
shadowOffset:{
height:1,
width:0},

shadowOpacity:0.24,
shadowRadius:4};


var NatCard=exports.NatCard=function NatCard(_ref){var
onPress=_ref.onPress,
title=_ref.title,
subtitle=_ref.subtitle,
imageURI=_ref.imageURI,
resume=_ref.resume,
margin=_ref.margin,
accessibilityLabel=_ref.accessibilityLabel,
accessibilityHint=_ref.accessibilityHint,
theme=_ref.theme;return(

_react2.default.createElement(_reactNative.View,{style:styles,__source:{fileName:_jsxFileName,lineNumber:46}},
_react2.default.createElement(_NatCard.CardWrapper,{
onPress:onPress,
defaultMargin:defaultMargin(margin),
accessible:true,
accessibilityLabel:accessibilityLabel,
accessibilityHint:accessibilityHint,__source:{fileName:_jsxFileName,lineNumber:47}},

_react2.default.createElement(_NatImage.NatImage,{
source:imageURI,
type:'card',__source:{fileName:_jsxFileName,lineNumber:54}}),

_react2.default.createElement(_NatCard.CardFooter,{__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_NatText.NatText,{
type:'h6',
value:title,
color:theme.palette.text.primary,
margin:theme.spacing.spacingMicro,__source:{fileName:_jsxFileName,lineNumber:59}}),

_react2.default.createElement(_NatText.NatText,{
type:'caption',
value:subtitle,
color:theme.palette.text.secondary,
margin:theme.spacing.spacingSmall,__source:{fileName:_jsxFileName,lineNumber:65}}),

_react2.default.createElement(_NatText.NatText,{
type:'body2',
value:resume,
color:theme.palette.text.primary,
margin:theme.spacing.spacingStandard,__source:{fileName:_jsxFileName,lineNumber:71}})))));};







NatCard.propTypes={
accessibilityHint:_propTypes2.default.string,
accessibilityLabel:_propTypes2.default.string,
imageURI:_propTypes2.default.string.isRequired,
margin:_propTypes2.default.string,
onPress:_propTypes2.default.func.isRequired,
resume:_propTypes2.default.string.isRequired,
subtitle:_propTypes2.default.string,
theme:_propTypes2.default.shape(),
title:_propTypes2.default.string.isRequired};


NatCard.defaultProps={
subTitle:'SubTitle',
theme:_ThemeNaturaLight.ThemeNaturaLight,
title:'Title',
type:'default'};
//# sourceMappingURL=NatCard.js.map