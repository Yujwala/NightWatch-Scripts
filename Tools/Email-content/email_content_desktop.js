var email_content_props = require('./email_content_properties.js'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
var PageUrl = pageurl.NW_PER_EMAIL_CONTENT;

function globalProps(client){
    pageObj = client.page.email_content_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;   
}

module.exports = {
  '@tags': ['desktop', 'email-content', 'email-content-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,PageUrl); 
            client.pause(5000);            
    },

    "1.Checking the Properties of Tool's Main Division": function(client)
     {
      toolMainDivCls = pageObj.elements.mainblock.selector,
        globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){      
        //Email Content Input Props
        properties = email_content_props.mainToolBlockProps('lg');  
        callback.multiloop(client, toolMainDivCls , properties, 'lg');
      }  
},
    "2.Checking the Properties of Tool's Division": function(client)
     {
        toolMainDivCls = pageObj.elements.mainblock.selector,
          globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){         
          //Email Content Input Props
          properties = email_content_props.mainBlockProps('lg');  
          callback.multiloop(client, toolMainDivCls , properties, 'lg');
        }  
  },
  "3.Checking the Properties Headline and Labels in the Tool": function(client)
   {
    headlineCls = pageObj.elements.headline.selector,
    labelsCls = pageObj.elements.inputLabels.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //Email Content HeadLine Properties
      properties = email_content_props.headLineProps('lg');  
      callback.multiloop(client,  headlineCls , properties, 'lg');

     //Email Content Input Label Properties
      properties = email_content_props.inputLabelProps('lg');  
      callback.singleElem(client,  labelsCls , properties, 'lg');

    }  
},
    "4.Checking the Properties of Input Fields": function(client)
     {
          yourName = pageObj.elements.yourNameTextInput.selector,
          salref = pageObj.elements.salaryrefTextInput.selector,
            globalProps(client);
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){  

            //Email Content Input Props
            client.pause(2000);
            properties = email_content_props.firstInput('lg');  
            callback.multiloop(client, yourName , properties, 'lg');

            //Salary Reference Input Props
            properties = email_content_props.salRefInput('lg');  
            callback.singleElem(client, salref , properties, 'lg');
          }  
    },

    "5.Checking the Properties of Check-Boxes and RadioButtons": function(client) 
    {
        radioButtonCls = pageObj.elements.uncheckedRadioButton.selector,
        checkBoxCls = pageObj.elements.brandsCheckBoxes.selector,
          globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){         
          //Email Content Radio Button Properties
          properties = email_content_props.radioButtonProps('lg');  
          callback.multiloop(client, radioButtonCls , properties, 'lg');

          //Email Content CheckBox Properties
          properties = email_content_props.checkBoxProps('lg');  
          callback.multiloop(client, checkBoxCls , properties, 'lg');

        }  
  },

  "6.Checking the Functionality and Properties Of Drop-Down": function(client) {
    DepartmentDropDownCls = pageObj.elements.deptDropDown.selector,
    DepartmentDropDownOptCls = pageObj.elements.deptDropDownOptions.selector,
      globalProps(client);
    client.click('#channel-new_form_channel-1');
    client.click(DepartmentDropDownCls);
    client.assert.cssProperty(DepartmentDropDownOptCls,"display","block"); 
    client.expect.element('#serv').text.to.equals('Service');
    client.expect.element('#card').text.to.equals('Cards');
    client.expect.element('#sale').text.to.equals('Sales');
    client.expect.element('#outb').text.to.equals('Outbound Operations');
    client.expect.element('#dcsu').text.to.equals('Digital Customer Support');
    client.expect.element('#busi').text.to.equals('Business');
    client.expect.element('#priv').text.to.equals('Private');
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //Drop Down Properties
      properties = email_content_props.DeptDropDownProps('lg');  
      callback.multiloop(client, DepartmentDropDownCls , properties, 'lg');


    }  
},

  "7.Checking the Properties of Brand Logos in the Tool": function(client) {
    rbsLogoCls = pageObj.elements.rbsLogo.selector,
    rbsPremierLogoCls = pageObj.elements.rbspremierLogo.selector,
    natwestLogoCls = pageObj.elements.natwestLogo.selector,
    natwestPremierLogoCls = pageObj.elements.natwestPremierLogo.selector,
    ulsterNiLogoCls = pageObj.elements.ulsterniLogo.selector,
    ulsterRoiLogoCls = pageObj.elements.ulsterniLogo.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //Rbs Logo Props
      properties = email_content_props.rbsLogoProps('lg'); 
      client.expect.element(rbsLogoCls).to.have.css('background-image').which.contains(property.$rbsLogoImage) 
      callback.multiloop(client, rbsLogoCls , properties, 'lg');

      //Rbs Premier Logo Props
      properties = email_content_props.rbsPremierLogoProps('lg');  
      client.expect.element(rbsPremierLogoCls).to.have.css('background-image').which.contains(property.$rbspremierLogoImage)
      callback.multiloop(client, rbsPremierLogoCls , properties, 'lg');

      //Natwest Logo Props
       properties = email_content_props.natwestLogoProps('lg');  
       client.expect.element(natwestLogoCls).to.have.css('background-image').which.contains(property.$natwestLogoImage)
       callback.multiloop(client, natwestLogoCls , properties, 'lg');

      //Natwest Premier Logo Props
      properties = email_content_props.natwestPremierLogoProps('lg');  
      client.expect.element(natwestPremierLogoCls).to.have.css('background-image').which.contains(property.$natwestpremierLogoImage)
      callback.multiloop(client, natwestPremierLogoCls , properties, 'lg');

      //Ulster Ni Logo Props
      properties = email_content_props.ulsterNiLogoProps('lg');  
      client.expect.element(ulsterNiLogoCls).to.have.css('background-image').which.contains(property.$ulsterniLogoImage)
      callback.multiloop(client, ulsterNiLogoCls , properties, 'lg');

      //Ulster Roi Logo Props
      properties = email_content_props.ulsterRoiLogoProps('lg');  
      client.expect.element(ulsterRoiLogoCls).to.have.css('background-image').which.contains(property.$ulsterroiLogoImage)
      callback.multiloop(client, ulsterRoiLogoCls , properties, 'lg');

    }  
},
/*
        //implemented in TC 15
    "5.checking The Mail Triggering Functionality of the Tool":function(client){
        callback.openURL(client,PageUrl);
        client.setValue('input[name=agentName]','Mariano');
        client.setValue('input[name=agentId]','6434556');
        client.click('.radio #channel-new_form_channel-0');
        client.setValue('input[name=sortCode]','543455');
        client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-0');
        client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-1');
        client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-2');
        client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-3');
        client.click('.loginButton a');
        client.setValue('input[name=customername]','Michael Di Vaio');
        client.setValue('input[name=customeremail]','samuel.susheel.kumar@accenture.com');
        client.setValue('input[name=customernumber]','4552');
        client.click('.radio #brand-new_form_brand-0');
        client.pause(5000);
        client.click('.js-rbsList .accordion__item.accordion__item--odd .accordion__header.js-accordion__toggle.js-accordion__toggle--closed a');
        client.click('#All-About-Digital-Change-Account-Nickname-and-Personal-Greeting-rbspersonal');
        client.click('.sendEmailButton span a');
       

    },
    */
    "8.Checking the error messages and the Negative Scenarios of the Input Fields":function(client){
      var nameOneInputCls = pageObj.elements.yourNameTextInput.selector;
        //Email content Error Message Properties
        callback.openURL(client,PageUrl);
        client.click('#new_form_agentId');
        client.expect.element('.error-container').text.to.equals('This is a required field');
        client.pause(3000);
        client.setValue('input[id=new_form_agentId]','asddd');
        client.click('#new_form_agentName');
        client.expect.element('.inline-block .form-input-row .error-container').text.to.equals('Please enter 6 or 7 digit salary reference');
        client.setValue('input[id=new_form_sortCode]','asddd');
        client.click('#new_form_agentName');
        client.expect.element('#form_cq-1 .error-container').text.to.equals('Please enter six digit sort code');
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
          //Error Status Login Button Props
          properties = email_content_props.errorStatusInputProps('lg');  
          callback.multiloop(client, nameOneInputCls , properties, 'lg');
  
        }  

    },
 
  "9.Checking the focus Properties of input Fields": function (client) {
    var inputOneCls = pageObj.elements.salaryrefTextInput.selector;
    var inputOneFocusCls = pageObj.elements.salaryrefTextInput.selector;
     client.moveToElement(inputOneCls,10,10);
     client.mouseButtonDown(inputOneCls);   
     client.pause(3000);                          
      client.elements('css selector', inputOneFocusCls, results => {
        if (results.value.length > 0) {
          //Email Content Input Focus Properties
              pro = email_content_props.inputOneFocusProps('lg');
              callback.singleElem(client, inputOneFocusCls, pro, 'lg');
                       }
               });
                   client.pause(3000);                        
          },

  "10.Checking the focus Properties of Login Button": function (client) {
             var loginButtonCls = pageObj.elements.loginButton.selector;
             var loginButtonFocusCls = pageObj.elements.loginButtonFocus.selector;
             client.moveToElement(loginButtonCls,10,10);
             client.mouseButtonDown(loginButtonCls);   
             client.pause(3000);                          
             client.elements('css selector', loginButtonFocusCls, results => {
             if (results.value.length > 0)
              {
                pro = email_content_props.loginButtonFocusProps('lg');
                callback.singleElem(client, loginButtonFocusCls, pro, 'lg');                               
              }
                    });
                    client.pause(3000);                     
              },
              
    "11.Checking the Properties of Login Button in Inactive State": function(client) {
      var loginButtonCls = pageObj.elements.loginButton.selector;
        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
        //Disabled Login Button Props
        properties = email_content_props.loginButtonDisabledProps('lg');  
        callback.multiloop(client, loginButtonCls , properties, 'lg');

      }  
},

        "12.Checking the functionality of Brands Email Template's List":function(client){
            var brandOneCls = pageObj.elements.rbsRadioButton.selector;
            var brandTwoCls = pageObj.elements.rbsPremierRadioButton.selector;
            var brandThreeCls = pageObj.elements.natwestRadioButton.selector;
            var brandFourCls = pageObj.elements.natwestPremierRadioButton.selector;
                callback.openURL(client,PageUrl);
                client.setValue('input[name=agentName]','Mariano');
                client.setValue('input[name=agentId]','6434556');
                client.click('.radio #channel-new_form_channel-0');
                client.setValue('input[name=sortCode]','543455');
                client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-0');
                client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-1');
                client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-2');
                client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-3');
                client.click('.loginButton a');
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', brandOneCls, results => {
                if (results.value.length > 0) {
                   client.click(brandOneCls);
                   client.pause(2000);
                   client.assert.cssProperty(".js-rbsList","display","block");
                   client.assert.cssProperty(".js-rbsPrivateList","display","none");
                   client.assert.cssProperty(".js-natwestList","display","none");
                   client.assert.cssProperty(".js-natwestPrivateList","display","none"); 
                     
                         }
                      });

            client.elements('css selector', brandTwoCls, results => {
                 if (results.value.length > 0) {
                    client.click(brandTwoCls);
                    client.pause(2000);
                    client.assert.cssProperty(".js-rbsPrivateList","display","block"); 
                    client.assert.cssProperty(".js-rbsList","display","none");
                    client.assert.cssProperty(".js-natwestList","display","none");          
                    client.assert.cssProperty(".js-natwestPrivateList","display","none"); 
                                 }
                              });

                client.elements('css selector', brandThreeCls, results => {
                    if (results.value.length > 0) {
                       client.click(brandThreeCls);
                       client.pause(2000);
                       client.assert.cssProperty(".js-natwestList","display","block");   
                       client.assert.cssProperty(".js-rbsList","display","none");  
                       client.assert.cssProperty(".js-rbsPrivateList","display","none");  
                       client.assert.cssProperty(".js-natwestPrivateList","display","none");     
                                    }
                                 });

                client.elements('css selector', brandFourCls, results => {
                     if (results.value.length > 0) {
                        client.click(brandFourCls);
                        client.pause(2000);
                        client.assert.cssProperty(".js-natwestPrivateList","display","block");   
                        client.assert.cssProperty(".js-rbsList","display","none");  
                        client.assert.cssProperty(".js-rbsPrivateList","display","none");     
                        client.assert.cssProperty(".js-natwestList","display","none"); 
                                        }
                                    });
   
                       }
   
                   },
                   /*
                   //this is checked in test case 11
                   "10.Checking The Hover properties of Icons in the second page": function (client) {
                    var infoIconCls = pageObj.elements.pageTwoInfoIcon.selector;
                    var infoIconHoverCls = pageObj.elements.pageTwoInfoIconHover.selector;
                    var infoIconDisplayCls = pageObj.elements.pageTwoInfoIconDisplay.selector;
                    var infoIconTextCls = pageObj.elements.pageTwoInfoIconText.selector;
                      //  globalProps(client);
                    if(brand.props.$brandName=='natwest-personal')
                          {
                             client.url('https://personal.natwest.com/tool/emailtool.html?agentName=Mariano&agentId=6434556&department=&location=&sortCode=543455&channel=branch&brands=RBS%7cRBSPrivate%7cNatWest%7cNatWestPrivate');
                             client.pause(3000);
                          }
                 if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                    client.elements('css selector', infoIconCls, results => {
                        if (results.value.length > 0)
                         {  
                          
                            props = email_content_props.infoIconHoverProps('lg');
                             client.moveToElement(infoIconCls,10,10);
                             client.pause(10000);
                             client.assert.cssProperty(".customernameemailtool .js-tool-tip.toop-tip","display","inline");
                             callback.singleElem(client,infoIconHoverCls, props, 'lg');
                             client.expect.element(infoIconTextCls).text.to.equals('This should always be Mr/Mrs - First Name - Last Name (e.g Mr George Winwood).');
                            }
                      
                        });
                        }   
                },
                */
                
"13.Checking the Text Properties and Hover Properties in Page Two":function(client){
  var pageTwoTextCls = pageObj.elements.pagetwoInputLabels.selector;
  var infoIconCls = pageObj.elements.pageTwoInfoIcon.selector;
  var infoIconHoverCls = pageObj.elements.pageTwoInfoIconHover.selector;
  var infoIconDisplayCls = pageObj.elements.pageTwoInfoIconDisplay.selector;
  var infoIconTextCls = pageObj.elements.pageTwoInfoIconText.selector;
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    client.elements('css selector', pageTwoTextCls, results => {
      if (results.value.length > 0) {
        //Email Content's Text Properties in Page Two
        properties = email_content_props.pageTwoTextProps('lg');  
        callback.multiloop(client, pageTwoTextCls , properties, 'lg');
        //cheking the hover properties and also verifying the hover Text
        props = email_content_props.infoIconHoverProps('lg');
        client.moveToElement(infoIconCls,10,10);
        client.pause(10000);
        client.assert.cssProperty(".customernameemailtool .js-tool-tip.toop-tip","display","inline");
        callback.singleElem(client,infoIconHoverCls, props, 'lg');
        client.expect.element(infoIconTextCls).text.to.equals('This should always be Mr/Mrs - First Name - Last Name (e.g Mr George Winwood).');
                          }
                      });
                  }
  
                },
                /*
                "11.Checking the Text Properties in Page Two":function(client){
                  var pageTwoTextCls = pageObj.elements.pagetwoInputLabels.selector;
                  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    client.elements('css selector', pageTwoTextCls, results => {
                        if (results.value.length > 0) {
                            //Email Content's Text Properties in Page Two
                            properties = email_content_props.pageTwoTextProps('lg');  
                            callback.multiloop(client, pageTwoTextCls , properties, 'lg');
                        }
                    });
                }

              },
              */
                
"14. Checking the Properties in the Email Template Overlay and Close Button":function(client){
    overlayTextCls = pageObj.elements.pageTwoTemplateOverlay.selector;
    contentOverlayCls = pageObj.elements.contentOverlay.selector;
    contentOverlayEmailCls = pageObj.elements.contentOverlayEmailPreview.selector;
    closeButtonCls = pageObj.elements.closeButton.selector;
     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.click('.radio #brand-new_form_brand-0');
            client.pause(5000);
            client.click('.js-rbsList .accordion__item.accordion__item--odd .accordion__header.js-accordion__toggle.js-accordion__toggle--closed a');
            client.click('.form-input-row.form-input-row--checkbox-confirm .preview-icons span');
            client.pause(2000);
            client.elements('css selector', overlayTextCls, results => {
                  if (results.value.length > 0) {
                  //Text Properties in Email Template Overlay
                  properties = email_content_props.overlayTextProps('lg');  
                  callback.multiloop(client, overlayTextCls , properties, 'lg');
                          }
                      });
                  client.elements('css selector', contentOverlayCls, results => {
                  if (results.value.length > 0) {
                  //Text Properties in Email Template Overlay
                  properties = email_content_props.contentOverlayProps('lg');  
                  callback.multiloop(client, contentOverlayCls , properties, 'lg');    
                                }
                            });
                  client.elements('css selector', contentOverlayEmailCls, results => {
                  if (results.value.length > 0) {
                  //Text Properties in Email Template Overlay
                  properties = email_content_props.contentOverlayPreviewProps('lg');  
                  callback.multiloop(client, contentOverlayEmailCls , properties, 'lg');               
                                     }
                            });

                  client.elements('css selector',closeButtonCls, results => {
                  if (results.value.length > 0) {
                  //Close Button Properties in Email Template Overlay
                  properties = email_content_props.closeButtonProps('lg');  
                  callback.singleElem(client, closeButtonCls , properties, 'lg');
                  client.click('#overlay_content .close.icon_Preview');
                                              }
                       });
                     }
                },
 "15.Checking The Mail Triggering Functionality of the Tool":function(client){
    callback.openURL(client,PageUrl);
    client.setValue('input[name=agentName]','Mariano');
    client.setValue('input[name=agentId]','6434556');
    client.click('.radio #channel-new_form_channel-0');
    client.setValue('input[name=sortCode]','543455');
    client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-0');
    client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-1');
    client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-2');
    client.click('.form-input-row.form-input-row--checkbox-confirm.input-field-mandatory #brand-new_form_brand-3');
    client.click('.loginButton a');
    client.setValue('input[name=customername]','Michael Di Vaio');
    client.setValue('input[name=customeremail]','samuel.susheel.kumar@accenture.com');
    client.setValue('input[name=customernumber]','4552');
    client.click('.radio #brand-new_form_brand-0');
    client.pause(3000);
    client.click('.js-rbsList .accordion__item.accordion__item--odd .accordion__header.js-accordion__toggle.js-accordion__toggle--closed a');
    client.pause(2000);
    client.click('#All-About-Digital-Change-Account-Nickname-and-Personal-Greeting-rbspersonal');
    client.pause(2000);
    client.click('.sendEmailButton span a');   
    client.pause(4000); 
    client.expect.element('.send_email .successmail .header-group__headline').text.to.equals('Email(s) Sent'); 
              },     
                           
 //Closing the browser
 '16.Ending the Session / Closing the Browser': function(client){
  client.pause(1000);
  client.end();
}

}