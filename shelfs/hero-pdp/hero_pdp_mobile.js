var pageurl = require('../../pageurls.js'),
    pageObj,hero_pdp_props,callback,size;

function globalProps(client){
    pageObj = client.page.hero_pdp_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    hero_pdp_props = require('./hero_pdp_props.js')(client);  
}    

module.exports = {
    '@tags': ['hero-pdp-mobile', 'hero-pdp','mobile'],
    //Opening the Mobile URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.RBS_IF_HERO_PDP_MOB);
           console.log("--Mobile--"+pageurl.RBS_BUS_HERO_PDP_MOB);  
    },
    
    //--------VERIFYING NATWEST HERO SHELF PROPERTIES FOR DESKTOP-------------//
    "1.Verifying hero-pdp shelf Properties": function(client) {
            shelfMarSel = pageObj.elements.shelfMarSel.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
            //heroshelf background color properties
                properties = hero_pdp_props.shelfMarPropsMobile('xs');
                callback.singleElem(client, shelfMarSel, properties, 'xs' );

            }
    
    },
    "2.Verifying hero shelf-pdp image Properties": function(client) {
            imgSel = pageObj.elements.imgSel.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                client.elements('css selector',imgSel,results=>{
                if(results.value.length>0) {           
                    properties = hero_pdp_props.imgProps('xs');
                    callback.singleElem(client, imgSel, properties, 'xs');
                }
               });
            }
        
    },
    "3.Verifying hero-copy Properties": function(client) {
            herocopySel = pageObj.elements.herocopySel.selector,
            globalProps(client);

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
                properties = hero_pdp_props.herocopyMobile('xs');
                callback.singleElem(client, herocopySel, properties, 'xs');
               
            }
       
    },
    "4.Verifying comp-rich-text Properties": function(client) {
            comprichSel = pageObj.elements.comprichSel.selector,
            comprichP = pageObj.elements.comprichP.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
               
                properties = hero_pdp_props.comprichMobile('xs');
                callback.singleElem(client, comprichSel, properties, 'xs');

                properties = hero_pdp_props.comprichPMobile('xs');
                callback.singleElem(client, comprichP, properties, 'xs');
                       
        }

    },
    
    "6.Verifying hero heading Properties": function(client) {
            heroHeadingSel = pageObj.elements.heroHeadingSel.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
               
                properties = hero_pdp_props.heroheadMobile('xs');
                callback.multiloop(client, heroHeadingSel, properties, 'xs');
                       
            }

       
    },
    "7.Verifying hero signpost Properties": function(client) {
            signpostSel = pageObj.elements.signpostSel.selector,
            globalProps(client);
                    
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                
                properties = hero_pdp_props.signpostMobile('xs');
                callback.multiloop(client, signpostSel, properties, 'xs');
               
            }
    
    },
    "8.Verifying hero CTA Properties": function(client) {
            heroCTASel = pageObj.elements.heroCTASel.selector,
            ctaTextSel = pageObj.elements.ctaTextSel.selector,
            heroCTA_m = pageObj.elements.heroCTA_m.selector,
            heroCTA_m_text = pageObj.elements.heroCTA_m_text.selector,
            ctaHeroPdpMouseDown = pageObj.elements.ctaFocusSel.selector,
            globalProps(client);
            
           
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){    
                //cta-L
                properties = hero_pdp_props.heroCTAMobile('xs');
                callback.multiloop(client, heroCTASel, properties, 'xs');

                properties = hero_pdp_props.ctaTextMobile('xs');
                callback.multiloop(client, ctaTextSel, properties, 'xs');

                //cta-M
                properties = hero_pdp_props.heroCTA_mMobile('xs');
                callback.multiloop(client, heroCTA_m, properties, 'xs');

                properties = hero_pdp_props.heroCTA_m_textMobile('xs');
                callback.multiloop(client, heroCTA_m_text, properties, 'xs');

                //cta hover
                properties = hero_pdp_props.ctaHeroPdpHover('xs');
                client.moveToElement(ctaTextSel, 10, 10);
                client.pause(10000);
                callback.singleElem(client, ctaTextSel, properties, 'xs'); 

                //sec cta-L mouse down props
                client.waitForElementVisible(ctaTextSel, 6000);
                client.moveToElement(ctaTextSel,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);

                properties = hero_pdp_props.ctaHeroPdpMouseDown('xs');
                callback.multiloop(client, ctaHeroPdpMouseDown , properties, 'xs'); 
                client.mouseButtonUp();

                //cta-M hover
                properties = hero_pdp_props.ctaHeroMPdpHover('xs');
                client.moveToElement(heroCTA_m_text, 10, 10);
                client.pause(10000);
                callback.singleElem(client, heroCTA_m_text, properties, 'xs'); 

                //sec cta-M mouse down props
                client.waitForElementVisible(heroCTA_m_text, 6000);
                client.moveToElement(heroCTA_m_text,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);

                properties = hero_pdp_props.ctaHeroPdpmMouseDown('xs');
                callback.multiloop(client, ctaHeroPdpMouseDown , properties, 'xs'); 
                       
            }

    },

    "8.Verifying hero footline Properties": function(client) {
            hero_footline = pageObj.elements.hero_footline.selector,
            footlineRte = pageObj.elements.footlineRte.selector,
            footlineRte_p = pageObj.elements.footlineRte_p.selector,
            heroSeparator = pageObj.elements.heroSeparator.selector,
            globalProps(client);
            
           
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){    
                
                properties = hero_pdp_props.hero_footlineMobile('xs');
                callback.multiloop(client, hero_footline, properties, 'xs');

                properties = hero_pdp_props.footlineRteMobile('xs');
                callback.multiloop(client, footlineRte, properties, 'xs');

                properties = hero_pdp_props.footlineRte_pMobile('xs');
                callback.multiloop(client, footlineRte_p, properties, 'xs');
                       
            }

    },
    
    'Closing Browser': function(client) {
        client.pause(1000);
        client.end();
    }
}