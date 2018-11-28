var BTL_props = require('./BTL_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,
     data = require('./btl_data.js'),
    property=data.props;
  //branding = require('../../branding/getBrand.js'),
    //brand = require('../../branding/'+branding.getBrand.get());


    function globalProps(client){
    pageObj = client.page.BTL_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;   
} 
   
module.exports={
  '@tags': ['BTL-YES','Desktop'],
  "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.RBS_PER_BTL); 
            
    },
    '1. Checking the properties of start Shelf':function(client){
       var test=client.page.common()
       
       pagefill=client.page.personaldetails(),
       formHeaderWrapper = pageObj.elements.formHeaderWrapper.selector,
       formHeaderInnerGrid = pageObj.elements.formHeaderInnerGrid.selector,
       formHeroTitle = pageObj.elements.formHeroTitle.selector,
      formHeroTitleSpan = pageObj.elements.formHeroTitleSpan.selector,
      formHeroContent = pageObj.elements.formHeroContent.selector,
       formHeroContentspan = pageObj.elements.formHeroContentspan.selector,
       formMiddleWrapper = pageObj.elements.formMiddleWrapper.selector,
      aggrementTitle = pageObj.elements.aggrementTitle.selector,
      aggrementconfirm = pageObj.elements.aggrementconfirm.selector,
       aggrementconfirmContent = pageObj.elements.aggrementconfirmContent.selector,
      aggrementinputlabel = pageObj.elements.aggrementinputlabel.selector,
      aggrementradiocheck = pageObj.elements.aggrementradiocheck.selector,
       aggrementcheckbox = pageObj.elements.aggrementcheckbox.selector,
       aipLandingMessageBox = pageObj.elements.aipLandingMessageBox.selector,
      aipLandingMessageBoxSpan = pageObj.elements.aipLandingMessageBoxSpan.selector,
      startbuttonfocus = pageObj.elements.startbuttonfocus.selector,
                    
        globalProps(client);
                    
                   
                    client.waitForElementVisible('.btlParsys-checkboxrte',4000);
                client.elements('css selector','.btlParsys-checkboxrte .input-field-mandatory input',function(result){
                   result.value.forEach(function(element){
                            client.elementIdClick(element.ELEMENT);  
                            
                   });
                });
                
                pagefill.selectval();
                client.click('.js-radio-first-btl')
                .pause(4000)
                .click('.js-radio-first-btl .radio input[value="yes"]')
               // .click('.js-radio-btl-had-mortagage .radio input[name="hadResidentialMortgage"]')
               .click('.js-btl-rental-property select[name="howManyRentalProperties"]')
               .setValue('.js-btl-rental-property select[name="howManyRentalProperties"]',property.$rentalval)
               .pause(4000)
               .click('.js-radio-btl-had-mortagage .radio input[value="yes"]')
               .click('.js-btl-residential-property select[name="howManyResidentialProperties"]')
               .setValue('.js-btl-residential-property select[name="howManyResidentialProperties"]',property.$resival)
              
                
        //UI Starts Here
             client.pause(2000)
            

            properties = BTL_props.formHeaderInnerGridProps('lg');
            callback.multiloop(client, formHeaderInnerGrid , properties, 'lg');

            properties = BTL_props.formHeroTitleProps('lg');
            callback.multiloop(client, formHeroTitle , properties, 'lg');

             properties = BTL_props.formHeaderWrapperProps('lg');
            callback.singleElem(client, formHeaderWrapper , properties, 'lg');

            properties = BTL_props.formHeroTitleSpanProps('lg');
            callback.multiloop(client, formHeroTitleSpan , properties, 'lg');

            properties = BTL_props.formHeroContentProps('lg');
            callback.multiloop(client, formHeroContent , properties, 'lg');

            properties = BTL_props.formHeroContentspanProps('lg');
            callback.multiloop(client, formHeroContentspan , properties, 'lg');

            properties = BTL_props.formMiddleWrapperProps('lg');
            callback.multiloop(client, formMiddleWrapper , properties, 'lg');

            properties = BTL_props.aggrementTitleProps('lg');
            callback.multiloop(client, aggrementTitle , properties, 'lg');

            properties = BTL_props.aggrementconfirmProps('lg');
            callback.multiloop(client, aggrementconfirm , properties, 'lg');

            properties = BTL_props.aggrementconfirmContentProps('lg');
            callback.multiloop(client, aggrementconfirmContent , properties, 'lg');

            properties = BTL_props.aggrementinputlabelProps('lg');
            callback.multiloop(client, aggrementinputlabel , properties, 'lg');

            properties = BTL_props.aggrementradiocheckProps('lg');
            callback.multiloop(client, aggrementradiocheck , properties, 'lg');

            properties = BTL_props.aggrementcheckboxProps('lg');
            callback.multiloop(client, aggrementcheckbox , properties, 'lg');

            properties = BTL_props.aipLandingMessageBoxProps('lg');
            callback.multiloop(client, aipLandingMessageBox , properties, 'lg');

            properties = BTL_props.aipLandingMessageBoxSpanProps('lg');
            callback.multiloop(client, aipLandingMessageBoxSpan , properties, 'lg');

           client.pause(2000)
            client.moveToElement(".start-now .cta a",3,3);
            client.mouseButtonDown(".start-now .cta a");
            client.waitForElementVisible(startbuttonfocus,2000);
            client.pause(1000);
            properties = BTL_props.nextbuttonprops('lg');
            callback.singleElem(client, startbuttonfocus , properties, 'lg');
             client.mouseButtonUp();
            client.pause(2000)
           
           
          client.click('.start-now.js-getting-started .cta--branded a[title="Start Now"]')


               },

    '2.Checking the properties and functionality of form1':function(client){

            pagefill=client.page.personaldetails()
            textBox = pageObj.elements.textBox.selector,
            formtitle = pageObj.elements.form1title.selector,
            inputlabel = pageObj.elements.form1inputlabel.selector,
            nextbutton = pageObj.elements.nextbutton.selector,
            richtext = pageObj.elements.form1richtext.selector,
            form1iconinfo = pageObj.elements.form1iconinfo.selector,
            form1icontooltip = pageObj.elements.form1icontooltip.selector,
            formsHeaderWrapper = pageObj.elements.formsHeaderWrapper.selector,
            banner = pageObj.elements.banner.selector,
            bannercontent = pageObj.elements.bannercontent.selector,
            middlewrapper = pageObj.elements.middlewrapper.selector,
            errorContainer = pageObj.elements.errorContainer.selector,
            feedbackcontainer = pageObj.elements.feedbackcontainer.selector,
            feedbackcontainertext = pageObj.elements.feedbackcontainertext.selector,


            globalProps(client);
            client.pause(2000)

            client.click(".itl-tool-enhancements .next a");

            client.pause(1000)
            properties = BTL_props.errorContainerProps('lg');
            callback.multiloop(client, errorContainer , properties, 'lg');
              
              pageObj.textboxfocus(client,textBox);
              client.pause(2000);
              pageObj.feedbackContainer(client,feedbackcontainer,feedbackcontainertext);

              client.expect.element(textBox).to.have.css('background-image').which.contains(property.$error_url); 
            
              pagefill.formfill();
            
            
            
           

            //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, formtitle , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.multiloop(client, inputlabel , properties, 'lg');

            properties = BTL_props.richtextProps('lg');
            callback.multiloop(client, richtext , properties, 'lg');
             
             pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);

             pageObj.iconinfo(client,form1iconinfo,form1icontooltip)

            client.expect.element(textBox).to.have.css('background-image').which.contains(property.$tick_url); 

            pageObj.nextbuttonfocus(client,nextbutton);

            
    } ,
   '3.Checking the properties and functionality of form2':function(client){

              addresspage=client.page.address()
              form2textbox = pageObj.elements.form2textbox.selector,
              nextbutton = pageObj.elements.nextbutton.selector,
            formtitle = pageObj.elements.form2title.selector,
            inputlabel = pageObj.elements.form2inputlabel.selector,
            richtext = pageObj.elements.form2richtext.selector,
            form2iconinfo = pageObj.elements.form2iconinfo.selector,
            form2icontooltip = pageObj.elements.form2icontooltip.selector,
            formsHeaderWrapper = pageObj.elements.formsHeaderWrapper.selector,
            banner = pageObj.elements.banner.selector,
            bannercontent = pageObj.elements.bannercontent.selector,
            middlewrapper = pageObj.elements.middlewrapper.selector,
             feedbackcontainer = pageObj.elements.feedbackcontainer.selector,
            feedbackcontainertext = pageObj.elements.feedbackcontainertext.selector,
           
            
           addresspage.formfill();

             pageObj.feedbackContainer(client,feedbackcontainer,feedbackcontainertext);
             //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, formtitle , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.multiloop(client, inputlabel , properties, 'lg');

            pageObj.textboxfocus(client,form2textbox);
           
           properties = BTL_props.richtextProps('lg');
            callback.multiloop(client, richtext , properties, 'lg');

           pageObj.nextbuttonfocus(client,nextbutton);
           pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);

           client.expect.element(form2textbox).to.have.css('background-image').which.contains(property.$tick_url); 
             
              client.elements('css selector',form2iconinfo,results=>{
                if(results.value.length>0) {
             pageObj.iconinfo(client,form2iconinfo, form2icontooltip)
           }
         })


            
             

            } ,
    '4.Checking the properties and functionality of form3 ':function(client){

              residential=client.page.residential()
              form3textbox = pageObj.elements.form3textbox.selector,
              nextbutton = pageObj.elements.nextbutton.selector,
            formtitle = pageObj.elements.form3title.selector,
            inputlabel = pageObj.elements.form3inputlabel.selector,
            richtext = pageObj.elements.form3richtext.selector,
            form3iconinfo = pageObj.elements.form3iconinfo.selector,
            formsHeaderWrapper = pageObj.elements.formsHeaderWrapper.selector,
            banner = pageObj.elements.banner.selector,
            bannercontent = pageObj.elements.bannercontent.selector,
             middlewrapper = pageObj.elements.middlewrapper.selector,
              feedbackcontainer = pageObj.elements.feedbackcontainer.selector,
            feedbackcontainertext = pageObj.elements.feedbackcontainertext.selector,
            form3icontooltip = pageObj.elements.form3icontooltip.selector,

            console.log(property.$resival);

           residential.formfill(property.$resival,client);
           client.pause(2000)

            console.log("entered form 3")
             //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, formtitle , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.multiloop(client, inputlabel , properties, 'lg');
            pageObj.textboxfocus(client,form3textbox);

            properties = BTL_props.richtextProps('lg');
            callback.multiloop(client, richtext , properties, 'lg');

            pageObj.nextbuttonfocus(client,nextbutton);
           pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);

           client.expect.element(form3textbox).to.have.css('background-image').which.contains(property.$tick_url); 
             
              pageObj.feedbackContainer(client,feedbackcontainer,feedbackcontainertext);
             pageObj.iconinfo(client,form3iconinfo,form3icontooltip)

            
             

            } ,
    '5.Checking the properties and functionality of form4 ':function(client){

              rental=client.page.rental(),
              form4textbox = pageObj.elements.form4textbox.selector,
              nextbutton = pageObj.elements.nextbutton.selector,
            formtitle = pageObj.elements.form4title.selector,
            inputlabel = pageObj.elements.form4inputlabel.selector,
            richtext = pageObj.elements.form4richtext.selector,
            form4iconinfo = pageObj.elements.form4iconinfo.selector,
            formsHeaderWrapper = pageObj.elements.formsHeaderWrapper.selector,
            banner = pageObj.elements.banner.selector,
            bannercontent = pageObj.elements.bannercontent.selector,
             middlewrapper = pageObj.elements.middlewrapper.selector,
              feedbackcontainer = pageObj.elements.feedbackcontainer.selector,
            feedbackcontainertext = pageObj.elements.feedbackcontainertext.selector,
             form4icontooltip = pageObj.elements.form4icontooltip.selector,


            client.pause(2000);
           rental.formfill(property.$rentalval,client);

            
             //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, formtitle , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.multiloop(client, inputlabel , properties, 'lg');

            pageObj.textboxfocus(client,form4textbox);

            properties = BTL_props.richtextProps('lg');
            callback.multiloop(client, richtext , properties, 'lg');

            pageObj.nextbuttonfocus(client,nextbutton);
           pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);
             
              pageObj.feedbackContainer(client,feedbackcontainer,feedbackcontainertext);

              client.expect.element(form4textbox).to.have.css('background-image').which.contains(property.$tick_url); 

             pageObj.iconinfo(client,form4iconinfo,form4icontooltip)


            
             

            } ,
    '6.Checking the properties and functionality of form5 and form6':function(client){

              finances=client.page.finance();
                    
            form5textbox = pageObj.elements.form5textbox.selector,
            nextbutton = pageObj.elements.nextbutton.selector,
            formtitle = pageObj.elements.form5title.selector,
            
            inputlabel = pageObj.elements.form5inputlabel.selector,
            form6propetytype = pageObj.elements.form6propetytype.selector,
            form6textbox = pageObj.elements.form6textbox.selector,
            form6title = pageObj.elements.form6title.selector,
            form6inputlabel = pageObj.elements.form6inputlabel.selector,
             richtext = pageObj.elements.form5richtext.selector,
              richtext1 = pageObj.elements.form6richtext.selector,
              form5iconinfo = pageObj.elements.form5iconinfo.selector,
              form6iconinfo = pageObj.elements.form6iconinfo.selector,
            formsHeaderWrapper = pageObj.elements.formsHeaderWrapper.selector,
            banner = pageObj.elements.banner.selector,
            bannercontent = pageObj.elements.bannercontent.selector,
            middlewrapper = pageObj.elements.middlewrapper.selector,
             feedbackcontainer = pageObj.elements.feedbackcontainer.selector,
            feedbackcontainertext = pageObj.elements.feedbackcontainertext.selector,
             form5icontooltip = pageObj.elements.form5icontooltip.selector,
             form6icontooltip = pageObj.elements.form6icontooltip.selector,


            
           finances.formfill();

            
             //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, formtitle , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.multiloop(client, inputlabel , properties, 'lg');

            properties = BTL_props.richtextProps('lg');
            callback.multiloop(client, richtext , properties, 'lg'); 

           pageObj.textboxfocus(client,form5textbox);

            pageObj.nextbuttonfocus(client,nextbutton);
            pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);
             
              pageObj.feedbackContainer(client,feedbackcontainer,feedbackcontainertext);

             pageObj.iconinfo(client,form5iconinfo,form5icontooltip)

             client.expect.element(form5textbox).to.have.css('background-image').which.contains(property.$tick_url); 

            client.pause(1000);

            //Final page(form 6 code)

             finances.finalpage();

            
             //Form title
            properties = BTL_props.formtitleprops('lg');
            callback.multiloop(client, form6title , properties, 'lg');

             //Input label
            properties = BTL_props.inputlabelprops('lg');
            callback.singleElem(client, form6inputlabel , properties, 'lg');

            properties = BTL_props.form6propetytypeProps('lg');
            callback.multiloop(client, form6propetytype , properties, 'lg');

            properties = BTL_props.richtext1Props('lg');
            callback.multiloop(client, richtext1 , properties, 'lg');
            
            pageObj.textboxfocus(client,form6textbox);
           pageObj.banner(client,formsHeaderWrapper,banner,bannercontent,middlewrapper);
             
             pageObj.iconinfo(client,form6iconinfo,form6icontooltip)

             client.expect.element(form6textbox).to.have.css('background-image').which.contains(property.$tick_url); 


            client.click('.q-nav input[type="submit"]')

           // pageObj.nextbuttonfocus(client,nextbutton);
            
             

            } ,

    '7.For Final Result Page':function(client){
  
            resultHeader = pageObj.elements.resultHeader.selector,
            resultHeadercontent = pageObj.elements.resultHeadercontent.selector,
            successresult = pageObj.elements.successresult.selector,
            resulttopcontent = pageObj.elements.resulttopcontent.selector,
            resultvalue = pageObj.elements.resultvalue.selector,
            resultmaxcontent = pageObj.elements.resultmaxcontent.selector,
            resultleftcontent = pageObj.elements.resultleftcontent.selector,
            leftcontenttitle = pageObj.elements.leftcontenttitle.selector,
            finalpagerichtext = pageObj.elements.finalpagerichtext.selector,
            emailresult = pageObj.elements.emailresult.selector,
            nextpage = pageObj.elements.nextpage.selector,
            nextpagecontent = pageObj.elements.nextpagecontent.selector,
            nextpagecta = pageObj.elements.nextpagecta.selector,
            startagaincta = pageObj.elements.startagaincta.selector,
            resultfooter = pageObj.elements.resultfooter.selector,
            resultfootercontent = pageObj.elements.resultfootercontent.selector,
            aipLandingMessageBox = pageObj.elements.aipLandingMessageBox.selector,
            aipLandingMessageBoxSpan = pageObj.elements.aipLandingMessageBoxSpan.selector,

            //failure selector
            failresultcontainer = pageObj.elements.failresultcontainer.selector,
            failureheading = pageObj.elements.failureheading.selector,
            failuretitle = pageObj.elements.failuretitle.selector,
            failreason = pageObj.elements.failreason.selector,
            failreasoncontent = pageObj.elements.failreasoncontent.selector,
            recalculate = pageObj.elements.recalculate.selector,
            recalculatebutton = pageObj.elements.recalculatebutton.selector,

           //success scenario

          client.elements('css selector',"#agreementPrinciple .final-result .success-result .amount-content",results=>{
               if(results.value.length>0) {
            properties = BTL_props.resultHeaderProps('lg');
            callback.multiloop(client, resultHeader , properties, 'lg');

            properties = BTL_props.resultHeadercontentProps('lg');
            callback.multiloop(client, resultHeadercontent , properties, 'lg');

            properties = BTL_props.successresultProps('lg');
            callback.multiloop(client, successresult , properties, 'lg');

            properties = BTL_props.resulttopcontentProps('lg');
            callback.multiloop(client, resulttopcontent , properties, 'lg');

            properties = BTL_props.resultvalueProps('lg');
            callback.multiloop(client, resultvalue , properties, 'lg');

            properties = BTL_props.resultmaxcontentProps('lg');
            callback.multiloop(client, resultmaxcontent , properties, 'lg');

            properties = BTL_props.resultleftcontentProps('lg');
            callback.multiloop(client, resultleftcontent , properties, 'lg');

            properties = BTL_props.leftcontenttitleProps('lg');
            callback.multiloop(client, leftcontenttitle , properties, 'lg');

            properties = BTL_props.richtext1Props('lg');
            callback.multiloop(client, finalpagerichtext , properties, 'lg');

            properties = BTL_props.emailresultProps('lg');
            callback.multiloop(client, emailresult , properties, 'lg');

            //properties = BTL_props.nextpageProps('lg');
            //callback.multiloop(client, nextpage , properties, 'lg');

            properties = BTL_props.nextpagecontentProps('lg');
            callback.multiloop(client, nextpagecontent , properties, 'lg');

            
            properties = BTL_props.nextpagectaProps('lg');
            callback.singleElem(client, nextpagecta , properties, 'lg');

            properties = BTL_props.startagainctaProps('lg');
            callback.multiloop(client, startagaincta , properties, 'lg');

            properties = BTL_props.resultfooterProps('lg');
            callback.multiloop(client, resultfooter , properties, 'lg');

            properties = BTL_props.resultfootercontentProps('lg');
            callback.multiloop(client, resultfootercontent , properties, 'lg');


            properties = BTL_props.resultaipLandingMessageBoxProps('lg');
            callback.multiloop(client, aipLandingMessageBox , properties, 'lg');

            properties = BTL_props.aipLandingMessageBoxSpanProps('lg');
            callback.multiloop(client, aipLandingMessageBoxSpan , properties, 'lg');

            properties = BTL_props.resultfooterbeforeProps('lg');
           callback.pseudoSingleElem(client, resultfooter,':before',properties);
             
            client.moveToElement(startagaincta,3,3);
            client.mouseButtonDown(startagaincta);
            client.pause(1000);
            client.waitForElementVisible(startagaincta+":focus",2000);
            client.pause(1000);
            properties = BTL_props.startagainctafocusProps('lg');
            callback.singleElem(client, startagaincta+":focus" , properties, 'lg');
          }
        })
       

       //failure scenario
       client.elements('css selector',"#agreementPrinciple .final-result .fail-result",results=>{
               if(results.value.length>0) {
                
                properties = BTL_props.failresultcontainerProps('lg');
            callback.multiloop(client, failresultcontainer , properties, 'lg');

             properties = BTL_props.failureheadingProps('lg');
            callback.multiloop(client, failureheading , properties, 'lg');

             properties = BTL_props.failuretitleProps('lg');
            callback.multiloop(client, failuretitle , properties, 'lg');

             properties = BTL_props.failreasonProps('lg');
            callback.multiloop(client, failreason , properties, 'lg');

             properties = BTL_props.failreasoncontentProps('lg');
            callback.multiloop(client, failreasoncontent , properties, 'lg');

             properties = BTL_props.recalculateProps('lg');
            callback.multiloop(client, recalculate , properties, 'lg');

             properties = BTL_props.recalculatebuttonProps('lg');
            callback.multiloop(client, recalculatebutton , properties, 'lg');
               



               }


             })




             },
};


