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
    '@tags': ['mobile', 'video', 'video-mobile'],
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.ULSTER_IE_VIDEO_MOB );
            console.log("--Desktop--"+pageurl.ULSTER_IE_VIDEO_MOB );   
    },

    //Resizes the Browser Window for Mobile Website
    "Resize The Window":function(client){
    var  size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(1000);
        client.refresh();
        client.pause(1000);
    },

    // *** Checks for the First Shelf Properties *** //

    "1. Checks the First Shelf Section": function(client) {
      videoFirstShelf= pageObj.elements.videoFirstShelf.selector,
      videoTranscript= pageObj.elements.videoTranscript.selector,
      videoHeading= pageObj.elements.videoHeading.selector,
      videoPlay= pageObj.elements.videoPlay.selector,
      videoPara= pageObj.elements.videoPara.selector,

      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector',videoFirstShelf,results=>{
          if(results.value.length>0) {
            
            properties = video_props.videoTranscript('xs');  
            callback.multiloop(client, videoTranscript , properties, 'xs');
            properties = video_props.videoPara('xs');  
            callback.multiloop(client, videoPara , properties, 'xs');
            properties = video_props.videoHeading('xs');  
            callback.multiloop(client, videoHeading , properties, 'xs');
            properties = video_props.videoPlay('xs');  
            callback.multiloop(client, videoPlay , properties, 'xs');
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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector', videoCanvasShelf, results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('xs');  
            callback.multiloop(client, videoTranscript , properties, 'xs');
            properties = video_props.videoPara('xs');  
            callback.multiloop(client, videoPara , properties, 'xs');
            properties = video_props.videoHeading('xs');  
            callback.multiloop(client, videoHeading , properties, 'xs');
          }
         
         client.elements('css selector', videoType, results=>{
          if(results.value.length>0) {

            client.waitForElementVisible(videoPlay, 5000);
            client.moveToElement(videoPlay, 3, 3);
            properties = video_props.videoPlay('xs');  
            callback.multiloop(client, videoPlay , properties, 'xs');
            client.mouseButtonDown(0);
            client.pause(5000);
            client.waitForElementVisible(videoPlayFocus, 5000);
            properties = video_props.videoPlayFocus('xs');  
            callback.multiloop(client, videoPlayFocus, properties, 'xs') 

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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector',videoSingleArticle,results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('xs');  
            callback.multiloop(client, videoTranscript , properties, 'xs');
            properties = video_props.videoPara('xs');  
            callback.multiloop(client, videoPara , properties, 'xs');
            properties = video_props.videoHeading('xs');  
            callback.multiloop(client, videoHeading , properties, 'xs');
            //properties = video_props.videoHeadR('xs');  
            // callback.multiloop(client, videoHeadR , properties, 'xs');
            properties = video_props.videoPlay('xs');  
            callback.multiloop(client, videoPlay , properties, 'xs');


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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector',videoMultipleTeaser,results=>{
          if(results.value.length>0) {

            properties = video_props.videoTranscript('xs');  
            callback.multiloop(client, videoTranscript , properties, 'xs');
            properties = video_props.videoPara('xs');  
            callback.multiloop(client, videoPara , properties, 'xs');
            properties = video_props.videoHeading('xs');  
            callback.multiloop(client, videoHeading , properties, 'xs');
            properties = video_props.videoPlay('xs');  
            callback.multiloop(client, videoPlay , properties, 'xs');
           // properties = video_props.videoHeadL('xs');  
            // callback.multiloop(client, videoHeadL , properties, 'xs');


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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
        client.elements('css selector', videoAccordionHeader, accclick);
            function accclick(elems){
              elems.value.forEach(function(element,index) {
              client.pause(4000);              
              client.elementIdClick(element.ELEMENT)      
            });

              client.waitForElementVisible(videoTranscript, 6000);
              properties = video_props.videoTranscript('xs');
              callback.multiloop(client, videoTranscript , properties, 'xs');
              client.waitForElementVisible(videoPara, 6000);
              properties = video_props.videoPara('xs');
              callback.multiloop(client, videoPara , properties, 'xs');
              client.waitForElementVisible(videoHeading, 6000);
              properties = video_props.videoHeading('xs');
              callback.multiloop(client, videoHeading , properties, 'xs');
              client.waitForElementVisible(videoPlay, 6000);
              properties = video_props.videoPlay('xs');
              callback.multiloop(client, videoPlay , properties, 'xs');

            }
          }
        }
        */
      }

              
 
  
    
