var pageurl = require('../../pageurls.js'),
    pageObj,tool_hero_props,callback,size;

function globalProps(client) {
    pageObj = client.page.tool_hero_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	tool_hero_props = require('./tool_hero_props.js')(client);
}

module.exports = {
    '@tags': ['desktop', 'tool-hero', 'tool-hero-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_TOOL_HERO);  
        console.log("--Desktop--" + pageurl.NW_PER_TOOL_HERO);
    },
    "1 Check for shelf properties": function (client) {
        var overdraftWrap = pageObj.elements.overdraftWrap.selector,
        cashbackWrap = pageObj.elements.cashbackWrap.selector,
        clearrateWrap = pageObj.elements.clearrateWrap.selector,
        payoffWrap = pageObj.elements.payoffWrap.selector,
        mortgageWrap = pageObj.elements.mortgageWrap.selector,
        mortgageTrackerWrap = pageObj.elements.mortgageTrackerWrap.selector,
        hmcibWrap = pageObj.elements.hmcibWrap.selector,
        mrfWrap = pageObj.elements.mrfWrap.selector,
        aipWrap = pageObj.elements.aipWrap.selector,
        InnerWrap = pageObj.elements.toolHeroInnerShelfWrap.selector;
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //overdraft shelf wrapper properties
            client.elements('css selector', overdraftWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.overdraftWrapProps('lg');
                    callback.multiloop(client, overdraftWrap, properties, 'lg');
                }
            });

            // cashback shelf wrapper properties
            client.elements('css selector', cashbackWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.cashbackWrapProps('lg');
                    callback.multiloop(client, cashbackWrap, properties, 'lg');
                }
            });
            
            //clear rate shelf wrapper properties
            client.elements('css selector', clearrateWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.clearrateWrapProps('lg');
                    callback.multiloop(client, clearrateWrap, properties, 'lg');
                }
            });
            //payoff shelf wrapper properties
            client.elements('css selector', payoffWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.payoffWrapProps('lg');
                      callback.multiloop(client, payoffWrap, properties, 'lg');
                }
            });
           
             //Mortgage shelf wrapper properties
               client.elements('css selector', mortgageWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mortgageWrapProps('lg');
                    callback.multiloop(client, mortgageWrap, properties, 'lg');
                }
            });
            //Mortgage Tracker shelf wrapper properties
            client.elements('css selector', mortgageTrackerWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mortgageTrackerWrapProps('lg');
                    callback.multiloop(client, mortgageTrackerWrap, properties, 'lg');
                }
            });
          
            //Hmcib shelf wrapper properties
            client.elements('css selector', hmcibWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.hmcibWrapProps('lg');
                    callback.multiloop(client, hmcibWrap, properties, 'lg');
                }
            });
            //Mrf shelf wrapper properties
            client.elements('css selector', mrfWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mrfWrapProps('lg');
                    callback.multiloop(client, mrfWrap, properties, 'lg');
                }
            });
            //AIP shlef wrapper properities
            client.elements('css selector', aipWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.aipWrapProps('lg');
                    callback.multiloop(client, aipWrap, properties, 'lg');
                }
            });
            
            // Inner shelf properities
            client.elements('css selector', InnerWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroInnerShelfWrapProps('lg');
                    callback.multiloop(client, InnerWrap, properties, 'lg');
                }
            });
        }

    },

    "2 Check for shelf header and title properties": function (client) {
        var HeadertitleCls = pageObj.elements.toolHeroHeaderTitle.selector;
        var titleCls = pageObj.elements.toolHeroTitle.selector;
       // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //header title properties
            client.elements('css selector', HeadertitleCls, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroHeaderTitleProps('lg');
                    callback.multiloop(client, HeadertitleCls, properties, 'lg');
                }
            });
            
            // title properities
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroTitleProps('lg');
                    callback.multiloop(client, titleCls, properties, 'lg');
                }
            });
        }

    },

    

    "Ending the session": function (client) {
        client.end();
    }

}; 
