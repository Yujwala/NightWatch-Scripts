var pageurl = require('../../pageurls.js'),
    pageObj,apr_props,callback,size,rteCallback;

function globalProps(client) {
    pageObj = client.page.apr_selectors(),
	callback = client.page.common(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	size = client.globals.size.widths;
	callback.getBrand(client);
	apr_props = require('./apr_props.js')(client);
}

module.exports = {
    '@tags': ['apr-desktop', 'desktop', 'apr'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client, pageurl.LOMBARD_COUK_APR);
        //console.log("--Desktop--" + pageurl.LOMBARD_COUK_APR);
    },

    "1 Check for header properties": function (client) {
        var themeWhiteCls = pageObj.elements.themeWhite.selector,
            themeLightBlueCls = pageObj.elements.themeLightBlue.selector,
            themeBlueCls = pageObj.elements.themeBlue.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Blue Theme
            client.elements('css selector', themeBlueCls, results => {
                if (results.value.length > 0) {
                    //shelf bg color
                    properties = apr_props.themeBlueProps('lg');
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
                    properties = apr_props.themeLightBlueProps('lg');
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
                    properties = apr_props.themeWhiteProps('lg');
                    callback.multiloop(client, themeWhiteCls, properties, 'lg');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

        }
    },

    "2 Check for apr wrapper properties": function (client) {
        var aprWrapper = pageObj.elements.aprWrapper.selector,
         aprWrapper1 = pageObj.elements.aprWrapper1.selector,
            grid = pageObj.elements.grid.selector,
            grid1 = pageObj.elements.grid1.selector,
            aprUl = pageObj.elements.aprUl.selector;
        callback.scrollToElement(client, aprWrapper);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //apr horizontal wrapper properities
            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprWrapperProps('lg');
                    callback.multiloop(client, aprWrapper, properties, 'lg');
                }
            });
            client.elements('css selector',  aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props. aprWrapper1Props('lg');
                    callback.multiloop(client,  aprWrapper1, properties, 'lg');
                }
            });
            client.elements('css selector', grid, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprPProps('lg');
                    rteCallback.rteElem(client, grid, properties, 'p', 'lg');
                }
            });

            client.elements('css selector', grid1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprP1Props('lg');
                    rteCallback.rteElem(client, grid1, properties, 'p', 'lg');
                }
            });
            client.elements('css selector', aprUl, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprUlProps('lg');
                    callback.multiloop(client, aprUl, properties, 'lg');
                }
            });

            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprH4Props('lg');
                    rteCallback.rteElem(client, aprWrapper, properties, 'h4', 'lg');
                }
            });
            client.elements('css selector', aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.H4Props('lg');
                    rteCallback.rteElem(client, aprWrapper1, properties, 'h4', 'lg');
                }
            });
            client.elements('css selector', aprWrapper, results => {
                if (results.value.length > 0) {
                    properties = apr_props.aprLiProps('lg');
                    rteCallback.rteElem(client, aprWrapper, properties, 'ul li', 'lg');
                }
            });
            client.elements('css selector', aprWrapper1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.LiProps('lg');
                    rteCallback.rteElem(client, aprWrapper1, properties, 'ul li', 'lg');
                }
            });
            client.elements('css selector', grid, results => {
                if (results.value.length > 0) {
                    properties = apr_props.gridProps('lg');
                    callback.multiloop(client, grid, properties, 'lg');
                }
            });
            client.elements('css selector', grid1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.gridProps('lg');
                    callback.multiloop(client, grid1, properties, 'lg');
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //cta wrapper properities
            client.elements('css selector', ctaM, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaMProps('lg');
                    callback.multiloop(client, ctaM, properties, 'lg');
                }
            });

            client.elements('css selector', ctaM1, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaM1Props('lg');
                    callback.multiloop(client, ctaM1, properties, 'lg');
                }
            });

            client.elements('css selector', ctaL, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaLProps('lg');
                    callback.multiloop(client, ctaL, properties, 'lg');
                }
            });

            //hover properities 

            
            //ctaM
            client.elements('css selector', ctaM, results => {
                if (results.value.length > 0) {
                    client.moveToElement(ctaM, 10, 10);
                    client.pause(2000);
                    properties = apr_props.ctaMHoverProps('lg');
                    callback.singleElem(client, ctaM, properties, 'lg');
                }
            });
              //ctaM focus
              client.moveToElement(ctaM, 10, 10);
              client.mouseButtonDown(ctaM);
              client.pause(2000);
              client.moveToElement(ctaMFocus, 10, 10);
              client.pause(2000);
              properties = apr_props.FocusMProps('lg');
              callback.multiloop(client, ctaMFocus, properties, 'lg');
          
            //ctaL
            client.moveToElement(ctaL, 10, 10);
            client.pause(2000);
            client.elements('css selector', ctaL, results => {
                if (results.value.length > 0) {
                    properties = apr_props.ctaLHoverProps('lg');
                    callback.singleElem(client, ctaL, properties, 'lg');
                }
            });
            //ctaLFocus
            //client.moveToElement(ctaL, 10, 10);
            client.mouseButtonDown(ctaL);
            client.pause(2000);
            client.moveToElement(ctaLFocus, 10, 10);
            client.pause(2000);
            properties = apr_props.FocusLProps('lg');
            callback.multiloop(client, ctaLFocus, properties, 'lg');


        }
    },


    "4 Check for functionality of cta properties": function (client) {
        var ctaM = pageObj.elements.ctaM.selector,
            ctaL = pageObj.elements.ctaL.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
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
                    client.pause(5000);
                }
            });


        }
    },

    "Ending the session": function (client) {
        client.end();
    }

}; 