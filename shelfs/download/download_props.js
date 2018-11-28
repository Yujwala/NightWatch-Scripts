//article shelf props
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    downloadshelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$grid_Padd_btm,               
               "padding-top" : property.$downloadshelf_Padd_btm 
            };
        return shelfProps;
    },
    downloadshelfcontainerProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : property.$downloadshelfcontainerleft,
               "padding-right" : property.$downloadshelfcontainerright
               
            };
        return shelfProps;
    },
     themeWhiteShelfProps: function(size) {
        property = brand.props;
        x = property.$themeWhiteShelfColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeWhiteShelfBg,
               "color" : property.$themeWhiteShelfColor,
            };
        return shelfProps;
    },
    themeLightBlueProps: function(size) {
        property = brand.props;
        x = property.$themeLightBlueColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeLightBlueBg,
               "color" : property.$themeLightBlueColor,
            };
        return shelfProps;
    },
     themeBlueShelfProps: function(size) {
        property = brand.props;
        x = property.$themeBlueShelfColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeBlueShelfBg,
               "color" : property.$themeBlueShelfColor,
            };
        return shelfProps;
    },
    headergroupProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : property.$downloadshelfcontainerleft,
               "padding-right" : property.$downloadshelfcontainerright,
            };
        return shelfProps;
    },
    headersignpostProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color": x,
            	"font-size": property.$headersignpost_fs,
                "line-height": property.$headersignpost_lh
            	
            };
        return shelfProps;
    },
    headerheadlineProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color": x,
                "font-size":property.$headerheadline_fs,
                "line-height": property.$headerLineHeight
            };
        return shelfProps;
    },
    downloadgriditemsProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	
            	
            	"padding-left": "47.996px"
            	

            };
        return shelfProps;
    },
    griditemsleftProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"padding-bottom": property.$griditemsleft_padding_bottom,
                "padding-left": property.$griditemsleft_padding_left
            };
        return shelfProps;
    },
    downloadtextleftProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"line-height": "23.4px",
                "font-size": "18px",                
                "color": property.$downloadtextleftcolor
            };
        return shelfProps;
    },
    downloadtextrightProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": "20px",
                "font-size": "14px",
                "color":property.$downloadtextright
            };
        return shelfProps;
    },
     downlaodiconProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	 "color":property.$downlaodicon_color,
                 "margin-top":"4.5px"
            };
        return shelfProps;
    },
     downlaodiconrightProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "color":x ,
                 "margin-top":"3.25px"
            };
        return shelfProps;
    },


    //Mobile Props

    downloadshelfPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : property.$shelfPaddingBottom_mob,
               "padding-top" : property.$shelfPaddingTOP_mob
            };
        return shelfProps;
    },
    downloadshelfcontainerPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : "16.003px",
               "padding-right" : "16.003px"
               
            };
        return shelfProps;
    },
     themeWhiteShelfPropsm: function(size) {
        property = brand.props;
        x = property.$themeWhiteShelfColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeWhiteShelfBg,
               "color" : property.$themeWhiteShelfColor,
            };
        return shelfProps;
    },
    themeLightBluePropsm: function(size) {
        property = brand.props;
        x = property.$themeLightBlueColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeLightBlueBg,
               "color" : property.$themeLightBlueColor,
            };
        return shelfProps;
    },
     themeBlueShelfPropsm: function(size) {
        property = brand.props;
        x = property.$themeBlueShelfColor;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$themeBlueShelfBg,
               "color" : property.$themeBlueShelfColor,
            };
        return shelfProps;
    },
    headergroupPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : "16.003px",
               "padding-right" : "16.003px" 
            };
        return shelfProps;
    },
    headersignpostPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": x,
                "font-size": property.$headersignpost_fs_mob,
                "line-height": property.$headersignpost_lh_mob
                
            };
        return shelfProps;
    },
    headerheadlinePropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": x,
                "font-size":property.$headerheadline_fs_mob,
                               
               "line-height": property.$headerheadline_lh_mob
            };
        return shelfProps;
    },
    downloadgriditemsPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                
                
                "padding-left": "0px"
                

            };
        return shelfProps;
    },
    griditemsleftPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom":property.$griditemsleft_padding_bottom,
                "padding-left": "25px"
            };
        return shelfProps;
    },
    downloadtextleftPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": "23.4px",
                "font-size": "18px",
                "color":property.$downloadtextleftright_color_mob
            };
        return shelfProps;
    },
    downloadtextrightPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": "22px",
                "font-size": "16px",
                "color":property.$downloadtextright
            };
        return shelfProps;
    },
     downlaodiconPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "color":property.$downloadtextleftright_color_mob ,
                 "margin-top":"4.5px"
            };
        return shelfProps;
    },
     downlaodiconrightPropsm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "color": x,
                 "margin-top":"3.25px"
            };
        return shelfProps;
    },
};

    
}