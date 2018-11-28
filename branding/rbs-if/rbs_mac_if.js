var mac_rbsif_props=require('./rbs_if.js');

var mac_rbsif = Object.assign({}, mac_rbsif_props.props, {
    $primary_1:"rgb(10, 47, 100)",
    $primary_2 : "rgb(255, 255, 255)",
    $shelf_bg_color_1: "rgb(247, 247, 245)",
    $shelf_bg_color_2: "rgb(223, 217, 209)",
    $linkColor: "rgb(255, 255, 255)",
    $linkColor_1: "rgb(3, 96, 137)",
    $whiteSmoke : "rgb(245, 245, 245)",
    $whiteSmoke_1 : "rgb(255, 255, 255)",
    $bg_color_1: "rgb(47, 78, 123)",
    $grey: "rgb(109, 110, 113)",

    //header
    $headerBgInactive:"rgb(0, 0, 0) -webkit-linear-gradient(left, rgb(10, 47, 100) 0px, rgb(10, 47, 100) 100%) repeat scroll 0% 0% / auto padding-box border-box",
    $loginBg: "rgb(0, 126, 166)",
    $l1_mainNav_border: "rgb(29, 63, 112)",
    $l3_sectionHead_bg: "rgb(10, 47, 100)",
    $sectionHead_border: "rgb(120, 132, 156)",
    $headerHoverBg: "rgb(15, 65, 125)",
    $headerLiMouseDown: "rgb(255, 191, 71)",
    $searchInputbg: "rgb(47, 78, 123)",
    $searchIconbg: "rgb(255, 255, 255)",
    $mainNav_bg_mobile: "rgb(0, 59, 121)",
    $searchText_color: "rgb(10, 47, 100)",
    $mainNav_Icon_border: "rgb(31, 64, 110)",
    $searchInputClick_bg: "rgb(255, 191, 71)",
    $l1_inactive_bgColor:"rgb(10, 47, 100)",
    $mnav_active_color:"rgb(10, 47, 100)",
    $links_color: "rgb(255, 255, 255)", 
    $l2_linkBack_border: "rgb(186, 186, 186)",
    $l2_linkBack_bg:"rgb(238, 237, 233)",  
    $section_heading_border: "rgb(60, 107, 159)",
    $l3_links_border: "rgb(60, 107, 159)",
    $signIn_bg: "rgb(0, 126, 166)",
    $sectionHead_color: "rgb(120, 132, 156, 113)",
    $linkBack_color:"rgb(10, 47, 100)",
    $searchInputbg_mob: "rgb(255, 255, 255)",

    $headerBgActive: "rgb(0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box",
    $activeHeaderBorder: "1px solid rgb(255, 255, 255)",
    $activeHeaderBg: "rgb(255, 255, 255)",
    $activeHeaderColor: "rgb(66, 20, 95)",
    $headerInActiveColor: "rgb(255, 255, 255)",
    $headerFocus: "rgb(10, 47, 100)",
    $headermnavbg: "rgb(10, 47, 100)",
    $snavListItem: "rgb(255, 255, 255)",
    $mnavHover: "rgb(180, 169, 159)",
    $mnavliColor: "rgb(10, 47, 100)",
    $ctaTitleColor: "rgb(0, 126, 166)",
    $cta_mGrey: "rgb(109, 110, 113)",
    $cta_mGreen: "rgb(0, 126, 166)",
    $SearchInputColor:"rgb(159, 167, 180)",
    $headerBgColor:"rgb(10, 47, 100)",
    $expandedNavInActiveColor:"rgb(255, 255, 255)",
    $expandedNavActiveBG:"rgb(245, 245, 245)",
    $SearchBoxFocus:"rgb(10, 47, 100)",
    $SearchBoxFocusBG:"rgb(255, 191, 71)",
    $SearchBtnColor:"rgb(47, 78, 123)",

    //Single Teaser Article
    $themeWhiteShelfBg: "rgb(247, 247, 245)",
    $themeWhiteShelfColor: "rgb(10, 47, 100)",
    $themeLightBlueColor: "rgb(10, 47, 100)",
    $themeLightBlueBg: "rgb(247, 247, 245)",
    $themeBlueShelfBg: "rgb(223, 217, 209)",
    $themeBlueShelfColor: "rgb(10, 47, 100)",
    $themeBlueMobileBg: "rgb(223, 217, 209)",
    $ctaSarticleColor:"rgb(43, 149, 216)",
    $themeBlueMobile: "rgb(66, 20, 95)",
    $ctaSarticleMouseDown: "rgb(10, 47, 100)",
    $ctaSarticleHover:"rgb(10, 47, 100)",
    $titlecompColor:"rgb(10, 47, 100)",
    $rteBodyCustColor:"rgb(10, 47, 100)",
    $ctaSarticleMouseDownBg:"rgb(255, 191, 71)",

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

     //accordion-composite
   $accCompLinkclr : "rgb(43, 149, 216)",
   $accComp_bgclr : "rgb(240, 247, 250)",
   $canvas_bg_color : "rgb(247, 247, 245)",
   $accComp_rteclr :"rgb(10, 47, 100)",
   $accComp_ctasclr :"rgb(43, 149, 216)",
   $accComp_ctapbgclr : "rgb(52, 162, 178)",
   $accComp_ctapclr : "rgb(10, 47, 100)",
   $accComp_primary_1 : "rgb(10, 47, 100)",
   $accComp_ctaphover : "rgb(48, 144, 158)",
   $accComp_ctapfocus: "rgb(255, 191, 71)",
    $accCompBlk_clr :"rgb(10, 47, 100)",
    $acccComp_bgclr : "rgb(0, 0, 0)",
    $accComp_bgclrxs : "rgb(207, 199, 190)",

    //benefit-list props
    $benefitlisttitleColor:"rgb(10, 47, 100)",
    $benefitlistColor:"rgb(10, 47, 100)",

    //Hero-PDP
    $transparent_bg:"rgb(0, 0, 0)",
    $heroheadColor:"rgb(43, 149, 216)",
    $herosignpostColor:"rgb(10, 47, 100)",
    $CTA_bg_color:"rgb(52, 162, 178)",    
    $CtaMtextColor:"rgb(43, 149, 216)",  
    $ctaPdpMouseDownColor:"rgb(10, 47, 100)", 
    $ctaPdpMouseDownBg:"rgb(255, 191, 71)",
    $ctaHeroMPdpHover:"rgb(10, 47, 100)",
    $ctaPdpmMouseDownColor:"rgb(10, 47, 100)",
    $footlineRteColor:"rgb(10, 47, 100)",
    $footlineRtepColor:"rgb(10, 47, 100)",
    $heroSeparatorBg:"rgb(43, 149, 216)",
    $ctaHeroPdpHover:"rgb(48, 144, 158)",
    $comprichPColor:"rgb(10, 47, 100)",

    //Mobile
    $transparent_bgMobile:"rgb(236, 234, 230)",
    
    //Hero Carousel     
    $sliderContent_bg:"rgb(10, 47, 100)",
    $sliderContentCta_bg:"rgb(52, 162, 178)",
 
    //Carousel
    $rteUlLiColor:"rgb(10, 47, 100)",
    $rteUlLiPadding:"0px 0px 0px 9.632px",
    $rteUlLiMargin: "5px 0px",
    $sliderRteH3Color:"rgb(11, 33, 81)",
    $sliderRtePColor:"rgb(102, 102, 102)",
    $sliderCta_m_aColor:"rgb(0, 126, 166)",
    $ctaHoverColor:"rgb(3, 96, 137)",
    $ctaMouseDownColor:"rgb(10, 47, 100)",
    $flexNavLiAnchorBg:"rgb(186, 186, 186)",
    $flexNavLiAnchorActiveBg:"rgb(0, 126, 166)",
    $ctaMouseDownBg:"rgb(255, 191, 71)",
    
    //FAQ Desktop
    $faq_brand_bg:"rgb(10, 47, 100)",
    $faq_gray_bg:"rgb(223, 217, 209)",
    $faq_white_bg:"rgb(247, 247, 245)",
    $faq_head_colr:"rgb(255, 255, 255)",
    $b_faq_sear_btn_bg:"rgb(0, 168, 180)",
    $faq_sear_btn_bg:"rgb(52, 162, 178)",
    $gry_faq_head_colr:"rgb(10, 47, 100)",
    $faq_brand_odd_cols:"rgb(10, 47, 100)",
    $faq_gray_odd_cols:"rgb(255, 255, 255)",
    $faq_gray_even_cols:"rgb(10, 47, 100)",
    $faq_oddCols_padding:"16px 3px 25px 20px",
    $faq_brandOlnksFocus_color:"rgb(10, 47, 100)",
    $faq_brandOlnksFoc_bg_colr:"rgb(255, 191, 71)",
    $faq_fqSerInpt_color: "rgb(153, 153, 153)",
    $faq_fqSerInpt_colr:"rgb(153, 153, 153)",
    $faq_white_fqSerInpt_color:"rgb(153, 153, 153)",
    $faq_white_head_colr:"rgb(10, 47, 100)",
    $faq_grayO_fs_colr:"rgb(10, 47, 100)",
    $faq_white_odd_cols:"rgb(255, 255, 255)",
    $faq_white_odd_cols_arr:"rgb(255, 255, 255)",
    $faq_white_even_cols:"rgb(10, 47, 100)",
    $faq_brandElnksFocus_color:"rgb(10, 47, 100)",
    $faq_gray_odd_cols_arr:"rgb(255, 255, 255)",
    $faq_gray_even_cols_arr:"rgb(10, 47, 100)",
    $faq_grayE_fs_colr:"rgb(10, 47, 100)",
    $faq_brand_odd_cols_arr:"rgb(10, 47, 100)",
    $faq_head_brand_colr:"rgb(255, 255, 255)",
    $faq_brand_Even_cols:"rgb(10, 47, 100)",
    $faq_white_even_cols_arr:"rgb(10, 47, 100)",
    $faq_Even_odd_cols_arr:"rgb(10, 47, 100)",
    $faq_fqSerInpt_brand_colr:"rgb(153, 153, 153)",

    // Mobile faq
    $b_faq_sear_btn_bg_m:"rgb(238, 237, 233)",
    $b_faq_sear_btn_color_m:"rgb(10, 47, 100)",
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
    $dynamicShelfBgColor:"rgb(10, 47, 100)",
    $flipTimerColor:"rgb(10, 47, 100)",
    $dynamicCtaHoverBg:"rgb(48, 144, 158)",
    $dynamicCtaMouseDownColor:"rgb(10, 47, 100)",
    $dynClockText:"rgb(255, 255, 255)",
    $dynamicclockCta_LBg:"rgb(52, 162, 178)",
    $dynamicCtaMouseDownBg:"rgb(255, 191, 71)",
    $flipTimerDigitTopBg:"rgb(223, 217, 209)",

    //Next Step Shelf
    $nextStepBlueThemeBg:"rgb(10, 47, 100)",
    $nextStepWhiteThemeBg:'rgb(247, 247, 245)',
    $nextStepLightBlueThemeBg: "rgb(223, 217, 209)",
    $nextStepsCtaIconsHover:"rgb(0, 117, 162)",
    $nextStepsCtaIconsFocusColor:"rgb(10, 47, 100)",
    $nextStepCta_LTextShadow:"rgb(54, 12, 81) 1px 1px 1px",
    $NSctaMouseDownColor:"rgb(10, 47, 100)",
    $NSctaMouseDownBorderTop:"0px none rgb(10, 47, 100)",
    $nextStepWhiteThemeColor:"rgb(10, 47, 100)",
    $headLineWhiteColor:"rgb(10, 47, 100)",
    $nextStepsCtaIconsaWhiteColor:"rgb(10, 47, 100)",
    $nextStepsCtaIconsHoverWhite:"rgb(0, 117, 162)",
    $nextStepsCtaIconsFocusWhiteColor:"rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBg:"rgb(10, 47, 100)",
    $nextStepsCtaIconsLiBorder:"1px solid rgb(43, 75, 111)",
    $ctaMouseDown_mColor:"rgb(10, 47, 100)",
    $nextStepCta_LBg:"rgb(52, 162, 178)",
    $nextStepCta_LBorderTop:"1px solid rgb(67, 201, 210)",
    $nextStepCta_LBoxShadow:"rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepCtaHover:"rgb(48, 144, 158)",
    $nextStepCtaBoxShadow:"rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
    $nextStepctaMouseDownBg:"rgb(255, 191, 71)", 
    $nextStepctaMouseDownBox: "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
    $nextStepsCtaIconsa_mMargin:"0px 0px 0px 44.6875px",
    $nextStepCtaHover_m:"rgb(255, 255, 255)",
    $rteClrOther:"rgb(10, 47, 100)",
    $rteCtaClrBlue:"rgb(255, 255, 255)",
    $ctaLinkOther:"rgb(43, 149, 216)",
    $ctaLinkBlueHov:"rgb(0, 117, 162)",
    $ctaLinkOtherHov:"rgb(10, 47, 100)",
    $nextStepCtaFocusBg:"rgb(255, 191, 71)",
    $ctaIconPadd:"0px 24px 0px 0px",
    
    //Contact Details
    $linkOnFocus_outline:"rgb(255, 191, 71) solid 3px",
    $cd_themeblue_shelf_bg:"rgb(10, 47, 100)",
    $cd_themeblue_shelf_clr:"rgb(255, 255, 255)",
    $cd_themeblue_shelf_bg_m:"rgb(10, 47, 100) none repeat scroll 0% 0% / auto padding-box border-box",  
    
     //blog header
     $heading_color : 'rgb(43, 149, 216)',
     $heading_color_bluetheme : 'rgb(255, 255, 255)',
     $author_date : 'rgb(102, 102, 102)',
     $seperatorLine : 'rgb(43, 149, 216)',
     $heading_margin : "26px 0px 11px",
     $date_lineheight : "14px",

    //Blog Component
    $blogShelfWhiteBackgroundColor:"rgb(247, 247, 245)",
    $blogShelfWhiteColor:"rgb(10, 47, 100)",
    $blogShelfBlueBackgroundColor:"rgb(10, 47, 100)",
    $blogShelfBlueColor:"rgb(255, 255, 255)",
    $blogShelfLightBlueBackgroundColor:"rgb(223, 217, 209)",
    $blogShelfLightBlueColor:"rgb(10, 47, 100)",
    $lightBlueBlogLeftContentStrongColor:"rgb(10, 47, 100)",
    $lightBlueBlogLeftContentParaColor:"rgb(51, 51, 51)",
    $lightBlueBlogLeftContentBlockQuoteColor:"rgb(10, 47, 100)",
    $lightBlueBlogLeftContentHeadingColor:"rgb(10, 47, 100)",
    $lightBlueBlogLeftContentListColor:"rgb(10, 47, 100)",
    $lightBlueBlogLeftFooterColor:"rgb(10, 47, 100)",
    $blueBlogLeftContentStrongColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentParaColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentBlockQuoteColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentHeadingColor:"rgb(255, 255, 255)",
    $blueBlogLeftContentListColor:"rgb(255, 255, 255)",
    $blueBlogLeftFooterColor:"rgb(255, 255, 255)",
    $whiteBlogLeftContentStrongColor:"rgb(10, 47, 100)",
    $whiteBlogLeftContentParaColor:"rgb(51, 51, 51)",
    $whiteBlogLeftContentBlockQuoteColor:"rgb(10, 47, 100)",
    $whiteBlogLeftContentHeadingColor:"rgb(10, 47, 100)",
    $whiteBlogLeftContentListColor:"rgb(10, 47, 100)",
    $whiteBlogLeftFooterColor:"rgb(10, 47, 100)",
    $whiteBlogRightContentSubTextColor:"rgb(102, 102, 102)",
    $blueBlogRightContentSubTextColor: "rgb(255, 255, 255)",
    $lightBlueBlogRightContentSubTextColor: "rgb(102, 102, 102)",
   $WhiteBlogRightContentSubTextColor_m:"rgb(51, 51, 51)",
   $BlueBlogRightContentSubTextColor_m:"rgb(255, 255, 255)",
   $LightBlueBlogRightContentSubTextColor_m:"rgb(51, 51, 51)",    
   $blogVideoContainerPlayButtonColor:"rgb(10, 47, 100)",

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


      // blog author component 

      $blogauthor_shelfBGcolor: "rgb(240, 240, 240, 1)",
      $blogauthor_headertile_color: "rgb(10, 47, 100, 1)",
      $blogauthor_headertile_ele_color: "rgb(10, 47, 100, 1)",
     
    //Video Component
    $videoPlayColor:"rgba(10, 47, 100, 1)",
    $videoParaColor:"rgba(10, 47, 100, 1)",
    $videoTranscriptColor:"rgba(10, 47, 100, 1)",
    $videoHeadingColor:"rgba(10, 47, 100, 1)",

        // Light-Box Properties
     
 $lb_brdrcolor1:"rgb(255, 0, 0)",
 $lb_anchorclr1: "rgb(43, 149, 216)",
 $lb_backgrndclr1:"rgb(52, 162, 178)",
 $lb_backgrndclr2:"rgb(0, 0, 0)",
 $lb_ctaFocusbackgrndclr:"rgb(255, 191, 71)",
 $lb_ctaHoverbackgrndclr:"rgb(48, 144, 158)",
 $lb_ctaHoverbrdrtopclr:"rgb(67, 201, 210)",
 $ctaMFocusColor:"rgb(10, 47, 100)",
 $lb_white_anchorclr1:"rgb(43, 149, 216)",
 $lb_anchorclr2: "rgb(43, 149, 216)",
 $lb_anchorclr2_m: "rgb(43, 149, 216)",
 $lb_tb_color_m:"rgb(66, 20, 95)",
 $lb_font_color1:"rgb(10, 47, 100)",
 $lb_cta_clr1:"rgb(255, 255, 255)",
 $lb_cta_m_hover_clr:"rgb(10, 47, 100)",

  //subnav
    $subnv_theme_white_clr:"rgb(10, 47, 100)",
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
    $subnv_rte_link_color:"rgb(43, 149, 216)",
    $subnv_3_bgclr2:"rgb(21, 79, 137)",
    $subnv5_bgclr2: "rgb(15, 63, 119)" ,
    $subnv5_bgclr3: "rgb(21, 79, 137)" ,
    $subnv5_bgclr4:"rgb(25, 95, 155)",
    $subnv6_bgclr2:"rgb(14, 61, 115)",
    $subnv6_bgclr3:"rgb(18, 73, 129)",
    $subnv6_bgclr4:"rgb(22, 86, 144)",
    $subnv6_bgclr5:"rgb(27, 99, 158)",
    $subnv2_chevron_bg_color:"rgb(0, 0, 0)",
    $subnv_2lastchild_bg_color: "rgb(21, 79, 137)",
    $subnv2_headingtext_color: "rgb(255, 255, 255)",
    $subnv_2child_bg_color: "rgb(10, 47, 100)",
    $subnv_3secondchild_bg_color:"rgb(21, 79, 137)",
    $subnv_3lastchild_bg_color:"rgb(31, 112, 174)",
    $subnv_3child_color:"rgb(255, 255, 255)",
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
    $subnv_6secondchild_bg_color:"rgb(14, 61, 115)",
    $subnv_6thirdchild_bg_color:"rgb(18, 73, 129)",
    $subnv_6fourthchild_bg_color:"rgb(22, 86, 144)",
    $subnv_6fifthchild_bg_color:"rgb(27, 99, 158)",
    $subnv_6lastchild_bg_color:"rgb(31, 112, 174)",
    $subnv_hover_bgclr_prop:"rgb(0, 0, 0)",
    $subnv_4child_bg_color:"rgb(10, 47, 100)",
    

    //subnav mobile
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
    props: mac_rbsif
}



 