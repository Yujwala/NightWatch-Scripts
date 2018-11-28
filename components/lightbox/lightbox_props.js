var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
    rte_props = require('../rte/rte_props.js');
    property = brand.props;

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
	
  return {
        overlayWrapProp: function(size) {
        let  shelfProps = {
                   "display":"block",
                   "padding":"0px",
                   "margin":"0px",
                   "border-color":"rgb(0, 0, 0)"                
                };
            return shelfProps;
      },

      overlayWrapAfterClick:function(size){
        let  shelfProps = {
            "display":"block",
            "padding":"0px",
            "margin":"0px",
            "border-color":"rgb(0, 0, 0)"                
         };
     return shelfProps;
      },

      headlineProps:function(size){
        let  shelfProps = {
            "display":"block",
            "padding":"0px",
            "margin":"0px",
            "font-size":"32px",
            "color":property.$primary_1            
         };
     return shelfProps;
      },

      //<---- Div, Header Properties Starting ---->

     // .overlay-wrap .overlay-inner .theme--white .lap--one-half.desk--two-thirds

      deskprops_00:function(size){
        let  shelfProps = {
            "padding-left":"32px",
            "margin":property.$lb_desk23_margin,
            "color":property.$primary_1              
         };
     return shelfProps;
      },

     //.overlay-wrap .overlay-inner .theme--white .desk--two-thirds .header-group

     deskprops_01:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin-bottom":property.$lb_head_mb,
            "color":property.$primary_1             
         };
     return shelfProps;
      },

      // .overlay-wrap .overlay-inner .theme--white .desk--two-thirds .header-group__headline

      deskprops_02:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin":property.$lb_white_desk23_margin,
            "font-size":property.$lb_head_fontsize,
            //"color":property.primary_1,
            "font-family":property.$lb_head_ff               
         };
     return shelfProps;
      },

     // .overlay-wrap .overlay-inner .theme--white .desk--two-thirds .cta--1 a


      deskprops_03:function(size){
        let  shelfProps = {
            "padding":"13px 18px 9px 20px",
            "margin":"28px 0px 16px 0px",
            "color":property.$primary_2,
            "background-color" :property.$lb_backgrndclr1,
            "border-bottom-left-radius": "5px",
            "border-radius": "5px",
            "line-height":"24px",
            "font-size":"18px",
			"font-family":property.$primary_cta_font,
            "text-decoration-style":"solid"	           
         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--two-thirds

      deskprops_04:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_1              
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         }
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--white .lap--one-half.desk--one-third
      deskprops_05:function(size){
        let  shelfProps = {
            "padding-left":"32px",
            "margin":"0px",
            "color":property.$primary_1               
         };
     return shelfProps;
      },
      
      //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--one-third
      deskprops_06:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_1               
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         }
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--white .lap--one-half.desk--two-thirds .header-group__headline p

      deskprops_07:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin":"0px",
            "color":property.$lb_font_color1,
            "font-family": property.$lb_head_ff,
            "font-size":property.$lb_head_fontsize,
            "line-height":property.$lb_head_p_lh,

         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--white .desk--two-thirds .cta--m a
      deskprops_08:function(size){
        let  shelfProps = {
            "padding":property.$lb_desk23_a_pad,
            "margin-top":"18px",
            "color":property.$lb_white_anchorclr1,
            "background-color" :property.$lb_backgrndclr2,
            "line-height":property.$lb_cta_m_a_lh,
            "font-size":"18px",
			"font-family":property.$font_family_regular,
            "text-decoration-style":"solid"	           
         };
     return shelfProps;
      },




      // .overlay-wrap .overlay-inner .theme--blue .lap--one-half.desk--two-thirds

      deskprops_10:function(size){
        let  shelfProps = {
            "display":"block",
            "padding":"0px 0px 0px 32px",
            "margin":property.$lb_desk23_margin,
            "font-size":"13px",
            "color":property.$primary_1             
         };
     return shelfProps;
      },

      // .overlay-wrap .overlay-inner .theme--blue .desk--two-thirds .header-group

      deskprops_11:function(size){
        let  shelfProps = {
            "display":"block",
            "padding":"0px",
            "margin-bottom":property.$lb_head_mb,
            "font-size":"13px",
            "color":property.$primary_1             
         };
     return shelfProps;
      },

       // .overlay-wrap .overlay-inner .theme--blue .desk--two-thirds .header-group__headline

       deskprops_12:function(size){
        let  shelfProps = {
            "display":"block",
            "padding":"0px",
            "margin":property.$lb_blue_desk23_margin,
            "font-size":property.$lb_head_fontsize,
            "color":property.$lb_font_color1           
         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--blue .desk--two-thirds .cta--1 a

      deskprops_13:function(size){
        let  shelfProps = {
            "padding":"13px 18px 9px 20px",
            "margin":"28px 0px 16px 0px",
            "color":property.$primary_2,
            "background-color" :property.$lb_backgrndclr1,
            "border-bottom-left-radius": "5px",
            "border-radius": "5px",
            "line-height":"24px",
            "font-size":"18px",
			"font-family":property.$primary_cta_font,
            "text-decoration-style":"solid"	           
         };
     return shelfProps; 
      },

      //.overlay-wrap .overlay-inner .theme--blue .palm--one-whole.desk--two-thirds

      deskprops_14:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_2
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--blue .lap--one-half.desk--one-third


      deskprops_15:function(size){
        let  shelfProps = {
            "padding-left":"32px",
            "margin":"0px",
            "color":property.$primary_1              
         };
     return shelfProps;
      },
      
      //.overlay-wrap .overlay-inner .theme--blue .palm--one-whole.desk--one-third
      deskprops_16:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_2
                            
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         }
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--blue .lap--one-half.desk--two-thirds .header-group__headline p

      deskprops_17:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin":"0px",
            "color":property.$lb_font_color1,
            "font-family": property.$lb_head_ff,
            "font-size":property.$lb_head_fontsize,
            "line-height":property.$lb_head_p_lh,

         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--blue .desk--two-thirds .cta--m a
      deskprops_18:function(size){
        let  shelfProps = {
            "padding":property.$lb_desk23_a_pad,
            "margin-top":"18px",
            "color":property.$lb_anchorclr1,
            "background-color" :property.$lb_backgrndclr2,
            "line-height":property.$lb_cta_m_a_lh,
            "font-size":"18px",
			"font-family":property.$font_family_regular,
            "text-decoration-style":"solid"	          
         };
     return shelfProps;
      },

      // .overlay-wrap .overlay-inner .theme--light-blue .lap--one-half.desk--two-thirds

      deskprops_20:function(size){
        let  shelfProps = {
            "padding-left":"32px",
            "margin":property.$lb_desk23_margin,
            "color":property.$primary_1               
         };
     return shelfProps;
      },

     //.overlay-wrap .overlay-inner .theme--light-blue .desk--two-thirds .header-group

     deskprops_21:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin-bottom":"18px",
            "color":property.$primary_1              
         };
     return shelfProps;
      },

      // .overlay-wrap .overlay-inner .theme--light-blue .desk--two-thirds .header-group__headline

      deskprops_22:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin":"0px",
            "font-size":"32px",
            "color":property.$primary_1,
            "font-family":property.$font_family_bold               
         };
     return shelfProps;
      },

     // .overlay-wrap .overlay-inner .theme--light-blue .desk--two-thirds .cta--1 a


      deskprops_23:function(size){
        let  shelfProps = {
            "padding":"13px 18px 9px 20px",
            "margin":"28px 0px 16px 0px",
            "color":property.$primary_2,
            "background-color" :property.$lb_backgrndclr1,
            "border-bottom-left-radius": "5px",
            "border-radius": "5px",
            "line-height":"24px",
            "font-size":"18px",
			"font-family":property.$primary_cta_font,
            "text-decoration-style":"solid"	           
         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--light-blue .palm--one-whole.desk--two-thirds

      deskprops_24:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_1               
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         }
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--light-blue .lap--one-half.desk--one-third
      deskprops_25:function(size){
        let  shelfProps = {
            "padding-left":"32px",
            "margin":"0px",
            "color":property.$primary_1               
         };
     return shelfProps;
      },
      
      //.overlay-wrap .overlay-inner .theme--light-blue .palm--one-whole.desk--one-third
      deskprops_26:function(size){
        let  shelfProps = {
            "padding-left":"47.996px",
            "margin":"0px",
            "color":property.$primary_1               
         }
         if(size==="xs"){
            shelfProps['padding-left'] = "0px"
         }
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--light-blue .lap--one-half.desk--two-thirds .header-group__headline p

      deskprops_27:function(size){
        let  shelfProps = {
            "padding":"0px",
            "margin":"0px",
            "color":property.$primary_1,
            "font-family": property.$font_family_bold,
            "font-size":"32px",
            "line-height":"39px",

         };
     return shelfProps;
      },

      //.overlay-wrap .overlay-inner .theme--light-blue .desk--two-thirds .cta--m a
      deskprops_28:function(size){
        let  shelfProps = {
            "padding":property.$lb_desk23_a_pad,
            "margin-top":"18px",
            "color":property.$lb_anchorclr1,
            "background-color" :property.$lb_backgrndclr2,
            "line-height":property.$lb_cta_m_a_lh,
            "font-size":"18px",
			"font-family":property.$font_family_regular,
            "text-decoration-style":"solid"	           
         };
     return shelfProps;
      },

      //<---- Div, Header Properties Ending ---->


   // <------- Comp Rich text properties  Starting ---->

   //.overlay-wrap .overlay-inner .theme--white.canvas-shelf .comp-rich-text p
      comp_rte_props_00:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_font_color1,
        "padding-bottom" : "14px"         
      }
      if(size==="xs"){
        shelfProps['padding-bottom'] = "16px"
     }
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.canvas-shelf .comp-rich-text p a
     comp_rte_props_01:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"       
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.canvas-shelf .comp-rich-text ul
     comp_rte_props_02:function(size){
        let  shelfProps = {
        "padding-bottom" : "13px"
      };
      return shelfProps;
     },

     // .overlay-wrap .overlay-inner .theme--white.canvas-shelf .comp-rich-text ul li
     comp_rte_props_03:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_1,
        "padding-left":"9.632px"        
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.canvas-shelf .comp-rich-text ul li a
     comp_rte_props_04:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"
                
      };
      return shelfProps;
     },  
     
     //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .comp-rich-text p
     comp_rte_props_10:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$primary_2,
        "padding-bottom" : "14px"         
      }
      if(size==="xs"){
        shelfProps['padding-bottom'] = property.$lb_rte_p_pd_m
     };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .comp-rich-text p a
     comp_rte_props_11:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$primary_2,
        "text-decoration-line": "underline"     
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .comp-rich-text ul
     comp_rte_props_12:function(size){
        let  shelfProps = {
        "padding-bottom" : "13px"
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .comp-rich-text ul li
     comp_rte_props_13:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_2,
        "padding-left":"9.632px"        
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .comp-rich-text ul li a
     comp_rte_props_14:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_2,
        "text-decoration-line": "underline"
                
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.single-article .comp-rich-text p
     comp_rte_props_20:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_font_color1,
        "padding-bottom" : "0px"         
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.single-article .comp-rich-text p a
     comp_rte_props_21:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"       
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.single-article .comp-rich-text ul
     comp_rte_props_22:function(size){
        let  shelfProps = {
        "padding-bottom" : "13px"
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.single-article .comp-rich-text ul li
     comp_rte_props_23:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_1,
        "padding-left":"9.632px"        
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--white.single-article .comp-rich-text ul li a
     comp_rte_props_24:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"                
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.single-article .comp-rich-text p
     comp_rte_props_30:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_font_color1,
        "padding-bottom" : property.$lb_cmptext_pd         
      }
      if(size==="xs"){
        shelfProps['padding-bottom'] = "16px"
     }
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.single-article .comp-rich-text p a
     comp_rte_props_31:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"     
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.single-article .comp-rich-text ul
     comp_rte_props_32:function(size){
        let  shelfProps = {
        "padding-bottom" : "13px"
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.single-article .comp-rich-text ul li
     comp_rte_props_33:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_1,
        "padding-left":"9.632px"        
      }
      if(size==="xs"){
        shelfProps['padding-left'] = "11.008px"
     }
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--blue.single-article .comp-rich-text ul li a
     comp_rte_props_34:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"
                
      };
      return shelfProps;
     },

      //.overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf .comp-rich-text p
      comp_rte_props_40:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_font_color1,
        "padding-bottom" : "14px"         
      }
      if(size==="xs"){
        shelfProps['padding-bottom'] = property.$lb_rte_p_pd_m
     }
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf .comp-rich-text p a
     comp_rte_props_41:function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"       
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf .comp-rich-text ul
     comp_rte_props_42:function(size){
        let  shelfProps = {
        "padding-bottom" : "13px"
      };
      return shelfProps;
     },

     // .overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf .comp-rich-text ul li
     comp_rte_props_43:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$primary_1,
        "padding-left":"9.632px"        
      };
      return shelfProps;
     },

     //.overlay-wrap .overlay-inner .theme--light-blue.canvas-shelf .comp-rich-text ul li a
     comp_rte_props_44:function(size){
        let rteprops=rte_props.PropTextLi(size);
        let  shelfProps = {
        "color":property.$lb_anchorclr1,
        "text-decoration-line": "underline"
                
      };
      return shelfProps;
     },  

          //.overlay-wrap .overlay-inner .theme--light-blue.single-article .comp-rich-text p
          comp_rte_props_50:function(size){
            let rteprops=rte_props.PropTextfs12(size);
            let  shelfProps = {
            "color":property.$primary_1,
            "padding-bottom" : "0px"         
          };
          return shelfProps;
         },
    
         //.overlay-wrap .overlay-inner .theme--light-blue.single-article .comp-rich-text p a
         comp_rte_props_51:function(size){
            let rteprops=rte_props.PropTextfs12(size);
            let  shelfProps = {
            "color":property.$lb_anchorclr1,
            "text-decoration-line": "underline"       
          };
          return shelfProps;
         },
    
         //.overlay-wrap .overlay-inner .theme--light-blue.single-article .comp-rich-text ul
         comp_rte_props_52:function(size){
            let  shelfProps = {
            "padding-bottom" : "13px"
          };
          return shelfProps;
         },
    
         //.overlay-wrap .overlay-inner .theme--light-blue.single-article .comp-rich-text ul li
         comp_rte_props_53:function(size){
            let rteprops=rte_props.PropTextLi(size);
            let  shelfProps = {
            "color":property.$primary_1,
            "padding-left":"9.632px"        
          };
          return shelfProps;
         },
    
         //.overlay-wrap .overlay-inner .theme--light-blue.single-article .comp-rich-text ul li a
         comp_rte_props_54:function(size){
            let rteprops=rte_props.PropTextLi(size);
            let  shelfProps = {
            "color":property.$lb_anchorclr1,
            "text-decoration-line": "underline"                
          };
          return shelfProps;
         },

   // <------- Comp Rich text properties  Ending---->


   //<------ CTA--M and CTA--L hover and focus properties Starting ------->

   ctaMHoverProps:function(size){
    let  shelfProps = {
        "color":property.$lb_cta_m_hover_clr,
        "font-size":"18px",
        "line-height":property.$lb_cta_m_a_lh,
        "margin-top":"18px",
        "padding":property.$lb_desk23_a_pad                
      }
      if(size==="xs"){
        shelfProps['line-height'] = "22px",
        shelfProps['margin-top'] = "0px",
        shelfProps['padding'] = property.$lb_cta_m_a_pad_m
     }
      return shelfProps;
   },

   ctaMFocusProps:function(size){
    let  shelfProps = {
        "color":property.$ctaMFocusColor,
        "background-color":property.$lb_ctaFocusbackgrndclr,
        "font-size":"18px",
        "line-height":property.$lb_cta_m_a_lh,
        "margin-top":"18px",
        "padding":property.$lb_desk23_a_pad,
        "border-radius":"5px"
                
      }
      if(size==="xs"){
        shelfProps['line-height'] = "22px",
        shelfProps['margin-top'] = "0px",
        shelfProps['padding'] = property.$lb_cta_m_a_pad_m
     }
      return shelfProps;
   },

   ctaLHoverProps:function(size){
    let  shelfProps = {
        "color":property.$lb_cta_clr1,
        "background-color":property.$lb_ctaHoverbackgrndclr,
        "border-top-color": property.$lb_ctaHoverbrdrtopclr,
        "font-size":"18px",
        "line-height":"24px",
        "margin-top":"28px",
        "margin-bottom":"16px",
        "padding":"13px 18px 9px 20px"
                
      }
      if(size==="xs"){
        shelfProps['padding'] = "10px 18px 12px 20px",
        shelfProps['margin-top'] = "10px"
     };
      return shelfProps;
   },

   ctaLFocusProps:function(size){
    let  shelfProps = {
        "color":property.$primary_1,
        "background-color":property.$lb_ctaFocusbackgrndclr,
        "font-size":"18px",
        "line-height":"24px",
        "margin-top":"28px",
        "margin-bottom":"16px",
        "padding":"13px 18px 9px 20px",
        "border-radius":property.$lb_cta_borderRad,
        "box-shadow":property.$lb_ctaLfocusBoxshadow
                
      }
      if(size==="xs"){
        shelfProps['padding'] = "10px 18px 12px 20px",
        shelfProps['margin-top'] = "10px"
     }
      return shelfProps;
   },

   //<------ CTA--M and CTA--L hover and focus properties Ending ------->

   
    overlayCloseProps:function(size){
    let  shelfProps = {
        "border-radius":"3px",
        "width":property.$lb_close_width,
        "height":property.$lb_close_height,
        "top":property.$lb_close_top,
        "z-index":"2"
     }
     if(size==="xs"){
        shelfProps['width'] = property.$lb_close_width_m,
        shelfProps['height'] = property.$lb_close_height_m,
        shelfProps['top'] = property.$lb_close_top_m
     }
      return shelfProps; 
   },

   // <--- Extra Desks for Mobile only  Starting--->

//.overlay-wrap .overlay-inner .theme--white.sixtyseven-thirtythree .palm--one-half.desk--one-third
   deskprops_m_00:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['padding-bottom'] = "0px",
        shelfProps['padding-top'] = "0px",
        shelfProps['margin'] = "18px 0px 20px"
     };
 return shelfProps;
  }, 

  //.overlay-wrap .overlay-inner .theme--white .desk--two-third

  deskprops_m_01:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  }, 
 
  //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--one-half
  deskprops_m_02:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  },

  //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--one-third
  deskprops_m_03:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  },

  //.overlay-wrap .overlay-inner .theme--white:not(.sixtyseven-thirtythree) .palm--one-half.desk--one-third
  deskprops_m_04:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['padding-bottom'] = property.$lb_23_pb_m,
        shelfProps['padding-top'] = property.$lb_23_pt_m,
        shelfProps['margin'] = "0px"
     };
 return shelfProps;
  }, 
  
  //.overlay-wrap .overlay-inner .theme--blue.sixtyseven-thirtythree .palm--one-half.desk--one-third
  deskprops_m_10:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['padding-bottom'] = "0px",
        shelfProps['padding-top'] = "0px",
        shelfProps['margin'] = "18px 0px 20px",
        shelfProps['color'] = property.$lb_tb_color_m
     };
 return shelfProps;
  }, 

  //.overlay-wrap .overlay-inner .theme--blue .desk--two-third 
  deskprops_m_11:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['color'] = property.$lb_tb_color_m
        };
 return shelfProps;
  }, 

  //.overlay-wrap .overlay-inner .theme--blue .palm--one-whole.desk--one-half
  deskprops_m_12:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_2
     };
 return shelfProps;
  },
 
  //.overlay-wrap .overlay-inner .theme--blue .palm--one-whole.desk--one-third
  deskprops_m_13:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_2
     };
 return shelfProps;
  },

   //.overlay-wrap .overlay-inner .theme--blue:not(.sixtyseven-thirtythree) .palm--one-half.desk--one-third
   deskprops_m_14:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  }, 

  //.overlay-wrap .overlay-inner .theme--white.sixtyseven-thirtythree .palm--one-half.desk--one-third
  deskprops_m_20:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['padding-bottom'] = "0px",
        shelfProps['padding-top'] = "0px",
        shelfProps['margin'] = "18px 0px 20px"
     };
 return shelfProps;
  }, 

  //.overlay-wrap .overlay-inner .theme--white .desk--two-third

  deskprops_m_21:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  }, 
 
  //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--one-half
  deskprops_m_22:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  },

  //.overlay-wrap .overlay-inner .theme--white .palm--one-whole.desk--one-third
  deskprops_m_23:function(size){
    let  shelfProps = {
        "padding":"0px",
        "margin":"0px",
        "color":property.$primary_1
     };
 return shelfProps;
  },

  //.overlay-wrap .overlay-inner .theme--white:not(.sixtyseven-thirtythree) .palm--one-half.desk--one-third
  deskprops_m_24:function(size){
    let  shelfProps = {
        "padding-bottom":"10px",
        "padding-top":"26px",
        "margin":"0px",
        "color":property.$primary_1
     }
     if(size==="xs"){
        shelfProps['padding-bottom'] = "10px",
        shelfProps['padding-top'] = "26px",
        shelfProps['margin'] = "0px"
     };
 return shelfProps;
  }, 
   // <--- Extra Desks for Mobile only  Ending--->


    // <------- Incident Message properties  Starting ---->

   //.overlay-wrap .overlay-inner .theme--white .incident_message p

   incident_message_00:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$lb_font_color1,
    "padding-bottom" : "14px"         
  }
  if(size==="xs"){
    shelfProps['padding-bottom'] = "16px"
 }
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--white .incident_message p a
 incident_message_01:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr1,
    "text-decoration-line": "underline"       
  };
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--white .incident_message ul
 incident_message_02:function(size){
    let  shelfProps = {
    "padding-bottom" : "13px"
  };
  return shelfProps;
 },

 // .overlay-wrap .overlay-inner .theme--white .incident_message ul li
 incident_message_03:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$lb_font_color1,
    "padding-left":"9.632px"        
  }
  if(size==="xs"){
    shelfProps['padding-left'] = property.$lb_rte_li_pl_m
 };
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--white .incident_message ul li a
 incident_message_04:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr1,
    "text-decoration-line": "underline"
            
  };
  return shelfProps;
 },  

 
 //.overlay-wrap .overlay-inner .theme--white .incident_message
 incident_message_05:function(size){
    let  shelfProps = {
    "color":property.$primary_1,
    "border-color":property.$lb_brdrcolor1,
    "border-width":"1px"            
  };
  return shelfProps;
 },  
 
 //.overlay-wrap .overlay-inner .theme--blue.canvas-shelf .incident_message p
 incident_message_10:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$lb_font_color1,
    "padding-bottom" : "14px"         
  }
  if(size==="xs"){
    shelfProps['padding-bottom'] = "16px" 
}
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--blue .incident_message p a
 incident_message_11:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr2,
    "text-decoration-line": "underline"    
  }
  if(size==="xs"){
    shelfProps['color'] = property.$lb_anchorclr2_m 
};
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--blue .incident_message ul
 incident_message_12:function(size){
    let  shelfProps = {
    "padding-bottom" : "13px"
  }
  ;
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--blue .incident_message ul li
 incident_message_13:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$primary_1,
    "padding-left":"9.632px"        
  }
  if(size==="xs"){
    shelfProps['padding-left'] = property.$lb_rte_li_pl_m
 };
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--blue .incident_message ul li a
 incident_message_14:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr2,
    "text-decoration-line": "underline"
            
  }
  if(size==="xs"){
    shelfProps['color'] = property.$lb_anchorclr2_m 
};
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--blue .incident_message
 incident_message_15:function(size){
    let  shelfProps = {
    "color":property.$primary_1,
    "border-color":property.$lb_brdrcolor1,
    "border-width":"1px"            
  };
  return shelfProps;
 }, 

   //.overlay-wrap .overlay-inner .theme--light-blue .incident_message p

   incident_message_20:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$primary_1,
    "padding-bottom" : "14px"         
  }
  if(size==="xs"){
    shelfProps['padding-bottom'] = "16px"
 }
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--light-blue .incident_message p a
 incident_message_21:function(size){
    let rteprops=rte_props.PropTextfs12(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr1,
    "text-decoration-line": "underline"       
  };
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--light-blue .incident_message ul
 incident_message_22:function(size){
    let  shelfProps = {
    "padding-bottom" : "13px"
  };
  return shelfProps;
 },

 // .overlay-wrap .overlay-inner .theme--light-blue .incident_message ul li
 incident_message_23:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$primary_1,
    "padding-left":"9.632px"        
  }
  if(size==="xs"){
    shelfProps['padding-left'] = "11.008px"
 };
  return shelfProps;
 },

 //.overlay-wrap .overlay-inner .theme--light-blue .incident_message ul li a
 incident_message_24:function(size){
    let rteprops=rte_props.PropTextLi(size);
    let  shelfProps = {
    "color":property.$lb_anchorclr1,
    "text-decoration-line": "underline"
            
  };
  return shelfProps;
 },  

 
 //.overlay-wrap .overlay-inner .theme--light-blue .incident_message
 incident_message_25:function(size){
    let  shelfProps = {
    "color":property.$primary_1,
    "border-color":property.$lb_brdrcolor1,
    "border-width":"1px"            
  };
  return shelfProps;
 },  
 
// <------- Incident Message properties  Ending---->
};
}