Object.defineProperty(exports,"__esModule",{value:true});exports.Image=exports.View=undefined;var _templateObject=_taggedTemplateLiteral(['\n  width: ',';\n'],['\n  width: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  width: ',';\n  height: ',';\n  border-radius: ',';\n'],['\n  width: ',';\n  height: ',';\n  border-radius: ',';\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var imageStyles={
card:{
height:184,
width:'100%'},

circle:{
borderRadius:100,
height:48,
width:48},

default:{}};



var getStylesFrom=function getStylesFrom(styles){return function(type){return styles[type]||styles.default;};};

var getImageStyles=getStylesFrom(imageStyles);

var View=exports.View=_native2.default.View(_templateObject,
function(_ref){var type=_ref.type;return getImageStyles(type).width;});


var Image=exports.Image=_native2.default.Image(_templateObject2,
function(_ref2){var type=_ref2.type;return getImageStyles(type).width;},
function(_ref3){var type=_ref3.type;return getImageStyles(type).height;},
function(_ref4){var type=_ref4.type;return getImageStyles(type).borderRadius||'0';});
//# sourceMappingURL=NatImage.styles.js.map