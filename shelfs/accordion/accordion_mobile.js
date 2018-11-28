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
'@tags': ['accordion','mobile','accordion-mobile'],
    //Resize the window for mobile
    "Resize The Window":function(client){
      var  size = client.globals.size.widths;
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000);
    },

    //Opening the mobile URL
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            callback.openURL(client,pageurl.NW_PER_WSC_ACCORDION_MOB);
            client.pause(5000);  
    },

    "1. Check for shelf padding for mobile": function(client) {
        globalProps(client);
        var shelfClsMob = pageObj.elements.shelfClsMob.selector,
        themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
        themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector;

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
            properties = accordion_props.paddingProps('xs');  
            callback.multiloop(client, shelfClsMob , properties, 'xs');            
        }
    },

    "2. Check for title wrapper and title props for mobile": function(client) {
            globalProps(client);
          var  titleWrap = pageObj.elements.titleWrap.selector,
            titleCls = pageObj.elements.titleCls.selector;

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = accordion_props.titleWrapProps('xs');
            callback.multiloop(client, titleWrap , properties, 'xs');

            properties = accordion_props.titleClsProps('xs');
            callback.multiloop(client, titleCls , properties, 'xs');
        }
    },

     "3. Check for arrow properties for mobile": function(client) {
            globalProps(client);
           var arrowCollapse = pageObj.elements.arrowCollapse.selector,
               accordionShelf = pageObj.elements.accordionShelf.selector;
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                client.click(accordionShelf); 
                if(brand.props.$brandName=="rbs-com" || brand.props.$brandName=="rbs-remembers"){
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('collapse_chevron_rowitem');
                } 
                else{
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('expand_chevron');
                }
            properties = accordion_props.arrowActiveProps('xs');
            callback.multiloop(client, arrowCollapse , properties, 'xs');
        }
    },

    "4. Check for accordion last shelf props for mobile": function(client) {
            globalProps(client);
        var  accLastShelf = pageObj.elements.accLastShelf.selector;          

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            properties = accordion_props.accLastShelfProps('xs');
            callback.multiloop(client, accLastShelf , properties, 'xs');
            } 
    },

    //Check for accordion paddings in closed state
     "5. Check for accordion paddings in closed state for mobile": function(client) {
            globalProps(client);
           var accHighlight = pageObj.elements.accHighlight.selector;

        if(client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            if(client.globals.test_settings.isLocal){
                client.elements('css selector','.accordionHighlight',results=>{
                        if(results.value.length>0) {
                            properties = accordion_props.accHighlightProps('xs');
                            callback.multiloop(client, accHighlight , properties, 'xs');
                        }
                })
            }
            else {
                client.elements('css selector','.accordionHighlight',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accHighlightProps('xs');
                        callback.multiloop(client, accHighlight , properties, 'xs');
                    }
                })
            }
        }
    },

    "6. Check for accordion shelf props for mobile": function(client) {
            globalProps(client);
          var  accShelf = pageObj.elements.accShelf.selector,
            accSection = pageObj.elements.accSection.selector,
            accFirstShelf = pageObj.elements.accFirstShelf.selector;          
       
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            if(brand.props.$brandName=="lombard"){
                client.elements('css selector','.theme--white .accordion-shelf',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accShelfProps('xs');
                        callback.multiloop(client, accShelf , properties, 'xs');
                    }
                });
                client.elements('css selector','.theme--blue .accordion-shelf',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accShelfPropslom('xs');
                        callback.multiloop(client, accShelf , properties, 'xs');
                    }
                });
                client.elements('css selector','.theme--light-blue .accordion-shelf',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accShelfPropslom('xs');
                        callback.multiloop(client, accShelf , properties, 'xs');
                    }
                });
                
            }  
            else{
                client.elements('css selector','.top-radius-rowitem',results=>{
                    if(results.value.length>0) {
                        properties = accordion_props.accFirstShelfProps('xs');
                        callback.multiloop(client, accFirstShelf , properties, 'xs');
                    }
                });
                properties = accordion_props.accShelfProps('xs');
                callback.singleElem(client, accShelf , properties, 'xs');

                properties = accordion_props.accSectionProps('xs');
                callback.multiloop(client, accSection , properties, 'xs');  
            }
        }   
    },
    "7. Check for arrow active properties for mobile": function(client) {
            globalProps(client);
        var arrowActive = pageObj.elements.arrowActive.selector,
            accordionShelf = pageObj.elements.accordionShelf.selector;

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                client.elements('css selector', '.accordion-shelf .accordion-sec .chevron-click', test)
                function test(elems){
                        elems.value.forEach(function(element,index) {
                            client
                                .pause(6000)
                                .elementIdClick(element.ELEMENT);
                                client.pause(6000);
                                client.expect.element('.accordion-shelf .accordion-section-content').to.have.css('display').which.equals('none');
                            });
                }
                client.click(accordionShelf); 
                if(brand.props.$brandName=="rbs-com" || brand.props.$brandName=="rbs-remembers"){
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('collapse_chevron_rowitem');
                } 
                else{
                    client.expect.element('.accordion-shelf .accordion-sec.active .chevron-click').to.have.css('background-image').which.contains('expand_chevron');
                }
            properties = accordion_props.arrowActiveProps('xs');
            callback.multiloop(client, arrowActive , properties, 'xs');
        }
    },
    
    "8. Check for accordion title wrapper and title props for mobile": function(client) {
            globalProps(client);
           var accTitleWrap = pageObj.elements.accTitleWrap.selector,
            accTitle = pageObj.elements.accTitle.selector;        
       
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            properties = accordion_props.accTitleWrapProps('xs');
            callback.multiloop(client, accTitleWrap , properties, 'xs');

            properties = accordion_props.accTitleProps('xs');
            callback.multiloop(client, accTitle , properties, 'xs');  
            }
    },

    "9. Check for icon properties for mobile": function(client) {
            globalProps(client);
          var  iconCls = pageObj.elements.iconCls.selector,
            iconImageCls = pageObj.elements.iconImageCls.selector;
        
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            properties = accordion_props.iconClsProps('xs');
            callback.multiloop(client, iconCls , properties, 'xs');

            properties = accordion_props.iconImageClsProps('xs');
            callback.multiloop(client, iconImageCls , properties, 'xs');
        }      
    },

    "10. Check for rte top separator properties for mobile": function(client) {
            globalProps(client);
           var rteSeparator = pageObj.elements.rteSeparator.selector;
        
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            properties = accordion_props.rteSeparatorProps('xs');
            callback.multiloop(client, rteSeparator , properties, 'xs');
        }         
    },

    "11. Check for rte properties for mobile": function(client) {
        globalProps(client);
        var rteText = pageObj.elements.rteText.selector,
            rteulli = pageObj.elements.rteulli.selector,
            rteolli = pageObj.elements.rteolli.selector,
            rteTable = pageObj.elements.rteTable.selector,
            rtelink = pageObj.elements.rtelink.selector,
            accordionShelf = pageObj.elements.accordionShelf.selector;
    
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
                    properties = accordion_props.rteulliprops('xs');  
                    callback.multiloop(client, rteulli , properties, 'xs');

                    }
                });
                client.elements('css selector',rteolli,results=>{
                    if(results.value.length>0) {
                    //rte ol li 
                    properties = accordion_props.rteolliprops('xs');  
                    callback.multiloop(client, rteolli , properties, 'xs');

                    }
                });
                client.elements('css selector',rteTable,results=>{
                    if(results.value.length>0) {
                    //rte table
                    properties = accordion_props.rteTableprops('xs');  
                    callback.multiloop(client, rteTable , properties, 'xs');
                    }
                });
                client.elements('css selector',rtelink,results=>{
                    if(results.value.length>0) {
                    //rte link
                    properties = accordion_props.rteLinkprops('xs');  
                    callback.singleElem(client, rtelink , properties, 'xs');
                    }
                });
                client.elements('css selector',rteText,results=>{
                    if(results.value.length>0) {
                        //rte textprops    
                        properties = accordion_props.rteTextProps('xs');
                        callback.singleElem(client, rteText , properties, 'xs');
                    }
                });
            }
        }             
    },

    "12. Check for primary cta properties for mobile": function(client) {
          globalProps(client);
          //var  ctaPrimary = pageObj.elements.ctaPrimary.selector;
           
        client.elements('css selector',ctaPrimary,results=>{
            if(results.value.length>0) {
                if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    properties = accordion_props.ctaPrimaryPropsMob('xs');
                    callback.multiloop(client, ctaPrimary , properties, 'xs');
        
                    //primary cta focus props
                    client.waitForElementVisible(ctaPrimary, 6000);
                    client.moveToElement(ctaPrimary,  10,  10);
                    client.mouseButtonDown(0);
                    client.pause(1000);
                    properties = accordion_props.ctaPrimaryFocusProps('xs');
                    callback.singleElem(client, ctaPrimary , properties, 'xs');
                }
            }
        
        });
    },
   
    "Ending the session":function(client){
        client.end();
    }
}

