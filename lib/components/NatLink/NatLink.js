Object.defineProperty(exports,"__esModule",{value:true});exports.NatLink=undefined;var _jsxFileName='lib/components/NatLink/NatLink.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatLink=require('./NatLink.styles');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');


var _NatText=require('../NatText');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatLink=exports.NatLink=function NatLink(_ref){var
value=_ref.value,onPress=_ref.onPress,type=_ref.type,margin=_ref.margin,color=_ref.color,align=_ref.align;return(

_react2.default.createElement(_NatLink.TouchableOpacity,{onPress:onPress,marginBottom:margin,alignDefault:align,__source:{fileName:_jsxFileName,lineNumber:12}},
_react2.default.createElement(_NatText.NatText,{type:type,value:value,color:color,__source:{fileName:_jsxFileName,lineNumber:13}})));};



NatLink.propTypes={
align:_propTypes2.default.string,
color:_propTypes2.default.string,
margin:_propTypes2.default.string,
onPress:_propTypes2.default.func,
type:_propTypes2.default.string,
value:_propTypes2.default.string};


NatLink.defaultProps={
align:'flex-start',
color:_ThemeNaturaLight.ThemeNaturaLight.palette.complementary.link,
margin:'none',
type:'body2'};
//# sourceMappingURL=NatLink.js.map