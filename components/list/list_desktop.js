var list_props = require('./list_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,brand,callback,size,rteCallback;

function globalProps(client) {
    pageObj = client.page.list_selectors(),
	callback = client.page.common(),
	rteCallback = client.page.components.rte.rte(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
}

module.exports = {
    '@tags': ['desktop', 'list', 'list-component-desktop'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_LIST_VIEWS);
        console.log("--Desktop--" + pageurl.NW_PER_LIST_VIEWS);
    },


                   

                        /*  LIST COMPONENT VIEW 1 Checks */

    /*"Set class to shelf": function(client) {
         list_Shelf_TB = pageObj.elements.themeBlueShelf.selector,
         //faqShelf = pageObj.elements.faqShelf.selector,
         globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
             client.elements('css selector',list_Shelf_TB,results=>{
                 if(results.value.length>0) { 
                    console.log("Setting theme to White")
                     client.execute("document.getElementsByClassName('theme--blue')[0].setAttribute('class', 'shelf theme--white shelf--first canvas-shelf')")
                     client.pause(5000);
                 }
             });
         }      
     },

      "Check for list componenet shelf Theme White BG color and Padding": function(client) { 
         globalProps(client);
         themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;
          console.log("Theme white Background Check");
         Properties = list_props.themeWhiteShelfProp('lg');  
         callback.singleElem(client,themeWhiteShelf,Properties,'lg');
         
     },  */
    "Check for list componenet shelf BG color and Padding": function (client) {
        list_Shelf_TB = pageObj.elements.themeBlueShelf.selector,
            console.log("Theme blue Background Check")
        globalProps(client);
        callback.scrollToElement(client, list_Shelf_TB);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', list_Shelf_TB, results => {
                if (results.value.length > 0) {
                    //list background color
                    Properties = list_props.themeBlueShelfProp('lg');
                    callback.singleElem(client, list_Shelf_TB, Properties, 'lg');
                }
            });
        }
    },



    "Check for list componenet Inner Shelf Padding": function (client) {
        globalProps(client);
        innerShelfSel = pageObj.elements.Innershelf.selector;
        Properties = list_props.innerShelfProp('lg');
        callback.singleElem(client, innerShelfSel, Properties, 'lg');

    },


    "Check for RICH TEXT Propeties in List component ": function (client) {
        richTextSelector = pageObj.elements.listRichtextComp.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', richTextSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRichtextProp('lg');
                    rteCallback.rteElem(client, richTextSelector, Properties,'h3','lg');
                }
            })
        }
    },


    "Check for Element count Properties in List Component ": function (client) {
        listElemCountSelector = pageObj.elements.listElemCount.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listElemCountSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemCountProp('lg');
                    callback.multiloop(client, listElemCountSelector, Properties, 'lg')
                }
            })
        }
    },


    "Check for Element Title Properties in List Component ": function (client) {
        listElemTitleSelector = pageObj.elements.listElemTitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listElemTitleSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemTitleProp('lg');
                    callback.multiloop(client, listElemTitleSelector, Properties, 'lg')
                }
            })
        }
    },


    "Check for Element Title Desription Properties in List Component ": function (client) {
        listElemDescSelector = pageObj.elements.listElemDesc.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listElemDescSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemTitleDesc('lg');
                    callback.multiloop(client, listElemDescSelector, Properties, 'lg')
                }
            })
        }
    },

    "Check for list Items Background color ": function (client) {
        listItemBGSelector = pageObj.elements.listBGColorElem.selector
        client.elements('css selector', listItemBGSelector, results => {
            console.log(results.value.length)
            for (i = 0; i < results.value.length; i++) {
                listItemBGcolorSelector = pageObj.elements["listBGcolor" + (i + 1)].selector;
                properties = list_props["listBGcolorProp" + (i + 1)]('lg');
                callback.multiloop(client, listItemBGcolorSelector, properties, 'lg')
            }
        })
    },

    "Check for list component Border Radius ": function (client) {
        listBorderRadiusSelector = pageObj.elements.listBorderRadius.selector
        client.elements('css selector', listBorderRadiusSelector, results => {
            if (results.value.length > 0) {
                properties = list_props.listBorderRadiusProp('lg');
                callback.singleElem(client, listBorderRadiusSelector, properties, 'lg')
            }
        })
    },

    "Check for list Anchor elements properties": function (client) {
        listAnchorElemSelector = pageObj.elements.listAnchorElem.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listAnchorElemSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listAnchorElemProp('lg');
                    callback.multiloop(client, listAnchorElemSelector, Properties, 'lg');
                }
            });
        }
    },
    "Check for list Anchor element RightArrow properties": function (client) {
        listAnchorElemSelector = pageObj.elements.listAnchorElem.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listAnchorElemSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listAnchorArrowProp('lg');
                    callback.pseudoSingleElem(client, listAnchorElemSelector, ':after', Properties);
                }
            });
        }
    },




    // Checks for List Component View 2 

    

    "Check for List Component View-2 Height,Width and Margin": function (client) {
        listCompView_2 = pageObj.elements.listComponentView2.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView_2, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView_2_Prop('lg');
                    callback.singleElem(client, listCompView_2, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-2 Retailer Logo Properties ": function (client) {
        listComponentlogoView_2 = pageObj.elements.listComponentlogoView2.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listComponentlogoView_2, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listComponentlogoProp_2('lg');
                    callback.multiloop(client, listComponentlogoView_2, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-2 Description Properties ": function (client) {
        listComponentDescriptionView_2 = pageObj.elements.listComponentDescriptionView2.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listComponentDescriptionView_2, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listComponentDescriptionProp_2('lg');
                    callback.multiloop(client, listComponentDescriptionView_2, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-2 Retail Value Properties ": function (client) {
        listComponentRetailvalView_2 = pageObj.elements.listComponentRetailvalView2.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listComponentRetailvalView_2, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listComponentRetailvalProp_2('lg');
                    callback.multiloop(client, listComponentRetailvalView_2, Properties, 'lg')
                    client.expect.element('.rate-text').to.have.css('background-image').which.contains(brand.props.$listView2RetailImg);
                }
            })
        }
    },

    "Check for List Component View-2 Retail Number Properties ": function (client) {
        listComponentRetailNumView_2 = pageObj.elements.listComponentRetailNumView2.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listComponentRetailNumView_2, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listComponentRetailNumProp_2('lg');
                    callback.multiloop(client, listComponentRetailNumView_2, Properties, 'lg')
                }
            })
        }
    },

    /*  LIST COMPONENT VIEW 3 Checks */

    




    "Check for List Component View-3 Properties": function (client) {
        listCompView_3 = pageObj.elements.listCompView3.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView_3, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView_3_Prop('lg');
                    callback.singleElem(client, listCompView_3, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-3 Retailer Name Properties ": function (client) {
        listRetailerNameSelector = pageObj.elements.listRetailerName.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listRetailerNameSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRetailerNameProp('lg');
                    callback.multiloop(client, listRetailerNameSelector, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-3 Retailer Value Properties ": function (client) {
        listRetailerValueSelector = pageObj.elements.listRetailerValue.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listRetailerValueSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRetailerValueProp('lg');
                    callback.multiloop(client, listRetailerValueSelector, Properties, 'lg')
                    client.expect.element('.retailer-rate-value').to.have.css('background-image').which.contains(brand.props.$listView3RetailImg);
                }
            })
        }
    },

    "Check for List Component View-3 Retailer Logo Properties ": function (client) {
        listRetailerLogoSelector = pageObj.elements.listRetailerLogo.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listRetailerLogoSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRetailerLogoProp('lg');
                    callback.multiloop(client, listRetailerLogoSelector, Properties, 'lg')

                }

            })
        }
    },


    "Check for List Component View-3 Retailer Description Properties ": function (client) {
        listRetailerDescriptionSel = pageObj.elements.listRetailerDescription.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listRetailerDescriptionSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRetailerDescriptionProp('lg');
                    callback.multiloop(client, listRetailerDescriptionSel, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-3 AnchorElement Properties ": function (client) {
        listcompAnchorElementSelct = pageObj.elements.listcompAnchorElement.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listcompAnchorElementSelct, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listcompAnchorElementProp('lg');
                    callback.multiloop(client, listcompAnchorElementSelct, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-3 AnchorElement Rightarrow Properties ": function (client) {
        listcompAnchorElementSelct = pageObj.elements.listcompAnchorElement.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listcompAnchorElementSelct, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listcompAnchorArrow('lg');
                    callback.pseudoSingleElem(client, listcompAnchorElementSelct, ':after', Properties);
                }
            })
        }
    },

    //   Checks for List component View 4 //

    "Check for List Component View-4 UL Properties ": function (client) {
        listCompView4ulSel = pageObj.elements.listCompView4ul.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4ulSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4ulProp('lg');
                    callback.singleElem(client, listCompView4ulSel, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-4 List Items Properties ": function (client) {
        listCompView4liSel = pageObj.elements.listCompView4li.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4liSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4liProp('lg');
                    callback.singleElem(client, listCompView4liSel, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-4 Cashback Rate Image Properties ": function (client) {
        listCompView4WrapperCashbackRateSel = pageObj.elements.listCompView4WrapperCashbackRate.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4WrapperCashbackRateSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4WrapperCashbackRateProp('lg');
                    callback.multiloop(client, listCompView4WrapperCashbackRateSel, Properties, 'lg')
                    client.expect.element('.cashback-rate').to.have.css('background-image').which.contains(brand.props.$listView3RetailImg);
                }
            })
        }
    },

    "Check for List Component View-4  Cashback Rate Number Properties ": function (client) {
        listCompView4WrapperCashbackRateNumSel = pageObj.elements.listCompView4WrapperCashbackRateNum.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4WrapperCashbackRateNumSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4WrapperCashbackRateNumProp('lg');
                    callback.multiloop(client, listCompView4WrapperCashbackRateNumSel, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-4 Retailer logo Properties ": function (client) {
        listCompView4WrapperRetailerSel = pageObj.elements.listCompView4WrapperRetailerlogo.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4WrapperRetailerSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4WrapperRetailerlogoProp('lg');
                    callback.multiloop(client, listCompView4WrapperRetailerSel, Properties, 'lg')
                }
            })
        }
    },


    "Check for List Component View-4 Anchor Properties ": function (client) {
        listCompView4WrapperAnchorSel = pageObj.elements.listCompView4WrapperAnchor.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompView4WrapperAnchorSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompView4WrapperAnchorProp('lg');
                    callback.multiloop(client, listCompView4WrapperAnchorSel, Properties, 'lg')
                }
            })
        }
    },

    "Check for List Component View-4 Anchor Arrow Properties ": function (client) {
        listCompAnchorArrowSel = pageObj.elements.listCompView4WrapperAnchor.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', listCompAnchorArrowSel, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listCompAnchorArrowProp('lg');
                    callback.pseudoSingleElem(client, listCompAnchorArrowSel, ':after', Properties);
                }
            })
        }
    },






    'Ending the session': function (client) {
        client.pause(1000);
        client.end();
    }
};



