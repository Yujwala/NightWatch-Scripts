module.exports = {
  elements : {  
    //Desktop Selectors
    headerBgColor:{
      selector:".header--global-nav div.gnav"
    },
    headerMargin:{
      selector:".header--global-nav div.gnav .gnav-content ul"
    },
    activeState:{
      selector:".header--global-nav div.gnav .gnav-content ul li.active"
    },
    activeStateAnchor:{
      selector:".header--global-nav div.gnav .gnav-content ul li.active a"
    },
    InActiveState:{
      selector:".header--global-nav div.gnav .gnav-content ul li:not(.active):not(.switch-ROI)"
    },
    InActiveStateAnchor:{
      selector:".header--global-nav div.gnav .gnav-content ul li:not(.active):not(.switch-ROI) a"
    },
    loginButton:{
      selector:".header--global-nav div.gnav .gnav-content .gnav-head-last .gnav-login-button"
    },
    loginBusiness:{
      selector:".gnav .gnav-head-last"
    },
    loginBusinessImg:{
      selector:".gnav .gnav-head-last a img"
    },
    headerHover:{
      selector:".header--global-nav div.gnav .gnav-content ul li:not(.switch-ROI) a"
    },
    headerHoverBg:{
      selector:".header--global-nav div.gnav .gnav-content ul li:not(.active):not(.switch-ROI) a"
    },
    headermnavbg:{
      selector:".header--global-nav div.mnav"
    },
    headermnav:{
      selector:".header--global-nav div.mnav .mnav-content"
    },
    logo:{
      selector:".header--global-nav div.mnav .mnav-content .logo"
    },
    logoLombard:{
      selector:".header--global-nav div.mnav .mnav-content .logo img"
    },
    SearchWrapper:{
      selector:".header--global-nav div.mnav .mnav-content .form-wrapper"
    },
    SearchInput:{
      selector:".header--global-nav div.mnav .mnav-content .form-wrapper input"
    },
    SearchBtnImg:{
      selector:".header--global-nav div.mnav .mnav-content .form-wrapper button img"
    },
    SearchInter:{
      selector:".mnav-content .fl-r .gnav-search-button"
    },
    SearchInterWrapper:{
      selector:".form-wrapper input.search-intermediary"
    },
    SearchInterButton:{
      selector:".mnav-content .form-wrapper button"
    },
    MnavSnav:{
      selector:".header--global-nav div.mnav .mnav-content .snav"
    },
    snavListItem:{
      selector:".header--global-nav div.mnav .mnav-content .snav .snav-li:not(:last-child) .snav-li-a"
    },
    snavliLastChild:{
      selector:".header--global-nav div.mnav .mnav-content .snav .snav-li:last-child .snav-li-a"
    },
    mnavliClick:{
      selector:" .snav-li .snav-li-a"
    },
    mnavHover:{
      selector:".header--global-nav div.mnav .mnav-content .snav .snav-li .snav-li-a:focus"
    },
    mnavContent:{
      selector:".expanded-nav--bottom-shadow"
    },
    expandedNavActive:{
      selector:".expanded-nav li .active"
    },
    expandedNavInActive:{
      selector:".expanded-nav li .left-nav:not(.active)"
    },
    expandedRightNav:{
      selector:".expanded-nav li .right-nav"
    },
    expandedRightNavVisible:{
      selector:".header--global-nav .expanded-nav  .global-nav__subnav div.right-nav[style*='display: block;']"
    },
    rightNavSignPost:{
      selector:".right-nav .header-group__sign-post"
    },
    headline:{
      selector:".right-nav .header-group__headline"
    },
    ctaTitlePadding:{
      selector:".cta.cta--m.title-main"
    },
    ctaTitle:{
      selector:".cta.cta--m.title-main>a"
    },
    cta_mGrey:{
      selector:".desk--one-third .cta--m:not(.none):not(.document-doc):not(.tool-icon):not(.cta--mapp-l)"
    },
    cta_mGreen:{
      selector:".detail-links .none"
    },
    cta_mGreenlinks:{
      selector:".detail-links .none a"
    },
    gridPadding:{
      selector:".grid .detail-links"
    },
    ctamGreyMargin:{
      selector:".header--global-nav .expanded-nav li .right-nav .detail-links li:first-child"
    },
    ctamGreenMargin:{
      selector:".header--global-nav .expanded-nav li .right-nav .detail-links li:not(:first-child)"
    },
    hreflink:{
      selector:"a.letter,.snav-li-a,.left-nav,.desk--one-third.detail-links ul li .cta.cta--m a"
    },
    swithROI:{
      selector:".switch-ROI"
    },
    swithROIa:{
      selector:".switch-ROI a"
    },
    whiteLogo:{
      selector:".header--spoke--desktop .header__logo img"
    },
    whiteLogoProps:{
      selector:".header--spoke--desktop .header__logo"
    },

    //Mobile Selectors
    headerBackground : {
      selector:".header--mobile .header__links"
    },
    headerNavIcon : {
      selector:".header--mobile .header__links .menu-trigger a.link--menu"
    },
    headerLogo : {
      selector : '.header--mobile .header__links .logo-img'
    },
    headerSignIn : {
      selector : '.header--mobile .header__links .secure-sign-in a'
    },
    headerNavClick : {
      selector : '.header--mobile .header__links .link--menu:focus, .header--mobile .header__links .link--menu:active'
    },
    searchBar : {
      selector : '.header--mobile .header__nav .search-form .search'
    },
    searchText : {
      selector : '.header--mobile .header__nav .search-form input.search-term'
    },
    searchIcon : {
      selector : '.header--mobile .header__nav .search-form .submit-wrap .submit'
    },
    l1Padding : {
      selector : '.header--mobile .header__mnav'
    },
    l1Heading : {
      selector : '.header--mobile .header__mnav h2.nav-heading2'
    },
    l1MNav : {
      selector : '.header--mobile .header__mnav ul.header__mnav__navigation'
    },
    l1MNavList : {
      selector : '.nav-sup .header__mnav ul.header__mnav__navigation li'
    },
    l1MNavAnchor : {
      selector : '.header--mobile .header__mnav ul.header__mnav__navigation li a:not(.active)'
    },
    l1MNavAnchorActive : {
      selector : '.header--mobile .header__mnav ul.header__mnav__navigation li a.active'
    },
    l2Padding : {
      selector : '.header--mobile .header__snav>li>a'
    },
    l3SectionHead : {
      selector : '.header--mobile .header__snav .header__snav__second-level h3.section-heading'
    },
    l3Links : {
      selector : '.header--mobile .header__snav .header__snav__second-level ul li a:not(.link--back ):not(.link--lead):not(:last-child)'
    },
    l3LinksIcon : {
      selector : '.header--mobile .header__snav .header__snav__second-level ul li a:not(.link--back ):not(.link--lead):not(:last-child) .link--next'
    },
    l3Links_nwb : {
      selector : '.header--mobile .header__snav .header__snav__second-level ul li a:not(.link--back ):not(.link--lead)'
    },
    l3LinksIcon_nwb : {
      selector : '.header--mobile .header__snav .header__snav__second-level ul li a:not(.link--back ):not(.link--lead) .link--next'
    },
    l2LinkBack : {
      selector : '.header--mobile .header__snav .header__snav__second-level li a.link--back'
    },
    l4LeadLinks : {
      selector : '.header--mobile .header__snav .header__snav__second-level ul li a.link--lead'
    },
    l4LeadLinksIcon : {
      selector : '.header--mobile .header__snav .header__snav__second-level .header__snav__third-level li .link--lead .link--next'
    },
    l4Links : {
      selector : '.header--mobile .header__snav .header__snav__second-level .header__snav__third-level>li:not(:last-child) .secondlevel_subchilds:not(:last-child) a'
    },
    l4LinksIcon : {
      selector : '.header--mobile .header__snav .header__snav__second-level .header__snav__third-level .secondlevel_subchilds a .link--next'
    },
    searchInput : {
      selector : '.header--mobile .header__nav .search-form input.search-term'
    }
    
  }    
};


