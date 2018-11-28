var rte_props = require('../../components/rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
    shelfProps = {},
    property = brand.props;
  return {
    hmcibHeader: function(size) {
            let shelfProps = {
                "background-color":property.$hmcib_Color,
                "height":property.$hmcib_header_ht,
                "Padding":"0px 20px",
                };
                if(size=="xs"){
                    shelfProps['Padding'] ="30px 0px",
                    shelfProps['height'] =property.$hmcib_header_ht_m
                   }
            return shelfProps;
      },
    hmcibHeaderShelf: function(size) {
        let shelfProps = {
                "margin-bottom":property.$hmicb_header_margin,
                "height":property.$hmcib_header_min_ht,
                "min-height":property.$hmcib_header_min_ht,
            };
            if(size=="xs"){
                shelfProps['margin-bottom'] ="0px",
                shelfProps['height'] =property.$hmcib_header_min_ht_m,
                shelfProps['min-height'] =property.$hmcib_header_min_ht_m
               }
        return shelfProps;
     },
    hmcibHeaderTit: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "font-family":property.$font_family_bold,
                "font-size":"32px",
                "line-height":"36px",
                "padding":"0px 10px 10px 26px"
            };
            if(size=="xs"){
                shelfProps['line-height'] ="32px",
                shelfProps['padding'] =property.$hmcib_Header_Tit_Padd_m
               }
        return shelfProps;
     },
    hmcibHeaderText: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "font-family":property.$font_family_regular,
                "font-size":property.$hmcib_header_Fs,
                "line-height":"22px",
                "padding":"0px 10px 20px 26px"
            };
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_Header_Tit_Fs_m,
                shelfProps['line-height'] =property.$hmcib_Header_Tit_Lh_m,
                shelfProps['padding'] ="0px 10px 30px 26px"
                shelfProps['font-family'] =property.$hmcib_Header_Tit_FF_m
               }
        return shelfProps;
     },
    hmcibFooterH3: function(size) {
            let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_bold,
                "font-size":"18px",
                "line-height":"16px",
                };
            return shelfProps;
      },
    hmcibFooterP: function(size) {
        let rteprops=rte_props.PropTextfs14(size);
            let shelfProps = {
                "color":property.$hmcib_Color,
                };
            shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
      },
    hmcibFooterCta: function(size) {
            let shelfProps = {
                "color":property.$hmcib_cta_sec,
                "font-family":property.$hmcib_Cta_FF,
                "font-size":"18px",
                "line-height":"24px",
                "padding":property.$hmcib_footer_padd,
                "margin":"10px 12px 10px 0px",
                "min-height":"23px",
                "max-width":"279px"
                };
                if(size=="xs"){
                    shelfProps['font-size'] ="14px",
                    shelfProps['line-height'] ="26px",
                    shelfProps['padding'] =property.$hmcib_footer_padd_m,
                    shelfProps['margin'] ="3px 0px 1px",
                    shelfProps['max-width'] ="320px"
                   }
            return shelfProps;
      },
    hmcibLabel: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_regular,
                "font-size":"18px",
                "line-height":"18px",
                "padding":"10px 0px 0px"
            };
            if(size=="xs"){
                shelfProps['font-size'] ="14px",
                shelfProps['line-height'] ="14px",
                shelfProps['padding'] ="0px 0px 5.6px"
               }
        return shelfProps;
     },
    hmcibLabelEmail: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "font-family":property.$font_family_bold,
                "font-size":"18px",
                "line-height":"18px",
                "padding":"0px 0px 7.2px"
            };
        return shelfProps;
     },
     hmcibTextArea: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_TextArea_BgClr,
                "border-color":"rgb(220, 212, 216)",
                "border-radius":"5.625px",
                "padding":"0px 6.75px"
            };
        return shelfProps;
     },
    hmcibTitle: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_bold,
                "font-size":"24px",
                "line-height":"30px",
            };
            if(size=="xs"){
                shelfProps['font-size'] ="20px",
                shelfProps['line-height'] ="16px"
               }
        return shelfProps;
    },
    hmcibIcon: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Color,
                "cursor":"pointer",
                "height":"15px",
            };
        return shelfProps;
    },
    hmcibIconFoc: function(size) {
        let shelfProps = {
                "outline-color":property.$hmcib_Icon_Outline_Clr,
            };
        return shelfProps;
    },
    hmcibIconText: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":"nw-icons",
                "font-size":property.$hmcib_Icon_Fs,
                "line-height":property.$hmcib_Icon_Lh,
            };
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_Icon_Fs_m
                shelfProps['line-height'] =property.$hmcib_Icon_Lh_m
               }
        return shelfProps;
    },
    hmcibCta1Before: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_Before,
            };
        return shelfProps;
    },
    hmcibCta1: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_BgClr,
                "color":property.$hmcib_Text_clr,
                "font-family":property.$hmcib_CtaL_FF,
                "font-size":"18px",
                "line-height":"24px",
                "box-shadow":property.$hmcib_ctaBs,
                "max-width":"262px",
                "margin":property.$hmcib_CtaL_Mar1,
                "padding":property.$hmcib_CtaL_Padd
            };
            if(size=="xs"){
                shelfProps['font-family'] =property.$hmcib_CtaL_FF_m,
                shelfProps['max-width'] ="none"
                shelfProps['margin'] =property.$hmcib_CtaL_Mar_m
                shelfProps['padding'] =property.$hmcib_CtaL_Padd_m
               }
        return shelfProps;
    },
    hmcibCta1Hov: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta1_Hov_BgClr,
                "box-shadow":property.$hmcib_ctaBsHov,
            };
        return shelfProps;
    },
    hmcibCta1Foc: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_Focus_Clr,
                "color":property.$hmcib_Cta_Foc_Color,
                "box-shadow":property.$hmcib_ctaBsFoc,
            };
            if(size=="xs"){
                shelfProps['box-shadow'] =property.$hmcib_ctaBsFoc_m
               }
        return shelfProps;
    },
    hmcibCta2: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_BgClr,
                "color":property.$hmcib_Text_clr,
                "font-family":property.$hmcib_CtaL_FF,
                "font-size":"18px",
                "line-height":"24px",
                "box-shadow":property.$hmcib_ctaBs,
                "max-width":"262px",
                "margin":property.$hmcib_CtaL_Mar2,
                "padding":property.$hmcib_CtaL_Padd2
            };
            if(size=="xs"){
                shelfProps['max-width'] = "none",
                shelfProps['margin'] = property.$hmcib_CtaL_Mar_m,
                shelfProps['padding'] ="12.5px 24.5px"
                shelfProps['font-family'] =property.$hmcib_CtaL_FF_m
               }
        return shelfProps;
    },
    hmcibSelectText1: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Select_BgClr,
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_regular,
                "font-size":"18px",
                "line-height":"41.4px",
                "height":"32.625px",
                "padding":"0px 40px 0px 10.125px",
                "background-position":property.$hmcib_Sel_Bg_Pos
            };
        return shelfProps;
    },
    hmcibOptionText: function(size) {
        let shelfProps = {
            "background-color":property.$hmcib_Select_BgClr,
            "color":property.$hmcib_Select_Clr,
            "font-family":"Arial",
            "font-size":"13.3333px",
            "min-height":"16px",
            "padding":"0px 2px 1px"
            };
        return shelfProps;
    },
    hmcibTermButton: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Select_BgClr,
                "border-color":"rgb(0, 0, 0)",
                "height":"35px",
                "padding":"1px 3px",
                "width":"35px"
            };
        return shelfProps;
    },
    hmcibTermSlider: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_Grey,
                "border-color":"rgb(221, 221, 221)",
                "height":"11.4375px",
                "margin":"13px 14px",
                "width":"146.188px"
            };
        return shelfProps;
    },
    hmcibTermSlidera: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_BgClr,
                "border-color":property.$hmcib_Slider_Border_clr,
                "box-shadow":property.$hmcib_SliderBs,
                "height":"21.4375px",
                "margin":"0px 0px 0px -11.44px",
                "width":"21.4375px"
            };
        return shelfProps;
    },
    hmcibResultRteP: function(size) {
        let rteprops=rte_props.PropTextfs16(size);
        let shelfProps = {
                "font-size":property.$hmcib_Rte_P_Fs,
                "line-height":property.$hmcib_Rte_P_Lh,
                "color":property.$hmcib_Text_clr,
                "font-family":property.$hmcib_Rte_P_FF,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_Rte_P_Fs_m
                shelfProps['line-height'] =property.$hmcib_Rte_P_Lh_m
                shelfProps['font-family'] =property.$hmcib_Rte_P_FF1_m
               }
        return shelfProps;
    },
    hmcibResultRteP1: function(size) {
        let newprops=this.hmcibResultRteP(size);
        let shelfProps = {
                "font-family":property.$font_family_regular,
            };
            shelfProps=Object.assign(newprops,shelfProps);
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_Rte_P_Fs_m
                shelfProps['line-height'] =property.$hmcib_Rte_P_Lh_m
                shelfProps['font-family'] =property.$font_family_regular
               }
        return shelfProps;
    },
    hmcibResultRteH2: function(size) {
        let rteprops=rte_props.PropTextH5_H6(size);
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['font-family'] =property.$hmcib_Rte_P_FF_m
               }
        return shelfProps;
    },
    hmcibResultRteH2F16: function(size) {
        let rteprops=rte_props.PropTextfs16(size);
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "line-height":"16px",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['font-family'] =property.$hmcib_Rte_P_FF_m
               }
        return shelfProps;
    },
    hmcibResult: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "font-family":property.$font_family_bold,
                "font-size":property.$hmcib_res_Fs,
                "line-height":property.$hmcib_res_Lh,
            };
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_res_Fs_m,
                shelfProps['line-height'] =property.$hmcib_res_Lh_m
               }
        return shelfProps;
    },
    hmcibCtaL: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_BgClr,
                "color":property.$hmcib_Text_clr,
                "font-family":property.$hmcib_CtaL_FF,
                "font-size":"18px",
                "line-height":"24px",
                "box-shadow":property.$hmcib_ctaBs,
                "max-width":"262px",
                "margin":property.$hmcib_CtaL_Mar,
                "padding":property.$hmcib_CtaL_Padd
            };
            if(size=="xs"){
                shelfProps['font-family'] =property.$hmcib_CtaL_FF_m,
                shelfProps['max-width'] ="none",
                shelfProps['margin'] =property.$hmcib_CtaL_Mar_m,
                shelfProps['padding'] =property.$hmcib_CtaL_Padd_m
               }
        return shelfProps;
    },
    hmcibCtaM: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Text_clr,
                "font-family":property.$hmcib_Cta_FF,
                "font-size":"18px",
                "line-height":"24px",
                "max-width":property.$hmcib_CtaM_Mwidth,
                "margin":property.$hmcib_CtaM_Mar,
                "padding":property.$hmcib_CtaM_Padd
            };
            if(size=="xs"){
                shelfProps['font-size'] ="14px",
                shelfProps['line-height'] ="26px",
                shelfProps['max-width'] ="320px",
                shelfProps['margin'] =property.$hmcib_CtaM_Mar_m,
                shelfProps['padding'] ="14px 42px 11px 0px"
               }
        return shelfProps;
    },
    hmcibCtaMHov: function(size) {
        let shelfProps = {
                 "color":property.$hmcib_CtaM_Hov_Clr
            };
            if(size=="xs"){
                shelfProps['color'] =property.$hmcib_Text_clr
               }
        return shelfProps;
    },
    hmcibCtaMFoc: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_CtaM_Foc_BgClr,
                "color":property.$hmcib_CtaM_Foc_Clr,
            };
            if(size=="xs"){
                shelfProps['color'] =property.$hmcib_CtaM_Foc_Clr_m
               }
        return shelfProps;
    },
    hmcibCtaToggle: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Toggle_Clr,
                "font-family":property.$font_family_regular,
                "font-size":"14px",
                "line-height":"25px",
                "margin":"14px 0px",
                "padding":"2px 0px 0px 40px"
            };
        return shelfProps;
    },
    hmcibCtaToggleHov: function(size) {
        let shelfProps = {
                 "color":property.$hmcib_Toggle_Hov
            };
        return shelfProps;
    },
    hmcibCtaToggleMFoc: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Toggle_Foc_Bg,
                "color":property.$hmcib_Toggle_Hov,
            };
        return shelfProps;
    },
    //overlay
    hmcibOverLayDeskWhole: function(size) {
        let shelfProps = {
                "padding":"0px 0px 0px 47.996px"
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px"
               }
        return shelfProps;
    },
    hmcibOverLayDeskHalf: function(size) {
        let shelfProps = {
                "padding":"0px 0px 0px 47.996px"
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px"
               }
        return shelfProps;
    },
    hmcibOverLayFs20: function(size) {
        let rteprops=rte_props.PropTextfs20(size);
        let shelfProps = {
                "color":property.$hmcib_Color,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    hmcibOverLayP: function(size) {
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
                "color":property.$hmcib_Toggle_Hov,
                "font-size":property.$hmcib_minmax_Fs,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['font-size'] =property.$hmcib_minmax_Fs_m
               }
        return shelfProps;
    },
    hmcibOverLayCtaSec: function(size) {
        let shelfProps = {
                "color":property.$hmcib_cta_sec,
                "font-family":property.$font_family_regular,
                "font-size":"14px",
                "line-height":"20px"
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px",
                shelfProps['line-height'] ="22px"
               }
        return shelfProps;
    },
    hmcibOverLayCtaSecFoc: function(size) {
        let shelfProps = {
                "outline-color":property.$hmcib_Cta_Focus_Clr,
            };
        return shelfProps;
    },
    hmcibCtaLFoc: function(size) {
        let shelfProps = {
                "background-color":property.$hmcib_Cta_Focus_Clr,
                "color":property.$hmcib_Cta_Foc_Color,
                "box-shadow":property.$hmcib_OverlayCtaLBs,
            };
        return shelfProps;
    },
    hmcibPadd1: function(size) {
        let shelfProps = {
                "Padding":"0px 15px 0px 45px",
                "margin":property.$hmcibPadd1_Mar
            };
            if(size=="xs"){
                shelfProps['Padding'] ="0px 15px",
                shelfProps['margin'] ="0px 0px 20px"
               }
        return shelfProps;
    },
    hmcibPadd2: function(size) {
        let shelfProps = {
                "Padding":"0px 0px 0px 45px",
                "margin":"30px 0px 0px",
            };
            if(size=="xs"){
                shelfProps['Padding'] ="0px 15px"
               }
        return shelfProps;
    },
    hmcibPadd3: function(size) {
        let shelfProps = {
                "Padding":"0px 10px 0px 45px",
            };
            if(size=="xs"){
                shelfProps['Padding'] ="0px 20px"
               }
        return shelfProps;
    },
    hmcibPadd4: function(size) {
        let shelfProps = {
                "Padding":"0px 45px 0px 10px",
            };
            if(size=="xs"){
                shelfProps['Padding'] ="0px 20px"
               }
        return shelfProps;
    },
    hmcibPadd5: function(size) {
        let shelfProps = {
                "Padding":"0px 0px 20px",
            };
        return shelfProps;
    },
    hmcibForm1: function(size) {
        let shelfProps = {
                "margin":property.$hmcib_Form_Mar,
                "padding":"0px"
            };
            if(size=="xs"){
                shelfProps['margin'] ="16.25px 0px 0px"
               }
        return shelfProps;
    },
    hmcibForm2: function(size) {
        let shelfProps = {
                "margin":"0px",
                "padding":"0px"
            };
            if(size=="xs"){
                shelfProps['margin'] ="16.25px 0px 0px"
               }
        return shelfProps;
    },
    hmcibForm3: function(size) {
        let shelfProps = {
                "margin":"22px 0px 0px",
                "padding":"0px 0px 0px 32px"
            };
        return shelfProps;
    },
    hmcibForm4: function(size) {
        let shelfProps = {
                "margin":"17px 0px 20px",
                "padding":"0px"
            };
            if(size=="xs"){
                shelfProps['margin'] ="16.25px 0px 20px"
               }
        return shelfProps;
    },
    hmcibFieldSet: function(size) {
        let shelfProps = {
                "position":"relative",
                "min-height":"500px"
            };
        return shelfProps;
    },
    hmcibOverLayCtaL: function(size) {
        let newprops=this.hmcibCtaL(size);
         let shelfProps = {
                "padding":property.$hmcib_CtaL_Padd1
            };
            shelfProps=Object.assign(newprops,shelfProps);
            if(size=="xs"){
                shelfProps['margin'] =property.$hmcib_CtaL_Mar1_m
               }
        return shelfProps;
    },
    hmcibError: function(size) {
         let shelfProps = {
            "background-color":property.$hmcib_Err_clr,
            "color":property.$hmcib_Text_clr,
            "font-family":property.$font_family_regular,
            "font-size":"11px",
            "line-height":"11px",
            };
        return shelfProps;
    },
    hmcibErrorMsg: function(size) {
        let shelfProps = {
           "border-color":property.$hmcib_ErrMsg_Border_clr,
           "color":property.$hmcib_ErrMsg_clr,
           "font-family":property.$font_family_bold,
           "font-size":"18px",
           "line-height":"21.6px",
           "margin":"15px 0px 0px"
           };
       return shelfProps;
   },
    hmcibTextAreaWidth1:function(size) {
        let shelfProps = {
            "width":"35px"
        };
    return shelfProps;
    },
    hmcibTextAreaWidth2:function(size) {
        let shelfProps = {
            "width":"118px"
        };
    return shelfProps;
    },
    hmcibTextAreaWidth3:function(size) {
        let shelfProps = {
            "width":"337.5px"
        };
    return shelfProps;
    },
    hmcibTextAreaWidth4:function(size) {
        let shelfProps = {
            "width":"214px"
        };
    return shelfProps;
    },
    hmcibTextAreaWidth5:function(size) {
        let shelfProps = {
            "width":"174.375px"
        };
    return shelfProps;
    },
   //mobile props
    hmcibLabelMob1: function(size) {
        let newprops=this.hmcibLabel(size);
        let shelfProps = {
        };
        shelfProps=Object.assign(newprops,shelfProps);
            if(size=="xs"){
                shelfProps['padding'] ="10px 0px 0px"
            }
        return shelfProps;
    },
    hmcibSelectText2: function(size) {
        let newprops=this.hmcibSelectText1(size);
        let shelfProps = {
            };
            shelfProps=Object.assign(newprops,shelfProps);
            if(size=="xs"){
                shelfProps['padding'] ="0px 0px 0px 10.125px"
            }
        return shelfProps;
    },
    hmcibSelectText3: function(size) {
        let newprops=this.hmcibSelectText1(size);
        let shelfProps = {
            };
            shelfProps=Object.assign(newprops,shelfProps);
            if(size=="xs"){
                shelfProps['padding'] ="0px 0px 0px 10.125px"
            }
        return shelfProps;
    },
    hmcibSelectText4: function(size) {
        let newprops=this.hmcibSelectText1(size);
        let shelfProps = {
            };
            shelfProps=Object.assign(newprops,shelfProps);
        return shelfProps;
    },
    hmcibOverLayiomP: function(size) {
        let rteprops=rte_props.Proptextfs16(size);
        let shelfProps = {
                "color":property.$hmcibOverlay_P_Clr,
                "font-size":property.$hmcib_Overlay_P_Fs
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['line-height'] ="22px",
                shelfProps['color'] =property.$hmcib_Color
                shelfProps['font-size'] =property.$hmcib_Overlay_P_Fs_m
            }
        return shelfProps;
    },
    hmcibOverLayiomPS: function(size) {
        let rteprops=rte_props.Proptextfs16(size);
        let shelfProps = {
                "color":property.$hmcibOverlay_PS_Clr,
                "font-size":property.$hmcib_Overlay_P_Fs
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size=="xs"){
                shelfProps['line-height'] ="22px",
                shelfProps['color'] =property.$hmcib_Color
                shelfProps['font-size'] =property.$hmcib_Overlay_P_Fs_m
            }
        return shelfProps;
    },
    hmcibOverLayHeading1: function(size){
        let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_regular,
                "font-size":"18px",
                "line-height":"18px",
            };
            if(size=="xs"){
                shelfProps['font-size'] ="14px",
                shelfProps['line-height'] ="14px"
            }
        return shelfProps;
    },
    hmcibOverLayHeading2: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Color,
                "font-family":property.$font_family_bold,
                "font-size":"32px",
                "line-height":"39px",
            };
            if(size=="xs"){
                shelfProps['font-size'] ="26px",
                shelfProps['line-height'] ="30px"
            }
        return shelfProps;
    },
    hmcibOverLayCtaM: function(size) {
        let shelfProps = {
                "color":property.$hmcib_Toggle_Clr,
                "font-family":property.$hmcib_Cta_FF,
                "font-size":"18px",
                "line-height":property.$hmcib_Overlay_CtaLh,
                "max-width":property.$hmcib_CtaM_Mwidth,
                "margin":property.$hmcib_Overlay_CtaMar,
                "padding":property.$hmcib_OverlayCtaPadd
            };
            if(size=="xs"){
                shelfProps['font-size'] ="18px",
                shelfProps['line-height'] =property.$hmcib_Overlay_CtaM_Lh
                shelfProps['max-width'] ="320px",
                shelfProps['margin'] =property.$hmcib_Overlay_CtaM_Mar,
                shelfProps['padding'] ="5px 42px 5px 0px"
            }
        return shelfProps;
    },
    hmcibOverLayCtaMHov: function(size) {
        let shelfProps = {
                "color":property.$hmicb_Overlay_Cta_Hov,
            };
            if(size=="xs"){
                shelfProps['color'] =property.$hmcib_Toggle_Hov
            }
        return shelfProps;
    },
    hmcibOverLayCtaMFoc: function(size) {
        let shelfProps = {
                "color":property.$hmcibOverlayCtaMFoc_Clr,
                "background-color":property.$hmcib_CtaM_Foc_BgClr
            };
            if(size=="xs"){
                shelfProps['color'] =property.$hmcib_OverLay_CtaM_Foc
            }
        return shelfProps;
    },
};
}