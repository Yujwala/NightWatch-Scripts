//natwest hero shelf properties(photography mode)
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    shelfMarProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "background-color": property.$transparent_bg,
                "padding-top": property.$shelfMarPadding,
            };
        return shelfProps;
    },
    imgProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "top": "0px",
                "right": "0px",
                "overflow": "hidden",
            };
        return shelfProps;
    },
    herocopyProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":  property.$herocopyMargin,
                "background-color": property.$transparent_bg,
                "vertical-align": "middle"
            };
        return shelfProps;
    },
    comprichProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$comprichPadding,
                "width": "477px",
                "color": property.$primary_1,
                "font-family": property.$font_family_regular,
                "margin": property.$comprichMargin,
             };
        return shelfProps;
    },
    comprichP: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-size": "14px",
                "line-height": "20px",
                "padding": "0px 26px 0px 0px",
                "color": property.$comprichPColor,
                "font-family": property.$font_family_regular,
             };
        return shelfProps;
    },
    heroheadProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$heroheadPadding,
                "margin":property.$heroheadMargin, 
                "width": property.$heroheadWidth,
                "font-family": property.$font_family_bold,
                "color": property.$heroheadColor,
                "font-size": "36px",
                "line-height": property.$heroheadlh,
             };
        return shelfProps;
    },
    signpostProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$signpostPadding, 
                "margin":property.$signpostMargin, 
                "font-size": "20px",
                "line-height": "24px",
                "color": property.$herosignpostColor,   
             };
        return shelfProps;
    },
    heroCTAProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$heroCtaPadding,     
             };
        return shelfProps;
    },

    ctaTextProps: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": "13px 18px 9px 20px", 
                "margin": property.$ctaTextMargin, 
                "font-family": property.$font_CTAbgProps,
                "background-color": property.$CTA_bg_color,
                "color": property.$primary_2,
                "font-size": "18px",
                "line-height": "24px",
                "border-radius":"5px",
                "border-top":"1px solid rgb(67, 201, 210)",

             };
        return shelfProps;
    },

    heroCTA_m: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": "2px 0px 1px",  
             };
        return shelfProps;
    },

    heroCTA_m_text: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": property.$CtaMtextMargin,
                "padding": property.$CtaMtextPadding,
                "color": property.$CtaMtextColor,
                "font-family": property.$heroCtaMFont,
                "font-size": "18px",
                "line-height": property.$CtaMlh,
             };
        return shelfProps;
    },
    hero_footline: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": "11px 0px 0px",
                "padding": "6px 0px 0px 48px", 
                "height": "94px",
                "width": property.$footlineWidth,
             };
        return shelfProps;
    },
    ctaHeroPdpHover: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": "rgba(255, 255, 255, 1)",
                "background-color":property.$ctaHeroPdpHover,
             };
        return shelfProps;
    },
    ctaHeroPdpMouseDown: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$ctaPdpMouseDownColor,
                "background-color":property.$ctaPdpMouseDownBg,
             };
        return shelfProps;
    },
    ctaHeroMPdpHover: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$ctaHeroMPdpHover,
             };
        return shelfProps;
    },
    ctaHeroPdpmMouseDown: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$ctaPdpmMouseDownColor,
                "background-color":"rgba(255, 191, 71, 1)",
             };
        return shelfProps;
    },

    footlineRte: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "height": property.$footlineRteWidth,
                "margin": property.$footlineRteMargin,
                "color": property.$footlineRteColor,
                "font-family": property.$font_family_regular,
             };
        return shelfProps;
    },
    footlineRte_p: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$footlineRtePadding,
                "color": property.$footlineRtepColor,
                "font-family": property.$font_family_regular,
                "font-size": property.$footlineRtefs,
                "line-height":property.$footlineRtelh, 
             };
        return shelfProps;
    },
    heroSeparator: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "background-color": property.$heroSeparatorBg,
                "height": "2px",
                "margin-left": "48px",
                "padding-right": "2px",
                "bottom":"0px"
             };
        return shelfProps;
    },

    //Mobile
    shelfMarPropsMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "background-color": property.$transparent_bgMobile,
                "padding-top": "0px",
            };
        return shelfProps;
    },
    shelfinnerPropsMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "min-height": "0px",
            };
        return shelfProps;
    },
    herocopyMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "width": "447px",
                "background-color": property.$transparent_bgMobile,
            };
        return shelfProps;
    },
    comprichMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$comprichPaddingMobile,
                "width": "447px",
                "font-family": property.$font_family_regular,
                "margin": property.$comprichMarginMobile,
             };
        return shelfProps;
    },
    comprichPMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-size": "14px",
                "line-height": "18px",
                "padding": property.$comprichPMobilePadding,
                "color": property.$primary_1,
                "font-family": property.$font_family_regular,
             };
        return shelfProps;
    },
    heroheadMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$heroheadPaddingMobile,
                "margin":property.$heroheadMarginMobile, 
                "font-family": property.$font_CTAbgProps,
                "color": property.$heroheadColor,
                "font-size": "32px",
                "line-height": property.$heroheadlhMobile,
             };
        return shelfProps;
    },
    signpostMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$signpostPaddingMobile, 
                "font-size": "22px",
                "line-height": "26px",
                "color": property.$herosignpostColor,   
             };
        return shelfProps;
    },
    hero_footlineMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": "15px 0px 3px",
                "padding": property.$herofootlineMobPadding,
                "background-color": property.$transparent_bgMobile,
             };
        return shelfProps;
    },
    footlineRteMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": "3px 0px 0px",
                "font-family": property.$font_family_regular,
             };
        return shelfProps;
    },
    footlineRte_pMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": "0px",
                "color": property.$footlineRtepColor,
                "font-family": property.$font_family_regular,
                "font-size": "14px",
                "line-height": "20px",
             };
        return shelfProps;
    },
    heroCTAMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$heroCtaPadding_m,     
             };
        return shelfProps;
    },

    ctaTextMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$ctaTextMobilePadding, 
                "margin": property.$ctaTextMarginMobile, 
                "font-family": property.$font_CTAbgProps,
                "background-color": property.$CTA_bg_color,
                "color": property.$primary_2,
                "font-size": "18px",
                "line-height": "24px",
                "border-radius":"5px",
                "border-top":"1px solid rgb(67, 201, 210)",

             };
        return shelfProps;
    },

    heroCTA_mMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding":property.$heroCTAmMobilePadding,   
             };
        return shelfProps;
    },
    heroCTA_m_textMobile: function(view) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": "0px",
                "padding": property.$heroCTAmtextMobilePadding,
                "color": property.$CtaMtextColor,
                "font-family": property.$heroCtaMFont,
                "font-size": "18px",
                "line-height": "22px",
             };
        return shelfProps;
    },
};

}
   

 