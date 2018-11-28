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
    '@tags': ['dynamic-clock-desktop', 'dynamic-clock','desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.LOMBARD_DYNAMIC_CLOCK);  
    },
    
    "1.Verifying Dynamic Clock shelf Properties": function(client) {
            shelfPadding = pageObj.elements.shelfPadding.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Padding 
                properties = dynamic_clock_props.shelfPadding('lg');
                callback.singleElem(client, shelfPadding, properties,'lg');
            }
    },

    "2.Verifying Dynamic Clock text Properties": function(client) {
            dynClockText = pageObj.elements.dynClockText.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock text 
                properties = dynamic_clock_props.dynClockText('lg');
                callback.singleElem(client, dynClockText, properties,'lg');
            }
    },

    "3.Verifying Dynamic Clock Heading Properties": function(client) {
            dynClockHeading = pageObj.elements.dynClockHeading.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Heading 
                properties = dynamic_clock_props.dynClockHeading('lg');
                callback.singleElem(client, dynClockHeading, properties,'lg');
            }
    },

    "4.Verifying Dynamic Clock RTE Properties": function(client) {
            dynClocknormalText = pageObj.elements.dynClocknormalText.selector,
            dynClockrte = pageObj.elements.dynClockrte.selector,
            dynClockrteP = pageObj.elements.dynClockrteP.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Normal Text 
                properties = dynamic_clock_props.dynClocknormalText('lg');
                callback.singleElem(client, dynClocknormalText, properties,'lg');

                //Dynamic Clock RTE
                properties = dynamic_clock_props.dynClockrte('lg');
                callback.singleElem(client, dynClockrte, properties,'lg');

                 //Dynamic Clock RTE P
                properties = dynamic_clock_props.dynClockrteP('lg');
                callback.singleElem(client, dynClockrteP, properties,'lg');
            }
    },

    "5.Verifying Dynamic Clock Error Text Properties": function(client) {
            dynClockErrorText = pageObj.elements.dynClockErrorText.selector,
            dynClockErrorRte = pageObj.elements.dynClockErrorRte.selector,
            dynClockErrorRteP = pageObj.elements.dynClockErrorRteP.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Error Text 
                properties = dynamic_clock_props.dynClockErrorText('lg');
                callback.singleElem(client, dynClockErrorText, properties,'lg');

                //Dynamic Clock Error RTE
                properties = dynamic_clock_props.dynClockErrorRte('lg');
                callback.singleElem(client, dynClockErrorRte, properties,'lg');

                //Dynamic Clock Error RTE P
                properties = dynamic_clock_props.dynClockErrorRteP('lg');
                callback.singleElem(client, dynClockErrorRteP, properties,'lg');
            }
    },

    "6.Verifying Dynamic Clock Block Properties": function(client) {
            dynClockBlock = pageObj.elements.dynClockBlock.selector,
            flipTimer = pageObj.elements.flipTimer.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Block
                properties = dynamic_clock_props.dynClockBlock('lg');
                callback.singleElem(client, dynClockBlock, properties,'lg');

                //Dynamic Clock Flip Timer
                properties = dynamic_clock_props.flipTimer('lg');
                callback.singleElem(client, flipTimer, properties,'lg');
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
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock Flip Timer Days
                properties = dynamic_clock_props.flipTimerDHM('lg');
                callback.singleElem(client, flipTimerDHM, properties,'lg');

                //Dynamic Clock Flip Timer DigitSet
                properties = dynamic_clock_props.flipTimerDigitSet('lg');
                callback.singleElem(client, flipTimerDigitSet, properties,'lg');
                client.expect.element(flipTimerDigitSet).to.have.css('background-image').which.contains('dyn-clock-desktop-bg.png');

                //Dynamic Clock Flip Timer Digit
                properties = dynamic_clock_props.flipTimerDigit('lg');
                callback.singleElem(client, flipTimerDigit, properties,'lg');

                //Dynamic Clock Flip Timer DigitTop
                properties = dynamic_clock_props.flipTimerDigitTop('lg');
                callback.singleElem(client, flipTimerDigitTop, properties,'lg');

                //Dynamic Clock Flip Timer Digit ShadowTop
                properties = dynamic_clock_props.flipTimerShadowTop('lg');
                callback.singleElem(client, flipTimerShadowTop, properties,'lg');

                //Dynamic Clock Flip Timer Digit DigitBottom
                properties = dynamic_clock_props.flipTimerDigitBottom('lg');
                callback.singleElem(client, flipTimerDigitBottom, properties,'lg');

                //Dynamic Clock Flip Timer Digit ShadowBottom
                properties = dynamic_clock_props.flipTimerShadowBottom('lg');
                callback.singleElem(client, flipTimerShadowBottom, properties,'lg');
            }
    },

    "8.Verifying Dynamic Clock Labels Properties": function(client) {
            flipTimerClockLabels = pageObj.elements.flipTimerClockLabels.selector,
            flipTimerLabels = pageObj.elements.flipTimerLabels.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock flipTimer ClockLabels 
                properties = dynamic_clock_props.flipTimerClockLabels('lg');
                callback.singleElem(client, flipTimerClockLabels, properties,'lg');

                //Dynamic Clock flipTimer Labels
                properties = dynamic_clock_props.flipTimerLabels('lg');
                callback.singleElem(client, flipTimerLabels, properties,'lg');
            }
    },

    "9.Verifying Dynamic Clock CTA Properties": function(client) {
            clockCta = pageObj.elements.clockCta.selector,
            clockCta_L = pageObj.elements.clockCta_L.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                    
                //Dynamic Clock CTA 
                properties = dynamic_clock_props.clockCta('lg');
                callback.singleElem(client, clockCta, properties,'lg');

                //Dynamic Clock CTA--L
                properties = dynamic_clock_props.clockCta_L('lg');
                callback.singleElem(client, clockCta_L, properties,'lg');
            }
    },

    "10.Verifying Dynamic Clock CTA Functionality": function(client) {
            clockCta_L = pageObj.elements.clockCta_L.selector,
            ctaHover = pageObj.elements.ctaHover.selector,
            ctaMouseDown = pageObj.elements.ctaMouseDown.selector,
            globalProps(client);
                
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
               //href
               client.elements('css selector',clockCta_L,results=>{
                   if(results.value.length>0) {
                    client.expect.element(clockCta_L).to.have.attribute('href'); 
                    }

                    //cta hover
                    client.source(() => {
                    console.log("--cta hover--"); 
                    });
                    properties = dynamic_clock_props.ctaHover('lg');
                    client.moveToElement(clockCta_L, 10, 10);
                    client.pause(10000);
                    callback.singleElem(client, clockCta_L, properties, 'lg');

                    //sec cta mouse down props
                    client.source(() => {
                    console.log("--cta mouse down--"); 
                    });
                    client.waitForElementVisible(clockCta_L, 6000);
                    client.moveToElement(clockCta_L,  1,  1);
                    client.mouseButtonDown(0);
                    client.pause(1000); 

                    properties = dynamic_clock_props.ctaMouseDown('lg');
                    callback.singleElem(client, ctaMouseDown , properties, 'lg');

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

