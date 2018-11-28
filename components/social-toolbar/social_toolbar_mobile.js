var social_toolbar_props = require('./social_toolbar_props.js'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

function globalProps(client) {
    pageObj = client.page.social_toolbar_selectors(),
        callback = client.page.common(),
        size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['Social Toolbar'],
    //Opening the Desktop URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client,client,pageurl.ULSTER_IE_SOCIAL_TOOLBAR_M);
        console.log("--Mobile--" + pageurl.ULSTER_IE_SOCIAL_TOOLBAR_M);
    },

    "1 Check for Social Tool bar  Properties": function (client) {
        socialbarmaindivstarts = pageObj.elements.socialbarmaindiv.selector,
            
            
            socialbardivul = pageObj.elements.socialbarul.selector,
            socialbardivli = pageObj.elements.socialbarli.selector,
            socialbardivlilastchild = pageObj.elements.socialbarlilastchild.selector,

            socialbardivlink = pageObj.elements.socialbarlink.selector,
            socialbardivspan = pageObj.elements.socialbarspan.selector,
            socialbarfacebookbefore = pageObj.elements.socialbarfacebook.selector,
            socialbartwitterbefore = pageObj.elements.socialbartwitter.selector,
            socialbaremailbefore = pageObj.elements.socialbaremail.selector,
            socialbarprintbefore = pageObj.elements.socialbarprint.selector,
            globalProps(client);
        //console.log(ns_themeBlueShelf);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            globalProps(client);
            client.elements('css selector', socialbarmaindivstarts, results => {
                if (results.value.length > 0) {
                    properties = social_toolbar_props.socialbarmaindiv('xs');
                    callback.multiloop(client, socialbarmaindivstarts, properties, 'xs');
    
                    properties = social_toolbar_props.socialbarul('xs');
                    callback.multiloop(client, socialbardivul, properties, 'xs');
    
    
                    properties = social_toolbar_props.socialbarli('xs');
                    callback.multiloop(client, socialbardivli, properties, 'xs');

                    properties = social_toolbar_props.socialbarlilastchild('xs');
                    callback.multiloop(client, socialbardivlilastchild, properties, 'xs');
    
    
                    properties = social_toolbar_props.socialbarlink('xs');
                    callback.multiloop(client, socialbardivlink, properties, 'xs');
    
                    properties = social_toolbar_props.socialbarspan('xs');
                    callback.multiloop(client, socialbardivspan, properties, 'xs');
    
    
    
                    properties = social_toolbar_props.socialbarfacebook('xs');
                    callback.pseudoSingleElem(client, socialbarfacebookbefore, ':before', properties);
                    console.log(socialbarfacebookbefore);
    
                    properties = social_toolbar_props.socialbartwitter('xs');
                    callback.pseudoSingleElem(client, socialbartwitterbefore, ':before', properties);
    
                    properties = social_toolbar_props.socialbaremail('xs');
                    callback.pseudoSingleElem(client, socialbaremailbefore, ':before', properties);
    
                    properties = social_toolbar_props.socialbarprint('xs');
                    callback.pseudoSingleElem(client, socialbarprintbefore, ':before', properties);
    
    
                }
    
    
            });


           

        }

    },

    'Closing Browser': function (client) {
        //client.pause(1000);
        client.end();
    }
}



