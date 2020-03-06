Object.defineProperty(exports,"__esModule",{value:true});exports.IconPress=exports.ButtonIcon=exports.ButtonText=exports.ButtonWrapper=undefined;var _templateObject=_taggedTemplateLiteral(['\n  background-color: ',';\n  height: 48;\n  border-radius: 4;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  border-color: ',';\n  border-width: ',';\n'],['\n  background-color: ',';\n  height: 48;\n  border-radius: 4;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  border-color: ',';\n  border-width: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  color: ',';\n  font-size: 14px;\n  align-self: center;\n  font-weight: bold;\n  letter-spacing: 1;\n  font-family:  ',';\n\n  ','\n'],['\n  color: ',';\n  font-size: 14px;\n  align-self: center;\n  font-weight: bold;\n  letter-spacing: 1;\n  font-family:  ',';\n\n  ','\n']),_templateObject3=_taggedTemplateLiteral(['\n    width: 64px;\n    text-align: center;\n    line-height: 21px;\n  '],['\n    width: 64px;\n    text-align: center;\n    line-height: 21px;\n  ']),_templateObject4=_taggedTemplateLiteral(['\n  height: 30;\n  width: 30;\n'],['\n  height: 30;\n  width: 30;\n']),_templateObject5=_taggedTemplateLiteral(['\n  align-self: center;\n  flex: 1;\n  height: 56;\n  width: 40;\n  align-items: center;\n  justify-content: center;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-right: ',';\n  padding-left: ',';\n'],['\n  align-self: center;\n  flex: 1;\n  height: 56;\n  width: 40;\n  align-items: center;\n  justify-content: center;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-right: ',';\n  padding-left: ',';\n']);var _reactNative=require('react-native');
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _fonts=require('../../assets/theme/fonts/fonts');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var styleType=function styleType(type,color,theme){
var colorsTypes={
primary:{
default:{
backgroundColor:theme.palette.primary.main,
borderColor:theme.palette.primary.main,
color:theme.palette.primary.contrastText},

disabled:{
backgroundColor:theme.palette.grayscale.colorBrdBlack+'1F',
borderColor:theme.palette.grayscale.colorBrdNatGray3+'1F',
color:theme.palette.grayscale.colorBrdNatGray+'40'},

primary:{
backgroundColor:theme.palette.primary.main,
borderColor:theme.palette.primary.main,
color:theme.palette.primary.contrastText},

secondary:{
backgroundColor:theme.palette.secondary.main,
borderColor:theme.palette.secondary.main,
color:theme.palette.secondary.contrastText}},


secondary:{
default:{
backgroundColor:'transparent',
borderColor:''+theme.palette.grayscale.colorBrdNatGray2,
color:theme.palette.primary.contrastText},

disabled:{
backgroundColor:'transparent',
borderColor:''+theme.palette.grayscale.colorBrdNatGray2,
color:theme.palette.grayscale.colorBrdNatGray+'7A'},

primary:{
backgroundColor:'transparent',
borderColor:theme.palette.primary.main,
color:theme.palette.primary.contrastText},

secondary:{
backgroundColor:'transparent',
borderColor:theme.palette.secondary.main,
color:theme.palette.secondary.contrastText}},


tertiary:{
default:{
backgroundColor:'transparent',
borderColor:'transparent',
color:theme.palette.primary.contrastText},

disabled:{
backgroundColor:'transparent',
borderColor:'transparent',
color:theme.palette.grayscale.colorBrdNatGray+'7A'},

primary:{
backgroundColor:'transparent',
borderColor:'transparent',
color:theme.palette.primary.main},

secondary:{
backgroundColor:'transparent',
borderColor:'transparent',
color:theme.palette.secondary.main}}};



var types={
primary:{
backgroundColor:colorsTypes[type][color].backgroundColor,
borderColor:colorsTypes[type][color].borderColor,
borderWidth:1,
color:colorsTypes[type][color].color,
height:48},

secondary:{
backgroundColor:colorsTypes[type][color].backgroundColor,
borderColor:colorsTypes[type][color].borderColor,
borderWidth:1,
color:colorsTypes[type][color].color,
height:48},

tertiary:{
backgroundColor:colorsTypes[type][color].backgroundColor,
borderColor:colorsTypes[type][color].borderColor,
borderWidth:1,
color:colorsTypes[type][color].color,
height:48}};



return types[type];
};

var ButtonWrapper=exports.ButtonWrapper=_native2.default.TouchableOpacity(_templateObject,
function(_ref){var type=_ref.type,color=_ref.color,theme=_ref.theme;return styleType(type,color,theme).backgroundColor;},





function(_ref2){var type=_ref2.type,color=_ref2.color,theme=_ref2.theme;return styleType(type,color,theme).borderColor;},
function(_ref3){var type=_ref3.type,color=_ref3.color,theme=_ref3.theme;return styleType(type,color,theme).borderWidth;});


var ButtonText=exports.ButtonText=_native2.default.Text(_templateObject2,
function(_ref4){var type=_ref4.type,color=_ref4.color,theme=_ref4.theme;return styleType(type,color,theme).color;},




_reactNative.Platform.OS==='ios'?_fonts.sanfrancisco.bold:_fonts.roboto.bold,

function(props){return props.type==='card'&&(0,_native.css)(_templateObject3);});






var ButtonIcon=exports.ButtonIcon=_native2.default.Image(_templateObject4);




var IconPress=exports.IconPress=_native2.default.TouchableOpacity(_templateObject5,








function(_ref5){var position=_ref5.position;return position==='right'?'16px':'0px';},
function(_ref6){var position=_ref6.position;return position==='right'?'0px':'16px';});
//# sourceMappingURL=Button.styles.js.map