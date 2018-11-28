var video_props,callback,size,rteCallback,
    pageurl = require('../../pageurls.js'),
    pageObj;

function globalProps(client){
    pageObj = client.page.video_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	video_props = require('./video_props.js');
}

module.exports = {
    '@tags': ['desktop', 'video', 'video-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.ULSTER_IE_VIDEO_DESKTOP );
            console.log("--Desktop--"+pageurl.ULSTER_IE_VIDEO_DESKTOP );   
    },

    // *** Checks for the First Shelf Properties *** //

    "1. Checks the First Shelf Section": function(client) {
      videoFirstShelf= pageObj.elements.videoFirstShelf.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      videoPara= pageObj.elements.videoPara.selector,

      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',videoFirstShelf,results=>{
          if(results.value.length>0) {
            
            properties = video_props.videoTranscript('lg');  
            callback.multiloop(client, videoTranscript , properties, 'lg');
            properties = video_props.videoPara('lg');  
            callback.multiloop(client, videoPara , properties, 'lg');
            properties = video_props.videoHeading('lg');  
            callback.multiloop(client, videoHeading , properties, 'lg');
            properties = video_props.videoPlay('lg');  
            callback.multiloop(client, videoPlay , properties, 'lg');
          }
      });}  

      


},

    // *** Checks for the Canvas Shelf Properties *** //

    "2. Checks the Canvas Shelf Sections": function(client) {
      videoCanvasShelf = pageObj.elements.videoCanvasShelf.selector,
      videoType= pageObj.elements.videoType.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      videoPlayFocus= pageObj.elements.videoPlayFocus.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPara= pageObj.elements.videoPara.selector,
      
        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector', videoCanvasShelf, results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('lg');  
            callback.multiloop(client, videoTranscript , properties, 'lg');
            properties = video_props.videoPara('lg');  
            callback.multiloop(client, videoPara , properties, 'lg');
            properties = video_props.videoHeading('lg');  
            callback.multiloop(client, videoHeading , properties, 'lg');
          }
         
         client.elements('css selector', videoType, results=>{
          if(results.value.length>0) {

            client.waitForElementVisible(videoPlay, 5000);
            client.moveToElement(videoPlay, 3, 3);
            properties = video_props.videoPlay('lg');  
            callback.multiloop(client, videoPlay , properties, 'lg');
            client.mouseButtonDown(0);
            client.pause(5000);
            client.waitForElementVisible(videoPlayFocus, 5000);
            properties = video_props.videoPlayFocus('lg');  
            callback.multiloop(client, videoPlayFocus, properties, 'lg') 

          } });
           });
  }  
},

    // *** Checks for the Single Article Properties *** //

    "3. Checks the Single Article Sections": function(client) {
      videoSingleArticle= pageObj.elements.videoSingleArticle.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPara= pageObj.elements.videoPara.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      //videoHeadR= pageObj.elements.videoHeadR.selector,

        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',videoSingleArticle,results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('lg');  
            callback.multiloop(client, videoTranscript , properties, 'lg');
            properties = video_props.videoPara('lg');  
            callback.multiloop(client, videoPara , properties, 'lg');
            properties = video_props.videoHeading('lg');  
            callback.multiloop(client, videoHeading , properties, 'lg');
            //properties = video_props.videoHeadR('lg');  
            //callback.multiloop(client, videoHeadR , properties, 'lg');
            properties = video_props.videoPlay('lg');  
            callback.multiloop(client, videoPlay , properties, 'lg');
          }

        });
}  
},
    // *** Checks for the Multiple Teaser Properties *** //

    "4. Checks the Multiple Teaser Sections": function(client) {
      videoMultipleTeaser= pageObj.elements.videoMultipleTeaser.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPara= pageObj.elements.videoPara.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      //videoHeadL= pageObj.elements.videoHeadL.selector,

        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',videoMultipleTeaser,results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('lg');  
            callback.multiloop(client, videoTranscript , properties, 'lg');
            properties = video_props.videoPara('lg');  
            callback.multiloop(client, videoPara , properties, 'lg');
            properties = video_props.videoHeading('lg');  
            callback.multiloop(client, videoHeading , properties, 'lg');
            properties = video_props.videoPlay('lg');  
            callback.multiloop(client, videoPlay , properties, 'lg');
           // properties = video_props.videoHeadL('lg');  
            // callback.multiloop(client, videoHeadL , properties, 'lg');
          }
          });
  }  
  },
  


    /* Checks for the Accordion Properties 
    "4. Checks the Accordion Sections": function(client) {
      videoAccordionHeader= pageObj.elements.videoAccordionHeader.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPara= pageObj.elements.videoPara.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,

        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector', videoAccordionHeader, accclick);
            function accclick(elems){
              elems.value.forEach(function(element,index) {
              client.pause(4000);              
              client.elementIdClick(element.ELEMENT)      
            });

              client.waitForElementVisible(videoTranscript, 6000);
              properties = video_props.videoTranscript('lg');
              callback.multiloop(client, videoTranscript , properties, 'lg');
              client.waitForElementVisible(videoPara, 6000);
              properties = video_props.videoPara('lg');
              callback.multiloop(client, videoPara , properties, 'lg');
              client.waitForElementVisible(videoHeading, 6000);
              properties = video_props.videoHeading('lg');
              callback.multiloop(client, videoHeading , properties, 'lg');
              client.waitForElementVisible(videoPlay, 6000);
              properties = video_props.videoPlay('lg');
              callback.multiloop(client, videoPlay , properties, 'lg');
            }
          }
        }
        */
      }

              
 
  
    
