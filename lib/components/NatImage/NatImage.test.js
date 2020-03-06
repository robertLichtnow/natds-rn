var _jsxFileName='lib/components/NatImage/NatImage.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
require('jest-styled-components/native');

var _NatImage=require('./NatImage');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('NatImage component default',function(){
it('Should render NatImage component ',function(){
var button=_reactTestRenderer2.default.create(
_react2.default.createElement(_NatImage.NatImage,{__source:{fileName:_jsxFileName,lineNumber:10}})).
toJSON();

expect(button).toMatchSnapshot('NatImage snapshot');
});
});
//# sourceMappingURL=NatImage.test.js.map