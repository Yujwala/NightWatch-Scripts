var rte_props = require('../../components/rte/rte_props.js');

module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {

   brandhighlightShelfProps: function(size) {
         let shelfProps = {
               "background-color" : property.$brandhighlight_bgColor,
               "padding" : property.$brandhighlight_padding,
            };
            if(size=="xs"){
              shelfProps['padding'] ="16px";
              }
        return shelfProps;
    },
    brandPrepositionProps: function(size) {
         let shelfProps = {
               "height" : property.$brandpreposition_height,
               "margin-bottom" : property.$brandpreposition_marginBtm,
               "position": "relative",
            };
            if(size=="xs"){
              shelfProps['height'] ="260px";
              shelfProps['margin-bottom'] = "16px";
              }
        return shelfProps;
    },
    brandPrepositionImgProps:function(size){
         let shelfProps = {
               "height" : property.$brandBgimage_height,
               "position":"absolute",
               "top": "0px",
               "right":"0px",
               "z-index": "1"
            };
            if(size=="xs"){
               shelfProps['height'] ="229px";
              }
        return shelfProps;
    },
    brandlogoTitleLinksProps: function(size){
           let shelfProps = {
               "position": "absolute",
               "z-index": "2",
            };
            if(size==="lg"){
               shelfProps["width"]=property.$brandLogoTitleLinks_width,
               shelfProps["padding"]=property.$brandLogoTitleLinks_padding,
               shelfProps["height"]=property.$brandLogoTitleLinks_height
            }
            else if(size==="xs"){
                shelfProps['padding']="16px"
            }
        return shelfProps;
    },
    brandTitleProps:function(size){
         let shelfProps = {
               "font-size": "24px",
                "line-height": "29px",
                "font-family": property.$brandTitle_fontFamily,
            };
            if(size==="lg"){
                shelfProps["position"]= "absolute",
                shelfProps["bottom"]= "24px",
                shelfProps["height"]="29px",
                shelfProps["margin-bottom"]= "0px",
                shelfProps["height"]= "29px",
                shelfProps["width"]= "552px"
            }
            else if(size ==="xs"){
                shelfProps["margin-bottom"]= "24px",
                shelfProps["height"]="58px"
            };

        return shelfProps;
    },
    brandLogoProps:function(size){
          let shelfProps = {
               "max-width" : property.$brandLogo_maxWidth,
               "margin-bottom":property.$brandLogo_marginBtm,
            };
        return shelfProps;
    },
    brandLinksProps:function(size){
          let shelfProps = {
               "position": "absolute",
               "right": "16px",
            };
            if(size==="lg"){
               shelfProps['max-width'] =property.$brandLinks_maxWidth;
               shelfProps['bottom'] ="24px";
              }
            else if(size==="xs") {
                shelfProps['bottom'] ="47px";
               }
            
        return shelfProps;
    },

    brandLinksLastChildProps:function(size){
          let shelfProps = {
               "padding-top" : property.$brandLinks_lastChild_paddingT,
            };
        return shelfProps;
    },
    brandLinksanchorProps:function(size){
          let shelfProps = {
               "font-family":property.$brandLinks_a_fontFamily,
               "line-height":property.$brandLinks_a_lineHt,
               "padding":property.$brandLinks_a_padding,
            };
            if(size=="xs"){
               shelfProps['padding'] ="8px 16px";
               shelfProps['line-height']="15px";
              }
        return shelfProps;
    },
    brandSocialProps:function(size){
         let shelfProps = {
               "z-index": property.$brandSocial_zindex,
               "position": "absolute",
               "color":property.$brandSocial_color,
               "font-size":"12px",
            };
            if(size==="lg"){
                shelfProps["background-color"]= property.$brandSocial_bgColor,
                shelfProps["padding"]= property.$brandSocial_padding,
                shelfProps["top"]= property.$brandSocial_top,
                shelfProps["right"]= property.$brandSocial_right
            }
            else if(size === "xs"){
                shelfProps["top"]= "229px",
                shelfProps["padding-top"]= "16px"
            }
        return shelfProps;
    },
    brandSocialSpanProps:function(size){
        let shelfProps = {
               "margin-right" : property.$brandSocialText_marginR,
               "line-height": property.$brandSocialText_lineHeight,
               "float":"left",
            };
        return shelfProps;
    },
    brandSocialLinksProps:function(size){
         let shelfProps = {
               "color" : property.$brandSocialLinks_color,
                "padding-top":property.$brandSocialLinks_paddingT,
                "margin-right":property.$brandSocialLinks_marginR,
                 "height":property.$brandSocialLinks_height,
                 "float": "left",
                 "text-indent": "-9999px",
            };
        return shelfProps;
    },

    brandFacebookProps:function(size){
        let shelfProps = {
               "width" : property.$brandFacebook_width,
            };
        return shelfProps;
    },
    brandTwitterProps:function(size){
        let shelfProps = {
               "width" : property.$brandTwitter_width,
            };
        return shelfProps;
    },
    brandLinkedinProps:function(size){
        let shelfProps = {
               "width" : property.$brandLinkedin_width,
            };
        return shelfProps;
    },
    brandKeyBenefitTableProps:function(size){
        let shelfProps = {
             "display": "table"
        };
        return shelfProps;
    },
    brandKeyBenefitProps: function(size){
        let shelfProps = {
            "float":"left"
        };
        return shelfProps;
    },
    brandKeyBenefitRowProps:function(size){
        let shelfProps = {
            "float": "left",
       };
       return shelfProps;
    },
    brandKeyBenefitRowFirstChildProps: function(size){
        let shelfProps = {
               "margin-right" : property.$brandKeyBenefit_firstChild_marginR,
               "float": "left",
            };
        return shelfProps;

    },
    brandkeyFirstChildProps: function(size){
        let shelfProps = {
               "margin-right" : "32px",
               "float":"left",
            };
            if(size=="xs"){
                shelfProps['margin-right'] ="16px";
              }
            
        return shelfProps;
    },
    brandkeyBenefitRteProps: function(size){
         let shelfProps = {
                "font-family":property.$brandrte_fontfamily,
                "padding":property.$brandrte_padding,
                "text-align": "center",
                "display": "table-cell",
                "vertical-align": "middle",
            };
            if(size=="xs"){
                shelfProps['width']="136px";
              }

        return shelfProps;
    },

    brandkeyBenefitRteTextProps: function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
               "font-size": property.$brandrte_FontSize,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },

    brandkeyBenefitRteWhiteBandProps: function(size){
        let shelfProps = {
               "font-size" : property.$brandKeyBenefit_whiteBand_fontSize,
            };
        return shelfProps;
    },
    //branding properties
    brandhighLightBrandLinksProps1 : function(size){
        let shelfProps = {
               "background-color" :property.$brandlinksNW_BgColor,
               "color": property.$brandLinks_a_color,
            };
        return shelfProps;
    },

    brandhighLightBrandLinksProps2: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksRbs_BgColor,
              "color":property.$brandLinks_a_color
           };
       return shelfProps;
   },

   brandhighLightBrandLinksProps3: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksUl_BgColor,
              "color":property.$brandLinks_a_color
           };
       return shelfProps;
   },
    brandhighLightBrandLinksProps4 : function(size){
        let shelfProps = {
               "background-color" :property.$brandlinksCoutts_BgColor,
               "color": property.$brandLinks_a_color,
            };
        return shelfProps;
    },

    brandhighLightBrandLinksProps5: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksAdam_BgColor,
              "color":property.$brandLinksColor1
           };
       return shelfProps;
   },

   brandhighLightBrandLinksProps6: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksDrummonds_BgColor,
              "color":property.$brandLinksColor2
           };
       return shelfProps;
   },
    brandhighLightBrandLinksProps7 : function(size){
        let shelfProps = {
               "background-color" :property.$brandlinksHolts_BgColor,
               "color": property.$brandLinks_a_color,
            };
        return shelfProps;
    },

    brandhighLightBrandLinksProps8: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksIOM_BgColor,
              "color":property.$brandLinks_a_color
           };
       return shelfProps;
   },

   brandhighLightBrandLinksProps9: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksLombard_BgColor,
              "color":property.$brandLinks_a_color
           };
       return shelfProps;
   },
    brandhighLightBrandLinksProps10 : function(size){
        let shelfProps = {
               "background-color" :property.$brandlinksRBSInt_BgColor,
               "color": property.$brandLinks_a_color,
            };
        return shelfProps;
    },

    brandhighLightBrandLinksProps11: function(size){
        let shelfProps = {
              "background-color" :property.$brandLinksNWMark_BgColor,
              "color":property.$brandLinks_a_color
           };
       return shelfProps;
   },

   //brand title color props
   brandTitleColorProps1: function(size){
       let shelfProps = {
           "color": property.$brandTitle_color
       };
       return shelfProps;
   },
   brandTitleColorProps2: function(size){
    let shelfProps = {
        "color": property.$brandTitle_color
        };
        return shelfProps;
    },
    brandTitleColorProps3: function(size){
        let shelfProps = {
            "color": property.$brandTitle_color
        };
        return shelfProps;
    },
    brandTitleColorProps4: function(size){
        let shelfProps = {
            "color": property.$brandTitleColor1
        };
        return shelfProps;
    },
    brandTitleColorProps5: function(size){
     let shelfProps = {
         "color": property.$brandTitleColor2
         };
         return shelfProps;
     },
     brandTitleColorProps6: function(size){
         let shelfProps = {
             "color": property.$brandTitleColor2
         };
         return shelfProps;
     },
     brandTitleColorProps7: function(size){
        let shelfProps = {
            "color": property.$brandTitleColor3
        };
        return shelfProps;
    },
    brandTitleColorProps8: function(size){
     let shelfProps = {
         "color": property.$brandTitle_color
         };
         return shelfProps;
     },
     brandTitleColorProps9: function(size){
         let shelfProps = {
             "color": property.$brandTitle_color
         };
         return shelfProps;
     },
     brandTitleColorProps10: function(size){
        let shelfProps = {
            "color": property.$brandTitle_color
        };
        return shelfProps;
    },
    brandTitleColorProps11: function(size){
     let shelfProps = {
         "color": property.$brandTitle_color
         };
         return shelfProps;
     },

  //key benefit bg color property
   keyBenefitPropBgColor11: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit1NW_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor12: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit2NW_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor13: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit3NW_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor14: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit4NW_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor21: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit1Rbs_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor22: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit2Rbs_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor23: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit3Rbs_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor24: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit4Rbs_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor31: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit1Ul_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor32: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit2Ul_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor33: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit3Ul_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor34: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit4Ul_BgColor,
       };
   return shelfProps;
    },
   keyBenefitPropBgColor41: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit1Coutts_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor42: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit2Coutts_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor43: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit3Coutts_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor44: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit4Coutts_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor51: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitAdam_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor52: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitAdam_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor53: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitAdam_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor54: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitAdam_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor61: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitChildCo_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor62: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitChildCo_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor63: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitChildCo_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor64: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitChildCo_BgColor,
       };
   return shelfProps;
    },
       keyBenefitPropBgColor71: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitDrummonds_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor72: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitDrummonds_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor73: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitDrummonds_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor74: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitDrummonds_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor81: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitHolts_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor82: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitHolts_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor83: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitHolts_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor84: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefitHolts_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor91: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit1IOM_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor92: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit2IOM_BgColor,
       };
   return shelfProps;
    },

    keyBenefitPropBgColor93: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit3IOM_BgColor,
           };
       return shelfProps;
        },

    keyBenefitPropBgColor94: function(size){
    let shelfProps = {
        "background-color" :property.$brandBenefit4IOM_BgColor, 
       };
   return shelfProps;
    },
    keyBenefitPropBgColor101: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitLOMB_BgColor,
           };
       return shelfProps;
        },
    
    keyBenefitPropBgColor102: function(size){
            let shelfProps = {
                "background-color" :property.$brandBenefitLOMB_BgColor,
               };
           return shelfProps;
            },
    
    keyBenefitPropBgColor103: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefitLOMB_BgColor,
           };
       return shelfProps;
        },
    
    keyBenefitPropBgColor104: function(size){
            let shelfProps = {
                "background-color" :property.$brandBenefitLOMB_BgColor,
               };
           return shelfProps;
            },
    
     keyBenefitPropBgColor111: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit1RbsIn_BgColor,
           };
       return shelfProps;
        },
    
    keyBenefitPropBgColor112: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit2RbsIn_BgColor,
           };
       return shelfProps;
        },
    
    keyBenefitPropBgColor113: function(size){
            let shelfProps = {
                "background-color" :property.$brandBenefit3RbsIn_BgColor,
               };
           return shelfProps;
            },
    
    keyBenefitPropBgColor114: function(size){
        let shelfProps = {
            "background-color" :property.$brandBenefit4RbsIn_BgColor,
           };
       return shelfProps;
        },
    //key benefit rte color prop
 keyBenefitRteColor11: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor12: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor13: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor14: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor21: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor22: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor23: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor24: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor31: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor32: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor33: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor34: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },
   keyBenefitRteColor41: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color2,
       };
   return shelfProps;
    },

    keyBenefitRteColor42: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor43: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor44: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor51: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor52: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor53: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor54: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor61: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color3,
           };
       return shelfProps;
        },

    keyBenefitRteColor62: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color3,
       };
   return shelfProps;
    },

    keyBenefitRteColor63: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color3,
           };
       return shelfProps;
        },

    keyBenefitRteColor64: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color3,
       };
   return shelfProps;
    },
       keyBenefitRteColor71: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color4,
       };
   return shelfProps;
    },

    keyBenefitRteColor72: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color4,
           };
       return shelfProps;
        },

    keyBenefitRteColor73: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color4,
       };
   return shelfProps;
    },

    keyBenefitRteColor74: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color4,
           };
       return shelfProps;
        },

    keyBenefitRteColor81: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor82: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor83: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor84: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor91: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor92: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1,
       };
   return shelfProps;
    },

    keyBenefitRteColor93: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },

    keyBenefitRteColor94: function(size){
    let shelfProps = {
        "color" :property.$brandBenefitRte_color1, 
       };
   return shelfProps;
    },
    keyBenefitRteColor101: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },
    
    keyBenefitRteColor102: function(size){
            let shelfProps = {
                "color" :property.$brandBenefitRte_color1,
               };
           return shelfProps;
            },
    
    keyBenefitRteColor103: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },
    
    keyBenefitRteColor104: function(size){
            let shelfProps = {
                "color" :property.$brandBenefitRte_color1,
               };
           return shelfProps;
            },
    
     keyBenefitRteColor111: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },
    
    keyBenefitRteColor112: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },
    
    keyBenefitRteColor113: function(size){
            let shelfProps = {
                "color" :property.$brandBenefitRte_color1,
               };
           return shelfProps;
            },
    
    keyBenefitRteColor114: function(size){
        let shelfProps = {
            "color" :property.$brandBenefitRte_color1,
           };
       return shelfProps;
        },
      };
    
 }



  