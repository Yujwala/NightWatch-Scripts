//List component View-1 Properties 
module.exports = function(client){
	var brandFile = client.globals.brand,
	brand = require('../../branding/'+brandFile);
	
  return {
   themeBlueShelfProp: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$shelf_background_color,
               "padding" : "48px 0px",
            }
            if(size=="xs"){
                shelfProps['background-color'] = property.$shelf_bg_color_1,
                shelfProps['padding'] = "16px 0px"
              }

        return shelfProps;
    },
    themeWhiteShelfProp: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$primary_1,
               "padding" : "48px 0px",
            };
            if(size=="xs"){
                shelfProps['background-color'] = property.$shelf_bg_color_1,
                shelfProps['padding'] = "16px 0px"
              }

        return shelfProps;
    },


    innerShelfProp: function(size){
        property=brand.props;
        var shelfProps={},
        shelfProps={
            "padding":"0px 0px 30px"
        };
        if(size=="xs"){
            shelfProps['padding'] = "0px 16.003px"
          }

        return shelfProps;
    },

    listShelfProp: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$shelf_background_color,
               "padding" : "16px 0px",
            };
        return shelfProps;
    },

    listRichtextProp: function(size){
        property=brand.props;
        let rteprops=rte_props.PropTextH3(size);
        
        let shelfProps={
            "font-weight":"400",
            "text-align":"center",
              "color": property.$primary_2,
              
        };
        if(size=="xs"){
                shelfProps['line-height'] = "26px",
                shelfProps['font-size'] = "22px",
                shelfProps['font-family'] = property.$font_family_regular,
                shelfProps['font-weight'] = "400",
                shelfProps['text-align'] = "center",
                shelfProps['color'] = property.$primary_2
        }
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps
    },

    

    listElemCountProp: function(size){

        property=brand.props;
        var shelfProps={},
        shelfProps={
            "margin-top":"5px",
            "display":"block",
            "float":"left",
            "width":"33px",
            "height":"24px",
            "padding":"5px 0px 4px",
            "background-color": property.$listItemcount_background_color,
            "color":property.$primary_2,
            "line-height":"24px",
            "font-family":property.$font_family_bold,
            "font-size":"20px",
            "text-align":"center",
            "border-radius":"17px",
        };

        if(size=="xs"){

            shelfProps['margin-top'] ="0px",
            shelfProps['display']="block"
            shelfProps['float']="left",
            shelfProps['width']="33px",
            shelfProps['height']="24px",
            shelfProps['padding']="5px 0px 4px",
            shelfProps['background-color']=property.$listItemcount_background_color,
            shelfProps['color']=property.$primary_2,
            shelfProps['line-height']="24px"
            shelfProps['font-family']=property.$font_family_bold,
            shelfProps['font-size']="20px",
            shelfProps['text-align']="center",
            shelfProps['border-radius']="17px" 
        }
        return shelfProps;
    },

    listElemTitleProp: function(size){

        property=brand.props;
        var shelfProps={},
        shelfProps={
            "margin":"0px",
            "display":"block",
            "height":"48px",
            "padding":"0px 0px 0px 48px",
            "color":property.$listItemtitle_color,
            "line-height":"24px",
            "font-family":property.$font_family_bold,
            "font-size":"20px",
            "text-align":"left",
            "font-weight": "400",
        };
        if(size=="xs"){
            shelfProps['margin']="0px" ,
            shelfProps['display']="block" ,
            shelfProps['height']="48px" ,
            shelfProps['padding']="0px 0px 0px 47px" ,
            shelfProps['color']=property.$listItemtitle_color ,
            shelfProps['line-height']="24px" ,
            shelfProps['font-family']=property.$font_family_bold ,
            shelfProps['font-size']="20px" ,
            shelfProps['text-align']="left" 
            shelfProps['font-weight']="400"
        }
        return shelfProps;
    },

    listElemTitleDesc:function(size)
    {

        property=brand.props;
        var shelfProps={}

        shelfProps={
            "margin":"0px 0px 11px",
            "display":"block",
            "padding":"15px 0px 0px",
            "color":property.$listDescriptionColor,
            "line-height":"18px",
            "font-family":property.$font_family_regular,
            "font-size":"14px",
            "text-align":"left",
            "font-weight": "400",

        }

        if(size=="xs"){

            shelfProps['margin']="0px",
            shelfProps['display']="block",
            shelfProps['padding']="15px 0px 9px",
            shelfProps['color']=property.$listDescriptionColor,
            shelfProps['line-height']="22px",
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['font-size']="16px",
            shelfProps['text-align']="left",
            shelfProps['font-weight']="400"
        }
        return shelfProps;
    },

    
    
    listBGcolorProp1:function(size){
        property=brand.props;
        var shelfProps={}

        shelfProps={
            "background-color":property.$primary_2,
        };
        return shelfProps;

    },

    listBGcolorProp2:function(size){
        property=brand.props;
        var shelfProps={}

        shelfProps={
            "background-color":property.$shelf_bg_color_1,
        };
        return shelfProps;
    },

    listBGcolorProp3:function(size){
        property=brand.props;
        var shelfProps={}

        shelfProps={
            "background-color":property.$listItemBackgroundColor
        };
        return shelfProps;
    },

    listAnchorElemProp:function(size){
        property=brand.props;
        var shelfProps={}

        shelfProps={
            "display":"block",
            "padding":"5px 44px 5px 0px",
            "color": property.$listAnchorElem_color,
            "line-height":"22px",
            "font-family":property.$heroCtaMFont,
            "font-size":"18px",
            "text-align":"left",
            "font-weight": "400",
            
        }
        
        return shelfProps;
    },


    listAnchorArrowProp:function(size){
        var shelfProps={};
        shelfProps= {

            "padding" :property.$listAnchorElemRightArrow_padding,
            "font-family":"nw-icons",
            "font-size":"32px",
            "line-height":"1px",
            "z-index":"9"
        }

        if(size=="xs"){
            
            shelfProps['padding']="0px",
            shelfProps['font-size']="27px"
        }
        return shelfProps;
    },

    listBorderRadiusProp:function(size){
       var shelfProps={} 
        shelfProps={
            "border-radius": "8px"
        }
        return shelfProps;
         
    },

   


        ///////////////////List View 2 Properties////////////////////////


        listCompView_2_Prop:function(size){
            var shelfProps={}
             shelfProps={
                "width":"880px",
                "margin":"0px",
                "float":"none",
                "padding":"0px"

            } 
            if(size=='xs'){

                shelfProps['width']="415px"
            }
            return shelfProps;
        },

        listComponentlogoProp_2:function(size){
            var shelfProps={};
            shelfProps={

                "width":"158px",
                "height":"78px",
                "border-radius":"8px",
                "margin":"0px",
            }

            if(size=='xs'){
                shelfProps['width']="112px",
                shelfProps['height']="71.9219px",
                shelfProps['margin']="2.03125px 0px 2.04688px"
            }
            return shelfProps;
        },
        listComponentDescriptionProp_2:function(size){
            var shelfProps={};
            shelfProps={
                "width":"117px",
                "padding":"8px 15px 15px",
                "height":"36px",
                "float":"left",
                "font-family":property.$font_family_regular,
                "font-size":"14px",
                "color":property.$primary_1,
                "line-height":"18px"
            }

            if(size=='xs'){

                shelfProps['width']="87px",
                shelfProps['padding']="12px 6px 12px 7px",
                shelfProps['height']="78px"
            }
            return shelfProps;
        },

        listComponentRetailvalProp_2:function(size){
            var shelfProps={};
            shelfProps={
                "width":"59px",
                "height":"59px",
                "color":property.$primary_1,
                "padding":"0px",
                "line-height":"13px",
                "font-size":"13px",
                "font-family":property.$listView3RetailValFontFamily,
                "margin":"0px"
 
        }  

        if(size=='xs'){

            shelfProps['width']="49px",
            shelfProps['height']="78px"
        }
            return shelfProps;
    },

    listComponentRetailNumProp_2: function(size){
        var shelfProps={}
        shelfProps={
            "font-size":"24px",
            "line-height":"29px",
            "font-family": property.$font_family_regular,
            "margin":"0px",
            "padding":"0px",
            "display":"inline-block",
            "color":property.$primary_2
        }
            return shelfProps;
    },
/////////////////////////  //List component View-3 Properties  ///////////////////

listCompView_3_Prop:function(size){
    var shelfProps={} 
     shelfProps={
         "margin": "0px",
         "padding":"0px"
     }
     return shelfProps;         
 },

 listRetailerNameProp:function(size){

    var shelfProps={};
    shelfProps={

        "margin-left":"15px",
        "padding" :"12px 99px 3px 0px",
        "height":"40px",
        "font-size":"16px",
        "line-height":"20px",
        "font-family":property.$font_family_regular,
        "color": property.$listView3RetNameCol,
        
    }
    if(size=='xs'){
        shelfProps['height']="55px",
        shelfProps['padding']="12px 99px 0px 0px"
    }
    return shelfProps;
 },
 listRetailerValueProp:function(size){

    var shelfProps={}
    shelfProps={

        "padding-top":"0px",
        "background-color":property.$listView3RetValBGcol,
        "font-size":"24px",
        "font-family":"RNHouseSansRegular, sans-serif",
        "line-height":"29px",
        "color":property.$primary_2
    }

    if(size=='xs'){
        shelfProps['font-size']="22px",
        shelfProps['line-height']="27px"
    }
    return shelfProps;
 },

 listRetailerLogoProp:function(size){

    var shelfProps={};
    shelfProps={
        "height":"70px",
        "width":"109px",
        "margin":"0px 15px 57px 16px",
        "padding":"0px",
        "border-radius":"6px",
        "float":"left"
    }
    if(size=='xs'){
        shelfProps['width']="96px",
        shelfProps['margin']="0px 0px 57px 15px"
    }
    return shelfProps;
 },

 listRetailerDescriptionProp:function(size){
    var shelfProps={},
    shelfProps={
        "margin":"0px 26px 16px 0px",
        "font-size":"14px",
        "font-family":property.$font_family_regular,
        "color":property.$listView3RetNameCol,
        "line-height":"16px",
        "height":"64px",
        "padding":"3px 0px",

    }

    if(size=='xs'){
        shelfProps['margin']="0px 16px 16px 0px"
    }
    return shelfProps;
 },

 listcompAnchorElementProp:function(size){

    var shelfProps={};
    shelfProps={

        "line-height":"17px",
        "color":property.$listAnchorElem_color,
        "display":"inline-block",
        "font-family": property.$font_family_regular,
        "padding":"0px 31px 0px 0px",
        "font-size":"14px",
        "margin":"0px"

    }

    if(size=='xs'){
        shelfProps['font-size']="16px",
        shelfProps['margin']="7px 0px 0px"
    }
    return shelfProps;
 },

 listcompAnchorArrow:function(size){

    var shelfProps={};
     shelfProps={
        "font-family":"nw-icons",
        "font-size":"23px",
        "top":"0px",
        "right":"0px"
     }

     if(size=='xs'){
         shelfProps['font-size']="23px",
         shelfProps['margin']="0px"
     }
     return shelfProps;
 },

    /////////////List Component View 4 Properties ///////////////

    listCompView4ulProp:function(size){
        var shelfProps={}
        shelfProps={
             "width":"903px",
             "margin":"-12px",
             "float":"left",
             "padding":"0px"

        } 

        if(size=='xs'){
            shelfProps['width']="auto",
            shelfProps['margin']='0px auto',
            shelfProps['float']="none"
        }
        return shelfProps;
    },

    listCompView4liProp:function(size){
        var shelfProps={}
        shelfProps={
             "width":"277px",
             "height":"206px",
             "margin":"12px",
             "float":"left",
             "border-radius":"8px",
             "padding":"0px",
             "background-color":property.$listView4ListItemBGcolor,
        } 

        if(size=='xs'){

            shelfProps['width']="288px",
            shelfProps['height']="190px",
            shelfProps['margin']="0px auto 16px",
            shelfProps['float']="none"
        }
        return shelfProps;
    },

    
    listCompView4WrapperCashbackRateProp:function(size){
        var shelfProps={}
        shelfProps={
          
            "width":"89px",
            "height":"55px",
            "color":property.$primary_1,
            
        } 
        return shelfProps;
    },

    
    listCompView4WrapperCashbackRateNumProp:function(size){
        var shelfProps={}
        shelfProps={
             "padding-top":"11px",
             "color":property.$primary_2,
             "font-size":"24px",
             "font-family":property.$font_family_regular,
             "line-height":"29px"

        } 

        if(size=='xs'){
            shelfProps['padding-top']="10px"
        }
        return shelfProps;
    },
    
    listCompView4WrapperRetailerlogoProp:function(size){
        var shelfProps={}
        shelfProps={
             "width":"208px",
             "height":"80px",
             "margin":"0px auto 13px",
             "padding":"0px",

        } 

        if(size=='xs'){
            shelfProps['margin']="0px auto 9px"
        }
        return shelfProps;
    },
    
    listCompView4WrapperAnchorProp:function(size){
        var shelfProps={}
        shelfProps={
             "font-size":"14px",
             "color":property.$listAnchorElem_color,
             "display":"inline-block",
             "line-height":"17px",
             "font-family":property.$font_family_regular,
             "padding-right":"31px"
        } 

        if(size=='xs'){
            shelfProps['font-size']="13px",
            shelfProps['line-height']="16px"
        }

        return shelfProps;
    },
    
    listCompAnchorArrowProp:function(size){
        var shelfProps={}
        shelfProps={
            "font-size":"21px",
            "color":property.$listView4AnchorElem_color,
            "font-family":"nw-icons"   
        } 
        return shelfProps;
    }
  };
}
