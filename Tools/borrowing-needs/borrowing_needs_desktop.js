var borrowing_needs_props = require('./borrowing_needs_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());    

function globalProps(client){
    pageObj = client.page.borrowing_needs_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
}    

module.exports = {
    '@tags': ['desktop', 'borrowing-needs', 'borrowing_needs_desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_BORROWING_NEEDS);
            console.log("--Desktop--"+pageurl.NW_PER_BORROWING_NEEDS); 
    },
                  /*********STEP 1 First-Page Properties**********/
//  "1. Check for overdraft shelf properties": function (client) {
//          overdraftWrap = pageObj.elements.overdraftWrap.selector

//         if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
//             //overdraft shelf wrapper properties
//             client.elements('css selector', overdraftWrap, results => {
//                 if (results.value.length > 0) {
//                     properties = borrowing_needs_props.overdraftWrapProps('lg');
//                     callback.multiloop(client, overdraftWrap, properties, 'lg');
//                 }
//             });
//         }
//     },

//     "2. Check for Landing page properties": function(client) {
//         landingPageHeading = pageObj.elements.landingPageHeading.selector,
//         productContainer = pageObj.elements.productContainer.selector,
//         prodContainerFirstRow = pageObj.elements.prodContainerFirstRow.selector
//         prodContainerWidget = pageObj.elements.prodContainerWidget.selector,
//         prodContainerWidgetLastChild = pageObj.elements.prodContainerWidgetLastChild.selector,
//         widgetImageBox=pageObj.elements.widgetImageBox.selector,
//         widgetImageBoxImg = pageObj.elements.widgetImageBoxImg.selector,
//         widgetBoxText= pageObj.elements.widgetBoxText.selector

//         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
//         client.elements('css selector',landingPageHeading,results=>{
//             if(results.value.length>0) { 
//             //landing page heading properties
//             Properties = borrowing_needs_props.landingPageHeadingProps('lg');  
//             callback.multiloop(client,landingPageHeading, Properties, 'lg');

//             //landing page product container props
//             Properties = borrowing_needs_props.productContainerProps('lg');  
//             callback.multiloop(client,productContainer, Properties, 'lg');
 
//             Properties = borrowing_needs_props.prodContainerFirstRowProps('lg');  
//             callback.multiloop(client,prodContainerFirstRow, Properties, 'lg');

//             Properties = borrowing_needs_props.prodContainerWidgetProps('lg');  
//             callback.multiloop(client,prodContainerWidget, Properties, 'lg');

//             Properties = borrowing_needs_props.prodContainerWidgetLastChildProps('lg');  
//             callback.multiloop(client,prodContainerWidgetLastChild, Properties, 'lg');

//             Properties = borrowing_needs_props.widgetImageBoxProps('lg');  
//             callback.multiloop(client,widgetImageBox, Properties, 'lg');

//             Properties = borrowing_needs_props.widgetImageBoxImgProps('lg');  
//             callback.multiloop(client,widgetImageBoxImg, Properties, 'lg');

//             Properties = borrowing_needs_props.widgetBoxTextProps('lg');  
//             callback.multiloop(client,widgetBoxText, Properties, 'lg');

//             }
//         });
//         }      
//     },
//      "3. Check hover properties for widget box images": function(client) {

//         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
//             //MP//
//             client.expect.element('#MP img').to.have.attribute('src').which.contains('MP.png');
//             client.moveToElement("#MP",  10,  10);
//             client.expect.element('#MP img').to.have.attribute('src').which.contains('MP-hover.png');

//              //EE//
//             client.expect.element('#EE img').to.have.attribute('src').which.contains('EE.png');
//             client.moveToElement("#EE",  10,  10);
//             client.expect.element('#EE img').to.have.attribute('src').which.contains('EE-hover.png');

//              //DC//
//             client.expect.element('#DC img').to.have.attribute('src').which.contains('DC.png');
//             client.moveToElement("#DC",  10,  10);
//             client.expect.element('#DC img').to.have.attribute('src').which.contains('DC-hover.png');
            
//              //HI//
//             client.expect.element('#HI img').to.have.attribute('src').which.contains('HI.png');
//             client.moveToElement("#HI",  10,  10);
//             client.expect.element('#HI img').to.have.attribute('src').which.contains('HI-hover.png');

//              //BH//
//             client.expect.element('#BH img').to.have.attribute('src').which.contains('BH.png');
//             client.moveToElement("#BH",  10,  10);
//             client.expect.element('#BH img').to.have.attribute('src').which.contains('BH-hover.png');

//              //AE//
//             client.expect.element('#AE img').to.have.attribute('src').which.contains('AE.png');
//             client.moveToElement("#AE",  10,  10);
//             client.expect.element('#AE img').to.have.attribute('src').which.contains('AE-hover.png');

//             //MR//
//             client.expect.element('#MR img').to.have.attribute('src').which.contains('MR.png');
//             client.moveToElement("#MR",  10,  10);
//             client.expect.element('#MR img').to.have.attribute('src').which.contains('MR-hover.png');

//              //SE//
//             client.expect.element('#SE img').to.have.attribute('src').which.contains('SE.png');
//             client.moveToElement("#SE",  10,  10);
//             client.expect.element('#SE img').to.have.attribute('src').which.contains('SE-hover.png');
//         }
//     },
    // "4. Check for shelf bl properties": function(client) {
    //     shelfBl = pageObj.elements.shelfBl.selector,
    //     benefitsListUtext = pageObj.elements.benefitsListUtext.selector,
    //     overdraftIcon = pageObj.elements.overdraftIcon.selector,
    //     creditCardIcon = pageObj.elements.creditCardIcon.selector,
    //     personalLoanIcon=pageObj.elements.personalLoanIcon.selector,
    //     blText = pageObj.elements.blText.selector,
    //     blTextRTE= pageObj.elements.blTextRTE.selector,
    //     benefitsLists = pageObj.elements.benefitsLists.selector,
    //     blTextRTEtext = pageObj.elements.blTextRTEtext.selector,
    //     benefitsListUtextRte =  pageObj.elements.benefitsListUtextRte.selector

    //     callback.scrollToElement(client,shelfBl); 

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',shelfBl,results=>{
    //         if(results.value.length>0) { 
    //         //landing page bl shelf properties
    //         Properties = borrowing_needs_props.shelfBlProps('lg');  
    //         callback.multiloop(client,shelfBl, Properties, 'lg');

    //         Properties = borrowing_needs_props.benefitsListUtextProps('lg');  
    //         callback.multiloop(client,benefitsListUtext, Properties, 'lg');

    //         Properties = borrowing_needs_props.benefitsListUtextRTEProps('lg');  
    //         callback.multiloop(client,benefitsListUtextRte, Properties, 'lg');
 
    //         Properties = borrowing_needs_props.overdraftIconProps('lg');  
    //         callback.multiloop(client,overdraftIcon, Properties, 'lg');

    //         Properties = borrowing_needs_props.creditCardIconProps('lg');  
    //         callback.multiloop(client,creditCardIcon, Properties, 'lg');

    //         Properties = borrowing_needs_props.personalLoanIconProps('lg');  
    //         callback.multiloop(client,personalLoanIcon, Properties, 'lg');

    //         Properties = borrowing_needs_props.blTextProps('lg');  
    //         callback.multiloop(client,blText, Properties, 'lg');

    //         Properties = borrowing_needs_props.blTextRTEProps('lg');  
    //         callback.multiloop(client,blTextRTE, Properties, 'lg');

    //         Properties = borrowing_needs_props.blTextRTEtextProps('lg');  
    //         callback.multiloop(client,blTextRTEtext, Properties, 'lg');

    //         Properties = borrowing_needs_props.benefitsListsProps('lg');  
    //         callback.multiloop(client,benefitsLists, Properties, 'lg');

    //         }
    //     });
    //     }      
    // },
    //           /****** Back to top functionality *******/
    // "5. Check for back to top functionality ": function(client) {
    //     overdraftWrap = pageObj.elements.overdraftWrap.selector,
    //     backToTopBtnActive = pageObj.elements.backToTopBtnActive.selector
    //     backToTopBtn = pageObj.elements.backToTopBtn.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //         //click on select input
    //         client.click(".js-cta-back-to-top a");
    //         client.pause(1000);
    //         client.waitForElementVisible(overdraftWrap, 1000);
    //         client.pause(1000);

                 
    //     client.elements('css selector',backToTopBtnActive,results=>{
    //         if(results.value.length>0) { 
    //         callback.scrollToElement(client,backToTopBtnActive); 
    //         //tool help text properties
    //         Properties = borrowing_needs_props.backToTopBtnActiveProps('lg');  
    //         callback.multiloop(client,backToTopBtnActive, Properties, 'lg');
    //         }
    //     });
    

    //     }
    // },
    /******Check for Buying Home Overlay  *******/
    // "6. Check for buying home and Debt Consolidation overlay functionality and properties ": function(client) {
    //     slidingContainer = pageObj.elements.slidingContainer.selector
    //     iconSection = pageObj.elements.iconSection.selector
    //     widgetContainer = pageObj.elements.widgetContainer.selector
    //     widgetContainerImg = pageObj.elements.widgetContainerImg.selector
    //     iconDesc = pageObj.elements.iconDesc.selector
    //     iconDescSection = pageObj.elements.iconDescSection.selector
    //     iconDescSectionHeading = pageObj.elements.iconDescSectionHeading.selector
    //     descText = pageObj.elements.descText.selector
    //     homePanelRules = pageObj.elements.homePanelRules.selector
    //     chatCta = pageObj.elements.chatCta.selector
    //     slidingContinueCta = pageObj.elements.slidingContinueCta.selector
    //     slidingBackLink = pageObj.elements.slidingBackLink.selector,
    //     buyingHomeBack = pageObj.elements.buyingHomeBack.selector,
    //     debtConsolidationBack = pageObj.elements.debtConsolidationBack.selector


    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //         //click on Buying a home link
    //         client.waitForElementVisible("#BH img", 1000);
    //         client.click("#BH img");
    //         client.pause(2000);
            

    //         client.source(() => {
    //             console.log("Buying a home overlay");
    //         client.expect.element(".buying-home-panel").to.have.css('display').which.equals('block');
    //         });

    //         client.elements('css selector',slidingContainer,results=>{
    //             if(results.value.length>0) { 
    
    //             Properties = borrowing_needs_props.slidingContainerProps('lg');  
    //             callback.multiloop(client,slidingContainer, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.iconSectionProps('lg');  
    //             callback.multiloop(client,iconSection, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.widgetContainerProps('lg');  
    //             callback.multiloop(client,widgetContainer, Properties, 'lg');

    //             Properties = borrowing_needs_props.widgetContainerImgProps('lg');  
    //             callback.multiloop(client,widgetContainerImg, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.iconDescProps('lg');  
    //             callback.multiloop(client,iconDesc, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.iconDescSectionProps('lg');  
    //             callback.multiloop(client,iconDescSection, Properties, 'lg');

    //             Properties = borrowing_needs_props.iconDescSectionHeadingProps('lg');  
    //             callback.multiloop(client,iconDescSectionHeading, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.descTextProps('lg');  
    //             callback.multiloop(client,descText, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.homePanelRulesProps('lg');  
    //             callback.multiloop(client,homePanelRules, Properties, 'lg');
    
                  
    //             Properties = borrowing_needs_props.slidingContinueCtaProps('lg');  
    //             callback.multiloop(client,slidingContinueCta, Properties, 'lg');
    
    //             Properties = borrowing_needs_props.slidingBackLinkProps('lg');  
    //             callback.multiloop(client,slidingBackLink, Properties, 'lg');

    //         //back link in buying home overlay
    //             client.click(buyingHomeBack);
    //             client.pause(1000);
    //             client.expect.element(".buying-home-panel").to.have.css('right').which.equals('-976px');

    //         //click on debt consolidation link
    //         client.click("#DC img");
    //         client.pause(2000);
            

    //         client.source(() => {
    //             console.log("Debt consolidation overlay");
    //         client.expect.element(".debt-panel").to.have.css('display').which.equals('block');
    //         });
    //         client.pause(1000);
    //         client.elements('css selector',slidingContainer,results=>{
    //             if(results.value.length>0) { 

    //         Properties = borrowing_needs_props.chatCtaProps('lg');  
    //         callback.multiloop(client,chatCta, Properties, 'lg');

    //             }
    //         });

    //         //back link in debt consolidation overlay
    //         client.click(debtConsolidationBack);
    //         client.pause(1000);
    //          client.expect.element(".debt-panel").to.have.css('right').which.equals('-976px');

    //             }
    //         });

    //     }
    // },

     /********Click on one of the borrowing need reason-- Start of Page 2 **********/
     "7. Check for click functionality on landing page ": function(client) {
        borrowOptionsTool = pageObj.elements.borrowOptionsTool.selector
        widgetImageBox = pageObj.elements.widgetImageBox.selector
        callback.scrollToElement(client,widgetImageBox); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //click on select input
            client.click("#MP");
            client.pause(5000);
            

            client.source(() => {
                console.log("--Goes to page 2--");
            client.waitForElementVisible(borrowOptionsTool, 1000);
             
        });

        }
    },
    // "8. Check for tool help text properties": function(client) {
    //     toolHelpText = pageObj.elements.toolHelpText.selector,
    //     resultContainer = pageObj.elements.resultContainer.selector,
    //     resultHeader = pageObj.elements.resultHeader.selector,
    //     btnTypeIcon = pageObj.elements.btnTypeIcon.selector,
    //     btnTypeIconImg = pageObj.elements.btnTypeIconImg.selector,
    //     resultTitle = pageObj.elements.resultTitle.selector,
    //     resultGreyComp = pageObj.elements.resultGreyComp.selector,
    //     resultGreyCompRteP = pageObj.elements.resultGreyCompRteP.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',toolHelpText,results=>{
    //         if(results.value.length>0) { 
    //         //tool help text properties
    //         Properties = borrowing_needs_props.toolHelpTextProps('lg');  
    //         callback.multiloop(client,toolHelpText, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultContainerProps('lg');  
    //         callback.multiloop(client,resultContainer, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultHeaderProps('lg');  
    //         callback.multiloop(client,resultHeader, Properties, 'lg');

    //         Properties = borrowing_needs_props.btnTypeIconProps('lg');  
    //         callback.multiloop(client,btnTypeIcon, Properties, 'lg');

    //         Properties = borrowing_needs_props.btnTypeIconImgProps('lg');  
    //         callback.multiloop(client,btnTypeIconImg, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultTitleProps('lg');  
    //         callback.multiloop(client,resultTitle, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultGreyCompProps('lg');  
    //         callback.multiloop(client,resultGreyComp, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultGreyCompRtePProps('lg');  
    //         callback.multiloop(client,resultGreyCompRteP, Properties, 'lg');

    //         Properties = borrowing_needs_props.resultGreyCompRteProps('lg');  
    //         rteCallback.rteElem(client, resultGreyComp, Properties,'li .fs-14', 'lg');

    //         }
    //     });
    //     }      
    // },
               /*********Checkboxes functionality********/
    "9. Check for checkboxes functionality": function(client) {
        repayText = pageObj.elements.repayText.selector,
        amountRePay = pageObj.elements.amountRePay.selector,
        timeRePay= pageObj.elements.timeRePay.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            /** check for show options disable functionality **/
            client.expect.element('.js-cta-button').to.have.attribute('class').which.contains('cta-button-disabled');
            // client.moveToElement(".radio-check .radio input[value='1']", 5, 5);
            client.waitForElementVisible(".repayment-options .radio", 1000)
            client.click(".repayment-options .radio")
            client.pause(3000);
            client.expect.element('.js-cta-button').to.have.attribute('class').which.not.contains('cta-button-disabled');
            
            /**check for repay checkboxes click functionality**/

             //amount repay//
            client.moveToElement(".radio input[value='1']", 1, 1);
            client.click(".radio input[value='1']")
            client.pause(3000);
            client.expect.element(amountRePay).to.have.css('display').which.not.equals('inline');

             //time repay//
             client.moveToElement(".radio input[value='2']", 1, 1);
             client.click(".radio input[value='2']")
             client.pause(3000);
             client.expect.element(timeRePay).to.have.css('display').which.not.equals('inline');

        }      
    }, 

    // "10. Check for borrowing options properties": function(client) {
    //     toolInputComp = pageObj.elements.toolInputComp.selector,
    //     borrowType = pageObj.elements.borrowType.selector,
    //     borrowTypeInputRow = pageObj.elements.borrowTypeInputRow.selector
    //     borrowTypeInputRowLabel = pageObj.elements.borrowTypeInputRowLabel.selector,
    //     selectBox=pageObj.elements.selectBox.selector,
    //     borrowingSelector = pageObj.elements.borrowingSelector.selector,
    //     selectorSpan= pageObj.elements.selectorSpan.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',toolInputComp,results=>{
    //         if(results.value.length>0) { 
    //         //tool input comp properties
    //         Properties = borrowing_needs_props.toolInputCompProps('lg');  
    //         callback.multiloop(client,toolInputComp, Properties, 'lg');

    //         //landing page product container props
    //         Properties = borrowing_needs_props.borrowTypeProps('lg');  
    //         callback.multiloop(client,borrowType, Properties, 'lg');
 
    //         Properties = borrowing_needs_props.borrowTypeInputRowProps('lg');  
    //         callback.multiloop(client,borrowTypeInputRow, Properties, 'lg');

    //         Properties = borrowing_needs_props.borrowTypeInputRowLabelProps('lg');  
    //         callback.multiloop(client,borrowTypeInputRowLabel, Properties, 'lg');

    //         Properties = borrowing_needs_props.selectBoxProps('lg');  
    //         callback.multiloop(client,selectBox, Properties, 'lg');

    //         Properties = borrowing_needs_props.borrowingSelectorProps('lg');  
    //         callback.multiloop(client,borrowingSelector, Properties, 'lg');

    //         Properties = borrowing_needs_props.selectorSpanProps('lg');  
    //         callback.multiloop(client,selectorSpan, Properties, 'lg');

    //         }
    //     });
    //     }      
    // },
    //  "11. Check for borrowing slider properties": function(client) {
    //     amountSlider = pageObj.elements.amountSlider.selector,
    //     amountSliderInputLabel = pageObj.elements.amountSliderInputLabel.selector,
    //     slider = pageObj.elements.slider.selector
    //     sliderController = pageObj.elements.sliderController.selector,
    //     sliderMarker=pageObj.elements.sliderMarker.selector,
    //     sliderHandlerBtn = pageObj.elements.sliderHandlerBtn.selector,
    //     sliderMax= pageObj.elements.sliderMax.selector,
    //     sliderInput = pageObj.elements.sliderInput.selector,
    //     sliderInputField = pageObj.elements.sliderInputField.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',amountSlider,results=>{
    //         if(results.value.length>0) { 
    //         //tool input comp properties
    //         Properties = borrowing_needs_props.amountSliderProps('lg');  
    //         callback.multiloop(client,amountSlider, Properties, 'lg');

    //         //landing page product container props
    //         Properties = borrowing_needs_props.amountSliderInputLabelProps('lg');  
    //         callback.multiloop(client,amountSliderInputLabel, Properties, 'lg');
 
    //         Properties = borrowing_needs_props.sliderProps('lg');  
    //         callback.multiloop(client,slider, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderControllerProps('lg');  
    //         callback.multiloop(client,sliderController, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderMarkerProps('lg');  
    //         callback.multiloop(client,sliderMarker, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderHandlerBtnProps('lg');  
    //         callback.multiloop(client,sliderHandlerBtn, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderMaxProps('lg');  
    //         callback.multiloop(client,sliderMax, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderInputProps('lg');  
    //         callback.multiloop(client,sliderInput, Properties, 'lg');

    //         Properties = borrowing_needs_props.sliderInputFieldProps('lg');  
    //         callback.multiloop(client,sliderInputField, Properties, 'lg');

    //         }
    //     });
    //     }      
    // },

    // "12. Check for tool tip icon properties": function(client) {
    //     iconInfo = pageObj.elements.iconInfo.selector,
    //     iconInfoToopTip = pageObj.elements.iconInfoToopTip.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',iconInfo,results=>{
    //         if(results.value.length>0) { 
    //         //tool input comp properties
    //         Properties = borrowing_needs_props.iconInfoProps('lg');  
    //         callback.multiloop(client,iconInfo, Properties, 'lg');

    //         client.waitForElementVisible(iconInfo, 1000);
    //         client.moveToElement(iconInfo,  4,  3);
    //         client.pause(3000);
    //         client.expect.element(".toop-tip").to.have.css('display').which.equals('inline');
            
    //         Properties = borrowing_needs_props.iconInfoToopTipProps('lg');  
    //         callback.multiloop(client,iconInfoToopTip, Properties, 'lg');
    //     }
    //     });
    //     }      
    // },
    // "13. Check for repayment options properties": function(client) {
    //     repaymentOptions = pageObj.elements.repaymentOptions.selector,
    //     repaymentDisplayInline = pageObj.elements.repaymentDisplayInline.selector
    //     formInputCheckbox = pageObj.elements.formInputCheckbox.selector,
    //     formInputRadio = pageObj.elements.formInputRadio.selector,
    //     formInputRadioLabel= pageObj.elements.formInputRadioLabel.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',repaymentOptions,results=>{
    //         if(results.value.length>0) { 
    //         //repayment options properties
    //         Properties = borrowing_needs_props.repaymentOptionsProps('lg');  
    //         callback.multiloop(client,repaymentOptions, Properties, 'lg');

    //         Properties = borrowing_needs_props.repaymentDisplayInlineProps('lg');  
    //         callback.multiloop(client,repaymentDisplayInline, Properties, 'lg');

    //         Properties = borrowing_needs_props.formInputCheckboxProps('lg');  
    //         callback.multiloop(client,formInputCheckbox, Properties, 'lg');

    //         Properties = borrowing_needs_props.formInputRadioProps('lg');  
    //         callback.multiloop(client,formInputRadio, Properties, 'lg');

    //         Properties = borrowing_needs_props.formInputRadioLabelProps('lg');  
    //         callback.multiloop(client,formInputRadioLabel, Properties, 'lg');

    //         }
    //     });
    //     }      
    // },


    // "14. Check for amount/time repay text properties": function(client) {
    //     repayText = pageObj.elements.repayText.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',repayText,results=>{
    //         if(results.value.length>0) { 
    //         //repay text properties
    //         Properties = borrowing_needs_props.repayTextProps('lg');  
    //         callback.multiloop(client,repayText, Properties, 'lg');

    //         }
    //     });
    //     }      
    // },

/******Check for Page 3 which appears when you don't give the input value to any of the fields and proceed */
    "15. Check for bn Tool results NO RESULTS properties": function(client) {
        showOptionsBtn = pageObj.elements.showOptionsBtn.selector,
        bnNoResult = pageObj.elements.bnNoResult.selector,
        themeDarkGrey = pageObj.elements.themeDarkGrey.selector,
        noResultGrid= pageObj.elements.noResultGrid.selector,
        noResultLeftUpperBlock = pageObj.elements.noResultLeftUpperBlock.selector,
        noResultDeskOneHalf = pageObj.elements.noResultDeskOneHalf.selector,
        noResultTitle = pageObj.elements.noResultTitle.selector,
        lightGreyContainer= pageObj.elements.lightGreyContainer.selector,
        rteTextLink = pageObj.elements.rteTextLink.selector,
        noResultCTA = pageObj.elements.noResultCTA.selector
        noResultCTALink = pageObj.elements.noResultCTALink.selector,
        topBlockgridItem = pageObj.elements.topBlockgridItem.selector
        showOptionsBtnActive = pageObj.elements.showOptionsBtnActive.selector,
        BackToPrvPageLink = pageObj.elements.BackToPrvPageLink.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.waitForElementVisible(showOptionsBtn, 6000);
            // client.moveToElement(showOptionsBtn, 6, 6);
            // client.mouseButtonDown(0);
            //  client.pause(30000);
            // client.elements('css selector',showOptionsBtn,results=>{
            //     if(results.value.length>0) { 
            //     //top block properties
            //     Properties = borrowing_needs_props.showOptionsBtnActiveProps('lg');  
            //     callback.multiloop(client,showOptionsBtnActive, Properties, 'lg');
            //     }
            // });
            client.click(showOptionsBtn);
            client.pause(1000);


            client.source(() => {
                console.log("--Goes to page 3(No Results)--");
            client.waitForElementVisible(bnNoResult, 1000);
            });

            client.elements('css selector',bnNoResult,results=>{
            if(results.value.length>0) { 
            //top block properties
            Properties = borrowing_needs_props.themeDarkGreyProps('lg');  
            callback.multiloop(client,themeDarkGrey, Properties, 'lg');

            Properties = borrowing_needs_props.noResultGridProps('lg');  
            callback.multiloop(client,noResultGrid, Properties, 'lg');

            Properties = borrowing_needs_props.noResultLeftUpperBlockProps('lg');  
            callback.multiloop(client,noResultLeftUpperBlock, Properties, 'lg');

            Properties = borrowing_needs_props.noResultDeskOneHalfProps('lg');  
            callback.multiloop(client,noResultDeskOneHalf, Properties, 'lg');

            Properties = borrowing_needs_props.noResultTitleProps('lg');  
            callback.multiloop(client,noResultTitle, Properties, 'lg');

            Properties = borrowing_needs_props.lightGreyContainerProps('lg');  
            callback.multiloop(client,lightGreyContainer, Properties, 'lg');

            Properties = borrowing_needs_props.rteTextLinkProps('lg');  
            callback.multiloop(client,rteTextLink, Properties, 'lg');

            Properties = borrowing_needs_props.noResultTopRteTextProps('lg');  
            rteCallback.rteElem(client, topBlockgridItem, Properties,'p', 'lg');

            Properties = borrowing_needs_props.noResultCTAProps('lg');  
            callback.multiloop(client,noResultCTA, Properties, 'lg');

            Properties = borrowing_needs_props.noResultCTALinkProps('lg');  
            callback.multiloop(client,noResultCTALink, Properties, 'lg');

            //hover on the buttons
            client.waitForElementVisible(BackToPrvPageLink, 1000);
            client.moveToElement(BackToPrvPageLink,  3,  3);
            client.pause(5000);
             
            Properties = borrowing_needs_props.BackToPrvPageLinkHoverProps('lg');  
            callback.pseudoSingleElem(client, BackToPrvPageLink,':before',Properties);

            
            }
        });
        }     
    },
    // "16. Check for bottom block properties for no results page": function(client) {
    //     bnResultContainer = pageObj.elements.bnResultContainer.selector,
    //     noResultHeader = pageObj.elements.noResultHeader.selector
    //     noResultHeaderRTE = pageObj.elements.noResultHeaderRTE.selector,
    //     noResultCTAlink = pageObj.elements.noResultCTAlink.selector
    //     bottomBlockgridItem = pageObj.elements.bottomBlockgridItem.selector

    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
    //     client.elements('css selector',bnResultContainer,results=>{
    //         if(results.value.length>0) { 
    //         //repayment options properties
    //         Properties = borrowing_needs_props.bnResultContainerProps('lg');  
    //         callback.multiloop(client,bnResultContainer, Properties, 'lg');

    //         Properties = borrowing_needs_props.noResultHeaderProps('lg');  
    //         callback.multiloop(client,noResultHeader, Properties, 'lg');

    //         Properties = borrowing_needs_props.noResultHeaderRTEProps('lg');  
    //         callback.multiloop(client,noResultHeaderRTE, Properties, 'lg');

    //         Properties = borrowing_needs_props.noResultCTAlinkProps('lg');  
    //         callback.multiloop(client,noResultCTAlink, Properties, 'lg');

    //         Properties = borrowing_needs_props.noResultBottomRteTextProps('lg');  
    //         rteCallback.rteElem(client, bottomBlockgridItem, Properties,'p', 'lg');

    //         }
    //     });
    //     }      
    // },
   /*******Going back to the Page 2 for making other changes *******/
    "17. Check for the functionality of 'Would you like to make any changes' link": function(client) {
        changesButton = pageObj.elements.changesButton.selector,
        borrowOptionsTool = pageObj.elements.borrowOptionsTool.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            
            client.click(changesButton);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 2--");
                client.waitForElementVisible(borrowOptionsTool, 1000)
            });


        }      
    },

            /******** Functionality for different dropdown options ******/
    "18. Check for different dropdown option values": function(client) {
        borrowSelectDropDwn = pageObj.elements.borrowSelectDropDwn.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //for MP(Making purchases)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='MP']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-mp-borrow-amount');
            client.pause(1000); 

            //for EE(cost of living)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='EE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-ee-borrow-amount');
            client.pause(1000); 

            //for AE(An emergency)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='AE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-ae-borrow-amount');
            client.pause(1000);

            //for HI(Home Improvement)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='HI']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-hi-borrow-amount');
            client.pause(1000);

            //for MR(More than a reason)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='MR']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-mr-borrow-amount');
            client.pause(1000);

            //for SE(Something else)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='SE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-se-borrow-amount');
            client.pause(1000);

            //for DC(Debt consolidation)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click(".select-box-width-large .selector option[value='DC']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-add-borrowing');
            client.pause(1000);
            client.waitForElementVisible(".debt-title", 1000);
            client.waitForElementVisible(".debt--desc", 1000);
            client.waitForElementVisible(".debt-comp", 1000);


                
        }   

    },
    "19. Adding more debt options and checking for the functionality": function(client) {
        addDebtLink = pageObj.elements.addDebtLink.selector,
        bnDebtDropDown = pageObj.elements.bnDebtDropDown.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            
          
            client.click(bnDebtDropDown)
            client.pause(1000);
            client.click("#bnDebtForm_debtType_0 option[value='CC']")
            client.pause(1000);
            client.setValue('#bnDebtForm_outstaBal_0', '5000');

            //selecting another drop down option  and giving the values
            client.click("#bnDebtForm_debtType_1")
            client.pause(1000);
            client.click("#bnDebtForm_debtType_1 option[value='SC']")
            client.setValue('#bnDebtForm_outstaBal_1', '7000');
            client.pause(1000);
            

            client.click("#bnDebtForm_debtType_2")
            client.pause(1000);
            client.click("#bnDebtForm_debtType_2 option[value='PL']")
            client.setValue('#bnDebtForm_outstaBal_2', '300');

            client.click(addDebtLink);
            client.pause(3000);

            client.click("#bnDebtForm_debtType_3")
            client.pause(1000);
            client.click("#bnDebtForm_debtType_3 option[value='OD']")
            client.setValue('#bnDebtForm_outstaBal_3', '100');

            client.click(addDebtLink);
            client.pause(3000);

            client.click("#bnDebtForm_debtType_4")
            client.pause(1000);
            client.click("#bnDebtForm_debtType_4 option[value='OT']")
            client.setValue('#bnDebtForm_outstaBal_4', '1000');

            client.click(".tool--input-comp"); //click anywhere out of the input field

            client.expect.element('.js-total-amount').text.to.equal('£13,400');    
            client.pause(1000);
            client.refresh();


        }      
    },
    "20. Check for UI for debt consolidation option ": function(client) {
        debtTitle = pageObj.elements.debtTitle.selector,
        debtDesc = pageObj.elements.debtDesc.selector,
        debtCompRow = pageObj.elements.debtCompRow.selector,
        debtCompColTwo = pageObj.elements.debtCompColTwo.selector,
        debtCompColThree = pageObj.elements.debtCompColThree.selector
        selectBoxWidthMedium = pageObj.elements.selectBoxWidthMedium.selector,
        debtFormInputRow = pageObj.elements.debtFormInputRow.selector,
        addDebtLink = pageObj.elements.addDebtLink.selector,
        addDebtLinkHover = pageObj.elements.addDebtLinkHover.selector,
        bnTotal = pageObj.elements.bnTotal.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',debtTitle,results=>{
            if(results.value.length>0) { 
            // UI properties for Debt consolidation
            Properties = borrowing_needs_props.debtTitleProps('lg');  
            callback.multiloop(client,debtTitle, Properties, 'lg');

            Properties = borrowing_needs_props.debtDescProps('lg');  
            callback.multiloop(client,debtDesc, Properties, 'lg');

            Properties = borrowing_needs_props.debtCompRowProps('lg');  
            callback.multiloop(client,debtCompRow, Properties, 'lg');

            Properties = borrowing_needs_props.debtCompColTwoProps('lg');  
            callback.multiloop(client,debtCompColTwo, Properties, 'lg');

            Properties = borrowing_needs_props.debtCompColThreeProps('lg');  
            callback.multiloop(client,debtCompColThree, Properties, 'lg');

            Properties = borrowing_needs_props.selectBoxWidthMediumProps('lg');  
            callback.multiloop(client,selectBoxWidthMedium, Properties, 'lg');

            Properties = borrowing_needs_props.debtFormInputRowProps('lg');  
            callback.multiloop(client,debtFormInputRow, Properties, 'lg');

            Properties = borrowing_needs_props.addDebtLinkProps('lg');  
            callback.multiloop(client,addDebtLink, Properties, 'lg');
 
            //add debt hover property
            client.waitForElementVisible(addDebtLinkHover, 1000);
            client.moveToElement(addDebtLinkHover,  10,  10);
            client.pause(5000);
             
            Properties = borrowing_needs_props.addDebtLinkHoverProps('lg');  
            callback.multiloop(client,addDebtLinkHover, Properties, 'lg');

            Properties = borrowing_needs_props.bnTotalProps('lg');  
            callback.multiloop(client,bnTotal, Properties, 'lg');
                
            }
             
        });

        }
    },
       /********* Functionality for Debt consolidation option *********/
    "21. Check for functionality for debt consolidation": function(client) {
        bnDebtDropDown = pageObj.elements.bnDebtDropDown.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        //negative scenerio for error message if the input is given without selecting the dropdown value
            client.moveToElement("#bnDebtForm_outstaBal_0", 1, 1);
            client.click("#bnDebtForm_outstaBal_0");
            client.pause(2000);
            client.click(".tool--input-comp"); //click anywhere out of the input field
            client.pause(1000);
            client.waitForElementVisible("#exposeMask", 1000);
            client.expect.element("#exposeMask").to.have.css('display').which.equal('block');
            client.click(".close");
            client.pause(1000);
    

         //select form the dropdown
            client.click(bnDebtDropDown)
            client.pause(1000);
            client.click("#bnDebtForm_debtType_0 option[value='CC']")
            client.pause(1000);

        //setting incorrect input value to check the error message
            client.setValue('#bnDebtForm_monthlyRepayment_0', 'nightwatch');
            client.click(".tool--input-comp"); //click anywhere out of the input field
            client.expect.element("#bnDebtForm_monthlyRepayment_0").to.have.attribute('class').which.contains('error_text');

            client.setValue('#bnDebtForm_outstaBal_0', 'nightwatch');
            client.click(".tool--input-comp"); //click anywhere out of the input field
            client.expect.element("#bnDebtForm_outstaBal_0").to.have.attribute('class').which.contains('error_text');
            

        //giving the input values to the fields to check the total amount//
                client.clearValue('#bnDebtForm_monthlyRepayment_0');
                client.clearValue('#bnDebtForm_outstaBal_0');
                client.setValue('#bnDebtForm_monthlyRepayment_0', '100');
                client.setValue('#bnDebtForm_outstaBal_0', '5000');

                //selecting another drop down option  and giving the values
                client.click("#bnDebtForm_debtType_1")
                client.pause(1000);
                client.click("#bnDebtForm_debtType_1 option[value='SC']")
                client.pause(1000);
                client.setValue('#bnDebtForm_outstaBal_1', '7000');
                client.pause(1000);
                client.setValue('#bnDebtForm_addBorrowing', '500');

                client.click("#repaymentBasis-bnDebtForm_repaymentBasis-0");
                client.pause(1000)

                client.setValue("#bnDebtForm_monthlyrepaymentDebtDC", "500");
                client.pause(1000);

                
        
        }
    },
/******* Check for Page 4 when appropriate data is given with debt consolidation *******/
    "22. Check for results page when appropriate data is given under debt consolidation": function(client) {
        showOptionsBtn = pageObj.elements.showOptionsBtn.selector
        debtResultHeader = pageObj.elements.debtResultHeader.selector
        debtResultGreyComp = pageObj.elements.debtResultGreyComp.selector
        resultContainerRightItem = pageObj.elements.resultContainerRightItem.selector
        changesButton= pageObj.elements.changesButton.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(showOptionsBtn);
            client.pause(3000),

            client.source(() => {
                console.log("--Goes to page 4(With Results for Debt consolidation)--");
            client.waitForElementVisible(".debt", 1000);
            });
            //debt consolidation result page properties
            client.elements('css selector',debtResultHeader,results=>{
                if(results.value.length>0) { 
                //repayment options properties
                Properties = borrowing_needs_props.debtResultHeaderProps('lg');  
                callback.multiloop(client,debtResultHeader, Properties, 'lg');
    
                Properties = borrowing_needs_props.debtResultGreyCompProps('lg');  
                callback.multiloop(client,debtResultGreyComp, Properties, 'lg');
    
                Properties = borrowing_needs_props.resultContainerRightItemProps('lg');  
                callback.multiloop(client,resultContainerRightItem, Properties, 'lg');
            
            //back to changes page
                client.click(changesButton);
                client.pause(5000);
                client.source(() => {
                    console.log("--Goes back to page 2--");
                });
                }
            });
        }
    },



/******Check for Page 4 which appears when you give appropriate input value to any of the fields and proceed */
    "23. Check for functionality to obtain results page when appropriate data is given": function(client) {
        bnResult = pageObj.elements.bnResult.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //selecting the required option from the dropdown
            client.click("#bnDebtForm_borrowingtype")
            client.pause(1000);
            client.click("#bnDebtForm_borrowingtype option[value='EE']")
            client.pause(5000);

            //giving appropriate data to the input fields
            client.clearValue('#bnCoreForm_borrowingAmountEE');
            client.setValue('#bnCoreForm_borrowingAmountEE', '3000');
            

            //click the required checkbox
            client.moveToElement(".radio input[value='1']", 1, 1);
            client.click(".radio input[value='1']")
            client.pause(3000);

            //give the value to the checkboxes input fields
            client.setValue('#bnCoreForm_monthlyrepaymentCoreEE', '100');
            
            //click show options
            client.click(showOptionsBtn);
            client.pause(3000),

            client.source(() => {
                console.log("--Goes to page 4(With Results)--");
            client.waitForElementVisible(bnResult, 1000);
            });


        }
    },
    "24. Check for properties for results page": function(client) {
        resultHeader = pageObj.elements.resultHeader.selector,
        contentBlock = pageObj.elements.contentBlock.selector
        resultPageresultTitle = pageObj.elements.resultPageresultTitle.selector,
        resultContainerLeftItem = pageObj.elements.resultContainerLeftItem.selector
        titlePros = pageObj.elements.titlePros.selector,
        titleCons = pageObj.elements.titleCons.selector,
        resultGreyComp = pageObj.elements.resultGreyComp.selector,
        nSuitable = pageObj.elements.nSuitable.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',resultHeader,results=>{
            if(results.value.length>0) { 
            //repayment options properties
            Properties = borrowing_needs_props.resultGreyCompPage3Props('lg');  
            callback.multiloop(client,resultGreyComp, Properties, 'lg');

            Properties = borrowing_needs_props.resultpageresultHeaderProps('lg');  
            callback.multiloop(client,resultHeader, Properties, 'lg');

            Properties = borrowing_needs_props.contentBlockProps('lg');  
            callback.multiloop(client,contentBlock, Properties, 'lg');

            Properties = borrowing_needs_props.resultPageresultTitleProps('lg');  
            callback.multiloop(client,resultPageresultTitle, Properties, 'lg');

            Properties = borrowing_needs_props.resultContainerLeftItemProps('lg');  
            callback.multiloop(client,resultContainerLeftItem, Properties, 'lg');

            Properties = borrowing_needs_props.titleProsProps('lg');  
            callback.multiloop(client,titlePros , Properties, 'lg');

            Properties = borrowing_needs_props.resultGreyCompRteTextProps('lg');  
            rteCallback.rteElem(client, resultGreyComp, Properties,'ul li', 'lg');

            Properties = borrowing_needs_props.titleConsProps('lg');  
            callback.multiloop(client,titleCons , Properties, 'lg');

            Properties = borrowing_needs_props.nSuitableProps('lg');  
            callback.multiloop(client,nSuitable , Properties, 'lg');


            }
        });
        }      
    },

/********Going back to first page:'Check for the click action of start again button'********/
    "25. Check for the functionality of 'Start Again' link": function(client) {
        startAgainButton = pageObj.elements.startAgainButton.selector,
        landingPageHeading = pageObj.elements.landingPageHeading.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.click(startAgainButton);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 1--");
                client.waitForElementVisible(landingPageHeading, 1000)
            });


        }      
    },

      //Closing the browser
      'Closing Browser': function(client){
        client.pause(1000);
        client.end();
      }
    }
  