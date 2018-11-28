var pageurl = require('../../pageurls.js'),
    pageObj,faq_props,callback,size,brand;  

function globalProps(client){
    pageObj = client.page.faq_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    faq_props = require('./faq_props.js')(client);  
}    

module.exports = {
    '@tags': ['desktop', 'faq', 'faq-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_PER_FAQ);
            console.log("--Desktop--"+pageurl.RBS_PER_FAQ_TEST); 
    },
  /*  "Set class to shelf": function(client) {
        faqShelf = pageObj.elements.faqShelf.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',faqShelf,results=>{
                if(results.value.length>0) { 
                  client.pause(5000);
                 // client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--white')")
                  //client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--light-blue ')")
                  client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--blue')")
                  client.pause(1000);
                }
            });
        }      
    },*/
     "1. Checking FAQ Shelf padding ": function(client) {
            faqShelf = pageObj.elements.faqShelf.selector,
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',faqShelf,results=>{
                if(results.value.length>0) { 
                    //Shelf paddings
                    Properties = faq_props.faqShelf('lg');  
                    callback.singleElem(client,faqShelf, Properties, 'lg');
                }
            });
        }      
    },
    
    "2. Checking header-group Spacing": function(client) {
            headerGroup = pageObj.elements.headerGroup.selector
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',headerGroup,results=>{
                if(results.value.length>0) { 
                   //For checking header group spacing
                    Properties = faq_props.headerGroup('lg');  
                    callback.singleElem(client,headerGroup, Properties, 'lg');
                }
            });
        }      
    },
    "3. Checking header-group__headline fonts & Spacing": function(client) {
            hgHeadline = pageObj.elements.hgHeadline.selector,
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',hgHeadline,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.hgHeadline('lg');  
                    callback.singleElem(client,hgHeadline, Properties, 'lg');
                }
            });
        }      
    },
    "4. Checking header-group__sign-post fonts & Spacing": function(client) {
            hgSignpost = pageObj.elements.hgSignpost.selector,
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',hgSignpost,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.hgSignPost('lg');  
                    callback.singleElem(client,hgSignpost, Properties, 'lg');
                }
            });
        }      
    },
    "5. Checking for RTE fonts": function(client) {
            rteText = pageObj.elements.rteText.selector,
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',rteText,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.rteText('lg');  
                    callback.singleElem(client,rteText, Properties, 'lg');
                }
            });
        }      
    },
    "6. Checking for FAQ carousel": function(client) {
            faqCarousel = pageObj.elements.faqCarousel.selector,
            faqSlider=pageObj.elements.faqSlider.selector,
            faqItem=pageObj.elements.faqItem.selector,
          //  faqItemH3=pageObj.elements.faqItemH3.selector
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',faqCarousel,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.faqCarousel('lg');  
                    callback.singleElem(client,faqCarousel, Properties, 'lg');
                    // For carousel__slider wrapper
                    Properties = faq_props.faqSlider('lg');  
                    callback.singleElem(client,faqSlider, Properties, 'lg');
                    // For each slide in slider
                    Properties = faq_props.faqItem('lg');  
                    callback.singleElem(client,faqItem, Properties, 'lg');
                }
            });
        }      
    }, 
     
"7. Checking faq items based on Themes(bg color)": function(client) {
         brandBgColor = pageObj.elements.brandBgColor.selector,
         brandHeadline = pageObj.elements.brandHeadline.selector,
         brandSignpost = pageObj.elements.brandSignpost.selector,
         brandRTE = pageObj.elements.brandRTE.selector,
         grayBgColor = pageObj.elements.grayBgColor.selector,
         grayHeadline = pageObj.elements.grayHeadline.selector,
         graySignpost = pageObj.elements.graySignpost.selector,
         grayRTE = pageObj.elements.grayRTE.selector,
         whiteBgColor = pageObj.elements.whiteBgColor.selector,
         whiteHeadline = pageObj.elements.whiteHeadline.selector,
         whiteSignpost = pageObj.elements.whiteSignpost.selector,
         whiteRTE = pageObj.elements.whiteRTE.selector,
         globalProps(client);
     if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        client.elements('css selector', '.shelf--faq', results => {
            if (results.value.length > 0) {
                /* Start of background color as branding */
                client.elements('css selector', brandBgColor, results => {
                    if (results.value.length > 0) {
                        Properties = faq_props.brandBgColor('lg');
                        callback.singleElem(client, brandBgColor, Properties, 'lg');
                         //For branding bg checking header group headline color 
                        client.elements('css selector', brandHeadline, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.brandHeadline('lg');
                                 callback.singleElem(client, brandHeadline, Properties, 'lg');
                             }
                        });
                         //For branding bg checking header group signpost color
                        client.elements('css selector', brandSignpost, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.brandHeadline('lg');
                                 callback.singleElem(client, brandSignpost, Properties, 'lg');
                             }
                        });
                         //For branding bg RTE text color     
                        client.elements('css selector', brandRTE, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.brandHeadline('lg');
                                 callback.singleElem(client, brandRTE, Properties, 'lg');
                             }
                        });
                    }
                });
                /* End of background color as branding */

                /* Start of background color as Gray */
                client.elements('css selector', grayBgColor, results => {
                    if (results.value.length > 0) {
                        Properties = faq_props.grayBgColor('lg');
                        callback.singleElem(client, grayBgColor, Properties, 'lg');
                        //For gray bg checking header group headline color 
                        client.elements('css selector', grayHeadline, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.grayHeadline('lg');
                                 callback.singleElem(client, grayHeadline, Properties, 'lg');
                             }
                        });
                         //For gray bg checking header group signpost color
                        client.elements('css selector', graySignpost, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.grayHeadline('lg');
                                 callback.singleElem(client, graySignpost, Properties, 'lg');
                             }
                        });
                         //For gray bg RTE text color     
                        client.elements('css selector', grayRTE, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.grayHeadline('lg');
                                 callback.singleElem(client, grayRTE, Properties, 'lg');
                             }
                        });
                    }
                });
                /* END of background color as Gray */

                /* Start of background color as White */
                client.elements('css selector', whiteBgColor, results => {
                    if (results.value.length > 0) {
                        Properties = faq_props.whiteBgColor('lg');
                        callback.singleElem(client, whiteBgColor, Properties, 'lg');
                        //For gray bg checking header group headline color 
                        client.elements('css selector', whiteHeadline, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('lg');
                                 callback.singleElem(client, whiteHeadline, Properties, 'lg');
                             }
                        });
                         //For gray bg checking header group signpost color
                        client.elements('css selector', whiteSignpost, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('lg');
                                 callback.singleElem(client, whiteSignpost, Properties, 'lg');
                             }
                        });
                         //For gray bg RTE text color     
                        client.elements('css selector', whiteRTE, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('lg');
                                 callback.singleElem(client, whiteRTE, Properties, 'lg');
                             }
                        });
                    }
                });
                /* END of background color as White */

            }
        });
     }
 },
 "8. Checking FAQ carousel based on themes": function(client) {
         faqCarousel = pageObj.elements.faqCarousel.selector,
         oddCols = pageObj.elements.oddCols.selector,
         oddColsLink = pageObj.elements.oddColsLink.selector,
         oddColsArr = pageObj.elements.oddColsArr.selector,
         evenCols = pageObj.elements.evenCols.selector,
         evenColsLink = pageObj.elements.evenColsLink.selector,
         evenColsArr = pageObj.elements.evenColsArr.selector,

         brandOddCols = pageObj.elements.brandOddCols.selector,
         brandOddColsArr = pageObj.elements.brandOddColsArr.selector,
         brandEvenCols = pageObj.elements.brandEvenCols.selector,
         brandEvenColsArr = pageObj.elements.brandEvenColsArr.selector,
         brandOddColsLink = pageObj.elements.brandOddColsLink.selector,
         brandEvenColsLink = pageObj.elements.brandEvenColsLink.selector,

         grayOddCols = pageObj.elements.grayOddCols.selector,
         grayOddColsArr = pageObj.elements.grayOddColsArr.selector,
         grayEvenCols = pageObj.elements.grayEvenCols.selector,
         grayEvenColsArr = pageObj.elements.grayEvenColsArr.selector,
         grayOddColsLink = pageObj.elements.grayOddColsLink.selector,
         grayEvenColsLink = pageObj.elements.grayEvenColsLink.selector,

         whiteOddCols = pageObj.elements.whiteOddCols.selector,
         whiteOddColsArr = pageObj.elements.whiteOddColsArr.selector,
         whiteEvenCols = pageObj.elements.whiteEvenCols.selector,
         whiteEvenColsArr = pageObj.elements.whiteEvenColsArr.selector,
         whiteOddColsLink = pageObj.elements.whiteOddColsLink.selector,
         whiteEvenColsLink = pageObj.elements.whiteEvenColsLink.selector,

         focusEvenCols= pageObj.elements.focusEvenCols.selector,
         headerGroup = pageObj.elements.headerGroup.selector,
         focusOddCols= pageObj.elements.focusOddCols.selector;

         globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        client.elements('css selector', faqCarousel, results => {
            if (results.value.length > 0) {
            // FAQ  columns of Odd no
                client.elements('css selector', oddCols, function(result) {
                    result.value.forEach(function(element, index) {
                        client.source(() => {
                            console.log("--- Element ODD Number cols " + index + " -------");
                        });
                        //For h3 tag 
                        Properties = faq_props.oddCols('lg');
                        callback.multiloop(client, oddCols, Properties, 'lg');
                        //for Anchor links
                        Properties = faq_props.oddColsLink('lg');
                        callback.multiloop(client, oddColsLink, Properties, 'lg');
                        //for arrows
                        Properties = faq_props.oddColsArr('lg');
                        callback.multiloop(client, oddColsArr, Properties, 'lg');
                    })
                });

             // FAQ  columns of Even no
                 client.elements('css selector', evenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- Element Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.evenCols('lg');
                         callback.multiloop(client, evenCols, Properties, 'lg');

                         Properties = faq_props.evenColsLink('lg');
                         callback.multiloop(client, evenColsLink, Properties, 'lg');

                         //for arrows
                         Properties = faq_props.evenColsArr('lg');
                         callback.multiloop(client, evenColsArr, Properties, 'lg');
                     })
                 });

                /* Start for brand bg check */
                client.elements('css selector', brandOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- brand bg ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.brandOddCols('lg');
                     callback.multiloop(client, brandOddColsLink, Properties, 'lg');
                     client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                     //for arrows
                     Properties = faq_props.brandOddColsArr('lg');
                     callback.multiloop(client, brandOddColsArr, Properties, 'lg');

                    })
                });                    
                //For hover of FAQ  columns of Odd no
                 client.elements('css selector', brandOddCols, results =>  {
                     if (results.value.length > 0) {
                         client.source(() => {
                             console.log("--- brand bg Odd Hover props of element  -----");
                         });
                         Properties = faq_props.brandOddColsHover('lg');
                         client.moveToElement(brandOddCols, 30, 30);
                         client.pause(1000);
                         callback.singleElem(client, brandOddCols, Properties, 'lg');
                         client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img_hov);
                         client.moveToElement(faqCarousel, 10, 10);
                         client.pause(1000);

                         //for arrows
                         Properties = faq_props.brandOddColsArrHover('lg');
                         callback.singleElem(client, brandOddColsArr, Properties, 'lg');

                     }
                }); 
                 client.elements('css selector', brandEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- brand bg Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.brandEvenCols('lg');
                         callback.multiloop(client, brandEvenColsLink, Properties, 'lg');
                         client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                         //for arrows
                         Properties = faq_props.brandEvenColsArr('lg');
                         callback.multiloop(client, brandEvenColsArr, Properties, 'lg');
                     })
                 }); 
                //For hover of FAQ  columns of Even no
                     client.elements('css selector', brandEvenCols, results =>  {
                     if (results.value.length > 0) {
                            client.source(() => {
                                console.log("--- brand bg Even Hover props of element -----");
                            });
                             client.moveToElement(brandEvenCols, 30, 30);
                             client.pause(1000);
                             Properties = faq_props.brandEvenColsHover('lg');
                             callback.singleElem(client, brandEvenCols, Properties, 'lg');
                             client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img_hov);
                             client.moveToElement(faqCarousel, 10, 10);
                             client.pause(1000);

                             //for arrows color
                             Properties = faq_props.brandEvenColsArrHover('lg');
                             callback.singleElem(client, brandEvenColsArr, Properties, 'lg');
                        };
                    }); 

                   /* //For hover of FAQ columns when oat meal background
                    var  blueCols = pageObj.elements.blueCols.selector;
                    client.elements('css selector', blueCols, results =>  {
                        if (results.value.length > 0) {
                               client.source(() => {
                                   console.log("--- brand bg  Hover props of element -----");
                               });
                                client.moveToElement(blueCols, 30, 30);
                                client.pause(1000);
                                Properties = faq_props.blueCols('lg');
                                callback.singleElem(client, blueCols, Properties, 'lg');
                                client.expect.element(blueCols).to.have.css('background-image').which.contains('FAQ_shape.svg'),
                                client.moveToElement(faqCarousel, 10, 10);
                                client.pause(1000);
                           };
                       }); */
                    

                      //For FOCUS of FAQ  columns of Odd no
                        client.elements('css selector',brandOddCols,results=>{
                           if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- brand bg Odd FOCUS props of element -----");
                                });
                                    client.moveToElement(focusOddCols, 30, 30);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.brandOlnksFocus('lg');  
                                    callback.singleElem(client,brandOddColsLink, Properties, 'lg');
                                    client.pause(1000);
                                    client.click(headerGroup);

                            }
                        }); 
                        //For FOCUS of FAQ  columns of Even no
                         client.elements('css selector',brandEvenCols,results=>{
                            if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- brand bg Even FOCUS props of element  -----");
                                });
                                    client.moveToElement(focusEvenCols, 30, 30);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.brandElnksFocus('lg');  
                                    callback.singleElem(client,brandEvenColsLink, Properties, 'lg');
                                    client.click(headerGroup);
                            }
                        }); 

                /* End for brand bg check */


                /* Start for Gray bg check */
                client.elements('css selector', grayOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- Gray bg ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.grayOddCols('lg');
                     callback.multiloop(client, grayOddColsLink, Properties, 'lg');
                     client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img);
                     //for arrows
                     Properties = faq_props.grayOddColsArr('lg');
                     callback.multiloop(client, grayOddColsArr, Properties, 'lg');

                    })
                });                    
                //For hover of FAQ  columns of Odd no
                 client.elements('css selector', grayOddCols, results =>  {
                     if (results.value.length > 0) {
                         client.source(() => {
                             console.log("--- Gray bg ODD Hover props of element  -----");
                         });
                         Properties = faq_props.grayOddColsHover('lg');
                         client.moveToElement(grayOddCols, 30, 30);
                         client.pause(1000);
                         callback.singleElem(client, grayOddCols, Properties, 'lg');
                         client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img_hov);
                         client.moveToElement(faqCarousel, 10, 10);
                         client.pause(1000);

                         //for arrows
                         Properties = faq_props.grayOddColsArrHover('lg');
                         callback.singleElem(client, grayOddColsArr, Properties, 'lg');

                     }
                }); 
                 client.elements('css selector', grayEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- Gray bg Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.grayEvenCols('lg');
                         callback.multiloop(client, grayEvenColsLink, Properties, 'lg');
                         client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img);
                         //for arrows
                         Properties = faq_props.grayEvenColsArr('lg');
                         callback.multiloop(client, grayEvenColsArr, Properties, 'lg');
                     })
                 }); 
                //For hover of FAQ  columns of Even no
                     client.elements('css selector', grayOddCols, results =>  {
                     if (results.value.length > 0) {
                            client.source(() => {
                                console.log("--- Gray bg Even Hover props of element -----");
                            });
                             client.moveToElement(grayEvenCols, 30, 30);
                             client.pause(1000);
                             Properties = faq_props.grayEvenColsHover('lg');
                             callback.singleElem(client, grayEvenCols, Properties, 'lg');
                             client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img_hov);
                             client.moveToElement(faqCarousel, 10, 10);
                             client.pause(1000);

                             //for arrows color
                             Properties = faq_props.grayEvenColsArrHover('lg');
                             callback.singleElem(client,grayEvenColsArr, Properties, 'lg');
                        };
                    }); 
                   
                    //For FOCUS of FAQ  columns of Odd no
                        client.elements('css selector',grayOddCols,results=>{
                           if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- Gray bg Odd FOCUS props of element -----");
                                });
                                    client.moveToElement(focusOddCols, 30, 30);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.grayOlnksFocus('lg');  
                                    callback.singleElem(client,grayOddColsLink, Properties, 'lg');
                                    client.pause(1000);
                                     client.click(headerGroup);

                            }
                        }); 
                        //For FOCUS of FAQ  columns of Even no
                         client.elements('css selector',grayEvenCols,results=>{
                            if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- Gray bg Even FOCUS props of element  -----");
                                });
                                    client.moveToElement(focusEvenCols, 30, 30);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.grayElnksFocus('lg');  
                                    callback.singleElem(client,grayEvenColsLink, Properties, 'lg');
                                    client.click(headerGroup);
                            }
                        }); 
                /* End for Gray bg check */

                /* Start for White bg check */
                client.elements('css selector', whiteOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- White bg Element ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.whiteOddCols('lg');
                     callback.multiloop(client, whiteOddColsLink, Properties, 'lg');
                     client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img);
                     //for arrows
                     Properties = faq_props.whiteOddColsArr('lg');
                     callback.multiloop(client, whiteOddColsArr, Properties, 'lg');

                    })
                });                    
                //For hover of FAQ  columns of Odd no
                 client.elements('css selector', whiteOddCols, results =>  {
                     if (results.value.length > 0) {
                         client.source(() => {
                             console.log("--- White bg ODD Hover props of element  -----");
                         });
                         Properties = faq_props.whiteOddColsHover('lg');
                         client.moveToElement(whiteOddCols, 10, 10);
                         client.pause(1000);
                         callback.singleElem(client, whiteOddCols, Properties, 'lg');
                         client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img_hov);
                         client.moveToElement(faqCarousel, 10, 10);
                         client.pause(1000);

                         //for arrows
                         Properties = faq_props.whiteOddColsArrHover('lg');
                         callback.singleElem(client, whiteOddColsArr, Properties, 'lg');

                     }
                }); 
                 client.elements('css selector', whiteEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- White bg Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.whiteEvenCols('lg');
                         callback.multiloop(client, whiteEvenColsLink, Properties, 'lg');
                         client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img);
                         //for arrows
                         Properties = faq_props.whiteEvenColsArr('lg');
                         callback.multiloop(client, whiteEvenColsArr, Properties, 'lg');
                     })
                 }); 
                //For hover of FAQ  columns of Even no
                     client.elements('css selector', whiteOddCols, results =>  {
                     if (results.value.length > 0) {
                            client.source(() => {
                                console.log("--- White bg Even Hover props of element -----");
                            });
                             client.moveToElement(whiteEvenCols, 30, 30);
                             client.pause(1000);
                             Properties = faq_props.whiteEvenColsHover('lg');
                             callback.singleElem(client, whiteEvenCols, Properties, 'lg');
                             client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img_hov);
                             client.moveToElement(faqCarousel, 10, 10);
                             client.pause(1000);

                             //for arrows color
                             Properties = faq_props.whiteEvenColsArrHover('lg');
                             callback.singleElem(client,whiteEvenColsArr, Properties, 'lg');
                        };
                    }); 
                   
                    //For FOCUS of FAQ  columns of Odd no
                        client.elements('css selector',whiteOddCols,results=>{
                           if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- White bg Odd FOCUS props of element -----");
                                });
                                    client.moveToElement(focusOddCols, 30, 30);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.whiteOlnksFocus('lg');  
                                    callback.singleElem(client,whiteOddColsLink, Properties, 'lg');
                                    client.pause(1000);
                                     client.click(headerGroup);

                            }
                        }); 
                        //For FOCUS of FAQ  columns of Even no
                         client.elements('css selector',whiteEvenCols,results=>{
                            if(results.value.length>0) { 
                                client.source(() => {
                                    console.log("--- White bg Even FOCUS props of element  -----");
                                });
                                    client.moveToElement(focusEvenCols, 10, 10);
                                    client.pause(1000);
                                    client.mouseButtonDown(0);
                                    Properties = faq_props.whiteElnksFocus('lg');  
                                    callback.singleElem(client,whiteEvenColsLink, Properties, 'lg');
                                    client.click(headerGroup);
                            }
                        }); 
                /* End for White bg check */
            }
        });
    }
},
    // Start of FAQ SEARCH
    "9. Checking for FAQ Search": function(client) {
        faqSerWrap = pageObj.elements.faqSerWrap.selector,
        fqSerField = pageObj.elements.fqSerField.selector,
        fqSerInpt = pageObj.elements.fqSerInpt.selector,
        fqSerBtn = pageObj.elements.fqSerBtn.selector,
        brandfqSerBtn=pageObj.elements.brandfqSerBtn.selector,
        greyfqSerBtn=pageObj.elements.greyfqSerBtn.selector,
        whitefqSerBtn=pageObj.elements.whitefqSerBtn.selector;
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',faqSerWrap,results=>{
                if(results.value.length>0) { 
                    //Shelf paddings
                    Properties = faq_props.faqSerWrap('lg');  
                    callback.singleElem(client,faqSerWrap, Properties, 'lg');
                    //Search FieldSet
                    Properties = faq_props.fqSerField('lg');  
                    callback.singleElem(client,fqSerField, Properties, 'lg');
                    // search input
                    Properties = faq_props.fqSerInpt('lg');  
                    callback.singleElem(client,fqSerInpt, Properties, 'lg');
                    //Search btn
                    Properties = faq_props.fqSerBtn('lg');  
                    callback.singleElem(client,fqSerBtn, Properties, 'lg');
                    //For brand bg
                    client.elements('css selector',brandfqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.brandfqSerInpt('lg');  
                            callback.singleElem(client,fqSerInpt, Properties, 'lg');
                            Properties = faq_props.brandfqSerBtn('lg');  
                            callback.singleElem(client,brandfqSerBtn, Properties, 'lg');   
                        }
                    });
                     //For Gray bg
                    client.elements('css selector',greyfqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.grayfqSerInpt('lg');  
                            callback.singleElem(client,fqSerInpt, Properties, 'lg');
                            Properties = faq_props.greyfqSerBtn('lg');  
                            callback.singleElem(client,greyfqSerBtn, Properties, 'lg');   
                        }
                    });

                    //For White bg
                    client.elements('css selector',whitefqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.whitefqSerInpt('lg');  
                            callback.singleElem(client,fqSerInpt, Properties, 'lg');
                            Properties = faq_props.whitefqSerBtn('lg');  
                            callback.singleElem(client,whitefqSerBtn, Properties, 'lg');   
                        }
                    });


                    // click of search 
                    client.elements('css selector',fqSerInpt,results=>{
                        if(results.value.length>0) {  
                            client.setValue(fqSerInpt, 'RBS');//set input value
                            client.pause(500);
                            client.keys('\uE007');
                            client.pause(2000);
                        }
                    });
                   
                }
            });
        }      
    },

    "10 Check for Overlay Properties": function(client) {
       client.click('.overlay-link');
       client.waitForElementVisible('.faq--ans.faq--overlay', 5000)
        
    },

    'Ending the session': function(client){
      client.end();
    }
};