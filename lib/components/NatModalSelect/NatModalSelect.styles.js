Object.defineProperty(exports,"__esModule",{value:true});exports.ModalButtonLabelAlternative=exports.ModalButtonAlternative=exports.ModalContainer=exports.ModalButtonLabel=exports.ModalButton=exports.ModalTitle=exports.ModalText=exports.ModalContent=exports.ModalView=undefined;var _templateObject=_taggedTemplateLiteral(['\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(3, 3, 3, 0.5);\n'],['\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(3, 3, 3, 0.5);\n']),_templateObject2=_taggedTemplateLiteral(['\n  background-color: ',';\n  elevation: 1;\n  flex: 1;\n  flex-direction: column;\n  align-items: stretch;\n'],['\n  background-color: ',';\n  elevation: 1;\n  flex: 1;\n  flex-direction: column;\n  align-items: stretch;\n']),_templateObject3=_taggedTemplateLiteral(['\n  padding-horizontal: 16;\n  margin-bottom: 24;\n  ','\n  color: ',';\n'],['\n  padding-horizontal: 16;\n  margin-bottom: 24;\n  ','\n  color: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n  color: ',';\n  ',';\n  margin-top: ',';\n  margin-bottom: ',';\n  padding-horizontal: 16;\n'],['\n  color: ',';\n  ',';\n  margin-top: ',';\n  margin-bottom: ',';\n  padding-horizontal: 16;\n']),_templateObject5=_taggedTemplateLiteral(['\n  align-items: center;\n  padding: 16px;\n  background-color: ',';\n  border-bottom-left-radius: 6;\n  border-bottom-right-radius: 6;\n    ','\n'],['\n  align-items: center;\n  padding: 16px;\n  background-color: ',';\n  border-bottom-left-radius: 6;\n  border-bottom-right-radius: 6;\n    ','\n']),_templateObject6=_taggedTemplateLiteral(['\n    width: 50%;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 6;\n'],['\n    width: 50%;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 6;\n']),_templateObject7=_taggedTemplateLiteral(['\n  color: ','\n  font-family: ',';\n  letter-spacing: 1px;\n'],['\n  color: ','\n  font-family: ',';\n  letter-spacing: 1px;\n']),_templateObject8=_taggedTemplateLiteral(['\n  flex-direction: row;\n'],['\n  flex-direction: row;\n']),_templateObject9=_taggedTemplateLiteral(['\n  width: 50%;\n  align-items: center;\n  padding: 16px;\n  background-color: ',';\n  border-bottom-left-radius: 6;\n'],['\n  width: 50%;\n  align-items: center;\n  padding: 16px;\n  background-color: ',';\n  border-bottom-left-radius: 6;\n']),_templateObject10=_taggedTemplateLiteral(['\n  color: ',';\n  font-family: ',';\n  letter-spacing: 1px;\n'],['\n  color: ',';\n  font-family: ',';\n  letter-spacing: 1px;\n']);var _reactNative=require('react-native');
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);

var _fonts=require('../../assets/theme/fonts/fonts');
var _typography=require('../../assets/theme/typography/typography');
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var ModalView=exports.ModalView=_native2.default.View(_templateObject);






var ModalContent=exports.ModalContent=_native2.default.View(_templateObject2,
_colors.colors.primary.white);






var ModalText=exports.ModalText=_native2.default.Text(_templateObject3,


(0,_typography.body)(_reactNative.Platform.OS).Small,
_colors.colors.bw.grayDarker);


var ModalTitle=exports.ModalTitle=_native2.default.Text(_templateObject4,
_colors.colors.bw.black,
_typography.header.XSmallBold,
function(props){return props.save?40:24;},
function(props){return props.save?40:8;});



var ModalButton=exports.ModalButton=_native2.default.TouchableOpacity(_templateObject5,


_colors.colors.primary.yellow,


function(props){return props.alternative&&(0,_native.css)(_templateObject6);});






var ModalButtonLabel=exports.ModalButtonLabel=_native2.default.Text(_templateObject7,
_colors.colors.primary.white,
_reactNative.Platform.OS==='ios'?_fonts.sanfrancisco.bold:_fonts.roboto.bold);



var ModalContainer=exports.ModalContainer=_native2.default.View(_templateObject8);



var ModalButtonAlternative=exports.ModalButtonAlternative=_native2.default.TouchableOpacity(_templateObject9,



_colors.colors.primary.white);



var ModalButtonLabelAlternative=exports.ModalButtonLabelAlternative=_native2.default.Text(_templateObject10,
_colors.colors.primary.yellow,
_reactNative.Platform.OS==='ios'?_fonts.sanfrancisco.bold:_fonts.roboto.bold);
//# sourceMappingURL=NatModalSelect.styles.js.map