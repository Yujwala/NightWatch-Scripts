var rte_props = require('../rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {

    //SHELF THEME PROPERTIES
    blogShelfLightBlueTheme: function(size) {   
        property = brand.props;
        let shelfProps = {
           "background-color" : property.$blogShelfLightBlueBackgroundColor,
            "color" : property.$blogShelfLightBlueColor,
            };
        return shelfProps;
    },
    blogShelfBlueTheme: function(size) {
        property = brand.props;
        let shelfProps = {
            "background-color" : property.$blogShelfBlueBackgroundColor,
            "color" : property.$blogShelfBlueColor,
            };
        return shelfProps;
    },
    blogShelfWhiteTheme: function(size) {
        property = brand.props;
        let shelfProps = {
            "background-color" : property.$blogShelfWhiteBackgroundColor,
           "color" : property.$blogShelfWhiteColor,
        };
    return shelfProps;
},

    //BLOG CONTAINER PROPERTIES
    blogContainer: function(size) {
        property = brand.props;
        let shelfProps = {
               "padding": "44px 48px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="24px 16px 0px";
            };
        return shelfProps;
    },

    //BLOG VIDEO CONTAINER PROPERTIES
    blogVideoContainer: function(size) {
        property = brand.props;
        let shelfProps = {
            "visibility": "visible",
            "opacity":"1",
            "width":"576px",
            "height":"324px",
            };
            if(size=="xs"){
                shelfProps['width'] = "415px";
                shelfProps['height'] = "233.438px";

            };
        return shelfProps;
    },
    blogVideoContainerPlayFocus: function(size) {
        property = brand.props;
        let shelfProps = {
            "outline-color":"rgba(255, 191, 71, 1)",
           "outline-style":"solid",
           "outline-width": "3px",
            };
            if(size=="xs"){
                shelfProps['outline-color'] = "rgba(255, 191, 71, 1)";
                shelfProps['outline-style'] = "solid";
                shelfProps['outline-width'] = "3px";
            };
        return shelfProps;
    },
    blogVideoContainerPlay: function(size) {
        property = brand.props;
        let shelfProps = {
           "width":"100px",
           "height":"100px",
            "color": property.$blogVideoContainerPlayButtonColor,
            };
            if(size=="xs"){
                shelfProps['width'] = "50px";
                shelfProps['height'] = "50px";
            };
        return shelfProps;
    },

        //LEFT CONTENT SECTION Properties
        blogLeftContent: function(size) {
            property = brand.props;
            let shelfProps = {
                 "font-size": "13px",
                };
            return shelfProps;
        },
    
  
    //WHITE LEFT CONTENT PROPERTIES
        whiteBlogLeftContentPara: function(size) {
            property = brand.props;
            let shelfProps = {
                 "font-size": "14px",
                 "line-height":"20px",
                 "color": property.$whiteBlogLeftContentParaColor,
                };
                if(size=="xs"){
                    shelfProps['font-size'] ="16px";
                    shelfProps['line-height'] ="22px";   
                }
                if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                    if(size=="xs"){
                    shelfProps["line-height"] = "20px";
                    shelfProps["font-size"] = "14px";
                }
                }                        
            return shelfProps;
            },
        whiteBlogLeftContentBlockQuote: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextBQ(size);
        let shelfProps = {
            "font-family" : 'nw-icons',
            "font-size": '30px',
            "width": '78px',
            "color": property.$BlogBQC,
            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["line-height"] = "26px";
                shelfProps["font-size"] = "36px";
            }        
            if(size=="xs"){
                shelfProps["line-height"] = '26px';
                shelfProps["font-size"] = '36px';
            }
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    whiteBlogLeftContentps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$whiteBlogLeftContentStrongColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                       
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    whiteBlogLeftContentbq : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropBlockQuote(size);
        let shelfProps = {
            "color" :property.$whiteBlogLeftContentBlockQuoteColor,
            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["line-height"] = "26px";
                shelfProps["font-size"] = "22px";
        }
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    whiteBlogLeftContenth4 : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextH4(size);
        let shelfProps = {
            "color" :property.$whiteBlogLeftContentHeadingColor,
            };
        if(brand.props.$brandName=='natwest-markets') {
        shelfProps["line-height"] = "20px";
        }
        if(brand.props.$brandName=='natwest-markets')  {
            if(size=="xs"){
            shelfProps["line-height"] = "22px";
        }
        }                       
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    whiteBlogInnerShelfLi : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
            "color" :property.$whiteBlogLeftContentListColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                       
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    whiteBlogInnerShelfps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$whiteBlogLeftFooterColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   

    
    //BLUE LEFT CONTENT PROPERTIES
    blueBlogLeftContentPara: function(size) {
        property = brand.props;
        let shelfProps = {
             "font-size": "14px",
             "line-height":"20px",
             "color": property.$blueBlogLeftContentParaColor
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";    
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        

        return shelfProps;
    },
blueBlogLeftContentBlockQuote: function(size) {
    property = brand.props;
    let rteprops=rte_props.PropTextBQ(size);
    let shelfProps = {
        "font-family" : 'nw-icons',
        "font-size": '30px',
        "width": '78px',
        "color": property.$BlogBQC,
        };
        if(brand.props.$brandName=='lombard') {
            shelfProps["line-height"] = "26px";
            shelfProps["font-size"] = "36px";
            }        
        if(size=="xs"){
        shelfProps["line-height"] = '26px';
        shelfProps["font-size"] = '36px';
        }
        shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
},
    blueBlogLeftContentps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$blueBlogLeftContentStrongColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    blueBlogLeftContentbq : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropBlockQuote(size);
        let shelfProps = {
            "color" :property.$blueBlogLeftContentBlockQuoteColor,
            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["line-height"] = "26px";
                shelfProps["font-size"] = "22px";
        }
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },  
        blueBlogLeftContenth4 : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextH4(size);
        let shelfProps = {
            "color" :property.$blueBlogLeftContentHeadingColor,
            };
        if(brand.props.$brandName=='natwest-markets') {
                shelfProps["line-height"] = "20px";
        }
        if(brand.props.$brandName=='ulster-ie') {
            shelfProps["font-family"] = property.$font_family_bold;
        }
        if(brand.props.$brandName=='natwest-markets')  {
            if(size=="xs"){
            shelfProps["line-height"] = "22px";
        }
        }                       
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    blueBlogInnerShelfLi : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
            "color" :property.$blueBlogLeftContentListColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    blueBlogInnerShelfps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$blueBlogLeftFooterColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   

    //LIGHT BLUE LEFT CONTENT PROPERTIES
    lightBlueBlogLeftContentPara: function(size) {
        property = brand.props;
        let shelfProps = {
             "font-size": "14px",
             "line-height":"20px",
             "color": property.$lightBlueBlogLeftContentParaColor
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";     
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        return shelfProps;
   },
lightBlueBlogLeftContentBlockQuote: function(size) {
    property = brand.props;
    let rteprops=rte_props.PropTextBQ(size);
    let shelfProps = {
        "font-family" : 'nw-icons',
        "font-size": '30px',
        "width": '78px',
        "color": property.$BlogBQC,
        };
        if(brand.props.$brandName=='lombard') {
            shelfProps["line-height"] = "26px";
            shelfProps["font-size"] = "36px";
            }        
        if(size=="xs"){
        shelfProps["line-height"] = '26px';
        shelfProps["font-size"] = '36px';
        }
        shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
},
    lightBlueBlogLeftContentps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$lightBlueBlogLeftContentStrongColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    }, 
    lightBlueBlogLeftContentbq : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropBlockQuote(size);
        let shelfProps = {
            "color" :property.$lightBlueBlogLeftContentBlockQuoteColor,
            };
            if(brand.props.$brandName=='lombard') {
                shelfProps["line-height"] = "26px";
                shelfProps["font-size"] = "22px";
        }
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    }, 
    lightBlueBlogLeftContenth4 : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextH4(size);
        let shelfProps = {
            "color" :property.$lightBlueBlogLeftContentHeadingColor,
            };
        if(brand.props.$brandName=='natwest-markets') {
        shelfProps["line-height"] = "20px";
        }
        if(brand.props.$brandName=='natwest-markets')  {
            if(size=="xs"){
            shelfProps["line-height"] = "22px";
        }
        }                       
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },   
    lightBlueBlogInnerShelfLi : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
            "color" :property.$lightBlueBlogLeftContentListColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";      
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    }, 
    lightBlueBlogInnerShelfps : function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "color" :property.$lightBlueBlogLeftFooterColor,
            };
            if(size=="xs"){
                shelfProps['font-size'] ="16px";
                shelfProps['line-height'] ="22px";   
            }
            if(brand.props.$brandName=='rbs-remembers' || brand.props.$brandName=='rbs-com' || brand.props.$brandName=='lombard')  {
                if(size=="xs"){
                shelfProps["line-height"] = "20px";
                shelfProps["font-size"] = "14px";
            }
            }                        
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    }, 

    //BLOG RIGHT CONTENT Properties
    blogRightContent: function(size) {
        property = brand.props;
        let shelfProps = {
            "font-size": "13px",
            };
        return shelfProps;
    },
    blogRightContentImage: function(size) {
        property = brand.props;
        let shelfProps = {
            "border-radius" : "50%" ,
            "width": "72px",
            "height":"72px",
            };
            if(size=="xs"){
                shelfProps['width'] ="92px";
                shelfProps['height'] ="92px";   
            }
        return shelfProps;
    },

    //WHITE BLOG RIGHT CONTENT Properties
    whiteBlogRightContent: function(size) {
        property = brand.props;
    	let rteprops=rte_props.PropTextPara(size);
        let shelfProps = {
            "color" :property.$whiteBlogRightContentSubTextColor,
            };
            if(size=="xs"){
                shelfProps['color'] = property.$WhiteBlogRightContentSubTextColor_m;                               
            }
            shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },

    //BLUE BLOG RIGHT CONTENT Properties
    blueBlogRightContent: function(size) {
            property = brand.props;
            let rteprops=rte_props.PropTextPara(size);
            let shelfProps = {
                "color" :property.$blueBlogRightContentSubTextColor,
                };
                if(size=="xs"){
                    shelfProps['color'] = property.$BlueBlogRightContentSubTextColor_m;                         
                }
                shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
        },

    //LIGHT BLUE BLOG RIGHT CONTENT Properties
    lightBlueBlogRightContent: function(size) {
            property = brand.props;
            let rteprops=rte_props.PropTextPara(size);
            let shelfProps = {
                "color" :property.$lightBlueBlogRightContentSubTextColor,
                };
                if(size=="xs"){
                    shelfProps['color'] = property.$LightBlueBlogRightContentSubTextColor_m;      
                }
                shelfProps=Object.assign(rteprops,shelfProps);
            return shelfProps;
        },



};


    
}
