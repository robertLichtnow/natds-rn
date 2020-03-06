var _fonts=require('./fonts');

describe('Fonts',function(){
it('Should return correct fonts',function(){
var naturaMock={
bold:'NaturaSans-Bold',
regular:'NaturaSans-Regular'};


var robotoMock={
bold:'Roboto-Bold',
regular:'Roboto-Regular'};


var sanfranciscoMock={
bold:'System',
regular:'System'};


expect(_fonts.natura.regular).toEqual(naturaMock.regular);
expect(_fonts.natura.bold).toEqual(naturaMock.bold);
expect(_fonts.roboto.bold).toEqual(robotoMock.bold);
expect(_fonts.roboto.regular).toEqual(robotoMock.regular);
expect(_fonts.sanfrancisco.bold).toEqual(sanfranciscoMock.bold);
expect(_fonts.sanfrancisco.regular).toEqual(sanfranciscoMock.regular);
});
});
//# sourceMappingURL=fonts.test.js.map