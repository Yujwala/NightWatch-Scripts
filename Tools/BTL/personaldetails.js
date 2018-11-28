//var branding = require('../../branding/getBrand.js'),
    //brand = require('../../branding/'+branding.getBrand.get());
    var data = require('./btl_data.js'),
        property=data.props;
module.exports = {  
  url: "",
  elements: {
    yesVal:{
      selector:'.borrower-type select[name="type-of-borrower"]'
    },
    investYes:{
      selector:'.btl-landing-new-fields .radio input[name="hadRentalMortgage"]'
    },
    investYesVal:{
      selector:'.js-btl-rental-property select[name="howManyRentalProperties"]'
    },
    resiYesVal:{
      selector:'.js-btl-residential-property select[name="howManyResidentialProperties"]'
    },
    titleField: {
      selector: '.personal-details-title select[name="title"]'
    },
    fnameField: {
      selector: 'input[name=firstName]'
    },
    lnameField: {
      selector: 'input[name=lastName]'
    },
    dob:{
      selector: 'input[name=dob]'
    },
    email:{
      selector: 'input[name=emailAddress]'
    },
    uk:{
      selector:'.residentialStatusContainer .input-field-mandatory input'
    },
    next: {
      selector: '.q-nav a'
    },
    address:{
      selector:'.js-applicant-address input[name="postcode"]'
    },
    addBtn:{
      selector:'button[name="find-address"]'
    },
    postcode:{
      selector:'#overlay_content #js-postcode-result-display .selecter-item.first'
    },
    houseno:{
      selector:'input[name="housenumber"]'
    },
    empstatus:{
        selector:'.employment-status select[name="employment-status"]'
    },
    term:{
      selector:'.js-mortgage-term select[name="retirement-age"]'
    },
    income:{
      selector:'.js-income-field input[name="grossSalary"]'
    },
    freq:{
      selector:'.gross-income-unit select[name="term"]'
    }
  },
  commands: [{
    formfill: function() {
      return this.click('@titleField')
                .setValue('@titleField', property.$title)
                  .setValue('@fnameField', property.$fname)
                 .setValue('@lnameField',property.$lname)
                 .setValue('@dob', property.$dob)
                 .setValue('@email', property.$email)
                 .click('.single-applicant-dependent')
                  .click('@uk')
                 
    },
seladdress:function(){

      return this.click('@next')
                 .setValue('@address',property.$address)
                 .click('@addBtn')
                 .waitForElementVisible('#js-postcode-result-display .selecter-item.first', 7000)
                .click('#js-postcode-result-display .selecter-item.first')
    },
    selectval:function() {
      
      return this.click('@yesVal')
                 
                .click('option[value="P"]')
                
                  
    },
    dropvalSet:function() {
      
      return this.click('@investYesVal')
                .setValue('@investYesVal',property.$rentalval)
               // .click('@resiYesVal')
               // .setValue('@resiYesVal',property.$resival)

                
                  
    }
  }]
};