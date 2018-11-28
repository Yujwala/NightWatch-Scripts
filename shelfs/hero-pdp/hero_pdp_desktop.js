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
    '@tags': ['hero-pdp-desktop', 'hero-pdp','desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.RBS_IF_HERO_PDP); 
            
    },
    
    //--------VERIFYING NATWEST HERO SHELF PROPERTIES FOR DESKTOP-------------//
    "1.Verifying hero-pdp shelf Properties": function(client) {
            shelfMarSel = pageObj.elements.shelfMarSel.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
            //heroshelf background color properties
                properties = hero_pdp_props.shelfMarProps('lg');
                callback.singleElem(client, shelfMarSel, properties, 'lg' );

            }
    
    },
    /*"2.Verifying hero shelf-pdp image Properties": function(client) {
            imgSel = pageObj.elements.imgSel.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                client.elements('css selector',imgSel,results=>{
                if(results.value.length>0) {           
                    properties = hero_pdp_props.imgProps('lg');
                    callback.singleElem(client, imgSel, properties, 'lg');
                }
               });
            }
        
    },
    "3.Verifying hero-copy Properties": function(client) {
            herocopySel = pageObj.elements.herocopySel.selector,
            globalProps(client);

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
                properties = hero_pdp_props.herocopyProps('lg');
                callback.singleElem(client, herocopySel, properties, 'lg');
               
            }
       
    },
    "4.Verifying comp-rich-text Properties": function(client) {
            comprichSel = pageObj.elements.comprichSel.selector,
            comprichP = pageObj.elements.comprichP.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
               
                properties = hero_pdp_props.comprichProps('lg');
                callback.singleElem(client, comprichSel, properties, 'lg');

                properties = hero_pdp_props.comprichP('lg');
                callback.singleElem(client, comprichP, properties, 'lg');
                       
        }

    },
    
    "6.Verifying hero heading Properties": function(client) {
            heroHeadingSel = pageObj.elements.heroHeadingSel.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
               
                properties = hero_pdp_props.heroheadProps('lg');
                callback.multiloop(client, heroHeadingSel, properties, 'lg');
                       
            }

       
    },
    "7.Verifying hero signpost Properties": function(client) {
            signpostSel = pageObj.elements.signpostSel.selector,
            globalProps(client);
                    
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                
                properties = hero_pdp_props.signpostProps('lg');
                callback.multiloop(client, signpostSel, properties, 'lg');
               
            }
    
    },
    "8.Verifying hero CTA Properties": function(client) {
            heroCTASel = pageObj.elements.heroCTASel.selector,
            ctaTextSel = pageObj.elements.ctaTextSel.selector,
            heroCTA_m = pageObj.elements.heroCTA_m.selector,
            heroCTA_m_text = pageObj.elements.heroCTA_m_text.selector,
            ctaHeroPdpMouseDown = pageObj.elements.ctaFocusSel.selector,
            globalProps(client);
            
           
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){    
                //cta-L
                properties = hero_pdp_props.heroCTAProps('lg');
                callback.multiloop(client, heroCTASel, properties, 'lg');

                properties = hero_pdp_props.ctaTextProps('lg');
                callback.multiloop(client, ctaTextSel, properties, 'lg');

                //cta-M
                properties = hero_pdp_props.heroCTA_m('lg');
                callback.multiloop(client, heroCTA_m, properties, 'lg');

                properties = hero_pdp_props.heroCTA_m_text('lg');
                callback.multiloop(client, heroCTA_m_text, properties, 'lg');

                //cta hover
                properties = hero_pdp_props.ctaHeroPdpHover('lg');
                client.moveToElement(ctaTextSel, 10, 10);
                client.pause(10000);
                callback.singleElem(client, ctaTextSel, properties, 'lg'); 

                //sec cta-L mouse down props
                client.waitForElementVisible(ctaTextSel, 6000);
                client.moveToElement(ctaTextSel,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);

                properties = hero_pdp_props.ctaHeroPdpMouseDown('lg');
                callback.multiloop(client, ctaHeroPdpMouseDown , properties, 'lg'); 
                client.mouseButtonUp();

                //cta-M hover
                properties = hero_pdp_props.ctaHeroMPdpHover('lg');
                client.moveToElement(heroCTA_m_text, 10, 10);
                client.pause(10000);
                callback.singleElem(client, heroCTA_m_text, properties, 'lg'); 

                //sec cta-M mouse down props
                client.waitForElementVisible(heroCTA_m_text, 6000);
                client.moveToElement(heroCTA_m_text,  10,  10);
                client.mouseButtonDown(0);
                client.pause(1000);

                properties = hero_pdp_props.ctaHeroPdpmMouseDown('lg');
                callback.multiloop(client, ctaHeroPdpMouseDown , properties, 'lg'); 
                       
            }

    },

    "8.Verifying hero footline Properties": function(client) {
            hero_footline = pageObj.elements.hero_footline.selector,
            footlineRte = pageObj.elements.footlineRte.selector,
            footlineRte_p = pageObj.elements.footlineRte_p.selector,
            heroSeparator = pageObj.elements.heroSeparator.selector,
            globalProps(client);
            
           
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){    
                
                properties = hero_pdp_props.hero_footline('lg');
                callback.multiloop(client, hero_footline, properties, 'lg');

                properties = hero_pdp_props.footlineRte('lg');
                callback.multiloop(client, footlineRte, properties, 'lg');

                properties = hero_pdp_props.footlineRte_p('lg');
                callback.multiloop(client, footlineRte_p, properties, 'lg');

                properties = hero_pdp_props.heroSeparator('lg');
                callback.multiloop(client, heroSeparator, properties, 'lg');
                       
            }

    },*/
    
    'Closing Browser': function(client) {
        client.pause(1000);
        client.end();
    }
}