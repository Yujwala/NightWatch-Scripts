var pageurl = require('../../pageurls.js'),
    pageObj,carousel_props,callback,size;

function globalProps(client){
    pageObj = client.page.carousel_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    carousel_props = require('./carousel_props.js')(client);   
}

module.exports = {
  '@tags': ['mobile', 'carousel', 'carousel-mobile'],
    //Opening the URL    
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.RBS_PER_CAROUSEL_MOB);
           console.log("--Mobile--"+pageurl.LOM_IE_VIDEOCARAOUSEL_MOBILE);
           
    },
   "1 Check for slider properties": function(client) {
            mobflexslider = pageObj.elements.mobflexslider.selector;
            mobflexsliderWrap = pageObj.elements.mobflexsliderWrap.selector;
            mobflexsliderNav = pageObj.elements.mobflexsliderNav.selector;
            mobflexsliderNavLi = pageObj.elements.mobflexsliderNavLi.selector;
            mobflexsliderNavLiAActive = pageObj.elements.mobflexsliderNavLiAActive.selector;
            mobflexsliderNavLiA = pageObj.elements.mobflexsliderNavLiA.selector;
            mobSliderblockLi = pageObj.elements.mobSliderblockLi.selector;
            mobsliderContentNav = pageObj.elements.mobsliderContentNav.selector,
            mobSliderblockImg = pageObj.elements.mobSliderblockImg.selector;
            mobSliderblock = pageObj.elements.mobSliderblock.selector;
            mobSliderblockContent = pageObj.elements.mobSliderblockContent.selector;
            mobSlidercomprichText= pageObj.elements.mobSlidercomprichText.selector;
            mobSlidercomprichTextLi= pageObj.elements.mobSlidercomprichTextLi.selector;
            mobSliderimageAfter = pageObj.elements.mobSliderimageAfter.selector;
            mobSliderblockContentH4 = pageObj.elements.mobSliderblockContentH4.selector;
            mobSliderblockContentH3 = pageObj.elements.mobSliderblockContentH3.selector;
            mobSliderblockContentH4A = pageObj.elements.mobSliderblockContentH4A.selector;
            mobSliderblockContentP = pageObj.elements.mobSliderblockContentP.selector;
            mobSliderblockContentPsecond = pageObj.elements.mobSliderblockContentPsecond.selector;
            mobSliderblockContentCta = pageObj.elements.mobSliderblockContentCta.selector;
            mobSliderblockContentCtaA = pageObj.elements.mobSliderblockContentCtaA.selector;
            mobSliderblockContentCtaAfter = pageObj.elements.mobSliderblockContentCtaAfter.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                
            client.elements('css selector',mobsliderContentNav,results=>{                
                if(results.value.length>0) { 
                client.source(() => {
                  console.log("mobflexslider properties");
                });
                

                properties = carousel_props.mobflexslider('xs');  
                callback.singleElem(client, mobflexslider , properties, 'xs'); 
                client.source(() => {
                console.log("mobflexslider wraper properties");
                });
                properties = carousel_props.mobflexsliderWrap('xs');  
                callback.singleElem(client, mobflexsliderWrap , properties, 'xs');
                client.source(() => {
                console.log("mobflexslider navigation properties");
                });
                properties = carousel_props.mobflexsliderNav('xs');  
                callback.singleElem(client, mobflexsliderNav , properties, 'xs');   
                client.source(() => {
                console.log("mobflexslider navigation li properties");
                });
                properties = carousel_props.mobflexsliderNavLi('xs');  
                callback.multiloop(client, mobflexsliderNavLi , properties, 'xs');
                client.source(() => {
                console.log("mobSlidercomprichText properties");
                });
                properties = carousel_props.mobSlidercomprichText('xs');  
                callback.multiloop(client, mobSlidercomprichText , properties, 'xs');   
                client.source(() => {
                console.log("mobSlidercomprichTextLi properties");
                });
                properties = carousel_props.mobSlidercomprichTextLi('xs');  
                callback.multiloop(client, mobSlidercomprichTextLi , properties, 'xs');    
                client.source(() => {
                console.log("mobflexslider Nav Li Active properties");
                });
                properties = carousel_props.mobflexsliderNavLiAActive('xs');  
                callback.singleElem(client, mobflexsliderNavLiAActive , properties, 'xs'); 
                client.source(() => {
                console.log("mobflexslider Nav Li anchor properties");
                });
                properties = carousel_props.mobflexsliderNavLiA('xs');  
                callback.multiloop(client, mobflexsliderNavLiA , properties, 'xs');   
                client.source(() => {
                console.log("mobSliderblock Li properties");
                });
                properties = carousel_props.mobSliderblockLi('xs');  
                callback.multiloop(client, mobSliderblockLi , properties, 'xs'); 
                client.source(() => {
                console.log("mobSliderblock properties");  
                });
                properties = carousel_props.mobSliderblock('xs');  
                callback.multiloop(client, mobSliderblock , properties, 'xs');  

                client.source(() => {
                console.log("mobSliderImageAfter properties");  
                });
                properties = carousel_props.mobSliderimageAfter('xs');  
                callback.multiloop(client, mobSliderimageAfter , properties, 'xs');   

                client.source(() => {
                console.log("mobSliderblock Image properties");  
                });
                properties = carousel_props.mobSliderblockImg('xs');  
                callback.multiloop(client, mobSliderblockImg , properties, 'xs'); 
                client.source(() => {
                console.log("mobSliderblock content properties");
                });
                properties = carousel_props.mobSliderblockContent('xs');  
                callback.multiloop(client, mobSliderblockContent , properties, 'xs'); 
                client.source(() => {
                console.log("mobSliderblock content H4 properties");
                });
                properties = carousel_props.mobSliderblockContentH4('xs');  
                callback.multiloop(client, mobSliderblockContentH4 , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content H3 properties");
                });
                properties = carousel_props.mobSliderblockContentH3('xs');  
                callback.multiloop(client, mobSliderblockContentH3 , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content H4 anchor properties");
                });
                properties = carousel_props.mobSliderblockContentH4A('xs');  
                callback.multiloop(client, mobSliderblockContentH4A , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content Para properties");
                });
                properties = carousel_props.mobSliderblockContentP('xs');  
                callback.multiloop(client, mobSliderblockContentP , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content Para second properties");
                });
                properties = carousel_props.mobSliderblockContentPsecond('xs');  
                callback.multiloop(client, mobSliderblockContentPsecond , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content cta properties");
                });
                properties = carousel_props.mobSliderblockContentCta('xs');  
                callback.multiloop(client, mobSliderblockContentCta , properties, 'xs');
                client.source(() => {
                console.log("mobSliderblock content cta anchor properties");
                });
                properties = carousel_props.mobSliderblockContentCtaA('xs');  
                callback.multiloop(client, mobSliderblockContentCtaA , properties, 'xs');  
                client.source(() => {
                console.log("mobSliderblock content cta anchor after properties");
                });
                properties = carousel_props.mobSliderblockContentCtaAfter('xs');  
                callback.multiloop(client, mobSliderblockContentCtaAfter , properties, 'xs');              
            }
            });
          }  

    },

    "2 Click on navigation and CTA to check functionality": function(client) {
            mobsliderContent = pageObj.elements.mobsliderContent.selector,
            mobSliderblockContentCtaA = pageObj.elements.mobSliderblockContentCtaA.selector,
            mobsliderContentNav = pageObj.elements.mobsliderContentNav.selector,
            mobflexsliderNavLiAActive = pageObj.elements.mobflexsliderNavLiAActive.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(mobsliderContent);
            client.source(() => {
                  console.log("content clicked"); 
            });
            client.pause(2000);
            
            client.elements('css selector',mobsliderContentNav,results=>{                
                if(results.value.length>0) { 
                    for(var i=0;i<results.value.length;i++){
                        client.keys("\ue014", function(done) {
                            console.log("carousel clicked");
                            client.expect.element(mobflexsliderNav).to.have.css('display').which.contains("block"); 
                            client.pause(2000);
                        });
                    } 
                }
            });

            client.pause(2000);
            client.click(mobSliderblockContentCtaA);
            client.source(() => {
                  console.log("cta clicked"); 
            });
            client.pause(2000);


          }  

    },
/*

    //Checks for the Video Carousel Properties
    "10. Checks the Video Carousel Section": function(client) {
        flexSlider= pageObj.elements.flexSlider.selector,
        video= pageObj.elements.video.selector,
        videoPlay= pageObj.elements.videoPlay.selector,
        videoPlayFocus= pageObj.elements.videoPlayFocus.selector,
        videoClose= pageObj.elements.videoClose.selector,
        videoTranscript= pageObj.elements.videoTranscript.selector,
        videoHeading= pageObj.elements.videoHeading.selector,
        flexSliderNext= pageObj.elements.flexSliderNext.selector,
  
        globalProps(client);
  
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
  
          client.elements('css selector',flexSlider,results=>{
            if(results.value.length>0) {
  
              client.waitForElementVisible(video, 5000);
              properties = carousel_props.video('xs');  
              callback.multiloop(client, video , properties, 'xs');
              client.moveToElement(video, 10, 10);
              client.click(video)
              client.pause(5000)
              client.waitForElementVisible(videoPlay, 3000);
              client.moveToElement(videoPlay, 3, 3);
              properties = carousel_props.videoPlay('xs');
              callback.multiloop(client, videoPlay , properties, 'xs');
              properties = carousel_props.videoTranscript('xs');              
              callback.multiloop(client, videoTranscript , properties, 'xs');
              properties = carousel_props.videoHeading('xs');                
              callback.multiloop(client, videoHeading , properties, 'xs');
              client.mouseButtonDown(0);
              client.pause(5000);
              client.waitForElementVisible(videoPlayFocus, 5000);
              properties = carousel_props.videoPlayFocus('xs');  
              callback.multiloop(client, videoPlayFocus, properties, 'xs') 
              properties = carousel_props.videoClose('xs');  
              callback.multiloop(client, videoClose , properties, 'xs');
              client.moveToElement(videoClose, 3, 3);
              client.mouseButtonDown(0);
  
  
            }
        });}  
  
},

*/
    "Ending the session":function(client){
        client.end();
    }
    
}