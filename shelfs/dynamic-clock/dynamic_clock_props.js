module.exports = function(client){
     var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    shelfPadding: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding": "45px 38px 41px 48px",
                "background-color" : property.$dynamicShelfBgColor, 
                "background" : property.$dynamicShelfBg, 
            };
            if(size=="xs"){
              shelfProps['padding'] ="21px 16px 28px";
            }
        return shelfProps;
    },

    dynClockText: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$dynClockText,  
                "padding" : "0px",
                "width" : "350px",
                "float": "left",
            };
            if(size=="xs"){
              shelfProps['padding'] ="0px 0px 10px";
              shelfProps['width'] ="415px";
              shelfProps['float'] ="none";
            }
        return shelfProps;
    },

    dynClockHeading: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "color": property.$dynClockText,  
                "padding" : "0px 0px 11px",
                "font-family" : property.$dynamicclock_font_family_bold, 
                "font-size": "32px",
                "line-height": "36px",
            };
            if(size=="xs"){
              shelfProps['padding'] ="0px 0px 9px";
            }
        return shelfProps;
    },

    dynClocknormalText: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-size": "14px",
                "line-height": "20px",
                "padding" : "0px 0px 26px",
                "color": property.$dynClockText,  
                "font-family" : property.$dynamicclock_font_family_regular,
            };
            if(size=="xs"){
              shelfProps['font-size'] ="16px";
              shelfProps['line-height'] ="22px";
              shelfProps['padding'] ="0px";
            }
        return shelfProps;
    },

    dynClockrte: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "font-size": "13px",
                "line-height": "20px",
                "padding" : "0px",
                "color": property.$dynClockText,  
               "font-family" : property.$dynamicclock_font_family_regular,  
            };
            if(size=="xs"){
              shelfProps['line-height'] ="22px";
            }
        return shelfProps;
    },

    dynClockrteP: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "0px",
                "color": property.$dynClockText,  
                "max-height": "60px",
                "font-size": "14px",
                "line-height": "20px",   
                "font-family" : property.$dynamicclock_font_family_regular,
            };
            if(size=="xs"){
              shelfProps['padding'] ="0px 0px 7px";
              shelfProps['font-size'] =property.$dynClockrtePfs_m;
              shelfProps['line-height'] =property.$dynClockrtePlh_m;
              shelfProps['max-height'] ="none";
            }
        return shelfProps;
    },

    dynClockErrorText: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "0px 0px 19px",
                "color":property.$dynClockText,  
                "font-size": "14px",
                "line-height": "20px",   
                "font-family" : property.$dynamicclock_font_family_regular,
            };
            if(size=="xs"){
              shelfProps['font-size'] ="16px";
              shelfProps['line-height'] ="22px";
              shelfProps['padding'] ="0px";
            }
        return shelfProps;
    },

    dynClockErrorRte: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "0px",
                "color": property.$dynClockText,  
                "font-size": "13px",
                "line-height": "20px",   
                "font-family" : property.$dynamicclock_font_family_regular,
            };
            if(size=="xs"){
              shelfProps['line-height'] ="22px";
            }
        return shelfProps;
    },

    dynClockErrorRteP: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "0px",
                "color": property.$dynClockText,  
                "font-size": "13px",
                "line-height": "20px",   
                "font-family" : property.$dynamicclock_font_family_regular,
            };
            if(size=="xs"){
              shelfProps['line-height'] ="22px";
            }
        return shelfProps;
    },

    dynClockBlock: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "3px 0px 0px",
                "width": "486px",
                "margin": "0px",
                "float": "right",  
            };
            if(size=="xs"){
              shelfProps['padding'] ="0px";
              shelfProps['width'] ="288px";
              shelfProps['margin'] ="0px 63.5px";
              shelfProps['float'] ="none";
            }
        return shelfProps;
    },

    flipTimer: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "height": "138px",
                "line-height": "150px",
                "font-size": "84px",
                "margin": "0px",
                "color": property.$flipTimerColor,
                "font-family": property.$dynamicclock_font_family_bold,
            };
            if(size=="xs"){
              shelfProps['height'] ="82px";
              shelfProps['line-height'] ="90px";
              shelfProps['font-size'] ="50px";
            }
        return shelfProps;
    },

    flipTimerDHM: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "width": "162px",
                "float":"left",
            };
            if(size=="xs"){
              shelfProps['width'] ="96px";
            }
        return shelfProps;
    },

    flipTimerDigitSet: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "width": "142px",
                "position":"relative",
                "margin": "0px 10px",
                "padding": "0px 2px",
            };
            if(size=="xs"){
              shelfProps['width'] ="82px";
              shelfProps['margin'] ="0px 6px";
              shelfProps['padding'] ="0px 1px";
            }
        return shelfProps;
    },

    flipTimerDigit: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "width": "138px",
                "left":"2px",
                "position":"absolute",
                "top": "0px",
            };
            if(size=="xs"){
              shelfProps['width'] ="82px";
              shelfProps['left'] ="1px";
            }
        return shelfProps;
    },

    flipTimerDigitTop: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "z-index": "1",
                "border-radius": "40px 40px 0px 0px",
                "background-color": property.$flipTimerDigitTopBg,
            };
            if(size=="xs"){
              shelfProps['border-radius'] ="16px 16px 0px 0px";
            }
        return shelfProps;
    },

    flipTimerShadowTop: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "top": "1px",
                "border-radius": "40px 40px 0px 0px",
                "background-color": property.$flipTimerDigitTopBg,
            };
            if(size=="xs"){
              shelfProps['border-radius'] ="16px 16px 0px 0px";
            }
        return shelfProps;
    },

    flipTimerDigitBottom: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "z-index": "2",
                "border-radius": "0px 0px 40px 40px",
                "background-color": property.$flipTimerDigitTopBg,
                "transform-origin": "69px 0px",
                "animation": "flipBottom 0.3s ease-out 0.3s 1 normal both running",
            };
            if(size=="xs"){
              shelfProps['border-radius'] ="0px 0px 16px 16px";
              shelfProps['transform-origin'] ="41px 0px";
            }
        return shelfProps;
    },

    flipTimerShadowBottom: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "border-radius": "0px 0px 40px 40px",
                "background-color": property.$flipTimerDigitTopBg,
            };
            if(size=="xs"){
              shelfProps['border-radius'] ="0px 0px 16px 16px";
            }
        return shelfProps;
    },

    flipTimerClockLabels: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
               "padding": "13px 0px 0px",
            };
            if(size=="xs"){
              shelfProps['padding'] ="9px 0px 0px";
            }
        return shelfProps;
    },

    flipTimerLabels: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
               "width": "142px",
               "margin": "0px 10px",
               "font-size": "25px",
               "font-family": property.$dynamicclock_font_family_regular,  
               "color": property.$dynClockText,  
            };
            if(size=="xs"){
              shelfProps['width'] ="84px";
              shelfProps['margin'] ="0px 6px";
              shelfProps['font-size'] ="15px";
            }
        return shelfProps;
    },

    clockCta: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "padding" : "0px 0px 7px",
                "float":"left",
            };
            if(size=="xs"){
              shelfProps['padding'] ="20px 0px 5px";
              shelfProps['float'] ="none";
            }
        return shelfProps;
    },

    clockCta_L: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":"0px 0px 3px",
                "padding" : "11px 18px 11px 20px",
                "background-color" : property.$dynamicclockCta_LBg,
                "font-family" : property.$dynamicclock_primary_cta_font,
                "border-radius": property.$dynamicclockCta_LBorder,
                "box-shadow": property.$dynamicclockCta_LBox,
                "color": property.$primary_2,
                "font-size": "18px",
                "line-height": "24px", 
                "text-shadow": property.$dynamicTextShadow,
                "border-top": property.$dynamicclockCta_LBorderTop,
                "max-width": property.$dynamicclockCta_LWidth,
            };
            if(size=="xs"){
              shelfProps['text-shadow'] =property.$dynamicTextShadow_m,
              shelfProps['max-width'] ="none";
            }
        return shelfProps;
    },

    ctaHover: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "background-color": property.$dynamicCtaHoverBg,
                "color": "rgba(255, 255, 255, 1)",   
                "box-shadow": property.$dynamicCtaHoverShadow,
            };
        return shelfProps;
    },

    ctaMouseDown: function(size) {
        var shelfProps = {},
            property = brand.props,
            shelfProps = {
                "margin":"0px 0px 3px",
                "padding" : "11px 18px 11px 20px",
                "background-color" : property.$dynamicCtaMouseDownBg,
                "font-family" : property.$dynamicclock_primary_cta_font,
                "border-radius": property.$dynamicclockCta_LBorder,
                "box-shadow": property.$ctaMouseDownBoxShadow,
                "color": property.$dynamicCtaMouseDownColor,
                "font-size": "18px",
                "line-height": "24px", 
                "border-top":property.$dynamicCtaMouseDownBorder, 
                "max-width": property.$dynamicclockCta_LWidth,
            };
            if(size=="xs"){
              shelfProps['max-width'] ="none";
              shelfProps['border-radius'] =property.$dynamicclockCta_LBorder_m;
            }
        return shelfProps;
    },
};

}
   

 