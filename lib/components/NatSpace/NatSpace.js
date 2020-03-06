Object.defineProperty(exports,"__esModule",{value:true});exports.NatSpace=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatSpace/NatSpace.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _NatSpace=require('./NatSpace.styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatSpace=exports.NatSpace=function NatSpace(_ref){var
children=_ref.children,
marginTop=_ref.marginTop,
marginBottom=_ref.marginBottom,
marginRight=_ref.marginRight,
marginLeft=_ref.marginLeft,
paddingTop=_ref.paddingTop,
paddingBottom=_ref.paddingBottom,
paddingRight=_ref.paddingRight,
paddingLeft=_ref.paddingLeft,
backgroundColor=_ref.backgroundColor;return(

_react2.default.createElement(_NatSpace.NatView,_extends({
backgroundColor:backgroundColor,
marginBottom:marginBottom,
marginLeft:marginLeft,
marginRight:marginRight,
marginTop:marginTop,
paddingBottom:paddingBottom,
paddingLeft:paddingLeft,
paddingRight:paddingRight,
paddingTop:paddingTop},{__source:{fileName:_jsxFileName,lineNumber:18}}),


children));};



NatSpace.propTypes={
backgroundColor:_propTypes2.default.string,
children:_propTypes2.default.node.isRequired,
marginBottom:_propTypes2.default.string,
marginLeft:_propTypes2.default.string,
marginRight:_propTypes2.default.string,
marginTop:_propTypes2.default.string,
paddingBottom:_propTypes2.default.string,
paddingLeft:_propTypes2.default.string,
paddingRight:_propTypes2.default.string,
paddingTop:_propTypes2.default.string};


NatSpace.defaultProps={
backgroundColor:'transparent',
marginBottom:'small',
marginLeft:'none',
marginRight:'none',
marginTop:'none',
paddingBottom:'none',
paddingLeft:'none',
paddingRight:'none',
paddingTop:'none'};
//# sourceMappingURL=NatSpace.js.map