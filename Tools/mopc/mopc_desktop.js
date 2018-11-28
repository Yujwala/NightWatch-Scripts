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
  '@tags': ['desktop', 'mopc', 'mopc-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            currentURL=pageurl.ULSTER_IE_MOPC
            callback.openURL(client,currentURL); 
            
    },

    "Checking Toggle Text properties " :function(client){
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            Toggle_text=pageObj.elements.Toggle_text.selector

        client.elements('css selector', Toggle_text, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,Toggle_text)
                   properties = mopc_props.Toggle_textprops('lg');  
                    callback.multiloop(client, Toggle_text, properties, 'lg');
                
            }

            // Checking the line above toggle text 

            Toggletext_lineabove=pageObj.elements.Toggletext_lineabove.selector
            properties = mopc_props.Toggletext_lineabove('lg');
            callback.singleElem(client, Toggletext_lineabove, properties, 'lg');

        })
    
            
    }
},

    "Checking 'Over payment form' input labels properties " :function(client){
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        inputlabel=pageObj.elements.inputlabel.selector

        client.elements('css selector', inputlabel, results => {
                    for (var i=0 ; i<=results.value.length;i++) {    
                    callback.scrollToElement(client,inputlabel)
                   properties = mopc_props.inputlabelProps('lg');  
                    callback.singleElem(client, inputlabel, properties, 'lg');
                
            }
        })
    
            
    }
},

"Checking 'checked Toggle Button' properties " :function(client){
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        ToggleButton_checked=pageObj.elements.ToggleButton_checked.selector

    client.elements('css selector', ToggleButton_checked, results => {
                for (var i=0 ; i<=results.value.length;i++) {    
                callback.scrollToElement(client,ToggleButton_checked)
               properties = mopc_props.ToggleButtonProps('lg');  
                callback.singleElem(client, ToggleButton_checked, properties, 'lg');
            
        }
    })

        
}
},

"Checking 'unchecked Toggle Button' properties " :function(client){
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        ToggleButton_unchecked=pageObj.elements.ToggleButton_unchecked.selector

    client.elements('css selector', ToggleButton_unchecked, results => {
                for (var i=0 ; i<=results.value.length;i++) {    
                callback.scrollToElement(client,ToggleButton_unchecked)
               properties = mopc_props.ToggleButton_uncheckedProps('lg');  
                callback.singleElem(client, ToggleButton_unchecked, properties, 'lg');
            

                
        }
    })

        
}
},


"Checking 'current monthly repayment result detail labels' properties " :function(client){
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        monthly_repayment_header=pageObj.elements.monthly_repayment_header.selector
        overpayment_detail_labels=pageObj.elements.overpayment_detail_labels.selector

    client.elements('css selector', monthly_repayment_header, results => {
                for (var i=0 ; i<=results.value.length;i++) {    
                callback.scrollToElement(client,monthly_repayment_header)
                properties = mopc_props.monthly_repayment_header('lg');  
                callback.singleElem(client, monthly_repayment_header, properties, 'lg');
            }

            // result details labels 
              properties = mopc_props.overpayment_detail_labels('lg');  
              callback.singleElem(client, overpayment_detail_labels, properties, 'lg');
    })

        
}
},




"Checking 'Over payment form' input  ON HOVER properties " :function(client){
    inputtextbox = pageObj.elements.inputtextbox.selector;
   if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice ) {
    client.elements('css selector', inputtextbox, results => {
                for (var i=0 ; i<=results.value.length;i++) {    
                client.moveToElement(inputtextbox, 3, 3)
                client.mouseButtonDown(0)
                client.pause(3000)
                properties = mopc_props.inputhoverProps('lg');  
                callback.multiloop(client, inputtextbox +":focus", properties, 'lg');
                 
                

        }
    })

        
}
},

"Checking 'calulate savings button' properties":function(client){
    calculate_btn=pageObj.elements.calculate_btn.selector
    calculate_btn_disabled=pageObj.elements.calculate_btn_disabled.selector
    client.elements('css selector',calculate_btn,results =>{
        for (var i=0 ; i<=results.value.length;i++) {
            properties = mopc_props.calculate_btn_props('lg');  
            callback.singleElem(client, calculate_btn, properties, 'lg');
        }

    })
},
"Checking 'Pay your mortgage off earlier' functionality  " :function(client){

    client.click('.input-label--radio-option:first-of-type').pause(5000)
    
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
   
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

        if (currentURL!=pageurl.ULSTER_IE_MOPC){
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
            client.expect.element('.js-time-saved').text.to.contain('20 yrs, 10 mths');
            client.expect.element('.js-money-saved-ineuro').text.to.contain('€12,377');
            client.expect.element('svg').to.be.visible;
            client.expect.element('path').to.be.visible;
           
        }

}
},

"Checking 'Reduce your monthly payments' functionality ":function(client){

    
       client.click('.input-label--radio-option:last-of-type')  
       .pause(4000)
        .click('.tool--overpayment .overpayment--form .cta-next-button a')
        .pause(4000)

        if (currentURL!=pageurl.ULSTER_IE_MOPC){
        client.expect.element('.js-current-emi').text.to.contain('£134'); 
        client.expect.element('.js-new-emi').text.to.contain('£131'); 
        client.expect.element('.js-save-each-month').text.to.contain('£3');
        client.expect.element('.js-money-saved').text.to.contain('£283');
        client.expect.element('svg').to.be.visible;
        client.expect.element('path').to.be.visible;
        }
        else
        {
            client.expect.element('.js-current-emi-ineuro').text.to.contain('€134'); 
            client.expect.element('.js-new-emi-ineuro').text.to.contain('€131'); 
            client.expect.element('.js-save-each-month-ineuro').text.to.contain('€3');
            client.expect.element('.js-money-saved-ineuro').text.to.contain('€283');
            client.expect.element('svg').to.be.visible;
            client.expect.element('path').to.be.visible;
           
        }
        

},

   
    

    "Ending the session":function(client){
        client.end();
    }

}