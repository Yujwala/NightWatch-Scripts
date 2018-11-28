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
    }
  },
  commands: [{
    formfill: function() {
      
      return this.click('@next')
                  .click('@address')  
                 .setValue('@address',property.$address)
                 .click('@addBtn')
                 .waitForElementVisible('#js-postcode-result-display .selecter-item.first', 7000)
                 .click('#js-postcode-result-display .selecter-item.first')
                 .clearValue('@houseno')
                 .setValue('@houseno','4')
                 
      }
  }]
};