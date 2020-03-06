Object.defineProperty(exports,"__esModule",{value:true});exports.CustomTouchableHighlight=exports.CustomTextOperators=exports.ContentViewDefault=exports.ContentViewRight=exports.ContentViewLeft=exports.CounterView=undefined;var _templateObject=_taggedTemplateLiteral(['\n    flex-direction: row;\n    align-items: stretch;\n    justify-content: space-between;\n    border: 1px ',';\n    border-radius: 6px;\n    width: ','\n    height: ','\n    background-color: ',';\n'],['\n    flex-direction: row;\n    align-items: stretch;\n    justify-content: space-between;\n    border: 1px ',';\n    border-radius: 6px;\n    width: ','\n    height: ','\n    background-color: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n    ',';\n    background-color: ',';\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n'],['\n    ',';\n    background-color: ',';\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n']),_templateObject3=_taggedTemplateLiteral(['\n    ',';\n    background-color: ',';\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n'],['\n    ',';\n    background-color: ',';\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n    ',';\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n'],['\n    ',';\n    border-bottom-width: 0.4;\n    border-bottom-color: ',';\n']),_templateObject5=_taggedTemplateLiteral(['\n    font-size: 20px;\n    color: #777777;\n'],['\n    font-size: 20px;\n    color: #777777;\n']),_templateObject6=_taggedTemplateLiteral(['\n    flex-grow: 1;\n    border-radius: 6px;\n    background-color: ',';\n'],['\n    flex-grow: 1;\n    border-radius: 6px;\n    background-color: ',';\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _colors=require('../../assets/theme/colors/colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var CommonContentView='\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n';





var CounterView=exports.CounterView=_native2.default.View(_templateObject,



_colors.colors.bw.gray,

function(props){return props.width?props.width:'130px';},
function(props){return props.height?props.height:'60px';},
function(props){return props.color?props.color:_colors.colors.primary.white;});


var ContentViewLeft=exports.ContentViewLeft=_native2.default.View(_templateObject2,
CommonContentView,
function(props){return props.color?props.color:_colors.colors.primary.white;},



_colors.colors.bw.gray);


var ContentViewRight=exports.ContentViewRight=_native2.default.View(_templateObject3,
CommonContentView,
function(props){return props.color?props.color:_colors.colors.primary.white;},



_colors.colors.bw.gray);


var ContentViewDefault=exports.ContentViewDefault=_native2.default.View(_templateObject4,
CommonContentView,

_colors.colors.bw.gray);


var CustomTextOperators=exports.CustomTextOperators=_native2.default.Text(_templateObject5);




var CustomTouchableHighlight=exports.CustomTouchableHighlight=_native2.default.TouchableHighlight(_templateObject6,


function(props){return props.color?props.color:_colors.colors.primary.white;});
//# sourceMappingURL=NatCounterToggler.styles.js.map