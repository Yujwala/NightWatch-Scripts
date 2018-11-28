module.exports = {
	elements : {
        rewardCalculatormaindiv:{
            selector:'.wrapper.js-spoke .rewCalc-wrapper.main-template-form'
        },
        mainHeader:{
            selector:'.rewCalc-wrapper.main-template-form .LC-header-section h2'
        },
        headertext:{
            selector:'.rewCalc-wrapper.main-template-form .LC-header-section font'
        },
        cardWrapper:{
            selector:'.rewCalc-wrapper.main-template-form .middle-wrapper .card-wrapper'
        },
        cardWrapperText:{
            selector:'.rewCalc-wrapper.main-template-form .middle-wrapper .offers-content.LC-average-rewards'
        }, 
        cardWrapperImageOne:{
            selector:'.rewCalc-wrapper.main-template-form .card-wrapper .LC-bottom-rewards .image'
        },
        cardWrapperImageTwo:{
            selector:'.rewCalc-wrapper.main-template-form .card-wrapper .LC-bottom-rewards ul li:nth-child(2) img'
        },
        cardWrapperImageThree:{
            selector:'.rewCalc-wrapper.main-template-form .card-wrapper .LC-bottom-rewards ul li:nth-child(3) img'
        },
        calculateButton:{
            selector:'.rewCalc-wrapper.main-template-form .middle-wrapper .cb-calculate span a'
        },
        calculateButtonHover:{
            selector:'.rewCalc-wrapper .content-wrapper .cta a:hover'//.rewCalc-wrapper .content-wrapper.rewadscalc .cta.cta--branded.cta--l a:hover'
        },
        calculateButtonFocus:{
            selector:'.rewCalc-wrapper .content-wrapper .cta a:focus'
        },
        questionsMainDiv:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes'
        },
        questionsDivHeadWrapper:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper'
        },
        questionsDivHeadWrapperHeader:{ 
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper .comp-rich-text h4'
        },//can use comp-rich text comp for this
        questionsDivHeadWrapperText:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper'
        },//can use comp-rich text comp for this
        questionsDivQuestionWrapper:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .questions-wrapper'
        },
        secondPagePagination:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .pagination'
        },
        paginationActiveComponent:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .pagination ul li:first-child'
        },
        paginationInactiveComponent:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .pagination ul li:last-child'
        },
        questionsWrapperHeading:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .rewards-sec-LC h4'
        },
        clickableIcons:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .item-clickable'
        },
        clickableIconsText:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .item-clickable.active p'
        },
        pageTwoBackButton:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .q-back a'
        },
        pageTwoNextButton:{
            selector:'.rewCalc-wrapper.main-template-form .q-next a'
        },
        pageTwoDivthreeHeading:{
            selector:'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .comp-rich-text  h3'
        },//can use comp-rich text comp for this
        pageTwoDivThreeText:{
            selector:'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .comp-rich-text  p:nth-child(-n+4)'//'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .comp-rich-text  p'
        },//can use comp-rich text comp for this
        divThreeLinks:{
            selector:'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .grid__item.desk--one--whole a'
        },
        divThreeLinksHover:{
            selector:'.rewCalc-wrapper.main-template-form .desk--one--whole a:hover'//'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .grid__item.desk--one--whole a:nth-of-type(2n):hover'
        },
        divThreeLinkTwo:{
            selector:'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .grid__item.desk--one--whole p:nth-child(5) a'
        },
        divThreeLinkTwoHover:{
            selector:'.rewCalc-wrapper.main-template-form .rewards_moreinfo.grey .grid__item.desk--one--whole p:nth-child(5) a:hover'
        },
        pageTwoClickIcons:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .middle-wrapper .rewards-sec-LC ul li:nth-child(n+5)'
        },//cont from here
        pageThreeHeaders:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper.main-template-form .header-wrapper .top-content h2:first-child'
        },
        pageThreeHeaderTwo:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper.main-template-form .header-wrapper .top-content h2:nth-child(2)'
        },
        /*
        pageThreeDivtwoHeading:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .bannerText .comp-rich-text  h4'
        },//use Comp rich text comp
        pageThreeDivTwoText:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .bannerText .comp-rich-text  p'
        },//use Comp rich text comp
        */
        pageThreeHouseHoldbillsHeading:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .top-row-heading.LC-toprow .comp-rich-text h4'
        },//use Comp rich text comp

        pageThreeAnnualRewardsHeading:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .top-row-heading.LC-toprow .comp-rich-text p'
        },//use Comp rich text comp
        pageThreeIconImages:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-questions .image'
        },
        pageThreeIconHeaders:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-questions label'
        },
        pageThreeTextInput:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .desk--one-quarter.slider-input'
        },
        pageThreeDropDownList:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-question-inputs .js-custom-select'
        },
        dropDownListOptionOne:{
            selector:'.rewCalc-wrapper .question-individual .form-input-row .selector select option:nth-child(1)'
        },
        dropDownListOptionTwo:{
            selector:'.rewCalc-wrapper .question-individual .form-input-row .selector select option:nth-child(2)'
        },
        dropDownListOptionTwoClick:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-question-inputs .js-custom-select option:nth-child(2)'
        },
        dropdownDisplayOptionTwo:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-question-inputs .form-input-row .selector span'
        },
        dropDownListOptionThree:{
            selector:'.rewCalc-wrapper .question-individual .form-input-row .selector select option:nth-child(3)'
        },
        pageThreeSlider:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .js-slider-wrapper .slider-marker'
        },
        pageThreeSliderHandle:{
            selector:'.rewCalc-wrapper .js-spend-1 .slider-marker.ui-slider-horizontal .ui-slider-handle'
        },
        pageThreeSliderHandletwo:{
            selector:'.rewCalc-wrapper .js-spend-2 .slider-marker.ui-slider-horizontal .ui-slider-handle'
        },
        pageThreeSliderHandlethree:{
            selector:'.rewCalc-wrapper .js-spend-3 .slider-marker.ui-slider-horizontal .ui-slider-handle'
        },
        pageThreeSliderHandlefour:{
            selector:'.rewCalc-wrapper .js-spend-4 .slider-marker.ui-slider-horizontal .ui-slider-handle'
        },
        pageThreeCalcValue:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .question.householdcalc .result-question-inputs .calc-value'
        },
        pageThreeNextButton:{
            selector:'.rewCalc-wrapper.main-template-form .q-next a'
        },
        pageThreePoundSymbol:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result-question-inputs .pound'
        },
        pageThreePerLabel:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result-question-inputs .per_label'
        },
        pageThreeActiveDivisions:{
            selector:'.rewCalc-wrapper .questions.js-natyes.natyes .question-individual .result-questions.LC-results-questions.active'
        },
        pageFourResHeader:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .results-Heading-Section h2'
        },
        pageFourRepresentativeWrapper:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .Representative-Ex'
        },
        pageFourResultsHeader:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .LC-representive-results'
        },
        pageFourResultsText:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .LC-Representative-sec p'
        },
        pageFourRewardsButton:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .LC-Representative-sec .cta.cta--mapp-l'
        },
        pagefourImageOne:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .LC-Representative-sec .image'
        },
        pagefourImageTwo:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result.LCCalucator-results .LC-Representative-sec .LC-Representative-right .image'
        },
        commonClick:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .questions.js-natyes.natyes'
        },
        rewardValues:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .result-question-inputs  .calc-value p'
        },
        totalValue:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .top-content .wave-effect .main-value'
        },
        decimalValue:{
            selector:'.rewCalc-wrapper.rewCalc-wrapper .top-content .wave-effect .decimal-value.defaultTop'
        },



        //Mobile Selectors
        mainDivisionMob:{
            selector:'.main.main--spoke--mobile.ct-main-no-tranform .rewCalc-wrapper.main-template-form'
        },
        headerSectionMob:{
            selector:'.rewCalc-wrapper.main-template-form .LC-header-section h2'
        },
        headerSectionTextMob:{
            selector:'.rewCalc-wrapper.main-template-form .LC-header-section font'
        },
        cardWrapperMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper'
        },
        cardWrapperHeadingMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper h3'
        },
        cardWrapperTextMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper p'
        },
        cardWrapperImageOneMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper .bottom-content.LC-bottom-content .image'
        },
        cardWrapperImageTwoMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper .bottom-content.LC-bottom-content ul li:nth-child(2)'
        },
        cardWrapperImageThreeMob:{
            selector:'.rewCalc-wrapper.main-template-form  .middle-wrapper .card-wrapper .bottom-content.LC-bottom-content ul li:nth-child(3)'
        },
        calculateButtonMob:{
            selector:'.rewCalc-wrapper.main-template-form .cta-links.LC-rewards-cta .cta.cta--branded .btn-calculate'
        },
        calculateButtonHoverMob:{
            selector:'.rewCalc-wrapper .content-wrapper.rewadscalc .cta.cta--branded.cta--l a:hover'
        },
        calculateButtonFocusMob:{
            selector:'.rewCalc-wrapper .content-wrapper.rewadscalc .cta.cta--branded.cta--l a:focus'
        },
        pageTwoHeadWrapperMob:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper'
        },
        pageTwoHeadWrapperHeaderMob:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper h2:first-child'
        },
        pageTwoHeadWrapperHeadertwo:{
            selector:'.rewCalc-wrapper.main-template-form .questions.js-natyes.natyes .header-wrapper .wave-effect'
        },
        pageTwoQuestionsWrapperMob:{
            selector:'.rewCalc-wrapper.main-template-form .middle-wrapper .questions-wrapper .question.householdcalc'
        },
        pageTwoQuestionWrapperHeading:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .top-row-heading.LC-toprow  h4'
        },
        pageTwoImagesMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-questions.LC-results-questions.active img'
        },
        pageTwoImageHeadingMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-questions.LC-results-questions.active label'
        },
        pageTwoInputsMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .question-Input-Values .palm--five-twelfths input'
        },
        pageTwoDropdownsMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .question-Input-Values .form-input-row'
        },
        pageTwoPoundSymbolMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .question-Input-Values .pound'
        },
        pageTwoPerSymbolMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .question-Input-Values .per_label'
        },
        pageTwoSliderMarkerMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .js-slider-wrapper .slider-marker'
        },
        pageTwoSliderMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .js-slider-wrapper .slider-marker .ui-slider-handle'
        },
        rewardsResultTextMob:{
            selector:'.rewCalc-wrapper.main-template-form .question.householdcalc .result-question-inputs .earn_mobile'
        },
        pageTwoNextButtonMob:{
            selector:'.rewCalc-wrapper .content-wrapper.rewadscalc .questions .middle-wrapper .q-nav .q-next .cta.cta--branded.cta--l a'
        },
        nextButtonFocusMob:{
            selector:'.rewCalc-wrapper .content-wrapper.rewadscalc .questions .middle-wrapper .q-nav .q-next .cta.cta--branded.cta--l a:focus'
        },
        backButtonLinkMob:{
            selector:'.rewCalc-wrapper .content-wrapper.rewadscalc .questions .middle-wrapper .q-nav .q-back a'
        },
        pageTwoDivThreeMob:{
            selector:'.rewCalc-wrapper  .rewards_moreinfo.grey'
        },
        divThreeHeadingMob:{
            selector:'.rewCalc-wrapper  .rewards_moreinfo.grey .grid__item.desk--one--whole h3'
        },
        divThreeTextMob:{
            selector:'.rewCalc-wrapper  .rewards_moreinfo.grey .grid__item.desk--one--whole p:nth-child(-n+4)'
        },
        divThreeLinkMob:{
            selector:'.rewCalc-wrapper  .rewards_moreinfo.grey .grid__item.desk--one--whole p:nth-child(n+5) a'
        },
        divThreeLinkHoverMob:{
            selector:'.rewCalc-wrapper  .rewards_moreinfo.grey .grid__item.desk--one--whole p:nth-child(n+5) a:hover'
        },
        pageThreeHeadingMob:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .total-text'
        },
        pageThreeHeadingMainValue:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .reward-value .main-value'
        },
        pageThreeImageMob:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .LC-Representative-sec .LC-Representative-left .image-sec img'
        },
        pageThreeImageTwoMob:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .LC-Representative-sec .LC-Representative-right .image-sec img'
        },
        pageThreeDivTextMob:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .LC-Representative-sec .LC-Representative-left .direct_content p'
        },
        pageThreeRewardsButtonMob:{
            selector:'.rewCalc-wrapper  .Representative-Ex.LC-Representive-Text .LC-Representative-sec .LC-Representative-left .cta.cta--branded.cta--l a'
        },




    }
}