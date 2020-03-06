Object.defineProperty(exports,"__esModule",{value:true});exports.IconPress=exports.InputIcon=exports.AssistiveText=exports.Label=exports.TextInput=exports.InputWrapper=exports.Wrapper=undefined;var _jsxFileName='lib/components/NatSelectInput/NatSelectInput.styles.js';var _templateObject=_taggedTemplateLiteral(['\n  width: 100%;\n  margin-bottom: ',';\n'],['\n  width: 100%;\n  margin-bottom: ',';\n']),_templateObject2=_taggedTemplateLiteral(['\n  border: ',';\n  border-color: ',';\n  border-radius: 4px;\n  height: ',';\n  padding-left: 16px;\n  padding-bottom: 0px;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ',';\n'],['\n  border: ',';\n  border-color: ',';\n  border-radius: 4px;\n  height: ',';\n  padding-left: 16px;\n  padding-bottom: 0px;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ',';\n']),_templateObject3=_taggedTemplateLiteral(['\n  font-size: 16px;\n  flex: 7;\n  align-self: center;\n  padding-top: ',';\n  padding-bottom: ',';\n  text-align-vertical: top;\n  height: ',';\n  color: ',';\n  letter-spacing: ',';\n'],['\n  font-size: 16px;\n  flex: 7;\n  align-self: center;\n  padding-top: ',';\n  padding-bottom: ',';\n  text-align-vertical: top;\n  height: ',';\n  color: ',';\n  letter-spacing: ',';\n']),_templateObject4=_taggedTemplateLiteral(['\n  height: 24;\n  width: 24;\n  tint-color: ',';\n'],['\n  height: 24;\n  width: 24;\n  tint-color: ',';\n']),_templateObject5=_taggedTemplateLiteral(['\n  align-self: center;\n  flex: 1;\n'],['\n  align-self: center;\n  flex: 1;\n']);var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _NatText=require('../NatText');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var getInputStyles=function getInputStyles(type,state,theme){
var configStyle={};

switch(type){
case'error':
configStyle.color=theme.palette.error.main;
configStyle.borderColor=theme.palette.error.main;
configStyle.border='2px';
break;
case'disabled':
configStyle.color=theme.palette.text.disabled;
configStyle.borderColor=theme.palette.text.disabled;

break;
case'none':
configStyle.color=theme.palette.text.disabled;
configStyle.borderColor=theme.palette.text.disabled;
configStyle.border='0px';

break;
default:
configStyle.color=theme.palette.text.secondary;
configStyle.borderColor=theme.palette.text.disabled;

if(state==='active'){
configStyle.border='2px';
configStyle.borderColor=theme.palette.primary.main;
}
if(state==='filled'){

configStyle.borderColor=theme.palette.background.defaultContrastText;
}

break;}


return configStyle;
};

var Wrapper=exports.Wrapper=_native2.default.View(_templateObject,

function(_ref){var defaultMargin=_ref.defaultMargin;return defaultMargin||'0px';});


var InputWrapper=exports.InputWrapper=_native2.default.View(_templateObject2,
function(_ref2){var type=_ref2.type,state=_ref2.state,theme=_ref2.theme;return getInputStyles(type,state,theme).border||'1px';},
function(_ref3){var type=_ref3.type,state=_ref3.state,theme=_ref3.theme;return getInputStyles(type,state,theme).borderColor;},

function(_ref4){var defaultSize=_ref4.defaultSize;return defaultSize||'56px';},




function(_ref5){var type=_ref5.type,state=_ref5.state,theme=_ref5.theme;return getInputStyles(type,state,theme).backgroundColor||'transparent';});


var TextInput=exports.TextInput=_native2.default.TextInput(_templateObject3,



function(_ref6){var numberOfLines=_ref6.numberOfLines;return numberOfLines>1?'16px':'0px';},
function(_ref7){var numberOfLines=_ref7.numberOfLines;return numberOfLines>1?'16px':'0px';},

function(_ref8){var defaultSize=_ref8.defaultSize;return defaultSize||'56px';},
function(_ref9){var type=_ref9.type,state=_ref9.state,theme=_ref9.theme;return getInputStyles(type,state,theme).fontColor||theme.palette.text.secondary;},
function(_ref10){var secureTextEntry=_ref10.secureTextEntry;return secureTextEntry?'0px':'0px';});


var Label=exports.Label=function Label(_ref11)




{var type=_ref11.type,state=_ref11.state,theme=_ref11.theme,text=_ref11.text;var _getInputStyles=
getInputStyles(type,state,theme),color=_getInputStyles.color;

return _react2.default.createElement(_NatText.NatText,{value:text,type:'body2',color:color,margin:theme.spacing.spacingNone,__source:{fileName:_jsxFileName,lineNumber:82}});
};

var AssistiveText=exports.AssistiveText=function AssistiveText(_ref12)




{var type=_ref12.type,state=_ref12.state,theme=_ref12.theme,text=_ref12.text;var _getInputStyles2=
getInputStyles(type,state,theme),color=_getInputStyles2.color;

return _react2.default.createElement(_NatText.NatText,{value:text,type:'caption',color:color,margin:theme.spacing.spacingNone,__source:{fileName:_jsxFileName,lineNumber:93}});
};

var InputIcon=exports.InputIcon=_native2.default.Image(_templateObject4,


function(_ref13){var type=_ref13.type,state=_ref13.state,theme=_ref13.theme;return getInputStyles(type,state,theme).color;});


var IconPress=exports.IconPress=_native2.default.TouchableOpacity(_templateObject5);




AssistiveText.propTypes={
state:_propTypes2.default.string.isRequired,
text:_propTypes2.default.string.isRequired,
theme:_propTypes2.default.shape.isRequired,
type:_propTypes2.default.string.isRequired};


Label.propTypes={
state:_propTypes2.default.string.isRequired,
text:_propTypes2.default.string.isRequired,
theme:_propTypes2.default.shape.isRequired,
type:_propTypes2.default.string.isRequired};
//# sourceMappingURL=NatSelectInput.styles.js.map