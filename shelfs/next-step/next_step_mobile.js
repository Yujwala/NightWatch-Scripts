var pageurl = require('../../pageurls.js'),
    pageObj,next_step_props,callback,size;   

function globalProps(client){
    pageObj = client.page.next_step_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;
    callback.getBrand(client);
    next_step_props = require('./next_step_props.js')(client);   
}

module.exports = {
  '@tags': ['next-step','mobile','next-step-mobile'],
    //Opening the URL
    "1.Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "2.Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.NW_PER_NEXT_STEP_MOB);
           console.log("--Mobile--"+pageurl.NW_PER_NEXT_STEP_MOB);  
    },

    "3.Verifying Next Step CTA Icons Properties": function(client) {
            nextStepsCtaIcons_m = pageObj.elements.nextStepsCtaIcons_m.selector,
            nextStepsCtaIconsa_m = pageObj.elements.nextStepsCtaIconsa_m.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //next Steps Cta Icons
                properties = next_step_props.nextStepsCtaIconsBefore('xs');
                callback.pseudoSingleElem(client,nextStepsCtaIcons_m,':before',properties);

                properties = next_step_props.nextStepsCtaIconsa_m('lg');
                callback.multiloop(client, nextStepsCtaIconsa_m, properties,'lg');

                client.elements('css selector',nextStepsCtaIconsa_m,results=>{
                   if(results.value.length>0) {
                    client.expect.element(nextStepsCtaIconsa_m).to.have.attribute('href'); 
                   }
                });
        
            }
    },

    "4.Verifying Next Step CTA Li Properties": function(client) {
            nextStepsCtaIconsLi = pageObj.elements.nextStepsCtaIconsLi.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Next Step Cta Li
                properties = next_step_props.nextStepsCtaIconsLi('xs');
                callback.multiloop(client, nextStepsCtaIconsLi, properties,'xs');

            }
    },

    "5.Verifying Next Step CTA Links Functionality Properties": function(client) {
            nextStepsCtaIconsa_m = pageObj.elements.nextStepsCtaIconsa_m.selector,
            ctaMouseDown_m = pageObj.elements.ctaMouseDown_m.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                client.elements('css selector',nextStepsCtaIconsa_m,results=>{
                   if(results.value.length>0) {
                    client.expect.element(nextStepsCtaIconsa_m).to.have.attribute('href'); 
                    }

                    //cta hover
                    client.source(() => {
                    console.log("--cta hover--"); 
                    });
                    properties = next_step_props.ctaHover_m('lg');
                    client.moveToElement(nextStepsCtaIconsa_m, 10, 10);
                    client.pause(10000);
                    callback.singleElem(client, nextStepsCtaIconsa_m, properties, 'lg');

                    //sec cta mouse down props
                    client.source(() => {
                    console.log("--cta mouse down--"); 
                    });
                    client.waitForElementVisible(nextStepsCtaIconsa_m, 6000);
                    client.moveToElement(nextStepsCtaIconsa_m,  10,  10);
                    client.mouseButtonDown(0);
                    client.pause(1000); 

                    properties = next_step_props.ctaMouseDown_m('lg');
                    callback.singleElem(client, ctaMouseDown_m , properties, 'lg');

                    //client.click(headLine);
                    //click CTA
                    client.source(() => {
                    console.log("--cta clicked--"); 
                    });
                    client.click(nextStepsCtaIconsa_m);

                });

            }
    },

    "Ending the session":function(client){
        client.end();
    }
    
}


