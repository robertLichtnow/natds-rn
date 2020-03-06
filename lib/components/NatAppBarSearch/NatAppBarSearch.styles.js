Object.defineProperty(exports,"__esModule",{value:true});exports.InputIcon=exports.TouchableOpacity=exports.IconPress=exports.HeaderTitle=exports.HeaderWrapper=undefined;var _templateObject=_taggedTemplateLiteral(['\n  flex: 1;\n  width: 100%;\n  height: 56;\n  padding: 0px;\n  position: relative;\n  background-color: ',';\n  flex-direction: row;\n  align-items: stretch;\n'],['\n  flex: 1;\n  width: 100%;\n  height: 56;\n  padding: 0px;\n  position: relative;\n  background-color: ',';\n  flex-direction: row;\n  align-items: stretch;\n']),_templateObject2=_taggedTemplateLiteral(['\n  margin-left: 0px;\n  font-size: 20;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  color: ',';\n'],['\n  margin-left: 0px;\n  font-size: 20;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  color: ',';\n']),_templateObject3=_taggedTemplateLiteral(['\n  align-self: center;\n  flex: 1;\n  height: 56;\n  width: 40;\n  align-items: center;\n  justify-content: center;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-right: ',';\n  padding-left: ',';\n'],['\n  align-self: center;\n  flex: 1;\n  height: 56;\n  width: 40;\n  align-items: center;\n  justify-content: center;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-right: ',';\n  padding-left: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n  flex: 1;\n'],['\n  flex: 1;\n']),_templateObject5=_taggedTemplateLiteral(['\n  height: 24;\n  width: 24;\n'],['\n  height: 24;\n  width: 24;\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var HeaderWrapper=exports.HeaderWrapper=_native2.default.View(_templateObject,





_ThemeNaturaLight.ThemeNaturaLight.palette.background.paper);




var HeaderTitle=exports.HeaderTitle=_native2.default.Text(_templateObject2,





_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary);


var IconPress=exports.IconPress=_native2.default.TouchableOpacity(_templateObject3,








function(_ref){var position=_ref.position;return position==='right'?'16px':'0px';},
function(_ref2){var position=_ref2.position;return position==='right'?'0px':'16px';});


var TouchableOpacity=exports.TouchableOpacity=_native2.default.TouchableOpacity(_templateObject4);



var InputIcon=exports.InputIcon=_native2.default.Image(_templateObject5);
//# sourceMappingURL=NatAppBarSearch.styles.js.map