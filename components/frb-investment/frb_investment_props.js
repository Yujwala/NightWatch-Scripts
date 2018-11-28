var rte_props = require('../rte/rte_props.js');

//frb-investment props
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    headerGroupProps: function (size) {
        let shelfProps = {
            "margin-bottom": property.$frb_header_margin,
            "font-family": property.$font_family_regular,
        };
        if (size === "xs") {
            shelfProps['margin-bottom'] = property.$frb_header_margin_m;
        }
        return shelfProps;
    },

    headerSignPostProps: function (size) {
        let shelfProps = {
            "font-size":  property.$frb_sign,
            "line-height": property.$frb_sign,
            "font-family": property.$font_family_regular,
            "color": property.$frb_bgcolor,
        };
        if (size === "xs") {
            shelfProps['font-size'] = "14px";
            shelfProps['line-height'] = "14px";
        }
        return shelfProps;
    },

    headerHeadlineProps: function (size) {
        let shelfProps = {
            "font-size": property.$frb_headline_fontsize,
            "line-height": property.$frb_headline_lineheight,
            "font-family": property.$frb_font_family,
            "color": property.$frb_bgcolor,
            "position": "relative"
        };
        if(size=== "xs"){
            shelfProps["font-size"] = property.$frb_headline_fontsize_m;
            shelfProps["line-height"] = property.$frb_headline_lineheight_m;
        }
        return shelfProps;
    },

    themeLightBlueProps: function (size) {
        let shelfProps = {
            "background-color": property.$frb_lightbluebgcolor,
        };
        return shelfProps;
    },
    themeWhiteProps: function (size) {
        let shelfProps = {
            "background-color": property.$frb_whitebgcolor,
        };
        return shelfProps;
    },

    themeBlueProps: function (size) {
        let shelfProps = {
            "background-color": property.$frb_bluebgcolor,
        };
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
            "margin-bottom": "10px",
            "font-size": "25px",
            "line-height": "25px",
            "font-family": property.$font_family_regular,
            "color": property.$frb_bgcolor,
        };
        return shelfProps;
    },
    radioProps: function (size) {
        let shelfProps = {
            "margin-bottom": "19.5px",
            "color": property.$frb_bgcolor,
            "font-size": "13px",
            "line-height": "13px"
        };
        if (size === "xs") {
            shelfProps['margin-bottom'] = "6.5px";
        }
        return shelfProps;
    },
    radioHorizontalProps: function (size) {
        let shelfProps = {
            "padding": "0px 0px 0px 50px",
            "float" : "left"
        };
        return shelfProps;
    },
    labelRadioProps: function (size) {
        let shelfProps = {
            "padding": property.$frb_li_padding,
            "color": property.$frb_bgcolor,
            "font-family": property.$font_family_regular,
            "font-size": "18px",
            "line-height": "18px",
            "display": "block",
            "position": "relative",
        };
        if (size === "xs") {
            shelfProps['padding'] = "6.5px 0px 6.5px 33.319px";
            shelfProps['font-size'] = "13px";
            shelfProps['line-height'] = '13px';
        }
        return shelfProps;
    },

    labelRteProps: function (size) {
        let rteprops = rte_props.PropTextfs12(size);
        let shelfProps = {
            "padding-bottom": "14px",
            "color": property.$primary_1,
        };
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },

    checkboxRteProps: function(size){
    
        let rteprops = rte_props.PropTextH5_H6(size);
        let shelfProps = {};
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    formSectionProps: function (size) {
        let shelfProps = {
            "margin-bottom": "26px",
            "display": "block",
            "box-sizing": "content-box",
        };
        if (size === "xs") {
            shelfProps['box-sizing'] = "border-box";
        }
        return shelfProps;
    },
    pSelProps: function (size) {
        let shelfProps = {
            "margin-bottom": "10px",
        };
        return shelfProps;
    },

    infoUlProps: function (size) {
        let shelfProps = {
            "overflow": "hidden",
            "display": "block",
            "border": property.$frb_infoul_border,
            "box-sizing": "content-box",
            "background-color": property.$frb_infoul_bgcolor,
        };
        if (size === "xs") {
            shelfProps['box-sizing'] = "border-box";
            shelfProps['width'] = "213.688px";
        }
        return shelfProps;
    },
    infoLiProps: function (size) {
        let shelfProps = {
            "padding": property.$frb_infoli_padding,
            "float": "left",
        };
        if (size === "xs") {
            shelfProps["padding"] =  "10.5781px 0px";
            shelfProps['width'] = "105.844px";
        }
        return shelfProps;
    },

    infoLiTitleProps: function (size) {
        let shelfProps = {
            "color": property.$frb_bgcolor,
            "font-family": property.$font_family_regular,
            "font-size": "18px",
            "line-height": property.$frb_infoli_lineheight,
            "display": "block",
            "text-align": "center"
        };
        return shelfProps;
    },
    infoLiNumberProps: function (size) {
        let shelfProps = {
            "color": property.$frb_bgcolor,
            "font-family": property.$font_family_regular,
            "font-size": "32px",
            "line-height": "32px",
            "display": "block",
            "text-align": "center"
        };
        return shelfProps;
    },



    checkboxSelProps: function (size) {
        let shelfProps = {
            "margin": "16.25px 0px 32.5px",
            "padding": property.$frb_check_padding,
            "display": "block",
            "position": "relative",
            "border": property.$frb_checkbox_border
        };
        return shelfProps;
    },

    checkerProps: function (size) {
        let shelfProps = {
            "float": "left",
            "width": "26px",
            "height": "26px",
            "position": "static",
            "display": "block",
            "background-size": "26px 26px"
        };
        return shelfProps;
    },


    checkboxLabelProps: function (size) {
        let shelfProps = {
            "margin": "-42px 0px 0px -5px",
            "padding": "15.6px 56.069px 9.75px 50.375px",
            "display": "inline-block",
            "box-sizing": "content-box",
        };
        if (size === "xs") {
            shelfProps['box-sizing'] = "border-box";
        }
        return shelfProps;
    },

    radioLinkProps: function (size) {
        let shelfProps = {
            "left": "22px",
            "top": "22px",
            "width": "22.0938px",
            "height": "22.0938px",
            "position": "absolute",
            "display": "block",
        };
        return shelfProps;
    },
    btnProps: function (size) {
        let shelfProps = {
            "color": property.$frb_btn_color,
            "font-size": "18px",
            "padding": property.$frb_btn_padding,
            "text-align": "left",
        };
        if (size === "xs") {
            shelfProps['font-size'] = "23px";
            shelfProps['text-align'] = "center";
            shelfProps['padding'] = property.$frb_btn_padding_m;
        }
        return shelfProps;
    },

    btnProceedProps : function(size) {
           let shelfProps = {
               "color" : property.$primary_2,
               "font-size" : "18px",
               "padding" : property.$frb_btn_padding,
               "text-align" : "left",
               "background-color" : property.$frb_btn_bgcolor,
            };

           if(size==='xs'){
               shelfProps["font-size"] = "23px";
               shelfProps["border-radius"] = "7.199px";  
               shelfProps["text-align"] = "center";
               shelfProps["padding"] = property.$frb_btn_padding_m;
               shelfProps['background-color'] = property.$frb_btn_bgcolor_m;
           }
           return shelfProps;
       },
     FocusProps : function(size){
           let shelfProps ={
               "outline-color" : property.$frb_btn_focus,        
           };
          return shelfProps;
       },

       HoverProps : function(size){
        let shelfProps ={
            "background-color" : property.$frb_hover_bgcolor,        
        };
       return shelfProps;
    },
 
    };
}
