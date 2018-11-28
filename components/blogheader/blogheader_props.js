module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {

    commonprops: function(size) {

        let shelfProps = {
            "font-family": property.$fontfamily,
            "font-size": "36px",
            "line-height": "36px",
        };
        if (size == "xs") {
            shelfProps['font-size'] = "32px";
        }
        return shelfProps;

    },

    blogheader: function(size) {

        let shelfProps = {
            "padding": "0px 48px",
        };
        if (size == "xs") {
            shelfProps['padding'] = "0px 16px";
        }
        return shelfProps;

    },

    heroHg: function(size) {

        let shelfProps = {
            "color": property.$heading_color,
            "margin": property.$heading_margin,
        };
        if (size == "xs") {
            shelfProps['margin'] = "5px 0px"
        }

        return shelfProps;

    },

    heroHgbluetheme: function(size) {

        let shelfProps = {
            "color": property.$heading_color_bluetheme,
            "margin": property.$heading_margin,
        };
        if (size == "xs") {
            shelfProps['margin'] = "5px 0px"
        }
        return shelfProps;

    },

    date: function(size) {

        let shelfProps = {
            "color": property.$author_date,
            "font-family": "RNHouseSansRegular, sans-serif",
            "font-size": "14px",
            "line-height": property.$date_lineheight,
        };
        return shelfProps;
    },

    seperatorline: function(size) {

        let shelfProps = {
            "background-color": property.$seperatorline,
            "margin": "20px 0px 4px",
            "height": "2px"

        };
        if (size == "xs") {
            shelfProps['margin'] = "21px 0px 0px";
        }
        return shelfProps;
    },

    heroHgcenter: function(size) {

        let shelfProps = {
            "color": property.$heading_color,
            "text-align": property.$alignment,
        };
        return shelfProps;

    },

    blueheroHgcenter: function(size) {

        let shelfProps = {
            "color": property.$heading_color_bluetheme,
            "text-align": property.$alignment,
        };
        return shelfProps;

    },
};
}