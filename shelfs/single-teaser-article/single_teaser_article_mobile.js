var pageurl = require('../../pageurls.js'),
    pageObj,single_teaser_article_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.single_teaser_article_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    single_teaser_article_props = require('./single_teaser_article_props.js')(client);   
}

module.exports = {
  '@tags': ['single-teaser-article','mobile','single-teaser-article-mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.NW_BUS_SINGLE_TEASER_ARTICLE_MOB);
           console.log("--Mobile--"+pageurl.ULSTER_IE_PER_SINGLE_TEASER_ARTICLE_MOB);  
    },

  "1 Mobile-Check for shelf padding": function(client) {
            singleArticleShelf = pageObj.elements.singleArticleShelf.selector,
            themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            themeLightBlue = pageObj.elements.themeLightBlue.selector,
            articlePaddingMobile = pageObj.elements.articlePaddingMobile.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = single_teaser_article_props.themeBlueMobile('xs');  
                 callback.multiloop(client, themeBlueShelf , properties, 'xs');
                 client.source(() => {
                  console.log("Blue Theme"); 
                }); 

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = single_teaser_article_props.themeWhiteShelf('xs');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'xs');
                 client.source(() => {
                  console.log("Light Blue Theme"); 
                });

                }
            });

            //Light Blue Theme
            client.elements('css selector',themeLightBlue,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = single_teaser_article_props.themeLightBlue('lg');  
                 callback.multiloop(client, themeLightBlue , properties, 'lg');
                client.source(() => {
                  console.log("White Theme");
                });
                }
            });

            //shelf padding
            properties = single_teaser_article_props.marPropsMobile('xs');  
            callback.multiloop(client, singleArticleShelf , properties, 'xs');

            //aricle content padding left
            properties = single_teaser_article_props.imgPaddingMobile('xs');  
            callback.multiloop(client, articlePaddingMobile , properties, 'xs');
  
          } 

    },

    "2 Mobile-Check for title wrapper props": function(client) {
            titTextCls = pageObj.elements.titTextSel.selector,
            globalProps(client);

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height,font-family and font-color of title
            properties = single_teaser_article_props.titlecompMobile('xs');
            callback.multiloop(client, titTextCls , properties, 'xs');
            }
    },

    "3 Mobile-Check for rte wrapper props": function(client) {
            rteSel = pageObj.elements.rteSel.selector,
            rteText = pageObj.elements.rteText.selector,
            rteTextChild = pageObj.elements.rteTextChild.selector,
            rteTextBlue = pageObj.elements.rteTextBlue.selector,
            rteTextWhite = pageObj.elements.rteTextWhite.selector,
            rteTextLight = pageObj.elements.rteTextLight.selector,
            rteIncidentMesSel = pageObj.elements.rteIncidentMesSel.selector,
            globalProps(client);          
        
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height and font-color of rte text
            //Blue Theme
            client.elements('css selector',rteTextBlue,results=>{
               if(results.value.length>0) {

                 properties = single_teaser_article_props.rteBodyCustMobileBlue('xs');
                 callback.multiloop(client, rteTextBlue , properties, 'xs');
                 client.source(() => {
                  console.log("1"); 
                });

                }
            });

            //Light Blue Theme
            client.elements('css selector',rteTextLight,results=>{
               if(results.value.length>0) {

                properties = single_teaser_article_props.rteBodyCustMobileLight('xs');
                callback.multiloop(client, rteTextLight , properties, 'xs');
                     client.source(() => {
                  console.log("2"); 
                });
                }
            });

            //White Theme
            client.elements('css selector',rteTextWhite,results=>{
               if(results.value.length>0) {

                properties = single_teaser_article_props.rteBodyCustMobileWhite('xs');
                callback.multiloop(client, rteTextWhite , properties, 'xs');
                client.source(() => {
                  console.log("3"); 
                });
                }
            });
            
            properties = single_teaser_article_props.rteIncidentMesMobileCls('lg');
            callback.multiloop(client, rteIncidentMesSel , properties, 'lg');
            //check for padding of rte text
            properties = single_teaser_article_props.rteTextChildMobile('xs');
            callback.multiloop(client, rteTextChild , properties, 'xs');
            }
    },

    "4 Mobile-Check for secondary cta properties": function(client) {
            ctaSec = pageObj.elements.ctaSecondary.selector,
            ctaIcon = pageObj.elements.ctaIcon.selector,
            ctahref = pageObj.elements.ctahref.selector,
            ctaSarticlePaddingMobile = pageObj.elements.ctaSarticlePaddingMobile.selector,
            
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
              
            //href
            client.elements('css selector',ctahref,results=>{
               if(results.value.length>0) {
                 client.expect.element(ctahref).to.have.attribute('href');
                }
            }); 

            client.elements('css selector',ctaSec,results=>{
               if(results.value.length>0) {    
            //cta padding
            properties = single_teaser_article_props.ctaSarticlePaddingMobile('xs');
            callback.multiloop(client, ctaSarticlePaddingMobile , properties, 'xs');
 client.source(() => {
                  console.log("10"); 
                });
            //cta props
            properties = single_teaser_article_props.ctaSarticleMobile('xs');
            callback.multiloop(client, ctaSec , properties, 'xs');
            client.source(() => {
                  console.log("11"); 
                });

            if(client.globals.test_settings.isLocal){

            //cta hover
            properties = single_teaser_article_props.ctaSarticleHoverM('xs');
            client.moveToElement(ctaSec, 10, 10);
            client.pause(10000);
            callback.singleElem(client, ctaSec, properties, 'xs');    
            client.source(() => {
                  console.log("12"); 
                });
            //sec cta mouse down props
            client.waitForElementVisible(ctaSec, 6000);
            client.moveToElement(ctaSec,  0,  0);
            client.mouseButtonDown(0);
            client.pause(1000);
            if(brand.props.$brandName=="natwest-business"){
                //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {
                properties = single_teaser_article_props.ctaSarticleMouseDownMobileBlue('xs');
                callback.multiloop(client, ctaIcon , properties, 'xs');
                client.source(() => {
                  console.log("13"); 
                }); 
                }
                else{
                properties = single_teaser_article_props.ctaSarticleMobileMouseDown('xs');
            callback.multiloop(client, ctaIcon , properties, 'xs');
            client.source(() => {
                  console.log("14"); 
                }); 
                }
            });
                                
            }
            else{
            properties = single_teaser_article_props.ctaSarticleMobileMouseDown('xs');
            callback.multiloop(client, ctaIcon , properties, 'xs');
            }
            
 
            }

            //sec cta icon
            properties = single_teaser_article_props.ctaIcon('xs');
            callback.pseudoSingleElem(client, ctaSec,':after',properties);
            client.source(() => {
                  console.log("15"); 
                }); 
             }
        }); 

           }
          
    },

    "Ending the session":function(client){
        client.end();
    }
    
}


