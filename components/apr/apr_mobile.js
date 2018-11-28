var pageurl = require('../../pageurls.js'),
    pageObj,apr_props,callback,size,brand,rteCallback;

function globalProps(client) {
    pageObj = client.page.apr_selectors(),
	callback = client.page.common(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	size = client.globals.size.widths;
	callback.getBrand(client);
	apr_props = require('./apr_props.js')(client);
}

module.exports = {
    '@tags': ['apr-mobile', 'apr', 'mobile'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client, pageurl.LOMBARD_COUK_APR_MOB);
        console.log("--Mobile--" + pageurl.LOMBARD_COUK_APR_MOB);
    },

    "1 Check for header properties": function (client) {
        var themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector;
        //callback.scrollToElement(cli);
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = apr_props.themeBlueProps('xs');
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
                    properties = apr_props.themeLightBlueProps('xs');
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
                    properties = apr_props.themeWhiteProps('xs');
                    callback.multiloop(client, themeWhiteCls, properties, 'xs');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

        }
    },

    "2 Check for apr horizontal wrapper properties": function (client) {
        var aprWrapper = pageObj.elements.aprWrapper.selector,
         aprWrapper1 = pageObj.elements.aprWrapper1.selector,
            grid = pageObj.elements.grid.selector,
            grid1 = pageObj.elements.grid1.selector,
            aprUl = pageObj.elements.aprUl.selector;
        callback.scrollToElement(client, aprWrapper);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //apr horizontal wrapper properities
            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprWrapperProps('xs');
                    callback.multiloop(client, aprWrapper, properties, 'xs');
                }
            });
            client.elements('css selector',  aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props. aprWrapper1Props('xs');
                    callback.multiloop(client,  aprWrapper1, properties, 'xs');
                }
            });
            client.elements('css selector', grid, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprPProps('xs');
                    rteCallback.rteElem(client, grid, properties, 'p', 'xs');
                }
            });

            client.elements('css selector', grid1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprP1Props('xs');
                    rteCallback.rteElem(client, grid1, properties, 'p', 'xs');
                }
            });
            client.elements('css selector', aprUl, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprUlProps('xs');
                    callback.multiloop(client, aprUl, properties, 'xs');
                }
            });

            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprH4Props('xs');
                    rteCallback.rteElem(client, aprWrapper, properties, 'h4', 'xs');
                }
            });
            client.elements('css selector', aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.H4Props('xs');
                    rteCallback.rteElem(client, aprWrapper1, properties, 'h4', 'xs');
                }
            });
            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprLiProps('xs');
                    rteCallback.rteElem(client, aprWrapper, properties, 'ul li', 'xs');
                }
            });
            client.elements('css selector', aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.LiProps('xs');
                    rteCallback.rteElem(client, aprWrapper1, properties, 'ul li', 'xs');
                }
            });
            client.elements('css selector', grid, results => {
                if (results.value.length > 0) {
                    properties = apr_props.gridProps('xs');
                    callback.multiloop(client, grid, properties, 'xs');
                }
            });
            client.elements('css selector', grid1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.gridProps('xs');
                    callback.multiloop(client, grid1, properties, 'xs');
                }
            });
        }
    },

    "3 Check for cta properties": function (client) {
        var ctaM = pageObj.elements.ctaM.selector,
        ctaM1 = pageObj.elements.ctaM1.selector,
        ctaL = pageObj.elements.ctaL.selector,
        ctaMFocus = pageObj.elements.ctaMFocus.selector,
        ctaLFocus = pageObj.elements.ctaLFocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
           //cta wrapper properties
            client.elements('css selector', ctaM, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaMProps('xs');
                    callback.multiloop(client, ctaM, properties, 'xs');
                }
            });

            client.elements('css selector', ctaM1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaM1Props('xs');
                    callback.multiloop(client, ctaM1, properties, 'xs');
                }
            });

            client.elements('css selector', ctaL, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaLProps('xs');
                    callback.multiloop(client, ctaL, properties, 'xs');
                }
            });

            //hover properities 

            //ctaM
            client.elements('css selector', ctaM, results => {
                if (results.value.length > 0) {
                    client.moveToElement(ctaM, 10, 10);
                    client.pause(2000);
                    properties = apr_props.ctaMHoverProps('xs');
                    callback.singleElem(client, ctaM, properties, 'xs');
                }
            });

            //ctaM focus
            client.moveToElement(ctaM, 3, 3);
            client.mouseButtonDown(ctaM);
            client.pause(2000);
            client.moveToElement(ctaMFocus, 3, 3);
            client.pause(2000);
            properties = apr_props.FocusMProps('xs');
            callback.singleElem(client, ctaMFocus, properties, 'xs');
            //ctaL
            client.moveToElement(ctaL, 10, 10);
            client.pause(2000);
            client.elements('css selector', ctaL, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaLHoverProps('xs');
                    callback.singleElem(client, ctaL, properties, 'xs');
                }
            });
            //ctaLFocus
            client.moveToElement(ctaL, 3, 3);
            client.mouseButtonDown(ctaL);
            client.pause(2000);
            client.moveToElement(ctaLFocus, 3, 3);
            client.pause(2000);
            properties = apr_props.FocusLProps('xs');
            callback.singleElem(client, ctaLFocus, properties, 'xs');


        }
    },


    "4 Check for functionality of cta properties": function (client) {
        var ctaM = pageObj.elements.ctaM.selector,
            ctaL = pageObj.elements.ctaL.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //apr horizontal wrapper properities

            //ctaM
            // client.elements('css selector', ctaM, results => {
            //     if (results.value.length > 0) {
            //         client.click(ctaM);
            //         client.pause(2000);
            //     }
            // });

            //ctaL
            client.elements('css selector', ctaL, results => {
                if (results.value.length > 0) {
                    client.click(ctaL);
                    client.pause(2000);
                }
            });


        }
    },

    "Ending the session": function (client) {
        client.end();
    }

}; 