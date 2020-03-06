var _colors=require('./colors');

describe('Colors',function(){
it('Should return correct hex colors',function(){
var bw={
black:'#000000',
gray:'#BBBBBB',
grayDark:'#777777',
grayDarker:'#333333',
grayLight:'#EEEEEE'};


var secondary={
blue:'#71CACD',
green:'#B3CA36',
purple:'#7080A0',
yellow:'#FFDA1B'};


var primary={
brown:'#513528',
orange:'#FF6B0B',
white:'#FFFFFF',
yellow:'#F4AB34'};


expect(_colors.colors.bw).toEqual(bw);
expect(_colors.colors.secondary).toEqual(secondary);
expect(_colors.colors.primary).toEqual(primary);
});
});
//# sourceMappingURL=colors.test.js.map