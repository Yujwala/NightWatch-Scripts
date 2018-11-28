var   pageurl = require('../../pageurls.js'),
      pageObj,accordion_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.accordion_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;  
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    accordion_props = require('./accordion_props.js')(client); 
}

module.exports = {
'@tags': ['accordion','desktop','accordion-desktop'],
//Opening the Desktop URL
    "1. Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_WSC_ACCORDION); 
    },

    //Check for main shelf padding
   "2. Check for shelf padding": function(client) {
            globalProps(client);
           var shelfCls = pageObj.elements.shelfCls.selector,
           themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
           themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;

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
            properties = accordion_props.paddingProps('lg');  
            callback.multiloop(client, shelfCls , properties, 'lg');            
        }   
    },

    //Check for title wrapper and title props
    "3. Check for title wrapper and title props": function(client) {
            globalProps(client);
           var titleWrap = pageObj.elements.titleWrap.selector,
            titleCls = pageObj.elements.titleCls.selector;
            client.maximizeWindow();
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for title wrapper properties
            properties = accordion_props.titleWrapProps('lg');
            callback.multiloop(client, titleWrap , properties, 'lg');

            //check for properties of title
            properties = accordion_props.titleClsProps('lg');
            callback.multiloop(client, titleCls , properties, 'lg');
        }
    },
    //Check for accordion shelf properties
    "4. Check for accordion shelf props": function(client) {
            globalProps(client);
           var accShelf = pageObj.elements.accShelf.selector,
                accSection = pageObj.elements.accSection.selector,
                accFirstShelf = pageObj.elements.accFirstShelf.selector;          
                client.maximizeWindow();
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        if(brand.props.$brandName=="lombard"){
            client.elements('css selector','.theme--white .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfProps('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
                }
            });
            client.elements('css selector','.theme--blue .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfPropslom('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
                }
            });
            client.elements('css selector','.theme--light-blue .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfPropslom('lg');
                     callback.multiloop(client, accShelf , properties, 'lg');
                }
            });
            
        } 
        if(brand.props.$brandName=="natwest-markets"){
            client.elements('css selector','.grid__item.desk--two-thirds .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelftwothirdPropsNWMAR('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
                }
            });  
        } 
        else{
            client.elements('css selector','.top-radius-rowitem',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accFirstShelfProps('lg');
                        callback.multiloop(client, accFirstShelf , properties, 'lg');
                }
            });
            client.elements('css selector','.grid__item.desk--one-whole .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfProps('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');

                }
            });
           
            client.elements('css selector','.grid__item.desk--two-thirds .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelftwothirdProps('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
                }
            });
            client.elements('css selector','.grid__item.desk--one-half .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfhalfProps('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
    
                }
            });
            client.elements('css selector','.grid__item.desk--one-third .accordion-shelf',results=>{
                if(results.value.length>0) {
                    properties = accordion_props.accShelfonethirdProps('lg');
                    callback.multiloop(client, accShelf , properties, 'lg');
                }
            });
                properties = accordion_props.accSectionProps('lg');
                callback.multiloop(client, accSection , properties, 'lg');  
            }
        }
    },
    //Check for accordion last shelf properties
    "5. Check for accordion last shelf props": function(client) {
            globalProps(client);
           var accLastShelf = pageObj.elements.accLastShelf.selector;          
            client.maximizeWindow();
       
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            properties = accordion_props.accLastShelfProps('lg');
            callback.multiloop(client, accLastShelf , properties, 'lg');
        } 
    },

    //Check for accordion title wrapper and accordion title props
     "6. Check for accordion title wrapper and title props": function(client) {
            globalProps(client);
           var accTitleWrap = pageObj.elements.accTitleWrap.selector,
            accTitle = pageObj.elements.accTitle.selector;           
            client.maximizeWindow();
       
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            properties = accordion_props.accTitleWrapProps('lg');
            callback.multiloop(client, accTitleWrap , properties, 'lg');

            properties = accordion_props.accTitleProps('lg');
            callback.multiloop(client, accTitle , properties, 'lg');  
        }
    },

    //Check for the icon next to title
    "7. Check for icon properties": function(client) {
            globalProps(client);
           var iconCls = pageObj.elements.iconCls.selector,
            iconImageCls = pageObj.elements.iconImageCls.selector;
            client.maximizeWindow();
        
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            properties = accordion_props.iconClsProps('lg');
            callback.multiloop(client, iconCls , properties, 'lg');

            properties = accordion_props.iconImageClsProps('lg');
            callback.multiloop(client, iconImageCls , properties, 'lg');
        }      
    },

    //Check for rte top separator (horizontal line props)
    "8. Check for rte top separator properties": function(client) {
            globalProps(client);
          var  rteSeparator = pageObj.elements.rteSeparator.selector;
           
            client.maximizeWindow();
        
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            properties = accordion_props.rteSeparatorProps('lg');
            callback.multiloop(client, rteSeparator , properties, 'lg');
        }        
    },

    //Check for RTE props
    "9. Check for rte properties": function(client) {
            globalProps(client);
           var rteText = pageObj.elements.rteText.selector,
               rteulli = pageObj.elements.rteulli.selector,
               rteolli = pageObj.elements.rteolli.selector,
               rteTable = pageObj.elements.rteTable.selector,
               rtelink = pageObj.elements.rtelink.selector,
               accordionShelf = pageObj.elements.accordionShelf.selector;
            client.maximizeWindow();
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', accordionShelf, accclick);
            function accclick(elems){
                elems.value.forEach(function(element,index) {
                client.pause(4000); 
                client.elementIdClick(element.ELEMENT) 
                });
                client.elements('css selector',rteulli,results=>{
                    if(results.value.length>0) {
                    //rte ul li 
                        properties = accordion_props.rteulliprops('lg');  
                        callback.multiloop(client, rteulli , properties, 'lg');
                    }
                });
                client.elements('css selector',rteolli,results=>{
                    if(results.value.length>0) {
                    //rte ol li 
                        properties = accordion_props.rteolliprops('lg');  
                        callback.multiloop(client, rteolli , properties, 'lg');
                    }
                });
                client.elements('css selector',rteTable,results=>{
                    if(results.value.length>0) {
                    //rte table
                        properties = accordion_props.rteTableprops('lg');  
                        callback.multiloop(client, rteTable , properties, 'lg');
                    }
                });
                client.elements('css selector',rtelink,results=>{
                    if(results.value.length>0) {
                    //rte link
                        properties = accordion_props.rteLinkprops('lg');  
                        callback.singleElem(client, rtelink , properties, 'lg');
                    }
                });
                client.elements('css selector',rteText,results=>{
                    if(results.value.length>0) { 
                        //rte textprops  
                        properties = accordion_props.rteTextProps('lg');
                        callback.singleElem(client, rteText , properties, 'lg');
                    }
                });
            }
        }      
    },

    //Check for primary CTA props
    "10. Check for primary cta properties": function(client) {
            globalProps(client);
           var ctaPrimary = pageObj.elements.ctaPrimary.selector;
            client.maximizeWindow();
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                properties = accordion_props.ctaPrimaryProps('lg');
                callback.multiloop(client, ctaPrimary , properties, 'lg');
            }
    },
    //Check for primary CTA props on hover & focus
    "11. Check for primary cta properties on hover & Focus": function(client) {
        globalProps(client);
        var ctaPrimary = pageObj.elements.ctaPrimary.selector,
        accordionShelf = pageObj.elements.accordionShelf.selector;
        client.maximizeWindow();

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', accordionShelf, accclick);
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

    //Check for arrow in active state
     "12. Check for arrow active properties": function(client) {
            globalProps(client);
           var arrowActive = pageObj.elements.arrowActive.selector,
           accordionShelf = pageObj.elements.accordionShelf.selector
            client.maximizeWindow();

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.click(accordionShelf); 
                if(brand.props.$brandName=="rbs-com" || brand.props.$brandName=="rbs-remembers"){
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('collapse_chevron_rowitem');
                } 
                else{
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('expand_chevron');
                }
                properties = accordion_props.arrowActiveProps('lg');
                callback.multiloop(client, arrowActive , properties, 'lg');
        }
    },

    //Check for arrow properties (collapsed)
    "13. Check for arrow properties": function(client) {
            globalProps(client);
           var arrowCollapse = pageObj.elements.arrowCollapse.selector,
               accordionShelf = pageObj.elements.accordionShelf.selector;
            client.maximizeWindow();

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
           client.elements('css selector', '.accordion-shelf .accordion-sec.active .chevron-click', test)
                function test(elems){
                        elems.value.forEach(function(element,index) {
                            client
                                .pause(6000)
                                .elementIdClick(element.ELEMENT);
                                client.pause(6000);
                                client.expect.element('.accordion-shelf .accordion-section-content').to.have.css('display').which.equals('none');
                              });
                      
                  }
            properties = accordion_props.arrowActiveProps('lg');
            callback.multiloop(client, arrowCollapse , properties, 'lg');
        } 
    },
    //Check for accordion paddings in closed state
     "14. Check for accordion paddings in closed state": function(client) {
            globalProps(client);
           var accHighlight = pageObj.elements.accHighlight.selector;
            client.maximizeWindow();

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector','.accordionHighlight',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accHighlightProps('lg');
                        callback.multiloop(client, accHighlight , properties, 'lg');
                    }
                })
        }
    },

    "Ending the session":function(client){
        client.end();
    }
}

