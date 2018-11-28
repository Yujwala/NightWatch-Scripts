
var rte_props = require('../../components/rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
    shelfProps = {},
    property = brand.props;
  return {
//budget calculator props
    budgetCalcWrapProps: function (size) {
        let shelfProps = {
            "visibility": "visible",
            "padding-bottom": "239px"
        };
        if(size === 'xs') {
            shelfProps["padding-bottom"] = "0px";
        }
        return shelfProps;
    },
    headerProps: function (size) {
        let shelfProps = {
            "padding": "0px 286px 0px 48px",
            "height": "122px",
            "box-sizing": "content-box",
        };

        if(size === 'xs') {
            shelfProps["padding"] = "0px 16px";
            shelfProps["height"] ="129px";
            shelfProps["box-sizing"] = "border-box";

        }
        return shelfProps;
    },
    bannerProps: function (size) {
        let shelfProps = {
            "padding-top": "39px",
        };
        if(size === 'xs') {
            shelfProps["padding-top"] = "29px";
        }
        return shelfProps;
    },
    bannerH2Props: function (size) {
        let shelfProps = {
            "font-size": "36px",
            "line-height": "40px",
            "color": property.$bcalc_color,
            "font-family": property.$font_family_bold,
        };
        if(size === 'xs') {
            shelfProps["line-height"] = "36px";
            shelfProps["font-size"] = "32px";
        }
        return shelfProps;
    },
    middleWrapProps: function (size) {
        let shelfProps = {
            "padding-top": "49px",
        };
        if(size ==='xs') {
            shelfProps["padding-top"] = "0px";
            shelfProps["padding-bottom"] = "43px";
        }
        return shelfProps;
    },
    logoProps: function (size) {
        let shelfProps = {
            "margin": "0px 32px 0px 48px",
        };
        return shelfProps;
    },
    logoMProps : function (size) {
        let shelfProps = {
            "padding" : "21px 54px 23px" ,
            "margin-bottom" : "22px",
            "border-bottom"  : "1px solid rgb(209, 201, 191)"
        };
        return shelfProps;
    },
    headerGroupProps: function (size) {
        let shelfProps = {
            "margin-bottom": "21px",
            "padding-top": "14px",
        };
        if(size =='xs'){
            shelfProps["margin-bottom"] = "6px";
            shelfProps["padding-top"] = "0px";
        }
        return shelfProps;
    },
    headlineProps: function (size) {
        let shelfProps = {
            "font-size": "32px",
            "line-height": "36px",
            "margin-left": "-1.6px",
            "color": property.$bcalc_color,
            "font-family": property.$font_family_bold,
        };
        if(size =='xs'){
            shelfProps["font-size"] = "18px";
            shelfProps["line-height"] = "22px";
            shelfProps["margin-left"] = "0px";
        }

        return shelfProps;
    },
    middlePProps: function (size) {
        let rteprops = rte_props.PropTextfs12(size);
        let shelfProps = {
            "padding-bottom": "18px",
            "font-family": property.$font_family_regular,
            "color": property.$bcalc_color,           
        };
        if(size==='xs'){
            shelfProps['color']=property.$bcalc_color_m;
        }
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    middleCtaProps: function (size) {
        let shelfProps = {
            "padding": "16px 40px",
            "margin-right": "21px",
            "border-radius": "5px",
            "font-size": "18px",
            "line-height": "22px",
            "background-color": property.$bcalc_cta_bgcolor,
        };
        if(size === 'xs') {
            shelfProps["padding"] = "13px 14px";
            shelfProps["margin"] = "10px 21px 0px 0px";
        }
        return shelfProps;
    },
    ctaHoverProps: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_cta_hover,
        };
        return shelfProps;
    },
    middleCtaFocusProps: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_cta_focus,
            "padding": "14px 38px",
            "color": property.$bcalc_color,
        };
        if(size === 'xs') {
            shelfProps["padding"] = "13px 14px";
        }
        return shelfProps;
    },
    qFeedbackProps: function (size) {
        let shelfProps = {
            "font-size": "24px",
            "line-height": "32px",
            "padding": "0px 48px",
        };
        if(size === 'xs') {
            shelfProps["font-size"] = "18px";
            shelfProps["line-height"] = "24px";
            shelfProps["padding"] = "0px 16px";
        }
        return shelfProps;
    },
    qBannerProps: function (size) {
        let shelfProps = {
            "padding": "25px 0px",
            "color": property.$bcalc_color,
        };
        if(size === 'xs') {
            shelfProps["padding"] = "16px 16px 15px";
        }
        return shelfProps;
    },
    qIncomeProps: function (size) {
        let shelfProps = {
            "font-size": "16px",
            "line-height": "20px",
            "font-family": property.$font_family_bold
        };
        if(size =='xs'){
            shelfProps["font-size"] = "14px";
            shelfProps["line-height"] = "18px";
        }
        return shelfProps;
    },
    qIncomeH3Props: function (size) {
        let shelfProps = {
            "font-size": "42px",
            "line-height": "50px",
            "font-family": property.$font_family_bold,
            "position": "relative"
        };
        if(size =='xs'){
            shelfProps["font-size"] = "36px";
            shelfProps["line-height"] = "40px";
            shelfProps["padding-top"] = "5px";
        }
        return shelfProps;
    },
    qMiddleWrapProps: function (size) {
        let shelfProps = {
            "padding-bottom": "179px",
            "margin": "0px 48px",
        };
        if(size =='xs'){
            shelfProps["padding-bottom"] = "184px";
            shelfProps["margin"] = "0px";
        }
        return shelfProps;
    },
    qTitleProps: function (size) {
        let shelfProps = {
            "padding": "28px 0px",
            "margin": "0px 76px",
            "font-size": "18px",
            "line-height": "22px",
            "font-family": property.$font_family_bold,
            "color": property.$bcalc_color
        };
        if(size =='xs'){
            shelfProps["padding"] = "20px 0px 19px";
            shelfProps["margin"] = "0px";
        }
        return shelfProps;
    },
    qIndividualProps: function (size) {
        let shelfProps = {
            "padding": "28px 74px 33px",
            "background-color": property.$bcalc_color_2,
        };
        if(size =='xs'){
            shelfProps["padding"] =  "13px 20px 30px";
        }
        return shelfProps;
    },

    qSliderTitleProps: function (size) {
        let shelfProps = {
            "margin-bottom": "21px",
        };
        if(size =='xs'){
            shelfProps["margin-bottom"] =  "17px";
        }
        return shelfProps;
    },
    qSliderLabelProps: function (size) {
        let shelfProps = {
            "line-height": "22px",                   
            "font-size": "18px"
        };
        if(size =='xs'){
            shelfProps["line-height"] =  "24px";
            shelfProps["font-size"] =  "20px";
        }
        return shelfProps;
    },
    qSliderH5Props: function (size) {
        let shelfProps = {
            "line-height": "22px",
            "font-size": "18px",
            "float": "right",
        };
        if(size =='xs'){
            shelfProps["float"] =  "none";
        }
        return shelfProps;
    },
    qSliderPProps: function (size) {
        let shelfProps = {
            "line-height": "18px",
            "font-size": "14px",
            "padding-top": "15px",
        };
        if(size =='xs'){
            shelfProps["line-height"] =  "20px";
            shelfProps["font-size"] =  "16px";
            shelfProps["padding-top"] = "6px";
        }
        return shelfProps;
    },
    qSliderWrapProps: function (size) {
        let shelfProps = {
            "padding": "0px 16px",
            "position": 'relative',
            "float": "left",
        };
        return shelfProps;
    },
    qSliderInputProps: function (size) {
        let shelfProps = {
            "padding-left": "65px",
            "position": 'relative',
            "float": "left",
        };
        if(size =='xs'){
            shelfProps["padding-left"] =  "20px";
        }
        return shelfProps;
    },
    qSliderSelectProps: function (size) {
        let shelfProps = {
            "padding-left": "56px",
            "float": "left",
        };
        if(size =='xs'){
            shelfProps["padding-left"] =  "34px";
        }
        return shelfProps;
    },
    qBtwTextProps: function (size) {
        let shelfProps = {
            "padding": "0px 10px 0px 46px",
            "line-height": "47px",
            "font-size": "18px",
            "color": property.$bcalc_color_3,
        };
        if(size === 'xs'){
            shelfProps["padding"] = "0px 11px 0px 0px";
        }
        return shelfProps;
    },

    qSlInputProps: function (size) {
        let shelfProps = {
            "padding": "0px 12px",
        };
        if(size === 'xs'){
            shelfProps["padding"] = "0px 16px";
        }
        return shelfProps;
    },
    qSlInputFieldProps: function (size) {
        let shelfProps = {
            "padding": "11px 0px 12px",
            "height": "22px",
        };
        if(size === 'xs'){
            shelfProps["height"] = "45px";
        }
        return shelfProps;
    },
    qSelProps: function (size) {
        let shelfProps = {
            "padding": "11px 8px 12px 16px",
            "height": "22px",
        };
        if(size === 'xs'){
            shelfProps["padding"] = "11px 10px 12px 16px";
            shelfProps["height"] = "47px";
        }
        return shelfProps;
    },
    ACtaProps: function (size) {
        let shelfProps = {
            "padding": "33px 0px 0px",
            "display": "block",
        };
        if(size === 'xs'){
            shelfProps["padding"] = "24px 0px 0px";
        }
        return shelfProps;
    },
    CtaaProps: function (size) {
        let shelfProps = {
            "font-size": "14px",
            "padding": "4px 36px 4px 0px",
            "line-height": "18px",
            "height": "18px",
            "color": property.$bcalc_color_4
        };
        if(size =='xs'){
            shelfProps["font-size"] =  "18px";
            shelfProps["padding"] = "4px 34px 2px 0px";
            shelfProps["height"] = "28px";
            shelfProps["line-height"] = "22px";
        }
        return shelfProps;
    },
    qNavProps: function (size) {
        let shelfProps = {
            "top": "339px",
            "padding": "33px 0px 89px",
            "position": "absolute",
            "background-color": property.$bcalc_bgcolor_1
        };
        if(size =='xs'){
            shelfProps["padding"] = "19px 16px 40px";
        }
        return shelfProps;
    },
    qNextSectionProps: function (size) {
        let shelfProps = {
            "font-size": "16px",
            "padding": "18px 24px 0px 0px",
            "line-height": "18px",
            "display": "block",
            "float": 'left',
            "position": "relative",
            "color": property.$bcalc_color,
            "font-family": property.$font_family_regular
        };
        if(size =='xs'){
            shelfProps["padding"] = "0px 0px 22px";
            shelfProps["float"] = "none";
        }
    
        return shelfProps;
    },
    btnNextProps: function (size) {
        let shelfProps = {
            "padding": "16px 26px",
            "border-radius": "5px",
            "background-color": property.$bcalc_bgcolor_2,
            "color": property.$bcalc_color
        };
        if(size =='xs'){
            shelfProps["padding"] = "13px 26px";
        }   
        return shelfProps;
    },
    btnNextEnabledProps: function (size) {
        let shelfProps = {
            "padding": "16px 26px",
            "border-radius": "5px",
            "background-color": property.$bcalc_cta_bgcolor,
            "color": property.$primary_2
        };
        if(size =='xs'){
            shelfProps["padding"] = "13px 26px";
        } 
        return shelfProps;
    },
    FocusProps: function (size) {
        let shelfProps = {
            "outline": property.$bcalc_focus,
        };
        return shelfProps;
    },
    Focus1Props: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_cta_focus,
            "color": property.$bcalc_color
        };
        return shelfProps;
    },
    catProps: function (size) {
        let shelfProps = {
            "padding": "44px 74px 49px"
        };
        if(size =='xs'){
            shelfProps["padding"] = "16px 20px 24px";
        }
        return shelfProps;
    },
    catLabelProps: function (size) {
        let shelfProps = {
            "padding-bottom": "20px",
            "font-size": "20px",
            "line-height": "24px",
            "font-family": property.$primary_cta_font,
            "display": "block",
        };
        if(size =='xs'){
            shelfProps["padding-bottom"] = "15px";
        }
        return shelfProps;
    },
    checkboxWrapProps1: function (size) {
        let shelfProps = {
            "padding-right": "74px",
            "padding-bottom": "22px",
            "float": "left",
            "border-right": "2px solid rgb(209, 201, 191)"
        };
        if(size === 'xs'){
            shelfProps["padding-right"] = "0px";
            shelfProps["float"] = "none";
            shelfProps["border-right"] = property.$bcalc_border_m;
        }
        return shelfProps;
    },
    checkboxWrapProps2: function (size) {
        let shelfProps = {
            "padding-left": "74px",
            "padding-bottom": "22px",
            "float": "left",
        };
        if(size ==='xs'){
            shelfProps["padding-left"] = "0px";
            shelfProps["float"] = "none";
        }
        return shelfProps;
    },
    checkboxWrapProps3: function (size) {
        let shelfProps = {
            "padding-right": "74px",
            "float": "left",
            "border-right": "2px solid rgb(209, 201, 191)"
        };
        if(size ==='xs'){
            shelfProps["padding-right"] = "0px";
            shelfProps["float"] = "none";
            shelfProps["border-right"] = property.$bcalc_border_m;
        }
        return shelfProps;
    },
    checkboxWrapProps4: function (size) {
        let shelfProps = {
            "padding-left": "74px",
            "float": "left",
        };
        if(size ==='xs'){
            shelfProps["padding-left"] = "0px";
            shelfProps["float"] = "none";
        }
        return shelfProps;
    },
    checkboxLabelProps: function (size) {
        let shelfProps = {
            "width": "212px",
            "padding-right": "46px",
        };
        if(size =='xs'){
            shelfProps["width"] = "323px";
            shelfProps["padding-right"] = "0px";
        }
        return shelfProps;
    },
    commonTitleProps: function (size) {
        let shelfProps = {
            "padding": "29px 0px 8px",
            "font-size": "18px",
            "line-height": "22px",
            "font-family": property.$font_family_bold,
            "color": property.$bcalc_color
        };
        if(size =='xs'){
            shelfProps["padding"] =  "20px 0px 19px";
        }
        return shelfProps;
    },
    commonIndividualProps: function (size) {
        let shelfProps = {
            "margin": "0px 44px",
            "box-sizing": "content-box",
        };
        if(size =='xs'){
            shelfProps["margin"] =  "0px";
            shelfProps["box-sizing"] = "border-box";
        }
        return shelfProps;
    },
    commonItemsProps: function (size) {
        let shelfProps = {
            "height": "140px",
            "width": "120px",
            "margin": "27px 16px 0px"
        };
        if(size =='xs'){
            shelfProps["height"] =  "132px";
            shelfProps["width"] = "84px";
            shelfProps["margin"] =  "23px 9px 0px";

        }
        return shelfProps;
    },
    commonIconsProps: function (size) {
        let shelfProps = {
            "width": "88px",
            "height": "88px",
        };
        if(size =='xs'){
            shelfProps["height"] =  "84px";
            shelfProps["width"] = "84px";
        }
        return shelfProps;
    },
    commonPProps: function (size) {
        let shelfProps = {
            "color": property.$bcalc_color,
            "line-height": "20px",
            "padding": "12px 0px 0px",
            "font-size": "16px",
            "font-family": property.$font_family_bold
        };
        if(size =='xs'){
            shelfProps["padding"] = "4px 0px 0px";
            shelfProps["line-height"] = "22px";
        }
        return shelfProps;
    },
    commonTickProps: function (size) {
        let shelfProps = {
            "height": "54px",
            "padding": "0px 0px 23px",
            "box-sizing": "content-box",
            "text-align": "center"
        };
        if(size =='xs'){
            shelfProps["height"] = "53px";
            shelfProps["padding"] ="0px 0px 24px";
        }

        return shelfProps;
    },
    errorProps: function (size) {
        let shelfProps = {
            "position": "absolute",
            "background-color": property.$bcalc_bgcolor_3,
            "padding": "6.875px 8.25px",
            "color": property.$primary_2,
            "font-family": property.$font_family_regular,
            "font-size": "11px",
        };
        return shelfProps;

    },
    backProps: function (size) {
        let shelfProps = {
            "float": 'left',
            "padding-top": "20px"
        };
        if(size==='xs'){
            shelfProps["float"] = "none";
            shelfProps["padding-top"]="0px";
        }
        return shelfProps;
    },
    backFocusProps: function (size) {
        let shelfProps = {
            "color": property.$bcalc_color_4,
            "outline": property.$bcalc_focus_1
        };

        return shelfProps;
    },
    editWrapProps: function (size) {
        let shelfProps = {
            "padding": "33px 0px 32px",
            "text-align": 'left',
            "position": "absolute",
            "background-color": property.$bcalc_color_2
        };
        if(size==='xs'){
            shelfProps["padding"]="10px 14px 44px 16px";
        }
        return shelfProps;
    },
    editIncomeProps: function (size) {
        let shelfProps = {
            "width": "438px",
            "border-right": "1px solid rgb(209, 201, 191)",
            "float": "left",
            "position": "relative",
            "padding-left": "48px",
        };
        if(size==='xs'){
            shelfProps["width"]="422px";
            shelfProps["border-right"] = property.$bcalc_border_m;
            shelfProps["float"] = "none";
            shelfProps["position"] = "static";
            shelfProps["padding-left"] = "0px";
        }
        return shelfProps;
    },
    editLabelProps: function (Size) {
        let shelfProps = {
            "display": "block",
            "font-size": "18px",
            "line-height": "22px",
            "float": "none",
            "padding-bottom": "4px",
        };
        if(size==='xs'){
            shelfProps["font-size"]="16px";
            shelfProps["line-height"] = "20px";
            shelfProps["float"] = "right";
            shelfProps["padding-bottom"] = "13px";
        }
        return shelfProps;
    },
    editVolProps: function (Size) {
        let shelfProps = {
            "font-size": "18px",
            "line-height": "22px",
            "float": "none",
            "padding-left": "15px",
            "position": "relative",
        };
        return shelfProps;
    },
    editVol1Props: function (Size) {
        let shelfProps = {
            "font-size": "16px",
            "line-height": "20px",
            "float": "right",
            "padding-left": "13px",
            "position": "relative",
        };
        return shelfProps;
    },
    editExpenseProps: function (size) {
        let shelfProps = {
            "width": "392px",
            "float": "right",
            "position": "relative",
            "padding": "0px 48px 0px 47px",
        };
        if(size==='xs'){
            shelfProps["width"] = "422px";
            shelfProps["float"] = "none";
            shelfProps["position"] = "static";
            shelfProps["padding"] = "0px 0px 14px";
        }

        return shelfProps;
    },
    finalResultProps: function (size) {
        let shelfProps = {
            "position": "absolute",
            "padding": "48px 0px 104px",
            "z-index": "100",
        };
        if(size==='xs'){
            shelfProps["padding"] = "24px 0px 48px";
        }

        return shelfProps;
    },
    fmiddleWrapProps: function (size) {
        let shelfProps = {
            "border-radius": "16px",
            "margin": "0px 48px",
            "background-color": property.$bcalc_color_2
        };
        if(size==='xs'){
            shelfProps["border-radius"] = "6px";
            shelfProps["margin"] = "0px 16px";
        }
        return shelfProps;
    },
    donutProps: function (size) {
        let shelfProps = {
            "margin": "0px 74px",
        };
        if(size==='xs'){
            shelfProps["margin"] = "0px 16px";
        }
        return shelfProps;
    },
    donutHeadingProps: function (size) {
        let shelfProps = {
            "padding": "34px 0px 38px",
            "font-size": "22px",
            "line-height": "26px",
            "border-bottom": "1px solid rgb(209, 201, 191)",
            "text-align": "center",
            "font-family": property.$font_family_bold
        };
        if(size==='xs'){
            shelfProps["padding"] = "28px 0px 29px";
            shelfProps["margin"] = "0px";
            shelfProps["font-size"] = "14px";
            shelfProps["line-height"] =  "16px";
            shelfProps["border-bottom"] = property.$bcalc_border_m;
        }
        return shelfProps;
    },
    donutSpanProps: function (size) {
        let shelfProps = {
            "padding-top": "18px",
            "padding-bottom": "12px",
            "vertical-align": "middle",
        };
        if(size==='xs'){
            shelfProps["padding-top"] = "0px";
            shelfProps["padding-bottom"] = "0px";
            shelfProps["vertical-align"] = "baseline";
            
        }
        return shelfProps;
    },
    donutSpan2Props: function (size) {
        let shelfProps = {
            "font-size": "48px",
            "line-height": "56px",
            "padding": "0px 4px",
        };
        if(size==='xs'){
            shelfProps["font-size"] = "52px";
            shelfProps["line-height"] =  "52px";
            shelfProps["padding"] =  "6px 0px";
        }
        return shelfProps;
    },
    chartSliderProps: function (size) {
        let shelfProps = {
            "padding": "29px 0px 33px",
        };
        if(size==='xs'){
            shelfProps["padding"] =  "0px 0px 12px";
        }

        return shelfProps;
    },
    innerCircleProps: function (size) {
        let shelfProps = {
            "width": "273px",
            "height": "273px",
            "top": "38px",
            "position": "absolute",
            "border": "10px solid rgb(0, 0, 0)",
            "opacity": "0.1",
            "border-radius": "200px",
            "z-index": "9"
        };

        if(size==='xs'){
            shelfProps["width"] = "171px";
            shelfProps["height"] =  "171px";
            shelfProps["top"] =  "56px";
        }
        
        return shelfProps;
    },
    chartBudgetProps: function (size) {
        let shelfProps = {
            "top": "150px",
            "width": "177px",
            "position": "absolute",
            "font-family": property.$font_family_bold,
            "text-align": "center",
            "margin": "0px 93px"
        };
        if(size==='xs'){
            shelfProps["width"] = "137px";
            shelfProps["top"] =  "97px";
            shelfProps["margin"] = "0px 121.5px";
        }
        return shelfProps;
    },

    chartTitleProps: function (size) {
        let shelfProps = {
            "font-size": "16px",
            "line-height": "20px",
            "color": property.$bcalc_color
        };
        if(size==='xs'){
            shelfProps["font-size"] = "14px";
            shelfProps["line-height"] =  "18px";
        }
        return shelfProps;
    },

    chartCostProps: function (size) {
        let shelfProps = {
            "font-size": "40px",
            "line-height": "49px",
            "color": property.$bcalc_color
        };
        if(size==='xs'){
            shelfProps["font-size"] = "20px";
            shelfProps["line-height"] =  "24px";
        }
        return shelfProps;
    },
    barsWrapProps: function (size) {
        let shelfProps = {
            "width": "288px",
            "margin-left": "81px",
            "float": "left",
            "font-size": "16px",
            "line-height": "22px",
            "color": property.$bcalc_color,
            "font-family": property.$font_family_regular,
        };
        if(size==='xs'){
            shelfProps["width"] = "380px";
            shelfProps["margin-left"] = "0px";
            shelfProps["float"] = "none";
        }
        return shelfProps;
    },
    barsCatProps: function (size) {
        let shelfProps = {
            "margin-bottom": "18px"
        };
        if(size==='xs'){
            shelfProps["margin-bottom"] = "20px";
        }
        return shelfProps;
    },
    barsLabelValProps: function (size) {
        let shelfProps = {
            "padding-bottom": "4px"
        };
        if(size==='xs'){
            shelfProps["padding-bottom"] = "0px";
        }
        return shelfProps;
    },
    barsLabelProps: function (size) {
        let shelfProps = {
            "float": "left"
        };
        return shelfProps;
    },

    barsValProps: function (size) {
        let shelfProps = {
            "float": "right"
        };
        return shelfProps;
    },
    colorWrapProps: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_bgcolor_4,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },
    colorProps1: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_1,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },

    colorProps2: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_2,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },

    colorProps3: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_3,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },
    colorProps4: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_4,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },
    colorProps5: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_5,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },
    colorProps6: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_6,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },
    colorProps7: function (size) {
        let shelfProps = {
            "background-color": property.$bcalc_chart_7,
            "height": "4px",
            "border-radius": "3px",
        };
        return shelfProps;
    },

    somethingTitleProps: function (size) {
        let shelfProps = {
            "padding": "27px 0px",
            "font-family": property.$font_family_bold,
            "font-size": "22px",
            "line-height": "26px",

        };
        if(size==='xs'){
            shelfProps['padding']="19px 0px 15px";
        }
        return shelfProps;
    },

    somethingRepProps: function (size) {
        let shelfProps = {
            "padding": "28px 32px 24px",
            "background-color": property.$bcalc_bgcolor_4,
            "border-radius": "5px",
        };
        if(size==='xs'){
        shelfProps['padding']="0px";
        shelfProps['background-color']=property.$bcalc_bgcolor_m;
        shelfProps['border-radius'] = "0px";  
        }
              
      return shelfProps;
    },

    somethingBlockProps: function (size) {
        let shelfProps = {
            "padding-bottom": "18px",
        };
        if(size==='xs'){
            shelfProps['padding-bottom']="24px";
        }
        return shelfProps;
    },
    blockH3Props: function (size) {
        let shelfProps = {
            "font-size": "20px",
            "line-height": "24px",
            "font-family": property.$font_family_bold,
            "color": property.$bcalc_color_4,
            "padding-bottom": "15px",

        };
        if(size==='xs'){
            shelfProps['font-size']="18px";
            shelfProps['line-height']="22px";
        }
        return shelfProps;
    },

    blockTextProps: function (size) {
        let shelfProps = {
            "font-size": "14px",
            "line-height": "20px",
            "float": "left",
            "color": property.$bcalc_color,

        };
        if(size==='xs'){
            shelfProps['font-size']="16px";
            shelfProps['line-height']="22px";
            shelfProps['float'] = "none";
        }
        return shelfProps;
    },

    blockCtaProps: function (size) {
        let shelfProps = {
            "padding": "16px 26px",
            "margin-left": "23px",
            "border-radius": "5px",
            "float": "left",
            "text-align": "center",
            "font-size": "18px",
            "line-height": "22px",
            "font-family": property.$font_family_bold,
            "color": property.$primary_2,
            "background-color": property.$bcalc_cta_bgcolor,
        };
        if(size==='xs'){
            shelfProps['padding']="16px 30px 16px 31px";
            shelfProps['margin-left']="0px";
        }
        return shelfProps;
    },
    emailProps: function (size) {
        let shelfProps = {
            "padding-bottom": "42px",
        };
        if(size==='xs'){
            shelfProps['padding-bottom']="33px";
        }
        return shelfProps;
    },
    emailTitleProps: function (size) {
        let shelfProps = {
            "font-size": "14px",
            "line-height": "18px",
            "font-family": property.$font_family_regular,
            "padding": "29px 0px 12px",
        };
        if(size==='xs'){
            shelfProps['font-size']="18px";
            shelfProps['line-height']="22px";
            shelfProps["font-family"]= property.$font_family_bold;
            shelfProps['padding'] =  "20px 0px 21px";
        }
        return shelfProps;
    },
    emailLinkProps: function (size) {
        let shelfProps = {
            "font-size": "14px",
            "line-height": "18px",
            "color": property.$bcalc_color_4,
        };
        if(size==='xs'){
            shelfProps['font-size']="18px";
            shelfProps['line-height']="22px";
        }

        return shelfProps;
    },

    popupWrapProps: function (size) {
        let shelfProps = {
            "width": "488px",
            "top": "168px",
            "border-radius": "6px",
            "padding": "42px 120px 48px",
            "background-color": property.$bcalc_color_2,
        };
        if(size==='xs'){
            shelfProps['width']="420px";
            shelfProps['top']="109px";
            shelfProps['border-radius'] = "10px";
            shelfProps['padding']= "21px 16px 24px";
        }
        return shelfProps;
    },

    popupH2Props: function (size) {
        let shelfProps = {
            "font-size": "24px",
            "line-height": "28px",
            "font-family": property.$font_family_bold,
            "padding-bottom": "8px",
            "color": property.$bcalc_color,
        };
        if(size==='xs'){
            shelfProps['font-size']="20px";
            shelfProps['line-height']="24px";
            shelfProps['padding-bottom'] = "15px";
        }
        return shelfProps;
    },
    popupContentProps: function (size) {
        let shelfProps = {
            "font-size": "14px",
            "line-height": "22px",
            "padding-bottom": "21px",
            "color": property.$bcalc_color,
        };
        if(size==='xs'){
            shelfProps['font-size']="16px";
            shelfProps['line-height']="20px";
        }
        return shelfProps;
    },

    popupInputFieldProps: function (size) {
        let shelfProps = {
            "width": "256px",
            "font-size": "18px",
            "line-height": "18px",
            "height" : "20px",
            "padding": "11px 16px 12px",
            "margin-bottom": "16px",
            "border-radius": "2px",
            "border": "1px solid rgb(209, 201, 191)",
            "color": property.$bcalc_color,
            "background-color": property.$primary_2,
        };
        if(size==='xs'){
            shelfProps['width']="388px";
            shelfProps['font-size']="16px";
            shelfProps['line-height']="22px";
            shelfProps['height']= "45px";
            shelfProps['padding'] = "10px 42px 13px 16px";
        }
        return shelfProps;
    },
    
    popupDisabledProps : function (size) {
        let shelfProps = {
            "color": property.$bcalc_color,
            "padding": "16px",
            "width": "258px",
            "line-height": "22px",
            "font-size": "18px",
            "border-radius": "5px",
            "margin": "0px 21px 0px 0px",
            "background-color": property.$bcalc_bgcolor_2,
            "font-family":property.$bcalc_font_family_1,
        };
        if(size==='xs'){
            shelfProps['width']="388px";
            shelfProps['padding']=property.$bcalc_padding_m;
            shelfProps['font-size']=property.$bcalc_fs_m;
            shelfProps['font-family']=property.$bcalc_font_family;
        }
        return shelfProps;
    },
    
    popupEnabledProps : function (size) {
        let shelfProps = {
            "color": property.$primary_2,
            "padding": "16px",
            "width": "258px",
            "line-height":  "22px",
            "font-size": "18px",
            "border-radius": "5px",
            "text-align": "center",
            "margin": "0px 21px 0px 0px",
            "background-color": property.$bcalc_cta_bgcolor,
            "font-family":property.$bcalc_font_family_1,
        };
        if(size==='xs'){
            shelfProps['width']="388px";
            shelfProps['padding']=property.$bcalc_padding_m;
            shelfProps['font-size']=property.$bcalc_fs_m;
            shelfProps['font-family']=property.$bcalc_font_family;
        }
        return shelfProps;
    },

    popupCloseProps : function (size) {
        let shelfProps = {
            "width": "32px",
            "height": "31px",
            "top": "24px",
            "right": "24px",
            "font-size": "16px",
            "line-height": "31px",
            "border-radius": "4px",
            "color": property.$primary_2,
            "background-color": property.$bcalc_bgcolor_5
        };
        if(size==='xs'){
            shelfProps['width']="24px";
            shelfProps['height']="24px";
            shelfProps['font-size']="13px";
            shelfProps['top']="6px";
            shelfProps['right']="6px";
            shelfProps['line-height']="24px";
        }
        return shelfProps;
    },
    popupCloseHoverProps: function (size) {
        let shelfProps = {
            "background-color" : property.$bcalc_bgcolor_6
        };
        return shelfProps;
    },
    fieldFocusProps : function (size) {
        let shelfProps = {
            "outline" : property.$bcalc_focus_1
        };
        return shelfProps;
    }

  };
}