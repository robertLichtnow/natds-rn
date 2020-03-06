Object.defineProperty(exports,"__esModule",{value:true});exports.NatContainer=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatContainer/NatContainer.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatContainer=require('./NatContainer.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var NatContainer=function NatContainer(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,['children']);return(
_react2.default.createElement(_NatContainer.View,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:7}}),
children));};exports.NatContainer=NatContainer;



NatContainer.propTypes={
children:_propTypes2.default.node.isRequired,
marginBottom:_propTypes2.default.string,
marginLeft:_propTypes2.default.string,
marginRight:_propTypes2.default.string,
marginTop:_propTypes2.default.string,
paddingBottom:_propTypes2.default.string,
paddingLeft:_propTypes2.default.string,
paddingRight:_propTypes2.default.string,
paddingTop:_propTypes2.default.string};


NatContainer.defaultProps={
marginBottom:'none',
marginLeft:'none',
marginRight:'none',
marginTop:'none',
paddingBottom:'small',
paddingLeft:'small',
paddingRight:'small',
paddingTop:'small'};
//# sourceMappingURL=NatContainer.js.map