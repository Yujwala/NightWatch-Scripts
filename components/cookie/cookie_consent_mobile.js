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
    '@tags': ['cookie-consent','mobile','cookie-consent-mobile'],

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
        callback.openURL(client,pageurl.RBS_COM_COOKIECONSENT_MOB);
        console.log("--Mobile--"+pageurl.RBS_COM_COOKIECONSENT_MOB); 
    },

    "2 Check for the properties of the main header": function(client){
        globalProps(client);
        var ccheader = pageObj.elements.ccheader.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //cookie div properties
        client.elements('css selector', ccheader, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccheader('xs');
                callback.multiloop(client, ccheader, properties, 'xs');
                console.log("cookie header");
            }

        });
      }
    },

    "3 Check for the properties of the image in main header": function(client){
        var ccimage = pageObj.elements.ccimage.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //image in the header
        client.elements('css selector', ccimage, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccimage('xs');
                callback.multiloop(client, ccimage, properties, 'xs');
                console.log("imager");
            }

        });
      }
    },

    "4 Check for the properties of breadcrumb": function(client){
        var ccbreadcumb = pageObj.elements.ccbreadcumb.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //breadcrumb
        client.elements('css selector', ccbreadcumb, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccbreadcumb('xs');
                callback.multiloop(client, ccbreadcumb, properties, 'xs');
                console.log("breadcrumb");
            }

        });
      }
    },
    
    "5 Check for the properties of list in breadcrumb": function(client){
        var ccbreadcumblist = pageObj.elements.ccbreadcumblist.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //breadcrumb-list
        client.elements('css selector', ccbreadcumblist, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccbreadcumblist('xs');
                callback.multiloop(client, ccbreadcumblist, properties, 'xs');
                console.log("list in bread crumb");
            }

        });
      }
    },

    "6 Check for the properties of text in breadcrumb": function(client){
        var ccbreadcrumbanchor = pageObj.elements.ccbreadcrumbanchor.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //breadcrumb-text
        client.elements('css selector', ccbreadcrumbanchor, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccbreadcrumbanchor('xs');
                callback.multiloop(client, ccbreadcrumbanchor, properties, 'xs');
                console.log("text in breadcrumb");
            }

        });
      }
    },

    "7 Check for the properties of first rte": function(client){
        var firsttexteditor = pageObj.elements.firsttexteditor.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //rich text editor
        client.elements('css selector', firsttexteditor, results => {
            if (results.value.length > 0) {
                properties = cookie_props.firsttexteditor('xs');
                callback.multiloop(client, firsttexteditor, properties, 'xs');
                console.log("RTE");
            }

        });
      }
    },

    
    "7.1 Check for the properties of rte": function(client){
        var texteditor = pageObj.elements.texteditor.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //rich text editor
        client.elements('css selector', texteditor, results => {
            if (results.value.length > 0) {
                properties = cookie_props.texteditor('xs');
                callback.multiloop(client, texteditor, properties, 'xs');
                console.log("rte");
            }

        });
      }
    },

    "8 Check for the properties of shelf": function(client){
        var ccshelf = pageObj.elements.ccshelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //shelf props
        client.elements('css selector', ccshelf, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccshelf('xs');
                callback.multiloop(client, ccshelf, properties, 'xs');
                console.log("shelf properties");
            }

        });
      }
    },

    "9 Check for the properties of headers": function(client){
        var ccsubheaders = pageObj.elements.ccsubheaders.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //Header Props
        client.elements('css selector', ccsubheaders, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccsubheaders('xs');
                callback.multiloop(client, ccsubheaders, properties, 'xs');
                console.log("header properties");
            }

        });
      }
    },

    "10 Check for the properties of p tags": function(client){
        var ccp = pageObj.elements.ccp.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //P tags
        client.elements('css selector', ccp, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccp('xs');
                callback.multiloop(client, ccp, properties, 'xs');
                console.log("p tagsr");
                console.log("some P tags are having internal styling");
            }

        });
      }
    },

    "11 Check for the properties of list tags": function(client){
        var ccli = pageObj.elements.ccli.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //list tags
        client.elements('css selector', ccli, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccli('xs');
                callback.multiloop(client, ccli, properties, 'xs');
                console.log("list tags");
            }

        });
      }
    },

    "12 Check for the properties of checked radio button" : function(client){
        var ccradiobtn = pageObj.elements.ccradiobtn.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //radio button
        client.elements('css selector', ccradiobtn, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccradiobtn('xs');
                callback.multiloop(client, ccradiobtn, properties, 'xs');
            }

        });
      }
    },

    "13 Check for focus of radio buttons ": function(client) {
        var ccradiobtnfocus = pageObj.elements.ccradiobtnfocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
        //Focus
        client.elements('css selector', ccradiobtnfocus, results => {
            if (results.value.length > 0) {
                properties = cookie_props.ccradiobtnfocus('xs');
                client.waitForElementVisible(ccradiobtnfocus, 6000);
                client.moveToElement(ccradiobtnfocus, 1, 1);
                client.mouseButtonDown(0);
                client.pause(1000);
                //console.log("focus")

            }

        });
    }
},

    "14 Check for functioning of radio buttons": function(client) {
          
        client.click('#cc-check-new_form_cc-check-0');
        client.pause(1000) ;
        client.expect.element('.cc-accepted').to.text.contains('Cookies have been accepted');
        client.click('#cc-check-new_form_cc-check-1');
        client.pause(1000);
        client.expect.element('.cc-declined').to.text.contains('Cookies have been declined')
        
    },
    
    "Ending the session": function(client) {
        client.end();
    }
}