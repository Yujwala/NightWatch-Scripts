var pageurl = require('../../pageurls.js'),
    pageObj,tool_hero_props,callback,size;

function globalProps(client) {
    pageObj = client.page.tool_hero_selectors();
	callback = client.page.common();
	size = client.globals.size.widths;
	callback.getBrand(client);
	tool_hero_props = require('./tool_hero_props.js')(client);
}

module.exports = {
    '@tags': ['mobile','tool-hero', 'tool-hero-mobile'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },
    "Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.ULSTER_NI_TOOL_HERO_MOB);  
        console.log("--Desktop--" + pageurl.ULSTER_NI_TOOL_HERO_MOB);
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', overdraftWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.overdraftWrapProps('xs');
                    callback.multiloop(client, overdraftWrap, properties, 'xs');
                }
            });

            // cashback shelf wrapper properties
            client.elements('css selector', cashbackWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.cashbackWrapProps('xs');
                    callback.multiloop(client, cashbackWrap, properties, 'xs');
                }
            });
            
            //clear rate shelf wrapper properties
            client.elements('css selector', clearrateWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.clearrateWrapProps('xs');
                    callback.multiloop(client, clearrateWrap, properties, 'xs');
                }
            });
            //payoff shelf wrapper properties
            client.elements('css selector', payoffWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.payoffWrapProps('xs');
                    callback.multiloop(client, payoffWrap, properties, 'xs');
                }
            });
           
             //Mortgage shelf wrapper properties
               client.elements('css selector', mortgageWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mortgageWrapProps('xs');
                    callback.multiloop(client, mortgageWrap, properties, 'xs');
                }
            });
            //Mortgage Tracker shelf wrapper properties
            client.elements('css selector', mortgageTrackerWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mortgageTrackerWrapProps('xs');
                    callback.multiloop(client, mortgageTrackerWrap, properties, 'xs');
                }
            });
          
            //Hmcib shelf wrapper properties
            client.elements('css selector', hmcibWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.hmcibWrapProps('xs');
                    callback.multiloop(client, hmcibWrap, properties, 'xs');
                }
            });
            //Mrf shelf wrapper properties
            client.elements('css selector', mrfWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.mrfWrapProps('xs');
                    callback.multiloop(client, mrfWrap, properties, 'xs');
                }
            });
            //AIP shlef wrapper properities
            client.elements('css selector', aipWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.aipWrapProps('xs');
                    callback.multiloop(client, aipWrap, properties, 'xs');
                }
            });
            
            // Inner shelf properities
            client.elements('css selector', InnerWrap, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroInnerShelfWrapProps('xs');
                    callback.multiloop(client, InnerWrap, properties, 'xs');
                }
            });
        }

    },

    "2 Check for shelf header and title properties": function (client) {
        var HeadertitleCls = pageObj.elements.toolHeroHeaderTitle.selector;
        var titleCls = pageObj.elements.toolHeroTitle.selector;
        //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //header title properties
            client.elements('css selector', HeadertitleCls, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroHeaderTitleProps('xs');
                    callback.multiloop(client, HeadertitleCls, properties, 'xs');
                }
            });
            
            // title properities
            client.elements('css selector', titleCls, results => {
                if (results.value.length > 0) {
                    properties = tool_hero_props.toolHeroTitleProps('xs');
                    callback.multiloop(client, titleCls, properties, 'xs');
                }
            });
        }

    },
    "Ending the session": function (client) {
        client.end();
    }

}; 

