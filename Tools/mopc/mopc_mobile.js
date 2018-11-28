var pageurl = require('../../pageurls.js'),
    pageObj,mopc_props,callback,size;

function globalProps(client){
    pageObj = client.page.mopc_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    mopc_props = require('./mopc_props.js')(client);   
}

module.exports = {
  '@tags': ['mobile', 'mopc', 'mopc-mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
           currentURL=pageurl.ULSTER_IE_MOPC_MOB
           callback.openURL(client,currentURL); 
    },


    "Checking 'checked Toggle Button' properties " :function(client){
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            ToggleButton_checked=pageObj.elements.ToggleButton_checked.selector
    
        client.elements('css selector', ToggleButton_checked, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,ToggleButton_checked)
                   properties = mopc_props.ToggleButtonProps('xs');  
                    callback.singleElem(client, ToggleButton_checked, properties, 'xs');
                
            }
        })
    
            
    }
    },
    
    "Checking 'unchecked Toggle Button' properties " :function(client){
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            ToggleButton_unchecked=pageObj.elements.ToggleButton_unchecked.selector
    
        client.elements('css selector', ToggleButton_unchecked, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,ToggleButton_unchecked)
                   properties = mopc_props.ToggleButton_uncheckedProps('xs');  
                    callback.singleElem(client, ToggleButton_unchecked, properties, 'xs');
                
    
                    
            }
        })
    
            
    }
    },



    "Selecting 'Over payment option ":function(client){
        client.click('.input-label--radio-option:first-of-type').pause(5000)
    },

    "Checking 'calulate savings button' properties":function(client){
        calculate_btn=pageObj.elements.calculate_btn.selector
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        client.elements('css selector',calculate_btn,results =>{
            for (var i=0 ; i<=results.value.length;i++) {
                properties = mopc_props.calculate_btn_props('xs');  
                callback.singleElem(client, calculate_btn, properties, 'xs');
            }
    
        })
    }
    },


    "Checking 'current monthly repayment result detail labels' properties " :function(client){
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
            monthly_repayment_header=pageObj.elements.monthly_repayment_header.selector
            overpayment_detail_labels=pageObj.elements.overpayment_detail_labels.selector
    
        client.elements('css selector', monthly_repayment_header, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,monthly_repayment_header)
                    properties = mopc_props.monthly_repayment_header('xs');  
                    callback.singleElem(client, monthly_repayment_header, properties, 'xs');
                }
    
                // result details labels 
                  properties = mopc_props.overpayment_detail_labels('xs');  
                  callback.singleElem(client, overpayment_detail_labels, properties, 'xs');
        })
    
            
    }
    },

    "Checking 'Over payment form' input  properties " :function(client){
       if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
        inputlabel=pageObj.elements.inputlabel.selector,
        inputtextbox_mob=pageObj.elements.inputtextbox_mob.selector,
        inputtextbox_mobfocus=pageObj.elements.inputtextbox_mobfocus.selector,


         // checking Text box labels properties
        client.elements('css selector', inputlabel, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,inputlabel)
                   properties = mopc_props.inputlabelProps('xs');  
                    callback.singleElem(client, inputlabel, properties, 'xs');


                    // checking Text box properties on focus 


                    client.moveToElement(inputtextbox_mob, 3, 3)
                    client.mouseButtonDown(0)
                    client.waitForElementVisible(inputtextbox_mobfocus, 3000)
                    client.pause(3000)
                    properties = mopc_props.inputhoverProps('xs');  
                    callback.multiloop(client, inputtextbox_mobfocus, properties, 'xs');
                        
                
            }
        })
    
            
    }
},




"Checking 'Pay your mortgage off earlier' functionality  " :function(client){

    client.click('.input-label--radio-option:first-of-type').pause(5000)
    
   if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
   
        // Setting mortgage balance 
        
        client.clearValue('#overpayment_currentmortgagebalance')
        client.pause(1000)
        client.expect.element('.error-container').text.to.contain('Please enter your mortgage balance')
        client.setValue('#overpayment_currentmortgagebalance', '25000') 
        .pause(500)


        //setting time remaining year 

        client.clearValue('#overpayment_timeremainingyear')
        client.pause(1000)
        client.expect.element('.error-container').text.to.contain('Please enter years remaining on your mortgage')
        client.setValue('#overpayment_timeremainingyear','24')
        .pause(500)


         //setting time remaining month 

        client.clearValue('#overpayment_timeremainingmonth')
        client.pause(1000)
        client.expect.element('.error-container').text.to.contain('Please enter months remaining on your mortgage')
        client.setValue('#overpayment_timeremainingmonth','4')
        
        .pause(500)

         //setting time current intrest rate  

        client
        .clearValue('#overpayment_currentrate')
        .pause(1000)
        client.expect.element('.error-container').text.to.contain('Please enter current interest rate on your mortgage')
        client.setValue('#overpayment_currentrate','4')
        .pause(500)

       
        //setting time current Additional EMI   
        client
        .clearValue('#overpayment_additionalemi')
        .setValue('#overpayment_additionalemi','500')
        .pause(500)

              //setting time current LUMP sum payment 
        .clearValue('#overpayment_lumpsum')
        .setValue('#overpayment_lumpsum','500')
        .pause(500)


        // Clicking on calculate savings button 

        .click('.tool--overpayment .overpayment--form .cta-next-button a')
        .pause(3000)
        if (currentURL!=pageurl.ULSTER_IE_MOPC_MOB){
        client.expect.element('.js-current-emi').text.to.contain('£134'); 
        client.expect.element('.js-new-emi').text.to.contain('£634'); 
        client.expect.element('.js-time-saved').text.to.contain('20 yrs, 10 mths');
        client.expect.element('.js-money-saved').text.to.contain('£12,377');
        client.expect.element('svg').to.be.visible;
        client.expect.element('path').to.be.visible;

        }
        else
        {
            client.expect.element('.js-current-emi-ineuro').text.to.contain('€134'); 
            client.expect.element('.js-new-emi-ineuro').text.to.contain('€634'); 
            client.expect.element('.js-money-saved-ineuro').text.to.contain('€12,377');
            client.expect.element('svg').to.be.visible;
            client.expect.element('path').to.be.visible;
           
        }
        

}
},

"Going back to home page ":function(client){

    if(currentURL==pageurl.RBS_MOPC_MOB){
    client.click('.grid__item.overpayment--graph.palm--one-whole.desk--three-fifths .js-comp-wrap-m-interstitial .cta.cta--back-m.js-home-btn a')
    .pause(4000)
    client.click('.grid__item.palm--one-whole.desk--two-fifths .js-comp-wrap-m-interstitial .cta.cta--back-m.js-home-btn a')
    .pause(4000)
    } 
    else  {
        client.click('.grid__item.overpayment--graph.palm--one-whole.desk--three-fifths .cta.cta--back-m.js-home-btn a')
        .pause(4000)
        client.click('.grid__item.palm--one-whole.desk--two-fifths .cta.cta--back-m.js-home-btn a')
        .pause(3000)
    }

},


"Checking 'Reduce your monthly payments' functionality ":function(client){
        client.click('.input-label--radio-option:last-of-type').pause(4000)
        .click('.tool--overpayment .overpayment--form .cta-next-button a')
        .pause(4000)

        if (currentURL!=pageurl.ULSTER_IE_MOPC_MOB){
        client.expect.element('.js-current-emi').text.to.contain('£134'); 
        client.expect.element('.js-new-emi').text.to.contain('£634'); 
        client.expect.element('.js-save-each-month').text.to.contain('£-500'); 
        client.expect.element('.js-money-saved').text.to.contain('£12,377');
        client.expect.element('svg').to.be.visible;
        client.expect.element('path').to.be.visible;
        }
        else
        {
            client.expect.element('.js-current-emi-ineuro').text.to.contain('€134'); 
            client.expect.element('.js-new-emi-ineuro').text.to.contain('€634'); 
            client.expect.element('.js-save-each-month-ineuro').text.to.contain('€-500');
            client.expect.element('.js-money-saved-ineuro').text.to.contain('€12,377');
            client.expect.element('svg').to.be.visible;
            client.expect.element('path').to.be.visible;
           
        }
        

},


    "Ending the session":function(client){
        client.end();
    }


}
