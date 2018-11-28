var pageurl = require('../../pageurls.js'),
    pageObj,blogheader_props,callback,size;

function globalProps(client) {
    pageObj = client.page.blogheader_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	blogheader_props = require('./blogheader_props.js')(client);
}

module.exports = {
    '@tags': ['blogheader-desktop', 'blogheader', 'desktop'],
    //Opening the URL
    "1 Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_BLOGHEADER);
    },


    "2 Checking for the properties of Blog header": function(client) {
       globalProps(client);
        var blogheader = pageObj.elements.blogheader.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Blog header
            client.elements('css selector', blogheader, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.blogheader('lg');
                    callback.multiloop(client, blogheader, properties, 'lg');
                    //console.log("Blog header");
                }
            });
        }

    },


    "3 Checking for the properties of heading": function(client) {
        var heroHg = pageObj.elements.heroHg.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Heading
            client.elements('css selector', heroHg, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHg('lg');
                    callback.multiloop(client, heroHg, properties, 'lg');
                    //console.log("Heading");
                }
            });
            //common properties
            client.elements('css selector', heroHg, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('lg');
                    callback.multiloop(client, heroHg, properties, 'lg');
                    //console.log("Heading");
                }
            });
        }

    },

    "4 Checking for the properties of heading when theme is blue": function(client) {
        var heroHgbluetheme = pageObj.elements.heroHgbluetheme.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Heading
            client.elements('css selector', heroHgbluetheme, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHgbluetheme('lg');
                    callback.multiloop(client, heroHgbluetheme, properties, 'lg');
                    //console.log("Heading");
                }
            });
            //common properties
            client.elements('css selector', heroHgbluetheme, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('lg');
                    callback.multiloop(client, heroHgbluetheme, properties, 'lg');
                    //console.log("Heading");
                }
            });
        }

    },

    "5 Checking for the properties of Date": function(client) {
        var date = pageObj.elements.date.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Date-author
            client.elements('css selector', date, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.date('lg');
                    callback.multiloop(client, date, properties, 'lg');
                    //console.log("Date");
                }
            });
        }

    },

    "6 Checking for the properties of Seperator line": function(client) {
        var seperatorline = pageObj.elements.seperatorline.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Seperator line
            client.elements('css selector', seperatorline, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.seperatorline('lg');
                    callback.multiloop(client, seperatorline, properties, 'lg');
                    //console.log("Selector");
                }
            });
        }

    },

    "7 Checking for the header properties when center aligned": function(client) {
        var heroHgcenter = pageObj.elements.heroHgcenter.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Heading
            client.elements('css selector', heroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHgcenter('lg');
                    callback.multiloop(client, heroHgcenter, properties, 'lg');
                    //console.log("Center align");
                }
            });
            //common properties
            client.elements('css selector', heroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('lg');
                    callback.multiloop(client, heroHgcenter, properties, 'lg');
                    // console.log("Heading");
                }
            });
        }

    },

    "8 Checking for the header properties when theme is blue & center aligned": function(client) {
        var blueheroHgcenter = pageObj.elements.blueheroHgcenter.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Heading
            client.elements('css selector', blueheroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.blueheroHgcenter('lg');
                    callback.multiloop(client, blueheroHgcenter, properties, 'lg');
                    //console.log("center align");
                }
            });
            //common properties
           client.elements('css selector', blueheroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('lg');
                    callback.multiloop(client, blueheroHgcenter, properties, 'lg');
                    //console.log("Heading");
                }
            });
        }

    },

    "Ending the session": function(client) {
        client.end();
    }

}