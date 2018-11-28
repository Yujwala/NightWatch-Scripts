var pageurl = require('../../pageurls.js'),
    pageObj,faq_props,callback,size;  

function globalProps(client){
    pageObj = client.page.faq_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;   
    callback.getBrand(client);
    faq_props = require('./faq_props.js')(client);
}    

module.exports = {
    '@tags': ['desktop', 'faq', 'faq-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_FAQ_TOOL);
            console.log("--Desktop--"+pageurl.NW_PER_FAQ_TOOL); 
    },

    "1 Check for Overlay Properties": function(client) {
        client.click('.overlay-link');
        client.pause('5000');
        client.waitForElementVisible('.overlay-content .overlay-inner .faq--ans.faq--overlay', 6000); 
        client.pause('2000');
        
        var overlaystruct = pageObj.elements.overlaystruct.selector,
            olquestion = pageObj.elements.olquestion.selector,
            olp = pageObj.elements.olp.selector, 
            olfaqinner = pageObj.elements.olfaqinner.selector; 
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',overlaystruct,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.overlaystruct('lg');  
                    callback.singleElem(client,overlaystruct, Properties, 'lg');
                        }
                    });
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',olquestion,results=>{
                if(results.value.length>0) { 
                    Properties = faq_props.olquestion('lg');  
                    callback.singleElem(client,olquestion, Properties, 'lg');
                        }
                    });            
        }
       }
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',olp,results=>{
            if(results.value.length>0) { 
                Properties = faq_props.olp('lg');  
                callback.singleElem(client,olp, Properties, 'lg');
                    }
                });            
    }

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',olfaqinner,results=>{
            if(results.value.length>0) { 
                Properties = faq_props.olfaqinner('lg');  
                callback.singleElem(client,olfaqinner, Properties, 'lg');
                    }
                });            
    }
   },
     'Ending the session': function(client){
       client.end();
     }
 };
    