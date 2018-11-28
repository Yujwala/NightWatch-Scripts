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

    '@tags': ['blogheader-mobile', 'blogheader','mobile'],
    //Resize the window for mobile

    "Resize The Window": function(client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);

    },

    //Opening the URL
    "1 Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_PER_BLOGHEADER_MOB);
        client.refresh();
        console.log("--Mobile--" + pageurl.RBS_PER_BLOGHEADER_MOB);
    },


    "2 Checking for the properties of Blog header": function(client) {
        var blogheader = pageObj.elements.blogheader.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blog header
            client.elements('css selector', blogheader, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.blogheader('xs');
                    callback.multiloop(client, blogheader, properties, 'xs');
                    console.log("Blog header");
                }
            });

        }

    },


    "3 Checking for the properties of heading": function(client) {
        var heroHg = pageObj.elements.heroHg.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Heading
            client.elements('css selector', heroHg, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHg('xs');
                    callback.multiloop(client, heroHg, properties, 'xs');
                    console.log("Heading");
                }
            });
            //common properties
            client.elements('css selector', heroHg, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('xs');
                    callback.multiloop(client, heroHg, properties, 'xs');
                    //console.log("Heading");
                }
            });
        }

    },

    "4 Checking for the properties of heading when theme is blue": function(client) {
        var heroHgbluetheme = pageObj.elements.heroHgbluetheme.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Heading
            client.elements('css selector', heroHgbluetheme, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHgbluetheme('xs');
                    callback.multiloop(client, heroHgbluetheme, properties, 'xs');
                    console.log("Heading");
                }
            });
            //common properties
            client.elements('css selector', heroHgbluetheme, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('xs');
                    callback.multiloop(client, heroHgbluetheme, properties, 'xs');
                    //console.log("Heading");
                }
            });

        }

    },

    "5 Checking for the properties of Date": function(client) {
        var date = pageObj.elements.date.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Date-author
            client.elements('css selector', date, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.date('xs');
                    callback.multiloop(client, date, properties, 'xs');
                    console.log("Date");
                }
            });
        }

    },

    "6 Checking for the properties of Seperator line": function(client) {
        var seperatorline = pageObj.elements.seperatorline.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Date-author
            client.elements('css selector', seperatorline, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.seperatorline('xs');
                    callback.multiloop(client, seperatorline, properties, 'xs');
                    console.log("Date");
                }
            });
        }

    },

    "7 Checking for the header properties when center aligned": function(client) {
        var heroHgcenter = pageObj.elements.heroHgcenter.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Date-author
            client.elements('css selector', heroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.heroHgcenter('xs');
                    callback.multiloop(client, heroHgcenter, properties, 'xs');
                    //console.log("Center align");
                }
            });
            //common properties
            client.elements('css selector', heroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('xs');
                    callback.multiloop(client, heroHgcenter, properties, 'xs');
                    // console.log("Heading");
                }
            });
        }

    },

    "8 Checking for the header properties when theme is blue & center aligned": function(client) {
        var blueheroHgcenter = pageObj.elements.blueheroHgcenter.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Blue theme and center aligned
            client.elements('css selector', blueheroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.blueheroHgcenter('xs');
                    callback.multiloop(client, blueheroHgcenter, properties, 'xs');
                    //console.log("center align");
                }
            });
            //common properties
            client.elements('css selector', blueheroHgcenter, results => {
                if (results.value.length > 0) {
                    properties = blogheader_props.commonprops('xs');
                    callback.multiloop(client, blueheroHgcenter, properties, 'xs');
                    //console.log("Heading");
                }
            });
        }

    },

    "Ending the session": function(client) {
        client.end();
    }

}