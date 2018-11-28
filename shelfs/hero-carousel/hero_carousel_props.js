module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
	sliderWrapProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-image" : "none",
               "left" : "0px",
               "height" : "307px",
               "width" : "976px",
               "overflow" : "hidden",
               "top" : "auto",
               "position" : "static"
            };
        return shelfProps;
    },

    sliderImgProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : "307px",
               "width" : "976px",
               "padding" : "0px",
               "margin" : "0px",
               "display" : "block"
            };
        return shelfProps;
    },

    sliderContentProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "position" : "absolute",
               "background-color" : property.$sliderContent_bg,
               "width" : "290px",
               "height" : "185px",
               "left" : "91px",
               "top" : "49px",
               "border-radius" : "6px",
               "padding" : "24px 24px 0px"
            };
        return shelfProps;
    },

    sliderContentHeadingProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : "24px",
               "line-height" : "28px",
               "padding" : "0px 0px 7px",
               "color" : property.$primary_2,
               "font-family" : "RNHouseSansBold, sans-serif"
            };
        return shelfProps;
    },

    sliderContentRteProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display" : "block",
               "margin" : "0px 0px 27px"
            };
        return shelfProps;
    },

    sliderContentRteTextProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$primary_2,
               "font-size" : "14px",
               "line-height" : "20px",
               "padding" : "0px"
            };
        return shelfProps;
    },

    sliderContentCtaProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"padding" : "10px 18px 12px 20px",
        			"margin" : "10px 21px 16px 0px",
        			"font-family" : "RNHouseSansBold",
        			"background-color" : property.$sliderContentCta_bg,
        			"border-radius" : property.$sliderContentCta_borderRadius,
        			"border-width" : property.$sliderContentCta_borderWidth,
        			"box-shadow" : property.$sliderContentCta_boxShadow,
        			"color" : property.$primary_2,
        			"font-size" : "18px",
        			"line-height" : "24px",
      				"text-align" : "center",
          		"border-top" : property.$sliderContentCta_border,
          		"text-shadow" : property.$ctaTextShadow,
              "max-width" : "262px",
    			    "min-width" : "0px"
            };
            if(branding.getBrand.get() == "rbs-if/rbs_if.js") {
                shelfProps["padding"] = "13px 18px 9px 20px"
                
              }
        return shelfProps;
    },

    sliderContentCtaHoverProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : "rgba(52, 162, 178, 1)",
               "color" : property.$primary_2,
               "box-shadow" : property.$sliderContentCtaHover_boxShadow
            };
             if(branding.getBrand.get() == "ulster-ie/ulster_ie.js" || branding.getBrand.get() == "ulster-ie/ulster_ie_ie.js" || branding.getBrand.get() == "ulster/ulster_ie.js" || branding.getBrand.get() == "ulster/ulster.js") {
                shelfProps["background-color"] = "rgba(0, 158, 170, 1)"
                
              }
              if(branding.getBrand.get() == "ulster-ie/ulster_mac_ie.js" || branding.getBrand.get() == "ulster-ie/ulster-ie-ff.js" || branding.getBrand.get() == "ulster/ulster_mac.js" || branding.getBrand.get() == "ulster/ulster_ff.js") {
                shelfProps["background-color"] = "rgb(0, 158, 170)"
                
              }
        return shelfProps;
    },

    sliderContentCtaMouseDownProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : "rgba(52, 162, 178, 1)",
               "color" : "rgba(255, 255, 255, 1)",
               "box-shadow" : "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset"
            };
        return shelfProps;
    },

    flexPrevArrowProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-repeat" : "no-repeat",
               "left" : "0px",
               "display" : "block",
               "position" : "absolute",
               "z-index" : "10",
               "overflow" : "hidden",
               "color" : property.$primary_2,
               "transition" : "all 0.3s ease 0s",
               "margin" : "10px 0px",
               "width" : "36px",
               "height" : "86px",
               "top" : "106px"
            };
        return shelfProps;
    },

    flexPrevArrowMouseDownProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "outline" : "rgb(255, 191, 71) solid 3px"
            };
        return shelfProps;
    },

    flexNextArrowProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-repeat" : "no-repeat",
               "right" : "0px",
               "display" : "block",
               "position" : "absolute",
               "z-index" : "10",
               "overflow" : "hidden",
               "color" : property.$primary_2,
               "transition" : "all 0.3s ease 0s",
               "margin" : "10px 0px",
               "width" : "36px",
               "height" : "86px",
               "top" : "106px"
            };
        return shelfProps;
    },

    flexNavProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : "0px",
               "position" : "absolute",
               "bottom" : "1px",
               "left" : "26px",
     		       "text-align" : "center"
            };
        return shelfProps;
    },

    flexNavLiProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : "9px 18px 17px 0px",
               "display" : "inline-block"
            };
        return shelfProps;
    },

    flexNavLiAnchorProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width" : "15px",
               "height" : "15px",
               "display" : "inline-block",
               "overflow" : "visible",
               "background-color" : property.$primary_2,
               "box-shadow" : "rgba(255, 255, 255, 0.5) 0px -1px 10px 0px, rgba(0, 0, 0, 0.3) 0px 1px 10px 0px"
            };
        return shelfProps;
    },

    flexNavLiAnchorActiveProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width" : "15px",
               "height" : "15px",
               "display" : "inline-block",
               "overflow" : "visible",
               "background-color" : property.$sliderContent_bg,
               "box-shadow" : "rgba(255, 255, 255, 0.5) 0px -1px 10px 0px, rgba(0, 0, 0, 0.3) 0px 1px 10px 0px"
            };
        return shelfProps;
    },

    flexNavLiAnchorMouseDownProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "outline" : "rgb(255, 191, 71) solid 3px"
            };
        return shelfProps;
    },


    sliderContentLinkCtaProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : "rgba(173, 25, 130, 1)",
               "text-decoration":"underline solid rgb(173, 25, 130)",
               "font-size":"13px",
               "font-family":"Verdana"
            }
        return shelfProps;
    },

    sliderContentLinkCtaHoverProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color":"rgba(173, 25, 130, 1)",
               "text-decoration":"underline solid rgb(173, 25, 130)",
               "font-size":"13px",
               "font-family":"Verdana"
            }
        return shelfProps;
    },

    sliderContentLinkCtaMouseDownProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color":"rgba(173, 25, 130, 1)",
               "font-size":"13px",
               "font-family":"Verdana",
               "outline":"rgb(173, 25, 130) none 0px"
            }
        return shelfProps;
    },

};




}