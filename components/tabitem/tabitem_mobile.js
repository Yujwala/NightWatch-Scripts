var comp_props,pageObj,callback,size,rteCallback,
    pageurl = require('../../pageurls.js');

function globalProps(client){
    pageObj = client.page.tabitem_selectors(),
	callback = client.page.common(),
	//rteCallback = client.page.components.rte.rte(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	size = client.globals.size.widths;
	callback.getBrand(client);
	comp_props = require('./tabitem_props.js')(client);
}

module.exports = {
    '@tags': ['mobile','tabitem-mobile','tabitem'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.LOM_IE_TABITEM_MOBILE);
       // callback.openURL(client,pageurl.LOM_IE_TABITEM_MOBILE);
        console.log("--For Mobile--" + pageurl.LOM_IE_TABITEM_MOBILE);
    },
    "1.Checking The Main Division Properties": function (client) {
        mainDivCls = pageObj.elements.maintabMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', mainDivCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.serviceTabProps('xs');
                    callback.multiloop(client, mainDivCls, Properties, 'xs');
                }      
                });
            }
     },

    "2.Checking The Properties of Switchable Tabs Divison": function (client) {
        tabSwitchCls = pageObj.elements.tabsdivMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabSwitchCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.TabsDivProps('xs');
                    callback.singleElem(client, tabSwitchCls, Properties, 'xs');
                }
            });
        }
    },

    "3.Checking The Properties of Active Tabs": function (client) {
           activeTabCls = pageObj.elements.activeheaderMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', activeTabCls , results => {
                if (results.value.length > 0) {
                    Properties = comp_props.activeTabProps('xs');
                    callback.multiloop(client, activeTabCls , Properties, 'xs');
                }
            });
        }
    },

    "4.Checking The Properties of Inactive Tabs": function (client) {
        inactiveTabCls = pageObj.elements.inactiveHeaderMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {     
            client.elements('css selector', inactiveTabCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.inactiveTabsProps('xs');
                    callback.multiloop(client, inactiveTabCls, Properties, 'xs');
                }
            });
        }
    },
    "5.Checking The Properties of Tabs Content": function (client) {
        tabContentCls = pageObj.elements.tabscontentMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabContentCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.TabsContentProps('xs');
                    callback.singleElem(client, tabContentCls, Properties, 'xs');
                }
            });
        }
    },

    "6.Checking The Properties of Headings in All the Tabs": function (client) {
        headingCls = pageObj.elements.headingalltabsMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', headingCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabHeadingProps('xs');
                    callback.multiloop(client, headingCls, Properties, 'xs');
                }
            });
        }
    },

    "7.Checking The Properties of Richtext Paragraph in All tabs": function (client) {
        richtextParaCls = pageObj.elements.paratextalltabsMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) { 
            client.elements('css selector', richtextParaCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabParaProps('xs');
                    rteCallback.rteElem(client, richtextParaCls, Properties,'p', 'xs');
                }
            });
        }
    },
    "8.Checking The Properties of Seperator": function (client) {
        tabSeperatorCls = pageObj.elements.tabseperatorMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabSeperatorCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabSeperatorProps('xs');
                    callback.singleElem(client, tabSeperatorCls, Properties, 'xs');
                }
            });
        }
    },

    "9.Checking The Properties of Headings in Sub divisions of Tabs": function (client) {
        subDivHeadingCls = pageObj.elements.subdivblocksHeadingMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', subDivHeadingCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabbOneHeadingProps('xs');
                    rteCallback.rteElem(client, subDivHeadingCls, Properties,'p', 'xs');
                }
            });
        }
    },
    "10.Checking The Properties of paragraph in the SubDivisions of Tabs": function (client) {
        subDivParaCls = pageObj.elements.subdivtextMob.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', subDivParaCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.ComParaProps('xs');
                    callback.multiloop(client, subDivParaCls, Properties, 'xs');
                }
            });
        }
    },
    "11.Checking The Focus properties of buttons": function (client) {
        var btnOneCls = pageObj.elements.buttonsMob.selector;
        var btnOneFocusCls = pageObj.elements.buttonsMobFocus.selector;
        globalProps(client);
        client.click('#tabHeader_3');
           client.moveToElement(btnOneCls,10,10);
           client.mouseButtonDown(btnOneCls);   
           client.pause(3000);                          
           client.elements('css selector', btnOneFocusCls, results => {
                     if (results.value.length > 0) {
                           pro = comp_props.buttonClickFocusProps('xs');
                           callback.singleElem(client, btnOneFocusCls, pro, 'xs');
                               }
                        });
                         client.pause(3000);                        
                    },
   function(client){
        globalProps(client)
            },
             "12.Checking The Hover properties of buttons": function (client) {
        var btnOneCls = pageObj.elements.buttonsMob.selector;
        var btnOneHoverCls = pageObj.elements.buttonsMobHover.selector;
            globalProps(client);
        client.click('#tabHeader_3');
        client.pause(2000);
     if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
        client.elements('css selector', btnOneCls, results => {
            if (results.value.length > 0)
             {
                props = comp_props.buttonHoverProps('xs');
                 client.moveToElement(btnOneCls,10,10);
                 client.pause(3000);
                 callback.singleElem(client,btnOneHoverCls, props, 'xs');
                }
               
            });
                client.pause(3000);
            }
           
    },
     //Closing the browser
     'Closing Browser': function(client){
        client.pause(1000);
        client.end();
      }


};
