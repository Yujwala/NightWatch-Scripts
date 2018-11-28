module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
      ccWrapper: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "min-height" : "380px",
                   "background-color": property.$ccWrapperBg,
                   "font-family": property.$font_family_regular,
                };
            return shelfProps;
      },
    	ccShelfPadding: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "padding" : "38px 48px",
                };
                if(size=="xs"){
                 shelfProps['padding'] ="24px 16px 32px"
                }
            return shelfProps;
      },
      ccHeading: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "font-size": "32px",
                   "line-height": "36px",
                   "font-family": property.$font_family_bold,
                   "color": property.$currencyCalColor,
                   "text-align": "center", 
                };
                if(size=="xs"){
                 shelfProps['font-size'] ="26px",
                 shelfProps['line-height'] ="30px",
                 shelfProps['margin'] ="0px 0px 32px"
                }
            return shelfProps;
      },
      ccLabel: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "margin": "40px 0px 16px",
                   "font-size": "22px",
                   "line-height": "28px",
                   "font-family": property.$font_family_regular,
                   "color": property.$currencyCalColor,
                   "text-align": "center",
                };
                if(size=="xs"){
                 shelfProps['line-height'] ="26px",
                 shelfProps['margin'] ="32px 0px 14px"
                }
            return shelfProps;
      },
      ccWidget: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "margin": "0px 0px 0px 196px",
                   "position": "relative",
                };
                if(size=="xs"){
                 shelfProps['margin'] ="0px"
                }
            return shelfProps;
      },
      ccSelectWrapper: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "width": "488px",
                   "float": "left",
                   "margin": "0px 0px 16px",
                   "padding": "10px 0px",
                   "background-color": property.$ccSelectWrapperBg,
                   "box-shadow": property.$ccSelectWrapperBox,
                   "height":"42px",
                   "border-radius": "5px",
                   "position": "relative",
                };
                if(size=="xs"){
                 shelfProps['width'] ="415px",
                 shelfProps['float'] ="none",
                 shelfProps['margin'] ="0px"
                }
            return shelfProps;
      },
      ccSelectInput: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "margin": "-9px 0px 0px",
                   "padding": "11px 52px 10px 17px",
                   "font-size": "18px",
                   "line-height": "22px",
                   "color": property.$ccGrey,
                   "font-family" : property.$font_family_regular,
                   "background": "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
                };
                if(size=="xs"){
                 shelfProps['font-size'] ="16px",
                 shelfProps['line-height'] ="20px"
                }
            return shelfProps;
      },
      ccDropdownArrow: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "border-left":"0px none rgb(0, 0, 0)",
                   "position": "absolute",
                   "width": "42px",
                   "height": "33px",
                   "top": "6px",
                   "right": "0px",
                   "cursor": "pointer",
                   "z-index": "9",
                };
                if(size=="xs"){
                 shelfProps['border-left'] ="1px solid rgb(223, 217, 209)"
                }
            return shelfProps;
      },
      ccGoButton: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "background-color": property.$ccGoButtonColor,
                   "box-shadow": property.$ccGoButtonBox,
                   "color": property.$currencyCalColor,
                   "cursor": "default",
                   "float": "left",
                   "min-width": "51px",
                   "margin": "0px 0px 0px 15px",
                   "padding": "9px 14px",
                   "border-radius": "5px",
                   "font-size": "18px",
                   "line-height": "22px",
                   "text-align":"center",
                   "font-family" : property.$font_family_bold,
                };
                if(size=="xs"){
                 shelfProps['float'] ="none",
                 shelfProps['min-width'] ="100%",
                 shelfProps['margin'] ="16px 0px 0px",
                 shelfProps['padding'] ="0px",
                 shelfProps['line-height'] ="40px"
                }
            return shelfProps;
      },
      ccSubHeadingTwo: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "24px 0px 16px",
                  "text-align":"left",
                  "max-width": "555px",
                  "color": property.$currencyCalColor,
                  "font-size": "22px",
                  "line-height": "28px",   
                  "font-family" : property.$font_family_regular,
                };
                if(size=="xs"){
                 shelfProps['margin'] ="32px 0px 14px",
                 shelfProps['text-align'] ="center",
                 shelfProps['max-width'] ="none",
                 shelfProps['line-height'] ="26px"
                }
            return shelfProps;
      },
      ccPopularDestinations: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "24px 0px 0px",
                  "padding": "0px",
                };
            return shelfProps;
      },
      ccCountryFlag: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px 8px 0px 0px",
                  "width": "50px",
                  "height": "50px",
                  "float":"left",
                  "display":"block",
                };
                if(size=="xs"){
                 shelfProps['margin'] ="0px 21px 0px 0px"
                }
            return shelfProps;
      },
      ccCountryFlagImg: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "border-radius": "50%",
                };
            return shelfProps;
      },
      ccInputFocus: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "outline": "rgb(255, 191, 71) solid 3px",
                };
            return shelfProps;
      },
      ccGoButtonActive: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "background-color": property.$ccGoButtonActiveColor,
                   "box-shadow": "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
                   "color": property.$primary_2,
                   "cursor": "pointer",
                   "float": "left",
                   "min-width": "51px",
                   "margin": "0px 0px 0px 15px",
                   "padding": "9px 14px",
                   "border-radius": "5px",
                   "font-size": "18px",
                   "line-height": "22px",
                   "text-align":"center",
                   "font-family" : property.$font_family_bold,
                };
                if(size=="xs"){
                 shelfProps['float'] ="none",
                 shelfProps['min-width'] ="100%",
                 shelfProps['margin'] ="16px 0px 0px",
                 shelfProps['padding'] ="0px",
                 shelfProps['line-height'] ="40px"
                }
            return shelfProps;
      },
      ccWrapperStep2: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "padding" : "62px 0px 0px",
                };
                if(size=="xs"){
                 shelfProps['padding'] ="0px"
                }
            return shelfProps;
      },
      countryFromWrap: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "float" : "left",
                   "width": "330px",
                   "margin": "0px 0px 0px 28px",
                };
            return shelfProps;
      },
      ccGoButtonFocus: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "background-color": property.$focusColor,
                   "box-shadow": "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(245, 151, 0) 0px 1px 0px 0px inset",
                   "color":property.$currencyCalColor,
                };
            return shelfProps;
      },
      countryFlag: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px 21px 18px 0px",
                  "border-radius": "50%",
                };
            return shelfProps;
      },
      ccAmountWrapper: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px 16px 0px 0px",
                  "width": "207px",
                };
            return shelfProps;
      },
      inputAmount: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "line-height": "22px",
                  "padding" : "10px 15px",
                  "margin": "6px 0px 0px",
                  "background-color": property.$ccSelectWrapperBg,
                  "box-shadow": property.$inputAmountBox,
                  "color": property.$currencyCalColor,
                  "border-radius": "5px",
                  "font-family" : property.$font_family_regular,
                };
                if(size=="xs"){
                 shelfProps['font-size'] ="16px",
                 shelfProps['line-height'] ="16px",
                 shelfProps['padding'] ="13px 15px"
                }
            return shelfProps;
      },
      currencyCode: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "16px",
                  "line-height": "16px",
                  "color": property.$currencyCalColor,
                  "margin": "20px 0px 0px",
                  "font-family" : property.$font_family_regular,
                };
            return shelfProps;
      },
      conversionRate: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "line-height": "18px",
                  "color": property.$currencyCalColor,
                  "margin": "0px 0px 8px",
                  "font-family" : property.$font_family_regular,
                };
            return shelfProps;
      },
      ccRichText: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "line-height": "18px",
                  "color": property.$currencyCalColor,
                  "font-family" : property.$font_family_regular,
                };
            return shelfProps;
      },
      switchWrap: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                 "margin": "0px 64px",
                 "float":"left",
                };
                if(size=="xs"){
                 shelfProps['margin'] ="28px 0px 32px",
                 shelfProps['float'] ="none"
                }
            return shelfProps;
      },
      switchBtn: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                 "width": "43px",
                 "margin": "6px 0px 0px",
                 "font-size": "18px",
                 "line-height": "43px",
                 "background-color": property.$switchBtnBg,
                 "box-shadow": property.$switchBtnBoxShadow,
                 "color": property.$primary_2,
                 "border-radius": "5px",
                 "font-family" : property.$font_family_bold,
                 "text-indent": "-9999px",
                };
            return shelfProps;
      },
      countryToWrap: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "float" : "left",
                   "width": "330px",
                };
            return shelfProps;
      },
      countryToFlag: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px 19px 18px 0px",
                  "border-radius": "50%",
                  "float" : "left",
                  "display":"inline-block"
                };
            return shelfProps;
      },
      amntForeignRes: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "float" : "left",
                  "font-size": "32px",
                  "line-height": "39px",
                  "color": property.$currencyCalColor,
                  "margin": "6px 28px 5px 0px",
                  "font-family" : property.$font_family_bold,
                  "position":"relative",
                };
                if(size=="xs"){
                 shelfProps['float'] ="none",
                 shelfProps['margin'] ="6px 0px 5px"
                }
            return shelfProps;
      },
      amntForeignResSup: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "position":"absolute",
                  "line-height": "18px",
                  "top": "2px",
                  "font-family" : property.$font_family_bold,
                  "color": property.$currencyCalColor,
                };
            return shelfProps;
      },
      step2Controls: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "22px 0px 0px",
                };
                if(size=="xs"){
                 shelfProps['margin'] ="28px 0px 0px"
                }
            return shelfProps;
      },

      ccCtaL: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px",
                  "padding" : "16px 26px",
                  "font-family" : property.$primary_cta_font,
                  "background-color": property.$ccCtaLBg,
                  "border-radius": "5px",
                  "box-shadow": property.$ccCtaLBox,
                  "color": property.$primary_2,                
                  "font-size": "18px",
                  "line-height": "22px",
                };
            return shelfProps;
      },

      ccCtaLMobile: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "margin": "0px",
                  "padding" : "16px 26px",
                  "font-family" : property.$primary_cta_font,
                  "background-color": property.$ccCtaLBgMobile,
                  "border-radius": "5px",
                  "box-shadow": "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
                  "color": property.$primary_2,                  
                  "font-size": "18px",
                  "line-height": "22px",
                };
            return shelfProps;
      },

      ccCtaLHover: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "background-color": property.$ccCtaLHover,    
                };
            return shelfProps;
      },
      ccCtaLFocus: function(size) {
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                  "background-color": property.$focusColor,
                  "box-shadow": property.$ccCtaLFocusBox,
                  "color": property.$currencyCalColor,                
                };
            return shelfProps;
      },
      ctaIcon: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "font-family" : "nw-icons",
                   "position":"absolute",
                   "opacity":"1",
                   "font-size": "16px",
                   "line-height": "22px",
                };
            return shelfProps;
      },
      backBtn: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "float":"left",
                  "margin": "19px 0px 0px",
                  "font-size": "14px",
                  "line-height": "28px",
                  "color": property.$backBtnColor,
                  "font-family" : property.$font_family_regular,
                };
                if(size=="xs"){
                 shelfProps['float'] ="none",
                 shelfProps['margin'] ="16px 0px 0px",
                 shelfProps['font-size'] ="16px",
                 shelfProps['line-height'] ="14px"
                }
            return shelfProps;
      },
      //Mobile
      mobileDropDown: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "border-radius": "5px",
                  "box-shadow": "rgb(160, 148, 137) 0px 3px 0px 0px, rgb(255, 255, 255) 0px 1px 0px 0px inset",
                  "font-size": "16px",
                  "line-height": "20px",
                  "color": property.$ccGrey,
                  "padding" : "11px 52px 17px 17px",
                  "margin": "16px 0px 0px",
                  "background-color": "rgba(238, 237, 233, 1)",
                  "height":"42px",
                  "font-family" : property.$font_family_regular,
                };
            return shelfProps;
      },
      ccHeadingMobile: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "font-size": "26px",
                   "line-height": "30px",
                   "font-family": property.$font_family_bold,
                   "color": property.$currencyCalColor,
                   "text-align": "center", 
                   "margin": "0px 0px 36px", 
                };
            return shelfProps;
      },
      switchBtnMobile: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                 "margin": "16px 0px 0px",
                 "font-size": "18px",
                 "line-height": "43px",
                 "background-color": property.$switchBtnBg,
                 "box-shadow": property.$switchBtnBoxShadow,
                 "color": property.$primary_2,
                 "border-radius": "5px",
                 "font-family" : property.$font_family_bold,
                 "text-indent": "-9999px",
                };
            return shelfProps;
      },

    };


}