//Desktop
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {

    headerBgColor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$headerBgColor,
               "height" : "40px",
               "text-align" : "center",
            };
        return shelfProps;
    },

    headerMargin: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-right" : property.$headerMargin,
            };
        return shelfProps;
    },

    activeState: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display" :"inline-block",
               "background" : property.$headerBgActive,
               "line-height" : "40px",
               "margin" : '0px 41px 0px -46px',
               "border-right": property.$activeHeaderBorder,
               "border-left": property.$activeHeaderBorder,
            };
        return shelfProps;
    },

    activeStateAnchor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$activeHeaderBg,
               "color" : property.$activeHeaderColor,
               "font-size":property.$activeHeaderfs,
               "line-height" : property.$activeHeaderlh,
               "padding" : property.$headerGnavPadding,
               "border-top" : property.$activeHeaderBorderTop,
               "font-family":property.$font_family_Header,
            };
        return shelfProps;
    },

    InActiveState: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background" : property.$headerBgInactive,
               "line-height" : "40px",
               "margin" : '0px 41px 0px -46px',
               "border-right": property.$activeHeaderBorder,
               "border-left": property.$activeHeaderBorder,
            };
        return shelfProps;
    },

    InActiveStateAnchor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$headerInActiveColor,
               "font-size":property.$activeHeaderfs,
               "line-height" : property.$activeHeaderlh,
               "padding" : property.$headerInActivePadding,
               "font-family":property.$font_family_Header,
            };
        return shelfProps;
    },

    loginButton: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-position" : "74px 8px",
               "padding":property.$loginPadding,
               "width" : property.$loginWidth,
               "background-color" : property.$loginBg,
               "color" : property.$primary_2,
               "font-size" : "14px",
               "height" : "40px",
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    loginButtonImg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "font-family":"nw-icons",
               "font-size" : "15px",
               "right":"25px",
               "position" : "absolute",
               "top" : '11px',
            };
        return shelfProps;
    },

    loginBusiness: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background" :property.$loginBusinessBg, 
               "height" : "40px",
               "background-color" : property.$loginBusinessColor,
            };
        return shelfProps;
    },

    headerHoverBg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$primary_2,
               "background-color" : property.$headerHoverBg,
               "font-size":property.$activeHeaderfs,
               "line-height" : property.$activeHeaderlh,
               "padding" : property.$headerInActivePadding,
               "font-family":property.$font_family_Header,
            };
        return shelfProps;
    },

    headerLiMouseDown: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$headerFocus,
               "background-color" : property.$headerLiMouseDown,
               "font-size":property.$activeHeaderfs,
               "line-height" : property.$activeHeaderlh,
               "padding" : property.$headerFocusPadding,
               "font-family":property.$font_family_Header,
            };
        return shelfProps;
    },

    headermnavbg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$headermnavbg,
            };
        return shelfProps;
    },

    headermnav: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display" : "inline-block",
               "height" : property.$headermnavHeight,
               "width" : "976px",
            };
        return shelfProps;
    },

    logo: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$logoMargin,
               "padding" : property.$logoPadding,
               "width":property.$logoWidth,
               "height" : property.$logoHeight,
            };
        return shelfProps;
    },

    SearchWrapper: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$SearchWrapperPadding,
            };
        return shelfProps;
    },

    SearchInput: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$SearchInputColor,
               "background-color" : property.$searchInputbg,
               "font-size":property.$SearchInputfs,
               "line-height" : property.$SearchInputlh,
               "width":property.$SearchInputWidth,
               "height" :property.$SearchInputfsHeight,
               "padding-left" : property.$SearchInputPaddingLeft,
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

    SearchBtnImg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$searchMargin,
            };
        return shelfProps;
    },

    SearchBoxFocus: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$SearchBoxFocus,
               "background-color" : property.$SearchBoxFocusBG,
               "height" : property.$SearchInputfsHeight,
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

    SearchInter: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width":"88px",
               "color" : property.$primary_2,
               "height" : "56px",
               "font-size":"14px",
            };
        return shelfProps;
    },

    SearchInterWrapper: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : "40px",
               "font-size":"16px",
               "color" : property.$SearchBoxFocus,
               "background-color" : property.$searchInputbg,
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

    SearchInterButton: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : "40px",
               "width" : "80px",
               "background-color" : "rgba(68, 14, 94, 1)",
               "border-radius" : "5px",
               "top" : "8px",
               "line-height" : "18px",
               "font-size":"14px",
               "margin-right":"8px",
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

    MnavSnav: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-left" : property.$snavMarLeft,
            };
        return shelfProps;
    },

    snavListItem: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$snavListItem,
               "font-size":property.$snavListItemfs,
               "line-height" : property.$snavListItemlh,
               "padding" : property.$snavListItemPadding,
               "margin-top" :property.$snavListItemMargin,
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    snavliLastChild: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$snavListItem,
               "font-size":property.$snavListItemfs,
               "line-height" : property.$snavListItemlh,
               "padding" : property.$snavLastChildPadding,
               "margin-top" :property.$snavListItemMargin,
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    mnavHover: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$mnavHover,
            };
        return shelfProps;
    },

    mnavliMouseDown: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$mnavliColor,
               "background-color" : property.$headerLiMouseDown,
               "border-radius" : '6px',
            };
        return shelfProps;
    },

    mnavContent: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display" : 'block',
            };
        return shelfProps;
    },

    mnavContentHide: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display" : 'none',
            };
        return shelfProps;
    },

    expandedNavActive: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$whiteSmoke,
               "color" : property.$mnavliColor,
               "font-size":property.$snavListItemfs,
               "line-height" : property.$expandedNavlh,
               "padding-top" : property.$expandedNavPadding,
               "padding-bottom" : property.$expandedNavPadding,
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    expandedNavInActive: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$bg_color_1,
               "color" : property.$expandedNavInActiveColor,
               "font-size":property.$expandedNavInActivefs,
               "line-height" : property.$expandedNavlh,
               "padding-top" : property.$expandedNavPadding,
               "padding-bottom" : property.$expandedNavPadding,
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    expandedRightNav: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$expandedNavActiveBG,
               "width" : "760px",
               "padding-top" : "15.32px",
            };
        return shelfProps;
    },

    rightNavSignPost: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size":"18px",
               "line-height" : property.$signPostlh, 
               "color" : property.$grey,
               "padding-bottom" : property.$SignPostPadding,
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    headline: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size":property.$headlinefs,
               "line-height" : property.$headlinelh,
               "color" : property.$headerFocus,
               "font-family":property.$font_family_headline,
            };
        return shelfProps;
    },

    ctaTitlePadding: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$ctaTitlePadding,
            };
        return shelfProps;
    },

    ctaTitle: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size":"20px",
               "line-height" :property.$ctaTitlelh,  
               "color" : property.$ctaTitleColor,
               "font-family":property.$font_family_regular,
               "padding-right" : "12px",  
            };
        return shelfProps;
    },

    cta_mGrey: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$cta_mGrey,
               "font-size":property.$cta_mGreyfs,
               "line-height" : property.$cta_mGreylh, 
               "font-family":property.$font_family_regular,  
            };
        return shelfProps;
    },

    cta_mGreen: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$cta_mGreen,
               "font-size":property.$cta_mGreyfs,
               "line-height" : property.$cta_mGreylh, 
               "font-family":property.$font_family_regular,
            };
        return shelfProps;
    },

    cta_mGreenlinks: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding" : "0px 12px 0.98px 0px",
            };
        return shelfProps;
    },

    gridPadding: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : property.$gridPadding,
            };
        return shelfProps;
    },

    ctamGreyMargin: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-left" : property.$ctamGreyMargin,
            };
        return shelfProps;
    },

    ctamGreenMargin: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$ctamGreenMargin,
            };
        return shelfProps;
    },

    swithROI: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : "0px 41px 0px -46px",
               "right" : "-10px",
            };
        return shelfProps;
    },

    swithROIa: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$primary_2,
               "font-size":"14px",
               "line-height" : "21px",
               "padding" : "14px 17.5px 12px",
               "font-family":property.$font_family_regular,
               "background" : "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
            };
        return shelfProps;
    },

//Mobile
//Header Components
	headerBackgroundProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "overflow" : "hidden",
               "height" : property.$mainNav_height,
               "background-color" : property.$mainNav_bg_mobile
            };
        return shelfProps;
    },
    headerNavIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-right-color" : property.$mainNav_Icon_border,
               "border-right-style" : "solid",
               "border-right-width" : "1px",
               "background-color" : "rgba(0, 0, 0, 0)",
               "position" : "relative",
               "display" : "block",
               "height" : property.$mainNav_height
            };
        return shelfProps;
    },
    headerLogoProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "display" : "block",
               "width" : property.$logo_width,
               "padding-top" : property.$logo_padding_top,
               "margin-top" : property.$logo_margin_top
            };
        return shelfProps;
    },
    whiteLogoProps: function(size){
        var shelfProps = {},property = brand.props;
        shelfProps = {
            "margin-top": property.$whiteLogo_margin,
            "margin-bottom": "0px",
            "position": "relative",
            "width": "976px",
            "left": "48px"
        };
    return shelfProps;
    },
    headerSignInProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "display" : "block",
               "height" : property.$mainNav_height,
               "float" : "right",
               "text-align" : "center",
               "padding-top" : property.$login_padding_top,
               "background-color" : property.$signIn_bg
            };
        return shelfProps;
    },
    headerNavClickProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
              "margin" : property.$headerNav_active_margin,
               "height" : property.$headerNav_active_height,               
               "outline-color" : property.$headerLiMouseDown,
               "outline-style" : "solid",
               "outline-width" : "3px"
             };
              if(branding.getBrand.get() == "lombard/lombard.js") {
               shelfProps["margin"] = property.$headerNav_active_margin,
               shelfProps["height"] = property.$headerNav_active_height
               shelfProps["outline-color"] = "rgba(0, 0, 0, 1)",
               shelfProps["outline-style"] = "auto",
               shelfProps["outline-width"] = "5px"
             }
        return shelfProps;
    },
    searchBarProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding" : property.$searchBar_padding,
               "height" : property.$searchBar_height,
               "overflow" : "hidden"
            };
        return shelfProps;
    },
    searchTextProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$searchText_color,
               "border-radius" : property.$search_border_radius,
               "box-shadow" : property.$search_box_shadow,
               "margin-top" : property.$searchText_margin_top,
               "line-height" : "30px",
               "background-color" : property.$searchInputbg_mob,
               "border" : "0px solid rgb(179, 180, 188)"
            };
             if(branding.getBrand.get() == "lombard/lombard.js") {
               shelfProps["line-height"] = "21px"
             }
        return shelfProps;
    },
    searchIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-radius" : property.$searchIcon_border_radius,
               "height" : property.$searchIcon_height,
               "box-shadow" : property.$search_box_shadow,
               "margin-top" : property.$searchText_margin_top,
               "background-color" : property.$searchIconbg,
               "padding" : property.$searchIcon_padding,
               "background-position-x" : property.$searchIcon_bgPosx,
               "background-position-y" : property.$searchIcon_bgPosy,
               "background-size" : property.$searchIcon_bgSize
            };
        return shelfProps;
    },
    l1PaddingProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "font-size" : "14px",
               "background-color" : property.$primary_1,
               "padding" : property.$mNav_padding,
               "font-family" : "RNHouseSansRegular"
            };
        return shelfProps;
    },
    l1HeadingProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "font-size" : "14px",
               "color" : property.$primary_2,
               "line-height" : "19px",
               "margin" : property.$l1_heading_margin
            };
        return shelfProps;
    },
    l1MNavProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-width" : property.$li_mnav_borderWidth
            };
        return shelfProps;
    },
    l1MNavListProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-bottom" : "1px solid "+property.$l1_mainNav_border
            };
        return shelfProps;
    },
    l1MNavAnchorProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : property.$l1_inactive_bgColor,
               "color" : property.$primary_2,
               "display" : "block",
               "padding" : property.$l1_mnav_padding,
               "line-height" : "19px",
               "margin-bottom" : "0px"
            };
        return shelfProps;
    },
    l1MNavAnchorActiveProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : property.$whiteSmoke_1,
               "color" : property.$mnav_active_color,
               "display" : "block",
               "padding" : property.$l1_mnav_padding,
               "line-height" : "19px",
               "margin-bottom" : "0px"
            };
        return shelfProps;
    },
    l2PaddingProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding" : property.$l2_padding,
               "color" : property.$links_color,
               "display" : "block"
            };
        return shelfProps;
    },
    l2IconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-family': 'nw-icons'
            };
        return shelfProps;
    },
    l3SectionHeadProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : property.$l3_sectionHead_bg,
                "color" : property.$sectionHead_color,
                "opacity" : "1",
                "border-bottom" : property.$section_heading_borderwidth+" solid "+property.$section_heading_border,
                "font-size" : property.$section_heading_font,
                "padding-top" : "11px",
                "padding-bottom" : "10px",
                "line-height" : property.$section_heading_lineht,
                "border-left-color" : property.$sectionHead_border,
                "border-top-color" : property.$sectionHead_border,
                "border-right-color" : property.$sectionHead_border
            };
        return shelfProps;
    },
    l3LinksProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding" : property.$l3_links_padding,
                "color" : property.$linkColor,
                "border-bottom" : "1px solid "+property.$l3_links_border
            };
        return shelfProps;
    },
    l3LinksIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
                "padding" : "2px 0px 0px 8px"
            };
        return shelfProps;
    }, 
    l2LinkBackProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
                "color" : property.$linkBack_color,
                "padding-bottom" : property.$l2_linkBack_pb,
                "border-bottom" : "1px solid "+property.$l2_linkBack_border,
                "background-color" : property.$l2_linkBack_bg
            };
        return shelfProps;
    }, 
    l4LeadLinksProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
                "color" : property.$linkColor,
                "padding" : property.$l4_leadlinks_padding,
                "border-bottom" : "1px solid "+property.$l3_links_border
            };
        return shelfProps;
    }, 
    l4LeadLinksIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
                "padding" : "0px 0px 0px 8px",
                "display" : "block"
            };
        return shelfProps;
    },
    l4LinksProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding" : property.$l4_links_padding,
                "color" : property.$linkColor,
                "border-bottom" : "1px solid "+property.$l3_links_border
            };
        return shelfProps;
    },
    l4LinksIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
                "padding" : "0px",
                "display" : "block"
            };
        return shelfProps;
    },
    searchInputProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$searchText_color,
               "background-color" : property.$searchInputClick_bg,
               "height" : property.$searchIcon_height,
               "font-family": "RNHouseSansRegular"
            };
        return shelfProps;
    },
    };   
}
