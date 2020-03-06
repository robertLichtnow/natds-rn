var _jsxFileName='lib/components/NatList/NatList.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');

var _NatList=require('./NatList');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Header component',function(){
var listItems=[
{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:{svg:{name:'outlined-action-autofilter'}},
id:'1',
onPress:function onPress(){},
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
title:'Title Text'},

{
dividerBottom:true,
iconLeft:false,
iconRight:{svg:{name:'outlined-action-autofilter'}},
id:'2',
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
title:'Title Text'},

{
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:false,
id:'3',
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
title:'Title Text'},

{
dividerTop:true,
iconLeft:{svg:{name:'outlined-navigation-menu'}},
iconRight:false,
id:'4',
onPressLeft:function onPressLeft(){},
onPressRight:function onPressRight(){},
title:'Title Text'}];



it('Should render container component correctly',function(){
var header=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatList.NatList,{
items:listItems,__source:{fileName:_jsxFileName,lineNumber:48}})).

toJSON();

expect(header).toMatchSnapshot('NatList snapshot');
});

it('Should render header component with title',function(){
(0,_enzyme.shallow)(
_react2.default.createElement(_NatList.NatList,{
items:listItems,
select:'1',__source:{fileName:_jsxFileName,lineNumber:58}}));


});
});
//# sourceMappingURL=NatList.test.js.map