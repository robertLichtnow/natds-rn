Object.defineProperty(exports,"__esModule",{value:true});exports.CardFooter=exports.CardWrapper=undefined;var _templateObject=_taggedTemplateLiteral(['\n  background-color: ',';\n  border-radius: 4px;\n  margin-bottom: ',';\n'],['\n  background-color: ',';\n  border-radius: 4px;\n  margin-bottom: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  padding: 10px;\n'],['\n  padding: 10px;\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var inputStyles={
default:{
backgroundColor:_ThemeNaturaLight.ThemeNaturaLight.palette.background.paper}};



var getStylesFrom=function getStylesFrom(styles){return function(type){return styles[type]||styles.default;};};

var getInputStyles=getStylesFrom(inputStyles);

var CardWrapper=exports.CardWrapper=_native2.default.TouchableOpacity(_templateObject,
function(_ref){var type=_ref.type;return getInputStyles(type).backgroundColor;},

function(_ref2){var defaultMargin=_ref2.defaultMargin;return defaultMargin||'0px';});


var CardFooter=exports.CardFooter=_native2.default.View(_templateObject2);
//# sourceMappingURL=NatCard.styles.js.map