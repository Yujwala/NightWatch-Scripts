module.exports = function(client){
   var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return { 
	sliderWrap: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$sliderWrapBgColor,
               "padding" : property.$sliderWrapPadding,
            };
        return shelfProps;
  },

  nonHomesliderWrap: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$nonHomesliderBgColor,
            };
        return shelfProps;
  },

  nonHomeslider: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : "48px 32px",
            };
        return shelfProps;
  },

  sliderImg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : property.$sliderImgHeight,
               "width" : property.$sliderImgWidth,
               "margin" : property.$sliderImgMargin,
            };
        return shelfProps;
  },

    sliderImgMargin: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$sliderImgMar,
            };
        return shelfProps;
    },

    flexSliderli: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width": property.$flexSliderliWidth,
               "margin": property.$flexSliderliMargin,
            };
        return shelfProps;
    },

    flexSliderliLastChild: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-right" : property.$flexSliderliLastMargin,
            };
        return shelfProps;
    },

    sliderRteHeading: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$sliderRteH3Color,
               "font-size" : property.$sliderRteH3fs,
               "line-height" : property.$sliderRteH3lh,
               "font-family" : property.$sliderRteH3FontFamily,
               "padding" : property.$sliderRteH3Padding,
            };
        return shelfProps;
    },
    sliderRteHeadingH3: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$sliderRteH3Color,
               "font-size" : property.$sliderRteH4fs,
               "line-height" : property.$sliderRteH4lh,
               "font-family" : property.$sliderRteH3FontFamily,
               "padding" : property.$sliderRteH3Padding,
            };
        return shelfProps;
    },
    sliderRteP: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$sliderRtePColor,
               "font-size" : "14px",
               "line-height" : property.$sliderRtePlh,
               "font-family" : property.$sliderRtePff,
               "padding" : property.$sliderRtePadding,
            };
        return shelfProps;
    },

    sliderCta_m: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" :property.$sliderCta_mPadding, 
            };
        return shelfProps;
    },

    sliderCta_m_a: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$sliderCta_m_aColor, 
               "font-size" : property.$sliderCta_m_afs,
               "line-height" : property.$sliderCta_m_alh,
               "font-family" : property.$sliderCta_m_afontfamily,
               "padding" : property.$sliderCta_m_aPadding,
               "margin": property.$sliderCta_m_aMargin,
            };
        return shelfProps;
    },

    rteUlLi: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$rteUlLiColor,
               "font-size" : "14px",
               "line-height" : "20px",
               "font-family" : property.$rteUlLiff,
               "padding" : property.$rteUlLiPadding,
               "margin": property.$rteUlLiMargin,
            };
        return shelfProps;
    },

    flexPrevArrow: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "width" : property.$flexPrevArrowWidth,
              "height" : property.$flexPrevArrowHeight,
              "top" : property.$flexPrevArrowTop,
               "left" : property.$flexPrevArrowLeft,
               "z-index" : "10",
               "transition" : property.$flexPrevArrowTransition,
               "margin" : "10px 0px", 
            };
        return shelfProps;
    },

    flexPrevArrowMouseDown: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "outline" : property.$flexPrevArrowMouseDown,
            };
        return shelfProps;
    },

    flexNextArrow: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "width" : property.$flexPrevArrowWidth,
              "height" : property.$flexPrevArrowHeight,
              "top" : property.$flexPrevArrowTop,
              "right" : "0px",
              "z-index" : "10",
              "transition" : property.$flexPrevArrowTransition,
              "margin" : "10px 0px",
            };
        return shelfProps;
    },

    ctaHoverProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$ctaHoverColor,
               "font-size" : property.$ctaHoverfs,
               "line-height" : property.$ctaHoverlh,
               "font-family" : property.$sliderCta_m_afontfamily,
               "padding" : property.$sliderCta_m_aPadding,
               "margin": property.$sliderCta_m_aMargin,
            };   
        return shelfProps;
    },

    ctaMouseDownProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$ctaMouseDownBg,
               "color" : property.$ctaMouseDownColor,
            };
        return shelfProps;
    },

    flexNav: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$flexNavPAdding,
               "height" : property.$flexNavHeight,
               "top" : property.$flexNavTop,
     		       "text-align" : "center",
            };
        return shelfProps;
    },

    flexNavLi: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$flexNavLiPadding,
               "display" : "inline-block"
            };
        return shelfProps;
    },

    flexNavLiAnchor: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width" : property.$flexNavLiAnchor,
               "height" : property.$flexNavLiAnchor,
               "background-color" : property.$flexNavLiAnchorBg,
               "border-radius":property.$flexNavLiActiveBorderRadius,
            };
        return shelfProps;
    },

    flexNavLiAnchorActive: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width" : property.$flexNavLiAnchor,
               "height" : property.$flexNavLiAnchor,
               "background-color" : property.$flexNavLiAnchorActiveBg,
               "border-radius":property.$flexNavLiActiveBorderRadius,
            };
        return shelfProps;
    },

    flexNavLiAnchorMouseDown: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "outline" : property.$flexNavLiAnchorMouseDown,
            };
        return shelfProps;
    },

    mobflexslider : function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$mobflexsliderPadding,
               "min-height" : property.$mobflexsliderHt,
               "top" : property.$mobflexsliderTop,
               "margin": property.$mobflexsliderMar,       
               "position":property.$mobflexsliderPos,
            };
        return shelfProps;
    },
    mobflexsliderWrap: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$mobflexsliderwrapbg,
               "top" : property.$mobflexsliderwrapTop,
               "left" : property.$mobflexsliderwrapleft,
            };
        return shelfProps;
    },
    mobflexsliderNav: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$mobflexsliderNavPad,
               "top" : property.$mobflexsliderNavTop,  
               "bottom" : property.$mobflexsliderNavbtm, 
               "margin": property.$mobflexsliderNavMar,
               "text-align": "center",      
            };
        return shelfProps;
    },
    mobflexsliderNavLi: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-right" : property.$mobflexsliderNavLiPdr,       
               "margin": property.$mobflexsliderNavLiMAr,             
            };
        return shelfProps;
    },
    mobflexsliderNavLiAActive: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$mobflexsliderNavLiAActivebg,
            };
        return shelfProps;
    },
    mobflexsliderNavLiA: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : property.$mobflexsliderNavLiAHt,  
               "width" : property.$mobflexsliderNavLiAWt,
               "background-color":property.$mobflexsliderNavLiAbg,
               "border-radius": property.$mobflexsliderNavLiAbrRadius,
            };
        return shelfProps;
    },
    mobSliderblockLi: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "min-height" : property.$mobSliderblockLiminHt,
               "padding" : property.$mobSliderblockLipd,
               "position":"relative",
               "float":"left",
               "margin-top":"0px",
               "list-style":"none outside none",   
            };
        return shelfProps;
    }, 
    mobSliderblock: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {               
               "clear": "both",              
            };
        return shelfProps;
    },  
    mobSliderblockImg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : property.$mobSliderblockImgHt,
               "border-radius": property.$mobSliderblockBrRadius,
               "margin": property.$mobSliderblockMargin,
               "position":"relative",
            };
        return shelfProps;
    },
    mobSliderimageAfter: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "bottom" : property.$mobSliderblockImgAft,
               "right": property.$mobSliderblockImgRtAft,
               "border-width": property.$mobSliderblockImgBorderWth,
               "border-style": "solid",
               "border-color": property.$mobflexsliderSliderimageAfterbg,
               "position":"absolute",
            };
        return shelfProps;
    },
    mobSliderblockContent: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$mobSliderblockContentMar,
               "padding" : property.$mobSliderblockContentPad,
               "font-family" : property.$mobblockContentff,
               "color" : property.$mobblockContentColor,
               "clear":"both",
            };
        return shelfProps;
    },
    mobSlidercomprichText: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {              
               "padding" : property.$mobSlidercomprichTextPad,              
            };
        return shelfProps;
    },
    mobSlidercomprichTextLi: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {              
               "margin" : property.$mobSlidercomprichTextLiMar,
               "padding" : property.$mobSlidercomprichTextLiPad, 
               "background-color" : property.$mobSlidercomprichTextLibg, 
               "clear":"both",
               "float":property.$mobSlidercomprichTextLifloat,   
               "min-height":property.$mobSlidercomprichTextLiminht,
               "font-size" : property.$mobSlidercomprichTextLifs,
               "line-height" : property.$mobSlidercomprichTextLilh,
               "font-family" : property.$mobSlidercomprichTextLiff,
               "color" : property.$mobSlidercomprichTextLiColor,

            };
        return shelfProps;
    },
    mobSliderblockContentH4: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : property.$mobblockContentH4fs,
               "line-height" : property.$mobblockContentH4lh,
               "font-family" : property.$mobblockContentH4ff,
               "padding-bottom" : property.$mobblockContentH4padBtm,
               "color" : property.$mobblockContentH4Color,
            };
        return shelfProps;
    },
    mobSliderblockContentH4A: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : property.$mobblockContentH4afs,
               "line-height" : property.$mobblockContentH4alh,
               "font-family" : property.$mobblockContentH4aff,
               "color" : property.$mobblockContentH4aColor,
            };
        return shelfProps;
    },
    mobSliderblockContentH3: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size" : property.$mobblockContentH3fs,
               "line-height" : property.$mobblockContentH3lh,
               "font-family" : property.$mobblockContentH3ff,
               "color" : property.$mobblockContentH3Color,
               "padding-bottom" : property.$mobblockContentH3,
            };
        return shelfProps;
    },
    mobSliderblockContentP: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$mobblockContentPPad,
               "font-size" : property.$mobblockContentPfs,
               "line-height" : property.$mobblockContentPlh,
               "font-family" : property.$mobblockContentPff,
               "color" : property.$mobblockContentPColor,
            };
        return shelfProps;
    },
    mobSliderblockContentPsecond: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$mobblockContentPPadSec,
               "font-size" : property.$mobblockContentPfsSec,
               "line-height" : property.$mobblockContentPlhSec,
               "font-family" : property.$mobblockContentPffSec,
               "color" : property.$mobblockContentPColorSec,
            };
        return shelfProps;
    },
    mobSliderblockContentCta: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$mobblockblockContentCtaPad,
               
            };
        return shelfProps;
    },
    mobSliderblockContentCtaA: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                              
               "margin": property.$mobblockContentCtaAMar,
               "padding" : property.$mobblockContentCtaAPad,
               "font-size" : property.$mobblockContentCtaAfs,
               "line-height" : property.$mobblockContentCtaAlh,
               "font-family" : property.$mobblockContentCtaAff,
               "color" : property.$mobblockContentCtaAcolor,
               "max-width" : property.$mobblockContentCtaAMaxwth,
               "min-height" : property.$mobblockContentCtaAMinHt,
            };
        return shelfProps;
    },
    mobSliderblockContentCtaAfter: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {               
               "width" : property.$mobblockCtaAfterwth,
               "height" : property.$mobblockCtaAfterHt, 
               "right" : property.$mobblockCtaAfterRt,
               "z-index" : property.$mobblockCtaAfterzindex,
               "position" : "absolute",
               "font-size" : property.$mobblockCtaAfterFs, 

            };
        return shelfProps;
        },

        //Video Carousel Properties  
        flexSlider: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {               
                "padding" : "50px 48px 30px 48px",
                };
                if(size=="xs"){
                    shelfProps['padding'] ="16px 16px 16px 16px";
                };    
            return shelfProps;

        },  
          video: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {               
                "width" : "272px",
                "height" : "224.5px",
                };
            if(brand.props.$brandName=='rbs-personal' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='rbs-bussiness' || brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-if' ) {
                shelfProps["height"] = "224px";
             }        
             if(brand.props.$brandName=='lombard') {
                shelfProps["height"] = "226px";
                shelfProps["width"] = "274px";
             }        
                if(size=="xs"){
                    shelfProps['width'] ="426px";
                    shelfProps['height'] ="239px";
                  }
                  if(brand.props.$brandName=='lombard')  {
                    if(size=="xs"){
                    shelfProps["height"] = "232px";
                }
            }
            return shelfProps;

        },

        videoPlay: function(size) {
            property = brand.props;
            let shelfProps = {
                'width':"48px",
                "height": "48px",
                'color': property.$videoPlayColor,
        };
            if(size=="xs"){
                shelfProps['width'] ="40px";
                shelfProps['height'] ="40px";
            };
        return shelfProps;
        },

        videoPlayFocus: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {               
                    "outline": "rgb(255, 191, 71) solid 3px",     };
            return shelfProps;

        },

        videoClose: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {               
                "width" : "20px",
                "height" : "20px",
                };
                if(size=="xs"){
                    shelfProps['width'] ="24px";
                    shelfProps['height'] ="24px";
                };    
            return shelfProps;

        },
        videoHeading: function(size) {   
            property = brand.props;
            let shelfProps = {
                    'font-family':"RNHouseSansRegular, sans-serif",
                    "font-size": "18px",
                };
             if(brand.props.$brandName=='lombard') {
                    shelfProps["font-size"] = "25px";
              }        
     
            return shelfProps;
        },    

        videoTranscript: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {               
                    'font-family':"RNHouseSansRegular, sans-serif",
                    "font-size": "13px",
                    "line-height":"13px",
                    };
            return shelfProps;

        },
      };
}