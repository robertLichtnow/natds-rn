Object.defineProperty(exports,"__esModule",{value:true});exports.NatView=undefined;var _templateObject=_taggedTemplateLiteral(['\n  margin-top: ','px;\n  margin-bottom: ','px;\n  margin-right: ','px;\n  margin-left: ','px;\n  padding-top: ','px;\n  padding-bottom: ','px;\n  padding-right: ','px;\n  padding-left: ','px;\n  background-color: ','\n'],['\n  margin-top: ','px;\n  margin-bottom: ','px;\n  margin-right: ','px;\n  margin-left: ','px;\n  padding-top: ','px;\n  padding-bottom: ','px;\n  padding-right: ','px;\n  padding-left: ','px;\n  background-color: ','\n']);var _native=require('styled-components/native');var _native2=_interopRequireDefault(_native);
var _sizes=require('../../tokens/sizes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var NatView=exports.NatView=_native2.default.View(_templateObject,
function(props){return _sizes.sizes[props.marginTop];},
function(props){return _sizes.sizes[props.marginBottom];},
function(props){return _sizes.sizes[props.marginRight];},
function(props){return _sizes.sizes[props.marginLeft];},
function(props){return _sizes.sizes[props.paddingTop];},
function(props){return _sizes.sizes[props.paddingBottom];},
function(props){return _sizes.sizes[props.paddingRight];},
function(props){return _sizes.sizes[props.paddingLeft];},
function(props){return props.backgroundColor?props.backgroundColor:'none';});
//# sourceMappingURL=NatSpace.styles.js.map