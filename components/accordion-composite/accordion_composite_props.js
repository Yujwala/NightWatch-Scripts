var rte_props = require('../rte/rte_props.js');
 
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    shelfClsProps: function(size) {
            let shelfProps = {
               "padding-top" :  property.$accComp_pt,
               "padding-bottom" : property.$accComp_pb,
            };
            if(size=="xs"){
                shelfProps["padding-top"] = property.$accComp_ptxs,
                shelfProps["padding-bottom"] =property.$accComp_pbxs
            }
        return shelfProps;
    },
    shelfInnerProps: function(size) {
            let  shelfProps = {
               "padding-left" : property.$accComp_pl,
               "padding-right" : property.$accComp_pr,
            };
            if(size=="xs"){
                shelfProps["padding-left"] = "16.003px",
                shelfProps["padding-right"] = "16.003px"
            }
        return shelfProps;
    },
     themeWhiteShelf: function(size) {
            let shelfProps = {
               "background-color" : property.$canvas_bg_color,
               "color" : property.$accComp_primary_1
            };
        return shelfProps;
    },
     themeBlueShelf: function(size) {
            let shelfProps = {
               "background-color" : property.$primary_1,
               "color" : property.$primary_2
            };
        return shelfProps;
    },
    titleWrapProps: function(size) {
            let shelfProps = {
                "margin-bottom" : property.$accCompTit_mb,
                "font-family" : "RNHouseSansRegular, sans-serif",
                "position" : "relative"
             };
             if(size=="xs"){
                shelfProps["margin-bottom"] = "6.5px"
            }
        return shelfProps;
    },
    titleSubProps: function(size) {
            let shelfProps = {
                "font-size" : property.$accCompTitSub_fs,
                "display" : property.$accCompTitSub_disp,
             };
             if(size=="xs"){
                shelfProps["font-size"] = "14px"
            }
        return shelfProps;
    },
    titleClsProps: function(size) {
            let shelfProps = {
               "font-size" : property.$accCompTit_fs,
               "line-height" : property.$accCompTit_lh,
               "margin" : "0px",
               "font-family" : property.$accCompTit_ff,
            };
            if(size=="xs"){
                shelfProps["font-size"] = "26px",
                shelfProps["line-height"] = "30px",
                shelfProps["margin"] = "3.12px 0px 0px"
            }
            return shelfProps;
    },
    accordionProps: function(size) {
            let shelfProps = {
               "border-top" : property.$accComp_border,
               "background-color" : property.$acccComp_bgclr
            };
            if(size=="xs"){
                shelfProps["border-top"] = property.$accComp_borderxs
            }
            return shelfProps;
    },
    accItemProps: function(size) {
            let shelfProps = {
                "border-bottom" :  property.$accComp_border,
                "overflow" : "hidden"
            };
            if(size=="xs"){
                shelfProps["border-bottom"] =  property.$accComp_borderxs
            }
            return shelfProps;
    },
    accOddProps: function(size) {
            let shelfProps = {
                "background-color" : property.$accComp_bgclr,
            };
            if(size=="xs"){
                shelfProps["background-color"] = property.$accComp_bgclrxs
            }
            return shelfProps;
    },
    accHeaderProps: function(size) {
            let shelfProps = {
                "padding": property.$accComp_hdpad,
                "position": "relative",
                "font-size": "18px",
                "overflow" : "hidden"
            };
            if(size=="xs"){
                shelfProps["padding"] = property.$accComp_hdpadxs
            }
            return shelfProps;
    },
    accContentProps: function(size) {
            let shelfProps = {
               "float" : "left",
               "display" : "none",
               "padding-top" : "24.05px",
               "padding-bottom" : "24.05px"
            };
            if(size=="xs"){
                shelfProps["padding-top"] = property.$accComp_padtxs
            }
            return shelfProps;
    },
    accFocusProps: function(size) {
            let shelfProps = {
               "text-decoration" : property.$accComp_tc,
               "outline" : property.$accComp_fc,
            };
            return shelfProps;
    },
    accHeaderLinkProps: function(size) {
            let shelfProps = {
                "position": "absolute",
                "left": "0px",
                "top": "0px",
                "z-index": "9999",
                "text-indent": "-9999px"
            };
            return shelfProps;
    },
    accHeadProps: function(size) {
            let shelfProps = {
                "float": "left",
                "padding": "10.08px 0px 10.08px 45px",
                "line-height": "21.6px",
                "position": "relative",
                "font-family": "RNHouseSansRegular, sans-serif"
            };
            return shelfProps;
    },
   
    accIconExpProps: function(size) {
            let shelfProps = {
              "margin-right" : property.$accComp_mr,
              "float": "none",
              "padding" :  property.$accComp_pad,
              "position": "absolute",
              "left": "0px",
              "top": "6px",
              "background-color" : "rgba(42, 44, 88, 1)",
               "color" : "rgba(255, 255, 255, 1)"
            };
            if(size=="xs"){
                shelfProps["top"]=property.$accComp_top
            }
            return shelfProps;
    },
    accIconCollapseProps: function(size) {
            let shelfProps = {
                "position": "absolute",
                "left": "-1px",
                "top": "-1px",
                "width" : "1px",
                "overflow" : "hidden"
            };
        return shelfProps;
    },
    
    rteTextProps: function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "color" : property.$accComp_rteclr,
               "padding-bottom" :"14px",
            };
            if(size=="xs"){
                shelfProps["padding-bottom"]=property.$accComp_rtepbxs
            }
        return shelfProps;
    },
    rteulliprops :function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "margin" : "5px 0px",
               "padding-left" : "9.632px",
               "color" :  property.$accComp_rteclr
            };
            if(size=="xs"){
                shelfProps["margin"]="5px 0px",
                shelfProps["padding-left"]=property.$accComp_rteplxs,
                shelfProps[ "color"]=property.$accComp_rteclr
            }
        return shelfProps;
    },
    rteolliprops :function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "margin" : "5px 0px"
            };
            return shelfProps;
    },
    rteLinkprops :function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "text-decoration":property.$accComprte_link,
               "color" : property.$accCompLinkclr,
               "display" : property.$accCompDisp,
            };
            return shelfProps;
    },
    rteLiaprops :function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "text-decoration":property.$accComprte_link,
               "color" : property.$accCompLinkclr
            };
            return shelfProps;
    },
    accLiFocusprops : function(size) {
            shelfProps = {
               "text-decoration":"none solid rgb(66, 20, 95)",
               "color" : "rgba(66, 20, 95, 1)",
               "outline" : "rgb(255, 191, 71) solid 3px"
            };
            return shelfProps;
    },
    rteTableprops :function(size) {
        let rteprops=rte_props.PropTextfs12(size),
            shelfProps = {
               "border": "2px solid rgb(255, 255, 255)",
               "border-radius" : "0px",
               "color" :property.$accComp_rteclr,
               "border-collapse" :"collapse", 
               "font-family" : "RNHouseSansRegular, sans-serif",
               "font-size" : "13px"
            };
            if(size=="xs"){
                shelfProps["border"] =  "2px solid rgb(180, 169, 159)"
            }
            return shelfProps;
    },
    rteImageprops :function(size) {
        shelfProps = {
           "margin-bottom" : "13px"
        };
        return shelfProps;
    },
    rteVideoprops :function(size) {
        shelfProps = {
           "margin-bottom" : "13px",
           "position" :  property.$accComp_rtepos,
        };
        return shelfProps;
    },  
    rteVideoPlayprops : function(size) {
        shelfProps = {
           "margin-bottom" : "16px",
           "position" : property.$accComp_rtepos,
           "color" : property.$accComp_rteclr,
           "font-family" : "RNHouseSansRegular, sans-serif",
        };
        return shelfProps;
    },
    rtePlayerprops : function(size) {
        shelfProps = {
           "display" : "block",
           "font-size" : "16px",
           "min-height" : "0px",
           "overflow" : "hidden",
           "background-color" : "rgba(0, 0, 0, 1)",
           "font-family" : "Arial, Helvetica, sans-serif",
           "box-sizing" : "border-box"
        };
        return shelfProps;
    }, 
    rteAspectprops : function(size) {
        shelfProps = {
           "display" : "block"
        };
        return shelfProps;
    }, 
    ctaSecondaryprops: function(size) {
        shelfProps = {
           "margin" : property.$accComp_ctasmar,
           "padding" : property.$accComp_ctaspad,
           "line-height" :property.$accComp_ctaslh,
           "font-size" : "18px",
           "color" : property.$accComp_ctasclr,
        };
        if(size=="xs"){
            shelfProps["padding"] = property.$accComp_ctaspadxs,
            shelfProps["margin"] = "3px 0px 1px",
            shelfProps["line-height"] = "22px"
        }
        return shelfProps;
    },
    ctaPrimaryprops: function(size) {
        shelfProps = {
           "margin" : "10px 21px 16px 0px",
           "padding" : property.$accComp_ctappad,
           "background-color" : property.$accComp_ctapbgclr,
           "border-radius" : property.$accComp_ctapbr,
           "line-height" : "24px",
           "font-size" : "18px",
           "color" : "rgba(255, 255, 255, 1)"
        };
        if(size=="xs"){
            shelfProps["padding"] = property.$accComp_ctappadxs,
            shelfProps["margin"] = property.$accComp_ctapmarxs
        }
        return shelfProps;
    },
    ctaPrimaryHoverProps: function(size) {
        shelfProps = {
           "background-color" : property.$accComp_ctaphover,
           "color" : "rgba(255, 255, 255, 1)"
        };
        return shelfProps;
    },
    ctaPrimaryFocusProps: function(size) {
        shelfProps = {
           "background-color" : property.$accComp_ctapfocus,
           "color" : property.$accComp_ctapclr,
        };
        return shelfProps;
    },
    accHeadgrpprops : function(size) {
        shelfProps = {
           "margin-bottom" :  property.$accCompTit_mb
        };
        return shelfProps;
    },
    accHeadgrppostprops : function(size) {
        shelfProps = {
          // "font-size" : property.$accCompTit_fs,
           "display" :  property.$accCompTitSub_disp
        };
        return shelfProps;
    },
    accHeadgrplineprops : function(size) {
        shelfProps = {
           "font-size" : property.$accCompTit_fs,
           "margin" : "0px",
           "line-height" : property.$accCompTit_lh,
           "font-family" : property.$accCompTit_ff,
        };
        return shelfProps;
    },
    accBlockquoteprops : function(size) {
        shelfProps = {
           "color" : property. $accCompBlk_clr,
           "font-size" : property.$accCompBlk_fs,
           "line-height" : property.$accCompBlk_lh,
           "margin-bottom" : property.$accCompBlk_mar,
        };
        return shelfProps;
    },
    accGridprops: function(size) {
        shelfProps = {
           "margin-left" : "-66.456px"
        };
        if(size=="xs"){
            shelfProps["margin-left"] = "0px"
           // shelfProps["padding-right"] = "21.780px"
        }
        return shelfProps;
    },
    accContentGridprops: function(size) {
        shelfProps = {
           "margin-left" : "-47.996px"
        };
        if(size=="xs"){
            shelfProps["margin-left"] = "0px"
            //shelfProps["padding-right"] = "21.780px"
        }
        return shelfProps;
    },
    accGridWholeprops: function(size) {
        shelfProps = {
           "padding-left" : "66.456px"
        };
        if(size=="xs"){
            shelfProps["padding-left"] = "0px"
            //shelfProps["padding-right"] = "21.780px"
        }
        return shelfProps;
    },
    accGridOnethirdprops: function(size) {
        shelfProps = {
           "padding-left" : "47.996px"
        };
        if(size=="xs"){
            shelfProps["padding-left"] = "0px"
            //shelfProps["padding-right"] = "21.780px"
        }
        return shelfProps;
    },
    heavyBandRowEvenProps: function(size){
        property = brand.props;
         var shelfProps = {},
             shelfProps = {
                "background-color": property.$heavyrow_even_bgColor
             };
         return shelfProps;
     },
      heavyBandRowOddProps: function(size){
        property = brand.props;
         var shelfProps = {},
             shelfProps = {
                "background-color": property.$heavyrow_odd_bgColor
             };
         return shelfProps;
     },
      lightBandRowEvenProps: function(size){
        property = brand.props;
         var shelfProps = {},
             shelfProps = {
                "background-color": property.$lightrow_even_bgColor
             };
         return shelfProps;
     },
      lightBandRowOddProps: function(size){
        property = brand.props;
         var shelfProps = {},
             shelfProps = {
                "background-color": property.$lightrow_odd_bgColor
             };
         return shelfProps;
     },
   };
   
}
