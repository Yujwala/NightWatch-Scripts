var pageurl = require('../../pageurls.js'),
    pageObj,do_we_know_you_props,callback,size,brand,brandFile;

function globalProps(client) {
    pageObj = client.page.do_we_know_you_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	brandFile = client.globals.brand;
	brand = require('../../branding/'+brandFile);
	do_we_know_you_props = require('./do_we_know_you_props.js')(client);
}

module.exports = {
    '@tags': ['mobile', 'do-we-know-you', 'do-we-know-you-mobile'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },
    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client, pageurl.RBS_BUS_DO_WE_KNOW_YOU);
        console.log("--Mobile--" + pageurl.RBS_BUS_DO_WE_KNOW_YOU_MOB);
    },

    "1 Check for header properties": function (client) {
        var headertitleCls = pageObj.elements.headerTitle.selector,
            themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector;
        callback.scrollToElement(client, headertitleCls);
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = do_we_know_you_props.themeBlueProps('xs');
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
                    properties = do_we_know_you_props.themeLightBlueProps('xs');
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
                    properties = do_we_know_you_props.themeWhiteProps('xs');
                    callback.multiloop(client, themeWhiteCls, properties, 'xs');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            //header properties
            client.elements('css selector', headertitleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.headerTitleProps('xs');
                    callback.multiloop(client, headertitleCls, properties, 'xs');
                }
            });
        }

    },

    "2 Check for title properties": function (client) {
        var titleCls = pageObj.elements.title.selector;
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.titleProps('xs');
                    callback.multiloop(client, titleCls, properties, 'xs');
                }
            });
        }

    },

    "3 Check for RadioLabel and button properties": function (client) {
        var ulSelCls = pageObj.elements.ulSel.selector,
        liSelCls = pageObj.elements.liSel.selector,
        labelRadioCls = pageObj.elements.labelRadio.selector;
      //  globalProps(client);

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', ulSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.ulSelProps('xs');
                    callback.multiloop(client, ulSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', liSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.liSelProps('xs');
                    callback.multiloop(client, liSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', labelRadioCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.labelRadioProps('xs');
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
        radioLinkSelCls = pageObj.elements.checkboxRadioLink.selector;

        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', checkboxSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.checkboxProps('xs');
                    callback.multiloop(client, checkboxSelCls, properties, 'xs');

                }
            });

            client.elements('css selector', checkboxLabelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.checkboxLabelProps('xs');
                    callback.multiloop(client, checkboxLabelCls, properties, 'xs');

                }
            });

            client.elements('css selector', radioLinkSelCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.checkboxRadioLinkProps('xs');
                    callback.multiloop(client, radioLinkSelCls, properties, 'xs');

                }
            });

        }

    },

    "5 Check for button properties": function (client) {
        var btnCls = pageObj.elements.btnDisabled.selector;
       // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', btnCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.btnProps('xs');
                    callback.multiloop(client, btnCls, properties, 'xs');
                }
            });
            if (brandFile === "natwest-personal/natwest_personal.js" || brandFile === "natwest-business/natwest_bussiness.js") {
                client.expect.element(btnCls).to.have.css('background-image').which.contains("linear-gradient(rgb(153, 153, 153), rgb(102, 102, 102))");
            }
        }
    },

    "6 checking the functionality of checkbox and radio button": function (client) {
        var labelRadioCls = pageObj.elements.labelRadio.selector,
        btnEnabledCls = pageObj.elements.btnEnabled.selector,
        btnFocusCls = pageObj.elements.btnFocus.selector,
        checkboxFocusCls = pageObj.elements.checkboxFocus.selector,
        checkboxRadioLink = pageObj.elements.checkboxRadioLink.selector;
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.click(labelRadioCls);
            client.pause(2000);
            client.expect.element(labelRadioCls).to.have.css('background-image').which.contains('radio-checked.png');
            client.elements('css selector', labelRadioCls, results => {
                if (results.value.length > 0) {
                    results.value.forEach(element => {
                        client.elementIydClick(element.ELEMENT);
                        client.pause(1000);
                    });

                }
            });

            client.click(checkboxRadioLink);
            client.pause(4000);
            // checkbox focus 
            client.moveToElement(checkboxFocusCls, 10, 10);
            client.pause(6000);
            client.elements('css selector', checkboxFocusCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.FocusProps('xs');
                    callback.multiloop(client, checkboxFocusCls, properties, 'xs');
                }
            });

            // button properties after visible 
            client.waitForElementVisible(btnEnabledCls, 3000);
            client.pause(2000);
            client.elements('css selector', btnEnabledCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.btnEnabledProps('xs');
                    callback.multiloop(client, btnEnabledCls, properties, 'xs');

                }
            });

            if (brandFile === "natwest-personal/natwest_personal.js" || brandFile === "natwest-business/natwest_bussiness.js") {
                client.expect.element(btnEnabledCls).to.have.css('background-image').which.contains("linear-gradient(rgb(112, 191, 84), rgb(79, 143, 61))");
            }


            //button hover
            client.moveToElement(btnEnabledCls, 20, 20);
            client.pause(6000);
            if (brandFile === "natwest-personal/natwest_personal.js" || brandFile === "natwest-business/natwest_bussiness.js") {
                client.expect.element(btnEnabledCls).to.have.css('background-image').which.contains("linear-gradient(rgb(112, 191, 84), rgb(79, 143, 61))");
            }
            client.elements('css selector', btnEnabledCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.btnHoverProps('xs');
                    callback.multiloop(client, btnEnabledCls, properties, 'xs');
                }
            });
            //button focus
            client.moveToElement(btnEnabledCls, 10, 10);
            client.mouseButtonDown(btnEnabledCls);
            client.pause(6000);
            client.moveToElement(btnFocusCls, 10, 10);
            client.pause(6000);
            client.elements('css selector', btnFocusCls, results => {
                if (results.value.length > 0) {
                    properties = do_we_know_you_props.FocusProps('xs');
                    callback.multiloop(client, btnFocusCls, properties, 'xs');

                }
            });

            client.click(btnEnabledCls);
            client.pause(5000);
        }
    },

    "Ending the session": function (client) {
        client.end();
    }

}; 
