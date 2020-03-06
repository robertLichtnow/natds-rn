Object.defineProperty(exports,"__esModule",{value:true});exports.body=exports.header=exports.display=undefined;var _reactNative=require('react-native');
var _fonts=require('../fonts/fonts');

var display=exports.display=_reactNative.StyleSheet.create({
Large:{
fontFamily:_fonts.natura.regular,
fontSize:88,
fontWeight:'400',
lineHeight:96},

Medium:{
fontFamily:_fonts.natura.regular,
fontSize:72,
fontWeight:'400',
lineHeight:80},

Small:{
fontFamily:_fonts.natura.regular,
fontSize:56,
fontWeight:'400',
lineHeight:64},

XLarge:{
fontFamily:_fonts.natura.regular,
fontSize:96,
fontWeight:'400',
lineHeight:104}});



var header=exports.header=_reactNative.StyleSheet.create({
Large:{
fontFamily:_fonts.natura.regular,
fontSize:32,
fontWeight:'400',
lineHeight:40},

Medium:{
fontFamily:_fonts.natura.regular,
fontSize:28,
fontWeight:'400',
lineHeight:36},

Small:{
fontFamily:_fonts.natura.regular,
fontSize:24,
fontWeight:'400',
lineHeight:32},

XLarge:{
fontFamily:_fonts.natura.regular,
fontSize:40,
fontWeight:'400',
lineHeight:48},

XSmall:{
fontFamily:_fonts.natura.regular,
fontSize:20,
fontWeight:'400',
lineHeight:28},

XSmallBold:{
fontFamily:_fonts.natura.bold,
fontSize:20,
lineHeight:28}});



var body=exports.body=function body(){var Platform=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'android';return _reactNative.StyleSheet.create({
Large:{
fontFamily:Platform==='ios'?_fonts.sanfrancisco.regular:_fonts.roboto.regular,
fontSize:16,
fontWeight:'400',
lineHeight:24},

Meta:{
fontFamily:Platform==='ios'?_fonts.sanfrancisco.regular:_fonts.roboto.regular,
fontSize:12,
fontWeight:'400',
lineHeight:20},

Small:{
fontFamily:Platform==='ios'?_fonts.sanfrancisco.regular:_fonts.roboto.regular,
fontSize:14,
fontWeight:'400',
lineHeight:22}});};
//# sourceMappingURL=typography.js.map