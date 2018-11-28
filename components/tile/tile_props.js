module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
	
  return {
        tileLayoutProp: function(size) {
           let shelfProps = {
                    "padding": "32px 0px 17px",
                    "background-color":property.$tileLayoutBgColor,
                    "background-attachment":"scroll"
                    
                }
                if(size==="xs"){
                    shelfProps['background-color'] = property.$tileLayoutBgColor,
                    shelfProps['padding'] = "18px 16px 8px",
                    shelfProps['background-attachment'] = "scroll"
                    } ;

            return shelfProps;
      },
      
      tileHeadProp: function(size) {
        let shelfProps = {
                "padding": "10px 0px 19px 48px"
                }
                if(size==="xs"){                    
                    shelfProps['padding'] = "3.125px 0px 14px"                    
                    }; 

        return shelfProps;
  },

  tileHeadTextProp: function(size) {
       let shelfProps = {
            "padding": "0px",
            "color" :property.$headTextColor,
            "font-size":"28px",
            "font-family":property.$headTextff,
            "line-height":"32px"

        }
        if(size==="xs"){                    
            shelfProps['font-size'] = "22px",
            shelfProps['line-height'] = "28px"
            }; 

    return shelfProps;
},

gridItemLeftHalfProp: function(size) {
    let  shelfProps = {
            "line-height":property.$lineheight13
        }
        if(size==="lg"){
            shelfProps['padding'] = "0px 32px 0px 48px",
            shelfProps['margin'] ="0px 0px 32px"
        }     
        else {                    
            shelfProps['padding'] = "0px"            
            }; 
    return shelfProps;
},
gridItemRightHalfProp: function(size) {
     let shelfProps = {
            "line-height":property.$lineheight13
        }
        if(size==="lg"){
            shelfProps['padding'] = "0px 48px 0px 0px",
            shelfProps['margin'] ="0px 0px 32px"
        }     
        else {                    
            shelfProps['padding'] = "0px"            
            };  
    return shelfProps;
},

//white-theme  .tile--large  properties

tile_type_00:function(size){
   let shelfProps = {
        "background-color":property.$shelf_bg_color_1,
        "line-height":property.$lineheight13
        
       
     }
     if(size==="lg"){                    
        shelfProps['padding'] = "18px 24px 0px",
        shelfProps['background-size'] = "32px 32px",
        shelfProps['height']="178px"

        }
        else{
            shelfProps['padding'] = "12px 16px 0px",
            shelfProps['background-size'] = "24px 24px"
        };
return shelfProps;
},

//white-theme  .tile--horizontal  properties

tile_type_01:function(size){
    
   let shelfProps = {
        "background-color":property.$shelf_bg_color_1,
        "line-height":property.$lineheight13,            
    }
    if(size==="lg"){                    
       
        shelfProps['background-size'] = "32px 32px",
        shelfProps['height'] = "148px"
        
        }
        else{
            shelfProps['background-size'] = "24px 24px"
        };
return shelfProps;
},

//white-theme  .tile--vertical  properties

tile_type_02:function(size){
    
   let shelfProps = {
        "background-color":property.$shelf_bg_color_1,
        "background-size":"32px 32px",
        "height":"117px",
        "line-height":property.$lineheight13,
               
    }
    if(size==="xs"){                    
        shelfProps['background-size'] = "24px 24px",
        shelfProps['height']="188.891px"
        };
return shelfProps;
},

//white-theme  .tile--small  properties

tile_type_03:function(size){
  
   let shelfProps = {
        "background-color":property.$shelf_bg_color_1,
        "line-height":property.$lineheight13,
            
    }
    if(size==="lg"){                    
        shelfProps['background-size'] = "32px 32px",
        shelfProps['padding']=property.$smallTilePadding, 
        shelfProps['height']="151px"
        }
        else{
            shelfProps['background-size'] = "24px 24px"            
        };
return shelfProps;
},


//purple-theme  .tile--large  properties

tile_type_10:function(size){
  
   let shelfProps = {
        "background-color":property.$primary_1,
        "line-height":property.$lineheight13,
    }
     if(size==="lg"){                    
            shelfProps['padding'] = "18px 24px 0px",
            shelfProps['background-size'] = "32px 32px",
            shelfProps['height']="178px"
    
            }
            else{
                shelfProps['padding'] = "12px 16px 0px",
                shelfProps['background-size'] = "24px 24px"
            };
return shelfProps;
},

//purple-theme  .tile--horizontal  properties

tile_type_11:function(size){
  
  let  shelfProps = {
        "background-color":property.$primary_1,
        "line-height":property.$lineheight13
    }
    if(size==="lg"){                    
       
        shelfProps['background-size'] = "32px 32px",
        shelfProps['height'] = "148px"
        
        }
        else{
            shelfProps['background-size'] = "24px 24px"
        };
return shelfProps;
},

//purple-theme  .tile--vertical  properties

tile_type_12:function(size){
    
   let shelfProps = {
        "background-color":property.$primary_1,
        "line-height":property.$lineheight13,
                
    }
    if(size==="lg"){                    
        shelfProps['background-size'] = "32px 32px",
        shelfProps['height']="151px"
        }
        else{
            shelfProps['background-size'] = "24px 24px"
        };
return shelfProps;
},

//purple-theme  .tile--small  properties

tile_type_13:function(size){
    
    let shelfProps = {
        "background-color":property.$primary_1,
        "line-height":property.$lineheight13       
    }
    if(size==="lg"){                    
        shelfProps['background-size'] = "32px 32px",
        shelfProps['height']="151px",
        shelfProps['padding']=property.$smallTilePadding
        }
        else{
            shelfProps['background-size'] = "24px 24px"
        };
return shelfProps;
},

// <--- OnHover Functionality properties - Start --->

onHoverPurpleProp:function(size){
    
  let shelfProps = {
        "background-color":property.$primary_2
                
    };
return shelfProps;
},

onHoverPurpleParaProp:function(size){
    
   let shelfProps = {
        "color":property.$primary_1,
        "font-size":"14px",
        "left":"21.25px",
        "line-height":"20px",
        "margin-block-start":"-10px",
        "margin-top":"-10px",       
        "padding":"1px 24px 0px 3px"
        
                
    };
return shelfProps;
},

onHoverWhiteProp:function(size){
    
    let shelfProps = {
        "background-color": property.$primary_1
                
    };
return shelfProps;
},

onHoverWhiteParaProp:function(size){
   
    let shelfProps = {
        "color":property.$primary_2,
        "font-size":"14px",
        "left": property.$OnhoverWhiteLeft,
        "line-height":"20px",
        "margin-block-start":property.$OnhoverWhiteMarginBlockStart,
        "margin-top":property.$OnhoverWhiteMarginTop,       
        "padding":property.$OnhoverWhitePadding
                
    }
    if(size==="xs"){
        shelfProps['left'] = property.$OnhoverWhiteLeft_m,
        shelfProps['margin-block-start'] = property.$OnhoverWhiteMarginBlockStart_m,
        shelfProps['margin-top'] = property.$OnhoverWhiteMarginTop_m,
        shelfProps['padding'] = property.$OnhoverWhitePadding_m
    };
return shelfProps;
},
// <--- OnHover Functionality properties - End --->

// .white-theme h3 props

tile_text_00:function(size){
   
  let  shelfProps = {
        "color" : property.$primary_1,
        "font-size":"24px",
        "line-height":"28px"                
    }
    if(size==="xs"){                    
        shelfProps['font-size'] = "16px",
        shelfProps['line-height']="20px"
        };
return shelfProps;
},

// .purple-theme h3 props

tile_text_10:function(size){
    
    let shelfProps = {
        "color" : property.$primary_2,
        "font-size":"24px",
        "line-height":"28px"                
    }
    if(size==="xs"){                    
        shelfProps['font-size'] = "16px",
        shelfProps['line-height']="20px"
        };
return shelfProps;
},

//.white-theme .anchorForLargeTile props

large_tile_00:function(size){
   
    let shelfProps = {
        "left":"24px",
        "margin-top":"35px",
        "padding-bottom":"10px",
        "right":"24px"            
    }
    if(size==="xs"){                    
        shelfProps['left'] = "16px",
        shelfProps['right']="16px"
        };
return shelfProps;
},

//.white-theme .anchorForLargeTile rte-top-seperator props

large_tile_01:function(size){
    
    let shelfProps = {
        "border-top-color":property.$largeTileBorderTopClr,
        "border-top-style":"solid",
        "border-top-width":"1px",
        "border-image-width":"1"           
    };
return shelfProps;
},

//.white-theme .anchorForLargeTile p:first-child props

large_tile_02:function(size){
    
    let shelfProps = {
       "color":property.$primary_1,
       "font-family":property.$font_family_regular,
       "font-size":"12px",
       "line-height":property.$lineheight13,
       "overflow-wrap":"break-word",
       "padding-top":"13px"       
    }
    if(size==="xs"){                    
        shelfProps['font-size'] = "14px",
        shelfProps['line-height']="20px",
        shelfProps['padding-top']="10px"
        };
return shelfProps;
},


//.white-theme .anchorForLargeTile p:last-child props

large_tile_03:function(size){
  
    let shelfProps = {
       "color":property.$largeTileParaLastClr,
       "font-family":property.$font_family_regular,
       "font-size":"14px",
       "line-height":"20px",
       "overflow-wrap":"break-word",
             
    }
   
return shelfProps;
},


//.purple-theme .anchorForLargeTile props

large_tile_10:function(size){
    
  let   shelfProps = {
        "left":"24px",
        "margin-top":"35px",
        "padding-bottom":"10px",
        "right":"24px"            
    };
    if(size==="xs"){                    
        shelfProps['left'] = "16px",
        shelfProps['right']="16px"
        };
return shelfProps;
},

//.purple-theme .anchorForLargeTile rte-top-seperator props

large_tile_11:function(size){
    
   let  shelfProps = {
        "border-top-color":property.$largeTileBorderTopClr,
        "border-top-style":"solid",
        "border-top-width":"1px",
        "border-image-width":"1"           
    };
return shelfProps;
},

//.purple-theme .anchorForLargeTile p:first-child props

large_tile_12:function(size){
  
   let  shelfProps = {
       "color":property.$largetilePurplePFirstClr,
       "font-family":property.$font_family_regular,
       "font-size":"12px",
       "line-height":property.$lineheight13,
       "overflow-wrap":"break-word",
       "padding-top":"13px"       
    }
    if(size==="xs"){                    
        shelfProps['font-size'] = "14px",
        shelfProps['line-height']="20px",
        shelfProps['padding-top']="10px"
        };
return shelfProps;
},

//.purple-theme .anchorForLargeTile p:last-child props

large_tile_13:function(size){
   
  let  shelfProps = {
       "color":property.$largetilePurplePLastClr,
       "font-family":property.$font_family_regular,
       "font-size": property.$largetilePurplePLastfs,
       "line-height":property.$largetilePurplePLastlh,
       "overflow-wrap":"break-word"
             
    }
    if(size==="xs"){                    
        shelfProps['font-size'] = "14px",
        shelfProps['line-height']="20px"
        };
return shelfProps;
},

// <--- See More -- See Less props Starting --->

seeMoreLessProps :function(size){
    
   let shelfProps = {
      "border-bottom-color":property.$seeMoreLessBBtmColor,
      "border-bottom-style":"solid",
      "border-bottom-width":"1px",
      "margin":"0px 48px 32px",
      "text-align":"center"
    }
    if(size==="xs"){                    
        shelfProps['margin'] = "0px 0px 18px"
        
        };
return shelfProps;
},

seeMoreProps :function(size){
    
  let  shelfProps = {
     "color":property.$seeMoreLessColor,
     "font-size":"18px",
     "font-family":property.$font_family_regular,
     "padding-right":"25px",
     "text-decoration-style":"solid"
    };
    
return shelfProps;
},

seeLessProps :function(size){
   
   let shelfProps = {
     "color":property.$seeMoreLessColor,
     "font-size":"18px",
     "font-family":property.$font_family_regular,
     "padding-right":"25px",
     "text-decoration-style":"solid"
    };
return shelfProps;
},

seeMoreFocusProps :function(size){
    let  shelfProps = {
     "outline-color":property.$focusColor,
    
    };
return shelfProps;
},

seeLessFocusProps :function(size){
  let shelfProps = {
     "outline-color":property.$focusColor,
    
    };
return shelfProps;
},

// <--- See More -- See Less props Ending --->

// <--- Image props Starting --->
img_type_0 :function(size){
 let shelfProps = {
        "border-top-left-radius":"6px",
        "border-top-right-radius":"6px",
        "border-bottom-left-radius":"0px",
        "border-bottom-right-radius":"0px",
        "border-image-repeat":"stretch"    
    }
    if(size==="lg"){
        shelfProps['width'] = "424px"
    };
return shelfProps;
},

img_type_1 :function(size){
  let shelfProps = {
        "border-top-left-radius":"0px",
        "border-top-right-radius":"6px",
        "border-bottom-left-radius":"0px",
        "border-bottom-right-radius":"6px",
        "border-image-repeat":"stretch"    
    }
    if(size==="lg"){
        shelfProps['width'] =  property.$imgRightWidth
    };;
return shelfProps;
},

img_type_2 :function(size){
   let shelfProps = {
        "border-top-left-radius":"6px",
        "border-top-right-radius":"0px",
        "border-bottom-left-radius":"6px",
        "border-bottom-right-radius":"0px",
        //"width":"228px",
        "border-image-repeat":"stretch"    
    };
return shelfProps;
},

img_type_3 :function(size){
   let shelfProps = {
        "border-top-left-radius":"0px",
        "border-top-right-radius":"0px",
        "border-bottom-left-radius":"6px",
        "border-bottom-right-radius":"6px",
        "width":"196px",
        "border-image-repeat":"stretch"    
    };
return shelfProps;
},

img_type_4 :function(size){
    let shelfProps = {
        "border-top-left-radius":"6px",
        "border-top-right-radius":"6px",
        "border-bottom-left-radius":"0px",
        "border-bottom-right-radius":"0px",
        "width":"196px",
        "border-image-repeat":"stretch"    
    };
return shelfProps;
},
};
}