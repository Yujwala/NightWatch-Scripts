var lightbox_props,pageObj,callback,size,brand,rteCallback,
	pageurl = require('../../pageurls.js');

    
function globalProps(client){
    pageObj = client.page.lightbox_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	lightbox_props = require('./lightbox_props.js')(client);
}

module.exports = {
    '@tags': ['light-box','light-box-mobile', 'mobile'],
      //Opening the URL
    "1. Opening the Mobile URL": function(client) {
              globalProps(client);
              //client.maximizeWindow();    
              callback.openURL(client,pageurl.ULSTER_IE_LightBox_M);
              console.log("--Mobile--"+pageurl.ULSTER_IE_LightBox_M); 
              //client.pause(2000);
      },

       //Resize the window for Mobile
    "2. Resize The Window":function(client){
        var  size = client.globals.size.widths;
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(5000);
             client.refresh();
             client.pause(5000);
      },

    //Verifying Overlap-wrap layout properties 
     "3. Overlap-wrap Layout Properties before Clicking CTA and Verifying OverLay Inner Content Presence":function(client){
        
        overlayWrapselector = pageObj.elements.overlayWrap.selector,
        globalProps(client);
       // callback.scrollToElement(client, tileLayoutselector);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

           client.elements('css selector',overlayWrapselector,results=>{
               if(results.value.length>0) { 
                   properties = lightbox_props.overlayWrapProp('xs');
                   callback.multiloop(client, overlayWrapselector , properties, 'xs');
                   client.verify.elementNotPresent('.overlay-content .overlay-inner');
               }

           });
        }
     },


     //Verifying Overlap-wrap layout properties 
     "4. Overlay CTA click and presence of Overlay-inner":function(client){
       
       overlaylinkselector = pageObj.elements.overlaylink.selector,
       overlayWrapselector = pageObj.elements.overlayWrap.selector,
       globalProps(client);
      // callback.scrollToElement(client, tileLayoutselector);
       if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

          client.elements('css selector',overlaylinkselector,results=>{
              if(results.value.length>0) { 

               client.click(overlaylinkselector);
                  properties = lightbox_props.overlayWrapAfterClick('xs');
                  callback.multiloop(client, overlayWrapselector , properties, 'xs');
                  client.pause(2000)
                  client.verify.elementPresent('.overlay-content .overlay-inner');
              }

          });
       }
     },


    "5. CTA click and verify Div, Header, CTA properties of all categories":function(client){
       
       overlaylinkselector = pageObj.elements.overlaylink.selector,
       //headlineSel = pageObj.elements.headline.selector,
       globalProps(client);
      // callback.scrollToElement(client, tileLayoutselector);
       if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

          client.elements('css selector',overlaylinkselector,results=>{
             
              if(results.value.length>0) { 
                  results.value.forEach(function(element, index){
                     // console.log(index)
                     // for(i=0; i<results.value.length; i++)
                      client.elementIdClick(element.ELEMENT)

                      // Declared a arrays x and y with different selectors

                     x = [".overlay-wrap .overlay-inner .theme--white",".overlay-wrap .overlay-inner .theme--blue", ".overlay-wrap .overlay-inner .theme--light-blue" ];

                     y = [".lap--one-half.desk--two-thirds", ".desk--two-thirds .header-group", 
                          ".desk--two-thirds .header-group__headline",".desk--two-thirds .cta--1 a", 
                          ".palm--one-whole.desk--two-thirds", ".lap--one-half.desk--one-third",
                          ".palm--one-whole.desk--one-third", ".lap--one-half.desk--two-thirds .header-group__headline p",
                          ".desk--two-thirds .cta--m a"];

                     client.pause(2000)

                   // appending the selectors x and y

                     for(let k=0; k<x.length; k++){
                       for(let l=0; l<y.length; l++){
                           
                          // client.source(() => {console.log(k,l);  });  
                          
                   //declaring properties 
                          properties = lightbox_props["deskprops_"+k+l] ('xs');
                           elementselector= x[k]+' '+y[l];
                          // client.source(() => {console.log(elementselector); });
                           
                           callback.multiloop(client, elementselector , properties, 'xs');
                       }
                   };

                      client.pause(2000)
                      client.click('.close');                 
                });
              }

          });
       }
    },


    "6. CTA click and verify comp-rich-text properties of all categories":function(client){        
       overlaylinkselector = pageObj.elements.overlaylink.selector,
       crtesel=pageObj.elements.crte.selector,
       //headlineSel = pageObj.elements.headline.selector,
       globalProps(client);
      // callback.scrollToElement(client, tileLayoutselector);
       if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

          client.elements('css selector',overlaylinkselector,results=>{
              
              if(results.value.length>0) { 
                  results.value.forEach(function(element, index){
                     // console.log(index)
                      client.elementIdClick(element.ELEMENT)
                 
                      // Declared selectors in an Array

                   x = [".overlay-wrap .overlay-inner .theme--white.canvas-shelf",
                        ".overlay-wrap .overlay-inner .theme--blue.canvas-shelf", 
                        ".overlay-wrap .overlay-inner .theme--white.single-article:not(.sixtyseven-thirtythree)",
                        ".overlay-wrap .overlay-inner .theme--blue.single-article:not(.sixtyseven-thirtythree)",
                        ".overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf",
                        ".overlay-wrap .overlay-inner .theme--light-blue.single-article:not(.sixtyseven-thirtythree)"];

                   y = ["p","p a", "ul", "ul li", "ul li a"]; 

                     client.pause(2000)

                     // Loop for selecting selectors x and y with themes and passing to RTE Callback
                   for(let k=0; k<x.length; k++){
                       for(let l=0; l<y.length; l++){
                           //client.source(() => {console.log(k,l); });
                          properties = lightbox_props["comp_rte_props_"+k+l] ('xs');
                           elementselector= x[k];
                           tag = y[l]; 
                    //rte Callback and refering to rte Element
                           rteCallback.rteElem(client, elementselector , properties, tag, 'xs');
                       }
                   };
                      client.pause(2000)
                      client.click('.close');
                });
              }

          });
       }
    },

    "7. CTA click and verify Incident Message properties of all categories":function(client){
       
        overlaylinkselector = pageObj.elements.overlaylink.selector,
        //headlineSel = pageObj.elements.headline.selector,
        globalProps(client);
       // callback.scrollToElement(client, tileLayoutselector);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
 
           client.elements('css selector',overlaylinkselector,results=>{
              
               if(results.value.length>0) { 
                   results.value.forEach(function(element, index){
                      // console.log(index)
                      // for(i=0; i<results.value.length; i++)
                       client.elementIdClick(element.ELEMENT)
 
                       // Declared a arrays x and y with different selectors
 
                      x = [".overlay-wrap .overlay-inner .theme--white",
                           ".overlay-wrap .overlay-inner .theme--blue",
                           ".overlay-wrap .overlay-inner .theme--light-blue"];
 
                      y = [ ".incident_message p",".incident_message p a",
                            ".incident_message ul",".incident_message ul li",
                            ".incident_message ul li a", ".incident_message"];
 
                      client.pause(2000)
 
                    // appending the selectors x and y
 
                      for(let k=0; k<x.length; k++){
                        for(let l=0; l<y.length; l++){
                            
                           // client.source(() => {console.log(k,l);  });  
                           
                    //declaring properties 
                           properties = lightbox_props["incident_message_"+k+l] ('xs');
                            elementselector= x[k]+' '+y[l];
                           // client.source(() => {console.log(elementselector); });
                            
                            callback.multiloop(client, elementselector , properties, 'xs');
                        }
                    };
 
                       client.pause(2000)
                       client.click('.close');                 
                 });
               }
 
           });
        }
    },   


    "8. CTA on Hover and Focus properties and Overlay Close (X) properties":function(client){        
       overlaylinkselector = pageObj.elements.overlaylink.selector,
       cta_m_selector = pageObj.elements.cta_m.selector,
       cta_l_selector = pageObj.elements.cta_l.selector,
       cta_m_hoverselector = pageObj.elements.cta_m_hover.selector,
       cta_l_hoverselector = pageObj.elements.cta_l_hover.selector,
       cta_m_focusselector = pageObj.elements.cta_m_focus.selector,
       cta_l_focusselector = pageObj.elements.cta_l_focus.selector,
       overlayXselector=pageObj.elements.overlayClose.selector
       //headlineSel = pageObj.elements.headline.selector,
       globalProps(client);
      // callback.scrollToElement(client, tileLayoutselector);
       if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

          client.elements('css selector',overlaylinkselector,results=>{
              
              if(results.value.length>0) { 
                  results.value.forEach(function(element, index){
                     // console.log(index)
                      client.elementIdClick(element.ELEMENT)
                      client.pause(2000)

                      // CTA--M selector hover and focus
                    client.elements('css selector',cta_m_selector,results=>{
                       if(results.value.length>0) { 
                          // console.log("i am inside")
                           client.moveToElement(cta_m_selector, 10, 10)
                           .pause(3000)
                           properties= lightbox_props.ctaMHoverProps('xs');
                           callback.multiloop(client, cta_m_hoverselector , properties, 'xs');
                           client.pause(3000)
                           client.mouseButtonDown(0)
                           .pause(2000)
                           properties= lightbox_props.ctaMFocusProps('xs');
                           callback.multiloop(client, cta_m_focusselector , properties, 'xs');

                       }
                     });

                     // CTA--L selector hover and focus

                     client.elements('css selector',cta_l_selector,results=>{
                       if(results.value.length>0) { 
                           console.log("i am inside")
                           client.moveToElement(cta_l_selector, 10, 10)
                           .pause(3000)
                           properties= lightbox_props.ctaLHoverProps('xs');
                           callback.multiloop(client, cta_l_hoverselector , properties, 'xs');
                           client.pause(3000)
                           client.mouseButtonDown(0)
                           .pause(2000)
                           properties= lightbox_props.ctaLFocusProps('xs');
                           callback.multiloop(client, cta_l_focusselector , properties, 'xs');

                       }
                     });

                     // Overlay Content Close (X) properties
                     client.elements('css selector',overlayXselector,results=>{
                       if(results.value.length>0) { 
                           properties= lightbox_props.overlayCloseProps('xs');
                           callback.multiloop(client, overlayXselector , properties, 'xs');
                       } 
                   }); 


                   // To verify Image has src attribute

                   client.expect.element('.overlay-inner img').to.have.attribute('src');

                      client.pause(2000)
                      client.click('.close');
                });
              }

          });
       }
    },
    
    "9. CTA click and verify Div, Header, CTA properties of all categories - Extra headers in Mobile":function(client){
       
        overlaylinkselector = pageObj.elements.overlaylink.selector,
        //headlineSel = pageObj.elements.headline.selector,
        globalProps(client);
       // callback.scrollToElement(client, tileLayoutselector);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
 
           client.elements('css selector',overlaylinkselector,results=>{
              
               if(results.value.length>0) { 
                   results.value.forEach(function(element, index){
                      // console.log(index)
                      // for(i=0; i<results.value.length; i++)
                       client.elementIdClick(element.ELEMENT) 

                       // Declared a arrays x and y with different selectors
 
                      x = [".overlay-wrap .overlay-inner .theme--white",".overlay-wrap .overlay-inner .theme--blue",
                           ".overlay-wrap .overlay-inner .theme--light-blue"];
 
                      y = [".sixtyseven-thirtythree .palm--one-half.desk--one-third", " .desk--two-third",
                           " .palm--one-whole.desk--one-half"," .palm--one-whole.desk--one-third",
                           ":not(.sixtyseven-thirtythree) .palm--one-half.desk--one-third" ];
 
                      client.pause(2000)
 
                    // appending the selectors x and y
 
                      for(let k=0; k<x.length; k++){
                        for(let l=0; l<y.length; l++){                            
                           // client.source(() => {console.log(k,l);  });                             
                    //declaring properties 
                           properties = lightbox_props["deskprops_m_"+k+l] ('xs');
                            elementselector= x[k]+y[l];
                           // client.source(() => {console.log(elementselector); });                            
                            callback.multiloop(client, elementselector , properties, 'xs');
                        }
                    };
 
                       client.pause(2000)
                       client.click('.close');                 
                 });
               }
 
           });
        }
     },
    

     //Ending the browser session
     'Ending Browser Session': function(client){
        client.pause(5000);
        client.end();
      }


}
