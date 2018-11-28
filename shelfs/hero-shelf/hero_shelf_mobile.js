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
  '@tags': ['mobile', 'hero-shelf', 'hero-shelf-mobile'],
  //Opening the URL
  "Opening the Desktop URL": function (client) {
    globalProps(client);
    client.maximizeWindow();
    CurrentURL = pageurl.NW_PER_HERO_SHELF12_MOB
    callback.openURL(client,CurrentURL);
    client.pause(3000);
  },
  //*********************** **************************************/
  //  NW_PER_HERO_SHELF1 and NW_PER_HERO_SHELF5  HERO SHELF     //
  //*********************************************************** */


  "1 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 section properties": function (client) {
    HeroShelf = pageObj.elements.HeroShelf.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.HeroShelf('xs')
            callback.singleElem(client, HeroShelf, properties, 'xs')
          }
        }
      })
    }
  },

  "2 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 innershelf properties": function (client) {
    InnerShelf = pageObj.elements.InnerShelf.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', InnerShelf, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB) {
            properties = hero_shelf_props.InnerShelf('xs');
            callback.singleElem(client, InnerShelf, properties, 'xs');
            client.expect.element('.shelf--hero .image').to.have.attribute('src')
            //client.expect.element('.shelf--hero__mask2 img').to.have.attribute('src')
          }
        }
      })
    }
  },

  "3 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 header properties": function (client) {
    shelfHeader = pageObj.elements.shelfHeader.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', shelfHeader, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.shelfHeader('xs');
            callback.singleElem(client, shelfHeader, properties, 'xs');
          }
        }
      })
    }
  },


  "4 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 signpost properties": function (client) {
    signPost = pageObj.elements.signPost.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', signPost, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.signPost('xs');
            callback.singleElem(client, signPost, properties, 'xs');
          }
        }
      })
    }

  },


  "5 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 button properties": function (client) {
    ButtonCTA = pageObj.elements.ButtonCTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', ButtonCTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.ButtonCTA('xs')
            callback.singleElem(client, ButtonCTA, properties, 'xs')
            client.verify.attributeContains(ButtonCTA, 'href', '/');
          }
        }

      }
      )
    }
  },

  "6 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 links properties": function (client) {
    linkCTA = pageObj.elements.linkCTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', linkCTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.linkCTA('xs');
            callback.multiloop(client, linkCTA, properties, 'xs');
            client.verify.attributeContains(linkCTA, 'href', '/');
          }
        }
      })
    }
  },

  "7 Check for nw_per_hero_shelf1 and nw_per_hero_shelf5 footer properties": function (client) {
    footlineText = pageObj.elements.footlineText.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', footlineText, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.footlineText('xs');
            rteCallback.rteElem(client, footlineText, properties, 'p', 'xs');
          }
        }
      })
    }
  },


  "8 Check for  nw_per_hero_shelf1 and nw_per_hero_shelf5 listitems  properties": function (client) {
    shelfListItems = pageObj.elements.shelfListItems.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', shelfListItems, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF1_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF5_MOB) {
            properties = hero_shelf_props.shelfListItems('xs');
            callback.multiloop(client, shelfListItems, properties, 'xs');
            client.verify.attributeContains('.breadcrumb ul li a', 'href', '/');
          }
        }
      })
    }
  },



  //*********************** **************************************/
  //              NW_PER_HERO_SHELF12   Homelog Template   //
  //*********************************************************** */

  "9 Check for nw_per_hero_shelf12  Section properties": function (client) {

    HeroShelf12 = pageObj.elements.HeroShelf12.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12('xs')
            callback.singleElem(client, HeroShelf12, properties, 'xs')
          }
        }

      })
    }
  },

  "10 Check for  nw_per_hero_shelf12  title properties": function (client) {
    HeroShelf12HeaderTilte = pageObj.elements.HeroShelf12HeaderTilte.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12HeaderTilte, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12HeaderTilte('xs');
            callback.singleElem(client, HeroShelf12HeaderTilte, properties, 'xs');
          }
        }
      })
    }
  },

  "11 Check for nw_per_hero_shelf12 log message properties": function (client) {
    HeroShelf12Logmessage = pageObj.elements.HeroShelf12Logmessage.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12Logmessage, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12Logmessage('xs');
            callback.singleElem(client, HeroShelf12Logmessage, properties, 'xs');
          }
        }
      })
    }
  },

  "12 Check for nw_per_hero_shelf12 whitebox  properties": function (client) {
    HeroShelf12WhiteBox = pageObj.elements.HeroShelf12WhiteBox.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12WhiteBox, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12WhiteBox('xs');
            callback.singleElem(client, HeroShelf12WhiteBox, properties, 'xs');
          }
        }
      })
    }
  },

  "13 Check for nw_per_hero_shelf12 whitebox title  properties": function (client) {
    HeroShelf12WhiteBoxTitle = pageObj.elements.HeroShelf12WhiteBoxTitle.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12WhiteBoxTitle, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12WhiteBoxTitle('xs');
            callback.singleElem(client, HeroShelf12WhiteBoxTitle, properties, 'xs');
          }
        }
      })
    }
  },

  "14 Check for nw_per_hero_shelf12 whitebox content properties": function (client) {
    HeroShelf12WhiteBoxContent = pageObj.elements.HeroShelf12WhiteBoxContent.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12WhiteBoxContent, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12WhiteBoxContent('xs');
            callback.singleElem(client, HeroShelf12WhiteBoxContent, properties, 'xs');
          }
        }
      })
    }
  },

  "15 Check for nw_per_hero_shelf12 cta  properties": function (client) {
    HeroShelf12CTA = pageObj.elements.HeroShelf12CTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12CTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12CTA('xs');
            callback.singleElem(client, HeroShelf12CTA, properties, 'xs');
            client.verify.attributeContains(HeroShelf12CTA, 'href', '/');
          }
        }
      })
    }
  },
  "15 Check for nw_per_hero_shelf12 bottom text properties": function (client) {
    HeroShelf12BottomText = pageObj.elements.HeroShelf12BottomText.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf12BottomText, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF12_MOB) {
            properties = hero_shelf_props.HeroShelf12BottomText('xs');
            callback.singleElem(client, HeroShelf12BottomText, properties, 'xs');
          }
        }
      })
    }
  },



  //*********************** *************************************************/
  //              NW_PER_HERO_SHELF8 and NW_PER_HERO_SHELF9 (SHELF MASK)     //
  //************************************************************************/

  "16 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9  Section properties": function (client) {
    HeroShelf8 = pageObj.elements.HeroShelf8.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8('xs')
            callback.singleElem(client, HeroShelf8, properties, 'xs')
          }
        }
      })
    }
  },

  "16 Check for  nw_per_hero_shelf8 and nw_per_hero_shelf9 text  properties": function (client) {
    HeroShelf8Text = pageObj.elements.HeroShelf8Text.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8Text, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8Text('xs')
            //callback.singleElem(client, HeroShelf8Text , properties, 'xs')
            rteCallback.rteElem(client, HeroShelf8Text, properties, 'p', 'xs');
          }
        }
      })
    }
  },

  "17 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 header properties": function (client) {
    HeroShelf8Header = pageObj.elements.HeroShelf8Header.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8Header, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8Header('xs');
            callback.singleElem(client, HeroShelf8Header, properties, 'xs');

          }
        }
      })
    }
  },


  "18 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 signpost properties": function (client) {
    HeroShelf8Signpost = pageObj.elements.HeroShelf8Signpost.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8Signpost, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8Signpost('xs');
            callback.singleElem(client, HeroShelf8Signpost, properties, 'xs');
          }
        }
      })
    }

  },


  "19 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 button properties": function (client) {
    HeroShelf8Button = pageObj.elements.HeroShelf8Button.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8Button, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8Button('xs')
            callback.singleElem(client, HeroShelf8Button, properties, 'xs')
            client.verify.attributeContains(HeroShelf8Button, 'href', '/');
          }
        }

      }
      )
    }
  },

  "20 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 button link properties": function (client) {
    HeroShelfLink = pageObj.elements.HeroShelfLink.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelfLink, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelfLink('xs');
            callback.multiloop(client, HeroShelfLink, properties, 'xs');
            client.verify.attributeContains(HeroShelfLink, 'href', '/');
          }
        }
      })
    }
  },

  "21 Check for nw_per_hero_shelf8 and nw_per_hero_shelf9 footer properties": function (client) {
    HeroShelf8FooterText = pageObj.elements.HeroShelf8FooterText.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HeroShelf8FooterText, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF8_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF9_MOB) {
            properties = hero_shelf_props.HeroShelf8FooterText('xs');
            rteCallback.rteElem(client, HeroShelf8FooterText, properties, 'p', 'xs');
          }
        }
      })
    }
  },

  //*********************** *************************************************/
  //              NW_PER_HERO_SHELF3  REBRAND HERO SHELF    //
  //************************************************************************/

  "22 Check for nw_per_hero_shelf3 section properties": function (client) {
    RebrandHS = pageObj.elements.RebrandHS.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHS('xs')
            callback.singleElem(client, RebrandHS, properties, 'xs')
          }
        }
      })
    }
  },

  "23 Check for nw_per_hero_shelf3 innershelf properties": function (client) {
    RebrandInnerShelf = pageObj.elements.RebrandInnerShelf.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandInnerShelf, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandInnerShelf('xs');
            callback.singleElem(client, RebrandInnerShelf, properties, 'xs');
            client.expect.element('.nw_rebrand_hero_shelf .hero_shelf_inner .image').to.have.attribute('src')
          }
        }
      })
    }
  },

  "24 Check for  nw_per_hero_shelf3 title properties": function (client) {
    RebrandHSTitle = pageObj.elements.RebrandHSTitle.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHSTitle, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHSTitle('xs');
            callback.singleElem(client, RebrandHSTitle, properties, 'xs');

          }
        }
      })
    }
  },

  "25 Check for nw_per_hero_shelf3 content properties": function (client) {
    RebrandHSContent = pageObj.elements.RebrandHSContent.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHSContent, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHSContent('xs');
            callback.singleElem(client, RebrandHSContent, properties, 'xs');
          }
        }
      })
    }
  },

  "26 Check for nw_per_hero_shelf3 button properties": function (client) {
    RebrandHSButton = pageObj.elements.RebrandHSButton.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHSButton, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHSButton('xs')
            callback.singleElem(client, RebrandHSButton, properties, 'xs')
            client.verify.attributeContains(RebrandHSButton, 'href', '/');
          }
        }

      }
      )
    }
  },

  "27 Check for nw_per_hero_shelf3 link  properties": function (client) {
    RebrandHSlink = pageObj.elements.RebrandHSlink.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHSlink, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHSlink('xs');
            callback.multiloop(client, RebrandHSlink, properties, 'xs');
            client.verify.attributeContains(RebrandHSlink, 'href', '/');
          }
        }
      })
    }
  },

  "28 Check for nw_per_hero_shelf3 Legalcopy properties": function (client) {
    RebrandHSLegalcopy = pageObj.elements.RebrandHSLegalcopy.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHSLegalcopy, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF3_MOB) {
            properties = hero_shelf_props.RebrandHSLegalcopy('xs');
            rteCallback.rteElem(client, RebrandHSLegalcopy, properties, 'p', 'xs');

          }
        }
      })
    }
  },



  //*********************** *************************************************/
  //              NW_PER_HERO_SHELF4 , NW_PER_HERO_SHELF6 ,NW_PER_HERO_SHELF7 REBRAND MAIN SHELF     //
  //************************************************************************/

  "29 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 section properties": function (client) {
    RebrandHS4 = pageObj.elements.RebrandHS4.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
            properties = hero_shelf_props.RebrandHS4('xs')
            callback.singleElem(client, RebrandHS4, properties, 'xs')
          }

        }
      })
    }
  },

  "30 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 innershelf properties": function (client) {
    RebrandHS4InnerShelf = pageObj.elements.RebrandHS4InnerShelf.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4InnerShelf, results => {
        if (results.value.length > 0) {
          properties = hero_shelf_props.RebrandHS4InnerShelf('xs');
          callback.singleElem(client, RebrandHS4InnerShelf, properties, 'xs');
          client.expect.element('.nw_rebrand_hero_shelf_main .hero_shelf_inner .image').to.have.attribute('src')

        }
      })
    }
  },

  "31 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 title  properties": function (client) {
    RebrandHS4Title = pageObj.elements.RebrandHS4Title.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4Title, results => {
        if (results.value.length > 0) {
     if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
            properties = hero_shelf_props.RebrandHS4Title('xs');
            callback.singleElem(client, RebrandHS4Title, properties, 'xs');
          }
        }
      })
    }
  },

  "32 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 content  properties": function (client) {
    RebrandHS4Content = pageObj.elements.RebrandHS4Content.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4Content, results => {
        if (results.value.length > 0) {
        if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
            properties = hero_shelf_props.RebrandHS4Content('xs');
            callback.singleElem(client, RebrandHS4Content, properties, 'xs');
          }
        }
      })
    }
  },

  "33 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 button  properties": function (client) {
    RebrandHS4Button = pageObj.elements.RebrandHS4Button.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4Button, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
          properties = hero_shelf_props.RebrandHS4Button('xs')
          callback.singleElem(client, RebrandHS4Button, properties, 'xs')
          client.verify.attributeContains(RebrandHS4Button, 'href', '/');
        }}

      }
      )
    }
  },

  "34 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 link properties": function (client) {
    RebrandHS4link = pageObj.elements.RebrandHS4link.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4link, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
            properties = hero_shelf_props.RebrandHS4link('xs');
            callback.multiloop(client, RebrandHS4link, properties, 'xs');
            client.verify.attributeContains(RebrandHS4link, 'href', '/');
          }
        }
      })
    }
  },

  "35 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7 legal copy properties": function (client) {
    RebrandHS4Legalcopy = pageObj.elements.RebrandHS4Legalcopy.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4Legalcopy, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
          properties = hero_shelf_props.RebrandHS4Legalcopy('xs');
          rteCallback.rteElem(client, RebrandHS4Legalcopy, properties, 'p', 'xs');
          }
        }
      })
    }
  },


  "36 Check for nw_per_hero_shelf4 , nw_per_hero_shelf6 ,nw_per_hero_shelf7  listitems  properties": function (client) {
    RebrandHS4listitems = pageObj.elements.RebrandHS4listitems.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', RebrandHS4listitems, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF4_MOB || CurrentURL == pageurl.NW_PER_HERO_SHELF6_MOB  || CurrentURL == pageurl.NW_PER_HERO_SHELF7_MOB ) {
          properties = hero_shelf_props.RebrandHS4listitems('xs');
          callback.multiloop(client, RebrandHS4listitems, properties, 'xs');
          client.verify.attributeContains('.breadcrumb ul li a', 'href', '/');
        }}
      })
    }
  },



  //*********************** *************************************************/
  //                   NW_PER_HERO_SHELF2                                   //
  //************************************************************************/

  "37 Check for nw_per_hero_shelf2  section properties": function (client) {
    HERO_SHELF2 = pageObj.elements.HERO_SHELF2.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2('xs')
            callback.singleElem(client, HERO_SHELF2, properties, 'xs')
          }
        }
      })
    }
  },

  "38 Check for nw_per_hero_shelf2  innershelf properties": function (client) {
    HERO_SHELF2_Innershelf = pageObj.elements.HERO_SHELF2_Innershelf.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2_Innershelf, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2_Innershelf('xs');
            callback.singleElem(client, HERO_SHELF2_Innershelf, properties, 'xs');
            client.expect.element('.shelf--hero .image').to.have.attribute('src')
            //client.expect.element('.shelf--hero__mask2 img').to.have.attribute('src')
          }
        }
      })
    }
  },

  "39 Check for nw_per_hero_shelf2  header properties": function (client) {
    HERO_SHELF2_shelfHeader = pageObj.elements.HERO_SHELF2_shelfHeader.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2_shelfHeader, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2_shelfHeader('xs');
            callback.singleElem(client, HERO_SHELF2_shelfHeader, properties, 'xs');
          }
        }
      })
    }
  },


  "40 Check for nw_per_hero_shelf2  signpost properties": function (client) {
    HERO_SHELF2_signPost = pageObj.elements.HERO_SHELF2_signPost.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2_signPost, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2_signPost('xs');
            callback.singleElem(client, HERO_SHELF2_signPost, properties, 'xs');
          }
        }
      })
    }

  },


  "41 Check for nw_per_hero_shelf2  button properties": function (client) {
    HERO_SHELF2_ButtonCTA = pageObj.elements.HERO_SHELF2_ButtonCTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2_ButtonCTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2_ButtonCTA('xs')
            callback.singleElem(client, HERO_SHELF2_ButtonCTA, properties, 'xs')
            client.verify.attributeContains(HERO_SHELF2_ButtonCTA, 'href', '/');
          }
        }

      }
      )
    }
  },

  "42 Check for nw_per_hero_shelf2  links properties": function (client) {
    HERO_SHELF2_linkCTA = pageObj.elements.HERO_SHELF2_linkCTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF2_linkCTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF2_MOB) {
            properties = hero_shelf_props.HERO_SHELF2_linkCTA('xs');
            callback.multiloop(client, HERO_SHELF2_linkCTA, properties, 'xs');
            client.verify.attributeContains(HERO_SHELF2_linkCTA, 'href', '/');
          }
        }
      })
    }
  },


  //************************************************************************/
  //                   NW_PER_HERO_SHELF10                                  //
  //************************************************************************/

  "43 Check for hero_shelf10  Section properties": function (client) {

    HERO_SHELF10 = pageObj.elements.HERO_SHELF10.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10('xs')
            callback.singleElem(client, HERO_SHELF10, properties, 'xs')
          }
        }

      })
    }
  },


  "44 Check for hero_shelf10 log message properties": function (client) {
    HERO_SHELF10_LOGMSG = pageObj.elements.HERO_SHELF10_LOGMSG.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_LOGMSG, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_LOGMSG('xs');
            callback.singleElem(client, HERO_SHELF10_LOGMSG, properties, 'xs');
          }
        }
      })
    }
  },

  "45 Check for  hero_shelf10_headertitle properties": function (client) {
    HERO_SHELF10_HEADERTITLE = pageObj.elements.HERO_SHELF10_HEADERTITLE.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_HEADERTITLE, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_HEADERTITLE('xs');
            callback.singleElem(client, HERO_SHELF10_HEADERTITLE, properties, 'xs');
          }
        }
      })
    }
  },

  "46  Check for hero_shelf10_body properties": function (client) {
    HERO_SHELF10_BODY = pageObj.elements.HERO_SHELF10_BODY.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_BODY, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_BODY('xs');
            callback.singleElem(client, HERO_SHELF10_BODY, properties, 'xs');
          }
        }
      })
    }
  },

  "47 Check for hero_shelf10_box properties": function (client) {
    HERO_SHELF10_BOX = pageObj.elements.HERO_SHELF10_BOX.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_BOX, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_BOX('xs');
            callback.singleElem(client, HERO_SHELF10_BOX, properties, 'xs');
          }
        }
      })
    }
  },


  "48  Check for hero_shelf10_boxtext properties": function (client) {
    HERO_SHELF10_BOXTEXT = pageObj.elements.HERO_SHELF10_BOXTEXT.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_BOXTEXT, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_BOXTEXT('xs');
            callback.singleElem(client, HERO_SHELF10_BOXTEXT, properties, 'xs');
          }
        }
      })
    }
  },

  "49  Check for hero_shelf10_bottomtitle properties": function (client) {
    HERO_SHELF10_BOTTOMTITLE = pageObj.elements.HERO_SHELF10_BOTTOMTITLE.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_BOTTOMTITLE, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_BOTTOMTITLE('xs');
            callback.singleElem(client, HERO_SHELF10_BOTTOMTITLE, properties, 'xs');
          }
        }
      })
    }
  },

  "50 Check for hero_shelf10_bottomtext properties": function (client) {
    HERO_SHELF10_BOTTOMTEXT = pageObj.elements.HERO_SHELF10_BOTTOMTEXT.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF10_BOTTOMTEXT, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF10_MOB) {
            properties = hero_shelf_props.HERO_SHELF10_BOTTOMTEXT('xs');
            callback.singleElem(client, HERO_SHELF10_BOTTOMTEXT, properties, 'xs');
          }
        }
      })
    }
  },

  //************************************************************************/
  //                     NW_PER_HERO_SHELF11							                 //
  //************************************************************************/



  "51 Check for hero_shelf11  Section properties": function (client) {

    HERO_SHELF11 = pageObj.elements.HERO_SHELF11.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11('xs')
            callback.singleElem(client, HERO_SHELF11, properties, 'xs')
          }
        }

      })
    }
  },

  "52 Check for hero_shelf11 log message properties": function (client) {
    HERO_SHELF11_LOGMSG = pageObj.elements.HERO_SHELF11_LOGMSG.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_LOGMSG, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_LOGMSG('xs');
            callback.singleElem(client, HERO_SHELF11_LOGMSG, properties, 'xs');
          }
        }
      })
    }
  },

  "53 Check for  hero_shelf11_headertitle properties": function (client) {
    HERO_SHELF11_HEADERTITLE = pageObj.elements.HERO_SHELF11_HEADERTITLE.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_HEADERTITLE, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_HEADERTITLE('xs');
            callback.singleElem(client, HERO_SHELF11_HEADERTITLE, properties, 'xs');
          }
        }
      })
    }
  },


  "54 Check for hero_shelf11_bottomblock properties": function (client) {
    HERO_SHELF11_BOTTOMBLOCK = pageObj.elements.HERO_SHELF11_BOTTOMBLOCK.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_BOTTOMBLOCK, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_BOTTOMBLOCK('xs');
            callback.singleElem(client, HERO_SHELF11_BOTTOMBLOCK, properties, 'xs');
          }
        }
      })
    }
  },

  "55 Check for hero_shelf11_riskbottomtext properties": function (client) {
    HERO_SHELF11_RISKBOTTOMTEXT = pageObj.elements.HERO_SHELF11_RISKBOTTOMTEXT.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_RISKBOTTOMTEXT, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_RISKBOTTOMTEXT('xs');
            callback.singleElem(client, HERO_SHELF11_RISKBOTTOMTEXT, properties, 'xs');
          }
        }
      })
    }
  },


  "56 Check for hero_shelf11_cta  button properties": function (client) {
    HERO_SHELF11_CTA = pageObj.elements.HERO_SHELF11_CTA.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_CTA, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_CTA('xs')
            callback.singleElem(client, HERO_SHELF11_CTA, properties, 'xs')
            client.verify.attributeContains(HERO_SHELF11_CTA, 'href', '/');
          }
        }

      }
      )
    }
  },


  "57 Check for hero_shelf11_bottomtitle properties": function (client) {
    HERO_SHELF11_BOTTOMTITLE = pageObj.elements.HERO_SHELF11_BOTTOMTITLE.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_BOTTOMTITLE, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_BOTTOMTITLE('xs');
            callback.singleElem(client, HERO_SHELF11_BOTTOMTITLE, properties, 'xs');
          }
        }
      })
    }
  },


  "58 Check for hero_shelf11_bottomtext properties": function (client) {
    HERO_SHELF11_BOTTOMTEXT = pageObj.elements.HERO_SHELF11_BOTTOMTEXT.selector;
    globalProps(client);
    if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
      client.elements('css selector', HERO_SHELF11_BOTTOMTEXT, results => {
        if (results.value.length > 0) {
          if (CurrentURL == pageurl.NW_PER_HERO_SHELF11_MOB) {
            properties = hero_shelf_props.HERO_SHELF11_BOTTOMTEXT('xs');
            callback.singleElem(client, HERO_SHELF11_BOTTOMTEXT, properties, 'xs');
          }
        }
      })
    }
  },

  "Ending the session": function (client) {
    client.end();
  }

}

