var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
    rte_props = require('../rte/rte_props.js');
module.exports = {
    rewCalMainDivProps: function(size) {
        property = brand.props;
        let rewardCalculatorProps = {
               "background-color" :property.$mainDivBackgroundColor,
               "margin": property.$mainDivmargin,
               "width":property.$mainDivwidth,
               "overflow":property.$mainDivoverflow,
            };
        return rewardCalculatorProps;
  },

  mainDivHeaderProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "text-align" : property.$mainDivHeadertextalign,
           "font-size": property.$mainDivHeaderfontsize,
           "font-family":property.$mainDivHeaderfontfamily,
           "color":property.$mainDivHeadercolor,
           "padding":property.$mainDivHeaderpadding,
           "line-height":property.$mainDivHeaderlineheight,
        };
    return rewardCalculatorProps;
},

mainDivTextProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "text-align" : property.$mainDivTexttextalign,
           "font-size": property.$mainDivTextfontsize,
           "font-family":property.$mainDivTextfontfamily,
           "color":property.$mainDivTextcolor,
           "padding":property.$mainDivTextpadding,
           "line-height":property.$mainDivTextlineheight,
        };
    return rewardCalculatorProps;
},

cardWrapperProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : property.$cardWrapperheight,
           "border-bottom-color":property.$cardWrapperborderbottomcolor,
           "margin": property.$cardWrappermargin,
           "width":property.$cardWrapperwidth,
           "overflow":property.$cardWrapperoverflow,
        };
    return rewardCalculatorProps;
},
cardWrapperTextProps: function(size) {
    property = brand.props;
    let rteprops=rte_props.PropTextfs16(size);
    let toolProps = { 
            "text-align":"center",
        };
        toolProps=Object.assign(rteprops,toolProps);
        return toolProps;
},

cardWrapperImageProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : property.$cardWrapperimageheight,
           "border-bottom-color":property.$cardWrapperimageborderbottomcolor,
           "margin": property.$cardWrapperimagemargin,
           "width":property.$cardWrapperimagewidth,
        };
    return rewardCalculatorProps;
},

cardWrapperImageTwoProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : property.$cardWrapperimagetwoheight,
           "border-bottom-color":property.$cardWrapperimagetwoborderbottomcolor,
           "margin": property.$cardWrapperimagetwomargin,
           "width":property.$cardWrapperimagetwowidth,
        };
    return rewardCalculatorProps;
},

calRewardsButtonProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "background-color" : property.$calrewbuttonbgcolor,
           "font-size": property.$calrewbuttonfontsize,
           "font-family":property.$calrewbuttonfontfamily,
           "color":property.$calrewbuttoncolor,
           "display":property.$calrewbuttondisplay,
           "text-align":property.$calrewbuttontextalign,
           "text-shadow":property.$calrewbuttontextshadow,
           "box-shadow":property.$calrewbuttonboxshadow,
        };
    return rewardCalculatorProps;
},

calRewardsButtonHoveProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "background-color" : property.$calrewbuttonhoverbgcolor,

        };
    return rewardCalculatorProps;
},

calRewardsBtnFocusProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "color":property.$calrewbuttonfocuscolor,
        "background-color" : property.$calrewbuttonfocusbgcolor,
        "box-shadow":property.$calrewbuttonfocusboxshadow,
        };
    return rewardCalculatorProps;
},

questionsMainDivProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "position" : property.$questmaindivposition,
           "z-index": property.$questmaindivzindex,
           "background-color":property.$questmaindivbgcolor,
           "width":property.$questmaindivwidth,
           "display":property.$questmaindivdisplay,
        };
    return rewardCalculatorProps;
},

qestdivHeadWrapperProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "position" : property.$headerwrapperposition,
           "height": property.$headerwrapperheight,
           "overflow-x":property.$headerwrapperoverflow,
           "overflow-y":property.$headerwrapperoverflow,
           "display":property.$headerwrapperdisplay,
        };
    return rewardCalculatorProps;
},

HeadWrapperHeadingProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$headerwrapperheadingfontfamily,
           "font-size": property.$headwrapperheadingfontsize,
           "height":property.$headwrapperheadingheight,
           "color":property.$headwrapperheadingcolor,
           "line-height":property.$headwrapperheadinglineheight,
           "padding":property.$headwrapperheadingpadding,
        };
    return rewardCalculatorProps;
},

HeadWrapperHeadingTextProps:function(size) {
    property = brand.props;
    let rteprops=rte_props.Proptextfs16(size);
    let toolProps = { 
            "font-family":"RNHouseSansBold, sans-serif",
            "text-align":"center",
        };
        toolProps=Object.assign(rteprops,toolProps);
        return toolProps;
},

qestdivQuestionWrapperProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "position" : "relative",
           "padding": "0px",
           "margin":"0px",
           "display":"block",
        };
    return rewardCalculatorProps;
},

paginationProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "position" : "absolute",
           "width": "6px",
           "margin":"0px",
           "display":"block",
           "top":"199px",
           "right":"-96px",
        };
    return rewardCalculatorProps;
},

questionWrapperHeadingProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_bold,
           "font-size": property.$wrapperHeadingfontsize,
           "margin":property.$wrapperHeadingmargin,
           "color":property.$wrapperHeadingcolor,
           "line-height":property.$wrapperHeadinglineheight,
           "padding":property.$wrapperHeadingpadding,
        };
    return rewardCalculatorProps;
},

clickIconProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : "134px",
           "width": "120px",
           "padding":"0px",
           "margin":"27px 16px 0px",
           "text-align":"center",
        };
    return rewardCalculatorProps;
},

clickIconTextProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "color" : "rgba(66, 20, 95, 1)",
           "font-family": property.$font_family_bold,
           "font-size":"16px",
           "line-height":"20px",
           "padding":"6px 0px 0px",
           "cursor":"pointer",
        };
    return rewardCalculatorProps;
},

backButtonProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "color" : "rgba(173, 25, 130, 1)",
           "font-family": property.$font_family_regular,
           "font-size":"14px",
           "line-height":"14px",
           "display":"inline-block",
        };
    return rewardCalculatorProps;
},

nextButtonProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "color" : property.$nextbuttoncolor,
           "background-color": property.$nextbuttonbgcolor,
           "font-size":property.$nextbuttonfontsize,
           "border-radius":property.$nextbuttonbrradius,
           "box-shadow":property.$nextbuttonboxshadow,
           "text-shadow":property.$nextbuttontxtshadow,
           "line-height":property.$nextbuttonlineheight,
           "display":property.$nextbuttondisplay,
        };
    return rewardCalculatorProps;
},
divThreeHeadingProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$divthreeHeadingfontfam,
           "font-size": property.$divHeadingfontsize,
           "display":property.$divHeadingdisplay,
           "color":property.$divHeadingcolor,
           "line-height":property.$divHeadinglineheight,
        };
    return rewardCalculatorProps;
},

pageThreeHeadProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_bold,
           "font-size": property.$divthreeHeadfontsize,
           "display":property.$divthreeHeaddisplay,
           "color":property.$divthreeHeadcolor,
           "line-height":property.$divthreeHeadlineheight,
        };
    return rewardCalculatorProps;
},
pageThreeHeadTwoProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_bold,
           "font-size": "50px",
           "display":property.$divthreeHeadingdisplay,
           "color":property.$divthreeHeadingcolor,
           "line-height":"62px",
        };
    return rewardCalculatorProps;
},

divThreeTextProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-family" : "RNHouseSansRegular",
        "font-size": "12px",
        "color":"rgba(51, 51, 51, 1)",
        "line-height":"20px",
     };
 return rewardCalculatorProps;
   
},
linkHoverProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "color" : property.$linkshoverbgcolor,
        };
    return rewardCalculatorProps;
},


subHeadingProps:function(size) {
    property = brand.props;
    let rteprops=rte_props.PropTextH4(size);
    let toolProps = { 
            "font-family":"RNHouseSansBold, sans-serif",
            "padding":"0px",
        };
        toolProps=Object.assign(rteprops,toolProps);
        return toolProps;
},



pagethreeHeadingProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$pagethreeHeadingfontfamily,
           "font-size": property.$pagethreeHeadingfontsize,
           "color":property.$pagethreeHeadingcolor,
           "line-height":property.$pagethreeHeadinglineheight,
           "padding":property.$pagethreeHeadingpadding,
        };
    return rewardCalculatorProps;
},

pageThreeIconsProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "float" : property.$pagethreeiconfloat,
           "max-width": property.$pagethreeiconmaxwidth,
           "max-height":property.$pagethreeiconmaxheight,
           "display":property.$pagethreeicondisplay,
        };
    return rewardCalculatorProps;
},

pageThreeIconHeaderProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_bold,
           "font-size": property.$iconheaderfontsize,
           "margin":property.$iconheadermargin,
           "color":property.$iconheadercolor,
           "line-height":property.$iconheaderlineheight,
           "padding":property.$iconheaderpadding,
        };
    return rewardCalculatorProps;
},

pageThreeSliderInputProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "display" : property.$sliderinputdisplay,
           "float": property.$sliderinputfloat,
           "position":property.$sliderinputposition,
           "line-height":property.$sliderinputlineheight,
        };
    return rewardCalculatorProps;
},

pageThreeDropDownProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : property.$dropdownheight,
           "background-color": property.$dropdownbgcolor,
           "color":property.$dropdowncolor,
           "position":property.$dropdownposition,
           "border-radius": property.$dropdownborderradius,
           "font-family": property.$font_family_regular,
           "font-size": property.$dropdownfontsize,
        };
    return rewardCalculatorProps;
},

sliderMarkerProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height" : "17px",
           "background-color": "rgba(180, 169, 159, 1)",
           "display":"block",
           "box-shadow":"rgb(255, 255, 255) 0px 1px 0px 0px, rgb(160, 148, 137) 0px 3px 0px 0px inset",
           "position":"relative",
           "border-radius": "9px",
        
        };
    return rewardCalculatorProps;
},

PoundLabelProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_regular,
           "font-size": "18px",
           "line-height":"42px",
           "color":"rgba(51, 51, 51, 1)",
           "margin": "0px 11px 0px 0px",        
        };
    return rewardCalculatorProps;
},

PerLabelProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_regular,
           "font-size": "18px",
           "line-height":"42px",
           "color":"rgba(51, 51, 51, 1)",
           "margin": "0px 12px 0px 16px",        
        };
    return rewardCalculatorProps;
},
calculatedValueProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family" : property.$font_family_bold,
           "font-size": "24px",
           "line-height":"29px",
           "color":"rgba(66, 20, 95, 1)",
           "padding":"7px 0px 0px",
           "display": "block",
        
        };
    return rewardCalculatorProps;
},

poundSymbolProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-size": property.$poundsymbolfontsize,
           "line-height":property.$poundsymbollineheight,
           "color":property.$poundsymbolcolor,
           "margin-right":property.$poundsymbolmarginright,
           "display": property.$poundsymboldisplay,
        
        };
    return rewardCalculatorProps;
},
perLabelProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-size": property.$perlabelfontsize,
           "line-height":property.$perlabellineheight,
           "color":property.$perlabelcolor,
           "display": property.$perlabeldisplay,
           "font-family":property.$perlabelfontfamily,
           "float":property.perlabelfloat,        
        };
    return rewardCalculatorProps;
},
pageFourResHeadProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-size": property.$resHeaderfontsize,
           "line-height":property.$resHeaderlineheight,
           "padding":property.$resHeaderpadding,
           "text-align":property.$resHeadertextalign,    
           "float":property.$resHeaderfloat,
           "width":property.$resHeaderwidth,    
        };
    return rewardCalculatorProps;
},

pageFourRepresentativeWrapProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "border-radius": property.$repwrapperborderradius,
           "padding":property.$repwrapperpadding,
           "text-align":property.$repwrappertextalign,   
           "width":property.$repwrapperwidth,  
           "height":property.$repwrapperheight,  
        };
    return rewardCalculatorProps;
},

pageFourWrapperHeadProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "display": property.$wrapperheaderdisplay,
           "height":property.$wrapperheaderlineheight,
           "text-align":property.$wrapperheadertextalign,    
           "float":property.$wrapperheaderfloat,
           "width":property.$wrapperheaderwidth,    
        };
    return rewardCalculatorProps;
},

pageFourResultsTextProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-family": property.$fourrestextfontfamily,
           "font-size":property.$fourrestextfontsize,
           "color":property.$fourrestextcolor,   
           "line-height":property.$fourrestextlineheight,    
        };
    return rewardCalculatorProps;
},

pageFourResButtonProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "display":"block",
           "padding":"0px",          
            "color":"rgba(66, 20, 95, 1)",
           "width":"292px",    
        };
    return rewardCalculatorProps;
},

pageFourImageProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height":"40px",          
            "color":"rgba(66, 20, 95, 1)",
           "width":"40px",    
        };
    return rewardCalculatorProps;
},
pageFourImageTwoProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "height":"42px",          
            "color":"rgba(66, 20, 95, 1)",
           "width":"42px",    
        };
    return rewardCalculatorProps;
},

//mobile Properties

rewCalMainDivMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "background-color":"rgba(247, 247, 245, 1)",          
            "margin":"0px",
           "overflow-x":"hidden",    
           "overflow-y":"hidden",
           "display":"block",
        };
    return rewardCalculatorProps;
},

mainDivHeaderMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "font-size":"26px",
            "font-family":"RNHouseSansBold",
         //   "color":"rgba(66, 20, 95, 1)",
           "display": "inline-block",
           "line-height":"32px",
           "text-align":"center",    
           "padding":"26px 0px 25px",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
           rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
        }
        else{
            rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
        }
    return rewardCalculatorProps;
},

mainDivTextMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "font-size":"16px",
            "font-family":"RNHouseSansBold",
       //     "color":"rgba(66, 20, 95, 1)",
           "line-height":"32px",
           "text-align":"center",  
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

cardWrapperMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "padding":"0px",
            "display":"block",
            "color":"rgba(0, 0, 0, 1)",
           "height":"192px",
           "width":"1231px",  
        };
    return rewardCalculatorProps;
},

cardWrapperHeadingMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "font-size":"20px",
            "font-family":"RNHouseSansBold, sans-serif",
            "line-height":"24px",
         //    "color":"rgba(66, 20, 95, 1)", 
        };

        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},
cardWrapperTextMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "font-size":"13px",
            "font-family":"RNHouseSansRegular",
            "line-height":"16px",
            "margin-top":"-8px",
       //      "color":"rgba(66, 20, 95, 1)",
             "display":"block",
             "float":"left"
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

cardWrapperImgOneMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "border-bottom-color":"rgba(0, 0, 0, 1)",
            "width":"32px",
            "margin":"6.5px",
             "height":"32px",
        };
    return rewardCalculatorProps;
},
cardWrapperImgTwoMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "border-bottom-color":"rgba(0, 0, 0, 1)",
            "width":"45px",
            "margin":"0px 13px 8px",
             "height":"45px",
             "padding":"5px",
             "border-radius":"10px"
        };
    return rewardCalculatorProps;
},

calButtonMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-size": "18px",
           "font-family":"RNHouseSansBold",
           "color":"rgba(255, 255, 255, 1)",
           "display":"block",
           "text-align":"center",
           "text-shadow":"rgb(19, 104, 126) 1px 1px 1px",
           "box-shadow":"rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
        };
    return rewardCalculatorProps;
},

calButtonHoverMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "background-color" : "rgba(48, 144, 158, 1)",

        };
    return rewardCalculatorProps;
},

calBtnFocusMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
     //   "color":"rgba(66, 20, 95, 1)",
        "background-color" : "rgba(255, 191, 71, 1)",
        "box-shadow":"rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

headWrapperMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "margin":"0px",
             "height":"94px",  
             "position":"relative",
             "overflow-x":"hidden",
             "overflow-y":"hidden",
        };
    return rewardCalculatorProps;
},
headWrapperHeadMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
            "font-family":"RNHouseSansBold, sans-serif",
             "font-size":"14px",  
             "line-height":"18px",
     //        "color":"rgba(66, 20, 95, 1)",
             "padding":"0px 0px 0px 1px",
             "position":"static"
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

headWrapperHeadTwoMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-family":"RNHouseSansBold, sans-serif",
        "font-size":"40px",  
        "line-height":"44px",
 //       "color":"rgba(66, 20, 95, 1)",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

questionsWrapperMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "margin":"0px",
        "padding":"0px",  
        "box-sizing":"content-box",
        "clear":"both",
        "float":"none"
        };
    return rewardCalculatorProps;
},

questionsWrapperHeadMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-family":"RNHouseSansBold, sans-serif",
        "font-size":"18px",  
        "line-height":"22px",
        "margin":"0px",
      //  "color":"rgba(66, 20, 95, 1)",
        "padding":"0px 0px 19px",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

imageIconsMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "float":"left",
        "max-width":"32px",  
        "max-height":"32px",
        "margin":"0px 0px 0px 16px",
        "display":"block",
        "padding":"0px",
        };
    return rewardCalculatorProps;
},

imageIconLabelsMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-family":"RNHouseSansBold, sans-serif",
        "font-size":"18px",  
        "line-height":"22px",
        "margin":"0px",
  //      "color":"rgba(66, 20, 95, 1)",
        "padding":"8px 16px 0px 57px",
        "display":"block"
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

textInputMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-family":"RNHouseSansRegular, sans-serif",
        "font-size":"16px",  
        "line-height":"20px",
        "height":"20px",
        "margin":"0px",
   //     "color":"rgba(66, 20, 95, 1)",
        "padding":"11px 12px",
        "width":"38px",
        "background-color":"rgba(238, 237, 233, 1)",
        "box-sizing":"content-box",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

dropDownMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-size":"25px",  
        "line-height":"25px",
        "margin":"0px",
        "float":"left",
        "display":"block"
        };
    return rewardCalculatorProps;
},

poundSymbolMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-size":"18px",  
        "line-height":"42px",
        "float":"left",
        "color":"rgba(51, 51, 51, 1)",
        "padding":"0px",
        "display":"block"
        };
    return rewardCalculatorProps;
},

perSymbolMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "font-size":"18px",  
        "line-height":"42px",
        "float":"left",
        "color":"rgba(51, 51, 51, 1)",
        "padding":"0px",
        "display":"block"
        };
    return rewardCalculatorProps;
},

sliderMarkerMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "display":"block",  
        "width":"1199px",
        "margin":"0px",
        "float":"none",
        "background-color":"rgba(180, 169, 159, 1)",
        "height":"17px",
        "position":"relative",
        "border-radius":"9px",
        };
    return rewardCalculatorProps;
},

sliderMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "display":"block",  
        "width":"28px",
        "margin":"0px 0px 0px -14px",
        "overflow-x":"visible",
        "overflow-y":"visible",
        "background-color":"rgba(52, 162, 178, 1)",
        "height":"28px",
        "position":"absolute",
        "border-radius":"4px",
        "box-shadow":"rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset"
        };
    return rewardCalculatorProps;
},

rewardsResultsMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
        "display":"inline-block",   
        "line-height":"20px",
        "font-size":"16px",
 //       "color":"rgba(66, 20, 95, 1)",     
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

nextButtonMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {
           "font-size": "18px",
           "background-color":"rgba(52, 162, 178, 1)",
           "border-radius":"5px",
           "line-height":"22px",
           "height":"48px",
           "padding":"13px 26px",
           "color":"rgba(255, 255, 255, 1)",
           "display":"block",
           "text-align":"center",
           "text-shadow":"rgb(89, 161, 178) 1px 1px 1px",
           "box-shadow":"rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
        };
    return rewardCalculatorProps;
},

backButtonMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {         
           "line-height":"18px",            
       //     "color":"rgba(173, 25, 130, 1)",
           "display":"inline-block",
            "cursor":"pointer",
        };

        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(140, 29, 119, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(173, 25, 130, 1)"
         }
    return rewardCalculatorProps;
},

nextBtnFocusMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                 
       //     "color":"rgba(66, 20, 95, 1)",
           "background-color":"rgba(255, 191, 71, 1)",
            "box-shadow":"rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

divthreeMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {         
           "padding":"0px 16px 42px",            
            "color":"rgba(51, 51, 51, 1)",
           "font-size":"18px",
            "position":"relative",
        };
    return rewardCalculatorProps;
},

divthreeheadMobProps: function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                           
            "color":"rgba(51, 51, 51, 1)",
            "font-family":"RNHouseSansBold",
           "font-size":"18px",
            "line-height":"22px",
        };
    return rewardCalculatorProps;
},

divthreetextMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                           
            "color":"rgba(51, 51, 51, 1)",
            "font-family":"RNHouseSansRegular",
           "font-size":"14px",
            "line-height":"20px",
            "margin-top":"14px",
        };
    return rewardCalculatorProps;
},

divThreeLinksHoverMobProps: function(size) {
    property = brand.props;
//    let rewardCalculatorProps = {
        //   "color" : "rgba(66, 20, 95, 1)",
  //      };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

pgthreeHeadMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                           
    //        "color":"rgba(66, 20, 95, 1)",
            "font-family":"RNHouseSansBold",
           "font-size":"18px",
            "line-height":"28px",
            "display":"block",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},
pgHeadMainValMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                           
     //       "color":"rgba(66, 20, 95, 1)",
            "font-family":"RNHouseSansBold, sans-serif",
           "font-size":"64px",
            "line-height":"78px",
            "display":"inline-block",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},
pgThreeDivTextMobProps:function(size) {
    property = brand.props;
    let rewardCalculatorProps = {                           
    //        "color":"rgba(66, 20, 95, 1)",
            "font-family":"RNHouseSansRegular",
           "font-size":"16px",
            "line-height":"20px",
            "display":"block",
        };
        if(brand.props.$brandName=='rbs-personal'&&size=='xs') {
            rewardCalculatorProps['color'] = "rgba(10, 47, 100, 1)"
         }
         else{
             rewardCalculatorProps['color'] = "rgba(66, 20, 95, 1)"
         }
    return rewardCalculatorProps;
},

}