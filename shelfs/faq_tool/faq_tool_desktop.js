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
    '@tags': ['desktop', 'faq-tool', 'faq-tool-desktop'],
    " 1 Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_FAQ_TOOL);
        console.log("--Desktop--" + pageurl.NW_PER_FAQ_TOOL);
    },

    "2 Checking FAQ shelf padding": function(client) {
        var faqShelf = pageObj.elements.faqShelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', faqShelf, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqShelf('lg');
                    callback.multiloop(client, faqShelf, Properties, 'lg');
                }
            });
        }

    },

    "3 Checking header groups": function(client) {
        var hdgroup = pageObj.elements.hdgroup.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', hdgroup, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.hdgroup('lg');
                    callback.multiloop(client, hdgroup, Properties, 'lg');
                }
            });
        }

    },

    "4 Checking  Carousel properties": function(client) {
        var faqCarousel = pageObj.elements.faqCarousel.selector;
        var faqSlider = pageObj.elements.faqSlider.selector;
        var faqItem = pageObj.elements.faqItem.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', faqCarousel, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqCarousel('lg');
                    callback.multiloop(client, faqCarousel, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', faqSlider, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqSlider('lg');
                    callback.multiloop(client, faqSlider, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', faqItem, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.faqItem('lg');
                    callback.multiloop(client, faqItem, Properties, 'lg');
                }
            });
        }

    },

    "5 Checking for background color ": function(client) {
        var bluebgcolor = pageObj.elements.bluebgcolor.selector,
            offwhitebgcolor = pageObj.elements.offwhitebgcolor.selector,
            lightbluebgcolor = pageObj.elements.lightbluebgcolor.selector,
            whitebgcolor = pageObj.elements.whitebgcolor.selector,
            whitebgheadline = pageObj.elements.whitebgheadline.selector,
            lightbluebgheadline = pageObj.elements.lightbluebgheadline.selector,
            offwhitebgheadline = pageObj.elements.offwhitebgheadline.selector,
            bluebgheadline = pageObj.elements.bluebgheadline.selector;

        //Background color of themes
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', bluebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.bluebgcolor('lg');
                    callback.multiloop(client, bluebgcolor, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', offwhitebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.offwhitebgcolor('lg');
                    callback.multiloop(client, offwhitebgcolor, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', lightbluebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.lightbluebgcolor('lg');
                    callback.multiloop(client, lightbluebgcolor, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', whitebgcolor, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.whitebgcolor('lg');
                    callback.multiloop(client, whitebgcolor, Properties, 'lg');
                }
            });
        }

        //Properties for headlines
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', whitebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.whitebgheadline('lg');
                    callback.multiloop(client, whitebgheadline, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', lightbluebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.lightbluebgheadline('lg');
                    callback.multiloop(client, lightbluebgheadline, Properties, 'lg');
                }
            });
        }


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', offwhitebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.offwhitebgheadline('lg');
                    callback.multiloop(client, offwhitebgheadline, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', bluebgheadline, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.bluebgheadline('lg');
                    callback.multiloop(client, bluebgheadline, Properties, 'lg');
                }
            });
        }

    },

    "6 Check for Overlay Properties": function(client) {
        client.click('.overlay-link');
        client.pause('5000');
        client.waitForElementVisible('.overlay-content .overlay-inner .faq--ans.faq--overlay', 6000);
        client.pause('2000');

        var overlaystruct = pageObj.elements.overlaystruct.selector,
            olquestion = pageObj.elements.olquestion.selector,
            olp = pageObj.elements.olp.selector,
            olfaqinner = pageObj.elements.olfaqinner.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', overlaystruct, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.overlaystruct('lg');
                    callback.singleElem(client, overlaystruct, Properties, 'lg');
                }
            });
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                client.elements('css selector', olquestion, results => {
                    if (results.value.length > 0) {
                        Properties = faq_tool_props.olquestion('lg');
                        callback.singleElem(client, olquestion, Properties, 'lg');
                    }
                });
            }
        }
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', olp, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.olp('lg');
                    callback.singleElem(client, olp, Properties, 'lg');
                }
            });
        }

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', olfaqinner, results => {
                if (results.value.length > 0) {
                    Properties = faq_tool_props.olfaqinner('lg');
                    callback.singleElem(client, olfaqinner, Properties, 'lg');
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
                            Properties = faq_tool_props.oddCols('lg');
                            callback.multiloop(client, oddCols, Properties, 'lg');
                            //for Anchor links
                            Properties = faq_tool_props.oddColsLink('lg');
                            callback.multiloop(client, oddColsLink, Properties, 'lg');
                            //for arrows
                            Properties = faq_tool_props.oddColsArr('lg');
                            callback.multiloop(client, oddColsArr, Properties, 'lg');
                        })
                    });

                    // FAQ  columns of Even no
                    client.elements('css selector', evenCols, function(result) {
                        result.value.forEach(function(element, index) {
                            client.source(() => {
                                console.log("--- Element Even Number cols " + index + " -------");
                            });
                            Properties = faq_tool_props.evenCols('lg');
                            callback.multiloop(client, evenCols, Properties, 'lg');

                            Properties = faq_tool_props.evenColsLink('lg');
                            callback.multiloop(client, evenColsLink, Properties, 'lg');

                            //for arrows
                            Properties = faq_tool_props.evenColsArr('lg');
                            callback.multiloop(client, evenColsArr, Properties, 'lg');
                        })
                    });
                }
            });

            /* Start for brand bg check */
            client.elements('css selector', brandOddCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- brand bg ODD Number cols " + index + " -------");
                    });
                    //For h3 tag 
                    Properties = faq_tool_props.brandOddCols('lg');
                    callback.multiloop(client, brandOddColsLink, Properties, 'lg');
                    client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.brandOddColsArr('lg');
                    callback.multiloop(client, brandOddColsArr, Properties, 'lg');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', brandOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- brand bg Odd Hover props of element  -----");
                    });
                    Properties = faq_tool_props.brandOddColsHover('lg');
                    client.moveToElement(brandOddCols, 30, 30);
                    client.pause(1000);
                    callback.singleElem(client, brandOddCols, Properties, 'lg');
                    client.expect.element(brandOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.brandOddColsArrHover('lg');
                    callback.singleElem(client, brandOddColsArr, Properties, 'lg');

                }
            });

            client.elements('css selector', brandEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- brand bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.brandEvenCols('lg');
                    callback.multiloop(client, brandEvenColsLink, Properties, 'lg');
                    client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                    //for arrows
                    Properties = faq_tool_props.brandEvenColsArr('lg');
                    callback.multiloop(client, brandEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.brandEvenColsHover('lg');
                    callback.singleElem(client, brandEvenCols, Properties, 'lg');
                    client.expect.element(brandEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.brandEvenColsArrHover('lg');
                    callback.singleElem(client, brandEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.brandOlnksFocus('lg');
                    callback.singleElem(client, brandOddColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.brandElnksFocus('lg');
                    callback.singleElem(client, brandEvenColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.grayOddCols('lg');
                    callback.multiloop(client, grayOddColsLink, Properties, 'lg');
                    client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.grayOddColsArr('lg');
                    callback.multiloop(client, grayOddColsArr, Properties, 'lg');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', grayOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Gray bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.grayOddColsHover('lg');
                    client.moveToElement(grayOddCols, 30, 30);
                    client.pause(1000);
                    callback.singleElem(client, grayOddCols, Properties, 'lg');
                    client.expect.element(grayOddCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.grayOddColsArrHover('lg');
                    callback.singleElem(client, grayOddColsArr, Properties, 'lg');

                }
            });
            client.elements('css selector', grayEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- Gray bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.grayEvenCols('lg');
                    callback.multiloop(client, grayEvenColsLink, Properties, 'lg');
                    // client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img);
                    //for arrows
                    Properties = faq_tool_props.grayEvenColsArr('lg');
                    callback.multiloop(client, grayEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.grayEvenColsHover('lg');
                    callback.singleElem(client, grayEvenCols, Properties, 'lg');
                    //client.expect.element(grayEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_gray_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.grayEvenColsArrHover('lg');
                    callback.singleElem(client, grayEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.grayOlnksFocus('lg');
                    callback.singleElem(client, grayOddColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.grayElnksFocus('lg');
                    callback.singleElem(client, grayEvenColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.whiteOddCols('lg');
                    callback.multiloop(client, whiteOddColsLink, Properties, 'lg');
                    client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.whiteOddColsArr('lg');
                    callback.multiloop(client, whiteOddColsArr, Properties, 'lg');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- White bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.whiteOddColsHover('lg');
                    client.moveToElement(whiteOddCols, 10, 10);
                    client.pause(1000);
                    callback.singleElem(client, whiteOddCols, Properties, 'lg');
                    client.expect.element(whiteOddCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.whiteOddColsArrHover('lg');
                    callback.singleElem(client, whiteOddColsArr, Properties, 'lg');

                }
            });
            client.elements('css selector', whiteEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- White bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.whiteEvenCols('lg');
                    callback.multiloop(client, whiteEvenColsLink, Properties, 'lg');
                    client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img);
                    //for arrows
                    Properties = faq_tool_props.whiteEvenColsArr('lg');
                    callback.multiloop(client, whiteEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.whiteEvenColsHover('lg');
                    callback.singleElem(client, whiteEvenCols, Properties, 'lg');
                    client.expect.element(whiteEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_white_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.whiteEvenColsArrHover('lg');
                    callback.singleElem(client, whiteEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.whiteOlnksFocus('lg');
                    callback.singleElem(client, whiteOddColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.whiteElnksFocus('lg');
                    callback.singleElem(client, whiteEvenColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.blueOddCols('lg');
                    callback.multiloop(client, blueOddColsLink, Properties, 'lg');
                    client.expect.element(blueOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img);
                    //for arrows
                    Properties = faq_tool_props.blueOddColsArr('lg');
                    callback.multiloop(client, blueOddColsArr, Properties, 'lg');

                })
            });
            //For hover of FAQ  columns of Odd no
            client.elements('css selector', whiteOddCols, results => {
                if (results.value.length > 0) {
                    client.source(() => {
                        console.log("--- Blue bg ODD Hover props of element  -----");
                    });
                    Properties = faq_tool_props.blueOddColsHover('lg');
                    client.moveToElement(blueOddCols, 10, 10);
                    client.pause(1000);
                    callback.singleElem(client, blueOddCols, Properties, 'lg');
                    client.expect.element(blueOddCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Odd_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows
                    Properties = faq_tool_props.blueOddColsArrHover('lg');
                    callback.singleElem(client, blueOddColsArr, Properties, 'lg');

                }
            });
            client.elements('css selector', blueEvenCols, function(result) {
                result.value.forEach(function(element, index) {
                    client.source(() => {
                        console.log("--- blue bg Even Number cols " + index + " -------");
                    });
                    Properties = faq_tool_props.blueEvenCols('lg');
                    callback.multiloop(client, blueEvenColsLink, Properties, 'lg');
                    client.expect.element(blueEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img);
                    //for arrows
                    Properties = faq_tool_props.blueEvenColsArr('lg');
                    callback.multiloop(client, blueEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.blueEvenColsHover('lg');
                    callback.singleElem(client, blueEvenCols, Properties, 'lg');
                    client.expect.element(blueEvenCols).to.have.css('background-image').which.contains(brand.props.$faq_brand_Even_img_hov);
                    client.moveToElement(faqCarousel, 10, 10);
                    client.pause(1000);

                    //for arrows color
                    Properties = faq_tool_props.blueEvenColsArrHover('lg');
                    callback.singleElem(client, blueEvenColsArr, Properties, 'lg');
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
                    Properties = faq_tool_props.blueOlnksFocus('lg');
                    callback.singleElem(client, blueOddColsLink, Properties, 'lg');
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
                    Properties = faq_tool_props.blueElnksFocus('lg');
                    callback.singleElem(client, blueEvenColsLink, Properties, 'lg');
                    client.click(headerGroup);
                }
            });
            /* End for Blue bg check */

        }
    },




    'Ending the session': function(client) {
        client.end();
    }

}