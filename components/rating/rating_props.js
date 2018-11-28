module.exports =function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    ratingBgColor: function(size) {
        property = brand.props;
        let shelfProps = {               "float": "left",
               "font-family": property.$rating_font_family,
               "font-size": property.$rating_font_size,
               "font-weight": "700",
               "line-height": property.$rating_line_height,
               "width": "880px",
               "margin":"38px 0px 0px",
               "padding":"39px 0px 29px",
            };
            if(size=="xs"){
                shelfProps['width'] ="415px";
                shelfProps['padding'] = "7px 0px 12px";
              }
        return shelfProps;
    },
 
    ratingMargin: function(size) {
        property = brand.props;
        let shelfProps = {               "padding-left" : "0px" ,
               "padding-bottom" :"0px" ,
               "padding-top" : "0px" ,
               "padding-right" : "0px" ,
               "margin-bottom" : "0px",
               "margin-top": "0px",
               "margin-left": "0px",
               "margin-right":  "0px",
            };
        return shelfProps;
    },

    ratingParagraph: function(size) {
        property = brand.props;
        let shelfProps = {
               "color" : property.$rating_para_color,
               "float" :"none",
               "font-family" : property.$rating_para_font_family,
               "font-size" : "14px",
               "font-weight" : "400" ,
               "line-height" : "14px" ,
               "margin-top" : "0px" ,
               "padding-bottom" : "0px" ,
               "padding-top" : "0px" ,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
              }
        return shelfProps;
    },

    ratingButton: function(size) {
        property = brand.props;
        let shelfProps = {
                "font-family":property.$rating_btn_font_family ,
                "font-size": "18px",
                "padding":"3px 8px 1px" ,
                "line-height" : "20px",
                "width":"29px",
                "background-color":property.$rating_btn_background_color,
                "color":property.$rating_btn_color,
                "text-align":"center",
                "box-shadow":"rgb(180, 169, 159) 0px 3px 0px 0px",
                "border-radius": "5px",
                    };
                if(size=="xs"){
                   shelfProps['padding'] ="3px 8px";
                }                      
        return shelfProps;
    },
  
    ratingButtonHover: function(size) {
        property = brand.props;
        let shelfProps = {
            "outline-color": property.$rating_btn_hover_outline,     };
        return shelfProps;
    },


    ratingButtonClick: function(size) {
        property = brand.props;
        let shelfProps = {
                "width": "371px",
                "height": "322px",
                "padding": "30px 30px 12px 24px",
                "font-family": property.$rating_btn_click_font_family,
                "font-size": property.$rating_btn_click_font_size,
                "border-radius": "10px",
                "color": property.$rating_btn_click_color,
                "background-color": property.$rating_btn_click_background_color,
                "border-bottom-left-radius": "10px",
                "border-bottom-right-radius": "10px",
                "border-top-left-radius": "10px",
                "border-top-right-radius": "10px",
                "padding-bottom":"12px" ,
                "padding-top":"30px" ,
                "padding-left": "24px" ,
                "padding-right": "30px",
            };
            if(size=="xs"){
                shelfProps['width'] ="290px";
                shelfProps['height'] ="318px";
                shelfProps['padding'] ="21px 26px 24px 24px";
                shelfProps['padding-bottom'] ="24px";
                shelfProps['padding-top'] ="21px";
                shelfProps['padding-right'] ="26px";
             }
        return shelfProps;
    },

    ratingBtnClickTextArea: function(size) {
        property = brand.props;
        let shelfProps = {
                "width": property.$rating_btn_click_txtarea_width,     
                "height": property.$rating_btn_click_txtarea_height,     
                "margin": property.$rating_btn_click_txtarea_margin,     
                "font-size": property.$rating_btn_click_txtarea_font_size,     
            };
                if(size=="xs"){
                    shelfProps['width'] ="240px";
                    shelfProps['height'] ="130px";
                    shelfProps['margin'] ="0px 0px 10px"; 
                    shelfProps['font-size'] ="13.3333px"; 

                };
        return shelfProps;
    },

ratingBtnClickTextAreaHover: function(size) {
    property = brand.props;
    let shelfProps = {
            "outline-color": property.$rating_btn_click_txtarea_hover,     };
    return shelfProps;
},

ratingBtnClickCloseBtn: function(size) {
    property = brand.props;
    let shelfProps = {
            "height": property.$rating_btn_click_close_btn_height, 
            "width": property.$rating_btn_click_close_btn_width,
            "background-color": property.$rating_btn_click_close_btn_background_color,
            "color":property.$rating_btn_click_close_btn_color ,   };
    return shelfProps;
},

    ratingButtonClickCta: function(size) {
        property = brand.props;
        let shelfProps = {
                "color": property.$rating_btn_click_btn_color ,
                "background-color":property.$rating_btn_click_btn_background_color,
                "font-family": property.$rating_btn_click_btn_font_family,
                "font-size":"18px",
                "line-height" : "24px",
                "text-align": "center",
                "text-shadow": "rgb(19, 104, 126) 1px 1px 1px",
                "border-radius": "5px",
            };  
        return shelfProps;
    },

    
ratinBtnClickCtaHover: function(size) {
    property = brand.props;
    let shelfProps = {
            "outline-color": property.$rating_btn_click_btn_hover,     };
    return shelfProps;
},

    ratingParagraphSub: function(size){
        property = brand.props;
        let shelfProps = {
                "font-size": "14px" ,
                "line-height":"18px",
            };
             return shelfProps;
},

ratingShareImage: function(size){
    property = brand.props;
    let shelfProps = {
            "background-image": property.$rating_shareimage_url ,
            "border-left":"1px solid rgb(102, 102, 102)",
            "margin-left":"16px",
            "margin-top":"6px",
        };
        if(size=="xs"){
            shelfProps['background-image'] =property.$rating_shareimage_url_m;
            shelfProps['border-left'] ="0px solid rgb(102, 102, 102)";
            shelfProps['margin-left'] ="0px"; 
            shelfProps['margin-top'] ="16px"; 
        };
         return shelfProps;
},

    ratingShareIcon: function(size) {
        property = brand.props;
        let shelfProps = {
                "background-color": "rgba(223, 217, 209, 1)",
                "color": property.$rating_shareicon_color ,
                "box-shadow":"rgb(204, 203, 212) 0px 5px 0px 0px" ,
                "visibility": "visible",
                "opacity": "1",
            };
        return shelfProps;
    },

    ratingShareText: function(size) {
        property = brand.props;
        let shelfProps = {
                "font-size": "12px" ,
                "font-family": property.$rating_sharetext_font_family ,
                "font-weight": "700" ,
            };
        return shelfProps;
    },
};
}