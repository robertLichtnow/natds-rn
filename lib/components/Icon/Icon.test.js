var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _jsxFileName='lib/components/Icon/Icon.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _natdsIcons=require('@naturacosmeticos/natds-icons/dist/natds-icons.json');var _natdsIcons2=_interopRequireDefault(_natdsIcons);
var _Icon=require('./Icon');
var _sizes=require('../../tokens/sizes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


describe('Icon component',function(){
it('should render Icon component with all possible icons',function(){

var keys=Object.keys(_natdsIcons2.default).filter(function(key){return key;});

keys.forEach(function(key){
var wrapper=_reactTestRenderer2.default.create(_react2.default.createElement(_Icon.Icon,{name:key,__source:{fileName:_jsxFileName,lineNumber:14}}));

expect(wrapper.toJSON()).toMatchSnapshot('Icon component - name: '+key);
});
});

it('should render filled-brand-naturarosacea icon when wrong name is given',function(){
var wrapper=_reactTestRenderer2.default.create(_react2.default.createElement(_Icon.Icon,{name:'MOCK-NAME',__source:{fileName:_jsxFileName,lineNumber:21}}));

expect(wrapper.toJSON()).toMatchSnapshot('Icon component - filled-brand-naturarosacea');
});

it('should render Icon component with all possible sizes',function(){
Object.entries(_sizes.sizes).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];
var wrapper=_reactTestRenderer2.default.create(_react2.default.createElement(_Icon.Icon,{name:value,__source:{fileName:_jsxFileName,lineNumber:28}}));

expect(wrapper.toJSON()).toMatchSnapshot('Icon component - key: '+key+' | size: '+value);
});
});
});
//# sourceMappingURL=Icon.test.js.map