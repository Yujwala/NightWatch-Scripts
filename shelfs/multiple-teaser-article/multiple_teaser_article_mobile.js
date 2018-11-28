var pageurl = require('../../pageurls.js'),
    pageObj,multiple_teaser_article_props,callback,size;

function globalProps(client){
    pageObj = client.page.multiple_teaser_article_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    multiple_teaser_article_props = require('./multiple_teaser_article_props.js')(client);  
}

module.exports = {
  '@tags': ['mobile', 'multiple-teaser-article', 'multiple-teaser-article-mobile'],
    //Opening the mobile URL
    "1. Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.LOMBARD_MULTIPLE_TEASER_ARTICLE_MOB);
            client.pause(30000);
   },

   //Resize the window for mobile
    "2. Resize The Window":function(client){
      var  size = client.globals.size.widths;
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000);
           //client.refresh();
          // client.keys('\ue035');
           
    },

    "3 Check for shelf padding": function(client) {
            multTeaserShelf = pageObj.elements.multTeaserShelf.selector,
            themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            themeLightBlueShelf = pageObj.elements.themeLightBlueShelf.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //shelf padding
            properties = multiple_teaser_article_props.multTeaserShelfProps_Mob('xs');  
            callback.multiloop(client, multTeaserShelf , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeBlueShelf('xs');  
                 callback.multiloop(client, themeBlueShelf , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeWhiteShelf('xs');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeLightBlueShelf('xs');  
                 callback.multiloop(client, themeLightBlueShelf , properties, 'xs');

                }
            });

          }  

    },

    "4 Check for title wrapper props": function(client) {
            titleTextCls = pageObj.elements.titleTextCls.selector,
            titleMargin = pageObj.elements.titleMargin.selector,
            titleHeaderGrp = pageObj.elements.titleHeaderGrp.selector,
            themeBlueTitle = pageObj.elements.themeBlueTitle.selector,
            themeWhiteTitle = pageObj.elements.themeWhiteTitle.selector,
            themeLightBlueTitle = pageObj.elements.themeLightBlueTitle.selector;

            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            properties = multiple_teaser_article_props.titleTextClsProps_Mob('xs');
            callback.multiloop(client, titleTextCls , properties, 'xs');
          

            client.elements('css selector',titleMargin,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.titleMarginProps_Mob('xs');  
                 callback.multiloop(client, titleMargin , properties, 'xs');

                }
            });

            client.elements('css selector',titleHeaderGrp,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.titleHeaderGrpProps_Mob('xs');  
                 callback.multiloop(client, titleHeaderGrp , properties, 'xs');

                }
            });

            //Blue Theme
            client.elements('css selector',themeBlueTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueTitleProps('xs');  
                 callback.multiloop(client, themeBlueTitle , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteTitleProps('xs');  
                 callback.multiloop(client, themeWhiteTitle , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueTitleProps('xs');  
                 callback.multiloop(client, themeLightBlueTitle , properties, 'xs');

                }
            });
            }
    },

    "5 Check for rte section props": function(client) {
            rteSection = pageObj.elements.rteSection.selector,
            themeBlueRte = pageObj.elements.themeBlueRte.selector,
            themeWhiteRte = pageObj.elements.themeWhiteRte.selector,
            themeLightBlueRte = pageObj.elements.themeLightBlueRte.selector;
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            properties = multiple_teaser_article_props.rteSectionProps_Mob('xs');
            callback.multiloop(client, rteSection , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueRteProps('xs');  
                 callback.multiloop(client, themeBlueRte , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteRteProps('xs');  
                 callback.multiloop(client, themeWhiteRte , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueRteProps('xs');  
                 callback.multiloop(client, themeLightBlueRte , properties, 'xs');

                }
            });

            }
    },

     "6 Check for grid item props": function(client) {
            gridItem = pageObj.elements.gridItem.selector,
            gridItemTwo = pageObj.elements.gridItemTwo.selector;
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

             client.elements('css selector',gridItemTwo,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.gridItemTwoProps('xs');  
                 callback.multiloop(client, gridItemTwo , properties, 'xs');

                }
            }); 
            
            properties = multiple_teaser_article_props.gridItemProps_Mob('xs');
            callback.multiloop(client, gridItem , properties, 'xs');

            }
    },
     "7 Check for teaser head props": function(client) {
            teaserHead = pageObj.elements.teaserHead.selector,
            themeWhiteTHead = pageObj.elements.themeWhiteTHead.selector,
            themeLightBlueTHead = pageObj.elements.themeLightBlueTHead.selector,
            themeBlueTHead = pageObj.elements.themeBlueTHead.selector;
            globalProps(client);         

           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            properties = multiple_teaser_article_props.teaserHeadProps_Mob('xs');
            callback.multiloop(client, teaserHead , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueTHead,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueTHeadProps('xs');  
                 callback.multiloop(client, themeBlueTHead , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteTHead,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteTHeadProps('xs');  
                 callback.multiloop(client, themeWhiteTHead , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueTHead,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueTHeadProps('xs');  
                 callback.multiloop(client, themeLightBlueTHead , properties, 'xs');

                }
            });

           }

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //sec cta mouse down props
            client.waitForElementVisible(teaserHead, 6000);
            client.moveToElement(teaserHead,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = multiple_teaser_article_props.teaserHeadMouseDownProps_Mob('xs');
            callback.singleElem(client, teaserHead , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueTHead,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeBlueTHead, 6000);
                client.moveToElement(themeBlueTHead,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeBlueTHeadMouseProps_Mob('xs');
                callback.singleElem(client, themeBlueTHead , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteTHead,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeWhiteTHead, 6000);
                client.moveToElement(themeWhiteTHead,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeWhiteTHeadMouseProps('xs');
                callback.singleElem(client, themeWhiteTHead , properties, 'xs');


                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueTHead,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeLightBlueTHead, 6000);
                client.moveToElement(themeLightBlueTHead,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeLightBlueTHeadMouseProps('xs');
                callback.singleElem(client, themeLightBlueTHead , properties, 'xs');

                }
            });

            //Check if anchor tags have href attribute
            client.verify.attributeContains('.shelf .teaser__head .cta a', 'href', '/');
          }
        
    },
    
    "8 Check for img properties": function(client) {
            imgCls = pageObj.elements.imgCls.selector,
            imgWrap = pageObj.elements.imgWrap.selector;
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = multiple_teaser_article_props.imgWrapProps('xs');
            callback.multiloop(client, imgWrap , properties, 'xs');

            properties = multiple_teaser_article_props.imgClsProps('xs');
            callback.multiloop(client, imgCls , properties, 'xs');

        }
    },

    "9 Check for teaser content properties": function(client) {
            teaserContent = pageObj.elements.teaserContent.selector,
            themeBlueContent = pageObj.elements.themeBlueContent.selector,
            themeWhiteContent = pageObj.elements.themeWhiteContent.selector,
            themeLightBlueContent = pageObj.elements.themeLightBlueContent.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = multiple_teaser_article_props.teaserContentProps('xs');
            callback.multiloop(client, teaserContent , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueContentProps('xs');  
                 callback.multiloop(client, themeBlueContent , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteContentProps('xs');  
                 callback.multiloop(client, themeWhiteContent , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueContentProps('xs');  
                 callback.multiloop(client, themeLightBlueContent , properties, 'xs');

                }
            });

        }
    },

    "10 Check for cta properties": function(client) {
            ctaWrap = pageObj.elements.ctaWrap.selector,
            ctaHover = pageObj.elements.ctaHover.selector,
            themeBlueCtaHover = pageObj.elements.themeBlueCtaHover.selector,
            themeWhiteCtaHover = pageObj.elements.themeWhiteCtaHover.selector,
            themeLightBlueCtaHover = pageObj.elements.themeLightBlueCtaHover.selector,
            themeBlueCta = pageObj.elements.themeBlueCta.selector,
            themeWhiteCta = pageObj.elements.themeWhiteCta.selector,
            themeLightBlueCta = pageObj.elements.themeLightBlueCta.selector;
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            client.elements('css selector', '.shelf.horizontal .cta.cta--m a' ,results=>{
               if(results.value.length>0) {
            //sec cta props
            properties = multiple_teaser_article_props.ctaWrapProps_Mob('xs');
            callback.multiloop(client, ctaWrap , properties, 'xs');

            //Blue Theme
            client.elements('css selector',themeBlueCta,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueCtaProps('xs');  
                 callback.multiloop(client, themeBlueCta , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteCta,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteCtaProps('xs');  
                 callback.multiloop(client, themeWhiteCta , properties, 'xs');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueCta,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueCtaProps('xs');  
                 callback.multiloop(client, themeLightBlueCta , properties, 'xs');

                }
            });
            }
        });

        } 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector', '.shelf.horizontal .cta.cta--m a' ,results=>{
               if(results.value.length>0) {
            //sec cta mouse down props
      
            client.waitForElementVisible(ctaHover, 6000);
            client.moveToElement(ctaHover,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = multiple_teaser_article_props.ctaMouseDownProps_mob('xs');
            callback.singleElem(client, ctaHover , properties, 'xs');


            //Blue Theme
            client.elements('css selector',themeBlueCta,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeBlueCtaHover, 6000);
                client.moveToElement(themeBlueCtaHover,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeBluectaMouseDownProps('xs');
                callback.singleElem(client, themeBlueCtaHover , properties, 'xs');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteCta,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeWhiteCtaHover, 6000);
                client.moveToElement(themeWhiteCtaHover,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeWhitectaMouseDownProps('xs');
                callback.singleElem(client, themeWhiteCtaHover , properties, 'xs');


                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueCta,results=>{
               if(results.value.length>0) {

                client.waitForElementVisible(themeLightBlueCtaHover, 6000);
                client.moveToElement(themeLightBlueCtaHover,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);
                properties = multiple_teaser_article_props.themeLightBluectaMouseDownProps('xs');
                callback.singleElem(client, themeLightBlueCtaHover , properties, 'xs');

                }
            });

                      
            //sec cta icon
            properties = multiple_teaser_article_props.ctaIconProps('xs');
            callback.pseudoSingleElem(client, ctaHover,':after',properties);

            //Check if anchor tags have href attribute
            client.verify.attributeContains('.shelf.horizontal .cta.cta--m a', 'href', '/');
            //client.expect.element('.shelf.teaser--3.horizontal .cta.cta--m a').to.have.attribute('href');

            //Check the click functionality
            client.click('.shelf.horizontal .cta.cta--m a');
        }
    });

    } 
    },

   "Ending the session":function(client){
        client.end();
    }
    
}

