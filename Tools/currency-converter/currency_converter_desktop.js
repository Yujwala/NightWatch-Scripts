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
  '@tags': ['desktop', 'currency-converter', 'currency-converter-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.NW_PER_CURRENCY_CONVERTER); 
            
    },
    
                        /**** STEP 1 *****/
    "1 Check for Currency Converter Wrapper properties": function(client) {
            ccWrapper = pageObj.elements.ccWrapper.selector,
            ccShelfPadding = pageObj.elements.ccShelfPadding.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //Currency Converter Background props
            properties = currency_converter_props.ccWrapper('lg');  
            callback.multiloop(client, ccWrapper , properties, 'lg');

            //Currency Converter Padding props
            properties = currency_converter_props.ccShelfPadding('lg');  
            callback.multiloop(client, ccShelfPadding , properties, 'lg');

          }  
    },

    "2 Check for Currency Converter Heading,Label properties": function(client) {
            ccHeading = pageObj.elements.ccHeading.selector,
            ccLabel = pageObj.elements.ccLabel.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //Currency Converter Heading props
            properties = currency_converter_props.ccHeading('lg');  
            callback.multiloop(client, ccHeading , properties, 'lg');

            //Currency Converter Label props
            properties = currency_converter_props.ccLabel('lg');  
            callback.multiloop(client, ccLabel , properties, 'lg');

          }  
    },

    "3 Check for Currency Converter Widget properties": function(client) {
            ccWidget = pageObj.elements.ccWidget.selector,
            ccSelectWrapper = pageObj.elements.ccSelectWrapper.selector,
            ccSelectInput = pageObj.elements.ccSelectInput.selector,
            ccDropdownArrow = pageObj.elements.ccDropdownArrow.selector;
            ccGoButton = pageObj.elements.ccGoButton.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //Currency Converter Widget props
            properties = currency_converter_props.ccWidget('lg');  
            callback.multiloop(client, ccWidget , properties, 'lg');

            //Currency Converter select wrappers props
            properties = currency_converter_props.ccSelectWrapper('lg');  
            callback.multiloop(client, ccSelectWrapper , properties, 'lg');

            //Currency Converter select input  props
            properties = currency_converter_props.ccSelectInput('lg');  
            callback.multiloop(client, ccSelectInput , properties, 'lg');

            //Currency Converter select arrow down  props
            properties = currency_converter_props.ccDropdownArrow('lg');  
            callback.multiloop(client, ccDropdownArrow , properties, 'lg');
            
            //verifying select Dropdown Arrow  image
            client.expect.element(ccDropdownArrow).to.have.css('background-image').which.contains("cc-dropdown-arrow.png");

            //Currency Converter select go button  props
            properties = currency_converter_props.ccGoButton('lg');  
            callback.multiloop(client, ccGoButton , properties, 'lg');

          }  
    },

    "4 Check for Currency Converter Popular Destinations properties": function(client) {
            ccSubHeadingTwo = pageObj.elements.ccSubHeadingTwo.selector,
            ccPopularDestinations = pageObj.elements.ccPopularDestinations.selector,
            ccCountryFlag = pageObj.elements.ccCountryFlag.selector;
            ccCountryFlagImg = pageObj.elements.ccCountryFlagImg.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //Currency Converter Sub Heading props
            properties = currency_converter_props.ccSubHeadingTwo('lg');  
            callback.multiloop(client, ccSubHeadingTwo , properties, 'lg');

            //Currency Converter Popular Destinations Wrapper props
            properties = currency_converter_props.ccPopularDestinations('lg');  
            callback.multiloop(client, ccPopularDestinations , properties, 'lg');

            //Currency Converter Country Flag props
            properties = currency_converter_props.ccCountryFlag('lg');  
            callback.multiloop(client, ccCountryFlag , properties, 'lg');

            //Currency Converter Country Flag Img props
            properties = currency_converter_props.ccCountryFlagImg('lg');  
            callback.multiloop(client, ccCountryFlagImg , properties, 'lg');
            //client.click(ccCountryFlag);

          }  
    },

    "5 Check for Currency Converter Part-1 Functionality ": function(client) {
            ccSelectInput = pageObj.elements.ccSelectInput.selector,
            ccInputFocus = pageObj.elements.ccInputFocus.selector,
            ccDropdownArrow = pageObj.elements.ccDropdownArrow.selector,
            ccGoButtonActive = pageObj.elements.ccGoButtonActive.selector,
            ccGoButtonFocus = pageObj.elements.ccGoButtonFocus.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //click on select input
            client.click(ccSelectInput);
            client.pause(1000);

            //Currency Converter Country Input Focus props
            properties = currency_converter_props.ccInputFocus('lg');  
            callback.multiloop(client, ccInputFocus , properties, 'lg');

            //click on Dropdown Arrow
            client.click(ccDropdownArrow);
            client.pause(1000);

            //selecting a city from the list
            client.click('.ui-autocomplete li:nth-child(5)');
            client.pause(1000);

            //Currency Converter Country Go Button Active props
            properties = currency_converter_props.ccGoButtonActive('lg');  
            callback.multiloop(client, ccGoButtonActive , properties, 'lg');
            
            client.source(() => {
                    console.log("--cta mouse down--"); 
            });
            client.waitForElementVisible(ccGoButtonActive, 6000);
            client.moveToElement(ccGoButtonActive,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);  

            //Currency Converter Country Go Button Focus props
            properties = currency_converter_props.ccGoButtonFocus('lg');  
            callback.multiloop(client, ccGoButtonFocus , properties, 'lg');

            //click on Go button to redirect to next page
            client.click(ccGoButtonActive);

          }    
    },

                         /**** STEP 2 *****/
    "6 Check for Currency Converter Step 2 Wrapper, Heading properties": function(client) {
            ccShelfPadding2 = pageObj.elements.ccShelfPadding2.selector,
            ccHeading2 = pageObj.elements.ccHeading2.selector,
            ccWrapperStep2 = pageObj.elements.ccWrapperStep2.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //Currency Converter Part 2 Padding props
            properties = currency_converter_props.ccShelfPadding('lg');  
            callback.multiloop(client, ccShelfPadding2 , properties, 'lg');

            //Currency Converter Heading props
            properties = currency_converter_props.ccHeading('lg');  
            callback.multiloop(client, ccHeading2 , properties, 'lg');

             //Currency Converter Part 2 Wrapper props
            properties = currency_converter_props.ccWrapperStep2('lg');  
            callback.multiloop(client, ccWrapperStep2 , properties, 'lg');

          }  
    },

    "7 Check for Country From Wrapper properties": function(client) {
            countryFromWrap = pageObj.elements.countryFromWrap.selector,
            countryFlag = pageObj.elements.countryFlag.selector,
            ccAmountWrapper = pageObj.elements.ccAmountWrapper.selector,
            inputAmount = pageObj.elements.inputAmount.selector,
            currencyCode = pageObj.elements.currencyCode.selector,
            conversionRate = pageObj.elements.conversionRate.selector,
            ccRichText = pageObj.elements.ccRichText.selector,
            
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //Currency Converter Country From Wrapper props
            properties = currency_converter_props.countryFromWrap('lg');  
            callback.multiloop(client, countryFromWrap , properties, 'lg');

            //Currency Converter Country Flag props
            properties = currency_converter_props.countryFlag('lg');  
            callback.multiloop(client, countryFlag , properties, 'lg');

            //Currency Converter Amount Wrapper props
            properties = currency_converter_props.ccAmountWrapper('lg');  
            callback.multiloop(client, ccAmountWrapper , properties, 'lg');

            //Currency Converter input Amount props
            properties = currency_converter_props.inputAmount('lg');  
            callback.multiloop(client, inputAmount , properties, 'lg');

            //Currency Converter currency Code props
            properties = currency_converter_props.currencyCode('lg');  
            callback.multiloop(client, currencyCode , properties, 'lg');

            //Currency Converter conversion Rate props
            properties = currency_converter_props.conversionRate('lg');  
            callback.multiloop(client, conversionRate , properties, 'lg');

            //Currency Converter Rich Text props
            properties = currency_converter_props.ccRichText('lg');  
            callback.multiloop(client, ccRichText , properties, 'lg'); 

          }  
    },

    "8 Check for Currency Converter Switch properties": function(client) {
            switchWrap = pageObj.elements.switchWrap.selector,
            switchBtn = pageObj.elements.switchBtn.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //Currency Converter Switch Wrapper props
            properties = currency_converter_props.switchWrap('lg');  
            callback.multiloop(client, switchWrap , properties, 'lg');

            //verifying select Switch image
            //client.expect.element(switchBtn).to.have.css('background-image').which.contains("Arrows-Desktop-1.png");

            //Currency Converter Switch Btn props
            properties = currency_converter_props.switchBtn('lg');  
            callback.multiloop(client, switchBtn , properties, 'lg');

          }  
    },

    "9 Check for Country To properties": function(client) {
            countryToWrap = pageObj.elements.countryToWrap.selector,
            amntForeignRes = pageObj.elements.amntForeignRes.selector,
            amntForeignResSup = pageObj.elements.amntForeignResSup.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //Country To Wrapper props
            properties = currency_converter_props.countryToWrap('lg');  
            callback.multiloop(client, countryToWrap , properties, 'lg');

            //Amount Foreign Result props
            properties = currency_converter_props.amntForeignRes('lg');  
            callback.multiloop(client, amntForeignRes , properties, 'lg');

            //Amount Foreign Result sup props
            properties = currency_converter_props.amntForeignResSup('lg');  
            callback.multiloop(client, amntForeignResSup , properties, 'lg');

          }  
    },

    "10 Check for Step 2 Controls properties": function(client) {
            step2Controls = pageObj.elements.step2Controls.selector,
            ccCtaL = pageObj.elements.ccCtaL.selector,
            backBtn = pageObj.elements.backBtn.selector,
            ccCtaLFocus = pageObj.elements.ccCtaLFocus.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            // Step 2 Controls
            properties = currency_converter_props.step2Controls('lg');  
            callback.multiloop(client, step2Controls , properties, 'lg');

            //currency order Cta-L
            properties = currency_converter_props.ccCtaL('lg');  
            callback.multiloop(client, ccCtaL , properties, 'lg');

            //cta icon
            properties = currency_converter_props.ctaIcon('lg');
            callback.pseudoSingleElem(client, ccCtaL,':after',properties);

            //back button
            properties = currency_converter_props.backBtn('lg');  
            callback.multiloop(client, backBtn , properties, 'lg');

            //currency order Cta Hover
            client.source(() => {
                    console.log("--cta hover--"); 
            });
            client.waitForElementVisible(ccCtaL, 3000);
            client.moveToElement(ccCtaL,  10,  10);
            properties = currency_converter_props.ccCtaLHover ('lg');  
            callback.multiloop(client, ccCtaL , properties, 'lg');

            //currency order Cta Focus
            client.source(() => {
                    console.log("--cta mouse down--"); 
            });
            client.waitForElementVisible(ccCtaL, 3000);
            client.moveToElement(ccCtaL,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);  

            //Currency Converter Country Go Button Focus props
            properties = currency_converter_props.ccCtaLFocus('lg');  
            callback.multiloop(client, ccCtaLFocus , properties, 'lg');


          }  
    },

    "11 Step-2 Functionality(switch,back,Flag,Cta)": function(client) {
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
            
            //enter amount in input
            amount = 5;
            console.log("input amount:",amount);

            //click on input and enter a value
            client.click(inputAmount)
            .doubleClick()
            .pause(1000)
            .setValue(inputAmount,amount);
            client.pause(500);
            client.click(ccHeading2);
            client.pause(500);

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



