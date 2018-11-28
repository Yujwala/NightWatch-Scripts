var ff_nwm_props=require('./natwest_markets.js');

var ff_nwm = Object.assign({}, ff_nwm_props.props, {
    $primary_1:"rgb(66, 20, 95)",
    $primary_2 : "rgb(255, 255, 255)",
    $shelf_bg_color_1: "rgb(247, 247, 245)",
    $shelf_bg_color_2: "rgb(223, 217, 209)",
    $linkColor: "rgb(12, 127, 136)",
    $linkColor_1: "rgb(8, 105, 120)",
    $whiteSmoke : "rgb(245, 245, 245)",
    $whiteSmoke_1 : "rgb(255, 255, 255)",
    $bg_color_1: "rgb(89, 55, 109)",
    $grey: "rgb(102, 102, 102)",

    //header    
    $loginBg: "rgb(12, 127, 136)",    
    $l1_mainNav_border: "rgb(104, 79, 130)",
    $l3_sectionHead_bg: "rgb(230, 228, 233)",
    $sectionHead_border: "rgb(140, 123, 153)",
    $headerHoverBg: "rgb(44, 9, 67)",
    $headerLiMouseDown: "rgb(255, 191, 71)",
    $searchInputbg: "rgb(89, 55, 109)",
    $searchIconbg: "rgb(255, 255, 255)",
    $mainNav_bg_mobile: "rgb(66, 20, 95)",
    $searchText_color: "rgb(161, 149, 138)",    
    $mainNav_Icon_border: "rgb(80, 41, 106)",   
    $searchInputClick_bg: "rgb(255, 191, 71)",    
    $l1_inactive_bgColor:"rgb(66, 20, 95)",
    $mnav_active_color:"rgb(66, 20, 95)",    
    $links_color: "rgb(255, 255, 255)",    
    $l2_linkBack_border: "rgb(186, 186, 186)",
    $l2_linkBack_bg:"rgb(66, 20, 95)",
    $section_heading_border: "rgb(216, 216, 216)",    
    $l3_links_border: "rgb(216, 216, 216)",   
    $signIn_bg: "rgb(12, 127, 136)",    
    $sectionHead_color: "rgb(102, 102, 102)",
    $linkBack_color : "rgb(255, 255, 255)",
    $searchInputbg_mob: "rgb(255, 255, 255)",    
    $headerBgActive: "rgb(0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "1px solid rgb(255, 255, 255, 0.08)",
    $activeHeaderBg: "rgb(255, 255, 255)",
    $activeHeaderColor: "rgb(66, 20, 95)",    
    $headerInActiveColor: "rgb(255, 255, 255)",    
    $headerFocus: "rgb(66, 20, 95)",
    $headermnavbg: "rgb(66, 20, 95)",
    $snavListItem: "rgb(255, 255, 255)",    
    $mnavHover: "rgb(180, 169, 159)",
    $mnavliColor: "rgb(66, 20, 95)",    
    $ctaTitleColor: "rgb(12, 127, 136)",
    $cta_mGrey: "rgb(102, 102, 102)",    
    $cta_mGreen: "rgb(12, 127, 136)",    
    $SearchInputColor:"rgb(255, 255, 255)",    
    $headerBgColor:"rgb(66, 20, 95)",
    $loginBusinessBg:"rgb(173, 25, 130) none repeat scroll 0px 0px / auto padding-box border-box",
    $loginBusinessColor:"rgb(173, 25, 130)",    
    $expandedNavInActiveColor:"rgb(255, 255, 255)",
    $expandedNavActiveBG:"rgb(245, 245, 245)",    
    $SearchBoxFocus:"rgb(66, 20, 95)",
    $SearchBoxFocusBG:"rgb(255, 191, 71)",
    $SearchBtnColor:"rgb(89, 55, 109)",
    
    //Hero Carousel     
    $sliderContent_bg:"rgb(66, 20, 95)",
    $sliderContentCta_bg:"rgb(52, 162, 178)", 

    $font_family_bold:'"rnhousesansbold",sans-serif',
    $font_family_regular: '"rnhousesansregular",sans-serif',    
    $primary_cta_font: '"rnhousesansbold"',
    
    //header
    $font_family_Header:'"rnhousesansbold",sans-serif',
    $font_family_headline: '"rnhousesansbold",sans-serif',
    $font_family_SearchInput: '"rnhousesansregular",sans-serif',

    //Hero-PDP
    $font_CTAbgProps:'"rnhousesansbold"',
    $heroCtaMFont:"rnhousesansregular",
    $transparent_bg:"rgb(0, 0, 0)",
    $heroheadColor:"rgb(173, 25, 130)",
    $herosignpostColor:"rgb(66, 20, 95)",
    $CTA_bg_color:"rgb(52, 162, 178)",
    $CtaMtextColor:"rgb(173, 25, 130)",
    $ctaPdpMouseDownColor:"rgb(66, 20, 95)", 
    $ctaPdpMouseDownBg:"rgb(255, 191, 71)",
    $ctaHeroMPdpHover:"rgb(66, 20, 95)",
    $ctaPdpmMouseDownColor:"rgb(66, 20, 95)",
    $footlineRteColor:"rgb(66, 20, 95)",
    $footlineRtepColor:"rgb(66, 20, 95)",
    $heroSeparatorBg:"rgb(52, 173, 178)",
    $ctaHeroPdpHover:"rgb(48, 144, 158)",
    $comprichPColor:"rgb(66, 20, 95)",
    //Mobile
    $transparent_bgMobile:"rgb(236, 234, 230)",

    //Carousel
    $sliderRteH3FontFamily: '"rnhousesansregular",sans-serif',  
    $sliderCta_m_afontfamily: '"rnhousesansregular",sans-serif',  
    $rteUlLiColor:"rgb(66, 20, 95)",
    $rteUlLiPadding:"0px 0px 0px 9.632px",
    $rteUlLiMargin: "5px 0px",
    $sliderRteH3Color:"rgb(66, 20, 95)",
    $sliderRtePColor:"rgb(109, 109, 109)",
    $sliderCta_m_aColor:"rgb(12, 127, 136)",
    $ctaHoverColor:"rgb(8, 105, 120)",
    $ctaMouseDownColor:"rgb(66, 20, 95)",
    $flexNavLiAnchorBg:"rgb(232, 232, 232)",
    $flexNavLiAnchorActiveBg:"rgb(12, 127, 136)",
    $ctaMouseDownBg:"rgb(255, 191, 71)",

    //FAQ Desktop
    $faq_head_font:'"rnhousesansbold"',
    $faq_oddColsLink_ff:'"rnhousesansbold",sans-serif',
    $faq_font_ff_boldReg:'"rnhousesansregular",sans-serif',  
    $faq_brand_bg:"rgb(66, 20, 95)",
    $faq_gray_bg:"rgb(223, 217, 209)",
    $faq_white_bg:"rgb(247, 247, 245)",
    $faq_head_colr:"rgb(255, 255, 255)",
    $b_faq_sear_btn_bg:"rgb(0, 168, 180)",
    $faq_sear_btn_bg:"rgb(52, 162, 178)",
    $gry_faq_head_colr:"rgb(66, 20, 95)",
    $faq_brand_odd_cols:"rgb(66, 20, 95)",
    $faq_gray_odd_cols:"rgb(255, 255, 255)",
    $faq_gray_even_cols:"rgb(66, 20, 95)",
    $faq_brandOlnksFocus_color:"rgb(66, 20, 95)",
    $faq_brandOlnksFoc_bg_colr:"rgb(255, 191, 71)",
    $faq_fqSerInpt_color: "rgb(113, 106, 99)",
    $faq_fqSerInpt_colr:"rgb(113, 106, 99)",
    $faq_white_fqSerInpt_color:"rgb(113, 106, 99)",
    $faq_white_head_colr:"rgb(66, 20, 95)",
    $faq_grayO_fs_colr:"rgb(66, 20, 95)",
    $faq_white_odd_cols:"rgb(255, 255, 255)",
    $faq_white_odd_cols_arr:"rgb(255, 255, 255)",
    $faq_white_even_cols:"rgb(66, 20, 95)",
    $faq_brandElnksFocus_color:"rgb(66, 20, 95)",
    $faq_gray_odd_cols_arr:"rgb(255, 255, 255)",
    $faq_gray_even_cols_arr:"rgb(66, 20, 95)",
    $faq_grayE_fs_colr:"rgb(66, 20, 95)",
    $faq_brand_odd_cols_arr:"rgb(66, 20, 95)",
    $faq_head_brand_colr:"rgb(255, 255, 255)",
    $faq_brand_Even_cols:"rgb(66, 20, 95)",
    $faq_white_even_cols_arr:"rgb(66, 20, 95)",
    $faq_Even_odd_cols_arr:"rgb(10, 47, 100)",
    $faq_fqSerInpt_brand_colr:"rgb(153, 153, 153)",

    // Mobile faq
    $faq_head_font_m:'"rnhousesansregular",sans-serif',  
    $b_faq_sear_btn_bg_m:"rgb(238, 237, 233)",
    $b_faq_sear_btn_color_m:"rgb(66, 20, 95)",
    $faq_fqSerInpt_color_m:"rgb(113, 106, 99)",
    $faq_white_fqSerInpt_color_m:"rgb(113, 106, 99)",
    $faq_arrDis_bg:"rgb(187, 187, 187)",
    $faq_arrGray_colr:"rgb(255, 255, 255)",
    $faq_arrGray_bg:"rgb(66, 20, 95)",
    $faq_arrBrand_colr:"rgb(255, 255, 255)",
    $faq_arrBrand_bg:"rgb(66, 20, 95)",
    $faq_arrWhite_colr:"rgb(255, 255, 255)",
    $faq_arrWhite_bg:"rgb(66, 20, 95)",
    $gray_faq_sear_btn_bg_m:"rgb(238, 237, 233)",
    $white_faq_sear_btn_bg_m:"rgb(238, 237, 233)",

    //Dynamic Clock
    $dynamicclock_font_family_bold:"rnhousesansbold,sans-serif",
    $dynamicclock_font_family_regular: "rnhousesansregular,sans-serif",    
    $dynamicclock_primary_cta_font: "rnhousesansbold",
    $dynamicShelfBgColor:"rgb(66, 20, 95)",
    $flipTimerColor:"rgb(66, 20, 95)",
    $dynamicCtaHoverBg:"rgb(48, 144, 158)",
    $dynamicCtaMouseDownColor:"rgb(66, 20, 95)",
    $dynClockText:"rgb(255, 255, 255)",
    $dynamicclockCta_LBg:"rgb(52, 162, 178)",
    $dynamicCtaMouseDownBg:"rgb(255, 191, 71)",
    $flipTimerDigitTopBg:"rgb(223, 217, 209)",

    //accordion
    $accCtaFocus: "rgb(255, 191, 71)",
    $canvas_bg_color: "rgb(247, 247, 245)",
    $acc_bg_color: "rgb(247, 247, 245)",
    $accoutclr : "rgb(255, 191, 71)", 
    $accrteclr:"rgb(66, 20, 95)",
    $accLast_bg_color :"rgb(247, 247, 245)",
    $accrte_tabbb: "2px solid rgb(255, 255, 255)",
    $accrte_tabclr : "rgb(66, 20, 95)",
    $accrte_linku :"underline solid rgb(173, 25, 130)",
    $accrte_linkclr : "rgb(173, 25, 130)",
    $accBg_clr :"rgb(223, 217, 209)",
    $font_family_title: '"rnhousesansbold",sans-serif',
    //accordion-composite
    $accCompTit_ff : '"rnhousesansbold",sans-serif',
    $accCompLinkclr : "rgb(173, 25, 130)",
    $accComp_bgclr : "rgb(223, 224, 240)",
    $accComp_rteclr :"rgb(66, 20, 95)",
    $accComp_ctasclr :"rgb(173, 25, 130)",
    $accComp_ctapbgclr : "rgb(52, 162, 178)",
    $accComp_ctapclr : "rgb(66, 20, 95)",
    $accComp_primary_1 :  "rgb(66, 20, 95)",
    $accComp_ctaphover : "rgba(48, 144, 158)",
    $accComp_ctapfocus: "rgb(255, 191, 71)",
    $accCompBlk_clr :"rgb(66, 20, 95)",
    $acccComp_bgclr : "rgb(0, 0, 0)",
    $accComp_bgclrxs : "rgb(207, 199, 190)",
    //Contact Details    
    $headline_font_family:'"rnhousesansbold",sans-serif',
    $linkOnFocus_outline:"rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg:"rgb(66, 20, 95)",
    $cd_themeblue_shelf_clr:"rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m:"rgb(66, 20, 95) none repeat scroll 0% 0% / auto padding-box border-box",    
    $headline_font_family_m: '"rnhousesansbold",sans-serif',
    
  //Rating Component
  $rating_font_family:"RNHouseSansBold, sans-serif",
  $rating_para_color: "rgba(66, 20, 95, 1)",
  $rating_para_font_family:"RNHouseSansRegular, sans-serif",
  $rating_btn_font_family:"RNHouseSansRegular, sans-serif",
  $rating_btn_background_color:"rgba(223, 217, 209, 1)",
  $rating_btn_color:"rgba(66, 20, 95, 1)",
  $rating_btn_box_shadow:"rgb(180, 169, 159) 0px 3px 0px 0px",
  $rating_btn_click_font_family:"RNHouseSansRegular, sans-serif",
  $rating_btn_hover_outline:"rgba(255, 191, 71, 1)",
  $rating_btn_click_color:"rgba(66, 20, 95, 1)",
  $rating_btn_click_background_color:"rgba(223, 217, 209, 1)",
  $rating_btn_click_btn_background_color:"rgba(52, 162, 178, 1)",
  $rating_btn_click_btn_color:"rgba(255, 255, 255, 1)",
  $rating_btn_click_btn_font_family:"RNHouseSansRegular, sans-serif",
  $rating_btn_click_btn_text_shadow:"rgb(19, 104, 126) 1px 1px 1px",
  $rating_para_sub_color:"rgba(173, 25, 130, 1)",
  $rating_shareicon_background_color:"rgba(223, 217, 209, 1)",
  $rating_shareicon_color:"rgba(66, 20, 95, 1)",
  $rating_shareicon_box_shadow:"rgb(204, 203, 212) 0px 5px 0px 0px",
  $rating_sharetext_font_family:"RNHouseSansRegular, sans-serif",
  $rating_btn_click_txtarea_hover:"rgba(255, 191, 71, 1)",
  $rating_btn_click_btn_hover:"rgba(255, 191, 71, 1)",
  $rating_btn_click_close_btn_color:"rgba(255, 255, 255, 1)",
  $rating_btn_click_close_btn_background_color:"rgba(173, 25, 130, 1)",    

    
    //Blog Component
    $whiteBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',
    $blueBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',
    $lightBlueBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',
    $blogShelfWhiteBackgroundColor:"rgb(247,246,245)",
    $blogShelfWhiteColor:"rgb(66,20,95)",
    $blogShelfBlueBackgroundColor:"rgb(66,20,95)",
    $blogShelfBlueColor:"rgb(255,255,255)",
    $blogShelfLightBlueBackgroundColor:"rgb(223,217,209)",
    $blogShelfLightBlueColor:"rgb(66,20,95)",
    $lightBlueBlogLeftContentStrongColor:"rgb(66,20,95)",
    $lightBlueBlogLeftContentParaColor:"rgb(51,51,51)",
    $lightBlueBlogLeftContentBlockQuoteColor:"rgb(66,20,95)",
    $lightBlueBlogLeftContentHeadingColor:"rgb(66,20,95)",
    $lightBlueBlogLeftContentListColor:"rgb(66,20,95)",
    $lightBlueBlogLeftFooterColor:"rgb(66,20,95)",
    $blueBlogLeftContentStrongColor:"rgb(255,255,255)",
    $blueBlogLeftContentParaColor:"rgb(255,255,255)",
    $blueBlogLeftContentBlockQuoteColor:"rgb(255,255,255)",
    $blueBlogLeftContentHeadingColor:"rgb(255,255,255)",
    $blueBlogLeftContentListColor:"rgb(255,255,255)",
    $blueBlogLeftFooterColor:"rgb(255,255,255)",
    $whiteBlogLeftContentStrongColor:"rgb(66,20,95)",
    $whiteBlogLeftContentParaColor:"rgb(51,51,51)",
    $whiteBlogLeftContentBlockQuoteColor:"rgb(66,20,95)",
    $whiteBlogLeftContentHeadingColor:"rgb(66,20,95)",
    $whiteBlogLeftContentListColor:"rgb(66,20,95)",
    $whiteBlogLeftFooterColor:"rgb(66,20,95)",
    $whiteBlogRightContentSubTextColor:"rgb(102,102,102)",
    $blueBlogRightContentSubTextColor:"rgb(255,255,255)",
    $lightBlueBlogRightContentSubTextColor:"rgb(102,102,102)",

    

  



  // Notification Shelf
    $ns_Text_font_family:'"rnhousesansregular",sans-serif',
    $ns_header_headline_txt_font_family: '"rnhousesansbold",sans-serif',
    $ns_notification_Shelf_font_family: '"rnhousesansregular",sans-serif',
    $ns_notification_Shelf_font_family_M: '"rnhousesansregular",sans-serif',
    $ns_themewhite_bg: 'rgb(247, 247, 245)',
    $ns_themewhite_clr: 'rgb(66, 20, 95)',
    $ns_themeblue_bg: 'rgb(66, 20, 95)',
    $ns_themeblue_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_bg: 'rgb(223, 217, 209)',
    $ns_themelightblue_clr: 'rgb(66, 20, 95)',
    $ns_themelightgrey_bg: 'rgb(227, 222, 215)',
    $ns_themelightgrey_clr: 'rgb(66, 20, 95)',
    $ns_dwnld_themewhite_anchor_clr: 'rgb(173, 25, 130)',
    $ns_dwnld_themeblue_anchor_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_anchor_clr: 'rgb(173, 25, 130)',
    $ns_dwnld_themelightgrey_anchor_clr: 'rgb(173, 25, 130)',
    $ns_dwnld_themewhite_span_clr: 'rgb(66, 20, 95)',
    $ns_dwnld_themeblue_span_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_span_clr: 'rgb(66, 20, 95)',
    $ns_dwnld_themelightgrey_span_clr: 'rgb(66, 20, 95)',
    $ns_themewhite_text_clr: 'rgb(66, 20, 95)',
    $ns_themeblue_text_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_text_clr: 'rgb(66, 20, 95)',
    $ns_themelightgrey_text_clr: 'rgb(66, 20, 95)',
   





    // blog author component 

  $blogauthor_shelfBGcolor: "rgba(240, 240, 240)",
  $blogauthor_headertile_color: "rgba(66, 20, 95)",
  $blogauthor_headertile_ele_color: "rgba(66, 20, 95)",
  $blogauthor_nameandtilte_color: "rgba(10, 47, 100)",
  $blogauthor_headertile_ele_fontfamily: "rnhousesansbold, sans-serif",
  $blogauthor_headertile_ele_fontfamily_mob: "rnhousesansbold, sans-serif",

    //Text-Image Component
    $lightBlueFF: "Verdana",
    $blueFF:"Verdana",
    $offWhiteFF:"Verdana",
    $txtImgHeadFF:"RNHouseSansBold, sans-serif",

        //Video Component
        $videoPlayColor:"rgba(66, 20, 95, 1)",
        $videoParaColor:"rgba(66, 20, 95, 1)",
        $videoTranscriptColor:"rgba(66, 20, 95, 1)",
        $videoHeadingColor:"rgba(66, 20, 95, 1)",

      //SUBNAV
    $subnv_theme_white_clr:"rgb(66, 20, 95)",
    $subnv_theme_light_blue_clr:"rgb(66, 20, 95)",
    $subnv_theme_blue_clr:"rgb(255, 255, 255)",
    $subnv_hover_bgclr: "rgb(41, 11, 65)",
    $subnv_hover_clr:"rgb(180, 169, 159)",
    $subnv_firstchild_bgclr:"rgb(66, 20, 95)",
    $subnv_4_bgclr2:"rgb(95, 21, 105)",
    $subnv_4_bgclr3:"rgb(122, 23, 114)",
    $subnv_lastchild_bgclr:"rgb(152, 24, 123)",
    $subnv_focus_clr:"rgb(255, 255, 255)",
    $subnv_rte_link_color:"rgb(173, 25, 130)",
    $subnv_3_bgclr2:"rgb(110, 22, 105)" ,
    $subnv5_bgclr2: "rgb(88, 22, 102)" ,
    $subnv5_bgclr3: "rgb(110, 22, 109)" ,
    $subnv5_bgclr4:"rgb(129, 23, 115)" ,
    $subnv6_bgclr2:"rgb(83, 21, 101)",
    $subnv6_bgclr3:"rgb(101, 22, 10)",
    $subnv6_bgclr4:"rgb(118, 23, 112)",
    $subnv6_bgclr5:"rgb(134, 23, 117)",
    $subnv_2lastchild_bg_color: "rgb(109, 27, 104)",
    $subnv2_headingtext_color: "rgb(255, 255, 255)",
    $subnv_3secondchild_bg_color:"rgb(110, 22, 105)",
    $subnv_3lastchild_bg_color:"rgb(152, 24, 123)",
    $subnv_2child_bg_color: "rgb(66, 20, 95)",
    $subnv_3child_bg_color:"rgb(66, 20, 95)",
    $rewardsubnv_4child_bg_color:"rgb(118, 23, 112)",
    $rewardsubnv_4secondchild_bg_color:"rgb(101, 22, 106)",
    $rewardsubnv_4thirdchild_bg_color:"rgb(83, 21, 101)",
    $rewardsubnv_4lastchild_bg_color:"rgb(66, 20, 95)",
    $subnv_4secondchild_bg_color: "rgb(95, 21, 105)",
    $subnv_4thirdchild_bg_color: "rgb(122, 23, 114)",
    $subnv_4lastchild_bg_color: "rgb(152, 24, 123)",
    $subnv_5secondchild_bg_color:"rgb(88, 22, 102)",
    $subnv_5thirdchild_bg_color:"rgb(110, 22, 109)",
    $subnv_5fourthchild_bg_color:"rgb(129, 23, 115)",
    $subnv_5lastchild_bg_color:"rgb(152, 24, 12)",
    $subnv_hover_bgclr_prop:"rgb(0, 0, 0)",
    $subnv_6secondchild_bg_color:"rgb(83, 21, 101)",
    $subnv_6thirdchild_bg_color:"rgb(101, 22, 106)",
    $subnv_6fourthchild_bg_color:"rgb(118, 23, 112)",
    $subnv_6fifthchild_bg_color:"rgb(134, 23, 117)",
    $subnv_6lastchild_bg_color:"rgb(152, 24, 123)",
    $subnv_3child_color:"rgb(255, 255, 255)",
    $subnv2_chevron_bg_color:"rgba(0, 0, 0)",
    $subnv_rte_clr: "rgb(66, 20, 95)",
    $subnv_4child_bg_color:"rgb(66, 20, 95)",
    $subnv_hd_font_family:"rnhousesansregular, sans-serif",
    $fontfamily_regular:"rnhousesansregular, sans-serif",
    $subnv5_hd_font_family:"rnhousesansregular, sans-serif",


    //SUBNAV MOBILE
    $subnv_mob_4_bgclr2:"rgb(95, 21, 105)",
    $subnv_mob_4_bgclr3:"rgb(122, 23, 114)",
    $subnv_firstbgclr:"rgb(66, 20, 95)",
    $subnv_firstbgclr3:"rgb(66, 20, 95)",
    $subnv_firstbgclr5:"rgb(66, 20, 95)",    
    $subnv_firstbgclr6:"rgb(66, 20, 95)",
    $subnv_firstbgclr4:"rgb(66, 20, 95)", 
    $subnv_mob_3_bgclr2 : "rgb(110, 22, 105)" ,  
    $subnv_mob_5_bgclr2 : "rgb(88, 22, 102)",   
    $subnv_mob_5_bgclr3 : "rgb(110, 22, 109)",      
    $subnv_mob_5_bgclr4 : "rgb(129, 23, 115)" ,
    $subnv_mob_6_bgclr2 : "rgb(83, 21, 101)" ,
    $subnv_mob_6_bgclr3 : "rgb(101, 22, 106)" ,
    $subnv_mob_6_bgclr4 : "rgb(118, 23, 112)" ,
    $subnv_mob_6_bgclr5 : "rgb(134, 23, 117)" ,  
    $hdline_font_family:"rnhousesansregular, sans-serif",
    

});

module.exports = {
    props:ff_nwm
}