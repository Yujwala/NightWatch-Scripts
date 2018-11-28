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
    '@tags': ['desktop', 'faq', 'faq-mobile'],
    "1. Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_FAQ_MOB);
            console.log("--Mobile--"+pageurl.NW_PER_FAQ_MOB); 
    },
     //Resize the window for mobile
    "2. Resize The Window":function(client){
      var  size = client.globals.size.widths;
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(500);
           client.refresh();
           client.pause(500);
    },
     /*"Set class to shelf": function(client) {
        faqShelf = pageObj.elements.faqShelf.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',faqShelf,results=>{
                if(results.value.length>0) { 
                  client.pause(5000);
                // client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--white')")
                // client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--light-blue ')")
                client.execute("document.getElementsByClassName('shelf--faq')[0].setAttribute('class', 'shelf shelf--faq shelf-faq-theme-pattern theme--blue')")
                  client.pause(1000);
                }
            });
        }      
    },*/
    "3. Checking FAQ Shelf padding ": function(client) {
        faqShelf = pageObj.elements.faqShelf.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',faqShelf,results=>{
                if(results.value.length>0) { 
                    //Shelf paddings
                    Properties = faq_props.faqShelf('xs');  
                    callback.singleElem(client,faqShelf, Properties, 'xs');
                }
            });
        }      
    },
    "4. Checking header-group Spacing": function(client) {
        headerGroup = pageObj.elements.headerGroup.selector
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',headerGroup,results=>{
                if(results.value.length>0) { 
                    //For checking header group spacing
                    Properties = faq_props.headerGroup('xs');  
                    callback.singleElem(client,headerGroup, Properties, 'xs');
                }
            });
        }      
    },
    "5. Checking header-group__headline fonts & Spacing": function(client) {
        hgHeadline = pageObj.elements.hgHeadline.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',hgHeadline,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.hgHeadline('xs');  
                    callback.singleElem(client,hgHeadline, Properties, 'xs');
                }
            });
        }      
    },
    "6. Checking header-group__sign-post fonts & Spacing": function(client) {
        hgSignpost = pageObj.elements.hgSignpost.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',hgSignpost,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.hgSignPost('xs');  
                    callback.singleElem(client,hgSignpost, Properties, 'xs');
                }
            });
        }      
    },
    "7. Checking for RTE fonts": function(client) {
        rteText = pageObj.elements.rteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',rteText,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.rteText('xs');  
                    callback.singleElem(client,rteText, Properties, 'xs');
                }
            });
        }      
    },
    "8. Checking for FAQ carousel": function(client) {
        faqCarousel = pageObj.elements.faqCarousel.selector,
        faqSlider=pageObj.elements.faqSlider.selector,
        faqItem=pageObj.elements.faqItem.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',faqCarousel,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.faqCarousel('xs');  
                    callback.singleElem(client,faqCarousel, Properties, 'xs');
                    // For carousel__slider wrapper
                    Properties = faq_props.faqSlider('xs');  
                    callback.singleElem(client,faqSlider, Properties, 'xs');
                    // For each slide in slider
                    Properties = faq_props.faqItem('xs');  
                    callback.singleElem(client,faqItem, Properties, 'xs');
                }
            });
        }      
    },
    "9. Checking styles for Brand color background": function(client) {
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
        whiteRTE = pageObj.elements.whiteRTE.selector;
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', '.shelf--faq', results => {
                if (results.value.length > 0) {
                /* Start of background color as branding */
                    client.elements('css selector', brandBgColor, results => {
                        if (results.value.length > 0) {
                            Properties = faq_props.brandBgColor('xs');
                            callback.singleElem(client, brandBgColor, Properties, 'xs');
                            //For branding bg checking header group headline color 
                            client.elements('css selector', brandHeadline, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.brandHeadline('xs');
                                callback.singleElem(client, brandHeadline, Properties, 'xs');
                            }
                            });
                            //For branding bg checking header group signpost color
                            client.elements('css selector', brandSignpost, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.brandHeadline('xs');
                                callback.singleElem(client, brandSignpost, Properties, 'xs');
                            }
                            });
                            //For branding bg RTE text color     
                            client.elements('css selector', brandRTE, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.brandHeadline('xs');
                                callback.singleElem(client, brandRTE, Properties, 'xs');
                            }
                            });
                        }
                    });
                    /* End of background color as branding */

                    /* Start of background color as Gray */
                    client.elements('css selector', grayBgColor, results => {
                        if (results.value.length > 0) {
                            Properties = faq_props.grayBgColor('xs');
                            callback.singleElem(client, grayBgColor, Properties, 'xs');
                            //For gray bg checking header group headline color 
                            client.elements('css selector', grayHeadline, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.grayHeadline('xs');
                                callback.singleElem(client, grayHeadline, Properties, 'xs');
                            }
                            });
                            //For gray bg checking header group signpost color
                            client.elements('css selector', graySignpost, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.grayHeadline('xs');
                                callback.singleElem(client, graySignpost, Properties, 'xs');
                            }
                            });
                            //For gray bg RTE text color     
                            client.elements('css selector', grayRTE, results => {
                            if (results.value.length > 0) {
                                Properties = faq_props.grayHeadline('xs');
                                callback.singleElem(client, grayRTE, Properties, 'xs');
                            }
                            });
                        }
                    });
                /* END of background color as Gray */
                 /* Start of background color as White */
                client.elements('css selector', whiteBgColor, results => {
                    if (results.value.length > 0) {
                        Properties = faq_props.whiteBgColor('xs');
                        callback.singleElem(client, whiteBgColor, Properties, 'xs');
                        //For gray bg checking header group headline color 
                        client.elements('css selector', whiteHeadline, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('xs');
                                 callback.singleElem(client, whiteHeadline, Properties, 'xs');
                             }
                        });
                         //For gray bg checking header group signpost color
                        client.elements('css selector', whiteSignpost, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('xs');
                                 callback.singleElem(client, whiteSignpost, Properties, 'xs');
                             }
                        });
                         //For gray bg RTE text color     
                        client.elements('css selector', whiteRTE, results => {
                             if (results.value.length > 0) {
                                 Properties = faq_props.whiteHeadline('xs');
                                 callback.singleElem(client, whiteRTE, Properties, 'xs');
                             }
                        });
                    }
                });
                /* END of background color as White */
                }
            });
        }       
    },
    "10. Checking FAQ carousel": function(client) {
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
         whiteEvenColsLink = pageObj.elements.whiteEvenColsLink.selector;

         globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', faqCarousel, results => {
                if (results.value.length > 0) {
                // FAQ  columns of Odd no
                client.elements('css selector', oddCols, function(result) {
                    result.value.forEach(function(element, index) {
                        client.source(() => {
                            console.log("--- Element ODD Number cols " + index + " -------");
                        });
                        //For h3 tag 
                        Properties = faq_props.oddCols('xs');
                        callback.multiloop(client, oddCols, Properties, 'xs');
                        //for Anchor links
                        Properties = faq_props.oddColsLink('xs');
                        callback.multiloop(client, oddColsLink, Properties, 'xs');
                        //for arrows
                        Properties = faq_props.oddColsArr('xs');
                        callback.multiloop(client, oddColsArr, Properties, 'xs');
                    })
                });

             // FAQ  columns of Even no
                 client.elements('css selector', evenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- Element Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.evenCols('xs');
                         callback.multiloop(client, evenCols, Properties, 'xs');

                         Properties = faq_props.evenColsLink('xs');
                         callback.multiloop(client, evenColsLink, Properties, 'xs');

                         //for arrows
                         Properties = faq_props.evenColsArr('xs');
                         callback.multiloop(client, evenColsArr, Properties, 'xs');
                     })
                 });

                /* Start for brand bg check */
                client.elements('css selector', brandOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- brand bg ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.brandOddCols('xs');
                     callback.multiloop(client, brandOddColsLink, Properties, 'xs');
                     client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                     //for arrows
                     Properties = faq_props.brandOddColsArr('xs');
                     callback.multiloop(client, brandOddColsArr, Properties, 'xs');

                    })
                });                    
                 client.elements('css selector', brandEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- brand bg Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.brandEvenCols('xs');
                         callback.multiloop(client, brandEvenColsLink, Properties, 'xs');
                         client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                         //for arrows
                         Properties = faq_props.brandEvenColsArr('xs');
                         callback.multiloop(client, brandEvenColsArr, Properties, 'xs');
                     })
                 }); 
                /* End for brand bg check */
                /* Start for Gray bg check */
                client.elements('css selector', grayOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- Gray bg ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.grayOddCols('xs');
                     callback.multiloop(client, grayOddColsLink, Properties, 'xs');
                     client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img);
                     //for arrows
                     Properties = faq_props.grayOddColsArr('xs');
                     callback.multiloop(client, grayOddColsArr, Properties, 'xs');

                    })
                });                    
                client.elements('css selector', grayEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- Gray bg Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.grayEvenCols('xs');
                         callback.multiloop(client, grayEvenColsLink, Properties, 'xs');
                         client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img);
                         //for arrows
                         Properties = faq_props.grayEvenColsArr('xs');
                         callback.multiloop(client, grayEvenColsArr, Properties, 'xs');
                     })
                 }); 

                /* End for Gray bg check */

                /* Start for White bg check */
                client.elements('css selector', whiteOddCols, function(result) {
                    result.value.forEach(function(element, index) {
                     client.source(() => {
                         console.log("--- White bg ODD Number cols " + index + " -------");
                     });
                     //For h3 tag 
                     Properties = faq_props.whiteOddCols('xs');
                     callback.multiloop(client, whiteOddColsLink, Properties, 'xs');
                     client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props$faq_white_Odd_img);
                     //for arrows
                     Properties = faq_props.whiteOddColsArr('xs');
                     callback.multiloop(client, whiteOddColsArr, Properties, 'xs');

                    })
                });                    
                client.elements('css selector', whiteEvenCols, function(result) {
                     result.value.forEach(function(element, index) {
                         client.source(() => {
                             console.log("--- White bg Element Even Number cols " + index + " -------");
                         });
                         Properties = faq_props.whiteEvenCols('xs');
                         callback.multiloop(client, whiteEvenColsLink, Properties, 'xs');
                         client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img);
                         //for arrows
                         Properties = faq_props.whiteEvenColsArr('xs');
                         callback.multiloop(client, whiteEvenColsArr, Properties, 'xs');
                     })
                 }); 
                /* End for White bg check */
                }
            });
        }
    }, 
     "11. Checking FAQ sliders functionality ": function(client) {
        faqSlides = pageObj.elements.faqSlides.selector,
        faqNavBullets = pageObj.elements.faqNavBullets.selector,
        nxtArrow=pageObj.elements.nxtArrow.selector,
        prevArrow=pageObj.elements.prevArrow.selector,
        prevArrowDis=pageObj.elements.prevArrowDis.selector,
        nxtArrowDis=pageObj.elements.nxtArrowDis.selector;
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',faqSlides,results=>{
                if(results.value.length>0) {
                    // for Next arrows in slider
                    client.elements('css selector', faqNavBullets, result => {
                        bulletsCount=result.value.length;                      
                        if(nxtArrow){
                            client.getCssProperty(nxtArrow, "display", function(result) {
                                if(result.value!="none"){
                                    Properties = faq_props.nxtArrow('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');

                                    client.elements('css selector', brandBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.brandArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });

                                    client.elements('css selector', grayBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.grayArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });

                                    client.elements('css selector', whiteBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.whiteArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });
                                    for(let i=0;i<bulletsCount;i++){
                                    client.click(nxtArrow);
                                    client.pause(1000);
                                    client.source(() => {
                                    console.log("--- Next Arrow is clicked  ----");
                                    });
                                    }
                                    //for next disable arrow
                                    Properties = faq_props.arrowDis('xs');
                                    callback.singleElem(client, nxtArrowDis, Properties, 'xs');
                                }
                            });
                        }                        
                        // for Previous arrows in slider    
                        if(prevArrow){
                            client.getCssProperty(prevArrow, "display", function(result) {
                                if(result.value!="none"){
                                    Properties = faq_props.prevArrow('xs');
                                    callback.singleElem(client, prevArrow, Properties, 'xs');
                                    client.elements('css selector', brandBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.brandArrows('xs');
                                    callback.singleElem(client, prevArrow, Properties, 'xs');
                                    }
                                    });
                                    client.elements('css selector', grayBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.grayArrows('xs');
                                    callback.singleElem(client, prevArrow, Properties, 'xs');
                                    }
                                    });
                                    client.elements('css selector', whiteBgColor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.whiteArrows('xs');
                                    callback.singleElem(client, prevArrow, Properties, 'xs');
                                    }
                                    });                      
                                    for(let i=0;i<bulletsCount;i++){
                                    client.click(prevArrow);
                                    client.pause(1000);
                                    client.source(() => {
                                    console.log("--- Previous Arrow is clicked  ----");
                                    });
                                    }
                                    //for Previous disable arrow
                                    Properties = faq_props.arrowDis('xs');
                                    callback.singleElem(client, prevArrowDis, Properties, 'xs');
                                }
                            });
                        }
                    });
                    client.elements('css selector',faqNavBullets,function(result){
                        var slidesCount=result.value.length;
                        result.value.forEach(function(element,index) {
                            var targetId = faqSlides;
                            client.execute(function (targetId) {
                                document.querySelector(targetId).scrollIntoView();
                            }, [targetId]); 
                            client.elementIdClick(element.ELEMENT);
                            client.pause(1000);
                            client.source(() => {
                                console.log("--- Clicked on ---"+ index +"---Bullets----");
                            });
                        });
                    });
                }
            });
        }      
    },
    // Start of FAQ SEARCH
    "12. Checking for FAQ Search": function(client) {
        faqSerWrap = pageObj.elements.faqSerWrap.selector,
        fqSerField = pageObj.elements.fqSerField.selector,
        fqSerInpt = pageObj.elements.fqSerInpt.selector,
        fqSerBtn = pageObj.elements.fqSerBtn.selector,
        brandfqSerBtn=pageObj.elements.brandfqSerBtn.selector,
        greyfqSerBtn=pageObj.elements.greyfqSerBtn.selector,
         whitefqSerBtn=pageObj.elements.whitefqSerBtn.selector;
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',faqSerWrap,results=>{
                if(results.value.length>0) { 
                    //Shelf paddings
                    Properties = faq_props.faqSerWrap('xs');  
                    callback.singleElem(client,faqSerWrap, Properties, 'xs');
                    //Search FieldSet
                    Properties = faq_props.fqSerField('xs');  
                    callback.singleElem(client,fqSerField, Properties, 'xs');
                    // search input
                    Properties = faq_props.fqSerInpt('xs');  
                    callback.singleElem(client,fqSerInpt, Properties, 'xs');
                    //Search btn
                    Properties = faq_props.fqSerBtn('xs');  
                    callback.singleElem(client,fqSerBtn, Properties, 'xs');
                     //For brand bg
                    client.elements('css selector',brandfqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.brandfqSerInpt('xs');  
                            callback.singleElem(client,fqSerInpt, Properties, 'xs');
                            Properties = faq_props.brandfqSerBtn('xs');  
                            callback.singleElem(client,brandfqSerBtn, Properties, 'xs');   
                        }
                    });
                     //For Gray bg
                    client.elements('css selector',greyfqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.grayfqSerInpt('xs');  
                            callback.singleElem(client,fqSerInpt, Properties, 'xs');
                            Properties = faq_props.greyfqSerBtn('xs');  
                            callback.singleElem(client,greyfqSerBtn, Properties, 'xs');   
                        }
                    });

                    //For White bg
                    client.elements('css selector',whitefqSerBtn,results=>{
                        if(results.value.length>0) {  
                            Properties = faq_props.whitefqSerInpt('xs');  
                            callback.singleElem(client,fqSerInpt, Properties, 'xs');
                            Properties = faq_props.whitefqSerBtn('xs');  
                            callback.singleElem(client,whitefqSerBtn, Properties, 'xs');   
                        }
                    });
                   
                }
            });
        }      
    },
    'Ending the session': function(client){
      client.end();
    }
};