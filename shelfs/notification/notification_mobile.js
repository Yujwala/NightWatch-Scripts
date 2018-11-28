var pageurl = require('../../pageurls.js'),
    pageObj,notification_props,callback,size;

function globalProps(client) {
    pageObj = client.page.notification_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	notification_props = require('./notification_props.js')(client);
}

module.exports = {
    '@tags': ['notification', 'notification-mobile'],
    //Opening the Desktop URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client,pageurl.NW_MARKETS_NOTIFICATION_SHELF_MOB);
        console.log("--Mobile--" + pageurl.LOMBARD_IE_NOTIFICATION_SHELF_MOB);
    },

    "1 Check for notification theme Properties": function (client) {
        ns_notificationShelf = pageObj.elements.notificationShelf.selector,
            ns_text = pageObj.elements.MobileText.selector;
        ns_download = pageObj.elements.notficationshelfdownload.selector,
            ns_themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            ns_themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            ns_themeLightBlue = pageObj.elements.themeLightBlue.selector,
            ns_themeLightGrey = pageObj.elements.themeLightGrey.selector,
            ns_themeBlueShelftext = pageObj.elements.themeBlueShelftext.selector,
            ns_themeWhiteShelftext = pageObj.elements.themeWhiteShelftext.selector,
            ns_themeLightBlueShelftext = pageObj.elements.themeLightBlueShelftext.selector,
            ns_themeLightGreyShelftext = pageObj.elements.themeLightGreyShelftext.selector,
            ns_themeBlueShelfanchor = pageObj.elements.themeBlueShelfanchor.selector,
            ns_themeWhiteShelfanchor = pageObj.elements.themeWhiteShelfanchor.selector,
            ns_themeLightBlueShelfanchor = pageObj.elements.themeLightBlueShelfanchor.selector,
            ns_themeLightGreyShelfanchor = pageObj.elements.themeLightGreyShelfanchor.selector,
            ns_themeBlueShelfspan = pageObj.elements.themeBlueShelfspan.selector,
            ns_themeWhiteShelfspan = pageObj.elements.themeWhiteShelfspan.selector,
            ns_themeLightBlueShelfspan = pageObj.elements.themeLightBlueShelfspan.selector,
            ns_themeLightGreyShelfspan = pageObj.elements.themeLightGreyShelfspan.selector,
            globalProps(client);
        //console.log(ns_themeBlueShelf);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            notficationtheme = pageObj.elements.notificationShelfM.selector;
            ns_headergroup = pageObj.elements.headergroupM.selector,
                ns_headergroup_sign_post = pageObj.elements.headergroup_sign_postM.selector,
                ns_headergroup__headline = pageObj.elements.headergroup__headlineM.selector,
                ns_notification_shelf_span = pageObj.elements.notification_shelf_span.selector,

                //Blue Theme
                client.elements('css selector', ns_themeBlueShelf, results => {
                    if (results.value.length > 0) {
                        properties = notification_props.themeBlueShelf('xs');
                        callback.multiloop(client, ns_themeBlueShelf, properties, 'xs');
                        client.source(() => {
                            console.log("Blue Theme");
                        });
                    }
                });

            //Light Blue Theme
            client.elements('css selector', ns_themeLightBlue, results => {
                if (results.value.length > 0) {
                    console.log(results.value.length);
                    properties = notification_props.themeLightBlue('xs');
                    callback.multiloop(client, ns_themeLightBlue, properties, 'xs');
                    client.source(() => {
                        console.log("Light Blue Theme");
                    });

                }
            });


            //Light Grey Theme
            client.elements('css selector', ns_themeLightGrey, results => {
                if (results.value.length > 0) {
                    console.log(results.value.length);
                    properties = notification_props.themeLightGrey('xs');
                    callback.multiloop(client, ns_themeLightGrey, properties, 'xs');
                    client.source(() => {
                        console.log("Light Grey Theme");
                    });

                }
            });

            //White Theme
            client.elements('css selector', ns_themeWhiteShelf, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelf('xs');
                    callback.multiloop(client, ns_themeWhiteShelf, properties, 'xs');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            // P tag theme Blue 
            client.elements('css selector', ns_themeBlueShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelftext('xs');
                    callback.multiloop(client, ns_themeBlueShelftext, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // P tag theme White
            client.elements('css selector', ns_themeWhiteShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelftext('xs');
                    callback.multiloop(client, ns_themeWhiteShelftext, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // P tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelftext('xs');
                    callback.multiloop(client, ns_themeLightBlueShelftext, properties, 'xs');
                    client.source(() => {

                    });
                }
            });
            // P tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelftext('xs');
                    callback.multiloop(client, ns_themeLightGreyShelftext, properties, 'xs');
                    client.source(() => {

                    });
                }
            });


            // a tag theme Blue 
            client.elements('css selector', ns_themeBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelfanchor('xs');
                    callback.multiloop(client, ns_themeBlueShelfanchor, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // a tag theme White
            client.elements('css selector', ns_themeWhiteShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelfanchor('xs');
                    callback.multiloop(client, ns_themeWhiteShelfanchor, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // a tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelfanchor('xs');
                    callback.multiloop(client, ns_themeLightBlueShelfanchor, properties, 'xs');
                    client.source(() => {

                    });
                }
            });
            // a tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelfanchor('xs');
                    callback.multiloop(client, ns_themeLightGreyShelfanchor, properties, 'xs');
                    client.source(() => {

                    });
                }
            });


            // span tag theme Blue 
            client.elements('css selector', ns_themeBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelfanchor('xs');
                    callback.multiloop(client, ns_themeBlueShelfanchor, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // span tag theme White
            client.elements('css selector', ns_themeWhiteShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelfanchor('xs');
                    callback.multiloop(client, ns_themeWhiteShelfanchor, properties, 'xs');
                    client.source(() => {
                    });
                }
            });
            // span tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelfanchor('xs');
                    callback.multiloop(client, ns_themeLightBlueShelfanchor, properties, 'xs');
                    client.source(() => {

                    });
                }
            });
            // span tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelfanchor('xs');
                    callback.multiloop(client, ns_themeLightGreyShelfanchor, properties, 'xs');
                    client.source(() => {

                    });
                }
            });


            ///shelf  text properties
            properties = notification_props.MobileText('xs');
            callback.multiloop(client, ns_text, properties, 'xs');

            properties = notification_props.notificationShelfM('xs');
            callback.multiloop(client, notficationtheme, properties, 'xs');

            properties = notification_props.headergroupM('xs');
            callback.multiloop(client, ns_headergroup, properties, 'xs');


            properties = notification_props.headergroup_sign_postM('xs');
            callback.multiloop(client, ns_headergroup_sign_post, properties, 'xs');


            properties = notification_props.headergroup__headlineM('xs');
            callback.multiloop(client, ns_headergroup__headline, properties, 'xs');

            properties = notification_props.notification_shelf_spanM('xs');
            callback.multiloop(client, ns_notification_shelf_span, properties, 'xs');


            client.elements('css selector', ns_download, results => {
                if (results.value.length > 0) {
                    console.log(results.value.length);
                    client.expect.element(ns_download).to.have.css('background-image').which.contains('download');
                }
            });

        }

    },

    'Closing Browser': function (client) {
        //client.pause(1000);
        client.end();
    }
}



