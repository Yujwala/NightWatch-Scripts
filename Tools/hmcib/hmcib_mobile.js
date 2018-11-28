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
  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
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
      .setValue('#mortgageDetails_mortgage-term', term)
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
          properties = hmcib_props.hmcibResult('xs');  
          callback.multiloop(client, hmcibResult , properties, 'xs');
          }
    });
  client.elements('css selector',hmcibResultRte,results=>{
      if(results.value.length>0) {
        hmcibResultRte1=hmcibResultRte+':not(.padded--comp-rich-text)';
        hmcibResultRte2=hmcibResultRte+'.padded--comp-rich-text';
        properties = hmcib_props.hmcibResultRteP('xs');  
        rteCallback.rteElem(client, hmcibResultRte1 , properties,'p', 'xs');
        properties = hmcib_props.hmcibResultRteP1('xs');
        rteCallback.rteElem(client, hmcibResultRte2 , properties,'p', 'xs');
        properties = hmcib_props.hmcibResultRteH2F16('xs');  
        rteCallback.rteElem(client, hmcibResultRte , properties,'h2 .fs-16', 'xs');
        properties = hmcib_props.hmcibResultRteH2('xs');  
        rteCallback.rteElem(client, hmcibResultRte , properties,'h2', 'xs');
            }
        });
  client.elements('css selector',hmcibCtaL,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibCtaL('xs');  
        callback.multiloop(client, hmcibCtaL , properties, 'xs');
        client.source(() => {
          console.log("ctaL hover and focus"); 
        });
        //cta hover
        properties = hmcib_props.hmcibCta1Hov('xs');
        client.moveToElement(hmcibCtaL, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCtaL , properties, 'xs'); 
        //cta focus
        properties = hmcib_props.hmcibCtaLFoc('xs');
        client.moveToElement(hmcibCtaL, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCtaLFoc , properties, 'xs');
        client.click(hmcibResultRte);
      }
    });
  client.elements('css selector',hmcibCtaM,results=>{
      if(results.value.length>0) {
        properties = hmcib_props.hmcibCtaM('xs');  
        callback.multiloop(client, hmcibCtaM , properties, 'xs');
        client.source(() => {
          console.log("CtaM Hover and Focus"); 
        });
        //cta hover
        properties = hmcib_props.hmcibCtaMHov('xs');
        client.moveToElement(hmcibCtaM, 10, 10);
        client.pause(1000);
        callback.singleElem(client, hmcibCtaM , properties, 'xs'); 
        //cta focus
        properties = hmcib_props.hmcibCtaMFoc('xs');
        client.moveToElement(hmcibCtaM, 10, 10);
        client.mouseButtonDown(0);
        client.pause(1000)
        callback.singleElem(client, hmcibCtaMFoc , properties, 'xs');
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
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
    client.refresh();
  client.source(() => {
    console.log("Overlay properties for"+dropdown); 
  });
  if(brand.props.$brandName=='natwest-personal'||brand.props.$brandName=='rbs-personal'){
    client.click('.grid .selector option[value='+labval1+']')
  client.elements('css selector',hmcibOverLayDeskWhole,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskWhole('xs');
      callback.multiloop(client, hmcibOverLayDeskWhole , properties, 'xs');
      properties = hmcib_props.hmcibOverLayFs20('xs');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p .fs-20', 'xs');
      properties = hmcib_props.hmcibFooterP('xs');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p .fs-14', 'xs');
      properties = hmcib_props.hmcibOverLayP('xs');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p[style]', 'xs');
    }
  });
  client.elements('css selector',hmcibOverLayCtaSec,results=>{
     if(results.value.length>0) {
        properties = hmcib_props.hmcibOverLayCtaSec('xs');
        callback.multiloop(client, hmcibOverLayCtaSec , properties, 'xs');
        client.source(() => {
          console.log("Cta hover and focus properties"); 
        });
            //cta hover
            properties = hmcib_props.hmcibCtaToggleHov('xs');
            client.moveToElement(hmcibOverLayCtaSec, 10, 10);
            client.pause(1000);
            callback.singleElem(client, hmcibOverLayCtaSec , properties, 'xs');

            //cta focus
            properties = hmcib_props.hmcibOverLayCtaSecFoc('xs');
            client.moveToElement(hmcibOverLayCtaSec, 10, 10);
            client.mouseButtonDown(0);
            client.pause(1000)
            callback.singleElem(client, hmcibOverLayCtaSecFoc , properties, 'xs');
            client.click(hmcibOverLayDeskWhole);
        }
      });
  client.elements('css selector',hmcibOverLayDeskHalf,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskHalf('xs');  
      callback.multiloop(client, hmcibOverLayDeskHalf , properties, 'xs');
    }
  });
  client.elements('css selector',hmcibOverLayCtaL,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayCtaL('xs');  
      callback.multiloop(client, hmcibOverLayCtaL , properties, 'xs');
              client.source(() => {
                console.log("Cta hover and focus properties"); 
              });
              //cta hover
              properties = hmcib_props.hmcibCta1Hov('xs');
              client.moveToElement(hmcibOverLayCtaL, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaL , properties, 'xs'); 
      
              //cta focus
              properties = hmcib_props.hmcibCtaLFoc('xs');
              client.moveToElement(hmcibOverLayCtaL, 10, 10);
              client.mouseButtonDown(0);
              client.pause(1000)
              callback.singleElem(client, hmcibOverLayCtaLFoc , properties, 'xs');
    }
  });
  client.click('body');
}
if(brand.props.$brandName=='iom'||brand.props.$brandName=='natwest-international'){
  client.click('.grid .selector option[value='+labval2+']')
  client.elements('css selector',hmcibOverLayDeskWhole,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayDeskWhole('xs');
      callback.multiloop(client, hmcibOverLayDeskWhole , properties, 'xs');
      properties = hmcib_props.hmcibOverLayiomP('xs');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p', 'xs');
      properties = hmcib_props.hmcibOverLayiomPS('xs');
      rteCallback.rteElem(client, hmcibOverLayDeskWhole , properties,'p strong', 'xs');
    }
  });
  client.elements('css selector',hmcibOverLayHeading1,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayHeading1('xs');  
      callback.multiloop(client, hmcibOverLayHeading1 , properties, 'xs');
    }
  });
  client.elements('css selector',hmcibOverLayHeading2,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayHeading2('xs');  
      callback.multiloop(client, hmcibOverLayHeading2 , properties, 'xs');
    }
  });
  client.elements('css selector',hmcibOverLayCtaM,results=>{
    if(results.value.length>0) {
      properties = hmcib_props.hmcibOverLayCtaM('xs');  
      callback.multiloop(client, hmcibOverLayCtaM , properties, 'xs');
              client.source(() => {
                console.log("Cta hover and focus properties"); 
              });
              //cta hover
              properties = hmcib_props.hmcibOverLayCtaMHov('xs');
              client.moveToElement(hmcibOverLayCtaM, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaM , properties, 'xs'); 
      
              //cta focus
              properties = hmcib_props.hmcibOverLayCtaMFoc('xs');
              client.moveToElement(hmcibOverLayHeading2, 10, 10);
              client.pause(1000);
              client.keys("\uE004");
              client.pause(1000);
              callback.singleElem(client, hmcibOverLayCtaMFoc , properties, 'xs');
    }
  });
  client.click('body');
}
} 
}

module.exports = {
  '@tags': ['hmcib-mobile', 'hmcib'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.NW_INTER_HMCIB_MOB);
           console.log("--Mobile--"+pageurl.NW_INTER_HMCIB_MOB);  
    },
      "1 Check for header properties": function(client) {
            hmcibHeader = pageObj.elements.hmcibHeader.selector,
            hmcibHeaderShelf = pageObj.elements.hmcibHeaderShelf.selector,
            hmcibHeaderTit = pageObj.elements.hmcibHeaderTit.selector,
            hmcibHeaderText = pageObj.elements.hmcibHeaderText.selector,
            globalProps(client);
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib header props
            client.source(() => {
              console.log("Header properties"); 
            });
            client.elements('css selector',hmcibHeader,results=>{
              if(results.value.length>0) {
                client.expect.element(hmcibHeader).to.have.css('background-image').which.contains("hero");
                properties = hmcib_props.hmcibHeader('xs');  
                callback.multiloop(client, hmcibHeader , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibHeaderShelf,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibHeaderShelf('xs');  
              callback.multiloop(client, hmcibHeaderShelf , properties, 'xs');
            }
          });
          client.source(() => {
            console.log("Header Text properties"); 
          });
          client.elements('css selector',hmcibHeaderTit,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibHeaderTit('xs');  
              callback.multiloop(client, hmcibHeaderTit , properties, 'xs');
            }
          });
          client.elements('css selector',hmcibHeaderText,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibHeaderText('xs');  
              callback.multiloop(client, hmcibHeaderText , properties, 'xs');
            }
          });
          }  
      },
        "2 Check for Desk padding properties": function(client) {
          hmcibFieldSet = pageObj.elements.hmcibFieldSet.selector,
          hmcibDeskComp = pageObj.elements.hmcibDeskComp.selector,
          hmcibForm = pageObj.elements.hmcibForm.selector
          selArr=['.desk--one-half.borrower-type','.desk--one-half.tool--input-comp','.desk--one-half.tool-desc-left','.desk--one-half.tool-desc-right','.desk--one-whole.tool--description']
          selForm=['.tool--input-comp:not(.applicant-other-income)>:not(.js-netincome-comp):not(.js-otherincome-comp)>','.borrower-type ','.borrow--result ','.applicant-other-income ']
          globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
          
          client.elements('css selector',hmcibFieldSet,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibFieldSet('xs');  
              callback.multiloop(client, hmcibFieldSet , properties, 'xs');
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
                properties = hmcib_props['hmcibPadd'+(i+1)]('xs');
                callback.multiloop(client, hmcibDeskComp1 , properties, 'xs');
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
                properties = hmcib_props['hmcibForm'+(i+1)]('xs');
                callback.multiloop(client, hmcibForm1 , properties, 'xs');
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
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib header props
            client.source(() => {
              console.log("Footer properties"); 
            });
            client.elements('css selector',hmcibFooterH3,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibFooterH3('xs');  
                callback.multiloop(client, hmcibFooterH3 , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibFooterP,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibFooterP('xs');  
              rteCallback.rteElem(client, hmcibFooterP , properties,'p .fs-14', 'xs');
            }
          });
          client.elements('css selector',hmcibFooterCta,results=>{
            if(results.value.length>0) {
              properties = hmcib_props.hmcibFooterCta('xs');  
              callback.multiloop(client, hmcibFooterCta , properties, 'xs');
            }
          });
          }  
      },
      "4 Check for Title properties": function(client) {
            hmcibTitle = pageObj.elements.hmcibTitle.selector,
            globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib Title props
            client.source(() => {
              console.log("Titles properties"); 
            });
            client.elements('css selector',hmcibTitle,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibTitle('xs');  
                callback.multiloop(client, hmcibTitle , properties, 'xs');
              }
            });
          }  
      },
        "5 Check for Label text and text area properties": function(client) {
            hmcibLabelMob = pageObj.elements.hmcibLabelMob.selector,
            hmcibLabelEmail = pageObj.elements.hmcibLabelEmail.selector,
            hmcibTextAreaMob = pageObj.elements.hmcibTextAreaMob.selector,
            hmcibLabelMob1 = pageObj.elements.hmcibLabelMob1.selector,
            globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib label text
            client.source(() => {
              console.log("Label Text properties"); 
            });
            client.elements('css selector',hmcibLabelMob,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibLabel('xs');  
                callback.multiloop(client, hmcibLabelMob , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibLabelMob1,results=>{
                if(results.value.length>0) {
                  properties = hmcib_props.hmcibLabelMob1('xs');  
                  callback.multiloop(client, hmcibLabelMob1 , properties, 'xs');
                }
              });
            client.elements('css selector',hmcibLabelEmail,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibLabelEmail('xs');  
                callback.multiloop(client, hmcibLabelEmail , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibTextAreaMob,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibTextArea('xs');  
                callback.multiloop(client, hmcibTextAreaMob , properties, 'xs');
              }
            });
          }  
        },
      "6 Check for Icon properties": function(client) {
          hmcibIcon = pageObj.elements.hmcibIcon.selector,
          hmcibIconText = pageObj.elements.hmcibIconText.selector,
          globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
        
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
                client.elements('css selector',hmcibIcon,results=>{
                  if(results.value.length>0) {
                    properties = hmcib_props.hmcibIconFoc('xs');  
                    callback.singleElem(client, hmcibIcon , properties, 'xs');
                  }
                });
                client.elements('css selector',hmcibIconText,results=>{
                  if(results.value.length>0) {
                    properties = hmcib_props.hmcibIconText('xs');  
                    callback.multiloop(client, hmcibIconText , properties, 'xs');
                  }
                });
               properties = hmcib_props.hmcibIcon('xs');  
               callback.multiloop(client, hmcibIcon , properties, 'xs');
          }
        });
      }
      },
      "7 Check for select text properties": function(client) {
            hmcibSelectTextMob = pageObj.elements.hmcibSelectTextMob.selector,
            hmcibOptionText = pageObj.elements.hmcibOptionText.selector,
            selCls=['.js-applicant-details.float-left.float-left>:not(.js-income-comp)','.gross-income-unit .select-box-width-medium ','.select-box-width-small ','.borrower-type ']
            globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib select text
            client.source(() => {
              console.log("select Text properties"); 
            });
            client.expect.element(hmcibSelectTextMob).to.have.css('background-image').which.contains("rebrand-icon-sprite");
            client.elements('css selector',hmcibSelectTextMob,results=>{
              if(results.value.length>0) {
                for(i=0;i<selCls.length;i++){
                    let hmcibSelectText1=selCls[i]+hmcibSelectTextMob;
                    client.source(() => {
                      console.log(hmcibSelectText1);
                    });
                properties = hmcib_props['hmcibSelectText'+(i+1)]('xs');
                callback.multiloop(client, hmcibSelectText1 , properties, 'xs');
                }
              }
            });
            client.elements('css selector',hmcibOptionText,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibOptionText('xs');  
                callback.multiloop(client, hmcibOptionText , properties, 'xs');
              }
            });
          }  
      },
      "8 Check for cta before properties": function(client) {
            hmcibCta1 = pageObj.elements.hmcibCta1.selector,
            globalProps(client);
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            client.source(() => {
              console.log("Cta property before"); 
            });
            client.elements('css selector',hmcibCta1,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibCta1Before('xs');  
                callback.multiloop(client, hmcibCta1 , properties, 'xs');
              }
            });
          }  
      },
      "9 Check the functionality of the tool": function(client) {
          globalProps(client);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
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
           if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            
            //hmcib label text
            client.source(() => {
              console.log("Cta properties"); 
            });
            client.elements('css selector',hmcibCta1,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibCta1('xs');  
                callback.multiloop(client, hmcibCta1 , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibCta2,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibCta2('xs');  
                callback.multiloop(client, hmcibCta2 , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibCtaToggle,results=>{
              if(results.value.length>0) {
                properties = hmcib_props.hmcibCtaToggle('xs');  
                callback.multiloop(client, hmcibCtaToggle , properties, 'xs');
              }
            });
            client.refresh();
            client.source(() => {
              console.log("Cta hover and focus properties"); 
            });
            client.elements('css selector',hmcibCta1,results=>{
              if(results.value.length>0) {
              //cta hover
              properties = hmcib_props.hmcibCta1Hov('xs');
              client.moveToElement(hmcibCta1, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibCta1 , properties, 'xs'); 
      
              //cta focus
              properties = hmcib_props.hmcibCta1Foc('xs');
              client.moveToElement(hmcibCta1, 10, 10);
              client.mouseButtonDown(0);
              client.pause(1000)
              callback.singleElem(client, hmcibCta1Foc , properties, 'xs');
              }
            });
            client.elements('css selector',hmcibCtaToggle,results=>{
              if(results.value.length>0) {
              //cta hover
              properties = hmcib_props.hmcibCtaToggleHov('xs');
              client.moveToElement(hmcibCtaToggle, 10, 10);
              client.pause(1000);
              callback.singleElem(client, hmcibCtaToggle , properties, 'xs'); 
      
              //cta focus
              properties = hmcib_props.hmcibCtaToggleMFoc('xs');
              client.moveToElement(hmcibCtaToggle, 10, 10);
              client.mouseButtonDown(0);
              client.pause(1000)
              callback.singleElem(client, hmcibCtaToggleFoc , properties, 'xs');
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
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
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
                properties = hmcib_props.hmcibError('xs');
                callback.multiloop(client, hmcibError , properties, 'xs'); 
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
                properties = hmcib_props.hmcibErrorMsg('xs');
                callback.singleElem(client, hmcibErrorMsg , properties, 'xs'); 
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
                properties = hmcib_props.hmcibOverLayP('xs');
                rteCallback.rteElem(client, hmcibMinMaxError , properties,'p', 'xs');
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
                properties = hmcib_props.hmcibOverLayP('xs');
                rteCallback.rteElem(client, hmcibMinMaxError , properties,'p', 'xs');
                }
              });
              client.click('.overlay-wrap .close')
      } 
      },
    "Ending the session":function(client){
        client.end();
    }
    
}