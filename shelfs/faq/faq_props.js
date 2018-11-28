//Desktop
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {

    faqShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$faq_shelf_padding,
            };
            if(size=="xs"){
              shelfProps['padding'] =property.$faq_shelf_padding_m
            }
        return shelfProps;
    },
    brandBgColor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$faq_brand_bg,
            };
        return shelfProps;
    },
     grayBgColor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$faq_gray_bg,
            };
        return shelfProps;
    }, 
     whiteBgColor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$faq_white_bg,
            };
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
    hgHeadline:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size":property.$faq_head_fs,
               "line-height":property.$faq_head_lh,
               "font-family":property.$faq_head_font,
               "padding-bottom":property.$faq_head_padd,
                "margin":property.$faq_head_mar,
            };
            if(size=="xs"){
                shelfProps['font-size'] =property.$faq_head_fs_m,
                shelfProps["line-height"]=property.$faq_head_lh_m,
                shelfProps["font-family"]=property.$faq_head_font_m,
                shelfProps[ "padding-bottom"]=property.$faq_head_padd_m,
                shelfProps[ "margin"]=property.$faq_head_mar_m
            }
        return shelfProps;
    },   
    hgSignPost  :function(size)  {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$faq_sign_pad,
               "font-size": property.$faq_sign_fs,
               "line-height":property.$faq_sign_lh,
               "font-family":property.$faq_font_ff_boldReg,
            };
            if(size=="xs"){
                shelfProps['padding-bottom'] =property.$faq_sign_pad_m,
                shelfProps["font-size"]=property.$faq_sign_fs_m,
                shelfProps["line-height"]=property.$faq_sign_lh_m
            }
        return shelfProps;
    },
    rteText:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
           "font-size":property.$faq_rte_fs,
           "line-height":property.$faq_rte_lh,
           "font-family":property.$font_family_regular,
        };
        if(size=="xs"){
                 shelfProps["line-height"]=property.$faq_rte_lh_m
            }
        return shelfProps;
    },
    faqCarousel:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
           "margin":property.$faq_caro_mar,
        };
        if(size=="xs"){
            shelfProps["margin"]=property.$faq_caro_mar_m
        }
        return shelfProps;
    },
    faqSlider:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
          "left":"0px",
          "float":"left",
          "position":"relative"
        };
        if(size=="xs"){
          shelfProps['float'] ="none"
        }else if(size!="xs"){
          shelfProps["margin"]=property.$faq_faqslider_margin
        }
        return shelfProps;
    },
    faqItem:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
           "padding":property.$faq_item_pad,
           "margin":property.$faq_item_mar,
        };
        if(size=="xs"){
          shelfProps['padding'] =property.$faq_item_pad_m,
          shelfProps['margin'] =property.$faq_item_mar_m
        }
        return shelfProps;
    },
    oddCols:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "padding":property.$faq_oddCols_padding,      
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
            "transition-timing-function":"ease-in-out, ease-in-out"
        };
        if(size=="xs"){
          shelfProps['padding'] =property.$faq_oddColsPadding_m,
          shelfProps['min-height'] ="0px",
          shelfProps['height'] =property.$faq_oddCols_height_m,
          shelfProps['margin-bottom'] =property.$faq_oddCols_margin_bottom_m,
          shelfProps['background-size'] =property.$faq_oddCols_bg_size_m
        }
        return shelfProps;
    },
     oddColsLink:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
           "font-size":property.$faq_oddColsLink_fs,
           "font-family":property.$faq_oddColsLink_ff,
           "line-height":"22px",
           "float":"left",
           "min-height":"40px",
           "top":"0px",
           "padding":property.$faq_oddColsLink_padd,
           "position":property.$faq_evenColsLink_pos,
           "margin-right":property.$faq_oddColsLink_mar_rgt,
           "margin-top":"0px",
           "overflow":property.$faq_oddColsLink_ovrf,
        };
        if(size=="xs"){
          shelfProps['padding'] =property.$faq_oddColsLink_padd_m,
          shelfProps['position'] ="relative",
          shelfProps['margin-right'] =property.$faq_oddColsLink_mar_rgt_m,
          shelfProps['overflow'] =property.$faq_oddColsLink_ovrf_m
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
          shelfProps['right'] =property.$faq_oddColsLink_right_m,
          shelfProps['top'] =property.$faq_oddColsLink_top_m,
          shelfProps['height'] =property.$faq_arr_hgt_m,
          shelfProps['width'] =property.$faq_arr_wid_m
        }
        return shelfProps;
    },
    evenCols:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
          "padding":property.$faq_evenCols_padding,
          "min-height":property.$faq_oddCols_min_hgt,
          "height":property.$evenColsHeight,
          "margin-bottom":property.$faq_evenCols_margin_bottom,
          "position":"relative",
          "float":"left",
          "background-size":property.$faq_evenCols_bg_size,
          "transform":property.$faq_evenCols_trans,
          "transition-delay":"0s, 0s",
          "transition-duration":"0.2s, 0.4s",
          "transition-property":"transform, background-color",
          "transition-timing-function":"ease-in-out, ease-in-out"
        };
        if(size=="xs"){
          shelfProps['padding'] =property.$faq_evenCols_padding_m,
          shelfProps['min-height'] ="0px",
          shelfProps['height'] =property.$faq_oddCols_height_m,
          shelfProps['margin-bottom'] =property.$faq_evenCols_margin_bottom_m,
          shelfProps['background-size'] =property.$faq_oddCols_bg_size_m
        }
        return shelfProps;
    },
    evenColsLink:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
           "font-size":property.$faq_oddColsLink_fs,
           "font-family":property.$faq_oddColsLink_ff,
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
          shelfProps['padding'] =property.$faq_evenColsLink_pad_m,
          shelfProps['position'] ="relative",
          shelfProps['margin-right'] =property.$faq_evenColsLink_mar_rgt_m
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
          shelfProps['right'] =property.$faq_oddColsLink_right_m,
          shelfProps['top'] =property.$faq_oddColsLink_top_m,
          shelfProps['height'] =property.$faq_arr_hgt_m,
          shelfProps['width'] =property.$faq_arr_wid_m
        }
        return shelfProps;
    },
    // branding bg
    brandHeadline:function(size){
      property = brand.props;
      var shelfProps = {},
        shelfProps = {
         "color" : property.$faq_head_brand_colr,
        };
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
            "transform":property.$faq_brandEColsHov_trans,
        };
        return shelfProps;
    },
    brandOddColsHover:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "transform":property.$faq_brandOColsHov_trans,
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
            "background-color" :property.$faq_brandOlnksFoc_bg_colr,
            "padding-right": property.$faq_brandOlnksFoc_padd_rgt,
            "padding-bottom":property.$faq_brandOlnksFoc_padd_btm,
            "outline-style": property.$faq_brandOlnksFoc_outline,
            "outline-width":property.$faq_brandOlnksFoc_outlineWidth
        };
        return shelfProps;
    },
    brandElnksFocus:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "color":property.$faq_brandElnksFocus_color,
            "background-color" :property.$faq_brandOlnksFoc_bg_colr,
            "padding-right": property.$faq_brandOlnksFoc_padd_rgt,
            "padding-bottom":property.$faq_brandOlnksFoc_padd_btm,
            "outline-style": property.$faq_brandOlnksFoc_outline,
            "outline-width":property.$faq_brandOlnksFoc_outlineWidth
        };
        return shelfProps;
    },

    // for gray bg
    grayHeadline:function(size){
      property = brand.props;
      var shelfProps = {},
          shelfProps = {
             "color" : property.$gry_faq_head_colr,
          };
      return shelfProps;
    },
    grayOddCols:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
         "color":property.$faq_gray_odd_cols,
      };
      return shelfProps;
    },

     grayOddColsArr:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
         "color":property.$faq_gray_odd_cols_arr,
      };
      return shelfProps;
    },
     grayEvenCols:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
         "color":property.$faq_gray_even_cols,
      };
      return shelfProps;
    },
    grayEvenColsArr:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
         "color":property.$faq_gray_even_cols_arr,
      };
      return shelfProps;
    },
    grayEvenColsHover:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "transform":property.$faq_grayEColsHov_trans,
      };
      return shelfProps;
    },
    grayOddColsHover:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "transform":property.$faq_grayOColsHov_trans,
      };
      return shelfProps;
    },
    grayOddColsArrHover:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "color":property.$faq_gray_odd_cols_arr,
      };
      return shelfProps;
    },
    grayEvenColsArrHover:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "color":property.$faq_gray_even_cols_arr,
      };
      return shelfProps;
    },
    grayOlnksFocus:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
            "color":property.$faq_grayO_fs_colr,
            "background-color" :property.$faq_brandOlnksFoc_bg_colr,
            "padding-right":property.$faq_grayO_fs_rgt,
            "padding-bottom":property.$faq_grayO_pad_bot,
            "outline-style": property.$faq_brandOlnksFoc_outline,
            "outline-width":property.$faq_brandOlnksFoc_outlineWidth

      };
      return shelfProps;
    },
    grayElnksFocus:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
            "color":property.$faq_grayE_fs_colr,
            "background-color" :property.$faq_brandOlnksFoc_bg_colr,
            "padding-right":property.$faq_grayO_fs_rgt,
            "padding-bottom":property.$faq_grayO_pad_bot,
            "outline-style": property.$faq_brandOlnksFoc_outline,
            "outline-width":property.$faq_brandOlnksFoc_outlineWidth

      };
      return shelfProps;
    },

    // for White bg
    whiteHeadline:function(size){
      property = brand.props;
      var shelfProps = {},
          shelfProps = {
             "color" : property.$faq_white_head_colr,
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
        "transform":property.$faq_grayEColsHov_trans,
      };
      return shelfProps;
    },
    whiteOddColsHover:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "transform":property.$faq_grayOColsHov_trans,
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
        "color":property.$faq_brandOlnksFocus_color,
        "background-color" :property.$faq_brandOlnksFoc_bg_colr,
        "padding-right": property.$faq_brandOlnksFoc_padd_rgt,
        "padding-bottom":property.$faq_brandOlnksFoc_padd_btm,
        "outline-style": property.$faq_brandOlnksFoc_outline,
        "outline-width":property.$faq_brandOlnksFoc_outlineWidth
      };
      return shelfProps;
    },
     whiteElnksFocus:function(size){
      property = brand.props;
      var shelfProps = {},
      shelfProps = {
        "color":property.$faq_brandElnksFocus_color,
        "background-color" :property.$faq_brandOlnksFoc_bg_colr,
        "padding-right": property.$faq_brandOlnksFoc_padd_rgt,
        "padding-bottom":property.$faq_brandOlnksFoc_padd_btm,
        "outline-style": property.$faq_brandOlnksFoc_outline,
        "outline-width":property.$faq_brandOlnksFoc_outlineWidth
      };
      return shelfProps;
    },

    faqSerWrap:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "clear":"both",
            "padding" :"0px",
            "overflow": "hidden",
            "margin":property.$faq_faqSerWrap_margin,
        };
        if(size=="xs"){
          shelfProps['margin'] =property.$faq_faqSerWrap_margin_m
        }
        return shelfProps;
    },
    bfaqSertitle:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "font-size":"20px",
            "line-height" :"24px",
            "margin":"0px 0px 24px",
            "display":"block",
            "font-family":'RNHouseSansRegular",sans-serif'
        };
        return shelfProps;
    },
    fqSerBtn:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "font-size":"18px",
            "line-height" :property.$faq_fqSerBtn_line_height,
            "padding":property.$faq_fqSerBtn_padding,
            "text-align":"center",
            "margin":property.$faq_fqSerBtn_margin,
            "height":property.$faq_shelfProps_height,
            "border-radius":property.$faq_fqSerBtn_border_radius,
        };
        if(size=="xs"){
          shelfProps['line-height'] ="normal",
          shelfProps['padding'] ="0px",
          shelfProps['margin'] =property.$faq_fqSerBtn_margin_m,
          shelfProps['height'] =property.$faq_shelfProps_height_m,
          shelfProps['border-radius'] =property.$faq_fqSerBtn_border_radius_m
        }
        return shelfProps;
    },
    brandfqSerBtn:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "background-color":property.$b_faq_sear_btn_bg,
            "color":"rgba(255, 255, 255, 1)",
            "box-shadow":property.$b_faq_sear_btn_shadow
        };
        if(size=="xs"){
          shelfProps['background-color'] =property.$b_faq_sear_btn_bg_m,
          shelfProps["color"]=property.$b_faq_sear_btn_color_m,
          shelfProps['box-shadow'] =property.$b_faq_sear_btn_shadow_m
        }
        return shelfProps;
    },
     greyfqSerBtn:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "background-color":property.$faq_sear_btn_bg,
            "color":"rgba(255, 255, 255, 1)",
            "box-shadow":property.$faq_sear_btn_shadow
        };
        if(size=="xs"){
          shelfProps['background-color'] =property.$gray_faq_sear_btn_bg_m,
          shelfProps['box-shadow'] =property.$b_faq_sear_btn_shadow_m
        }
        return shelfProps;
    },
    whitefqSerBtn:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "background-color":property.$faq_sear_btn_bg,
            "color":"rgba(255, 255, 255, 1)",
            "box-shadow":property.$faq_sear_btn_shadow
        };
        if(size=="xs"){
          shelfProps['background-color'] =property.$white_faq_sear_btn_bg_m,
          shelfProps['box-shadow'] =property.$b_faq_sear_btn_shadow_m
        }
        return shelfProps;
    },
    fqSerField:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "margin":property.$b_faq_sear_fld,
            "float":property.$b_faq_sear_flt
        };
        if(size=="xs"){
          shelfProps['margin'] ="0px",
          shelfProps['float'] ="left"
        }
        return shelfProps;
    },
    fqSerInpt:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
            "display" :"inline-block",
            "font-size":property.$faq_fqSerInpt_fs,
            "line-height":property.$faq_fqSerInpt_lh,
            "margin":property.$faq_fqSerInpt_mar,
            "padding":property.$faq_fqSerInpt_padding,
            "border-radius":property.$faq_fqSerInpt_rad
        };
        if(size=="xs"){
          shelfProps['font-size'] =property.$faq_fqSerInpt_fs_m,
          shelfProps['line-height'] =property.$faq_fqSerInpt_lh_m,
          shelfProps['margin'] =property.$faq_fqSerInpt_mar_m,
          shelfProps['padding'] =property.$faq_fqSerInpt_padding_m,
          shelfProps['border-radius'] =property.$faq_fqSerInpt_rad_m
          
        }
        return shelfProps;
    },
    brandfqSerInpt:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
             "color":property.$faq_fqSerInpt_colr,
             "box-shadow":property.$faq_fqSerInpt_box_shadow,
        };
        if(size=="xs"){
          shelfProps['color'] =property.$faq_white_fqSerInpt_color_m,
          shelfProps['box-shadow'] =property.$faq_fqSerInpt_box_shadow_m
        }
        return shelfProps;
    },
    grayfqSerInpt:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
             "color":property.$faq_fqSerInpt_colr,
             "box-shadow":property.$faq_fqSerInpt_box_shadow,
        };
         if(size=="xs"){
          shelfProps['color'] =property.$faq_fqSerInpt_color_m,
          shelfProps['box-shadow'] =property.$faq_fqSerInpt_box_shadow_m
        }
        return shelfProps;
    },
    whitefqSerInpt:function(size){
        property = brand.props;
        var shelfProps = {},
        shelfProps = {
             "color":property.$faq_white_fqSerInpt_color,
             "box-shadow":property.$faq_fqSerInpt_box_shadow,
        };
        if(size=="xs"){
          shelfProps['color'] =property.$faq_white_fqSerInpt_color_m,
          shelfProps['box-shadow'] =property.$faq_fqSerInpt_box_shadow_m
        }
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

    blueCols : function(size){
        property = brand.props;
        var shelfProps = {};
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
        property = brand.props;
        var shelfProps = {};
        shelfProps = {
            "padding-right" : "30px",

        };
        return shelfProps;
    },
  };

    
}