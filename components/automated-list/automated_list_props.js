module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
	
  return {
    alshelfProps: function(size) {

        let shelfProps = {

            "padding": "48px 0px",
        };

        if (size == "xs") {
            shelfProps['padding'] = "16px 0px";
        }

        return shelfProps;

    },

    themeDarkgreyShelf: function(size) {


        let shelfProps = {
            "background-color": property.$themedarkgrey,

        };
        return shelfProps;
    },
    themeLightgreyShelf: function(size) {


        let shelfProps = {
            "background-color": property.$themelightgrey,
            "color": property.$lightgreytext,
        };
        return shelfProps;
    },
    themeBrownShelf: function(size) {
        let shelfProps = {
            "background-color": property.$themebrown,

        };
        return shelfProps;
    },

    themeBlueShelf: function(size) {


        let shelfProps = {
            "background-color": property.$themeblue,
            "color": property.$themebluetext,

        };
        return shelfProps;
    },
    themeLightblueShelf: function(size) {


        let shelfProps = {
            "background-color": property.$themelightblue,
            "color": property.$lightgreytext,


        };
        return shelfProps;
    },
    themeWhiteShelf: function(size) {


        let shelfProps = {
            "background-color": property.$themewhite,
            "color": property.$lightgreytext,

        };
        return shelfProps;
    },



    innershelf: function(size) {


        let shelfProps = {
            "padding": "0px 48px",

        };
        if (size == "xs") {
            shelfProps['padding'] = "0px 16.003px";
        }

        return shelfProps;
    },

    Shelfheading: function(size) {


        let shelfProps = {
            "font-size": "22px",
            "margin": "0px 0px 40px",
            "line-height": "28px",
            "font-family": "RNHouseSansRegular, sans-serif",
        };
        if (size == "xs") {
            shelfProps['font-size'] = "22px";
            shelfProps['margin'] = "0px 0px 24px";
            shelfProps['line-height'] = "28px";
            shelfProps['font-family'] = "RNHouseSansRegular, sans-serif";

        }
        return shelfProps;
    },

    verticalshelfheading: function(size) {


        let shelfProps = {

            "margin": "0px 0px 24px"

        };
        return shelfProps;
    },

    listcomponent: function(size) {


        let shelfProps = {
            "padding": "24px",

        };
        if (size == "xs") {
            shelfProps['padding'] = "0px 0px 16px";
        }

        return shelfProps;
    },

    verticallistcomponent: function(size) {


        let shelfProps = {
            "padding": "0px 0px 16px",

        };
        return shelfProps;
    },

    listheading: function(size) {


        let shelfProps = {
            "margin-bottom": "8px",
            "font-size": "22px",
            "line-height": "27px",
            "font-family": "RNHouseSansRegular, sans-serif",
        };
        if (size == "xs") {
            shelfProps['font-size'] = "16px";
            shelfProps['margin-bottom'] = "8px";
            shelfProps['line-height'] = "20px";
            shelfProps['font-family'] = "RNHouseSansRegular, sans-serif";

        }
        return shelfProps;
    },

    verticallistheading: function(size) {


        let shelfProps = {
            "margin-bottom": "8px",
            "font-size": "16px",
            "line-height": "20px",
            "font-family": "RNHouseSansRegular, sans-serif",

        }
        return shelfProps;

    },
    listheadinghover: function(size) {

        let shelfProps = {
            "color": property.$listheadinghover_color,
        };
        return shelfProps;
    },

    listitemfocus: function(size) {


        let shelfProps = {
            "outline-color": property.$listitemfocus_color,
        };
        return shelfProps;
    },

    listitem: function(size) {


        let shelfProps = {
            "margin-right": "32px",
        };


        if (size == "xs") {
            shelfProps['margin-right'] = "0px";
        }
        return shelfProps;
    },

    verticallistitem: function(size) {


        let shelfProps = {
            "margin": "0px",
            "padding-bottom": "16px",
        };
        return shelfProps;
    },


    listcontainertext: function(size) {


        let shelfProps = {
            "font-size": "14px",
            "margin-bottom": "8px",
            "line-height": "20px",
            "font-family": "RNHouseSansRegular, sans-serif",


        };
        return shelfProps;
    },
    listcontainertextafter: function(size) {


        let shelfProps = {

            "background": "rgba(0, 0, 0, 0) linear-gradient(to top, rgb(240, 240, 240) 0px, rgba(240, 240, 240, 0) 80%) repeat scroll 0% 0% / auto padding-box border-box",

        };
        return shelfProps;
    },

    listcontainertextafterblue: function(size) {


        let shelfProps = {

            "background": "rgba(0, 0, 0, 0) linear-gradient(to top, rgb(10, 47, 100) 0px, rgba(10, 47, 100, 0) 80%) repeat scroll 0% 0% / auto padding-box border-box"

        };
        return shelfProps;
    },

    verticalshelfheading: function(size) {


        let shelfProps = {

            "margin": "0px 0px 24px"

        };
        return shelfProps;
    },
};


}