var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
    property = brand.props;
    rte_props = require('../../components/rte/rte_props.js');

module.exports = {
    overdraftWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_overdraft_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = "205px"; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },


    landingPageHeadingProps:function(size){
        let shelfProps = {
             "margin-top":"-20px",
             "font-size":"30px",
             "padding":"0px 45px",
             "line-height":"39px"
          }
          if(size==='xs'){
            shelfProps['font-size'] = "26px"; 
            shelfProps['line-height'] =  "33.8px";
            shelfProps['padding']="25px 16px 0px";
            shelfProps['margin-top']="0px"
         }
        
      return shelfProps;
    },
    productContainerProps:function(size){
        let shelfProps = {
             "padding":"30px 45px 0px"
          }

      return shelfProps;
    },
    prodContainerFirstRowProps:function(size){
        let shelfProps = {
            "display":"inline-block",
            "margin-bottom":"30px"
          }
    
      return shelfProps;
    },
    prodContainerWidgetProps:function(size){
        let shelfProps = {
             "float":"left",
             "padding-right":"7px",

          }
     
      return shelfProps;
    },
    prodContainerWidgetLastChildProps : function(size){
      let shelfProps= {
         "width":"145px",
         "padding-right":"0px",
         "float":"left"
      }
      return shelfProps;
    },
    widgetImageBoxProps:function(size){
        let shelfProps = {
             "width":"145px",
             "height":"145px"
          }
        
      return shelfProps;
    },
    widgetImageBoxImgProps:function(size){
        let shelfProps = {
             "border-radius":"6.5px"
          }
        

      return shelfProps;
    },
    widgetBoxTextProps:function(size){
        let shelfProps = {
             "text-align":"center",
             "font-size":"18px",
             "width":"145px",
             "line-height":"23.4px",
             "font-family":property.$font_family_bold,
             "margin-top":"12px",
          }
       

      return shelfProps;
    },

    shelfBlProps:function(size){
        let shelfProps = {
             "padding":"35px 15px 0px 45px",
             "margin": "0px"
          }
          if(size==='xs'){
            shelfProps['padding']="25px 16px 0px"
         }

     

      return shelfProps;
    },
    benefitsListUtextProps:function(size){
        let shelfProps = {
            "padding-bottom":"45px",
            "font-family":property.$font_family_bold,
             "color": property.$primary_1,
          }
          if(size==='xs'){
            shelfProps['padding-bottom']="0px"
         }
       
      return shelfProps;
    },
    benefitsListUtextRTEProps:function(size){
        let shelfProps = {
             "font-family":property.$font_family_bold,
             "font-size":"30px",
             "line-height":"33px"
          }
          if(size==='xs'){
            shelfProps['font-size']="26px",
            shelfProps['line-height']="28.6px"
         }
       
      return shelfProps;
    },
    overdraftIconProps:function(size){
        let shelfProps = {
            "background-position": "-77px 0px",
            "width": "31px",
            "height": "20px",
            "position": "absolute"
          }
        
      return shelfProps;
    },
    creditCardIconProps:function(size){
        let shelfProps = {
            "background-position": "0px 0px",
            "width": "27px",
            "height": "17px",
            "position": "absolute"
          }
       

      return shelfProps;
    },
    personalLoanIconProps:function(size){
        let shelfProps = {
            "background-position": "-158px 0px",
            "width": "16px",
            "height": "17px",
            "position": "absolute"
          }
       

      return shelfProps;
    },
    blTextProps:function(size){
        let shelfProps = {
             "padding-bottom": "25px"
          }
          if(size==='xs'){
            shelfProps['padding-bottom']="8px",
            shelfProps['padding-top']="25px"
         }
      return shelfProps;
    },
    blTextRTEProps:function(size){
        let shelfProps = {
             "color":property.$primary_1,
          }
       

      return shelfProps;
    },
    blTextRTEtextProps: function(size){
        let shelfProps = {
            "padding-bottom":"10px",
            "padding-right":"35px",
            "font-size": "16px",
            "line-height": "20.8px"
        }
        if(size==='xs'){
            shelfProps['padding-bottom']="0px",
            shelfProps['padding-right']="29.536px",
            shelfProps["line-height"]="22px"
         }
        return shelfProps;
    },
    // blTextCtaBtnsProps: function(size){
    //     let shelfProps = {
    //         "color":"rgba(66, 20, 95, 1)",
    //         "margin":"10px 12px 10px 0px",
    //         "padding":"8px 42px 0px 0px",
    //         "line-height":"22px",
    //         "font-size":"18px"
    //     }
    //     return shelfProps;
    // },
    benefitsListsProps:function(size){
        let shelfProps = {
             "margin-left":"35px",
             "font-size":"22px",
             "margin-bottom":"14.08px",
             "line-height":"22px",
             "font-family":property.$font_family_bold,
             "color":property.$primary_1,
          }
          if(size==='xs'){
            shelfProps['font-size']="18px",
            shelfProps['padding-bottom']="22px",
            shelfProps["line-height"]="22px"
            shelfProps['margin-bottom']="5.4px",
            shelfProps["line-height"]="18px"
         }
        

      return shelfProps;
    },
    toolInputCompProps:function(size){
        let shelfProps ={}
        if(size=="lg"){
            shelfProps["padding"]="0px 15px 0px 45px"
          }
        if(size=="xs"){
            shelfProps["padding-top"]="25px",
            shelfProps["background-color"]=property.$resultGreyComp_BgClr
          }
       

      return shelfProps;
    },
    borrowTypeProps:function(size){
        let shelfProps = {
             "padding-bottom": "0px"
          }
          if(size=="xs"){
            shelfProps["padding-bottom"]="12px"
          }
      return shelfProps;
    },
    borrowTypeInputRowProps:function(size){
        let shelfProps = {
             "margin-top":"0px"
          }
        

      return shelfProps;
    },
    borrowTypeInputRowLabelProps: function(size){
        let shelfProps = {
            "padding-bottom":"20px",
        }
        return shelfProps;
    },
    selectBoxProps: function(size){
        let shelfProps = {
            "position":"relative"
        }
        return shelfProps;
    },
    borrowingSelectorProps:function(size){
        let shelfProps = {
             "border":property.$borrowingSelector_border,
             "overflow":"hidden",
             "border-radius":"5.625px",
             "height":"40.5px",
             "font-family":property.$font_family_regular,
             "color":property.$primary_1,
             "font-size":"18px",
             "background-color":property.$borrowingSelector_BgClr,

          }
       

      return shelfProps;
    },
    selectorSpanProps:function(size){
        let shelfProps = {
             "width":"273.375px",
             "line-height":"41.4px",
             "height":"32.625px",
             "padding-left":"10.125px",
          }
        

      return shelfProps;
    },
    iconInfoProps:function(size){
        let shelfProps = {
             "color":property.$primary_1,
             "display":"inline-block",
             "position":"relative",
             "width":"16px",
             "height":"15px",
          }
       

      return shelfProps;
    },
    iconInfoToopTipProps:function(size){
      let shelfProps = {
           "background-color":property.$borrowingSelector_BgClr,
        }
     

    return shelfProps;
  },
    repaymentOptionsProps:function(size){
        let shelfProps = {
            "float":"left"
          }
        

      return shelfProps;
    },
    repaymentDisplayInlineProps:function(size){
        let shelfProps = {
             "display":"inline"
          }
        

      return shelfProps;
    },
    formInputCheckboxProps:function(size){
        let shelfProps = {
             "margin-top":"15px",
             
          }
       

      return shelfProps;
    },
    formInputRadioProps:function(size){
        let shelfProps = {
             "margin-right":"32px",
             "padding-bottom":"1px",
             "padding-right":"1px"
          }
          if(size==="xs"){
              shelfProps["margin-right"]="10px",
              shelfProps["margin-bottom"]="10px",
              shelfProps["padding-right"]="0px",
              shelfProps["padding-bottom"]="0px"
          }
      return shelfProps;
    },
    formInputRadioLabelProps:function(size){
        let shelfProps = {
             "padding-top":"5px",
             "font-size":"18px",
             "margin-left":"0px",
             "font-family": property.$font_family_regular,
          }
       

      return shelfProps;
    },
    amountSliderProps:function(size){
        let shelfProps = {
             "padding-bottom":"10px"
          }
        
      return shelfProps;
    },
    amountSliderInputLabelProps:function(size){
        let shelfProps = {}
        if(size==="lg"){
            shelfProps["padding-bottom"]="25px"
          }
        if(size==="xs"){
            shelfProps["padding"]="0px 0px 7.2px",
            shelfProps["font-size"]="18px",
            shelfProps["font-weight"]="400",
            shelfProps["font-family"]=property.$font_family_regular
          }
      return shelfProps;
    },
    sliderProps:function(size){
        let shelfProps = {
             "float":"left",
             "position":"relative",
          }
        
      return shelfProps;
    },
    sliderControllerProps: function(size){
        let shelfProps = {
             "float":"left",
             "width":"35px",
             "height":"35px",
             "padding":"1px 3px"
          }
        

      return shelfProps;
    },
    sliderMarkerProps: function(size){
        let shelfProps = {
            "display":"block",
            "float":"left",
            "background-color":property.$sliderMarker_BgClr,
            "border-radius":"30px",
            "margin":"13px 14px"
         }
      

     return shelfProps;
    },
    sliderHandlerBtnProps:  function(size){
        let shelfProps = {
            "border":property.$sliderHandlerBtn_Brdr,
            "font-weight":"700",
            "background-color":property.$sliderHandlerBtn_BgClr,
         }
      

     return shelfProps;
    },
    sliderMaxProps: function(size){
        let shelfProps = {
            "position":"absolute",
            "color":property.$sliderMax_Color,
         }

     return shelfProps;
    },
    sliderInputProps: function(size){
        let shelfProps = {
            "float": "left",
            "font-family": property.$font_family_regular,
         }
       
     return shelfProps;
    },
    sliderInputFieldProps: function(size){
        let shelfProps = {
            "width": "68px",
            "background-color": property.$borrowingSelector_BgClr,
         }
         if(size==="xs"){
             shelfProps["width"]="75px"
         }
       
     return shelfProps;
    },
    repayTextProps : function(size){
        let shelfProps = {
            "float": "left",
            "padding-top": "20px"
         }
      

     return shelfProps;
    },
    toolHelpTextProps: function(size){
        let shelfProps = {
            "padding-left": "15px"
        }
        if(size==='xs'){
            shelfProps['padding-top']="35px"
         }
     return shelfProps;

    },
    resultContainerProps: function(size){
        let shelfProps = {
            "float": "left",
            "text-align":"left",
            "color":property.$primary_1,
            "position":"relative",
            "font-family":property.$font_family_regular,
            "font-size":"16px",
            "width":"425px",
            "margin-bottom":"25px"
         }
       
     return shelfProps;

    },
    resultHeaderProps: function(size){
        let shelfProps = {
            "background-color":property.$primary_1,
            "color":property.$primary_2,
            "font-family":property.$font_family_regular,
            "border-top-left-radius": "5px",
            "border-top-right-radius": "5px",
            "padding":"22px 25px 25px",

         }
     return shelfProps;

    },
    btnTypeIconProps: function(size){
        let shelfProps = {
            "width": "60px",
            "height":"40px",
            "padding":"5px"
         }
     return shelfProps;

    },
    btnTypeIconImgProps: function(size){
        let shelfProps = {
            "border-radius": "8px"
         }
      
     return shelfProps;

    },
    resultTitleProps: function(size){
        let shelfProps = {
            "color": property.$primary_2,
            "text-align": "left",
            "font-family": property.$font_family_bold,
            "font-size": "24px",
            "line-height": "28.8px",
            "margin": "0px"
         }
       

     return shelfProps;

    },
    resultGreyCompProps: function(size){
        let shelfProps = {
            "padding": "25px",
            "line-height":"20.8px",
            "background-color":property.$resultGreyComp_BgClr,
            "border-bottom-left-radius": "5px",
            "border-bottom-right-radius": "5px"
         }
      
     return shelfProps;

    },
    resultGreyCompRteProps: function(size){
        let rteprops=rte_props.PropTextfs14(size);
         let shelfProps= {}
          shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    resultGreyCompRtePProps: function(size){
      let shelfProps = {
         "font-size": "12px",
         "font-family": property.$resultGreyComp_FontFamily
       }
       return shelfProps;
      },
      //debt consolidation
    debtTitleProps: function(size){
    let shelfProps = {
        "font-size": "18px",
        "color": property.$primary_1,
        "line-height":"18px",
        "font-family":property.$font_family_bold,
        }
        return shelfProps;
    },
    debtDescProps: function(size){
        let shelfProps = {
            "margin": "15px 0px",
            }
        if(size==="xs"){
            shelfProps["margin"]="25px 0px 15px"
        }
            return shelfProps;
        },
     debtCompRowProps: function(size){
    let shelfProps = {
        "margin-top": "15px",
        }
        return shelfProps;
    },
    debtCompColTwoProps: function(size){
        let shelfProps = {
            "padding-left": "5px",
            }
            return shelfProps;
        },
    debtCompColThreeProps: function(size){
        let shelfProps = {
            "padding-left": "12px",
            }
            return shelfProps;
        },
    selectBoxWidthMediumProps: function(size){
        let shelfProps = {
            "position": "relative",
            "display": "inline-block"
            }
        if(size==="xs"){
            shelfProps["padding-left"]="18px"
        }
            return shelfProps;
        },
    debtFormInputRowProps: function(size){
    let shelfProps = {
        "padding-left": "10px",
        }
        return shelfProps;
    },
    addDebtLinkProps: function(size){
    let shelfProps = {
        "margin-bottom": "0px",
        }
        return shelfProps;
    },
    addDebtLinkHoverProps: function(size){
        let shelfProps = {
            "color": property.$primary_1,
            }
            return shelfProps;
        
    },
    bnTotalProps: function(size){
        let shelfProps = {
            "font-size": "24px",
            }
            return shelfProps;
        },
    //page 3 no results upper block properties
    themeDarkGreyProps:function(size){
        let shelfProps = {
            "padding-top": "40px",
            }
            return shelfProps;
        },
    noResultGridProps:function(size){
        let shelfProps = {
            "padding": "0px 45px",
            }
            return shelfProps;
        },
    noResultLeftUpperBlockProps:function(size){
        let shelfProps = {
            "padding-right": "25px",
            }
            return shelfProps;
        },
    noResultDeskOneHalfProps:function(size){
        let shelfProps = {
            "margin-right": "0px",
            }
            return shelfProps;
        },
    noResultTitleProps:function(size){
        let shelfProps = {
            "font-size": "24px",
            "line-height": "31.2px",
            "font-family": property.$font_family_bold,
            "margin-bottom": "22px"
            }
            if(size==="xs"){
            shelfProps["font-size"]="21px",
            shelfProps["line-height"]="25.2px",
            shelfProps["margin-bottom"]="0px"
            }
            return shelfProps;
        },
    lightGreyContainerProps:function(size){
        let shelfProps = {
            "padding": "18px",
            "text-align":"left",
             "color":property.$primary_1,
             "font-family":property.$font_family_regular,
             "font-size":"16px",
             "border-radius":"5px",
            }
            return shelfProps;
        },
    rteTextLinkProps:function(size){
        let shelfProps = {
            "color": property.$rteTextLink_color,
            }
            return shelfProps;
        },
    noResultCTAProps:function(size){
        let shelfProps = {
            "display": "inline-flex",
            }
            return shelfProps;
        },
    noResultCTALinkProps:function(size){
        let shelfProps = {
            "min-height": "23px",
            "margin":"10px 12px 10px 0px",
            "color":property.$rteTextLink_color,
            }
            if(brand.props.$brandName=='rbs-personal'){
                shelfProps["margin"]= "0px",
                shelfProps["padding"]="6px 42px 6px 43px"
            }
            return shelfProps;
        },
    noResultTopRteTextProps:function(size){
        let rteprops=rte_props.Proptextfs16(size);
        let shelfProps= {
            "line-height":"20.8px"
        }
        if(size==="xs"){
            shelfProps["line-height"]="22px"
        }
         shelfProps=Object.assign(rteprops,shelfProps);
       return shelfProps;
    },
    //no result bottom block
    noResultBottomRteTextProps:function(size){
        let rteprops=rte_props.Proptextfs16(size);
        let shelfProps= {
            "line-height":"22.4px"
        }
        if(brand.props.$brandName=='rbs-personal' || size==="xs"){
            shelfProps["font-size"]="14px",
            shelfProps["line-height"]="19.6px"
        }
         shelfProps=Object.assign(rteprops,shelfProps);
       return shelfProps;
    },
    bnResultContainerProps:function(size){
        let shelfProps = {
            "margin-bottom": "25px",
            "text-align":"left",
             "color":property.$primary_1,
             "font-family":property.$font_family_regular,
             "font-size":"16px",
             "border-radius":"5px",
            }
            if(size==="xs"){
               shelfProps["margin-bottom"]= "0px" 
            }
            return shelfProps;
        },
    noResultHeaderProps:function(size){
        let shelfProps = {
            "color": property.$primary_1,
            "background-color":property.$noResultHeader_bgColor,
            "padding":"28px 15px 50px",
            "font-family":property.$font_family_regular,
            }
            if(size==="xs"){
                shelfProps["background-color"]= property.$noResultHeader_bgColor_mob,
                shelfProps["padding"]="0px 16px"
             }

            return shelfProps;
        },
    noResultHeaderRTEProps:function(size){
        let shelfProps = {
            "min-height": "50px",
            }
            return shelfProps;
        },
    noResultCTAlinkProps:function(size){
        let shelfProps = {
            "padding":"10px 42px 10px 0px",
            "color":property.$rteTextLink_color
            }
            return shelfProps;
        },
    //result page properties
    resultGreyCompPage3Props:function(size){
        let shelfProps = {
            "padding":"20px 15px 50px",
            "line-height": "20.8px",
            "background-color":property.$resultGreyComp_BgClr,
            "font-family":property.$font_family_regular
            }
            return shelfProps;
        },
    resultpageresultHeaderProps:function(size){
        let shelfProps = {
            "background-color":property.$primary_1,
            "color":property.$primary_2,
            "padding":"28px 15px 23px",
            }
            if(size==="xs"){
                shelfProps["padding"]="28px 15px 23px 48px",
                shelfProps["background-color"]=property.$resultPageHeader_Bgcolor_mob
            }
            return shelfProps;
        },
    contentBlockProps:function(size){
        let shelfProps = {
            "padding-bottom":"25px",
            }
          if(size==="xs"){
              shelfProps["padding-bottom"]="0px"
          }
            return shelfProps;
        },
    resultPageresultTitleProps:function(size){
        let shelfProps = {
            "padding-bottom":"5px",
            "color":property.$primary_2,
            "font-size":"32px",
            "line-height":"44.8px",
            "margin":"0px",
            "font-family":property.$font_family_bold
            }
        if(size==="xs"){
            shelfProps["padding-bottom"]="0px",
            shelfProps["font-size"]="18px",
            shelfProps["line-height"]="25.2px"
        }
            return shelfProps;
        },
    resultContainerLeftItemProps:function(size){
        let shelfProps = {
            "box-sizing": "border-box",
            "padding-right": "7px",
            "padding-left":"0px",
            }
            return shelfProps;
        },
    titleProsProps:function(size){
    let shelfProps = {
        "padding-left":"28px",
        }
        return shelfProps;
    },
    resultGreyCompRteTextProps:function(size){
        let rteprops= rte_props.PropTextLi(size);
        let shelfProps= {
            "margin":"0px 0px 12px",
        }
         shelfProps=Object.assign(rteprops,shelfProps);
       return shelfProps;
    },
    titleConsProps:function(size){
        let shelfProps = {
            "padding-left":"30px",
            }
            return shelfProps;
        },
    nSuitableProps:function(size){
        let shelfProps = {
            "margin-bottom":"10px",
            "font-family":property.$font_family_bold
            }
            if(size==="xs"){
            shelfProps["margin-bottom"]="0px",
            shelfProps["font-family"]=property.$font_family_regular,
            shelfProps["font-size"]="14px"
            }
            return shelfProps;
        },
    debtResultHeaderProps:function(size){
        let shelfProps = {
            "padding":"28px 25px 50px",
            }
            if(size ==="xs"){
                shelfProps["padding"]="28px 15px 23px 48px"
            }
            return shelfProps;
        },   
    debtResultGreyCompProps:function(size){
        let shelfProps = {
            "padding":"28px 25px 50px",
            }
            return shelfProps;
        }, 
    resultContainerRightItemProps:function(size){
        let shelfProps = {
            "padding-left":"7px",
            "box-sizing": "border-box"
            }
            return shelfProps;
        }, 
    showOptionsBtnActiveProps:function(size){
        let shelfProps = {
            "background-color":property.$buttonActive_bgColor,
            "color": property.$primary_1,
        }
        if(size==="lg"){
            shelfProps["outline"]= property.$buttonActive_outline
            }
        if(size==="xs"){
            shelfProps["padding"]="12.5px 0px"
        }
            return shelfProps;
        }, 
    backToTopBtnActiveProps: function(size){
        let shelfProps = {
            "background-color":property.$buttonActive_bgColor,
            "color": property.$primary_1,
            "outline": property.$buttonActive_outline,
            "border-radius":"5px"
            }
            return shelfProps;
        }, 
    BackToPrvPageLinkHoverProps: function(size){
        let shelfProps = {
            "color": property.$backToPrvPageLink_Color
            }
            return shelfProps;
        }, 
    //mobile properties
    borrowTypeDrpDownProps: function(size){
        let shelfProps = {
            "padding": "25px 16px 30px"
            }
            return shelfProps;
        },
    ruleSectionProps : function(size){
        let shelfProps = {
            "padding": "0px 16px 12px"
            }
            return shelfProps;
        },
    borrowSelectionCtaProps: function(size){
        let shelfProps = {
            "padding": "0px 16px 40px"
            }
            return shelfProps;
        },
    noResulttopBlockProps: function(size){
        let shelfProps = {
            "padding": "16px",
            "background-color":property.$resultGreyComp_BgClr_Mob,
            }
            return shelfProps;
        },
     gettingStartedProps:function(size){
        let shelfProps = {
            "margin-bottom": "20px"
            }
            return shelfProps;
        },
    subDescProps:function(size){
    let shelfProps = {
        "padding-top": "10px"
        }
        return shelfProps;
    },
    subDescRteTextProps:function(size){
        let shelfProps = {
            "font-family": property.$font_family_regular,
            "font-size":"22px",
            "line-height":"26px",
            "color":property.$primary_1
            }
            return shelfProps;
        },
    productDetailProps:function(size){
        let shelfProps = {
            "position": "absolute",
            "z-index":"15",
            "margin-top":"20px",
            }
            return shelfProps;
        },
    productDetailResultContainerProps:function(size){
        let shelfProps = {
           "padding":"30px 0px"
            }
            return shelfProps;
        },
    productDetailHeaderNavProps:function(size){
        let shelfProps = {
           "position":"fixed",
           "top":"0px",
           "z-index":"13",
           "display":"block",
           "background-color":property.$primary_1,
           "padding":"20px",
            "color":property.$primary_2,
        }
            return shelfProps;
        },
    productDetailFooterNavProps:function(size){
        let shelfProps = {
           "position":"fixed",
           "z-index":"14",
           "display":"block",
           "background-color":property.$primary_1,
           "padding":"20px",
           "min-height":"90px",
            "color":property.$primary_2,
        }
            return shelfProps;
        },
    productDetailFooterNavPrevProps:function(size){
        let shelfProps = {
           "padding-left":"28px",
           "position":"absolute",
           "left":"16px",
           "font-size":"11px",
           "line-height":"11px"
            }
            return shelfProps;
        },
    productDetailHeaderNavPrevProps:function(size){
        let shelfProps = {
            "padding-left":"28px",
            "position":"absolute",
            "left":"16px",
            "font-size":"11px",
            "line-height":"23px"
            }
            return shelfProps;
        },     
    productDetailResultHeaderProps:function(size){
        let shelfProps = {
           "background-color": property.$primary_1,
            }
            return shelfProps;
        },
    productDetailNavFooterProps:function(size){
        let shelfProps = {
           "min-height": "90px",
           "z-index":"14",
           "bottom":"0px"
            }
            return shelfProps;
        },
    productDetailNoResultHeaderProps:function(size){
        let shelfProps = {
           "min-height": "450px",
            }
            return shelfProps;
        },
    //landing page overlay properties
    slidingContainerProps:function(size){
        let shelfProps = {
           "z-index": "1000",
           "position":"absolute",
           "overflow": "hidden",
           "background-color":property.$slidingContainer_BgColor
            }
            return shelfProps;
        },
    iconSectionProps:function(size){
        let shelfProps = {
           "padding": "45px 0px 0px 45px",
            }
            return shelfProps;
        },
    widgetContainerProps:function(size){
        let shelfProps = {
           "width": "248px",
           "height": "248px",
            }
            return shelfProps;
        },
    widgetContainerImgProps:function(size){
        let shelfProps = {
           "border-radius": "13px"
            }
            return shelfProps;
        },
    iconDescProps:function(size){
        let shelfProps = {
           "padding": "20px 20px 10px",
           "width":"210px",
           "margin-top":"20px",
           "border-radius":"8.125px",
           "background-color":property.$iconDesc_BgColor
            }
            return shelfProps;
        },
    iconDescSectionProps:function(size){
        let shelfProps = {
           "padding-left": "15px",

            }
            return shelfProps;
        },
    iconDescSectionHeadingProps:function(size){
        let shelfProps = {
           "padding-top": "50px",
           "font-size":"22px",
           "font-family":property.$font_family_bold

            }
            return shelfProps;
        },
    descTextProps:function(size){
        let shelfProps = {
           "padding-top": "30px",
            }
            return shelfProps;
        },
    homePanelRulesProps:function(size){
        let shelfProps = {
           "padding": "100px 45px 0px 35px",
            }
            return shelfProps;
        },
    chatCtaProps:function(size){
        let shelfProps = {
           "float": "left",
            }
            return shelfProps;
        },
    slidingContinueCtaProps:function(size){
        let shelfProps = {
           "min-width": "178px",
                     }
            return shelfProps;
        },
    slidingBackLinkProps:function(size){
        let shelfProps = {
           "min-height": "23px",
           "margin":property.$slidingBackLink_margin,
           "color":property.$rteTextLink_color,
        
          }
            return shelfProps;
        },
}