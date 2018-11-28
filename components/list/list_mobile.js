var list_props = require('./list_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,brand,callback,size,rteCallback;

function globalProps(client) {
    pageObj = client.page.list_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
}

module.exports = {
    '@tags': ['mobile', 'list', 'list-component-mobile'],
    "Opening the Mobile URL": function (client) {
        globalProps(client);
        client.maximizeWindow();

        callback.openURL(client,pageurl.NW_PER_LIST_VIEWS_MOB);
        console.log("--Mobile--" + pageurl.NNW_PER_LIST_VIEWS_MOB);

    },

    "Resize The Window": function (client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(500);
        client.refresh();
        client.pause(500)
        
    },


                        

   /* "Set class to shelf": function (client) {
        list_Shelf_TB = pageObj.elements.themeBlueShelfMobile.selector,
            //faqShelf = pageObj.elements.faqShelf.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', list_Shelf_TB, results => {
                if (results.value.length > 0) {
                    console.log("Setting theme to White")
                    client.execute("document.getElementsByClassName('theme--blue')[0].setAttribute('class', 'shelf theme--white canvas-shelf')")
                    client.pause(5000);

                }
            });
        }
    },

    "Check for list componenet shelf BG color and Padding": function (client) {
        globalProps(client);
        themeWhiteShelf = pageObj.elements.themeWhiteShelfMobile.selector;
        console.log("Theme white Background Check");
        Properties = list_props.themeWhiteShelfProp('xs');
        callback.singleElem(client, themeWhiteShelf, Properties, 'xs');

    },*/
    "Check for list componenet shelf BG color and Padding": function (client) {
        list_Shelf_M_TB = pageObj.elements.themeBlueShelfMobile.selector,
            globalProps(client);
            callback.scrollToElement(client, list_Shelf_M_TB);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', list_Shelf_M_TB, results => {
                if (results.value.length > 0) {
                    //list background color
                    Properties = list_props.listShelfProp('xs');
                    callback.singleElem(client, list_Shelf_M_TB, Properties, 'xs');

                }
            });
        }
    },
      

    "Check for list componenet Inner Shelf Padding": function (client) {
        globalProps(client);
        innerShelfSel = pageObj.elements.Innershelf.selector;
        Properties = list_props.innerShelfProp('xs');
        callback.singleElem(client, innerShelfSel, Properties, 'xs');

    },

  

    "Check for RICH TEXT Propeties in List component ": function (client) {
        richTextSelector = pageObj.elements.listRichtextComp.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', richTextSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listRichtextProp('xs');
                    callback.singleElem(client, richTextSelector, Properties, 'xs')
                }

            })

        }

    },


    "Check for Element count Properties in List Component ": function (client) {
        listElemCountSelector = pageObj.elements.listElemCount.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', listElemCountSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemCountProp('xs');
                    callback.multiloop(client, listElemCountSelector, Properties, 'xs')
                }
            })
        }
    },


    "Check for Element Title Properties in List Component ": function (client) {
        listElemTitleSelector = pageObj.elements.listElemTitle.selector,
            globalProps(client);
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', listElemTitleSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemTitleProp('xs');
                    callback.multiloop(client, listElemTitleSelector, Properties, 'xs')
                }
            })
        }
    },


    "Check for Element Title Desription Properties in List Component ": function (client) {
        listElemDescSelector = pageObj.elements.listElemDesc.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', listElemDescSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listElemTitleDesc('xs');
                    callback.multiloop(client, listElemDescSelector, Properties, 'xs')
                }

            })
        }
    },

    "Check for list Items Background color ": function (client) {
          listItemBGSelector = pageObj.elements.listBGColorElem.selector
            client.elements('css selector', listItemBGSelector, results => {
            console.log(results.value.length)
            for (i = 1; i <= results.value.length; i++) {
                listItemBGcolorSelector = pageObj.elements["listBGcolor" + (i)].selector;
                properties = list_props["listBGcolorProp" + (i)]('xs');
                callback.multiloop(client, listItemBGcolorSelector, properties, 'xs')
            }
        })
    },

    "Check for list component Border Radius ": function (client) {
        listBorderRadiusSelector = pageObj.elements.listBorderRadius.selector
        client.elements('css selector', listBorderRadiusSelector, results => {
            if (results.value.length > 0) {
                properties = list_props.listBorderRadiusProp('xs');
                callback.singleElem(client, listBorderRadiusSelector, properties, 'xs')
            }
        })
    },

    "Check for list Anchor elements properties": function (client) {
        listAnchorElemSelector = pageObj.elements.listAnchorElem.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', listAnchorElemSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listAnchorElemProp('xs');
                    callback.multiloop(client, listAnchorElemSelector, Properties, 'xs');
                }
            });
        }
    },
    "Check for list Anchor element RightArrow properties": function (client) {
        listAnchorElemSelector = pageObj.elements.listAnchorElem.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            client.elements('css selector', listAnchorElemSelector, results => {
                if (results.value.length > 0) {
                    Properties = list_props.listAnchorArrowProp('xs');
                    callback.pseudoSingleElem(client, listAnchorElemSelector, ':after', Properties);
                }
            });
        }
    },





                   

  "Check for List Component View-2 Properties ": function (client) {
    listCompView_2 = pageObj.elements.listComponentView2.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listCompView_2, results => {
            if (results.value.length > 0) {
                Properties = list_props.listCompView_2_Prop('xs');
                callback.singleElem(client, listCompView_2, Properties, 'xs')
            }
        })
    }
},

"Check for List Component View-2 RetailerLogo Properties ": function (client) {
    listComponentlogoView_2 = pageObj.elements.listComponentlogoView2.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listComponentlogoView_2, results => {
            if (results.value.length > 0) {
                Properties = list_props.listComponentlogoProp_2('xs');
                callback.multiloop(client, listComponentlogoView_2, Properties, 'xs')
            }
        })
    }
},


"Check for List Component View-2 listComponentDescriptionView2 Properties ": function (client) {
    listComponentDescriptionView_2 = pageObj.elements.listComponentDescriptionView2.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listComponentDescriptionView_2, results => {
            if (results.value.length > 0) {
                Properties = list_props.listComponentDescriptionProp_2('xs');
                callback.multiloop(client, listComponentDescriptionView_2, Properties, 'xs')
            }
        })
    }
},

"Check for List Component View-2 listComponentRetailvalView2 Properties ": function (client) {
    listComponentRetailvalView_2 = pageObj.elements.listComponentRetailvalView2.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listComponentRetailvalView_2, results => {
            if (results.value.length > 0) {
                Properties = list_props.listComponentRetailvalProp_2('xs');
                callback.multiloop(client, listComponentRetailvalView_2, Properties, 'xs')
                client.expect.element('.rate-text').to.have.css('background-image').which.contains(brand.props.$listView2RetailImgMob);
            }
        })
    }
},

"Check for List Component View-2 listComponentRetailNumView2 Properties ": function (client) {
    listComponentRetailNumView_2 = pageObj.elements.listComponentRetailNumView2.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listComponentRetailNumView_2, results => {
            if (results.value.length > 0) {
                Properties = list_props.listComponentRetailNumProp_2('xs');
                callback.multiloop(client, listComponentRetailNumView_2, Properties, 'xs')
            }
        })
    }
},
                  /*  LIST COMPONENT VIEW 3 MOBILE Checks */

              



"Check for List Component View-3 Properties ": function (client) {
    listCompView_3= pageObj.elements.listCompView3.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listCompView_3, results => {
            if (results.value.length > 0) {
                Properties = list_props.listCompView_3_Prop('xs');
                callback.singleElem(client, listCompView_3, Properties, 'xs')
            }
        })
    }
},


"Check for List Component View-3 listRetailerName Properties ": function (client) {
    listRetailerNameSelector = pageObj.elements.listRetailerName.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listRetailerNameSelector, results => {
            if (results.value.length > 0) {
                Properties = list_props.listRetailerNameProp('xs');
                callback.multiloop(client, listRetailerNameSelector, Properties, 'xs')
            }
        })
    }
},

"Check for List Component View-3 RetailerValue Properties ": function (client) {
    listRetailerValueSelector = pageObj.elements.listRetailerValue.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listRetailerValueSelector, results => {
            if (results.value.length > 0) {
                Properties = list_props.listRetailerValueProp('xs');
                callback.multiloop(client, listRetailerValueSelector, Properties, 'xs')
                client.expect.element('.retailer-rate-value').to.have.css('background-image').which.contains(brand.props.$listView3RetailImg);
            }
        })
    }
},

"Check for List Component View-3 RetailerLogo Properties ": function (client) {
    listRetailerLogoSelector = pageObj.elements.listRetailerLogo.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listRetailerLogoSelector, results => {
            if (results.value.length > 0) {
                Properties = list_props.listRetailerLogoProp('xs');
                callback.multiloop(client, listRetailerLogoSelector, Properties, 'xs')
        
            }
        
        })
    }
},


"Check for List Component View-3 RetailerDescription Properties ": function (client) {
    listRetailerDescriptionSel = pageObj.elements.listRetailerDescription.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listRetailerDescriptionSel, results => {
            if (results.value.length > 0) {
                Properties = list_props.listRetailerDescriptionProp('xs');
                callback.multiloop(client, listRetailerDescriptionSel, Properties, 'xs')
            }
        })
    }
},


"Check for List Component View-3 listcompAnchorElement Properties ": function (client) {
    listcompAnchorElementSelct = pageObj.elements.listcompAnchorElement.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listcompAnchorElementSelct, results => {
            if (results.value.length > 0) {
                Properties = list_props.listcompAnchorElementProp('xs');
                callback.multiloop(client, listcompAnchorElementSelct, Properties, 'xs')
            }
        })
    }
},

"Check for List Component View-3 compAnchorElement Rightarrow Properties ": function (client) {
    listcompAnchorElementSelct = pageObj.elements.listcompAnchorElement.selector,
        globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector', listcompAnchorElementSelct, results => {
            if (results.value.length > 0) {
                Properties = list_props.listcompAnchorArrow('xs');
                callback.pseudoSingleElem(client, listcompAnchorElementSelct, ':after', Properties);
            }
        })
    }
},

                        //   Checks for List component View 4 //

"Check for List Component View-4 UL Properties ": function (client) {
listCompView4ulSel = pageObj.elements.listCompView4ul.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4ulSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4ulProp('xs');
            callback.singleElem(client, listCompView4ulSel, Properties, 'xs')
        }
    })
}
},

"Check for List Component View-4 ListItems Properties ": function (client) {
listCompView4liSel = pageObj.elements.listCompView4li.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4liSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4liProp('xs');
            callback.singleElem(client, listCompView4liSel, Properties, 'xs')
        }
    })
}
},


"Check for List Component View-4 Cashback Rate Image Properties ": function (client) {
listCompView4WrapperCashbackRateSel = pageObj.elements.listCompView4WrapperCashbackRate.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4WrapperCashbackRateSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4WrapperCashbackRateProp('xs');
            callback.multiloop(client, listCompView4WrapperCashbackRateSel, Properties, 'xs')
            client.expect.element('.cashback-rate').to.have.css('background-image').which.contains(brand.props.$listView3RetailImg);
        }
    })
}
},

"Check for List Component View-4 Cashback Rate Value Properties ": function (client) {
listCompView4WrapperCashbackRateNumSel = pageObj.elements.listCompView4WrapperCashbackRateNum.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4WrapperCashbackRateNumSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4WrapperCashbackRateNumProp('xs');
            callback.multiloop(client, listCompView4WrapperCashbackRateNumSel, Properties, 'xs')
        }
    })
}
},


"Check for List Component View-4 Retailer logo Properties ": function (client) {
listCompView4WrapperRetailerSel = pageObj.elements.listCompView4WrapperRetailerlogo.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4WrapperRetailerSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4WrapperRetailerlogoProp('xs');
            callback.multiloop(client, listCompView4WrapperRetailerSel, Properties, 'xs')
        }
    })
}
},


"Check for List Component View-4 Anchor Properties ": function (client) {
listCompView4WrapperAnchorSel = pageObj.elements.listCompView4WrapperAnchor.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompView4WrapperAnchorSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompView4WrapperAnchorProp('xs');
            callback.multiloop(client, listCompView4WrapperAnchorSel, Properties, 'xs')
        }
    })
}
},

"Check for List Component View-4 Anchor Arrow Properties ": function (client) {
listCompAnchorArrowSel = pageObj.elements.listCompView4WrapperAnchor.selector,
    globalProps(client);
if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', listCompAnchorArrowSel, results => {
        if (results.value.length > 0) {
            Properties = list_props.listCompAnchorArrowProp('xs');
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





