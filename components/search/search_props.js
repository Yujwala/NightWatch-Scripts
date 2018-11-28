//Desktop
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    SearchWrapper: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding" : property.$SearchWrapperPadding,
               "float": "right"
            };
        return shelfProps;
    },

    SearchInput: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$SearchInputColor,
               "background-color" : property.$searchInputbg,
               "font-size":property.$SearchInputfs,
               "line-height" : property.$SearchInputlh,
               "width":property.$SearchInputWidth,
               "height" :property.$SearchInputfsHeight,
               "padding" : property.$SearchInputPadding,
               "font-family":property.$font_family_SearchInput,
               "float": "left"
            };
        return shelfProps;
    },
    SearchBtn:function(size){
      property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$SearchBtnColor,
               "height" :property.$SearchBtnHgt,
               "width":property.$SearchBtnWid,
               "margin" : property.$SearchBtnMar,
               "float": "right",
               "padding":property.$SearchBtnPadd,
               "position":"relative"
            };
        return shelfProps;
    },
    SearchBtnImg: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$searchMargin,
               "display": property.$searchImgDis,
               "width": property.$searchImgWid,
               "height": property.$searchImgHgt
            };
        return shelfProps;
    },

    SearchBoxFocus: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$SearchBoxFocus,
               "background-color" : property.$SearchBoxFocusBG,
               "height" : property.$SearchInputfsHeight,
               "font-family":property.$font_family_SearchInput,
               "width":property.$SearchInputfsWid
            };
        return shelfProps;
    },

    SearchInter: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "width":"88px",
               "color" : property.$primary_2,
               "height" : "56px",
               "font-size":"14px",
            };
        return shelfProps;
    },

    SearchInterWrapper: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : "40px",
               "font-size":"16px",
               "color" : property.$SearchBoxFocus,
               "background-color" : property.$searchInputbg,
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

    SearchInterButton: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "height" : "40px",
               "width" : "80px",
               "background-color" : "rgba(68, 14, 94, 1)",
               "border-radius" : "5px",
               "top" : "8px",
               "line-height" : "18px",
               "font-size":"14px",
               "margin-right":"8px",
               "font-family":property.$font_family_SearchInput,
            };
        return shelfProps;
    },

   
//Mobile
    searchBarProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding" : property.$searchBar_padding,
               "height" : property.$searchBar_height,
               "overflow" : "hidden"
            };
        return shelfProps;
    },
    searchTextProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "color" : property.$searchText_color,
               "border-radius" : property.$search_border_radius,
               "box-shadow" : property.$search_box_shadow,
               "margin-top" : property.$searchText_margin_top,
               "line-height" : "30px",
               "background-color" : property.$searchInputbg_mob,
               "border" : "0px solid rgb(179, 180, 188)",
               "height": property.$seaInputHgt_mob,
               "width": property.$seaInputWid_mob
            };
             if(brand.props.$brandName=='lombard') {
               shelfProps["line-height"] = "21px"
             }
        return shelfProps;
    },
    searchIconProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-radius" : property.$searchIcon_border_radius,
               "height" : property.$searchIcon_height,
               "box-shadow" : property.$search_box_shadow,
               "margin-top" : property.$searchText_margin_top,
               "background-color" : property.$searchIconbg,
               "padding" : property.$searchIcon_padding,
               "background-position-x" : property.$searchIcon_bgPosx,
               "background-position-y" : property.$searchIcon_bgPosy,
               "background-size" : property.$searchIcon_bgSize,
               "text-indent": "-9999px"            
             };
        return shelfProps;
    },
    searchInputFocus: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color" : property.$searchText_color,
               "background-color" : property.$searchInputClick_bg,
               "height" : property.$searchIcon_height,
               "font-family": "RNHouseSansRegular"
            };
        return shelfProps;
    }, 
    searchIconWrap:function(size)  {
      property = brand.props;
      var shelfProps = {},
          shelfProps = {
            "float": "left",
            "width": property.$searchIconWrapWid,
            "position": "relative",
            "height": property.$searchIconWrapHgt,
            "cursor":"pointer"
          };
      return shelfProps;
    },
};
}