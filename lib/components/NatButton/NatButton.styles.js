Object.defineProperty(exports,"__esModule",{value:true});exports.ButtonIcon=exports.ButtonText=exports.ButtonWrapper=undefined;var _templateObject=_taggedTemplateLiteral(['\n  background-color: ',';\n  height: ',';\n  width: ',';\n  border-radius: 6;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  border-color: ',';\n  border-width: ',';\n'],['\n  background-color: ',';\n  height: ',';\n  width: ',';\n  border-radius: 6;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  border-color: ',';\n  border-width: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  color: ',';\n  font-size: 14px;\n  align-self: center;\n  font-weight: bold;\n  letter-spacing: 1;\n  font-family:  ',';\n\n  ','\n'],['\n  color: ',';\n  font-size: 14px;\n  align-self: center;\n  font-weight: bold;\n  letter-spacing: 1;\n  font-family:  ',';\n\n  ','\n']),_templateObject3=_taggedTemplateLiteral(['\n    width: 64px;\n    text-align: center;\n    line-height: 21px;\n  '],['\n    width: 64px;\n    text-align: center;\n    line-height: 21px;\n  ']),_templateObject4=_taggedTemplateLiteral(['\n  height: 30;\n  width: 30;\n'],['\n  height: 30;\n  width: 30;\n']);var _reactNative=require('react-native');
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _fonts=require('../../assets/theme/fonts/fonts');
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var buttonStyles={
card:{
backgroundColor:_colors.colors.primary.yellow,
color:_colors.colors.primary.white,
height:128,
width:128},

default:{
backgroundColor:_colors.colors.primary.yellow,
color:_colors.colors.primary.white,
height:48},

disabled:{
backgroundColor:_colors.colors.bw.grayLight,
color:_colors.colors.bw.grayDark,
height:48},

link:{
backgroundColor:'transparent',
color:_colors.colors.content.info,
height:48},

newDefault:{
backgroundColor:_colors.colors.primary.yellow,
color:_colors.colors.bw.grayDarker,
height:48},

newShort:{
backgroundColor:_colors.colors.primary.white,
color:_colors.colors.bw.grayDarker,
height:40,
width:328},

outline:{
backgroundColor:_colors.colors.primary.white,
borderColor:_colors.colors.primary.yellow,
borderWidth:2,
color:_colors.colors.primary.yellow,
height:48},

short:{
backgroundColor:_colors.colors.primary.white,
color:_colors.colors.primary.yellow,
height:40,
width:328}};



var getStylesFrom=function getStylesFrom(styles){return function(type){return styles[type]||styles.default;};};

var getButtonStyles=getStylesFrom(buttonStyles);

var ButtonWrapper=exports.ButtonWrapper=_native2.default.TouchableOpacity(_templateObject,
function(_ref){var type=_ref.type;return getButtonStyles(type).backgroundColor;},
function(_ref2){var type=_ref2.type;return getButtonStyles(type).height;},
function(_ref3){var type=_ref3.type;return getButtonStyles(type).width||'100%';},




function(_ref4){var type=_ref4.type;return getButtonStyles(type).borderColor||'transparent';},
function(_ref5){var type=_ref5.type;return getButtonStyles(type).borderWidth||0;});


var ButtonText=exports.ButtonText=_native2.default.Text(_templateObject2,
function(_ref6){var type=_ref6.type;return getButtonStyles(type).color;},




_reactNative.Platform.OS==='ios'?_fonts.sanfrancisco.bold:_fonts.roboto.bold,

function(props){return props.type==='card'&&(0,_native.css)(_templateObject3);});






var ButtonIcon=exports.ButtonIcon=_native2.default.Image(_templateObject4);
//# sourceMappingURL=NatButton.styles.js.map