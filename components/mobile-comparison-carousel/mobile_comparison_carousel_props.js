module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
	
  return {
        fixedHeaderProp: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "border-radius" : "12px 12px 0px 0px",
                    "margin-right":"1px",
                    "padding": "20px 14px 17px"
                };
            return shelfProps;
      },
      fixedFooterProp: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "border-radius" : "0px 0px 12px 12px",
                "margin-right":"1px",
                "padding": "0px 14px 24px"
            };
        return shelfProps;
    },

    dots_active_Prop: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "border-radius" : "13px",
                "background-color" : property.$activePtsbgclr
            };
        return shelfProps;
    },
    dots_notactive_Prop: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "border-radius" : "13px",
                "background-color" : property.$notactivePtsbgclr
            };
        return shelfProps;
    },


    hdFtBgProp1: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$bgcolor1
            };
        return shelfProps;
    },
    hdFtBgProp2: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$bgcolor2
            };
        return shelfProps;
    },
    hdFtBgProp3: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$bgcolor3
            };
        return shelfProps;
    },
    hdFtBgProp4: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$bgcolor4
            };
        return shelfProps;
    },
    hdFtBgProp5: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$bgcolor5
            };
        return shelfProps;
    },

    loyaltySalesTitleProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size" : "18px",
                "line-height":"22px",
                "font-family": property.$font_family_bold,
                "color":property.$primary_2,
                "height":"44px",
                "text-transform":"uppercase"
            };
        return shelfProps;
    },
    loyaltySalesHeaderTextProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size" : "14px",
                "line-height":"18px",
                "font-family": property.$font_family_bold,
                "color":property.$primary_2,
                "height":"18px"                
            };
        return shelfProps;
    },
    loyaltySalesFooterTextProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size" : "14px",
                "line-height":"14px",
                "font-family": property.$font_family_regular,
                "color":property.$primary_2,
                "height":"auto"                
            };
        return shelfProps;
    },

    comparisonBlockProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               'padding-top': '16px',
               'position':'relative'             
            };
        return shelfProps;
    },

    loyaltySalesCTAProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height":"20px",
                "font-family": property.$primary_cta_font,
                "color":property.$ctacolor,
                "margin-bottom":"3px",
                "padding":"7px 23px",
                "border-radius": property.$cta_border_radius,
                "background-color":property.$ctabgcolor           
            };
        return shelfProps;
    },

    ctahoverProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$ctaHoverbgcolor          
            };
        return shelfProps;
    },
    
    ctafocusProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$onfocusprimarycolor,
                "color":property.$primary_1         
            };
        return shelfProps;
    },

    loyaltySalesAccordionTitleProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size":"18px",
                "line-height":"20px",
                "font-family": property.$font_family_bold,
                "color": property.$primary_1,
                "padding":"12px 39px 13px 14px"                          
            };
        return shelfProps;
    },
    accordionBgEvenProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$acc_bg_Color_Even                    
            };
        return shelfProps;
    },
    accordionBgOddProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color":property.$acc_bg_Color_Odd                       
            };
        return shelfProps;
    },
    loyaltySalesAccordionTitleOnHoverProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color":property.$primary_1,
                "padding":"12px 39px 13px 14px",
                "outline-color":property.$onfocusprimarycolor                         
            };
        return shelfProps;
    },
    loyaltySalesAccordionContentProp: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size":property.$acc_li_fontsize,
                "line-height":property.$acc_li_lineheight,
                "font-family": property.$font_family_regular,
                "color":property.$acc_li_color,                              
            };
        return shelfProps;
    },
   ctamAProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color":property.$cta_m_a_clr2,
               "font-family": property.$cta_m_a_ff,
               "font-size":"18px",
               "line-height":"22px",
               "margin-bottom":"1px",
               "padding":"5px 42px 5px 0px"                       
            };
        return shelfProps;
    },

    showMoreLessProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color":property.$cta_m_a_clr,
               "font-family": property.$font_family_regular,
               "font-size":"16px",
               "line-height":"16px",
               "padding":"4px 15px 13px 16px"                       
            };
        return shelfProps;
    },
    showMoreLessFocusProp:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "outline-color": property.$seeMoreLess_outlineclr                     
            };
        return shelfProps;
    },
};
}