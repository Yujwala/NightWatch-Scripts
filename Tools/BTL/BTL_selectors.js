
var BTL_props = require('./BTL_props.js');
module.exports = {
	url: "",
    elements : {  
      //Desktop Selectors
      textBox:{
        selector:".questions-wrapper li:nth-child(1)  .form-input-row .input-field"
      },
      formHeaderWrapper:{
   selector:'.tool--mortgageDetails .header-wrapper'
      },
      formHeaderInnerGrid:{
   selector:'.tool--mortgageDetails .header-wrapper .desk--one-whole'
      },
      formHeroTitle:{
      	selector:'.tool--mortgageDetails .header-wrapper .desk--one-whole .hero--title'
      },
      formHeroTitleSpan:{
      	selector:'.tool--mortgageDetails .header-wrapper .desk--one-whole .hero--title span'
      },
      formHeroContent:{
      	selector:'.tool--mortgageDetails .header-wrapper .desk--one-whole .palm--two-thirds'
      },
      formHeroContentspan:{
      	selector:'.tool--mortgageDetails .header-wrapper .desk--one-whole .palm--two-thirds span'
      },
      formMiddleWrapper:{
      	selector:'.tool--mortgageDetails .agreement-consent'
      },
      aggrementTitle:{
      	selector:'.tool--mortgageDetails .middle-wrapper .agreement-consent .agreement-title'
      },
      aggrementconfirm:{
      	selector:'.tool--mortgageDetails .middle-wrapper .agreement-consent .agreement-consent--info .input-label  h3'
      },
       aggrementconfirmContent:{
      	selector:'.tool--mortgageDetails .middle-wrapper .agreement-consent .agreement-consent--info .input-label  li'
      },
       aggrementinputlabel:{
      	selector:'.itl-tool-enhancements  .btl-landing-new-fields .form-input-row .input-label:not(.checkbox)'
      },
      aggrementradiocheck:{
      	selector:'.itl-tool-enhancements  .btl-landing-new-fields  .radio-check'
      },
      aggrementcheckbox:{
      	selector:'.itl-tool-enhancements  .btl-landing-new-fields  .radio-check .checkbox'
      },
      aipLandingMessageBox:{
      	selector:'.itl-tool-enhancements  .aipLandingMessageBox'
      },
      aipLandingMessageBoxSpan:{
      	selector:'.itl-tool-enhancements  .aipLandingMessageBox span'
      },
   startbuttonfocus:{
 	selector:'.start-now .cta a:focus'
   },
   formsHeaderWrapper:{
   	selector:'.itl-tool-enhancements .questions .header-wrapper'
   },
   banner:{
   	selector:'.itl-tool-enhancements .questions .header-wrapper .banner'
   },
   bannercontent:{
   	selector:'.itl-tool-enhancements .questions .header-wrapper .banner p'
   },
   middlewrapper:{
 selector:'.itl-tool-enhancements .questions .middle-wrapper'
   },
   errorContainer:{
   	selector:".itl-tool-enhancements .error-container-bottom"
   },
   feedbackcontainer:{
     selector:".itl-tool-enhancements .feedback"
   },
   feedbackcontainertext:{
     selector:".itl-tool-enhancements .feedback p"
   },

	form1title:{
        selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(1).question .title"
      },
      form1inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(1) .form-input-row .input-label:not(.checkbox)"
      },
      form1iconinfo:{
      	selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(1) .icon-info"
      },
      form1icontooltip:{
        selector:".questions-wrapper li:nth-child(1) .icon-info__tool-tip"
      },
      form1richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(1) .fc-black"
      },
      form2iconinfo:{
      	selector:".questions-wrapper li:nth-child(2) .icon-info"
      },
      form2textbox:{
      	selector:'.questions-wrapper li:nth-child(2)  .form-input-row .input-field'
      },
       form2icontooltip:{
        selector:".questions-wrapper li:nth-child(2) .icon-info__tool-tip"
      },
      form2title:{
        selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(2).question .title"
      },
      form2richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(2) .fc-black"
      },
      form2inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper li:nth-child(2) .form-input-row .input-label"
      },
      form3iconinfo:{
      	selector:".itl-tool-enhancements  .questions-wrapper .residential-prop-1 .icon-info"
      },
      form3icontooltip:{
        selector:".questions-wrapper .residential-prop-1 .icon-info__tool-tip"
      },
      form3title:{
        selector:".itl-tool-enhancements  .questions-wrapper .residential-prop-1.question .title"
      },
      form3inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper .residential-prop-1 .form-input-row .input-label"
      },
      form3richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper .residential-prop-1 .fc-black"
      },
      form3textbox:{
      	selector:'.questions-wrapper .residential-prop-1  .form-input-row .input-field'
      },
      form4iconinfo:{
      	selector:".itl-tool-enhancements  .questions-wrapper .rental-prop-1 .icon-info"
      },
      form4icontooltip:{
        selector:".questions-wrapper .rental-prop-1 .icon-info__tool-tip"
      },
      form4title:{
        selector:".itl-tool-enhancements  .questions-wrapper .rental-prop-1.question .title"
      },
      form4inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper .rental-prop-1 .form-input-row .input-label"
      },
      form4richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper .rental-prop-1 .fc-black"
      },
      form4textbox:{
      	selector:'.questions-wrapper .rental-prop-1  .form-input-row .input-field'
      },
      form5iconinfo:{
      	selector:".itl-tool-enhancements  .questions-wrapper .finance-screen-btl .icon-info"
      },
      form5icontooltip:{
        selector:".questions-wrapper .finance-screen-btl .icon-info__tool-tip"
      },
      form5title:{
        selector:".itl-tool-enhancements  .questions-wrapper .finance-screen-btl.question .title"
      },
      form5richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper .finance-screen-btl .fc-black"
      },
      form5inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper .finance-screen-btl .form-input-row .input-label"
      },
      form5textbox:{
      	selector:'.questions-wrapper .finance-screen-btl  .form-input-row .input-field'
      },
       form6iconinfo:{
      	selector:".itl-tool-enhancements  .questions-wrapper li:last-child .icon-info"
      },
      form6icontooltip:{
        selector:".questions-wrapper li:last-child .icon-info__tool-tip"
      },
       form6title:{
        selector:".itl-tool-enhancements  .questions-wrapper  li:last-child.question .title"
      },
      form6inputlabel:{
        selector:".itl-tool-enhancements  .questions-wrapper  li:last-child .form-input-row .input-label:not(.checkbox)"
      },
      form6richtext:{
         selector:".itl-tool-enhancements  .questions-wrapper li:last-child .fc-black"
      },
      form6propetytype:{
        selector:".itl-tool-enhancements  .questions-wrapper  li:last-child  .property-type .form-input-row .input-label:not(.checkbox)"
      },
      form6textbox:{
      	selector:'.questions-wrapper li:last-child  .form-input-row .input-field'
      },
      nextbutton:{
        selector:".itl-tool-enhancements .q-nav .next span a:focus"
      },

      //Result page 
      resultHeader:{
        selector:"#agreementPrinciple .final-result .result-feedback"
      },
       resultHeadercontent:{
        selector:"#agreementPrinciple .final-result .result-feedback h3"
      },
      successresult:{
        selector:"#agreementPrinciple .final-result .success-result"
      },
      resulttopcontent:{
        selector:"#agreementPrinciple .final-result .success-result .result-top-content"
      },
      resultvalue:{
        selector:"#agreementPrinciple .final-result .success-result .result-top-content .mortgage-amount"
      },
      resultmaxcontent:{
        selector:"#agreementPrinciple .final-result .success-result .result-top-content .results-max-amount"
      },
      resultleftcontent:{
        selector:"#agreementPrinciple .final-result .success-result .result-left-content"
      },
      leftcontenttitle:{
        selector:"#agreementPrinciple .final-result .success-result .result-left-content .block-title"
      },
     finalpagerichtext:{
        selector:"#agreementPrinciple .final-result .success-result  .fc-black"
      },
      emailresult:{
        selector:"#agreementPrinciple .final-result .success-result  .mortgage-cta-link--mail a"
      },
       nextpage:{
        selector:"#agreementPrinciple .final-result .success-result  .next-step"
      },
       nextpagecontent:{
        selector:"#agreementPrinciple .final-result .success-result  .next-step h3"
      },
      nextpagecta:{
        selector:"#agreementPrinciple .final-result .success-result  .next-step .cta a"
      },
      startagaincta:{
        selector:"#agreementPrinciple .final-result .start-again-cta a"
      },
       resultfooter:{
        selector:"#agreementPrinciple .result-footer"
      },
       resultfootercontent:{
        selector:"#agreementPrinciple .result-footer .fs-14"
      },

    //Failure Scenario
     failresultcontainer:{
        selector:"#agreementPrinciple .final-result .fail-result"
      },
      failureheading:{
        selector:"#agreementPrinciple .final-result .fail-result .results-failure-heading"
      },
      failuretitle:{
        selector:"#agreementPrinciple .final-result .fail-result .results-failure-title"
      },  
      failreason:{
        selector:"#agreementPrinciple .final-result .fail-result .fail-reason"
      },
      failreasoncontent:{
        selector:"#agreementPrinciple .final-result .fail-result .fail-reason p:nth-child(odd)"
      },
      recalculate:{
        selector:"#agreementPrinciple .final-result .fail-result .recalculate-cta"
      },
      recalculatebutton:{
        selector:"#agreementPrinciple .final-result .fail-result .recalculate-cta a"
      },

  },
   commands: [{
    
      textboxfocus : function(client,textBox){
        client.elements('css selector',textBox,function(result){
        result.value.forEach(function(element,index){
          
           client.elementIdClick(element.ELEMENT)
           
            properties = BTL_props.textBoxProps('lg');
            callback.singleElem(client, textBox+":focus" , properties, 'lg');
            
            client.pause(2000)
})
      })
    },
                 
    
nextbuttonfocus:function(client,nextbutton){

            client.moveToElement(".itl-tool-enhancements .q-nav .next span a",3,3);
            client.mouseButtonDown(".itl-tool-enhancements .q-nav .next span a");
            client.pause(1000);
            client.waitForElementVisible(nextbutton,2000);
            client.pause(1000);
            properties = BTL_props.nextbuttonprops('lg');
            callback.singleElem(client, nextbutton , properties, 'lg');
    },
 banner:function(client,headwrapper,banner,bannercontent,middlewrapper){

      properties = BTL_props.formsHeaderWrapperProps('lg');
      callback.multiloop(client, headwrapper , properties, 'lg');
      
     
      properties = BTL_props.formsbannerProps('lg');
      callback.multiloop(client, banner , properties, 'lg');
       
       
      properties = BTL_props.bannercontentProps('lg');
      callback.multiloop(client, bannercontent , properties, 'lg');

      properties = BTL_props.middlewrapperProps('lg');
      callback.multiloop(client, middlewrapper , properties, 'lg');
    
    },
    iconinfo:function(client,iconinfo,formicontooltip){

      properties = BTL_props.iconinfoProps('lg');
      callback.multiloop(client, iconinfo , properties, 'lg');

       properties = BTL_props.icontooltip('lg');
      callback.multiloop(client, formicontooltip , properties, 'lg');

      properties = BTL_props.iconinfobeforeProps('lg');
      callback.pseudoSingleElem(client, iconinfo,':before',properties);

     
    
    },
    feedbackContainer:function(client,feedbackcontainer,feedbacktext){

      properties = BTL_props.feedbackcontainerProps('lg');
      callback.multiloop(client, feedbackcontainer , properties, 'lg');

      properties = BTL_props.feedbackcontainertextProps('lg');
      callback.multiloop(client, feedbacktext,properties);

     
    
    },



}]


}