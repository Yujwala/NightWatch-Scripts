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
    "Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_TOOL_SHELF);  
        console.log("--Desktop--" + pageurl.NW_PER_TOOL_SHELF);
        client.pause(6000);
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
        
       
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', ts_toolshelfstart, results => {
                if (results.value.length > 0) {
                    properties = tool_shelf_props.toolgriditemheader('lg');
                    callback.multiloop(client, ts_toolgriditemheader, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriditemheadersignpost('lg');
                    callback.multiloop(client, ts_toolgriditemheadersignpost, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriditemheaderheadline('lg');
                    callback.multiloop(client, ts_toolgriditemheaderheadline, properties, 'lg');
        
                    
        
                    properties = tool_shelf_props.toolgriditemdescrichtxt('lg');
                    callback.multiloop(client, ts_toolgriditemdescrichtxt, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriditemdescrichtxtp('lg');
                    callback.multiloop(client, ts_toolgriditemdescrichtxtp, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriddesk('lg');
                    callback.multiloop(client, ts_toolgriddesk, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriddeskanchor('lg');
                    callback.multiloop(client, ts_toolgriddeskanchor, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriddeskanchoricon('lg');
                    callback.multiloop(client, ts_toolgriddeskanchoricon, properties, 'lg');
        
                    properties = tool_shelf_props.toolgriddeskpicon('lg');
                    callback.pseudoSingleElem(client, ts_toolgriddeskanchor, ':after', properties);
                    properties = tool_shelf_props.toolgriditem('lg');
                    callback.multiloop(client, ts_toolgriditem, properties, 'lg');

                    client.elements('css selector', ts_toolthemewhite, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemewhite('lg');
                            callback.multiloop(client, ts_toolthemewhite, properties, 'lg');
                        }
                    });

                    client.elements('css selector', ts_toolthemeblue, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemeblue('lg');
                            callback.multiloop(client, ts_toolthemeblue, properties, 'lg');
                        }
                    });

                    client.elements('css selector', ts_toolthemelightblue, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemelightblue('lg');
                            callback.multiloop(client, ts_toolthemelightblue, properties, 'lg');
                        }
                    });

                    client.elements('css selector', ts_toolthemeoffwhite, results => {
                        if (results.value.length > 0) {
                            properties = tool_shelf_props.toolthemeoffwhite('lg');
                            callback.multiloop(client, ts_toolthemeoffwhite, properties, 'lg');
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

           
            
           
           
        }

    },

    

    

    "Ending the session": function (client) {
        client.end();
    }

}; 
