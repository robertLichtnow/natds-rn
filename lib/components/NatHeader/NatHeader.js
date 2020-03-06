Object.defineProperty(exports,"__esModule",{value:true});exports.NatHeader=undefined;var _jsxFileName='lib/components/NatHeader/NatHeader.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatHeader=require('./NatHeader.styles');






var _icons=require('../../assets/theme/icons');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatHeader=exports.NatHeader=function NatHeader(_ref)

{var title=_ref.title,icon=_ref.icon,onPress=_ref.onPress,textRight=_ref.textRight,iconRight=_ref.iconRight,onPressRight=_ref.onPressRight;
if(!title){
throw new Error('Title should not empty string');
}

return(
_react2.default.createElement(_NatHeader.HeaderWrapper,{
style:_reactNative.Platform.OS==='android'&&_NatHeader.AndroidStyle.android,
accessible:true,
accessibilityRole:'header',__source:{fileName:_jsxFileName,lineNumber:24}},

icon&&
_react2.default.createElement(_NatHeader.HeaderIcon,{
onPress:onPress,
accessibilityRole:'button',__source:{fileName:_jsxFileName,lineNumber:30}},

_react2.default.createElement(_reactNative.Image,{
source:_icons.icons[icon],
accessible:true,
accessibilityLabel:'navega\xE7\xE3o para retornar a p\xE1gina anterior',__source:{fileName:_jsxFileName,lineNumber:34}})),




_react2.default.createElement(_NatHeader.HeaderTitle,{
icon:icon,
accessibilityLabel:''+title,__source:{fileName:_jsxFileName,lineNumber:42}},

title),

_react2.default.createElement(_NatHeader.HeaderRight,{accessibilityRole:'button',__source:{fileName:_jsxFileName,lineNumber:48}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPressRight,__source:{fileName:_jsxFileName,lineNumber:49}},
_react2.default.createElement(_reactNative.Text,{style:{color:'orange',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:50}},
' ',
textRight,
' '),

_react2.default.createElement(_reactNative.Image,{
accessible:true,
source:_icons.icons[iconRight],
accessibilityLabel:'realizar a\xE7\xE3o do item da barra superior direita',__source:{fileName:_jsxFileName,lineNumber:55}})))));





};

NatHeader.propTypes={
icon:_propTypes2.default.string,
iconRight:_propTypes2.default.string,
onPress:_propTypes2.default.func.isRequired,
onPressRight:_propTypes2.default.func,
textRight:_propTypes2.default.string,
title:_propTypes2.default.string.isRequired};


NatHeader.defaultProps={
icon:''};
//# sourceMappingURL=NatHeader.js.map