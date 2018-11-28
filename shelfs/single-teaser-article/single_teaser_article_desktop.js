var pageurl = require('../../pageurls.js'),
    pageObj,single_teaser_article_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.single_teaser_article_selectors();
    callback = client.page.common();
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    single_teaser_article_props = require('./single_teaser_article_props.js')(client);  
}

module.exports = {
  '@tags': ['single-teaser-article','desktop','single-teaser-article-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.NW_BUS_SINGLE_TEASER_ARTICLE); 
            
    },
    "1 Check for shelf padding": function(client) {
            singleArticleShelf = pageObj.elements.singleArticleShelf.selector,
            themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            themeLightBlue = pageObj.elements.themeLightBlue.selector,
            articlePadding = pageObj.elements.articlePadding.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = single_teaser_article_props.themeBlueShelf('lg');  
                 callback.multiloop(client, themeBlueShelf , properties, 'lg');
                 client.source(() => {
                  console.log("Blue Theme"); 
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
                  console.log("Light Blue Theme"); 
                });

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = single_teaser_article_props.themeWhiteShelf('lg');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'lg');
                 client.source(() => {
                  console.log("White Theme");
                }); 
                }
            });

            //shelf padding
            properties = single_teaser_article_props.marProps('lg');  
            callback.multiloop(client, singleArticleShelf , properties, 'lg');

            //aricle content padding left
            properties = single_teaser_article_props.imgPadding('lg');  
            callback.multiloop(client, articlePadding , properties, 'lg');
  
          }  

    },

    "2 Check for title wrapper props": function(client) {
            titTextCls = pageObj.elements.titTextSel.selector,
            titMargin = pageObj.elements.titMargin.selector,
            globalProps(client);
            client.maximizeWindow();
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for font-size,line-height,font-family and font-color of title
            properties = single_teaser_article_props.titlecomp('lg');
            callback.multiloop(client, titTextCls , properties, 'lg');
             //check for margin-bottom  of title
            properties = single_teaser_article_props.titMargin('lg');
            callback.multiloop(client, titMargin , properties, 'lg');
            }
    },

    "3 Check for rte wrapper props": function(client) {
            rteSel = pageObj.elements.rteSel.selector,
            rteText = pageObj.elements.rteText.selector,
            rteTextChild = pageObj.elements.rteTextChild.selector,
            rteIncidentMesSel = pageObj.elements.rteIncidentMesSel.selector,
            globalProps(client);         

           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for font-size, line-height and font-color of rte text
            properties = single_teaser_article_props.rteBodyCust('lg');
            callback.multiloop(client, rteText , properties, 'lg');

            //check for padding of rte text
            properties = single_teaser_article_props.rteTextChild('lg');
            callback.multiloop(client, rteTextChild , properties, 'lg');

            properties = single_teaser_article_props.rteIncidentMesSelCls('lg');
            callback.multiloop(client, rteIncidentMesSel , properties, 'lg');
           }
        
    }, 
    
    "4 Check for img width and height": function(client) {
            imgWrapCls = pageObj.elements.imgWrap.selector,
            imgPadding = pageObj.elements.imgPadding.selector,
            videoheading = pageObj.elements.videoheading.selector,
            videoplaythemeWhitebutton = pageObj.elements.videoplaythemeWhitebutton.selector,
            videoplaythemebluebutton = pageObj.elements.videoplaythemebluebutton.selector,
            playbuttonfoucus= pageObj.elements.playbuttonfoucus.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //image height and width
            properties = single_teaser_article_props.imgWrapProps('lg');
            callback.singleElem(client, imgWrapCls , properties, 'lg');

            //image padding left
            properties = single_teaser_article_props.imgPadding('lg');
            callback.multiloop(client, imgPadding , properties, 'lg');

            //video heading for theme white
            properties = single_teaser_article_props.videoheading('lg');
            callback.multiloop(client, videoheading , properties, 'lg');

            //video icon for theme white
            properties = single_teaser_article_props.videoplaybutton('lg');
            callback.multiloop(client, videoplaythemeWhitebutton , properties, 'lg');

            //video icon for theme blue
            properties = single_teaser_article_props.videoplaybuttonbluetheme('lg');
            callback.multiloop(client, videoplaythemebluebutton , properties, 'lg');

            //video button focus
            client.elements('css selector',".shelf.single-article.theme--blue",results=>{
               if(results.value.length>0) {

            client.moveToElement(".shelf.single-article.theme--blue .video__controls a",3,3);
            client.mouseButtonDown(".shelf.single-article.theme--blue .video__controls a");
            client.pause(2000);
            client.waitForElementVisible(playbuttonfoucus,2000);
            client.pause(1000);
            properties = single_teaser_article_props.playbuttonfocus('lg');
            callback.singleElem(client, playbuttonfoucus , properties, 'lg');
        }
    })
}
    },

    "5 Check for secondary cta properties": function(client) {
            ctaSec = pageObj.elements.ctaSecondary.selector,
            ctaIcon = pageObj.elements.ctaIcon.selector,
            ctahref = pageObj.elements.ctahref.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //sec cta props
            properties = single_teaser_article_props.ctaSarticle('lg');
            callback.multiloop(client, ctaSec , properties, 'lg');

        } 

        if(client.globals.test_settings.isLocal){
           //href

           client.elements('css selector',ctahref,results=>{
               if(results.value.length>0) {
                client.expect.element(ctahref).to.have.attribute('href'); 
                }
            });
            client.elements('css selector',ctaSec,results=>{
               if(results.value.length>0) {
                client.expect.element(ctaSec).to.have.attribute('href'); 

            //cta hover
            properties = single_teaser_article_props.ctaSarticleHover('lg');
            client.moveToElement(ctaSec, 10, 10);
            client.pause(10000);
            callback.singleElem(client, ctaSec, properties, 'lg'); 

            //sec cta mouse down props
            client.waitForElementVisible(ctaSec, 6000);
            client.moveToElement(ctaSec,  1,  1);
            client.mouseButtonDown(0);
            client.pause(1000);

            if(brand.props.$brandName=="natwest-business"){
                //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {
                properties = single_teaser_article_props.ctaSarticleMouseDownBlue('lg');
                callback.multiloop(client, ctaIcon , properties, 'lg'); 
                }
                else{
                properties = single_teaser_article_props.ctaSarticleMouseDown('lg');
                callback.multiloop(client, ctaIcon , properties, 'lg');
                }
            });
                                
            }
            else{
            properties = single_teaser_article_props.ctaSarticleMouseDown('lg');
            callback.multiloop(client, ctaIcon , properties, 'lg');
            }

            //sec cta icon
            properties = single_teaser_article_props.ctaIcon('lg');
            callback.pseudoSingleElem(client, ctaSec,':after',properties);
             }

            });

        } 
    },

    "Ending the session":function(client){
        client.end();
    }
    
}


