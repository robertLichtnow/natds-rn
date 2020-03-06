var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='lib/components/NatModal/NatModal.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _NatModal=require('./NatModal');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatModal component and its variants',function(){
describe('NatModal',function(){
it('Should match snapshot',function(){
var props={
action:jest.fn(),
alternative:false,
buttonText:'Entendi',
text:'Texto de boas vindas',
title:'Boas vindas!',
visible:true};


var modal=_reactTestRenderer2.default.create(_react2.default.createElement(_NatModal.NatModal,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:18}}))).toJSON();

expect(modal).toMatchSnapshot();
});
});

describe('NatModal error',function(){
var props={};

beforeEach(function(){
props={
action:jest.fn(),
alternative:true,
alternativeAction:jest.fn(),
buttonText:'enviar link',
buttonTextAlternative:'cancelar',
text:'texto de descrição do modal',
title:'título'};

});

it('should render the error mode',function(){
var modalAlternative=_reactTestRenderer2.default.create(_react2.default.createElement(_NatModal.NatModal,_extends({},props,{alternative:true,__source:{fileName:_jsxFileName,lineNumber:40}}))).toJSON();

expect(modalAlternative).toMatchSnapshot();
});
});

describe('NatModal save',function(){
var props={};

beforeEach(function(){
props={
action:jest.fn(),
buttonText:'ok',
save:true,
text:'não deve aparecer o text',
title:'título'};

});

it('should render the save mode',function(){
var modalAlternative=_reactTestRenderer2.default.create(_react2.default.createElement(_NatModal.NatModal,_extends({},props,{save:true,__source:{fileName:_jsxFileName,lineNumber:60}}))).toJSON();

expect(modalAlternative).toMatchSnapshot();
});
});
});
//# sourceMappingURL=NatModal.test.js.map