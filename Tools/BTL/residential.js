//var branding = require('../../branding/getBrand.js'),
    //brand = require('../../branding/'+branding.getBrand.get());
     var data = require('./btl_data.js'),
        property=data.props;
module.exports = {  
  url: "",
  elements: {
    address: {
      selector: '.js-applicant-address input[name="rentalprop1_postcode"]'
    }
  },
  commands: [{
    formfill: function(rentalval,client) {
      
      for(let i=1;i<=rentalval;i++){
        var test=property['$res'+i+'_prop_ownership'];
        console.log("entered residential address")
        client.click('.q-nav a')
        .pause(2000)
               .setValue('.js-applicant-address input[name="residentialprop'+i+'_postcode"]', property.$address)
                .pause(2000)
                .click('.residential-prop-'+i+' button[name="find-address"]')
                .waitForElementVisible('#js-residentialprop'+i+'_postcode-result-display .selecter-item.first', 5000)
                .click('#js-residentialprop'+i+'_postcode-result-display .selecter-item.first')
                .setValue('.property-ownership select[name="residentialprop'+i+'_propertyownership"]', property['$res'+i+'_prop_ownership'])
                 .setValue('.property-usage select[name="residentialprop'+i+'_property-usage"]',property['$res'+i+'_prop_usage'])
                 .setValue('.property-type select[name="residentialprop'+i+'_property-type"]', property['$res'+i+'_prop_type'])
                 .setValue('.no-of-bedrooms select[name="residentialprop'+i+'_no-of-bedrooms"]', property['$res'+i+'_bedrooms'])
                 .setValue('.mortgage-lender select[name="residentialprop'+i+'_mortgage-lender"]', property['$res'+i+'_mort_lender'])
                 .setValue('.js-res-mortgage-bal-outstanding input[name="residentialprop'+i+'_mortgageBal-Outstanding"]', property['$res'+i+'_mortBal_outstanding'])
                 .setValue('.repayment-type select[name="residentialprop'+i+'_repayment-type"]', property['$res'+i+'_repayment_type'])
                 .setValue('.js-res-interest-only-amount input[name="residentialprop'+i+'_interestOnly-Amount"]', property['$res'+i+'_interestOnly_amount'])
                 .setValue('.js-mortgage-term-remaining select[name="residentialprop'+i+'_mortgage-term-remaining-years"]', property['$res'+i+'_mort_term_years'])
                 .setValue('.js-mortgage-term-remaining select[name="residentialprop'+i+'_mortgage-term-remaining-months"]', property['$res'+i+'_mort_term_months'])
                 .setValue('.js-res-monthly-mortgage-payments input[name="residentialprop'+i+'_monthlyMortgage-Payments"]', property['$res'+i+'_mort_payments'])
                 .setValue('.js-res-estimated-property-value input[name="residentialprop'+i+'_estimatedProperty-Value"]', property['$res'+i+'_est_propValue'])             
                 
      }
      return;
      
    }
  }]
};