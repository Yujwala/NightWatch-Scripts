var pageurl = require('../../pageurls.js'),
    pageObj,automated_list_props,callback,size;

function globalProps(client) {
    pageObj = client.page.automated_list_selectors();
	callback = client.page.common();
	size = client.globals.size.widths;
	callback.getBrand(client);
	automated_list_props = require('./automated_list_props.js')(client);
}

module.exports = {
    '@tags': ['automated-list','desktop','automated-list-desktop'],
    //common session
    //Opening the URL
    "1 Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_COM_AUTOMATED_LIST);
        //console.log("--Desktop--"+pageurl.RBS_COM_AUTOMATED_LIST); 
    },

    "2 Check for automatedlist shelf properties": function(client) {
        var paddingshelfCls = pageObj.elements.alshelfProps.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        //padding of innershelf when horizontal
        client.elements('css selector', paddingshelfCls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.alshelfProps('lg');
                callback.multiloop(client, paddingshelfCls, properties, 'lg');
                console.log("inner padding");
            }

        });

        //padding of innershelf when vertical
        client.elements('css selector', paddingshelfCls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.alshelfProps('lg');
                callback.multiloop(client, paddingshelfCls, properties, 'lg');
                console.log("inner padding");
            }

        });
    }


    },
    "3 Check for theme of automated shelf": function(client) {
        var themeDarkgreyShelfcls = pageObj.elements.themeDarkgreyShelf.selector;
        var themeLightgreyShelfcls = pageObj.elements.themeLightgreyShelf.selector;
        var themeBrownShelfcls = pageObj.elements.themeBrownShelf.selector;
        var themeBlueShelf = pageObj.elements.themeBlueShelf.selector;
        var themeLightblueShelf = pageObj.elements.themeLightblueShelf.selector;
        var themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

        //Dark Grey Theme
        client.elements('css selector', themeDarkgreyShelfcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeDarkgreyShelf('lg');
                callback.multiloop(client, themeDarkgreyShelfcls, properties, 'lg');
                console.log("Darkgrey");
            }
        });
        //LightGreyTheme
        client.elements('css selector', themeLightgreyShelfcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeLightgreyShelf('lg');
                callback.multiloop(client, themeLightgreyShelfcls, properties, 'lg');
                console.log("Light grey");
            }
        });

        //Brown Theme
        client.elements('css selector', themeBrownShelfcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeBrownShelf('lg');
                callback.multiloop(client, themeBrownShelfcls, properties, 'lg');
                console.log("ThemeBrown");
            }
        });

        //Blue Theme
        client.elements('css selector', themeBlueShelf, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeBlueShelf('lg');
                callback.multiloop(client, themeBlueShelf, properties, 'lg');
                console.log("ThemeBlue");
            }
        });

        //LightBlue Theme
        client.elements('css selector', themeLightblueShelf, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeLightblueShelf('lg');
                callback.multiloop(client, themeLightblueShelf, properties, 'lg');
                console.log("Themelight blue");
            }
        });

        //White Theme
        client.elements('css selector', themeWhiteShelf, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.themeWhiteShelf('lg');
                callback.multiloop(client, themeWhiteShelf, properties, 'lg');
                console.log("Theme White");
            }
        });
    }

    },
    "4 Check for innershelf padding properties": function(client) {
        var innershelfpaddingcls = pageObj.elements.innershelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

        //padding of innershelf
        client.elements('css selector', innershelfpaddingcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.innershelf('lg');
                callback.multiloop(client, innershelfpaddingcls, properties, 'lg');
                //console.log("inner padding"); 
            }

        });
    }

    },
    "5 Check for Hovering of headings in automated list component ": function(client) {
        var listheadinghovercls = pageObj.elements.listheadinghover.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        //heading
        client.elements('css selector', listheadinghovercls, test)

        function test(elems) {

            var properties = automated_list_props.listheadinghover('lg');
            client.moveToElement(listheadinghovercls, 10, 10);
            client.pause(10000);
            callback.singleElem(client, listheadinghovercls, properties, 'lg');
            console.log("List Heading hover");


        }
    }
    },
    "6 Check for text inside automated list component ": function(client) {
        var listcontainertextcls = pageObj.elements.listcontainertext.selector;
        var listcontainertextafter = pageObj.elements.listcontainertextafter.selector;
        var listcontainertextafterblue = pageObj.elements.listcontainertextafterblue.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        //Text inside component
        client.elements('css selector', listcontainertextcls, results => {
            if (results.value.length > 0) {

                //heading
                properties = automated_list_props.listcontainertext('lg');
                callback.multiloop(client, listcontainertextcls, properties, 'lg');

                //console.log("Container Text"); 
                properties = automated_list_props.listcontainertextafter('lg');
                callback.pseudoSingleElem(client, listcontainertextafter, ':after', properties);
                //console.log("background");

                properties = automated_list_props.listcontainertextafterblue('lg');
                callback.pseudoSingleElem(client, listcontainertextafterblue, ':after', properties);
                //theme blue
            }

        });
    }


    },

    "7 Check for focus automated list component ": function(client) {
        var listitemfocuscls = pageObj.elements.listitemfocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        //Focus
        client.elements('css selector', listitemfocuscls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.listitemfocus('lg');
                client.waitForElementVisible(listitemfocuscls, 6000);
                client.moveToElement(listitemfocuscls, 1, 1);
                client.mouseButtonDown(0);
                client.pause(1000);
                //console.log("focus")

            }

        });
    }
    },

    /*start of horizontal session*/

    "8 Check for Heading properties of Shelf  when horizontal": function(client) {
        var Shelfheadingcls = pageObj.elements.Shelfheading.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

        //Heading properties--horizontal
        client.elements('css selector', Shelfheadingcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.Shelfheading('lg');
                callback.multiloop(client, Shelfheadingcls, properties, 'lg');
                //console.log("Heading"); 

            }
        });
    }
    },

    "9 Check for automated list component properties  when horizontal": function(client) {
        var listcomponentcls = pageObj.elements.listcomponent.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

        client.elements('css selector', listcomponentcls, results => {
            if (results.value.length > 0) {
                //list Component for horizontal
                properties = automated_list_props.listcomponent('lg');
                callback.multiloop(client, listcomponentcls, properties, 'lg');
                console.log("List component");

            }
        });
    }

    },
    "10 Check for headings of automated list component when horizontal ": function(client) {
        var listheadingcls = pageObj.elements.listheading.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {


        client.elements('css selector', listheadingcls, results => {
            if (results.value.length > 0) {
                //heading for horizontal
                properties = automated_list_props.listheading('lg');
                callback.multiloop(client, listheadingcls, properties, 'lg');
                //console.log("List Heading"); 
            }
        });
    }


    },


    "11 Check for margins of automated list component when horizontal ": function(client) {
        var listitemcls = pageObj.elements.listitem.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {


        //Margin Right 

        client.elements('css selector', listitemcls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.listitem('lg');
                callback.multiloop(client, listitemcls, properties, 'lg');
                //   console.log("Margin Right"); 
            }
        });
    }

    },



    /* Start Of Vertical Section */
    "12 Check for automatedlist shelf properties when vertical": function(client) {
        var paddingshelfCls = pageObj.elements.alshelfProps.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

        //padding of innershelf when vertical
        client.elements('css selector', paddingshelfCls, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.alshelfProps('lg');
                callback.multiloop(client, paddingshelfCls, properties, 'lg');
                console.log("inner padding");
            }

        });
    }

    },

    "13 Check for Heading properties of Shelf when vertical": function(client) {
        var verticalshelfheading = pageObj.elements.verticalshelfheading.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        //Heading properties--vertical
        client.elements('css selector', verticalshelfheading, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.verticalshelfheading('lg');
                callback.multiloop(client, verticalshelfheading, properties, 'lg');
                //console.log("Heading"); 

            }
        });
    }
    },

    "14 Check for automated list component properties when vertical": function(client) {
        var verticallistcomponent = pageObj.elements.verticallistcomponent.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        client.elements('css selector', verticallistcomponent, results => {
            if (results.value.length > 0) {
                //list Component for vertical
                properties = automated_list_props.verticallistcomponent('lg');
                callback.multiloop(client, verticallistcomponent, properties, 'lg');
                console.log("List component");

            }
        });
    }
    },

    "15 Check for headings of automated list component when vertical ": function(client) {
        globalProps(client);
        var verticallistheading = pageObj.elements.verticallistheading.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        client.elements('css selector', verticallistheading, results => {
            if (results.value.length > 0) {
                //heading for vertical
                properties = automated_list_props.verticallistheading('lg');
                callback.multiloop(client, verticallistheading, properties, 'lg');
                //console.log("List Heading"); 
            }
        });
    }
    },

    "16 Check for margins of automated list component ": function(client) {
        globalProps(client);
        var verticallistitem = pageObj.elements.verticallistitem.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        // margin Right for vertical
        client.elements('css selector', verticallistitem, results => {
            if (results.value.length > 0) {
                properties = automated_list_props.verticallistitem('lg');
                callback.multiloop(client, verticallistitem, properties, 'lg');
                //   console.log("Margin Right"); 
            }
        });
    }
    },

    "Ending the session": function(client) {
        client.end();
    }



}