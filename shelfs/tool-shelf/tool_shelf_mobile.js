var tool_shelf_props = require('./tool_shelf_props.js');
var pageurl = require('../../pageurls.js');
var pageObj;

function globalProps(client) {
    pageObj = client.page.tool_shelf_selectors(),
        callback = client.page.common(),
        size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['desktop', 'tool-shelf', 'tool-shelf-desktop'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },
    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client,client,pageurl.UL_COUK_TOOL_SHELF_MOB);
        console.log("--Mobile--" + pageurl.UL_COUK_TOOL_SHELF_MOB);
    },
    
    "1 Check for shelf properties": function (client) {
        ts_toolshelfstart=pageObj.elements.toolshelfstart.selector,
        ts_toolthemewhite = pageObj.elements.toolthemewhite.selector,
        ts_toolthemeblue = pageObj.elements.toolthemeblue.selector,
        ts_toolthemelightblue = pageObj.elements.toolthemelightblue.selector,
        ts_toolthemeoffwhite = pageObj.elements.toolthemeoffwhite.selector,
        ts_toolgriditem = pageObj.elements.toolgriditem.selector,
        ts_toolgriditemonehalf = pageObj.elements.toolgriditemonehalf.selector,
        ts_toolgriditemonethird = pageObj.elements.toolgriditemonethird.selector,
        ts_toolgriditemonethirdnext = pageObj.elements.toolgriditemonethirdnext.selector,
        ts_toolgriditemheader = pageObj.elements.toolgriditemheader.selector,
        ts_toolgriditemheadersignpost = pageObj.elements.toolgriditemheadersignpost.selector,
        ts_toolgriditemheaderheadline = pageObj.elements.toolgriditemheaderheadline.selector,
        ts_toolgriditemdesc = pageObj.elements.toolgriditemdesc.selector,
        ts_toolgriditemdescrichtxt = pageObj.elements.toolgriditemdescrichtxt.selector,
        ts_toolgriditemdescrichtxtp = pageObj.elements.toolgriditemdescrichtxtp.selector,
        ts_toolgriddesk = pageObj.elements.toolgriddesk.selector,
        ts_toolgriddeskanchor = pageObj.elements.toolgriddeskanchor.selector,
        ts_toolgriddeskanchoricon = pageObj.elements.toolgriddeskanchoricon.selector,
        ts_toolgriddeskpicon=pageObj.elements.toolgriddeskpicon.selector,

        
        globalProps(client);
        callback.scrollToElement(client,ts_toolshelfstart); 
        console.log(ts_toolgriditem.length);
        
       
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', ts_toolshelfstart, results => {
                if (results.value.length > 0) {
                    properties = tool_shelf_props.toolgriditemheader('xs');
                    callback.multiloop(client, ts_toolgriditemheader, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriditemheadersignpost('xs');
                    callback.multiloop(client, ts_toolgriditemheadersignpost, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriditemheaderheadline('xs');
                    callback.multiloop(client, ts_toolgriditemheaderheadline, properties, 'xs');
        
                    
        
                    properties = tool_shelf_props.toolgriditemdescrichtxt('xs');
                    callback.multiloop(client, ts_toolgriditemdescrichtxt, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriditemdescrichtxtp('xs');
                    callback.multiloop(client, ts_toolgriditemdescrichtxtp, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriddesk('xs');
                    callback.multiloop(client, ts_toolgriddesk, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriddeskanchor('xs');
                    callback.multiloop(client, ts_toolgriddeskanchor, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriddeskanchoricon('xs');
                    callback.multiloop(client, ts_toolgriddeskanchoricon, properties, 'xs');
        
                    properties = tool_shelf_props.toolgriddeskpicon('xs');
                    callback.pseudoSingleElem(client, ts_toolgriddeskanchor, ':after', properties);
                    

                    client.elements('css selector', ts_toolthemewhite, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemewhite('xs');
                            callback.multiloop(client, ts_toolthemewhite, properties, 'xs');
                        }
                    });

                    client.elements('css selector', ts_toolthemeblue, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemeblue('xs');
                            callback.multiloop(client, ts_toolthemeblue, properties, 'xs');
                        }
                    });

                    client.elements('css selector', ts_toolthemelightblue, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemelightblue('xs');
                            callback.multiloop(client, ts_toolthemelightblue, properties, 'xs');
                        }
                    });

                    client.elements('css selector', ts_toolthemeoffwhite, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemeoffwhite('xs');
                            callback.multiloop(client, ts_toolthemeoffwhite, properties, 'xs');
                        }
                    });
                }
            });
           
            


       
            // properties = tool_shelf_props.toolgriditemonehalf('lg');
            // callback.multiloop(client, ts_toolgriditemonehalf, properties, 'lg');

            // properties = tool_shelf_props.toolgriditemonehalf('lg');
            // callback.multiloop(client, ts_toolgriditemonethird, properties, 'lg');

            // properties = tool_shelf_props.toolgriditemonethirdnext('lg');
            // callback.multiloop(client, ts_toolgriditemonethirdnext, properties, 'lg');

            properties = tool_shelf_props.toolgriditem('xs');
            callback.multiloop(client, ts_toolgriditem, properties, 'xs');
            
            
           
           
        }

    },

    

    

    "Ending the session": function (client) {
        client.end();
    }

}; 
