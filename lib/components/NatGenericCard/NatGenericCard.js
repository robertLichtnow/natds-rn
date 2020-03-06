Object.defineProperty(exports,"__esModule",{value:true});exports.NatGenericCard=undefined;var _jsxFileName='lib/components/NatGenericCard/NatGenericCard.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatGenericCard=require('./NatGenericCard.styles');
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatGenericCard=exports.NatGenericCard=function NatGenericCard(_ref){var
children=_ref.children,
height=_ref.height,
width=_ref.width,
bgColor=_ref.bgColor;return(

_react2.default.createElement(_NatGenericCard.CustomView,{
height:height,
width:width,
bgColor:bgColor,__source:{fileName:_jsxFileName,lineNumber:12}},

children));};




NatGenericCard.propTypes={
bgColor:_propTypes2.default.string,
children:_propTypes2.default.element.isRequired,
height:_propTypes2.default.number,
width:_propTypes2.default.number};


NatGenericCard.defaultProps={
bgColor:_colors.colors.primary.white,
height:216,
width:363};
//# sourceMappingURL=NatGenericCard.js.map