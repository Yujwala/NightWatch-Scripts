var pageurl = require('../../pageurls.js'),
    pageObj,accordion_props,callback,size;

function globalProps(client){
    pageObj = client.page.accordion_composite_selectors();
    callback = client.page.common();
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    accordion_props = require('./accordion_props.js')(client);  
}

module.exports = {
'@tags': ['accordion-composite','desktop','accordion-composite-desktop'],
//Opening the Desktop URL
    "1. Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            client.openURL(client,pageurl.ULSTER_WSC_ACC_COMP); 
    },
   
    //Check for main shelf padding
  "2. Check for shelf padding": function(client) {
            //globalProps(client);
           var shelfCls = pageObj.elements.shelfCls.selector,
           shelfInner = pageObj.elements.shelfInner.selector,
           themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
           themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;
            callback.scrollToElement(client,shelfCls); 
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.maximizeWindow();
            //Blue Theme
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {
                 //shelf bg color
                 properties = accordion_props.themeBlueShelf('lg');  
                 callback.multiloop(client, themeBlueShelf , properties, 'lg');
                }
            });
            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {
                 //shelf bg color
                 properties = accordion_props.themeWhiteShelf('lg');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'lg');

                }
            });
            
            properties = accordion_props.shelfClsProps('lg');  
            callback.multiloop(client, shelfCls , properties, 'lg');

            properties = accordion_props.shelfInnerProps('lg');  
            callback.multiloop(client, shelfInner , properties, 'lg');                  
        }   
    },

    //Check for title wrapper and title props
    "3. Check for title wrapper and title props": function(client) {
           // globalProps(client);
           var titleWrap = pageObj.elements.titleWrap.selector,
           titleSub = pageObj.elements.titleSub.selector,
            titleCls = pageObj.elements.titleCls.selector;
            client.maximizeWindow();
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for title wrapper properties
            properties = accordion_props.titleWrapProps('lg');
            callback.multiloop(client, titleWrap , properties, 'lg');

            //check for properties of title
            properties = accordion_props.titleClsProps('lg');
            callback.multiloop(client, titleCls , properties, 'lg');

            //check for properties of Sub-title
            properties = accordion_props.titleSubProps('lg');
            callback.multiloop(client, titleSub , properties, 'lg');
        }
    },
    //Check for accordion component properties
    "4. Check for accordion props": function(client) {
            //globalProps(client);
           var accordion = pageObj.elements.accordion.selector,
                accItem = pageObj.elements.accItem.selector,
                accHeader = pageObj.elements.accHeader.selector,
                accHead = pageObj.elements.accHead.selector,
                accHeaderLink = pageObj.elements.accHeaderLink.selector,
                accContent = pageObj.elements.accContent.selector,
                accOdd = pageObj.elements.accOdd.selector;          
                client.maximizeWindow();

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                //accordion
                properties = accordion_props.accordionProps('lg');
                callback.multiloop(client, accordion , properties, 'lg');

                //accordion Items properties
                properties = accordion_props.accItemProps('lg');
                callback.multiloop(client, accItem , properties, 'lg'); 

                //odd accordions properties
                properties = accordion_props.accOddProps('lg');
                callback.multiloop(client, accOdd , properties, 'lg'); 

                //accordion header properties
                properties = accordion_props.accHeaderProps('lg');
                callback.multiloop(client, accHeader , properties, 'lg');  

                //accordion content properties
                properties = accordion_props.accContentProps('lg');
                callback.multiloop(client, accContent , properties, 'lg');
                
                //accordion headerLink properties
                properties = accordion_props.accHeaderLinkProps('lg');
                callback.multiloop(client, accHeaderLink , properties, 'lg'); 

                 //accordion head properties
                 properties = accordion_props.accHeadProps('lg');
                 callback.multiloop(client, accHead , properties, 'lg');  
            }
    },
    //Check for accordion focus properties
    "5. Check for accordion focus props": function(client) {
            //globalProps(client);
            var accFocus = pageObj.elements.accFocus.selector;          
            client.maximizeWindow();
       
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
             client.moveToElement(accFocus, 30, 30);
             client.mouseButtonDown(0);
             properties = accordion_props.accFocusProps('lg');
             callback.singleElem(client, '.accordion__item' , properties, 'lg');
        } 
    }, 
    //Check for accordion Icon in expand and collapse props
    "6. Check for accordion Icon in expand and collapse props": function(client) {
        //globalProps(client);
        var accIconExp = pageObj.elements.accIconExp.selector,
            accIconCollapse = pageObj.elements.accIconCollapse.selector;           
         client.maximizeWindow();
    
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
         properties = accordion_props.accIconExpProps('lg');
         callback.singleElem(client, accIconExp , properties, 'lg');

         properties = accordion_props.accIconCollapseProps('lg');
         callback.singleElem(client, accIconCollapse , properties, 'lg');  
     }
 },

 //Check for RTE props
 "7. Check for rte properties": function(client) {
        var accContent = pageObj.elements.accContent.selector,
            accordion = pageObj.elements.accordion.selector,
            rteImage = pageObj.elements.rteImage.selector,
            rteVideo = pageObj.elements.rteVideo.selector,
            rteAspect = pageObj.elements.rteAspect.selector,
            rteTable = pageObj.elements.rteTable.selector,
            rtePlayer = pageObj.elements.rtePlayer.selector;
       
        client.maximizeWindow();
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
             client.elements('css selector',accContent,results=>{
                 if(results.value.length>0) {
                 //rte
                 properties = accordion_props.rteulliprops('lg');  
                 rteCallback.rteElem(client, accContent , properties,'ul li' ,'lg');

                 properties = accordion_props.rteolliprops('lg');  
                 rteCallback.rteElem(client, accContent , properties,'ol li', 'lg');

                 properties = accordion_props.rteTextProps('lg');
                 rteCallback.rteElem(client, accContent , properties,'> p', 'lg');

                 properties = accordion_props.rteLinkprops('lg');
                 rteCallback.rteElem(client, accContent , properties,'> p a', 'lg');
                 }
             });
             client.elements('css selector',accordion,results=>{
                if(results.value.length>0) {
                    //rte image props
                    properties = accordion_props.rteImageprops('lg');
                    callback.multiloop(client, rteImage , properties, 'lg');
                    
                    //rte video props
                    properties = accordion_props.rteVideoprops('lg');
                    callback.multiloop(client, rteVideo , properties, 'lg');
                 
                     //rte video player props
                     properties = accordion_props.rtePlayerprops('lg');
                     callback.multiloop(client, rtePlayer , properties, 'lg');
                     
                     //rte video player props
                     properties = accordion_props.rteAspectprops('lg');
                     callback.multiloop(client, rteAspect , properties, 'lg');

                    //rte table
                    properties = accordion_props.rteTableprops('lg');  
                    callback.multiloop(client, rteTable , properties, 'lg');
                }
            });          
         
     }      
 },

    //Check for accordion header group props
    "8. Check for accordion header group props": function(client) {
            //globalProps(client);
            var accHeadgrp = pageObj.elements.accHeadgrp.selector,
                accHeadgrpline = pageObj.elements.accHeadgrpline.selector,
                accBlockquote = pageObj.elements.accBlockquote.selector,
                accHeadgrppost = pageObj.elements.accHeadgrppost.selector;           
            client.maximizeWindow();

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
           
            properties = accordion_props.accHeadgrpprops('lg');
            callback.multiloop(client, accHeadgrp, properties, 'lg');

            properties = accordion_props.accHeadgrplineprops('lg');
            callback.multiloop(client, accHeadgrpline, properties, 'lg');

            properties = accordion_props.accHeadgrppostprops('lg');
            callback.multiloop(client, accHeadgrppost, properties, 'lg');  
            
            properties = accordion_props.accBlockquoteprops('lg');
            callback.multiloop(client, accBlockquote, properties, 'lg');  
        }
    },

    //Check for accordion grid props
    "9. Check for accordion grid props": function(client) {
        var accGrid = pageObj.elements.accGrid.selector,
            accGridWhole = pageObj.elements.accGridWhole.selector,
            accGridhalf = pageObj.elements.accGridhalf.selector,
            accGridTwothird = pageObj.elements.accGridTwothird.selector,
            accContentGrid = pageObj.elements.accContentGrid.selector,
            accContentGridHalf = pageObj.elements.accContentGridHalf.selector,
            accContentGridOnethird = pageObj.elements.accContentGridOnethird.selector,
            accGridOnethird = pageObj.elements.accGridOnethird.selector;           
        client.maximizeWindow();

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
       
        properties = accordion_props.accGridprops('lg');
        callback.multiloop(client, accGrid, properties, 'lg');
        
        properties = accordion_props.accContentGridprops('lg');
        callback.multiloop(client, accContentGrid, properties, 'lg');

        properties = accordion_props.accGridWholeprops('lg');
        callback.multiloop(client, accGridWhole, properties, 'lg');

        properties = accordion_props.accGridWholeprops('lg');
        callback.multiloop(client, accGridhalf, properties, 'lg');

        properties = accordion_props.accGridOnethirdprops('lg');
        callback.multiloop(client, accContentGridHalf, properties, 'lg'); 
        
        properties = accordion_props.accGridWholeprops('lg');
        callback.multiloop(client, accGridOnethird, properties, 'lg'); 
        
        properties = accordion_props.accGridOnethirdprops('lg');
        callback.multiloop(client, accContentGridOnethird, properties, 'lg'); 
        
        properties = accordion_props.accGridOnethirdprops('lg');
        callback.multiloop(client, accGridTwothird, properties, 'lg');  
    }
},
    //Check for table body properties
    "10. Check for table body properties": function(client){
        tableTr= pageObj.elements.tableTr.selector,
        heavyBandRowEven = pageObj.elements. heavyBandRowEven.selector,
        heavyBandRowOdd= pageObj.elements.heavyBandRowOdd.selector,
        lightBandRowEven = pageObj.elements.lightBandRowEven.selector,
        lightBandRowOdd = pageObj.elements.lightBandRowOdd.selector;
        
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',tableTr,results=>{
                if(results.value.length>0) { 
                    //heavy band table row even bg color
                    Properties = accordion_props.heavyBandRowEvenProps('lg');  
                    callback.multiloop(client,heavyBandRowEven, Properties, 'lg');

                    //heavy band table row odd bg color
                    Properties = accordion_props.heavyBandRowOddProps('lg');  
                    callback.multiloop(client,heavyBandRowOdd, Properties, 'lg');

                    //light band table row even bg Color
                    Properties = accordion_props.lightBandRowEvenProps('lg');  
                    callback.multiloop(client,lightBandRowEven, Properties, 'lg');

                    //light band table row odd bg color
                    Properties = accordion_props.lightBandRowOddProps('lg');  
                    callback.multiloop(client,lightBandRowOdd, Properties, 'lg');
                }
            });
        }
    },
    //Check for primary & secondary cta properties
    "11. Check for primary & secondary cta properties": function(client) {
       var ctaPrimary = pageObj.elements.ctaPrimary.selector,
           ctaSecondary = pageObj.elements.ctaSecondary.selector;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //Primary cta props
            properties = accordion_props.ctaPrimaryprops('lg');
            callback.multiloop(client, ctaPrimary , properties, 'lg');
            //Secondary cta props
            properties = accordion_props.ctaSecondaryprops('lg');
            callback.multiloop(client, ctaSecondary , properties, 'lg');
        }
    },

     //Check for primary cta properties on hover & Focus
     "12. Check for primary cta properties on hover & Focus": function(client) {
        var ctaPrimary = pageObj.elements.ctaPrimary.selector,
            accordion = pageObj.elements.accordion.selector,
            ctaSecondary = pageObj.elements.ctaSecondary.selector;
        client.maximizeWindow();

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', accordion, accclick);
            function accclick(elems){
                elems.value.forEach(function(element,index) {
                client.pause(4000);              
                client.elementIdClick(element.ELEMENT) 
                });

                client.elements('css selector',ctaPrimary,results=>{
                    if(results.value.length>0) {
                        var properties = accordion_props.ctaPrimaryHoverProps('lg'); 
                        client.moveToElement(ctaPrimary, 10, 10);
                        client.pause(5000);
                        callback.singleElem(client, ctaPrimary, properties, 'lg'); 
                        
                       // primary cta focus props
                        client.waitForElementVisible(ctaPrimary, 6000);
                        client.moveToElement(ctaPrimary,  10,  10);
                        client.mouseButtonDown(0);
                        client.pause(10000);
                        properties = accordion_props.ctaPrimaryFocusProps('lg');
                        callback.singleElem(client, ctaPrimary , properties, 'lg');
                    }
                
                });
            }            
            
        }
    },
    
    "Ending the session":function(client){
        client.end();
    } 
}

