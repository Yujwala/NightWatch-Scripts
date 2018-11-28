var mortgage_rate_finder_props,pageObj,callback,size,
    pageurl = require('../../pageurls.js'),
    // search data file included
    mrf_data=require('./mortgage_rate_finder_data.js'),
    data=mrf_data.props;

function globalProps(client){
    pageObj = client.page.mortgage_rate_finder_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    mortgage_rate_finder_props = require('./mortgage_rate_finder_props.js')(client);
}

//  <------------- Custom Functions - START ------------------->

// Mortgage Results - Toggle Switch props function
function mrfResultsToggleswitch(client){

    toggleSel=pageObj.elements.toggle.selector,

    toggleSwitch=['.js-mortgage-toggle-wrap .form-input-row.inline-block','.js-mortgage-toggle-wrap .form-input-row.inline-block label',
        '.js-mortgage-toggle-wrap .form-input-row:not(.inline-block) .input-label:not(.input-label--focus)',
        '.js-mortgage-toggle-wrap .form-input-row:not(.inline-block) .input-label.input-label--focus'];
        callback.scrollToElement(client, toggleSel);
        client.elements('css selector',toggleSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<toggleSwitch.length; i++){
                       properties = mortgage_rate_finder_props["toggle_props_"+i]('xs');
                       elementselector= toggleSwitch[i];
                       callback.multiloop(client, elementselector , properties, 'xs');
               };                       
            }
        });
}

// Mortgage Results - Rich Text props function
function mrfResultsRichText(client){

    rteSel=pageObj.elements.rte.selector,

    para=['.title-desc span','.js-mortgage-toggle-wrap .comp-rich-text p','.comp-rich-text p strong',
        '.comp-rich-text .white-band__variable-fig','.comp-rich-text .white-band__variable-cont',
        '.comp-rich-text cta--m a'];
        callback.scrollToElement(client, rteSel);
        client.elements('css selector',rteSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<para.length; i++){
                       properties = mortgage_rate_finder_props["rte_props_"+i]('xs');
                       elementselector= para[i];
                       callback.multiloop(client, elementselector , properties, 'xs');
               };                       
            }
        });
}

// Mortgage results section 

function mrfResultsBlock(client){

    resBlock=pageObj.elements.resBlock.selector,

    mrfres=['.mortgage-result-block li','.mortgage-result-block li a',
            '.mortgage-result-block li .rate-section','.mortgage-result-block li .rate-section .rate-left',
            '.mortgage-result-block li .rate-section .rate-right','.mortgage-result-block li .li-title',
            '.mortgage-result-block li .mortgage-rate','.mortgage-result-block li .cost-section',
            '.mortgage-result-block li .cost-section .rate-right'];
            callback.scrollToElement(client, resBlock);
        client.elements('css selector',resBlock,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<mrfres.length; i++){
                       properties = mortgage_rate_finder_props["res_block_props_"+i]('xs');
                       elementselector= mrfres[i];
                       callback.multiloop(client, elementselector , properties, 'xs');
               };                       
            }
        });
}

function mrfResultsSlidingContent(client){
    slidingContent=['.mortgage-sliding-content[style*="display: block;"] .fixed-header',
                    '.mortgage-sliding-content[style*="display: block;"] .fixed-header a',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .odd-block',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .even-block',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .li-title',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .type-value',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .eligibility-header',
                    '.mortgage-sliding-content[style*="display: block;"] .scroll-content .eligibility-value'];
    
    client.elements('css selector',resBlock,results=>{
        if(results.value.length>0) { 
           // Looping through array of selectors and props
           for(i=0; i<slidingContent.length; i++){
                   properties = mortgage_rate_finder_props["slide_cont_props_"+i]('xs');
                   elementselector= slidingContent[i];
                   callback.multiloop(client, elementselector , properties, 'xs');
           };                       
        }
    });
};

// Function for setting values to inputs and submitting the form. Form functionality For Not Existing Customer
function notCustSearch(client,ncTypeOfBorrower,ncTerm,ncPropValue,ncDepositWorth,ncAddtnlBorrow,ncRepaymentType,ncFixedRes,ncTrackerRes){
    client.click('select[id=mortgageFinder_type-of-borrower] option[value='+ncTypeOfBorrower+']')
               .pause(2000)
    client.click('select[id=mortgageFinder_mortgage-term] option[value='+ncTerm+']')
               .pause(2000)
               console.log(ncTypeOfBorrower)
               console.log(typeof(ncTypeOfBorrower))
               x=ncTypeOfBorrower;
               // Set value to Property, Deposit worth , repayment type based on type of Borrower
               if(x ==="NC_RFTB"||x ==="NC_RMH"||x ==="NC_BTL_BP"){
                    console.log('I am in 1')
                    client.clearValue('#mortgageFinder_PropertyValue')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_PropertyValue',ncPropValue)
                    client.clearValue('#mortgageFinder_depositWorth')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_depositWorth',ncDepositWorth)
                    client.pause(1000)
                    if(x ==="NC_BTL_BP"){
                       client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('none')
                       client.click('select[id=mortgageFinder_repaymentType] option[value='+ncRepaymentType+']')
                    }
                    else {
                       client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('none')
                       client.expect.element('#mortgageFinder_repaymentType').to.have.css('display').which.equals('none')
                    }
                    client.pause(1000)
                    client.click('.search-container')
                    client.pause(2000)
                    client.click('.cta-block--calculate.js-find-morgage a')
                    client.pause(2000)
                    client.verify.containsText('.js-mortgage-nos',ncFixedRes);
                    mrfResultsToggleswitch(client);
                    mrfResultsRichText(client);
                    mrfResultsBlock(client);
                    client.click('.result-section .mortgage-result-block .js-mortgage-type-header')
                    client.waitForElementNotVisible('.mortgage-sliding-content[style*="display: block;"]')
                    client.pause(1000)
                    mrfResultsSlidingContent(client);
                    client.pause(3000)
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(4000)
                    client.verify.containsText('.js-mortgage-nos',ncTrackerRes);
               }
               else if(x ==="NC_RR"||x==="NC_BTL_R"){
                    console.log('I am in 3')
                    client.clearValue('#mortgageFinder_PropertyValueThird')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_PropertyValueThird',ncPropValue)
                    client.clearValue('#mortgageFinder_depositWorthThird')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_depositWorthThird',ncDepositWorth)
                    client.pause(2000)
                    if(ncAddtnlBorrow!=""){
                    client.click('#checkBorrowMore-mortgageFinder_checkBorrowMore-0')
                    client.pause(2000)
                    client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('block')
                    client.clearValue('#mortgageFinder_additionalBorrowSecond')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_additionalBorrowSecond',ncAddtnlBorrow)
                    }
                    client.pause(1000)
                    if(x ==="NC_BTL_R"){
                        client.click('select[id=mortgageFinder_repaymentType] option[value='+ncRepaymentType+']')
                    }
                    client.pause(1000)
                    client.click('.search-container')
                    client.pause(2000)
                    client.click('.cta-block--calculate.js-find-morgage a')
                    client.pause(2000)
                    client.verify.containsText('.js-mortgage-nos',ncFixedRes);
                    mrfResultsToggleswitch(client);
                    mrfResultsRichText(client);
                    mrfResultsBlock(client);
                    client.click('.result-section .mortgage-result-block .js-mortgage-type-header')
                    client.waitForElementNotVisible('.mortgage-sliding-content[style*="display: block;"]')
                    client.pause(1000)
                    mrfResultsSlidingContent(client);
                    client.pause(3000)
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ncTrackerRes);     
               }

}

// Function for setting values to inputs and submitting the form. Form functionality For Existing Customer
function existingCustSearch(client,ecTypeOfBorrower,ecTerm,ecPropValue,ecDepositWorth,ecAddtnlBorrow,ecRepaymentType,ecFixedRes,ecTrackerRes){
            client.click('select[id=mortgageFinder_type-of-borrower] option[value='+ecTypeOfBorrower+']')
               .pause(2000)
            client.click('select[id=mortgageFinder_mortgage-term] option[value='+ecTerm+']')
               .pause(2000)
               console.log(ecTypeOfBorrower)
               console.log(typeof(ecTypeOfBorrower))
               x=ecTypeOfBorrower;
               // Set value to Property, Deposit worth , repayment type based on type of Borrower
               if(x ==="EC_RMH"||x ==="EC_BTL_BP"){
                    console.log('I am in 1')
                    client.clearValue('#mortgageFinder_PropertyValue')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_PropertyValue',ecPropValue)
                    client.clearValue('#mortgageFinder_depositWorth')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_depositWorth',ecDepositWorth)
                    client.pause(1000)
                    client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('none')
                    if(x ==="EC_BTL_BP" ){
                       client.click('select[id=mortgageFinder_repaymentType] option[value='+ecRepaymentType+']')
                    }
                    client.pause(1000)
                    client.click('.search-container')
                    client.pause(2000)
                    client.click('.cta-block--calculate.js-find-morgage a')
                    client.pause(2000)
                    client.verify.containsText('.js-mortgage-nos',ecFixedRes);
                    mrfResultsToggleswitch(client);
                    mrfResultsRichText(client);
                    mrfResultsBlock(client);
                    client.click('.result-section .mortgage-result-block .js-mortgage-type-header')
                    client.waitForElementNotVisible('.mortgage-sliding-content[style*="display: block;"]')
                    client.pause(1000)
                    mrfResultsSlidingContent(client);
                    client.pause(3000)
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ecTrackerRes);
               }
               else if(x ==="EC_RCD"|| x ==="EC_BTL_CD"){
                    console.log('I am in 2')
                    client.clearValue('#mortgageFinder_PropertyValueSecond')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_PropertyValueSecond',ecPropValue)
                    client.clearValue('#mortgageFinder_depositWorthSecond')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_depositWorthSecond',ecDepositWorth)
                    client.pause(2000)
                    // If additional borrow is not null, click would you like to borrow and assign additional amount to field
                    if(ecAddtnlBorrow != ""){
                        console.log("I am in")
                    client.click('#checkBorrowMore-mortgageFinder_checkBorrowMore-0')
                    client.pause(2000)
                    client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('block')
                    client.clearValue('#mortgageFinder_additionalBorrowFirst')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_additionalBorrowFirst',ecAddtnlBorrow)
                    }
                    // If additional borrow is null, repayment type is selected.
                    else {
                    client.click('select[id=mortgageFinder_repaymentType] option[value='+ecRepaymentType+']')
                    }                    
                    client.pause(1000)
                    client.click('.search-container')
                    client.pause(2000)
                    client.click('.cta-block--calculate.js-find-morgage a')
                    client.pause(2000)
                    client.verify.containsText('.js-mortgage-nos',ecFixedRes);
                    mrfResultsToggleswitch(client);
                    mrfResultsRichText(client);
                    mrfResultsBlock(client);
                    client.click('.result-section .mortgage-result-block .js-mortgage-type-header')
                    client.waitForElementNotVisible('.mortgage-sliding-content[style*="display: block;"]')
                    client.pause(1000)
                    mrfResultsSlidingContent(client);
                    client.pause(3000)
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ecTrackerRes);
               } 
               else if(x==="EC_BTL_R"){
                    console.log('I am in 3')
                    client.clearValue('#mortgageFinder_PropertyValueThird')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_PropertyValueThird',ecPropValue)
                    client.clearValue('#mortgageFinder_depositWorthThird')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_depositWorthThird',ecDepositWorth)
                    client.pause(2000)
                    // If Addtnl borrow is not equal to null
                    if(ecAddtnlBorrow!=""){
                    client.click('#checkBorrowMore-mortgageFinder_checkBorrowMore-0')
                    client.pause(2000)
                    client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('block')
                    client.clearValue('#mortgageFinder_additionalBorrowSecond')
                    client.pause(2000)
                    client.setValue('#mortgageFinder_additionalBorrowSecond',ecAddtnlBorrow)
                    }
                    else {
                        client.expect.element('.additional-borrowing-amount').to.have.css('display').which.equals('none')  
                    }
                    client.pause(1000)
                    client.click('select[id=mortgageFinder_repaymentType] option[value='+ecRepaymentType+']')
                    client.pause(1000)
                    client.click('.search-container')
                    client.pause(2000)
                    client.click('.cta-block--calculate.js-find-morgage a')
                    client.pause(2000)
                    client.verify.containsText('.js-mortgage-nos',ecFixedRes);
                    mrfResultsToggleswitch(client);
                    mrfResultsRichText(client);
                    mrfResultsBlock(client);
                    client.click('.result-section .mortgage-result-block .js-mortgage-type-header')
                    client.waitForElementNotVisible('.mortgage-sliding-content[style*="display: block;"]')
                    client.pause(1000)
                    mrfResultsSlidingContent(client);
                    client.pause(3000)
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ecTrackerRes);                
               }

}

//  <------------- Custom Functions - END ------------------->

module.exports = {
  '@tags': ['mobile', 'mortgage-rate-finder', 'mortgage-rate-finder-mobile'],
 
  
  "Opening the Mobile URL": function(client) {
    globalProps(client);
    callback.openURL(client,pageurl.NW_PER_MRF_MOB);
    console.log("--Mobile--"+pageurl.NW_PER_MRF_MOB);  
    client.waitForElementVisible('body',5000);

},
  
 /* //Resize the Window
      "Resize The Window":function(client){
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000) ;
        client.refresh();
        client.waitForElementVisible('body',5000);
        client.keys("\uE03C")
        console.log("1")
        client.pause(5000)
        client.keys(["\uE009", "\uE008", 'm'])
        console.log("2")
 },
*/

//<----------Initial Overlay after Page Load properties - Start ---------->

  // Custom Overlay properties

  "1. MRF Custom Overlay properties":function(client){
 
    client.waitForElementVisible('body',5000);
    mrfOverlay = pageObj.elements.mrfOverlay_m.selector,
    shelfInner= pageObj.elements.shelfInner_m.selector,
    globalProps(client);
    callback.scrollToElement(client, mrfOverlay);
    if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
    
     client.elements('css selector',mrfOverlay,results=>{
         if(results.value.length>0) { 
           //MRF Overlat
             properties = mortgage_rate_finder_props.mrfOverlayProp('xs');
             callback.multiloop(client, mrfOverlay , properties, 'xs');
          // Shelf Inner   
             properties = mortgage_rate_finder_props.shelfInnerProp('xs');
             callback.multiloop(client, shelfInner , properties, 'xs');
         }
    
     });
    }
    },


    "2. MRF Overlay H3, Radio Input, Label properties":function(client){

      h3Overlay = pageObj.elements.h3Overlay_m.selector,
      radioInputDivRow = pageObj.elements.radioInputDivRow_m.selector,
      radioDiv= pageObj.elements.radioDiv_m.selector,
      labelP1= pageObj.elements.labelP1_m.selector,
      labelP2= pageObj.elements.labelP2_m.selector,
      ctaL= pageObj.elements.ctaL_m.selector,
      //labelselector = pageObj.elements.label.selector,
      globalProps(client);
      callback.scrollToElement(client, h3Overlay);
      if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
      
       client.elements('css selector',mrfOverlay,results=>{
           if(results.value.length>0) { 
             //H3 
               properties = mortgage_rate_finder_props.h3OverlayProp('xs');
               callback.multiloop(client, h3Overlay , properties, 'xs');
            // Radio Input Div Inner   
               properties = mortgage_rate_finder_props.radioInputDivRowProp('xs');
               callback.multiloop(client, radioInputDivRow , properties, 'xs');
            // Radio Div    
               properties = mortgage_rate_finder_props.radioDivProp('xs');
               callback.multiloop(client, radioDiv , properties, 'xs');
            // Label P first-child
               properties = mortgage_rate_finder_props.labelP1Prop('xs');
               callback.multiloop(client, labelP1 , properties, 'xs');
            // Label P second-child
               properties = mortgage_rate_finder_props.labelP2Prop('xs');
               callback.multiloop(client, labelP2 , properties, 'xs');
            // CTA--L a Inactive Props
               properties = mortgage_rate_finder_props.ctaLProp('xs');
               callback.multiloop(client, ctaL , properties, 'xs');
           }
       });
      }
      },
      

      //    [ Step-1 : Selection of User Mortgage type - New Customer type ]

      "3. Radio Button selection, CTA button click properties":function(client){

         newMortgageFocus = pageObj.elements.newMortgageFocus_m.selector,
        ctaLHover = pageObj.elements.ctaLHover_m.selector,
        ctaLFocus = pageObj.elements.ctaLFocus_m.selector,

        globalProps(client);
        callback.scrollToElement(client, newMortgageFocus);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',mrfOverlay,results=>{
             if(results.value.length>0) { 
              // Click on New Mortgage Radio button
              client.click('#mrfCustomerOverlay #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
              .pause(2000)
              // Radio button focus properties
              properties = mortgage_rate_finder_props.radio1FocusProp('xs');
              callback.singleElem(client, newMortgageFocus, properties, 'xs');
              // CTA--L a active state properties
              properties = mortgage_rate_finder_props.ctaLActiveProp('xs');
              callback.singleElem(client, ctaL , properties, 'xs');
              // CTA active Hover, Focus properties and click
              client.moveToElement('#mrfCustomerOverlay .cta--l a', 60,10)
              .pause(2000)
              properties=mortgage_rate_finder_props.ctaLActiveHoverProp('xs');
              callback.singleElem(client, ctaLHover , properties, 'xs');
              client.mouseButtonDown(0)
              .pause(2000)
              //Focus CTA active
              properties=mortgage_rate_finder_props.ctaLActiveFocusProp('xs');
              callback.singleElem(client, ctaLFocus , properties, 'xs');
              // CTA click
              client.mouseButtonUp(0)
              .pause(2000)

             }
         });
        }
        },
      
      //<----------Initial Overlay after Page Load properties - End ---------->

      
      //<---------  MRF Header Properties - Start --------->

      "4. MRF Hero properties":function(client){

        heroHead1 = pageObj.elements.heroHead1.selector,
        header1 = pageObj.elements.mainHead.selector,
        header2 = pageObj.elements.secondaryHead.selector,

        globalProps(client);
        callback.scrollToElement(client, heroHead1);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',heroHead1,results=>{
             if(results.value.length>0) { 
                properties=mortgage_rate_finder_props.heroHead1Prop('xs');
                properties1=mortgage_rate_finder_props.header1Prop('xs');
                properties2=mortgage_rate_finder_props.header2Prop('xs');
                callback.singleElem(client, heroHead1 , properties, 'xs');
                callback.singleElem(client, header1 , properties1, 'xs');
                callback.singleElem(client, header2 , properties2, 'xs');              
             }
         });
        }
        },

      //<---------  MRF Header Properties - End --------->

      //<--------- Form Properties - Start ------------>
    
     // Desk Properties
      "5. MRF Shelf - All types of Desks properties":function(client){

        searchContainerSel=pageObj.elements.heroHead1.selector,

        // Declared Array with 13 Desk selectors
        maindivs = [".search-container",".product-finder",".desk--three-fifths.palm--one-whole",
             ".palm--five-twelfths.desk--one-quarter", ".clearfix.mortgage-type",
             ".mortgage-type .desk--two-fifths .form-input-row", ".additional-borrowing-amount .form-input-row",
             ".mrf-btl-repayment-type .form-input-row",".palm--one-whole.desk--one-half.tool-desc-left",
             ".palm--one-whole.desk--one-half.tool-desc-right",".tool-desc-text",".tool--description",
             ".shelf.shelf--next"];
        
        globalProps(client);
        callback.scrollToElement(client, searchContainerSel);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',searchContainerSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<maindivs.length; i++){
                        properties = mortgage_rate_finder_props["desk_props_"+i]('xs');
                        elementselector= maindivs[i];
                        callback.multiloop(client, elementselector , properties, 'xs');
                };                       
             }
         });
        }
        },

        // Label Properties
      "6. MRF Shelf - Labels properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with 5 label and one seperator selectors
        secdivs = ['.product-finder .desk--two-fifths label','.mortgage-type .desk--two-fifths label',
             '.desk--three-fifths label','.mortgage-type-checkbox .inline-block',
              '.additional-borrowing-amount label','.mrf-btl-repayment-type label','.separator'];
        
        globalProps(client);
        callback.scrollToElement(client, labelSel);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<secdivs.length; i++){
                        properties = mortgage_rate_finder_props["label_props_"+i]('xs');
                        elementselector= secdivs[i];
                        callback.multiloop(client, elementselector , properties, 'xs');
                };                       
             }
         });
        }
        },


         // Input Fields Properties
      "7. Input Fields properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with selectors
        a = ['.input-field','.selector','.js-custom-select option','.checker input',
             '.input-field.input-field--width-medium', '.input-field.input-field--width-small',
             '.input-field:not(.input-field--width-medium):not(.input-field--width-small)'];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<a.length; i++){
                        properties = mortgage_rate_finder_props["input_fields_props_"+i]('xs');
                        elementselector= a[i];
                        callback.multiloop(client, elementselector , properties, 'xs');
                };                       
             }
         });
        }
        },
      
      // Info Icon and Dropdown box Properties
      "8. MRF Shelf - Info Icon & Dropdown box properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with  Icon and Dropdown selectors
        dropdown = ['.icon-info','.palm--five-twelfths','.select-box-width-small',
                    '#mortgageFinder_mortgage-term','.js-time-label'];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<dropdown.length; i++){
                        properties = mortgage_rate_finder_props["icon_dropdown_props_"+i]('xs');
                        elementselector= dropdown[i];
                        callback.multiloop(client, elementselector , properties, 'xs');
                };                       
             }
         });
        }
        },
     
      //<--------- Form Properties - End -------------->

      // ----------------  STEP-2  -------------------------
      //<--------------------- Form Results Properties - Start ------------------->

    "9. MRF Shelf - Setup values and obtain results - Properties of Results":function(client){
        searchContainerSel=pageObj.elements.searchContainer.selector,        
        globalProps(client);
       
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',searchContainerSel,results=>{
            if(results.value.length>0) { 
              
                // Verifying search results properties by sending parameters
                //notCustSearch(client,'NC_RR',20,100000,50000,20000,'repaymentCapAndInt');
                notCustSearch(client,data.$ncTypeOfBorrower, data.$ncTerm, data.$ncPropValue, data.$ncDepositWorth, data.$ncAddtnlBorrow, data.$ncRepaymentType, data.$ncFixedRes, data.$ncTrackerRes);
              // client.pause(15000)
               //notCustSearch(client,'NC_BTL_BP',20,100000,50000,20000,'repaymentCapAndInt');
              // client.pause(10000)

            }
         });
        }
        },

      //<---------------------  Form Results Properties - End   ------------------->

      //    [ Step-3 : Selection of User Mortgage type - Existing Customer type ]

      "13. Refresh and select Existing customer as user type,functionality verification and Proprties":function(client){

        searchContainerSel=pageObj.elements.searchContainer.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',searchContainerSel,results=>{
             if(results.value.length>0) { 
              // Click on New Mortgage Radio button
              client.click('.back-to-start-btn a')
              client.pause(2000)
              client.click('#mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-1')
              .pause(3000)
              // CTA active Hover, Focus properties and click
              client.click('#mrfCustomerOverlay .cta--l a')
              .pause(2000)
             // Verifying search results properties by sending parameters

             existingCustSearch(client,data.$ecTypeOfBorrower, data.$ecTerm, data.$ecPropValue, data.$ecDepositWorth, data.$ecAddtnlBorrow, data.$ecRepaymentType, data.$ecFixedRes, data.$ecTrackerRes);
             //existingCustSearch(client,'EC_RCD',20,100000,50000,20000,'repaymentCapAndInt');
               
                //searchResults(client,'EC_BTL_BP',20,100000,50000,20000,'repaymentCapAndInt');
               
                //searchResults(client,'EC_BTL_R',20,100000,50000,20000,'repaymentCapAndInt');
             }
         });
        }
        },

       "16. Required field, Error Properties and Search button props ":function(client){
            
        searchContainer=pageObj.elements.searchContainer.selector,

        globalProps(client);

        client.click('.back-to-start-btn a')
        client.pause(2000)
        client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
        .pause(1000)
        .click('.overlay-wrap .cta--l a')
        .pause(3000)

        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
         client.elements('css selector',searchContainer,results=>{
             if(results.value.length>0) { 

                client.click('select[id=mortgageFinder_type-of-borrower] option[value=NC_BTL_R]')
                .pause(2000)
                .pause(1000)
                .setValue('#mortgageFinder_PropertyValueThird',0)
                .setValue('#mortgageFinder_depositWorthThird',0)
                .click('.search-container')
                .pause(4000)

                errorfields=['.js-propertyvalue-mortgaging .error-container', '.js-deposit-mortgaging .error-container',
                             '#mortgageFinder_PropertyValueThird','#mortgageFinder_depositWorthThird', '.cta-block--calculate a']

                    for(i=0; i<errorfields.length; i++){
                        properties = mortgage_rate_finder_props["error_fields_"+i]('xs');
                        elementselector= errorfields[i];
                        callback.multiloop(client, elementselector , properties, 'xs');
                    };                  
             }
         });
        }
        },

    "Ending the session":function(client){
        client.end();
    }
    
}



