var pageurl = require('../../pageurls.js'),
    pageObj,dynamic_clock_props,callback,size;

function globalProps(client){
    pageObj = client.page.dynamic_clock_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    dynamic_clock_props = require('./dynamic_clock_props.js')(client);  
}    

module.exports = {
    '@tags': ['dynamic-clock-mobile', 'dynamic-clock','mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.LOMBARD_DYNAMIC_CLOCK_MOB);
           console.log("--Mobile--"+pageurl.NW_PER_DYNAMIC_CLOCK_MOB);  
    },
    
    "1.Verifying Dynamic Clock shelf Properties": function(client) {
            shelfPadding = pageObj.elements.shelfPadding.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Padding 
                properties = dynamic_clock_props.shelfPadding('xs');
                callback.singleElem(client, shelfPadding, properties,'xs');
            }
    },

    "2.Verifying Dynamic Clock text Properties": function(client) {
            dynClockText = pageObj.elements.dynClockText.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock text 
                properties = dynamic_clock_props.dynClockText('xs');
                callback.singleElem(client, dynClockText, properties,'xs');
            }
    },

    "3.Verifying Dynamic Clock Heading Properties": function(client) {
            dynClockHeading = pageObj.elements.dynClockHeading.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Heading 
                properties = dynamic_clock_props.dynClockHeading('xs');
                callback.singleElem(client, dynClockHeading, properties,'xs');
            }
    },

    "4.Verifying Dynamic Clock RTE Properties": function(client) {
            dynClocknormalText = pageObj.elements.dynClocknormalText.selector,
            dynClockrte = pageObj.elements.dynClockrte.selector,
            dynClockrteP = pageObj.elements.dynClockrteP.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Normal Text 
                properties = dynamic_clock_props.dynClocknormalText('xs');
                callback.singleElem(client, dynClocknormalText, properties,'xs');

                //Dynamic Clock RTE
                properties = dynamic_clock_props.dynClockrte('xs');
                callback.singleElem(client, dynClockrte, properties,'xs');

                 //Dynamic Clock RTE P
                properties = dynamic_clock_props.dynClockrteP('xs');
                callback.singleElem(client, dynClockrteP, properties,'xs');
            }
    },

    "5.Verifying Dynamic Clock Error Text Properties": function(client) {
            dynClockErrorText = pageObj.elements.dynClockErrorText.selector,
            dynClockErrorRte = pageObj.elements.dynClockErrorRte.selector,
            dynClockErrorRteP = pageObj.elements.dynClockErrorRteP.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Error Text 
                properties = dynamic_clock_props.dynClockErrorText('xs');
                callback.singleElem(client, dynClockErrorText, properties,'xs');

                //Dynamic Clock Error RTE
                properties = dynamic_clock_props.dynClockErrorRte('xs');
                callback.singleElem(client, dynClockErrorRte, properties,'xs');

                //Dynamic Clock Error RTE P
                properties = dynamic_clock_props.dynClockErrorRteP('xs');
                callback.singleElem(client, dynClockErrorRteP, properties,'xs');
            }
    },

    "6.Verifying Dynamic Clock Block Properties": function(client) {
            dynClockBlock = pageObj.elements.dynClockBlock.selector,
            flipTimer = pageObj.elements.flipTimer.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Block
                properties = dynamic_clock_props.dynClockBlock('xs');
                callback.singleElem(client, dynClockBlock, properties,'xs');

                //Dynamic Clock Flip Timer
                properties = dynamic_clock_props.flipTimer('xs');
                callback.singleElem(client, flipTimer, properties,'xs');
            }
    },

    "7.Verifying Dynamic Clock Days, Hours, Minutes  Properties": function(client) {
            flipTimerDHM = pageObj.elements.flipTimerDHM.selector,
            flipTimerDigitSet = pageObj.elements.flipTimerDigitSet.selector,
            flipTimerDigit = pageObj.elements.flipTimerDigit.selector,
            flipTimerDigitTop = pageObj.elements.flipTimerDigitTop.selector,
            flipTimerShadowTop = pageObj.elements.flipTimerShadowTop.selector,
            flipTimerDigitBottom = pageObj.elements.flipTimerDigitBottom.selector,
            flipTimerShadowBottom = pageObj.elements.flipTimerShadowBottom.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock Flip Timer Days
                properties = dynamic_clock_props.flipTimerDHM('xs');
                callback.singleElem(client, flipTimerDHM, properties,'xs');

                //Dynamic Clock Flip Timer DigitSet
                properties = dynamic_clock_props.flipTimerDigitSet('xs');
                callback.singleElem(client, flipTimerDigitSet, properties,'xs');
                client.expect.element(flipTimerDigitSet).to.have.css('background-image').which.contains('dyn-clock-mobile-bg.png');

                //Dynamic Clock Flip Timer Digit
                properties = dynamic_clock_props.flipTimerDigit('xs');
                callback.singleElem(client, flipTimerDigit, properties,'xs');

                //Dynamic Clock Flip Timer DigitTop
                properties = dynamic_clock_props.flipTimerDigitTop('xs');
                callback.singleElem(client, flipTimerDigitTop, properties,'xs');

                //Dynamic Clock Flip Timer Digit ShadowTop
                properties = dynamic_clock_props.flipTimerShadowTop('xs');
                callback.singleElem(client, flipTimerShadowTop, properties,'xs');

                //Dynamic Clock Flip Timer Digit DigitBottom
                properties = dynamic_clock_props.flipTimerDigitBottom('xs');
                callback.singleElem(client, flipTimerDigitBottom, properties,'xs');

                //Dynamic Clock Flip Timer Digit ShadowBottom
                properties = dynamic_clock_props.flipTimerShadowBottom('xs');
                callback.singleElem(client, flipTimerShadowBottom, properties,'xs');
            }
    },

    "8.Verifying Dynamic Clock Labels Properties": function(client) {
            flipTimerClockLabels = pageObj.elements.flipTimerClockLabels.selector,
            flipTimerLabels = pageObj.elements.flipTimerLabels.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock flipTimer ClockLabels 
                properties = dynamic_clock_props.flipTimerClockLabels('xs');
                callback.singleElem(client, flipTimerClockLabels, properties,'xs');

                //Dynamic Clock flipTimer Labels
                properties = dynamic_clock_props.flipTimerLabels('xs');
                callback.singleElem(client, flipTimerLabels, properties,'xs');
            }
    },

    "9.Verifying Dynamic Clock CTA Properties": function(client) {
            clockCta = pageObj.elements.clockCta.selector,
            clockCta_L = pageObj.elements.clockCta_L.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
                    
                //Dynamic Clock CTA 
                properties = dynamic_clock_props.clockCta('xs');
                callback.singleElem(client, clockCta, properties,'xs');

                //Dynamic Clock CTA--L
                properties = dynamic_clock_props.clockCta_L('xs');
                callback.singleElem(client, clockCta_L, properties,'xs');
            }
    },

    "10.Verifying Dynamic Clock CTA Functionality": function(client) {
            clockCta_L = pageObj.elements.clockCta_L.selector,
            ctaHover = pageObj.elements.ctaHover.selector,
            ctaMouseDown = pageObj.elements.ctaMouseDown.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
               //href
               client.elements('css selector',clockCta_L,results=>{
                   if(results.value.length>0) {
                    client.expect.element(clockCta_L).to.have.attribute('href'); 
                    }

                    //cta hover
                    client.source(() => {
                    console.log("--cta hover--"); 
                    });
                    properties = dynamic_clock_props.ctaHover('xs');
                    client.moveToElement(clockCta_L, 10, 10);
                    client.pause(10000);
                    callback.singleElem(client, clockCta_L, properties, 'xs');

                    //sec cta mouse down props
                    client.source(() => {
                    console.log("--cta mouse down--"); 
                    });
                    client.waitForElementVisible(clockCta_L, 6000);
                    client.moveToElement(clockCta_L,  1,  1);
                    client.mouseButtonDown(0);
                    client.pause(1000); 

                    properties = dynamic_clock_props.ctaMouseDown('xs');
                    callback.singleElem(client, ctaMouseDown , properties, 'xs');

                    client.click(dynClockHeading);
                    //click CTA
                    client.source(() => {
                    console.log("--cta clicked--"); 
                    });
                    client.click(clockCta_L);

                });
            }
    },

    'Closing Browser': function(client) {
        client.pause(1000);
        client.end();
    }
}

