Object.defineProperty(exports,"__esModule",{value:true});exports.HeaderRight=exports.HeaderTitle=exports.HeaderIcon=exports.HeaderWrapper=exports.AndroidStyle=undefined;var _templateObject=_taggedTemplateLiteral(['\n  flex-wrap: wrap;\n  width: 100%;\n  height: 56;\n  padding-top: 16;\n  padding-bottom: 16;\n  padding-left: 16;\n  background-color: ',';\n  ','\n'],['\n  flex-wrap: wrap;\n  width: 100%;\n  height: 56;\n  padding-top: 16;\n  padding-bottom: 16;\n  padding-left: 16;\n  background-color: ',';\n  ','\n']),_templateObject2=_taggedTemplateLiteral(['\n      flex-direction: row;\n    '],['\n      flex-direction: row;\n    ']),_templateObject3=_taggedTemplateLiteral(['\n      flex-direction: row;\n      justify-content: space-between;\n    '],['\n      flex-direction: row;\n      justify-content: space-between;\n    ']),_templateObject4=_taggedTemplateLiteral(['\n  width: 24;\n  ','\n'],['\n  width: 24;\n  ','\n']),_templateObject5=_taggedTemplateLiteral(['\n      flex: 1;\n      justify-content: flex-start;\n    '],['\n      flex: 1;\n      justify-content: flex-start;\n    ']),_templateObject6=_taggedTemplateLiteral(['\n  margin-left: 24;\n  font-size: 20;\n  color: ',';\n  font-family: ',';\n'],['\n  margin-left: 24;\n  font-size: 20;\n  color: ',';\n  font-family: ',';\n']),_templateObject7=_taggedTemplateLiteral(['\n  width: 60;\n  color:',';\n  ','\n'],['\n  width: 60;\n  color:',';\n  ','\n']),_templateObject8=_taggedTemplateLiteral(['\n      flex:1;\n      align-items: flex-end;\n      margin-right:14;\n    '],['\n      flex:1;\n      align-items: flex-end;\n      margin-right:14;\n    ']),_templateObject9=_taggedTemplateLiteral(['\n      flex: 1;\n      justify-content: flex-end;\n    '],['\n      flex: 1;\n      justify-content: flex-end;\n    ']);var _reactNative=require('react-native');
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _colors=require('../../assets/theme/colors/colors');
var _fonts=require('../../assets/theme/fonts/fonts');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var AndroidStyle=exports.AndroidStyle=_reactNative.StyleSheet.create({
android:{
marginTop:4}});



var HeaderWrapper=exports.HeaderWrapper=_native2.default.View(_templateObject,






_colors.colors.primary.white,
_reactNative.Platform.select({
android:(0,_native.css)(_templateObject2),


ios:(0,_native.css)(_templateObject3)}));






var HeaderIcon=exports.HeaderIcon=_native2.default.TouchableOpacity(_templateObject4,

_reactNative.Platform.select({
ios:(0,_native.css)(_templateObject5)}));






var HeaderTitle=exports.HeaderTitle=_native2.default.Text(_templateObject6,


_colors.colors.bw.grayDarker,
_fonts.natura.regular);


var HeaderRight=exports.HeaderRight=_native2.default.View(_templateObject7,

_colors.colors.primary.yellow,
_reactNative.Platform.select({
android:(0,_native.css)(_templateObject8),




ios:(0,_native.css)(_templateObject9)}));
//# sourceMappingURL=NatHeader.styles.js.map