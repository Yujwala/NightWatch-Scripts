var rte_props = require('../rte/rte_props.js');

//article shelf props
module.exports = function(client){

    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
        rteVerSectionProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },           
            themeBlueVerRteProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },
            themeWhiteVerRteProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },
            themeLightBlueVerRteProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },





            teaserVerContentProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },

            themeBlueVerContentProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },
            themeWhiteVerContentProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },
            themeLightBlueVerContentProps: function(size) {
                property = brand.props;
                let rteprops=rte_props.PropTextfs12(size);
                let shelfProps = { 
                        "text-align":"center",
                    };
                    shelfProps=Object.assign(rteprops);
                    return shelfProps;
            },

        



            


    multTeaserShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$multTeaser_padding
            };
        return shelfProps;
    },

    multTeaserVerShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$multVarTeaser_padding
            };
        return shelfProps;
    },



    themeWhiteShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeWhite_bg
            };
        return shelfProps;
    },
     themeBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeBlue_bg
            };
        return shelfProps;
    },

    themeLightBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeLightBlue_bg
            };
        return shelfProps;
    },

    titleMarginProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom': "17px",
               "padding-bottom" : "0px",
               "font-size" : "22px",
               "line-height" : "26px",
               "font-family" : property.$font_family_regular

            };
            return shelfProps;
    },

    titleHeaderGrpProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               //'margin-bottom': property.$titleHeaderGrp_margin,
               'margin-top': "0px",
               'margin-left': "0px",
               'margin-right': "0px",
               "font-family" : property.$font_family_regular

            };
            return shelfProps;
    },


    vertitleHeaderGrpProps : function(size){
        var shelfProps = {},property = brand.props;
                shelfProps = {
                   'margin-top': "0px",
                   'margin-left': "0px",
                   'margin-right': "0px",
                   "font-family" : property.$font_family_bold
                };
                if(branding.getBrand.get() == "rbs-com/rbs_com.js"||branding.getBrand.get() == "rbs-remembers/rbs_remembers.js"||branding.getBrand.get() == "lombard/lombard.js") {
                        shelfProps["font-family"] = "RNHouseSansRegular, sans-serif"

                }
                return shelfProps;
        },

    titleTextClsProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size': property.$title_fontsize,
               'line-height':property.$title_lineheight,
               "font-family": property.$title_fontfamily
            };
            return shelfProps;
    },
    themeBlueTitleProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$primary_2,
            };
            return shelfProps;
    },
     themeLightBlueTitleProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$themeLightBlue_title_color,
            };
            return shelfProps;
    },
     themeWhiteTitleProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$themeWhite_title_color,
            };
            return shelfProps;
    },
    rteSectionProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
              // 'margin-bottom' : property.$rteSection_margin,
               'padding':"0px",
               'line-height':"20px",
               'font-size' : "14px",
               "font-family" : property.$font_family_regular
            };
            return shelfProps;
    },
    themeBlueRteProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$primary_2,
            };
            return shelfProps;
    },
    themeWhiteRteProps : function(size){
    var shelfProps = {},
    property = brand.props;   
    if(branding.getBrand.get() == "rbs-com/rbs_com.js"||branding.getBrand.get() == "rbs-remembers/rbs_remembers.js")
        {  
            shelfProps["color"] = "rgba(7, 22, 48, 1)";
        }
        else if(branding.getBrand.get() == "lombard/lombard.js")
        {
                shelfProps["color"] = "rgba(102, 102, 102, 1)";
        }
        else if(branding.getBrand.get() == "ulster/ulster.js"||branding.getBrand.get() == "rbs-personal/rbs_personal.js"||branding.getBrand.get() == "rbs-business/rbs_bussiness.js"||branding.getBrand.get() == "rbs-if/rbs_if.js"||branding.getBrand.get() == "ulster-ie/ulster_ie.js")
        {
                shelfProps["color"] = "rgba(10, 47, 100, 1)";
        }
        else if(branding.getBrand.get() == "natwest-personal/natwest_personal.js"||branding.getBrand.get() == "natwest-business/natwest_bussiness.js"||branding.getBrand.get() == "natwest-markets/natwest_markets.js"){
                shelfProps["color"] = "rgba(66, 20, 95, 1)";
       }
        else{
                 shelfProps["color"] = "rgba(5, 152, 160, 1)";
        }
        return shelfProps;
    },

    themeLightBlueRteProps : function(size){
        var shelfProps = {},
        property = brand.props;   
        if(branding.getBrand.get() == "rbs-com/rbs_com.js"||branding.getBrand.get() == "rbs-remembers/rbs_remembers.js")
            {  
                shelfProps["color"] = "rgba(7, 22, 48, 1)";
            }
            else if(branding.getBrand.get() == "lombard/lombard.js")
                {
                shelfProps["color"] = "rgba(102, 102, 102, 1)";
                }
                else if(branding.getBrand.get() == "ulster/ulster.js"||branding.getBrand.get() == "rbs-personal/rbs_personal.js"||branding.getBrand.get() == "rbs-business/rbs_bussiness.js"||branding.getBrand.get() == "rbs-if/rbs_if.js"||branding.getBrand.get() == "ulster-ie/ulster_ie.js")
                {
                        //rbs per, rbs bus,rbs if
                        shelfProps["color"] = "rgba(10, 47, 100, 1)";
                }
                else if(branding.getBrand.get() == "natwest-personal/natwest_personal.js"||branding.getBrand.get() == "natwest-business/natwest_bussiness.js"||branding.getBrand.get() == "natwest-markets/natwest_markets.js"){
                        shelfProps["color"] = "rgba(66, 20, 95, 1)";
               }
            else{
                     shelfProps["color"] = "rgba(5, 152, 160, 1)";
            }
            return shelfProps;
        },


                /*
    themeLightBlueRteProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'color': property.$primary_1,
            };
            return shelfProps;
    },
    */
    gridItemProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'padding-left' : property.$gridItem_Padding,
               'padding-right':"0px"
            };
            return shelfProps;
    },

    gridItemTwoProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'padding-left' : property.$gridTwo_padding,
               'padding-right':"0px"
            };
            return shelfProps;
    },


    teaserHeadProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size':"20px",
               'line-height':"24px",
               'margin': property.$teaserHead_margin,
               "font-family" : property.$font_family_regular,
               "display" : "block"
            };
            return shelfProps;
    },

    themeBlueTHeadProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$primary_2,
            };
            return shelfProps;
    },

    themeWhiteTHeadProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$themeWhite_THead_color,
            };
            return shelfProps;
    },

    themeLightBlueTHeadProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$themeLightBlue_THead_color,
            };
            return shelfProps;
    },

    teaserHeadHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               'font-size':"20px",
               'line-height':"24px",
               'margin': property.$teaserHead_margin,
               "font-family" : property.$font_family_regular,
               "display" : "block"
    };
    return prop;
    },

    themeBlueTHeadHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeBlueTHeadHover_color,

    };
    return prop;
    },

    themeWhiteTHeadHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeWhite_tHead_hover_color,

    };
    return prop;
    },

    themeLightBlueTHeadHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeLightBlueTHeadHover_color,

    };
    return prop;
    },

    teaserHeadMouseDownProps:function(size){
    var prop={},property = brand.props;
    prop={  
               'margin': property.$teaserHead_mousedown_margin,
               'font-size':"20px",
               'line-height':"24px",
               "outline" : "rgb(255, 191, 71) solid 3px",
               "font-family" : property.$font_family_regular,
               "display" : "block"
    };
     if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["outline"] = "rgb(51, 51, 51) none 0px",
                prop["border"] = "2px solid rgb(255, 191, 71)"
    }
    return prop;
    },

    themeBlueTHeadMouseProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$blue_teaserHead_mouse_color            
    };
    return prop;
    },

    themeWhiteTHeadMouseProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$teaserHead_mousedown_color,            
    };
    return prop;
    },

    themeLightBlueTHeadMouseProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$lightBlue_teaserHead_mouse_color,            
    };
    return prop;
    },

    imgWrapProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom': property.$imgWrap_margin
            };
            return shelfProps;
    },



    imgWrapVerProps : function(size){
        var shelfProps = {},property = brand.props;
                shelfProps = {
                   'margin-bottom': property.$imgVerWrap_margin    
                };
                return shelfProps;
        },




    imgClsProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'border-radius' : property.$img_border_radius,
               'margin-bottom': property.$imgCls_margin
            };
            return shelfProps;
    },

    teaserContentProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'line-height' : "20px",
             //  'margin-bottom': property.$teaserContent_margin,
               'font-size' : "14px",
               "font-family" : property.$font_family_regular
            };
            return shelfProps;
    },

    themeBlueContentProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
                "color" : property.$primary_2
            };
            return shelfProps;
    },

    themeWhiteContentProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
                "color" : property.$themeWhite_THead_color
            };
            return shelfProps;
    },

    themeLightBlueContentProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
                "color" : property.$themeLightBlue_THead_color
            };
            return shelfProps;
    },


    ctaWrapProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size' : property.$cta_fontsize,
               'line-height' : "18px",
            //   'padding': property.$ctaWrap_padding,
               "font-family" : property.$font_family_regular,
            };
            comProps = {
                'font-size' : property.$cta_fontsize,
                'line-height' : "22px",
                "font-family" : property.$font_family_regular,
                "margin":"0px" 

            };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                return comProps;
    }
    else{
            return shelfProps;
    }
    },

    themeBlueCtaProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$themeBlue2_cta_color,
            };
            return shelfProps;
    },



    themeBlueVerCtaProps : function(size){
        var shelfProps = {},property = brand.props;
                shelfProps = {
                   "color" : property.$themeBlue1_cta_color,
                };
                return shelfProps;
        },




    themeWhiteCtaProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$secCTA_color,
            };
            return shelfProps;
    },

    themeLightBlueCtaProps : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$themeLightBlue_cta_color,
            };
            return shelfProps;
    },
    
    ctaHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               'font-size' : property.$cta_fontsize,
               'line-height' : "18px",
               'padding': property.$ctaWrap1_padding,
               "margin" : "0px",
               "font-family" : property.$font_family_regular,
    };
    marprop={
        'font-size' : property.$cta_fontsize,
        'padding': property.$ctaWrap1_padding,
        "font-family" : property.$font_family_regular,

    }
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
              return marprop;
    }
    else{
    return prop;
    }
    },



    ctaVerHoverProps:function(size){
        var prop={},property = brand.props;
        prop={  
                   'font-size' : property.$cta_fontsize,
                   'line-height' : "18px",
                  // 'padding': property.$ctaWrap_padding,
                   "margin" : "0px",
                   "font-family" : property.$font_family_regular,
        };
        comProps={
                'font-size' : property.$cta_fontsize,
                   'line-height' : "22px",
                   'padding': "0px 40px 0px 0px",
                   "margin" : "0px",
                   "font-family" : property.$font_family_regular,

        }
        if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                   return comProps;
        }
        else{
                return prop;
        }       
        },





    themeBlueCtaHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeBlue_ctaHover_color,
    };
    return prop;
    },


    themeBlueCtaHoverVerProps:function(size){
        var prop={},property = brand.props;
        prop={  
                   "color" : property.$themeBlue_ctaVerHover_color,
        };
        return prop;
        },




    themeWhiteCtaHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeWhite_cta_hover,
    };
    return prop;
    },




    themeWhiteCtaVerHoverProps:function(size){
        var prop={},property = brand.props;
        prop={  
                   "color" : property.$themeWhite_ctaVer_hover,
        };
        return prop;
        },



    themeLightBlueCtaHoverProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$themeWhite_cta_hover,
    };
    return prop;
    },


    themeLightBlueCtaVerHoverProps:function(size){
        var prop={},property = brand.props;
        prop={  
                   "color" : property.$themeWhite_ctaVer_hover,
        };
        return prop;
        },




    ctaMouseDownProps:function(size){
    var prop={},property = brand.props;
    prop={  
               
    };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["border-radius"] = "0px",
                prop["border"] = "2px solid rgb(255, 191, 71)",
                prop["background-color"] = "rgba(0, 0, 0, 0)"
              
    }
    else{
               prop['font-size'] = property.$cta_fontsize,
               prop['line-height'] = "18px",
               prop['padding']= property.$ctaWrap_padding,
               prop["margin"] = "0px",
               prop["color"] = property.$primary_main,
               prop["font-family"] = property.$font_family_regular,
               prop["background-color"] = 'rgba(255, 191, 71, 1)',
               prop["outline"] = property.$secCTA_focus_outline+" none 0px",
               prop["border-radius"] = property.$ctaMouseDown_borderRad,
               prop["border"] = "0px none "+property.$secCTA_focus_outline
    }
    return prop;
    },

    themeBluectaMouseDownProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$primary_1
    };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["color"] = "rgba(231, 138, 56, 1)"
    }
    return prop;
    },

    themeWhitectaMouseDownProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$primary_main
    };
     if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["color"] = "rgba(168, 55, 40, 1)"
    }
    return prop;
    },


    themeLightBluectaMouseDownProps:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$primary_main
    };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["color"] = "rgba(168, 55, 40, 1)"
    }
    return prop;
    },



    ctaIconProps:function(size){
    var prop={},property = brand.props;
    prop={  
            'font-family': 'nw-icons',
    };
    return prop;
    },

    //Mobile props
    multTeaserShelfProps_Mob: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$multTeaser_padding_mob
            };
        return shelfProps;
    },

    titleTextClsProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size': property.$title_fontsize_mob,
               'line-height':property.$title_lineheight_mob,
               "font-family": property.$title_fontfamily
            };
            return shelfProps;
    },

    titleMarginProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom': "0px",
               "padding-bottom" : "18px",
               "font-size" : "22px",
               "line-height" : "26px",
               "font-family" : property.$font_family_regular

            };
            return shelfProps;
    },

    titleHeaderGrpProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom': property.$titleHeaderGrp_margin_mob,
               'margin-top': property.$titleHeaderGrp_margin_top_mob,
               'margin-left': "0px",
               'margin-right': "0px",
               "font-family" : property.$font_family_regular

            };
           if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js"||branding.getBrand.get() == "rbs-if/rbs_if.js" ||branding.getBrand.get() == "rbs-if/rbs_mac_if.js"||branding.getBrand.get() == "rbs-if/rbs_ie_if.js"||branding.getBrand.get() == "rbs-if/rbs-if-ff.js") {
                shelfProps["margin-left"] = "-2px",
                shelfProps["margin-right"] = "-2px"
    }
            return shelfProps;
    },

    gridItemProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'padding-left' : "0px"
            };
            return shelfProps;
    },

    rteSectionProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'margin-bottom' : property.$rteSection_margin_mob,
               'padding':"0px 0px 13px",
               'line-height':"22px",
               'font-size' : "16px",
               "font-family" : property.$font_family_regular
            };
            return shelfProps;
    },

    teaserHeadProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size':"20px",
               'line-height':"24px",
               'margin': property.$teaserHead_margin_mob,
               "font-family" : property.$font_family_regular,
               "display" : "block"
            };
            return shelfProps;
    },

    teaserHeadMouseDownProps_Mob:function(size){
    var prop={},property = brand.props;
    prop={  
               'margin': property.$teaserHead_mousedown_margin_mob,
               'font-size':"20px",
               'line-height':"24px",
               "outline" : "rgb(255, 191, 71) solid 3px",
               "font-family" : property.$font_family_regular,
               "display" : "block"
    };
     if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["outline"] = "rgb(229, 151, 0) auto 5px"
    }
    return prop;
    },

    themeBlueTHeadMouseProps_Mob:function(size){
    var prop={},property = brand.props;
    prop={  
               "color" : property.$blue_teaserHead_mouse_color_mob            
    };
    return prop;
    },

    ctaWrapProps_Mob : function(size){
    var shelfProps = {},property = brand.props;
            shelfProps = {
               'font-size' : property.$cta_fontsize_mob,
               'line-height' : "22px",
               'padding': property.$ctaWrap_padding_mob,
               "margin" : "3px 0px 0px",
               "font-family" : property.$font_family_regular,
            };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                shelfProps["margin"] = "0px",
                shelfProps["line-height"] = "18px"
    }
            return shelfProps;
    },

    ctaMouseDownProps_mob:function(size){
    var prop={},property = brand.props;
    prop={  
               
    };
    if(branding.getBrand.get() == "lombard/lombard.js"||branding.getBrand.get() == "lombard/lombard_mac.js"||branding.getBrand.get() == "lombard/lombard_ie.js"||branding.getBrand.get() == "lombard/lombard-ff.js") {
                prop["border-radius"] = "0px",
                prop["background-color"] = "rgba(0, 0, 0, 0)",
                prop["margin"] = "0px",
                prop["outline"] = "rgb(229, 151, 0) auto 5px"
    }
    else{
               prop['font-size'] = property.$cta_fontsize_mob,
               prop['line-height'] = "22px",
               prop['padding']= property.$ctaWrap_padding_mob,
               prop["margin"] = "3px 0px 0px",
               prop["color"] = property.$primary_1,
               prop["font-family"] = property.$font_family_regular,
               prop["background-color"] = 'rgba(255, 191, 71, 1)',
               prop["outline"] = property.$secCTA_focus_outline+" none 0px",
               prop["border-radius"] = property.$ctaMouseDown_borderRad,
               prop["border"] = "0px none "+property.$secCTA_focus_outline
    }
    return prop;
    },
};
     

}
