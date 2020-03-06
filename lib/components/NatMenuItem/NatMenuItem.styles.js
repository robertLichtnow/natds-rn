Object.defineProperty(exports,"__esModule",{value:true});exports.MenuTitle=exports.View=undefined;var _templateObject=_taggedTemplateLiteral(['\n  height: 48;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 16;\n'],['\n  height: 48;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 16;\n']),_templateObject2=_taggedTemplateLiteral(['\n  color: ',';\n  flex: 1;\n  margin-left: 32;\n  align-self: center;\n'],['\n  color: ',';\n  flex: 1;\n  margin-left: 32;\n  align-self: center;\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var menuItemStyles={
default:{
color:_colors.colors.bw.grayDarker,
height:48}};



var getStylesFrom=function getStylesFrom(styles){return function(type){return styles[type]||styles.default;};};

var getMenuItemStyles=getStylesFrom(menuItemStyles);

var View=exports.View=_native2.default.TouchableOpacity(_templateObject);







var MenuTitle=exports.MenuTitle=_native2.default.Text(_templateObject2,
function(_ref){var type=_ref.type,state=_ref.state;return getMenuItemStyles(type,state).color;});
//# sourceMappingURL=NatMenuItem.styles.js.map