var pageurl = require('../../pageurls.js'),
    pageObj,do_we_know_you_enhanced_props,callback,size,brand,brandFile;

function globalProps(client) {
    pageObj = client.page.do_we_know_you_enhanced_selectors();
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	callback = client.page.common();
	size = client.globals.size.widths;
	callback.getBrand(client);
	brandFile = client.globals.brand;
	brand = require('../../branding/'+brandFile);
	do_we_know_you_enhanced_props = require('./do_we_know_you_enhanced_props.js')(client);
}

module.exports = {
    '@tags': ['do-we-know-you-enhanced-mobile', 'do-we-know-you-enhanced', 'mobile'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client, pageurl.ULSTER_NI_DO_WE_KNOW_YOU_ENHANCED_MOB);
        console.log("--Mobile--" + pageurl.ULSTER_NI_DO_WE_KNOW_YOU_ENHANCED_MOB);
    },


    "1 Check for header properties": function (client) {
        var headertitleCls = pageObj.elements.headerTitle.selector,
        themeWhiteCls = pageObj.elements.themeWhite.selector,
        themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
        themeBlueCls = pageObj.elements.themeBlue.selector;
        callback.scrollToElement(client, headertitleCls);
       // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {

                    //shelf bg color
                    properties = do_we_know_you_enhanced_props.themeBlueProps('xs');
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
                    properties = do_we_know_you_enhanced_props.themeLightBlueProps('xs');
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
                    properties = do_we_know_you_enhanced_props.themeWhiteProps('xs');
                    callback.multiloop(client, themeWhiteCls, properties, 'xs');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            //header properities
            client.elements('css selector', headertitleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.headerTitleProps('xs');
                    callback.multiloop(client, headertitleCls, properties, 'xs');

                }
            });
        }

    },

    "2 Check for title properties": function (client) {
        var titleCls = pageObj.elements.title.selector;
       // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titleProps('xs');
                    rteCallback.rteElem(client, titleCls, properties, 'p', 'xs');
                }
            });

            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titlePropsH4('xs');
                    rteCallback.rteElem(client, titleCls, properties, 'h4', 'xs');
                }
            });
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.titlePropsH3('xs');
                    rteCallback.rteElem(client, titleCls, properties, 'h3', 'xs');
                }
            });
        }
    },



    "3 Check for Radio properties": function (client) {
        var ulSelCls = pageObj.elements.ulSel.selector,
        liSelCls = pageObj.elements.liSel.selector,
        labelRadioCls = pageObj.elements.labelRadio.selector;
       // globalProps(client);

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', ulSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.ulSelProps('xs');
                    callback.multiloop(client, ulSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', liSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.liSelProps('xs');
                    callback.multiloop(client, liSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', labelRadioCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.labelRadioProps('xs');
                    callback.multiloop(client, labelRadioCls, properties, 'xs');
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

        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', checkboxSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.checkboxSelProps('xs');
                    callback.multiloop(client, checkboxSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', checkboxLabelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.checkboxLabelProps('xs');
                    callback.multiloop(client, checkboxLabelCls, properties, 'xs');

                }
            });
            if (brandFile == !"lombard/lombard.js") {
                client.elements('css selector', checkBoxSelCls, results => {
                    if (results.value.length > 0) {
                        properties = do_we_know_you_enhanced_props.checkBoxProps('xs');
                        callback.multiloop(client, checkBoxSelCls, properties, 'xs');
                        client.expect.element(checkBoxSelCls).to.have.css('background-image').which.contains('check-box-bg.png');

                    }
                });
            }
            client.elements('css selector', radioLinkSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.radioLinkProps('xs');
                    callback.multiloop(client, radioLinkSelCls, properties, 'xs');

                }
            });

        }

    },

    "5 Check for button properties": function (client) {
        console.log(pageObj.elements.btn.selector);
        var btnCls = pageObj.elements.btn.selector;
        console.log(btnCls);
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', btnCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProps('xs');
                    callback.multiloop(client, btnCls, properties, 'xs');

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
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
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
            client.pause(5000);
            //checkbox functionality and properties
            client.expect.element(checkboximagecls).to.have.css('background-image').which.contains(brand.props.$enhanced_checkimg);
            // button properties after visible 
            client.waitForElementVisible(btnProceedCls, 3000);
            client.pause(2000);
            client.elements('css selector', btnProceedCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_enhanced_props.btnProceedProps('xs');
                    callback.multiloop(client, btnProceedCls, properties, 'xs');

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
                    properties = do_we_know_you_enhanced_props.btnProceedFocusProps('xs');
                    callback.multiloop(client, btnProceedFocusCls, properties, 'xs');

                }
            });

            //button hover
            client.moveToElement(btnProceedHoverCls, 20, 20);
            client.pause(6000);
            if (brandFile == "lombard/lombard.js") {
                client.expect.element(btnProceedHoverCls).to.have.css('background-image').which.contains('linear-gradient(rgb(112, 191, 84), rgb(79, 143, 61))');
            }
            else {
                client.elements('css selector', btnProceedHoverCls, results => {
                    if (results.value.length > 0) {
                        properties = do_we_know_you_enhanced_props.btnProceedHoverProps('xs');
                        callback.multiloop(client, btnProceedHoverCls, properties, 'xs');

                    }
                });
            }
            client.click(btnProceedCls);
            client.pause(10000);
        }

    },
    "Ending the session": function (client) {
        client.end();
    }

}; 
