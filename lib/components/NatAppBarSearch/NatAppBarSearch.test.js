var _jsxFileName='lib/components/NatAppBarSearch/NatAppBarSearch.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);

var _NatAppBarSearch=require('./NatAppBarSearch');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Header component',function(){
it('Should render container component correctly',function(){
var header=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatAppBarSearch.NatAppBarSearch,{
title:'Title test',
onPress:jest.fn(),__source:{fileName:_jsxFileName,lineNumber:9}})).

toJSON();

expect(header).toMatchSnapshot('NatAppBarSearch default render');
});
});
//# sourceMappingURL=NatAppBarSearch.test.js.map