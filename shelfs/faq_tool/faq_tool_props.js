module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {

    faqShelf: function(size) {
       
      let shelfProps = {
               "padding" : property.$faq_shelf_padding,
            };
            if(size=="xs"){
                shelfProps['padding'] =property.$faq_shelf_padding_mob;
            }
        return shelfProps;
    },

    hdgroup : function(size) {
        let shelfProps = {
                "padding" :"0px 0px 8px",
                "font-size" : property.$hgfontsize,
                "font-family" : property.$hdgroupffamily,
                "line-height" : property.$hdgrouplheight,
                "font-weight" : property.$hdgroupfweight,
                //"color" : property.$hdgroupcolor,
              };
              if(size=="xs"){
                shelfProps['padding'] =property.$faq_hdgroup_padding_mob,
                shelfProps['font-size'] =property.$hgfontsize_mob,
                shelfProps['font-family'] =property.$hdgroupffamily_mob,
                shelfProps['line-height'] =property.$hdgrouplheight_mob
            }
          return shelfProps;
        },

    faqCarousel : function(size) {
        let shelfProps = {
                "left" : "auto",   
              };
              return shelfProps;
       },

    faqSlider : function(size) {
        let shelfProps = {
                "margin" : "0px",
                "left" : "0px",
                "float" : "left",
                "margin" : property.$faqCorouselpadding,
                
              };

              if(size=="xs"){
                shelfProps['left'] = "auto",
                shelfProps['float'] = "none"
              }
              return shelfProps;
       },

    faqItem : function(size) {
        let shelfProps = {
                "padding" : "0px 0px 0px 30px",
                "margin"  : "15px 0px 8px",
              };
              
              if(size=="xs"){
                shelfProps['padding'] = "0px";
                shelfProps['margin'] = "0px";
              }
              
              return shelfProps;
       },

    bluebgcolor : function(size) {
        let shelfProps = { 
            "background-color" : "rgba(66, 20, 95, 1)",
             };
              return shelfProps;
    },

    offwhitebgcolor : function(size) {
        let shelfProps = { 
            "background-color" :  property.$faqtool_offwhitebg,
             };
              return shelfProps;
    },

    lightbluebgcolor : function(size) {
        let shelfProps = { 
            "background-color" : "rgba(223, 217, 209, 1)",
        };
              return shelfProps;
    },

    whitebgcolor : function(size) {
        let shelfProps = { 
            "background-color" : "rgba(247, 247, 245, 1)",
             };
              return shelfProps;
    },

    whitebgheadline : function(size) {
        let shelfProps = { 
            "color" : "rgba(66, 20, 95, 1)",
             };
              return shelfProps;
    },

    lightbluebgheadline : function(size) {
        let shelfProps = { 
            "color" : "rgba(66, 20, 95, 1)",
             };
              return shelfProps;
    },

    offwhitebgheadline : function(size) {
        let shelfProps = { 
            "color" : "rgba(66, 20, 95, 1)",
             };
              return shelfProps;
    },

    bluebgheadline : function(size) {
        let shelfProps = { 
            "color" : "rgba(255, 255, 255, 1)"
             };
              return shelfProps;
    },
    overlaystruct : function(size){
        property = brand.props;
        var shelfProps = {};
        shelfProps = {
            "padding" : property.$faqolstructpadding,

        };
        return shelfProps;
    },

    olquestion : function(size){
        property = brand.props;
        var shelfProps = {};
        shelfProps = {
            "margin" : "-2px 0px 10px -1px",
            "color" : property.$faqolcolor,
            "font-familiy" : "RNHouseSansBold, sans-serif",
            "font-size" : "32px",
            "font-weight" : "700",
            "line-height" : "36px",
            "width" : "450px",
        };
        return shelfProps;
    },

    olp : function(size){
        property = brand.props;
        var shelfProps = {};
        shelfProps = {
            "color" : property.$faqolpcolor,
            "font-family" : "RNHouseSansRegular, sans-serif",
            "font-size" : "14px",

        };
        return shelfProps;
    },

    olfaqinner : function(size){
       
      let  shelfProps = {
            "padding-right" : "30px",

        };
        return shelfProps;
    },

    oddCols:function(size){
       
        let shelfProps = {
            "padding": "14px 2px 25px 20px",      
            "min-height":property.$faq_oddCols_min_hgt,
            "height":property.$faq_oddCols_height,
            "margin-bottom":property.$faq_oddCols_margin_bottom,
            "position":"relative",
            "float":"left",
            "background-size":property.$faq_oddCols_bg_size,
            "transform":"matrix(1, 0, 0, 1, 0, 0)",
            "transition-delay":"0s, 0s",
            "transition-duration":"0.2s, 0.4s",
            "transition-property":"transform, background-color",
            "transition-timing-function":property.$faqtool_transitiontiming,
        };
       if(size=="xs"){
            shelfProps['margin-bottom'] =property.$faq_oddCols_margin_bottom_mob,
            shelfProps['background-size'] = property.$faq_oddCols_bg_size_mob,
            shelfProps['height'] = "176px",
            shelfProps['min-height'] = property.$faq_oddCols_min_hgt_mob,
            shelfProps['padding']= "14px 16px 0px"

        }
        return shelfProps;
    },


        oddColsLink:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
            "font-size":property.$faq_oddColsLink_fs,
            "font-family":property.$faqtool_oddColsLink_ff,
            "line-height":"22px",
            "float":"left",
            "min-height":"40px",
            "top":"0px",
            "padding":property.$faq_oddColsLink_padd,
            "position":property.$faq_evenColsLink_pos,
            "margin-right":property.$faq_oddColsLink_mar_rgt,
            "margin-top":"0px",
            //"overflow":property.$faq_tool_oddColsLink_ovrf,
            };

            if(size=="xs"){
                shelfProps['position'] =property.$faq_evenColsLink_pos_mob,
                shelfProps['padding'] = property.$faq_oddColsLink_padd_mob,
                shelfProps['font-family'] = property.$faqtool_oddColsLink_ff_mob
    
            }
            return shelfProps;
        },
        oddColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
            "right":property.$faq_oddColsArr_right,
            "top":property.$faq_oddColsArr_top,
            "height":property.$faq_arr_hgt,
            "width":property.$faq_arr_wid,
            "position":"absolute",
            "display":"block"
            };
            if(size=="xs"){
                shelfProps['top'] =property.$faq_oddColsArr_top_mob,
                shelfProps['height'] = "22px",
                shelfProps['width'] =property.$faq_arr_wid_mob,
                shelfProps['right'] =property.$faq_oddColsArr_right_mob
            }
            return shelfProps;
        },

        evenCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "padding":property.$faqtool_evenCols_padding,
              "min-height":property.$faq_oddCols_min_hgt,
              "height":property.$evenColsHeight,
              "margin-bottom":property.$faq_evenCols_margin_bottom,
              "position":"relative",
              "float":"left",
              "background-size":property.$faq_evenCols_bg_size,
              "transform":property.$faqtool_evenCols_trans,
              "transition-delay":"0s, 0s",
              "transition-duration":"0.2s, 0.4s",
              "transition-property":"transform, background-color",
              "transition-timing-function":property.$faqtool_transitiontiming
            };
            if(size=="xs"){
                shelfProps['margin-bottom'] =property.$faq_evenCols_margin_bottom_mob,
                shelfProps['background-size'] = property.$faq_evenCols_bg_size_mob,
                shelfProps['height'] = "176px",
                shelfProps['min-height'] = property.$faq_oddCols_min_hgt_mob,
                shelfProps['padding']= "14px 16px 0px"
    
            }
            return shelfProps;
        },
        evenColsLink:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "font-size":property.$faq_oddColsLink_fs,
               "font-family":property.$faqtool_oddColsLink_ff,
               "line-height":"22px",
               "float":"left",
               "min-height":"40px",
               "top":"0px",
               "padding":property.$faq_evenColsLink_pad,
               "position":property.$faq_evenColsLink_pos,
               "margin-right":property.$faq_evenColsLink_mar_rgt,
               "margin-top":"0px"
            };
            if(size=="xs"){
                shelfProps['position'] =property.$faq_evenColsLink_pos_mob,
                shelfProps['padding'] = property.$faq_evenColsLink_pad_mob,
                shelfProps['font-family'] = property.$faqtool_oddColsLink_ff_mob
    
            }
            return shelfProps;
        },
        evenColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "right":property.$faq_oddColsArr_right,
               "top": property.$faq_oddColsArr_top,
               "height":property.$faq_arr_hgt,
               "width":property.$faq_arr_wid,
               "position":"absolute",
               "display":"block"
            };
            if(size=="xs"){
                shelfProps['top'] =property.$faq_oddColsArr_top_mob,
                shelfProps['height'] = "22px",
                shelfProps['width'] =property.$faq_arr_wid_mob,
                shelfProps['right'] =property.$faq_oddColsArr_right_mob
            }
            return shelfProps;
        },

        brandOddCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_brand_odd_cols,
            };
            return shelfProps;
          },
           brandOddColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_brand_odd_cols_arr,
            };
            return shelfProps;
          },

          brandEvenCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_brand_Even_cols,
            };
            return shelfProps;
          },
          brandEvenColsArr:function(size){
              property = brand.props;
              var shelfProps = {},
              shelfProps = {
                 "color":property.$faq_brand_odd_cols_arr,
              };
              return shelfProps;
          },
          brandEvenColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "transform":property.$faqtool_brandEColsHov_trans,
            };
            return shelfProps;
        },
        brandOddColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "transform":property.$faqtool_brandOColsHov_trans,
            };
            return shelfProps;
        },
        brandOddColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "color":property.$faq_brand_odd_cols_arr,
            };
            return shelfProps;
        },
        brandEvenColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "color":property.$faq_brand_odd_cols_arr,
            };
            return shelfProps;
        },
        brandOlnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "color":property.$faq_brandOlnksFocus_color,
                "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
                "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
                "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
                "outline-style": property.$faq_brandOlnksFoc_outline,
                "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
    
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob
            }

            return shelfProps;
        },
        brandElnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                "color":property.$faq_brandElnksFocus_color,
                "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
                "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
                "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
                "outline-style": property.$faq_brandOlnksFoc_outline,
                "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
    
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob
            }
            return shelfProps;
        },

        grayOddColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayOColsHov_trans,
            };
            return shelfProps;
          },

        grayOddColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_gray_odd_cols_arr,
            };
            return shelfProps;
          },

          grayOddCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_gray_odd_cols,
            };
            return shelfProps;
          },
      
           grayOddColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_gray_odd_cols_arr,
            };
            return shelfProps;
          },
           grayEvenCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_gray_even_cols,
            };
            return shelfProps;
          },
          grayEvenColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_gray_even_cols_arr,
            };
            return shelfProps;
          },
          grayEvenColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayEColsHov_trans,
            };
            return shelfProps;
          },
          grayEvenColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_gray_even_cols_arr,
            };
            return shelfProps;
          },
          grayOlnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                  "color":property.$faq_grayO_fs_colr,
                  "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
                  "padding-right":property.$faqtool_grayO_fs_rgt,
                  "padding-bottom":property.$faqtool_grayO_pad_bot,
                  //"outline-style": property.$faqtool_brandOlnksFoc_outline,
                  "outline-width":property.$faq_brandOlnksFoc_outlineWidth,
                  "outline-style": "none",
      
            };
            if(size=="xs"){
    
                shelfProps['padding-right'] =property.$faqtool_grayO_fs_rgt_mob
            }
            return shelfProps;
          },
          grayElnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
                  "color":property.$faqtool_grayE_fs_colr,
                  "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
                  "padding-right":property.$faqtool_grayO_fs_rgt,
                  "padding-bottom":property.$faqtool_grayO_pad_bot,
                  //"outline-style": property.$faq_brandOlnksFoc_outline,
                  "outline-width":property.$faq_brandOlnksFoc_outlineWidth,
                  "outline-style": "none",
      
            };
            if(size=="xs"){
    
                shelfProps['padding-right'] =property.$faqtool_grayO_fs_rgt_mob
            }
            return shelfProps;
          },
          headerGroup:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "padding-top" :property.$faq_head_grp,
                   "margin":"0px",
                   "position": "relative",
                };
            return shelfProps;
        },
        

        whiteOddCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_white_odd_cols,
            };
            return shelfProps;
          },
      
           whiteOddColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_white_odd_cols_arr,
            };
            return shelfProps;
          },
          whiteEvenCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_white_even_cols,
            };
            return shelfProps;
          },
          whiteEvenColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_white_even_cols_arr,
            };
            return shelfProps;
          },
          whiteEvenColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayEColsHov_trans,
            };
            return shelfProps;
          },
          whiteOddColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayOColsHov_trans,
            };
            return shelfProps;
          },
          whiteOddColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faq_white_odd_cols_arr,
            };
            return shelfProps;
          },
          whiteEvenColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faq_white_even_cols_arr,
            };
            return shelfProps;
          },
          whiteOlnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_brandOlnksFocus_color,
              "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
              "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
              "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
              "outline-style": property.$faq_brandOlnksFoc_outline,
              "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob,
                shelfProps['padding-bottom'] =property.$faqtool_brandOlnksFoc_padd_btm_mob
               
              }
            return shelfProps;
          },
           whiteElnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faq_brandElnksFocus_color,
              "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
              "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
              "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
              "outline-style": property.$faq_brandOlnksFoc_outline,
              "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob
               
              }
            return shelfProps;
          },

          //Blue Background

          blueOddCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_blue_odd_cols,
            };
            return shelfProps;
          },
      
           blueOddColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faqtool_blue_odd_cols_arr,
            };
            return shelfProps;
          },
          blueEvenCols:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_blue_even_cols,
            };
            return shelfProps;
          },
          blueEvenColsArr:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
               "color":property.$faq_blue_even_cols_arr,
            };
            return shelfProps;
          },
          blueEvenColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayEColsHov_trans,
            };
            return shelfProps;
          },
          blueOddColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayOColsHov_trans,
            };
            return shelfProps;
          },
          blueOddColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_blue_odd_cols_arr,
            };
            return shelfProps;
          },
          blueEvenColsArrHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_blue_even_cols_arr,
            };
            return shelfProps;
          },
          blueOlnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faqtool_blueOlnksFocus_color,
              "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
              "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
              "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
              "outline-style": property.$faq_brandOlnksFoc_outline,
              "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob
               
              }

            return shelfProps;
          },
           blueElnksFocus:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "color":property.$faq_brandElnksFocus_color,
              "background-color" :property.$faqtool_brandOlnksFoc_bg_colr,
              "padding-right": property.$faqtool_brandOlnksFoc_padd_rgt,
              "padding-bottom":property.$faqtool_brandOlnksFoc_padd_btm,
              "outline-style": property.$faq_brandOlnksFoc_outline,
              "outline-width":property.$faq_brandOlnksFoc_outlineWidth
            };
            if(size=="xs"){
                shelfProps['padding-right'] =property.$faqtool_brandOlnksFoc_padd_rgt_mob
               
              }
            return shelfProps;
          },
          blueOddColsHover:function(size){
            property = brand.props;
            var shelfProps = {},
            shelfProps = {
              "transform":property.$faqtool_grayOColsHov_trans,
            };
            return shelfProps;
          },

          nxtArrow:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['right'] =property.$faq_nxtArr_rgt,
              shelfProps['position'] ="absolute",
              shelfProps['width'] =property.$faq_nxtArr_wid,
              shelfProps['margin-top'] =property.$faq_nxtArr_mar,
              shelfProps['display'] =property.$faq_nxtArr_disp,
              shelfProps['height'] =property.$faq_nxtArr_hgt
            }
            return shelfProps;
        },
        prevArrow:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['left'] =property.$faq_prevArr_rgt,
              shelfProps['position'] ="absolute",
              shelfProps['width'] =property.$faq_prevArr_wid,
              shelfProps['margin-top'] =property.$faq_prevArr_mar,
              shelfProps['display'] =property.$faq_nxtArr_disp,
              shelfProps['height'] =property.$faq_prevArr_hgt
            }
            return shelfProps;
        },
        arrowDis:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['background-color'] =property.$faq_arrDis_bg
            }
            return shelfProps;
        },
        grayArrows:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['color'] =property.$faq_arrGray_colr,
              shelfProps['background-color'] =property.$faq_arrGray_bg
            }
            return shelfProps;
        },
        brandArrows:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['color'] =property.$faq_arrBrand_colr,
              shelfProps['background-color'] =property.$faq_arrBrand_bg
            }
            return shelfProps;
        },
        whiteArrows:function(size){
            property = brand.props;
            var shelfProps = {};
            if(size=="xs"){
              shelfProps['color'] =property.$faq_arrWhite_colr,
              shelfProps['background-color'] =property.$faq_arrWhite_bg
            }
            return shelfProps;
        },
    
      };
    
         
        }

