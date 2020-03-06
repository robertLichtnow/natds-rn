Object.defineProperty(exports,"__esModule",{value:true});exports.NatPeriodButton=undefined;var _jsxFileName='lib/components/NatPeriodButton/NatPeriodButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatPeriodButton=require('./NatPeriodButton.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var NatPeriodButton=exports.NatPeriodButton=function NatPeriodButton(_ref)

{var selected=_ref.selected,title=_ref.title,subtitle=_ref.subtitle,onSelect=_ref.onSelect,iconSrc=_ref.iconSrc;
if(!onSelect){
throw new Error('Period Button needs an onSelect property to be passed to the component.');
}

return _reactNative.Platform.OS==='android'?
_react2.default.createElement(_reactNative.TouchableNativeFeedback,{onPress:onSelect,__source:{fileName:_jsxFileName,lineNumber:17}},
_react2.default.createElement(_NatPeriodButton.CustomView,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:18}},
selected&&
_react2.default.createElement(_NatPeriodButton.CheckedIcon,{
source:{uri:iconSrc},__source:{fileName:_jsxFileName,lineNumber:20}}),



title&&
_react2.default.createElement(_NatPeriodButton.Title,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:26}},title),

subtitle&&
_react2.default.createElement(_NatPeriodButton.SubTitle,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:29}},subtitle))):




_react2.default.createElement(_NatPeriodButton.CustomTouchableOpacity,{onPress:onSelect,__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_NatPeriodButton.CustomView,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:35}},
selected&&
_react2.default.createElement(_NatPeriodButton.CheckedIcon,{
source:{uri:iconSrc},__source:{fileName:_jsxFileName,lineNumber:37}}),



title&&
_react2.default.createElement(_NatPeriodButton.Title,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:43}},title),

subtitle&&
_react2.default.createElement(_NatPeriodButton.SubTitle,{selected:selected,__source:{fileName:_jsxFileName,lineNumber:46}},subtitle)));




};

NatPeriodButton.propTypes={
iconSrc:_propTypes2.default.string.isRequired,
onSelect:_propTypes2.default.func.isRequired,
selected:_propTypes2.default.bool,
subtitle:_propTypes2.default.string,
title:_propTypes2.default.string};

NatPeriodButton.defaultProps={
selected:false,
subtitle:null,
title:null};
//# sourceMappingURL=NatPeriodButton.js.map