var ff_nwp_props = require('./natwest_personal.js');

var ff_nwp = Object.assign({}, ff_nwp_props.props, {
    $primary_1: "rgb(66, 20, 95)",
    $primary_2: "rgb(255, 255, 255)",
    $shelf_bg_color_1: "rgb(247, 247, 245)",
    $shelf_bg_color_2: "rgb(223, 217, 209)",
    $linkColor: "rgb(12, 127, 136)",
    $linkColor_1: "rgb(8, 105, 120)",
    $whiteSmoke: "rgb(245, 245, 245)",
    $whiteSmoke_1: "rgb(245, 245, 245)",
    $bg_color_1: "rgb(89, 55, 109)",
    $grey: "rgb(102, 102, 102)",
    $focusColor:"rgb(255, 191, 71)",
	$font_family_bold:'"rnhousesansbold",sans-serif',
    $font_family_regular: '"rnhousesansregular",sans-serif',  

    //header
    $headerBgInactive: "rgb(0, 0, 0) -webkit-linear-gradient(left, rgb(66, 20, 95) 0px, rgb(66, 20, 95) 100%) repeat scroll 0% 0% / auto padding-box border-box",
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
    $l1_inactive_bgColor: "rgb(66, 20, 95)",
    $mnav_active_color: "rgb(66, 20, 95)",
    $links_color: "rgb(12, 127, 136)",
    $l2_linkBack_border: "rgb(186, 186, 186)",
    $l2_linkBack_bg: "rgb(66, 20, 95)",
    $section_heading_border: "rgb(216, 216, 216)",
    $l3_links_border: "rgb(216, 216, 216)",
    $signIn_bg: "rgb(12, 127, 136)",
    $sectionHead_color: "rgb(102, 102, 102)",
    $linkBack_color: "rgb(255, 255, 255)",
    $searchInputbg_mob: "rgb(243, 241, 245)",

    $headerBgActive: "rgb(0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "1px solid rgb(255, 255, 255, 0.08)",
    $activeHeaderBg: "rgb(255, 255, 255)",
    $activeHeaderColor: "rgb(66, 20, 95)",
    $headerInActiveColor: "rgb(255, 255, 255)",
    $headerFocus: "rgb(66, 20, 95)",
    $headermnavbg: "rgb(255, 255, 255)",
    $snavListItem: "rgb(12, 127, 136)",
    $snavListItem: "rgb(12, 127, 136)",
    $mnavHover: "rgb(8, 105, 120)",
    $mnavliColor: "rgb(66, 20, 95)",
    $ctaTitleColor: "rgb(12, 127, 136)",
    $cta_mGrey: "rgb(102, 102, 102)",
    $cta_mGreen: "rgb(12, 127, 136)",
    $SearchInputColor: "rgb(66, 20, 95)",
    $headerBgColor: "rgb(66, 20, 95)",
    $expandedNavInActiveColor: "rgb(255, 255, 255)",
    $expandedNavActiveBG: "rgb(245, 245, 245)",
    $SearchBoxFocus: "rgb(66, 20, 95)",
    $SearchBoxFocusBG: "rgb(255, 191, 71)",
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
    $ctaSarticleHover: "rgb(66, 20, 95)",
    $titlecompColor: "rgb(66, 20, 95)",
    $rteBodyCustColor: "rgb(66, 20, 95)",
    $ctaSarticleMouseDownBg: "rgb(255, 191, 71)",

    //Multiple teaser article
    $secCTA_color: "rgb(173, 25, 130)",
    $secCTA_focus_outline: "rgb(66, 20, 95)",
    $teaserHead_hover_color: "rgb(6, 124, 208)",
    $teaserHead_mousedown_color: "rgb(66, 20, 95)",
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

    
    //Benefit-list
    $benefitlistColor: "rgb(66, 20, 95)",
    $benefitlisttitleColor: "rgb(66, 20, 95)",
    $benefitlisttitleWhiteColor: "rgb(255, 255, 255)",
    $benefitlistpadding: "",
    $titleTextLineheight: "39px",
    $iconLineheight: "27px",
    $iconFontsize: "27px",
    $Primarytitlebottom: "24px",
    $titleTextLineheightm: "30px",
    $iconLineheightm: "20px",
    $iconFontsizem: "20px",
    $SelctionPaddingleft: "48px",
    $SelctionPaddingright: "48px",
    $titleTextFontsize: "32px",
    $listrteheight: "20px",
    $listrtepaddingbottom: "34.4667px",
    $listrtepaddingright: "25.85px",
    $benefitlistrtepaddingright:"0px",
    $benefitlistrteWhitepaddingBottom:"25.85px",
    $listrtepaddingright: "25.85px",
    $benefitlistrteWhitepaddingBottom:"25.85px",

    //Hero Carousel     
    $sliderContent_bg: "rgb(66, 20, 95)",
    $sliderContentCta_bg: "rgb(52, 162, 178)",

    $font_family_bold: '"rnhousesansbold",sans-serif',
    $font_family_regular: '"rnhousesansregular",sans-serif',
    $primary_cta_font: '"rnhousesansbold"',

    //header
    $font_family_Header: '"rnhousesansbold",sans-serif',
    $font_family_headline: '"rnhousesansbold",sans-serif',
    $font_family_SearchInput: '"rnhousesansregular",sans-serif',
    $font_family_titlecomp: '"rnhousesansbold",sans-serif',
    $title_fontfamily: '"rnhousesansbold",sans-serif',

    //Hero-PDP
    $font_CTAbgProps: '"rnhousesansbold"',
    $heroCtaMFont: '"rnhousesansregular"',
    $transparent_bg: "rgb(0, 0, 0)",
    $heroheadColor: "rgb(173, 25, 130)",
    $herosignpostColor: "rgb(66, 20, 95)",
    $CTA_bg_color: "rgb(52, 162, 178)",
    $CtaMtextColor: "rgb(173, 25, 130)",
    $ctaPdpMouseDownColor: "rgb(66, 20, 95)",
    $ctaPdpMouseDownBg: "rgb(255, 191, 71)",
    $ctaHeroMPdpHover: "rgb(66, 20, 95)",
    $ctaPdpmMouseDownColor: "rgb(66, 20, 95)",
    $footlineRteColor: "rgb(66, 20, 95)",
    $footlineRtepColor: "rgb(66, 20, 95)",
    $heroSeparatorBg: "rgb(52, 173, 178)",
    $ctaHeroPdpHover: "rgb(48, 144, 158)",
    $comprichPColor: "rgb(66, 20, 95)",
    //Mobile
    $transparent_bgMobile: "rgb(236, 234, 230)",

    //Carousel
    $sliderRteH3FontFamily: '"rnhousesansregular",sans-serif',
    $sliderCta_m_afontfamily: '"rnhousesansregular",sans-serif',
    $rteUlLiColor: "rgb(66, 20, 95)",
    $sliderRteH3Color: "rgb(66, 20, 95)",
    $sliderRtePColor: "rgb(109, 109, 109)",
    $sliderCta_m_aColor: "rgb(12, 127, 136)",
    $ctaHoverColor: "rgb(8, 105, 120)",
    $ctaMouseDownColor: "rgb(66, 20, 95)",
    $flexNavLiAnchorBg: "rgb(232, 232, 232)",
    $flexNavLiAnchorActiveBg: "rgb(12, 127, 136)",
    $ctaMouseDownBg: "rgb(255, 191, 71)",

    //FAQ Desktop
    $faq_head_font: '"rnhousesansbold"',
    $faq_oddColsLink_ff: '"rnhousesansbold",sans-serif',
    $faq_font_ff_boldReg: '"rnhousesansregular",sans-serif',
    $faq_brand_bg: "rgb(66, 20, 95)",
    $faq_gray_bg: "rgb(223, 217, 209)",
    $faq_white_bg: "rgb(247, 247, 245)",
    $faq_head_colr: "rgb(255, 255, 255)",
    $b_faq_sear_btn_bg: "rgb(0, 168, 180)",
    $faq_sear_btn_bg: "rgb(52, 162, 178)",
    $gry_faq_head_colr: "rgb(66, 20, 95)",
    $faq_brand_odd_cols: "rgb(66, 20, 95)",
    $faq_gray_odd_cols: "rgb(255, 255, 255)",
    $faq_gray_even_cols: "rgb(66, 20, 95)",
    $faq_brandOlnksFocus_color: "rgb(66, 20, 95)",
    $faq_brandOlnksFoc_bg_colr: "rgb(255, 191, 71)",
    $faq_fqSerInpt_color: "rgb(113, 106, 99)",
    $faq_fqSerInpt_colr: "rgb(113, 106, 99)",
    $faq_white_fqSerInpt_color: "rgb(113, 106, 99)",
    $faq_white_head_colr: "rgb(66, 20, 95)",
    $faq_grayO_fs_colr: "rgb(66, 20, 95)",
    $faq_white_odd_cols: "rgb(255, 255, 255)",
    $faq_white_odd_cols_arr: "rgb(255, 255, 255)",
    $faq_white_even_cols: "rgb(66, 20, 95)",
    $faq_brandElnksFocus_color: "rgb(66, 20, 95)",
    $faq_gray_odd_cols_arr: "rgb(255, 255, 255)",
    $faq_gray_even_cols_arr: "rgb(66, 20, 95)",
    $faq_grayE_fs_colr: "rgb(66, 20, 95)",
    $faq_brand_odd_cols_arr: "rgb(66, 20, 95)",
    $faq_head_brand_colr: "rgb(255, 255, 255)",
    $faq_brand_Even_cols: "rgb(66, 20, 95)",
    $faq_white_even_cols_arr: "rgb(66, 20, 95)",
    $faq_Even_odd_cols_arr: "rgb(10, 47, 100)",
    $faq_fqSerInpt_brand_colr: "rgb(153, 153, 153)",

    // Mobile faq
    $faq_head_font_m: '"rnhousesansregular",sans-serif',
    $b_faq_sear_btn_bg_m: "rgb(238, 237, 233)",
    $b_faq_sear_btn_color_m: "rgb(66, 20, 95)",
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
    $dynamicclock_font_family_bold: "rnhousesansbold,sans-serif",
    $dynamicclock_font_family_regular: "rnhousesansregular,sans-serif",
    $dynamicclock_primary_cta_font: "rnhousesansbold",
    $dynamicShelfBgColor: "rgb(66, 20, 95)",
    $flipTimerColor: "rgb(66, 20, 95)",
    $dynamicCtaHoverBg: "rgb(48, 144, 158)",
    $dynamicCtaMouseDownColor: "rgb(66, 20, 95)",
    $dynClockText: "rgb(255, 255, 255)",
    $dynamicclockCta_LBg: "rgb(52, 162, 178)",
    $dynamicCtaMouseDownBg: "rgb(255, 191, 71)",
    $flipTimerDigitTopBg: "rgb(223, 217, 209)",

    //Next Step Shelf
    $nextStep_font_family_bold: "rnhousesansbold,sans-serif",
    $nextStepBlueThemeBg: "rgb(66, 20, 95)",
    $nextStepWhiteThemeBg: 'rgb(247, 247, 245)',
    $nextStepsCtaIconsHover: "rgb(174, 171, 208)",
    $nextStepsCtaIconsFocusColor: "rgb(66, 20, 95)",
    $nextStepCta_LTextShadow: "rgb(19, 104, 126) 1px 1px 1px",
    $NSctaMouseDownColor: "rgb(66, 20, 95)",
    $NSctaMouseDownBorderTop: "0px none rgb(66, 20, 95)",
    $nextStepWhiteThemeColor: "rgb(66, 20, 95)",
    $headLineWhiteColor: "rgb(66, 20, 95)",
    $nextStepsCtaIconsaWhiteColor: "rgb(66, 20, 95)",
    $nextStepsCtaIconsHoverWhite: "rgb(6, 124, 208)",
    $nextStepsCtaIconsFocusWhiteColor: "rgb(66, 20, 95)",
    $nextStepsCtaIconsLiBg: "rgb(66, 20, 95)",
    $nextStepsCtaIconsLiBorder: "1px solid rgb(57, 58, 100)",
    $ctaMouseDown_mColor: "rgb(66, 20, 95)",
    $nextStepCta_LBg: "rgb(52, 162, 178)",
    $nextStepCta_LBorderTop: "1px solid rgb(67, 201, 210)",
    $nextStepCta_LBoxShadow: "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepCtaHover: "rgb(48, 144, 158)",
    $nextStepCtaBoxShadow: "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepctaMouseDownBg: "rgb(255, 191, 71)",
    $nextStepctaMouseDownBox: "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
    $nextStepCtaHover_m: "rgb(255, 255, 255)",

     //accordion
     $accCtaFocus: "rgb(255, 191, 71)",
     $canvas_bg_color: "rgb(247, 247, 245)",
     $acc_bg_color: "rgb(247, 247, 245)",
     $accoutclr : "rgb(255, 191, 71)",
     $accrteclr:"rgb(66, 20, 95)", 
     $accLast_bg_color :"rgb(247, 247, 245)",
     $accrte_tabclr : "rgb(12, 10, 19)",
     $accrte_linkclr : "rgb(255, 255, 255)",
     $font_family_title: '"rnhousesansbold",sans-serif',

     //accordion-composite
    $accCompTit_ff : '"rnhousesansbold",sans-serif',
    $accCompLinkclr : "rgb(173, 25, 130)",
    $accComp_bgclr : "rgb(223, 224, 240)",
    $accComp_rteclr :"rgb(66, 20, 95)",
    $accComp_ctasclr :"rgb(173, 25, 130)",
    $accComp_ctapbgclr : "rgb(52, 162, 178)",
    $accComp_ctaphover : "rgb(48, 144, 158)",
    $accComp_ctapfocus: "rgb(255, 191, 71)",
    $accCompBlk_clr :"rgb(10, 47, 100)",
    $acccComp_bgclr : "rgb(0, 0, 0)",
    $accComp_ctapclr : "rgb(66, 20, 95)",
    $accComp_primary_1 :"rgb(66, 20, 95)",
    $accComp_bgclrxs : "rgb(207, 199, 190)",
    //Contact Details    
    $headline_font_family: '"rnhousesansbold",sans-serif',
    $linkOnFocus_outline: "rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg: "rgb(66, 20, 95)",
    $cd_themeblue_shelf_clr: "rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m: "rgb(66, 20, 95) none repeat scroll 0% 0% / auto padding-box border-box",
    $headline_font_family_m: '"rnhousesansbold",sans-serif',

    //Currency Calculator
    $currencyCalColor:"rgb(66, 20, 95)",
    $switchBtnBg:"rgb(173, 25, 130)",
    $switchBtnBoxShadow:"rgb(140, 25, 57) 0px 3px 0px 0px, rgb(250, 123, 213) 0px 1px 0px 0px inset",
    $backBtnColor:"rgb(173, 25, 130)",
    $ccCtaLBg:"rgb(52, 162, 178)",
    $ccCtaLBgMobile:"rgb(52, 162, 178)",
    $ccCtaLHover:"rgb(48, 144, 158)",
    $ccWrapperBg: "rgb(223, 217, 209)",
    $ccSelectWrapperBg: "rgb(238, 237, 233)",
    $ccGoButtonColor: "rgb(180, 169, 159)",
    $ccGoButtonActiveColor: "rgb(52, 162, 178)",
    $ccGrey: "rgb(102, 102, 102)",

     //List component 
    
     $shelf_background_color:"rgb(66, 20, 95)",
     $listItemcount_background_color:"rgb(66, 20, 95)",
     $listItemtitle_color:"rgb(66, 20, 95)",
     $listAnchorElem_color  :"rgb(173, 25, 130)",
     $listItemBackgroundColor :"rgb(243, 241, 239)",
     $listDescriptionColor:"rgb(51, 51, 51)",
     $listRichTextColor:"rgb(66, 20, 95)",
     $listAnchorElem_font:"rnhousesansregular",
     $listView4AnchorElem_color:"rgb(173, 25, 130)",  
     $listView3RetValBGcol:"rgb(0, 0, 0)",
     $listView3RetNameCol:"rgb(66, 20, 95)",
     $listView3RetDescFontFamily:"tahoma, arial, helvetica, sans-serif",
     $listView3RetailValFontFamily:"verdana",
     $listView4ListItemBGcolor:"rgb(238, 237, 233)",

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
    $blogShelfWhiteBackgroundColor:"rgb(247, 247, 245)",
    $blogShelfWhiteColor:"rgb(66, 20, 95)",
    $blogShelfBlueBackgroundColor:"rgb(66, 20, 95)",
    $blogShelfBlueColor:"rgb(255, 255, 255)",
    $blogShelfLightBlueBackgroundColor:"rgb(223, 217, 209)",
    $blogShelfLightBlueColor:"rgb(66, 20, 95)",
    $lightBlueBlogLeftContentStrongColor:"rgb(66, 20, 95)",
    $lightBlueBlogLeftContentParaColor:"rgb(51, 51, 51)",
    $lightBlueBlogLeftContentBlockQuoteColor:"rgb(66, 20, 95)",
    $lightBlueBlogLeftContentHeadingColor:"rgb(66, 20, 95)",
    $lightBlueBlogLeftContentListColor:"rgb(66, 20, 95)",
    $lightBlueBlogLeftFooterColor:"rgb(66, 20, 95)",
    $blueBlogLeftContentStrongColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentParaColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentBlockQuoteColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentHeadingColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentListColor:"rgb(255, 255, 255)",
    $blueBlogLeftFooterColor:"rgb(255, 255, 255)",
    $whiteBlogLeftContentStrongColor:"rgb(66, 20, 95)",
    $whiteBlogLeftContentParaColor:"rgb(51, 51, 51)",
    $whiteBlogLeftContentBlockQuoteColor:"rgb(66, 20, 95)",
    $whiteBlogLeftContentHeadingColor:"rgb(66, 20, 95)",
    $whiteBlogLeftContentListColor:"rgb(66, 20, 95)",
    $whiteBlogLeftFooterColor:"rgb(66, 20, 95)",
    $whiteBlogRightContentSubTextColor:"rgb(102, 102, 102)",
    $blueBlogRightContentSubTextColor: "rgb(255, 255, 255)",
    $lightBlueBlogRightContentSubTextColor: "rgb(102, 102, 102)",
   $WhiteBlogRightContentSubTextColor_m:"rgb(51, 51, 51)",
   $BlueBlogRightContentSubTextColor_m:"rgb(255, 255, 255)",
   $LightBlueBlogRightContentSubTextColor_m:"rgb(51, 51, 51)",    
      $whiteBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',
   $blueBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',
   $lightBlueBlogLeftContentHeadingFontFamily:'"rnhousesansbold",sans-serif',

   



    //Notification Shelf

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
    $ns_Text_font_family:'"rnhousesansregular",sans-serif',
    $ns_header_headline_txt_font_family: '"rnhousesansbold",sans-serif',
    $ns_notification_Shelf_font_family: '"rnhousesansregular",sans-serif',
    $ns_notification_Shelf_font_family_M: '"rnhousesansregular",sans-serif',







    //blog author component 

    $blogauthor_headertile_ele_fontfamily: "rnhousesansbold, sans-serif",
    $blogauthor_headertile_ele_fontfamily_mob: "rnhousesansbold, sans-serif",
    $blogauthor_shelfBGcolor: "rgb(240, 240, 240)",
    $blogauthor_headertile_color: "rgb(10, 47, 100)",
    $blogauthor_headertile_ele_color: "rgb(10, 47, 100)",
    $blogauthor_nameandtilte_color: "rgb(10, 47, 100)",

 //Text Image Component

 $lightBlueFF: "verdana",
 $blueFF:"verdana",
 $offWhiteFF:"verdana",
 $txtImgHeadFF:"rnhousesansbold, sans-serif",

    //Video Component
    $videoPlayColor:"rgba(66, 20, 95, 1)",
    $videoParaColor:"rgba(66, 20, 95, 1)",
    $videoTranscriptColor:"rgba(66, 20, 95, 1)",
    $videoHeadingColor:"rgba(66, 20, 95, 1)",




























    // Hero shelf 

    $heroshelf1mob_section_bgcolor:"rgb(236, 234, 230)",
    $heroshelf1_header_color: "rgb(173, 25, 130)",
    $heroshelf1_button_color:"rgb(52, 162, 178)",
    $hsbottomtext:"rgb(51, 51, 51)",
    $box_bgcolor:"rgb(0, 0, 0, 0)",
    $hs11_bottomblock_color:"rgb(0, 45, 100)",
    $logmessage_color:"rgb(10, 47, 100)",
    $whitebox_border:"1px solid rgb(223, 217, 209)",
    $font_regular:"rnhousesansregular",
    $hs11_font_regular:"rnhousesans-regular, sans-serif",
    $box_border:"1px solid rgb(66, 20, 95)",


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

    //Agreement in Principle Tool
    $checkBoxHeadColor:"rgb(66, 20, 95)",
    $bannerContentColor:"rgb(66, 20, 95)",
    $nextButtonColor:"rgb(66, 20, 95)",
    $closeButtonBackgroundColor:"rgba(173, 25, 130)",
    $anchorLinkColor:"rgba(173, 25, 130)",
    $dropDownHeadColor:"rgb(66, 20, 95)",
    $dropDownBtnColor:"rgba(255, 255, 255)",
    $dropDownClsBtnColor:"rgb(66, 20, 95)",
    $dropDownBtnBgColor:"rgba(173, 25, 130)",















    // Mopc 

    $inputlabel_color: "rgb(66, 20, 95)",
    $inputtextbox_bgc: "rgb(255, 255, 255)",
    $inputtextbox_bgc_mob: "rgb(223, 224, 240)",
    $inputtextbox_outline: "rgb(255, 191, 71) solid 3px",
    $Toggletextborder: "1px solid rgb(204, 203, 212)",
    $togglebtn_bgclr: "rgb(180, 169, 159)",
    $togglebtn_bgclr_un: "rgb(238, 237, 233)",
    $transperent_bg: "rgb(0, 0, 0, 0)",
    $repaymentres_bdr_top: "1px solid rgb(204, 203, 212)",
    $repaymentres_bdr_btm: "1px solid rgb(204, 203, 212)",
    $calculate_btn_bg:"rgb(0, 168, 180)",
    $font_bold : "rnhousesansbold",







});

module.exports = {
    props: ff_nwp
}



