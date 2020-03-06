Object.defineProperty(exports,"__esModule",{value:true});exports.Icon=undefined;var _jsxFileName='lib/components/Icon/Icon.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _natdsIcons=require('@naturacosmeticos/natds-icons/dist/natds-icons.json');var _natdsIcons2=_interopRequireDefault(_natdsIcons);
var _sizes=require('../../tokens/sizes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var Icon=function Icon(_ref){var name=_ref.name,size=_ref.size,style=_ref.style;
var styles=_reactNative.StyleSheet.create({
icon:_extends({},
style,{
fontFamily:'natds-icons',
fontSize:size})});



var cleanedCode=_natdsIcons2.default[name]?_natdsIcons2.default[name].replace('%','\\'):_natdsIcons2.default['filled-brand-naturarosacea'];
var iconCode=JSON.parse('["'+cleanedCode+'"]')[0];

return _react2.default.createElement(_reactNative.Text,{style:styles.icon,__source:{fileName:_jsxFileName,lineNumber:20}},iconCode);
};

Icon.propTypes={
name:_propTypes2.default.string,
size:_propTypes2.default.number,
style:_propTypes2.default.object};


Icon.defaultProps={
name:'filled-brand-naturarosacea',
size:_sizes.sizes.medium,
style:undefined};exports.


Icon=Icon;
//# sourceMappingURL=Icon.js.map