var ff_ulster_props = require('./ulster.js');

var ff_ulster = Object.assign({}, ff_ulster_props.props, {
    $primary_1: "rgb(10, 47, 100)",
    $primary_2: "rgb(255, 255, 255)",
    $shelf_bg_color_1: "rgb(247, 247, 245)",
    $shelf_bg_color_2: "rgb(223, 217, 209)",
    $linkColor: "rgb(255, 255, 255)",
    $linkColor_1: "rgb(3, 96, 137)",
    $whiteSmoke: "rgb(255, 255, 255)",
    $whiteSmoke_1: "rgb(0, 146, 221)",
    $bg_color_1: "rgb(0, 146, 221)",
    $grey: "rgb(10, 47, 100)",

    //header
    $headerBgInactive: "rgb(0, 0, 0) -webkit-linear-gradient(left, rgb(12, 66, 132) 0px, rgb(12, 66, 132) 100%) repeat scroll 0% 0% / auto padding-box border-box",
    $loginBg: "rgb(52, 162, 178)",
    $l1_mainNav_border: "rgb(0, 0, 0)",
    $l3_sectionHead_bg: "rgb(34, 65, 110)",
    $sectionHead_border: "rgb(120, 132, 156)",
    $headerHoverBg: "rgb(0, 146, 221)",
    $headerLiMouseDown: "rgb(255, 191, 71)",
    $searchInputbg: "rgb(255, 255, 255)",
    $searchIconbg: "rgb(0, 146, 221)",
    $mainNav_bg_mobile: "rgb(10, 47, 100)",
    $searchText_color: "rgb(161, 149, 138)",
    $mainNav_Icon_border: "rgb(102, 102, 102)",
    $searchInputClick_bg: "rgb(255, 191, 71)",
    $l1_inactive_bgColor: "rgb(170, 176, 184)",
    $mnav_active_color: "rgb(255, 255, 255)",
    $links_color: "rgb(255, 255, 255)",
    $l2_linkBack_border: "rgb(255, 255, 255)",
    $l2_linkBack_bg: "rgb(138, 150, 164)",
    $section_heading_border: "rgb(255, 255, 255)",
    $l3_links_border: "rgb(7, 34, 74)",
    $signIn_bg: "rgb(52, 162, 178)",
    $sectionHead_color: "rgb(255, 255, 255)",
    $linkBack_color: "rgb(255, 255, 255)",
    $searchInputbg_mob: "rgb(255, 255, 255)",

    $headerBgActive: "rgb(10, 47, 100) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "0px solid rgb(195, 195, 207)",
    $activeHeaderBg: "rgb(10, 47, 100)",
    $activeHeaderColor: "rgb(255, 255, 255)",
    $headerInActiveColor: "rgb(167, 178, 191)",
    $headerFocus: "rgb(10, 47, 100)",
    $headermnavbg: "rgb(10, 47, 100)",
    $snavListItem: "rgb(255, 255, 255)",
    $mnavHover: "rgb(0, 146, 221)",
    $mnavliColor: "rgb(0, 146, 221)",
    $ctaTitleColor: "rgb(10, 47, 100)",
    $cta_mGrey: "rgb(71, 127, 128)",
    $cta_mGreen: "rgb(10, 47, 100)",
    $SearchInputColor: "rgb(170, 170, 170)",
    $headerBgColor: "rgb(12, 66, 132)",
    $expandedNavInActiveColor: "rgb(255, 255, 255)",
    $expandedNavActiveBG: "rgb(255, 255, 255)",
    $SearchBoxFocus: "rgb(10, 47, 100)",
    $SearchBoxFocusBG: "rgb(255, 191, 71)",
    $SearchBtnColor:"rgb(255, 255, 255)",

    //Single Teaser Article
    $themeWhiteShelfBg: "rgb(255, 255, 255)",
    $themeWhiteShelfColor: "rgb(10, 47, 100)",
    $themeLightBlueColor: "rgb(10, 47, 100)",
    $themeLightBlueBg: "rgb(231, 229, 223)",
    $themeBlueShelfBg: "rgb(231, 229, 223)",
    $themeBlueShelfColor: "rgb(66, 20, 95)",
    $themeBlueMobileBg: "rgb(223, 217, 209)",
    $ctaSarticleColor: "rgb(177, 5, 157)",
    $themeBlueMobile: "rgb(66, 20, 95)",
    $ctaSarticleMouseDown: "rgb(10, 47, 100)",
    $ctaSarticleHover: "rgb(127, 4, 113)",
    $titlecompColor: "rgb(10, 47, 100)",
    $rteBodyCustColor: "rgb(10, 47, 100)",
    $ctaSarticleMouseDownBg: "rgb(255, 191, 71)",

    //Multiple teaser article
    $secCTA_color: "rgb(177, 5, 157)",
    $secCTA_focus_outline: "rgb(10, 47, 100)",
    $teaserHead_hover_color: "rgb(173, 25, 130)",
    $teaserHead_mousedown_color: "rgb(10, 47, 100)",
    $themeBlueTHeadHover_color: "rgb(255, 255, 255)",
    $themeBlue_cta_color: "rgb(76, 193, 255)",
    $themeLightBlue_cta_color: "rgb(177, 5, 157)",
    $themeBlue_ctaHover_color: "rgb(255, 255, 255)",
    $themeWhite_bg: "rgb(255, 255, 255)",
    $themeLightBlue_bg: "rgb(231, 229, 223)",
    $themeBlue_bg: "rgb(10, 47, 100)",
    $themeWhite_title_color: "rgb(10, 47, 100)",
    $themeLightBlue_title_color: "rgb(10, 47, 100)",
    $themeWhite_THead_color: "rgb(10, 47, 100)",
    $themeLightBlue_THead_color: "rgb(10, 47, 100)",
    $themeWhite_cta_hover: "rgb(127, 4, 113)",
    $themeWhite_tHead_hover_color: "rgb(10, 47, 100)",
    $themeLightBlueTHeadHover_color: "rgb(10, 47, 100)",
    $lightBlue_teaserHead_mouse_color: "rgb(10, 47, 100)",
    $blue_teaserHead_mouse_color: "rgb(255, 255, 255)",

    //mobile
    $blue_teaserHead_mouse_color_mob: "rgb(255, 255, 255)",

    //accordion
    $accCtaFocus: "rgb(255, 191, 71)",
    $canvas_bg_color: "rgb(255, 255, 255)",
    $acc_bg_color: "rgb(247, 247, 245)",
    $accoutclr : "rgb(255, 191, 71)", 
    $accrteclr:"rgb(10, 47, 100)",
    $accLast_bg_color :"rgb(247, 247, 245)",
    $accrte_linkclr : "rgb(10, 47, 100)",
    $accrte_tabclr : "rgb(10, 47, 100)",
    $accBg_clr :"rgb(231, 229, 223)",
    $font_family_title: '"rnhousesansbold",sans-serif',

    //accordion-composite
   $accCompLinkclr : "rgb(0, 146, 221)",
   $accComp_bgclr : "rgb(226, 230, 237)",
   $accComp_rteclr :"rgb(10, 47, 100)",
   $accComp_ctasclr :"rgb(177, 5, 157)",
   $accComp_ctapbgclr : "rgb(0, 168, 180)",
   $accComp_ctapclr : "rgb(10, 47, 100)",
   $accComp_primary_1 :  "rgb(10, 47, 100)",
   $accComp_ctaphover : "rgb(0, 158, 170)",
   $accComp_ctapfocus: "rgb(255, 191, 71)",
   $accCompBlk_clr :"rgb(10, 47, 100)",
   $acccComp_bgclr : "rgb(255, 255, 255)",
   $accComp_bgclrxs : "rgb(226, 230, 237)",
   $accCompTit_ff : '"rnhousesansbold",sans-serif',
   
    //Benefit-list-ulster
    $benefitlistColor: "rgb(10, 47, 100)",
    $benefitlisttitleColor: "rgb(10, 47, 100)",

    $font_family_bold: '"rnhousesansbold",sans-serif',
    $font_family_regular: '"rnhousesansregular",sans-serif"',
    $primary_cta_font: '"rnhousesansbold"',
    $font_family_Header: '"rnhousesansregular",sans-serif"',
    $font_family_headline: '"rnhousesansbold",sans-serif',
    $font_family_SearchInput: '"rnhousesansregular",sans-serif"',
    $font_family_titlecomp: '"rnhousesansbold",sans-serif',
    $title_fontfamily: '"rnhousesansbold",sans-serif',

    //Hero-PDP
    $font_CTAbgProps: '"rnhousesansbold"',
    $heroCtaMFont: '"rnhousesansregular"',
    $transparent_bg: "rgb(0, 0, 0)",
    $heroheadColor: "rgb(0, 146, 221)",
    $herosignpostColor: "rgb(10, 47, 100)",
    $CTA_bg_color: "rgb(0, 168, 180)",
    $CtaMtextColor: "rgb(177, 5, 157)",
    $ctaPdpMouseDownColor: "rgb(10, 47, 100)",
    $ctaPdpMouseDownBg: "rgb(255, 191, 71)",
    $ctaHeroMPdpHover: "rgb(127, 4, 113)",
    $ctaPdpmMouseDownColor: "rgb(10, 47, 100)",
    $footlineRteColor: "rgb(10, 47, 100)",
    $footlineRtepColor: "rgb(10, 47, 100)",
    $heroSeparatorBg: "rgb(43, 149, 216)",
    $ctaHeroPdpHover: "rgb(0, 158, 170)",
    $comprichPColor: "rgb(10, 47, 100)",
    //Mobile
    $transparent_bgMobile: "rgb(255, 255, 255)",

    //Hero Carousel 
    $sliderContent_bg: "rgb(10, 47, 100)",
    $sliderContentCta_bg: "rgb(0, 168, 180)",

    //FAQ Desktop
    $faq_head_font: '"rnhousesansbold"',
    $faq_oddColsLink_ff: '"rnhousesansregular",sans-serif"',
    $faq_font_ff_boldReg: '"rnhousesansbold",sans-serif',
    $faq_brand_bg: "rgb(10, 47, 100)",
    $faq_gray_bg: "rgb(223, 217, 209)",
    $faq_white_bg: "rgb(247, 247, 245)",
    $faq_head_colr: "rgb(255, 255, 255)",
    $b_faq_sear_btn_bg: "rgb(0, 168, 180)",
    $faq_sear_btn_bg: "rgb(52, 162, 178)",
    $gry_faq_head_colr: "rgb(66, 20, 95)",
    $faq_brand_odd_cols: "rgb(10, 47, 100)",
    $faq_gray_odd_cols: "rgb(255, 255, 255)",
    $faq_gray_even_cols: "rgb(10, 47, 100)",
    $faq_brandOlnksFocus_color: "rgb(10, 47, 100)",
    $faq_brandOlnksFoc_bg_colr: "rgb(255, 191, 71)",
    $faq_fqSerInpt_color: "rgb(153, 153, 153)",
    $faq_fqSerInpt_colr: "rgb(153, 153, 153)",
    $faq_white_fqSerInpt_color: "rgb(113, 106, 99)",
    $faq_white_head_colr: "rgb(10, 47, 100)",
    $faq_grayO_fs_colr: "rgb(66, 20, 95)",

    // Mobile faq
    $faq_head_font_m: '"rnhousesansbold",sans-serif',
    $b_faq_sear_btn_bg_m: "rgb(238, 237, 233)",
    $b_faq_sear_btn_color_m: "rgb(10, 47, 100)",
    $faq_fqSerInpt_color_m: "rgb(113, 106, 99)",
    $faq_white_fqSerInpt_color_m: "rgb(113, 106, 99)",

    //Dynamic Clock
    $dynamicclock_font_family_bold: "rnhousesansbold,sans-serif",
    $dynamicclock_font_family_regular: "rnhousesansregular,sans-serif",
    $dynamicclock_primary_cta_font: "rnhousesansbold",
    $dynamicShelfBgColor: "rgb(10, 47, 100)",
    $flipTimerColor: "rgb(10, 47, 100)",
    $dynamicCtaHoverBg: "rgb(0, 158, 170)",
    $dynamicCtaMouseDownColor: "rgb(10, 47, 100)",
    $dynClockText: "rgb(255, 255, 255)",
    $dynamicclockCta_LBg: "rgb(0, 168, 180)",
    $dynamicCtaMouseDownBg: "rgb(255, 191, 71)",
    $flipTimerDigitTopBg: "rgb(231, 229, 223)",

    //Next Step Shelf
    $nextStep_font_family_bold: '"rnhousesansbold",sans-serif',
    $nextStepBlueThemeBg: "rgb(10, 47, 100)",
    $nextStepWhiteThemeBg: 'rgb(255, 255, 255)',
    $nextStepsCtaIconsHover: "rgb(0, 146, 221)",
    $nextStepsCtaIconsFocusColor: "rgb(10, 47, 100)",
    $nextStepCta_LTextShadow: "rgb(19, 104, 126) 1px 1px 1px",
    $NSctaMouseDownColor: "rgb(10, 47, 100)",
    $NSctaMouseDownBorderTop: "0px none rgb(10, 47, 100)",
    $nextStepWhiteThemeColor: "rgb(10, 47, 100)",
    $headLineWhiteColor: "rgb(10, 47, 100)",
    $nextStepsCtaIconsaWhiteColor: "rgb(0, 146, 221)",
    $nextStepsCtaIconsHoverWhite: "rgb(0, 42, 102)",
    $nextStepsCtaIconsFocusWhiteColor: "rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBg: "rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBorder: "1px solid rgb(43, 75, 111)",
    $ctaMouseDown_mColor: "rgb(10, 47, 100)",
    $nextStepCta_LBg: "rgb(0, 168, 180)",
    $nextStepCta_LBorderTop: "1px solid rgb(67, 201, 210)",
    $nextStepCta_LBoxShadow: "rgb(0, 120, 129) 0px 2px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepCtaHover: "rgb(0, 158, 170)",
    $nextStepCtaBoxShadow: "rgb(27, 118, 139) 0px 2px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepctaMouseDownBg: "rgb(255, 191, 71)",
    $nextStepctaMouseDownBox: "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
    $nextStepsCtaIconsa_mMargin: "0px 0px 0px 58.1094px",
    $nextStepCtaHover_m: "rgb(0, 146, 221)",

    //Contact Details    
    $headline_font_family: '"rnhousesansbold",sans-serif',
    $linkOnFocus_outline: "rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg: "rgb(10, 47, 100)",
    $cd_themeblue_shelf_clr: "rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m: "rgb(10, 47, 100) none repeat scroll 0% 0% / auto padding-box border-box",
    $headline_font_family_m: '"rnhousesansbold",sans-serif',


    //Notification Shelf
    $ns_Text_font_family:'"rnhousesansregular",sans-serif',
    $ns_header_headline_txt_font_family: '"rnhousesansbold",sans-serif',
    $ns_notification_Shelf_font_family: '"rnhousesansregular",sans-serif',
    $ns_notification_Shelf_font_family_M: '"rnhousesansregular",sans-serif',
    $ns_themewhite_bg: 'rgb(255, 255, 255)',
    $ns_themewhite_clr: 'rgb(10, 47, 100)',
    $ns_themeblue_bg: 'rgb(10, 47, 100)',
    $ns_themeblue_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_bg: 'rgb(231, 229, 223)',
    $ns_themelightblue_clr: 'rgb(10, 47, 100)',
    $ns_themelightgrey_bg: 'rgb(227, 222, 215)',
    $ns_themelightgrey_clr: 'rgb(43, 149, 216)',
    $ns_dwnld_themewhite_anchor_clr: 'rgb(0, 146, 221)',
    $ns_dwnld_themeblue_anchor_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_anchor_clr: 'rgb(0, 146, 221)',
    $ns_dwnld_themelightgrey_anchor_clr: 'rgb(0, 146, 221)',
    $ns_dwnld_themewhite_span_clr: 'rgb(6, 124, 196)',
    $ns_dwnld_themeblue_span_clr: 'rgb(255, 255, 255)',
    $ns_dwnld_themelightblue_span_clr: 'rgb(6, 124, 196)',
    $ns_dwnld_themelightgrey_span_clr: 'rgb(6, 124, 196)',
    $ns_themewhite_text_clr: 'rgb(10, 47, 100)',
    $ns_themeblue_text_clr: 'rgb(255, 255, 255)',
    $ns_themelightblue_text_clr: 'rgb(10, 47, 100)',
    $ns_themelightgrey_text_clr: 'rgb(10, 47, 100)',











    
    //blog author component 


    $blogauthor_shelfBGcolor:"rgba(240, 240, 240)",
    $blogauthor_headertile_color:"rgba(10, 47, 100)",
    $blogauthor_headertile_ele_color:"rgba(10, 47, 100)",
    $blogauthor_nameandtilte_color:"rgba(10, 47, 100)",
    $blogauthor_headertile_ele_fontfamily:"rnhousesansbold, sans-serif",
    $blogauthor_headertile_ele_fontfamily_mob:"rnhousesansbold, sans-serif",



    //Video Component
    $videoPlayColor:"rgba(10, 47, 100, 1)",
    $videoParaColor:"rgba(10, 47, 100, 1)",
    $videoTranscriptColor:"rgba(10, 47, 100, 1)",
    $videoHeadingColor:"rgba(10, 47, 100, 1)",

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
    $subnv5_hd_font_family:"rnhousesansregular, sans-serif",
    $subnv_hd_font_family:"rnhousesansregular, sans-serif",
    $fontfamily_regular:"rnhousesansregular, sans-serif",
   

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
    $hdline_font_family:"rnhousesansbold, sans-serif",









});

module.exports = {
    props: ff_ulster
}


