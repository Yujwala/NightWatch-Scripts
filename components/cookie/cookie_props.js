module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    cookiebanner: function(size) {
        let shelfProps = {
            "width": "1241.08px",
            "background-color": property.$cookiebgcolor,
            "color": property.$cookiecolor ,
            "font-size" : "12px",
            "line-height":"18px",
            "min-height":"40px",
            "padding":"19.5px 67.4375px 19.5px 40.4688px",
            "font-weight" : "400"
        };
        if (size == "xs") {
            shelfProps['width'] = "1349px";
            shelfProps['padding'] = "67.4375px";
        }
    return shelfProps;
},

    cookieheader: function(size) {
        let shelfProps = {
            "font-size" : "16px", 
            "box-sizing" : "content-box",
            "font-family" : property.$fontfamily ,
            "line-height" : "24px",
        };
        if (size == "xs") {
            shelfProps['box-sizing'] = "border-box";
        }
    return shelfProps;
    },

    subcookieheader: function(size) {
        let shelfProps = {
            "font-weight" : "700", 
            "font-family" : property.$fontfamily ,
        };
    return shelfProps;
    },

    cookieclose: function(size) {
        let shelfProps = {
            "color" : "rgb(255, 255, 255)",
            "font-family" : "nw-icons",
            "font-size" : "14px",
            "left" : "3px",
            "top" : "-1px",
        };
    return shelfProps;
    },

    ccheader: function(size) {
        let shelfProps = {
            "color" : "rgba(255, 255, 255, 1)",
            "background-color" : property.$headerbgcolor,
            "padding-top" : property.$ccheaderpadding ,
        };
    return shelfProps;
    },

    ccimage :  function(size) {
        let shelfProps = {
            "width" : property.$imgwidth,
            "height" : property.$imgheight,
        };
    return shelfProps;
    },

    ccbreadcumb :  function(size) {
        let shelfProps = {
           "padding" : property.$ccbreadcumbpadding,
           "font-family" : "RNHouseSansRegular, sans-serif",
           "box-sizing" : "content-box",
        };
    return shelfProps;
    },

    ccbreadcumblist : function(size) {
        let shelfProps = {
           "margin-block-start" : property.$ccmarginstart,

        };
    return shelfProps;
    },

    ccbreadcrumbanchor : function(size) {
        let shelfProps = {
          "padding" : property.$ccbcanchor,

        };
    return shelfProps;
    },

    firsttexteditor : function(size) {
        let shelfProps = {
          "padding" : "0px 0px 0px 48px"

        };
    return shelfProps;
    },

    texteditor : function(size) {
        let shelfProps = {
          "padding" : "0px",
          "display" : "block",

        };
    return shelfProps;
    },

    ccshelf :  function(size) {
        let shelfProps = {
          "padding" : property.$ccshelfpadding,

        };
        if (size == "xs") {
            shelfProps['padding'] = property.$ccshelfpadding_mob;
        }
    return shelfProps;
    },

    ccsubheaders : function(size) {
        let shelfProps = {
          "color" : property.$ccsubheaderscolor,
          "font-family" : property.$ccheaderfont,
          "font-size" : property.$ccheaderfsize,
          "line-height" : property.$ccheaderlheight,

        };
        if (size == "xs") {
            shelfProps['font-size'] = property.$ccheaderfsize_mob;
            shelfProps['line-height'] = property.$ccheaderlheight_mob;

        }

    return shelfProps;
    },

    ccp : function(size) {
        let shelfProps = {
          "padding-bottom" : "14px",
          "font-size" : "14px",
        };
        if (size == "xs") {
            shelfProps['padding-bottom'] = "12px";
        }

    return shelfProps;
    },

    ccli : function(size) {
        let shelfProps = {
          "padding-left" : "9.632px",
          "margin": "5px 0px",
          "color" : property.$cclistcolor,
          "display" : "list-item",

        };
        if (size == "xs") {
            shelfProps['padding-left'] = property.$cclistpadding_mob;
        }
    return shelfProps;
    },

    ccradiobtn: function(size) {
        let shelfProps = {
          "background-color" : "rgba(180, 169, 159, 1)",
          "padding" : "12px 25px 10px 18px",
          "border-width" : "1px" ,
          "border-color" : property.$bordercolor,
          "margin" : property.$ccradiomargin ,

        };
    return shelfProps;
    },

    ccradiobtnfocus : function(size) {
        let shelfProps = {
          "outline-color" : "rgba(77, 144, 254, 1)"
        };
    return shelfProps;
    },
};


}