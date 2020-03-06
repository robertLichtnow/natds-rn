Object.defineProperty(exports,"__esModule",{value:true});exports.NatButton=undefined;var _jsxFileName='lib/components/NatButton/NatButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _ic_arrow_left_white=require('../../assets/icons/ic_arrow_left_white.png');var _ic_arrow_left_white2=_interopRequireDefault(_ic_arrow_left_white);

var _NatButton=require('./NatButton.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatButton=exports.NatButton=function NatButton(_ref){var
onPress=_ref.onPress,type=_ref.type,label=_ref.label,noUpperCase=_ref.noUpperCase,iconLeft=_ref.iconLeft;return(

_react2.default.createElement(_NatButton.ButtonWrapper,{
accessible:true,
accessibilityRole:'button',
onPress:onPress,
type:type,
disabled:type==='disabled',__source:{fileName:_jsxFileName,lineNumber:10}},

iconLeft&&_react2.default.createElement(_NatButton.ButtonIcon,{source:iconLeft,__source:{fileName:_jsxFileName,lineNumber:17}}),
_react2.default.createElement(_NatButton.ButtonText,{
type:type,
accessibilityLabel:''+label,__source:{fileName:_jsxFileName,lineNumber:18}},

noUpperCase?label:label.toUpperCase()),

type==='card'&&_react2.default.createElement(_NatButton.ButtonIcon,{source:_ic_arrow_left_white2.default,__source:{fileName:_jsxFileName,lineNumber:24}})));};



NatButton.propTypes={
iconLeft:_propTypes2.default.string,
label:_propTypes2.default.string.isRequired,
noUpperCase:_propTypes2.default.bool,
onPress:_propTypes2.default.func.isRequired,
type:_propTypes2.default.string};


NatButton.defaultProps={
type:'default'};
//# sourceMappingURL=NatButton.js.map