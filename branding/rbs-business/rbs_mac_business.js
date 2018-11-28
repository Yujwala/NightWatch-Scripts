var mac_rbsb_props = require('./rbs_bussiness.js');

var mac_rbsb = Object.assign({}, mac_rbsb_props.props, {
    $primary_1: "rgb(10, 47, 100)",
    $primary_2: "rgb(255, 255, 255)",
    $shelf_bg_color_1: "rgb(247, 247, 245)",
    $shelf_bg_color_2: "rgb(223, 217, 209)",
    $linkColor: "rgb(0, 126, 166)",
    $linkColor_1: "rgb(3, 96, 137)",
    $whiteSmoke: "rgb(245, 245, 245)",
    $whiteSmoke_1: "rgb(255, 255, 255)",
    $bg_color_1: "rgb(47, 78, 123)",
    $grey: "rgb(109, 110, 113)",

    //header
    $headerBgInactive: "rgb(0, 0, 0) -webkit-linear-gradient(left, rgb(10, 47, 100) 0px, rgb(10, 47, 100) 100%) repeat scroll 0% 0% / auto padding-box border-box",
    $loginBg: "rgb(0, 126, 166)",
    $l1_mainNav_border: "rgb(29, 63, 112)",
    $l3_sectionHead_bg: "rgb(238, 238, 238)",
    $sectionHead_border: "rgb(120, 132, 156)",
    $headerHoverBg: "rgb(15, 65, 125)",
    $headerLiMouseDown: "rgb(255, 191, 71)",
    $searchInputbg: "rgb(239, 239, 239)",
    $searchIconbg: "rgb(239, 239, 239)",
    $mainNav_bg_mobile: "rgb(255, 255, 255)",
    $searchText_color: "rgb(10, 47, 100)",
    $mainNav_Icon_border: "rgb(216, 216, 216)",
    $searchInputClick_bg: "rgb(255, 191, 71)",
    $l1_inactive_bgColor: "rgb(10, 47, 100)",
    $mnav_active_color: "rgb(10, 47, 100)",
    $links_color: "rgb(0, 126, 166)",
    $l2_linkBack_border: "rgb(186, 186, 186)",
    $l2_linkBack_bg: "rgb(10, 47, 100)",
    $section_heading_border: "rgb(216, 216, 216)",
    $l3_links_border: "rgb(216, 216, 216)",
    $signIn_bg: "rgb(0, 126, 166)",
    $sectionHead_color: "rgb(109, 110, 113)",
    $linkBack_color: "rgb(255, 255, 255)",
    $searchInputbg_mob: "rgb(239, 239, 239)",
    $headerBgActive: "rgb(0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "1px solid rgb(255, 255, 255)",
    $activeHeaderBg: "rgb(255, 255, 255)",
    $activeHeaderColor: "rgb(66, 20, 95)",
    $activeHeaderBorderTop: "4px solid rgb(0, 126, 166)",
    $headerInActiveColor: "rgb(255, 255, 255)",
    $headerFocus: "rgb(10, 47, 100)",
    $headermnavbg: "rgb(255, 255, 255)",
    $snavListItem: "rgb(0, 126, 166)",
    $snavListItem: "rgb(12, 127, 136)",
    $mnavHover: "rgb(3, 96, 137)",
    $mnavliColor: "rgb(10, 47, 100)",
    $ctaTitleColor: "rgb(0, 126, 166)",
    $cta_mGrey: "rgb(109, 110, 113)",
    $cta_mGreen: "rgb(0, 126, 166)",
    $SearchInputColor: "rgb(10, 47, 100)",
    $headerBgColor: "rgb(10, 47, 100)",
    $loginBusinessBg: "rgb(43, 149, 216) none repeat scroll 0px 0px / auto padding-box border-box",
    $loginBusinessColor: "rgb(43, 149, 216)",
    $expandedNavInActiveColor: "rgb(255, 255, 255)",
    $expandedNavActiveBG: "rgb(245, 245, 245)",
    $SearchBoxFocus: "rgb(10, 47, 100)",
    $SearchBoxFocusBG: "rgb(255, 191, 71)",
    $SearchBtnColor:"rgb(239, 239, 239)",

    //Single Teaser Article
    $themeWhiteShelfBg: "rgb(247, 247, 245)",
    $themeWhiteShelfColor: "rgb(10, 47, 100)",
    $themeLightBlueColor: "rgb(10, 47, 100)",
    $themeLightBlueBg: "rgb(247, 247, 245)",
    $themeBlueShelfBg: "rgb(223, 217, 209)",
    $themeBlueShelfColor: "rgb(66, 20, 95)",
    $themeBlueMobileBg: "rgb(223, 217, 209)",
    $ctaSarticleColor: "rgb(43, 149, 216)",
    $themeBlueMobile: "rgb(66, 20, 95)",
    $ctaSarticleMouseDown: "rgb(10, 47, 100)",
    $ctaSarticleHover: "rgb(10, 47, 100)",
    $titlecompColor: "rgb(10, 47, 100)",
    $rteBodyCustColor: "rgb(10, 47, 100)",
    $ctaSarticleMouseDownBg: "rgb(255, 191, 71)",

    //Multiple teaser article
    $secCTA_color: "rgb(43, 149, 216)",
    $secCTA_focus_outline: "rgb(10, 47, 100)",
    $teaserHead_hover_color: "rgb(0, 117, 162)",
    $teaserHead_mousedown_color: "rgb(10, 47, 100)",
    $themeBlueTHeadHover_color: "rgb(0, 117, 162)",
    $themeBlue_cta_color: "rgb(255, 255, 255)",
    $themeLightBlue_cta_color: "rgb(43, 149, 216)",
    $themeBlue_ctaHover_color: "rgb(0, 117, 162)",
    $themeWhite_bg: "rgb(247, 247, 245)",
    $themeLightBlue_bg: "rgb(223, 217, 209)",
    $themeBlue_bg: "rgb(10, 47, 100)",
    $themeWhite_title_color: "rgb(10, 47, 100)",
    $themeLightBlue_title_color: "rgb(10, 47, 100)",
    $themeWhite_THead_color: "rgb(10, 47, 100)",
    $themeLightBlue_THead_color: "rgb(10, 47, 100)",
    $themeWhite_cta_hover: "rgb(10, 47, 100)",
    $themeWhite_tHead_hover_color: "rgb(0, 117, 162)",
    $themeLightBlueTHeadHover_color: "rgb(0, 117, 162)",
    $lightBlue_teaserHead_mouse_color: "rgb(10, 47, 100)",
    $blue_teaserHead_mouse_color: "rgb(255, 255, 255)",


    //mobile   
    $blue_teaserHead_mouse_color_mob: "rgb(255, 255, 255)",

    //Benefit-list
    $benefitlistColor: "rgb(10, 47, 100)",
    $benefitlisttitleColor: "rgb(10, 47, 100)",

    //Hero Carousel    
    $sliderContent_bg: "rgb(10, 47, 100)",
    $sliderContentCta_bg: "rgb(52, 162, 178)",

    //Hero-PDP
    $transparent_bg: "rgb(0, 0, 0)",
    $heroheadColor: "rgb(43, 149, 216)",
    $herosignpostColor: "rgb(10, 47, 100)",
    $CTA_bg_color: "rgb(52, 162, 178)",
    $CtaMtextColor: "rgb(43, 149, 216)",
    $ctaPdpMouseDownColor: "rgb(10, 47, 100)",
    $ctaPdpMouseDownBg: "rgb(255, 191, 71)",
    $ctaHeroMPdpHover: "rgb(10, 47, 100)",
    $ctaPdpmMouseDownColor: "rgb(10, 47, 100)",
    $footlineRteColor: "rgb(10, 47, 100)",
    $footlineRtepColor: "rgb(10, 47, 100)",
    $heroSeparatorBg: "rgb(43, 149, 216)",
    $ctaHeroPdpHover: "rgb(48, 144, 158)",
    $comprichPColor: "rgb(10, 47, 100)",
    //Mobile
    $transparent_bgMobile: "rgb(236, 234, 230)",

    //Carousel
    $rteUlLiColor: "rgb(10, 47, 100)",
    $sliderRteH3Color: "rgb(11, 33, 81)",
    $sliderRtePColor: "rgb(102, 102, 102)",
    $sliderCta_m_aColor: "rgb(0, 126, 166)",
    $ctaHoverColor: "rgb(3, 96, 137)",
    $ctaMouseDownColor: "rgb(10, 47, 100)",
    $flexNavLiAnchorBg: "rgb(186, 186, 186)",
    $flexNavLiAnchorActiveBg: "rgb(0, 126, 166)",
    $ctaMouseDownBg: "rgb(255, 191, 71)",    
    $sliderWrapBgColor:"rgb(255, 255, 255)",    
    
    //carousel Mobile
    $nonHomesliderBgColor : "rgb(255, 255, 255)",    
    $mobflexsliderwrapbg :'rgb(223, 217, 209)',
    $mobflexsliderNavLiAActivebg :"rgb(0, 126, 166)",
    $mobflexsliderNavLiAbg : "rgb(186, 186, 186)",
    $mobflexsliderSliderimageAfterbg : "rgb(255, 255, 255)",    
    $mobblockContentColor : "rgb(10, 47, 100)",    
    $mobblockContentH4Color : "rgb(10, 47, 100)",    
    $mobblockContentH4aColor:"rgb(51, 51, 51)",    
    $mobblockContentH3Color: "rgb(11, 33, 81)",    
    $mobblockContentPColor:"rgb(109, 109, 109)",    
    $mobblockContentCtaAcolor:"rgb(0, 126, 166)",    
    $mobSlidercomprichTextLibg : "rgb(255, 255, 255)",    
    $mobblockContentPColorSec : "rgb(109, 109, 109)",

    //FAQ Desktop
    $faq_brand_bg: "rgb(10, 47, 100)",
    $faq_gray_bg: "rgb(223, 217, 209)",
    $faq_white_bg: "rgb(247, 247, 245)",
    $faq_head_colr: "rgb(255, 255, 255)",
    $b_faq_sear_btn_bg: "rgb(0, 168, 180)",
    $faq_sear_btn_bg: "rgb(52, 162, 178)",
    $gry_faq_head_colr: "rgb(10, 47, 100)",
    $faq_brand_odd_cols: "rgb(10, 47, 100)",
    $faq_gray_odd_cols: "rgb(255, 255, 255)",
    $faq_gray_even_cols: "rgb(10, 47, 100)",
    $faq_brandOlnksFocus_color: "rgb(10, 47, 100)",
    $faq_brandOlnksFoc_bg_colr: "rgb(255, 191, 71)",
    $faq_fqSerInpt_color: "rgb(153, 153, 153)",
    $faq_fqSerInpt_colr: "rgb(153, 153, 153)",
    $faq_white_fqSerInpt_color: "rgb(153, 153, 153)",
    $faq_white_head_colr: "rgb(10, 47, 100)",
    $faq_grayO_fs_colr: "rgb(10, 47, 100)",
    $faq_white_odd_cols: "rgb(255, 255, 255)",
    $faq_white_odd_cols_arr: "rgb(255, 255, 255)",
    $faq_white_even_cols: "rgb(10, 47, 100)",
    $faq_brandElnksFocus_color: "rgb(10, 47, 100)",
    $faq_gray_odd_cols_arr: "rgb(255, 255, 255)",
    $faq_gray_even_cols_arr: "rgb(10, 47, 100)",
    $faq_grayE_fs_colr: "rgb(10, 47, 100)",
    $faq_brand_odd_cols_arr: "rgb(10, 47, 100)",
    $faq_head_brand_colr: "rgb(255, 255, 255)",
    $faq_brand_Even_cols: "rgb(10, 47, 100)",
    $faq_white_even_cols_arr: "rgb(10, 47, 100)",
    $faq_Even_odd_cols_arr: "rgb(10, 47, 100)",
    $faq_fqSerInpt_brand_colr: "rgb(153, 153, 153)",

    // Mobile faq
    $b_faq_sear_btn_bg_m: "rgb(238, 237, 233)",
    $b_faq_sear_btn_color_m: "rgb(10, 47, 100)",
    $faq_fqSerInpt_color_m: "rgb(113, 106, 99)",
    $faq_white_fqSerInpt_color_m: "rgb(113, 106, 99)",
    $faq_arrDis_bg: "rgb(187, 187, 187)",
    $faq_arrGray_colr: "rgb(255, 255, 255)",
    $faq_arrGray_bg: "rgb(66, 20, 95)",
    $faq_arrBrand_colr: "rgb(255, 255, 255)",
    $faq_arrBrand_bg: "rgb(66, 20, 95)",
    $faq_arrWhite_colr: "rgb(255, 255, 255)",
    $faq_arrWhite_bg: "rgb(66, 20, 95)",
    $gray_faq_sear_btn_bg_m: "rgb(238, 237, 233)",
    $white_faq_sear_btn_bg_m: "rgb(238, 237, 233)",

    //Dynamic Clock
    $dynamicShelfBgColor: "rgb(10, 47, 100)",
    $flipTimerColor: "rgb(10, 47, 100)",
    $dynamicCtaHoverBg: "rgb(48, 144, 158)",
    $dynamicCtaMouseDownColor: "rgb(10, 47, 100)",
    $dynClockText: "rgb(255, 255, 255)",
    $dynamicclockCta_LBg: "rgb(52, 162, 178)",
    $dynamicCtaMouseDownBg: "rgb(255, 191, 71)",
    $flipTimerDigitTopBg: "rgb(223, 217, 209)",

    //Next Step Shelf
    $nextStepBlueThemeBg: "rgb(10, 47, 100)",
    $nextStepWhiteThemeBg: 'rgb(247, 247, 245)',
    $nextStepLightBlueThemeBg: "rgb(223, 217, 209)",
    $nextStepsCtaIconsHover: "rgb(0, 117, 162)",
    $nextStepsCtaIconsFocusColor: "rgb(10, 47, 100)",
    $nextStepCta_LTextShadow: "rgb(54, 12, 81) 1px 1px 1px",
    $NSctaMouseDownColor: "rgb(10, 47, 100)",
    $NSctaMouseDownBorderTop: "0px none rgb(10, 47, 100)",
    $nextStepWhiteThemeColor: "rgb(10, 47, 100)",
    $headLineWhiteColor: "rgb(10, 47, 100)",
    $nextStepsCtaIconsaWhiteColor: "rgb(10, 47, 100)",
    $nextStepsCtaIconsHoverOther: "rgb(0, 117, 162)",
    $nextStepsCtaIconsFocusWhiteColor: "rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBg: "rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBorder: "1px solid rgb(43, 75, 111)",
    $ctaMouseDown_mColor: "rgb(10, 47, 100)",
    $nextStepCta_LBg: "rgb(52, 162, 178)",
    $nextStepCta_LBorderTop: "1px solid rgb(67, 201, 210)",
    $nextStepCta_LBoxShadow: "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepCtaHover: "rgb(48, 144, 158)",
    $nextStepCtaBoxShadow: "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepctaMouseDownBg: "rgb(255, 191, 71)",
    $nextStepctaMouseDownBox: "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
    $nextStepsCtaIconsa_mMargin: "0px 0px 0px 44.6875px",
    $nextStepCtaHover_m: "rgb(255, 255, 255)",
    $rteClrOther:"rgb(10, 47, 100)",
    $rteCtaClrBlue:"rgb(255, 255, 255)",
    $ctaLinkOther:"rgb(43, 149, 216)",
    $ctaLinkBlueHov:"rgb(0, 117, 162)",
    $ctaLinkOtherHov:"rgb(10, 47, 100)",
    $nextStepCtaFocusBg:"rgb(255, 191, 71)",
    $ctaIconPadd:"0px 24px 0px 0px",

     //accordion
     $accCtaFocus: "rgb(255, 191, 71)",
     $canvas_bg_color: "rgb(247, 247, 245)",
     $acc_bg_color: "rgb(247, 247, 245)",
     $accoutclr : "rgb(255, 191, 71)", 
     $accrteclr:"rgb(10, 47, 100)",
     $accLast_bg_color :"rgb(247, 247, 245)",
     $accrte_tabclr : "rgb(12, 10, 19)",
     $accrte_linkclr : "rgb(43, 149, 216)",
     $accBg_clr :"rgb(223, 217, 209)",
     //accordion-composite
    
     $accCompLinkclr : "rgb(43, 149, 216)",
     $accComp_bgclr : "rgb(240, 247, 250)",
     $accComp_rteclr :"rgb(10, 47, 100)",
     $accComp_ctasclr :"rgb(43, 149, 216)",
     $accComp_ctapbgclr : "rgb(52, 162, 178)",
     $accComp_ctapclr : "rgb(10, 47, 100)",
     $accComp_primary_1 :"rgb(10, 47, 100)",
     $accComp_ctaphover : "rgb(48, 144, 158)",
     $accComp_ctapfocus: "rgb(255, 191, 71)",
     $accCompBlk_clr :"rgb(10, 47, 100)",
     $acccComp_bgclr : "rgb(0, 0, 0)",
     $accComp_bgclrxs : "rgb(207, 199, 190)",

    //Contact Details
    $linkOnFocus_outline: "rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg: "rgb(10, 47, 100)",
    $cd_themeblue_shelf_clr: "rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m: "rgb(10, 47, 100) none repeat scroll 0% 0% / auto padding-box border-box",

     //Mobile comparison Carousel

     $ctabgcolor : "rgb(52, 162, 178)" ,
     $ctaHoverbgcolor : "rgb(48, 144, 158)",
     $onfocusprimarycolor :"rgb(255, 191, 71)",
     $accTitlecolor:"rgb(10, 47, 100)",
     $ctacolor: "rgb(255, 255, 255)",
     $activePtsbgclr:"rgb(10, 47, 100)",
     $notactivePtsbgclr:"rgb(180, 169, 159)",
     $acc_li_color:"rgb(10, 47, 100)",
     $bgcolor1: "rgb(31, 112, 174)",
     $bgcolor2: "rgb(25, 95, 155)",
     $bgcolor3: "rgb(21, 79, 137)",
     $bgcolor4: "rgb(15, 63, 119)",
     $bgcolor5: "rgb(10, 47, 100)",
     $acc_bg_Color_Even : "rgb(238, 237, 233)",
     $acc_bg_Color_Odd : "rgb(247, 247, 245)", 
     $cta_m_a_clr2:"rgb(43, 149, 216)",
     $seeMoreLess_outlineclr:"rgb(173, 25, 130)", 
    

      //comparison table

    $lightBandDarkTheme_bgColor:"rgb(150, 173, 210)",
    $heavyBandDarkTheme_bgColor:"rgb(207, 199, 184)",
    $lightBandDarkTheme_color: "rgb(255, 255, 255)",
    $heavyBandDarkTheme_color: "rgb(255, 255, 255)",
    $NoTheme_bgColor: "rgb(207, 199, 184)",
    $lightBandNoTheme_color:"rgb(255, 255, 255)",
    $heavyBandNoTheme_color:"rgb(10, 47, 100)",
    $tableheading_border_bottom:"2px solid rgb(255, 255, 255)",
    $tableRteColor: "rgb(10, 47, 100)",
    $rteText_list_color:"rgb(10, 47, 100)",
    $heavyrow_even_bgColor: "rgb(233, 229, 224)",
    $heavyrow_odd_bgColor:"rgb(207, 199, 190)",
    $lightrow_even_bgColor: "rgb(233, 229, 224)",
    $lightrow_odd_bgColor:"rgb(207, 199, 190)",
    $info_icon_color: "rgb(10, 47, 100)",
    $info_icon_hover_text_bgColor: "rgb(10, 47, 100)",
    $info_icon_focus_outline: "rgb(255, 191, 71)",
    $info_icon_color_hover: "rgb(10, 47, 100)",
    $tool_tip_color: "rgb(255, 255, 255)",
    $tool_tip_bgColor: "rgb(10, 47, 100)",

    //pdp comparison table
    $pdpComp_Tit_Color:"rgb(255, 255, 255)",
    $pdpComp_Text_Color:"rgb(255, 255, 255)",
    $pdpComp_Cell_One_Bgcolor:"rgb(31, 112, 174)",
    $pdpComp_Cell_Two_Bgcolor:"rgb(25, 95, 155)",
    $pdpComp_Cell_Three_Bgcolor:"rgb(21, 79, 137)",
    $pdpComp_Cell_Four_Bgcolor:"rgb(15, 63, 119)",
    $pdpComp_Cell_Five_Bgcolor:"rgb(10, 47, 100)",
    $pdpComp_Cell_Btn_BgColor:"rgb(52, 162, 178)",
    $pdpComp_Cell_Btn_Color_Focus:"rgb(10, 47, 100)",
    $pdpComp_Cell_Btn_Hover_BgColor:"rgb(48, 144, 158)",
    $pdpComp_Cell_Btn_Focus_BgColor:"rgb(255, 191, 71)",
    $pdpComp_Acc_Focus_Color:"rgb(255, 191, 71)",
    $pdpComp_Acc_Tit_Color:"rgb(10, 47, 100)",
    $pdpComp_Acc_Tex_Color:"rgb(10, 47, 100)",
    $pdpComp_Acc_Even_BgColor:"rgb(238, 237, 233)",
    $pdpComp_Acc_Odd_BgColor:"rgb(247, 247, 245)",

    //Notification Shelf

    $ns_themewhite_bg: 'rgb(247, 247, 245)',
    $ns_themewhite_clr: 'rgb(10, 47, 100)',
    $ns_themeblue_bg: 'rgb(10, 47, 100)',
    $ns_themeblue_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_bg: 'rgb(223, 217, 209)',
    $ns_themelightblue_clr: 'rgb(10, 47, 100)',
    $ns_themelightgrey_bg: 'rgb(255, 255, 255)',
    $ns_themelightgrey_clr: 'rgb(10, 47, 100)',
    $ns_dwnld_themewhite_anchor_clr: 'rgb(43, 149, 216)',
    $ns_dwnld_themeblue_anchor_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_anchor_clr: 'rgb(43, 149, 216)',
    $ns_dwnld_themelightgrey_anchor_clr: 'rgb(43, 149, 216)',
    $ns_dwnld_themewhite_span_clr: 'rgb(10, 47, 100)',
    $ns_dwnld_themeblue_span_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_span_clr: 'rgb(10, 47, 100)',
    $ns_dwnld_themelightgrey_span_clr: 'rgb(10, 47, 100)',
    $ns_themewhite_text_clr: 'rgb(10, 47, 100)',
    $ns_themeblue_text_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_text_clr: 'rgb(10, 47, 100)',
    $ns_themelightgrey_text_clr: 'rgb(10, 47, 100)',
    //Blog header
    $heading_color : 'rgb(43, 149, 216)',
    $heading_color_bluetheme : 'rgb(255, 255, 255)',
    $author_date : 'rgb(102, 102, 102)',
    $seperatorline : 'rgb(43, 149, 216)',
    $heading_margin : "26px 0px 11px",
    $date_lineheight : "14px",
    $fontfamily:"RNHouseSansBold, sans-serif",


    //list component 

    $shelf_background_color:"rgb(66, 20, 95)",
    $listItemcount_background_color:"rgb(66, 20, 95)",
    $listItemtitle_color:"rgb(66, 20, 95)",
    $listAnchorElem_color  :"rgb(43, 149, 216)",
    $listView4AnchorElem_color:"rgb(43, 149, 216)",
    $listItemBackgroundColor :"rgb(243, 241, 239)",
    $listDescriptionColor:"rgb(51, 51, 51)",
    $listRichTextColor:"rgb(66, 20, 95)",
    $listView3RetValBGcol:"rgb(0, 0, 0)",
    $listView3RetNameCol:"rgb(10, 47, 100)",
    $listView4ListItemBGcolor:"rgb(238, 237, 233)",

    //dwky
    $dwky_color: "rgb(255, 255, 255)",
    $dwky_bluebgcolor: "rgb(10, 47, 100)",
    $dwky_lightbluebgcolor: "rgb(223, 217, 209)",
    $dwky_whitebgcolor: "rgb(247, 247, 245)",
    $dwky_btn_disabled_bgcolor: "rgb(127, 127, 127)",
    $dwky_btn_disabled_color: "rgb(170, 170, 170)",
    $dwky_btn_enabled_bgcolor: "rgb(0, 59, 121)",
    $dwky_btn_enabled_color: "rgb(255, 255, 255)",
    $dwky_btn_hover: "rgb(0, 117, 162)",
    $dwky_btn_focus: "rgb(255, 191, 71)",
    $dwky_btn_disabled_bgcolor_m: "rgb(127, 127, 127)",
    $dwky_btn_enabled_bgcolor_m: "rgb(242, 247, 252)",
    $dwky_hover_m: "rgb(242, 247, 252)",
    //tab-item
    $tabitem_shelfinner_borderleftcolor:"rgb(66, 20, 95, 1)",
    $tabitem_servicetab_color:"rgb(66, 20, 95, 1)",
    $tabitem_singletabs_color:"rgb(66, 20, 95, 1)",
    $tabitem_singletabs_borderleftcolor:"rgb(66, 20, 95, 1)",
    $tabitem_tabscontent_backgroundcolor:"rgb(247, 247, 245, 1)",
    $tabitem_tabscontent_color:"rgb(66, 20, 95, 1)",
    $tabitem_tabheading_borderbottomcolor:"rgb(66, 20, 95, 1)",
    $tabitem_tabpara_borderrightcolor:"rgb(66, 20, 95, 1)",
    $tabitem_tabseperator_backgroundcolor:"rgb(209, 201, 191, 1)",
    $tabitem_tabseperator_borderbottomcolor:"rgb(66, 20, 95, 1)",
    $tabitem_quickcompareleft_backgroundcolor:"rgb(238, 237, 233, 1)",
    $tabitem_quickcompareleft_bordertopcolor:"rgb(118, 23, 112, 1)",
    $tabitem_quickcompareleft_color:"rgb(66, 20, 95, 1)",
    $tabitem_quickcompareright_color:"rgb(66, 20, 95, 1)",
    $tabitem_inactivetab_bgcolor:"rgb(238, 237, 233, 1)",
    $tabitem_whychoosetab_backgroundcolor:"rgb(247, 247, 245, 1)",
    $tabitem_whychoosetab_borderbottomcolor:"rgb(0, 0, 0, 0)",
    $tabitem_whychoosepara_color:"rgb(66, 20, 95, 1)",
    $tabitem_inactiveh2_color:"rgb(66, 20, 95, 1)",
    $tabitem_whychooseseperator_backgroundcolor:"rgb(209, 201, 191, 1)",
    $tabitem_whychoosecomblock_backgroundcolor:"rgb(238, 237, 233, 1)",
    $tabitem_whychoosecomblock_bordertopcolor:"rgb(118, 23, 112, 1)",
    $tabitem_whychoosecomheading_color:"rgb(118, 23, 112, 1)",
    $tabitem_whychoosecompara_color:"rgb(118, 23, 112, 1)",
    $tabitem_whychoosecta_color:"rgb(173, 25, 130, 1)",
    $tabitem_taboneheading_color:"rgb(66, 20, 95, 1)",
    $tabitem_borderbottomcolor_color:"rgb(66, 20, 95, 1)",
    $tabitem_funcbuttonhover_bgcolor:"rgb(48, 144, 158, 1)",
   $tabitem_funclinkhover_color:"rgb(66, 20, 95, 1)",
   $tabitem_funcbtnclick_bgcolor:"rgb(255, 191, 71, 1)",
   $tabitem_funcbtnclick_color:"rgb(66, 20, 95, 1)",
   $tabitem_funcbtnclick_brdleftcolor:"rgb(66, 20, 95, 1)",
   $tabitem_tabonepara_color:"rgb(66, 20, 95, 1)",
   $tabitem_tabonepara_bdbtcolor:"rgb(66, 20, 95, 1)",


   // blog author component 

    $blogauthor_shelfBGcolor:"rgb(240, 240, 240)",
    $blogauthor_headertile_color:"rgb(10, 47, 100)",
    $blogauthor_headertile_ele_color:"rgb(10, 47, 100)",
    $blogauthor_nameandtilte_color:"rgb(10, 47, 100)",

   //Product Details Shelf
   $lightGreyProductColor:"rgb(233, 229, 224)",
   $darkgreycolor:"rgb(207, 199, 190)",
   $skyBlueColor:"rgb(150, 173, 210)",
   $blackText:"rgb(0, 0, 0)",
   $BGColor_Blue100_tab:"rgb(10, 47, 100)",

    // Tiles Component
    $tileLayoutBgColor: "rgb(223, 217, 209)",
    $headTextColor:"rgb(10, 47, 100)",
    $largeTileBorderTopClr:"rgb(180, 169, 159)",
    $largeTileParaLastClr:"rgb(102, 102, 102)",
    $largetilePurplePFirstClr: "rgb(10, 47, 100)",
    $largetilePurplePLastClr: "rgb(10, 47, 100)",
    $seeMoreLessColor:"rgb(140, 29, 119)",
    $seeMoreLessBBtmColor:"rgb(209, 201, 191)",

        // Light-Box Properties
     
        $lb_brdrcolor1:"rgb(255, 0, 0)",
        $lb_anchorclr1:"rgb(43, 149, 216)",
        $lb_backgrndclr1:"rgb(52, 162, 178)",
        $lb_backgrndclr2:"rgb(0, 0, 0)",
        $lb_ctaFocusbackgrndclr:"rgb(255, 191, 71)",
        $lb_ctaHoverbackgrndclr:"rgb(48, 144, 158)",
        $lb_ctaHoverbrdrtopclr:"rgb(67, 201, 210)",
        $ctaMFocusColor:"rgb(10, 47, 100)",
        $lb_white_anchorclr1:"rgb(43, 149, 216)",
        $lb_anchorclr2:"rgb(10, 47, 100)",
        $lb_anchorclr2_m:"rgb(43, 149, 216)",
        $lb_tb_color_m:"rgb(66, 20, 95)",
        $lb_font_color1:"rgb(10, 47, 100)",
        $lb_cta_clr1: "rgb(255, 255, 255)",
     $lb_cta_m_hover_clr:"rgb(10, 47, 100)",
   //product list component
   $prodListTitle_color: "rgb(10, 47, 100)",
   $prodListSubTitle_color: "rgb(10, 47, 100)",
   $prodListWrapper_bgColor: "rgb(247, 247, 245)",
   $listTopListLoan_bgColor: "rgba(0, 0, 0, 0)",
   $listLoanRte_color:"rgb(10, 47, 100)",
   $loanIconTextRte_color:"rgb(10, 47, 100)",
   $listTopBdrtop_Color:"rgb(207, 199, 190)",
   $listAprBrdr_color:"rgb(247, 247, 245)",
   $listApr_bgColor:"rgb(238, 237, 233)",
   $listApr_color:"rgb(10, 47, 100)",
   $prodListWrapper_bdrColor:"rgb(255, 255, 255)",
   $prodList_bdrColor:"rgb(247, 247, 245)",
   $listLoan_brdrbtm:"1px solid rgb(247, 247, 245)",
   $listApr_color_M:"rgb(27, 99, 158)",

   //subnav 
    //SUBNAV SHELF
    $subnv_theme_white_clr:"rgb(10,47, 100)",
    $subnv_theme_light_blue_clr:"rgb(10, 47, 100)",
    $subnv_theme_blue_clr:"rgb(255, 255, 255)",
    $subnv_hover_bgclr: "rgb(3, 31, 70)",
    $subnv_hover_clr:"rgb(180, 169, 159)",
    $subnv_firstchild_bgclr:"rgb(10, 47, 100)",
    $subnv_4_bgclr2:"rgb(17, 69, 125)",
    $subnv_4_bgclr3:"rgb(24, 89, 148)",
    $subnv_lastchild_bgclr:"rgb(31, 112, 174)",
    $subnv_focus_clr:"rgb(10, 47, 100)",
    $subnv_rte_clr: "rgb(10, 47, 100)",
    $subnv5_bgclr2: "rgb(15, 63, 119)" ,
    $subnv5_bgclr3: "rgb(21, 79, 137)" ,
    $subnv5_bgclr4:"rgb(25, 95, 155)",
    $subnv6_bgclr2:"rgb(14, 61, 115)",
    $subnv6_bgclr3:"rgb(18, 73, 129)",
    $subnv6_bgclr4:"rgb(22, 86, 144)",
    $subnv6_bgclr5:"rgb(27, 99, 158)",
    $subnv_6secondchild_bg_color:"rgb(14, 61, 115)",
    $subnv_6thirdchild_bg_color:"rgb(18, 73, 129)",
    $subnv_6fourthchild_bg_color:"rgb(22, 86, 144)",
    $subnv_6fifthchild_bg_color:"rgb(27, 99, 158)",
    $subnv_6lastchild_bg_color:"rgb(31, 112, 174)",
    $subnv_3child_color:"rgb(255, 255, 255)",
    $subnv_2lastchild_bg_color: "rgb(21, 79, 137)",
    $subnv2_headingtext_color: "rgb(255, 255, 255)",
    $subnv_2child_bg_color: "rgb(10, 47, 100)",
    $subnv_rte_link_color:"rgb(43, 149, 216)",
    $subnv_3_bgclr2:"rgb(21, 79, 137)",
    $subnv2_chevron_bg_color:"rgb(0, 0, 0)",
    $subnv_3secondchild_bg_color:"rgb(21, 79, 137)",
    $subnv_3lastchild_bg_color:"rgb(31, 112, 174)",
    $subnv_3child_bg_color:"rgb(10, 47, 100)",
    $subnv_4secondchild_bg_color: "rgb(17, 69, 125)",
    $subnv_4thirdchild_bg_color: "rgb(24, 89, 148)",
    $subnv_4lastchild_bg_color: "rgb(31, 112, 174)",
    $rewardsubnv_4child_bg_color:"rgb(25, 95, 155)",
    $rewardsubnv_4secondchild_bg_color:"rgb(21, 79, 137)",
    $rewardsubnv_4thirdchild_bg_color:"rgb(15, 63, 119)",
    $rewardsubnv_4lastchild_bg_color:"rgb(10, 47, 100)",
    $subnv_5secondchild_bg_color:"rgb(15, 63, 119)",
    $subnv_5thirdchild_bg_color:"rgb(21, 79, 137)",
    $subnv_5fourthchild_bg_color:"rgb(25, 95, 155)",
    $subnv_5lastchild_bg_color:"rgb(31, 112, 174)",
    $subnv_hover_bgclr_prop:"rgb(0, 0, 0)",
    $subnv_4child_bg_color:"rgb(10, 47, 100)",
    

    // subnav mobile
    $subnv_mob_4_bgclr2:"rgb(17, 69, 125)",
    $subnv_mob_4_bgclr3:"rgb(24, 89, 148)",
    $subnv_firstbgclr:"rgb(10, 47, 100)",
    $subnv_firstbgclr3:"rgb(10, 47, 100)",
    $subnv_firstbgclr5:"rgb(10, 47, 100)", 
    $subnv_firstbgclr6:"rgb(10, 47, 100)",
    $subnv_firstbgclr4:"rgb(10, 47, 100)",
    $subnv_mob_3_bgclr2 : "rgb(21, 79, 137)",  
    $subnv_mob_5_bgclr2 : "rgb(15, 63, 119)",  
    $subnv_mob_5_bgclr3 : "rgb(21, 79, 137)",      
    $subnv_mob_5_bgclr4 : "rgb(25, 95, 155)",
    $subnv_mob_6_bgclr2:"rgb(14, 61, 115)",
    $subnv_mob_6_bgclr3:"rgb(18, 73, 129)",
    $subnv_mob_6_bgclr4:"rgb(22, 86, 144)",
    $subnv_mob_6_bgclr5:"rgb(27, 99, 158)",
    
});

module.exports = {
    props: mac_rbsb
}


