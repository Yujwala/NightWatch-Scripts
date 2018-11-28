var pageurl = require('../../pageurls.js'),
    pageObj,agreement_in_principle_props,callback,size,
    data = require('./agreement_in_principle_data.js'),
    property=data.props;

    function globalProps(client){
    pageObj = client.page.agreement_in_principle_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    agreement_in_principle_props = require('./agreement_in_principle_props.js')(client);  
}

module.exports = {
  '@tags': ['desktop', 'agreement-in-principle', 'agreement-in-principle-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.RBS_PERSONAL_AIP_DESKTOP); 
            
    },
    "1. Checks for Page 1 Properties": function(client) {
            heading1= pageObj.elements.heading1.selector,
            heading2= pageObj.elements.heading2.selector,
            heading3= pageObj.elements.heading3.selector,
            para1= pageObj.elements.para1.selector,
            para2= pageObj.elements.para2.selector,
            checkBoxHead= pageObj.elements.checkBoxHead.selector,
            messageBoxHead= pageObj.elements.messageBoxHead.selector,
            blockHead= pageObj.elements.blockHead.selector,
            checkBox= pageObj.elements.checkBox.selector,
            checkBoxList= pageObj.elements.checkBoxList.selector,
            callToAction= pageObj.elements.callToAction.selector,
            calltoActionFocus= pageObj.elements.calltoActionFocus.selector,
            dropDownMenu= pageObj.elements.dropDownMenu.selector,
            dropDownMenuHead= pageObj.elements.dropDownMenuHead.selector,
            dropDownMenuBtn= pageObj.elements.dropDownMenuBtn.selector,
            dropDownMenuPara= pageObj.elements.dropDownMenuPara.selector,
            dropDownMentuClsBtn= pageObj.elements.dropDownMentuClsBtn.selector,

            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            properties = agreement_in_principle_props.heading1('lg');  
            callback.multiloop(client, heading1 , properties, 'lg');
            properties = agreement_in_principle_props.para1('lg');  
            callback.multiloop(client, para1 , properties, 'lg');
            properties = agreement_in_principle_props.heading2('lg');  
            callback.multiloop(client, heading2 , properties, 'lg');
            properties = agreement_in_principle_props.heading3('lg');  
            callback.multiloop(client, heading3 , properties, 'lg');
            properties = agreement_in_principle_props.para2('lg');  
            callback.multiloop(client, para2 , properties, 'lg');
            properties = agreement_in_principle_props.blockHead('lg');  
            callback.multiloop(client, blockHead , properties, 'lg');
            properties = agreement_in_principle_props.checkBoxHead('lg');  
            callback.multiloop(client, checkBoxHead , properties, 'lg');
            properties = agreement_in_principle_props.messageBoxHead('lg');  
            callback.multiloop(client, messageBoxHead , properties, 'lg');
            properties = agreement_in_principle_props.checkBoxList('lg');  
            callback.multiloop(client, checkBoxList , properties, 'lg');
            //Click on the Checkbox
            client.waitForElementVisible(checkBox, 1000);
            client.click(checkBox)

            //Click on Buy to Let Dropdown
            client.waitForElementVisible(dropDownMenu, 1000);
            client.click(dropDownMenu)
            client.click('select[id="agreementPrinciple_type-of-borrower"] option[value="B"]')
            client.pause(3000)
            client.waitForElementVisible('.overlay-content .close', 3000)
            properties = agreement_in_principle_props.dropDownMenuHead('lg');  
            callback.multiloop(client, dropDownMenuHead , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuBtn('lg');  
            callback.multiloop(client, dropDownMenuBtn , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuPara('lg');  
            callback.multiloop(client, dropDownMenuPara , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMentuClsBtn('lg');  
            callback.multiloop(client, dropDownMentuClsBtn , properties, 'lg');
            client.click('.overlay-content .close')
            //Click on Existing Natwest Mortgage - Borrowing More
            client.waitForElementVisible(dropDownMenu, 1000);
            client.click(dropDownMenu)
            client.click('select[id="agreementPrinciple_type-of-borrower"] option[value="A"]')
            client.pause(3000)
            client.waitForElementVisible('.overlay-content .close', 3000)
            properties = agreement_in_principle_props.dropDownMenuHead('lg');  
            callback.multiloop(client, dropDownMenuHead , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuBtn('lg');  
            callback.multiloop(client, dropDownMenuBtn , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuPara('lg');  
            callback.multiloop(client, dropDownMenuPara , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMentuClsBtn('lg');  
            callback.multiloop(client, dropDownMentuClsBtn , properties, 'lg');
            client.click('.overlay-content .close')
            //Click on Existing Natwest Mortgage - Remortgaging
            client.waitForElementVisible(dropDownMenu, 1000);
            client.click(dropDownMenu)
            client.click('select[id="agreementPrinciple_type-of-borrower"] option[value="E"]')
            client.pause(3000)
            client.waitForElementVisible('.overlay-content .close', 3000)
            properties = agreement_in_principle_props.dropDownMenuHead('lg');  
            callback.multiloop(client, dropDownMenuHead , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuBtn('lg');  
            callback.multiloop(client, dropDownMenuBtn , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMenuPara('lg');  
            callback.multiloop(client, dropDownMenuPara , properties, 'lg');
            properties = agreement_in_principle_props.dropDownMentuClsBtn('lg');  
            callback.multiloop(client, dropDownMentuClsBtn , properties, 'lg');
            client.click('.overlay-content .close')

            //Click on the First Time Buyer DropDown Menu
            client.waitForElementVisible(dropDownMenu, 1000);
            client.click(dropDownMenu)
            client.click('select[id="agreementPrinciple_type-of-borrower"] option[value="F"]')
            client.pause(3000)
            //Call to Action Focus 
            client.moveToElement(".cta.cta--branded.cta--l.cta--mapp-l a",3,3);
            client.mouseButtonDown(".cta.cta--branded.cta--l.cta--mapp-l a");
            client.pause(1000);
            client.waitForElementVisible(calltoActionFocus,2000);
            client.pause(1000);
            properties = agreement_in_principle_props.nextbutton('lg');
            callback.singleElem(client, calltoActionFocus , properties, 'lg');
            //Click on Call to Action
            client.click(callToAction)

          }  
    },
                                      
    "2. Checks for Page 2 Properties": function(client) {
            banner= pageObj.elements.banner.selector,
            bannercontent= pageObj.elements.bannercontent.selector,
            errorContainer= pageObj.elements.errorContainer.selector,
            nextbutton= pageObj.elements.nextbutton.selector,
            heading4= pageObj.elements.heading4.selector,
            heading5= pageObj.elements.heading5.selector,
            para3= pageObj.elements.para3.selector,
            fnameField= pageObj.elements.fnameField.selector,
            lnameField= pageObj.elements.lnameField.selector,
            dob= pageObj.elements.dob.selector,
            textBox= pageObj.elements.textBox.selector,
            callToAction1= pageObj.elements.callToAction1.selector,
            callToAction1Focus= pageObj.elements.callToAction1Focus.selector,
            form1iconinfo= pageObj.elements.form1iconinfo.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            properties = agreement_in_principle_props.errorContainer('lg');
            callback.multiloop(client, errorContainer , properties, 'lg');
            properties = agreement_in_principle_props.banner('lg');
            callback.multiloop(client, banner , properties, 'lg');
            properties = agreement_in_principle_props.bannercontent('lg');
            callback.multiloop(client, bannercontent , properties, 'lg');
            properties = agreement_in_principle_props.para3('lg');  
            callback.multiloop(client, para3 , properties, 'lg');
            properties = agreement_in_principle_props.heading4('lg');  
            callback.multiloop(client, heading4 , properties, 'lg');
            properties = agreement_in_principle_props.heading5('lg');  
            callback.multiloop(client, heading5 , properties, 'lg');
            properties = agreement_in_principle_props.form1iconinfo('lg');  
            callback.multiloop(client, form1iconinfo , properties, 'lg');
            properties = agreement_in_principle_props.iconinfobeforeProps('lg');
            callback.pseudoSingleElem(client, form1iconinfo,':before',properties);
            //Text Box Focus
            client.moveToElement(textBox,3,3);
            client.mouseButtonDown(textBox);
            client.pause(1000);
            client.waitForElementVisible(textBox+":focus",2000);
            client.pause(1000);
            properties = agreement_in_principle_props.textBoxProps('lg');
            callback.singleElem(client, textBox+":focus" , properties, 'lg');
            //Enter the Title - Error Message
            client.click('select[id="agreementPrinciple_title"] option[value=""]')
            client.pause(1000)
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please select your title from the list")
            //Enter the Title
            client.click('select[id="agreementPrinciple_title"] option[value="Mr"]')
            //Enter the First Name - Error Message
            client.click(fnameField);
            client.setValue(fnameField, "a");
            client.pause(1000)
            client.click(".js-mortgage-form.js-show-content")
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter a minimum of 2 and maximum of 30 characters")
            //Enter the First Name
            client.clearValue(fnameField)            
            client.setValue(fnameField, property.$fnameField);
            client.expect.element(fnameField).to.have.css('background-image').which.contains(property.$tick_url);
             //Enter the Last Name - Error Message
             client.click(lnameField);
             client.setValue(lnameField, "b");
             client.pause(1000)
             client.click(".js-mortgage-form.js-show-content")
             client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter a minimum of 2 and maximum of 30 characters")
             //Enter the First Name
             client.clearValue(lnameField)             
            //Enter the Last Name
            client.setValue(lnameField, property.$lnameField);
            client.expect.element(lnameField).to.have.css('background-image').which.contains(property.$tick_url);
            
            //Enter the Date of Birth
            client.click(dob)
            client.setValue(dob, "010101")
            client.pause(1000)
            client.click(".js-mortgage-form.js-show-content")
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter your date of birth (dd/mm/yyyy)")
            client.expect.element(dob).to.have.css('background-image').which.contains(property.$error_url);
            client.clearValue(dob)
            client.setValue(dob, property.$dob );
            client.expect.element(dob).to.have.css('background-image').which.contains(property.$tick_url);
            //Call to Action1 Focus 
            client.moveToElement(".cursor-default.cta--mapp-l a",3,3);
            client.mouseButtonDown(".cursor-default.cta--mapp-l a");
            client.pause(1000);
            client.waitForElementVisible(callToAction1Focus,2000);
            client.pause(1000);
            properties = agreement_in_principle_props.nextbutton('lg');
            callback.singleElem(client, callToAction1Focus , properties, 'lg');
            //Click on Call to Action1
            client.click(callToAction1)
          }  
    },

              
    "3. Checks for Page 3 Properties": function(client) {
            banner= pageObj.elements.banner.selector,
            bannercontent= pageObj.elements.bannercontent.selector,
            errorContainer= pageObj.elements.errorContainer.selector,
            heading6= pageObj.elements.heading6.selector,
            heading7= pageObj.elements.heading7.selector,
            heading8= pageObj.elements.heading8.selector,
            para4= pageObj.elements.para4.selector,
            searchHead= pageObj.elements.searchHead.selector,
            buttonTitle= pageObj.elements.buttonTitle.selector,
            closeButton= pageObj.elements.closeButton.selector,
            anchorLink= pageObj.elements.anchorLink.selector,
            callToAction1= pageObj.elements.callToAction1.selector,
            address= pageObj.elements.address.selector,
            addBtn= pageObj.elements.addBtn.selector,
            postcode= pageObj.elements.postcode.selector,
            houseno= pageObj.elements.houseno.selector,
            textBox1= pageObj.elements.textBox1.selector,
            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            

            properties = agreement_in_principle_props.errorContainer('lg');
            callback.multiloop(client, errorContainer , properties, 'lg');
            properties = agreement_in_principle_props.banner('lg');
            callback.multiloop(client, banner , properties, 'lg');
            properties = agreement_in_principle_props.bannercontent('lg');
            callback.multiloop(client, bannercontent , properties, 'lg');
            properties = agreement_in_principle_props.heading6('lg');  
            callback.multiloop(client, heading6 , properties, 'lg');
            properties = agreement_in_principle_props.heading7('lg');  
            callback.multiloop(client, heading7 , properties, 'lg');
            properties = agreement_in_principle_props.heading8('lg');  
            callback.multiloop(client, heading8 , properties, 'lg');
            properties = agreement_in_principle_props.searchHead('lg');  
            callback.multiloop(client, searchHead , properties, 'lg');
            properties = agreement_in_principle_props.para4('lg');  
            callback.multiloop(client, para4 , properties, 'lg');
            properties = agreement_in_principle_props.buttonTitle('lg');  
            callback.multiloop(client, buttonTitle , properties, 'lg');
           
            //Enter the Postal Code - Error Message
            client.click(address);
            client.setValue(address,"")
            client.pause(1000)
            client.click(".address_input")
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter your UK postcode e.g. EC1A 1BB or NE33 1HF")
            //Enter the Postal Code
            client.clearValue(address)
            client.setValue(address, property.$address);
            client.expect.element(address).to.have.css('background-image').which.contains(property.$tick_url);
            //Click Find Address Button
            client.click(addBtn);
            properties = agreement_in_principle_props.closeButton('lg');  
            callback.multiloop(client, closeButton , properties, 'lg');
            properties = agreement_in_principle_props.anchorLink('lg');  
            callback.multiloop(client, anchorLink , properties, 'lg');
            //Select the Postal Code
            client.waitForElementVisible(postcode, 3000)
            client.click(postcode);
            //Enter the House Number - Error Message
            client.click(houseno)
            client.clearValue(houseno)
            client.setValue(houseno, "")
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter a house number")
            //Enter the House Number
            client.clearValue(houseno)
            client.setValue(houseno, property.$houseno);
            client.expect.element(houseno).to.have.css('background-image').which.contains(property.$tick_url);
            //Enter the Street Road - Error Message
            client.click("#agreementPrinciple_street-name")
            client.clearValue("#agreementPrinciple_street-name")
            client.setValue("#agreementPrinciple_street-name","")
            client.pause(1000)
            client.expect.element(".tool--mortgageDetails.tool--aip div.error-container-bottom").text.to.contain("Please enter a street or road name")
            client.clearValue("#agreementPrinciple_street-name")
            client.setValue("#agreementPrinciple_street-name","High Street")
            //Call to Action Focus 
            client.moveToElement(".itl-tool-enhancements .q-nav .next span a",3,3);
            client.mouseButtonDown(".itl-tool-enhancements .q-nav .next span a");
            client.pause(1000);
            client.waitForElementVisible(nextbutton,2000);
            client.pause(1000);
             //Text Box Focus
            client.moveToElement(textBox1,3,3);
            client.mouseButtonDown(textBox1);
            client.pause(1000);
            client.waitForElementVisible(textBox1+":focus",2000);
            client.pause(1000);
            properties = agreement_in_principle_props.textBoxProps('lg');
            callback.singleElem(client, textBox1+":focus" , properties, 'lg');
            //Click on Call to Action1
            client.click(callToAction1)
            client.pause(3000)




          }  
    },
          
    "4. Checks for Page 4 Properties": function(client) {
            form1iconinfo1= pageObj.elements.form1iconinfo1.selector,
            banner= pageObj.elements.banner.selector,
            bannercontent= pageObj.elements.bannercontent.selector,
            nextbutton= pageObj.elements.nextbutton.selector,
            heading9= pageObj.elements.heading9.selector,
            heading10= pageObj.elements.heading10.selector,
            heading11= pageObj.elements.heading11.selector,
            para5= pageObj.elements.para5.selector,
            callToAction1= pageObj.elements.callToAction1.selector,
            income= pageObj.elements.income.selector,
            otherIncome= pageObj.elements.otherIncome.selector,
            onebox= pageObj.elements.onebox.selector,
            twobox= pageObj.elements.twobox.selector,
            threebox= pageObj.elements.threebox.selector,

            globalProps(client);

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            properties = agreement_in_principle_props.errorContainer('lg');
            callback.multiloop(client, errorContainer , properties, 'lg');
            properties = agreement_in_principle_props.banner('lg');
            callback.multiloop(client, banner , properties, 'lg');
            properties = agreement_in_principle_props.bannercontent('lg');
            callback.multiloop(client, bannercontent , properties, 'lg');
            properties = agreement_in_principle_props.heading9('lg');  
            callback.multiloop(client, heading9 , properties, 'lg');
            properties = agreement_in_principle_props.heading10('lg');  
            callback.multiloop(client, heading10 , properties, 'lg');
            properties = agreement_in_principle_props.heading11('lg');  
            callback.multiloop(client, heading11 , properties, 'lg');
            properties = agreement_in_principle_props.para5('lg');  
            callback.multiloop(client, para5 , properties, 'lg');
            properties = agreement_in_principle_props.form1iconinfo('lg');  
            callback.multiloop(client, form1iconinfo1 , properties, 'lg');
            properties = agreement_in_principle_props.iconinfobeforeProps('lg');
            callback.pseudoSingleElem(client, form1iconinfo1,':before',properties);
            //Enter the Employment Status
             client.click('select[id="agreementPrinciple_employment-status"] option[value="E"]')
            //Enter the Age to Retire
            client.click('select[id="agreementPrinciple_retirement-age"] option[value="70"]')
            //Enter the Gross income
            client.click(income);
            client.setValue(income, property.$income);
            client.expect.element(income).to.have.css('background-image').which.contains(property.$tick_url);
            
            //Enter the Term for Gross Income
            client.click('select[id="agreementPrinciple_term"] option[value="annual"]')
            client.pause(1000)
            //Enter the Other Income
            client.click(otherIncome);
            client.setValue(otherIncome, property.$otherIncome);
            client.expect.element(otherIncome).to.have.css('background-image').which.contains(property.$tick_url);

            //Enter the Amount Left
            client.click(onebox);
            client.setValue(onebox, property.$onebox);
            client.expect.element(onebox).to.have.css('background-image').which.contains(property.$tick_url);

            //Enter Monthly Debt Repayment
            client.click(twobox)
            client.setValue(twobox, property.$twobox);
            client.expect.element(twobox).to.have.css('background-image').which.contains(property.$tick_url);

            //Enter Other Commited Expenditures
            client.click(threebox)
            client.setValue(threebox, property.$threebox);
            client.expect.element(threebox).to.have.css('background-image').which.contains(property.$tick_url);
            //Call to Action Focus 
            client.moveToElement(".itl-tool-enhancements .q-nav .next span a",3,3);
            client.mouseButtonDown(".itl-tool-enhancements .q-nav .next span a");
            client.pause(1000);
            client.waitForElementVisible(nextbutton,2000);
            client.pause(1000);
            properties = agreement_in_principle_props.nextbutton('lg');
            callback.singleElem(client, nextbutton , properties, 'lg');
            //Click on Call to Action1
            client.click(callToAction1)
            client.pause(3000)


          }  
    },

    "5. Checks for Page 5 Properties": function(client) {
      banner= pageObj.elements.banner.selector,
      bannercontent= pageObj.elements.bannercontent.selector,
      heading12= pageObj.elements.heading12.selector,
      heading13= pageObj.elements.heading13.selector,
      para6= pageObj.elements.para6.selector,
      callToAction2= pageObj.elements.callToAction2.selector,
      propertyValue= pageObj.elements.propertyValue.selector,
      yourDeposit= pageObj.elements.yourDeposit.selector,
      form5iconinfo= pageObj.elements.form5iconinfo.selector,

      globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      

        properties = agreement_in_principle_props.banner('lg');
        callback.multiloop(client, banner , properties, 'lg');
        properties = agreement_in_principle_props.bannercontent('lg');
        callback.multiloop(client, bannercontent , properties, 'lg');
        properties = agreement_in_principle_props.heading12('lg');  
        callback.multiloop(client, heading12 , properties, 'lg');
        properties = agreement_in_principle_props.heading13('lg');  
        callback.multiloop(client, heading13 , properties, 'lg');
        properties = agreement_in_principle_props.para6('lg');  
        callback.multiloop(client, para6 , properties, 'lg');
        properties = agreement_in_principle_props.form1iconinfo('lg');  
        callback.multiloop(client, form5iconinfo , properties, 'lg');
        properties = agreement_in_principle_props.iconinfobeforeProps('lg');
        callback.pseudoSingleElem(client, form5iconinfo,':before',properties);
        //Enter the Property Value
        client.click(propertyValue);
        client.setValue(propertyValue, property.$propertyValue);
        client.expect.element(propertyValue).to.have.css('background-image').which.contains(property.$tick_url);

        //Enter the Deposit
        client.click(yourDeposit);
        client.setValue(yourDeposit, property.$yourDeposit);
        client.expect.element(yourDeposit).to.have.css('background-image').which.contains(property.$tick_url);

        //Enter Term for Mortgage
        client.click('select[name="mortgage-term"] option[value="6"]')
        client.pause(1000)
        //Click on Call to Action2
        client.waitForElementVisible(callToAction2,3000)
        client.click(callToAction2)
        client.pause(3000)

    }  
},

    //YES EQUAL Scenario
    "6. Checks for Page 6 Properties": function(client) {
      callToAction= pageObj.elements.callToAction.selector,
      resultSuccess= pageObj.elements.resultSuccess.selector,
      resultSuccessAmount= pageObj.elements.resultSuccessAmount.selector,
      resultSuccessProperty= pageObj.elements.resultSuccessProperty.selector,
      reusultSuccessNextSteps= pageObj.elements.reusultSuccessNextSteps.selector,
      resultSuccessEmailBlock= pageObj.elements.resultSuccessEmailBlock.selector,
      resultSuccessMortgageButton= pageObj.elements.resultSuccessMortgageButton.selector,
      resultSuccessRecalculate= pageObj.elements.resultSuccessRecalculate.selector,
      resultSuccessFooter= pageObj.elements.resultSuccessFooter.selector,
      resultSuccessAmount= pageObj.elements.resultSuccessAmount.selector,
      resultMortgageAmount= pageObj.elements.resultMortgageAmount.selector,
      resultMaximumAmount= pageObj.elements.resultMaximumAmount.selector,
		  resultWorthAmount= pageObj.elements.resultWorthAmount.selector,
      resultMortgageYears= pageObj.elements.resultMortgageYears.selector,


      globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        
        client.waitForElementVisible(resultSuccess,5000);
        client.expect.element(resultSuccess).to.be.present;
        client.waitForElementVisible(resultSuccessAmount,5000);
        client.expect.element(resultSuccessAmount).to.be.present;
        client.waitForElementVisible(resultSuccessProperty,5000);
        client.expect.element(resultSuccessProperty).to.be.present;
        client.waitForElementVisible(reusultSuccessNextSteps,5000);
        client.expect.element(reusultSuccessNextSteps).to.be.present;
        client.waitForElementVisible(resultSuccessEmailBlock,5000);
        client.expect.element(resultSuccessEmailBlock).to.be.present;
        client.waitForElementVisible(resultSuccessMortgageButton,5000);
        client.expect.element(resultSuccessMortgageButton).to.be.present;
        client.waitForElementVisible(resultSuccessRecalculate,5000);
        client.expect.element(resultSuccessRecalculate).to.be.present;
        client.waitForElementVisible(resultSuccessFooter,5000);
        client.expect.element(resultSuccessFooter).to.be.present;
        client.expect.element(resultSuccessAmount).text.to.contain(property.$resultSuccessAmt);
        client.expect.element(resultMortgageAmount).text.to.contain(property.$resultMortageAmount);
        client.expect.element(resultMaximumAmount).text.to.contain(property.$resultMaximumAmount);
        client.expect.element(resultWorthAmount).text.to.contain(property.$resultWorthAmount);
        client.expect.element(resultMortgageYears).text.to.contain(property.$resultMortgageYears);
        properties = agreement_in_principle_props.resultSuccess('lg');
        callback.multiloop(client, resultSuccess , properties, 'lg');
        properties = agreement_in_principle_props.resultSuccessFooter('lg');
        callback.multiloop(client, resultSuccessFooter , properties, 'lg');
        properties = agreement_in_principle_props.resultSuccessRecalculate('lg');
        callback.multiloop(client, resultSuccessRecalculate , properties, 'lg');
      
    }  
},

   // "Ending the session":function(client){
     //   client.end();
    //}
    
}



