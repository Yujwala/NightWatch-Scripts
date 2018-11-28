var ff_nwi_props=require('./natwest_intermediary.js');

var ff_nwi = Object.assign({}, ff_nwi_props.props, {
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
    $headerBgInactive:"rgb(0, 0, 0) -webkit-linear-gradient(left, rgb(66, 20, 95) 0px, rgb(66, 20, 95) 100%) repeat scroll 0% 0% / auto padding-box border-box",
    $loginBg: "rgb(12, 127, 136)",
    $l1_mainNav_border: "rgb(104, 79, 130)",
    $l3_sectionHead_bg: "rgb(230, 228, 233)",
    $sectionHead_border: "rgb(140, 123, 153)",
    $headerHoverBg: "rgb(44, 9, 67)",
    $headerLiMouseDown: "rgb(255, 191, 71)",
    $searchInputbg: "rgb(243, 241, 245)",
    $searchIconbg: "rgb(243, 241, 245)",
    $mainNav_bg_mobile: "rgb(255, 255, 255)",
    $searchText_color: "rgb(66, 20, 95)",
    $mainNav_Icon_border: "rgb(216, 216, 216)",
    $searchInputClick_bg: "rgb(255, 191, 71)",
    $l1_inactive_bgColor:"rgb(66, 20, 95)",
    $mnav_active_color:"rgb(66, 20, 95)",
    $links_color: "rgb(12, 127, 136)",
    $l2_linkBack_border: "rgb(186, 186, 186)",
    $l2_linkBack_bg:"rgb(66, 20, 95)",
    $section_heading_border: "rgb(216, 216, 216)",
    $l3_links_border: "rgb(216, 216, 216)",
    $signIn_bg: "rgb(12, 127, 136)",
    $sectionHead_color: "rgb(102, 102, 102)",
    $linkBack_color : "rgb(255, 255, 255)",
    $searchInputbg_mob: "rgb(243, 241, 245)",

    $headerBgActive: "rgb(0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "1px solid rgb(255, 255, 255)",
    $activeHeaderBg: "rgb(255, 255, 255)",
    $activeHeaderColor: "rgb(66, 20, 95)",
    $headerInActiveColor: "rgb(255, 255, 255)",
    $headerFocus: "rgb(66, 20, 95)",
    $headermnavbg: "rgb(255, 255, 255)",
    $snavListItem: "rgb(12, 127, 136)",
    $mnavHover: "rgb(8, 105, 120)",
    $mnavliColor: "rgb(66, 20, 95)",
    $ctaTitleColor: "rgb(12, 127, 136)",
    $cta_mGrey: "rgb(102, 102, 102)",
    $cta_mGreen: "rgb(12, 127, 136)",
    $SearchInputColor:"rgb(66, 20, 95)",
    $headerBgColor:"rgb(66, 20, 95)",
    $loginBusinessColor:"rgb(173, 25, 130)",
    $expandedNavInActiveColor:"rgb(255, 255, 255)",
    $expandedNavActiveBG:"rgb(245, 245, 245)",
    $SearchBoxFocus:"rgb(66, 20, 95)",
    $SearchBoxFocusBG:"rgb(255, 191, 71)",
    $SearchBtnColor:"rgb(243, 241, 245)",

    //Single Teaser Article
    $themeWhiteShelfBg: "rgb(247, 247, 245)",
    $themeWhiteShelfColor: "rgb(66, 20, 95)",
    $themeLightBlueColor: "rgb(66, 20, 95)",
    $themeLightBlueBg: "rgb(255, 255, 255)",
    $themeBlueMobileBg: "rgb(223, 217, 209)",
    $themeBlueShelfBg: "rgb(223, 217, 209)",
    $themeBlueShelfColor: "rgb(66, 20, 95)",
    $ctaSarticleColor: "rgb(173, 25, 130)",
    $themeBlueMobile: "rgb(66, 20, 95)",
    $ctaSarticleMouseDown: "rgb(66, 20, 95)",
    $ctaSarticleHover:"rgb(66, 20, 95)",
    $titlecompColor:"rgb(66, 20, 95)",
    $rteBodyCustColor:"rgb(66, 20, 95)",
    $ctaSarticleMouseDownBg:"rgb(255, 191, 71)",

    //Multiple teaser article
    $secCTA_color: "rgb(173, 25, 130)",
    $secCTA_focus_outline: "rgb(66, 20, 95)",
    $teaserHead_hover_color: "rgb(6, 124, 208)",
    $teaserHead_mousedown_color: "rgb(6, 124, 208)",    
    $themeBlueTHeadHover_color: "rgb(174, 171, 208)",    
    $themeBlue_cta_color: "rgb(255, 255, 255)",
    $themeLightBlue_cta_color: "rgb(173, 25, 130)",
    $themeBlue_ctaHover_color: "rgb(174, 171, 208)",    
    $themeWhite_bg: "rgb(247, 247, 245)",
    $themeLightBlue_bg: "rgb(223, 217, 209)",
    $themeBlue_bg: "rgb(66, 20, 95)",    
    $themeWhite_title_color: "rgb(66, 20, 95)",
    $themeLightBlue_title_color: "rgb(66, 20, 95)",
    $themeWhite_THead_color: "rgb(66, 20, 95)",
    $themeLightBlue_THead_color: "rgb(66, 20, 95)",    
    $themeWhite_cta_hover: "rgb(66, 20, 95)",
    $themeWhite_tHead_hover_color: "rgb(173, 25, 130)",
    $themeLightBlueTHeadHover_color: "rgb(6, 124, 208)",
    $lightBlue_teaserHead_mouse_color: "rgb(66, 20, 95)",
    $blue_teaserHead_mouse_color: "rgb(255, 255, 255)",
    

    //mobile
    $blue_teaserHead_mouse_color_mob: "rgb(255, 255, 255)",

    $font_family_bold:'"rnhousesansbold",sans-serif',
    $font_family_regular: '"rnhousesansregular",sans-serif',   
    $primary_cta_font: '"rnhousesansbold"',
    $font_family_Header:'"rnhousesansbold",sans-serif',
    $font_family_headline: '"rnhousesansbold",sans-serif',
    $font_family_SearchInput: '"rnhousesansregular",sans-serif',
    $font_family_titlecomp:'"rnhousesansbold",sans-serif',
    $title_fontfamily: '"rnhousesansbold",sans-serif',

    //Hero Carousel     
    $sliderContent_bg:"rgb(66, 20, 95)",
    $sliderContentCta_bg:"rgb(52, 162, 178)",

    //Carousel
    $sliderRteH3FontFamily: '"rnhousesansregular",sans-serif',
    $sliderCta_m_afontfamily: '"rnhousesansregular",sans-serif',
    $rteUlLiColor:"rgb(66, 20, 95)",
    $rteUlLiPadding:"0px 0px 0px 9.632px",
    $sliderRteH3Color:"rgb(66, 20, 95)",
    $sliderRtePColor:"rgb(109, 109, 109)",
    $sliderCta_m_aColor:"rgb(12, 127, 136)",
    $ctaHoverColor:"rgb(8, 105, 120)",
    $ctaMouseDownColor:"rgb(66, 20, 95)",
    $flexNavLiAnchorBg:"rgb(232, 232, 232)",
    $flexNavLiAnchorActiveBg:"rgb(12, 127, 136)",
    $ctaMouseDownBg:"rgb(255, 191, 71)",

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
    $accrte_tabclr : "rgb(66, 20, 95)",
    $accrte_linkclr : "rgb(173, 25, 130)",
    $accBg_clr :"rgb(223, 217, 209)",
    $font_family_title: '"rnhousesansbold",sans-serif',

    //Contact Details    
    $headline_font_family:'"rnhousesansbold",sans-serif',
    $linkOnFocus_outline:"rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg:"rgb(66, 20, 95)",
    $cd_themeblue_shelf_clr:"rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m:"rgb(66, 20, 95) none repeat scroll 0% 0% / auto padding-box border-box",    
    $headline_font_family_m: '"rnhousesansbold",sans-serif',










    //blog author component 


    $blogauthor_headertile_ele_fontfamily: "rnhousesansbold, sans-serif",
    $blogauthor_headertile_ele_fontfamily_mob: "rnhousesansbold, sans-serif",
    $blogauthor_shelfBGcolor:"rgb(240, 240, 240)",
    $blogauthor_headertile_color:"rgb(66, 20, 95)",
    $blogauthor_nameandtilte_color:"rgb(10, 47, 100)",
    $blogauthor_headertile_ele_color:"rgb(66, 20, 95)",
 
    //Text-Image Component
    $lightBlueFF: "verdana",
    $blueFF:"verdana",
    $offWhiteFF:"verdana",
    $txtImgHeadFF:"rnhousesansbold, sans-serif",

});

module.exports = {
    props:ff_nwi
}

 