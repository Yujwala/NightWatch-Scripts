var rte_props = require('../../components/rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
     nextStepBlueTheme: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$nextStepBlueThemePadding, 
                "background-color" : property.$nextStepBlueThemeBg, 
                "color" : property.$primary_2, 
            };
        return shelfProps;
    },

    nextStepWhiteTheme: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$nextStepBlueThemePadding,
                "background-color" : property.$nextStepWhiteThemeBg,  
                "color" : property.$nextStepWhiteThemeColor,
            };
        return shelfProps;
    },
    nextStepLightBlueTheme: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": property.$nextStepBlueThemePadding,
                "background-color" : property.$nextStepLightBlueThemeBg,  
                "color" : property.$nextStepWhiteThemeColor,
            };
        return shelfProps;
    },
    nextStepColumns: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": "0px 0px 0px 47.996px",
            };
        return shelfProps;
    },

    headerGroup: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin": property.$headerGroupMargin,
            };
        return shelfProps;
    },

    headLineBlue: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$primary_2, 
                "font-family" : property.$nextStep_font_family_bold, 
                "font-size": property.$headLineBlueFs,
                "line-height": property.$headLineBlueLh,
            };
        return shelfProps;
    },

    headLineWhite: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$headLineWhiteColor, 
                "font-family" : property.$nextStep_font_family_bold, 
                "font-size": property.$headLineBlueFs,
                "line-height": property.$headLineBlueLh,
            };
        return shelfProps;
    },

    nextStepsCtaIcons: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin" : "0px 0px 0px 32.5px",
                "padding":"0px 0px 0px 32.5px",
                "font-family" : property.$ctaIconFF, 
                "font-size": "13px",
                "line-height": "13px",
            };
        return shelfProps;
    },

    nextStepsCtaIconsBefore: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-family" : "nw-icons", 
                "font-size": "27px",
                "line-height": "27px",
                "position":"absolute",
            };
            if(size=="xs"){
              shelfProps['top'] ="15px";
              shelfProps['left'] =property.$ctaIconLeft_m;
              shelfProps['font-size'] ="20px";
              shelfProps['line-height'] ="20px";
            }
        return shelfProps;
    },

    nextStepsCtaIconsaBlue: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin" : property.$nextStepsCtaIconsaMar, 
                "padding":property.$ctaIconPadd,
                "color": property.$primary_2, 
                "max-width" : property.$ctaMaxWidth,
                "font-family" : property.$font_family_regular, 
                "font-size": property.$nextStepsCtaIconsaFs, 
                "line-height": property.$nextStepsCtaIconsaLh, 
            };
        return shelfProps;
    },

    nextStepsCtaIconsaOther: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin" : property.$nextStepsCtaIconsaMar, 
                "padding":property.$ctaIconPadd,
                "color": property.$nextStepsCtaIconsaWhiteColor, 
                "max-width" : property.$ctaMaxWidth,
                "font-family" : property.$font_family_regular,
                "font-size": property.$nextStepsCtaIconsaFs, 
                "line-height": property.$nextStepsCtaIconsaLh, 
            };
        return shelfProps;
    },
    nextStepsCtaIconsaOffWhite: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin" : "8.4px 2px 16.8px 0px", 
                "padding":property.$ctaIconPadd,
                "color": property.$nextStepsCtaIconsaWhiteColor, 
                "max-width" : property.$ctaMaxWidth,
                "font-family" : property.$font_family_regular,
                "font-size": property.$nextStepsCtaIconsaFs, 
                "line-height": property.$nextStepsCtaIconsaLh, 
            };
        return shelfProps;
    },

    nextStepsCtaIconsAfter: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-family" : "nw-icons", 
                "font-size":property.$ctaIconFs,
                "line-height": property.$ctaIconLh, 
                "position":"absolute",
                "padding":property.$ctaIconPaddAfter,
            };
        return shelfProps;
    },

    nextStepsCtaIconsHoverBlue: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$nextStepsCtaIconsHover,    
            };
        return shelfProps;
    },

    nextStepsCtaIconsFocus: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":property.$nextStepsCtaIconsaMar,
                "padding" :property.$ctaIconPadd,
                "background-color" : property.$nextStepCtaFocusBg, 
                "font-family" : property.$font_family_regular,
                "border-radius": property.$nextStepCtaFocusBr,
                "color": property.$nextStepsCtaIconsFocusColor,
                "font-size": property.$nextStepsCtaIconsaFs, 
                "line-height": property.$nextStepsCtaIconsaLh, 
                "max-width": property.$ctaMaxWidth,
            };
        return shelfProps;
    },

    nextStepsCtaIconsHoverOther: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$nextStepsCtaIconsHoverOther,    
            };
        return shelfProps;
    },

    nextStepsCtaIconsFocusWhite: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":property.$nextStepsCtaIconsaMar,
                "padding" : property.$ctaIconPadd,
                "background-color" : property.$nextStepCtaFocusBg,
                "font-family" : property.$font_family_regular,
                "border-radius": property.$nextStepCtaFocusBr,
                "color": property.$nextStepsCtaIconsFocusWhiteColor,
                "font-size": property.$nextStepsCtaIconsaFs, 
                "line-height": property.$nextStepsCtaIconsaLh,  
                "max-width": property.$ctaMaxWidth,
            };
        return shelfProps;
    },

    nextStepCta: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin" : property.$nextStepCtaMargin,  
            };
        return shelfProps;
    },

    nextStepCta_L: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":property.$nextStepCta_LMargin, 
                "padding" : property.$nextStepCta_LPadding, 
                "background-color" : property.$nextStepCta_LBg, 
                "font-family" :  property.$primary_cta_font,
                "border-radius":property.$nextStepCta_LBorderRadius,  
                "box-shadow": property.$nextStepCta_LBoxShadow, 
                "color": property.$primary_2, 
                "font-size": "18px",
                "line-height": "24px", 
                "text-shadow": property.$nextStepCta_LTextShadow, 
                "border-top": property.$nextStepCta_LBorderTop,
                "max-width": property.$nextStepCta_LMaxWidth, 
            };
        return shelfProps;
    },
    nextStepCta_LOffWhite: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":"10px 21px 16px 0px", 
                "padding" : "10px 18px 12px 20px", 
                "background-color" : property.$nextStepCta_LBg, 
                "font-family" :  property.$primary_cta_font,
                "border-radius":property.$nextStepCta_LBorderRadius,  
                "box-shadow": property.$nextStepCta_LBoxShadow, 
                "color": property.$primary_2, 
                "font-size": "18px",
                "line-height": "24px", 
                "text-shadow": property.$nextStepCta_LTextShadow, 
                "border-top": property.$nextStepCta_LBorderTop,
                "max-width": property.$nextStepCta_LMaxWidth, 
            };
        return shelfProps;
    },

    ctaHover: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "background-color": property.$nextStepCtaHover,
                "color": property.$primary_2,   
                "box-shadow": property.$nextStepCtaBoxShadow,
            };
        return shelfProps;
    },

    ctaMouseDown: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":property.$nextStepCta_LMargin,
                "padding" : property.$nextStepCta_LPadding,
                "background-color" :property.$nextStepctaMouseDownBg, 
                "font-family" : property.$primary_cta_font,
                "border-radius": property.$nextStepCta_LBorderRadius,  
                "box-shadow": property.$nextStepctaMouseDownBox, 
                "color": property.$NSctaMouseDownColor,
                "font-size": "18px",
                "line-height": "24px", 
                "border-top": property.$NSctaMouseDownBorderTop,
                "max-width": property.$nextStepCta_LMaxWidth,
            };
        return shelfProps;
    },
    //Mobile
    nextStepsCtaIconsa_m: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "float" : "left",
                "padding":"0px",
                "margin":property.$nextStepsCtaIconsa_mMargin,
                "color": property.$primary_2, 
                "background-position" : "100% -200px",
                "font-family" : property.$font_family_regular,
                "font-size": "18px",
                "line-height": "48px",
            };
        return shelfProps;
    },

    nextStepsCtaIconsLi: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding":"0px",
                "margin":"0px",
                "background-color" : property.$nextStepsCtaIconsLiBg,
                "color": property.$primary_2, 
                "border-bottom":property.$nextStepsCtaIconsLiBorder,
                "cursor":"pointer"
            };
        return shelfProps;
    },

    ctaHover_m: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$nextStepCtaHover_m,  
            };
        return shelfProps;
    },

    ctaMouseDown_m: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":property.$nextStepsCtaIconsa_mMargin,
                "padding" : "0px",
                "background-color" : property.$nextStepCtaFocusBg, 
                "font-family" :property.$font_family_regular,
                "border-radius": property.$nextStepCtaFocusBr,
                "color": property.$ctaMouseDown_mColor,
                "font-size": "18px",
                "line-height": "48px", 
            };
        return shelfProps;
    },
    rteOtherTheme: function(size) {
        let shelfProps = {}
        let rteprops=rte_props.PropTextfs12(size);
            shelfProps = {
                "line-height":property.$rteLh,
                "color": property.$rteClrOther,
                "padding-bottom":"14px",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    rteBlueTheme: function(size) {
        let shelfProps = {}
        let rteprops=rte_props.PropTextfs12(size);
            property = brand.props,
            shelfProps = {
                "line-height":property.$rteLh,
                "color": property.$rteCtaClrBlue,
                "padding-bottom":"14px",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    nextStepsCtaLinkBlue: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "color": property.$rteCtaClrBlue,
                "font-size":"18px",
                "line-height":"22px",
                "padding":property.$ctaPadding,
                "margin":"3px 0px 1px"
            };
        return shelfProps;
    },
    nextStepsCtaLinkOther: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "color": property.$ctaLinkOther,
                "font-size":"18px",
                "line-height":"22px",
                "padding":property.$ctaPadding,
                "margin":"3px 0px 1px"
            };
        return shelfProps;
    },
    nextStepsCtaLinkBlueHov: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "color": property.$ctaLinkBlueHov,
            };
        return shelfProps;
    },
    nextStepsCtaLinkOtherHov: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "color": property.$ctaLinkOtherHov,
            };
        return shelfProps;
    },
    nextStepsCtaLinkBlueFocus: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "background-color": property.$nextStepCtaFocusBg,
            };
        return shelfProps;
    },
    nextStepsCtaLinkOtherFocus: function(size) {
        let shelfProps = {}
            property = brand.props,
            shelfProps = {
                "background-color": property.$nextStepCtaFocusBg,
            };
        return shelfProps;
    },
};
}
