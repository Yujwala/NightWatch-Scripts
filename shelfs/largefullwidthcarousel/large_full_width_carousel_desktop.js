var pageurl = require('../../pageurls.js'),
    pageObj,large_full_width_carousel_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.large_full_width_carousel_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    large_full_width_carousel_props = require('./large_full_width_carousel_props.js')(client);  
}

module.exports = {
  '@tags': ['desktop', 'full-width-carousel', 'full-width-carousel-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_COM_FULLWIDTHCAROUSEL);
            client.pause(3000);
    },

    "1 Check for slider wrap properties": function(client) {
            sliderWrap = pageObj.elements.sliderWrap.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = large_full_width_carousel_props.sliderWrapProps('lg');  
            callback.multiloop(client, sliderWrap , properties, 'lg');

          }  

    },

    "2 Check for slider image properties": function(client) {
            sliderImg = pageObj.elements.sliderImg.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = large_full_width_carousel_props.sliderImgProps('lg');  
            callback.multiloop(client, sliderImg , properties, 'lg');

          }  

    },

    "3 Check for slider content properties": function(client) {
            sliderContent = pageObj.elements.sliderContent.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',sliderContent,results=>{
                if(results.value.length>0) { 
                    properties = large_full_width_carousel_props.sliderContentProps('lg');  
                    callback.multiloop(client, sliderContent , properties, 'lg');
                }
            });
           
          }  

    },

    "4 Check for slider content heading properties": function(client) {
            sliderContentHeading = pageObj.elements.sliderContentHeading.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',sliderContentHeading,results=>{
                if(results.value.length>0) { 
                    properties = large_full_width_carousel_props.sliderContentHeadingProps('lg');  
                    callback.multiloop(client, sliderContentHeading , properties, 'lg');
                }
            });
            

          }  

    },

    "5 Check for slider content rte properties": function(client) {
            sliderContentRte = pageObj.elements.sliderContentRte.selector,
            sliderContentRteText = pageObj.elements.sliderContentRteText.selector;
            globalProps(client);

         
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                client.elements('css selector',sliderContentRte,results=>{
                    if(results.value.length>0) { 
                        properties = large_full_width_carousel_props.sliderContentRteProps('lg');  
                        callback.multiloop(client, sliderContentRte , properties, 'lg');

                        properties = large_full_width_carousel_props.sliderContentRteTextProps('lg');  
                         callback.multiloop(client, sliderContentRteText , properties, 'lg');
                    }
                });
            

          }  
    },

    "6 Check for CTA properties": function(client) {
            sliderContentCta = pageObj.elements.sliderContentCta.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',sliderContentCta,results=>{
                if(results.value.length>0) { 
                    properties = large_full_width_carousel_props.sliderContentCtaProps('lg');  
                    callback.multiloop(client, sliderContentCta , properties, 'lg');

                    //cta hover
                    properties = large_full_width_carousel_props.sliderContentCtaHoverProps('lg');
                    client.moveToElement(sliderContentCta, 10, 10);
                    client.pause(10000);
                    callback.singleElem(client, sliderContentCta, properties, 'lg');   

                    //sec cta mouse down props
                    client.waitForElementVisible(sliderContentCta, 6000);
                    client.moveToElement(sliderContentCta,  10,  10);
                    client.mouseButtonDown(0);
                    client.pause(1000);
                    properties = large_full_width_carousel_props.sliderContentCtaMouseDownProps('lg');
                    callback.singleElem(client, sliderContentCta , properties, 'lg');

                    //Check if anchor tags have href attribute
                    client.verify.attributeContains('.cta.cta--branded.cta--l a', 'href', '/');
                }
            });
          }    

    },

    "7 Check for flex prev arrow properties": function(client) {
            flexPrevArrow = pageObj.elements.flexPrevArrow.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.expect.element(flexPrevArrow).to.have.css('background-image').which.contains(brand.props.$prevArrow_Image);
            properties = large_full_width_carousel_props.flexPrevArrowProps('lg');  
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
            client.expect.element(flexPrevArrow).to.have.css('background-image').which.contains(brand.props.$prevArrowHover_Image);
            client.pause(2000);

            //flex prev arrow mouse down props
            client.waitForElementVisible(flexPrevArrow, 6000);
            client.moveToElement(flexPrevArrow,  5,  5);
            client.mouseButtonDown(0);
            client.pause(5000);
            properties = large_full_width_carousel_props.flexPrevArrowMouseDownProps('lg');
            callback.singleElem(client, flexPrevArrow , properties, 'lg');
            client.pause(2000);
            client.mouseButtonUp(0);

          }  

    },

    "8 Check for flex next arrow properties": function(client) {
            flexNextArrow = pageObj.elements.flexNextArrow.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.expect.element(flexNextArrow).to.have.css('background-image').which.contains(brand.props.$nextArrow_Image);
            properties = large_full_width_carousel_props.flexNextArrowProps('lg');  
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
            client.expect.element(flexNextArrow).to.have.css('background-image').which.contains(brand.props.$nextArrowHover_Image);
            client.pause(2000);

            //flex next arrow mouse down props
            client.waitForElementVisible(flexNextArrow, 6000);
            client.moveToElement(flexNextArrow,  5,  5);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = large_full_width_carousel_props.flexPrevArrowMouseDownProps('lg');
            callback.singleElem(client, flexNextArrow , properties, 'lg');
            client.mouseButtonUp(0);

          }  

    },

    "9 Check for flex control nav properties": function(client) {
            flexNav = pageObj.elements.flexNav.selector,
            flexNavLi = pageObj.elements.flexNavLi.selector,
            flexNavLiAnchor = pageObj.elements.flexNavLiAnchor.selector,
            flexNavLiAnchorActive = pageObj.elements.flexNavLiAnchorActive.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = large_full_width_carousel_props.flexNavProps('lg');  
            callback.multiloop(client, flexNav , properties, 'lg');

            properties = large_full_width_carousel_props.flexNavLiProps('lg');  
            callback.multiloop(client, flexNavLi , properties, 'lg');

            properties = large_full_width_carousel_props.flexNavLiAnchorProps('lg');  
            callback.multiloop(client, flexNavLiAnchor , properties, 'lg');

            client.elements('css selector',flexNavLiAnchorActive,results=>{
               if(results.value.length>0) {

                 properties = large_full_width_carousel_props.flexNavLiAnchorActiveProps('lg');  
                 callback.multiloop(client, flexNavLiAnchorActive , properties, 'lg');

                }
            });

            //flex Nav Li mouse down props
            client.waitForElementVisible(flexNavLiAnchor, 6000);
            client.moveToElement(flexNavLiAnchor,  5,  5);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = large_full_width_carousel_props.flexNavLiAnchorMouseDownProps('lg');
            callback.singleElem(client, flexNavLiAnchor , properties, 'lg');
            client.mouseButtonUp(0);

          }  

    },

    "10 Click on both arrows and CTA to check functionality": function(client) {
            flexNextArrow = pageObj.elements.flexNextArrow.selector,
            flexPrevArrow = pageObj.elements.flexPrevArrow.selector;
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            client.click(flexPrevArrow);
            client.pause(1000);
            client.click(flexNextArrow);
            client.pause(1000);
            client.click(sliderContentCta);
            client.pause(2000);
          }  

    },

    "Ending the session":function(client){
        client.end();
    }
    
}