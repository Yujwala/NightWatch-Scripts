var pageurl = require('../../pageurls.js'),
    pageObj,hmcib_props,callback,size,brand,
    hmcib_data = require('./hmcib_data.js'),
    data = hmcib_data.props;

function globalProps(client){
    pageObj = client.page.hmcib_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    hmcib_props = require('./hmcib_props.js')(client);   
}
function testFunctionality(client,dropdown,id,labval,dep,prop,term,sal,incterm,oth_inc,debt,repaydebt,depunder,depover,othexp,jsal,jincterm,joth_inc,jdebt,jrepaydebt,jdepunder,jdepover,jothexp,net_inc,net_incterm,jnet_inc,jnet_incterm,result1,result2){
  hmcibResultRte = pageObj.elements.hmcibResultRte.selector,
  hmcibResult = pageObj.elements.hmcibResult.selector,
  hmcibCtaL = pageObj.elements.hmcibCtaL.selector,
  hmcibCtaM = pageObj.elements.hmcibCtaM.selector,
  hmcibCtaMFoc = pageObj.elements.hmcibCtaMFoc.selector,
  hmcibCtaLFoc = pageObj.elements.hmcibCtaLFoc.selector,
  deposit='#mortgageDetails_depositWorth';
  propertyValue='#mortgageDetails_PropertyValue';
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
  client.source(() => {
    console.log("Setting the Values for "+dropdown); 
  });
  openedURL="",
  callback.openURL(client,function (result){
    openedURL=result.value;
  });
  client.refresh()
  client.click('.grid .selector option[value='+labval+']')
      .clearValue(deposit+id)
      .click('body')
      if(labval=='F'){
        client.expect.element('.error-container').text.to.contain('How much deposit do you have ?');
        }
      else if(brand.props.$brandName=='rbs-personal'&&(labval=='R')){
          client.expect.element('.error-container').text.to.contain('This is a required field');
        }
      else{
        client.expect.element('.error-container').text.to.contain('This is required');
      }
      client.setValue(deposit+id, dep)
      .pause(1000)
      .clearValue(propertyValue+id)
      .click('body')
      if(brand.props.$brandName=='rbs-personal'&&(labval=='M'||labval=='R')){
        client.expect.element('.error-container').text.to.contain('This is a required field');
      }
      else if(labval=='F'){
        client.expect.element('.error-container').text.to.contain('What is the estimated cost of the property you want to buy');
        }
      else {
        client.expect.element('.error-container').text.to.contain('This is required');
      }
      client.setValue(propertyValue+id, prop)
      .pause(1000)
      .clearValue('#mortgageDetails_mortgage-term')
      if(brand.props.$brandName=='rbs-personal'){
        client.expect.element('.error-container').text.to.contain('This is a required field');
      }
      else{
        client.expect.element('.error-container').text.to.contain('This field is required');
      }
      client.setValue('#mortgageDetails_mortgage-term', term)
      .pause(1000)
      .clearValue('#mortgageDetails_grossSalary')
      .click('body')
      if(brand.props.$brandName=='rbs-personal'){
        client.expect.element('.error-container').text.to.contain('This is a required field');
      }
      else{
        client.expect.element('.error-container').text.to.contain('This is required field');
      }
      client.setValue('#mortgageDetails_grossSalary', sal)
      .pause(1000)
      .clearValue('#mortgageDetails_RevolvingDebt')
      .setValue('#mortgageDetails_RevolvingDebt', debt)
      .pause(1000)
      .clearValue('#mortgageDetails_debt-repayment')
      .click('body')
      if(brand.props.$brandName=='rbs-personal'){
        client.expect.element('.error-container').text.to.contain('Debt repayment is required for any additional debts even if that value is £0.');
      }
      else{
      client.expect.element('.error-container').text.to.contain('Other committed expenditure is required even if that value is £0.');
      }
      client.setValue('#mortgageDetails_debt-repayment', repaydebt)
      .pause(1000)
      .click('.grid .selector select[name=term] option[value='+incterm+']')
      .clearValue('#mortgageDetails_other-expenditure')
      .setValue('#mortgageDetails_other-expenditure', othexp)
      .pause(1000)
      if(brand.props.$brandName=='natwest-personal'||brand.props.$brandName=='rbs-personal'){
      client.clearValue('#mortgageDetails_other-income')
      .click('body')
      client.expect.element('.error-container').text.to.contain('Please enter Your Other income to proceed');
      client.setValue('#mortgageDetails_other-income', oth_inc)
      .click('body')
      .pause(1000)
      .click('.grid .selector select[name=dependetsunder18] option[value='+'"'+depunder+'"'+']')
      .click('.grid .selector select[name=dependentsover18] option[value='+'"'+depover+'"'+']')
      client.expect.element('.js-applicant-two.float-left.js-hide-content').to.be.present
      client.click('#jointApplicant-mortgageDetails_jointApplicant-0')
      client.expect.element('.js-applicant-two.float-left.js-show-content').to.be.present;
      client.pause(1000)
      .clearValue('#mortgageDetails_jt-other-income')
      .setValue('#mortgageDetails_jt-other-income', joth_inc)
      .pause(1000)
      .click('.grid .selector select[name=jointdependentsunder18] option[value='+'"'+jdepunder+'"'+']')
      .click('.grid .selector select[name=jointdependentsover18] option[value='+'"'+jdepover+'"'+']')
    }
      if(brand.props.$brandName=='iom'||brand.props.$brandName=='natwest-international'){
      client.clearValue('#mortgageDetails_netIncome')
      .click('body')
      client.expect.element('.error-container').text.to.contain('This is required field');
      client.setValue('#mortgageDetails_netIncome', net_inc)
      .pause(1000)
      .click('.grid .selector select[name=netincome-timeperiod] option[value='+net_incterm+']')
      .pause(1000)
      .click('.grid .selector select[name=dependetsunder18] option[value='+'"'+depunder+'"'+']')
      client.expect.element('.js-applicant-two.float-left.js-hide-content').to.be.present
      client.click('#jointApplicant-mortgageDetails_jointApplicant-0')
      client.expect.element('.js-applicant-two.float-left.js-show-content').to.be.present;
      client.pause(1000)
      .clearValue('#mortgageDetails_joint-netincome')
      .setValue('#mortgageDetails_joint-netincome', jnet_inc)
      .pause(1000)
      .click('.grid .selector select[name=joint-netincometerm] option[value='+jnet_incterm+']')
      .click('.grid .selector select[name=jointdependentsunder18] option[value='+'"'+jdepunder+'"'+']')
    }
      client.clearValue('#mortgageDetails_jointgrossSalary')
      .click('body')
      if(brand.props.$brandName=='rbs-personal'){
        client.expect.element('.error-container').text.to.contain('This is a required field');
      }
      else{
        client.expect.element('.error-container').text.to.contain('Please enter your gross salary.');
      }
      client.setValue('#mortgageDetails_jointgrossSalary', jsal)
      .pause(1000)
      .click('.grid .selector select[name=jointterm] option[value='+jincterm+']')
      .clearValue('#mortgageDetails_jointRevolvingDebt')
      .setValue('#mortgageDetails_jointRevolvingDebt', jdebt)
      .pause(1000)
      .clearValue('#mortgageDetails_joint-debt-repayment')
      .click('body')
      client.expect.element('.error-container').text.to.contain('Debt repayment is required for any additional debts even if that value is £0.');
      client.setValue('#mortgageDetails_joint-debt-repayment', jrepaydebt)
      .pause(1000)
      .clearValue('#mortgageDetails_joint-other-expenditure')
      .setValue('#mortgageDetails_joint-other-expenditure', jothexp)
      .pause(1000)
      .click(hmcibCta1)
      .pause(5000);
      client.expect.element('.tool--mortgageDetails .shelf-slope').to.have.css('background-image').which.contains("mortgageDetailsSlope");
      client.elements('css selector','.js-calculated-deposit.calculated-deposit:not(.errorMessage)',results=>{
      if(results.value.length>0){
      if(brand.props.$brandName=='natwest-personal'||brand.props.$brandName=='rbs-personal'){
      client.expect.element('.js-calculated-deposit.calculated-deposit:not(.errorMessage)').text.to.contain(result1);
      }
      else if(brand.props.$brandName=='iom'||brand.props.$brandName=='natwest-international'){
        client.expect.element('.js-calculated-deposit.calculated-deposit:not(.errorMessage)').text.to.contain(result2);
      }
      else{
        //do nothing
      }
    }
    else{
      client.expect.element('.js-calculated-deposit.calculated-deposit.errorMessage').text.to.contain(data.$result);
    }
  });
  client.elements('css selector',hmcibResult,results=>{
      if(results.value.length>0) {
          properties = hmcib_props.hmcibResult('lg');  
          callback.multiloop(client, hmcibResult , properties, 'lg');
          }
    });
  client.elements('css selector',hmcibResultRte,results=>{
      if(results.value.length>0) {
        hmcibResultRte1=hmcibResultRte+':not(.padded--comp-rich-text)';
        hmcibResultRte2=hmcibResultRte+'.padded--comp-rich-text';
        properties = hmcib_props.hmcibResultRteP('lg');  
        rteCallback.rteElem(client, hmcibResultRte1 , properties,'p', 'lg');
        properties = hmcib_props.hmcibResultRteP1('lg');  
        rteCallback.rteElem(client, hmcibResultRte2 , properties,'p', 'lg');
        properties = hmcib_props.hmcibResultRteH2F16('lg');  
        rteCallback.rteElem(client, hmcibResultRte , properties,'h2 .fs-16', 'lg');
        properties = hmcib_props.hmcibResultRteH2('lg');  
        rteCallback.rteElem(client, hmcibResultRte , properties,'h2', 'lg');
            }
        });
  client.elements('css selector',hmcibCtaL,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibCtaL('lg');  
        callback.multiloop(client, hmcibCtaL , properties, 'lg');
        client.source(() => {
          console.log("ctaL hover and focus"); 
        });
        //cta hover
        properties = hmcib_props.hmcibCta1Hov('lg');
        client.moveToElement(hmcibCtaL, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCtaL , properties, 'lg'); 
        //cta focus
        properties = hmcib_props.hmcibCtaLFoc('lg');
        client.moveToElement(hmcibCtaL, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCtaLFoc , properties, 'lg');
        client.click(hmcibResultRte);
      }
    });
  client.elements('css selector',hmcibCtaM,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibCtaM('lg');  
        callback.multiloop(client, hmcibCtaM , properties, 'lg');
        client.source(() => {
          console.log("CtaM Hover and Focus"); 
        });
        //cta hover
        properties = hmcib_props.hmcibCtaMHov('lg');
        client.moveToElement(hmcibCtaM, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCtaM , properties, 'lg'); 
        //cta focus
        properties = hmcib_props.hmcibCtaMFoc('lg');
        client.moveToElement(hmcibCtaM, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCtaMFoc , properties, 'lg');
        }
      });  
    }  
}
function testOverlay(client,dropdown,labval1,labval2){
  hmcibOverLayDeskWhole = pageObj.elements.hmcibOverLayDeskWhole.selector,
  hmcibOverLayDeskHalf = pageObj.elements.hmcibOverLayDeskHalf.selector,
  hmcibOverLayCtaL = pageObj.elements.hmcibOverLayCtaL.selector,
  hmcibOverLayCtaLFoc = pageObj.elements.hmcibOverLayCtaLFoc.selector,
  hmcibOverLayCtaSec = pageObj.elements.hmcibOverLayCtaSec.selector,
  hmcibOverLayCtaSecFoc = pageObj.elements.hmcibOverLayCtaSecFoc.selector,
  hmcibOverLayHeading1 = pageObj.elements.hmcibOverLayHeading1.selector,
  hmcibOverLayHeading2 = pageObj.elements.hmcibOverLayHeading2.selector,
  hmcibOverLayCtaM = pageObj.elements.hmcibOverLayCtaM.selector,
  hmcibOverLayCtaMFoc = pageObj.elements.hmcibOverLayCtaMFoc.selector,
    globalProps(client);
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
   client.refresh();
  client.source(() => {
    console.log("Overlay properties for"+dropdown); 
  });
  if(brand.props.$brandName=='natwest-personal'||brand.props.$brandName=='rbs-personal'){
    client.click('.grid .selector option[value='+labval1+']')
  client.elements('css selector',hmcibOverLayDeskWhole,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskWhole('lg');
      callback.multiloop(client, hmcibOverLayDeskWhole , properties, 'lg');
      properties = hmcib_props.hmcibOverLayFs20('lg');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p .fs-20', 'lg');
      properties = hmcib_props.hmcibFooterP('lg');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p .fs-14', 'lg');
      properties = hmcib_props.hmcibOverLayP('lg');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p[style]', 'lg');
    }
  });
  client.elements('css selector',hmcibOverLayCtaSec,results=>{
     if(results.value.length>0) {
        properties = hmcib_props.hmcibOverLayCtaSec('lg');
        callback.multiloop(client, hmcibOverLayCtaSec , properties, 'lg');
        client.source(() => {
          console.log("Cta hover and focus properties"); 
        });
            //cta hover
            properties = hmcib_props.hmcibCtaToggleHov('lg');
            client.moveToElement(hmcibOverLayCtaSec, 10, 10);
            client.pause(1000);
            callback.singleElem(client, hmcibOverLayCtaSec , properties, 'lg'); 

            //cta focus
            properties = hmcib_props.hmcibOverLayCtaSecFoc('lg');
            client.moveToElement(hmcibOverLayCtaSec, 10, 10);
            client.mouseButtonDown(0);
            client.pause(1000)
            callback.singleElem(client, hmcibOverLayCtaSecFoc , properties, 'lg');
            client.click(hmcibOverLayDeskWhole);
        }
      });
  client.elements('css selector',hmcibOverLayDeskHalf,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskHalf('lg');  
      callback.multiloop(client, hmcibOverLayDeskHalf , properties, 'lg');
    }
  });
  client.elements('css selector',hmcibOverLayCtaL,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayCtaL('lg');  
      callback.multiloop(client, hmcibOverLayCtaL , properties, 'lg');
              client.source(() => {
                console.log("Cta hover and focus properties"); 
              });
              //cta hover
              properties = hmcib_props.hmcibCta1Hov('lg');
              client.moveToElement(hmcibOverLayCtaL, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaL , properties, 'lg'); 
      
              //cta focus
              properties = hmcib_props.hmcibCtaLFoc('lg');
              client.moveToElement(hmcibOverLayCtaL, 10, 10);
              client.mouseButtonDown(0);
              client.pause(1000)
              callback.singleElem(client, hmcibOverLayCtaLFoc , properties, 'lg');
    }
  });
  client.click('body');
}
if(brand.props.$brandName=='iom'||brand.props.$brandName=='natwest-international'){
  client.click('.grid .selector option[value='+labval2+']')
  client.elements('css selector',hmcibOverLayDeskWhole,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskWhole('lg');
      callback.multiloop(client, hmcibOverLayDeskWhole , properties, 'lg');
      properties = hmcib_props.hmcibOverLayiomP('lg');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p', 'lg');
      properties = hmcib_props.hmcibOverLayiomPS('lg');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p strong', 'lg');
    }
  });
  client.elements('css selector',hmcibOverLayHeading1,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayHeading1('lg');  
      callback.multiloop(client, hmcibOverLayHeading1 , properties, 'lg');
    }
  });
  client.elements('css selector',hmcibOverLayHeading2,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayHeading2('lg');  
      callback.multiloop(client, hmcibOverLayHeading2 , properties, 'lg');
    }
  });
  client.elements('css selector',hmcibOverLayCtaM,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayCtaM('lg');  
      callback.multiloop(client, hmcibOverLayCtaM , properties, 'lg');
              client.source(() => {
                console.log("Cta hover and focus properties"); 
              });
              //cta hover
              properties = hmcib_props.hmcibOverLayCtaMHov('lg');
              client.moveToElement(hmcibOverLayCtaM, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaM , properties, 'lg'); 
      
              //cta focus
              properties = hmcib_props.hmcibOverLayCtaMFoc('lg');
              client.moveToElement(hmcibOverLayHeading2, 10, 10);
              client.pause(1000);
              client.keys("\uE004");
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaMFoc , properties, 'lg');
    }
  });
  client.click('body');
}
} 
}

module.exports = {
  '@tags': ['hmcib-desktop', 'hmcib'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.NW_INTER_HMCIB); 
            
    },
"1 Check for header properties": function(client) {
      hmcibHeader = pageObj.elements.hmcibHeader.selector,
      hmcibHeaderShelf = pageObj.elements.hmcibHeaderShelf.selector,
      hmcibHeaderTit = pageObj.elements.hmcibHeaderTit.selector,
      hmcibHeaderText = pageObj.elements.hmcibHeaderText.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib header props
      client.source(() => {
        console.log("Header properties"); 
      });
      client.elements('css selector',hmcibHeader,results=>{
        if(results.value.length>0) {
          client.expect.element(hmcibHeader).to.have.css('background-image').which.contains("hero-overdraft-tool");
          properties = hmcib_props.hmcibHeader('lg');  
          callback.multiloop(client, hmcibHeader , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibHeaderShelf,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibHeaderShelf('lg');  
        callback.multiloop(client, hmcibHeaderShelf , properties, 'lg');
      }
    });
    client.source(() => {
      console.log("Header Text properties"); 
    });
    client.elements('css selector',hmcibHeaderTit,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibHeaderTit('lg');  
        callback.multiloop(client, hmcibHeaderTit , properties, 'lg');
      }
    });
    client.elements('css selector',hmcibHeaderText,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibHeaderText('lg');  
        callback.multiloop(client, hmcibHeaderText , properties, 'lg');
      }
    });
    }  
},
  "2 Check for Desk padding properties": function(client) {
    hmcibFieldSet = pageObj.elements.hmcibFieldSet.selector,
    hmcibDeskComp = pageObj.elements.hmcibDeskComp.selector,
    hmcibForm = pageObj.elements.hmcibForm.selector
    selArr=['.desk--one-half.borrower-type','.desk--one-half.tool--input-comp','.desk--one-half.tool-desc-left','.desk--one-half.tool-desc-right','.desk--one-whole.tool--description']
    selForm=['.tool--input-comp :not(.applicant-other-income):not(.js-netincome-comp):not(.js-otherincome-comp)>','.borrower-type ','.borrow--result ','.applicant-other-income ']
    globalProps(client);
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',hmcibFieldSet,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibFieldSet('lg');  
        callback.multiloop(client, hmcibFieldSet , properties, 'lg');
      }
    });
    //hmcib Padd props
    client.source(() => {
      console.log("Desk Padding properties"); 
    });
    client.elements('css selector',hmcibDeskComp,results=>{
      if(results.value.length>0) {
        for(i=0;i<selArr.length;i++){
          let hmcibDeskComp1=hmcibDeskComp+selArr[i];
          client.source(() => {
            console.log(hmcibDeskComp1);
          });
          properties = hmcib_props['hmcibPadd'+(i+1)]('lg');
          callback.multiloop(client, hmcibDeskComp1 , properties, 'lg');
        }
      }
    });
    client.source(() => {
      console.log("Form properties"); 
    });
    client.elements('css selector',hmcibForm,results=>{
      if(results.value.length>0) {
        for(i=0;i<selForm.length;i++){
          let hmcibForm1=selForm[i]+hmcibForm;
          client.source(() => {
            console.log(hmcibForm1);
          });
          properties = hmcib_props['hmcibForm'+(i+1)]('lg');
          callback.multiloop(client, hmcibForm1 , properties, 'lg');
        }
      }
    });
  }  
  },
"3 Check for Footer properties": function(client) {
      hmcibFooterH3 = pageObj.elements.hmcibFooterH3.selector,
      hmcibFooterP = pageObj.elements.hmcibFooterP.selector,
      hmcibFooterCta = pageObj.elements.hmcibFooterCta.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib header props
      client.source(() => {
        console.log("Footer properties"); 
      });
      client.elements('css selector',hmcibFooterH3,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibFooterH3('lg');  
          callback.multiloop(client, hmcibFooterH3 , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibFooterP,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibFooterP('lg');  
        rteCallback.rteElem(client, hmcibFooterP , properties,'p .fs-14', 'lg');
      }
    });
    client.elements('css selector',hmcibFooterCta,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibFooterCta('lg');  
        callback.multiloop(client, hmcibFooterCta , properties, 'lg');
      }
    });
    }  
},
"4 Check for Title properties": function(client) {
      hmcibTitle = pageObj.elements.hmcibTitle.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib Title props
      client.source(() => {
        console.log("Titles properties"); 
      });
      client.elements('css selector',hmcibTitle,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibTitle('lg');  
          callback.multiloop(client, hmcibTitle , properties, 'lg');
        }
      });
    }  
},
  "5 Check for Label text and text area properties": function(client) {
      hmcibLabel = pageObj.elements.hmcibLabel.selector,
      hmcibLabelEmail = pageObj.elements.hmcibLabelEmail.selector,
      hmcibTextArea = pageObj.elements.hmcibTextArea.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib label text
      client.source(() => {
        console.log("Label Text properties"); 
      });
      client.elements('css selector',hmcibLabel,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibLabel('lg');  
          callback.multiloop(client, hmcibLabel , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibLabelEmail,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibLabelEmail('lg');  
          callback.multiloop(client, hmcibLabelEmail , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibTextArea,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibTextArea('lg');  
          callback.multiloop(client, hmcibTextArea , properties, 'lg');
        }
      });
    }  
  },
"6 Check for Icon properties": function(client) {
    hmcibIcon = pageObj.elements.hmcibIcon.selector,
    hmcibIconText = pageObj.elements.hmcibIconText.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
  
  //hmcib label text
     client.source(() => {
        console.log("Icon properties"); 
     });
    client.elements('css selector',hmcibIcon,results=>{
        if(results.value.length>0) {
            client.moveToElement(hmcibIcon, 10, 10);
            client.mouseButtonDown(0);
            client.pause(1000);
          client.expect.element(hmcibIconText).to.have.css('display').which.contains("inline");
          client.expect.element(hmcibIcon).to.have.css('outline-color').which.contains("rgba(255, 191, 71, 1)");
          client.elements('css selector',hmcibIconText,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibIconText('lg');  
              callback.multiloop(client, hmcibIconText , properties, 'lg');
            }
          });
         properties = hmcib_props.hmcibIcon('lg');  
         callback.multiloop(client, hmcibIcon , properties, 'lg');
    }
  });
}
},
"7 Check for select text properties": function(client) {
      hmcibSelectText = pageObj.elements.hmcibSelectText.selector,
      hmcibOptionText = pageObj.elements.hmcibOptionText.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib select text
      client.source(() => {
        console.log("select Text properties"); 
      });
      client.expect.element(hmcibSelectText).to.have.css('background-image').which.contains("rebrand-icon-sprite");
      client.elements('css selector',hmcibSelectText,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibSelectText1('lg');  
          callback.multiloop(client, hmcibSelectText , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibOptionText,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibOptionText('lg');  
          callback.multiloop(client, hmcibOptionText , properties, 'lg');
        }
      });
    }  
},
"8 Check for button slider and cta before properties": function(client) {
      hmcibTermButton = pageObj.elements.hmcibTermButton.selector,
      hmcibTermSlider = pageObj.elements.hmcibTermSlider.selector,
      hmcibTermSlidera = pageObj.elements.hmcibTermSlidera.selector,
      hmcibCta1 = pageObj.elements.hmcibCta1.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib select text
      client.source(() => {
        console.log("Button and Slider properties"); 
      });
      client.elements('css selector',hmcibTermButton,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibTermButton('lg');  
          callback.multiloop(client, hmcibTermButton , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibTermSlider,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibTermSlider('lg');  
          callback.multiloop(client, hmcibTermSlider , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibTermSlidera,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibTermSlidera('lg');  
          callback.multiloop(client, hmcibTermSlidera , properties, 'lg');
        }
      });
      client.source(() => {
        console.log("Cta property before"); 
      });
      client.elements('css selector',hmcibCta1,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibCta1Before('lg');  
          callback.multiloop(client, hmcibCta1 , properties, 'lg');
        }
      });
    }  
},
"9 Check the functionality of the tool": function(client) {
    globalProps(client);
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    testOverlay(client,'Buy to Let','B','B');
    testOverlay(client,'Additional Borrowing/Existing','A','A');
    testOverlay(client,'Re-Mortgage (Already with NW)','E','S');
    testFunctionality(client,'First Time Buyer','','F',data.$dep,data.$prop,data.$term,data.$sal,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebt,data.$depunder,data.$depover,data.$othexp,data.$jsal,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebt,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_inc,data.$net_incterm,data.$jnet_inc,data.$jnet_incterm,data.$result1,data.$result2);
    testFunctionality(client,'Moving Home','Second','M',data.$depM,data.$propM,data.$termM,data.$salM,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtM,data.$depunder,data.$depover,data.$othexp,data.$jsalM,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtM,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_incM,data.$net_incterm,data.$jnet_incM,data.$jnet_incterm,data.$result1M,data.$result2M);
    testFunctionality(client,'Remortgaging to','Third','R',data.$depR,data.$propR,data.$termR,data.$salR,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtR,data.$depunder,data.$depover,data.$othexp,data.$jsalR,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtR,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_incR,data.$net_incterm,data.$jnet_incR,data.$jnet_incterm,data.$result1R,data.$result2R);
} 
},
"10 Check for Cta properties": function(client) {
      hmcibCta2 = pageObj.elements.hmcibCta2.selector,
      hmcibCtaToggle = pageObj.elements.hmcibCtaToggle.selector,
      hmcibCta1Foc = pageObj.elements.hmcibCta1Foc.selector,
      hmcibCtaToggleFoc = pageObj.elements.hmcibCtaToggleFoc.selector,
      globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      
      //hmcib label text
      client.source(() => {
        console.log("Cta properties"); 
      });
      client.elements('css selector',hmcibCta1,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibCta1('lg');  
          callback.multiloop(client, hmcibCta1 , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibCta2,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibCta2('lg');  
          callback.multiloop(client, hmcibCta2 , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibCtaToggle,results=>{
        if(results.value.length>0) {
          properties = hmcib_props.hmcibCtaToggle('lg');  
          callback.multiloop(client, hmcibCtaToggle , properties, 'lg');
        }
      });
      client.refresh();
      client.source(() => {
        console.log("Cta hover and focus properties"); 
      });
      client.elements('css selector',hmcibCta1,results=>{
        if(results.value.length>0) {
        //cta hover
        properties = hmcib_props.hmcibCta1Hov('lg');
        client.moveToElement(hmcibCta1, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCta1 , properties, 'lg'); 

        //cta focus
        properties = hmcib_props.hmcibCta1Foc('lg');
        client.moveToElement(hmcibCta1, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCta1Foc , properties, 'lg');
        }
      });
      client.elements('css selector',hmcibCtaToggle,results=>{
        if(results.value.length>0) {
        //cta hover
        properties = hmcib_props.hmcibCtaToggleHov('lg');
        client.moveToElement(hmcibCtaToggle, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCtaToggle , properties, 'lg'); 

        //cta focus
        properties = hmcib_props.hmcibCtaToggleMFoc('lg');
        client.moveToElement(hmcibCtaToggle, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCtaToggleFoc , properties, 'lg');
        client.click(hmcibCtaToggle);
        client.expect.element(".js-applicant-details.float-left").to.have.css('display').which.contains('block');
        }
      });
  } 
},
"11 Check the error messages of the tool": function(client) {
  hmcibError = pageObj.elements.hmcibError.selector,
  hmcibErrorMsg = pageObj.elements.hmcibErrorMsg.selector,
  hmcibMinMaxError = pageObj.elements.hmcibMinMaxError.selector,
  globalProps(client);
if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
  client.refresh();
        client.clearValue('#mortgageDetails_depositWorth')
              .click('#mortgageDetails_depositWorth')
              .click('body')
              .clearValue('#mortgageDetails_PropertyValue')
              .click('#mortgageDetails_PropertyValue')
              .click('body')
              .clearValue('#mortgageDetails_mortgage-term')
              .click('body')
              .clearValue('#mortgageDetails_grossSalary')
              .click('#mortgageDetails_grossSalary')
              .click('body')
              .clearValue('#mortgageDetails_other-income')
              .click('#mortgageDetails_other-income')
              .click('body')
              .clearValue('#mortgageDetails_debt-repayment')
              .click('#mortgageDetails_debt-repayment')
              .click('body')
              .click('#jointApplicant-mortgageDetails_jointApplicant-0')
              .clearValue('#mortgageDetails_jointgrossSalary')
              .click('#mortgageDetails_jointgrossSalary')
              .click('body')
              .clearValue('#mortgageDetails_joint-debt-repayment')
              .click('#mortgageDetails_joint-debt-repayment')
              .click('body')
        client.elements('css selector',hmcibError,results=>{
          if(results.value.length>0) {
            //error text properties
          properties = hmcib_props.hmcibError('lg');
          callback.multiloop(client, hmcibError , properties, 'lg'); 
          }
        });
        testFunctionality(client,'First Time Buyer','','F',data.$dep1,data.$prop1,data.$term,data.$sal1,data.$incterm1,data.$oth_inc,data.$debt,data.$repaydebt,data.$depunder,data.$depover,data.$othexp,data.$jsal1,data.$jincterm1,data.$joth_inc,data.$jdebt,data.$jrepaydebt,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_inc1,data.$net_incterm1,data.$jnet_inc1,data.$jnet_incterm1,data.$result1,data.$result2);
        testFunctionality(client,'First Time Buyer','','F',data.$dep,data.$prop2,data.$term,data.$sal,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebt,data.$depunder,data.$depover,data.$othexp,data.$jsal,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebt,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_inc,data.$net_incterm,data.$jnet_inc,data.$jnet_incterm,data.$result1,data.$result2);
        testFunctionality(client,'First Time Buyer','','F',data.$dep,data.$prop,data.$term,data.$sal2,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebt,data.$depunder,data.$depover,data.$othexp,data.$jsal2,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebt,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_inc2,data.$net_incterm,data.$jnet_inc2,data.$jnet_incterm,data.$result1,data.$result2);
        testFunctionality(client,'Moving Home','Second','M',data.$depM,data.$prop2,data.$termM,data.$salM,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtM,data.$depunder,data.$depover,data.$othexp,data.$jsalM,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtM,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_incM,data.$net_incterm,data.$jnet_incM,data.$jnet_incterm,data.$result1M,data.$result2M);
        testFunctionality(client,'Moving Home','Second','M',data.$depM,data.$propM,data.$termM,data.$sal2,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtM,data.$depunder,data.$depover,data.$othexp,data.$jsal2,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtM,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_inc2,data.$net_incterm,data.$jnet_inc2,data.$jnet_incterm,data.$result1M,data.$result2M);
        testFunctionality(client,'Remortgaging to','Third','R',data.$depR1,data.$prop2,data.$termR,data.$salR,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtR,data.$depunder,data.$depover,data.$othexp,data.$jsalR,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtR,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_incR,data.$net_incterm,data.$jnet_incR,data.$jnet_incterm,data.$result1R,data.$result2R);
        testFunctionality(client,'Remortgaging to','Third','R',data.$depR1,data.$propR,data.$termR,data.$sal2,data.$incterm,data.$oth_inc,data.$debt,data.$repaydebtR,data.$depunder,data.$depover,data.$othexp,data.$jsal2,data.$jincterm,data.$joth_inc,data.$jdebt,data.$jrepaydebtR,data.$jdepunder,data.$jdepover,data.$jothexp,data.$net_incR,data.$net_incterm,data.$jnet_incR,data.$jnet_incterm,data.$result1R,data.$result2R);
        client.elements('css selector',hmcibErrorMsg,results=>{
          if(results.value.length>0) {
            //error text properties
          properties = hmcib_props.hmcibErrorMsg('lg');
          callback.singleElem(client, hmcibErrorMsg , properties, 'lg'); 
          }
        });
        client.clearValue('#mortgageDetails_mortgage-term')
              .setValue('#mortgageDetails_mortgage-term',2)
              .click('body')
              .pause(1000)
        client.expect.element(hmcibMinMaxError).to.be.visible;
        client.elements('css selector',hmcibMinMaxError,results=>{
          if(results.value.length>0) {
            //error text properties
          properties = hmcib_props.hmcibOverLayP('lg');
          rteCallback.rteElem(client, hmcibMinMaxError , properties,'p', 'lg');
          }
        });
        client.refresh()
        client.click('.overlay-wrap .close')
              .clearValue('#mortgageDetails_mortgage-term')
              .setValue('#mortgageDetails_mortgage-term',36)
              .click('body')
              .pause(1000)
        client.expect.element(hmcibMinMaxError).to.be.visible;
        client.elements('css selector',hmcibMinMaxError,results=>{
          if(results.value.length>0) {
            //error text properties
          properties = hmcib_props.hmcibOverLayP('lg');
          rteCallback.rteElem(client, hmcibMinMaxError , properties,'p', 'lg');
          }
        });
        client.click('.overlay-wrap .close')
} 
},
"12 Check for text area width properties": function(client) {
  hmcibForm = pageObj.elements.hmcibForm.selector,
  ArrWid = [' .slider-input.single-input-slider .input-field--width-small','>:not(.slider-input).input-field--width-small','>:not(.slider-input):not(.input-field--width-small):not(.input-field--width-medium):not(#hmcib_result_send-email-text).input-field',' #hmcib_result_send-email-text.input-field',' .input-field--width-medium']
  globalProps(client);
if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
  
  //hmcib select text
  client.source(() => {
    console.log("select Text properties"); 
  });
  client.elements('css selector',hmcibForm,results=>{
    if(results.value.length>0) {
      for(i=0;i<ArrWid.length;i++){
        let hmcibForm1=hmcibForm+ArrWid[i];
        client.source(() => {
          console.log(hmcibForm1);
        });
        properties = hmcib_props['hmcibTextAreaWidth'+(i+1)]('lg');
        callback.multiloop(client, hmcibForm1 , properties, 'lg');
      }
    }
  });
}  
},
    "Ending the session":function(client){
        client.end();
    }
    
}



