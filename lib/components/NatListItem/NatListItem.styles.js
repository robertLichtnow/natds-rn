Object.defineProperty(exports,"__esModule",{value:true});exports.TouchableOpacity=exports.IconPress=exports.HeaderTitle=exports.HeaderTitleView=exports.HeaderWrapper=undefined;var _templateObject=_taggedTemplateLiteral(['\n  flex: 1;\n  width: 100%;\n  padding: 0px;\n  ','\n  ','\n  background-color: ',';\n'],['\n  flex: 1;\n  width: 100%;\n  padding: 0px;\n  ','\n  ','\n  background-color: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  justify-content: center;\n  align-items: center;\n  right: ',';\n  left: ',';\n  top: 0;\n  bottom: 0;\n  color: ',';\n'],['\n  justify-content: center;\n  align-items: center;\n  right: ',';\n  left: ',';\n  top: 0;\n  bottom: 0;\n  color: ',';\n']),_templateObject3=_taggedTemplateLiteral(['\n  flex:1;\n  justify-content:center;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 16px;\n  color: ',';\n'],['\n  flex:1;\n  justify-content:center;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 16px;\n  color: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n  align-self: center;\n  flex: 1;\n  height: 40;\n  width: 40;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: ',';\n  padding-left: ',';\n'],['\n  align-self: center;\n  flex: 1;\n  height: 40;\n  width: 40;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: ',';\n  padding-left: ',';\n']),_templateObject5=_taggedTemplateLiteral(['\n  justify-content:center;\n  flex:1;\n  align-self: stretch;\n'],['\n  justify-content:center;\n  flex:1;\n  align-self: stretch;\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var dividerTopStyle='\n  border-top-width: 1px;\n  border-top-color: '+

_ThemeNaturaLight.ThemeNaturaLight.palette.grayscale.colorBrdNatGray3+'\n';

var dividerBottomStyle='\n  border-bottom-width: 1px;\n  border-bottom-color: '+

_ThemeNaturaLight.ThemeNaturaLight.palette.grayscale.colorBrdNatGray3+'\n';


var HeaderWrapper=exports.HeaderWrapper=_native2.default.View(_templateObject,



function(_ref){var dividerTop=_ref.dividerTop;return dividerTop===true?dividerTopStyle:'';},
function(_ref2){var dividerBottom=_ref2.dividerBottom;return dividerBottom===true?dividerBottomStyle:'';},
function(_ref3){var active=_ref3.active;return active===true?_ThemeNaturaLight.ThemeNaturaLight.palette.secondary.main+'29':_ThemeNaturaLight.ThemeNaturaLight.palette.background.paper+'29';});


var HeaderTitleView=exports.HeaderTitleView=_native2.default.View(_templateObject2,


function(_ref4){var hideIconRight=_ref4.hideIconRight;return hideIconRight?'0':'48';},
function(_ref5){var hideIconLeft=_ref5.hideIconLeft;return hideIconLeft?'0':'48';},


_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary);


var HeaderTitle=exports.HeaderTitle=_native2.default.Text(_templateObject3,







_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary);


var IconPress=exports.IconPress=_native2.default.TouchableOpacity(_templateObject4,






function(_ref6){var position=_ref6.position;return position==='right'?'16px':'0px';},
function(_ref7){var position=_ref7.position;return position==='right'?'0px':'16px';});


var TouchableOpacity=exports.TouchableOpacity=_native2.default.TouchableOpacity(_templateObject5);
//# sourceMappingURL=NatListItem.styles.js.map