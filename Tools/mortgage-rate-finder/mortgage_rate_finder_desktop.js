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

        client.elements('css selector',toggleSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<toggleSwitch.length; i++){
                       properties = mortgage_rate_finder_props["toggle_props_"+i]('lg');
                       elementselector= toggleSwitch[i];
                       callback.multiloop(client, elementselector , properties, 'lg');
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

        client.elements('css selector',rteSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<para.length; i++){
                       properties = mortgage_rate_finder_props["rte_props_"+i]('lg');
                       elementselector= para[i];
                       callback.multiloop(client, elementselector , properties, 'lg');
               };                       
            }
        });
}

// Mortgage Results - Table props function
function mrfResultsWrapTable(client){

    tableSel=pageObj.elements.table.selector,

    resultTable=['.mortgage-result-wrap','.mortgage-result-wrap .row-head','.mortgage-result-wrap .js-mortgage-result td:not(.highlight)',
        '.mortgage-result-wrap .highlight','.mortgage-result-wrap td a:not(.showless):not(.showmore)',
        '.mortgage-result .row .even','.mortgage-result .row .odd', '.mortgage-result-wrap .js-mortgage-header td:not(.highlight)'];

        client.elements('css selector',tableSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<resultTable.length; i++){
                       properties = mortgage_rate_finder_props["table_props_"+i]('lg');
                       elementselector= resultTable[i];
                       callback.multiloop(client, elementselector , properties, 'lg');
               };                       
            }
        });
}

// Mortgage Results - CTA props function
function mrfResultsCTA(client){

    resCtaSel=pageObj.elements.resCta.selector,

    resultCta=['.mortgage-result .cta--l','.mortgage-result .showmore-cta .cta--l a', '.mortgage-result .showless-cta .cta--l a'];

        client.elements('css selector',resCtaSel,results=>{
            if(results.value.length>0) { 
               // Looping through array of selectors and props
               for(i=0; i<resultCta.length; i++){
                       properties = mortgage_rate_finder_props["cta_props_"+i]('lg');
                       elementselector= resultCta[i];
                       callback.multiloop(client, elementselector , properties, 'lg');
               };                       
            }
        });
}

// Function for setting values to inputs and submitting the form. Form functionality For Not Existing Customer
function notCustSearch(client,ncTypeOfBorrower,ncTerm,ncPropValue,ncDepositWorth,ncAddtnlBorrow,ncRepaymentType,ncFixedRes,ncTrackerRes){
    client.click('select[id=mortgageFinder_type-of-borrower] option[value='+ncTypeOfBorrower+']')
               .pause(2000)
               .clearValue('#mortgageFinder_mortgage-term')
               .pause(2000)
               .setValue('#mortgageFinder_mortgage-term',ncTerm)
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
                    mrfResultsWrapTable(client);	
                    mrfResultsCTA(client);
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
                    mrfResultsWrapTable(client);	
                    mrfResultsCTA(client);
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ncTrackerRes);     
               }

}

// Function for setting values to inputs and submitting the form. Form functionality For Existing Customer
function existingCustSearch(client,ecTypeOfBorrower,ecTerm,ecPropValue,ecDepositWorth,ecAddtnlBorrow,ecRepaymentType,ecFixedRes,ecTrackerRes){
    client.click('select[id=mortgageFinder_type-of-borrower] option[value='+ecTypeOfBorrower+']')
               .pause(2000)
               .clearValue('#mortgageFinder_mortgage-term')
               .pause(2000)
               .setValue('#mortgageFinder_mortgage-term',ecTerm)
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
                    mrfResultsWrapTable(client);	
                    mrfResultsCTA(client);
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
                    mrfResultsWrapTable(client);	
                    mrfResultsCTA(client);
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
                    mrfResultsWrapTable(client);	
                    mrfResultsCTA(client);
                    client.click('.toggal-group-section .input-label--radio-option:last-child');
                    client.pause(3000)
                    client.verify.containsText('.js-mortgage-nos',ecTrackerRes);                
               }

}


function errorMessages(client, fieldId, fieldValErr,fieldValExpected, fielderror,overlay){

//Description: To verify error functionality
//fieldId - ID of the element
//fieldValErr  - Value to be set for error message to appear
//fieldValExpected - Expected value by field to error to dissappear
//fielderror - Error message expected
//overlay - error message displayed as overlay popup or normal div at field - Send true if Overlay else false.


    if(overlay=='true'){
        // Condition verification
        client.clearValue(fieldId)
        client.setValue(fieldId,fieldValErr)
        client.click('body')
        client.verify.containsText('.overlay-content[style*="display: block;"] .comp-rich-text',fielderror)
        client.click('.close')
        client.setValue(fieldId,fieldValExpected)
    }
    else {
        // Required field verification andCondition verification
        client.clearValue(fieldId)
        client.setValue(fieldId,fieldValErr)
        client.click('body')
        client.verify.containsText('.error-container',fielderror)
        client.setValue(fieldId,fieldValExpected)

      //Props verification
      properties = mortgage_rate_finder_props.error_fields_0(size);
      callback.multiloop(client, '.error-container' , properties, size);

    }

}

function errorMessagesArray(client, fieldId, fieldValErr,fieldValExpected, fieldError,overlay ){

    //{fieldId, fieldValErr,fieldValExpected, fieldError,overlay}

   // for(i=0;i<arr.length;i++){

      //  fieldId=arr[i][0];
      //  fieldValErr=arr[i][1];
       // fieldValExpected=arr[i][2];
       // fieldError=arr[i][3];
       // overlay=arr[i][4];

        if(overlay=='true'){
            // Condition verification
            client.clearValue(fieldId)
            client.setValue(fieldId,fieldValErr)
            client.click('body')
            client.verify.containsText('.overlay-content[style*="display: block;"] .comp-rich-text',fieldError)
            client.click('.close')
            client.clearValue(fieldId)
            client.setValue(fieldId,fieldValExpected)
        }
        else {
            // Required field verification andCondition verification
            client.clearValue(fieldId)
            client.setValue(fieldId,fieldValErr)
            client.click('body')
            client.verify.containsText('.error-container',fieldError)
            client.clearValue(fieldId)
            client.setValue(fieldId,fieldValExpected)
    
          //Props verification
          properties = mortgage_rate_finder_props.error_fields_0(size);
          callback.multiloop(client, '.error-container' , properties, size);
    
        }
    
    }
   // }
    

//  <------------- Custom Functions - END ------------------->

module.exports = {
  '@tags': ['desktop', 'mortgage-rate-finder', 'mortgage-rate-finder-desktop'],
   //Opening the URL
   "1. Opening the Desktop URL": function(client) {
    globalProps(client);
    client.maximizeWindow();
    callback.openURL(client, pageurl.RBS_PER_MRF);
    //callback.openURL(client,pageurl.RBS_BUS_TILE);
    console.log("--Desktop--"+pageurl.RBS_PER_MRF);
    client.pause(2000);
},



//<----------Initial Overlay after Page Load properties - Start ---------->
//Verifying Overlap-wrap layout properties 
"2. Overlay Wrap layout properties and presence of Overlay-inner":function(client){

overlayWrap = pageObj.elements.overlayWrap.selector,
globalProps(client);
//callback.scrollToElement(client, overlayWrapselector);
if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

 client.elements('css selector',overlayWrap,results=>{
     if(results.value.length>0) { 
         properties = mortgage_rate_finder_props.overlayWrapProp('lg');
         callback.multiloop(client, overlayWrap , properties, 'lg');
         client.pause(2000)
         client.verify.elementPresent('.overlay-content .overlay-inner');
     }

 });
}
},

//Verifying Overlap-inner layout properties 
"3. Overlay Inner Layout properties":function(client){

  overlayInner = pageObj.elements.overlayInner.selector,
  globalProps(client);
  //callback.scrollToElement(client, overlayWrapselector);
  if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
  
   client.elements('css selector',overlayInner,results=>{
       if(results.value.length>0) { 
           properties = mortgage_rate_finder_props.overlayInnerProp('lg');
           callback.multiloop(client, overlayInner , properties, 'lg');
       }
  
   });
  }
  },

  // Custom Overlay properties

  "4. Custom Overlay properties":function(client){

    mrfOverlay = pageObj.elements.mrfOverlay.selector,
    shelfInner = pageObj.elements.shelfInner.selector,
    desk = pageObj.elements.desk.selector,
    globalProps(client);
    //callback.scrollToElement(client, overlayWrapselector);
    if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
     client.elements('css selector',overlayInner,results=>{
         if(results.value.length>0) { 
           //MRF Overlat
             properties = mortgage_rate_finder_props.mrfOverlayProp('lg');
             callback.multiloop(client, mrfOverlay , properties, 'lg');
          // Shelf Inner   
             properties = mortgage_rate_finder_props.shelfInnerProp('lg');
             callback.multiloop(client, shelfInner , properties, 'lg');
          // Desk Overlay   
             properties = mortgage_rate_finder_props.deskProp('lg');
             callback.multiloop(client, desk , properties, 'lg');
         }
    
     });
    }
    },


    "5. Overlay H3, Radio Input, Label properties":function(client){

      h3Overlay = pageObj.elements.h3Overlay.selector,
      radioInputDivRow = pageObj.elements.radioInputDivRow.selector,
      radioDiv= pageObj.elements.radioDiv.selector,
      labelP1= pageObj.elements.labelP1.selector,
      labelP2= pageObj.elements.labelP2.selector,
      ctaL= pageObj.elements.ctaL.selector,
      //labelselector = pageObj.elements.label.selector,
      globalProps(client);
      //callback.scrollToElement(client, overlayWrapselector);
      if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice  || client.options.desiredCapabilities.isSMDevice){
      
       client.elements('css selector',overlayInner,results=>{
           if(results.value.length>0) { 
             //H3 
               properties = mortgage_rate_finder_props.h3OverlayProp('lg');
               callback.multiloop(client, h3Overlay , properties, 'lg');
            // Radio Input Div Inner   
               properties = mortgage_rate_finder_props.radioInputDivRowProp('lg');
               callback.multiloop(client, radioInputDivRow , properties, 'lg');
            // Radio Div    
               properties = mortgage_rate_finder_props.radioDivProp('lg');
               callback.multiloop(client, radioDiv , properties, 'lg');
            // Label P first-child
               properties = mortgage_rate_finder_props.labelP1Prop('lg');
               callback.multiloop(client, labelP1 , properties, 'lg');
            // Label P second-child
               properties = mortgage_rate_finder_props.labelP2Prop('lg');
               callback.multiloop(client, labelP2 , properties, 'lg');
            // CTA--L a Inactive Props
               properties = mortgage_rate_finder_props.ctaLProp('lg');
               callback.multiloop(client, ctaL , properties, 'lg');
           }
       });
      }
      },
      

      //    [ Step-1 : Selection of User Mortgage type - New Customer type ]

      "6. Radio Button selection, CTA button click properties":function(client){

        overlayInner = pageObj.elements.overlayInner.selector,
        newMortgageFocus = pageObj.elements.newMortgageFocus.selector,
        ctaLHover = pageObj.elements.ctaLHover.selector,
        ctaLFocus = pageObj.elements.ctaLFocus.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice  || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',overlayInner,results=>{
             if(results.value.length>0) { 
              // Click on New Mortgage Radio button
              client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
              .pause(2000)
              // Radio button focus properties
              properties = mortgage_rate_finder_props.radio1FocusProp('lg');
              callback.singleElem(client, newMortgageFocus, properties, 'lg');
              // CTA--L a active state properties
              properties = mortgage_rate_finder_props.ctaLActiveProp('lg');
              callback.singleElem(client, ctaL , properties, 'lg');
              // CTA active Hover, Focus properties and click
              client.moveToElement('.overlay-wrap .cta--l a', 60,10)
              .pause(2000)
              properties=mortgage_rate_finder_props.ctaLActiveHoverProp('lg');
              callback.singleElem(client, ctaLHover , properties, 'lg');
              client.mouseButtonDown(0)
              .pause(2000)
              //Focus CTA active
              properties=mortgage_rate_finder_props.ctaLActiveFocusProp('lg');
              callback.singleElem(client, ctaLFocus , properties, 'lg');
              // CTA click
              client.mouseButtonUp(0)
              .pause(2000)

             }
         });
        }
        },
      
      //<----------Initial Overlay after Page Load properties - End ---------->


      //<---------  MRF Header Properties - Start --------->

      "7. MRF Hero properties":function(client){

        heroHead1 = pageObj.elements.heroHead1.selector,
        header1 = pageObj.elements.mainHead.selector,
        header2 = pageObj.elements.secondaryHead.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice  || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',heroHead1,results=>{
             if(results.value.length>0) { 
                properties=mortgage_rate_finder_props.heroHead1Prop('lg');
                properties1=mortgage_rate_finder_props.header1Prop('lg');
                properties2=mortgage_rate_finder_props.header2Prop('lg');
                callback.singleElem(client, heroHead1 , properties, 'lg');
                callback.singleElem(client, header1 , properties1, 'lg');
                callback.singleElem(client, header2 , properties2, 'lg');
                
              
             }
         });
        }
        },

      //<---------  MRF Header Properties - End --------->

      //<--------- Form Properties - Start ------------>

     // Desk Properties
      "8. MRF Shelf - All types of Desks properties":function(client){

        searchContainerSel=pageObj.elements.heroHead1.selector,

        // Declared Array with 13 Desk selectors
        maindivs = [".search-container",".product-finder",".desk--three-fifths.palm--one-whole",
             ".palm--five-twelfths.desk--one-quarter", ".clearfix.mortgage-type",
             ".mortgage-type .desk--two-fifths .form-input-row", ".additional-borrowing-amount .form-input-row",
             ".mrf-btl-repayment-type .form-input-row",".palm--one-whole.desk--one-half.tool-desc-left",
             ".palm--one-whole.desk--one-half.tool-desc-right",".tool-desc-text",".tool--description",
             ".shelf.shelf--next"];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',searchContainerSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<maindivs.length; i++){
                        properties = mortgage_rate_finder_props["desk_props_"+i]('lg');
                        elementselector= maindivs[i];
                        callback.multiloop(client, elementselector , properties, 'lg');
                };                       
             }
         });
        }
        },

        // Label Properties
      "9. MRF Shelf - Labels properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with 5 label and one seperator selectors
        secdivs = ['.product-finder .desk--two-fifths label','.mortgage-type .desk--two-fifths label',
             '.desk--three-fifths label','.mortgage-type-checkbox .inline-block',
              '.additional-borrowing-amount label','.mrf-btl-repayment-type label','.separator'];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<secdivs.length; i++){
                        properties = mortgage_rate_finder_props["label_props_"+i]('lg');
                        elementselector= secdivs[i];
                        callback.multiloop(client, elementselector , properties, 'lg');
                };                       
             }
         });
        }
        },


         // Input Fields Properties
      "10. Input Fields properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with selectors
        a = ['.input-field','.selector','.js-custom-select option','.checker input',
             '.input-field.input-field--width-medium', '.input-field.input-field--width-small',
             '.input-field:not(.input-field--width-medium):not(.input-field--width-small)'];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<a.length; i++){
                        properties = mortgage_rate_finder_props["input_fields_props_"+i]('lg');
                        elementselector= a[i];
                        callback.multiloop(client, elementselector , properties, 'lg');
                };                       
             }
         });
        }
        },
      
      // Info Icon and Slider Properties
      "11. MRF Shelf - Icon & Slider properties":function(client){

        labelSel=pageObj.elements.label.selector,

        // Declared Array with  Icon and Slider selectors
        slider = ['.icon-info','.js-tool-tip .icon-info__tool-tip','.slider--controller',
             '.js-slider-wrapper .slider-marker','.js-slider-wrapper .slider-marker .ui-slider-range',
             '.js-slider-wrapper .slider-marker .ui-slider-handle','.js-slider-wrapper .slider--max'];
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',labelSel,results=>{
             if(results.value.length>0) { 
                // Looping through array of selectors and props
                for(i=0; i<slider.length; i++){
                        properties = mortgage_rate_finder_props["icon_slider_props_"+i]('lg');
                        elementselector= slider[i];
                        callback.multiloop(client, elementselector , properties, 'lg');

                //client.expect.element('.js-slider-wrapper .slider--decrement').to.have.css('background-image').which.contains('');
                };                       
             }
         });
        }
        },
     
      //<--------- Form Properties - End -------------->

      // ----------------  STEP-2  -------------------------
      //<--------------------- Form Results Properties - Start ------------------->

    // Info Icon and Slider Properties
    "12. MRF Shelf - Setup values and obtain results - Properties of Results":function(client){
        searchContainerSel=pageObj.elements.searchContainer.selector,        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
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

        overlayInnerselector = pageObj.elements.overlayInner.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',overlayInnerselector,results=>{
             if(results.value.length>0) { 
              // Click on New Mortgage Radio button
              client.refresh()
              .pause(2000)
              client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-1')
              .pause(3000)
              // CTA active Hover, Focus properties and click
              client.click('.overlay-wrap .cta--l a')
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
           

    "14. Mortgage Content Properties":function(client){

        mortgageresultSel= pageObj.elements.mortgageresult.selector,
        showmoreSel = pageObj.elements.showmore.selector,

        acccontent=['.mortgage-content.js-mortgage-content.accordion-content', '.mortgage-detail--row', 
           '.desk--two-fifths.mortgage-detail--label','.desk--two-fifths.mortgage-detail--label span',
           '.desk--three-fifths.mortgage-detail--value','.desk--three-fifths.mortgage-detail--value span:not(.cta):not(.cta--arrow)',
           '.desk--three-fifths.mortgage-detail--value li','.cta-block--calculate.js-calculate.mrf-kfi-first-cta',
           '.cta-block--calculate.js-calculate.mrf-kfi-first-cta .cta--l a'];
        
         globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                
        client.elements('css selector',mortgageresultSel,results=>{
            if(results.value.length>0) { 
                      
                //-----------Show More CTA Click-----------
                client.click(showmoreSel)
                .pause(2000)      
                // Looping through array of selectors and props
                for(i=0; i<acccontent.length; i++){
                    properties = mortgage_rate_finder_props["acc_content_"+i]('lg');
                    elementselector= acccontent[i];
                    callback.multiloop(client, elementselector , properties, 'lg');
                };     
            }
        });
        }
        },   

        "15. ShowMore and ShowLess hover and Focus properties":function(client){

            mortgageresultSel= pageObj.elements.mortgageresult.selector
            showmoreSel = pageObj.elements.showmore.selector,
            showlessSel = pageObj.elements.showless.selector,
            showmoreHoverSel = pageObj.elements.showmoreHover.selector,
            showlessHoverSel = pageObj.elements.showlessHover.selector,
            showmoreFocusSel = pageObj.elements.showmoreFocus.selector,
            showlessFocusSel = pageObj.elements.showlessFocus.selector,
            
            globalProps(client);
            if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

                client.refresh()
                .click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
                .pause(1000)
                .click('.overlay-wrap .cta--l a')
                .pause(3000)
                client.click('select[id=mortgageFinder_type-of-borrower] option[value=NC_RFTB]')
                .pause(2000)
                .clearValue('#mortgageFinder_mortgage-term')
                .pause(2000)
                .setValue('#mortgageFinder_mortgage-term',20)
                .pause(2000)
                .clearValue('#mortgageFinder_PropertyValue')
                .pause(2000)
                .setValue('#mortgageFinder_PropertyValue',100000)
                .clearValue('#mortgageFinder_depositWorth')
                .pause(2000)
                .setValue('#mortgageFinder_depositWorth',40000)
                .click('.search-container')
                .pause(2000)
                .click('.cta-block--calculate.js-find-morgage a')
                .pause(2000)
                .waitForElementPresent('.heading-big', 1000);
                
             client.elements('css selector',mortgageresultSel,results=>{
                 if(results.value.length>0) { 
                  
                   //-----------Show More CTA -----------
                  // CTA active Hover, Focus properties and click
                  client.moveToElement(showmoreSel, 60,10)
                  .pause(2000)
                  properties1=mortgage_rate_finder_props.showmoreHoverProp('lg');
                  callback.singleElem(client, showmoreHoverSel , properties1, 'lg');
                  client.pause(2000)
                  client.mouseButtonDown(0)
                  .pause(4000)
                  //Focus CTA active
                  properties2=mortgage_rate_finder_props.showmoreFocusProp('lg');
                  callback.singleElem(client, showmoreFocusSel , properties2, 'lg');
                  client.pause(2000)
                  // CTA click
                  client.mouseButtonUp(0)
                  .pause(4000)

                  //-----------Show Less CTA -----------

                  // CTA active Hover, Focus properties and click
                  client.moveToElement(showlessSel, 60,10)
                  .pause(2000)
                  properties=mortgage_rate_finder_props.showlessHoverProp('lg');
                  callback.singleElem(client, showlessHoverSel , properties, 'lg');
                  client.pause(2000)
                  client.mouseButtonDown(0)
                  .pause(2000)
                  //Focus CTA active
                  properties=mortgage_rate_finder_props.showlessFocusProp('lg');
                  callback.singleElem(client, showlessFocusSel , properties, 'lg');
                  client.pause(2000)
                  // CTA click
                  client.mouseButtonUp(0)
                  .pause(2000)
    
                 }
             });
            }
            },  

       "16. Required field, Error Properties and Search button props ":function(client){
            
        searchContainer=pageObj.elements.searchContainer.selector,

        globalProps(client);

        //client.refresh()
        client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
        .pause(1000)
        .click('.overlay-wrap .cta--l a')
        .pause(3000)

        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',searchContainer,results=>{
             if(results.value.length>0) { 

                client.click('select[id=mortgageFinder_type-of-borrower] option[value=NC_BTL_R]')
                .pause(2000)
                .clearValue('#mortgageFinder_mortgage-term')
                .setValue('#mortgageFinder_mortgage-term',0)
                .click('.search-container')
                .pause(3000)
                client.expect.element('#exposeMask').to.have.css('display').which.equals('block');
                client.click('.overlay-wrap .close')
                .pause(1000)
                .setValue('#mortgageFinder_PropertyValueThird',0)
                .setValue('#mortgageFinder_depositWorthThird',0)
                .click('.search-container')
                .pause(4000)

                errorfields=['.js-propertyvalue-mortgaging .error-container', '.js-deposit-mortgaging .error-container',
                             '#mortgageFinder_PropertyValueThird','#mortgageFinder_depositWorthThird', '.cta-block--calculate a']

                    for(i=0; i<errorfields.length; i++){
                        properties = mortgage_rate_finder_props["error_fields_"+i]('lg');
                        elementselector= errorfields[i];
                        callback.multiloop(client, elementselector , properties, 'lg');
                    };                  

             }
         });
        }
        },

        "17. Required field, Error Properties and Search button props ":function(client){
            
            searchContainer=pageObj.elements.searchContainer.selector,
    
            globalProps(client);
    
            //client.refresh()
            client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
            .pause(1000)
            .click('.overlay-wrap .cta--l a')
            .pause(3000)
    
            if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
             client.elements('css selector',searchContainer,results=>{
                 if(results.value.length>0) { 
    
                    client.click('select[id=mortgageFinder_type-of-borrower] option[value=NC_BTL_R]')
                    .pause(2000)
                    .clearValue('#mortgageFinder_mortgage-term')
                    .setValue('#mortgageFinder_mortgage-term',0)
                    .click('body')
                    .pause(3000)
                    client.expect.element('#exposeMask').to.have.css('display').which.equals('block');
                    client.click('.overlay-wrap .close')
                    .pause(1000)
                    .setValue('#mortgageFinder_PropertyValueThird',0)
                    .setValue('#mortgageFinder_depositWorthThird',0)
                    .click('.search-container')
                    .pause(4000)
    
                    errorfields=['.js-propertyvalue-mortgaging .error-container', '.js-deposit-mortgaging .error-container',
                                 '#mortgageFinder_PropertyValueThird','#mortgageFinder_depositWorthThird', '.cta-block--calculate a']
    
                        for(i=0; i<errorfields.length; i++){
                            properties = mortgage_rate_finder_props["error_fields_"+i]('lg');
                            elementselector= errorfields[i];
                            callback.multiloop(client, elementselector , properties, 'lg');
                        };                  
                 }
             });
            }
            },


            "18.  Error Messages Properties ":function(client){
            
                searchContainer=pageObj.elements.searchContainer.selector,
        
                globalProps(client);
        
                //client.refresh()
                client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
                .pause(1000)
                .click('.overlay-wrap .cta--l a')
                .pause(3000)
        
                if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                
                 client.elements('css selector',searchContainer,results=>{
                     if(results.value.length>0) { 

                        // Function call to verify all kinds of error messages.
                        errorMessages(client, '#mortgageFinder_PropertyValue', 200 , 100000, 'The property value must exceed £26250','false')
                        errorMessages(client, '#mortgageFinder_mortgage-term', 0 , 10,'Mortgage Term should not be less than 3','true')
                        
                    }
                 });
                }
                },
          

        
/*
       // Assertions will run only when Search results are more than Five.
       "18. View More/View Less Link  Proprties":function(client){
            
        viewMoreLessSel=pageObj.elements.viewMoreLess.selector,
        viewMoreSel = pageObj.elements.viewMore.selector,
        viewLessSel = pageObj.elements.viewLess.selector,
        viewMoreHoverSel = pageObj.elements.viewMoreHover.selector,
        viewMoreFocusSel = pageObj.elements.viewMoreFocus.selector,

        globalProps(client);

        //client.refresh()
        client.click('.overlay-wrap #mrf-btl-radio-customer-type-mortgageFinder_mrf-btl-radio-customer-type-0')
        .pause(1000)
        .click('.overlay-wrap .cta--l a')
        .pause(3000)
        client.click('select[id=mortgageFinder_type-of-borrower] option[value=NC_RFTB]')
        .pause(2000)
        .clearValue('#mortgageFinder_mortgage-term')
        .pause(2000)
        .setValue('#mortgageFinder_mortgage-term',25)
        .pause(2000)
        .clearValue('#mortgageFinder_PropertyValue')
        .pause(2000)
        .setValue('#mortgageFinder_PropertyValue',100000)
        .clearValue('#mortgageFinder_depositWorth')
        .pause(2000)
        .setValue('#mortgageFinder_depositWorth',50000)
        .click('.search-container')
        .pause(2000)
        .click('.cta-block--calculate.js-find-morgage a')
        .pause(2000)
        .waitForElementPresent('.heading-big', 1000);

        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice  || client.options.desiredCapabilities.isSMDevice){
        
         client.elements('css selector',viewMoreLessSel,results=>{
             if(results.value.length>0) { 

                // ----------ViewMoreLess Desk props---------
             properties=mortgage_rate_finder_props.viewMoreLessProp('lg');
             callback.singleElem(client, viewMoreLessSel , properties, 'lg');  
              
                //-----------View More CTA -----------
              properties1=mortgage_rate_finder_props.viewMoreProp('lg');
              callback.singleElem(client, viewMoreSel , properties1, 'lg');

              // CTA active Hover, Focus properties and click                  
              client.moveToElement(viewMoreSel, 40,30)
              .pause(2000)
              properties2=mortgage_rate_finder_props.viewMoreHoverProp('lg');
              callback.singleElem(client, viewMoreHoverSel , properties2, 'lg');
              client.pause(3000)
              client.mouseButtonDown(0)
              .pause(2000)
              //Focus CTA active
              properties3=mortgage_rate_finder_props.viewMoreFocusProp('lg');
              callback.singleElem(client, viewMoreFocusSel , properties3, 'lg');
              client.pause(2000)
              // CTA click
              client.mouseButtonUp(0)
              .pause(2000)
              client.expect.element('.cta-show-hide.icon-hide-history a').to.be.visible;
              client.pause(2000)
             // Click ViewLess anchor
              client.click(viewLessSel);
              client.pause(2000)
              client.expect.element('.cta-show-hide.icon-show-history a').to.be.visible;

             }
         });
        }
        },
*/


    "Ending the session":function(client){
        client.end();
    }
    
}



