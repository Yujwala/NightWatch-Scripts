//var branding = require('../../branding/getBrand.js'),
    //brand = require('../../branding/'+branding.getBrand.get());
     var data = require('./btl_data.js'),
        property=data.props;
module.exports = {  
  url: "",
  elements: {
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
      selector:'.js-income-comp input[name="grossSalary"]'
    },
    freq:{
      selector:'.gross-income-unit select[name="term"]'
    },
    otherincome:{
      selector:'.js-income-field input[name="other-income"]'
    },
    onebox:{
      selector:'.expenses-fields input[name="RevolvingDebt"]'
    },
    twobox:{
      selector:'.expenses-fields input[name="debt-repayment"]'
    },
    threebox:{
      selector:'.expenses-fields input[name="other-expenditure"]'
    },
    property:{
      selector:'.income-fields input[name="PropertyValueFourth"]'
    },
    deposit:{
      selector:'.income-fields input[name="depositWorthFourth"]'
    },
    termlen:{
      selector:'.js-mortgage-term select[name="mortgage-term"]'
    },
    rentalin:{
      selector:'.js-monthly-rental-income input[name="monthlyrentalIncomeBtl"]'
    },
    repay:{
      selector:'.repayment-type select[name="repaymentType"]'
    },
    submit:{
      selector:'.q-nav input[type="submit"]'
    }
  },
  commands: [{
    formfill: function() {
      
      return this.click('@next')
                .setValue('@empstatus',property.$empst)
                .click('@term')
                 .setValue('@term',property.$term)
                 .setValue('@income',property.$income)
                 .setValue('@otherincome',property.$otherincome)
                 .setValue('@onebox',property.$expenseone)
                 .setValue('@twobox',property.$expensetwo)
                 .setValue('@threebox',property.$expensethree)
                 
                 
    },
     finalpage: function() {
      
      return this.click('@next')
                 .setValue('@property',property.$property)
                 .click('@deposit')
                 .setValue('@deposit',property.$deposit)
                 .click('@termlen')
                 .setValue('@termlen',property.$termlength)
                 .setValue('@rentalin',property.$rentalincome)
                 .click('@repay')
                 .setValue('@repay',property.$repayment)
                 

    }
  }]
};