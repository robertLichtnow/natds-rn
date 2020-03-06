Object.defineProperty(exports,"__esModule",{value:true});exports.Text=exports.View=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _templateObject=_taggedTemplateLiteral(['\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left:0;\n  margin-right:0;\n  margin-top:0;\n  margin-bottom: ',';\n'],['\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-left:0;\n  margin-right:0;\n  margin-top:0;\n  margin-bottom: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  font-size: ',';\n  color: ',';\n  line-height: ',';\n  font-weight: ',';\n'],['\n  font-size: ',';\n  color: ',';\n  line-height: ',';\n  font-weight: ',';\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _tokens=require('../../tokens');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var getStyles=function getStyles(type,color){return _extends(_tokens.fontSize[type],{color:color});};

var View=exports.View=_native2.default.View(_templateObject,







function(_ref){var margin=_ref.margin;return margin;});


var Text=exports.Text=_native2.default.Text(_templateObject2,
function(_ref2){var type=_ref2.type,color=_ref2.color;return getStyles(type,color).fontSize;},
function(_ref3){var type=_ref3.type,color=_ref3.color;return getStyles(type,color).color;},
function(_ref4){var type=_ref4.type,color=_ref4.color;return getStyles(type,color).lineHeight;},
function(_ref5){var type=_ref5.type,color=_ref5.color;return getStyles(type,color).fontWeight;});
//# sourceMappingURL=NatText.styles.js.map