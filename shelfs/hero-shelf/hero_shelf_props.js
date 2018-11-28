module.exports = function(client){

	 //*********************** **************************************/
    //              NW_PER_HERO_SHELF1 and NW_PER_HERO_SHELF5  HERO SHELF    //
    //*********************************************************** */
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
        HeroShelf: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {

                   "padding":"48px 0px 0px",
                   "background-color":property.$heroshelf1_section_bgcolor
                }
                if(size=='xs'){
                    shelfProps['padding']="0px",
                    shelfProps['background-color']=property.$heroshelf1mob_section_bgcolor
                }
            return shelfProps;
        },

        InnerShelf:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "min-height":"389px"
                } 

                if(size=='xs'){
                    shelfProps['min-height']="0px"
                }
                return shelfProps

        },
        shelfHeader:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "display":"block",
                   "padding":"24px 46.8px 6.84px 108px",
                   "margin":"25.2px -108px 2px",
                   "font-family":property.$font_family_bold,
                   "font-size":"36px",
                   "line-height":"40px",
                   "color":property.$heroshelf1_header_color
                } 

                if(size=='xs'){
                    shelfProps['padding']="16px 16px 4px",
                    shelfProps['margin']="0px",
                    shelfProps['font-size']="32px",
                    shelfProps['line-height']="36px"
                    shelfProps['font-family']=property.$primary_cta_font,
                    shelfProps['color']=property.$heroshelf1_header_color
                }
                return shelfProps

        },

        signPost:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "display":"block",
                   "padding":"1.2px 28px 5.6px 60px",
                   "margin":"2px -60px 14px",
                   "font-family":property.$font_regular,
                   "font-size":"20px",
                   "line-height":"24px",
                   "color":property.$primary_1
                } 
                if(size=='xs'){

                    shelfProps['display']="block",
                    shelfProps['padding']="0px 16px 26px",
                    shelfProps['margin']="0px",
                    shelfProps['font-family']=property.$font_regular,
                    shelfProps['font-size']="22px",
                    shelfProps['line-height']="26px",
                    shelfProps['color']=property.$primary_1
                    

                }

                
                return shelfProps
        },

        ButtonCTA:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "display":"block",
                   "padding":"13px 18px 9px 20px",
                   "margin":"0px 0px 18px",
                   "font-family":property.$primary_cta_font,
                   "font-size":"18px",
                   "line-height":"24px",
                   "background-color":property.$heroshelf1_button_color,
                   "color":property.$primary_2,
                   "border-radius":"5px"

                } 
                if(size=='xs'){
                    shelfProps['padding']="10px 18px 12px 20px",
                    shelfProps['margin']="10px 21px 16px 0px",
                    shelfProps['font-family']=property.$primary_cta_font,
                    shelfProps['font-size']="18px",
                    shelfProps['line-height']="24px",
                    shelfProps['background-color']=property.$heroshelf1_button_color,
                    shelfProps['color']=property.$primary_2,
                    shelfProps['border-radius']="5px"

               
                }
                return shelfProps
        },

       

        linkCTA:function(size){
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "display":"block",
                   "padding":"8px 42px 8px 0px",
                   "margin":"1.8px 21.6px 1.8px 0px",
                   "font-family":property.$font_regular,
                   "font-size":"18px",
                   "line-height":"18px",
                   "color":property.$heroshelf1_header_color
                } 

                if(size=='xs'){
                    shelfProps['padding']="3px 42px 3px 0px",
                    shelfProps['margin']="0px",
                    shelfProps['line-height']="22px",
                    shelfProps['font-family']=property.$font_regular,
                    shelfProps['font-size']="18px",
                    shelfProps['color']=property.$heroshelf1_header_color
               
                }
                return shelfProps
        },

        footlineText:function(size){
            property = brand.props;
           var rteprops=rte_props.PropTextfs12(size);
            var shelfProps = {},
                shelfProps = {
                   "padding":"0px",
                   "margin":"0px",
                   "color":property.$primary_1
                } 

                if(size=='xs'){
                    shelfProps['padding']="0px",
                    shelfProps['font-size']="14px",
                    shelfProps['line-height']="20px"
                    shelfProps['color']=property.$primary_1
                }
                shelfProps=Object.assign(rteprops,shelfProps)
                return shelfProps

        },

        shelfListItems:function(size){
     
            var shelfProps = {},
                shelfProps = {
                   "display":"inline",
                   "padding":"0px",
                   "font-family":property.$font_family_regular,
                   "font-size":"13px",
                   "line-height":"13px",
                   "color":property.$heroshelf1_header_color
                } 
                if(size =='xs'){

                    shelfProps['display']="inline",
                    shelfProps['padding']="0px",
                    shelfProps['font-family']=property.$font_family_regular,
                    shelfProps['font-size']="13px",
                    shelfProps['line-height']="13px",
                    shelfProps['color']=property.$heroshelf1_header_color
                    
                }
                return shelfProps
        },

     //*********************** **************************************/
    //              NW_PER_HERO_SHELF12   Homelog Template   //
    //*********************************************************** */

    shelfHeader12:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"24px 46.8px 6.84px 108px",
               "margin":"25.2px -108px 2px",
               "font-family":property.$font_family_bold,
               "font-size":"36px",
               "line-height":"40px",
               "color":property.$heroshelf1_header_color
            } 

            if(size=='xs'){
                shelfProps['padding']="0px 0px 16px",
                shelfProps['margin']="0px",
                shelfProps['font-size']="36px",
                shelfProps['line-height']="46px"
                shelfProps['font-family']=property.$primary_cta_font,
                shelfProps['color']=property.$heroshelf1_header_color
            }
            return shelfProps

    },
    signPost12:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"1.2px 28px 5.6px 60px",
               "margin":"2px -60px 14px",
               "font-family":property.$font_family_regular,
               "font-size":"20px",
               "line-height":"24px",
               "color":property.$primary_1
            } 
            if(size=='xs'){

                shelfProps['display']="block",
                shelfProps['padding']="0px 0px 24px",
                shelfProps['margin']="0px",
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px",
                shelfProps['color']=property.$primary_1
            }
            return shelfProps
    },

    ButtonCTA12:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"16px 26px",
               "margin":"0px 0px 3px",
               "font-family":property.$primary_cta_font,
               "font-size":"18px",
               "line-height":"22px",
               "background-color":property.$heroshelf1_button_color,
               "color":property.$primary_2,
               "border-radius":"5px"

            } 
            if(size=='xs'){
                shelfProps['padding']="10px 18px 12px 20px",
                shelfProps['margin']="10px 21px 16px 0px"
                shelfProps['font-family']=property.$primary_cta_font
                shelfProps['font-size']="18px"
                shelfProps['line-height']="22px"
                shelfProps['background-color']=property.$heroshelf1_button_color
                shelfProps['color']=property.$primary_2
                shelfProps['border-radius']="5px"
           
            }
            return shelfProps
    },
    HeroShelf12:function(size){
        property = brand.props;

        var shelfProps = {},
            shelfProps = {
               "padding":"32px 0px 32px 48px",
               "background-color":property.$shelf_bg_color_2
            }
            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['background-color']=property.$heroshelf1mob_section_bgcolor
            }

            return shelfProps
    },


     HeroShelf12HeaderTilte:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={
                "font-family": property.$font_family_bold,
                "color": property.$heroshelf1_header_color,
                "font-size": "20px",
                "line-height": "24px"
            }

            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']= property.$heroshelf1_header_color,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px"
                
            }
            
            return shelfProps

     },

     HeroShelf12BottomText:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color": property.$primary_1,
                "font-size": "14px",
                "line-height": "20px"
            }
            if(size =='xs'){

                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$hsbottomtext,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
                
            }
            return shelfProps

     },

     HeroShelf12Logmessage:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$primary_1,
                "font-size": "14px",
                "line-height": "20px"
            }
            if(size =='xs'){

                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
                
            }
            return shelfProps

     },

     HeroShelf12WhiteBox:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "border": property.$whitebox_border,
                "background-color":property.$primary_2,
                "border-radius": "6px",   
            }
            if(size =='xs'){
                shelfProps['border']=property.$whitebox_border,
                shelfProps['background-color']=property.$primary_2,
                shelfProps['border-radius']="6px"
                
            }
            return shelfProps

     },

     HeroShelf12WhiteBoxTitle:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={
                "font-family": property.$font_family_bold,
                "color":property.$primary_1,
                "font-size": "20px",
                "line-height": "24px"
            }

            if(size =='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px"
                
            }
            return shelfProps

     },

     HeroShelf12WhiteBoxContent:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$primary_1,
                "font-size": "16px",
                "line-height": "20px"
            }
            if(size =='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="16px",
                shelfProps['line-height']="22px"
                
            }

            return shelfProps

     },

     HeroShelf12CTA:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$primary_cta_font,
                "color":property.$primary_2,
                "font-size": "18px",
                "line-height": "22px"
            }
            if(size =='xs'){
                shelfProps['font-family']=property.$primary_cta_font,
                shelfProps['color']=property.$primary_2,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="24px"
                
            }

            return shelfProps

     },


     //*********************** *************************************************/
    //              NW_PER_HERO_SHELF8 and NW_PER_HERO_SHELF9 (SHELF MASK)     //
    //************************************************************************/

     HeroShelf8:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding":"28px 0px 0px",
               "background-color":property.$box_bgcolor,
            }
            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['background-color']=property.$heroshelf1mob_section_bgcolor
            }
        return shelfProps;
    },


    HeroShelf8Text:function(size){
        property = brand.props
        var rteprops=rte_props.PropTextfs12(size);
        var shelfProps={}
            shelfProps={

                "padding":"0px 26px 0px 0px",
                "margin":"0px",
                "color":property.$primary_1
            }
            if(size=='xs'){
                shelfProps['padding']="3px 0px 16px",
                shelfProps['margin']="0px",
                shelfProps['color']=property.$primary_1
                shelfProps['line-height']="18px",
                shelfProps['font-size']="14px"
            }
            shelfProps=Object.assign(rteprops,shelfProps)
            return shelfProps

     },
    HeroShelf8FooterText:function(size){
        property = brand.props
       var rteprops=rte_props.PropTextfs12(size);
        var shelfProps = {},
            shelfProps = {
               "padding":"3px 0px 0px",
               "margin":"0px",
               "color":property.$primary_1
            } 

            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['margin']="0px",
                shelfProps['color']=property.$primary_1,
                shelfProps['line-height']="20px",
                shelfProps['font-size']="14px"
           
            }

            shelfProps=Object.assign(rteprops,shelfProps)
            return shelfProps

    },

    HeroShelf8Header:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"0px 0px 6px 108px",
               "margin":"18px 0px 5px -108px",
               "font-family":property.$font_family_bold,
               "font-size":"36px",
               "line-height":"39.96px",
               "color":property.$heroshelf1_header_color
            } 

            if(size=='xs'){
                shelfProps['display']="inline-block",
                shelfProps['padding']="16px 16px 4px",
                shelfProps['margin']="8px 0px 21px",
                shelfProps['font-family']=property.$primary_cta_font,
                shelfProps['font-size']="32px",
                shelfProps['line-height']="36px",
                shelfProps['color']=property.$heroshelf1_header_color
            }
            return shelfProps

    },

    HeroShelf8Signpost:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"1px 28px 5px 60px",
               "margin":"5px -60px 10px",
               "font-family":property.$font_regular,
               "font-size":"20px",
               "line-height":"24px",
               "color":property.$primary_1
            } 
            if(size=='xs'){
                shelfProps['display']="block",
                shelfProps['padding']="0px 16px 22px",
                shelfProps['margin']="0px",
                shelfProps['font-family']=property.$font_regular,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px",
                shelfProps['color']=property.$primary_1
            }

            
            return shelfProps
    },

    HeroShelf8Button:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"13px 18px 9px 20px",
               "margin":"0px 0px 16px",
               "font-family":property.$primary_cta_font,
               "font-size":"18px",
               "line-height":"24px",
               "background-color":property.$heroshelf1_button_color,
               "color":property.$primary_2,
               "border-radius":"5px"

            } 
            if(size=='xs'){
                shelfProps['display']="block",
                shelfProps['padding']="10px 18px 12px 20px",
                shelfProps['margin']="0px 21px 0px 0px",
                shelfProps['font-family']=property.$primary_cta_font,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="24px",
                shelfProps['color']=property.$primary_2,
                shelfProps['border-radius']="5px"

            }
            return shelfProps
    },

    HeroShelfLink:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"8px 42px 8px 0px",
               "margin":"0px 21px 1px 0px",
               "font-family":property.$font_regular,
               "font-size":"18px",
               "line-height":"18px",
               "color":property.$heroshelf1_header_color
            } 

            if(size=='xs'){
                shelfProps['padding']="3px 42px 3px 0px",
                shelfProps['margin']="0px",
                shelfProps['font-family']=property.$font_regular,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="22px",
                shelfProps['color']=property.$heroshelf1_header_color,
                shelfProps['display']="block"
           
            }
            return shelfProps
    },


     //*********************** *************************************************/
    //              NW_PER_HERO_SHELF3  REBRAND HERO SHELF    //
    //************************************************************************/

    RebrandHS: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding":"0px",
               "background-color":property.$primary_1,
            }
            if(size=='xs'){
                shelfProps['padding']="30px 16px 16px",
                shelfProps['background-color']=property.$primary_1
            }
        return shelfProps;
    },

    RebrandInnerShelf:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "min-height":"0px"
            } 

            if(size=='xs'){
                shelfProps['min-height']="0px"
            }
            return shelfProps

    },


    RebrandHSTitle:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"0px",
               "margin":"51px 0px 14px",
               "font-family":property.$font_family_regular,
               "font-size":"36px",
               "line-height":"40px",
               "color":property.$primary_2
            } 

            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['margin']="0px 0px 10px",
                shelfProps['font-size']="36px",
                shelfProps['line-height']="40px",
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_2
            }
            return shelfProps

    },

    RebrandHSContent:function(size){
        property = brand.props
        var shelfProps = {},
            shelfProps = {
               "padding":"0px",
               "margin":"0px 0px 0px 48px",
               "color":property.$primary_2,
               "font-size":"13px",
               "line-height":"13px",
            } 

            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['margin']="0px",
                shelfProps['color']=property.$primary_2
                shelfProps['font-size']="13px",
                shelfProps['line-height']="13px"
            }
            return shelfProps

    },


    RebrandHSButton:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"12px 15px",
               "margin":"0px",
               "font-family":property.$font_family_regular,
               "font-size":"18px",
               "line-height":"22px",
               "background-color":property.$linkColor,
               "color":property.$primary_2,
               "border-radius":"0px"

            } 
            if(size=='xs'){
                shelfProps['padding']="12px 15px",
                shelfProps['display']="block",
                shelfProps['margin']="0px",
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="22px",
                shelfProps['background-color']=property.$linkColor,
                shelfProps['color']=property.$primary_2,
                shelfProps['border-radius']="0px"

           
            }
            return shelfProps
    },

    RebrandHSlink:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"0px 42px 0px 0px",
               "margin":"0px 0px 51.8px",
               "font-family":property.$font_family_regular,
               "font-size":"18px",
               "line-height":"22px",
               "color":property.$primary_2
            } 

            if(size=='xs'){
                shelfProps['padding']="3px 42px 3px 0px",
                shelfProps['margin']="0px",
                shelfProps['padding']="0px 42px 0px 0px",
                shelfProps['line-height']="22px",
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['font-size']="18px",
                shelfProps['color']=property.$primary_2,
                shelfProps['display']="block"
            }
            return shelfProps
    },

    RebrandHSLegalcopy:function(size){
        property = brand.props
       var rteprops=rte_props.PropTextPara(size);
        var shelfProps = {},
            shelfProps = {
               "padding":"0px",
               "margin":"0px",
               "color":property.$primary_2,
               "line-height":"16px"
            } 

            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['margin']="0px",
                shelfProps['line-height']="16px"
                shelfProps['color']=property.$primary_2
                shelfProps['font-size']="12px"
                

            }
            shelfProps=Object.assign(rteprops,shelfProps)
            return shelfProps

    },


    //*********************** *************************************************/
    //              NW_PER_HERO_SHELF4 , NW_PER_HERO_SHELF6 ,NW_PER_HERO_SHELF7 REBRAND MAIN SHELF     //
    //************************************************************************/


RebrandHS4: function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "padding":"0px",
           "background-color":property.$primary_1,
        }
        if(size=='xs'){
            shelfProps['padding']="30px 16px 16px",
            shelfProps['background-color']=property.$primary_1
        }
    return shelfProps;
},


RebrandHS4InnerShelf:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "min-height":"0px"
        } 

        if(size=='xs'){
            shelfProps['min-height']="0px"
        }
        return shelfProps

},


RebrandHS4Title:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"0px",
           "margin":"68px 0px 10px",
           "font-family":property.$font_family_regular,
           "font-size":"36px",
           "line-height":"40px",
           "color":property.$primary_2
        } 

        if(size=='xs'){
            shelfProps['padding']="0px",
            shelfProps['margin']="0px 0px 10px",
            shelfProps['font-size']="36px",
            shelfProps['line-height']="40px",
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['color']=property.$primary_2,
            shelfProps['display']="block"
        }
        return shelfProps

},
        

RebrandHS4Content:function(size){
    property = brand.props
    var shelfProps = {},
        shelfProps = {
           "padding":"0px",
           "margin":"0px 0px 0px 48px",
           "color":property.$primary_2,
           "font-size":"13px",
           "line-height":"13px",
        } 

        if(size=='xs'){
            shelfProps['padding']="0px",
            shelfProps['margin']="0px",
            shelfProps['color']=property.$primary_2
            shelfProps['font-size']="13px",
            shelfProps['line-height']="13px"
        }
        return shelfProps

},


RebrandHS4Button:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"12px 15px",
           "margin":"0px",
           "font-family":property.$font_family_regular,
           "font-size":"18px",
           "line-height":"22px",
           "background-color":property.$linkColor,
           "color":property.$primary_2,
           "border-radius":"0px"

        } 
        if(size=='xs'){
            shelfProps['padding']="12px 15px",
            shelfProps['display']="block",
            shelfProps['margin']="0px",
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['font-size']="18px",
            shelfProps['line-height']="22px",
            shelfProps['background-color']=property.$linkColor,
            shelfProps['color']=property.$primary_2,
            shelfProps['border-radius']="0px"

       
        }
        return shelfProps
},

RebrandHS4link:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"0px 42px 0px 0px",
           "margin":"0px 0px 32.8px",
           "font-family":property.$font_family_regular,
           "font-size":"18px",
           "line-height":"22px",
           "color":property.$primary_2
        } 

        if(size=='xs'){
            shelfProps['padding']="0px 42px 0px 0px",
            shelfProps['display']="block",
            shelfProps['margin']="0px",
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['font-size']="18px",
            shelfProps['line-height']="22px",
            shelfProps['color']=property.$primary_2
            
        }
        return shelfProps
},

RebrandHS4Legalcopy:function(size){
    property = brand.props
   var rteprops=rte_props.PropTextPara(size);
    var shelfProps = {},
        shelfProps = {
           "padding":"0px",
           "margin":"0px",
           "color":property.$primary_2,
           "line-height":"16px"
        } 

        if(size=='xs'){
            shelfProps['padding']="0px",
            shelfProps['margin']="0px",
            shelfProps['line-height']="16px",
            shelfProps['font-size']="12px"
            shelfProps['color']=property.$primary_2
        }
        shelfProps=Object.assign(rteprops,shelfProps)
        return shelfProps

},

RebrandHS4listitems:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"inline",
           "padding":"0px",
           "font-family":property.$font_family_regular,
           "font-size":"12px",
           "line-height":"20px",
           "color":property.$primary_2
        } 
        if(size=='xs'){
            shelfProps['padding']="0px",
            shelfProps['line-height']="20px"
            shelfProps['color']=property.$primary_2,
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['font-size']="12px",
            shelfProps['display']="inline"
        }
        return shelfProps
},




    //*********************** *************************************************/
    //                   NW_PER_HERO_SHELF2                                   //
    //************************************************************************/



    HERO_SHELF2: function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "padding":"0px",
           "background-color":property.$shelf_bg_color_2,
        }
        if(size=='xs'){
            shelfProps['padding']="0px",
            shelfProps['background-color']=property.$primary_2
        }
    return shelfProps;
},


HERO_SHELF2_Innershelf:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "min-height":"389px"
        } 

        if(size=='xs'){
            shelfProps['min-height']="0px"
        }
        return shelfProps

},
HERO_SHELF2_shelfHeader:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"0px",
           "margin":"0px",
           "font-family":property.$font_regular,
           "font-size":"36px",
           "line-height":"44px",
           "color":property.$primary_1
        } 
        if(size=='xs'){
            shelfProps['padding']="0px 0px 16px",
            shelfProps['margin']="0px",
            shelfProps['font-size']="36px",
            shelfProps['line-height']="46px",
            shelfProps['font-family']=property.$font_regular,
            shelfProps['display']="block"
            shelfProps['color']=property.$primary_1
        }
        return shelfProps

},

HERO_SHELF2_signPost:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"0px",
           "margin":"16px 0px 24px",
           "font-family":property.$font_regular,
           "font-size":"16px",
           "line-height":"22px",
           "color":property.$primary_1
        } 
        if(size=='xs'){
            shelfProps['padding']="0px 0px 24px",
            shelfProps['margin']="0px",
            shelfProps['font-size']="16px",
            shelfProps['line-height']="22px",
            shelfProps['font-family']=property.$font_regular,
            shelfProps['display']="block"
            shelfProps['color']=property.$primary_1
        }

        
        return shelfProps
},

HERO_SHELF2_ButtonCTA:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"16px 0px",
           "margin":"0px",
           "font-family":property.$font_regular,
           "font-size":"18px",
           "line-height":"22px",
           "background-color":property.$heroshelf1_button_color,
           "color":property.$primary_2,
           "border-radius":"5px"

        } 
        if(size=='xs'){
            shelfProps['padding']="16px 0px",
            shelfProps['display']="block",
            shelfProps['margin']="0px",
            shelfProps['font-family']=property.$font_regular,
            shelfProps['font-size']="18px",
            shelfProps['line-height']="22px",
            shelfProps['background-color']=property.$heroshelf1_button_color,
            shelfProps['color']=property.$primary_2,
            shelfProps['border-radius']="5px"
       
        }
        return shelfProps
},

HERO_SHELF2_linkCTA:function(size){
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
           "display":"block",
           "padding":"5px 42px 5px 0px",
           "margin":"0px",
           "font-family":property.$font_regular,
           "font-size":"18px",
           "line-height":"22px",
           "color":property.$heroshelf1_header_color
        } 

        if(size=='xs'){
            shelfProps['padding']="0px 42px 0px 0px",
            shelfProps['margin']="0px",
            shelfProps['line-height']="32px",
            shelfProps['font-family']=property.$font_regular,
            shelfProps['font-size']="18px",
            shelfProps['color']=property.$heroshelf1_header_color,
            shelfProps['display']="block"
           
       
        }
  
      return shelfProps



     
},
      //*************************************************************************//
     //                        NW_PER_HERO_SHELF10                              //
    //*************************************************************************//

    HERO_SHELF10:function(size){
        property = brand.props;

        var shelfProps = {},
            shelfProps = {
               "padding":"32px 0px 32px 48px",
               "background-color":property.$shelf_bg_color_2
            }

            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['background-color']=property.$heroshelf1mob_section_bgcolor
                
            }
      
            return shelfProps
    },

    HERO_SHELF10_LOGMSG:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": "RNHouseSans-Regular, sans-serif",
                "color":property.$primary_1,
                "font-size": "14px",
                "line-height": "20px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
            }

            return shelfProps

     },

     HERO_SHELF10_HEADERTITLE:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$heroshelf1_header_color,
                "font-size": "20px",
                "line-height": "24px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$heroshelf1_header_color,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px"
            }
            return shelfProps

     },
     HERO_SHELF10_BODY:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$primary_1,
                "font-size": "18px",
                "line-height": "22px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="22px"
            }
            return shelfProps

     },
     HERO_SHELF10_BOX:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "border": property.$box_border,
                "background-color":property.$box_bgcolor,
                "border-radius": "0px",
                
            }
            if(size=='xs'){
                shelfProps['border']=property.$box_border,
                shelfProps['background-color']=property.$box_bgcolor,
                shelfProps['border-radius']="0px"
               
            }
            return shelfProps

     },

     HERO_SHELF10_BOXTEXT:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$primary_1,
                "font-size": "14px",
                "line-height": "20px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },

     HERO_SHELF10_BOTTOMTITLE:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$primary_1,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="15.6px"
               
            }
            return shelfProps

     },

     HERO_SHELF10_BOTTOMTEXT:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$hsbottomtext,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$hsbottomtext,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"        
            }
            return shelfProps

     },


     //*************************************************************************//
     //                        NW_PER_HERO_SHELF11                             //
    //*************************************************************************//


    HERO_SHELF11:function(size){
        property = brand.props;

        var shelfProps = {},
            shelfProps = {
               "padding":"32px 0px 32px 48px",
               "background-color":property.$shelf_bg_color_2
            }
            if(size=='xs'){
                shelfProps['padding']="0px",
                shelfProps['background-color']=property.$heroshelf1mob_section_bgcolor
               
            }
            return shelfProps
    },

    HERO_SHELF11_LOGMSG:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$hs11_font_regular,
                "color":property.$primary_1,
                "font-size": "14px",
                "line-height": "20px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },

     HERO_SHELF11_HEADERTITLE:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$heroshelf1_header_color,
                "font-size": "20px",
                "line-height": "24px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$heroshelf1_header_color,
                shelfProps['font-size']="22px",
                shelfProps['line-height']="26px"
               
            }
            return shelfProps

     },

     HERO_SHELF11_BOTTOMBLOCK:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$hs11_bottomblock_color,
                "font-size": "20px",
                "line-height": "20px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$hs11_bottomblock_color,
                shelfProps['font-size']="20px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },

     HERO_SHELF11_RISKBOTTOMTEXT:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$hsbottomtext,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$hsbottomtext,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },
     HERO_SHELF11_BOTTOMTEXT:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_regular,
                "color":property.$hsbottomtext,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_regular,
                shelfProps['color']=property.$hsbottomtext,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },
     

     HERO_SHELF11_CTA:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "display":"block",
               "padding":"16px 26px",
               "margin":"0px 0px 3px",
               "font-family":property.$primary_cta_font,
               "font-size":"18px",
               "line-height":"22px",
               "background-color":property.$heroshelf1_button_color,
               "color":property.$primary_2,
               "border-radius":"5px"
    
            } 
            if(size=='xs'){
                shelfProps['padding']="13px 18px 14px 20px",
                shelfProps['display']="block",
                shelfProps['margin']="0px 0px 23px",
                shelfProps['font-family']=property.$primary_cta_font,
                shelfProps['font-size']="18px",
                shelfProps['line-height']="24px",
                shelfProps['background-color']=property.$heroshelf1_button_color,
                shelfProps['color']=property.$primary_2,
                shelfProps['border-radius']="5px"
           
            }
            return shelfProps
    },

    HERO_SHELF11_BOTTOMTITLE:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family": property.$font_family_bold,
                "color":property.$primary_1,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },

     HERO_SHELF11_BOTTOMTITLE:function(size){
        property = brand.props;
        var shelfProps={}
            shelfProps={

                "font-family":property.$font_family_bold,
                "color":property.$primary_1,
                "font-size": "12px",
                "line-height": "16px"
            }
            if(size=='xs'){
                shelfProps['font-family']=property.$font_family_bold,
                shelfProps['color']=property.$primary_1,
                shelfProps['font-size']="14px",
                shelfProps['line-height']="20px"
               
            }
            return shelfProps

     },

};



    }






