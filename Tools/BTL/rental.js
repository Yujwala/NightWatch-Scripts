//var branding = require('../../branding/getBrand.js'),
    //brand = require('../../branding/'+branding.getBrand.get());
   var data = require('./btl_data.js'),
        property=data.props;
module.exports = {  
  url: "",
  elements: {
    address: {
      selector: '.js-applicant-address input[name="rentalprop1_postcode"]'
    },
  },
  commands: [{
    formfill: function(rentalval,client) {
      
      for(let i=1;i<=rentalval;i++){
        console.log(i);
        client.click('.q-nav a')
               .setValue('.js-applicant-address input[name="rentalprop'+i+'_postcode"]', property.$address)
                .click('.rental-prop-'+i+' button[name="find-address"]')
                .waitForElementVisible('#js-rentalprop'+i+'_postcode-result-display .selecter-item.first', 5000)
                .click('#js-rentalprop'+i+'_postcode-result-display .selecter-item.first')
                .setValue('.property-ownership select[name="rentalprop'+i+'_propertyownership"]',property['$rental'+i+'_prop_ownership'])
                 .setValue('.property-usage select[name="rentalprop'+i+'_property-usage"]',property['$rental'+i+'_prop_usage'])
                 .setValue('.property-type select[name="rentalprop'+i+'_property-type"]', property['$rental'+i+'_prop_type'])
                 .setValue('.no-of-bedrooms select[name="rentalprop'+i+'_no-of-bedrooms"]', property['$rental'+i+'_bedrooms'])
                 .setValue('.mortgage-lender select[name="rentalprop'+i+'_mortgage-lender"]', property['$rental'+i+'_mort_lender'])
                 .setValue('.js-res-mortgage-bal-outstanding input[name="rentalprop'+i+'_mortgageBal-Outstanding"]', property['$rental'+i+'_mortBal_outstanding'])
                 .pause(2000)
                 .setValue('.repayment-type select[name="rentalprop'+i+'_repayment-type"]', property['$rental'+i+'_repayment_type'])
  
                 .setValue('.js-res-interest-only-amount input[name="rentalprop'+i+'_interestOnly-Amount"]', property['$rental'+i+'_interestOnly_amount'])
                 .setValue('.js-mortgage-term-remaining select[name="rentalprop'+i+'_mortgage-term-remaining-years"]', property['$rental'+i+'_mort_term_years'])
                 .setValue('.js-mortgage-term-remaining select[name="rentalprop'+i+'_mortgage-term-remaining-months"]', property['$rental'+i+'_mort_term_months'])
                 .setValue('.js-res-monthly-mortgage-payments input[name="rentalprop'+i+'_monthlyMortgage-Payments"]', property['$rental'+i+'_mort_payments'])
                 .setValue('.js-res-monthly-rental-grossincome input[name="rentalprop'+i+'_monthlyRentalGross-Income"]', property['$rental'+i+'_mort_rentalIncome'])
                 .setValue('.js-res-estimated-property-value input[name="rentalprop'+i+'_estimatedProperty-Value"]', property['$rental'+i+'_est_propValue'])
                 
      }
      return;
      
    }
  }]
};