var pageurl = require('../../pageurls.js'),
    pageObj,do_we_know_you_enhanced_props,callback,size,brand,brandFile;

function globalProps(client) {
    pageObj = client.page.do_we_know_you_enhanced_selectors();
	callback = client.page.common();
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	size = client.globals.size.widths;
	callback.getBrand(client);
	brandFile = client.globals.brand;
	brand = require('../../branding/'+brandFile);
	do_we_know_you_enhanced_props = require('./do_we_know_you_enhanced_props.js')(client);
}

module.exports = {
    '@tags': ['do-we-know-you-enhanced-desktop', 'desktop', 'do-we-know-you-enhanced'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client, pageurl.NW_PER_DO_WE_KNOW_YOU_ENHANCED);
        console.log("--Desktop--" + pageurl.NW_PER_DO_WE_KNOW_YOU_ENHANCED);
    },

    "1 Check for header properties": function (client) {
        var headertitleCls = pageObj.elements.headerTitle.selector,
            themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector;
            callback.scrollToElement(client, headertitleCls);
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = do_we_know_you_enhanced_props.themeBlueProps('lg');
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
                    properties = do_we_know_you_enhanced_props.themeLightBlueProps('lg');
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
                    properties = do_we_know_you_enhanced_props.themeWhiteProps('lg');
                    callback.multiloop(client, themeWhiteCls, properties, 'lg');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            //header properties
            client.elements('css selector', headertitleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.headerTitleProps('lg');
                    callback.multiloop(client, headertitleCls, properties, 'lg');
                }
            });
        }

    },

    "2 Check for title properties": function (client) {
        var titleCls = pageObj.elements.title.selector;
      globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titleProps('lg');
                    rteCallback.rteElem(client, titleCls, properties, 'p', 'lg');
                }
            });

            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titlePropsH4('lg');
                    rteCallback.rteElem(client, titleCls, properties, 'h4', 'lg');
                }
            });
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titlePropsH3('lg');
                    rteCallback.rteElem(client, titleCls, properties, 'h3', 'lg');
                }
            });
        }

    },


    "3 Check for RadioLabel and button properties": function (client) {
        var ulSelCls = pageObj.elements.ulSel.selector,
        liSelCls = pageObj.elements.liSel.selector,
        labelRadioCls = pageObj.elements.labelRadio.selector;
        globalProps(client);

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', ulSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.ulSelProps('lg');
                    callback.multiloop(client, ulSelCls, properties, 'lg');

                }
            });

            client.elements('css selector', liSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.liSelProps('lg');
                    callback.multiloop(client, liSelCls, properties, 'lg');

                }
            });

            client.elements('css selector', labelRadioCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.labelRadioProps('lg');
                    callback.multiloop(client, labelRadioCls, properties, 'lg');
                    client.expect.element(labelRadioCls).to.have.css('background-image').which.contains('radio.png');
                    client.expect.element(labelRadioCls).to.have.css('transition').which.contains("background-image 0.2s ease-in-out 0s, background-color 0.4s ease-in-out 0s");

                }
            });

        }
    },

    "4 Check for checkbox properties": function (client) {
        var checkboxSelCls = pageObj.elements.checkboxSel.selector,
        checkboxLabelCls = pageObj.elements.checkboxLabel.selector,
        checkBoxSelCls = pageObj.elements.checkBox.selector,
        radioLinkSelCls = pageObj.elements.radioLink.selector;

        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', checkboxSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.checkboxSelProps('lg');
                    callback.multiloop(client, checkboxSelCls, properties, 'lg');

                }
            });

            client.elements('css selector', checkboxLabelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.checkboxLabelProps('lg');
                    callback.multiloop(client, checkboxLabelCls, properties, 'lg');

                }
            });
            if (brandFile == !"lombard/lombard.js") {
                client.elements('css selector', checkBoxSelCls, results => {
                    if (results.value.length > 0) {
                        properties = do_we_know_you_enhanced_props.checkBoxProps('lg');
                        callback.multiloop(client, checkBoxSelCls, properties, 'lg');
                        client.expect.element(checkBoxSelCls).to.have.css('background-image').which.contains('check-box-bg.png');

                    }
                });
            }
            client.elements('css selector', radioLinkSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.radioLinkProps('lg');
                    callback.multiloop(client, radioLinkSelCls, properties, 'lg');

                }
            });

        }

    },

    "5 Check for button properties": function (client) {
        var btnCls = pageObj.elements.btn.selector;
        console.log(btnCls);
       globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', btnCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProps('lg');
                    callback.multiloop(client, btnCls, properties, 'lg');
                    if (brandFile == "lombard/lombard.js") {
                        client.expect.element(btnCls).to.have.css('background-image').which.contains('grey.png');
                    }
                }
            });
        }

    },


    "6 checking functionality of radiobutton and checkbox": function (client) {
        var checkBoxCls = pageObj.elements.checkBox.selector,
        btnProceedCls = pageObj.elements.btnProceed.selector,
        btnProceedFocusCls = pageObj.elements.btnProceedFocus.selector,
        btnProceedHoverCls = pageObj.elements.btnProceedHover.selector,
        radiobtnCheckCls = pageObj.elements.radiobtnCheck.selector,
        checkboximagecls = pageObj.elements.checkboximage.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //clicking on one radio button to check the background image
            client.elements('css selector', radiobtnCheckCls, results => {
                if (results.value.length > 0) {
                    client.click(radiobtnCheckCls);
                    client.pause(2000);
                    client.expect.element(radiobtnCheckCls).to.have.css('background-image').which.contains('radio-checked.png');
                }
            });

            client.elements('css selector', radiobtnCheckCls, results => {
                if (results.value.length > 0) {
                    results.value.forEach(element => {
                        client.elementIdClick(element.ELEMENT);
                        client.pause(1000);
                    });

                }
            });
            client.click(checkBoxCls);
            client.pause(4000);
            //checkbox functionality and properties
            client.expect.element(checkboximagecls).to.have.css('background-image').which.contains(brand.props.$enhanced_checkedimage);
            // button properties after visible 
            client.waitForElementVisible(btnProceedCls, 3000);
            client.pause(2000);
            client.elements('css selector', btnProceedCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProceedProps('lg');
                    callback.multiloop(client, btnProceedCls, properties, 'lg');

                }
            });

            //button hover
            client.moveToElement(btnProceedHoverCls, 20, 20);
            client.pause(6000);
            if (brandFile === "lombard/lombard.js") {
                client.expect.element(btnProceedHoverCls).to.have.css('background-image').which.contains('dark-green.png');
            }
            client.elements('css selector', btnProceedHoverCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProceedHoverProps('lg');
                    callback.multiloop(client, btnProceedHoverCls, properties, 'lg');

                }
            });

            //button focus
            client.moveToElement(btnProceedCls, 10, 10);
            client.mouseButtonDown(btnProceedCls);
            client.pause(6000);
            client.moveToElement(btnProceedFocusCls, 10, 10);
            client.pause(6000);
            client.elements('css selector', btnProceedFocusCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProceedFocusProps('lg');
                    callback.multiloop(client, btnProceedFocusCls, properties, 'lg');

                }
            });


            client.click(btnProceedCls);
            client.pause(5000);
        }
    },

    "Ending the session": function (client) {
        client.end();
    }

}; 
