var pageurl = require('../../pageurls.js'),
    pageObj,next_step_props,callback,size;

function globalProps(client){
    pageObj = client.page.next_step_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;   
    callback.getBrand(client);
    next_step_props = require('./next_step_props.js')(client);
}

module.exports = {
  '@tags': ['next-step-desktop','desktop','next-step'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_MAR_NEXT_STEP);
            console.log("--Desktop--"+pageurl.NW_MAR_NEXT_STEP); 
    },

    "Set class to shelf": function(client) {
        nextStepBlueTheme = pageObj.elements.nextStepBlueTheme.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',nextStepBlueTheme,results=>{
                if(results.value.length>0) { 
                  client.pause(5000);
                  //client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--white')")
                  //client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--light-blue ')")
                  //client.execute("document.getElementsByClassName('theme--blue ')[1].setAttribute('class', 'shelf theme--white ')")
                  client.pause(1000);
                }
            });
          }
        },

    "1 Check for Next Step Shelf wrapper": function(client) {
            nextStepBlueTheme = pageObj.elements.nextStepBlueTheme.selector,
            nextStepWhiteTheme = pageObj.elements.nextStepWhiteTheme.selector,
            nextStepLightBlueTheme = pageObj.elements.nextStepLightBlueTheme.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //Blue Theme
            client.elements('css selector',nextStepBlueTheme,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 client.source(() => {
                  console.log("Blue Theme"); 
                 }); 
                 properties = next_step_props.nextStepBlueTheme('lg');  
                 callback.multiloop(client, nextStepBlueTheme , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',nextStepWhiteTheme,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 client.source(() => {
                  console.log("White Theme"); 
                 }); 
                 properties = next_step_props.nextStepWhiteTheme('lg');  
                 callback.multiloop(client, nextStepWhiteTheme , properties, 'lg');

                }
            });
            //Light Blue Theme
            client.elements('css selector',nextStepLightBlueTheme,results=>{
              if(results.value.length>0) {

                //shelf bg color
                client.source(() => {
                 console.log("Light Blue Theme"); 
                }); 
                properties = next_step_props.nextStepLightBlueTheme('lg');  
                callback.multiloop(client, nextStepLightBlueTheme , properties, 'lg');

               }
           });
           
            }
    },

    "2 Check for Next Step Shelf left right columns": function(client) {
            nextStepColumns = pageObj.elements.nextStepColumns.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

                 properties = next_step_props.nextStepColumns('lg');  
                 callback.multiloop(client, nextStepColumns , properties, 'lg');
           
            }
    },

    "3.Verifying Next Step Shelf Heading Properties": function(client) {
            headerGroup = pageObj.elements.headerGroup.selector,
            headLineBlue = pageObj.elements.headLineBlue.selector,
            headLineWhite = pageObj.elements.headLineWhite.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
              client.elements('css selector',nextStepBlueTheme,results=>{
               if(results.value.length>0) {

                //header Group(blue theme)
                properties = next_step_props.headerGroup('lg');
                callback.multiloop(client, headerGroup, properties,'lg'); 

                //Next Step Shelf Heading 
                properties = next_step_props.headLineBlue('lg');
                callback.multiloop(client, headLineBlue, properties,'lg');

                }
              });   

              client.elements('css selector',nextStepWhiteTheme,results=>{
               if(results.value.length>0) {

                //header Group(white theme)
                properties = next_step_props.headerGroup('lg');
                callback.multiloop(client, headerGroup, properties,'lg'); 

                //Next Step Shelf Heading 
                properties = next_step_props.headLineWhite('lg');
                callback.multiloop(client, headLineWhite, properties,'lg');

                }
              });     
                
            }
    },

    "4.Verifying Next Step CTA Icons Properties": function(client) {
            nextStepsCtaIcons = pageObj.elements.nextStepsCtaIcons.selector,
            nextStepsCtaIconsa = pageObj.elements.nextStepsCtaIconsa.selector,
            nextStepsCtaIconsaBlue = pageObj.elements.nextStepsCtaIconsaBlue.selector,
            nextStepsCtaIconsaOther = pageObj.elements.nextStepsCtaIconsaOther.selector,
            nextStepsCtaIconsaOffWhite = pageObj.elements.nextStepsCtaIconsaOffWhite.selector,
            nextStepsCtaIconsAfter = pageObj.elements.nextStepsCtaIconsAfter.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.elements('css selector',nextStepsCtaIcons,results=>{
               if(results.value.length>0) {

                //next Steps Cta Icons
                properties = next_step_props.nextStepsCtaIcons('lg');
                callback.multiloop(client, nextStepsCtaIcons, properties,'lg');
                
                //next Steps Cta Icons before
                client.source(() => {
                  console.log("before"); 
                 });
                properties = next_step_props.nextStepsCtaIconsBefore('lg');
                callback.pseudoSingleElem(client,nextStepsCtaIcons,':before',properties);

                //next Steps Cta Icons anchor links
                client.source(() => {
                  console.log("icon links"); 
                 });

                //Blue Theme
                client.elements('css selector',nextStepsCtaIconsaBlue,results=>{
               if(results.value.length>0) {
        
                 properties = next_step_props.nextStepsCtaIconsaBlue('lg');
                callback.multiloop(client, nextStepsCtaIconsaBlue, properties,'lg');

                }
                });
                //Off-white Theme
                client.elements('css selector',nextStepsCtaIconsaOffWhite,results=>{
                  if(results.value.length>0) {
           
                    properties = next_step_props.nextStepsCtaIconsaOffWhite('lg');
                   callback.multiloop(client, nextStepsCtaIconsaOffWhite, properties,'lg');
   
                   }
                   });

                //Other Theme
                client.elements('css selector',nextStepsCtaIconsaOther,results=>{
                if(results.value.length>0) {
    
                 properties = next_step_props.nextStepsCtaIconsaOther('lg');
                callback.multiloop(client, nextStepsCtaIconsaOther, properties,'lg');

                }
                });
                

                client.elements('css selector',nextStepsCtaIconsa,results=>{
                   if(results.value.length>0) {
                    client.expect.element(nextStepsCtaIconsa).to.have.attribute('href'); 
                   }
                });

                //next Steps Cta Icons After
                client.source(() => {
                  console.log("After"); 
                 });
                properties = next_step_props.nextStepsCtaIconsAfter('lg');
                callback.pseudoSingleElem(client, nextStepsCtaIconsAfter,':after',properties);

                }
              });       
                
            }
    },

    "5.Verifying Next Step CTA Icons Functionality": function(client) {
            nextStepsCtaIconsAfterOther = pageObj.elements.nextStepsCtaIconsAfterOther.selector,
            nextStepsCtaIconsAfterBlue = pageObj.elements.nextStepsCtaIconsAfterBlue.selector,
            nextStepsCtaIconsFocus = pageObj.elements.nextStepsCtaIconsFocus.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

               client.elements('css selector',nextStepsCtaIconsAfter,results=>{
                   if(results.value.length>0) {
                    client.expect.element(nextStepsCtaIconsAfter).to.have.attribute('href'); 
                    }

                    //Blue Theme
               client.elements('css selector',nextStepsCtaIconsaBlue,results=>{
               if(results.value.length>0) {
        
                 //cta hover
                client.source(() => {
                console.log("--cta hover--"); 
                });
                properties = next_step_props.nextStepsCtaIconsHoverBlue('lg');
                client.moveToElement(nextStepsCtaIconsAfterBlue, 10, 10);
                client.pause(10000);
                callback.singleElem(client, nextStepsCtaIconsAfterBlue, properties, 'lg');

                //sec cta mouse down props
                client.source(() => {
                console.log("--cta mouse down--"); 
                });
                client.waitForElementVisible(nextStepsCtaIconsAfter, 6000);
                client.moveToElement(nextStepsCtaIconsAfter,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000); 

                properties = next_step_props.nextStepsCtaIconsFocus('lg');
                callback.singleElem(client, nextStepsCtaIconsFocus , properties, 'lg');

                }
                });

                client.refresh();
                //Other Theme
                client.elements('css selector',nextStepsCtaIconsaOther,results=>{
                if(results.value.length>0) {
    
                //cta hover
                client.source(() => {
                console.log("--cta hover--"); 
                });
                properties = next_step_props.nextStepsCtaIconsHoverOther('lg');
                client.moveToElement(nextStepsCtaIconsAfterOther, 10, 10);
                client.pause(10000);
                callback.singleElem(client, nextStepsCtaIconsAfterOther, properties, 'lg');

                //sec cta mouse down props
                client.source(() => {
                console.log("--cta mouse down--"); 
                });
                client.waitForElementVisible(nextStepsCtaIconsAfter, 6000);
                client.moveToElement(nextStepsCtaIconsAfter,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000); 

                properties = next_step_props.nextStepsCtaIconsFocusWhite('lg');
                callback.singleElem(client, nextStepsCtaIconsFocus , properties, 'lg');

                }
                });

                });
            }
    },

    "6.Verifying Next Step CTA Properties": function(client) {
            nextStepCta = pageObj.elements.nextStepCta.selector,
            nextStepCta_L = pageObj.elements.nextStepCta_L.selector,
            nextStepCta_LOffWhite= pageObj.elements.nextStepCta_LOffWhite.selector,
            nextStepCta_LTopLine= pageObj.elements.nextStepCta_LTopLine.selector
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.elements('css selector',nextStepCta,results=>{
               if(results.value.length>0) {

                //Next Step Cta
                properties = next_step_props.nextStepCta('lg');
                callback.multiloop(client, nextStepCta, properties,'lg');

                //Next Step Cta--L
                properties = next_step_props.nextStepCta_L('lg');
                callback.multiloop(client, nextStepCta_L, properties,'lg');

                //Next Step Cta--L-Off White theme
                properties = next_step_props.nextStepCta_LOffWhite('lg');
                callback.multiloop(client, nextStepCta_LOffWhite, properties,'lg');
                callback.multiloop(client, nextStepCta_LTopLine, properties,'lg');

                }
              });          
                
            }
    },

    "7.Verifying Next Step CTA Functionality": function(client) {
            headLine = pageObj.elements.headLine.selector,
            nextStepCta_L = pageObj.elements.nextStepCta_L.selector,
            ctaHover = pageObj.elements.ctaHover.selector,
            ctaMouseDown = pageObj.elements.ctaMouseDown.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
               
               client.elements('css selector',nextStepCta,results=>{
               if(results.value.length>0) {

                //href
               client.elements('css selector',nextStepCta_L,results=>{
                   if(results.value.length>0) {
                    client.expect.element(nextStepCta_L).to.have.attribute('href'); 
                    }
                    client.refresh();
                    //cta hover
                    client.source(() => {
                    console.log("--cta hover--"); 
                    });
                    properties = next_step_props.ctaHover('lg');
                    client.moveToElement(nextStepCta_L, 10, 10);
                    client.pause(10000);
                    callback.singleElem(client, nextStepCta_L, properties, 'lg');

                    //sec cta mouse down props
                    client.source(() => {
                    console.log("--cta mouse down--"); 
                    });
                    client.waitForElementVisible(nextStepCta_L, 6000);
                    client.moveToElement(nextStepCta_L,  10,  10);
                    client.mouseButtonDown(0);
                    client.pause(1000); 

                    properties = next_step_props.ctaMouseDown('lg');
                    callback.singleElem(client, ctaMouseDown , properties, 'lg');

                    /*client.click(headLine);
                    //click CTA
                    client.source(() => {
                    console.log("--cta clicked--"); 
                    });
                    client.click(nextStepCta_L);*/

                });

                }
              }); 
               
            }
    },
    "8.Verifying Next Step Rte Properties": function(client) {
      rteOtherTheme = pageObj.elements.rteOtherTheme.selector,
      rteBlueTheme = pageObj.elements.rteBlueTheme.selector,
      globalProps(client);
          
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.refresh();
      client.elements('css selector',rteOtherTheme,results=>{
         if(results.value.length>0) {

          //Other theme rte
          properties = next_step_props.rteOtherTheme('lg');
          rteCallback.rteElem(client, rteOtherTheme, properties,'p','lg');
          }
        });
        client.elements('css selector',rteBlueTheme,results=>{
          if(results.value.length>0) {
 
           //Blue theme rte
           properties = next_step_props.rteBlueTheme('lg');
           rteCallback.rteElem(client, rteBlueTheme, properties,'p','lg');
           }
         });         
          
      }
    },
 "9.Verifying Next Step Cta Link Properties": function(client) {
    nextStepsCtaLinkBlue = pageObj.elements.nextStepsCtaLinkBlue.selector,
    nextStepsCtaLinkOther = pageObj.elements.nextStepsCtaLinkOther.selector,
      globalProps(client);
          
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.elements('css selector',nextStepsCtaLinkBlue,results=>{
         if(results.value.length>0) {

          //Other theme rte
          properties = next_step_props.nextStepsCtaLinkBlue('lg');
          callback.multiloop(client, nextStepsCtaLinkBlue, properties,'lg');
          }
        });
        client.elements('css selector',nextStepsCtaLinkOther,results=>{
          if(results.value.length>0) {
 
           //Blue theme rte
           properties = next_step_props.nextStepsCtaLinkOther('lg');
           callback.multiloop(client, nextStepsCtaLinkOther, properties,'lg');
           }
         });         
          
      }
 },
"10.Verifying Next Step CTA Link Functionality": function(client) {
  nextStepsCtaLinkBlueFocus = pageObj.elements.nextStepsCtaLinkBlueFocus.selector,
  nextStepsCtaLinkOtherFocus = pageObj.elements.nextStepsCtaLinkOtherFocus.selector,
  globalProps(client);
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     
     client.elements('css selector',nextStepsCtaLinkBlue,results=>{
     if(results.value.length>0) {
      client.source(() => {
        console.log("--Blue Theme--"); 
        });
          //cta hover
          client.source(() => {
          console.log("--cta hover--"); 
          });
          properties = next_step_props.nextStepsCtaLinkBlueHov('lg');
          client.moveToElement(nextStepsCtaLinkBlue, 10, 10);
          client.pause(10000);
          callback.singleElem(client, nextStepsCtaLinkBlue, properties, 'lg');

          //sec cta mouse down props
          client.source(() => {
          console.log("--cta mouse down--"); 
          });
          client.waitForElementVisible(nextStepsCtaLinkBlue, 6000);
          client.moveToElement(nextStepsCtaLinkBlue,  10,  10);
          client.mouseButtonDown(0);
          client.pause(1000); 

          properties = next_step_props.nextStepsCtaLinkBlueFocus('lg');
          callback.singleElem(client, nextStepsCtaLinkBlueFocus , properties, 'lg');

      }
    });
    client.refresh();
    client.elements('css selector',nextStepsCtaLinkOther,results=>{
      if(results.value.length>0) {
       client.source(() => {
         console.log("--Other Themes--"); 
         });
           //cta hover
           client.source(() => {
           console.log("--cta hover--"); 
           });
           properties = next_step_props.nextStepsCtaLinkOtherHov('lg');
           client.moveToElement(nextStepsCtaLinkOther, 10, 10);
           client.pause(10000);
           callback.singleElem(client, nextStepsCtaLinkOther, properties, 'lg');
 
           //sec cta mouse down props
           client.source(() => {
           console.log("--cta mouse down--"); 
           });
           client.waitForElementVisible(nextStepsCtaLinkOther, 6000);
           client.moveToElement(nextStepsCtaLinkOther,  10,  10);
           client.mouseButtonDown(0);
           client.pause(1000); 
 
           properties = next_step_props.nextStepsCtaLinkOtherFocus('lg');
           callback.singleElem(client, nextStepsCtaLinkOtherFocus , properties, 'lg');
 
       }
     }); 
     
  }
},
    "Ending the session":function(client){
        client.end();
    }
    
}


