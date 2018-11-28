module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    sharePriceWrapperProp: function(size) {
           let shelfProps = {
                "background-color":property.$gcrBgClr,
                "border-bottom-color":property.$gcrBottomBorderClr,
                "border-bottom-width":"1px",
                "border-left-color":property.$gcrBorderClr,
                "border-right-color":property.$gcrBorderClr,
                "border-top-color":property.$gcrBorderClr,
            };
        return shelfProps;
  },
   sharePriceiFrameProp: function(size) {
           let shelfProps = {
                "height":"20px",
                "line-height":"15px",
            };
        return shelfProps;
    },
    sharePriceTextProp1: function(size) {
           let shelfProps = {
                "display":"inline-block",
                "font-size":"13px",
                "font-family":property.$gcrFF,
                "color":property.$gcrTextClr1
            };
        return shelfProps;
    },
    sharePriceTextProp2: function(size) {
           let shelfProps = {
                "font-size":"13px",
                "font-family":property.$gcrFF,
                "color":property.$gcrTextClr2
            };
        return shelfProps;
    },
    sharePriceTextProp3: function(size) {
           let shelfProps = {
                "font-size":"13px",
                "font-family":property.$gcrFF,
                "color":property.$gcrTextClr1,
                "padding":"15px 0px 2px"
            };
        return shelfProps;
    },
    sharePriceTextProp4: function(size) {
           let shelfProps = {
                "font-size":"13px",
                "font-family":property.$gcrFF,
                "color":property.$gcrTextClr1,
                "padding":"1px 0px",
                "margin-top":"6px"
            };
        return shelfProps;
    },
};
}