var rte_props = require('../rte/rte_props.js')

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    videoPlay: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'width':"48px",
                    "height": "48px",
                    'color': property.$videoPlayColor,
            };
            if(size=="xs"){
                shelfProps['width'] ="40px";
                shelfProps['height'] ="40px";
            };
        return shelfProps;
        },

    videoPlayFocus: function(size) {
        property = brand.props;
        let shelfProps = {
                "outline": "rgb(255, 191, 71) solid 3px",     };
        return shelfProps;
    },
    videoPara: function(size) {   
        property = brand.props;
        let shelfProps = {
                "font-size": "13px",
                'color': property.$videoParaColor,
            };
        return shelfProps;
    },
    videoTranscript: function(size) {   
        property = brand.props;
        let shelfProps = {
                'font-family':"RNHouseSansRegular, sans-serif",
                "font-size": "13px",
                'color': property.$videoTranscriptColor,
                "line-height":"13px",
            };
        return shelfProps;
    },
    videoHeading: function(size) {   
        property = brand.props;
        let shelfProps = {
                'font-family':"RNHouseSansRegular, sans-serif",
                "font-size": "18px",
                'color': property.$videoHeadingColor,
            };
        return shelfProps;
    },

        /*videoHeadR: function(size) {   
            property = brand.props;
            let shelfProps = {
                    'font-family':"RNHouseSansBold, sans-serif",
                    "font-size": "32px",
                    'color': property.$primary_1,
                    'line-height':"39px"
                };
                if(size=="xs"){
                    shelfProps['font-size'] ="26px",
                    shelfProps['line-height'] ="30px";
                };
            return shelfProps;
            },

        videoHeadL: function(size) {   
        property = brand.props;
        let shelfProps = {
                'font-family':"RNHouseSansBold, sans-serif",
                "font-size": "32px",
                'color': property.$primary_1,
                'line-height':"39px"
            };
            if(size=="xs"){
                shelfProps['font-size'] ="26px",
                shelfProps['line-height'] ="30px";
            };
        return shelfProps;
        },

        videoAccordionHeader: function(size) {   
        property = brand.props;
        let shelfProps = {
                "font-family": "Verdana",
                "font-size":"18px",
                'width':"856px",
                "height": "73.9688px",
                "color": property.$primary_1
            };
        return shelfProps;
    },*/
	};
}