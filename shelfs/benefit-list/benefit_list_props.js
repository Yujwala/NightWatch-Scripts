//article shelf props
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    benefitlistShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$benefitlistpadding
            };
        return shelfProps;
    },
    benefitlisticonProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-family": "nw-icons",
               "line-height": property.$iconLineheight,
               "font-size": property.$iconFontsize
            };
        return shelfProps;
    },
    benefitlisttitleWhiteProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$benefitlistrteWhitepaddingBottom,
               
                "color" : property.$benefitlisttitleColor
            };
        return shelfProps;
    },
    benefitlisttitleBlueProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$benefitlistrteWhitepaddingBottom,
                              
                "color" : property.$benefitlisttitleWhiteColor
                
            };
        return shelfProps;
    },
    benefitlistprimarytitleProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-bottom" : property.$Primarytitlebottom,
                //"color" : property.$benefitlistColor,
                "line-height": "13px"
               
              };
        return shelfProps;
    },
     benefitlistprimarytitletextWhiteProps: function(size) {
        property = brand.props;
        
        var shelfProps = {},
            shelfProps = {
               "font-size" : property.$titleTextFontsize,
               "color" : property.benefitlistprimarytitletext_color,
                "line-height": property.$titleTextLineheight
               
              };
        return shelfProps;
    },
    benefitlistSectionProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : property.$SelctionPaddingleft,
               "padding-right" : property.$SelctionPaddingright,
               "line-height"   : "13px"
    };
        return shelfProps;
    },
    benefitslistProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$listrtepaddingbottom,
               "font-size"     : "14px",
               "line-height"   : "20px"
               

    };
        return shelfProps;
    },
    benefitslistrteWhiteProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : "14px",
               "line-height"   : property.$listrteheight,
               "padding-bottom": property.$listrtepaddingbottom,
               "padding-right" : property.$listrtepaddingright,
               "color"         : property.$benefitlisttitleColor             
               
            };
        return shelfProps;
    },
    benefitslistrteOffWhiteProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : "14px",
               "line-height"   : property.$listrteheight,
               "padding-bottom": property.$benefitlistrteWhitepaddingBottom,
               "padding-right" : property.$benefitlistrtepaddingright,
               "color"         : property.$benefitlisttitleColor             
               
            };
        return shelfProps;
    },
    
    benefitslistrteBlueProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : "14px",
                "color"    : property.$benefitlisttitleWhiteColor
               
            };
        return shelfProps;
    },
    benefitslistrteLightBlueProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : "14px",
               "line-height"   : property.$listrteheight,
               "padding-bottom": property.$listrtepaddingbottom,
               "color"         : property.$benefitlisttitleColor             
               
            };
        return shelfProps;
    },

    //Mobile Props
    benefitlistShelfPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$benefitlistpadding_m
            };
        return shelfProps;
    },
benefitlisticonPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-family": "nw-icons",
               "line-height": property.$iconLineheightm,
               "font-size": property.$iconFontsizem
            };
        return shelfProps;
    },
     benefitlisttitleWhitePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" :  property.$benefitlisttitle_paddingbottom_m, 
               
                "color" : property.$benefitlisttitleColor
            };
        return shelfProps;
    },
    benefitlisttitleBluePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                             
                "color" : property.$benefitlisttitleWhiteColor
            };
        return shelfProps;
    },
    benefitlistprimarytitlePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-bottom" : property.$benefitlisttitle_margin_bottom_m,
                //"color" : property.$benefitlisttitleColor,
                "line-height": "13px"
               
              };
        return shelfProps;
    },
     benefitlistprimarytitletextWhitePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : property.$benefitlistprimarytitletext_fs_m,
                "color" : property.$benefitlisttitleWhiteThemeColor_m,
                "line-height": property.$titleTextLineheightm
               
              };
        return shelfProps;
    },
    benefitlistprimarytitletextOffWhitePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              
                "color" : property.$benefitlisttitleColor,
                "line-height": property.$titleTextLineheightm
               
              };
        return shelfProps;
    },
    benefitlistprimarytitletextLightBluePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               
                "color" :property.$benefitlisttitleWhiteThemeColor_m,
                
               
              };
        return shelfProps;
    },
    benefitlistprimarytitletextBluePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               
                "color" : property.$benefitlisttitleWhiteColor,
                
               
              };
        return shelfProps;
    },
    benefitlistSectionPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : "16.003px",
               "padding-right" : "16.003px",
               "line-height"   : "13px"
    };
        return shelfProps;
    },
    benefitslistPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-bottom" : "5.4px",
               "font-size"     : "18px",
               "line-height"   : "18px"
               

    };
        return shelfProps;
    },
    benefitslistrteWhitePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : property.$benefitslistrteWhite_fs_m,
               "line-height"   : property.$benefitslistrteWhite_lh_m,
               "padding-right" :property.$benefitslistrteWhite_paddingright_m,
               "color"         : property.$benefitlisttitleColor
            };
        return shelfProps;
    },
    benefitslistrteOffWhitePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            
               "color"         : property.$benefitlisttitleColor
            };
        return shelfProps;
    },
    benefitslistrteBluePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : "16px",
               "line-height"   : "22px",
                "padding-right" : "29.536px",
                "color" : property.$benefitlisttitleWhiteColor
            };
        return shelfProps;
    },
    benefitslistrteLightBluePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size"     : property.$benefitslistrte_fs_m,
               "line-height"   : property.$benefitslistrte_lh_m,
                "padding-right" : property.$benefitslistrte_paddingright_m,
               "color"         : property.$benefitlisttitleColor
            };
        return shelfProps;
    }
  };
}
