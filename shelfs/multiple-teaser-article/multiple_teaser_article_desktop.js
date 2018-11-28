var pageurl = require('../../pageurls.js'),
    pageObj,multiple_teaser_article_props,callback,size;

function globalProps(client){
    pageObj = client.page.multiple_teaser_article_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    multiple_teaser_article_props = require('./multiple_teaser_article_props.js')(client);  
}

module.exports = {
  '@tags': ['desktop', 'multiple-teaser-article', 'multiple-teaser-article-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.LOMBARD_MULTIPLE_TEASER_ARTICLE);
            client.pause(30000);
    },

    
    "1.Check for shelf padding": function(client) {
            multTeaserShelf = pageObj.elements.multTeaserShelf.selector,
            themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            themeLightBlueShelf = pageObj.elements.themeLightBlueShelf.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //shelf padding
            properties = multiple_teaser_article_props.multTeaserShelfProps('lg');  
            callback.multiloop(client, multTeaserShelf , properties, 'lg');

            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeBlueShelf('lg');  
                 callback.multiloop(client, themeBlueShelf , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeWhiteShelf('lg');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = multiple_teaser_article_props.themeLightBlueShelf('lg');  
                 callback.multiloop(client, themeLightBlueShelf , properties, 'lg');

                }
            });

          }  

    },

    "2.Check for vertical Shelf Padding": function(client) {
        //for new configurations
        multTeaserShelf = pageObj.elements.multipleTeaserShelfVertical.selector,
        themeBlueShelf = pageObj.elements.themeBlueShelfVertical.selector,
        themeWhiteShelf = pageObj.elements.themeWhiteShelfVertical.selector,
        themeLightBlueShelf = pageObj.elements.themeLightBlueShelfVertical.selector;
        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        //shelf padding
        properties = multiple_teaser_article_props.multTeaserVerShelfProps('lg');  
        callback.multiloop(client, multTeaserShelf , properties, 'lg');

        //Blue Theme
        client.elements('css selector',themeBlueShelf,results=>{
           if(results.value.length>0) {

             //shelf bg color
             properties = multiple_teaser_article_props.themeBlueShelf('lg');  
             callback.multiloop(client, themeBlueShelf , properties, 'lg');

            }
        });

        //White Theme
        client.elements('css selector',themeWhiteShelf,results=>{
           if(results.value.length>0) {

             //shelf bg color
             properties = multiple_teaser_article_props.themeWhiteShelf('lg');  
             callback.multiloop(client, themeWhiteShelf , properties, 'lg');

            }
        });

        //light blue Theme
        client.elements('css selector',themeLightBlueShelf,results=>{
           if(results.value.length>0) {

             //shelf bg color
             properties = multiple_teaser_article_props.themeLightBlueShelf('lg');  
             callback.multiloop(client, themeLightBlueShelf , properties, 'lg');

            }
        });

      }  

},

    "3.Check for title wrapper props": function(client) {
            titleTextCls = pageObj.elements.titleTextCls.selector,
            titleMargin = pageObj.elements.titleMargin.selector,
            titleHeaderGrp = pageObj.elements.titleHeaderGrp.selector,
            themeBlueTitle = pageObj.elements.themeBlueTitle.selector,
            themeWhiteTitle = pageObj.elements.themeWhiteTitle.selector,
            themeLightBlueTitle = pageObj.elements.themeLightBlueTitle.selector;

            globalProps(client);
            client.maximizeWindow();
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            properties = multiple_teaser_article_props.titleTextClsProps('lg');
            callback.multiloop(client, titleTextCls , properties, 'lg');
          

            client.elements('css selector',titleMargin,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.titleMarginProps('lg');  
                 callback.multiloop(client, titleMargin , properties, 'lg');

                }
            });

            client.elements('css selector',titleHeaderGrp,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.titleHeaderGrpProps('lg');  
                 callback.multiloop(client, titleHeaderGrp , properties, 'lg');

                }
            });

            //Blue Theme
            client.elements('css selector',themeBlueTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueTitleProps('lg');  
                 callback.multiloop(client, themeBlueTitle , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteTitleProps('lg');  
                 callback.multiloop(client, themeWhiteTitle , properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueTitle,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueTitleProps('lg');  
                 callback.multiloop(client, themeLightBlueTitle , properties, 'lg');

                }
            });
            }
    },


    "4.Check for title wrapper props for Vertical title": function(client) {
         //for new configurations
        titleHeaderGrp = pageObj.elements.titleHeaderGrpVertical.selector,
        globalProps(client);
        client.maximizeWindow();   
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){    
        client.elements('css selector',titleHeaderGrp,results=>{
           if(results.value.length>0) {
             properties = multiple_teaser_article_props.vertitleHeaderGrpProps('lg');  
             callback.multiloop(client, titleHeaderGrp , properties, 'lg');
            }
        });     
        }
},



    "5.Check for rte section props": function(client) {
            rteSection = pageObj.elements.rteSection.selector,
            themeBlueRte = pageObj.elements.themeBlueRte.selector,
            themeWhiteRte = pageObj.elements.themeWhiteRte.selector,
            themeLightBlueRte = pageObj.elements.themeLightBlueRte.selector;
            globalProps(client);
            client.maximizeWindow();
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            properties = multiple_teaser_article_props.rteSectionProps('lg');
            callback.multiloop(client, rteSection , properties, 'lg');

            //Blue Theme
            client.elements('css selector',themeBlueRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueRteProps('lg');  
                 callback.multiloop(client, themeBlueRte , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteRteProps('lg');  
                 callback.multiloop(client, themeWhiteRte , properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueRte,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueRteProps('lg');  
                 callback.multiloop(client, themeLightBlueRte , properties, 'lg');

                }
            });

            }
    },

    "6.Check for rte section props": function(client) {
         //for new configurations
        rteSection = pageObj.elements.rteSectionVertical.selector,
        themeBlueRte = pageObj.elements.themeBlueRteVer.selector,
        themeWhiteRte = pageObj.elements.themeWhiteRteVer.selector,
        themeLightBlueRte = pageObj.elements.themeLightBlueRteVer.selector;
        globalProps(client);
        client.maximizeWindow();
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
        properties = multiple_teaser_article_props.rteVerSectionProps('lg');
        rteCallback.rteElem(client, rteSection, properties,'p', 'lg');
        //callback.multiloop(client, rteSection , properties, 'lg');

        //Blue Theme
        client.elements('css selector',themeBlueRte,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeBlueVerRteProps('lg'); 
             rteCallback.rteElem(client, themeBlueRte, properties,'p', 'lg'); 
            // callback.multiloop(client, themeBlueRte , properties, 'lg');

            }
        });

        //White Theme
        client.elements('css selector',themeWhiteRte,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeWhiteVerRteProps('lg'); 
              rteCallback.rteElem(client, themeWhiteRte, properties,'p', 'lg'); 
            // callback.multiloop(client, themeWhiteRte , properties, 'lg');

            }
        });

        //light blue Theme
        client.elements('css selector',themeLightBlueRte,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeLightBlueVerRteProps('lg'); 
             rteCallback.rteElem(client, themeLightBlueRte, properties,'p', 'lg'); 
            // callback.multiloop(client, themeLightBlueRte , properties, 'lg');

            }
        });

        }
},

     "7.Check for grid item props": function(client) {
            gridItem = pageObj.elements.gridItem.selector,
            gridItemTwo = pageObj.elements.gridItemTwo.selector;
            globalProps(client);
            client.maximizeWindow();
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

             client.elements('css selector',gridItemTwo,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.gridItemTwoProps('lg');  
                 callback.multiloop(client, gridItemTwo , properties, 'lg');

                }
            }); 
            
            properties = multiple_teaser_article_props.gridItemProps('lg');
            callback.multiloop(client, gridItem , properties, 'lg');

            }
    },
  
    
    "8.Check for img properties": function(client) {
            imgCls = pageObj.elements.imgClss.selector,
            imgWrap = pageObj.elements.imgWrapp.selector;
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = multiple_teaser_article_props.imgWrapProps('lg');
            callback.multiloop(client, imgWrap , properties, 'lg');

            properties = multiple_teaser_article_props.imgClsProps('lg');
            callback.multiloop(client, imgCls , properties, 'lg');

        }
    },


    "9.Check for img properties": function(client) {
         //for new configurations
        //imgCls = pageObj.elements.imgCls.selector,
        imgWrap = pageObj.elements.imgWrapGridTeaser.selector;
        globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        properties = multiple_teaser_article_props.imgWrapVerProps('lg');
        callback.multiloop(client, imgWrap , properties, 'lg');

        //properties = multiple_teaser_article_props.imgClsProps('lg');
        //callback.multiloop(client, imgCls , properties, 'lg');

    }
},


    "10.Check for teaser content properties": function(client) {
            teaserContent = pageObj.elements.teaserContent.selector,
            themeBlueContent = pageObj.elements.themeBlueContent.selector,
            themeWhiteContent = pageObj.elements.themeWhiteContent.selector,
            themeLightBlueContent = pageObj.elements.themeLightBlueContent.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = multiple_teaser_article_props.teaserContentProps('lg');
            callback.multiloop(client, teaserContent , properties, 'lg');

            //Blue Theme
            client.elements('css selector',themeBlueContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueContentProps('lg');  
                 callback.multiloop(client, themeBlueContent , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteContentProps('lg');  
                 callback.multiloop(client, themeWhiteContent , properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueContent,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueContentProps('lg');  
                 callback.multiloop(client, themeLightBlueContent , properties, 'lg');

                }
            });

        }
    },




    "11.Check for teaser content properties": function(client) {
         //for new configurations
        teaserContent = pageObj.elements.articleTeaserContent.selector,
        themeBlueContent = pageObj.elements.themeBlueContentVertical.selector,
        themeWhiteContent = pageObj.elements.themeWhiteContentVertical.selector,
        themeLightBlueContent = pageObj.elements.themeLightBlueContentVertical.selector,
        globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        properties = multiple_teaser_article_props.teaserVerContentProps('lg');
        rteCallback.rteElem(client, teaserContent, properties,'p', 'lg');
        //callback.multiloop(client, teaserContent , properties, 'lg');

        //Blue Theme
        client.elements('css selector',themeBlueContent,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeBlueVerContentProps('lg');  
             rteCallback.rteElem(client, themeBlueContent, properties,'p', 'lg');
            // callback.multiloop(client, themeBlueContent , properties, 'lg');

            }
        });

        //White Theme
        client.elements('css selector',themeWhiteContent,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeWhiteVerContentProps('lg'); 
             rteCallback.rteElem(client, themeWhiteContent, properties,'p', 'lg'); 
             //callback.multiloop(client, themeWhiteContent , properties, 'lg');

            }
        });

        //light blue Theme
        client.elements('css selector',themeLightBlueContent,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeLightBlueVerContentProps('lg');
             rteCallback.rteElem(client, themeLightBlueContent, properties,'p', 'lg');  
             //callback.multiloop(client, themeLightBlueContent , properties, 'lg');

            }
        });

    }
},





    "12.Check for cta properties": function(client) {
            ctaWrap = pageObj.elements.ctaWrap.selector,
            ctaWrapLom = pageObj.elements.ctaWrapVerticalLom.selector,
            ctaHover = pageObj.elements.ctaHover.selector,
            themeBlueCtaHover = pageObj.elements.themeBlueCtaHover.selector,
            themeWhiteCtaHover = pageObj.elements.themeWhiteCtaHover.selector,
            themeLightBlueCtaHover = pageObj.elements.themeLightBlueCtaHover.selector,
            themeBlueCta = pageObj.elements.themeBlueCta1.selector,
            themeWhiteCta = pageObj.elements.themeWhiteCta.selector,
            themeLightBlueCta = pageObj.elements.themeLightBlueCta.selector;
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.elements('css selector', '.shelf.horizontal .cta.cta--m a' ,results=>{
               if(results.value.length>0) {

                //sec cta props
        if(branding.getBrand.get() == "lombard/lombard.js"){
            properties = multiple_teaser_article_props.ctaWrapProps('lg');
            callback.multiloop(client, ctaWrapLom , properties, 'lg');
            }
            else{
           
            properties = multiple_teaser_article_props.ctaWrapProps('lg');
            callback.multiloop(client, ctaWrap , properties, 'lg');
            }

            //Blue Theme
            client.elements('css selector',themeBlueCta,results=>{
               if(results.value.length>0) {

                properties = multiple_teaser_article_props.themeBlueCtaProps('lg');  
                callback.multiloop(client, themeBlueCta , properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteCta,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteCtaProps('lg');  
                 callback.multiloop(client, themeWhiteCta , properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueCta,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueCtaProps('lg');  
                 callback.multiloop(client, themeLightBlueCta , properties, 'lg');

                }
            });
            }
            });

        } 
        //cmt from here
        

        if(client.globals.test_settings.isLocal){
            client.elements('css selector', '.shelf.horizontal .cta.cta--m a' ,results=>{
               if(results.value.length>0) {
            //cta hover

            properties = multiple_teaser_article_props.ctaHoverProps('lg');

            targetId = ctaHover;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId]) 
 

            client.moveToElement(ctaHover, 10, 10);
            client.pause(5000);
            callback.singleElem(client, ctaHover, properties, 'lg'); 

            //Blue Theme
            client.elements('css selector',themeBlueCtaHover,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeBlueCtaHoverProps('lg');

            targetId = themeBlueCtaHover;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId]) 
 

            client.moveToElement(themeBlueCtaHover, 10, 10);
            client.pause(5000);
            callback.singleElem(client, themeBlueCtaHover, properties, 'lg');

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteCtaHover,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeWhiteCtaHoverProps('lg');

            targetId = themeWhiteCtaHover;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId]) 
 

            client.moveToElement(themeWhiteCtaHover, 10, 10);
            client.pause(5000);
            callback.singleElem(client, themeWhiteCtaHover, properties, 'lg');

                }
            });

            //light blue Theme
            client.elements('css selector',themeLightBlueCtaHover,results=>{
               if(results.value.length>0) {

                 properties = multiple_teaser_article_props.themeLightBlueCtaHoverProps('lg');

            targetId = themeLightBlueCtaHover;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId]) 
 

            client.moveToElement(themeLightBlueCtaHover, 10, 10);
            client.pause(5000);
            callback.singleElem(client, themeLightBlueCtaHover, properties, 'lg');

                }
            });
           
            
            }
            });

        }
        

    },

    "13.Check for cta properties": function(client) {
         //for new configurations
        ctaWrap = pageObj.elements.ctaWrapVertical.selector,
        ctaWrapLom = pageObj.elements.ctaWrapVerticalLom.selector,
        ctaHover = pageObj.elements.ctaHoverVertical.selector,
        ctaHoverLom = pageObj.elements.ctaHoverVerticalLom.selector,
        themeBlueCtaHover = pageObj.elements.themeBlueCtaHoverVertical.selector,
        themeWhiteCtaHover = pageObj.elements.themeWhiteCtaHoverVertical.selector,
        themeLightBlueCtaHover = pageObj.elements.themeLightBlueCtaHoverVertical.selector,
        themeBlueCta = pageObj.elements.themeBlueCtaVertical.selector,
        themeWhiteCta = pageObj.elements.themeWhiteCtaVertical.selector,
        themeLightBlueCta = pageObj.elements.themeLightBlueCtaVertical.selector;
        themeWhiteCtaHoverNw = pageObj.elements.themeWhiteCtaHoverVerticalNw.selector,
        themeLightBlueCtaHoverNw = pageObj.elements.themeLightBlueCtaHoverVerticalNw.selector,
        
        globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){


      
        client.elements('css selector', '.shelf.horizontal .cta.cta--m a' ,results=>{
           if(results.value.length>0) {

        //sec cta props
        if(branding.getBrand.get() == "lombard/lombard.js"){
        properties = multiple_teaser_article_props.ctaWrapProps('lg');
        callback.multiloop(client, ctaWrapLom , properties, 'lg');
        }
        else{
            properties = multiple_teaser_article_props.ctaWrapProps('lg');
            callback.multiloop(client, ctaWrap , properties, 'lg');

        }    

        //Blue Theme
        client.elements('css selector',themeBlueCta,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeBlueVerCtaProps('lg');  
             callback.multiloop(client, themeBlueCta , properties, 'lg');

            }
        });

        //White Theme
        client.elements('css selector',themeWhiteCta,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeWhiteCtaProps('lg');  
             callback.multiloop(client, themeWhiteCta , properties, 'lg');

            }
        });

        //light blue Theme
       client.elements('css selector',themeLightBlueCta,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeLightBlueCtaProps('lg');  
             callback.multiloop(client, themeLightBlueCta , properties, 'lg');

            }
        });
        }
        });

    } 

    if(client.globals.test_settings.isLocal){
        client.elements('css selector', '.shelf.vertical .cta.cta--m a' ,results=>{
           if(results.value.length>0) {

            if(branding.getBrand.get() == "lombard/lombard.js"){

        //cta hover
        properties = multiple_teaser_article_props.ctaVerHoverProps('lg');
        targetId = ctaHover;
            client
            .pause(2000)
              .execute(function (targetId) {
                document.querySelector(targetId).scrollIntoView();
            }, [targetId]) 

        client.moveToElement(ctaHover, 10, 10);
        client.pause(5000);
        callback.singleElem(client, ctaHoverLom, properties, 'lg'); 
        }
        else{

            //cta hover
            properties = multiple_teaser_article_props.ctaVerHoverProps('lg');
            targetId = ctaHover;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId]) 
     
            client.moveToElement(ctaHover, 10, 10);
            client.pause(5000);
            callback.singleElem(client, ctaHover, properties, 'lg'); 

        }

        //Blue Theme
        client.elements('css selector',themeBlueCtaHover,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeBlueCtaHoverVerProps('lg');

        targetId = themeBlueCtaHover;
            client
            .pause(2000)
              .execute(function (targetId) {
                document.querySelector(targetId).scrollIntoView();
            }, [targetId]) 


        client.moveToElement(themeBlueCtaHover, 10, 10);
        client.pause(5000);
        callback.singleElem(client, themeBlueCtaHover, properties, 'lg');

            }
        });

        //White Theme
        client.elements('css selector',themeWhiteCtaHover,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeWhiteCtaVerHoverProps('lg');

        targetId = themeWhiteCtaHover;
            client
            .pause(2000)
              .execute(function (targetId) {
                document.querySelector(targetId).scrollIntoView();
            }, [targetId]) 


        client.moveToElement(themeWhiteCtaHover, 10, 10);
        client.pause(5000);
        callback.singleElem(client, themeWhiteCtaHover, properties, 'lg');

            }
        });

        //light blue Theme
        client.elements('css selector',themeLightBlueCtaHover,results=>{
           if(results.value.length>0) {

             properties = multiple_teaser_article_props.themeLightBlueCtaVerHoverProps('lg');

        targetId = themeLightBlueCtaHover;
            client
            .pause(2000)
              .execute(function (targetId) {
                document.querySelector(targetId).scrollIntoView();
            }, [targetId]) 


        client.moveToElement(themeLightBlueCtaHover, 10, 10);
        client.pause(5000);
        callback.singleElem(client, themeLightBlueCtaHover, properties, 'lg');

            }
        });
        

        //sec cta mouse down props
  
        client.waitForElementVisible(ctaHover, 6000);
        client.moveToElement(ctaHover,  10,  10);
        client.mouseButtonDown(0);
        client.pause(1000);
        properties = multiple_teaser_article_props.ctaMouseDownProps('lg');
        callback.singleElem(client, ctaHover , properties, 'lg');


        //Blue Theme
        client.elements('css selector',themeBlueCta,results=>{
           if(results.value.length>0) {

            client.waitForElementVisible(themeBlueCtaHover, 6000);
            client.moveToElement(themeBlueCtaHover,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = multiple_teaser_article_props.themeBluectaMouseDownProps('lg');
            callback.singleElem(client, themeBlueCtaHover , properties, 'lg');

            }
        });
        if(branding.getBrand.get() == "natwest-business/natwest_bussiness.js"||branding.getBrand.get() == "natwest-personal/natwest_personal.js"||branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "natwest-markets/natwest_markets.js"){
             //White Theme
        client.elements('css selector',themeWhiteCta,results=>{
            if(results.value.length>0) {
 
             client.waitForElementVisible(themeWhiteCtaHoverNw, 6000);
             client.moveToElement(themeWhiteCtaHoverNw,  10,  10);
             client.mouseButtonDown(0);
             client.pause(1000);
             properties = multiple_teaser_article_props.themeWhitectaMouseDownProps('lg');
             callback.singleElem(client, themeWhiteCtaHoverNw , properties, 'lg');
 
 
             }
         });

        }
        else{
        //White Theme
        client.elements('css selector',themeWhiteCta,results=>{
           if(results.value.length>0) {

            client.waitForElementVisible(themeWhiteCtaHover, 6000);
            client.moveToElement(themeWhiteCtaHover,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = multiple_teaser_article_props.themeWhitectaMouseDownProps('lg');
            callback.singleElem(client, themeWhiteCtaHover , properties, 'lg');


            }
        });
    }
    if(branding.getBrand.get() == "natwest-business/natwest_bussiness.js"||branding.getBrand.get() == "natwest-personal/natwest_personal.js"||branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "natwest-markets/natwest_markets.js"){
         //light blue Theme
         client.elements('css selector',themeLightBlueCta,results=>{
            if(results.value.length>0) {
 
             client.waitForElementVisible(themeLightBlueCtaHoverNw, 6000);
             client.moveToElement(themeLightBlueCtaHoverNw,  10,  10);
             client.mouseButtonDown(0);
             client.pause(1000);
             properties = multiple_teaser_article_props.themeLightBluectaMouseDownProps('lg');
             callback.singleElem(client, themeLightBlueCtaHoverNw , properties, 'lg');
             }
         });
    }
    else{
        //light blue Theme
        client.elements('css selector',themeLightBlueCta,results=>{
           if(results.value.length>0) {

            client.waitForElementVisible(themeLightBlueCtaHover, 6000);
            client.moveToElement(themeLightBlueCtaHover,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = multiple_teaser_article_props.themeLightBluectaMouseDownProps('lg');
            callback.singleElem(client, themeLightBlueCtaHover , properties, 'lg');
            }
        });
    }

                  
        //sec cta icon
        properties = multiple_teaser_article_props.ctaIconProps('lg');
        callback.pseudoSingleElem(client, ctaHover,':after',properties);

        //Check if anchor tags have href attribute
        client.verify.attributeContains('.shelf.horizontal .cta.cta--m a', 'href', '/');
        client.expect.element('.shelf.teaser--3.horizontal .cta.cta--m a').to.have.attribute('href');

        //Check the click functionality
        client.click('.shelf.horizontal .cta.cta--m a');
       
        }
        });

    }

},
   "14.Ending the session":function(client){
        client.end();
    }
    
}

