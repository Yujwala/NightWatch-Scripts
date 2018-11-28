var rte_props = require('../rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
   //SHELF THEME PROPERTIES
   lightBlueShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                'font-family': property.$lightBlueFF,
                "line-height":"13px",
                "font-size":"13px",
            };
        return shelfProps;
    },
    blueShelf: function(size) {
        property = brand.props;
        let shelfProps = {
                'font-family': property.$blueFF,
                "line-height":"13px",
                "font-size":"13px",
    };
        return shelfProps;
    },
    offWhiteShelf: function(size) {
        property = brand.props;
        let shelfProps = {
                'font-family': property.$offWhiteFF,
                "line-height":"13px",
                "font-size":"13px",
    };
    return shelfProps;
},

   txtImgHead: function(size) {
        property = brand.props;
        let shelfProps = {
                'font-family': property.$txtImgHeadFF,
                "line-height":"22px",
                "font-size":"18px",
        };
        if(size=="xs"){
                shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
                shelfProps['font-size'] ="18px";
                shelfProps['line-height'] ="22px";
            };
        return shelfProps;
        },
   
    txtImgTextp1: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "line-height" : property.$txtImgTextp1LineHeight,

    };
        if(size=="xs"){
            shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
            shelfProps["line-height"] = property.$txtImgTextp1LineHeight_m ,
            shelfProps["font-size"] = property.$txtImgTextp1FontSize_m

        };

    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextp2: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "line-height" : property.$txtImgTextp2LineHeight,


    };
        if(size=="xs"){
            shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
            shelfProps["line-height"] = property.$txtImgTextp2LineHeight_m ,
            shelfProps["font-size"] = property.$txtImgTextp2FontSize_m
            
        };

    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextp3: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
            "line-height" : property.$txtImgTextp3LineHeight,

    };
        if(size=="xs"){
            shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
            shelfProps["line-height"] = property.$txtImgTextp3LineHeight_m ,
            shelfProps["font-size"] = property.$txtImgTextp3FontSize_m
     
        };

    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextp4: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {

    };
        if(size=="xs"){
            shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
            shelfProps["line-height"] = property.$txtImgTextp4LineHeight_m ,
            shelfProps["font-size"] = property.$txtImgTextp4FontSize_m
        };

    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },


    txtImgTextol1: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
                "display":"list-item",
    };
    if(size=="xs"){
        shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
        shelfProps['margin'] ="5px 0px";
    };
    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextol2: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
                "display":"list-item",

    };
    if(size=="xs"){
        shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
        shelfProps['margin'] ="5px 0px";
        shelfProps["line-height"] = property.$txtImgTextol2LineHeight_m ,
        shelfProps["font-size"] = property.$txtImgTextol2FontSize_m 
    };
    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextol3: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
                "display":"list-item",
    };
    if(size=="xs"){
        shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
        shelfProps['margin'] ="5px 0px";
    };
    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },

    txtImgTextol4: function(size) {
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        let shelfProps = {
                "display":"list-item"
    };
    if(size=="xs"){
        shelfProps['font-family'] ="RNHouseSansRegular, sans-serif";
        shelfProps['margin'] ="5px 0px";
    };
    shelfProps=Object.assign(rteprops,shelfProps);
    return shelfProps;
    },


    txtImgImage1: function(size) {
        property = brand.props;
        let shelfProps = {  
                "width":"275px",
                "height":property.$txtImgImage1Height,
    };
    if(size=="xs"){
        shelfProps['width'] ="275px";
        shelfProps['height'] =property.$txtImgImage1Height_m;
    };
    return shelfProps;
    },
    
    txtImgImage2: function(size) {
        property = brand.props;
        let shelfProps = {
                "width":"275px",
                "height": property.$txtImgImage2Height,
    };
    if(size=="xs"){
        shelfProps['width'] ="275px";
        shelfProps['height'] = property.$txtImgImage2Height_m;
    };
    return shelfProps;
    },
    
    txtImgImage3: function(size) {
        property = brand.props;
        let shelfProps = {
                "width":"32px",
                "height":property.$txtImgImage3Height,
    };
    if(size=="xs"){
        shelfProps['width'] ="32px";
        shelfProps['height'] =property.$txtImgImage3Height_m;
    };
    return shelfProps;
    },
    
    txtImgImage4: function(size) {
        property = brand.props;
        let shelfProps = {
                "width":"72px",
                "height":"72px"
    };
    if(size=="xs"){
        shelfProps['width'] ="70px";
        shelfProps['height'] ="70px";
    };
    return shelfProps;
    },

    txtImgCol1: function(size) {
        property = brand.props;
        let shelfProps = {
            "background-color":"rgba(238, 237, 233, 1)",
            "padding":"19px 24px 39px",
            "border-radius":"8px"
    };
    if(size=="xs"){
        shelfProps['background-color'] ="rgba(238, 237, 233, 1)";
        shelfProps['padding'] ="12px 16px 27px";
        shelfProps['border-radius'] ="8px";
    };

    return shelfProps;
    },
    
    txtImgCol2: function(size) {
        property = brand.props;
        let shelfProps = {
                "background-color":"rgba(238, 237, 233, 1)",
                "padding":"19px 24px 16px",
                "border-radius":"8px"
        };
        if(size=="xs"){
            shelfProps['background-color'] ="rgba(238, 237, 233, 1)";
            shelfProps['padding'] ="12px 16px 25px";
            shelfProps['border-radius'] ="8px";
        };
    
    return shelfProps;
    },
    

    txtImgCol3: function(size) {
        property = brand.props;
        let shelfProps = {
            "background-color":"rgba(238, 237, 233, 1)",
            "padding":"0px",
            "border-radius":"8px"
    };
    if(size=="xs"){
        shelfProps['background-color'] ="rgba(238, 237, 233, 1)";
        shelfProps['padding'] ="0px";
        shelfProps['border-radius'] ="8px";

    };

    return shelfProps;
    },
    
    txtImgCol4: function(size) {
        property = brand.props;
        let shelfProps = {
            "background-color":"rgba(238, 237, 233, 1)",
            "padding":"0px",
            "border-radius":"8px"
    };
    if(size=="xs"){
        shelfProps['background-color'] ="rgba(238, 237, 233, 1)";
        shelfProps['border-radius'] ="8px";
    };

    return shelfProps;
    },
  };
}