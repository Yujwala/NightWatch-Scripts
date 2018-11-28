var mobile_comparison_carousel_props,callback,size,
	pageurl = require('../../pageurls.js');
    
function globalProps(client){
    pageObj = client.page.mobile_comparison_carousel_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	mobile_comparison_carousel_props = require('./mobile_comparison_carousel_props.js')(client);	
}

module.exports = {
    '@tags': ['mobile-comparison-table','mobile'],
      //Opening the URL
      "1. Opening the Mobile URL": function(client) {
              globalProps(client);
              //client.maximizeWindow();    
              callback.openURL(client,pageurl.NW_PER_TEST);
              console.log("--Mobile--"+pageurl.NW_PER_TEST); 
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

     "3. Loyalty Sales Accordion Title Focus and click functionality":function(client){
       
        loyaltySalesAccordionTitleselector = pageObj.elements.loyaltySalesAccordionTitle.selector,
        loyaltySalesAccordionTitleOnHoverselector=pageObj.elements.loyaltySalesAccordionTitleOnHover.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesAccordionTitleselector,results=>{
                
              if(results.value.length>0) {
               properties = mobile_comparison_carousel_props.loyaltySalesAccordionTitleOnHoverProp('xs');
              // results.value.forEach(function(element, index){
               //if(index==0){
                   client.moveToElement(loyaltySalesAccordionTitleselector, 10,10)
                      client.pause(1000)
                      .mouseButtonDown(0)
                      .pause(3000)                      
                callback.singleElem(client, loyaltySalesAccordionTitleOnHoverselector, properties, 'xs'); 
                client.expect.element('.Mobile_sales_Shevrondown:not(.Mobile_sales_ShevronUp)').to.have.css('background-image').which.contains('chevron_down'); 
            }
                //Testing click functionality
                   client.pause(1000) 
                client.mouseButtonUp(0)                                         
                client.expect.element('.loyalty-sales-content-cell.loyalty-sales-morecontent-cell').to.have.css('display').which.equals('block');
                client.expect.element('.Mobile_sales_ShevronUp').to.have.css('background-image').which.contains('chevron_up'); 
               // });
           // }              
               
            });
        }    
    
    },

    "4. Loyalty Sales Accordion Title properties":function(client){
       
        loyaltySalesAccordionTitleselector = pageObj.elements.loyaltySalesAccordionTitle.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesAccordionTitleselector,results=>{
              if(results.value.length>0) {
               properties = mobile_comparison_carousel_props.loyaltySalesAccordionTitleProp('xs');
              
               callback.multiloop(client, loyaltySalesAccordionTitleselector , properties, 'xs');
                                    
                }
            });
        }    
    
    },

    "5. Loyalty Sales CTA properties":function(client){
       
        loyaltySalesCTAselector = pageObj.elements.loyaltySalesCTA.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesCTAselector,results=>{
              if(results.value.length>0) {
                   
                properties = mobile_comparison_carousel_props.loyaltySalesCTAProp('xs');  
                callback.multiloop(client, loyaltySalesCTAselector , properties, 'xs');
      
                }
            });
        }    
    
    },
   
      "6. Loyalty Sales Accordion Button Hover and Focus(Background & Text color) properties":function(client){
       
        ctaPrimaryselector = pageObj.elements.ctaPrimary.selector,
        ctaPrimaryHoverselector = pageObj.elements.ctaPrimaryOnHover.selector,
        ctaPrimaryFocusselector = pageObj.elements.ctaPrimaryOnFocus.selector,
        globalProps(client);
        client.refresh();
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
           client.elements('css selector',ctaPrimaryselector,results=>{
         if(results.value.length>0) {
               properties = mobile_comparison_carousel_props.ctahoverProp('xs');
               propertiesfocus = mobile_comparison_carousel_props.ctafocusProp('xs');
               results.value.forEach(function(element, index){
                if(index==0){
               client.moveToElement(ctaPrimaryselector, 10,10)
                    .pause(1000)
               callback.singleElem(client, ctaPrimaryHoverselector, properties, 'xs');
               client.mouseButtonDown(0)
                  .pause(1000)                      
                    callback.singleElem(client, ctaPrimaryFocusselector, propertiesfocus, 'xs'); }
                                                                          
                });
            }              
               
            });
        }    
    
      },
       
    // Check for Carousel points properties

    "7. Carousel Points properties":function(client){
       
        carouselPtsselector = pageObj.elements.carouselPts.selector,
        activePts = pageObj.elements.activecarouselPts.selector,
        notactivepts = pageObj.elements.notactivecarouselPts.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',carouselPtsselector,results=>{
              if(results.value.length>0) {
               // Header Properties
                properties = mobile_comparison_carousel_props.dots_active_Prop('xs');
                properties2 = mobile_comparison_carousel_props.dots_notactive_Prop('xs');
                callback.multiloop(client, activePts , properties, 'xs');
                callback.multiloop(client, notactivepts , properties2, 'xs');
      
                }
            });
        }    
    
    },
    // Check for Comparison block properties

    "8. Comparison block properties":function(client){
       
        comparisonselector = pageObj.elements.comparisonmainblock.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',comparisonselector,results=>{
              if(results.value.length>0) {
              
                properties = mobile_comparison_carousel_props.comparisonBlockProp('xs');
                callback.multiloop(client, comparisonselector , properties, 'xs');
      
                }
            });
        }    
    
    },


      //Check for Fixed Header Properties

   "9. Fixed Header/Footer Cell Properties":function(client) {
          
        fixedHeaderselector = pageObj.elements.fixedHeaderCell.selector,
        fixedFooterselector = pageObj.elements.fixedFooterCell.selector,
        globalProps(client);
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
        client.elements('css selector',fixedHeaderselector,results=>{
          if(results.value.length>0) {
           // Header Properties
            properties = mobile_comparison_carousel_props.fixedHeaderProp('xs');  
            callback.multiloop(client, fixedHeaderselector , properties, 'xs');
  
            }
        });

        client.elements('css selector',fixedFooterselector,results=>{
            if(results.value.length>0) {
              //Footer Properties
              properties = mobile_comparison_carousel_props.fixedFooterProp('xs');  
              callback.multiloop(client, fixedFooterselector , properties, 'xs');
    
            }
        });
       }
       
 
     },

     "10. Loyalty Sales header/footer Title properties":function(client){
       
        loyaltySalesTitleselector = pageObj.elements.loyaltySalesTitle.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesTitleselector,results=>{
              if(results.value.length>0) {
               // Header and footer Properties
                properties = mobile_comparison_carousel_props.loyaltySalesTitleProp('xs');  
                callback.multiloop(client, loyaltySalesTitleselector , properties, 'xs');
      
                }
            });
        }    
    
     },

     "11. Loyalty Sales header/footer background color properties":function(client){
       
        fixedHeaderCellSel=pageObj.elements.fixedHeaderCell.selector,
        globalProps(client);
        console.log(fixedHeaderCellSel)

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            
            client.elements('css selector', fixedHeaderCellSel ,results=>{
                if(results.value.length>0) {
                   
                    for(i=0;i<5;i++){
                        prop="hdFtBgProp"+(i+1);
                        //console.log(prop)
                        properties=mobile_comparison_carousel_props["hdFtBgProp"+(i+1)]('xs') ;
                        //console.log(properties)
                        bgSelector=".loyalty-sales-inner-account"+":nth-child("+(i+2)+") .fixed_Header";
                        //console.log(bgSelector);
                        callback.multiloop(client, bgSelector , properties, 'xs');

                    }

                }
            });
  
          
        }    
    
     },

     "12. Loyalty Sales header Text properties":function(client){
       
        loyaltySalesTextselector = pageObj.elements.loyaltySalesHeaderText.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesTextselector,results=>{
              if(results.value.length>0) {
               // Header Properties
                properties = mobile_comparison_carousel_props.loyaltySalesHeaderTextProp('xs');  
                callback.multiloop(client, loyaltySalesTextselector , properties, 'xs');
      
                }
            });
        }    
    
     },

     "13. Loyalty Sales footer Text properties":function(client){
       
        loyaltySalesTextselector = pageObj.elements.loyaltySalesFooterText.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesTextselector,results=>{
              if(results.value.length>0) {
               // Header Properties
                properties = mobile_comparison_carousel_props.loyaltySalesFooterTextProp('xs');  
                callback.multiloop(client, loyaltySalesTextselector , properties, 'xs');
      
                }
            });
        }    
    
     },

    "14. Loyalty Sales Accordion Title Background property ":function(client){
       
        accordionselector = pageObj.elements.accordion.selector,
        accordionBgEvenselector=pageObj.elements.accordionBgEven.selector,
        accordionBgOddselector=pageObj.elements.accordionBgOdd.selector,
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',accordionselector,results=>{
              if(results.value.length>0) {
               propertiesEven = mobile_comparison_carousel_props.accordionBgEvenProp('xs');
               propertiesOdd = mobile_comparison_carousel_props.accordionBgOddProp('xs');
               callback.multiloop(client, accordionBgEvenselector , propertiesEven, 'xs');
               callback.multiloop(client, accordionBgOddselector , propertiesOdd, 'xs');
            }
            });
        }    
    
    },

   
    
    "15. Loyalty Sales Accordion Content cell List items and Paragraph properties":function(client){
       
        loyaltySalesAccordionContentListitemsselector = pageObj.elements.loyaltySalesAccordionContentListitems.selector,
        loyaltySalesAccordionContentParaselector = pageObj.elements.loyaltySalesAccordionContentPara.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',loyaltySalesAccordionContentListitemsselector,results=>{
              if(results.value.length>0) {
                properties = mobile_comparison_carousel_props.loyaltySalesAccordionContentProp('xs');  
               callback.multiloop(client, loyaltySalesAccordionContentListitemsselector , properties, 'xs');
               }
            });

            client.elements('css selector',loyaltySalesAccordionContentParaselector,results=>{
                if(results.value.length>0) {
                 properties = mobile_comparison_carousel_props.loyaltySalesAccordionContentProp('xs');  
                 callback.multiloop(client, loyaltySalesAccordionContentParaselector , properties, 'xs');
                 
                 }
              });
        }    
    
    },

    "16. CTA type M link, anchor tag properties":function(client){
       
        ctamAselector = pageObj.elements.ctamA.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',ctamAselector,results=>{
              if(results.value.length>0) {
                properties = mobile_comparison_carousel_props.ctamAProp('xs');  
               callback.multiloop(client, ctamAselector , properties, 'xs');
               }
            });
        }    
    
    },

    "17. Show More and Less link properties and functionality":function(client){
       
        showMoreselector = pageObj.elements.showMore.selector,
        showLessselector = pageObj.elements.showLess.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector',showMoreselector,results=>{
              if(results.value.length>0) {
                properties = mobile_comparison_carousel_props.showMoreLessProp('xs');  
               callback.multiloop(client, showMoreselector , properties, 'xs');
               }
            });

            client.elements('css selector',showLessselector,results=>{
                if(results.value.length>0) {
                  properties = mobile_comparison_carousel_props.showMoreLessProp('xs');  
                 callback.multiloop(client, showLessselector , properties, 'xs');
                 }
              });

              client.moveToElement(showMoreselector, 10,10)
                    .pause(1000)
               client.mouseButtonDown(0)
                  .pause(1000)
              propertiesfocus= mobile_comparison_carousel_props.showMoreLessFocusProp('xs');                     
               callback.singleElem(client, showMoreselector, propertiesfocus, 'xs');
               client.moveToElement(showLessselector, 10,10)
               .pause(1000)
              client.mouseButtonDown(0)
              .pause(1000)
              callback.singleElem(client, showLessselector, propertiesfocus, 'xs');


            
        }    
    
    },





   /* "16a. Carousel slider functionality":function(client){
        carouselsliderselector = pageObj.elements.carouselslider.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector','.carousel_main ul li',results=>{
              if(results.value.length>1) {
               noOfslides=results.value.length/2;
               console.log(noOfslides)
               for(i=1; i<noOfslides; i++){
               client.moveTo('.loyalty-sales', 50,50);
               console.log("moved to carousel"+i)
               //client.trigger('swiperight');  
               client.touchPerform([{
                action: 'press',
                options: {
                    x: 50,
                    y: 50
                }
            },{
                action: 'moveTo',
                options: {
                    x: 10,
                    y: 50
                }
            },{
                action: 'release'
            }]);
               console.log("touch working")                         
               }
                        
               }
            });
        }    
    
    },


    "16b. Carousel slider functionality":function(client){
        carouselsliderselector = pageObj.elements.carouselslider.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector','.carousel_main ul:not(.footer_carousel_points) li',results=>{
              if(results.value.length>1) {
               noOfslides=results.value.length;
               console.log(noOfslides)
               for(i=1; i<noOfslides; i++){
               client.moveToElement('.loyalty-sales', 50,50)
               console.log("moved to carousel"+i)
               //client.trigger('swiperight');
               client.pause(1000)  
               client.mouseButtonDown(0)
               .pause(1000)  
               client.moveTo('.loyalty-sales', 10,50)
               .pause(1000)  
               client.mouseButtonUp(0)
               .pause(3000)
                                     
               }
                        
               }
            });
        }    
    
    },

    "16c. Carousel slider functionality":function(client){
        carouselsliderselector = pageObj.elements.carouselslider.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
            client.elements('css selector','.carousel_main ul:not(.footer_carousel_points) li',results=>{
              if(results.value.length>1) {
               noOfslides=results.value.length;
               console.log(noOfslides)
               for(i=1; i<noOfslides; i++){
               client.moveToElement('.loyalty-sales', 50,50);
               client.touchDown(50,50)
               client.pause(3000)
               client.touchFlick('.loyalty-sales',10,50,2);                                     
               }
                        
               }
            });
        }    
    
    },*/




     //Ending the browser session
     'Ending Browser Session': function(client){
        client.pause(5000);
        client.end();
      }

}
