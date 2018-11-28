var comp_props,pageObj,callback,size,rteCallback,
    pageurl = require('../../pageurls.js');

function globalProps(client){
    pageObj = client.page.tabitem_selectors(),
	callback = client.page.common(),
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	size = client.globals.size.widths;
	callback.getBrand(client);
	comp_props = require('./tabitem_props.js')(client);	
}
module.exports = {
    '@tags': ['desktop','tabitem-desktop','tabitem'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_BUS_TABITEM_DESKTOP);
        //console.log("--For Desktop--" + pageurl.RBS_BUS_TABITEM_DESKTOP);
    },
    "1.Checking The Properties of InnerShelf": function (client) {
        innerShelfCls = pageObj.elements.innershelf.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', innerShelfCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.innerShelfProps('lg');
                    callback.multiloop(client, innerShelfCls, Properties, 'lg');
                }
            });
        }
    },
    "2.Checking The Properties of One Whole division": function (client) {
        oneWholedivCls = pageObj.elements.onewhole.selector;
            //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', oneWholedivCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.oneWholeDivProps('lg');
                    callback.multiloop(client, oneWholedivCls, Properties, 'lg');
                }
            });
        }
    },
    "3.Checking The Properties of Service Tab": function (client) {
        servicetabCls = pageObj.elements.servicestabwrapper.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', servicetabCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.serviceTabProps('lg');
                    callback.multiloop(client, servicetabCls, Properties, 'lg');
                }
            });
        }
    },

    "4.Checking The Properties of Main Tab Div": function (client) {
        singleTabCls = pageObj.elements.tabs.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', singleTabCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.TabsDivProps('lg');
                    callback.singleElem(client, singleTabCls, Properties, 'lg');
                }
            });
        }
    }, 
    "5.Checking The Properties of Switchable Tabs": function (client) {
        tabContentCls = pageObj.elements.tabscontent.selector;
            //globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabContentCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.TabsContentProps('lg');
                    callback.multiloop(client, tabContentCls, Properties, 'lg');
                }
            });
        }
    },
    "6.Checking The Properties of Inactive Tabs": function (client) {
        inactiveTabsCls = pageObj.elements.inactivetabs.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', inactiveTabsCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.inactiveTabsProps('lg');
                    callback.multiloop(client, inactiveTabsCls, Properties, 'lg');
                }
            });
        }
    },

    "7.Checking The Properties of Active Tabs": function (client) {
        activeTabCls = pageObj.elements.Activetab.selector;
          //  globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', activeTabCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.activeTabProps('lg');
                    callback.multiloop(client, activeTabCls, Properties, 'lg');
                }
            });
        }
    },   
    "8.Checking The Properties of Heading in All Tabs": function (client) { //you check the main heading of each tab here
        tabHeadingCls = pageObj.elements.heading.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabHeadingCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabHeadingProps('lg');
                    callback.multiloop(client, tabHeadingCls, Properties, 'lg');
                }
            });
        }
    },
    "9.Checking The RichText Properties of Paragraph": function (client) {
        paraTextCls = pageObj.elements.richtext.selector;
          //  globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', paraTextCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabParaProps('lg');
                   // callback.multiloop(client, paraTextCls, Properties, 'lg');
                   rteCallback.rteElem(client, paraTextCls, Properties,'p', 'lg');
                }
            });
        }
    },

    "10.Checking The Properties of Tab Seperator": function (client) {
        tabSepCls = pageObj.elements.tabseperator.selector;
          //  globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabSepCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabSeperatorProps('lg');
                    callback.multiloop(client, tabSepCls, Properties, 'lg');
                }
            });
        }
    },

    "11.Checking The Properties of left division in tab one": function (client) {
        leftTabCls = pageObj.elements.Quickcompareleftdiv.selector;
         //   globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', leftTabCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.compareLeftProps('lg');
                    callback.multiloop(client, leftTabCls, Properties, 'lg');
                }
            });
        }
    },

    "12.Checking The Properties of right Division in tab one": function (client) {
        tabTwoCtaCls = pageObj.elements.blockoneCta.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabTwoCtaCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.whyChooseParaCtaProps('lg');
                    callback.multiloop(client, tabTwoCtaCls, Properties, 'lg');
                }
            });
        }
    },
    "13.Checking The Heading Properties of SubDivsions in tab one": function (client) {
        tabHeadingCls = pageObj.elements.tabonedivheadingrte.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabHeadingCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabbOneHeadingProps('lg'); //this heading has fs 18
                    rteCallback.rteElem(client, tabHeadingCls, Properties,'strong span', 'lg');     
                }
            });
        }
    },
    "14.Checking The Heading Properties of SubDivisions in tab two and three": function (client) {
        taballHeadingCls = pageObj.elements.tabdivheadingrte.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', taballHeadingCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.tabAllHeadingProps('lg'); //this heading has fs 16
                    rteCallback.rteElem(client, taballHeadingCls, Properties,'span strong span', 'lg');      
                }
            });
        }
    }, 
    "15.Checking The Properties of Sub Divisions in The Tabs": function (client) {
        tabTwoBlocksCls = pageObj.elements.commonblockalltabs.selector;
         //   globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', tabTwoBlocksCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.allTabsComblockProps('lg');
                    callback.multiloop(client, tabTwoBlocksCls, Properties, 'lg');
                }
            });
        }
    },
    "16.Checking The Properties of header common in all three Subtabs": function (client) {
        commonHeaderCls = pageObj.elements.commonheaderTabTwo.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', commonHeaderCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.commonHeadingProps('lg');
                    callback.multiloop(client, commonHeaderCls, Properties, 'lg');
                }
            });
        }
    },

    "17.Checking The Properties of text in the Sub Divisions": function (client) {
        commonParaCls = pageObj.elements.subTabsBlocktext.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', commonParaCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.ComParaProps('lg');
                    callback.multiloop(client, commonParaCls, Properties, 'lg');
                }
            });
        }
    },
    "18.Checking The Properties of Links in Sub Divisions": function (client) {
        commonLinksCls = pageObj.elements.tabthreelinks.selector;
           // globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', commonLinksCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.comLinksProps('lg');
                    callback.multiloop(client, commonLinksCls, Properties, 'lg');
                }
            });
        }
    },
    "19.Checking The Hover properties of buttons in the Component": function (client) {
        var btnOneCls = pageObj.elements.taboneleftbutton.selector;
        var btnOneHoverCls = pageObj.elements.taboneleftbuttonhover.selector;
         //   globalProps(client);
     if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
        callback.openURL(client,PageUrl);
        client.elements('css selector', btnOneCls, results => {
            if (results.value.length > 0)
             {
                props = comp_props.buttonHoverProps('lg');
                 client.moveToElement(btnOneCls,10,10);
                 client.pause(3000);
                 callback.multiloop(client,btnOneHoverCls, props, 'lg');
                }
               
            });
                client.pause(3000);
            }
           
    },
    "20.Checking The Hover properties of Links in the tabs": function (client) {
        var btnOneCls = pageObj.elements.tabtwolinkone.selector;
        var btnOneHoverCls = pageObj.elements.tabtwolinkonehover.selector;
        var tabtwoclick = pageObj.elements.tabtwodesktop.selector;
          //  globalProps(client);
     if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.click(tabtwoclick);
        client.elements('css selector', btnOneCls, results => {
            if (results.value.length > 0)
             {
                props = comp_props.linkHoverProps('lg');
                 client.moveToElement(btnOneCls,10,10);
                 client.pause(3000);
                 callback.multiloop(client,btnOneHoverCls, props, 'lg');
                }
          
            });
            }   
    },
             /*

             function(client){
                 globalProps(client)
                 client.click('.overlay-content a');
             },
             //Checking functionality in a Static Way
             "21.Checking The functionality of the page": function (client) {
                innerShelfCls = pageObj.elements.innershelf.selector;
                  //  globalProps(client);
                if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                    callback.openURL(client,PageUrl);
                    client.expect.element('.text-image-heading p').text.to.contain('Want to pay less each month?');
                    client.click('#tabHeader_2');
                    client.pause(2000);
                    client.expect.element('.fs-16 strong  span').text.to.contain('Free legal and valuation fees');
                    client.click('#tabHeader_3');
                    client.pause(2000);
                    client.expect.element('.tab-heading-wrapper.tab-active-header h2').text.to.contain('How to Apply');              
                }
            },
            

           "21.Checking The functionality of the page in Dynamic Way": function (client) {
            var i=1;
            btnOneFocusCls = pageObj.elements.functabs.selector;
              //  globalProps(client);
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                callback.openURL(client,PageUrl);
                client.elements('css selector', btnOneFocusCls, results => {
                  if (results.value.length > 0) {
                    results.value.forEach(element => {
                     client.elementIdClick(element.ELEMENT);
                     client.pause(2000);
                     client.assert.cssProperty("#tabpage_"+(i),"display","block");
                        for(var j = 1; j<results.value.length; j++){
                          if(j!==i){
                                    client.assert.cssProperty("#tabpage_"+(j),"display","none");
                                    }
                                }
                                i+=1;
                            });
                           }
                        });
                
                   }
               },  
               */
              
              "21.Checking The functionality of the page": function (client) {
                var i=1, b=1 ,c=1;
                btnOneFocusCls1 = pageObj.elements.functabs1.selector;
                btnOneFocusCls2 = pageObj.elements.functabs2.selector;
                btnOneFocusCls3 = pageObj.elements.functabs3.selector; 
                btnOneFocusCls4 = pageObj.elements.parentfunc.selector; 
            
                  //  globalProps(client);
                if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                    callback.openURL(client,PageUrl);
        
        
                    client.elements('css selector', btnOneFocusCls4, results => {
                        if (results.value.length == 3) {
        
        
                    client.elements('css selector', btnOneFocusCls1, results => {
                      if (results.value.length > 0) {
                        results.value.forEach(element => {
                         client.elementIdClick(element.ELEMENT);
                         client.pause(2000);
                         client.assert.cssProperty("#tabpage_"+(i),"display","block");
                            for(var j = 1; j<results.value.length; j++){
                              if(j!==i){
                                        client.assert.cssProperty("#tabpage_"+(j),"display","none");
                                        }
                                    }
                                    i+=1;
                                });
                               }
                            });
                        client.elements('css selector', btnOneFocusCls2, results => {
                             if (results.value.length > 0) {
                                results.value.forEach(element => {
                                client.elementIdClick(element.ELEMENT);
                                client.pause(2000);
                                client.assert.cssProperty(".canvas-shelf:nth-of-type(2) #tabscontent #tabpage_"+(b),"display","block");
                                 for(var j = 1; j<results.value.length; j++){
                                   if(j!==b){
                                          client.assert.cssProperty(".canvas-shelf:nth-of-type(2) #tabscontent #tabpage_"+(j),"display","none");
                                          }
                                       }
                                      b+=1;
                                  });
                                 }
                             });
                        client.elements('css selector', btnOneFocusCls3, results => {
                             if (results.value.length > 0) {
                             results.value.forEach(element => {
                             client.elementIdClick(element.ELEMENT);
                             client.pause(2000);
                             client.assert.cssProperty(".canvas-shelf:nth-of-type(3) #tabscontent #tabpage_"+(c),"display","block");
                             for(var j = 1; j<results.value.length; j++){
                                if(j!==c){
                                 client.assert.cssProperty(".canvas-shelf:nth-of-type(3) #tabscontent #tabpage_"+(j),"display","none");
                                         }
                                     }
                                     c+=1;
                                });
                            }
                         });
        
                        }
                    });       
                    client.elements('css selector', btnOneFocusCls4, results => {
                        if (results.value.length == 1) {
                    client.elements('css selector', btnOneFocusCls1, results => {
                      if (results.value.length > 0) {
                        results.value.forEach(element => {
                         client.elementIdClick(element.ELEMENT);
                         client.pause(2000);
                         client.assert.cssProperty("#tabpage_"+(i),"display","block");
                            for(var j = 1; j<results.value.length; j++){
                              if(j!==i){
                                        client.assert.cssProperty("#tabpage_"+(j),"display","none");
                                        }
                                    }
                                    i+=1;
                                });
                               }
                            });
                        }
                    });                  
                }
            },          
            "22.Checking The Focus properties of buttons": function (client) {
                var btnOneCls = pageObj.elements.taboneleftbutton.selector;
                var btnOneFocusCls = pageObj.elements.taboneleftbuttonfocus.selector;
               // globalProps(client);
                   client.click('#tabHeader_1');
                   client.moveToElement(btnOneCls,10,10);
                   client.mouseButtonDown(btnOneCls);   
                   client.pause(3000);                          
                   client.elements('css selector', btnOneFocusCls, results => {
                             if (results.value.length > 0) {
                                   pro = comp_props.buttonClickFocusProps('lg');
                                   callback.singleElem(client, btnOneFocusCls, pro, 'lg');
                                       }
                                });
                                 client.pause(3000);                        
                            },
           function(client){
                globalProps(client)
                client.click('.overlay-content a');
                    },

            "23.Checking The Focus properties of buttons in third tab": function (client) {
                var btnOneCls = pageObj.elements.tabthreebuttondesktop.selector;
                var btnOneFocusCls = pageObj.elements.tabthreebuttonfocus.selector;
                var tabthree = pageObj.elements.tabthreedesktop.selector;
                
                  //  globalProps(client);
                        client.click(tabthree);
                        client.moveToElement(btnOneCls,10,10);
                        client.mouseButtonDown(btnOneCls);   
                        client.pause(3000);                 
                        client.moveToElement(btnOneFocusCls,10,10);
                        client.elements('css selector', btnOneFocusCls, results => {
                         if (results.value.length > 0) {
                                pro = comp_props.buttonClickFocusProps('lg');
                                callback.singleElem(client, btnOneFocusCls, pro, 'lg');
                                    }
                                });
                                client.pause(2000);
                            
                               
                             },

    //Closing the browser
    'Ending the Session': function(client){
        client.pause(1000);
        client.end();
      }
                     
                 
    };
        
        
    













