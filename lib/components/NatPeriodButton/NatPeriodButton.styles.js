Object.defineProperty(exports,"__esModule",{value:true});exports.CustomTouchableOpacity=exports.CheckedIcon=exports.SubTitle=exports.Title=exports.CustomView=undefined;var _templateObject=_taggedTemplateLiteral(['\n    ','\n    background-color: ',';\n'],['\n    ','\n    background-color: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n    font-weight: bold;\n    color: ',';\n'],['\n    font-weight: bold;\n    color: ',';\n']),_templateObject3=_taggedTemplateLiteral(['\n    color: ',';\n'],['\n    color: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n    width: 18;\n    height: 18;\n    position: absolute;\n    top: 1;\n    right: 1;\n    align-self: flex-end;\n'],['\n    width: 18;\n    height: 18;\n    position: absolute;\n    top: 1;\n    right: 1;\n    align-self: flex-end;\n']),_templateObject5=_taggedTemplateLiteral(['\n    border-radius: 6px;\n'],['\n    border-radius: 6px;\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var contentDefault='\n    align-items: center;\n    justify-content: center;\n    border: 2px '+


_colors.colors.primary.yellow+';\n    border-radius: 6px;\n    width: 30%;\n    height: 64px;\n    padding: 5px;\n    margin-horizontal: 5px;\n';







var CustomView=exports.CustomView=_native2.default.View(_templateObject,
contentDefault,
function(props){return props.selected?_colors.colors.content.selectedBackground:_colors.colors.primary.white;});


var Title=exports.Title=_native2.default.Text(_templateObject2,

function(props){return props.selected?_colors.colors.bw.black:_colors.colors.bw.grayDarker;});


var SubTitle=exports.SubTitle=_native2.default.Text(_templateObject3,
function(props){return props.selected?_colors.colors.bw.black:_colors.colors.bw.grayDark;});


var CheckedIcon=exports.CheckedIcon=_native2.default.Image(_templateObject4);








var CustomTouchableOpacity=exports.CustomTouchableOpacity=_native2.default.TouchableOpacity(_templateObject5);
//# sourceMappingURL=NatPeriodButton.styles.js.map