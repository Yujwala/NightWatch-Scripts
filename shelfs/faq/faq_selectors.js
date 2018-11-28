module.exports = {
  elements : {  
    //Desktop Selectors
    faqShelf:{
      selector:".shelf.shelf--faq"
    },
    headerGroup:{
      selector:".shelf--faq .header-group",
    },
    hgHeadline:{
        selector:".shelf--faq .header-group .header-group__headline",
    },
    hgSignpost:{
      selector:".shelf--faq .header-group .header-group__sign-post",
    },
    rteText:{
      selector:".shelf.shelf--faq .comp-rich-text  span.white-band__cr-limit",
    },
    faqCarousel:{
      selector:".shelf--faq .carousel",
    },
    faqSlider:{
      selector:".shelf--faq .carousel__slider",
    },
    faqItem:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third",
    },
    FaqItemEven:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(even)",
    },
    faqSerWrap:{
      selector:".faq-search-wrap",
    },
    fqSerBtn:{
      selector:".faq-search-wrap .faq-search button.faq-btn",
    },
    fqSerField:{
      selector:".faq-search-wrap .faq-search fieldset"
    },
    fqSerInpt:{
      selector:".faq-search-wrap .faq-search fieldset .faq-input-text, .faq-search-wrap .faq-search fieldset input",
    },
    oddCols:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3",
    },
    oddColsLink:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3 a",
    },
    oddColsArr:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(odd) .faq-list__arrow",
    },
    evenCols:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(even) h3",
    },
    evenColsLink:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(even) h3 a",
    },
    evenColsArr:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(even) .faq-list__arrow",
    },
    focusOddCols:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(1) h3",
    },
    focusEvenCols:{
      selector:".shelf--faq .carousel__slider .faq-list .desk--one-third:nth-child(2) h3",
    },
    faqSlides:{
      selector:".shelf--faq .carousel__slider__slides  li",      
    },
    faqNavBullets:{
      selector:".shelf--faq .carousel__control-nav  li",      
    },
    nxtArrow:{
      selector:".shelf--faq .carousel__next",
    },
    prevArrow:{
      selector:".shelf--faq .carousel__prev",
    },
    nxtArrowDis:{
      selector:".shelf--faq .carousel__next.carousel__disabled",
    },
    prevArrowDis:{
      selector:".shelf--faq .carousel__prev.carousel__disabled",
    },
    // for branding background
    brandBgColor:{
      selector:".shelf--faq.theme--blue"
    },
    brandHeadline:{
        selector:".shelf--faq.theme--blue .header-group .header-group__headline",
    },
    brandSignpost:{
        selector:".shelf--faq.theme--blue .header-group .header-group__sign-post",
    },
    brandRTE:{
        selector:".shelf--faq.theme--blue comp-rich-text  span.white-band__cr-limit",
    },
    brandOddCols:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3",
    },
    brandOddColsLink:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3 a",
    },
    brandOddColsArr:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) .faq-list__arrow",
    },
    brandEvenCols:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(even) h3",
    },
    brandEvenColsLink:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(even) h3 a",
    },
    brandEvenColsArr:{
      selector:".shelf--faq.theme--blue .carousel__slider .faq-list .desk--one-third:nth-child(even) .faq-list__arrow",
    },
    brandSerTit:{
      selector:".theme--blue .faq-search-wrap .faq-search-title",
    },
    brandfqSerBtn:{
      selector:".shelf--faq.theme--blue .faq-search-wrap .faq-search button.faq-btn",
    },

    // for Gray background
    grayBgColor:{
      selector:".shelf--faq.theme--light-blue",
    },
    greyfqSerBtn:{
      selector:".shelf--faq.theme--light-blue .faq-search-wrap .faq-search button.faq-btn",
    },
    grayHeadline:{
        selector:".shelf--faq.theme--light-blue .header-group .header-group__headline",
    },
    graySignpost:{
        selector:".shelf--faq.theme--light-blue .header-group .header-group__sign-post",
    },
    grayRTE:{
        selector:".shelf--faq.theme--light-blue comp-rich-text  span.white-band__cr-limit",
    },
    grayOddCols:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3",
    },
    grayOddColsLink:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3 a",
    },
    grayOddColsArr:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(odd) .faq-list__arrow",
    },
    grayEvenCols:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(even) h3",
    },
    grayEvenColsLink:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(even) h3 a",
    },
    grayEvenColsArr:{
      selector:".shelf--faq.theme--light-blue .carousel__slider .faq-list .desk--one-third:nth-child(even) .faq-list__arrow",
    },
    // for White background
    whiteBgColor:{
      selector:".shelf--faq.theme--white",
    },
    whitefqSerBtn:{
      selector:".shelf--faq.theme--white .faq-search-wrap .faq-search button.faq-btn",
    },
    whiteHeadline:{
        selector:".shelf--faq.theme--white .header-group .header-group__headline",
    },
    whiteSignpost:{
        selector:".shelf--faq.theme--white .header-group .header-group__sign-post",
    },
    whiteRTE:{
        selector:".shelf--faq.theme--white .comp-rich-text  span.white-band__cr-limit",
    },
    whiteOddCols:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3",
    },
    whiteOddColsLink:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(odd) h3 a",
    },
    whiteOddColsArr:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(odd) .faq-list__arrow",
    },
    whiteEvenCols:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(even) h3",
    },
    whiteEvenColsLink:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(even) h3 a",
    },
    whiteEvenColsArr:{
      selector:".shelf--faq.theme--white .carousel__slider .faq-list .desk--one-third:nth-child(even) .faq-list__arrow",
    },

    //For Oatmeal Background
    blueCols : {
      selector : ".theme--light-blue .q.overlay-link.rbs-blue",
    },

    overlay :{
      selector : ".overlay-link"
    },

    overlaystruct : {
      selector : ".overlay-content .overlay-inner .faq--ans.faq--overlay ",
    },
    olquestion : {
      selector : ".overlay-content .overlay-inner .overlay-question",
    },

    olp : {
      selector : ".overlay-content .overlay-inner p",
    },

    olfaqinner : {
      selector : ".overlay-content .overlay-inner .faq-inner",
    }
  }    
};


