Object.defineProperty(exports,"__esModule",{value:true});exports.loadIcon=undefined;var _jsxFileName='lib/utils/index.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _svg=require('../assets/icons/svg');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var loadIcon=exports.loadIcon=function loadIcon(icon,attributes){
if(icon&&icon.svg){
var IconComponent=(0,_svg.load)(icon.svg.name);
var iconSize=icon.svg.size?icon.svg.size:attributes.size;
var iconColor=icon.svg.color?icon.svg.color:attributes.color;

return(
_react2.default.createElement(IconComponent,{width:iconSize,height:iconSize,style:{fill:iconColor},__source:{fileName:_jsxFileName,lineNumber:12}}));

}
if(icon&&icon.content){
return(
_react2.default.createElement(_reactNative.Image,{style:{width:attributes.size,height:attributes.size,tintColor:attributes.color},source:icon.content,__source:{fileName:_jsxFileName,lineNumber:17}}));

}
if(icon&&icon.uri){
return(
_react2.default.createElement(_reactNative.Image,{style:{width:attributes.size,height:attributes.size},source:icon,__source:{fileName:_jsxFileName,lineNumber:22}}));

}
return null;
};
//# sourceMappingURL=index.js.map