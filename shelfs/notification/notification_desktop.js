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
    '@tags': ['notification', 'notification-desktop'],
    //Opening the Desktop URL
    "1. Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.ULSTER_IE_NOTIFICATION_SHELF);
        client.pause(6000);
    },

    "1 Check for notification theme": function (client) {
            ns_notificationShelf = pageObj.elements.notificationShelf.selector,
            ns_text = pageObj.elements.Text.selector;
            ns_headergroup = pageObj.elements.headergroup.selector,
            ns_headergroup_sign_post = pageObj.elements.headergroup_sign_post.selector,
            ns_headergroup__headline = pageObj.elements.headergroup__headline.selector,
            ns_notification_shelf_span = pageObj.elements.notification_shelf_span.selector,
            ns_download = pageObj.elements.notficationshelfdownload.selector,
            ns_griditem = pageObj.elements.griditem.selector,

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



            // notficationtheme = pageObj.elements.notificationShelf.selector;
            // console.log(notficationtheme);

            globalProps(client);



        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            //Blue Theme
            client.elements('css selector', ns_themeBlueShelf, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelf('lg');
                    callback.multiloop(client, ns_themeBlueShelf, properties, 'lg');
                    client.source(() => {
                        console.log("Blue Theme");
                    });
                }
            });

            //Light Blue Theme
            client.elements('css selector', ns_themeLightBlue, results => {
                if (results.value.length > 0) {
                    console.log(results.value.length);
                    properties = notification_props.themeLightBlue('lg');
                    callback.multiloop(client, ns_themeLightBlue, properties, 'lg');
                    client.source(() => {
                        console.log("Light Blue Theme");
                    });

                }
            });


            //Light Grey Theme
            client.elements('css selector', ns_themeLightGrey, results => {
                if (results.value.length > 0) {
                    console.log(results.value.length);
                    properties = notification_props.themeLightGrey('lg');
                    callback.multiloop(client, ns_themeLightGrey, properties, 'lg');
                    client.source(() => {
                        console.log("Light Grey Theme");
                    });

                }
            });

            //White Theme
            client.elements('css selector', ns_themeWhiteShelf, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelf('lg');
                    callback.multiloop(client, ns_themeWhiteShelf, properties, 'lg');
                    client.source(() => {
                        console.log("White Theme");
                    });
                }
            });

            // P tag theme Blue 
            client.elements('css selector', ns_themeBlueShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelftext('lg');
                    callback.multiloop(client, ns_themeBlueShelftext, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // P tag theme White
            client.elements('css selector', ns_themeWhiteShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelftext('lg');
                    callback.multiloop(client, ns_themeWhiteShelftext, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // P tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelftext('lg');
                    callback.multiloop(client, ns_themeLightBlueShelftext, properties, 'lg');
                    client.source(() => {

                    });
                }
            });
            // P tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelftext, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelftext('lg');
                    callback.multiloop(client, ns_themeLightGreyShelftext, properties, 'lg');
                    client.source(() => {

                    });
                }
            });


            // a tag theme Blue 
            client.elements('css selector', ns_themeBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelfanchor('lg');
                    callback.multiloop(client, ns_themeBlueShelfanchor, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // a tag theme White
            client.elements('css selector', ns_themeWhiteShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelfanchor('lg');
                    callback.multiloop(client, ns_themeWhiteShelfanchor, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // a tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelfanchor('lg');
                    callback.multiloop(client, ns_themeLightBlueShelfanchor, properties, 'lg');
                    client.source(() => {

                    });
                }
            });
            // a tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelfanchor('lg');
                    callback.multiloop(client, ns_themeLightGreyShelfanchor, properties, 'lg');
                    client.source(() => {

                    });
                }
            });


            // span tag theme Blue 
            client.elements('css selector', ns_themeBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeBlueShelfanchor('lg');
                    callback.multiloop(client, ns_themeBlueShelfanchor, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // span tag theme White
            client.elements('css selector', ns_themeWhiteShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeWhiteShelfanchor('lg');
                    callback.multiloop(client, ns_themeWhiteShelfanchor, properties, 'lg');
                    client.source(() => {
                    });
                }
            });
            // span tag theme LightBlue 
            client.elements('css selector', ns_themeLightBlueShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightBlueShelfanchor('lg');
                    callback.multiloop(client, ns_themeLightBlueShelfanchor, properties, 'lg');
                    client.source(() => {

                    });
                }
            });
            // span tag theme LightGrey
            client.elements('css selector', ns_themeLightGreyShelfanchor, results => {
                if (results.value.length > 0) {
                    properties = notification_props.themeLightGreyShelfanchor('lg');
                    callback.multiloop(client, ns_themeLightGreyShelfanchor, properties, 'lg');
                    client.source(() => {

                    });
                }
            });






            ///shelf  text properties
            properties = notification_props.Text('lg');
            callback.multiloop(client, ns_text, properties, 'lg');

            properties = notification_props.notificationShelf('lg');
            callback.multiloop(client, ns_notificationShelf, properties, 'lg');

            properties = notification_props.headergroup('lg');
            callback.multiloop(client, ns_headergroup, properties, 'lg');


            properties = notification_props.headergroup_sign_post('lg');
            callback.multiloop(client, ns_headergroup_sign_post, properties, 'lg');


            properties = notification_props.headergroup__headline('lg');
            callback.multiloop(client, ns_headergroup__headline, properties, 'lg');

            properties = notification_props.notification_shelf_span('lg');
            callback.multiloop(client, ns_notification_shelf_span, properties, 'lg');


            properties = notification_props.griditem('lg');
            callback.multiloop(client, ns_griditem, properties, 'lg');

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



