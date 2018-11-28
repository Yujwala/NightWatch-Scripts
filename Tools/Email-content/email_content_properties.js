var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

module.exports = {
    mainToolBlockProps: function(size) {
        property = brand.props;
        let emailContentProps = {
               "background-color" : property.$mainBlockToolBackgroundColor,
               "color": property.$mainBlockToolcolor,
               "padding":property.$mainBlockToolPadding,
               "width":property.$mainBlockToolwidth,
               "border":property.$mainBlockToolborder,
               "border-radius":property.$mainBlockToolbdradius,
            };
        return emailContentProps;
  },

  loginButtonDisabledProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "background-color" : "rgba(127, 127, 127, 1)",
           "box-shadow": "rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
           "border-top":"0px none rgb(66, 20, 95)",
        };
    return emailContentProps;
},

closeButtonProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "background-color" : property.$closebuttonbgcolor,
           "width": property.$closebuttonwidth,
           "height":property.$closebuttonheight,
           "border-radius":property.$closebuttonborderradius,
               };
    return emailContentProps;
},


    mainBlockProps: function(size) {
        property = brand.props;
        let emailContentProps = {
               "background-color" : property.$mainBlockBackgroundColor,
               "color": property.$mainBlockcolor,
               "display": property.$mainBlockDisplay,
               "padding":property.$mainBlockPadding,
               "margin":property.$mainBlockMargin
            };
        return emailContentProps;
  },

  headLineProps: function(size) {
    property = brand.props;
    let emailContentProps = {
            "color":property.$headLinecolor,
           "font-family" : property.$headLinefontfamily,
           "font-size": property.$headLinefontsize,
           "line-height": property.$headLinelineheight,
           "padding":property.$headLinePadding,
           "margin":property.$headLineMargin
        };
    return emailContentProps;
},

inputLabelProps: function(size) {
    property = brand.props;
    //var emailContentProps = {},
    let emailContentProps = {
            "color":property.$inputLabelcolor,
           "font-family" : property.$inputLabelfontfamily,
           "font-size": property.$inputLabelfontsize,
           "line-height": property.$inputLabellineheight,
           "padding":property.$inputLabelPadding,
           "margin":property.$inputLabelMargin
        };
    return emailContentProps;
},


errorStatusInputProps: function(size) {
    property = brand.props;
   let  emailContentProps = {
           "background-color" : "rgba(230, 194, 196, 1)",
           "border-color": "rgb(209, 5, 5)",
           
        };
    return emailContentProps;
},

contentOverlayProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "z-index" : property.$contentoverlayzindex,
           "top": property.$contentoverlaytop,
           "left":property.$contentoverlayleft,
           "position":property.$contentoverlayposition,
           "display":property.$contentoverlaydisplay,
           "width":property.$contentoverlaywidth,
           
        };
    return emailContentProps;
},

contentOverlayProdNameProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "padding-top": "24px",
           "float":"left",
           "margin-left":"52px",
           "padding-bottom":"8px"
        };
    return emailContentProps;
},

contentOverlayPreviewProps: function(size) {
    property = brand.props;
   let emailContentProps = {
           "padding-top": "32px",
           "background-color":"rgba(180, 169, 159, 1)",
           "padding-bottom":"40px"
        };
    return emailContentProps;
},

      firstInput: function(size) {
            property = brand.props;
           let emailContentProps = {
                   "box-shadow" : property.$firstInputBoxShadow,
                   "color": property.$firstInputcolor,
                   //"border": property.$firstInputBorder,
                   "padding":property.$firstInputPadding
                };
            return emailContentProps;
      },
      salRefInput: function(size) {
        property = brand.props;
       let emailContentProps = {
               "box-shadow" : property.$firstInputBoxShadow,
               "color": property.$firstInputcolor,
               //"border": property.$salrefborder,
               "padding":property.$firstInputPadding
            };
        return emailContentProps;
  },

      radioButtonProps: function(size) {
        property = brand.props;
        let emailContentProps = {
               "background-color" : property.$radioButtonbgcolor,
               "color": property.$radioButtoncolor,
               "display": property.$radioButtondisplay,
               "float":property.$radioButtonfloat,
               "width":property.$radioButtonwidth,
               "height":property.$radioButtonheight
            };
        return emailContentProps;
  },
  checkBoxProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "background-color" : property.$checkboxbgcolor,
           "color": property.$checkboxcolor,
           "display": property.$checkboxdisplay,
           "float":property.$checkboxfloat,
           "height":property.$checkboxheight,
           "width":property.$checkboxwidth
    };
    return emailContentProps;
},

  rbsLogoProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "height":property.$rbsLogoheight,
           "text-indent":property.$rbsLogotextindent,
           "width":property.$rbsLogowidth,
           "padding":property.$rbsLogopadding,
           "margin":property.$rbsLogomargin,
        };
    return emailContentProps;
},
rbsPremierLogoProps: function(size) {
    property = brand.props;
   let emailContentProps = {
           "height":property.$rbsLogoheight,
           "text-indent":property.$rbsLogotextindent,
           "width":property.$rbspremierLogowidth,
           "padding":property.$rbspremierLogopadding,
           "margin":property.$rbspremierLogomargin,
        };
    return emailContentProps;
},
natwestLogoProps: function(size) {
    property = brand.props;
   let emailContentProps = {
           "height":property.$rbsLogoheight,
           "text-indent":property.$rbsLogotextindent,
           "width":property.$natwestLogowidth,
           "padding":property.$natwestLogopadding,
           "margin":property.$natwestLogomargin,
        };
    return emailContentProps;
},
natwestPremierLogoProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "height":property.$rbsLogoheight,
           "text-indent":property.$rbsLogotextindent,
           "width":property.$natwestpremierLogowidth,
           "padding":property.$natwestpremierLogopadding,
           "margin":property.$natwestpremierLogomargin,
        };
    return emailContentProps;
},
ulsterNiLogoProps: function(size) {
    property = brand.props;
    let emailContentProps = {   
           "width":property.$ulsterNiLogowidth,
           "padding":property.$ulsterNiLogopadding,
           "margin":property.$ulsterNiLogomargin,
        };
    return emailContentProps;
},
ulsterRoiLogoProps: function(size) {
    property = brand.props;
    let emailContentProps = {     
           "width":property.$ulsterRoiLogowidth,
           "padding":property.$ulsterRoiLogopadding,
           "margin":property.$ulsterRoiLogomargin,
        };
    return emailContentProps;
},

      inputOneFocusProps: function(size) {
        property = brand.props;
      let emailContentProps = {
               "outline":"rgb(255, 191, 71) solid 3px"
            };
        return emailContentProps;
  },

  loginButtonFocusProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "box-shadow":"rgb(245, 151, 0) 0px 3px 0px 0px, rgb(255, 191, 71) 0px 1px 0px 0px inset",
           "background-color":"rgba(127, 127, 127, 1)",
           "color":"rgba(66, 20, 95, 1)",
           "text-shadow":"none",
        };
    return emailContentProps;
},

pageTwoTextProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "font-family":property.$font_family_regular,
           "font-size":property.$pagetwotextfontsize,
           "line-height":property.$pagetwotextlineheight,
           "display":property.$pagetwotextdisplay,
        };
    return emailContentProps;
},

infoIconHoverProps: function(size) {
    property = brand.props;
   let emailContentProps = {
           "color":"rgba(66, 20, 95, 1)",
        };
    return emailContentProps;
},

overlayTextProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "color":"rgba(10, 47, 100, 1)",
           "font-size":"13px",
           "line-height":"18px"
        };
    return emailContentProps;
},


DeptDropDownProps: function(size) {
    property = brand.props;
    let emailContentProps = {
           "color":property.$deptdropdowncolor,
           "display":property.$deptdropdowndisp,
           "font-family":property.$font_family_regular,
           "font-size":property.$deptdropdownfontsize,
           "line-height":property.$deptdropdownlineheight,
           "width":property.$deptdropdownwidth,
           "margin":property.$deptdropdownmargin
        };
    return emailContentProps;
},


 }