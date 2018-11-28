var pageurl = require('../../pageurls.js'),
    pageObj,faq_tool_props,callback,size,brand;

function globalProps(client) {
    pageObj = client.page.faq_tool_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	var brandFile = client.globals.brand;
	brand = require('../../branding/'+brandFile);
	faq_tool_props = require('./faq_tool_props.js')(client);
}

module.exports = {
    '@tags': ['mobile', 'faq-tool', 'faq-tool-mobile'],
    " 1 Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_MOB_FAQ_TOOL);
        console.log("--Mobile--" + pageurl.NW_PER_MOB_FAQ_TOOL);
    },

    //Resize the window for mobile
    "2. Resize The Window":function(client){
        var  size = client.globals.size.widths;
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(500);
             client.refresh();
             client.pause(500);
      },

    "3 Checking FAQ shelf padding": function(client) {
        var faqShelf = pageObj.elements.faqShelf.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', faqShelf, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqShelf('xs');
                    callback.multiloop(client, faqShelf, Properties, 'xs');
                }
            });
        }

    },

    "4 Checking header groups": function(client) {
        var hdgroup = pageObj.elements.hdgroup.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', hdgroup, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.hdgroup('xs');
                    callback.multiloop(client, hdgroup, Properties, 'xs');
                }
            });
        }

    },

   "5 Checking  Carousel properties": function(client) {
        var faqCarousel = pageObj.elements.faqCarousel.selector;
        var faqSlider = pageObj.elements.faqSlider.selector;
        var faqItem = pageObj.elements.faqItem.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', faqCarousel, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqCarousel('xs');
                    callback.multiloop(client, faqCarousel, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', faqSlider, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqSlider('xs');
                    callback.multiloop(client, faqSlider, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', faqItem, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqItem('xs');
                    callback.multiloop(client, faqItem, Properties, 'xs');
                }
            });
        }

    },

    "6 Checking for background color ": function(client) {
        var bluebgcolor = pageObj.elements.bluebgcolor.selector,
            offwhitebgcolor = pageObj.elements.offwhitebgcolor.selector,
            lightbluebgcolor = pageObj.elements.lightbluebgcolor.selector,
            whitebgcolor = pageObj.elements.whitebgcolor.selector,
            whitebgheadline = pageObj.elements.whitebgheadline.selector,
            lightbluebgheadline = pageObj.elements.lightbluebgheadline.selector,
            offwhitebgheadline = pageObj.elements.offwhitebgheadline.selector,
            bluebgheadline = pageObj.elements.bluebgheadline.selector;

        //Background color of themes
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', bluebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.bluebgcolor('xs');
                    callback.multiloop(client, bluebgcolor, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', offwhitebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.offwhitebgcolor('xs');
                    callback.multiloop(client, offwhitebgcolor, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', lightbluebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.lightbluebgcolor('xs');
                    callback.multiloop(client, lightbluebgcolor, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', whitebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.whitebgcolor('xs');
                    callback.multiloop(client, whitebgcolor, Properties, 'xs');
                }
            });
        }

        //Properties for headlines
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', whitebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.whitebgheadline('xs');
                    callback.multiloop(client, whitebgheadline, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', lightbluebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.lightbluebgheadline('xs');
                    callback.multiloop(client, lightbluebgheadline, Properties, 'xs');
                }
            });
        }


        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', offwhitebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.offwhitebgheadline('xs');
                    callback.multiloop(client, offwhitebgheadline, Properties, 'xs');
                }
            });
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', bluebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.bluebgheadline('xs');
                    callback.multiloop(client, bluebgheadline, Properties, 'xs');
                }
            });
        }

    },

    "7 Check for Overlay Properties" : function(client){
        
        var radioLink =  pageObj.elements.radioLink.selector,
        ollinkmob = pageObj.elements.ollinkmob.selector;
        client.elements('css selector', radioLink, results => {
            if (results.value.length > 0) {
                results.value.forEach(element => {
                    client.elementIdClick(element.ELEMENT);
                    client.moveToElement(ollinkmob,10,10);
                    client.click(ollinkmob);
                    client.pause(3000);
                    client.click('.close.faqOverlayClose');
                    client.pause(1000);                               
                });

            }
        });


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
            brandOddColsLink = pageObj.elements.brandOddColsLink.selector,
            brandEvenCols = pageObj.elements.brandEvenCols.selector,
            brandEvenColsArr = pageObj.elements.brandEvenColsArr.selector,
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

            blueOddCols = pageObj.elements.blueOddCols.selector,
            blueOddColsArr = pageObj.elements.blueOddColsArr.selector,
            blueEvenCols = pageObj.elements.blueEvenCols.selector,
            blueEvenColsArr = pageObj.elements.blueEvenColsArr.selector,
            blueOddColsLink = pageObj.elements.blueOddColsLink.selector,
            blueEvenColsLink = pageObj.elements.blueEvenColsLink.selector,

            focusEvenCols = pageObj.elements.focusEvenCols.selector,
            headerGroup = pageObj.elements.headerGroup.selector,
            focusOddCols = pageObj.elements.focusOddCols.selector;

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
                            Properties = faq_tool_props.oddCols('xs');
                            callback.multiloop(client, oddCols, Properties, 'xs');
                            //for Anchor links
                            Properties = faq_tool_props.oddColsLink('xs');
                            callback.multiloop(client, oddColsLink, Properties, 'xs');
                            //for arrows
                            Properties = faq_tool_props.oddColsArr('xs');
                            callback.multiloop(client, oddColsArr, Properties, 'xs');
                        })
                    });

                    // FAQ  columns of Even no
                    client.elements('css selector', evenCols, function(result) {
                        result.value.forEach(function(element, index) {
                            client.source(() => {
                                console.log("--- Element Even Number cols " + index + " -------");
                            });
                            Properties = faq_tool_props.evenCols('xs');
                            callback.multiloop(client, evenCols, Properties, 'xs');

                            Properties = faq_tool_props.evenColsLink('xs');
                            callback.multiloop(client, evenColsLink, Properties, 'xs');

                            //for arrows
                            Properties = faq_tool_props.evenColsArr('xs');
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
                    Properties = faq_tool_props.brandOddCols('xs');
                    callback.multiloop(client, brandOddColsLink, Properties, 'xs');
                    client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.brandOddColsArr('xs');
                    callback.multiloop(client, brandOddColsArr, Properties, 'xs');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', brandOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- brand bg Odd Hover props of element  -----");
                    });
                    Properties = faq_tool_props.brandOddColsHover('xs');
                    client.moveToElement(brandOddCols, 30, 30);
                    client.pause(1000);
                    callback.singleElem(client, brandOddCols, Properties, 'xs');
                    client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.brandOddColsArrHover('xs');
                    callback.singleElem(client, brandOddColsArr, Properties, 'xs');

                }
            });

            client.elements('css selector', brandEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- brand bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.brandEvenCols('xs');
                    callback.multiloop(client, brandEvenColsLink, Properties, 'xs');
                    client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                    //for arrows
                    Properties = faq_tool_props.brandEvenColsArr('xs');
                    callback.multiloop(client, brandEvenColsArr, Properties, 'xs');
                })
            });
            //For hover of FAQ  columns of Even no
            client.elements('css selector', brandEvenCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- brand bg Even Hover props of element -----");
                    });
                    client.moveToElement(brandEvenCols, 30, 30);
                    client.pause(1000);
                    Properties = faq_tool_props.brandEvenColsHover('xs');
                    callback.singleElem(client, brandEvenCols, Properties, 'xs');
                    client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.brandEvenColsArrHover('xs');
                    callback.singleElem(client, brandEvenColsArr, Properties, 'xs');
                };
            });

            //For FOCUS of FAQ  columns of Odd no
            client.elements('css selector', brandOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- brand bg Odd FOCUS props of element -----");
                    });
                    client.moveToElement(focusOddCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.brandOlnksFocus('xs');
                    callback.singleElem(client, brandOddColsLink, Properties, 'xs');
                    client.pause(1000);
                    client.click(headerGroup);

                }
            });
            //For FOCUS of FAQ  columns of Even no
            client.elements('css selector', brandEvenCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- brand bg Even FOCUS props of element  -----");
                    });
                    client.moveToElement(focusEvenCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.brandElnksFocus('xs');
                    callback.singleElem(client, brandEvenColsLink, Properties, 'xs');
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
                    Properties = faq_tool_props.grayOddCols('xs');
                    callback.multiloop(client, grayOddColsLink, Properties, 'xs');
                    client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.grayOddColsArr('xs');
                    callback.multiloop(client, grayOddColsArr, Properties, 'xs');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', grayOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Gray bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.grayOddColsHover('xs');
                    client.moveToElement(grayOddCols, 30, 30);
                    client.pause(1000);
                    callback.singleElem(client, grayOddCols, Properties, 'xs');
                    client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.grayOddColsArrHover('xs');
                    callback.singleElem(client, grayOddColsArr, Properties, 'xs');

                }
            });
            client.elements('css selector', grayEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- Gray bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.grayEvenCols('xs');
                    callback.multiloop(client, grayEvenColsLink, Properties, 'xs');
                    //client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img);
                    //for arrows
                    Properties = faq_tool_props.grayEvenColsArr('xs');
                    callback.multiloop(client, grayEvenColsArr, Properties, 'xs');
                })
            });
            //For hover of FAQ  columns of Even no
            client.elements('css selector', grayOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Gray bg Even Hover props of element -----");
                    });
                    client.moveToElement(grayEvenCols, 30, 30);
                    client.pause(1000);
                    Properties = faq_tool_props.grayEvenColsHover('xs');
                    callback.singleElem(client, grayEvenCols, Properties, 'xs');
                    //client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.grayEvenColsArrHover('xs');
                    callback.singleElem(client, grayEvenColsArr, Properties, 'xs');
                };
            });

            //For FOCUS of FAQ  columns of Odd no
            client.elements('css selector', grayOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Gray bg Odd FOCUS props of element -----");
                    });
                    client.moveToElement(focusOddCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.grayOlnksFocus('xs');
                    callback.singleElem(client, grayOddColsLink, Properties, 'xs');
                    client.pause(1000);
                    client.click(headerGroup);

                }
            });
            //For FOCUS of FAQ  columns of Even no
            client.elements('css selector', grayEvenCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Gray bg Even FOCUS props of element  -----");
                    });
                    client.moveToElement(focusEvenCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.grayElnksFocus('xs');
                    callback.singleElem(client, grayEvenColsLink, Properties, 'xs');
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
                    Properties = faq_tool_props.whiteOddCols('xs');
                    callback.multiloop(client, whiteOddColsLink, Properties, 'xs');
                    client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.whiteOddColsArr('xs');
                    callback.multiloop(client, whiteOddColsArr, Properties, 'xs');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- White bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.whiteOddColsHover('xs');
                    client.moveToElement(whiteOddCols, 10, 10);
                    client.pause(1000);
                    callback.singleElem(client, whiteOddCols, Properties, 'xs');
                    client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.whiteOddColsArrHover('xs');
                    callback.singleElem(client, whiteOddColsArr, Properties, 'xs');

                }
            });
            client.elements('css selector', whiteEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- White bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.whiteEvenCols('xs');
                    callback.multiloop(client, whiteEvenColsLink, Properties, 'xs');
                    client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img);
                    //for arrows
                    Properties = faq_tool_props.whiteEvenColsArr('xs');
                    callback.multiloop(client, whiteEvenColsArr, Properties, 'xs');
                })
            });
            //For hover of FAQ  columns of Even no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- White bg Even Hover props of element -----");
                    });
                    client.moveToElement(whiteEvenCols, 30, 30);
                    client.pause(1000);
                    Properties = faq_tool_props.whiteEvenColsHover('xs');
                    callback.singleElem(client, whiteEvenCols, Properties, 'xs');
                    client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.whiteEvenColsArrHover('xs');
                    callback.singleElem(client, whiteEvenColsArr, Properties, 'xs');
                };
            });

            //For FOCUS of FAQ  columns of Odd no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- White bg Odd FOCUS props of element -----");
                    });
                    client.moveToElement(focusOddCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.whiteOlnksFocus('xs');
                    callback.singleElem(client, whiteOddColsLink, Properties, 'xs');
                    client.pause(1000);
                    client.click(headerGroup);

                }
            });
            //For FOCUS of FAQ  columns of Even no
            client.elements('css selector', whiteEvenCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- White bg Even FOCUS props of element  -----");
                    });
                    client.moveToElement(focusEvenCols, 10, 10);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.whiteElnksFocus('xs');
                    callback.singleElem(client, whiteEvenColsLink, Properties, 'xs');
                    client.click(headerGroup);
                }
            });
            /* End for White bg check */

            /* Start for blue bg check */
            client.elements('css selector', blueOddCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- Blue bg Element ODD Number cols " + index + " -------");
                    });
                    //For h3 tag 
                    Properties = faq_tool_props.blueOddCols('xs');
                    callback.multiloop(client, blueOddColsLink, Properties, 'xs');
                    client.expect.element(blueOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.blueOddColsArr('xs');
                    callback.multiloop(client, blueOddColsArr, Properties, 'xs');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Blue bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.blueOddColsHover('xs');
                    client.moveToElement(blueOddCols, 10, 10);
                    client.pause(1000);
                    callback.singleElem(client, blueOddCols, Properties, 'xs');
                    client.expect.element(blueOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.blueOddColsArrHover('xs');
                    callback.singleElem(client, blueOddColsArr, Properties, 'xs');

                }
            });
            client.elements('css selector', blueEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- blue bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.blueEvenCols('xs');
                    callback.multiloop(client, blueEvenColsLink, Properties, 'xs');
                    client.expect.element(blueEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                    //for arrows
                    Properties = faq_tool_props.blueEvenColsArr('xs');
                    callback.multiloop(client, blueEvenColsArr, Properties, 'xs');
                })
            });
            //For hover of FAQ  columns of Even no
            client.elements('css selector', blueOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Blue bg Even Hover props of element -----");
                    });
                    client.moveToElement(blueEvenCols, 30, 30);
                    client.pause(1000);
                    Properties = faq_tool_props.blueEvenColsHover('xs');
                    callback.singleElem(client, blueEvenCols, Properties, 'xs');
                    client.expect.element(blueEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.blueEvenColsArrHover('xs');
                    callback.singleElem(client, blueEvenColsArr, Properties, 'xs');
                };
            });

            //For FOCUS of FAQ  columns of Odd no
            client.elements('css selector', blueOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Blue bg Odd FOCUS props of element -----");
                    });
                    client.moveToElement(focusOddCols, 30, 30);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.blueOlnksFocus('xs');
                    callback.singleElem(client, blueOddColsLink, Properties, 'xs');
                    client.pause(1000);
                    client.click(headerGroup);

                }
            });
            //For FOCUS of FAQ  columns of Even no
            client.elements('css selector', blueEvenCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Blue bg Even FOCUS props of element  -----");
                    });
                    client.moveToElement(focusEvenCols, 10, 10);
                    client.pause(1000);
                    client.mouseButtonDown(0);
                    Properties = faq_tool_props.blueElnksFocus('xs');
                    callback.singleElem(client, blueEvenColsLink, Properties, 'xs');
                    client.click(headerGroup);
                }
            });
            /* End for Blue bg check */
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

                                    client.elements('css selector', bluebgcolor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.brandArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });

                                    client.elements('css selector', lightbluebgcolor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.grayArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });

                                    client.elements('css selector', whitebgcolor, results => {
                                    if (results.value.length > 0) {
                                    Properties = faq_props.whiteArrows('xs');
                                    callback.singleElem(client, nxtArrow, Properties, 'xs');
                                    }
                                    });

                                    client.elements('css selector', offwhitebgcolor, results => {
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
    'Ending the session': function(client) {
        client.end();
    }

}