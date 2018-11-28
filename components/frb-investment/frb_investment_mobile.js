var pageurl = require('../../pageurls.js'),
    pageObj,frb_investment_props,callback,rteCallback,size,brand;

function globalProps(client) {
    pageObj = client.page.frb_investment_selectors(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	var brandFile = client.globals.brand;
	brand = require('../../branding/'+brandFile);
	frb_investment_props = require('./frb_investment_props.js')(client);
}

module.exports = {
    '@tags': ['frb-investment-mobile', 'frb-investment', 'mobile'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client, pageurl.RBS_BUS_FRB_INVESTMENT_MOB);
        console.log("--Mobile--" + pageurl.RBS_BUS_FRB_INVESTMENT_MOB);
    },

    "1 Check for header properties": function (client) {
        var headerGroup = pageObj.elements.headerGroup.selector,
            themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector,
            headerHeadline = pageObj.elements.headerHeadline.selector,
            headerSignPost = pageObj.elements.headerSignPost.selector;
            callback.scrollToElement(client, headerGroup);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeBlueProps('xs');
                    callback.multiloop(client, themeBlueCls, properties, 'xs');
                    client.source(() => {
                        console.log("Blue Theme");
                    });
                }
            });

            //Light Blue Theme
            client.elements('css selector', themeLightBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeLightBlueProps('xs');
                    callback.multiloop(client, themeLightBlueCls, properties, 'xs');
                    client.source(() => {
                        console.log("Light Blue Theme");
                    });

                }
            });

            //White Theme
            client.elements('css selector', themeWhiteCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = frb_investment_props.themeWhiteProps('xs');
                    callback.multiloop(client, themeWhiteCls, properties, 'xs');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            //header properties
            client.elements('css selector', headerGroup, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.headerGroupProps('xs');
                    callback.multiloop(client, headerGroup, properties, 'xs');
                }
            });
        }
        client.elements('css selector', headerHeadline, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.headerHeadlineProps('xs');
                callback.multiloop(client, headerHeadline, properties, 'xs');
            }
        });

        client.elements('css selector', headerSignPost, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.headerSignPostProps('xs');
                callback.multiloop(client, headerSignPost, properties, 'xs');
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', ulSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.ulSelProps('xs');
                    callback.multiloop(client, ulSel, properties, 'xs');
                }
            });

            client.elements('css selector', liSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.liSelProps('xs');
                    callback.multiloop(client, liSel, properties, 'xs');
                }
            });
            client.elements('css selector', radio, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.radioProps('xs');
                    callback.multiloop(client, radio, properties, 'xs');
                }
            });
        }
        client.elements('css selector', radioHorizontal, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.radioHorizontalProps('xs');
                callback.multiloop(client, radioHorizontal, properties, 'xs');
            }
        });
        client.elements('css selector', labelRadio, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.labelRadioProps('xs');
                callback.multiloop(client, labelRadio, properties, 'xs');
                client.expect.element(labelRadio).to.have.css('background-image').which.contains('radio.png');
                client.expect.element(labelRadio).to.have.css('transition').which.contains("background-image 0.2s ease-in-out 0s, background-color 0.4s ease-in-out 0s");
            }
        });

        client.elements('css selector', labelRte, results => {
            if (results.value.length > 0) {
                properties = frb_investment_props.labelRteProps('xs');
                rteCallback.rteElem(client, labelRte, properties, 'fs12', 'xs');
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

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', formSection, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.formSectionProps('xs');
                  callback.multiloop(client, formSection, properties, 'xs');
                }
            });

            client.elements('css selector', pSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.pSelProps('xs');
                    callback.multiloop(client, pSel, properties, 'xs');
                }
            });

            client.elements('css selector', infoUl, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoUlProps('xs');
                    callback.multiloop(client, infoUl, properties, 'xs');
                }
            });

            client.elements('css selector', infoLi, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiProps('xs');
                    callback.multiloop(client, infoLi, properties, 'xs');
                }
            });
            client.elements('css selector', infoLiTitle, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiTitleProps('xs');
                    callback.multiloop(client, infoLiTitle, properties, 'xs');
                }
            });
            client.elements('css selector', infoLiNumber, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.infoLiNumberProps('xs');
                    callback.multiloop(client, infoLiNumber, properties, 'xs');
                }
            });
        }
    },

    "4 Check for checkbox properties": function (client) {
        var checkboxSel = pageObj.elements.checkboxSel.selector,
            checker = pageObj.elements.checker.selector,
            checkboxLabel = pageObj.elements.checkboxLabel.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', checkboxSel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxSelProps('xs');
                    callback.multiloop(client, checkboxSel, properties, 'xs');
                }
            });

            client.elements('css selector', checker, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkerProps('xs');
                    callback.multiloop(client, checker, properties, 'xs');
                    client.expect.element(checker).to.have.css('background-image').which.contains('checkbox.png');
                }
            });
            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxLabelProps('xs');
                    callback.multiloop(client, checkboxLabel, properties, 'xs');
                }
            });
            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.checkboxRteProps('xs');
                    rteCallback.rteElem(client, checkboxLabel, properties, '', 'xs');
                }
            });
        }
    },

    "5 Check for button properties": function (client) {
        var btn = pageObj.elements.btn.selector;
        // console.log(btnCls);
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', btn, results => {
                if (results.value.length > 0) {
                    properties = frb_investment_props.btnProps('xs');
                    callback.multiloop(client, btn, properties, 'xs');
                    client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_bgimg_m);
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
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
                properties = frb_investment_props.FocusProps('xs');
                callback.singleElem(client, labelRadioFocus, properties, 'xs');

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
                properties = frb_investment_props.btnProceedProps('xs');
                callback.multiloop(client, btn, properties, 'xs');
                client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_btn_bgimg_m);

            }
        });

        //button hover
        client.moveToElement(btn, 20, 20);
        client.pause(6000);
        client.elements('css selector', btn, results => {
            if (results.value.length > 0) {
                client.expect.element(btn).to.have.css('background-image').which.contains(brand.props.$frb_btn_hover_m);

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
                properties = frb_investment_props.FocusProps('xs');
                callback.multiloop(client, btnFocus, properties, 'xs');

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
