Object.defineProperty(exports,"__esModule",{value:true});exports.NatText=undefined;var _jsxFileName='lib/components/NatText/NatText.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatText=require('./NatText.styles');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatText=exports.NatText=function NatText(_ref){var
value=_ref.value,
type=_ref.type,
color=_ref.color,
margin=_ref.margin;return(

_react2.default.createElement(_NatText.View,{margin:margin,__source:{fileName:_jsxFileName,lineNumber:12}},
_react2.default.createElement(_NatText.Text,{type:type,color:color,__source:{fileName:_jsxFileName,lineNumber:13}},
value)));};




NatText.propTypes={
color:_propTypes2.default.string,
margin:_propTypes2.default.number,
type:_propTypes2.default.string,
value:_propTypes2.default.string};


NatText.defaultProps={
color:_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary,
margin:_ThemeNaturaLight.ThemeNaturaLight.spacing.spacingStandard,
type:'body1',
value:''};
//# sourceMappingURL=NatText.js.map