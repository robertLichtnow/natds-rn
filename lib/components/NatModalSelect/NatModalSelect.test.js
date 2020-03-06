var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatModalSelect/NatModalSelect.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _NatModalSelect=require('./NatModalSelect');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatModalSelect and its variants',function(){
describe('NatModalSelect',function(){
it('Should match snapshot',function(){
var props={
action:jest.fn(),
alternative:false,
buttonText:'Entendi',
text:'Texto de boas vindas',
title:'Boas vindas!',
visible:true};


var modal=_reactTestRenderer2.default.create(_react2.default.createElement(_NatModalSelect.NatModalSelect,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:18}}))).toJSON();

expect(modal).toMatchSnapshot('NatModalSelect snapshot');
});
});
});
//# sourceMappingURL=NatModalSelect.test.js.map