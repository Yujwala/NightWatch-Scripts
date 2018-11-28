var pageurl = require('../../pageurls.js'),
    pageObj,hero_shelf_props,callback,size;

function globalProps(client) {
    pageObj = client.page.hero_shelf_selectors(),
        callback = client.page.common(),
        rteCallback = client.page.components.rte.rte(),
        size = client.globals.size.widths;
        callback.getBrand(client);
        hero_shelf_props = require('./hero_shelf_props.js')(client);
}

module.exports = {
    '@tags': ['desktop', 'hero-shelf', 'hero-shelf-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        CurrentURL = pageurl.NW_PER_HERO_SHELF1
        callback.openURL(client,CurrentURL);
        client.pause(3000);
    },

    //*********************** **************************************/
    //    NW_PER_HERO_SHELF1 and NW_PER_HERO_SHELF5  HERO SHELF    //
    //*********************************************************** */


    "1 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 section properties": function(client) {
        HeroShelf = pageObj.elements.HeroShelf.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.HeroShelf('lg')
                        callback.singleElem(client, HeroShelf, properties, 'lg')
                    }
                }
            })
        }
    },

    "2 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 Innershelf properties": function(client) {
        InnerShelf = pageObj.elements.InnerShelf.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', InnerShelf, results => {
                if (results.value.length > 0) {
                  if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.InnerShelf('lg');
                        callback.singleElem(client, InnerShelf, properties, 'lg');
                        client.expect.element('.shelf--hero .image').to.have.attribute('src')
                        //client.expect.element('.shelf--hero__mask2 img').to.have.attribute('src')
                    }
                }
            })
        }
    },

    "3 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 Header properties": function(client) {
        shelfHeader = pageObj.elements.shelfHeader.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', shelfHeader, results => {
                if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.shelfHeader('lg');
                        callback.singleElem(client, shelfHeader, properties, 'lg');

                    }
                }
            })
        }
    },


    "4 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 SignPost properties": function(client) {
        signPost = pageObj.elements.signPost.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', signPost, results => {
                if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.signPost('lg');
                        callback.singleElem(client, signPost, properties, 'lg');
                    }
                }
            })
        }

    },


    "5 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 button properties": function(client) {
        ButtonCTA = pageObj.elements.ButtonCTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', ButtonCTA, results => {
                if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.ButtonCTA('lg')
                        callback.singleElem(client, ButtonCTA, properties, 'lg')
                        client.verify.attributeContains(ButtonCTA, 'href', '/');
                    }
                }

            }
            )
        }
    },

    "6 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 links properties": function(client) {
        linkCTA = pageObj.elements.linkCTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', linkCTA, results => {
              if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.linkCTA('lg');
                        callback.multiloop(client, linkCTA, properties, 'lg');
                        client.verify.attributeContains(linkCTA, 'href', '/');
                    }
                }
            })
        }
    },

    "7 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 footer properties": function(client) {
        footlineText = pageObj.elements.footlineText.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', footlineText, results => {
                if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.footlineText('lg');
                        rteCallback.rteElem(client, footlineText, properties, 'p', 'lg');
                    }
                }
            })
        }
    },


    "8 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 ListItems  properties": function(client) {
        shelfListItems = pageObj.elements.shelfListItems.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', shelfListItems, results => {
                if (results.value.length > 0) {
                   if (CurrentURL == pageurl.NW_PER_HERO_SHELF1 || CurrentURL == pageurl.NW_PER_HERO_SHELF5) {
                        properties = hero_shelf_props.shelfListItems('lg');
                        callback.singleElem(client, shelfListItems, properties, 'lg');
                        client.verify.attributeContains('.breadcrumb ul li a', 'href', '/');
                    }
                }
            })
        }
    },



    //*********************** **************************************/
    //              NW_PER_HERO_SHELF12   Homelog Template   //
    //*********************************************************** */

    "9 Check for nw_per_hero_shelf12  Section properties": function(client) {

        HeroShelf12 = pageObj.elements.HeroShelf12.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12('lg')
                        callback.singleElem(client, HeroShelf12, properties, 'lg')
                    }
                }

            })
        }
    },

    "10 Check for  nw_per_hero_shelf12 Title  properties": function(client) {
        HeroShelf12HeaderTilte = pageObj.elements.HeroShelf12HeaderTilte.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12HeaderTilte, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12HeaderTilte('lg');
                        callback.singleElem(client, HeroShelf12HeaderTilte, properties, 'lg');
                    }
                }
            })
        }
    },

    "11 Check fornw_per_hero_shelf12 Log Message properties": function(client) {
        HeroShelf12Logmessage = pageObj.elements.HeroShelf12Logmessage.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12Logmessage, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12Logmessage('lg');
                        callback.singleElem(client, HeroShelf12Logmessage, properties, 'lg');
                    }
                }
            })
        }
    },

    "12 Check for nw_per_hero_shelf12  Whitebox   properties": function(client) {
        HeroShelf12WhiteBox = pageObj.elements.HeroShelf12WhiteBox.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12WhiteBox, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12WhiteBox('lg');
                        callback.singleElem(client, HeroShelf12WhiteBox, properties, 'lg');
                    }
                }
            })
        }
    },

    "13 Check for nw_per_hero_shelf12  Whitebox Title  properties": function(client) {
        HeroShelf12WhiteBoxTitle = pageObj.elements.HeroShelf12WhiteBoxTitle.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12WhiteBoxTitle, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12WhiteBoxTitle('lg');
                        callback.singleElem(client, HeroShelf12WhiteBoxTitle, properties, 'lg');
                    }
                }
            })
        }
    },

    "14 Check for nw_per_hero_shelf12 Whitebox Content properties": function(client) {
        HeroShelf12WhiteBoxContent = pageObj.elements.HeroShelf12WhiteBoxContent.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12WhiteBoxContent, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12WhiteBoxContent('lg');
                        callback.singleElem(client, HeroShelf12WhiteBoxContent, properties, 'lg');
                    }
                }
            })
        }
    },

    "15 Check for nw_per_hero_shelf12 button  properties": function(client) {
        HeroShelf12CTA = pageObj.elements.HeroShelf12CTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf12CTA, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF12) {
                        properties = hero_shelf_props.HeroShelf12CTA('lg');
                        callback.singleElem(client, HeroShelf12CTA, properties, 'lg');
                        client.verify.attributeContains(HeroShelf12CTA, 'href', '/');
                    }
                }
            })
        }
    },



    //*********************** *************************************************/
    //              NW_PER_HERO_SHELF8 and NW_PER_HERO_SHELF9 (SHELF MASK)     //
    //************************************************************************/

    "16 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9  Section properties": function(client) {
        HeroShelf8 = pageObj.elements.HeroShelf8.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8('lg')
                        callback.singleElem(client, HeroShelf8, properties, 'lg')
                    }
                }
            })
        }
    },

    "17 Check for  nw_per_hero_shelf8 and nw_per_hero_shelf9 Text properties": function(client) {
        HeroShelf8Text = pageObj.elements.HeroShelf8Text.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8Text, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8Text('lg')
                        //callback.singleElem(client, HeroShelf8Text , properties, 'lg')
                        rteCallback.rteElem(client, HeroShelf8Text, properties, 'p', 'lg');
                    }
                }
            })
        }
    },

    "18 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9  Header properties": function(client) {
        HeroShelf8Header = pageObj.elements.HeroShelf8Header.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8Header, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8Header('lg');
                        callback.singleElem(client, HeroShelf8Header, properties, 'lg');

                    }
                }
            })
        }
    },


    "19 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 SignPost properties": function(client) {
        HeroShelf8Signpost = pageObj.elements.HeroShelf8Signpost.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8Signpost, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8Signpost('lg');
                        callback.singleElem(client, HeroShelf8Signpost, properties, 'lg');
                    }
                }
            })
        }

    },


    "20 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 Button properties": function(client) {
        HeroShelf8Button = pageObj.elements.HeroShelf8Button.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8Button, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8Button('lg')
                        callback.singleElem(client, HeroShelf8Button, properties, 'lg')
                        client.verify.attributeContains(HeroShelf8Button, 'href', '/');
                    }
                }

            }
            )
        }
    },

    "21 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 Link properties": function(client) {
        HeroShelfLink = pageObj.elements.HeroShelfLink.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelfLink, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelfLink('lg');
                        callback.multiloop(client, HeroShelfLink, properties, 'lg');
                        client.verify.attributeContains(HeroShelfLink, 'href', '/');
                    }
                }
            })
        }
    },

    "22 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 footer properties": function(client) {
        HeroShelf8FooterText = pageObj.elements.HeroShelf8FooterText.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HeroShelf8FooterText, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF8 || CurrentURL == pageurl.NW_PER_HERO_SHELF9) {
                        properties = hero_shelf_props.HeroShelf8FooterText('lg');
                        rteCallback.rteElem(client, HeroShelf8FooterText, properties, 'p', 'lg');
                    }
                }
            })
        }
    },

    //*********************** *************************************************/
    //              NW_PER_HERO_SHELF3  REBRAND HERO SHELF    //
    //************************************************************************/

    "23 Check for nw_per_hero_shelf3 Section properties": function(client) {
        RebrandHS = pageObj.elements.RebrandHS.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHS('lg')
                        callback.singleElem(client, RebrandHS, properties, 'lg')
                    }
                }
            })
        }
    },

    "24 Check for  nw_per_hero_shelf3 InnerShelf properties": function(client) {
        RebrandInnerShelf = pageObj.elements.RebrandInnerShelf.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandInnerShelf, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandInnerShelf('lg');
                        callback.singleElem(client, RebrandInnerShelf, properties, 'lg');
                        client.expect.element('.nw_rebrand_hero_shelf .hero_shelf_inner .image').to.have.attribute('src')
                    }
                }
            })
        }
    },

    "25 Check for nw_per_hero_shelf3 Title properties": function(client) {
        RebrandHSTitle = pageObj.elements.RebrandHSTitle.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHSTitle, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHSTitle('lg');
                        callback.singleElem(client, RebrandHSTitle, properties, 'lg');

                    }
                }
            })
        }
    },

    "26 Check for nw_per_hero_shelf3 Content properties": function(client) {
        RebrandHSContent = pageObj.elements.RebrandHSContent.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHSContent, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHSContent('lg');
                        callback.singleElem(client, RebrandHSContent, properties, 'lg');
                    }
                }
            })
        }
    },

    "27 Check for nw_per_hero_shelf3 button properties": function(client) {
        RebrandHSButton = pageObj.elements.RebrandHSButton.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHSButton, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHSButton('lg')
                        callback.singleElem(client, RebrandHSButton, properties, 'lg')
                        client.verify.attributeContains(RebrandHSButton, 'href', '/');
                    }
                }

            }
            )
        }
    },

    "28 Check for nw_per_hero_shelf3 link  properties": function(client) {
        RebrandHSlink = pageObj.elements.RebrandHSlink.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHSlink, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHSlink('lg');
                        callback.multiloop(client, RebrandHSlink, properties, 'lg');
                        client.verify.attributeContains(RebrandHSlink, 'href', '/');
                    }
                }
            })
        }
    },

    "29 Check for nw_per_hero_shelf3 legalcopy properties": function(client) {
        RebrandHSLegalcopy = pageObj.elements.RebrandHSLegalcopy.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHSLegalcopy, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF3) {
                        properties = hero_shelf_props.RebrandHSLegalcopy('lg');
                        rteCallback.rteElem(client, RebrandHSLegalcopy, properties, 'p', 'lg');

                    }
                }
            })
        }
    },



    //*********************** *************************************************/
    //              NW_PER_HERO_SHELF4 , NW_PER_HERO_SHELF6 ,NW_PER_HERO_SHELF7 REBRAND MAIN SHELF     //
    //************************************************************************/

    "30 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 section properties": function(client) {
        RebrandHS4 = pageObj.elements.RebrandHS4.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4('lg')
                        callback.singleElem(client, RebrandHS4, properties, 'lg')
                    }
                }
            })
        }
    },

    "31 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 innershelf properties": function(client) {
        RebrandHS4InnerShelf = pageObj.elements.RebrandHS4InnerShelf.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4InnerShelf, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4InnerShelf('lg');
                        callback.singleElem(client, RebrandHS4InnerShelf, properties, 'lg');
                        client.expect.element('.nw_rebrand_hero_shelf_main .hero_shelf_inner .image').to.have.attribute('src')
                    }
                }
            })
        }
    },

    "32 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 title  properties": function(client) {
        RebrandHS4Title = pageObj.elements.RebrandHS4Title.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4Title, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4Title('lg');
                        callback.singleElem(client, RebrandHS4Title, properties, 'lg');

                    }
                }
            })
        }
    },

    "33 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 content  properties": function(client) {
        RebrandHS4Content = pageObj.elements.RebrandHS4Content.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4Content, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4Content('lg');
                        callback.singleElem(client, RebrandHS4Content, properties, 'lg');
                    }
                }
            })
        }
    },

    "34 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 button  properties": function(client) {
        RebrandHS4Button = pageObj.elements.RebrandHS4Button.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4Button, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4Button('lg')
                        callback.singleElem(client, RebrandHS4Button, properties, 'lg')
                        client.verify.attributeContains(RebrandHS4Button, 'href', '/');
                    }
                }

            }
            )
        }
    },

    "35 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 link properties": function(client) {
        RebrandHS4link = pageObj.elements.RebrandHS4link.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4link, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4link('lg');
                        callback.multiloop(client, RebrandHS4link, properties, 'lg');
                        client.verify.attributeContains(RebrandHS4link, 'href', '/');
                    }
                }
            })
        }
    },

    "36 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 legal copy properties": function(client) {
        RebrandHS4Legalcopy = pageObj.elements.RebrandHS4Legalcopy.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4Legalcopy, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4Legalcopy('lg');
                        rteCallback.rteElem(client, RebrandHS4Legalcopy, properties, 'p', 'lg');

                    }
                }
            })
        }
    },


    "37 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7  list items  properties": function(client) {
        RebrandHS4listitems = pageObj.elements.RebrandHS4listitems.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', RebrandHS4listitems, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF4 || CurrentURL == pageurl.NW_PER_HERO_SHELF6 || CurrentURL == pageurl.NW_PER_HERO_SHELF7) {
                        properties = hero_shelf_props.RebrandHS4listitems('lg');
                        callback.multiloop(client, RebrandHS4listitems, properties, 'lg');
                        client.verify.attributeContains('.breadcrumb ul li a', 'href', '/');
                    }
                }
            })
        }
    },



    //*********************** *************************************************/
    //                   NW_PER_HERO_SHELF2                                   //
    //************************************************************************/

    "38 Check for nw_per_hero_shelf2  section properties": function(client) {
        HERO_SHELF2 = pageObj.elements.HERO_SHELF2.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2('lg')
                        callback.singleElem(client, HERO_SHELF2, properties, 'lg')
                    }
                }
            })
        }
    },

    "39 Check for nw_per_hero_shelf2  innershelf properties": function(client) {
        HERO_SHELF2_Innershelf = pageObj.elements.HERO_SHELF2_Innershelf.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2_Innershelf, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2_Innershelf('lg');
                        callback.singleElem(client, HERO_SHELF2_Innershelf, properties, 'lg');
                        client.expect.element('.shelf--hero .image').to.have.attribute('src')
                        //client.expect.element('.shelf--hero__mask2 img').to.have.attribute('src')
                    }
                }
            })
        }
    },

    "40 Check for nw_per_hero_shelf2  header properties": function(client) {
        HERO_SHELF2_shelfHeader = pageObj.elements.HERO_SHELF2_shelfHeader.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2_shelfHeader, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2_shelfHeader('lg');
                        callback.singleElem(client, HERO_SHELF2_shelfHeader, properties, 'lg');
                    }
                }
            })
        }
    },


    "41 Check for nw_per_hero_shelf2  signpost properties": function(client) {
        HERO_SHELF2_signPost = pageObj.elements.HERO_SHELF2_signPost.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2_signPost, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2_signPost('lg');
                        callback.singleElem(client, HERO_SHELF2_signPost, properties, 'lg');
                    }
                }
            })
        }

    },


    "42 Check for nw_per_hero_shelf2  button properties": function(client) {
        HERO_SHELF2_ButtonCTA = pageObj.elements.HERO_SHELF2_ButtonCTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2_ButtonCTA, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2_ButtonCTA('lg')
                        callback.singleElem(client, HERO_SHELF2_ButtonCTA, properties, 'lg')
                        client.verify.attributeContains(HERO_SHELF2_ButtonCTA, 'href', '/');
                    }
                }

            }
            )
        }
    },

    "43 Check for nw_per_hero_shelf2  links properties": function(client) {
        HERO_SHELF2_linkCTA = pageObj.elements.HERO_SHELF2_linkCTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF2_linkCTA, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF2) {
                        properties = hero_shelf_props.HERO_SHELF2_linkCTA('lg');
                        callback.multiloop(client, HERO_SHELF2_linkCTA, properties, 'lg');
                        client.verify.attributeContains(HERO_SHELF2_linkCTA, 'href', '/');
                    }
                }
            })
        }
    },


    //************************************************************************/
    //                   NW_PER_HERO_SHELF10                                  //
    //************************************************************************/

    "44 Check for hero_shelf10  section properties": function(client) {

        HERO_SHELF10 = pageObj.elements.HERO_SHELF10.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10('lg')
                        callback.singleElem(client, HERO_SHELF10, properties, 'lg')
                    }
                }

            })
        }
    },


    "45 Check for hero_shelf10 log message properties": function(client) {
        HERO_SHELF10_LOGMSG = pageObj.elements.HERO_SHELF10_LOGMSG.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_LOGMSG, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_LOGMSG('lg');
                        callback.singleElem(client, HERO_SHELF10_LOGMSG, properties, 'lg');
                    }
                }
            })
        }
    },

    "46 Check for  hero_shelf10_headertitle properties": function(client) {
        HERO_SHELF10_HEADERTITLE = pageObj.elements.HERO_SHELF10_HEADERTITLE.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_HEADERTITLE, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_HEADERTITLE('lg');
                        callback.singleElem(client, HERO_SHELF10_HEADERTITLE, properties, 'lg');
                    }
                }
            })
        }
    },

    "47 Check for hero_shelf10_body properties": function(client) {
        HERO_SHELF10_BODY = pageObj.elements.HERO_SHELF10_BODY.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_BODY, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_BODY('lg');
                        callback.singleElem(client, HERO_SHELF10_BODY, properties, 'lg');
                    }
                }
            })
        }
    },

    "48 Check for hero_shelf10_box properties": function(client) {
        HERO_SHELF10_BOX = pageObj.elements.HERO_SHELF10_BOX.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_BOX, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_BOX('lg');
                        callback.singleElem(client, HERO_SHELF10_BOX, properties, 'lg');
                    }
                }
            })
        }
    },


    "49 Check for hero_shelf10_boxtext properties": function(client) {
        HERO_SHELF10_BOXTEXT = pageObj.elements.HERO_SHELF10_BOXTEXT.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_BOXTEXT, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_BOXTEXT('lg');
                        callback.singleElem(client, HERO_SHELF10_BOXTEXT, properties, 'lg');
                    }
                }
            })
        }
    },

    "50 Check for hero_shelf10_bottomtitle properties": function(client) {
        HERO_SHELF10_BOTTOMTITLE = pageObj.elements.HERO_SHELF10_BOTTOMTITLE.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_BOTTOMTITLE, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_BOTTOMTITLE('lg');
                        callback.singleElem(client, HERO_SHELF10_BOTTOMTITLE, properties, 'lg');
                    }
                }
            })
        }
    },

    "51 Check for  hero_shelf10_bottomtext  properties": function(client) {
        HERO_SHELF10_BOTTOMTEXT = pageObj.elements.HERO_SHELF10_BOTTOMTEXT.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF10_BOTTOMTEXT, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF10) {
                        properties = hero_shelf_props.HERO_SHELF10_BOTTOMTEXT('lg');
                        callback.singleElem(client, HERO_SHELF10_BOTTOMTEXT, properties, 'lg');
                    }
                }
            })
        }
    },

    //************************************************************************/
    //                     NW_PER_HERO_SHELF11							                 //
    //************************************************************************/



    "52  Check for hero_shelf11  section properties": function(client) {

        HERO_SHELF11 = pageObj.elements.HERO_SHELF11.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11('lg')
                        callback.singleElem(client, HERO_SHELF11, properties, 'lg')
                    }
                }

            })
        }
    },

    "53 Check for hero_shelf11 log message properties": function(client) {
        HERO_SHELF11_LOGMSG = pageObj.elements.HERO_SHELF11_LOGMSG.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_LOGMSG, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_LOGMSG('lg');
                        callback.singleElem(client, HERO_SHELF11_LOGMSG, properties, 'lg');
                    }
                }
            })
        }
    },

    "54 Check for  hero_shelf11_headertitle properties": function(client) {
        HERO_SHELF11_HEADERTITLE = pageObj.elements.HERO_SHELF11_HEADERTITLE.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_HEADERTITLE, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_HEADERTITLE('lg');
                        callback.singleElem(client, HERO_SHELF11_HEADERTITLE, properties, 'lg');
                    }
                }
            })
        }
    },


    "55 Check for hero_shelf11_bottomblock properties": function(client) {
        HERO_SHELF11_BOTTOMBLOCK = pageObj.elements.HERO_SHELF11_BOTTOMBLOCK.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_BOTTOMBLOCK, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_BOTTOMBLOCK('lg');
                        callback.singleElem(client, HERO_SHELF11_BOTTOMBLOCK, properties, 'lg');
                    }
                }
            })
        }
    },

    "56 Check for hero_shelf11_riskbottomtext properties": function(client) {
        HERO_SHELF11_RISKBOTTOMTEXT = pageObj.elements.HERO_SHELF11_RISKBOTTOMTEXT.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_RISKBOTTOMTEXT, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_RISKBOTTOMTEXT('lg');
                        callback.singleElem(client, HERO_SHELF11_RISKBOTTOMTEXT, properties, 'lg');
                    }
                }
            })
        }
    },


    "57 Check for hero_shelf11_cta  button properties": function(client) {
        HERO_SHELF11_CTA = pageObj.elements.HERO_SHELF11_CTA.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_CTA, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_CTA('lg')
                        callback.singleElem(client, HERO_SHELF11_CTA, properties, 'lg')
                        client.verify.attributeContains(HERO_SHELF11_CTA, 'href', '/');
                    }
                }

            }
            )
        }
    },


    "58 Check for hero_shelf11_bottomtitle properties": function(client) {
        HERO_SHELF11_BOTTOMTITLE = pageObj.elements.HERO_SHELF11_BOTTOMTITLE.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_BOTTOMTITLE, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_BOTTOMTITLE('lg');
                        callback.singleElem(client, HERO_SHELF11_BOTTOMTITLE, properties, 'lg');
                    }
                }
            })
        }
    },


    "59 Check for hero_shelf11_bottomtext properties": function(client) {
        HERO_SHELF11_BOTTOMTEXT = pageObj.elements.HERO_SHELF11_BOTTOMTEXT.selector;
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', HERO_SHELF11_BOTTOMTEXT, results => {
                if (results.value.length > 0) {
                    if (CurrentURL == pageurl.NW_PER_HERO_SHELF11) {
                        properties = hero_shelf_props.HERO_SHELF11_BOTTOMTEXT('lg');
                        callback.singleElem(client, HERO_SHELF11_BOTTOMTEXT, properties, 'lg');
                    }
                }
            })
        }
    },

    "Ending the session": function(client) {
        client.end();
    }

}