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
    //common
    //Resize the window for mobile
    '@tags': ['automated-list','mobile','automated-list-desktop'],
    "Resize The Window": function(client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },

    //Opening the URL
    "1 Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_COM_AUTOMATED_LIST_MOB);
        //console.log("--Desktop--"+pageurl.RBS_COM_AUTOMATED_LIST_MOB); 
    },

    "2 Check for automatedlist shelf properties": function(client) {
        globalProps(client);
        var paddingshelfCls = pageObj.elements.alshelfProps.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //padding of innershelf when horizontal
            client.elements('css selector', paddingshelfCls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.alshelfProps('xs');
                    callback.multiloop(client, paddingshelfCls, properties, 'xs');
                    //console.log("inner padding"); 
                }
            });
            //padding of innershelf when vertical
            client.elements('css selector', paddingshelfCls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.alshelfProps('xs');
                    callback.multiloop(client, paddingshelfCls, properties, 'xs');
                    console.log("inner padding");
                }

            });
        }

    },

    "3 Check for theme of automated shelf": function(client) {
        globalProps(client);
        var themeDarkgreyShelfcls = pageObj.elements.themeDarkgreyShelf.selector;
        var themeLightgreyShelfcls = pageObj.elements.themeLightgreyShelf.selector;
        var themeBrownShelfcls = pageObj.elements.themeBrownShelf.selector;
        var themeBlueShelf = pageObj.elements.themeBlueShelf.selector;
        var themeLightblueShelf = pageObj.elements.themeLightblueShelf.selector;
        var themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Dark Grey Theme
            client.elements('css selector', themeDarkgreyShelfcls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeDarkgreyShelf('xs');
                    callback.multiloop(client, themeDarkgreyShelfcls, properties, 'xs');
                    //console.log("Darkgrey"); 
                }
            });

            //LightGreyTheme
            client.elements('css selector', themeLightgreyShelfcls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeLightgreyShelf('xs');
                    callback.multiloop(client, themeLightgreyShelfcls, properties, 'xs');
                    // console.log("Light grey"); 
                }
            });

            //Brown Theme
            client.elements('css selector', themeBrownShelfcls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeBrownShelf('xs');
                    callback.multiloop(client, themeBrownShelfcls, properties, 'xs');
                    //console.log("ThemeBrown"); 
                }
            });

            //Blue Theme
            client.elements('css selector', themeBlueShelf, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeBlueShelf('xs');
                    callback.multiloop(client, themeBlueShelf, properties, 'xs');
                    console.log("ThemeBlue");
                }
            });

            //LightBlue Theme
            client.elements('css selector', themeLightblueShelf, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeLightblueShelf('xs');
                    callback.multiloop(client, themeLightblueShelf, properties, 'xs');
                    console.log("Themelight blue");
                }
            });

            //White Theme
            client.elements('css selector', themeWhiteShelf, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.themeWhiteShelf('xs');
                    callback.multiloop(client, themeWhiteShelf, properties, 'xs');
                    console.log("Theme White");
                }
            });


        }
    },

    "4 Check for innershelf padding properties": function(client) {
        globalProps(client);
        var innershelfpaddingcls = pageObj.elements.innershelf.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //padding of innershelf
            client.elements('css selector', innershelfpaddingcls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.innershelf('xs');
                    callback.multiloop(client, innershelfpaddingcls, properties, 'xs');
                    //console.log("inner padding"); 

                }
            });
        }
    },




    "5 Check for text inside automated list component ": function(client) {
        globalProps(client);
        var listcontainertextcls = pageObj.elements.listcontainertext.selector;
        var listcontainertextafter = pageObj.elements.listcontainertextafter.selector;
        var listcontainertextafterblue = pageObj.elements.listcontainertextafterblue.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            //Text inside component
            client.elements('css selector', listcontainertextcls, results => {
                if (results.value.length > 0) {

                    //heading
                    properties = automated_list_props.listcontainertext('xs');
                    callback.multiloop(client, listcontainertextcls, properties, 'xs');
                    //console.log("Container Text"); 
                    properties = automated_list_props.listcontainertextafter('xs');
                    callback.pseudoSingleElem(client, listcontainertextafter, ':after', properties);
                    //console.log("background");

                    properties = automated_list_props.listcontainertextafterblue('xs');
                    callback.pseudoSingleElem(client, listcontainertextafterblue, ':after', properties);
                    //theme blue
                }
            });
        }

    },

    /* For Horizontal  sessions */


    "6 Check for Heading properties of Shelf when horizontal": function(client) {
        globalProps(client);
        var Shelfheadingcls = pageObj.elements.Shelfheading.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Heading properties
            client.elements('css selector', Shelfheadingcls, results => {
                if (results.value.length > 0) {
                    //heading properties --horizontal
                    properties = automated_list_props.Shelfheading('xs');
                    callback.multiloop(client, Shelfheadingcls, properties, 'xs');
                    //console.log("Heading"); 
                }
            });

        }
    },

    "7 Check for automated list component properties when horizontal": function(client) {
        globalProps(client);
        var listcomponentcls = pageObj.elements.listcomponent.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', listcomponentcls, results => {
                if (results.value.length > 0) {
                    //list component for horizontal
                    properties = automated_list_props.listcomponent('xs');
                    callback.multiloop(client, listcomponentcls, properties, 'xs');
                    //console.log("List component"); 

                }
            });


        }
    },

    "8 Check for headings of automated list component when horizontal": function(client) {
        globalProps(client);
        var listheadingcls = pageObj.elements.listheading.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', listheadingcls, results => {
                if (results.value.length > 0) {
                    //heading
                    properties = automated_list_props.listheading('xs');
                    callback.multiloop(client, listheadingcls, properties, 'xs');
                    //console.log("List Heading"); 

                }
            });


        }
    },


    "9 Check for margins of automated list component when horizontal": function(client) {
        globalProps(client);
        var listitemcls = pageObj.elements.listitem.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            //Margin Right
            client.elements('css selector', listitemcls, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.listitem('xs');
                    callback.multiloop(client, listitemcls, properties, 'xs');
                    //console.log("Margin Right"); 
                }
            });


        }

    },

    /* For Vertical Sessions */


    "10 Check for Heading properties of Shelf when vertical": function(client) {
        globalProps(client);

        var verticalshelfheading = pageObj.elements.verticalshelfheading.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {


            //Heading properties--vertical
            client.elements('css selector', verticalshelfheading, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.verticalshelfheading('xs');
                    callback.multiloop(client, verticalshelfheading, properties, 'xs');
                    //console.log("Heading"); 

                }
            });
        }
    },

    "11 Check for automated list component properties when vertical": function(client) {
        globalProps(client);

        var verticallistcomponent = pageObj.elements.verticallistcomponent.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.elements('css selector', verticallistcomponent, results => {
                if (results.value.length > 0) {
                    //list Component for vertical
                    properties = automated_list_props.verticallistcomponent('xs');
                    callback.multiloop(client, verticallistcomponent, properties, 'xs');
                    console.log("List component");

                }
            });
        }
    },

    "12 Check for headings of automated list component when vertical ": function(client) {
        globalProps(client);

        var verticallistheading = pageObj.elements.verticallistheading.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {


            client.elements('css selector', verticallistheading, results => {
                if (results.value.length > 0) {
                    //heading for vertical
                    properties = automated_list_props.verticallistheading('xs');
                    callback.multiloop(client, verticallistheading, properties, 'xs');
                    //console.log("List Heading"); 
                }
            });
        }
    },


    "13 Check for margins of automated list component when vertical ": function(client) {
        globalProps(client);

        var verticallistitem = pageObj.elements.verticallistitem.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {


            // margin Right for vertical
            client.elements('css selector', verticallistitem, results => {
                if (results.value.length > 0) {
                    properties = automated_list_props.verticallistitem('xs');
                    callback.multiloop(client, verticallistitem, properties, 'xs');
                    //   console.log("Margin Right"); 
                }
            });
        }

    },




    "Ending the session": function(client) {
        client.end();
    }



}