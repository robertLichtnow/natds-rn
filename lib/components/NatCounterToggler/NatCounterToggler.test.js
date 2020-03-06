var _jsxFileName='lib/components/NatCounterToggler/NatCounterToggler.test.js';
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _enzyme=require('enzyme');
require('jest-styled-components');
var _NatCounterToggler=require('./NatCounterToggler');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatCounterToggler',function(){
afterEach(function(){
jest.clearAllMocks();
});

it('Should render the component correctly',function(){
var CounterToggler=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatCounterToggler.NatCounterToggler,{__source:{fileName:_jsxFileName,lineNumber:15}})).
toJSON();

expect(CounterToggler).toMatchSnapshot();
});

it('Should simulate the decrease click on the component',function(){
var onDecreaseEvent=jest.fn();
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatCounterToggler.NatCounterToggler,{onDecrease:onDecreaseEvent,__source:{fileName:_jsxFileName,lineNumber:23}}));

wrapper.getElement().props.children[0].props.onPress();
expect(onDecreaseEvent.mock.calls.length).toBe(1);
});

it('Should simulate the increase click on the component',function(){
var onIncreaseEvent=jest.fn();
var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatCounterToggler.NatCounterToggler,{onIncrease:onIncreaseEvent,__source:{fileName:_jsxFileName,lineNumber:31}}));

wrapper.getElement().props.children[2].props.onPress();
expect(onIncreaseEvent.mock.calls.length).toBe(1);
});

it('Should limit the counter on the component and deny further increment upon htting the maximum limit',function(){
var counter=1;

var onIncrease=function onIncrease(){
counter=counter+=1;
};

var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatCounterToggler.NatCounterToggler,{
counter:counter,
min:1,
max:2,
onIncrease:onIncrease,__source:{fileName:_jsxFileName,lineNumber:44}}));


for(var i=0;i<3;i+=1){

wrapper.getElement().props.children[2].props.onPress();
}


expect(wrapper.getElement().props.children[2].props.disabled).toBe(true);
});


it('Should limit the counter on the component and deny further decrement upon htting the minimum limit',function(){
var counter=2;

var onDecrease=function onDecrease(){
counter=counter-=1;

wrapper.update();
};

var onIncrease=function onIncrease(){
counter=counter+=1;

wrapper.update();
};

var wrapper=(0,_enzyme.shallow)(_react2.default.createElement(_NatCounterToggler.NatCounterToggler,{
counter:counter,
min:1,
max:4,
onDecrease:onDecrease,
onIncrease:onIncrease,__source:{fileName:_jsxFileName,lineNumber:76}}));


for(var i=0;i<3;i+=1){

wrapper.getElement().props.children[2].props.onPress();
}

for(var _i=0;_i<11;_i+=1){

wrapper.getElement().props.children[0].props.onPress();
}


expect(wrapper.getElement().props.children[0].props.disabled).toBe(true);
});
});
//# sourceMappingURL=NatCounterToggler.test.js.map