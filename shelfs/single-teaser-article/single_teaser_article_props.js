//article shelf props
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    marProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" :property.$articleShelfPadding, 
            };
        return shelfProps;
    },
    themeWhiteShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeWhiteShelfBg,
               "color" : property.$themeWhiteShelfColor,
            };
        return shelfProps;
    },
    themeLightBlue: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeLightBlueBg,
               "color" : property.$themeLightBlueColor,
            };
        return shelfProps;
    },
     themeBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$SinglethemeBlueShelfBg,
               "color" : property.$SinglethemeBlueShelfColor,
            };
        return shelfProps;
    },
    titlecomp : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size':property.$singleArticleTitlefs,
               'line-height':property.$singleArticleTitlelh,
               'color': property.$titlecompColor,
               "font-family": property.$font_family_titlecomp,
            };
            return shelfProps;
    },
    titMargin : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom': property.$singleArticleTitleMargin,
            };
            return shelfProps;
    },
    rteBodyCust : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : property.$rteBodyCustfs,
            "line-height" : property.$rteBodyCustlh,
            'color': property.$rteBodyCustColor,
          };           
    return cssProps;
    },
     rteIncidentMesSelCls : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            
            "border-top": "1px solid rgb(255, 0, 0)"
          };           
    return cssProps;
    },
    rteTextChild : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "padding-bottom":property.$rteTextChildPadding,
          };           
    return cssProps;
    },
    imgWrapProps : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               "margin-bottom":"13px",
            };
        return shelfProps;
    },
    imgPadding : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding-left":"32px",
            };
        return shelfProps;
    },
    videoheading : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding":"6px 14px",
               "color":property.$vidoheading,
            };
        return shelfProps;
    },
     videoplaybutton : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               "width":"48px",
               "height":"48px",
               "background-color":property.$playbuttonColor,
               "margin-left":"-8px",
            };
        return shelfProps;
    },
    videoplaybuttonbluetheme : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               
               "background-color":property.$playbuttonblueColor,
              
            };
        return shelfProps;
    },
    playbuttonfocus : function(size){
     var shelfProps = {},property = brand.props;
            shelfProps = {
               
               "outline":"rgb(255, 191, 71) solid 3px"
              
            };
        return shelfProps;
    },
    


    ctaSarticle:function(size){
    var prop={},property = brand.props;
    prop={  
            'padding' : property.$ctaSarticlePadding,
            'color': property.$ctaSarticleColor,
            'font-size': '18px',
            'line-height': property.$ctaSarticlelh,           
            'margin-top': property.$ctaSarticleMargin,
            'font-family':property.$font_family_regular,
    };
    return prop;
    },
    ctaSarticleMouseDown:function(size){
    var prop={},property = brand.props;
    prop={  
            'padding' : property.$ctaSarticlePadding,
            'background-color':property.$ctaSarticleMouseDownBg, 
            'color': property.$ctaSarticleMouseDown,
            'font-size': '18px',
            'line-height': property.$ctaSarticlelh,            
            'margin-top': property.$ctaSarticleMouseDownMargin,
            'font-family':property.$font_family_regular,
    };
    return prop;
    },
    ctaSarticleMouseDownBlue:function(size){
    var prop={},property = brand.props;
    prop={  
            'padding' : property.$ctaSarticlePadding,
            'background-color':property.$ctaSarticleMouseDownBg, 
            'color': property.$ctaSarticleMouseDownBlue,
            'font-size': '18px',
            'line-height': property.$ctaSarticlelh,            
            'margin-top': property.$ctaSarticleMouseDownMargin,
            'font-family':property.$font_family_regular,
    };
    return prop;
    },
    ctaIcon:function(size){
    var prop={},property = brand.props;
    prop={  
            'font-family': 'nw-icons',
    };
    return prop;
    },
    ctaSarticleHover:function(size){
      var prop={},property = brand.props;
        prop={  
            'color' : property.$ctaSarticleHover,
        };
      return prop;
    },
    //Mobile props
    themeBlueMobile: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeBlueMobileBg,
               "color" : property.$themeBlueMobile,
            };
        return shelfProps;
    },
     marPropsMobile: function(size) {
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$articlepaddingMobile,
            };
        return shelfProps;
    },
    imgPaddingMobile : function(size){
     var shelfProps = {},
            shelfProps = {
               "padding":property.$imgpaddingmobile,
            };
        return shelfProps;
    },
     
    
    titlecompMobile : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size':property.$titlecompMobilefs,
               'line-height':property.$titlecompMobilelh,
               'color': property.$titlecompColor,
               "font-family": property.$font_family_titlecomp_mobile,
            };
            return shelfProps;
    },
    rteBodyCustMobile : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : "16px",
            "line-height" : "20px",
            'color': property.$rteBodyCustColor,
          };           
    return cssProps;
    },
    rteBodyCustMobileWhite : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : "16px",
            "line-height" : property.$rteBodyCustMobileWhite,
            'color': property.$rteBodyCustColor,
          };           
    return cssProps;
    },
    rteIncidentMesMobileCls : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            
            "border-top": "1px solid rgb(255, 0, 0)"
          };           
    return cssProps;
    },
    rteBodyCustMobileLight : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : "16px",
            "line-height" : property.$rteBodyCustMobileLight,
            'color': property.$rteBodyCustColor,
          };           
    return cssProps;
    },
    rteBodyCustMobileBlue : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "font-size" : "16px",
            "line-height" : "22px",
            'color': property.$rteBodyCustColor,
          };           
    return cssProps;
    },
    ctaSarticlePaddingMobile:function(size){
      var prop={};
        prop={  
            'padding' : '19px 0px 18px',
        };
      return prop;
    },
    ctaSarticleMobile:function(size){
      var prop={};property = brand.props;
        prop={  
            'padding-right' : '42px',
            'color': property.$ctaSarticleColorM,
            'font-size': '18px',
            'line-height': '22px',            
            'font-family':property.$font_family_regular,
        };
      return prop;
    },
    ctaSarticleMobileMouseDown:function(size){
      var prop={};property = brand.props;
        prop={  
            'padding-right' : '42px',
            'background-color': property.$ctaSarticleMouseDownBg, 
            'color': property.$ctaSarticleMouseDown,
            'font-size': '18px',
            'line-height': '22px',            
            'font-family':property.$font_family_regular,
        };
      return prop;
    },

    ctaSarticleMouseDownMobileBlue:function(size){
      var prop={};property = brand.props;
        prop={  
            'padding-right' : '42px',
            'background-color': property.$ctaSarticleMouseDownBg, 
            'color': property.$ctaSarticleMouseDownBlue,
            'font-size': '18px',
            'line-height': '22px',            
            'font-family':property.$font_family_regular,
        };
      return prop;
    },
    ctaSarticleHoverM:function(size){
      var prop={},property = brand.props;
        prop={  
            'color' : property.$ctaSarticleHoverM,
        };
      return prop;
    },
    rteTextChildMobile : function(size){
     var cssProps = {}, property = brand.props,
        cssProps={   
            "padding-bottom":property.$rteTextChildMobilePadding,
          };           
    return cssProps;
    },
  };
}
