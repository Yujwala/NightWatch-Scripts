var pageurl = require('../../pageurls.js'),
    pageObj,frb_investment_props,callback,rteCallback,size,brand;

function globalProps(client) {
    pageObj = client.page.frb_investment_selectors(),
	callback = client.page.common(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    frb_investment_props = require('./frb_investment_props.js')(client);
}

module.exports = {
    '@tags': ['frb-investment-desktop', 'desktop', 'frb-investment'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client, pageurl.RBS_PER_FRB_INVESTMENT);
        console.log("--Desktop--" + pageurl.RBS_PER_FRB_INVESTMENT);
    },

    "1 Check for header properties": function (client) {
        var headerGroup = pageObj.elements.headerGroup.selector,
            themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector,
            headerHeadline = pageObj.elements.headerHeadline.selector,
            headerSignPost = pageObj.elements.headerSignPost.selector;
            callback.scrollToElement(client, headerGroup);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeBlueProps('lg');
                    callback.multiloop(client, themeBlueCls, properties, 'lg');
                    client.source(() => {
                        console.log("Blue Theme");
                    });
                    
                }
            });

            //Light Blue Theme
            client.elements('css selector', themeLightBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeLightBlueProps('lg');
                    callback.multiloop(client, themeLightBlueCls, properties, 'lg');
                    client.source(() => {
                        console.log("Light Blue Theme");
                    });

                }
            });

            //White Theme
            client.elements('css selector', themeWhiteCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeWhiteProps('lg');
                    callback.multiloop(client, themeWhiteCls, properties, 'lg');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            //header properties
            client.elements('css selector', headerGroup, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.headerGroupProps('lg');
                    callback.multiloop(client, headerGroup, properties, 'lg');
                }
            });
        }
        client.elements('css selector', headerHeadline, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.headerHeadlineProps('lg');
                callback.multiloop(client, headerHeadline, properties, 'lg');
            }
        });

        client.elements('css selector', headerSignPost, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.headerSignPostProps('lg');
                callback.multiloop(client, headerSignPost, properties, 'lg');
            }
        });
    },


    "2 Check for ul properties": function (client) {
        var ulSel = pageObj.elements.ulSel.selector,
            liSel = pageObj.elements.liSel.selector,
            radio = pageObj.elements.radio.selector,
            radioHorizontal = pageObj.elements.radioHorizontal.selector,
            labelRadio = pageObj.elements.labelRadio.selector,
            labelRte = pageObj.elements.labelRte.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', ulSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.ulSelProps('lg');
                    callback.multiloop(client, ulSel, properties, 'lg');
                }
            });

            client.elements('css selector', liSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.liSelProps('lg');
                    callback.multiloop(client, liSel, properties, 'lg');
                }
            });
            client.elements('css selector', radio, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.radioProps('lg');
                    callback.multiloop(client, radio, properties, 'lg');
                }
            });
        }
        client.elements('css selector', radioHorizontal, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.radioHorizontalProps('lg');
                callback.multiloop(client, radioHorizontal, properties, 'lg');
            }
        });
        client.elements('css selector', labelRadio, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.labelRadioProps('lg');
                callback.multiloop(client, labelRadio, properties, 'lg');
                client.expect.element(labelRadio).to.have.css('background-image').which.contains('radio.png');
                client.expect.element(labelRadio).to.have.css('transition').which.contains("background-image 0.2s ease-in-out 0s, background-color 0.4s ease-in-out 0s");
            }
        });

        client.elements('css selector', labelRte, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.labelRteProps('lg');
                rteCallback.rteElem(client, labelRte, properties, 'fs12', 'lg');
            }
        });

    },

    "3 Check for form properties": function (client) {
        var formSection = pageObj.elements.formSection.selector,
            pSel = pageObj.elements.pSel.selector,
            infoUl = pageObj.elements.infoUl.selector,
            infoLi = pageObj.elements.infoLi.selector,
            infoLiTitle = pageObj.elements.infoLiTitle.selector,
            infoLiNumber = pageObj.elements.infoLiNumber.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', formSection, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.formSectionProps('lg');
                    callback.multiloop(client, formSection, properties, 'lg');

                }
            });

            client.elements('css selector', pSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.pSelProps('lg');
                    callback.multiloop(client, pSel, properties, 'lg');

                }
            });

            client.elements('css selector', infoUl, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoUlProps('lg');
                    callback.multiloop(client, infoUl, properties, 'lg');
                }
            });

            client.elements('css selector', infoLi, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiProps('lg');
                    callback.multiloop(client, infoLi, properties, 'lg');
                }
            });
            client.elements('css selector', infoLiTitle, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiTitleProps('lg');
                    callback.multiloop(client, infoLiTitle, properties, 'lg');
                }
            });
            client.elements('css selector', infoLiNumber, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiNumberProps('lg');
                    callback.multiloop(client, infoLiNumber, properties, 'lg');
                }
            });
        }
    },

    "4 Check for checkbox properties": function (client) {
        var checkboxSel = pageObj.elements.checkboxSel.selector,
            checker = pageObj.elements.checker.selector,
            checkboxLabel = pageObj.elements.checkboxLabel.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', checkboxSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxSelProps('lg');
                    callback.multiloop(client, checkboxSel, properties, 'lg');

                }
            });

            client.elements('css selector', checker, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkerProps('lg');
                    callback.multiloop(client, checker, properties, 'lg');
                    client.expect.element(checker).to.have.css('background-image').which.contains('checkbox.png');

                }
            });
            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxLabelProps('lg');
                    callback.multiloop(client, checkboxLabel, properties, 'lg');


                }
            });
            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxRteProps('lg');
                    rteCallback.rteElem(client, checkboxLabel, properties, '', 'lg');
                }
            });
        }

    },

    "5 Check for button properties": function (client) {
        var btn = pageObj.elements.btn.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', btn, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.btnProps('lg');
                    callback.multiloop(client, btn, properties, 'lg');
                    client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_bgimg);
                }
            });
        }

    },

    
        "6 checking functionality of radiobutton and checkbox": function (client) {
            var radioLink= pageObj.elements.radioLink.selector,
            labelRadio = pageObj.elements.labelRadio.selector,
            labelRadioFocus = pageObj.elements.labelRadioFocus.selector,
            btn = pageObj.elements.btn.selector,
            btnFocus = pageObj.elements.btnFocus.selector;
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                //clicking on one radio button to check the background image
                client.elements('css selector', labelRadio, results => {
                    if (results.value.length > 0) {
                        client.click(labelRadio);
                        client.pause(2000);
                        client.expect.element(labelRadio).to.have.css('background-image').which.contains('radio-checked.png');
                    }
                });
                
                //radio button focus
                client.moveToElement(labelRadio, 10, 10);
                client.mouseButtonDown(labelRadio);
                client.pause(2000);
                client.moveToElement(labelRadioFocus, 10, 10);
                client.pause(2000);
                client.elements('css selector', labelRadioFocus, results => {
                    if (results.value.length > 0) {
                        properties = frb_investment_props.FocusProps('lg');
                        callback.singleElem(client, labelRadioFocus, properties, 'lg');
    
                    }
                });
                client.elements('css selector', radioLink, results => {
                    if (results.value.length > 0) {
                        results.value.forEach(element => {
                            client.elementIdClick(element.ELEMENT);
                            client.pause(1000);

                        });
    
                    }
                });
                // button properties after visible 
                client.waitForElementVisible(btn, 3000);
                client.pause(2000);
                client.elements('css selector', btn, results => {
                    if (results.value.length > 0) {
                        properties = frb_investment_props.btnProceedProps('lg');
                        callback.multiloop(client, btn, properties, 'lg');
                        client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_btn_bgimg);
                    }
                });
    
                //button hover
                client.moveToElement(btn, 20, 20);
                client.pause(2000);
                client.elements('css selector', btn, results => {
                    if (results.value.length > 0) {
                        properties = frb_investment_props.HoverProps('lg');
                        callback.multiloop(client, btn, properties, 'lg');
                        client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_btn_hover);
                    }
                });
    
                //button focus
                client.moveToElement(btn, 10, 10);
                client.mouseButtonDown(btn);
                client.pause(6000);
                client.moveToElement(btnFocus, 10, 10);
                client.pause(6000);
                client.elements('css selector', btnFocus, results => {
                    if (results.value.length > 0) {
                        properties = frb_investment_props.FocusProps('lg');
                        callback.multiloop(client, btnFocus, properties, 'lg');
    
                    }
                });
    
    
                client.click(btn);
                client.pause(5000);
            }
        },
    
    "Ending the session": function (client) {
        client.end();
    }

}; 
