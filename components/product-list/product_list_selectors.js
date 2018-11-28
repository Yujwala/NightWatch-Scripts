module.exports = {
    elements : {  
        productListHeader:{
            selector:".ProListHeader"
        },
        prodListTitle:{
            selector:".ProListHeader .ProListTitle"
        },
        prodListSubTitle:{
            selector:".ProListHeader .ProListSubtitle"
        },
        prodListWrapper:{
            selector: ".prod_list_wrapper"
        },
        prodListTop: {
            selector: ".prod_list_top"
        },
        //list img
        listTopListImg: {
            selector: ".prod_list_top .list_img"
        },
        listTopListImgImg:{
            selector:".list_img .image "
        },
        //list loan
        listTopListLoan:{
            selector: ".prod_list_top .list_loan"
        },
        listLoanSubtitle:{
            selector: ".list_loan .list_loan_subtitle"
        },
        listLoanRteTxt:{
            selector:".list_loan .list_loan_subtitle .comp-rich-text p"
        },
        listLoanIconText:{
            selector: ".list_loan .list_loan_icontext"
        },
        listLoanIconTextImg:{
            selector: ".list_loan .list_loan_icontext img"
        },
        listLoanIconTextRte:{
            selector: ".list_loan .list_loan_icontext .comp-rich-text"
        },
        listLoanIconTextRteText:{
            selector: ".list_loan .list_loan_icontext .comp-rich-text p"
        },
        listLoanFee:{
            selector: ".list_loan .list_loan_fee"
        },
        listLoanFeeRteText:{
            selector: ".list_loan .list_loan_fee .comp-rich-text p"
        },
        listLoanFeeRteFirstChild: {
            selector:".list_loan .list_loan_fee .comp-rich-text p:first-child"
        },
        listLoanFeeRteLastChild:{
            selector:".list_loan .list_loan_fee .comp-rich-text p:last-child"
        },

        //list apr
        listTopListApr: {
            selector: ".prod_list_top .list_apr"
        },
        listTopListAprRte:{
            selector:".list_apr .comp-rich-text"
        },
        listTopListAprRteText:{
            selector:".list_apr .comp-rich-text p"
        },
        //list cta
        prodListTopListCta:{
            selector: ".prod_list_wrapper .prod_list_top .list_cta"
        },
        listTopListCta: {
            selector: ".prod_list_wrapper:not(.longaprwithcta) .list_cta"
        },
        listCtaInner:{
            selector: ".prod_list_wrapper:not(.longaprnocta):not(.longaprwithcta) .prod_list_top .list_cta .list_cta_inner"
        },

        prodListBottom:{
            selector:".prod_list_bottom"
        },
        prodListBottomRtaLeft:{
            selector:".prod_list_wrapper:not(.longaprnocta) .prod_list_bottom .list_bottom_rta_left"
        },
        prodListBottomRtaLeftRteText:{
            selector:".prod_list_bottom .list_bottom_rta_left .comp-rich-text p"
        },
        prodListBottomCtaRight:{
            selector:".prod_list_bottom .list_bottom_right_cta"
        },
        prodListBottomCtaRightListCta:{
            selector:".prod_list_bottom .list_bottom_right_cta .list_cta"
        },
        prodListBottomListCtaInner:{
            selector: ".prod_list_wrapper:not(.longaprwithcta) .prod_list_bottom .list_bottom_right_cta .list_cta .list_cta_inner"
        },

        


        //shortApr
        shortAprListLoan:{
            selector:".shortapr .prod_list_top .list_loan"
        },
        shortAprListBottom:{
            selector: ".shortapr .prod_list_bottom"
        },
        //noApr
        noAprListLoan:{
            selector: ".noapr .prod_list_top .list_loan"
        },
        noAprListApr:{
            selector: ".noapr .list_apr"
        },
        noAprListBottom: {
            selector: ".noapr .prod_list_bottom"
        },
        //longaprwithcta
        longAprWithCtaListLoan:{
            selector: ".longaprwithcta .prod_list_top .list_loan "
        },
        longAprWithCtaListApr:{
            selector: ".longaprwithcta .list_apr"
        },
        longAprWithCtaListCta:{
            selector:".longaprwithcta .prod_list_top .list_cta"
        },
        longAprWithCtaListCtaInner:{
            selector:".longaprwithcta .prod_list_top .list_cta .list_cta_inner"
        },
        longAprWithCtalistBtmRtaLeft:{
            selector: ".longaprwithcta .prod_list_bottom .list_bottom_rta_left "
        },
        longAprWithCtaListBtmRightCta:{
            selector:".longaprwithcta .prod_list_bottom .list_bottom_right_cta"
        },
        longAprWithCtaListBtmListCta:{
            selector:".longaprwithcta .prod_list_bottom .list_bottom_right_cta .list_cta"
        },
        longAprWithCtaListBtmListCtaInner:{
            selector:".longaprwithcta .prod_list_bottom .list_bottom_right_cta .list_cta .list_cta_inner"
        },

        //longAprNoCta
        longAprNoCtaListLoan:{
            selector:".longaprnocta .prod_list_top .list_loan"
        },
        longAprNoCtaListApr:{
            selector: ".longaprnocta .list_apr"
        },
        longAprNoCtaListCta:{
            selector: ".longaprnocta .list_cta"
        },
        longAprNoCtaListCtaInner:{
            selector: ".longaprnocta .list_cta .list_cta_inner"
        },
        longAprNoCtaListBtmRtaLeft:{
            selector:".longaprnocta .prod_list_bottom .list_bottom_rta_left"
        },
        longAprNoCtaListBtmRightCta:{
            selector:".longaprnocta .prod_list_bottom .list_bottom_right_cta"
        },
        longAprNoCtaListBtmListCta:{
            selector:".longaprnocta .prod_list_bottom .list_bottom_right_cta .list_cta"
        },


        prodListWrapperMob:{
            selector:".prod_list_wrapper:not(:last-child)"
        },
        prodListWrapperLastchildMob:{
            selector:".prod_list_wrapper:last-child"
        }


    }
}