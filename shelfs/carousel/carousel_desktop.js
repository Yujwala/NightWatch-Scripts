var pageurl = require('../../pageurls.js'),
    pageObj,carousel_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.carousel_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;   
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    carousel_props = require('./carousel_props.js')(client);
}

module.exports = {
  '@tags': ['desktop', 'carousel', 'carousel-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_CAROUSEL);
            console.log("--Desktop--"+pageurl.ULSTER_COUK_VIDEOCARAOUSEL_DESKTOP); 
            client.pause(25000);
    },

   "1 Check for slider wrap properties": function(client) {
            sliderWrap = pageObj.elements.sliderWrap.selector;
            nonHomesliderWrap = pageObj.elements.nonHomesliderWrap.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            if(brand.props.$brandName=="lombard"){
                properties = carousel_props.nonHomesliderWrap('lg');  
                callback.multiloop(client, nonHomesliderWrap , properties, 'lg'); 

                properties = carousel_props.nonHomeslider('lg');  
                callback.multiloop(client, sliderWrap , properties, 'lg');                   
            }
            else{
                properties = carousel_props.sliderWrap('lg');  
                callback.multiloop(client, sliderWrap , properties, 'lg');

            }
           
          }  

    },

    "2 Check for slider image properties": function(client) {
            sliderImg = pageObj.elements.sliderImg.selector;
            sliderImgMargin = pageObj.elements.sliderImgMargin.selector;
            
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = carousel_props.sliderImg('lg');  
            callback.multiloop(client, sliderImg , properties, 'lg');
            
            //margins
            properties = carousel_props.sliderImgMargin('lg');  
            callback.multiloop(client, sliderImgMargin , properties, 'lg');

          }  

    },

    "3 Check for slider content heading,para properties": function(client) {
            sliderRteH4 = pageObj.elements.sliderRteH4.selector;
            sliderRteH3 = pageObj.elements.sliderRteH3.selector;
            sliderRteP = pageObj.elements.sliderRteP.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.elements('css selector',sliderRteH4,results=>{
               if(results.value.length>0) {
                //rte h4
                properties = carousel_props.sliderRteHeading('lg');  
                callback.multiloop(client, sliderRteH4 , properties, 'lg');
                }
            });

            client.elements('css selector',sliderRteH3,results=>{
               if(results.value.length>0) {
                //rte h3
                properties = carousel_props.sliderRteHeadingH3('lg');  
                callback.multiloop(client, sliderRteH3 , properties, 'lg');
                }
            });

            //rte para
            properties = carousel_props.sliderRteP('lg');  
            callback.multiloop(client, sliderRteP , properties, 'lg');

          }  

    },

    "4 Check for slider content lsit items properties": function(client) {
            rteUlLi = pageObj.elements.rteUlLi.selector;
            flexSliderli = pageObj.elements.flexSliderli.selector;
            flexSliderliLastChild = pageObj.elements.flexSliderliLastChild.selector; 
            
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.elements('css selector',rteUlLi,results=>{

               if(results.value.length>0) {

                //rte ul li
                properties = carousel_props.rteUlLi('lg');  
                callback.multiloop(client, rteUlLi , properties, 'lg');
                client.expect.element(rteUlLi).to.have.css('background-image').which.contains(brand.props.$listIcon);  
                }
                properties = carousel_props.flexSliderli('lg');  
                callback.multiloop(client, flexSliderli , properties, 'lg');

                properties = carousel_props.flexSliderliLastChild('lg');  
                callback.multiloop(client, flexSliderliLastChild , properties, 'lg');
                 
                
            });
            
          }  

    },

    "5 Check for CTA properties": function(client) {
            sliderCta_m = pageObj.elements.sliderCta_m.selector;
            sliderCta_m_a = pageObj.elements.sliderCta_m_a.selector;
            sliderRteP = pageObj.elements.sliderRteP.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //slider cta
            properties = carousel_props.sliderCta_m('lg');  
            callback.multiloop(client, sliderCta_m , properties, 'lg');

            properties = carousel_props.sliderCta_m_a('lg');  
            callback.multiloop(client, sliderCta_m_a , properties, 'lg');
            
            
            //cta hover
            properties = carousel_props.ctaHoverProps('lg');
            client.moveToElement(sliderCta_m_a, 10, 10);
            client.pause(10000);
            client.source(() => {
                  console.log("--cta hover--"); 
            }); 
            callback.singleElem(client, sliderCta_m_a, properties, 'lg'); 

            //sec cta mouse down props
            client.waitForElementVisible(sliderCta_m_a, 6000);
            client.moveToElement(sliderCta_m_a,  10,  10);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = carousel_props.ctaMouseDownProps('lg');
            client.source(() => {
                  console.log("--cta mouse down--"); 
            });
            callback.singleElem(client, sliderCta_m_a , properties, 'lg');

            //Check if anchor tags have href attribute
            client.verify.attributeContains('.flex-active-slide .js-clickable-area .cta.cta--branded.cta--m a', 'href', '/');
            client.click(sliderRteP);
          }         

    },
    
    "6 Check for flex prev arrow properties": function(client) {
            flexPrevArrow = pageObj.elements.flexPrevArrow.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.expect.element(flexPrevArrow).to.have.css('background-image').which.contains(brand.props.$prevArrowImage);
            client.expect.element(flexPrevArrow).to.have.css('background-position-x').which.contains(brand.props.$prevBackgroundPositionx);
            client.expect.element(flexPrevArrow).to.have.css('background-position-y').which.contains(brand.props.$prevBackgroundPositiony);


            properties = carousel_props.flexPrevArrow('lg');  
            callback.multiloop(client, flexPrevArrow , properties, 'lg');

            //flex prev arrow hover
            targetId = flexPrevArrow;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId])
            client.moveToElement(flexPrevArrow, 5, 5);
            client.pause(10000);
            client.source(() => {
                  console.log("--flex prev arrow hover--"); 
            }); 
            client.expect.element(flexPrevArrow).to.have.css('background-image').which.contains(brand.props.$prevArrowHoverImage);
            client.expect.element(flexPrevArrow).to.have.css('background-position-x').which.contains(brand.props.$prevBackgroundPositionxhover);
            client.expect.element(flexPrevArrow).to.have.css('background-position-y').which.contains(brand.props.$prevBackgroundPositionyhover);
            client.pause(2000);

            //flex prev arrow mouse down props
            client.waitForElementVisible(flexPrevArrow, 6000);
            client.moveToElement(flexPrevArrow,  5,  5);
            client.mouseButtonDown(0);
            client.pause(5000);
            properties = carousel_props.flexPrevArrowMouseDown('lg');
            client.source(() => {
                  console.log("--flex prev arrow mouse down--"); 
            }); 
            callback.singleElem(client, flexPrevArrow , properties, 'lg');
            client.pause(2000);
            client.mouseButtonUp(0);

          }  

    },

    "7 Check for flex next arrow properties": function(client) {
            flexNextArrow = pageObj.elements.flexNextArrow.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.expect.element(flexNextArrow).to.have.css('background-image').which.contains(brand.props.$nextArrowImage);
            client.expect.element(flexNextArrow).to.have.css('background-position-x').which.contains(brand.props.$nextBackgroundPositionx);
            client.expect.element(flexNextArrow).to.have.css('background-position-y').which.contains(brand.props.$nextBackgroundPositiony);
            properties = carousel_props.flexNextArrow('lg');  
            callback.multiloop(client, flexNextArrow , properties, 'lg');

            targetId = flexNextArrow;
                client
                .pause(2000)
                  .execute(function (targetId) {
                    document.querySelector(targetId).scrollIntoView();
                }, [targetId])
            //flex next arrow hover
            client.moveToElement(flexNextArrow, 5, 5);
            client.pause(10000);
            client.source(() => {
                  console.log("--flex next arrow hover--"); 
            });
            client.expect.element(flexNextArrow).to.have.css('background-image').which.contains(brand.props.$nextArrowHoverImage);
            client.expect.element(flexNextArrow).to.have.css('background-position-x').which.contains(brand.props.$nextBackgroundPositionxhover);
            client.expect.element(flexNextArrow).to.have.css('background-position-y').which.contains(brand.props.$nextBackgroundPositionyhover);
            client.pause(2000);

            //flex next arrow mouse down props
            client.waitForElementVisible(flexNextArrow, 6000);
            client.moveToElement(flexNextArrow,  5,  5);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = carousel_props.flexPrevArrowMouseDown('lg');
            client.source(() => {
                  console.log("--flex next arrow mouse down--"); 
            });
            callback.singleElem(client, flexNextArrow , properties, 'lg');
            client.mouseButtonUp(0);

          }  

    },

    "8 Check for flex control nav properties": function(client) {
            flexNav = pageObj.elements.flexNav.selector,
            flexNavLi = pageObj.elements.flexNavLi.selector,
            flexNavLiAnchor = pageObj.elements.flexNavLiAnchor.selector,
            flexNavLiAnchorActive = pageObj.elements.flexNavLiAnchorActive.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = carousel_props.flexNav('lg');  
            callback.singleElem(client, flexNav , properties, 'lg');

            properties = carousel_props.flexNavLi('lg');  
            callback.multiloop(client, flexNavLi , properties, 'lg');

            properties = carousel_props.flexNavLiAnchor('lg');  
            callback.multiloop(client, flexNavLiAnchor , properties, 'lg');

            properties = carousel_props.flexNavLiAnchorActive('lg');  
            callback.multiloop(client, flexNavLiAnchorActive , properties, 'lg');

            //flex Nav Li mouse down props
            client.waitForElementVisible(flexNavLiAnchor, 6000);
            client.moveToElement(flexNavLiAnchor,  5,  5);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = carousel_props.flexNavLiAnchorMouseDown('lg');
            client.source(() => {
                  console.log("--flex Nav Li mouse down--"); 
            });
            callback.singleElem(client, flexNavLiAnchor , properties, 'lg');
            client.mouseButtonUp(0);

          }  

    },

    "9 Click on both arrow, navigation dots and CTA to check functionality": function(client) {
            flexNextArrow = pageObj.elements.flexNextArrow.selector,
            flexNavLiAnchor = pageObj.elements.flexNavLiAnchor.selector,
            flexPrevArrow = pageObj.elements.flexPrevArrow.selector,
            sliderCta_m_a = pageObj.elements.sliderCta_m_a.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(flexPrevArrow);
            client.source(() => {
                  console.log("Left Arrow clicked"); 
            });
            client.pause(1000);
            client.click(flexNextArrow);
            client.source(() => {
                  console.log("Reft Arrow clicked"); 
            });
            client.pause(1000);
            client.click(flexNavLiAnchor);
            client.source(() => {
                  console.log("Navigation flex clicked"); 
            });
            client.pause(2000);
            client.click(sliderCta_m_a);
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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',flexSlider,results=>{
          if(results.value.length>0) {

            client.waitForElementVisible(video, 5000);
            properties = carousel_props.video('lg');  
            callback.multiloop(client, video , properties, 'lg');
            client.moveToElement(video, 10, 10);
            client.click(video)
            client.pause(5000)
            client.waitForElementVisible(videoPlay, 3000);
            client.moveToElement(videoPlay, 3, 3);
            properties = carousel_props.videoPlay('lg');
            callback.multiloop(client, videoPlay , properties, 'lg');
            properties = carousel_props.videoTranscript('lg');              
            callback.multiloop(client, videoTranscript , properties, 'lg');
            properties = carousel_props.videoHeading('lg');                
            callback.multiloop(client, videoHeading , properties, 'lg');
            client.mouseButtonDown(0);
            client.pause(5000);
            client.waitForElementVisible(videoPlayFocus, 5000);
            properties = carousel_props.videoPlayFocus('lg');  
            callback.multiloop(client, videoPlayFocus, properties, 'lg') 
            properties = carousel_props.videoClose('lg');  
            callback.multiloop(client, videoClose , properties, 'lg');
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