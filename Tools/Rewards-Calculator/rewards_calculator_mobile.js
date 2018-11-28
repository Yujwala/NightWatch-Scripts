var rewards_calculator_props = require('./rewards_calculator_properties.js'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
 PageUrl = pageurl.RBS_PER_REWARD_CALCULATOR_MOBILE;

function globalProps(client){
    pageObj = client.page.rewards_calculator_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;   
}

module.exports = {
  '@tags': ['mobile', 'rewards-calculator', 'rewards-calculator-mobile'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,PageUrl); 
            client.pause(5000);            
    },

    "1.Checking the properties of Main Division and Header": function(client)
    {
      toolMainDivCls = pageObj.elements.mainDivisionMob.selector,
      toolMainHeaderCls = pageObj.elements.headerSectionMob.selector,
      toolMainHeaderTextCls = pageObj.elements.headerSectionTextMob.selector,
        globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
        //reward Calculator's Main Template Div Props
        properties = rewards_calculator_props.rewCalMainDivMobProps('xs');  
        callback.multiloop(client, toolMainDivCls , properties, 'xs');

        //reward Calculator's Main Header Props
        properties = rewards_calculator_props.mainDivHeaderMobProps('xs');  
        callback.multiloop(client, toolMainHeaderCls , properties, 'xs');

        //Header Section Text Props
        properties = rewards_calculator_props.mainDivTextMobProps('xs');  
        callback.multiloop(client,  toolMainHeaderTextCls , properties, 'xs');
      }     
     },

     "2.Checking the properties of Card Wrapper": function(client)
     {
       cardWrapperCls = pageObj.elements.cardWrapperMob.selector,
       cardWrapperHeadingCls = pageObj.elements.cardWrapperHeadingMob.selector,
       cardWrapperTextCls = pageObj.elements.cardWrapperTextMob.selector,
         globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
         //reward Calculator's Main Template Div Props
         properties = rewards_calculator_props.cardWrapperMobProps('xs');  
         callback.multiloop(client, cardWrapperCls , properties, 'xs');
 
         //reward Calculator's Main Header Props
         properties = rewards_calculator_props.cardWrapperHeadingMobProps('xs');  
         callback.multiloop(client, cardWrapperHeadingCls , properties, 'xs');
 
         //Header Section Text Props
         properties = rewards_calculator_props.cardWrapperTextMobProps('xs');  
         callback.multiloop(client,  cardWrapperTextCls , properties, 'xs');
       }     
      },

      "3.Checking the properties of calculate Rewards Button": function(client)
      {
        calculateButtonCls = pageObj.elements.calculateButtonMob.selector,
        calculateButtonHoverCls = pageObj.elements.calculateButtonHoverMob.selector,
        calculateButtonFocusCls = pageObj.elements.calculateButtonFocusMob.selector,
          globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
          //reward Calculator's Main Template Div Props
          properties = rewards_calculator_props.calButtonMobProps('xs');  
          callback.multiloop(client, calculateButtonCls , properties, 'xs');
  
        }     
       },

       "4.Checking the Hover Properties of calculate Rewards button":function(client)
       {
        calculateButtonCls = pageObj.elements.calculateButtonMob.selector;
        calculateButtonHoverCls = pageObj.elements.calculateButtonHoverMob.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
         client.elements('css selector',  calculateButtonHoverCls, results => {
           if (results.value.length > 0) {
                 //cheking the hover properties of Calculate My Rewards Button
                 client.pause(3000);
                 props = rewards_calculator_props.calButtonHoverMobProps('xs');
                 client.moveToElement(calculateButtonCls ,10,10);
                 client.pause(5000);
                 callback.singleElem(client,calculateButtonHoverCls, props, 'xs');                              
                   }
                });                       
               }        
              },
   
        "5.Checking the focus Properties of My Rewards button": function (client) 
        {
            calculateButtonCls = pageObj.elements.calculateButtonMob.selector;
            calculateButtonFocusCls = pageObj.elements.calculateButtonFocusMob.selector,
         client.moveToElement(calculateButtonCls,10,10);
         client.mouseButtonDown(calculateButtonCls);   
         client.pause(3000);                          
         client.elements('css selector',  calculateButtonFocusCls, results => {
         if (results.value.length > 0) {
           //MyRewards Button Focus Properties
            pro = rewards_calculator_props.calBtnFocusMobProps('xs');
             callback.singleElem(client,  calculateButtonFocusCls, pro, 'xs');
                   }
                });
              client.pause(3000);      
              client.click(calculateButtonCls);                  
        },

        
      "6.Checking the properties of Header Wrapper And Heading in Page Two": function(client)
      {
        headWrapperCls = pageObj.elements.pageTwoHeadWrapperMob.selector,
        headWrapperHeaderCls = pageObj.elements.pageTwoHeadWrapperHeaderMob.selector,
        headWrapperHeaderTwoCls = pageObj.elements.pageTwoHeadWrapperHeadertwo.selector,
          globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
          //reward Calculator's Main Template Div Props
          properties = rewards_calculator_props.headWrapperMobProps('xs');  
          callback.multiloop(client,  headWrapperCls , properties, 'xs');

           //reward Calculator's Main Template Div Props
           properties = rewards_calculator_props.headWrapperHeadMobProps('xs');  
           callback.multiloop(client, headWrapperHeaderCls , properties, 'xs');

            //reward Calculator's Main Template Div Props
          properties = rewards_calculator_props.headWrapperHeadTwoMobProps('xs');  
          callback.multiloop(client, headWrapperHeaderTwoCls , properties, 'xs');
  
        }     
       },
       "7.Checking the properties of Questions Wrapper and Heading": function(client)
       {
         questionsWrapperCls = pageObj.elements.pageTwoQuestionsWrapperMob.selector,
         questionsWrapperHeaderCls = pageObj.elements.pageTwoQuestionWrapperHeading.selector,
           globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
           //reward Calculator's Main Template Div Props
           properties = rewards_calculator_props.questionsWrapperMobProps('xs');  
           callback.multiloop(client, questionsWrapperCls , properties, 'xs');
 
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.questionsWrapperHeadMobProps('xs');  
            callback.multiloop(client,  questionsWrapperHeaderCls , properties, 'xs');
   
         }     
        },

        "8.Checking the properties of Images and Image Labels": function(client)
       {
         ImageIconsCls = pageObj.elements.pageTwoImagesMob.selector,
         ImageIconLabelsCls = pageObj.elements.pageTwoImageHeadingMob.selector,
           globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
           //reward Calculator's Main Template Div Props
           properties = rewards_calculator_props.imageIconsMobProps('xs');  
           callback.multiloop(client, ImageIconsCls , properties, 'xs');
 
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.imageIconLabelsMobProps('xs');  
            callback.multiloop(client,  ImageIconLabelsCls , properties, 'xs');
   
         }     
        },

        "9.Checking the properties of Inputs and DropDowns in Page Two": function(client)
       {
         textInputCls = pageObj.elements.pageTwoInputsMob.selector,
         dataDropDownCls = pageObj.elements.pageTwoDropdownsMob.selector,
           globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
           //reward Calculator's Main Template Div Props
           properties = rewards_calculator_props.textInputMobProps('xs');  
           callback.multiloop(client, textInputCls , properties, 'xs');
 
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.dropDownMobProps('xs');  
            callback.multiloop(client,  dataDropDownCls , properties, 'xs');
   
         }     
        },

        
        "10.Checking the properties of Pound Symbols and Per Symbols": function(client)
       {
         poundSymbolCls = pageObj.elements.pageTwoPoundSymbolMob.selector,
         perSymbolCls = pageObj.elements.pageTwoPerSymbolMob.selector,
           globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
           //reward Calculator's Main Template Div Props
           properties = rewards_calculator_props.poundSymbolMobProps('xs');  
           callback.multiloop(client,  poundSymbolCls , properties, 'xs');
 
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.perSymbolMobProps('xs');  
            callback.multiloop(client,  perSymbolCls , properties, 'xs');
   
         }     
        },

        "11.Checking the properties of Slider Marker and Slider in Page two": function(client)
        {
          SliderMarkerCls = pageObj.elements.pageTwoSliderMarkerMob.selector,
          SliderCls = pageObj.elements.pageTwoSliderMob.selector,
            globalProps(client);
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.sliderMarkerMobProps('xs');  
            callback.multiloop(client,  SliderMarkerCls , properties, 'xs');
  
             //reward Calculator's Main Template Div Props
             properties = rewards_calculator_props.sliderMobProps('xs');  
             callback.multiloop(client,  SliderCls , properties, 'xs');
    
          }     
         },
         
         "12.Checking the properties of Rewards Result Text": function(client)
        {
          rewardsResultTextCls = pageObj.elements.rewardsResultTextMob.selector,
            globalProps(client);
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.rewardsResultsMobProps('xs');  
            callback.multiloop(client,  rewardsResultTextCls , properties, 'xs');
  
          }     
         },

         "13.Checking the properties of Next and Back Buttons in Page Two": function(client)
        {
          nextButtonCls = pageObj.elements.pageTwoNextButtonMob.selector,
          backButtonCls = pageObj.elements.backButtonLinkMob.selector,
          nextButtonFocusCls = pageObj.elements.nextButtonFocusMob.selector,
            globalProps(client);
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.nextButtonMobProps('xs');  
            callback.multiloop(client,  nextButtonCls  , properties, 'xs');
  
             //reward Calculator's Main Template Div Props
             properties = rewards_calculator_props.backButtonMobProps('xs');  
             callback.multiloop(client,  backButtonCls , properties, 'xs');

             //checking the Focus Properties of Next Button
             client.moveToElement(nextButtonCls,10,10);
             client.mouseButtonDown(nextButtonCls);   
             client.pause(3000);                          
             client.elements('css selector',  nextButtonFocusCls, results => {
             if (results.value.length > 0) {
               //MyRewards Button Focus Properties
                pro = rewards_calculator_props.nextBtnFocusMobProps('xs');
                 callback.singleElem(client,  nextButtonFocusCls, pro, 'xs');
                       }
                    });
                  client.pause(3000);       
    
          }     
         },

         "14.Checking the properties of Division Three in Page Two": function(client)
         {
           pgtwodivthreeCls = pageObj.elements.pageTwoDivThreeMob.selector,
           divthreeHeadCls = pageObj.elements. divThreeHeadingMob.selector,
           divthreeTextCls = pageObj.elements.divThreeTextMob.selector,
             globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
             //reward Calculator's Main Template Div Props
             properties = rewards_calculator_props.divthreeMobProps('xs');  
             callback.multiloop(client,  pgtwodivthreeCls , properties, 'xs');

             //reward Calculator's Main Template Div Props
             properties = rewards_calculator_props.divthreeheadMobProps('xs');  
             callback.multiloop(client,  divthreeHeadCls , properties, 'xs');

             //reward Calculator's Main Template Div Props
             properties = rewards_calculator_props.divthreetextMobProps('xs');  
             callback.multiloop(client,  divthreeTextCls  , properties, 'xs');
   
           }     
          },

          "15.Validating the Results after the Providing Data Inputs": function(client) {
            optionsDropDownCls = pageObj.elements.pageTwoDropdownsMob.selector,
            optionTwoClick = pageObj.elements.dropDownListOptionTwoClick.selector,
            NextButtonCls = pageObj.elements.pageTwoNextButton.selector,
            commonClickCls = pageObj.elements.commonClick.selector,
            rewardValues = pageObj.elements.rewardValues.selector,
            totalValue = pageObj.elements.totalValue.selector,
            decimalValue = pageObj.elements.decimalValue.selector,
              globalProps(client);
        
            //Entering The Values
            client.clearValue('input[id=new_form_internet]');
            client.setValue('input[id=new_form_internet]','254');
            client.click(commonClickCls);
            client.pause(2000);
          
            client.clearValue('input[id=new_form_councilTax]');
            client.setValue('input[id=new_form_councilTax]','355');
            client.click(commonClickCls);
            client.pause(2000);
        
            client.clearValue('input[id=new_form_electricity]');
            client.setValue('input[id=new_form_electricity]','357');
            client.click(commonClickCls);
            client.pause(2000);
            
            client.clearValue('input[id=new_form_mobile]');
            client.setValue('input[id=new_form_mobile]','352');
            client.click(commonClickCls);
            client.pause(2000);


            client.clearValue('input[id=new_form_tvpackage]');
            client.setValue('input[id=new_form_tvpackage]','200');
            client.click(commonClickCls);
            client.pause(2000);

            client.clearValue('input[id=new_form_gas]');
            client.setValue('input[id=new_form_gas]','300');
            client.click(commonClickCls);
            client.pause(2000);
          
            function validateInput(client, rewardValues, totalValue) {
               var incomeval = 0,totalval, individualval= 0, i=1,totalvalone;
                client.elements('css selector', rewardValues, results => {
                results.value.forEach(function (element, index) {
                client.elementIdText(element.ELEMENT, function (results1) {
                    client.pause(4000);
                    individualval = parseFloat(results1.value);
                    incomeval += parseFloat(results1.value);
                    console.log("the Calculated Reward for input "+ i +" "+"is: " + individualval);
                    i+=1;
                        });
                    })
                    return incomeval;
                }); 
             client.getText(totalValue, function (results) {
                    console.log("The total value is: " + results.value);
                    totalval = results.value;
                });
                client.getText(decimalValue, function (results) {
                    console.log("The total value is: " + results.value);
        
                    if(results.value==00){
                        totalvalone="";
                        }
                        else if(results.value.endsWith(0))
                        {
                        totalvalone=results.value.slice(0,2);
                        }
                        else{
                        totalvalone = results.value;
                        } 
                });   
        
                client.source(() => {
                    client.assert.equal("" + incomeval,"" + totalval + ""+ totalvalone);
            
                });
            }
            validateInput(client,rewardValues,totalValue); 
                   
        },

        "16.Checking the Hover Properties of links in page Three":function(client)
       {
        divthreeLinksCls = pageObj.elements.divThreeLinkMob.selector;
        divThreeLinksHoverCls = pageObj.elements.divThreeLinkHoverMob.selector;
        nextButtonCls = pageObj.elements.pageTwoNextButtonMob.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
         client.elements('css selector',  divThreeLinksHoverCls, results => {
           if (results.value.length > 0) {
                 //cheking the hover properties of Calculate My Rewards Button
                 client.pause(3000);
                 props = rewards_calculator_props.divThreeLinksHoverMobProps('xs');
                 client.moveToElement(divthreeLinksCls ,10,10);
                 client.pause(5000);
                 callback.singleElem(client,divThreeLinksHoverCls, props, 'xs');                              
                   }
                });                       
               }   
               client.click(nextButtonCls);     
              },

        "17.Checking the properties of Heading in Page Three": function(client)
              {
                pgthreeheadCls = pageObj.elements.pageThreeHeadingMob.selector,
                pgthreeHeadsecCls = pageObj.elements. divThreeHeadingMob.selector,
                divthreeheadmainvalCls = pageObj.elements. pageThreeHeadingMainValue.selector,
                  globalProps(client);
                if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
                  //reward Calculator's Main Template Div Props
                  properties = rewards_calculator_props.pgthreeHeadMobProps('xs');  
                  callback.singleElem(client,   pgthreeheadCls , properties, 'xs');
     
                  //reward Calculator's Main Template Div Props
                  properties = rewards_calculator_props.pgHeadMainValMobProps('xs');  
                  callback.singleElem(client,  divthreeheadmainvalCls  , properties, 'xs');
        
                }     
          },

    "18.Checking The properties of Images in Page Three":function(client)
   {
   
    pgThreeimageOneCls = pageObj.elements.pageThreeImageMob.selector,
    pgThreeimageTwoCls = pageObj.elements.pageThreeImageTwoMob.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice){
  
    //verifying the Properties of Images
  
   
      client.expect.element(pgThreeimageOneCls).to.have.attribute('src').which.contains(property.$iconname);

    client.expect.element(pgThreeimageTwoCls).to.have.attribute('src').which.contains(property.$iconnametwo);
 

    }
  },

  "19.Checking the properties of Text in Page three": function(client)
        {
          pgThreeDovTextTextCls = pageObj.elements.pageThreeDivTextMob.selector,
            globalProps(client);
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
            //reward Calculator's Main Template Div Props
            properties = rewards_calculator_props.pgThreeDivTextMobProps('xs');  
            callback.singleElem(client,  pgThreeDovTextTextCls , properties, 'xs');
  
          }     
         },
        

}