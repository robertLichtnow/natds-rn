Object.defineProperty(exports,"__esModule",{value:true});exports.NatImage=undefined;var _jsxFileName='lib/components/NatImage/NatImage.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NatImage=require('./NatImage.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatImage=exports.NatImage=function NatImage(_ref){var source=_ref.source,onPress=_ref.onPress,type=_ref.type;return(
_react2.default.createElement(_NatImage.View,{
onPress:onPress,
type:type,__source:{fileName:_jsxFileName,lineNumber:6}},

_react2.default.createElement(_NatImage.Image,{
source:{uri:source},
type:type,__source:{fileName:_jsxFileName,lineNumber:10}})));};




NatImage.propTypes={
onPress:_propTypes2.default.func,
source:_propTypes2.default.string.isRequired,
type:_propTypes2.default.string};


NatImage.defaultProps={
onPress:function onPress(){},
type:'default'};
//# sourceMappingURL=NatImage.js.map