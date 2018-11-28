var rte_props = require('../rte/rte_props.js');
//doweknowyouenhanced shelf props
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    headerTitleProps: function (size) {
            let shelfProps = {
                "margin-bottom": property.$enhancedmarigin,
                "font-family": property.$font_family_regular,
                "font-size": property.$enhanced_header_fontsize,
                "line-height": property.$enhanced_header_lineheight,
                "color": property.$enhancedcolor,
            };
            if(size==="xs"){
                shelfProps['margin-bottom'] ="9px";
                shelfProps['font-size'] ="18px";
                shelfProps['line-height']=property.$enhanced_header_lineheight_m;
            }
            return shelfProps;
    },

    themeLightBlueProps: function (size) {
            let shelfProps = {
                "background-color": property. $enhancedlightbluebgcolor,
            };
        return shelfProps;
    },
    themeWhiteProps: function (size) {
           let shelfProps = {
                "background-color":  property.$enhancedwhitebgcolor,
            };
        return shelfProps;
    },

    themeBlueProps: function (size) {
           let shelfProps = {
                "background-color": property.$enhancedbluebgcolor,
            };
        return shelfProps;
    },
    titleProps: function (size) {
        let rteprops=rte_props.PropTextfs12(size);
           let shelfProps = {
                "padding-bottom": "14px",
                "line-height": property.$enhanced_title_lineheight,
                "color": property.$enhancedcolor_1,
            };
            if(size==="xs"){
                shelfProps['padding-bottom'] = property.$enhanced_title_padding_m;
                shelfProps['font-size'] =property.$enhanced_title_fontsize_m;
                shelfProps['line-height']=property.$enhanced_title_lineheight_m;
              }
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },

    titlePropsH4: function (size) {
        let rteprops=rte_props.PropTextH4(size);
           let shelfProps = {
                "color": property.$enhancedcolor_1,
            };
            if(brand.props.$brandName=='ulster') {
                shelfProps[ "font-family"] = property.$font_family_bold;
            }
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    
    titlePropsH3: function (size) {
        let rteprops=rte_props.PropTextH3(size);
           let shelfProps = {
                "color": property.$enhancedcolor_1,
            };
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },

    ulSelProps: function (size) {
            let shelfProps = {
                "margin-top": "4.069px",
            };
        return shelfProps;
    },

    liSelProps: function (size) {
            let shelfProps = {
                "margin-bottom": "19.5px",
            };
            
            if(size=="xs"){
                shelfProps['margin-bottom'] ="6.5px";
            }
        return shelfProps;
    },
    labelRadioProps: function (size) {
          let shelfProps = {
                "padding": property.$enhanced_labelradio_padding,
                "color": property.$enhancedcolor,
                "font-size": "18px",
                "line-height": "18px",
                "font-family": property.$font_family_regular,
                "position" : "relative",
                "display" : "block",
            };
            
            
            if(size==="xs"){
                shelfProps['padding'] = "6.5px 0px 6.5px 33.319px";
                shelfProps['font-size'] = "13px";
                shelfProps['line-height'] = "13px"
            }
        return shelfProps;
    },

    checkboxSelProps: function (size) {
           let shelfProps = {
                "padding": property.$enhanced_checkbox_padding,
                "background-color": property.$enhanced_checkbox_bgcolor,
                "margin": property.$enhanced_checkbox_margin,
                "border-radius" : property.$enhanced_checkbox_border_radius,
                "position" : "relative",
                "display" : "block",

             };
             if(size==="xs"){
                 shelfProps['margin'] =property.$enhanced_checkbox_margin_m ;
                 shelfProps['padding'] = property.$enhanced_checkbox_padding_m;
             }
        return shelfProps;
    },
    checkboxLabelProps: function (size) {
        property = brand.props;
          let shelfProps = {
                "padding": property.$enhanced_checkboxlabel_padding,
                "color": property.$primary_1,
                "font-size": property.$enhanced_checkboxlabel_fontsize,
                "line-height": property.$enhanced_checkboxlabel_lineheight,
                "font-family": property.$font_family_regular,

            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["color"] = property.$enhancedcolor;
            }
        return shelfProps;
    },


    checkBoxProps: function (size) {
            let shelfProps = {
                "margin-top": "-6px",
                "width" :"32px",
                "height" :"32px",
                "float" : "left",
            };
        return shelfProps;
    },
    btnProps: function (size) {
            let shelfProps = {
                "margin-bottom": property.$enhanced_btn_disabled_margin_bottom,
                "padding": property.$enhanced_btn_disabled_padding,
                "color": property.$enhancedcolor_2,
                "font-size": "18px",
                "line-height": property.$enhanced_btn_disabled_lineheight,
                "border-top": property. $enhanced_btn_disabled_border_top,
                "font-family": property.$font_family_bold,
                "background-color": property.$enhanced_btn_disabled_bgcolor,
                "box-shadow": property.$enhanced_btn_disabled_boxshadow,
                "text-shadow": property.$enhanced_btn_disabled_textshadow,
            };
            if(brand.props.$brandName=='rbs-personal'|| brand.props.$brandName=='lombard') {
                shelfProps["font-family"] = property.$font_family_regular;
            }
            if(size==='xs'){
                shelfProps["padding"] = property.$enhanced_btn_disabled_padding_m;
                shelfProps["font-size"] = property.$enhanced_btn_disabled_fontsize_m;
                shelfProps["border-top"] = property.$enhanced_btn_disabled_border_top_m;  
                shelfProps["box-shadow"] = property.$enhanced_btn_disabled_boxshadow_m; 
                shelfProps["background-color"] = property.$enhanced_btn_disabled_bgcolor_m;        
            
            }
        return shelfProps;
    },

    btnProceedProps: function (size) {
            let shelfProps = {
                "margin-bottom": property.$enhanced_btnproceed_margin,
                "padding": property.$enhanced_btnproceed_padding,
                "color": property.$primary_2,
                "font-size": "18px",
                "line-height": property.$enhanced_btnproceed_lineheight,
                "border-top": property.$enhanced_btnproceed_border_top,
                "font-family": property.$font_family_bold,
                "background-color": property.$enhanced_btnproceed_bgcolor,
                "box-shadow": property.$enhanced_btnproceed_boxshadow,
                "text-shadow": property.$enhanced_btnproceed_textshadow,
                "cursor" : "pointer",
                "max-height" : property.$enhanced_btnprocced_maxheight,
                "border-radius" : property.$enhanced_btnproceed_border_radius,
            };
            
    if(brand.props.$brandName==='rbs-personal'||brand.props.$brandName==='lombard') {
        shelfProps["font-family"] = property.$font_family_regular;
    }
    if(size=='xs'){
                shelfProps["padding"] = property.$enhanced_btnproceed_padding_m;
                shelfProps["font-size"] = property.$enhanced_btnproceed_fontsize_m;
                shelfProps["border-top"] = property.$enhanced_btnproceed_border_top_m;
                shelfProps["box-shadow"] = property.$enhanced_btnproceed_boxshadow_m;  
                shelfProps["border-radius"] = property.$enhanced_btnproceed_border_radius_m;

    }
            return shelfProps;
    },

    btnProceedFocusProps: function (size) {
            let shelfProps = {
                "outline-color" :  property.$enhanced_btn_focus,
            };
        return shelfProps;
    },

    btnProceedHoverProps: function (size) {
            let shelfProps = {
                "background-color" : property.$enhanced_btn_hover,
            };
        return shelfProps;
    },

    radioLinkProps: function (size){
            let shelfProps = {
                "top" : "22px",
                "position" : "absolute",
                "width" : property.$enhanced_width,
                "height": property.$enhanced_height,
                "left" : "22px",
                "display" :"block",
                "text-indent" :"-9999px",
            };
            
        return shelfProps;
    },
};
}