var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get()),
    property = brand.props;
//tool  shelf props
module.exports = {
    contentwrapper: function (size) {
        let shelfProps = {
            "overflow": property.$od_contentwrap_overflow,
            "background": property.$od_contentwrap_background,
            "position": property.$od_contentwrap_pos,
           

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },
    contentquestion: function (size) {
        let shelfProps = {
            
            "position": property.$od_question_pos,
            "left":property.$od_question_left,
            "top":property.$od_question_top,
            "z-index":property.$od_question_zindex,

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },
    headerwrapper: function (size) {
        let shelfProps = {
            "padding": property.$od_wrapper_padding,
           // "height": property.$od_headwrapper_height,
            

        };
        if (size === 'xs') {
           
            shelfProps['padding'] = property.$od_wrapper_padding_M;
        }
        return shelfProps;
    },
    headwrapbanner: function (size) {
        let shelfProps = {
            "padding-top": property.$od_banner_padding_top,
            

        };
        if (size === 'xs') {
            
            shelfProps['padding-top'] = property.$od_banner_padding_top_M;
        }
        return shelfProps;
    },
    headwrapbannerhtag: function (size) {
        let shelfProps = {
            "font-size": property.$od_banner_font_sizehtag,
            "line-height": property.$od_banner_line_heigthhtag,
            "font-family": property.$od_banner_font_familyhtag,
            

        };
        if (size === 'xs') {
            
            shelfProps['line-height'] = property.$od_banner_line_heigthhtag_M;
            shelfProps['font-size'] = property.$od_banner_font_sizehtag_M;
        }
        return shelfProps;
    },
    headrichtxtptag: function (size) {
        let shelfProps = {
            "font-size": property.$od_banner_richtext_font_size,
            "line-height": property.$od_banner_richtext_lineheight,
            "padding": property.$od_banner_richtext_padding,
            "font-family": property.$od_banner_richtext_font_family,
            

        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_banner_richtext_lineheight_M;
            shelfProps['font-size'] = property.$od_banner_richtext_font_size_M;
            shelfProps['padding'] = property.$od_banner_richtext_padding_M;
        }
        return shelfProps;
    },
    middlewrapper: function (size) {
        let shelfProps = {
            
            "margin": property.$od_middlewaremargin,
            "padding-bottom":property.$od_middlewarepaddingbott,
            

        };
        if (size === 'xs') {
            shelfProps['padding-bottom'] = property.$od_middlewarepaddingbott_M;
            shelfProps['margin'] = property.$od_middlewaremargin_M;
        }
        return shelfProps;
    },
    
    qnav: function (size) {
        let shelfProps = {
            "left": property.$od_qnav_left,
            "padding": property.$od_qnav_padding,
            "text-align": property.$od_qnav_text_align,
            //"top":property.$od_qnav_top,
           

        };
        if (size === 'xs') {
            shelfProps['text-align'] = property.$od_qnav_text_align_M;
            shelfProps['padding'] = property.$od_qnav_padding_M;
            shelfProps['left'] = property.$od_qnav_left_M;
            //shelfProps['top'] = property.$od_qnav_top_M;
        }
        return shelfProps;
    },
    questionfooter: function (size) {
        let shelfProps = {
            "padding": property.$od_ques_foot_padding,
            "margin": property.$od_ques_foot_margin,
            "border-top": property.$od_ques_foot_bordertop,
            "font-size":property.$od_ques_foot_font_size,
            "line-height":property.$od_ques_foot_lineheight,
            "color":property.$od_ques_foot_color,
            "font-family":property.$od_ques_foot_font_family,
            

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_ques_foot_padding_M;
            shelfProps['margin'] = property.$od_ques_foot_margin_M;
            shelfProps['border-top'] = property.$od_ques_foot_bordertop_M;
        }
        return shelfProps;
    },
    questionfootertxt: function (size) {
        let shelfProps = {
            "padding": property.$od_ques_foot_p_padding,
            "font-size":property.$od_ques_foot_p_font_size,
            "line-height":property.$od_ques_foot_p_line_height,
            "color":property.$od_ques_foot_p_color,
            "font-family":property.$od_ques_foot_p_font_family,

        };
        if (size === 'xs') {
            shelfProps['font-size'] = property.$od_ques_foot_p_font_size_M;
        }
        return shelfProps;
    },

    offerscontent: function (size) {
        let shelfProps = {
            "display": property.$od_offer_content_display,
            "padding-top": property.$od_offer_content_paddtop,
            

        };
        if (size === 'xs') {
            //shelfProps['padding-top'] = property.$od_offer_content_paddtop_M;
        }
        return shelfProps;
    },

    offerscontentMobile: function (size) {
        let shelfProps = {
           
            

        };
        if (size === 'xs') {
            shelfProps['padding-top'] = property.$od_offer_content_paddtop_M;
            shelfProps['display'] = property.$od_offer_content_display;
        }
        return shelfProps;
    },

    tooltipimage: function (size) {
        let shelfProps = {
            "float": property.$od_tooltipimg_float,
            "padding-right": property.$od_tooltipimg_paddright,
            

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    tooltipimagemobile: function (size) {
        let shelfProps = {
            
            

        };
        if (size === 'xs') {
            shelfProps['padding-right'] = property.$od_tooltipimg_paddright_M;
            shelfProps['float'] = property.$od_tooltipimg_float;
        }
        return shelfProps;
    },


    tooltipdescanchor: function (size) {
        let shelfProps = {
            "color": property.$od_tooltip_a_clr,
            "display": property.$od_tooltip_a_display,
            "float": property.$od_tooltip_a_float,
            "margin": property.$od_tooltip_a_margin,
            "top": property.$od_tooltip_a_top,
            "font-size":property.$od_tooltip_a_font_size,
            "line-height":property.$od_tooltip_a_line_height,

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    tooltipdesc: function (size) {
        let shelfProps = {
           "padding":property.$od_tooltip_desc_padd,
           "display":property.$od_tooltip_desc_display,
           //"height":property.$od_tooltip_desc_height,
           "vertical-align":property.$od_tooltip_desc_vertical_align,
           "font-size":property.$od_tooltip_desc_font_size,
           "line-height":property.$od_tooltip_desc_line_height,

        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_tooltip_desc_line_height_M;
            //shelfProps['padding'] = property.$od_tooltip_desc_padd_M;
        }
        return shelfProps;
    },

    tooltipdescmobile:function (size) {
        let shelfProps = {
            
            
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_tooltip_desc_p_padd_M;
            shelfProps['line-height'] = property.$od_tooltip_desc_line_height_M;
            shelfProps['display'] = property.$od_tooltip_desc_display;
            shelfProps['vertical-align'] = property.$od_tooltip_desc_vertical_align;
            shelfProps['font-size'] = property.$od_tooltip_desc_font_size;
            
        }
        return shelfProps;
    },

    tooltipdescptext: function (size) {
        let shelfProps = {
            "padding":property.$od_tooltip_desc_p_padd,
            "display":property.$od_tooltip_a_display,
            "font-size":property.$od_tooltip_a_font_size,
            "line-height":property.$od_tooltip_a_line_height,
            "color":property.$od_ques_foot_p_color,
            
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_tooltip_desc_p_padd_M;
            shelfProps['line-height'] = property.$od_tooltip_a_line_height_M;
        }
        return shelfProps;
    },

    cardwrapper: function (size) {
        let shelfProps = {
            "display": property.$od_cardwrap_display,
            "text-align": property.$od_cardwrap_textalign,
            "padding-top": property.$od_cardwrap_padtop,
            "border-bottom": property.$od_cardwrap_border_bottom,
            "line-height": property.$od_cardwrap_line_height,

        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_cardwrap_line_height_M;
            shelfProps['border-bottom'] = property.$od_cardwrap_border_bottom_M;
            shelfProps['padding-top'] = property.$od_cardwrap_padtop_M;
            shelfProps['text-align'] = property.$od_cardwrap_textalign_M;
            shelfProps['display'] = property.$od_cardwrap_display_M;
        }
        return shelfProps;
    },

    questionblock: function (size) {
        let shelfProps = {
            "padding": property.$od_quesblock_padding,
           

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_quesblock_padding_M;
        }
        return shelfProps;
    },

    questionblocklabel: function (size) {
        let shelfProps = {
            "padding": property.$od_quesblock_label_Padd,
            "font-family": property.$od_quesblock_label_font_family,
            "display": property.$od_quesblock_label_display,
            "font-size": property.$od_quesblock_label_font_size,
            "line-height": property.$od_quesblock_label_line_height,

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_quesblock_label_Padd_M;
        }
        return shelfProps;
    },


    questionblockinput: function (size) {
        let shelfProps = {
            "padding": property.$od_quesblock_input_Padd,
           "text-align":'left',

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_quesblock_input_Padd_M;
        }
        return shelfProps;
    },
    nextbtn:function (size) {
        let shelfProps = {
            "display": property.$od_nav_btn_display,
           "text-align":property.$od_nav_btn_textalign,
           "padding":property.$od_nav_btn_padding,
           "font-size":property.$od_nav_btn_fontsize,
           "line-height":property.$od_nav_btn_lineheight,
           "font-family":property.$od_nav_btn_fontfamily,
           
           "text-shadow":property.$od_nav_btn_textshadow,
           "border-radius":property.$od_nav_btn_borderradius,
           "margin-bottom":property.$od_nav_btn_marginbtm,
           "float":property.$od_nav_btn_float,

        };
        if (size === 'xs') {
            shelfProps['margin-bottom'] = property.$od_nav_btn_marginbtm_M;
            shelfProps['float'] = property.$od_nav_btn_float_M;
        }
        return shelfProps;
    },

    questionblockselector: function (size) {
        let shelfProps = {
           // "width": property.$od_selector_width,
            "display": property.$od_selector_display,
            "box-shadow": property.$od_selector_boxshadow,
            "margin-bottom":property.$od_selector_marginbtm,
            "height": property.$od_selector_height,
            "background-color":property.$od_selector_background,
            "border-radius":property.$od_selector_borderradius,
            "background-position":property.$od_selector_bgpos,

        };
        if (size === 'xs') {
            
            shelfProps['margin-bottom'] = property.$od_selector_marginbtm_M;
            shelfProps['box-shadow'] = property.$od_selector_boxshadow_M;
            shelfProps['display'] = property.$od_selector_display_M;
        }
        return shelfProps;
    },
    radiobtnprop: function (size) {
        let shelfProps = {
            "display": property.$od_radiobtn_display,
            "padding": property.$od_radiobtn_padding,
            "font-size":property.$od_radiobtn_fontsize,
            "line-height": property.$od_radiobtn_lineheight,
            "border-radius":property.$od_radiobtn_borderradius,
            "font-family":property.$od_radiobtn_fontfamily,

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    radiobtnsnotactive: function (size) {
        let shelfProps = {
            "color":property.$od_radiobtn_clr,
            "background-color":property.$od_radiobtn_bg,

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    radiobtnactive: function (size) {
        let shelfProps = {
            "color":property.$od_radiobtnactive_clr,
            "background-color":property.$od_radiobtnactive_bg,
            

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },
    nextbuttondisable: function (size) {
        let shelfProps = {
            "color":property.$od_nav_btn_clr,
           "background-color":property.$od_nav_btn_background,
           "box-shadow":property.$od_nav_btn_boxshadow,
            

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },


    nextbtnnotdisable: function (size) {
        let shelfProps = {
            "color":property.$od_nav_btnactive_clr,
           "background-color":property.$od_nav_btnactive_background,
           "box-shadow":property.$od_nav_btnactive_boxshadow,
            

        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },
    inputtextfield:function (size){
        let shelfProps = {
            "box-sizing":property.$od_input_box_sizing,
           "padding":property.$od_input_padding,
          // "width":property.$od_input_width,
           "height":property.$od_input_height,
           "line-height":property.$od_input_line_height,
           "font-size":property.$od_input_font_size,
           "border-radius":property.$od_input_borderradius,
           "background":property.$od_input_bg,
           "box-shadow":property.$od_input_boxshadow,
           "color":property.$od_input_clr,
            

        };
        if (size === 'xs') {
            shelfProps['box-sizing'] = property.$od_input_box_sizing_M;
            shelfProps['padding'] = property.$od_input_padding_M;
            shelfProps['height'] = property.$od_input_height_M;
           
        }
        return shelfProps;

    },

    resultli:function (size){
        let shelfProps = {
            
           "padding":property.$od_result_li_padd,
           "float":property.$od_result_li_float,
           "clear":property.$od_result_li_Clear,
           //"width":property.$od_result_li_width,
           "text-align":property.$od_result_li_textalign,
           "border-left":property.$od_result_li_borderleft,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_result_li_padd_M;
            shelfProps['float'] = property.$od_result_li_float_M;
            shelfProps['clear'] = property.$od_result_li_Clear_M;
            shelfProps['border-left'] = property.$od_result_li_borderleft_M;
        }
        return shelfProps;

    },

    resultlispan:function (size){
        let shelfProps = {
            
           "padding":property.$od_result_li_span_padding,
           "float":property.$od_result_li_span_float,
           "font-size":property.$od_result_li_span_fontsize,
           "line-height":property.$od_result_li_span_lineheight,
           
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_result_li_span_padding_M;
            shelfProps['float'] = property.$od_result_li_span_float_M;
            shelfProps['font-size'] = property.$od_result_li_span_fontsize_M;
            shelfProps['line-height'] = property.$od_result_li_span_lineheight_M;
        }
        return shelfProps;

    },

    resultlieditvalue:function (size){
        let shelfProps = {
            
           "text-align":property.$od_result_editvalue_textalign,
           "float":property.$od_result_editvalue_float,
           "font-size":property.$od_result_editvalue_fontsize,
           "line-height":property.$od_result_editvalue_lineheight,
           
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_result_editvalue_lineheight_M;
            shelfProps['font-size'] = property.$od_result_editvalue_fontsize_M;
            shelfProps['text-align'] = property.$od_result_editvalue_textalign_M;
            shelfProps['float'] = property.$od_result_editvalue_float_M;
        }
        return shelfProps;

    },


    resulteditvaluespan:function (size){
        let shelfProps = {
            
           
           "font-size":property.$od_result_editvaluespan_fontsize,
           "line-height":property.$od_result_editvaluespan_lineheight,
           "font-weight":property.$od_result_editvaluespan_fontweight,
           "font-family":property.$od_result_editvaluespan_fontfamily,
           
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_result_editvaluespan_lineheight_M;
            shelfProps['font-size'] = property.$od_result_editvaluespan_fontsize_M;
        }
        return shelfProps;

    },

    resulteditvaluespanlast:function (size){
        let shelfProps = {
            
           
           "font-size":property.$od_result_editvaluespan_fontsize,
           "line-height":property.$od_result_editvaluespan_lineheight,
           "font-weight":property.$od_result_editvaluespan_fontweight,
           "font-family":property.$od_result_editvaluespan_fontfamily,
           
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_result_editvaluespan_lineheight_M;
            shelfProps['font-size'] = property.$od_result_editvaluespan_fontsize_M;
        }
        return shelfProps;

    },

    resultcontainer:function (size){
        let shelfProps = {
            "margin":property.$od_res_cont_margin,
            "border-radius":property.$od_res_cont_borradius,
            "background-color":property.$od_res_background_clr,
        };
        if (size === 'xs') {
            shelfProps['margin'] = property.$od_res_cont_margin_M;
            shelfProps['border-radius'] = property.$od_res_cont_borradius_M;
        }
        return shelfProps;

    },

    donutwrapper:function (size){
        let shelfProps = {
            "padding":property.$od_donut_wrap_padd,
            "background-color":property.$od_donutwrap_bg_clr,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_donut_wrap_padd_M;
        }
        return shelfProps;

    },

    donutgraphwrapper:function (size){
        let shelfProps = {
            //"width":property.$od_donutgraph_width,
            "height":property.$od_donutgraph_height,
            "margin":property.$od_donutgraph_margin,
            "padding":property.$od_donutgraph_padd,
            "float":property.$od_donutgraph_float,
            "position":property.$od_donutgraph_pos,
        };
        if (size === 'xs') {
            shelfProps['height'] = property.$od_donutgraph_height_M;
            shelfProps['margin'] = property.$od_donutgraph_margin_M;
            shelfProps['padding'] = property.$od_donutgraph_padd_M;
            shelfProps['float'] = property.$od_donutgraph_float_M;
        }
        return shelfProps;

    },

    donuttext:function (size){
        let shelfProps = {
            "position":property.$od_donuttext_position,
            "z-index":property.$od_donuttext_zindex,
            "top":property.$od_donuttext_top,
            "left":property.$od_donuttext_left,
            "text-align":property.$od_donuttext_textalign,
        };
        if (size === 'xs') {
            shelfProps['top'] = property.$od_donuttext_top_M;
        }
        return shelfProps;

    },


    donuttexttitle:function (size){
        let shelfProps = {
            "font-size":property.$od_donuttxttitle_font_size,
            "line-height":property.$od_donuttxttitle_line_height,
            "font-family":property.$od_donuttxttitle_fontfamily,
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_donuttxttitle_line_height_M;
            shelfProps['font-size'] = property.$od_donuttxttitle_font_size_M;
        }
        return shelfProps;

    },

    donuttotalcost:function (size){
        let shelfProps = {
            "font-size":property.$od_donuttotalcost_font_size,
            "line-height":property.$od_donuttotalcost_line_height,
            "font-family":property.$od_donuttotalcost_fontfamily,
        };
        if (size === 'xs') {
           
        }
        return shelfProps;

    },

    donutdecimal:function (size){
        let shelfProps = {
            "display":property.$od_donutdecimal_display,
            "font-size":property.$od_donutdecimal_fontsize,
            "line-height":property.$od_donutdecimal_lineheight,
            "position":property.$od_donutdecimal_pos,
            "top":property.$od_donutdecimal_top,
            "margin-left":property.$od_donutdecimal_marginleft,
        };
        if (size === 'xs') {
           
        }
        return shelfProps;

    },

    donutcontent:function (size){
        let shelfProps = {
            "border-bottom":property.$od_donutcontent_borderbot,
            "padding":property.$od_donutcontent_padding,
            //"width":property.$od_donutcontent_width,
            "height":property.$od_donutcontent_height,
            "display":property.$od_donutcontent_display,
            "vertical-align":property.$od_donutcontent_verticalalign,
        };
        if (size === 'xs') {
            shelfProps['border-bottom'] = property.$od_donutcontent_borderbot_M;
            shelfProps['padding'] = property.$od_donutcontent_padding_M;
            shelfProps['height'] = property.$od_donutcontent_height_M;
            shelfProps['display'] = property.$od_donutcontent_display_M;
            shelfProps['vertical-align'] = property.$od_donutcontent_verticalalign_M;
        }
        return shelfProps;

    },

    donuttitledesktop:function (size){
        let shelfProps = {
            "display":property. $od_donuttitle_desk_display,
            "font-size":property.$od_donuttitle_desk_font_size,
            "line-height":property.$od_donuttitle_desk_line_height,
            "font-family":property.$od_donuttitle_desk_font_family,
            "padding-bottom":property.$od_donuttitle_desk_paddbottom,
        };
        if (size === 'xs') {
            shelfProps['display'] = property.$od_donuttitle_desk_display_M;
            shelfProps['font-size'] = property.$od_donuttitle_desk_font_size_M;
            shelfProps['line-height'] = property.$od_donuttitle_desk_line_height_M;
            shelfProps['font-family'] = property.$od_donuttitle_desk_font_family_M;
            shelfProps['padding-bottom'] = property.$od_donuttitle_desk_paddbottom_M;
        
        }
        return shelfProps;

    },
    
    legendsarranged:function (size){
        let shelfProps = {
            "padding":property.$od_legendsarrange_padding,
            "border-top":property.$od_legendsarrange_bordertop,
            "color":property.$od_legendsarrange_clr,
        
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_legendsarrange_padding_M;
            shelfProps['border-top'] = property.$od_legendsarrange_bordertop_M;
        }
        return shelfProps;

    },
      
    
    legendtitle:function (size){
        let shelfProps = {
            "padding":property.$od_legendtitle_padding,
            "font-size":property.$od_legendtitle_fontsize,
            "line-height":property.$od_legendtitle_line_height,
    
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_legendtitle_padding_M;
            shelfProps['font-size'] = property.$od_legendtitle_fontsize_M;
            shelfProps['line-height'] = property.$od_legendtitle_line_height_M;
        }
        return shelfProps;

    },
      
     
    legendinterest:function (size){
        let shelfProps = {
            "padding":property.$od_legendinterest_padd,
            "color":property.$od_legendinterest_clr,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_legendinterest_padd_M;
        }
        return shelfProps;
    },

    legendmonthly:function (size){
        let shelfProps = {
            "padding":property.$od_legendmonthly_padd,
            "color":property.$od_legendmonthly_clr,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_legendmonthly_padd_M;
        }
        return shelfProps;
    },

    legendtext:function (size){
        let shelfProps = {
            "font-size":property.$od_legendtext_fontsize,
            "line-height":property.$od_legendtext_lineheight,
        };
        if (size === 'xs') {
            shelfProps['font-size'] = property.$od_legendtext_fontsize_M;
            shelfProps['line-height'] = property.$od_legendtext_lineheight_M;
        }
        return shelfProps;
    },

    legendvalue:function (size){
        let shelfProps = {
            "font-size":property.$od_legendvalue_fontsize,
            "line-height":property.$od_legendvalue_lineheight,
            "margin-right":property.$od_legendvalue_marginright,
            "font-family":property.$od_legendvalue_font_family,
        };
        if (size === 'xs') {
            shelfProps['font-size'] = property.$od_legendvalue_fontsize_M;
            shelfProps['line-height'] = property.$od_legendvalue_lineheight_M;
            shelfProps['margin-right'] = property.$od_legendvalue_marginright_M;
        }
        return shelfProps;
    },

    summarywrapper:function (size){
        let shelfProps = {
            "padding":property.$od_summary_wrap_padd,
            "background-color":property.$od_summary_wrap_bg,
            "position":property.$od_summary_wrap_pos,
            
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_summary_wrap_padd_M;
            shelfProps['position'] = property.$od_summary_wrap_pos_M;
        }
        return shelfProps;
    },

    representativesummary:function (size){
        let shelfProps = {
            "padding":property.$od_repsuumary_padding,
            "border-radius":property.$od_repsuumary_borderadius,
           "z-index":property.$od_repsuumary_zindex,
            "position":property.$od_repsuumary_pos,
            "background-color":property.$od_repsuumary_bg,
            "border":property.$od_repsuumary_border,
            
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_repsuumary_padding_M;
            shelfProps['border-radius'] = property.$od_repsuumary_borderadius_M;
            shelfProps['z-index'] = property.$od_repsuumary_zindex_M;
            shelfProps['position'] = property.$od_repsuumary_pos_M;
        }
        return shelfProps;
    },

    ODCsummarydesctwo:function (size){
        let shelfProps = {
            "padding":property.$od_odcsuumary_padding,
            
            
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_odcsuumary_padding_M;
        }
        return shelfProps;
    },
    ODCsummarydesctwoa:function (size){
        let shelfProps = {
            "padding-bottom":property.$od_odcsuumarytwoa_paddbot,
            
            
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    ODCsummarydesctwoah2:function (size){
        let shelfProps = {
            "font-size":property.$od_summarydesctwoahfont_size,
            "line-height":property.$od_summarydesctwoahline_height,
            "padding-bottom":property.$od_summarydesctwoahpadd_bottom,
            "font-family":property.$od_summarydesctwoahfont_family,
            "font-weight":property.$od_summarydesctwoahfont_weight,

            
            
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_summarydesctwoahline_height_M;
        }
        return shelfProps;
    },

    ODCsummarydesctwoap:function (size){
        let shelfProps = {
            "font-size":property.$od_summarydesctwoapfont_size,
            "line-height":property.$od_summarydesctwoapline_height,
            
        };
        if (size === 'xs') {
            shelfProps['font-size'] = property.$od_summarydesctwoapfont_size_M;
            shelfProps['line-height'] = property.$od_summarydesctwoapline_height_M;
        }
        return shelfProps;
    },
    ODCsummarydesctwob:function (size){
        let shelfProps = {
           "padding-bottom":property.$od_summary_desctwobpadding,
            
        };
        if (size === 'xs') {
            shelfProps['padding-bottom'] = property.$od_summary_desctwobpadding_M;
        }
        return shelfProps;
    },
    ODCsummarydesctwobh2:function (size){
        let shelfProps = {
            "font-size":property.$od_summarydesctwobhfont_size,
            "line-height":property.$od_summarydesctwobhline_height,
            "padding-bottom":property.$od_summarydesctwobhpadd_bottom,
            "font-family":property.$od_summarydesctwoahfont_family,
            "font-weight":property.$od_summarydesctwoahfont_weight,
            
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    ODCsummarydesctwobp:function (size){
        let shelfProps = {
            "font-size":property.$od_summarydesctwobpfont_size,
            "line-height":property.$od_summarydesctwobpline_height,
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    ODCsummarydescone:function (size){
        let shelfProps = {
            "padding":property.$od_summarydesconepadd,
           // "border":property.$od_summarydesconeborder,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_summarydesconepadd_M;
        }
        return shelfProps;
    },

    ODCsummarydesconeleft:function (size){
        let shelfProps = {
            "float":property.$odsummaryleft_float,
           // "width":property.$odsummaryleft_width,
            "padding":property.$odsummaryleft_padding,
           
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$odsummaryleft_padding_M;
            shelfProps['float'] = property.$odsummaryleft_float_M;
        }
        return shelfProps;
    },

    ODCsummarydesconelefth3:function (size){
        let shelfProps = {
            "font-size":property.$od_summarydesconelefthfont_size,
            "line-height":property.$od_summarydesconelefthline_height,
            "padding":property.$summarydesconelefth_padding,
           
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$summarydesconelefth_padding_M;
            shelfProps['line-height'] = property.$od_summarydesconelefthline_height_M;
            shelfProps['font-size'] = property.$od_summarydesconelefthfont_size_M;
        }
        return shelfProps;
    },

    odcActionDescription:function (size){
        let shelfProps = {
            "font-size":property.$od_actiondesc_font_size,
            "line-height":property.$od_actiondesc_line_height,
            "padding":property.$od_actiondesc_padding,
           
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_actiondesc_line_height_M;
            shelfProps['font-size'] = property.$od_actiondesc_font_size_M;
            shelfProps['padding'] = property.$od_actiondesc_padding_M;
        }
        return shelfProps;
    },

    ODCsummarydesconeb:function (size){
        let shelfProps = {
            "float":property.$odsummarydesconeb_float,
            //"width":property.$odsummarydesconeb_width,
            "padding":property.$odsummarydesconeb_padd,
           
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$odsummarydesconeb_padd_M;
            shelfProps['float'] = property.$odsummarydesconeb_float_M;
        }
        return shelfProps;
    },
    ODCsummarydesconebanchor:function (size){
        let shelfProps = {
            "display": property.$od_summary_btn_display,
            "text-align":property.$od_summary_btn_textalign,
            "background-color":property.$od_nav_summary_bg,
            "padding":property.$od_summary_btn_padding,
            "font-size":property.$od_summary_btn_fontsize,
            "line-height":property.$od_summary_btn_lineheight,
            "font-family":property.$od_summary_btn_fontfamily,
            "box-shadow":property.$od_summary_btn_boxshadow,
            "text-shadow":property.$od_summary_btn_textshadow,
            "border-radius":property.$od_summary_btn_borderradius,
            "color":property.$od_nav_summary_color,
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    ODCsummarydesconebanchorcursor:function (size){
        let shelfProps = {
            "font-size":property.$od_anchorcursor_font_size,
            "line-height":property.$od_anchorcursor_line_height,
            "text-decoration":property.$od_anchorcursor_textdec,
            "color":property.$od_anchorcursor_clr,
            "cursor":property.$od_anchorcursor_cursor,
           
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    ODCbottomsummary:function (size){
        let shelfProps = {
            "background":property.$odbotsummary_bg,
            "margin":property.$odbotsummary_margin,
            "padding":property.$odbotsummary_padd,
           
        };
        if (size === 'xs') {
           
            shelfProps['padding'] = property.$odbotsummary_padd_M;
        }
        return shelfProps;
    },

    summarygridleft:function (size){
        let shelfProps = {
            
            "padding-left":property.$od_summarygridleft_padd,
           
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },

    headergroupsign:function (size){
        let shelfProps = {
            
            "font-size":property.$od_headergroupsign_font_size,
            "line-height":property.$od_headergroupsign_line_height,
            "font-family":property.$od_headergroupsign_font_family,
           
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$od_headergroupsign_line_height_M;
            shelfProps['font-size'] = property.$od_headergroupsign_font_size_M;
        }
        return shelfProps;
    },


    
    /*headergroupheadline:function (size){
        let shelfProps = {
            
            "font-size":property.$od_headergroupsign_font_size,
            "line-height":property.$od_headergroupsign_line_height,
            "font-family":property.$od_headergroupsign_font_family,
           
        };
        if (size === 'xs') {
           
        }
        return shelfProps;
    },*/

      
    odcbottomsummaryptag:function (size){
        let shelfProps = {
            
            "font-size":property.$od_btmsummptag_font_size,
            "line-height":property.$od_btmsummptag_line_height,
            "color":property.$od_btmsummptag_clr,
            "padding":property.$od_btmsummptag_padding,
           
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$od_btmsummptag_padding_M;
        }
        return shelfProps;
    },




    // questionblockselectordisabled: function (size) {
    //     let shelfProps = {
    //         "padding": property.$ts_shelfpadding,
    //         "color": property.$ts_themewhite_clr,
    //         "background": property.$ts_themewhite_bg,
    //         "position": "relative",
    //         "clear": "both",

    //     };
    //     if (size === 'xs') {
           
    //     }
    //     return shelfProps;
    // },

//case-2

odccompareleft:function (size){
    let shelfProps = {
        
        "padding":property.$od_arrcomapre_padd,
        "float":property.$od_arrcomapre_float,
        "background-color":property. $od_arrcomapre_bg,
        "color":property.$od_arrcomapre_clr,
       
    };
    if (size === 'xs') {
       shelfProps['padding'] = property.$od_arrcomapre_padd_M;
    }
    return shelfProps;
},

odccompareright:function (size){
    let shelfProps = {
        
        "padding":property.$od_arrcomapre_padd,
        "float":property.$od_arrcomapre_float,
        "background-color":property. $od_arrcomapreright_bg,
        "color":property.$od_arrcomapre_clr,
       
    };
    if (size === 'xs') {
       shelfProps['padding'] = property.$od_arrcomapre_padd_M;
    }
    return shelfProps;
},

odccompareleftrightp:function (size){
    let shelfProps = {
        
        //"height":property.$od_arrcomapre_padd,
        "padding":property.$od_arrcomparelrp_padding,
        "font-size":property.$od_arrcomparelrp_font_size,
        "line-height":property.$od_arrcomparelrp_lineheight,
        "color":property.$od_arrcomparelrp_clr,
       
    };
    if (size === 'xs') {
       shelfProps['padding'] = property.$od_arrcomparelrp_padding_M;
       shelfProps['font-size'] = property.$od_arrcomparelrp_font_size_M;
       shelfProps['line-height'] = property.$od_arrcomparelrp_lineheight_M;
    }
    return shelfProps;
},

odcarrangedgraph:function (size){
    let shelfProps = {
        
        //"height":property.$od_arrcomapre_padd,
        "padding-bottom":property. $od_arrwrapper_Paddbtm,
        "border-bottom":property.d_arrwrapper_borderbtm,
        
       
    };
    if (size === 'xs') {
       shelfProps['padding-bottom'] = property. $od_arrwrapper_Paddbtm_M;
       shelfProps['border-bottom'] = property.d_arrwrapper_borderbtm_M;
       
    }
    return shelfProps;
},

odcarrangedcost:function (size){
    let shelfProps = {
        
        "padding":property. $od_arr_cost_padd,
        "font-size":property.$od_arr_cost_fontsize,
        "line-height":property.$od_arr_cost_linehight,
        "text-align":property.$od_arr_cost_textalign,

        
       
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arr_cost_padd_M;
      
       
    }
    return shelfProps;
},

odcarrangemainvalue:function (size){
    let shelfProps = {
        
        "display":property.$od_arr_mainvlue_display,
        "font-family":property.$od_arr_mainvlue_fontfamily,
    };
    if (size === 'xs') {
    }
    return shelfProps;
},

odcarrangedecimalvalue:function (size){
    let shelfProps = {
        
        "font-size":property.$od_arr_decvlue_fontsize,
        "line-height":property.$od_arr_decvlue_lineheight,
        "position":property.$od_arr_decvlue_position,
        "top":property.$od_arr_decvlue_top,
    };
    if (size === 'xs') {
    }
    return shelfProps;
},

odcarrangegraphlegend:function (size){
    let shelfProps = {
        
    
        "padding":property.$od_arr_graphlegend_padd,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arr_graphlegend_padd_M;
    }
    return shelfProps;
},

odcarrangedlegendsarranged:function (size){
    let shelfProps = {
        
    
        "padding":property.$od_arr_li_padd,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arr_li_padd_M;
    }
    return shelfProps;
},

odcarrangeunarrangeli:function (size){
    let shelfProps = {
        "padding":property.$odcarrangeunarrangeli_padd,
        "margin":property.$odcarrangeunarrangeli_margin,
        "border-top":property.$odcarrangeunarrangeli_bordertop,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$odcarrangeunarrangeli_padd_M;
        shelfProps['margin'] = property.$odcarrangeunarrangeli_margin_M;
        shelfProps['border-top'] = property.$odcarrangeunarrangeli_bordertop_M;
    }
    return shelfProps;
},
odcarrangedlegendtitle:function (size){
    let shelfProps = {
        "padding":property.$od_arrtitle_padding,
        "line-height":property.$od_arrtitle_lineheight,
        "font-size":property.$od_arrtitle_fontsize,
        "color":property.$od_arrtitle_clr,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arrtitle_padding_M;
        shelfProps['line-height'] = property.$od_arrtitle_lineheight_M;
        shelfProps['font-size'] = property.$od_arrtitle_fontsize_M;
    }
    return shelfProps;
},

odcarrangeli:function (size){
    let shelfProps = {
       
        "padding":property.$od_arrangeli_padd,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arrangeli_padd_M;
    }
    return shelfProps;
},
odcarrangemonthly:function (size){
    let shelfProps = {
       "color":property.$od_arrangelimont_clr,
        "padding":property.$od_arrangelimont_padd,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arrangelimont_padd_M;
    }
    return shelfProps;
},

odcarrangeinterest:function (size){
    let shelfProps = {
       "color":property.$od_arrangeliinterest_clr,
        "padding":property.$od_arrangelimont_padd,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arrangelimont_padd_M;
    }
    return shelfProps;
},

odcarrangelegendmarker:function (size){
    let shelfProps = {
       "background":property.$od_arrlegend_bg,
        "top":property.$od_arrlegend_top,
        "height":property.$od_arrlegend_height,
        "width":property.$od_arrlegend_width,
        "position":property.$od_arrlegend_position,
        "left":property.$od_arrlegend_left,
    };
    if (size === 'xs') {
        shelfProps['top'] = property.$od_arrlegend_top_M;
    }
    return shelfProps;
},

odcarrangelegendmarkerint:function (size){
    let shelfProps = {
       "background":property.$od_arrlegendinterest_bg,
        "top":property.$od_arrlegend_top,
        "height":property.$od_arrlegend_height,
        "width":property.$od_arrlegend_width,
        "position":property.$od_arrlegend_position,
        "left":property.$od_arrlegend_left,
    };
    if (size === 'xs') {
        shelfProps['top'] = property.$od_arrlegend_top_M;
    }
    return shelfProps;
},

odcarrangelegendtext:function (size){
    let shelfProps = {
        "font-size":property.$od_arrlegendtext_fontsize,
        "line-height":property.$od_arrlegendtext_lineheight,
    };
    if (size === 'xs') {
       
       shelfProps['font-size'] = property.$od_arrlegendtext_fontsize_M;
       shelfProps['line-height'] = property.$od_arrlegendtext_lineheight_M;
    }
    return shelfProps;
},

odcarrangelegendvalue:function (size){
    let shelfProps = {
        "display":property.$od_arrlegendvalue_display,
        "font-size":property.$od_arrlegendvalue_fontsize,
        "line-height":property.$od_arrlegendvalue_lineheight,
        "font-family":property.$od_arrlegendvalue_fontfamily,
        "margin-right":property.$od_arrlegendvalue_marginright,
    };
    if (size === 'xs') {
        shelfProps['display'] = property.$od_arrlegendvalue_display_M;
       shelfProps['font-size'] = property.$od_arrlegendvalue_fontsize_M;
       shelfProps['line-height'] = property.$od_arrlegendvalue_lineheight_M;
       shelfProps['margin-right'] = property.$od_arrlegendvalue_marginright_M;
    }
    return shelfProps;
},

odcarrangenoofdays:function (size){
    let shelfProps = {
       
        "margin-left":property.$od_arrange_nodays_marginleft,
    };
    if (size === 'xs') {
        shelfProps['margin-left'] = property.$od_arrange_nodays_marginleft_M;  
    }
    return shelfProps;
},

odcarrangepromobubble:function (size){
    let shelfProps = {
       
        "padding":property.$od_arr_bubble_padd,
        "color":property.$od_arr_bubble_clr,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arr_bubble_padd_M;  
    }
    return shelfProps;
},

odcarrangebubblecontent:function (size){
    let shelfProps = {
       
        "padding":property.$od_arr_bubblecont_padd,
        "background-color":property.$od_arr_bubblecont_bg,
        "text-align":property.$od_arr_bubblecont_textalign,
        "border-radius":property.$od_arr_bubblecont_borradius,
    };
    if (size === 'xs') {
        shelfProps['padding'] = property.$od_arr_bubblecont_padd_M; 
        shelfProps['border-radius'] = property.$od_arr_bubblecont_borradius_M; 
        shelfProps['text-align'] = property.$od_arr_bubblecont_textalign_M;  
    }
    return shelfProps;
},

odcarrangebubblecontentptag:function (size){
    let shelfProps = {
       
        
        "font-size":property.$od_arr_bubble_p_fontsize,
        "line-height":property.$od_arr_bubble_p_lineheight,
        "font-family":property. $od_arr_bubble_p_fontfamliy,
        "color":property.$od_arr_bubble_p_clr,
    };
    if (size === 'xs') {
      
       shelfProps['font-size'] = property.$od_arr_bubble_p_fontsize_M;
       shelfProps['line-height'] = property.$od_arr_bubble_p_lineheight_M;
      
    }
    return shelfProps;
},

odcarrangebubbledesc:function (size){
    let shelfProps = {
       
        "padding-top":property.$od_arr_buble_desc_paddtop,
        
    };
    if (size === 'xs') {
        shelfProps['padding-top'] = property.$od_arr_buble_desc_paddtop_M;  
    }
    return shelfProps;
},
odcarrangepoundvalue:function (size){
    let shelfProps = {
       
        "display":property.$od_arr_pound_display,
        "font-size":property.$od_arr_pound_fontsize,
        "line-height":property.$od_arr_pound_lineheight,
        "font-family":property. $od_arr_pound_fontfamily,
        "margin-right":property.$od_arr_pound_marginright,
        
    };
    if (size === 'xs') {
       
    }
    return shelfProps;
},

odcarrangedbubbledescstrong:function (size){
    let shelfProps = {
       
        "font-size":property. $od_arr_bubblestrong_fontsize,
        "font-weight":property.$od_arr_bubblestrong_fontweight,
        "line-height":property.$od_arr_bubblestrong_lineheight,
        "font-family":property.$od_arr_bubblestrong_fontfamily,
        "color":property.$od_arr_bubblestrong_clr,
        
    };
    if (size === 'xs') {
       
    }
    return shelfProps;
},


}
