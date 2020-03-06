var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatGridItem/NatGridItem.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _NatGridItem=require('./NatGridItem');
var _NatGridItem2=require('./NatGridItem.styles');


require('jest-styled-components/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatGridItem and local styled components',function(){
describe('NatGridItem component',function(){
it('Should render NatGridItem component ',function(){
var griditem=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatGridItem.NatGridItem,{sizeMedium:true,onPress:jest.fn(),source:'#',__source:{fileName:_jsxFileName,lineNumber:14}},'Texto')).


toJSON();

expect(griditem).toMatchSnapshot();
});

describe('Properties of NatGridItem',function(){
var press=function press(){};

beforeEach(function(){
press=jest.fn();
});

var props={
children:'descrição',
onPress:press,
sizeMedium:true,
source:'#'};


it('Should render NatGridItem component ',function(){
var griditem=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem.NatGridItem,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:37}}))).toJSON();

expect(griditem).toMatchSnapshot();
});
});
});

describe('Style Thumb',function(){
it('Thumb default',function(){
var thumb=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Thumb,{__source:{fileName:_jsxFileName,lineNumber:46}})).toJSON();

expect(thumb).toHaveStyleRule('width',128);
expect(thumb).toHaveStyleRule('height',128);
expect(thumb).toHaveStyleRule('border-radius',6);
expect(thumb).toHaveStyleRule('margin-bottom',8);
});

it('Style Thumb with sizeMedium props',function(){
var thumb=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Thumb,{sizeMedium:true,__source:{fileName:_jsxFileName,lineNumber:55}})).toJSON();

expect(thumb).toHaveStyleRule('width',156);
expect(thumb).toHaveStyleRule('height',156);
});
});

describe('Style Item',function(){
it('Item default',function(){
var item=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Item,{__source:{fileName:_jsxFileName,lineNumber:64}})).toJSON();

expect(item).toHaveStyleRule('margin-right',16);
expect(item).toHaveStyleRule('width',128);
expect(item).toHaveStyleRule('height',176);
});

it('Item with sizeMedium props',function(){
var item=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Item,{sizeMedium:true,__source:{fileName:_jsxFileName,lineNumber:72}})).toJSON();

expect(item).toHaveStyleRule('width',156);
expect(item).toHaveStyleRule('height',200);
});
});

describe('Style Description',function(){
it('Description default',function(){
var description=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Description,{__source:{fileName:_jsxFileName,lineNumber:81}})).toJSON();

expect(description).toHaveStyleRule('width',128);
});

it('description with sizeMedium props',function(){
var description=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Description,{sizeMedium:true,__source:{fileName:_jsxFileName,lineNumber:87}})).toJSON();

expect(description).toHaveStyleRule('width',156);
});
});

describe('Style Title',function(){
it('Title default',function(){
var title=_reactTestRenderer2.default.create(_react2.default.createElement(_NatGridItem2.Title,{__source:{fileName:_jsxFileName,lineNumber:95}})).toJSON();

expect(title).toHaveStyleRule('flex');
expect(title).toHaveStyleRule('font-size',14);
expect(title).toHaveStyleRule('font-weight','500');
expect(title).toHaveStyleRule('font-style','normal');
expect(title).toHaveStyleRule('font-align');
expect(title).toHaveStyleRule('color','#777777');
expect(title).toHaveStyleRule('robotoRegular');
});
});
});
//# sourceMappingURL=NatGridItem.test.js.map