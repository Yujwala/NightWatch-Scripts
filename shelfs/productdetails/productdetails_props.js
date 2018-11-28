module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	shelfProps = {},
    property = brand.props;
  return {
    prodClrBgClrPadd: function(size) {
            shelfProps = {
                "color": property.$prodClr,
                "padding": property.$prod_Padd,
                "background-color" : property.$prodBgClr
            }
            if(size=="xs"){
              shelfProps['padding'] =property.$prod_Padd_m;
            }
        return shelfProps;
    },
    prodInnerPadd:function(size){
            shelfProps={
                "padding":property.$prodInnerPadd,
            }
            if(size=="xs"){
              shelfProps['padding'] ="0px 16.003px";
            }
        return shelfProps;
    },
    prodGridItemCont:function(size){
        shelfProps={
                "padding":"0px",
                "margin":"0px"
            }
        return shelfProps;
    },
    prodLeft1third:function(size){
        shelfProps={
                "padding":"0px",
                "margin":"0px 48.1px 0px 0px"
            }
        return shelfProps;
    },
    prodLeftImgprops:function(size){
        shelfProps={
            "margin-bottom":"0px"
        }
        return shelfProps;
    },
    prodRight2thirds:function(size){
        shelfProps={
            "padding-bottom":"24px"
        }
        return shelfProps;
    },
    prodRig23rdsTitle:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": property. $prod23rd_Tit_Fs,
            "line-height": property.$prod23rd_Tit_Lh,
            "height":property.$prod23rd_Tit_Ht,
            "margin-bottom":property.$prod23rd_Tit_Mar_Btm,
            "margin-top":"0px",
            "margin-right":"0px",
            "margin-left":"0px",
            "color": property.$prodClr  
        }
        return shelfProps;
    },
    prodRigh23rdsRTE:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",
            "margin":"0px",
            "color": property.$prodClr  
        }
        return shelfProps;
    },
    prodRig23rdsRTEP:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "14px",
            "line-height": property.$prod23rd_P_Tit_Lh,
            "color": property.$BGColor_Blue100_tab,
            "padding-bottom":"14px",
            "padding-top":"0px",
            "padding-right":"0px",
            "padding-left":"0px",
        }
        return shelfProps;
    },
    //MOBILE PRODUCT COMPONENT ONLY
    proRig23rdsTitlMob:function(size){
        shelfProps={
            "font-family": property.$font_family_regular,
            "font-size":property.$proRig23_Fs_Mob,
            "line-height": property.$proRig23_Lh_Mob,
            "height":property.$proRig23_Ht_Mob,
            "margin-bottom":property.$proRig23_Mar_btm_Mob,
            "margin-top":"0px",
            "margin-right":"0px",
            "margin-left":"0px",
            "color": property.$Blue_Lyt_Clr1
        }
        return shelfProps;
    },
    imgmobileSel:function(size){
        shelfProps={
            "margin-top":"4.069px",
            "margin-right":"-14.456px"
        }
        return shelfProps;
    },
    righttextContMob:function(size){
        shelfProps={
            "padding-top":"17.069px",
            "margin-left":"0px",
            "padding-left":"0px"
        }
        return shelfProps;
    },
    rightRTEmob:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",
            "margin":"0px",
            "color": property.$Blue_Lyt_Clr1  
        }
        if(size=="xs"){
            shelfProps['margin'] =property.$rte_Margin_m;
          }
        return shelfProps;
    },
    rightRTEmobPara:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "16px",
            "line-height": "22px",
            "color": property.$primary_1,
            "padding-bottom":"16px",
            "padding-top":"0px",
            "padding-right":"0px",
            "padding-left":"0px", 
        }
        if(size=="xs"){
          shelfProps['line-height'] =property.$rte_Lh_m,
          shelfProps['font-size'] =property.$rte_Fs_m,
          shelfProps['color'] =property.$rte_Color_m,
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },

    gridSelBelowProd:function(size){
        shelfProps={
            "padding-bottom":property.$grid_Padd_btm,
            "padding-top":property.$grid_Padd_top 
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$grid_Padd_btm_m;
          shelfProps['padding-top'] =property.$grid_Padd_top_m;
        }
        return shelfProps;
    },
    gridInnerPaddings:function(size){
        shelfProps={
            "padding-right":property.$gridInnerPadding,
            "padding-left":property.$gridInnerPadding
        }
        if(size=="xs"){
          shelfProps['padding-right'] ="16.003px";
          shelfProps['padding-left'] ="16.003px";
        }
        return shelfProps;
    },
    gridInnerMargin:function(size){
        shelfProps={
            "margin-left":"-47.996px" 
        }
        return shelfProps;
    },
    lightBlueBgGrid:function(size){
        shelfProps={
            "background-color":property.$lightBlueGridClr
        }
        return shelfProps;
    },
    BlueBgGrid:function(size){
        shelfProps={
            "background-color":property.$BlueGridClr
        }
        return shelfProps;
    },
    whiteBgGrid:function(size){
        shelfProps={
            "background-color":property.$prodBgClr
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$grid_Padd_btm_m;
          shelfProps['padding-top'] =property.$grid_Padd_top_m;
        }
        return shelfProps;
    },
    allGridsSelectors:function(size){
        shelfProps={
            "padding-left":"47.996px",
            "border-width": "0px",
            "margin": "0px",             
        }
        return shelfProps;
    },
    White23rdRTETitle:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "25px",
            "line-height": "30px",
            "color": property.$BGColor_Blue100_tab,
            "padding-bottom":"0px",
            "padding-top":"0px",
            "padding-right":"0px",
            "padding-left":"0px",             
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="21.6px";
        }
        return shelfProps;
    },
    Whit23rdRTETitPadd:function(size){
        shelfProps={
            "padding-bottom":"14px",             
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    Whit23rdRTEULPadd:function(size){
        shelfProps={
            "margin": "0px",
            "padding-bottom": "12px",
            "border-width":"0px"            
        }
        return shelfProps;
    },
    Whit23rdRTELiProps:function(size){
        shelfProps={
            "background-position-y": "6px",
            "background-position-x": "0%", 
            "margin": "5px 0px",
            "font-family": property.$font_family_regular,
            "padding-left":"9.632px",
            "font-size": "14px",
            "line-height": "20px"
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$Li_Lh_m;
          shelfProps['padding-left'] =property.$li_23_Padd_m;
        }
        return shelfProps;
    },
    Whit13rdtable:function(size){
        shelfProps={
            "border": "2px solid "+property.$borderColorWhite            
        }
        if(size=="xs"){
          shelfProps['border'] ="2px solid "+property.$GreyBorder 
        }
        return shelfProps;
    },
    Whit13rdtab1stRow:function(size){
        shelfProps={
            "background-color":property.$primary_1,          
        }
        return shelfProps;
    },
    Whit13rdtab1stRowTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "color": property.$primary_2,   
            "font-family": property.$font_family_regular,  
            "font-size": "13px",
            "line-height": "13px"             
        }
        return shelfProps;
    },
    Whit13rdNot1stRowTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "color": property.$primary_1,  
            "font-family": property.$font_family_regular,   
            "font-size": "13px",
            "line-height": "13px"        
        }
        return shelfProps;
    },
    Whit13rdtabEveRow:function(size){
        shelfProps={
            "background-color":property.$WhittabEveRow_Clr,             
        }
        if(size=="xs"){
            shelfProps['background-color'] =property.$WhittabEveRow_Clr_m;
          }
        return shelfProps;
    },
    Whit13rdtableTDFir:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-left":property.$padding_Lt_Rt_Whit13,
            "padding-right":"3.9px",             
        }
        return shelfProps;
    },
    Whit13rdtableTDLas:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-right":property.$padd_lt_RT_BLUE100_first,
            "padding-left":"3.9px",            
        }
        return shelfProps;
    },
    Whit13rdPBeltabPadd:function(size){
        shelfProps={
            "padding-bottom":"14px"             
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    Whit13rdPBeltabText:function(size){
        shelfProps={
            "color": property.$BGColor_Blue100_tab,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": "20px"           
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$Li_Lh_m;
        }
        return shelfProps;
    },
    WhitBlockQuoteText:function(size){
        shelfProps={
            "color": property.$BGColor_Blue100_tab,
            "font-family": property.$font_family_regular,
            "font-size": "25px",
            "line-height": "27px"          
        }
        if(size=="xs"){
            shelfProps['font-size'] ="22px";
            shelfProps['line-height'] ="26px";
          }
        return shelfProps;
    },
    BlueRTETitle:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "25px",
            "line-height": "30px"           
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="21.6px";
        }
        return shelfProps;
    },
    BlueRTETitPadd:function(size){
        shelfProps={
            "padding-bottom": "22.4px"           
        }
        if(size=="xs"){
            shelfProps['padding-bottom'] =property.$blue_rt_Tit_Padd;
          }
        return shelfProps;
    },
    BlueRTEH3TitPadd:function(size){
        shelfProps={
            "padding-bottom":"22.4px"          
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] ="30.8px";
        }
        return shelfProps;
    },
    BlueRTEH3Title:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$BlueH3FF,
            "font-size": property.$BlueH3Fs,
            "line-height": property.$LytBlueH3Lh
        }
        if(size=="xs"){
          shelfProps['font-size'] ="22px";
          shelfProps['line-height'] ="26px";
        }
        return shelfProps;
    },
    BlueAeroIcon:function(size){
        shelfProps={
            "height":property.$Blue_Lyt_Aero_hgt,
            "width":property.$Blue_Lyt_Aero_wdt2,
            "color":property.$primary_2,
        };
        return shelfProps;
    },
    BlueRTEAeroTextCont:function(size){
        shelfProps={
            "padding-bottom": "0px",            
        }
        if(size=="xs"){
            shelfProps['padding-bottom'] =property.$Blue_btm_Padd;
          }
        return shelfProps;
    },
    BlueRTEAeroTextTit:function(size){
        shelfProps={ 
            "color": property.$primary_2,
            "font-family": property.$forFamilyVerdana,
            "font-size": property.$Blue_Lyt_Tit_Fs,
            "line-height": property.$Blue_Lyt_Tit_Lh,        
        }
        if(size=="xs"){
            shelfProps['font-size'] =property.$rte1_Fs_m;
            shelfProps['line-height'] =property.$rte1_Lh_m;
          }
        return shelfProps;
    },
    BlueRTEAeroTextPara:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": property.$BlueAeroLh
        }
        if(size=="xs"){
          shelfProps['padding-right'] =property.$Blue_rt_Padd;
          shelfProps['padding-bottom'] =property.$blue_rt_Tit_Padd;
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$Li_Lh_m;
        }
        return shelfProps;
    },
    BlueRTE13rdTitPadd:function(size){
        shelfProps={
            "padding-bottom":"22.4px"           
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] ="25.2px";
        }
        return shelfProps;
    },
    BlueRTE13rdTitle:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$BlueH3FF,
            "font-size": "18px",
            "line-height": property.$Blue_Lyt_Lh,
            "padding-bottom":"10px"          
        }
        return shelfProps;
    },
    BlueBlockQuoteText:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "25px",
            "line-height": "27px"         
        }
        if(size=="xs"){
            shelfProps['font-size'] ="22px";
            shelfProps['line-height'] ="26px";
          }
        return shelfProps;
    },
    //Blue 100% table Props
    Blue100RTEh3 :function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$BlueH3FF,
            "font-size": property.$BlueH3Fs,
            "line-height": property.$LytBlueH3Lh        
        }
        if(size=="xs"){
          shelfProps['font-size'] ="22px";
          shelfProps['line-height'] ="26px";
        }
        return shelfProps;
    },
    Blue100RTEPara :function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": property.$BlueAeroLh,
            "padding-bottom":"14px"          
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$rte_Para_Lh_m;
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    Blue100RTEvarText:function(size){
        shelfProps={
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "18px",
            "line-height": property.$BlueAeroLh,       
        }
        if(size=="xs"){
          shelfProps['line-height'] =property.$rte_Para_Lh_m;
        }
        return shelfProps;
    },
    Blue100table:function(size){
        shelfProps={
            "border-width": "2px",
            "border-color": property.$borderColorWhite         
        }
        if(size=="xs"){
          shelfProps['border-color'] =property.$GreyBorder
        }
        return shelfProps;
    },
    Blue100tabBody:function(size){
        shelfProps={
            "margin": "0px",
            "padding":"0px",
            "border-width": "0px"         
        }
        return shelfProps;
    }, 
    Blue100tab1sttr:function(size){
        shelfProps={
            "color": property.$BGColor_Blue100_Not,
            "background-color":property.$colorBlue100    
        }
        return shelfProps;
    }, 
    Blue100Not1sttr :function(size){
        shelfProps={
            "color": property.$BGColor_Blue100_tab2,
            "background-color":property.$BGColor_Lyt_Blue100_Not        
        }
        return shelfProps;
    },
    Blue100tableth:function(size){
        shelfProps={
            "padding-bottom":property.$padding_Btm_Top_Blue100,
            "padding-right":property.$padding_Rt_Lt_Blue100,
            "padding-top":property.$padding_Btm_Top_Blue100,
            "color": property.$primary_2,
            "font-family": property.$Blue_100_FF,
            "font-size": property.$fs_Blue100,
            "line-height": property.$lh_Blue100,       
        }
        return shelfProps;
    }, 
    Blue100Not1LastTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-right":"3.9px",
            "padding-top":"18.85px",
            "padding-left":"3.9px",
            "color": property.$BGColor_Blue100_tab2,
            "font-family": property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",          
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText
        }
        return shelfProps;
    },
    Blue100FirstTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-right":"3.9px",
            "padding-top":"18.85px",
            "padding-left":property.$padd_lt_RT1,
            "color": property.$BGColor_Blue100_tab2,
            "font-family": property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",          
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText
        }
        return shelfProps;
    },
    Blue100LastTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-right":property.$padd_lt_RT_BLUE100_first,
            "padding-top":"18.85px",
            "padding-left":"3.9px",
            "color": property.$BGColor_Blue100_tab2,
            "font-family": property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",          
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText
        }
        return shelfProps;
    },
    //Light Blue RTE 50% 
    LytBlue50RTETitle:function(size){
        shelfProps={
            "color": property.$Blue_Lyt_Tit_Clr2,
            "font-family": property.$font_family_regular,
            "font-size": "25px",
            "line-height": "30px", 
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="21.6px";
          shelfProps['color'] =property.$rte_Color_m;
        }
        return shelfProps;
    },
    LytBlue50RTETitpadd:function(size){
        shelfProps={
            "padding-bottom":"22.4px",
        }
        if(size=="xs"){
            shelfProps['padding-bottom'] =property.$blue_rt_Tit_Padd;
        }
        return shelfProps;
    },
    LytBlue50RTEh3Text:function(size){
        shelfProps={
            "color": property.$Blue_Lyt_H3_Clr,
            "font-family": property.$BlueH3FF,
            "font-size": property.$BlueH3Fs,
            "line-height": property.$LytBlueH3Lh,
        }
        if(size=="xs"){
          shelfProps['font-size'] ="22px";
          shelfProps['line-height'] ="26px";
        }
        return shelfProps;
    },
    LytBlue50RTEh3Padd:function(size){
        shelfProps={
            "padding-bottom":"22.4px",
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] ="30.8px";
        }
        return shelfProps;
    },
    LytBlue50AeroIcon:function(size){
        shelfProps={
            "height":property.$Blue_Lyt_Aero_hgt,
            "width":property.$Blue_Lyt_Aero_wdt,
        }
        if(size=="xs"){
            shelfProps['width'] =property.$Blue_Lyt_Aero_wdt_m;
          }
        return shelfProps;
    },
    LytBlue50BLTitle:function(size){
        shelfProps={
            "margin-bottom":property.$Blue_Lyt_Tit_Mar,
            "color": property.$Blue_Lyt_Clr1,
            "font-family": property.$forFamilyVerdana,
            "font-size": property.$Blue_Lyt_Tit_Fs,
            "line-height": property.$Blue_Lyt_Tit_Lh,
        }
        if(size=="xs"){
            shelfProps['margin-bottom'] =property.$Blue_Lyt_Tit_Mar_m;
            shelfProps['font-size'] =property.$Blue_Lyt_Tit_Fs_m;
            shelfProps['line-height'] =property.$Blue_Lyt_Tit_Lh_m;
          }
        return shelfProps;
    },
    LytBlue50BLpara:function(size){
        shelfProps={
            "padding-bottom":"22.4px",
            "color": property.$BGColor_Blue100_tab,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": property. $prod23rd_P_Tit_Lh,
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$rte_Para_Lh_m;
          shelfProps['padding-bottom'] =property.$blue_rt_Tit_Padd;
        }
        return shelfProps;
    },
    LytBlue50BLUL:function(size){
        shelfProps={
            "padding-bottom":"13px",
            "color": property.$Blue_Lyt_Clr1,
            "font-family": property.$font_family_regular,
            "font-size": "13px",
            "line-height": "13px",
        }
        return shelfProps;
    },
    LytBlue50BLLi:function(size){
        shelfProps={
            "padding-left":"9.632px",
            "margin-top":"5px",
            "margin-bottom":"5px",
            "color": property.$BGColor_Blue100_tab,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": "20px",
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$rte_Para_Lh_m;
          shelfProps['padding-left'] =property.$li_23_Padd_m2;
        }
        return shelfProps;
    },
    LytBlue50RytH4:function(size){
        shelfProps={
            "padding-bottom":"10px",
            "color": property.$Blue_Lyt_H3_Clr,
            "font-family": property.$font_family_regular,
            "font-size": "18px",
            "line-height": property.$Blue_Lyt_Lh,
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="22px";
        }
        return shelfProps;
    },
    LytBlue50RytH4padd:function(size){
        shelfProps={
            "padding-bottom":"22.4px",
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="22px";
          shelfProps['padding-bottom'] ="25.2px";
        }
        return shelfProps;
    },
    LytBlueBlockQuoteText:function(size){
        shelfProps={
            "color": property.$Blue_Lyt_H3_Clr,
            "font-family": property.$font_family_regular,
            "font-size": "25px",
            "line-height": "27px"         
        }
        if(size=="xs"){
            shelfProps['font-size'] ="22px";
            shelfProps['line-height'] ="26px";
          }
        return shelfProps;
    },
    //Light Blue 100% Heavy Band(HB)
    LytBlue100HBinnpadd:function(size){
        shelfProps={
            "padding-left":"47.996px",
        }
        return shelfProps;
    },
    LytBlue100HBH3:function(size){
        shelfProps={
            "color": property.$Blue_Lyt_H3_Clr,
            "font-family": property.$BlueH3FF,
            "font-size": property.$BlueH3Fs,
            "line-height": property.$LytBlueH3Lh
        }
        if(size=="xs"){
          shelfProps['font-size'] ="22px";
          shelfProps['line-height'] ="26px";
        }
        return shelfProps;
    },
    LytBlue100HBPara:function(size){
        shelfProps={
            "color": property.$Blue_Lyt_Tit_Clr,
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": property.$BlueAeroLh,
            "padding-bottom":"14px"
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$rte_Para_Lh_m;
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    LytBlue100HBTabl:function(size){
        shelfProps={
            "border-width":"2px",
            "border-color":property.$borderColorWhite
        }
        if(size=="xs"){
          shelfProps['border-width'] ="2px"
          shelfProps['border-color']= property.$GreyBorder
        }
        return shelfProps;
    },
    LytBlue100HBTablRow1:function(size){
        shelfProps={
            "background-color":property.$colorBlue100
        }
        return shelfProps;
    },
    LytBlue100HBTablTH:function(size){
        shelfProps={
            "padding-bottom":property.$padding_Btm_Top_Blue100,
            "padding-top":property.$padding_Btm_Top_Blue100,
            "padding-right":property.$padding_Rt_Lt_Blue100,
            "padding-left":property.$padding_Rt_Lt_Blue100,
            "border-bottom-width":"2px",
            "color":property.$primary_2  
        }
        return shelfProps;
    },
    LytBlue100HBTablTH1st:function(size){
        shelfProps={
            "padding-bottom":property.$padding_Btm_Top_Blue100,
            "padding-top":property.$padding_Btm_Top_Blue100,
            "padding-right":property.$padding_Rt_Lt_Blue100,
            "padding-left":property.$padd_lt_RT1,
            "border-bottom-width":"2px",
            "color":property.$primary_2 
        }
        return shelfProps;
    },
    LytBlue100HBTablTHLast:function(size){
        shelfProps={
            "padding-bottom":property.$padding_Btm_Top_Blue100,
            "padding-top":property.$padding_Btm_Top_Blue100,
            "padding-right":property.$padd_lt_RT_BLUE100_first,
            "padding-left":property.$padding_Rt_Lt_Blue100,
            "border-bottom-width":"2px",
            "color":property.$primary_2 
        }
        return shelfProps;
    },
    LytBlue100HBTablTHH2:function(size){
        shelfProps={
            "font-family": property.$Blue_100_FF,
            "font-size":property.$fs_Blue100,
            "line-height": property.$lh_Blue100,
            "color": property.$Blue_Lyt_H2_Clr
        }
        return shelfProps;
    },
    LytBlue100HBTablEvenTr:function(size){
        shelfProps={
            "background-color":property.$BGColor_Lyt_Blue100_Not
        }
        return shelfProps;
    },
    LytBlue100HBEvenTd:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-left":"3.9px",
            "padding-right":"3.9px",
            "color":property.$BGColor_Blue100_tab2
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText;
        }
        return shelfProps;
    },
    LytBlue100HBEven1st:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-left":property.$padd_lt_RT1,
            "padding-right":"3.9px",
            "color":property.$BGColor_Blue100_tab2 
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText;
        }
        return shelfProps;
    },
    LytBlue100HBEvenLast:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-right":property.$padd_lt_RT_BLUE100_first,
            "padding-left":"3.9px",
            "color":property.$BGColor_Blue100_tab2 
        }
        if(size=="xs"){
          shelfProps['color'] =property.$blackText;
        }
        return shelfProps;
    },
    //Light Blue 100% White Band Table
    LytBlue100WBTabl:function(size){
        shelfProps={
            "border":"2px solid "+property.$borderColorWhite2,
            "margin-bottom":"35px",
        }
        return shelfProps;
    },
    LytBlue100WBTabl1stTr:function(size){
        shelfProps={ 
            "background-color":property.$colorBlue100,
            "color":property.$primary_2
        }
        return shelfProps;
    },
    LytBlue100WBTablTh:function(size){
        shelfProps={
            "padding-right":property.$lyt_Blue_Padd_Lt_Rt,
            "padding-left":property.$lyt_Blue_Padd_Lt_Rt,
            "border-bottom":"2px solid "+property.$borderColorWhite2,
        }
        if(size=="xs"){
            shelfProps['padding-right'] =property.$lyt_Blue_Padd_Lt_Rt_m;
            shelfProps['padding-left'] =property.$lyt_Blue_Padd_Lt_Rt_m;
          }
        return shelfProps;
    },
    LytBlue100WBEvenTr:function(size){
        shelfProps={
            "background-color":property.$lightGreyProductColor,
        }
        return shelfProps;
    },
    LytBlue100WBEvenTrTh:function(size){
        shelfProps={
            "background-color":property.$skyBlueColor,    
            "border-bottom":"2px solid "+property.$borderColorWhite2,       
            "padding-right":property.$lyt_Blue_Padd_Lt_Rt,
            "padding-left":property.$lyt_Blue_Padd_Lt_Rt, 
            "font-family": property.$font_family_regular,
            "font-size":"18px",
            "line-height": "36px",
            "color": property.$LytBlue100WBEvenTrThClr
        }
        if(size=="xs"){
            shelfProps['color'] =property.$rte_Color2_m;
            shelfProps['background-color'] =property.$skyBlueColor_m;
            shelfProps['padding-right'] =property.$lyt_Blue_Padd_Lt_Rt_m;
            shelfProps['padding-left'] =property.$lyt_Blue_Padd_Lt_Rt_m;
          }
        return shelfProps;
    },
    LytBlue100WBTablTd:function(size){
        shelfProps={          
            "padding":"19.35px", 
            "font-family": property.$font_family_regular,
            "font-size":"18px",
            "line-height": "18px",
            "color": property.$BGColor_Blue100_tab2 
        }
        if(size=="xs"){
          shelfProps['padding'] ="18px 10.8px";
          shelfProps['color'] =property.$blackText;
        }
        return shelfProps;
    },
    //mobile grid only sel
    gridBlowProdConf:function(size){
        shelfProps={};
        if(size=="xs"){
            shelfProps["padding-top"]="20px";
            shelfProps["padding-bottom"]="16px";
        }
    },
    //23rd all coverage
    RTE23rdTitle:function(size){
        shelfProps={
            "font-family" : property.$font_family_regular,
            "font-size": "25px",
            "line-height": "30px",
            "padding-bottom":"0px",
            "padding-top":"0px",
            "padding-right":"0px",
            "padding-left":"0px",             
        }
        if(size=="xs"){
          shelfProps['font-size'] ="18px";
          shelfProps['line-height'] ="21.6px";
        }
        return shelfProps;
    },
    RTE23rdTitPadd:function(size){
        shelfProps={
            "padding-bottom":property.$rte_23_Padd,         
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    RTE23rdULPadd:function(size){
        shelfProps={
            "margin": "0px",
            "padding-bottom": "12px",
            "border-width":"0px"            
        }
        return shelfProps;
    },
    RTE23rdLiProps:function(size){
        shelfProps={
            "background-position-y": "6px",
            "background-position-x": "0%", 
            "margin": "5px 0px",
            "font-family": property.$font_family_regular,
            "padding-left":"9.632px",
            "font-size": "14px",
            "line-height": "20px"
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$Li_Lh_m;
          shelfProps['padding-left'] =property.$li_23_Padd_m;
        }
        return shelfProps;
    },
    tab13rd1stRowTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",  
            "font-family": property.$font_family_regular,  
            "font-size": "13px",
            "line-height": "13px"             
        }
        return shelfProps;
    },
    Not13rd1stRowTD:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",  
            "font-family": property.$font_family_regular,   
            "font-size": "13px",
            "line-height": "13px"        
        }
        return shelfProps;
    },
    table13rdTDFir:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            "padding-left":property.$padding_Lt_Rt_Whit13,             
        }
        return shelfProps;
    },
    table13rdTDLas:function(size){
        shelfProps={
            "padding-bottom":"18.85px",
            "padding-top":"18.85px",
            //"padding-right":property.$padding_Lt_Rt_Whit13,            
        }
        return shelfProps;
    },
    P13rdBeltabPadd:function(size){
        shelfProps={
            "padding-bottom":"14px"             
        }
        if(size=="xs"){
          shelfProps['padding-bottom'] =property.$rte_23_Padd_m;
        }
        return shelfProps;
    },
    P13rdBeltabText:function(size){
        shelfProps={
            "font-family": property.$font_family_regular,
            "font-size": "14px",
            "line-height": "20px"           
        }
        if(size=="xs"){
          shelfProps['font-size'] =property.$rte_Fs_m;
          shelfProps['line-height'] =property.$Li_Lh_m;
        }
        return shelfProps;
    },
};
}