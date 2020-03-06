Object.defineProperty(exports,"__esModule",{value:true});exports.NatGridItem=undefined;var _jsxFileName='lib/components/NatGridItem/NatGridItem.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _NatGridItem=require('./NatGridItem.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var NatGridItem=exports.NatGridItem=function NatGridItem(_ref){var
source=_ref.source,sizeMedium=_ref.sizeMedium,onPress=_ref.onPress,children=_ref.children;return(

_react2.default.createElement(_NatGridItem.Item,{sizeMedium:sizeMedium,__source:{fileName:_jsxFileName,lineNumber:12}},
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:13}},
_react2.default.createElement(_NatGridItem.Thumb,{
accessibilityRole:'image',
sizeMedium:sizeMedium,
source:{uri:source},
accessibilityLabel:''+children,__source:{fileName:_jsxFileName,lineNumber:14}})),


_react2.default.createElement(_NatGridItem.Description,{
sizeMedium:sizeMedium,
accessibilityLabel:''+children,__source:{fileName:_jsxFileName,lineNumber:21}},

_react2.default.createElement(_NatGridItem.Title,{__source:{fileName:_jsxFileName,lineNumber:25}},children))));};




NatGridItem.propTypes={
children:_propTypes2.default.string,
onPress:_propTypes2.default.func,
sizeMedium:_propTypes2.default.bool,
source:_propTypes2.default.string.isRequired};


NatGridItem.defaultProps={
children:'Título da imagem',
onPress:_propTypes2.default.func,
sizeMedium:false};
//# sourceMappingURL=NatGridItem.js.map