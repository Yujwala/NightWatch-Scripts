var pageurl = require('./pageurls.js');

module.exports = { 
  url: pageurl.NW_PER_FAQ,
  elements: {
    usernameField: {
      selector: 'input[id=username]'
    },
    passwordField: {
      selector: 'input[id=password]'
    },
    submit: {
      selector: 'button[id=submit-button]'
    }
  },
  commands: [{
    signInAsAdmin: function() {
      return this.setValue('@usernameField', 'peddir')
                 .setValue('@passwordField', 'Password1')
                 .click('@submit')
                 
    },
  }]
};
