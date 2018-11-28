var pageurl = require('../../pageurls.js'),
    pageObj,accordion_props,callback,size;

function globalProps(client){
    pageObj = client.page.accordion_composite_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    accordion_props = require('./accordion_props.js')(client);  
}

module.exports = {
'@tags': ['accordion-composite','mobile','accordion-composite-mobile'],

//Resize the window for mobile
"Resize The Window":function(client){
    var  size = client.globals.size.widths;
         client.resizeWindow(size['xs'].width, size['xs'].height);
         client.pause(5000);
  },

//Opening the Mobile URL
    "1. Opening the Mobile URL": function(client) {
            globalProps(client);
            client.openURL(client,pageurl.ULSTER_WSC_ACC_COMP_MOB);
            client.pause(5000);  
    },
   
    //Check for main shelf padding for mobile
   "2. Check for shelf padding for mobile": function(client) {
            globalProps(client);
           var shelfCls = pageObj.elements.shelfCls.selector,
           shelfInner = pageObj.elements.shelfInner.selector,
           themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
           themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;
            callback.scrollToElement(client,shelfCls); 
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {
                 //shelf bg color
                 properties = accordion_props.themeBlueShelf('xs');  
                 callback.multiloop(client, themeBlueShelf , properties, 'xs');
                }
            });
            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {
                 //shelf bg color
                 properties = accordion_props.themeWhiteShelf('xs');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'xs');

                }
            });
            
            properties = accordion_props.shelfClsProps('xs');  
            callback.multiloop(client, shelfCls , properties, 'xs');

            properties = accordion_props.shelfInnerProps('xs');  
            callback.multiloop(client, shelfInner , properties, 'xs');                  
        }   
    },

    //Check for title wrapper and title props for mobile
    "3. Check for title wrapper and title props for mobile": function(client) {
            globalProps(client);
           var titleWrap = pageObj.elements.titleWrap.selector,
           titleSub = pageObj.elements.titleSub.selector,
            titleCls = pageObj.elements.titleCls.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for title wrapper properties
            properties = accordion_props.titleWrapProps('xs');
            callback.multiloop(client, titleWrap , properties, 'xs');

            //check for properties of title
            properties = accordion_props.titleClsProps('xs');
            callback.multiloop(client, titleCls , properties, 'xs');

            //check for properties of Sub-title
            properties = accordion_props.titleSubProps('xs');
            callback.multiloop(client, titleSub , properties, 'xs');
        }
    },

    //Check for accordion component properties for mobile
    "4. Check for accordion props for mobile": function(client) {
            globalProps(client);
           var accordion = pageObj.elements.accordion.selector,
                accItem = pageObj.elements.accItem.selector,
                accHeader = pageObj.elements.accHeader.selector,
                accHead = pageObj.elements.accHead.selector,
                accHeaderLink = pageObj.elements.accHeaderLink.selector,
                accContent = pageObj.elements.accContent.selector,
                accOdd = pageObj.elements.accOdd.selector;          
              
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                //accordion
                properties = accordion_props.accordionProps('xs');
                callback.multiloop(client, accordion , properties, 'xs');

                //accordion Items properties
                properties = accordion_props.accItemProps('xs');
                callback.multiloop(client, accItem , properties, 'xs'); 

                //odd accordions properties
                properties = accordion_props.accOddProps('xs');
                callback.multiloop(client, accOdd , properties, 'xs'); 

                //accordion header properties
                properties = accordion_props.accHeaderProps('xs');
                callback.multiloop(client, accHeader , properties, 'xs');  

                //accordion content properties
                properties = accordion_props.accContentProps('xs');
                callback.multiloop(client, accContent , properties, 'xs');
                
                //accordion headerLink properties
                properties = accordion_props.accHeaderLinkProps('xs');
                callback.multiloop(client, accHeaderLink , properties, 'xs'); 

                 //accordion head properties
                 properties = accordion_props.accHeadProps('xs');
                 callback.multiloop(client, accHead , properties, 'xs');  
            }
    },

    //Check for accordion focus properties for mobile
    "5. Check for accordion focus props for mobile": function(client) {
            globalProps(client);
            var accFocus = pageObj.elements.accFocus.selector;          
                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
             client.moveToElement(accFocus, 30, 30);
             client.mouseButtonDown(0);
             properties = accordion_props.accFocusProps('xs');
             callback.singleElem(client, '.accordion__item' , properties, 'xs');
        } 
    }, 
    //Check for accordion Icon in expand and collapse props for mobile
    "6. Check for accordion Icon in expand and collapse props for mobile": function(client) {
        globalProps(client);
        var accIconExp = pageObj.elements.accIconExp.selector,
            accIconCollapse = pageObj.elements.accIconCollapse.selector;           
           
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
         properties = accordion_props.accIconExpProps('xs');
         callback.singleElem(client, accIconExp , properties, 'xs');

         properties = accordion_props.accIconCollapseProps('xs');
         callback.singleElem(client, accIconCollapse , properties, 'xs');  
     }
 },

 //Check for RTE props for mobile
 "7. Check for rte properties for mobile": function(client) {
         globalProps(client);
        var accContent = pageObj.elements.accContent.selector,
            rteImage = pageObj.elements.rteImage.selector,
            rteVideo = pageObj.elements.rteVideo.selector,
            rtePlayer = pageObj.elements.rtePlayer.selector,
            rteAspect = pageObj.elements.rteAspect.selector,
            rteTable = pageObj.elements.rteTable.selector,
            accordion = pageObj.elements.accordion.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
             client.elements('css selector',accContent,results=>{
                 if(results.value.length>0) {
                 //rte
                 properties = accordion_props.rteulliprops('xs');  
                 rteCallback.rteElem(client, accContent , properties,'ul li' ,'xs');

                 properties = accordion_props.rteolliprops('xs');  
                 rteCallback.rteElem(client, accContent , properties,'ol li', 'xs');

                 properties = accordion_props.rteTextProps('xs');
                 rteCallback.rteElem(client, accContent , properties,'> p', 'xs');

                 properties = accordion_props.rteLinkprops('xs');
                 rteCallback.rteElem(client, accContent , properties,'> p a', 'xs');
                 }
             });
             client.elements('css selector',accordion,results=>{
                if(results.value.length>0) {
                    //rte image props
                    properties = accordion_props.rteImageprops('xs');
                    callback.multiloop(client, rteImage , properties, 'xs');
                    
                    //rte video props
                    properties = accordion_props.rteVideoprops('xs');
                    callback.multiloop(client, rteVideo , properties, 'xs');
                 
                     //rte video player props
                     properties = accordion_props.rtePlayerprops('xs');
                     callback.multiloop(client, rtePlayer , properties, 'xs');
                     
                     //rte video player props
                     properties = accordion_props.rteAspectprops('xs');
                     callback.multiloop(client, rteAspect , properties, 'xs');

                    //rte table
                    properties = accordion_props.rteTableprops('xs');  
                    callback.multiloop(client, rteTable , properties, 'xs');
                }
            });          
         }      
 },
    //Check for accordion header group props for mobile
    "8. Check for accordion header group props for mobile": function(client) {
        //globalProps(client);
        var accHeadgrp = pageObj.elements.accHeadgrp.selector,
            accHeadgrpline = pageObj.elements.accHeadgrpline.selector,
            accBlockquote = pageObj.elements.accBlockquote.selector,
            accHeadgrppost = pageObj.elements.accHeadgrppost.selector;           
       

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
            properties = accordion_props.accHeadgrpprops('xs');
            callback.multiloop(client, accHeadgrp, properties, 'xs');

            properties = accordion_props.accHeadgrplineprops('xs');
            callback.multiloop(client, accHeadgrpline, properties, 'xs');

            properties = accordion_props.accHeadgrppostprops('xs');
            callback.multiloop(client, accHeadgrppost, properties, 'xs');  
            
            properties = accordion_props.accBlockquoteprops('xs');
            callback.multiloop(client, accBlockquote, properties, 'xs');  
        }
    },

    //Check for accordion grid props for mobile
    "9. Check for accordion grid props for mobile": function(client) {
    var accGrid = pageObj.elements.accGrid.selector,
        accGridWhole = pageObj.elements.accGridWhole.selector,
        accGridhalf = pageObj.elements.accGridhalf.selector,
        accGridTwothird = pageObj.elements.accGridTwothird.selector,
        accContentGrid = pageObj.elements.accContentGrid.selector,
        accContentGridHalf = pageObj.elements.accContentGridHalf.selector,
        accContentGridOnethird = pageObj.elements.accContentGridOnethird.selector,
        accGridOnethird = pageObj.elements.accGridOnethird.selector;           
   
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            properties = accordion_props.accGridprops('xs');
            callback.multiloop(client, accGrid, properties, 'xs');

            properties = accordion_props.accContentGridprops('xs');
            callback.multiloop(client, accContentGrid, properties, 'xs');

            properties = accordion_props.accGridWholeprops('xs');
            callback.multiloop(client, accGridWhole, properties, 'xs');

            properties = accordion_props.accGridWholeprops('xs');
            callback.multiloop(client, accGridhalf, properties, 'xs');

            properties = accordion_props.accGridOnethirdprops('xs');
            callback.multiloop(client, accContentGridHalf, properties, 'xs'); 

            properties = accordion_props.accGridWholeprops('xs');
            callback.multiloop(client, accGridOnethird, properties, 'xs'); 

            properties = accordion_props.accGridOnethirdprops('xs');
            callback.multiloop(client, accContentGridOnethird, properties, 'xs'); 

            properties = accordion_props.accGridOnethirdprops('xs');
            callback.multiloop(client, accGridTwothird, properties, 'xs');  
        }
    },
    //Check for table body properties for mobile
    "10. Check for table body properties for mobile": function(client){
    var tableTr= pageObj.elements.tableTr.selector,
        heavyBandRowEven = pageObj.elements. heavyBandRowEven.selector,
        heavyBandRowOdd= pageObj.elements.heavyBandRowOdd.selector,
        lightBandRowEven = pageObj.elements.lightBandRowEven.selector,
        lightBandRowOdd = pageObj.elements.lightBandRowOdd.selector;

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',tableTr,results=>{
            if(results.value.length>0) { 
                //heavy band table row even bg color
                Properties = accordion_props.heavyBandRowEvenProps('xs');  
                callback.multiloop(client,heavyBandRowEven, Properties, 'xs');

                //heavy band table row odd bg color
                Properties = accordion_props.heavyBandRowOddProps('xs');  
                callback.multiloop(client,heavyBandRowOdd, Properties, 'xs');

                //light band table row even bg Color
                Properties = accordion_props.lightBandRowEvenProps('xs');  
                callback.multiloop(client,lightBandRowEven, Properties, 'xs');

                //light band table row odd bg color
                Properties = accordion_props.lightBandRowOddProps('xs');  
                callback.multiloop(client,lightBandRowOdd, Properties, 'xs');
            }
        });
    }
    },
    //Check for primary & secondary cta properties for mobile
    "11. Check for primary & secondary cta properties for mobile": function(client) {
        var ctaPrimary = pageObj.elements.ctaPrimary.selector,
        ctaSecondary = pageObj.elements.ctaSecondary.selector;
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //Primary cta props
            properties = accordion_props.ctaPrimaryprops('xs');
            callback.multiloop(client, ctaPrimary , properties, 'xs');
            //Secondary cta props
            properties = accordion_props.ctaSecondaryprops('xs');
            callback.multiloop(client, ctaSecondary , properties, 'xs');
        }
    },

    //Check for primary cta properties on hover & Focus for mobile
    "12. Check for primary cta properties on hover & Focus for mobile": function(client) {
        var ctaPrimary = pageObj.elements.ctaPrimary.selector,
            accordion = pageObj.elements.accordion.selector,
            ctaSecondary = pageObj.elements.ctaSecondary.selector;
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', accordion, accclick);
            function accclick(elems){
                elems.value.forEach(function(element,index) {
                client.pause(4000);              
                client.elementIdClick(element.ELEMENT) 
                });

                client.elements('css selector',ctaPrimary,results=>{
                    if(results.value.length>0) {
                        var properties = accordion_props.ctaPrimaryHoverProps('xs'); 
                        client.moveToElement(ctaPrimary, 10, 10);
                        client.pause(5000);
                        callback.singleElem(client, ctaPrimary, properties, 'xs'); 
                        
                    // primary cta focus props
                        client.waitForElementVisible(ctaPrimary, 6000);
                        client.moveToElement(ctaPrimary,  10,  10);
                        client.mouseButtonDown(0);
                        client.pause(10000);
                        properties = accordion_props.ctaPrimaryFocusProps('xs');
                        callback.singleElem(client, ctaPrimary , properties, 'xs');
                    }
                
                });
            }            
            
        }
    },

    "Ending the session":function(client){
        client.end();
    } 
}
