module.exports = {
    elements: {

        Toggle_text:{
        selector:".overpayment--option-two.js-hide-content .comp-rich-text p .body-copy"
        },

        ToggleButton_checked: {
            selector: '.input-label.input-label--radio-option.input-label--focus'
        },
        ToggleButton_unchecked: {
            selector: '.input-label--radio-option:last-of-type'
        },

    
        inputlabel: {
            selector: ".tool--overpayment .overpayment--form .form-input-row .input-label"
        },
        inputtextbox:{
            selector:".tool--overpayment .overpayment--form .input-field"
            
        },
        inputtextbox_mob:{
        selector:".tool--overpayment .overpayment--form .input-field"     
        },
        inputtextbox_mobfocus:{
            selector:".tool--overpayment .overpayment--form .input-field:focus"     
            },
        op_mortagebalance: {
            selector: "#overpayment_currentmortgagebalance"
        },
        op_currentrate: {
            selector: "currentrate"
        },

        op_timeremainingyear: {
            selector: "timeremainingyear"
        },

        op_timeremainingmonth: {
            selector: "timeremainingmonth"
        },

        op_additionalemi: {
            selector: "additionalemi"
        },

        op_lumpsum: {
            selector: "lumpsum"
        },

        monthly_repayment_header:{
        selector:".tool--overpayment .overpayment--graph .heading"
        },

        overpayment_detail_labels:{
            selector:".tool--overpayment .overpayment--details .overpayment--details__label"
        },

        Toggletext_lineabove:{
            selector:".overpayment--details.palm--one-whole.desk--one-whole"
        },

        calculate_btn:{
            selector:".overpayment--form span.cta.js-calc-saving.js-next-button.cta-next-button"
        },

        calculate_btn_disabled:{
            selector:"cta js-calc-saving js-next-button  cta--mapp-l cta-next-button-disabled"
        }







    }
}