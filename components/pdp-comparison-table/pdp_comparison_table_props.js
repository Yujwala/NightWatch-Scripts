var rte_props = require('../rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    comparisonWrapperProp: function(size) {
           let shelfProps = {
                "width":"880px"
            };
        return shelfProps;
  },
	comparisonHeaderProp: function(size) {
           let shelfProps = {
               "padding" : property.$pdpComp_Table_Padding
            };
        return shelfProps;
  },
  comparisonCellTitleProp: function(size) {
       let shelfProps = {
            "line-height": "22px",
            "font-size":"20px",
            "margin":"0px 0px 8px",
            "color":property.$pdpComp_Tit_Color,
            "height":"44px",
            "font-family":property.$pdpComp_Tit_FF
        };
    return shelfProps;
},
comparisonCellText1Prop: function(size) {
    let rteprops=rte_props.PropTextfs12(size);
       let shelfProps = {
            "line-height": property.$pdpComp_Text_Line_Height1,
            "color":property.$pdpComp_Text_Color,
        };
    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
},
comparisonCellText2Prop: function(size) {
       let shelfProps = {
            "line-height": property.$pdpComp_Text_Line_Height2,
            "font-size":"16px",
            "color":property.$pdpComp_Text_Color,
            "font-family":property.$pdpComp_Tit_FF
        };
    return shelfProps;
},
comparisonCellButtonProp: function(size) {
       let shelfProps = {
            "background-color": property.$pdpComp_Cell_Btn_BgColor,
            "color":property.$primary_2,
            "padding":property.$pdpComp_Cell_Btn_Padding,
            "margin": "0px 0px 3px",
            "line-height": "20px",
            "font-size": property.$pdpComp_Cell_Btn_Font_size,
            "font-family":property.$primary_cta_font,
            "border-radius": property.$pdpComp_Cell_Btn_Border_radius,
            "box-shadow":property.$pdpComp_Cell_Btn_Box_shadow
        };
    return shelfProps;
},
comparisonCellButton2Prop: function(size) {
       let shelfProps = {
            "background-color": property.$pdpComp_Cell_Btn_BgColor,
            "color":property.$primary_2,
            "padding":property.$pdpComp_Cell_Btn_Padding,
            "margin": "0px 0px 3px",
            "line-height": "20px",
            "font-size": property.$pdpComp_Cell_Btn2_Font_size,
            "font-family":property.$primary_cta_font,
            "border-radius": property.$pdpComp_Cell_Btn_Border_radius,
            "box-shadow":property.$pdpComp_Cell_Btn_Box_shadow
        };
    return shelfProps;
},
comparisonCellButtonHoverProp: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Btn_Hover_BgColor,
           "color":property.$primary_2,
           "box-shadow":property.$pdpComp_Cell_Btn_Box_shadow_Hover
        };
    return shelfProps;
},
comparisonCellButtonFocusProp: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Btn_Focus_BgColor,
           "color":property.$pdpComp_Cell_Btn_Color_Focus,
           "box-shadow": property.$pdpComp_Cell_Btn_Box_shadow_Focus
        };
    return shelfProps;
},
comparisonBgCellProp1: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_One_Bgcolor
        };
    return shelfProps;
},
comparisonBgCellProp2: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Two_Bgcolor
        };
    return shelfProps;
},
comparisonBgCellProp3: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Three_Bgcolor
        };
    return shelfProps;
},
comparisonBgCellProp4: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Four_Bgcolor
        };
    return shelfProps;
},
comparisonBgCellProp5: function(size) {
       let shelfProps = {
           "background-color" : property.$pdpComp_Cell_Five_Bgcolor
        };
    return shelfProps;
},
comparisonAccordionPropTitle: function(size) {
       let shelfProps = {
            "line-height": "20px",
            "font-size":"20px",
            "color":property.$pdpComp_Acc_Tit_Color,
            "font-family":property.$pdpComp_Tit_FF,
            "padding":"24px 42px 28px 19px"
        };
    return shelfProps;
},
comparisonAccordionPropTextP: function(size) {
    let rteprops=rte_props.PropTextfs12(size);
       let shelfProps = {
            "color":property.$pdpComp_Acc_Tex_Color,
            "line-height": property.$pdpComp_Acc_Tex_Line_height,
            "padding":"0px 0px 14px"
        };
        shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
},
comparisonAccordionPropTextLi: function(size) {
    let rteprops=rte_props.PropTextLi(size);
       let shelfProps = {
            "color":property.$pdpComp_Acc_Tex_Color,
            "line-height": property.$pdpComp_Acc_Tex_Line_height,
            "padding":"0px 0px 0px 9.632px",
        };
        shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
},
comparisonCellBorderRadius1: function(size) {
       let shelfProps = {
           "border-top-left-radius" : property.$pdpComp_Cell_Border_TopLeftRadius
        };
    return shelfProps;
},
comparisonCellBorderRadius5: function(size) {
       let shelfProps = {
           "border-top-right-radius" : property.$pdpComp_Cell_Border_TopRightRadius
        };
    return shelfProps;
},
/*comparisonAccordionBackgroundImage: function(size) {
       let shelfProps = {
           "background-image" : property.$pdpComa_Acc_BgImage
        };
    return shelfProps;
},
comparisonAccordionBackgroundImageClick: function(size) {
       let shelfProps = {
           "background-image" : property.$pdpComa_AccBg_Click
        };
    return shelfProps;
},*/
comparisonCellBorder: function(size) {
       let shelfProps = {
           "border-right-width": "1px"
        };
    return shelfProps;
},
comparisonAccordionFocusProp: function(size) {
       let shelfProps = {
           "outline-color": property.$pdpComp_Acc_Focus_Color,
           "margin":"0px 0px 0px 3px"
        };
    return shelfProps;
},
comparisonAccordionEvenBgProp: function(size) {
       let shelfProps = {
            "background-color":property.$pdpComp_Acc_Even_BgColor
        };
    return shelfProps;
},
comparisonAccordionOddBgProp: function(size) {
       let shelfProps = {
            "background-color":property.$pdpComp_Acc_Odd_BgColor
        };
    return shelfProps;
},
/*comparisonAccordionImage: function(size) {
    let shelfProps = {
         "margin-bottom":"14px",
     };
 return shelfProps;
},
comparisonAccordionCtal: function(size) {
    let shelfProps = {
         
     };
 return shelfProps;
},*/
};
}