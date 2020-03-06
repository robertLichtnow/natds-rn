Object.defineProperty(exports,"__esModule",{value:true});exports.load=exports.parseName=undefined;var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _filledActionAdd=require('./filled-action-add.svg');var _filledActionAdd2=_interopRequireDefault(_filledActionAdd);
var _filledActionCancel=require('./filled-action-cancel.svg');var _filledActionCancel2=_interopRequireDefault(_filledActionCancel);
var _filledActionCheck=require('./filled-action-check.svg');var _filledActionCheck2=_interopRequireDefault(_filledActionCheck);
var _filledActionRating=require('./filled-action-rating.svg');var _filledActionRating2=_interopRequireDefault(_filledActionRating);
var _filledActionSubtract=require('./filled-action-subtract.svg');var _filledActionSubtract2=_interopRequireDefault(_filledActionSubtract);
var _filledBrandNaturarosacea=require('./filled-brand-naturarosacea.svg');var _filledBrandNaturarosacea2=_interopRequireDefault(_filledBrandNaturarosacea);
var _filledMediaPause=require('./filled-media-pause.svg');var _filledMediaPause2=_interopRequireDefault(_filledMediaPause);
var _filledMediaPlay=require('./filled-media-play.svg');var _filledMediaPlay2=_interopRequireDefault(_filledMediaPlay);
var _filledNavigationDirectionleft=require('./filled-navigation-directionleft.svg');var _filledNavigationDirectionleft2=_interopRequireDefault(_filledNavigationDirectionleft);
var _filledNavigationDirectionright=require('./filled-navigation-directionright.svg');var _filledNavigationDirectionright2=_interopRequireDefault(_filledNavigationDirectionright);
var _filledNavigationDirectiontbottom=require('./filled-navigation-directiontbottom.svg');var _filledNavigationDirectiontbottom2=_interopRequireDefault(_filledNavigationDirectiontbottom);
var _filledNavigationDirectiontop=require('./filled-navigation-directiontop.svg');var _filledNavigationDirectiontop2=_interopRequireDefault(_filledNavigationDirectiontop);
var _filledNavigationMenu=require('./filled-navigation-menu.svg');var _filledNavigationMenu2=_interopRequireDefault(_filledNavigationMenu);
var _filledNavigationMore=require('./filled-navigation-more.svg');var _filledNavigationMore2=_interopRequireDefault(_filledNavigationMore);
var _outlinedActionAdd=require('./outlined-action-add.svg');var _outlinedActionAdd2=_interopRequireDefault(_outlinedActionAdd);
var _outlinedActionAttachment=require('./outlined-action-attachment.svg');var _outlinedActionAttachment2=_interopRequireDefault(_outlinedActionAttachment);
var _outlinedActionAutofilter=require('./outlined-action-autofilter.svg');var _outlinedActionAutofilter2=_interopRequireDefault(_outlinedActionAutofilter);
var _outlinedActionCalendar=require('./outlined-action-calendar.svg');var _outlinedActionCalendar2=_interopRequireDefault(_outlinedActionCalendar);
var _outlinedActionCancel=require('./outlined-action-cancel.svg');var _outlinedActionCancel2=_interopRequireDefault(_outlinedActionCancel);
var _outlinedActionChange=require('./outlined-action-change.svg');var _outlinedActionChange2=_interopRequireDefault(_outlinedActionChange);
var _outlinedActionCheck=require('./outlined-action-check.svg');var _outlinedActionCheck2=_interopRequireDefault(_outlinedActionCheck);
var _outlinedActionClosedbox=require('./outlined-action-closedbox.svg');var _outlinedActionClosedbox2=_interopRequireDefault(_outlinedActionClosedbox);
var _outlinedActionCopy=require('./outlined-action-copy.svg');var _outlinedActionCopy2=_interopRequireDefault(_outlinedActionCopy);
var _outlinedActionCycle=require('./outlined-action-cycle.svg');var _outlinedActionCycle2=_interopRequireDefault(_outlinedActionCycle);
var _outlinedActionDelete=require('./outlined-action-delete.svg');var _outlinedActionDelete2=_interopRequireDefault(_outlinedActionDelete);
var _outlinedActionDone=require('./outlined-action-done.svg');var _outlinedActionDone2=_interopRequireDefault(_outlinedActionDone);
var _outlinedActionDownload=require('./outlined-action-download.svg');var _outlinedActionDownload2=_interopRequireDefault(_outlinedActionDownload);
var _outlinedActionEdit=require('./outlined-action-edit.svg');var _outlinedActionEdit2=_interopRequireDefault(_outlinedActionEdit);
var _outlinedActionFavorite=require('./outlined-action-favorite.svg');var _outlinedActionFavorite2=_interopRequireDefault(_outlinedActionFavorite);
var _outlinedActionFilter=require('./outlined-action-filter.svg');var _outlinedActionFilter2=_interopRequireDefault(_outlinedActionFilter);
var _outlinedActionGridsquare=require('./outlined-action-gridsquare.svg');var _outlinedActionGridsquare2=_interopRequireDefault(_outlinedActionGridsquare);
var _outlinedActionHelp=require('./outlined-action-help.svg');var _outlinedActionHelp2=_interopRequireDefault(_outlinedActionHelp);
var _outlinedActionHistory=require('./outlined-action-history.svg');var _outlinedActionHistory2=_interopRequireDefault(_outlinedActionHistory);
var _outlinedActionLike=require('./outlined-action-like.svg');var _outlinedActionLike2=_interopRequireDefault(_outlinedActionLike);
var _outlinedActionList=require('./outlined-action-list.svg');var _outlinedActionList2=_interopRequireDefault(_outlinedActionList);
var _outlinedActionLove=require('./outlined-action-love.svg');var _outlinedActionLove2=_interopRequireDefault(_outlinedActionLove);
var _outlinedActionMic=require('./outlined-action-mic.svg');var _outlinedActionMic2=_interopRequireDefault(_outlinedActionMic);
var _outlinedActionMicrec=require('./outlined-action-micrec.svg');var _outlinedActionMicrec2=_interopRequireDefault(_outlinedActionMicrec);
var _outlinedActionNewrequest=require('./outlined-action-newrequest.svg');var _outlinedActionNewrequest2=_interopRequireDefault(_outlinedActionNewrequest);
var _outlinedActionOrder=require('./outlined-action-order.svg');var _outlinedActionOrder2=_interopRequireDefault(_outlinedActionOrder);
var _outlinedActionPhone=require('./outlined-action-phone.svg');var _outlinedActionPhone2=_interopRequireDefault(_outlinedActionPhone);
var _outlinedActionPrint=require('./outlined-action-print.svg');var _outlinedActionPrint2=_interopRequireDefault(_outlinedActionPrint);
var _outlinedActionRating=require('./outlined-action-rating.svg');var _outlinedActionRating2=_interopRequireDefault(_outlinedActionRating);
var _outlinedActionRequest=require('./outlined-action-request.svg');var _outlinedActionRequest2=_interopRequireDefault(_outlinedActionRequest);
var _outlinedActionSave=require('./outlined-action-save.svg');var _outlinedActionSave2=_interopRequireDefault(_outlinedActionSave);
var _outlinedActionSchedule=require('./outlined-action-schedule.svg');var _outlinedActionSchedule2=_interopRequireDefault(_outlinedActionSchedule);
var _outlinedActionSearch=require('./outlined-action-search.svg');var _outlinedActionSearch2=_interopRequireDefault(_outlinedActionSearch);
var _outlinedActionSelectedalllines=require('./outlined-action-selectedalllines.svg');var _outlinedActionSelectedalllines2=_interopRequireDefault(_outlinedActionSelectedalllines);
var _outlinedActionSend=require('./outlined-action-send.svg');var _outlinedActionSend2=_interopRequireDefault(_outlinedActionSend);
var _outlinedActionSettings=require('./outlined-action-settings.svg');var _outlinedActionSettings2=_interopRequireDefault(_outlinedActionSettings);
var _outlinedActionShare=require('./outlined-action-share.svg');var _outlinedActionShare2=_interopRequireDefault(_outlinedActionShare);
var _outlinedActionSubtract=require('./outlined-action-subtract.svg');var _outlinedActionSubtract2=_interopRequireDefault(_outlinedActionSubtract);
var _outlinedActionUpdate=require('./outlined-action-update.svg');var _outlinedActionUpdate2=_interopRequireDefault(_outlinedActionUpdate);
var _outlinedActionUpload=require('./outlined-action-upload.svg');var _outlinedActionUpload2=_interopRequireDefault(_outlinedActionUpload);
var _outlinedActionVisibility=require('./outlined-action-visibility.svg');var _outlinedActionVisibility2=_interopRequireDefault(_outlinedActionVisibility);
var _outlinedActionVisibilityoff=require('./outlined-action-visibilityoff.svg');var _outlinedActionVisibilityoff2=_interopRequireDefault(_outlinedActionVisibilityoff);
var _outlinedAlertEmpty=require('./outlined-alert-empty.svg');var _outlinedAlertEmpty2=_interopRequireDefault(_outlinedAlertEmpty);
var _outlinedAlertIndeterminate=require('./outlined-alert-indeterminate.svg');var _outlinedAlertIndeterminate2=_interopRequireDefault(_outlinedAlertIndeterminate);
var _outlinedAlertInfo=require('./outlined-alert-info.svg');var _outlinedAlertInfo2=_interopRequireDefault(_outlinedAlertInfo);
var _outlinedCommunicationChat=require('./outlined-communication-chat.svg');var _outlinedCommunicationChat2=_interopRequireDefault(_outlinedCommunicationChat);
var _outlinedCommunicationEmail=require('./outlined-communication-email.svg');var _outlinedCommunicationEmail2=_interopRequireDefault(_outlinedCommunicationEmail);
var _outlinedCommunicationHelp=require('./outlined-communication-help.svg');var _outlinedCommunicationHelp2=_interopRequireDefault(_outlinedCommunicationHelp);
var _outlinedCommunicationMessage=require('./outlined-communication-message.svg');var _outlinedCommunicationMessage2=_interopRequireDefault(_outlinedCommunicationMessage);
var _outlinedCommunicationOccurrence=require('./outlined-communication-occurrence.svg');var _outlinedCommunicationOccurrence2=_interopRequireDefault(_outlinedCommunicationOccurrence);
var _outlinedCommunicationReadEmail=require('./outlined-communication-readEmail.svg');var _outlinedCommunicationReadEmail2=_interopRequireDefault(_outlinedCommunicationReadEmail);
var _outlinedCommunicationSignal=require('./outlined-communication-signal.svg');var _outlinedCommunicationSignal2=_interopRequireDefault(_outlinedCommunicationSignal);
var _outlinedCommunicationSpeaker=require('./outlined-communication-speaker.svg');var _outlinedCommunicationSpeaker2=_interopRequireDefault(_outlinedCommunicationSpeaker);
var _outlinedCommunicationTreatment=require('./outlined-communication-treatment.svg');var _outlinedCommunicationTreatment2=_interopRequireDefault(_outlinedCommunicationTreatment);
var _outlinedContentAdddocument=require('./outlined-content-adddocument.svg');var _outlinedContentAdddocument2=_interopRequireDefault(_outlinedContentAdddocument);
var _outlinedContentAgility=require('./outlined-content-agility.svg');var _outlinedContentAgility2=_interopRequireDefault(_outlinedContentAgility);
var _outlinedContentBook=require('./outlined-content-book.svg');var _outlinedContentBook2=_interopRequireDefault(_outlinedContentBook);
var _outlinedContentBrightness=require('./outlined-content-brightness.svg');var _outlinedContentBrightness2=_interopRequireDefault(_outlinedContentBrightness);
var _outlinedContentChangeview=require('./outlined-content-changeview.svg');var _outlinedContentChangeview2=_interopRequireDefault(_outlinedContentChangeview);
var _outlinedContentChannel=require('./outlined-content-channel.svg');var _outlinedContentChannel2=_interopRequireDefault(_outlinedContentChannel);
var _outlinedContentChristmascard=require('./outlined-content-christmascard.svg');var _outlinedContentChristmascard2=_interopRequireDefault(_outlinedContentChristmascard);
var _outlinedContentConsistency=require('./outlined-content-consistency.svg');var _outlinedContentConsistency2=_interopRequireDefault(_outlinedContentConsistency);
var _outlinedContentDivulgation=require('./outlined-content-divulgation.svg');var _outlinedContentDivulgation2=_interopRequireDefault(_outlinedContentDivulgation);
var _outlinedContentEducation=require('./outlined-content-education.svg');var _outlinedContentEducation2=_interopRequireDefault(_outlinedContentEducation);
var _outlinedContentGift=require('./outlined-content-gift.svg');var _outlinedContentGift2=_interopRequireDefault(_outlinedContentGift);
var _outlinedContentGlobal=require('./outlined-content-global.svg');var _outlinedContentGlobal2=_interopRequireDefault(_outlinedContentGlobal);
var _outlinedContentHealth=require('./outlined-content-health.svg');var _outlinedContentHealth2=_interopRequireDefault(_outlinedContentHealth);
var _outlinedContentLock=require('./outlined-content-lock.svg');var _outlinedContentLock2=_interopRequireDefault(_outlinedContentLock);
var _outlinedContentMagic=require('./outlined-content-magic.svg');var _outlinedContentMagic2=_interopRequireDefault(_outlinedContentMagic);
var _outlinedContentMedal=require('./outlined-content-medal.svg');var _outlinedContentMedal2=_interopRequireDefault(_outlinedContentMedal);
var _outlinedContentMenu=require('./outlined-content-menu.svg');var _outlinedContentMenu2=_interopRequireDefault(_outlinedContentMenu);
var _outlinedContentMirror=require('./outlined-content-mirror.svg');var _outlinedContentMirror2=_interopRequireDefault(_outlinedContentMirror);
var _outlinedContentProdutivity=require('./outlined-content-produtivity.svg');var _outlinedContentProdutivity2=_interopRequireDefault(_outlinedContentProdutivity);
var _outlinedContentStore=require('./outlined-content-store.svg');var _outlinedContentStore2=_interopRequireDefault(_outlinedContentStore);
var _outlinedContentWifi=require('./outlined-content-wifi.svg');var _outlinedContentWifi2=_interopRequireDefault(_outlinedContentWifi);
var _outlinedFinanceBag=require('./outlined-finance-bag.svg');var _outlinedFinanceBag2=_interopRequireDefault(_outlinedFinanceBag);
var _outlinedFinanceCards=require('./outlined-finance-cards.svg');var _outlinedFinanceCards2=_interopRequireDefault(_outlinedFinanceCards);
var _outlinedFinanceCharging=require('./outlined-finance-charging.svg');var _outlinedFinanceCharging2=_interopRequireDefault(_outlinedFinanceCharging);
var _outlinedFinanceCreditcard=require('./outlined-finance-creditcard.svg');var _outlinedFinanceCreditcard2=_interopRequireDefault(_outlinedFinanceCreditcard);
var _outlinedFinanceDebit=require('./outlined-finance-debit.svg');var _outlinedFinanceDebit2=_interopRequireDefault(_outlinedFinanceDebit);
var _outlinedFinanceDiscount=require('./outlined-finance-discount.svg');var _outlinedFinanceDiscount2=_interopRequireDefault(_outlinedFinanceDiscount);
var _outlinedFinanceLittlemachine=require('./outlined-finance-littlemachine.svg');var _outlinedFinanceLittlemachine2=_interopRequireDefault(_outlinedFinanceLittlemachine);
var _outlinedFinanceMoney=require('./outlined-finance-money.svg');var _outlinedFinanceMoney2=_interopRequireDefault(_outlinedFinanceMoney);
var _outlinedFinanceMoneypaper=require('./outlined-finance-moneypaper.svg');var _outlinedFinanceMoneypaper2=_interopRequireDefault(_outlinedFinanceMoneypaper);
var _outlinedFinancePromotion=require('./outlined-finance-promotion.svg');var _outlinedFinancePromotion2=_interopRequireDefault(_outlinedFinancePromotion);
var _outlinedFinanceShoppingcart=require('./outlined-finance-shoppingcart.svg');var _outlinedFinanceShoppingcart2=_interopRequireDefault(_outlinedFinanceShoppingcart);
var _outlinedFinanceShoppingcartproduct=require('./outlined-finance-shoppingcartproduct.svg');var _outlinedFinanceShoppingcartproduct2=_interopRequireDefault(_outlinedFinanceShoppingcartproduct);
var _outlinedFinanceTagdiscount=require('./outlined-finance-tagdiscount.svg');var _outlinedFinanceTagdiscount2=_interopRequireDefault(_outlinedFinanceTagdiscount);
var _outlinedFinanceTransfermoney=require('./outlined-finance-transfermoney.svg');var _outlinedFinanceTransfermoney2=_interopRequireDefault(_outlinedFinanceTransfermoney);
var _outlinedMediaApp=require('./outlined-media-app.svg');var _outlinedMediaApp2=_interopRequireDefault(_outlinedMediaApp);
var _outlinedMediaCamera=require('./outlined-media-camera.svg');var _outlinedMediaCamera2=_interopRequireDefault(_outlinedMediaCamera);
var _outlinedMediaMonitor=require('./outlined-media-monitor.svg');var _outlinedMediaMonitor2=_interopRequireDefault(_outlinedMediaMonitor);
var _outlinedMediaPlay=require('./outlined-media-play.svg');var _outlinedMediaPlay2=_interopRequireDefault(_outlinedMediaPlay);
var _outlinedNavigationArrowbottom=require('./outlined-navigation-arrowbottom.svg');var _outlinedNavigationArrowbottom2=_interopRequireDefault(_outlinedNavigationArrowbottom);
var _outlinedNavigationArrowleft=require('./outlined-navigation-arrowleft.svg');var _outlinedNavigationArrowleft2=_interopRequireDefault(_outlinedNavigationArrowleft);
var _outlinedNavigationArrowright=require('./outlined-navigation-arrowright.svg');var _outlinedNavigationArrowright2=_interopRequireDefault(_outlinedNavigationArrowright);
var _outlinedNavigationArrowtop=require('./outlined-navigation-arrowtop.svg');var _outlinedNavigationArrowtop2=_interopRequireDefault(_outlinedNavigationArrowtop);
var _outlinedNavigationClose=require('./outlined-navigation-close.svg');var _outlinedNavigationClose2=_interopRequireDefault(_outlinedNavigationClose);
var _outlinedNavigationDirectionbottom=require('./outlined-navigation-directionbottom.svg');var _outlinedNavigationDirectionbottom2=_interopRequireDefault(_outlinedNavigationDirectionbottom);
var _outlinedNavigationDirectionleft=require('./outlined-navigation-directionleft.svg');var _outlinedNavigationDirectionleft2=_interopRequireDefault(_outlinedNavigationDirectionleft);
var _outlinedNavigationDirectionright=require('./outlined-navigation-directionright.svg');var _outlinedNavigationDirectionright2=_interopRequireDefault(_outlinedNavigationDirectionright);
var _outlinedNavigationDirectiontop=require('./outlined-navigation-directiontop.svg');var _outlinedNavigationDirectiontop2=_interopRequireDefault(_outlinedNavigationDirectiontop);
var _outlinedNavigationExit=require('./outlined-navigation-exit.svg');var _outlinedNavigationExit2=_interopRequireDefault(_outlinedNavigationExit);
var _outlinedNavigationGoback=require('./outlined-navigation-goback.svg');var _outlinedNavigationGoback2=_interopRequireDefault(_outlinedNavigationGoback);
var _outlinedNavigationGofront=require('./outlined-navigation-gofront.svg');var _outlinedNavigationGofront2=_interopRequireDefault(_outlinedNavigationGofront);
var _outlinedNavigationHome=require('./outlined-navigation-home.svg');var _outlinedNavigationHome2=_interopRequireDefault(_outlinedNavigationHome);
var _outlinedNavigationMenu=require('./outlined-navigation-menu.svg');var _outlinedNavigationMenu2=_interopRequireDefault(_outlinedNavigationMenu);
var _outlinedPlaceBus=require('./outlined-place-bus.svg');var _outlinedPlaceBus2=_interopRequireDefault(_outlinedPlaceBus);
var _outlinedPlaceForklift=require('./outlined-place-forklift.svg');var _outlinedPlaceForklift2=_interopRequireDefault(_outlinedPlaceForklift);
var _outlinedPlaceLocal=require('./outlined-place-local.svg');var _outlinedPlaceLocal2=_interopRequireDefault(_outlinedPlaceLocal);
var _outlinedPlaceTruck=require('./outlined-place-truck.svg');var _outlinedPlaceTruck2=_interopRequireDefault(_outlinedPlaceTruck);
var _outlinedPlaceWaze=require('./outlined-place-waze.svg');var _outlinedPlaceWaze2=_interopRequireDefault(_outlinedPlaceWaze);
var _outlinedProductBagproduct=require('./outlined-product-bagproduct.svg');var _outlinedProductBagproduct2=_interopRequireDefault(_outlinedProductBagproduct);
var _outlinedProductBeard=require('./outlined-product-beard.svg');var _outlinedProductBeard2=_interopRequireDefault(_outlinedProductBeard);
var _outlinedProductBrandsproduct=require('./outlined-product-brandsproduct.svg');var _outlinedProductBrandsproduct2=_interopRequireDefault(_outlinedProductBrandsproduct);
var _outlinedProductChildish=require('./outlined-product-childish.svg');var _outlinedProductChildish2=_interopRequireDefault(_outlinedProductChildish);
var _outlinedProductDailycare=require('./outlined-product-dailycare.svg');var _outlinedProductDailycare2=_interopRequireDefault(_outlinedProductDailycare);
var _outlinedProductHair=require('./outlined-product-hair.svg');var _outlinedProductHair2=_interopRequireDefault(_outlinedProductHair);
var _outlinedProductMakeup=require('./outlined-product-makeup.svg');var _outlinedProductMakeup2=_interopRequireDefault(_outlinedProductMakeup);
var _outlinedProductOutlet=require('./outlined-product-outlet.svg');var _outlinedProductOutlet2=_interopRequireDefault(_outlinedProductOutlet);
var _outlinedProductPerfumery=require('./outlined-product-perfumery.svg');var _outlinedProductPerfumery2=_interopRequireDefault(_outlinedProductPerfumery);
var _outlinedProductPromotionproduct=require('./outlined-product-promotionproduct.svg');var _outlinedProductPromotionproduct2=_interopRequireDefault(_outlinedProductPromotionproduct);
var _outlinedProductVegan=require('./outlined-product-vegan.svg');var _outlinedProductVegan2=_interopRequireDefault(_outlinedProductVegan);
var _outlinedSocialAddcontact=require('./outlined-social-addcontact.svg');var _outlinedSocialAddcontact2=_interopRequireDefault(_outlinedSocialAddcontact);
var _outlinedSocialBirthday=require('./outlined-social-birthday.svg');var _outlinedSocialBirthday2=_interopRequireDefault(_outlinedSocialBirthday);
var _outlinedSocialCollaborate=require('./outlined-social-collaborate.svg');var _outlinedSocialCollaborate2=_interopRequireDefault(_outlinedSocialCollaborate);
var _outlinedSocialContact=require('./outlined-social-contact.svg');var _outlinedSocialContact2=_interopRequireDefault(_outlinedSocialContact);
var _outlinedSocialDigitalconsultant=require('./outlined-social-digitalconsultant.svg');var _outlinedSocialDigitalconsultant2=_interopRequireDefault(_outlinedSocialDigitalconsultant);
var _outlinedSocialGroupofpeople=require('./outlined-social-groupofpeople.svg');var _outlinedSocialGroupofpeople2=_interopRequireDefault(_outlinedSocialGroupofpeople);
var _outlinedSocialMyprofile=require('./outlined-social-myprofile.svg');var _outlinedSocialMyprofile2=_interopRequireDefault(_outlinedSocialMyprofile);
var _outlinedSocialNetwork=require('./outlined-social-network.svg');var _outlinedSocialNetwork2=_interopRequireDefault(_outlinedSocialNetwork);
var _outlinedSocialPerson=require('./outlined-social-person.svg');var _outlinedSocialPerson2=_interopRequireDefault(_outlinedSocialPerson);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var icons={
FilledActionAdd:_filledActionAdd2.default,
FilledActionCancel:_filledActionCancel2.default,
FilledActionCheck:_filledActionCheck2.default,
FilledActionRating:_filledActionRating2.default,
FilledActionSubtract:_filledActionSubtract2.default,
FilledBrandNaturarosacea:_filledBrandNaturarosacea2.default,
FilledMediaPause:_filledMediaPause2.default,
FilledMediaPlay:_filledMediaPlay2.default,
FilledNavigationDirectionleft:_filledNavigationDirectionleft2.default,
FilledNavigationDirectionright:_filledNavigationDirectionright2.default,
FilledNavigationDirectiontbottom:_filledNavigationDirectiontbottom2.default,
FilledNavigationDirectiontop:_filledNavigationDirectiontop2.default,
FilledNavigationMenu:_filledNavigationMenu2.default,
FilledNavigationMore:_filledNavigationMore2.default,
OutlinedActionAdd:_outlinedActionAdd2.default,
OutlinedActionAttachment:_outlinedActionAttachment2.default,
OutlinedActionAutofilter:_outlinedActionAutofilter2.default,
OutlinedActionCalendar:_outlinedActionCalendar2.default,
OutlinedActionCancel:_outlinedActionCancel2.default,
OutlinedActionChange:_outlinedActionChange2.default,
OutlinedActionCheck:_outlinedActionCheck2.default,
OutlinedActionClosedbox:_outlinedActionClosedbox2.default,
OutlinedActionCopy:_outlinedActionCopy2.default,
OutlinedActionCycle:_outlinedActionCycle2.default,
OutlinedActionDelete:_outlinedActionDelete2.default,
OutlinedActionDone:_outlinedActionDone2.default,
OutlinedActionDownload:_outlinedActionDownload2.default,
OutlinedActionEdit:_outlinedActionEdit2.default,
OutlinedActionFavorite:_outlinedActionFavorite2.default,
OutlinedActionFilter:_outlinedActionFilter2.default,
OutlinedActionGridsquare:_outlinedActionGridsquare2.default,
OutlinedActionHelp:_outlinedActionHelp2.default,
OutlinedActionHistory:_outlinedActionHistory2.default,
OutlinedActionLike:_outlinedActionLike2.default,
OutlinedActionList:_outlinedActionList2.default,
OutlinedActionLove:_outlinedActionLove2.default,
OutlinedActionMic:_outlinedActionMic2.default,
OutlinedActionMicrec:_outlinedActionMicrec2.default,
OutlinedActionNewrequest:_outlinedActionNewrequest2.default,
OutlinedActionOrder:_outlinedActionOrder2.default,
OutlinedActionPhone:_outlinedActionPhone2.default,
OutlinedActionPrint:_outlinedActionPrint2.default,
OutlinedActionRating:_outlinedActionRating2.default,
OutlinedActionRequest:_outlinedActionRequest2.default,
OutlinedActionSave:_outlinedActionSave2.default,
OutlinedActionSchedule:_outlinedActionSchedule2.default,
OutlinedActionSearch:_outlinedActionSearch2.default,
OutlinedActionSelectedalllines:_outlinedActionSelectedalllines2.default,
OutlinedActionSend:_outlinedActionSend2.default,
OutlinedActionSettings:_outlinedActionSettings2.default,
OutlinedActionShare:_outlinedActionShare2.default,
OutlinedActionSubtract:_outlinedActionSubtract2.default,
OutlinedActionUpdate:_outlinedActionUpdate2.default,
OutlinedActionUpload:_outlinedActionUpload2.default,
OutlinedActionVisibility:_outlinedActionVisibility2.default,
OutlinedActionVisibilityoff:_outlinedActionVisibilityoff2.default,
OutlinedAlertEmpty:_outlinedAlertEmpty2.default,
OutlinedAlertIndeterminate:_outlinedAlertIndeterminate2.default,
OutlinedAlertInfo:_outlinedAlertInfo2.default,
OutlinedCommunicationChat:_outlinedCommunicationChat2.default,
OutlinedCommunicationEmail:_outlinedCommunicationEmail2.default,
OutlinedCommunicationHelp:_outlinedCommunicationHelp2.default,
OutlinedCommunicationMessage:_outlinedCommunicationMessage2.default,
OutlinedCommunicationOccurrence:_outlinedCommunicationOccurrence2.default,
OutlinedCommunicationReadEmail:_outlinedCommunicationReadEmail2.default,
OutlinedCommunicationSignal:_outlinedCommunicationSignal2.default,
OutlinedCommunicationSpeaker:_outlinedCommunicationSpeaker2.default,
OutlinedCommunicationTreatment:_outlinedCommunicationTreatment2.default,
OutlinedContentAdddocument:_outlinedContentAdddocument2.default,
OutlinedContentAgility:_outlinedContentAgility2.default,
OutlinedContentBook:_outlinedContentBook2.default,
OutlinedContentBrightness:_outlinedContentBrightness2.default,
OutlinedContentChangeview:_outlinedContentChangeview2.default,
OutlinedContentChannel:_outlinedContentChannel2.default,
OutlinedContentChristmascard:_outlinedContentChristmascard2.default,
OutlinedContentConsistency:_outlinedContentConsistency2.default,
OutlinedContentDivulgation:_outlinedContentDivulgation2.default,
OutlinedContentEducation:_outlinedContentEducation2.default,
OutlinedContentGift:_outlinedContentGift2.default,
OutlinedContentGlobal:_outlinedContentGlobal2.default,
OutlinedContentHealth:_outlinedContentHealth2.default,
OutlinedContentLock:_outlinedContentLock2.default,
OutlinedContentMagic:_outlinedContentMagic2.default,
OutlinedContentMedal:_outlinedContentMedal2.default,
OutlinedContentMenu:_outlinedContentMenu2.default,
OutlinedContentMirror:_outlinedContentMirror2.default,
OutlinedContentProdutivity:_outlinedContentProdutivity2.default,
OutlinedContentStore:_outlinedContentStore2.default,
OutlinedContentWifi:_outlinedContentWifi2.default,
OutlinedFinanceBag:_outlinedFinanceBag2.default,
OutlinedFinanceCards:_outlinedFinanceCards2.default,
OutlinedFinanceCharging:_outlinedFinanceCharging2.default,
OutlinedFinanceCreditcard:_outlinedFinanceCreditcard2.default,
OutlinedFinanceDebit:_outlinedFinanceDebit2.default,
OutlinedFinanceDiscount:_outlinedFinanceDiscount2.default,
OutlinedFinanceLittlemachine:_outlinedFinanceLittlemachine2.default,
OutlinedFinanceMoney:_outlinedFinanceMoney2.default,
OutlinedFinanceMoneypaper:_outlinedFinanceMoneypaper2.default,
OutlinedFinancePromotion:_outlinedFinancePromotion2.default,
OutlinedFinanceShoppingcart:_outlinedFinanceShoppingcart2.default,
OutlinedFinanceShoppingcartproduct:_outlinedFinanceShoppingcartproduct2.default,
OutlinedFinanceTagdiscount:_outlinedFinanceTagdiscount2.default,
OutlinedFinanceTransfermoney:_outlinedFinanceTransfermoney2.default,
OutlinedMediaApp:_outlinedMediaApp2.default,
OutlinedMediaCamera:_outlinedMediaCamera2.default,
OutlinedMediaMonitor:_outlinedMediaMonitor2.default,
OutlinedMediaPlay:_outlinedMediaPlay2.default,
OutlinedNavigationArrowbottom:_outlinedNavigationArrowbottom2.default,
OutlinedNavigationArrowleft:_outlinedNavigationArrowleft2.default,
OutlinedNavigationArrowright:_outlinedNavigationArrowright2.default,
OutlinedNavigationArrowtop:_outlinedNavigationArrowtop2.default,
OutlinedNavigationClose:_outlinedNavigationClose2.default,
OutlinedNavigationDirectionbottom:_outlinedNavigationDirectionbottom2.default,
OutlinedNavigationDirectionleft:_outlinedNavigationDirectionleft2.default,
OutlinedNavigationDirectionright:_outlinedNavigationDirectionright2.default,
OutlinedNavigationDirectiontop:_outlinedNavigationDirectiontop2.default,
OutlinedNavigationExit:_outlinedNavigationExit2.default,
OutlinedNavigationGoback:_outlinedNavigationGoback2.default,
OutlinedNavigationGofront:_outlinedNavigationGofront2.default,
OutlinedNavigationHome:_outlinedNavigationHome2.default,
OutlinedNavigationMenu:_outlinedNavigationMenu2.default,
OutlinedPlaceBus:_outlinedPlaceBus2.default,
OutlinedPlaceForklift:_outlinedPlaceForklift2.default,
OutlinedPlaceLocal:_outlinedPlaceLocal2.default,
OutlinedPlaceTruck:_outlinedPlaceTruck2.default,
OutlinedPlaceWaze:_outlinedPlaceWaze2.default,
OutlinedProductBagproduct:_outlinedProductBagproduct2.default,
OutlinedProductBeard:_outlinedProductBeard2.default,
OutlinedProductBrandsproduct:_outlinedProductBrandsproduct2.default,
OutlinedProductChildish:_outlinedProductChildish2.default,
OutlinedProductDailycare:_outlinedProductDailycare2.default,
OutlinedProductHair:_outlinedProductHair2.default,
OutlinedProductMakeup:_outlinedProductMakeup2.default,
OutlinedProductOutlet:_outlinedProductOutlet2.default,
OutlinedProductPerfumery:_outlinedProductPerfumery2.default,
OutlinedProductPromotionproduct:_outlinedProductPromotionproduct2.default,
OutlinedProductVegan:_outlinedProductVegan2.default,
OutlinedSocialAddcontact:_outlinedSocialAddcontact2.default,
OutlinedSocialBirthday:_outlinedSocialBirthday2.default,
OutlinedSocialCollaborate:_outlinedSocialCollaborate2.default,
OutlinedSocialContact:_outlinedSocialContact2.default,
OutlinedSocialDigitalconsultant:_outlinedSocialDigitalconsultant2.default,
OutlinedSocialGroupofpeople:_outlinedSocialGroupofpeople2.default,
OutlinedSocialMyprofile:_outlinedSocialMyprofile2.default,
OutlinedSocialNetwork:_outlinedSocialNetwork2.default,
OutlinedSocialPerson:_outlinedSocialPerson2.default};


var parseName=function parseName(name){return name.split('-').map(function(word){return word.charAt(0).toUpperCase()+word.slice(1);}).join('');};

var load=function load(name){
var icon=icons[parseName(name)];

if(icon)return icon;

return _reactNative.View;
};exports.


parseName=parseName;exports.
load=load;
//# sourceMappingURL=index.js.map