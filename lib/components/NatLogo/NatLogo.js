Object.defineProperty(exports,"__esModule",{value:true});exports.NatLogo=undefined;var _jsxFileName='lib/components/NatLogo/NatLogo.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _svg=require('../../assets/logo/svg');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatLogo=exports.NatLogo=function NatLogo(_ref)




{var name=_ref.name,size=_ref.size,width=_ref.width,height=_ref.height;
var IconComponent=(0,_svg.load)(name);

return(
_react2.default.createElement(IconComponent,{width:width>0?width:size,height:height>0?height:size,__source:{fileName:_jsxFileName,lineNumber:14}}));

};

NatLogo.propTypes={
height:_propTypes2.default.number,
name:_propTypes2.default.string,
size:_propTypes2.default.number,
width:_propTypes2.default.number};


NatLogo.defaultProps={
height:0,
name:'logo-natura-vertical',
size:0,
width:0};
//# sourceMappingURL=NatLogo.js.map