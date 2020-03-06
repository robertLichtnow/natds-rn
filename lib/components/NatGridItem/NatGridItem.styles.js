Object.defineProperty(exports,"__esModule",{value:true});exports.Title=exports.Description=exports.Thumb=exports.Item=undefined;var _templateObject=_taggedTemplateLiteral(['\n  margin-bottom: ',';\n  margin-right: ',';\n  margin-left: ',';\n  width: ',';\n  height: ',';\n'],['\n  margin-bottom: ',';\n  margin-right: ',';\n  margin-left: ',';\n  width: ',';\n  height: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  width: ',';\n  height: ',';\n  border-radius: 6;\n  margin-bottom: 8px;\n'],['\n  width: ',';\n  height: ',';\n  border-radius: 6;\n  margin-bottom: 8px;\n']),_templateObject3=_taggedTemplateLiteral(['\n  width: ',';\n  height: 40px;\n  line-height: 20;\n'],['\n  width: ',';\n  height: 40px;\n  line-height: 20;\n']),_templateObject4=_taggedTemplateLiteral(['\n  flex: 1;\n  font-size: 14;\n  font-weight: 500;\n  font-style: normal;\n  text-align: center;\n  color: ',';\n  font-family:  ',';\n'],['\n  flex: 1;\n  font-size: 14;\n  font-weight: 500;\n  font-style: normal;\n  text-align: center;\n  color: ',';\n  font-family:  ',';\n']);var _reactNative=require('react-native');
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _fonts=require('../../assets/theme/fonts/fonts');
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var Item=exports.Item=_native2.default.View(_templateObject,
function(props){return props.sizeMedium?24:0;},
function(props){return props.sizeMedium?12:16;},
function(props){return props.sizeMedium?12:0;},
function(props){return props.sizeMedium?156:128;},
function(props){return props.sizeMedium?200:176;});


var Thumb=exports.Thumb=_native2.default.Image(_templateObject2,
function(props){return props.sizeMedium?156:128;},
function(props){return props.sizeMedium?156:128;});




var Description=exports.Description=_native2.default.View(_templateObject3,
function(props){return props.sizeMedium?156:128;});




var Title=exports.Title=_native2.default.Text(_templateObject4,





_colors.colors.bw.grayDark,
_reactNative.Platform.OS==='ios'?_fonts.sanfrancisco.regular:_fonts.roboto.regular);
//# sourceMappingURL=NatGridItem.styles.js.map