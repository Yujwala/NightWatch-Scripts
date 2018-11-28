var rewards_calculator_props = require('./rewards_calculator_properties.js'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
var PageUrl = pageurl.NW_PER_REWARD_CALCULATOR;

function globalProps(client){
    pageObj = client.page.rewards_calculator_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;   
}

module.exports = {
  '@tags': ['desktop', 'rewards-calculator', 'rewards-calculator-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,PageUrl); 
            client.pause(5000);            
    },

    "1.Checking the properties of Main Template Division and Header": function(client)
    {
      toolMainDivCls = pageObj.elements.rewardCalculatormaindiv.selector,
      toolMainHeaderCls = pageObj.elements.mainHeader.selector,
      toolHeaderSectionTextCls = pageObj.elements.headertext.selector,
        globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
        //reward Calculator's Main Template Div Props
        properties = rewards_calculator_props.rewCalMainDivProps('lg');  
        callback.multiloop(client, toolMainDivCls , properties, 'lg');

        //reward Calculator's Main Header Props
        properties = rewards_calculator_props.mainDivHeaderProps('lg');  
        callback.multiloop(client, toolMainHeaderCls , properties, 'lg');

        //Header Section Text Props
        properties = rewards_calculator_props.mainDivTextProps('lg');  
        callback.multiloop(client, toolHeaderSectionTextCls , properties, 'lg');
      }     
     },

    "2.Checking all the properties of Card Wrapper ": function(client)
    {
       toolMainDivCls = pageObj.elements.cardWrapper.selector,
       toolMainHeaderTextCls = pageObj.elements.cardWrapperText.selector,
       cardWrapperimgOneCls = pageObj.elements.cardWrapperImageOne.selector,
       cardWrapperimgTwoCls = pageObj.elements.cardWrapperImageTwo.selector,
       cardWrapperimgThreeCls = pageObj.elements.cardWrapperImageThree.selector,
         globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
         //Card Wrapper Division Properties
         properties = rewards_calculator_props.cardWrapperProps('lg');  
         callback.multiloop(client, toolMainDivCls , properties, 'lg');
 
         //Card Wrapper Text Properties
         properties = rewards_calculator_props.cardWrapperTextProps('lg');  
         rteCallback.rteElem(client, toolMainHeaderTextCls, properties,'p', 'lg');

         //checking the Images inside the Card Wrapper
        properties = rewards_calculator_props.cardWrapperImageProps('lg'); 
        client.expect.element(cardWrapperimgOneCls).to.have.attribute('src').which.contains(property.$cardWrapperImageOne) 
        callback.singleElem(client, cardWrapperimgOneCls , properties, 'lg');

        //checking the Images inside the Card Wrapper
        properties = rewards_calculator_props.cardWrapperImageTwoProps('lg'); 
        client.expect.element(cardWrapperimgTwoCls).to.have.attribute('src').which.contains(property.$cardWrapperImageTwo) 
        callback.singleElem(client, cardWrapperimgTwoCls , properties, 'lg');

        //checking the Images inside the Card Wrapper
        properties = rewards_calculator_props.cardWrapperImageTwoProps('lg'); 
        client.expect.element(cardWrapperimgThreeCls).to.have.attribute('src').which.contains(property.$cardWrapperImageThree) 
        callback.singleElem(client, cardWrapperimgThreeCls , properties, 'lg');

       }     
      },
      
     "3.Checking the properties of Calculate My rewards Button": function(client)
    {
      calculateRewardsBtnCls = pageObj.elements.calculateButton.selector,
      globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
      //Card Wrapper Division Properties
      properties = rewards_calculator_props.calRewardsButtonProps('lg');  
      callback.multiloop(client, calculateRewardsBtnCls , properties, 'lg');
      }     
     },

    "4.Checking the Hover Properties of My Rewards button":function(client)
    {
     var calRewardsHoverButtonCls = pageObj.elements.calculateButton.selector;
     var calRewardsHoverCls = pageObj.elements.calculateButtonHover.selector;
     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.elements('css selector', calRewardsHoverButtonCls, results => {
        if (results.value.length > 0) {
              //cheking the hover properties of Calculate My Rewards Button
              props = rewards_calculator_props.calRewardsButtonHoveProps('lg');
              client.moveToElement(calRewardsHoverButtonCls,10,10);
              client.pause(5000);
              callback.singleElem(client,calRewardsHoverCls, props, 'lg');                              
                }
             });                       
            }        
           },

     "5.Checking the focus Properties of My Rewards button": function (client) 
     {
      var calRewardsbtnFocusCls = pageObj.elements.calculateButton.selector;
      var calRewardsFocusCls = pageObj.elements.calculateButtonFocus.selector;
      client.moveToElement(calRewardsbtnFocusCls,10,10);
      client.mouseButtonDown(calRewardsbtnFocusCls);   
      client.pause(3000);                          
      client.elements('css selector', calRewardsFocusCls, results => {
      if (results.value.length > 0) {
        //Email Content Input Focus Properties
         pro = rewards_calculator_props.calRewardsBtnFocusProps('lg');
          callback.singleElem(client, calRewardsFocusCls, pro, 'lg');
                }
             });
           client.pause(3000);      
           client.click(calRewardsbtnFocusCls);                  
     },

     "6.Checking the properties of Questions Main Division": function(client)
     {
       questionsMainDivCls = pageObj.elements.questionsMainDiv.selector,
       questionsMainDivHeaderCls =pageObj.elements.questionsDivHeadWrapper.selector,
       questionsMainDivHeaderHeadingCls = pageObj.elements.questionsDivHeadWrapperHeader.selector,
       questionsMainDivHeadingTextCls =pageObj.elements.questionsDivHeadWrapperText.selector,
       globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
       //Questions Main Division Properties
       properties = rewards_calculator_props.questionsMainDivProps('lg');  
       callback.multiloop(client, questionsMainDivCls , properties, 'lg');

       //Questions Main Div Header Wrapper Properties
       properties = rewards_calculator_props.qestdivHeadWrapperProps('lg');  
       callback.multiloop(client, questionsMainDivHeaderCls , properties, 'lg');
       

       //Questions Main Div Header Wrapper Heading Properties
        properties = rewards_calculator_props.HeadWrapperHeadingProps('lg');  
        callback.multiloop(client, questionsMainDivHeaderHeadingCls , properties, 'lg');

       //Questions Main Div Header Wrapper Heading Text Properties
        properties = rewards_calculator_props.HeadWrapperHeadingTextProps('lg');  
        rteCallback.rteElem(client, questionsMainDivHeadingTextCls, properties,'p:nth-child(2)', 'lg');

       }     
      },

      "7.Checking the properties of Questions Division's Question Wrapper": function(client)
     {
       questionsDivQuestWrapperCls = pageObj.elements.questionsDivQuestionWrapper.selector,
       questionsDivQuestWrapperHeadingCls = pageObj.elements.questionsWrapperHeading.selector,
       questionsDivClickableIconsCls = pageObj.elements.clickableIcons.selector, 
       questionsDivClickableIconsTextCls = pageObj.elements.clickableIconsText.selector,
      
       globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
       //Questions Division Question Wrapper Properties
       properties = rewards_calculator_props.qestdivQuestionWrapperProps('lg');  
       callback.multiloop(client, questionsDivQuestWrapperCls , properties, 'lg');

       //Questions Division Question Wrapper Heading Properties
       properties = rewards_calculator_props.questionWrapperHeadingProps('lg');  
       callback.multiloop(client, questionsDivQuestWrapperHeadingCls , properties, 'lg');

       //Verifying Clickable Icons Properties
       properties = rewards_calculator_props.clickIconProps('lg');  
       callback.multiloop(client, questionsDivClickableIconsCls , properties, 'lg');

       //Verifying Clickable Icons Text Properties
       properties = rewards_calculator_props.clickIconTextProps('lg');  
       callback.singleElem(client, questionsDivClickableIconsTextCls , properties, 'lg');
       }
      },

      "8.Checking the properties of Back and Next Buttons": function(client)
     {
      questionsDivBackButtonCls = pageObj.elements.pageTwoBackButton.selector,
      questionsDivNextButtonCls = pageObj.elements.pageTwoNextButton.selector,

      globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      //Verifying Back Button Properties
      properties = rewards_calculator_props.backButtonProps('lg');  
      callback.singleElem(client, questionsDivBackButtonCls , properties, 'lg');

      //Verifying Next Button Properties
      properties = rewards_calculator_props.nextButtonProps('lg');  
      callback.singleElem(client, questionsDivNextButtonCls , properties, 'lg');
      
      }
    },

    "9.checking the Heading and Text Properties of Third Div in Page Two":function(client)
    {
     thirdDivHeadingCls = pageObj.elements.pageTwoDivthreeHeading.selector,
     thirdDivTextCls = pageObj.elements.pageTwoDivThreeText.selector,

     globalProps(client);
     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     //Verifying the Heading  Properties of Division Three
     properties = rewards_calculator_props.divThreeHeadingProps('lg');  
     callback.multiloop(client, thirdDivHeadingCls , properties, 'lg');

     //Verifying the text Properties of Division Three
     properties = rewards_calculator_props.divThreeTextProps('lg');  
     callback.multiloop(client, thirdDivTextCls , properties, 'lg');
     
     }
     
   },

   "10.Checking the Hover Properties of Links":function(client)
    {
     var linksCls = pageObj.elements.divThreeLinks.selector;
     var linksHoverCls = pageObj.elements.divThreeLinksHover.selector;
     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
              //cheking the hover properties of Links
              props = rewards_calculator_props.linkHoverProps('lg');
              client.moveToElement(linksCls,10,10);
              client.pause(5000);
              callback.singleElem(client,linksHoverCls, props, 'lg');                              
                                   
            }        
      },
      "11.checking the Properties and functionality of Pagination":function(client)
      {
       paginationCls = pageObj.elements.secondPagePagination.selector,
       paginationActiveCls = pageObj.elements.paginationActiveComponent.selector,
       paginationInactiveCls = pageObj.elements.paginationInactiveComponent.selector,
       iconClicksCls = pageObj.elements.pageTwoClickIcons.selector,
       NextButtonCls = pageObj.elements.pageTwoNextButton.selector,
       globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
       //Verifying Pagination Properties
       properties = rewards_calculator_props.paginationProps('lg');  
       callback.singleElem(client, paginationCls , properties, 'lg');

       //verifying the active and Inactive Pagination option in Page One
       client.assert.cssProperty(paginationActiveCls,"background-color","rgba(66, 20, 95, 1)");  
       client.assert.cssProperty(paginationActiveCls,"display","list-item"); 
       client.assert.cssProperty(paginationInactiveCls,"background-color","rgba(180, 169, 159, 1)"); 
       client.assert.cssProperty(paginationInactiveCls,"display","list-item");  
       //clicking the icons
//       client.elements('css selector', iconClicksCls, results => {
//        if (results.value.length > 0) {
 //       results.value.forEach(element => {
  //      client.elementIdClick(element.ELEMENT);
  //      client.pause(2000);
  //         });
  //     }
  //  });
        client.click(NextButtonCls);

        //verifying the active and Inactive Pagination option in page Two
       client.assert.cssProperty(paginationActiveCls,"background-color","rgba(180, 169, 159, 1)");  
       client.assert.cssProperty(paginationActiveCls,"display","list-item"); 
       client.assert.cssProperty(paginationInactiveCls,"background-color","rgba(66, 20, 95, 1)"); 
       client.assert.cssProperty(paginationInactiveCls,"display","list-item"); 

       }
     },

     
    "12.checking the Heading Properties in Page Three":function(client)
    {
     topContentHeadingCls = pageObj.elements.pageThreeHeaders.selector,
     topContentHeadingTwoCls = pageObj.elements.pageThreeHeaderTwo.selector,
     subHeadingCls = pageObj.elements.pageThreeHouseHoldbillsHeading.selector,
     subHeadingTwoCls = pageObj.elements. pageThreeAnnualRewardsHeading.selector,

     globalProps(client);
     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     //Verifying the Heading  Properties of Division Three
     properties = rewards_calculator_props.pageThreeHeadProps('lg');  
     callback.multiloop(client, topContentHeadingCls , properties, 'lg');

     properties = rewards_calculator_props.pageThreeHeadTwoProps('lg');  
     callback.multiloop(client,  topContentHeadingTwoCls , properties, 'lg');


     //verifying the subheading properties
     properties = rewards_calculator_props.subHeadingProps('lg');  
     callback.multiloop(client, subHeadingCls , properties, 'lg');
     
     properties = rewards_calculator_props.subHeadingProps('lg');  
     callback.multiloop(client, subHeadingTwoCls , properties, 'lg');
     
     }
     
   },

   "13.checking the Icon Image and Heading Properties in Page Three":function(client)
   {
    pageThreeIconsCls = pageObj.elements.pageThreeIconImages.selector,
    topContentHeadingTwoCls = pageObj.elements.pageThreeIconHeaders.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Icon Image Properties
    properties = rewards_calculator_props.pageThreeIconsProps('lg');  
    callback.multiloop(client,  pageThreeIconsCls , properties, 'lg');

    //Verifying the Heading Properties of the Icons
    properties = rewards_calculator_props.pageThreeIconHeaderProps('lg');  
    callback.multiloop(client,  topContentHeadingTwoCls , properties, 'lg');
    }
  },

  "14.Checking The Properties of Inputs and Dropdowns in Page three":function(client)
   {
    pageThreeInputsCls = pageObj.elements.pageThreeTextInput.selector,
    PageThreeDropDownsCls = pageObj.elements.pageThreeDropDownList.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Properties of The TextInputs
    properties = rewards_calculator_props.pageThreeSliderInputProps('lg');  
    callback.multiloop(client,  pageThreeInputsCls , properties, 'lg');

    //Verifying the Properties of DropDowns
    properties = rewards_calculator_props.pageThreeDropDownProps('lg');  
    callback.multiloop(client,  PageThreeDropDownsCls , properties, 'lg');
    }
  },

  "15.Checking The Properties of slider and Result Text in Page three":function(client)
   {
    pageThreeSliderCls = pageObj.elements.pageThreeSlider.selector,
    PageThreeCalValueCls = pageObj.elements.pageThreeCalcValue.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Properties of The Slider 
    properties = rewards_calculator_props.sliderMarkerProps('lg');  
    callback.singleElem(client,  pageThreeSliderCls , properties, 'lg');

    //Verifying the Properties of Calculated Value Text
    properties = rewards_calculator_props.calculatedValueProps('lg');  
    callback.singleElem(client,  PageThreeCalValueCls , properties, 'lg');
    }
  },

  "16.Checking The Properties of Pound and Per Labels":function(client)
  {
   pageThreePoundCls = pageObj.elements.pageThreePoundSymbol.selector,
   PageThreePerCls = pageObj.elements.pageThreePerLabel.selector,
   globalProps(client);
   if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
   //Verifying the Properties Pound Label
   properties = rewards_calculator_props.PoundLabelProps('lg');  
   callback.multiloop(client, pageThreePoundCls , properties, 'lg');

   //Verifying the Properties of Per Label
   properties = rewards_calculator_props.PerLabelProps('lg');  
   callback.multiloop(client, PageThreePerCls , properties, 'lg');
   }
 },

 "17.Validating the Results after the Providing Data Inputs": function(client) {
  optionsDropDownCls = pageObj.elements.pageThreeDropDownList.selector,
  dropDownOptionThreeCls = pageObj.elements.dropDownListOptionThree.selector,
  optionTwoClick = pageObj.elements.dropDownListOptionTwoClick.selector,
  NextButtonCls = pageObj.elements.pageTwoNextButton.selector,
  commonClickCls = pageObj.elements.commonClick.selector,
  rewardValues = pageObj.elements.rewardValues.selector,
  totalValue = pageObj.elements.totalValue.selector,
  decimalValue = pageObj.elements.decimalValue.selector,
    globalProps(client);

  //Entering The Values
  client.clearValue('input[id=new_form_internet]');
  client.setValue('input[id=new_form_internet]','350');
  client.click(commonClickCls);
  client.pause(2000);

  client.clearValue('input[id=new_form_councilTax]');
  client.setValue('input[id=new_form_councilTax]','250');
  client.click(commonClickCls);
  client.pause(2000);

  client.clearValue('input[id=new_form_electricity]');
  client.setValue('input[id=new_form_electricity]','298');
  client.click(commonClickCls);
  client.pause(2000);
  
  client.clearValue('input[id=new_form_mobile]');
  client.setValue('input[id=new_form_mobile]','258');
  client.click(commonClickCls);
  client.pause(2000);

  client.clearValue('input[id=new_form_water]');
  client.setValue('input[id=new_form_water]','300');
  client.click(commonClickCls);
  client.pause(2000);

  client.clearValue('input[id=new_form_tvpackage]');
  client.setValue('input[id=new_form_tvpackage]','352');
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
          console.log("The total Integer value is: " + results.value);
          totalval = results.value;
  
      });

      client.getText(decimalValue, function (results) {
        console.log("The Total decimal value is: " + results.value);

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
 // client.click(NextButtonCls);
         
},

  "18.Checking the Functionality in Page Three": function(client) {
    optionsDropDownCls = pageObj.elements.pageThreeDropDownList.selector,
    dropDownOptionOneCls = pageObj.elements.dropDownListOptionOne.selector,
    dropDownOptionTwoCls = pageObj.elements.dropDownListOptionTwo.selector,
    dropDownOptionThreeCls = pageObj.elements.dropDownListOptionThree.selector,
    optionTwoClick = pageObj.elements.dropDownListOptionTwoClick.selector,
    displOptionTwo = pageObj.elements.dropdownDisplayOptionTwo.selector,
    sliderHandleCls = pageObj.elements.pageThreeSliderHandle.selector,
    sliderHandleTwoCls = pageObj.elements.pageThreeSliderHandletwo.selector,
    sliderHandleThreeCls = pageObj.elements.pageThreeSliderHandlethree.selector,
    sliderHandleFourCls = pageObj.elements.pageThreeSliderHandlefour.selector,
    NextButtonCls = pageObj.elements.pageTwoNextButton.selector,
    pageThreeActivedivisions = pageObj.elements.pageThreeActiveDivisions.selector,
    commonClickCls = pageObj.elements.commonClick.selector,
      globalProps(client);
    client.click(optionsDropDownCls);
    client.assert.cssProperty(optionsDropDownCls,"display","block"); 
    client.expect.element(dropDownOptionOneCls).text.to.equals('day');
    client.expect.element(dropDownOptionTwoCls).text.to.equals('week');
    client.expect.element(dropDownOptionThreeCls).text.to.equals('month');
    client.click(optionTwoClick);
    client.expect.element(displOptionTwo).text.to.equals('week');

    //slider one input
   // client.setValue('input[id=new_form_internet]','350');
  //  client.click(commonClickCls);
    client.pause(2000);
    client.expect.element(sliderHandleCls).to.have.attribute('style').which.contains('left: 87.5%;') 
   
    //slider two input
   // client.setValue('input[id=new_form_councilTax]','350');
  //  client.click(commonClickCls);
    client.pause(2000);
    client.expect.element(sliderHandleTwoCls).to.have.attribute('style').which.contains('left: 25%;') 

    //slider three input
   // client.setValue('input[id=new_form_electricity]','350');
   // client.click(commonClickCls);
    client.pause(2000);
    client.expect.element(sliderHandleThreeCls).to.have.attribute('style').which.contains('left: 74.5%;') 

    //slider four input
 //   client.setValue('input[id=new_form_mobile]','350');
  //  client.click(commonClickCls);
    client.pause(2000);
    client.expect.element(sliderHandleFourCls).to.have.attribute('style').which.contains('left: 64.5%;') 
    client.click(NextButtonCls);

    //checking the display of active divisions
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
    client.elements('css selector', pageThreeActivedivisions, results => {
      if (results.value.length === 7) {
        client.expect.element(pageThreeActivedivisions).to.be.visible;
      }
    });
  }
        
},

"19.Checking The Properties of Header and Sub Division in Page Four ":function(client)
   {
    pageFourHeaderCls = pageObj.elements.pageFourResHeader.selector,
    PageFourRepWrapperCls = pageObj.elements.pageFourRepresentativeWrapper.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Properties of Results Header 
    properties = rewards_calculator_props.pageFourResHeadProps('lg');  
    callback.multiloop(client,  pageFourHeaderCls , properties, 'lg');

    //Verifying the Properties of Wrapper
    properties = rewards_calculator_props.pageFourRepresentativeWrapProps('lg');  
    callback.multiloop(client,  PageFourRepWrapperCls , properties, 'lg');
    }
  },

  "20.Checking Header and Text Properties of Sub Division in Page Four":function(client)
   {
    pageFourResHeaderCls = pageObj.elements.pageFourResultsHeader.selector,
    PageFourResTextCls = pageObj.elements.pageFourResultsText.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Properties of Wrapper Header
    properties = rewards_calculator_props.pageFourWrapperHeadProps('lg');  
    callback.multiloop(client,  pageFourResHeaderCls , properties, 'lg');

    //Verifying the Properties of Results Text
    properties = rewards_calculator_props.pageFourResultsTextProps('lg');  
    callback.multiloop(client,  PageFourResTextCls , properties, 'lg');
    }
  },

  "21.Checking The Properties of Results Button and Images in Page Four":function(client)
   {
    pageFourRewButtonCls = pageObj.elements.pageFourRewardsButton.selector,
    imageOneCls = pageObj.elements.pagefourImageOne.selector,
    imageTwoCls = pageObj.elements.pagefourImageTwo.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //Verifying the Properties of Buttons
    properties = rewards_calculator_props.pageFourResButtonProps('lg');  
    callback.multiloop(client,  pageFourRewButtonCls , properties, 'lg');

    //verifying the Properties of Images
    imageOneproperties = rewards_calculator_props.pageFourImageProps('lg'); 
    client.expect.element(imageOneCls).to.have.attribute('src').which.contains('NWActivate') 
    callback.singleElem(client, imageOneCls , imageOneproperties, 'lg');

    //verifying the properties of Image Two
    imageTwoproperties = rewards_calculator_props.pageFourImageTwoProps('lg'); 
    client.expect.element(imageTwoCls).to.have.attribute('src').which.contains('icon_bankit-2x') 
    callback.singleElem(client, imageTwoCls , imageTwoproperties, 'lg');

    }
  },

  //Closing the browser
 '22.Ending the Session / Closing the Browser': function(client){
  client.pause(1000);
  client.end();
}


}