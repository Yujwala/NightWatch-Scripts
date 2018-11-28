var rte_props = require('../rte/rte_props.js');
   // cta_props = require('../CtaPrimary/Cta_Props.js');
//Desktop
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    innerShelfProps: function() {
        property = brand.props;
        let shelfProps = {
                "padding":property.$tabitem_shelfinner_padding,
                "border-left-color":property.$tabitem_shelfinner_borderleftcolor,     
                "line-height":property. $tabitem_shelfinner_lineheight,
             };
//console.log("inner shelf properties-----",shelfProps);
        return shelfProps;
    },
    gridProps: function() {
        property = brand.props;
        let shelfProps = {
                "border-bottom-color":property.$tabitem_grid_borderbottomcolor,
                "font-family":property.$tabitem_grid_fontfamily,
                "color":property.$tabitem_grid_color,
                "margin-left":property.$tabitem_grid_marginleft,

            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    oneWholeDivProps: function() {
        property = brand.props;
        let shelfProps = {
               "padding-left":property.$tabitem_onewholediv_paddingleft,
                "float":property.$tabitem_onewholediv_float,    
            };
//console.log("One whole Div properties-----",shelfProps);
        return shelfProps;
    },

    serviceTabProps: function(size) {
        property = brand.props;
        let tabProps;
        if(size=="lg")
        {
        tabProps={
               "padding-top":property.$tabitem_servicetab_paddingtop,
               // "color":property.$tabitem_servicetab_color,
        };
       }
        if(size=="xs"){
        tabProps={
                    "padding-top":"13px",
                    "border-bottom-color":property.$tabitem_servicetab_borderbottom,
                };
            }
        return tabProps;
    },
    TabsDivProps: function(size) {
        property = brand.props; 
        let tabProps;
        if(size=="lg")
        {
            tabProps={
               "font-family":property.$tabitem_singletabs_fontfamily,
                "font-size":property.$tabitem_singletabs_fontsize,
                "color":property.$tabitem_singletabs_color,
                "border-left-color":property.$tabitem_singletabs_borderleftcolor,
            "border-bottom-width":property.$tabitem_singletabs_borderbottomwidth,
            };
        }
            if(size=="xs"){
                tabProps={
                    "font-family":property.$tabitem_singletabs_fontfamily,
                "font-size":property.$tabitem_singletabs_fontsize,
                "color":property.$tabitem_singletabs_color,
                "display":"block",
                "border-bottom-width":property.$tabitem_singletabs_borderbottomwidth,
             };
        }
        return tabProps;
    },

    TabsContentProps: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$tabitem_tabscontent_backgroundcolor,
                //"line-height":property.$tabitem_tabscontent_lineheight,
                "color":property.$tabitem_tabscontent_color,
                "padding":property.$tabitem_tabscontent_padding,
            "margin":property.$tabitem_tabscontent_margin,
            "font-family":property.$tabitem_tabscontent_fontfamily,
            };
            if(size=="xs"){
                shelfProps['padding'] ="16px";
                shelfProps['background-color'] =property.$tabitem_tabscontent_backgroundcolor;
                shelfProps['margin'] ="0px -16px -16px";
                shelfProps['color'] =property.$tabitem_tabscontent_color;
            }
        return shelfProps;
    },
    tabHeadingProps: function(size) {
        property = brand.props;
        let shelfProps = {
                "line-height":property.$tabitem_tabheading_lineheight,
                "font-family":property.$tabitem_tabheading_fontfamily,
            "margin-bottom":property.$tabitem_tabheading_marginbottom,
            "font-size":property.$tabitem_tabheading_fontsize,
            "border-bottom-color":property.$tabitem_tabheading_borderbottomcolor,
            };
        
            if(size=="xs"){
                shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
                shelfProps['margin-bottom'] ="10px";
            }
        return shelfProps;
    },
    /*
    tabParaProps: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
                //"line-height":property.$tabitem_tabpara_lineheight,
                "font-family":property.$font_family_regular,
            "display":property.$tabitem_tabpara_display,
            //"font-size":property.$tabitem_tabpara_fontsize,
            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["line-height"] = property.$font_family_regular;
            }
            shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
    },
    */

    tabParaProps: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);       
        let shelfProps = {
                //"line-height":property.$tabitem_tabpara_lineheight,
                "font-family":property.$font_family_regular,
            "display":property.$tabitem_tabpara_display,
            //"font-size":property.$tabitem_tabpara_fontsize,
            };
            let lomProps = {
                  "line-height":"18.2px",
                  "font-family":"RNHouseSansRegular, sans-serif",
                  "display":"block",
                  "font-size":"14px",
            };  
            let lomPropsIe = {
                "line-height":"20px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "display":"block",
                "font-size":"14px",
          };  
            let comProps = {
                "font-size":"14px",
                "line-height":"20px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "display":"block",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(brand.props.$brandName=='lombard'&&size=='lg') {
                return lomProps;
            }
            else if(brand.props.$brandName=='rbs-com'&&size=='xs'){
                return comProps;
            }
            else if(brand.props.$brandName=='lombard'&&size=='xs'){
                return lomPropsIe;
            }
            else{
                return shelfProps;
            }
            
    },
    tabbOneHeadingProps: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs18(size);
        let shelfProps = { 
                "text-align":"center",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
    },
    tabAllHeadingProps: function() {
        property = brand.props;
        let rteprops=rte_props.Proptextfs16(size);
        let shelfProps = { 
                "text-align":"center",
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
    },

    tabSeperatorProps: function(size) {
        property = brand.props;
        let shelfProps = {
                "line-height":property.$tabitem_tabseperator_lineheight,
                "margin-top":"48px",
                "margin-bottom":"48px",
                "background-color":property.$tabitem_tabseperator_backgroundcolor,
               "height":"1px"
                        };
         if(size=="xs"){
                   shelfProps['margin-top'] = "26px";
                   shelfProps['margin-bottom'] = "24px";
                   shelfProps['height'] = "1px";
                   shelfProps['background-color'] = property.$tabitem_tabseperator_backgroundcolor;
                  }
        return shelfProps;
    },
    inactiveTabsProps: function(size) {
        property = brand.props;
        let shelfProps
        if(size=="lg")
        {
         shelfProps={
              "padding":property.$tabitem_inactivetab_padding,
                "background-color":property.$tabitem_inactivetab_bgcolor,
                "cursor":"pointer",
                 };
        }
         if(size=="xs")
         {
         shelfProps={
                "padding":property.$tabitem_inactivetab_mpadding,
                "margin-right":property.$tabitem_inactivetab_mright,
                "display":"block",
                "background-color":property.$tabitem_inactivetab_bgcolor, 
                "cursor":"pointer",
            };
        }
        return shelfProps;
    },
    compareLeftProps: function() {
        property = brand.props;
        let shelfProps = {
                "line-height":property.$tabitem_quickcompareleft_lineheight,
                "font-size":property.$tabitem_quickcompareleft_fontsize,
                "color":property.$tabitem_quickcompareleft_color,
                "background-color":property.$tabitem_quickcompareleft_backgroundcolor,
                "border-top-color":property.$tabitem_quickcompareleft_bordertopcolor,
                "padding":property.$tabitem_quickcompareleft_padding,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    compareRightProps: function() {
        property = brand.props;
        let shelfProps = {
                "float":property.$tabitem_quickcompareright_float,
                "color":property.$tabitem_quickcompareright_color,
                "padding-left":property.$tabitem_quickcompareright_paddingleft,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    activeTabProps: function(size) {
        property = brand.props;
        let shelfProps = {
                "background-color":property.$tabitem_whychoosetab_backgroundcolor,
                "color":property.$tabitem_whychoosetab_color,
                "display":property.$tabitem_whychoosetab_display,
                "font-family":property.$tabitem_whychoosetab_fontfamily,
                "font-size":property.$tabitem_whychoosetab_fontsize,
                "margin-right":property.$tabitem_whychoosetab_marginright,
            };
            if(size=="xs"){
                shelfProps['padding'] = property.$tabitem_whychoosetab_padding;
                shelfProps['display'] = property.$tabitem_whychoosetab_display;
                shelfProps['margin-right'] = property.$tabitem_whychoosetab_marginright;
                shelfProps['background-color'] = property.$tabitem_whychoosetab_backgroundcolor;
            }

        return shelfProps;
    },
    allTabsHeadingProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_whychoosepara_color,
                "line-height":property.$tabitem_whychoosepara_lineheight,
                "font-size":property.$tabitem_whychoosepara_fontsize,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    inactiveH2Props: function() {
        property = brand.props;
        let shelfProps = {
                "line-height":property.$tabitem_inactiveh2_lineheight,
                "font-size":property.$tabitem_inactiveh2_fontsize,
                "color":property.$tabitem_inactiveh2_color,
                "font-family":property.$tabitem_inactiveh2_fontfamily,
    
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },


    whyChooseSepeProps: function() {
        property = brand.props;
        let shelfProps = {
                "background-color":property.$tabitem_whychooseseperator_backgroundcolor,
                "margin-top":property.$tabitem_whychooseseperator_margintop,
                "font-family":property.$tabitem_whychooseseperator_fontfamily,
                "line-height":property.$tabitem_whychooseseperator_lineheight,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    allTabsComblockProps: function() {
        property = brand.props;
        let shelfProps = {
                "background-color":property.$tabitem_whychoosecomblock_backgroundcolor,
                "padding":property.$tabitem_whychoosecomblock_padding,
                "line-height":property.$tabitem_whychoosecomblock_lineheight,
                "border-top-color":property.$tabitem_whychoosecomblock_bordertopcolor,
                "margin-bottom":property.$tabitem_whychoosecomblock_marginbottom,
                "font-size":property.$tabitem_whychoosecomblock_fontsize,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    commonHeadingProps: function() {
        property = brand.props;
        let shelfProps = {
               // "color":property.$tabitem_whychoosecomheading_color,
                "line-height":property.$tabitem_whychoosecomheading_lineheight,
               "font-family":property.$tabitem_whychoosecomheading_fontfamily,
                "font-size":property.$tabitem_whychoosecomheading_fontsize,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    ComParaProps: function(size) {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_whychoosecompara_color,
                "line-height":property.$tabitem_whychoosecompara_lineheight,
               "font-family":property.$tabitem_whychoosecompara_fontfamily,
                "font-size":property.$tabitem_whychoosecompara_fontsize,
            };
            let lomPropsIe = {
                "color":property.$tabitem_whychoosecompara_color,
                "line-height":"20px",
               "font-family":property.$tabitem_whychoosecompara_fontfamily,
                "font-size":property.$tabitem_whychoosecompara_fontsize,
            };
            if(brand.props.$brandName=='lombard'&&size=='xs')
            {
                return lomPropsIe;
            }
            if(size=="xs"){
                //shelfProps['font-size'] = "16px";
                //shelfProps['line-height'] = "22px";
                shelfProps['font-family'] = property.$tabitem_whychoosecompara_fontfamily;
            }

        return shelfProps;
    },

    whyChooseParaCtaProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_whychoosecta_color,
               "display":property.$tabitem_whychoosecta_display,
                "font-size":property.$tabitem_whychoosecta_fontsize,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    

    buttonHoverProps: function() {
        property = brand.props;
        let shelfProps = {
                "background-color":property.$tabitem_funcbuttonhover_bgcolor,
            };
            let shelfPropssIe = {
                "background-color":"rgba(48, 144, 158, 1)",
            };
             if(brand.props.$brandName=='lombard'&&size=='xs'){
        return shelfPropssIe;
             }
             else{
                 return shelfProps;
             }
    },

    linkHoverProps: function() {
        property = brand.props;
       let shelfProps = {
                "color":property.$tabitem_funclinkhover_color,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

     buttonClickFocusProps: function() {
        property = brand.props;
        let shelfProps = {
                "background-color":property.$tabitem_funcbtnclick_bgcolor,
                "color":property.$tabitem_funcbtnclick_color,
                "border-left-color":property.$tabitem_funcbtnclick_brdleftcolor,

            };
            let shelfPropsIee = {
                "background-color":"rgba(29, 123, 138, 1)",
                "color":property.$tabitem_funcbtnclick_color,
                "border-left-color":property.$tabitem_funcbtnclick_brdleftcolor,

            };
            if(brand.props.$brandName=='lombard'&&size=='xs')
            {
                return shelfPropsIee;
            }
            else{
        return shelfProps;
            }
    },
    //mobile props

    tabOneHeadingProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_taboneheading_color,
                "font-size":"16px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "border-bottom-color":property.$tabitem_borderbottomcolor_color,
                "line-height":"16px",
                "font-weight":"700",
                "box-sizing":"border-box"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    tabOneParaProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_tabonepara_color,
                "font-size":"13px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "border-bottom-color":property.$tabitem_tabonepara_bdbtcolor,
                "line-height":property.$tabitem_tabonepara_lineheight,
                "font-weight":"400",
                "box-sizing":"border-box"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    tabOneButtonProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":"rgba(255, 255, 255, 1)",
                "font-size":"18px",
                "font-family":"RNHouseSansBold",
                "border-bottom-color":"rgba(255, 255, 255, 1)",
                "line-height":"24px",
                "font-weight":"400",
                "cursor":"pointer",
                "padding":"10px 18px 12px 20px",
                "margin":"10px 21px 16px 0px"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },

    tabTwoHeadingProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_taboneheading_color,
                "font-size":"16px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "border-bottom-color":property.$tabitem_borderbottomcolor_color,
                "line-height":"16px",
                "font-weight":"700",
                "box-sizing":"border-box"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    tabTwoParaProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":property.$tabitem_tabonepara_color,
                "font-size":"13px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "border-bottom-color":property.$tabitem_tabonepara_bdbtcolor,
                "line-height":property.$tabitem_tabtwopara_lineheight,
                "font-weight":"400",
                "box-sizing":"border-box"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    tabTwoButtonProps: function() {
        property = brand.props;
        let shelfProps = {
                "color":"rgba(255, 255, 255, 1)",
                "font-size":"18px",
                "font-family":"RNHouseSansBold",
                "border-bottom-color":"rgba(255, 255, 255, 1)",
                "line-height":"24px",
                "font-weight":"400",
                "cursor":"pointer",
                "padding":"10px 18px 12px 20px",
                "margin":"10px 21px 16px 0px"
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    comLinksProps: function() {
        property = brand.props;
        let rbsComShelfProps = {
              //  "color":property.$tabitem_comlinks_color,
                "font-size":property.$tabitem_comlinks_fontsize,
               // "text-decoration":property.$tabitem_comlinks_textdecoration,
            };
            let shelfProps = {
                 "color":property.$tabitem_comlinks_color,
                  "font-size":property.$tabitem_comlinks_fontsize,
                  "text-decoration":property.$tabitem_comlinks_textdecoration,
              };
            if(brand.props.$brandName=='rbs-personal'||brand.props.$brandName=='rbs-com')
             {
                return rbsComShelfProps;
            }
            else
            {
                return shelfProps;
            }
    },

    checkCtaProps: function(size) {
        property = brand.props;
        let CtaProps=cta_props.PrimaryCtaProps(size);
        let shelfProps=Object.assign(CtaProps);
        console.log("CtaProps",CtaProps);
        console.log("shelfProps",shelfProps);
            return shelfProps;
    }
};
}