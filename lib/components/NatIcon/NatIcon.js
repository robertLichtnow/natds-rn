Object.defineProperty(exports,"__esModule",{value:true});exports.NatIcon=undefined;var _jsxFileName='lib/components/NatIcon/NatIcon.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _svg=require('../../assets/icons/svg');
var _ThemeNaturaLight=require('../../themes/ThemeNaturaLight');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NatIcon=exports.NatIcon=function NatIcon(_ref){var name=_ref.name,size=_ref.size,fill=_ref.fill;
var IconComponent=(0,_svg.load)(name);

return(
_react2.default.createElement(IconComponent,{width:size,height:size,style:{fill:fill},__source:{fileName:_jsxFileName,lineNumber:10}}));

};

NatIcon.propTypes={
fill:_propTypes2.default.string,
name:_propTypes2.default.string,
size:_propTypes2.default.number};


NatIcon.defaultProps={
fill:_ThemeNaturaLight.ThemeNaturaLight.palette.text.primary,
name:'filled-brand-naturarosacea',
size:24};
//# sourceMappingURL=NatIcon.js.map