var rte_props = require('../rte/rte_props.js');
//Desktop
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {

   comparisonTableProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin" : property.$productTable_margin,
               "font-family" : property.$productTable_font_family,
            };
        return shelfProps;
    },
   
   LightBandDarkTheme: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$lightBandDarkTheme_bgColor,
            };
        return shelfProps;

   },
   LightBandDarkThemeRte: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color": property.$lightBandDarkTheme_color
            };
        return shelfProps;

   },
    lightBandNothemeTh: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$NoTheme_bgColor
            };
        return shelfProps;

   },
   lightBandNothemeRte: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color":property.$lightBandNoTheme_color
            };
        return shelfProps;

   },
    heavyBandDarkTheme: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$heavyBandDarkTheme_bgColor
            };
        return shelfProps;

   },
   heavyBandDarkThemeRte: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color":property.$heavyBandDarkTheme_color
            };
        return shelfProps;

   },
    heavyBandNothemeTh: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color": property.$NoTheme_bgColor
            };
        return shelfProps;

   },
   heavyBandNothemeRte: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "color":property.$heavyBandNoTheme_color
            };
        return shelfProps;

   },
   TableHeaderProps: function(size){
      property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "border-bottom":property.$tableheading_border_bottom
            };
        return shelfProps;
   },
   
   TableHeaderPaddingProps: function(size){
     property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property.$tableHead_padding
            };
        return shelfProps;
   },
   TableHeaderRteProps: function(size){
   property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size":property.$tableheading_font_size,
               "line-height": property.$tableheading_line_height
            };
        return shelfProps;

   },
   comparisonTableHeaderFirstProps: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property.$tableHead_padding_firstChild
            };
        return shelfProps;

   },
     comparisonTableHeaderLastProps: function(size){
    property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property. $tableHead_padding_lastChild
            };
        return shelfProps;

   },
    heavyBandRowEvenProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color": property.$heavyrow_even_bgColor
            };
        return shelfProps;
    },
     heavyBandRowOddProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color": property.$heavyrow_odd_bgColor
            };
        return shelfProps;
    },
     lightBandRowEvenProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color": property.$lightrow_even_bgColor
            };
        return shelfProps;
    },
     lightBandRowOddProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color": property.$lightrow_odd_bgColor
            };
        return shelfProps;
    },
    tableDataProps: function(size){
          property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property.$tableData_padding,
            };
        return shelfProps;
    },
    tableDataFirstChild: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property.$tableData_padding_firstchild
            };
        return shelfProps;
    },
    tableDataLastChild: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding": property.$tableData_padding_lastchild
            };
        return shelfProps;
    },
    WhiteBandTxtProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "font-size": property. $rteText_white_band_font_size
            };
        return shelfProps;

    },
    tableDataListPropsUl: function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom": property.$rteText_ul_padding_bottom
            };
        return shelfProps;
    },
    HeavyListUlBodyCopy:function(size){
      property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom": property.$rteText_ulBodyCopy_padding_bottom,
               "padding-right": property.$heavyRteText_ulBodyCopy_padding_right
            };
        return shelfProps;
    },
     LightListUlBodyCopy:function(size){
      property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom": property.$rteText_ulBodyCopy_padding_bottom,
               "padding-right": property.$lightRteText_ulBodyCopy_padding_right
            };
        return shelfProps;
    },
    tableDataListPropsLi: function(size){
        property = brand.props;
        let rteprops=rte_props.PropTextLi(size);
        var shelfProps = {},
            shelfProps = {
                "padding-left" : property.$rteText_list_padding_left,
                 "color": property.$rteText_list_color
            };
        shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    tableDataIconInfoProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-left":property.$info_icon_margin_left,
                "font-size":property.$info_icon_font_size,
                "color": property.$info_icon_color,
            };
        return shelfProps;
    },
    IconInfoLinkProps: function(size){
       property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "width":property.$info_icon_link_width,
                "height":property.$info_icon_link_height,
            };
        return shelfProps;

    },

    InfoIconFocusProps: function(size){
      property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "outline-color": property.$info_icon_focus_outline
            };
           return shelfProps;   
    },
    ToolTipProps: function(size){
     property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "padding": property.$tool_tip_padding,
               "color":property.$tool_tip_color,
                "font-size": property.$tool_tip_font_size,
                "line-height": property.$tool_tip_line_height,
                 "background-color": property.$tool_tip_bgColor,
                 "border-radius": property.$tool_tip_border_radius
              
            };
           return shelfProps; 

    }
  };

    }


  