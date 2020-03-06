Object.defineProperty(exports,"__esModule",{value:true});exports.ThemeNaturaLight=undefined;var _avatarSizes=require('../tokens/avatarSizes');
var _buttonSizes=require('../tokens/buttonSizes');
var _natura=require('../tokens/colors/natura');
var _elevation=require('../tokens/elevation');
var _fontSize=require('../tokens/fontSize');
var _iconSizes=require('../tokens/iconSizes');
var _radius=require('../tokens/radius');
var _sizes=require('../tokens/sizes');
var _spacing=require('../tokens/spacing');

var ThemeNaturaLight=exports.ThemeNaturaLight={
avatarSizes:_avatarSizes.avatarSizes,
buttonSizes:_buttonSizes.buttonSizes,
iconSizes:_iconSizes.iconSizes,
overrides:{
MuiAvatar:{
colorDefault:{
color:_natura.colors.grayscale.colorBrdNatGray}},


MuiButton:{
outlinedPrimary:{
color:_natura.colors.grayscale.colorBrdNatGray},

outlinedSecondary:{
color:_natura.colors.grayscale.colorBrdNatGray},

root:{
fontSize:'0.875rem',
minHeight:'40px',
padding:'8px 16px'},

sizeLarge:{
fontSize:'0.875rem',
minHeight:'48px'},

sizeSmall:{
fontSize:'0.875rem',
minHeight:'32px'}},


MuiIconButton:{
root:{
padding:'8px'},

sizeSmall:{
padding:'4px'}},


MuiListItem:{
button:{
'&:hover':{
backgroundColor:'rgba(255, 107, 11, .08)'}},


root:{
'&$selected':{
backgroundColor:'rgba(255, 107, 11, .16)'},

'&$selected:hover':{
backgroundColor:'rgba(255, 107, 11, .08)'}}},



MuiTab:{
root:{
'&$disabled':{
opacity:0.24}},


textColorInherit:{
'&$disabled':{
opacity:0.24}},


wrapper:{
'& > *:first-child':{
marginBottom:'2px !important'}}},



MuiToolbar:{
dense:{
'@media (min-width: 600px)':{
minHeight:'56px'},

minHeight:'56px'},

gutters:{
'@media (min-width: 600px)':{
padding:'0 16px'},

padding:'0 16px'},

regular:{
'@media (min-width: 600px)':{
minHeight:'56px'},

minHeight:'56px'},

root:{
'@media (min-width: 600px)':{
padding:'0 16px'},

padding:'0 16px'}}},



palette:{
action:{
disabled:'rgba(0, 0, 0, .24)'},

background:{
default:'#FAFAFA',
defaultContrastText:_natura.colors.grayscale.colorBrdNatGray,
paper:_natura.colors.primary.colorBrdNatPrimaryWhite,
paperContrastText:_natura.colors.grayscale.colorBrdNatGray},

complementary:{
highlight:_natura.colors.grayscale.colorBrdBlack,
link:_natura.colors.complementary.colorBrdNatCpBlue1,
linkContrastText:_natura.colors.primary.colorBrdNatPrimaryWhite,
warning:_natura.colors.complementary.colorBrdNatCpOrange4,
warningContrastText:_natura.colors.grayscale.colorBrdBlack},

error:{
contrastText:_natura.colors.primary.colorBrdNatPrimaryWhite,
main:_natura.colors.complementary.colorBrdNatCpRed2},

grayscale:_natura.colors.grayscale,
primary:{
contrastText:_natura.colors.grayscale.colorBrdNatGray,
dark:'#EF8426',
light:'#FEFDE8',
main:_natura.colors.primary.colorBrdNatPrimaryYellow},

secondary:{
contrastText:_natura.colors.grayscale.colorBrdBlack,
dark:'#EF8426',
light:'#FEFDE8',
main:_natura.colors.primary.colorBrdNatPrimaryOrange},

success:{
contrastText:_natura.colors.primary.colorBrdNatPrimaryWhite,
main:_natura.colors.complementary.colorBrdNatCpGreen1},

text:{
disabled:_natura.colors.grayscale.colorBrdNatGray2,
hint:_natura.colors.grayscale.colorBrdNatGray2,
primary:_natura.colors.grayscale.colorBrdNatGray,
secondary:_natura.colors.grayscale.colorBrdNatGray1}},


shadows:_elevation.elevation,
shape:{
badgeBorderRadius:100,
borderRadius:_radius.radius.medium},

sizes:_sizes.sizes,
spacing:_spacing.spacing,
typography:_fontSize.fontSize};
//# sourceMappingURL=ThemeNaturaLight.js.map