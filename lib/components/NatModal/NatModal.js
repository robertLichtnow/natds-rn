Object.defineProperty(exports,"__esModule",{value:true});exports.NatModal=undefined;var _jsxFileName='lib/components/NatModal/NatModal.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatModal=require('./NatModal.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}











var NatModal=exports.NatModal=function NatModal(_ref){var
title=_ref.title,
text=_ref.text,
action=_ref.action,
buttonText=_ref.buttonText,
alternative=_ref.alternative,
buttonTextAlternative=_ref.buttonTextAlternative,
alternativeAction=_ref.alternativeAction,
save=_ref.save;return(

_react2.default.createElement(_reactNative.Modal,{
animationType:'fade',
transparent:true,
onRequestClose:action,
save:save,__source:{fileName:_jsxFileName,lineNumber:27}},

_react2.default.createElement(_NatModal.ModalView,{__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_NatModal.ModalContent,{accessibilityLabel:title,__source:{fileName:_jsxFileName,lineNumber:34}},
_react2.default.createElement(_NatModal.ModalTitle,{save:save,__source:{fileName:_jsxFileName,lineNumber:35}},title),
!save&&_react2.default.createElement(_NatModal.ModalText,{__source:{fileName:_jsxFileName,lineNumber:36}},text),

alternative?

_react2.default.createElement(_NatModal.ModalContainer,{__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_NatModal.ModalButtonAlternative,{
alternative:alternative,
onPress:alternativeAction,
accessibilityLabel:buttonTextAlternative.toUpperCase(),__source:{fileName:_jsxFileName,lineNumber:41}},

_react2.default.createElement(_NatModal.ModalButtonLabelAlternative,{
alternative:alternative,__source:{fileName:_jsxFileName,lineNumber:46}},

buttonTextAlternative.toUpperCase())),



_react2.default.createElement(_NatModal.ModalButton,{
alternative:alternative,
onPress:action,
accessibilityLabel:buttonText.toUpperCase(),__source:{fileName:_jsxFileName,lineNumber:53}},

_react2.default.createElement(_NatModal.ModalButtonLabel,{__source:{fileName:_jsxFileName,lineNumber:58}},buttonText.toUpperCase()))):




_react2.default.createElement(_NatModal.ModalButton,{
alternative:alternative,
onPress:action,
accessibilityLabel:buttonText.toUpperCase(),__source:{fileName:_jsxFileName,lineNumber:63}},

_react2.default.createElement(_NatModal.ModalButtonLabel,{__source:{fileName:_jsxFileName,lineNumber:68}},buttonText.toUpperCase()))))));};








NatModal.propTypes={
action:_propTypes2.default.func.isRequired,
alternative:_propTypes2.default.bool,
alternativeAction:_propTypes2.default.func,
buttonText:_propTypes2.default.string.isRequired,
buttonTextAlternative:_propTypes2.default.string,
save:_propTypes2.default.bool,
text:_propTypes2.default.string,
title:_propTypes2.default.string.isRequired};


NatModal.defaultProps={
alternative:false,
alternativeAction:_propTypes2.default.func,
buttonTextAlternative:'Button text error',
save:false,
text:'Modal text error'};
//# sourceMappingURL=NatModal.js.map