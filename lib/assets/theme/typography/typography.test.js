var _typography=require('./typography');
var _fonts=require('../fonts/fonts');

describe('Typography',function(){
it('Should return correct styles Typography',function(){
var displayXLarge={
fontFamily:_fonts.natura.regular,
fontSize:96,
fontWeight:'400',
lineHeight:104};


var displayLarge={
fontFamily:_fonts.natura.regular,
fontSize:88,
fontWeight:'400',
lineHeight:96};


var displayMedium={
fontFamily:_fonts.natura.regular,
fontSize:72,
fontWeight:'400',
lineHeight:80};


var displaySmall={
fontFamily:_fonts.natura.regular,
fontSize:56,
fontWeight:'400',
lineHeight:64};


var headerXLarge={
fontFamily:_fonts.natura.regular,
fontSize:40,
fontWeight:'400',
lineHeight:48};


var headerLarge={
fontFamily:_fonts.natura.regular,
fontSize:32,
fontWeight:'400',
lineHeight:40};


var headerMedium={
fontFamily:_fonts.natura.regular,
fontSize:28,
fontWeight:'400',
lineHeight:36};


var headerSmall={
fontFamily:_fonts.natura.regular,
fontSize:24,
fontWeight:'400',
lineHeight:32};


var headerXSmall={
fontFamily:_fonts.natura.regular,
fontSize:20,
fontWeight:'400',
lineHeight:28};


var bodyLarge={
fontFamily:_fonts.roboto.regular,
fontSize:16,
fontWeight:'400',
lineHeight:24};


var bodySmall={
fontFamily:_fonts.roboto.regular,
fontSize:14,
fontWeight:'400',
lineHeight:22};


var meta={
fontFamily:_fonts.roboto.regular,
fontSize:12,
fontWeight:'400',
lineHeight:20};


var bodyLargeIOS={
fontFamily:_fonts.sanfrancisco.regular,
fontSize:16,
fontWeight:'400',
lineHeight:24};


var bodySmallIOS={
fontFamily:_fonts.sanfrancisco.regular,
fontSize:14,
fontWeight:'400',
lineHeight:22};


var metaIOS={
fontFamily:_fonts.sanfrancisco.regular,
fontSize:12,
fontWeight:'400',
lineHeight:20};


expect(_typography.display.XLarge).toEqual(displayXLarge);
expect(_typography.display.Large).toEqual(displayLarge);
expect(_typography.display.Medium).toEqual(displayMedium);
expect(_typography.display.Small).toEqual(displaySmall);

expect(_typography.header.XLarge).toEqual(headerXLarge);
expect(_typography.header.Large).toEqual(headerLarge);
expect(_typography.header.Medium).toEqual(headerMedium);
expect(_typography.header.Small).toEqual(headerSmall);
expect(_typography.header.XSmall).toEqual(headerXSmall);

expect((0,_typography.body)('android').Large).toEqual(bodyLarge);
expect((0,_typography.body)('android').Small).toEqual(bodySmall);
expect((0,_typography.body)('android').Meta).toEqual(meta);
expect((0,_typography.body)('ios').Large).toEqual(bodyLargeIOS);
expect((0,_typography.body)('ios').Small).toEqual(bodySmallIOS);
expect((0,_typography.body)('ios').Meta).toEqual(metaIOS);
});
});
//# sourceMappingURL=typography.test.js.map