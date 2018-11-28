module.exports = function(client){
  var brandFile = client.globals.brand,
  brand = require('../../branding/'+brandFile),
  property = brand.props;
return {
      overlayWrapProp:function(size){
            let  shelfProps = {
                "display":"block",
                "padding":"0px",
                "margin":"0px",
                "border-color":property.$border_nocolor               
             };
         return shelfProps;
          },
      overlayInnerProp:function(size){
            let  shelfProps = {
               "color":property.$primary_1,
               "padding":"0px"
             };
         return shelfProps;
          },

      mrfOverlayProp:function(size){
            let  shelfProps = { }
             if(size=='lg' || size=='sm'){
              shelfProps['padding']="26px 0px 40px",
              shelfProps['border-radius']="6px"
             }             
             else {
              shelfProps['padding']="48px 0px 22px"
             };
         return shelfProps;
          },

      shelfInnerProp:function(size){
            let  shelfProps = {
               "padding":"12px 48px 0px"
             }
             if(size=='xs'){
              shelfProps['padding']="0px 16.003px"
             };
         return shelfProps;
          },
      deskProp:function(size){
            let  shelfProps = {
               "padding-left":"47.996px"
             };
         return shelfProps;
          },
      h3OverlayProp:function(size){
            let  shelfProps = {
               "color":property.$primary_1,
               "font-size":"32px",
               "line-height":"36.16px"
             }
             if(size=='xs'){
              shelfProps['font-size']="18px",
              shelfProps['line-height']="22px"
             };
         return shelfProps;
          },
      radioInputDivRowProp:function(size){
            let  shelfProps = {
              "margin-bottom":"11px"           
             }
             if(size=='xs'){
              shelfProps['margin-bottom']="22px"
             };
         return shelfProps;
          },
      radioDivProp:function(size){
            let  shelfProps = {
               "border-radius":"32px",
               "margin":"4px 16px 0px 0px",
               "height":"32px"
             }
         return shelfProps;
          },
      labelP1Prop:function(size){
            let  shelfProps = {
               "font-size":"14px",
               "line-height":"20px",
               "color":property.$mrf_secondaryclr,
               "font-family":property.$font_family_regular
             };
         return shelfProps;
          },
      labelP2Prop:function(size){
            let  shelfProps = {
              "font-size":"14px",
              "line-height":"20px",
              "color":property.$mrf_secondaryclr,
              "font-family":property.$font_family_regular
             };
         return shelfProps;
          },
      ctaLProp:function(size){
            let  shelfProps = {
              "background-color":property.$cta_overlay_bgclr,
              "border-radius":property.$cta_borderrad,
              "box-shadow":property.$ctaLoverlay_boxshadow,
              "font-size":"18px",
              "line-height":"22px",
              "color":property.$primary_2,
              "font-family":property.$cta_ff,
              "margin":"21px 21px 3px 0px",
              "padding":"12px 18px 10px"
             }
             if(size=='xs'){
              shelfProps['border-radius']=property.$cta_borderrad_m,
              shelfProps['margin']="0px 21px 3px 0px",
              shelfProps['padding']="12px 18px 13px",
              shelfProps['font-family']=property.$cta_ff_m
             };
         return shelfProps;
          },
      
      
          radio1FocusProp:function(size){
            let  shelfProps = {
               "outline-color":property.$focusColor
             };
         return shelfProps;
          },

          ctaLActiveProp:function(size){
            let  shelfProps = {
               "background-color":property.$box_bgclr
             };
         return shelfProps;
          },

          ctaLActiveHoverProp:function(size){
            let  shelfProps = {
                "background-color":property.$cta_act_hover
              };
          return shelfProps; 
          },
          ctaLActiveFocusProp:function(size){
            let  shelfProps = {
                "background-color":property.$focusColor
              };
          return shelfProps; 
          },

          heroHead1Prop:function(size){
            let  shelfProps = {
                "color":property.$primary_2,
                "font-family":property.$font_family_bold,
                "font-size":"32px",
                "line-height":"36px",
                "padding":"0px 10px 10px 26px"
              }
              if(size=='xs'){
                shelfProps['line-height']="32px",
                shelfProps['padding']="0px 10px 15px 26px"
              };
          return shelfProps; 
          },

          header1Prop:function(size){
            let  shelfProps = {
                "color":property.$primary_2,
                "font-family":property.$font_family_bold,
                "font-size":"28px",
                "line-height":"36px",
                "padding":"0px"
              }
              if(size=='xs'){
                shelfProps['line-height']="32px"
              };
          return shelfProps; 
          },
          header2Prop:function(size){
            let  shelfProps = {
                "color":property.$primary_2,
                "font-family":property.$font_family_regular,
                "font-size":"18px",
                "line-height":"22px",
                "padding":"0px 10px 20px 26px"
              }
              if(size=='xs'){
                shelfProps['font-size']="14px",
                shelfProps['padding']="0px 10px 30px 26px"
              };
          return shelfProps; 
          },


//<-------------------- Desks Properties - Start --------------------->

    //.search-container
        desk_props_0:function(size){
            let  shelfProps = {
               "background-color":property.$table_head_bgclr,
               "padding":"0px 45px"
              }
              if(size=='xs'){
                shelfProps['padding']="22px 16px 0px"
              };
          return shelfProps; 
          },
    //.product-finder
        desk_props_1:function(size){
        let  shelfProps = {
           "padding-top":"25px"
           //"color":property.$primary_1
          }
          if(size=='xs'){
            shelfProps['padding']="25px 0px 10px"
          };
      return shelfProps; 
      },
    //.desk--three-fifths.palm--one-whole
      desk_props_2:function(size){
        let  shelfProps = {
           "padding-bottom":"10px"
          };
      return shelfProps; 
      },
    //.palm--five-twelfths.desk--one-quarter
      desk_props_3:function(size){
        let  shelfProps = {
           "padding-left":"15px",
           "margin-bottom":"20px"
          }
          if(size=='xs'){
            shelfProps['padding-left']="0px"
          };
      return shelfProps; 
      },
    //.clearfix.mortgage-type
      desk_props_4:function(size){
        let  shelfProps = {
           "padding-bottom":"30px"
        }
        if(size=='xs'){
          shelfProps['padding-bottom']="0px"
        };
      return shelfProps; 
      }, 
    //.mortgage-type .desk--two-fifths .form-input-row
      desk_props_5:function(size){
        let  shelfProps = {
           "padding-top":"5px"
        }
        if(size=='xs'){
          shelfProps['padding-top']="0px"
        };
      return shelfProps; 
      },   
    //.additional-borrowing-amount .form-input-row
      desk_props_6:function(size){
        let  shelfProps = {
           "padding-top":"5px"
        }
        if(size=='xs'){
          shelfProps['padding-top']="0px"
        };
      return shelfProps; 
      }, 
    //.mrf-btl-repayment-type .form-input-row
      desk_props_7:function(size){
        let  shelfProps = {
           "padding-top":"5px"
        }
        if(size=='xs'){
          shelfProps['padding-top']="0px"
        };
      return shelfProps; 
      },
    //.palm--one-whole.desk--one-half.tool-desc-left
      desk_props_8:function(size){
        let  shelfProps = {
           "padding-left":"45px",
           "padding-right":"10px"
        }
        if(size=='xs'){
          shelfProps['padding-left']="20px",
          shelfProps['padding-right']="20px"
        };
      return shelfProps; 
      },
    //.palm--one-whole.desk--one-half.tool-desc-right
      desk_props_9:function(size){
        let  shelfProps = {
           "padding-left":"10px",
           "padding-right":"45px"
        }
        if(size=='xs'){
          shelfProps['padding-left']="20px",
          shelfProps['padding-right']="20px"
        };
      return shelfProps; 
      },
    //.tool-desc-text
      desk_props_10:function(size){
        let  shelfProps = {
           "margin-top":"20px"
        }
        if(size=='xs'){
          shelfProps['margin-top']="0px"
        };
      return shelfProps; 
      },  
    //.tool--description
      desk_props_11:function(size){
        let  shelfProps = {
           "padding-bottom":"20px"
        }
      return shelfProps; 
      }, 
    //.shelf.shelf--next
      desk_props_12:function(size){
        let  shelfProps = {
           "padding-bottom":"10px",
           "padding-top":"20px",
           "margin-top":"-1px"
        }
        if(size=='xs'){
          shelfProps['padding-top']="10px",
          shelfProps['margin-top']="0px"
        };
      return shelfProps; 
      }, 
//<-------------------- Desks Properties - End ----------------------->
      
//<-------------------- Label Properties -Start ---------------------->
    
    //.product-finder .desk--two-fifths label
        label_props_0:function(size){
         let  shelfProps = {
           "color":property.$primary_1,
           "float":"left",
           "font-family":property.$font_family_regular,
           "font-size":"18px",
           "line-height":"18px",
           "padding":"10px 15px 10px 0px"
     }
     if(size=='xs'){
      shelfProps['float']="none"
     }
   return shelfProps; 
},

//.mortgage-type .desk--two-fifths label
       label_props_1:function(size){
          let  shelfProps = {
           "color":property.$primary_1,
           "font-family":property.$font_family_regular,
           "font-size":"18px",
           "line-height":"18px"
          
      }
        if(size=='lg'||size=='sm'){
            shelfProps['float']="left",
            shelfProps['padding']="10px 0px"
        }
        else {
            shelfProps['padding']="5px 0px"
        }
return shelfProps; 
},
    //.desk--three-fifths label
      label_props_2:function(size){
        let  shelfProps = {
          "color":property.$primary_1,
          "float":"left",
          "font-family":property.$font_family_regular,
          "font-size":"18px",
          "line-height":"18px",
          "padding":"10px 15px 10px 0px"
    }
    if(size="xs"){
      shelfProps['float']="none"
    }
  return shelfProps; 
},

    //.mortgage-type-checkbox .inline-block
    label_props_3:function(size){
        let  shelfProps = {
          "color":property.$primary_1,
          "float":"left",
          "font-family":property.$font_family_regular,
          "font-size":"18px",
          "line-height":"22px",
          "padding":"5px 0px 5px 48px"
    }
    if(size="xs"){
      shelfProps['padding']="5px 0px 0px 48px"
    }
  return shelfProps; 
},

    //.additional-borrowing-amount label
    label_props_4:function(size){
        let  shelfProps = {
          "color":property.$primary_1,
          "font-family":property.$font_family_regular,
          "font-size":"18px",
          "line-height":"18px"
    }
    if(size=='lg'||size=='sm'){
      shelfProps['float']="left",
      shelfProps['padding']="10px 0px",
      shelfProps['margin-right']="28px"
  }
  else {
      shelfProps['padding']="5px 0px"
  }
  return shelfProps; 
},

    //.mrf-btl-repayment-type label
    label_props_5:function(size){
        let  shelfProps = {
          "color":property.$primary_1,
          "float":"left",
          "font-family":property.$font_family_regular,
          "font-size":"18px",
          "line-height":"18px",
          "padding":"10px 0px",
          "margin-right":"46px"
    }
    if(size=='xs'){
      shelfProps['margin-right']="0px",
      shelfProps['float']="none",
      shelfProps['padding']="0px 0px 10px"
    }
  return shelfProps; 
},

    //.separator
    label_props_6:function(size){
        let  shelfProps = {
          "border-color":property.$border_color1,
          "margin":"20px 0px 30px"
    }
    if(size=='xs'){
      shelfProps['margin']="20px 0px 35px"
    }
  return shelfProps; 
},
//<--------------------  Label Properties -End  ---------------------->

//<--------------------  Input Field Properties -Start  ---------------------->

//.input-field
input_fields_props_0:function(size){
    let  shelfProps = {
     "background-color":property.$input_field_bgclr,
     "border-color":property.$input_field_borderclr2,
     "border-radius":"5.625px",
     "border-width":"1px",
     "color":property.$primary_1,
     "font-family":property.$font_family_regular,
     "font-size":"18px",
     "line-height":"20px",
     "padding":"0px 6.75px"        
}
if(size=='xs'){
  shelfProps['border-radius']="5px"
}
return shelfProps; 
},

//.selector
input_fields_props_1:function(size){
    let  shelfProps = {
     "background-color":property.$input_field_bgclr,
     "border-color":property.$input_field_borderclr2,
     "border-radius":"5.625px",
     "border-width":"1px",
     "color":property.$primary_1,
     "font-family":property.$font_family_regular,
     "font-size":"18px",
     "line-height":"18px"    
}
return shelfProps; 
},

//.js-custom-select option
input_fields_props_2:function(size){
    let  shelfProps = {
     "color":property.$nocolor,
     "font-family":property.$ff_arial,
     "font-size":"13.3333px",
     "padding":"0px 2px 1px"  
}
if(size=='xs'){
  shelfProps['padding']="0px"
}
return shelfProps; 
},

//.checker input
input_fields_props_3:function(size){
    let  shelfProps = {
     "color":property.$nocolor,
     "font-family":property.$ff_arial,
     "font-size":"13.3333px",
     "width":"32px"  
}
return shelfProps; 
},
//.input-field.input-field--width-medium
input_fields_props_4:function(size){
  let  shelfProps = {
   "width":"120px"  
}
if(size=='xs'){
  shelfProps['width']="243px"
}
return shelfProps; 
},
//.input-field.input-field--width-small
input_fields_props_5:function(size){
  let  shelfProps = {
   "width":"35px"  
}
return shelfProps; 
},
//.input-field:not(.input-field--width-medium):not(.input-field--width-small)
input_fields_props_6:function(size){
  let  shelfProps = {
   "width":"120px"  
}
if(size=='xs'){
  shelfProps['width']="243px"
}
return shelfProps; 
},
//<--------------------  Input Field Properties -End  ---------------------->

//<---------------- Info icon & Slider Properties -Start ------------------->

//.icon-info
icon_slider_props_0:function(size){
    let  shelfProps = {
     "color":property.$primary_1,
     "font-family":property.$icon_ff,
     "font-size":"14.3px",
     "line-height":"14.3px"    
}
if(size=='xs'){
  shelfProps['margin-left']="5px"
}
return shelfProps; 
},

//.js-tool-tip .icon-info__tool-tip
icon_slider_props_1:function(size){
    let  shelfProps = {
    "background-color":property.$input_field_bgclr,
    "border-color":property.$borderclr_1,
    "border-radius":"4.02187px",
    "border-width":"0px",   
     "color":property.$primary_1,
     "font-family":property.$font_family_regular,
     "font-size":"12.87px",
     "line-height":"15.444px",
     "padding":"9.6525px"    
}
return shelfProps; 
},

//.slider--controller
icon_slider_props_2:function(size){
    let  shelfProps = {
    "padding":"1px 3px",
    "text-align":"center"    
}
return shelfProps; 
},

//.js-slider-wrapper .slider-marker
icon_slider_props_3:function(size){
    let  shelfProps = {
    "background-color":property.$slider_bgclr,
    "border-color":property.$slider_borderclr,
    "box-shadow":property.$slider_boxshadow,
    "border-radius":"30px",
    "border-width":"1px",   
     "color":property.$mrf_secondaryclr ,
     "font-family":property.$mrf_slider_ff,
     "margin":"13px 14px"    
}
return shelfProps; 
},

//.js-slider-wrapper .slider-marker .ui-slider-range
icon_slider_props_4:function(size){
    let  shelfProps = {
    "background-color":property.$slider_bgclr2,
    "box-shadow":property.$slider_boxshadow2,
    "border-radius":"4px",
    "border-width":"0px",   
     "color":property.$primary_2 ,
     "font-family":property.$mrf_slider_ff,
     "margin":"0px"    
}
return shelfProps; 
},

//.js-slider-wrapper .slider-marker .ui-slider-handle
icon_slider_props_5:function(size){
    let  shelfProps = {
    "background-color":property.$box_bgclr,
    "box-shadow":property.$slider_boxshadow3,
    "border-radius":"4px",
    "border-width":"1px",   
     "color":property.$mrf_secondaryclr ,
     "font-family":property.$mrf_slider_ff,
     "z-index":"2",
     "top":"-7.15px"    
}
return shelfProps; 
},

//.js-slider-wrapper .slider--max
icon_slider_props_6:function(size){
    let  shelfProps = {
     "color":property.$slider_bgclr,
     "font-family":property.$mrf_slider_ff2,
     "font-size":"13px",
     "top":"39.4375px"    
}
return shelfProps; 
},
//<---------------  Info icon & Slider Properties -End  -------------------->

//<---------------  Toggle Switch Properties -Start  -------------------->

//.js-mortgage-toggle-wrap .form-input-row.inline-block
toggle_props_0:function(size){
  let  shelfProps = {
   "border-color":property.$borderclr_1,
   "color":property.$primary_1,
   "margin-top":"16.25px",
   "padding":"0px 45px"    
}
if(size=='xs'){
  shelfProps['padding']="0px 16px"
}
return shelfProps; 
},

//.js-mortgage-toggle-wrap .form-input-row.inline-block label
toggle_props_1:function(size){
  let  shelfProps = {
   "border-color":property.$borderclr_1,
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"18px",
   "padding-bottom":"7.2px"    
}
return shelfProps; 
},

//.js-mortgage-toggle-wrap .form-input-row:not(.inline-block) .input-label:not(.input-label--focus)
toggle_props_2:function(size){
  let  shelfProps = {
   "background-color":property.$input_field_bgclr,
   "border-color":property.$input_field_borderclr2,
   "box-shadow":property.$toggle_boxshadow_m,
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"18px",
   "padding":"12px 25px 10px 18px",
   "margin":"2px 0px 4px"
}
if(size=='xs'){
  shelfProps['font-size']="13px",
  shelfProps['line-height']="13px",
  shelfProps['padding']="15px 24px",
  shelfProps['margin']="2px 0px 4px"
}
return shelfProps; 
},

//.js-mortgage-toggle-wrap .form-input-row:not(.inline-block) .input-label.input-label--focus
toggle_props_3:function(size){
  let  shelfProps = {
   "background-color":property.$slider_bgclr,
   "border-color":property.$input_field_borderclr,
   "box-shadow":property.$toggle_boxshadowfocus_m,
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"18px",
   "padding":"12px 25px 10px 18px",
   "margin":"2px 0px 4px"
}
if(size=='xs'){
  shelfProps['font-size']="13px",
  shelfProps['line-height']="13px",
  shelfProps['padding']="15px 24px",
  shelfProps['margin']="2px 0px 4px"
}
return shelfProps; 
},
//<---------------  Toggle Switch Properties -End    -------------------->

//<-------------------- MRF Results RTE Properties -Start     -------------------->

//.title-desc span
rte_props_0:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_bold,
   "font-size":"18px",
   "line-height":"16px"
}
return shelfProps; 
},
//.js-mortgage-toggle-wrap .comp-rich-text p
rte_props_1:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"16px",
   "line-height":"20.8px",
   "padding-bottom":"16px"
}
if(size=='xs'){
   shelfProps['line-height']="22px"
}
return shelfProps; 
},
//.comp-rich-text p strong
rte_props_2:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular
}
return shelfProps; 
},
//.comp-rich-text .white-band__variable-fig
rte_props_3:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"20px"
}
if(size=='xs'){
  shelfProps['line-height']="22px"
}
return shelfProps; 
},
//.comp-rich-text .white-band__variable-cont
rte_props_4:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"13px",
   "line-height":"15.6px"
}
if(size=='xs'){
  shelfProps['line-height']="22px"
}
return shelfProps; 
},
//.comp-rich-text cta--m a
rte_props_5:function(size){
  let  shelfProps = {
   "color":property.$anchor_clr,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"24px"
}
return shelfProps; 
},
//<-------------------- MRF Results RTE Properties -End -------------------->

//<-------------------- MRF Results Wrap Table Properties -Start -------------------->

//.mortgage-result-wrap
table_props_0:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"14px",
   "padding":"10px 45px"
}
return shelfProps; 
},
//.mortgage-result-wrap .row-head
table_props_1:function(size){
  let  shelfProps = {
   "background-color":property.$table_head_bgclr
}
return shelfProps; 
},
//.mortgage-result-wrap .js-mortgage-result td:not(.highlight)
table_props_2:function(size){
  let  shelfProps = {
   "padding":"25px 15px",
   "font-size":"14px",
   "line-height":"14px",
   "font-family":property.$font_family_regular

}
return shelfProps; 
},
//.mortgage-result-wrap .highlight
table_props_3:function(size){
  let  shelfProps = {
   "background-color":property.$highlightclr,
   "color":property.$primary_1,
   "font-size":"14px",
   "line-height":"14px",
   "font-family":property.$font_family_regular
}
return shelfProps; 
},
//.mortgage-result-wrap td a:not(.showless):not(.showmore)
table_props_4:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-size":"14px",
   "line-height":"14px",
   "font-family":property.$font_family_regular,
   "padding-bottom":"10px"

}   
return shelfProps; 
},

//.mortgage-result .row .even
table_props_5:function(size){
  let  shelfProps = {
   "background-color":property.$table_even_row_bgclr,
   "outline-width":"1px"
}
return shelfProps; 
},
//.mortgage-result .row .odd
table_props_6:function(size){
  let  shelfProps = {
   "background-color":property.$table_odd_row_bgclr,
   "outline-width":"1px"
}
return shelfProps; 
},
//.mortgage-result-wrap .js-mortgage-header td:not(.highlight)
table_props_7:function(size){
  let  shelfProps = {
   "padding":"25px 15px 15px",
   "font-size":"14px",
   "line-height":"14px",
   "font-family":property.$font_family_regular

}
return shelfProps; 
},
//<-------------------- MRF Results Wrap Table Properties -End   -------------------->

//<-------------------- MRF Results CTA Properties -Start   -------------------->

//.mortgage-result .cta--l
cta_props_0:function(size){
  let  shelfProps = {
   "margin-bottom":"9px"

}
return shelfProps; 
},

//.mortgage-result .showmore-cta .cta--l a
cta_props_1:function(size){
  let  shelfProps = {
   "background-color":property.$box_bgclr,
   "border-radius":property.$cta_borderrad,
   "border-top-width":"1px",
   "box-shadow":property.$btn_boxshadow_ctal,
   "color":property.$primary_2,
   "font-family":property.$cta_ff,
   "font-size":"18px",
   "line-height":"24px",
   "margin":"0px 21px 10px 25px",
   "padding":property.$cta_padding,
   "text-shadow":property.$btn_txtshadow_ctal


}
return shelfProps; 
},

//.mortgage-result .showless-cta .cta--l a
cta_props_2:function(size){
  let  shelfProps = {
   "background-color":property.$box_bgclr,
   "border-radius":property.$cta_borderrad,
   "border-top-width":"1px",
   "box-shadow":property.$btn_boxshadow_ctal,
   "color":property.$primary_2,
   "font-family":property.$cta_ff,
   "font-size":"18px",
   "line-height":"24px",
   "margin":"0px 21px 10px 25px",
   "padding":property.$cta_padding,
   "text-shadow":property.$btn_txtshadow_ctal


}
return shelfProps; 
},
//<-------------------- MRF Results CTA Properties -End     -------------------->

//<-------------------- Show More and Show Less Props Hover and  Focus props- Start ------------------->

showmoreHoverProp:function(size){
  let  shelfProps = {
    "background-color":"rgba(48, 144, 158, 1)"
}
return shelfProps; 
},

showlessHoverProp:function(size){
  let  shelfProps = {
    "background-color":"rgba(48, 144, 158, 1)"
}
return shelfProps; 
},
showmoreFocusProp:function(size){
  let  shelfProps = {
    "background-color":property.$focusColor
}
return shelfProps; 
},

showlessFocusProp:function(size){
  let  shelfProps = {
    "background-color":property.$focusColor
}
return shelfProps; 
},

//<-------------------- Show More and Show Less Props - End   ------------------->

//<-------------------- MRF Results - Accordion Content Props - Start   ------------------->

//.mortgage-content.js-mortgage-content.accordion-content
acc_content_0:function(size){
  let  shelfProps = {
   "background-color":property.$table_head_bgclr,
   "color":property.$primary_1,
   "padding":"20px 0px"
}
return shelfProps; 
},
//.mortgage-detail--row
acc_content_1:function(size){
  let  shelfProps = {
   "padding":"16px 0px",
   "margin-left":"15px"
}
return shelfProps; 
},
//.desk--two-fifths.mortgage-detail--label
acc_content_2:function(size){
  let  shelfProps = {
   "padding-right":"40px"
}
return shelfProps; 
},
//.desk--two-fifths.mortgage-detail--label span
acc_content_3:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"14px",
}
return shelfProps; 
},
//.desk--three-fifths.mortgage-detail--value
acc_content_4:function(size){
  let  shelfProps = {
   "padding-right":"40px"
}
return shelfProps; 
},
//.desk--three-fifths.mortgage-detail--value span:not(.cta):not(.cta--arrow)
acc_content_5:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "font-family":property.$font_family_bold,
    "font-size":"14px",
    "line-height":"14px",
}
return shelfProps; 
},
//.desk--three-fifths.mortgage-detail--value li
acc_content_6:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "font-family":property.$font_family_bold,
    "font-size":"14px",
    "line-height":"14px",
    "padding":"3px"
}
return shelfProps; 
},
//.cta-block--calculate.js-calculate.mrf-kfi-first-cta
acc_content_7:function(size){
  let  shelfProps = {
   "margin-bottom":"9px"
}
return shelfProps; 
},
//.cta-block--calculate.js-calculate.mrf-kfi-first-cta .cta--l a
acc_content_8:function(size){
  let  shelfProps = {
   "background-color":property.$box_bgclr,
   "border-radius":property.$cta_borderrad,
   "border-top-width":"1px",
   "box-shadow":property.$btn_boxshadow_ctal,
   "color":property.$primary_2,
   "font-family":property.$cta_ff,
   "font-size":"18px",
   "line-height":"24px",
   "margin":"0px 21px 10px 25px",
   "padding":property.$cta_padding2
}
return shelfProps; 
},
//<-------------------- MRF Results - Accordion Content Props - End     ------------------->


//<-------------------- Error Fields Properties - Start ---------->

//.js-propertyvalue-mortgaging .error-container
error_fields_0:function(size){
  let  shelfProps = {
   "background-color":property.$error_bgclr,
   "bottom":"44px",
   "color":property.$primary_2,
   "font-family":property.$font_family_regular,
   "font-size":"11px",
   "line-height":"11px",
   "padding":"6.875px 8.25px"
}
return shelfProps; 
},

//.js-deposit-mortgaging .error-container
error_fields_1:function(size){
  let  shelfProps = {
   "background-color":property.$error_bgclr,
   "bottom":"44px",
   "color":property.$primary_2,
   "font-family":property.$font_family_regular,
   "font-size":"11px",
   "line-height":"11px",
   "padding":"6.875px 8.25px"
}
return shelfProps; 
},

//#mortgageFinder_PropertyValueThird
error_fields_2:function(size){
  let  shelfProps = {
   "background-color":property.$error_input_bgclr,
   "border-color":property.$error_input_borderclr,
   "color":property.$primary_1,
   "border-radius":"5.625px",
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"20px",
   "padding":"0px 6.75px"
}
return shelfProps; 
},

//#mortgageFinder_depositWorthThird
error_fields_3:function(size){
  let  shelfProps = {
   "background-color":property.$error_input_bgclr,
   "border-color":property.$error_input_borderclr,
   "color":property.$primary_1,
   "border-radius":"5.625px",
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"20px",
   "padding":"0px 6.75px"
}
return shelfProps; 
},

//.cta-block--calculate a
error_fields_4:function(size){
  let  shelfProps = {
   "background-color":property.$cta_overlay_error_bgclr,
   "border-color":property.$error_input_cta_borderclr,
   "color":property.$primary_2,
   "border-radius":property.$cta_borderrad,
   "font-family":property.$cta_ff,
   "font-size":"18px",
   "line-height":"24px",
   //"padding":property.$cta_padding
}
return shelfProps; 
},

//<-------------------- Error Fields Properties - End   ---------->

//<-------------------- View More - View Less Properties - Start ---------->

//.cta-show-hide.icon-show-history
viewMoreLessProp:function(size){
  let  shelfProps = {
  "margin-bottom":"9px"
}
return shelfProps; 
},
//.cta-show-hide.icon-show-history a
viewMoreProp:function(size){
  let  shelfProps = {
   "color":property.$anchor_clr,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"25px",
   "margin-top":"14px",
   "padding-right":"40px"
}
return shelfProps; 
},
//.cta-show-hide.icon-show-history a:hover
viewMoreHoverProp:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"25px",
   "margin-top":"14px",
   "padding-right":"40px"
}
return shelfProps; 
},
//.cta-show-hide.icon-show-history a:focus
viewMoreFocusProp:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"25px",
   "margin":"14px 0px 3px 3px",
   "padding-right":"40px",
   "background-color":property.$focusColor,
   "outline-color":property.$focusColor,
   "outline-width":"3px"
}
return shelfProps; 
},

//.cta-show-hide.icon-hide-history a
viewLessProp:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"14px",
   "line-height":"25px",
   "margin":"14px 0px 3px 3px",
   "padding-right":"40px",
   "background-color":property.$focusColor,
   "outline-color":property.$focusColor,
   "outline-width":"3px"
}
return shelfProps; 
},
//<-------------------- View More - View Less Properties - End   ---------->


// ________________ Only Specific to Mobile ____________________

//<-------------------  Info Icon and Dropdown Props - Start ----------------->

//.icon-info   - for Mobile
icon_dropdown_props_0:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$icon_ff,
   "font-size":"14.3px",
   "line-height":"14.3px",
   "margin-left":"5px"    
}
return shelfProps; 
},

//.palm--five-twelfths
icon_dropdown_props_1:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"13px",
   "line-height":"13px",
   "margin-bottom":"20px"  
}
return shelfProps; 
},

//.select-box-width-small
icon_dropdown_props_2:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"13px",
   "line-height":"13px"    
}
return shelfProps; 
},
//#mortgageFinder_mortgage-term
icon_dropdown_props_3:function(size){
  let  shelfProps = {
   "color":property.$nocolor,
   "font-family":property.$ff_arial,
   "font-size":"13.3333px"
}
return shelfProps; 
},
//.js-time-label
icon_dropdown_props_4:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "font-family":property.$font_family_regular,
    "font-size":"13px",
    "line-height":"13px",
    "padding":"10px 0px"
}
return shelfProps; 
},
//<-------------------  Info Icon and Dropdown Props - End   ----------------->

//<-------------------  MRF Result block - Initial section Props - Start  ----------------->

//.mortgage-result-block li
res_block_props_0:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "float":"left",
    "text-align":"left"
}
return shelfProps; 
},
//.mortgage-result-block li a
res_block_props_1:function(size){
  let  shelfProps = {
    "color":property.$primary_2,
    "font-family":property.$font_family_bold,
    "font-size":"18px",
    "line-height":"21.6px",
    "float":"left",
    "text-align":"left",
    "padding":"10px 30px 10px 10px"
}
return shelfProps; 
},
//.mortgage-result-block li .rate-section
res_block_props_2:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "float":"left",
    "text-align":"left",
    "padding":"10px 16px 10px 16px"
}
return shelfProps; 
},
//.mortgage-result-block li .rate-section .rate-left
res_block_props_3:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "float":"left",
    "text-align":"left"
}
return shelfProps; 
},
//.mortgage-result-block li .rate-section .rate-right
res_block_props_4:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "float":"left",
    "text-align":"left"
}
return shelfProps; 
},
//.mortgage-result-block li .li-title
res_block_props_5:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "font-family":property.$font_family_regular,
    "font-size":"16px",
    "line-height":"19.2px"
}
return shelfProps; 
},
//.mortgage-result-block li .mortgage-rate
res_block_props_6:function(size){
  let  shelfProps = {
    "color":property.$primary_1,
    "font-family":property.$font_family_bold,
    "font-size":"32px",
    "line-height":"38.4px"
}
return shelfProps; 
},
//.mortgage-result-block li .cost-section 
res_block_props_7:function(size){
  let  shelfProps = {
   "padding":"10px 16px 15px 16px"
}
return shelfProps; 
},
//.mortgage-result-block li .cost-section .rate-right
res_block_props_8:function(size){
  let  shelfProps = {
    "color":property.$primary_1
}
return shelfProps; 
},
//<-------------------  MRF Result block - Initial section Props - End    ----------------->

//<-------------------  MRF Result Sliding Content - Slider section Props - Start    ----------------->

//.mortgage-sliding-content[style*="display: block;"] .fixed-header
slide_cont_props_0:function(size){
  let  shelfProps = {
  "z-index":"2",
  "position":"fixed"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .fixed-header a
slide_cont_props_1:function(size){
  let  shelfProps = {
   "background-color":property.$primary_1, 
   "color":property.$primary_2,
   "font-family":property.$font_family_regular,
   "font-size":"18px",
   "line-height":"21.6px",
   "padding":"10px 30px 10px 35px"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content
slide_cont_props_2:function(size){
  let  shelfProps = {
   "color":property.$primary_1,   
   "font-size":"13px",
   "line-height":"15.6px",
   "margin":"55px 0px 65px",
   "margin-block-start":"55px",
   "margin-block-end":"65px"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .odd-block
slide_cont_props_3:function(size){
  let  shelfProps = {
   "background-color":property.$table_odd_row_bgclr,
   "color":property.$primary_1,
   "padding":"0px 16px"
  }
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .even-block
slide_cont_props_4:function(size){
  let  shelfProps = {
   "background-color":property.$table_even_row_bgclr,
   "color":property.$primary_1,
   "padding":"0px 16px"
  }
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .li-title
slide_cont_props_5:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"16px",
   "line-height":"19.2px"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .type-value
slide_cont_props_6:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_bold,
   "font-size":"32px",
   "line-height":"38.4px"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .eligibility-header
slide_cont_props_7:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_bold,
   "font-size":"16px",
   "line-height":"19.2px"
}
return shelfProps; 
},
//.mortgage-sliding-content[style*="display: block;"] .scroll-content .eligibility-value
slide_cont_props_8:function(size){
  let  shelfProps = {
   "color":property.$primary_1,
   "font-family":property.$font_family_regular,
   "font-size":"16px",
   "line-height":"19.2px",
   "margin-bottom":"50px",
   "padding-top":"20px"
}
return shelfProps; 
},
//<-------------------  MRF Result Sliding Content - Slider section Props - End    ----------------->
};
}