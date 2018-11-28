var pageurl = require('../../pageurls.js'),
    pageObj,currency_converter_props,callback,size;

function globalProps(client){
    pageObj = client.page.currency_converter_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    currency_converter_props = require('./currency_converter_props.js')(client);  
}

module.exports = {
  '@tags': ['mobile', 'currency-converter', 'currency-converter-mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.NW_PER_CURRENCY_CONVERTER_MOB);
           console.log("--Mobile--"+pageurl.NW_PER_CURRENCY_CONVERTER_MOB);  
    },
    
                        /**** STEP 1 *****/
    "1 Mobile-Check for Currency Converter Wrapper properties": function(client) {
            ccWrapper = pageObj.elements.ccWrapper.selector,
            ccShelfPadding = pageObj.elements.ccShelfPadding.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //Currency Converter Background props
            properties = currency_converter_props.ccWrapper('xs');  
            callback.multiloop(client, ccWrapper , properties, 'xs');

            //Currency Converter Padding props
            properties = currency_converter_props.ccShelfPadding('xs');  
            callback.multiloop(client, ccShelfPadding , properties, 'xs');

          }  
    },

    "2 Mobile-Check for Currency Converter Heading,Label properties": function(client) {
            ccHeading = pageObj.elements.ccHeading.selector,
            ccLabel = pageObj.elements.ccLabel.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //Currency Converter Heading props
            properties = currency_converter_props.ccHeading('xs');  
            callback.multiloop(client, ccHeading , properties, 'xs');

            //Currency Converter Label props
            properties = currency_converter_props.ccLabel('xs');  
            callback.multiloop(client, ccLabel , properties, 'xs');

          }  
    },

    "3 Mobile-Check for Currency Converter Widget properties": function(client) {
            ccWidget = pageObj.elements.ccWidget.selector,
            ccSelectWrapper = pageObj.elements.ccSelectWrapper.selector,
            ccSelectInput = pageObj.elements.ccSelectInput.selector,
            ccDropdownArrow = pageObj.elements.ccDropdownArrow.selector;
            ccGoButton = pageObj.elements.ccGoButton.selector,
            mobileDropDown = pageObj.elements.mobileDropDown.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //Currency Converter Widget props
            properties = currency_converter_props.ccWidget('xs');  
            callback.multiloop(client, ccWidget , properties, 'xs');

            //Currency Converter select wrappers props
            properties = currency_converter_props.ccSelectWrapper('xs');  
            callback.multiloop(client, ccSelectWrapper , properties, 'xs');

            //Currency Converter select input  props
            properties = currency_converter_props.ccSelectInput('xs');  
            callback.multiloop(client, ccSelectInput , properties, 'xs');

            //verifying select Search Icon
            client.expect.element(ccDropdownArrow).to.have.css('background-image').which.contains("cc-search-icon.png");

            //Currency Converter Search  props
            properties = currency_converter_props.ccDropdownArrow('xs');  
            callback.multiloop(client, ccDropdownArrow , properties, 'xs');

            //Currency Converter Mobile drop down  props
            properties = currency_converter_props.mobileDropDown('xs');  
            callback.multiloop(client, mobileDropDown , properties, 'xs');
            
            //verifying select Dropdown Arrow  image
            client.expect.element(mobileDropDown).to.have.css('background-image').which.contains("cc-dropdown-arrow.png");

            //Currency Converter select go button  props
            properties = currency_converter_props.ccGoButton('xs');  
            callback.multiloop(client, ccGoButton , properties, 'xs');

          }  
    },

    "4 Mobile-Check for Currency Converter Popular Destinations properties": function(client) {
            ccSubHeadingTwo = pageObj.elements.ccSubHeadingTwo.selector,
            ccPopularDestinations = pageObj.elements.ccPopularDestinations.selector,
            ccCountryFlag = pageObj.elements.ccCountryFlag.selector;
            ccCountryFlagImg = pageObj.elements.ccCountryFlagImg.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //Currency Converter Sub Heading props
            properties = currency_converter_props.ccSubHeadingTwo('xs');  
            callback.multiloop(client, ccSubHeadingTwo , properties, 'xs');

            //Currency Converter Popular Destinations Wrapper props
            properties = currency_converter_props.ccPopularDestinations('xs');  
            callback.multiloop(client, ccPopularDestinations , properties, 'xs');

            //Currency Converter Country Flag props
            properties = currency_converter_props.ccCountryFlag('xs');  
            callback.multiloop(client, ccCountryFlag , properties, 'xs');

            //Currency Converter Country Flag Img props
            properties = currency_converter_props.ccCountryFlagImg('xs');  
            callback.multiloop(client, ccCountryFlagImg , properties, 'xs');
            //client.click(ccCountryFlag);

          }  
    },

    "5 Mobile-Check for Currency Converter Part-1 Functionality ": function(client) {
            ccSelectInput = pageObj.elements.ccSelectInput.selector,
            ccInputFocus = pageObj.elements.ccInputFocus.selector,
            ccDropdownArrow = pageObj.elements.ccDropdownArrow.selector,
            ccGoButtonActive = pageObj.elements.ccGoButtonActive.selector,
            ccGoButtonFocus = pageObj.elements.ccGoButtonFocus.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //click on select input
            client.click(ccSelectInput);
            client.pause(3000);

            //Currency Converter Country Input Focus props
            properties = currency_converter_props.ccInputFocus('xs');  
            callback.multiloop(client, ccInputFocus , properties, 'xs');

            //click on Dropdown Arrow
            client.click(ccDropdownArrow);
            client.pause(3000);

            //selecting a city from the list
            client.click('.ui-autocomplete li:nth-child(5)');
            client.pause(3000);

            //Currency Converter Country Go Button Active props
            properties = currency_converter_props.ccGoButtonActive('xs');  
            callback.multiloop(client, ccGoButtonActive , properties, 'xs');
            
            client.source(() => {
                    console.log("--cta mouse down--"); 
            });
            client.waitForElementVisible(ccGoButtonActive, 6000);
            client.moveToElement(ccGoButtonActive,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);  

            //Currency Converter Country Go Button Focus props
            properties = currency_converter_props.ccGoButtonFocus('xs');  
            callback.multiloop(client, ccGoButtonFocus , properties, 'xs');

            //click on Go button to redirect to next page
            client.click(ccGoButtonActive);

          }    
    },

                         /**** STEP 2 *****/
    "6 Mobile-Check for Currency Converter Step 2 Wrapper, Heading properties": function(client) {
            ccShelfPadding2 = pageObj.elements.ccShelfPadding2.selector,
            ccHeading2 = pageObj.elements.ccHeading2.selector,
            ccWrapperStep2 = pageObj.elements.ccWrapperStep2.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //Currency Converter Part 2 Padding props
            properties = currency_converter_props.ccShelfPadding('xs');  
            callback.multiloop(client, ccShelfPadding2 , properties, 'xs');

            //Currency Converter Heading props
            properties = currency_converter_props.ccHeadingMobile('xs');  
            callback.multiloop(client, ccHeading2 , properties, 'xs');

             //Currency Converter Part 2 Wrapper props
            properties = currency_converter_props.ccWrapperStep2('xs');  
            callback.multiloop(client, ccWrapperStep2 , properties, 'xs');

          }  
    },

    "7 Mobile-Check for Country From Wrapper properties": function(client) {
            countryFromWrap = pageObj.elements.countryFromWrap.selector,
            countryFlag = pageObj.elements.countryFlag.selector,
            ccAmountWrapper = pageObj.elements.ccAmountWrapper.selector,
            inputAmount = pageObj.elements.inputAmount.selector,
            currencyCode = pageObj.elements.currencyCode.selector,
            conversionRate = pageObj.elements.conversionRate.selector,
            ccRichText = pageObj.elements.ccRichText.selector,
            
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //Currency Converter Country Flag props
            properties = currency_converter_props.countryFlag('xs');  
            callback.multiloop(client, countryFlag , properties, 'xs');

            //Currency Converter input Amount props
            properties = currency_converter_props.inputAmount('xs');  
            callback.multiloop(client, inputAmount , properties, 'xs');

            //Currency Converter currency Code props
            properties = currency_converter_props.currencyCode('xs');  
            callback.multiloop(client, currencyCode , properties, 'xs');

            //Currency Converter conversion Rate props
            properties = currency_converter_props.conversionRate('xs');  
            callback.multiloop(client, conversionRate , properties, 'xs');

            //Currency Converter Rich Text props
            properties = currency_converter_props.ccRichText('xs');  
            callback.multiloop(client, ccRichText , properties, 'xs'); 

          }  
    },

    "8 Mobile-Check for Currency Converter Switch properties": function(client) {
            switchWrap = pageObj.elements.switchWrap.selector,
            switchBtn = pageObj.elements.switchBtn.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //Currency Converter Switch Wrapper props
            properties = currency_converter_props.switchWrap('xs');  
            callback.multiloop(client, switchWrap , properties, 'xs');

            //verifying select Switch image
            client.expect.element(switchBtn).to.have.css('background-image').which.contains("Arrows-Mobile-1.pn");

            //Currency Converter Switch Btn props
            properties = currency_converter_props.switchBtnMobile('xs');  
            callback.multiloop(client, switchBtn , properties, 'xs');

          }  
    },

    "9 Mobile-Check for Country To properties": function(client) {
            countryToWrap = pageObj.elements.countryToWrap.selector,
            amntForeignRes = pageObj.elements.amntForeignRes.selector,
            amntForeignResSup = pageObj.elements.amntForeignResSup.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //Amount Foreign Result props
            properties = currency_converter_props.amntForeignRes('xs');  
            callback.multiloop(client, amntForeignRes , properties, 'xs');

            //Amount Foreign Result sup props
            properties = currency_converter_props.amntForeignResSup('xs');  
            callback.multiloop(client, amntForeignResSup , properties, 'xs');

          }  
    },

    "10 Mobile-Check for Step 2 Controls properties": function(client) {
            step2Controls = pageObj.elements.step2Controls.selector,
            ccCtaL = pageObj.elements.ccCtaL.selector,
            backBtn = pageObj.elements.backBtn.selector,
            ccCtaLFocus = pageObj.elements.ccCtaLFocus.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            // Step 2 Controls
            properties = currency_converter_props.step2Controls('xs');  
            callback.multiloop(client, step2Controls , properties, 'xs');

            //currency order Cta-L
            properties = currency_converter_props.ccCtaLMobile('xs');  
            callback.multiloop(client, ccCtaL , properties, 'xs');

            //cta icon
            properties = currency_converter_props.ctaIcon('xs');
            callback.pseudoSingleElem(client, ccCtaL,':after',properties);

            //back button
            properties = currency_converter_props.backBtn('xs');  
            callback.multiloop(client, backBtn , properties, 'xs');

            //currency order Cta Hover
            //currency order Cta Hover
            client.source(() => {
                    console.log("--cta hover--"); 
            });
            client.waitForElementVisible(ccCtaL, 3000);
            client.moveToElement(ccCtaL,  10,  10);
            properties = currency_converter_props.ccCtaLHover ('xs');  
            callback.multiloop(client, ccCtaL , properties, 'xs');

            client.source(() => {
                    console.log("--cta mouse down--"); 
            });
            client.waitForElementVisible(ccCtaL, 6000);
            client.moveToElement(ccCtaL,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);  

            //Currency Converter Country Go Button Focus props
            properties = currency_converter_props.ccCtaLFocus('xs');  
            callback.multiloop(client, ccCtaLFocus , properties, 'xs');


          }  
    },

    "11 Mobile-Step-2 Functionality(switch,back,Flag,Cta)": function(client) {
            backBtn = pageObj.elements.backBtn.selector,
            switchBtn = pageObj.elements.switchBtn.selector,
            ccCtaL = pageObj.elements.ccCtaL.selector,
            countryFlag = pageObj.elements.countryFlag.selector,
            ccHeading2 = pageObj.elements.ccHeading2.selector,
            inputAmount = pageObj.elements.inputAmount.selector,
            ccCountryFlag = pageObj.elements.ccCountryFlag.selector,
            ccShelfPadding = pageObj.elements.ccShelfPadding.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.click(ccCountryFlag);
            //enter amount in input
            amount = 5;
            console.log("input amount:",amount);

            //click on input and enter a value
            client.click(inputAmount)
            //.doubleClick();
            client.keys('\uE003');//BackSpace
            client.keys('\uE003');//BackSpace
            client.keys('\uE003');//BackSpace
            client.pause(1000)
            .setValue(inputAmount,amount);
            client.pause(3000);
            client.click(ccHeading2);
            client.pause(5000);

            //conversion price value
            client.getText('.cc-conversion-price', function(result){
            console.log("conversion-price value:",result.value);
                 conversionPrice =  parseFloat(result.value);
              return result.value;
            });
            
            //amount in foreign 
            client.getText('.country-to-wrap p', function(result){
            console.log("amount in foreign result:",result.value);
                foreignAmount = parseFloat(result.value);
              return result.value;
            });

            client.source(() => {
                  console.log("amount in foreign ",foreignAmount);
            });
            

            client.getText('.amount-in-foreign-result', function(result){
            console.log("amount in foreign result sup:",result.value);
              return result.value;
            });
            
            //click on switch button
            client.click(switchBtn);
            client.source(() => {
                    console.log("--switch button clicked--"); 
            });

            //click on back button
            client.click(backBtn, function(result) {
                this.verify.cssProperty(ccShelfPadding,'display','block');
                this.pause(1000);
            });

            client.source(() => {
                    console.log("--back button clicked--"); 
            });

            //click on Flag (top holiday destinations)
            client.click(ccCountryFlag);
            client.source(() => {
                    console.log("--Top Holiday Destinations Flag clicked--"); 
            });

            //click on Order Online
            client.click(ccCtaL);
            client.source(() => {
                    console.log("--Order Online cta clicked--"); 
            });
          }  
    },
    
    "Ending the session":function(client){
        client.end();
    }
    
}