Object.defineProperty(exports,"__esModule",{value:true});exports.load=exports.parseName=undefined;var _logoNaturaHorizontal=require('./logo-natura-horizontal.svg');var _logoNaturaHorizontal2=_interopRequireDefault(_logoNaturaHorizontal);
var _logoNaturaVertical=require('./logo-natura-vertical.svg');var _logoNaturaVertical2=_interopRequireDefault(_logoNaturaVertical);
var _logoNaturaNegativeHorizontal=require('./logo-natura-negative-horizontal.svg');var _logoNaturaNegativeHorizontal2=_interopRequireDefault(_logoNaturaNegativeHorizontal);
var _logoNaturaNegativeVertical=require('./logo-natura-negative-vertical.svg');var _logoNaturaNegativeVertical2=_interopRequireDefault(_logoNaturaNegativeVertical);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var icons={
LogoNaturaHorizontal:_logoNaturaHorizontal2.default,
LogoNaturaNegativeHorizontal:_logoNaturaNegativeHorizontal2.default,
LogoNaturaNegativeVertical:_logoNaturaNegativeVertical2.default,
LogoNaturaVertical:_logoNaturaVertical2.default};


var parseName=function parseName(name){return name.split('-').map(function(word){return word.charAt(0).toUpperCase()+word.slice(1);}).join('');};

var load=function load(name){return icons[parseName(name)];};exports.


parseName=parseName;exports.
load=load;
//# sourceMappingURL=index.js.map