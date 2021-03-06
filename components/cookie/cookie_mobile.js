var pageurl = require('../../pageurls.js'),
    pageObj,cookie_props,callback,size;

function globalProps(client) {
    pageObj = client.page.cookie_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	cookie_props = require('./cookie_props.js')(client);
}

module.exports = {
    '@tags': ['cookie','mobile','cookie-mobile'],

    "Resize The Window": function(client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
        client.refresh();
        client.pause(500);

    },

    //Opening the URL
    "1 Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_REM_COOKIE_MOB);
        console.log("--Mobile--"+pageurl.RBS_REM_COOKIE_MOB); 
    },

    "2 Check for the properties of cookie banner" : function(client){
        globalProps(client);
        var cookiebanner = pageObj.elements.cookiebanner.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //cookie div properties
        client.elements('css selector', cookiebanner, results => {
            if (results.value.length > 0) {
                properties = cookie_props.cookiebanner('xs');
                callback.multiloop(client, cookiebanner, properties, 'xs');
                console.log("cookie banner");
            }

        });
    }
},

    "3 Check for the properties of header of cookie banner" : function(client){
        var cookieheader = pageObj.elements.cookieheader.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //cookie header
        client.elements('css selector', cookieheader, results => {
            if (results.value.length > 0) {
                properties = cookie_props.cookieheader('xs');
                callback.multiloop(client, cookieheader, properties, 'xs');
                console.log("cookie header");
            }

        });
    }
    },

    
    "4 Check for the properties of subheader" : function(client){
        var cookieheader = pageObj.elements.cookieheader.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //cookie subheader
        client.elements('css selector', cookieheader, results => {
            if (results.value.length > 0) {
                properties = cookie_props.cookieheader('xs');
                callback.multiloop(client, cookieheader, properties, 'xs');
                console.log("cookie subheader");
            }

        });
    }
    },

    "5 Check for the properties of cookie closer" : function(client){
        var cookieclose = pageObj.elements.cookieclose.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //cookie close
        client.elements('css selector', cookieclose, results => {
            if (results.value.length > 0) {
                properties = cookie_props.cookieclose('xs');
                callback.pseudoSingleElem(client, cookieclose, ':after', properties);
                console.log("cookie closer");
            }

        });
    }
    },

    "Ending the session": function(client) {
        client.end();
    }
}