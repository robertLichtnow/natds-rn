Object.defineProperty(exports,"__esModule",{value:true});exports.NatMenuItem=undefined;var _jsxFileName='lib/components/NatMenuItem/NatMenuItem.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatMenuItem=require('./NatMenuItem.styles');
var _utils=require('../../utils');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var NatMenuItem=exports.NatMenuItem=function NatMenuItem(_ref)

{var type=_ref.type,title=_ref.title,onPress=_ref.onPress,icon=_ref.icon;
var iconAttributes={
color:_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary,
size:24};


return(
_react2.default.createElement(_NatMenuItem.View,{
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:18}},

(0,_utils.loadIcon)(icon,iconAttributes),
_react2.default.createElement(_NatMenuItem.MenuTitle,{type:type,__source:{fileName:_jsxFileName,lineNumber:22}},title)));


};


NatMenuItem.propTypes={
icon:_propTypes2.default.shape({
icon:_propTypes2.default.string,
svg:_propTypes2.default.shape({
name:_propTypes2.default.string,
size:_propTypes2.default.string}),

text:_propTypes2.default.string}),

onPress:_propTypes2.default.func,
title:_propTypes2.default.string,
type:_propTypes2.default.string};


NatMenuItem.defaultProps={
icon:{},
onPress:null,
title:'title',
type:'default'};
//# sourceMappingURL=NatMenuItem.js.map