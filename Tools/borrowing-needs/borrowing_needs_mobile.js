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
    '@tags': ['mobile', 'borrowing-needs', 'borrowing_needs_mobile'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_BORROWING_NEEDS_MOB);
            console.log("--Mobile--"+pageurl.NW_PER_BORROWING_NEEDS_MOB); 
    },
    "Resize The Window":function(client){
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000) ;
        }, 
                  /*********STEP 1 First-Page Properties**********/
 "1. Check for overdraft shelf properties": function (client) {
         overdraftWrap = pageObj.elements.overdraftWrap.selector

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //overdraft shelf wrapper properties
            client.elements('css selector', overdraftWrap, results => {
                if (results.value.length > 0) {
                    properties = borrowing_needs_props.overdraftWrapProps('xs');
                    callback.multiloop(client, overdraftWrap, properties, 'xs');
                }
            });
        }
    },
    "2. Check for Landing page properties": function(client) {
        landingPageHeading = pageObj.elements.landingPageHeading.selector
        borrowTypeDrpDown = pageObj.elements.borrowTypeDrpDown.selector
        ruleSection = pageObj.elements.ruleSection.selector,
        borrowSelectionCta = pageObj.elements.borrowSelectionCta.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',landingPageHeading,results=>{
            if(results.value.length>0) { 
            //landing page heading properties
            Properties = borrowing_needs_props.landingPageHeadingProps('xs');  
            callback.multiloop(client,landingPageHeading, Properties, 'xs');

            Properties = borrowing_needs_props.borrowTypeDrpDownProps('xs');  
            callback.multiloop(client,borrowTypeDrpDown, Properties, 'xs');

            Properties = borrowing_needs_props.ruleSectionProps('xs');  
            callback.multiloop(client,ruleSection, Properties, 'xs');

            Properties = borrowing_needs_props.borrowSelectionCtaProps('xs');  
            callback.multiloop(client, borrowSelectionCta, Properties, 'xs');

            }
        });
        }      
    },
    "3. Check for shelf bl properties": function(client) {
        shelfBl = pageObj.elements.shelfBl.selector,
        benefitsListUtext = pageObj.elements.benefitsListUtext.selector,
        blText = pageObj.elements.blText.selector,
        blTextRTE= pageObj.elements.blTextRTE.selector,
        benefitsLists = pageObj.elements.benefitsLists.selector,
        blTextRTEtext = pageObj.elements.blTextRTEtext.selector,
        benefitsListUtextRte =  pageObj.elements.benefitsListUtextRte.selector

        callback.scrollToElement(client,shelfBl); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',shelfBl,results=>{
            if(results.value.length>0) { 
            //landing page bl shelf properties
            Properties = borrowing_needs_props.shelfBlProps('xs');  
            callback.multiloop(client,shelfBl, Properties, 'xs');

            Properties = borrowing_needs_props.benefitsListUtextProps('xs');  
            callback.multiloop(client,benefitsListUtext, Properties, 'xs');

            Properties = borrowing_needs_props.benefitsListUtextRTEProps('xs');  
            callback.multiloop(client,benefitsListUtextRte, Properties, 'xs');

            Properties = borrowing_needs_props.blTextProps('xs');  
            callback.multiloop(client,blText, Properties, 'xs');

            Properties = borrowing_needs_props.blTextRTEProps('xs');  
            callback.multiloop(client,blTextRTE, Properties, 'xs');

            Properties = borrowing_needs_props.blTextRTEtextProps('xs');  
            callback.multiloop(client,blTextRTEtext, Properties, 'xs');

            Properties = borrowing_needs_props.benefitsListsProps('xs');  
            callback.multiloop(client,benefitsLists, Properties, 'xs');

            }
        });
        }      
    },
    "4. Check for different dropdown option values in page 1 for checking rule section": function(client) {
        ruleSection = pageObj.elements.ruleSection.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //for MP(Making purchases)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='MP']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000); 

            //for EE(cost of living)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='EE']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000); 

            //for BH(Buying a house)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='BH']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('block');
            client.pause(1000); 

            //for AE(An emergency)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='AE']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000); 

            //for HI(Home improvements)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='HI']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000);

            //for MR(More than a reason)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='MR']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000);

            //for SE(Something else)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='SE']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('none');
            client.pause(1000);

            //for DC(Debt consolidation)
            client.click("#new_form_borrowingtype")
            client.pause(1000);
            client.click("#new_form_borrowingtype option[value='DC']")
            client.pause(1000);
            client.expect.element(ruleSection).to.have.css('display').which.equal('block');
            client.pause(1000); 


                
        }   

    },
     /********Click on one of the continue button for next page-- Start of Page 2 **********/
     "5. Check for click functionality on landing page ": function(client) {
        borrowSelectionCtaButton = pageObj.elements.borrowSelectionCtaButton.selector
        callback.scrollToElement(client,borrowSelectionCtaButton);
        borrowOptionsTool = pageObj.elements.borrowOptionsTool.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //click on select input
            client.click(borrowSelectionCtaButton);
            client.pause(5000);
            

            client.source(() => {
                console.log("--Goes to page 2--");
            client.waitForElementVisible(borrowOptionsTool, 1000);
            client.pause(2000);
            // client.url("https://personal.natwest.com/personal/borrowing-needs/borrowing-options.m.html?borrowingtype=MP")
            //  client.pause(5000)
        });

        }
    },
    "6. Check for tool help text properties": function(client) {
        toolHelpText = pageObj.elements.toolHelpText.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',toolHelpText,results=>{
            if(results.value.length>0) { 
            //tool help text properties
            Properties = borrowing_needs_props.toolHelpTextProps('xs');  
            callback.multiloop(client,toolHelpText, Properties, 'xs');
            }
        });
        }      
    },
    "7. Check for borrowing options properties": function(client) {
        toolInputComp = pageObj.elements.toolInputComp.selector,
        borrowType = pageObj.elements.borrowType.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',toolInputComp,results=>{
            if(results.value.length>0) { 
            //tool input comp properties
            Properties = borrowing_needs_props.toolInputCompProps('xs');  
            callback.multiloop(client,toolInputComp, Properties, 'xs');

            //landing page product container props
            Properties = borrowing_needs_props.borrowTypeProps('xs');  
            callback.multiloop(client,borrowType, Properties, 'xs');

            }
        });
        }      
    },
    "8. Check for borrowing slider properties": function(client) {
        amountSlider = pageObj.elements.amountSlider.selector,
        amountSliderInputLabel = pageObj.elements.amountSliderInputLabel.selector,
        sliderInput = pageObj.elements.sliderInput.selector,
        sliderInputField = pageObj.elements.sliderInputField.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',amountSlider,results=>{
            if(results.value.length>0) { 

            //landing page product container props
            Properties = borrowing_needs_props.amountSliderInputLabelProps('xs');  
            callback.multiloop(client,amountSliderInputLabel, Properties, 'xs');

            Properties = borrowing_needs_props.sliderInputFieldProps('xs');  
            callback.multiloop(client,sliderInputField, Properties, 'xs');

            }
        });
        }      
    },
    "9. Check for repayment options properties": function(client) {
        repaymentOptions = pageObj.elements.repaymentOptions.selector,
        formInputRadio = pageObj.elements.formInputRadio.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',repaymentOptions,results=>{
            if(results.value.length>0) { 

            Properties = borrowing_needs_props.formInputRadioProps('xs');  
            callback.multiloop(client,formInputRadio, Properties, 'xs');

            }
        });
        }      
    },
    /******Check for Page 3 which appears when you don't give the input value to any of the fields and proceed */
    "10. Check for bn Tool results NO RESULTS properties": function(client) {
        showOptionsBtn = pageObj.elements.showOptionsBtn.selector,
        bnNoResult = pageObj.elements.bnNoResult.selector,
        noResulttopBlock= pageObj.elements.noResulttopBlock.selector,
        noResultTitle = pageObj.elements.noResultTitle.selector,
        topBlockgridItem = pageObj.elements.topBlockgridItem.selector
        

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.click("#repaymentBasis-bnCoreForm_repaymentBasis-0")
            client.click(showOptionsBtn);
            client.pause(2000);
            // client.url("https://personal.natwest.com/personal/borrowing-needs/we-still-can-help-you.m.html#borrowing-type")
            // client.pause(3000)

            client.source(() => {
                console.log("--Goes to page 3(No Results)--");
            client.waitForElementVisible(bnNoResult, 1000);
            });

            client.elements('css selector',bnNoResult,results=>{
            if(results.value.length>0) { 
            //top block properties

            Properties = borrowing_needs_props.noResulttopBlockProps('xs');  
            callback.multiloop(client,noResulttopBlock, Properties, 'xs');

            Properties = borrowing_needs_props.noResultTopRteTextProps('xs');  
            rteCallback.rteElem(client, topBlockgridItem, Properties,'p', 'xs');
            
            }
        });
        }      
    },
    "11. Check for bottom block properties for no results page": function(client) {
        bnResultContainer = pageObj.elements.bnResultContainer.selector,
        noResultHeader = pageObj.elements.noResultHeader.selector
        noResultHeaderRTE = pageObj.elements.noResultHeaderRTE.selector,
        noResultCTAlink = pageObj.elements.noResultCTAlink.selector
        bottomBlockgridItem = pageObj.elements.bottomBlockgridItem.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',bnResultContainer,results=>{
            if(results.value.length>0) { 
            //repayment options properties
            Properties = borrowing_needs_props.bnResultContainerProps('xs');  
            callback.multiloop(client,bnResultContainer, Properties, 'xs');

            Properties = borrowing_needs_props.noResultHeaderProps('xs');  
            callback.multiloop(client,noResultHeader, Properties, 'xs');

            Properties = borrowing_needs_props.noResultBottomRteTextProps('xs');  
            rteCallback.rteElem(client, bottomBlockgridItem, Properties,'p', 'xs');

            }
        });
        }      
    },
       /*******Going back to the Page 2 for making other changes *******/
       "12. Check for the functionality of 'Edit' link": function(client) {
        mobilePrev = pageObj.elements.mobilePrev.selector
        borrowOptionsTool = pageObj.elements.borrowOptionsTool.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            
            client.click(mobilePrev);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 2--");
                client.waitForElementVisible(borrowOptionsTool, 1000)
            });


        }      
    },
      /******** Functionality for different dropdown options ******/
      "13. Check for different dropdown option values": function(client) {
        borrowSelectDropDwn = pageObj.elements.borrowSelectDropDwn.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //for MP(Making purchases)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='MP']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-mp-borrow-amount');
            client.pause(1000); 

            //for EE(cost of living)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='EE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-ee-borrow-amount');
            client.pause(1000); 

            //for AE(An emergency)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='AE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-ae-borrow-amount');
            client.pause(1000);

            //for HI(Home Improvement)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='HI']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-hi-borrow-amount');
            client.pause(1000);

            //for MR(More than a reason)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='MR']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-mr-borrow-amount');
            client.pause(1000);

            //for SE(Something else)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='SE']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-se-borrow-amount');
            client.pause(1000);

            //for DC(Debt consolidation)
            client.click(borrowSelectDropDwn)
            client.pause(1000);
            client.click("#bnCoreForm_borrowingtype option[value='DC']")
            client.pause(5000);
            client.waitForElementVisible(".js-arranged-amount", 1000);
            client.expect.element(".js-arranged-amount").to.have.attribute('class').which.contains('js-add-borrowing');
            client.pause(1000);
            client.waitForElementVisible(".debt-title", 1000);
            client.waitForElementVisible(".debt--desc", 1000);
            client.waitForElementVisible(".debt-comp", 1000);

            // client.url("https://personal.natwest.com/personal/borrowing-needs/debt-options.m.html?borrowingtype=DC#borrowing-type")
            // client.pause(3000);

                
        }   

    },
    "14. Check for UI for debt consolidation option ": function(client) {
        debtTitle = pageObj.elements.debtTitle.selector,
        debtDesc = pageObj.elements.debtDesc.selector,
        selectBoxWidthMedium = pageObj.elements.selectBoxWidthMedium.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',debtTitle,results=>{
            if(results.value.length>0) { 
            // UI properties for Debt consolidation

            Properties = borrowing_needs_props.debtDescProps('xs');  
            callback.multiloop(client,debtDesc, Properties, 'xs');

            Properties = borrowing_needs_props.selectBoxWidthMediumProps('xs');  
            callback.multiloop(client,selectBoxWidthMedium, Properties, 'xs');
                
            }
             
        });

        }
    },
    
       /********* Functionality for Debt consolidation option *********/
       "15. Check for functionality for debt consolidation": function(client) {
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
    "16. Check for results page when appropriate data is given under debt consolidation": function(client) {
        showOptionsBtn = pageObj.elements.showOptionsBtn.selector,
        prevEditMobile = pageObj.elements.prevEditMobile.selector,
        debtResultHeaderMob = pageObj.elements.debtResultHeaderMob.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(showOptionsBtn);
            client.pause(3000),

            client.source(() => {
                console.log("--Goes to page 4(With Results for Debt consolidation)--");
                // client.url("https://personal.natwest.com/personal/borrowing-needs/debt-results.m.html#borrowing-type")
                // client.pause(3000);
            client.waitForElementVisible(".debt", 1000);
            });
            client.elements('css selector',debtResultHeaderMob,results=>{
                if(results.value.length>0) { 
                //repayment options properties
                Properties = borrowing_needs_props.debtResultHeaderProps('xs');  
                callback.multiloop(client,debtResultHeaderMob, Properties, 'xs');
                }
            });
            client.click(prevEditMobile);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 2--");
                });
        }
    },
    /******Check for Page 4 which appears when you give appropriate input value to any of the fields and proceed */
    "17. Check for functionality to obtain results page when appropriate data is given": function(client) {
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
            client.clearValue('#bnCoreForm_monthlyrepaymentCoreEE');
            client.setValue('#bnCoreForm_monthlyrepaymentCoreEE', '100');
            
            //click show options
            client.click(showOptionsBtn);
            client.pause(3000),

            client.source(() => {
                console.log("--Goes to page 4(With Results)--");
                // client.url("https://personal.natwest.com/personal/borrowing-needs/options-available-for-you.m.html#borrowing-type")
                // client.pause(3000);
                client.waitForElementVisible(bnResult, 1000);
            

            });


        }
    },
    "18. Check for properties for results page for other options": function(client) {
        resultPageResultHeader = pageObj.elements.resultPageResultHeader.selector,
        contentBlockMob = pageObj.elements.contentBlockMob.selector
        resultPageResulTitleMob = pageObj.elements.resultPageResulTitleMob.selector,
        titlePros = pageObj.elements.titlePros.selector,
        titleCons = pageObj.elements.titleCons.selector,
        resultGreyComp = pageObj.elements.resultGreyComp.selector,
        gettingStarted= pageObj.elements.gettingStarted.selector,
        subDesc = pageObj.elements.subDesc.selector,
        subDescRteText = pageObj.elements.subDescRteText.selector,
        nSuitableMob = pageObj.elements.nSuitableMob.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',resultPageResultHeader,results=>{
            if(results.value.length>0) { 

            Properties = borrowing_needs_props.resultpageresultHeaderProps('xs');  
            callback.multiloop(client,resultPageResultHeader, Properties, 'xs');

            Properties = borrowing_needs_props.contentBlockProps('xs');  
            callback.multiloop(client,contentBlockMob, Properties, 'xs');

            Properties = borrowing_needs_props.resultPageresultTitleProps('xs');  
            callback.multiloop(client,resultPageResulTitleMob, Properties, 'xs');

            Properties = borrowing_needs_props.gettingStartedProps('xs');  
            callback.multiloop(client,gettingStarted, Properties, 'xs');

            Properties = borrowing_needs_props.subDescProps('xs');  
            callback.multiloop(client,subDesc, Properties, 'xs');

            Properties = borrowing_needs_props.subDescRteTextProps('xs');  
            callback.multiloop(client,subDescRteText, Properties, 'xs');

            Properties = borrowing_needs_props.nSuitableProps('xs');  
            callback.multiloop(client,nSuitableMob , Properties, 'xs');


            }
        });
        }      
    },
    "19. Check for overlay page when result header is clicked": function(client) {
        resultPageResultHeader = pageObj.elements.resultPageResultHeader.selector,
        productDetailResultHeader = pageObj.elements.productDetailResultHeader.selector,
        productDetail = pageObj.elements.productDetail.selector,
        productDetailResultContainer = pageObj.elements.productDetailResultContainer.selector,
        productDetailHeaderNav = pageObj.elements.productDetailHeaderNav.selector,
        productDetailFooterNav = pageObj.elements.productDetailFooterNav.selector,
        productDetailHeaderNavPrev = pageObj.elements.productDetailHeaderNavPrev.selector,
        productDetailFooterNavPrev = pageObj.elements.productDetailFooterNavPrev.selector,
        productDetailNavFooter = pageObj.elements.productDetailNavFooter.selector
        productDetailNoResultHeader = pageObj.elements.productDetailNoResultHeader.selector
        bnResultContainer1= pageObj.elements.bnResultContainer1.selector
        pDbnResultContainer1 = pageObj.elements.pDbnResultContainer1.selector
        pDbnResultContainer1Overview = pageObj.elements.pDbnResultContainer1Overview.selector
        pDbnResultContainer1Next = pageObj.elements.pDbnResultContainer1Next.selector
        pDbnResultContainer2 = pageObj.elements.pDbnResultContainer2.selector
        pDbnResultContainer2Overview = pageObj.elements.pDbnResultContainer2Overview.selector
        pDbnResultContainer2Previous = pageObj.elements.pDbnResultContainer2Previous.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(bnResultContainer1);
            client.pause(3000),

            client.source(() => {
                console.log("--Goes to overlay page 4(With Results)--");
             client.expect.element(productDetail).to.have.css('display').which.equal('block');
             client.expect.element(pDbnResultContainer1).to.have.css('display').which.equal('block');
            });
            client.elements('css selector',productDetail,results=>{
                if(results.value.length>0) { 
                //productDetail properties
                Properties = borrowing_needs_props.productDetailProps('xs');  
                callback.multiloop(client,productDetail, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailResultContainerProps('xs');  
                callback.multiloop(client,productDetailResultContainer, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailHeaderNavProps('xs');  
                callback.multiloop(client,productDetailHeaderNav, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailFooterNavProps('xs');  
                callback.multiloop(client,productDetailFooterNav, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailHeaderNavPrevProps('xs');  
                callback.multiloop(client,productDetailHeaderNavPrev, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailFooterNavPrevProps('xs');  
                callback.multiloop(client,productDetailFooterNavPrev, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailResultHeaderProps('xs');  
                callback.multiloop(client,productDetailResultHeader, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailNavFooterProps('xs');  
                callback.multiloop(client,productDetailNavFooter, Properties, 'xs');

                Properties = borrowing_needs_props.productDetailNoResultHeaderProps('xs');  
                callback.multiloop(client,productDetailNoResultHeader, Properties, 'xs');

                }
            });
            //functionality for next button for bnResultContainer 1
            client.click(pDbnResultContainer1Next);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes to page 4 overlay for bnResultContainer 2--");
                client.expect.element(pDbnResultContainer2).to.have.css('display').which.equal('block');
                });
            
            //functionality for previous button for bnResultContainer 2
            client.click(pDbnResultContainer2Previous);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 4 overlay for bnResultContainer 1--");
                client.expect.element(pDbnResultContainer1).to.have.css('display').which.equal('block');
                });
            //functionality for overview button for bnResultContainer 1
            client.click(pDbnResultContainer1Overview);
            client.pause(3000);
            client.source(() => {
                console.log("--Goes back to page 4 overlay for bnResultContainer 1--");
                client.expect.element(productDetail).to.have.css('display').which.equal('none');

                });
            
            
        }
    },
//Closing the browser
'Closing Browser': function(client){
    client.pause(1000);
    client.end();
  }
}