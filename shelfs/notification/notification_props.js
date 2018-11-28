//Desktop
module.exports = function(client){
     var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {

    themeWhiteShelf: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$ns_themewhite_bg,
                "color": property.$ns_themewhite_clr,
            };
        return shelfProps;
    },
    themeLightBlue: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$ns_themelightblue_bg,
                "color": property.$ns_themelightblue_clr,
            };
        return shelfProps;
    },
    themeBlueShelf: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$ns_themeblue_bg,
                "color": property.$ns_themeblue_clr,
            };
        return shelfProps;
    },
    themeLightGrey: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background-color": property.$ns_themelightgrey_bg,
                "color": property.$ns_themelightgrey_clr,
            };
        return shelfProps;
    },

    /*themeBlueShelftext: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               
               "color" : property.$ns_themeblue_clr,
            };
        return shelfProps;
    },
    themeLightBlueShelftext: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              
               "color" : property.$ns_themelightblue_clr,
            };
        return shelfProps;
    },
    themeLightGREYShelftext: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               
               "color" : property.ns_themelightgrey_clr,
            };
        return shelfProps;
    },
    themeWhiteShelftext: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               
               "color" : property.$ns_themewhite_clr,
            };
        return shelfProps;
    },*/




    notificationShelf: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'padding': property.$ns_padding,
            'margin-top': '0px',
        };
        return shelfProps;
    },


    Text: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': '14px',
            'line-height': property.$ns_Text_line_height,
            "font-family": property.$ns_notification_Shelf_font_family,
        };
        return shelfProps;
    },
    griditem: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            "padding-left": '47.996px',

        };
        return shelfProps;
    },
    headergroup: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            "margin": property.$ns_header_row_margin,
            "float": 'left',
            "position": "relative",
            "font-family": property.$ns_notification_Shelf_font_family,
        };
        return shelfProps;
    },
    headergroup_sign_post: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': property.$ns_header_sign_post_txt_font_size,
        };
        return shelfProps;
    },

    headergroup__headline: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': property.$ns_header_headline_txt_font_size,
            'line-height': property.$ns_header_headline_txt_line_height,
            'margin': '0px',
            "font-family": property.$ns_header_headline_txt_font_family,
        };
        return shelfProps;
    },

    notification_shelf_span: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': '16px',
            'line-height': '16px',
            "font-family": property.$ns_notification_Shelf_font_family,
            // "width":property.$ns_dwnld_span_width,
            "padding": property.$ns_dwnld_span_padding,
            "float": "left",
            // "background-image": 'url(../../designs/dmp/clientlibs_base/images/icons/rte-download.png)',
        };
        return shelfProps;
    },






    /*  notficationthemeprop1: function(size) {
          property = brand.props;
          var shelfProps = {},
              shelfProps = {
                 "background-color" :property.$ns_themewhite_bg,
                 "color" :property.$ns_themewhite_clr,
              };
          return shelfProps;
      },
      notficationthemeprop2: function(size) {
          property = brand.props;
          var shelfProps = {},
              shelfProps = {
                 "background-color" :property.$ns_themelightblue_bg,
                 "color" :property.$ns_themelightblue_clr,
              };
          return shelfProps;
      },
      notficationthemeprop3: function(size) {
          property = brand.props;
          var shelfProps = {},
              shelfProps = {
                 "background-color" :property.$ns_themeblue_bg,
                 "color" :property.$ns_themeblue_clr,
              };
          return shelfProps;
      },
      notficationthemeprop4: function(size) {
          property = brand.props;
          var shelfProps = {},
              shelfProps = {
                 "background-color" :property.$ns_themelightgrey_bg,
                 "color" :property.$ns_themelightgrey_clr,
              };
          return shelfProps;
      },
*/


    themeWhiteShelftext: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {

                "color": property.$ns_themewhite_text_clr,
            };
        return shelfProps;
    },
    themeLightBlueShelftext: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {

                "color": property.$ns_themelightblue_text_clr,
            };
        return shelfProps;
    },

    themeBlueShelftext: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_themeblue_text_clr,
            };
        return shelfProps;
    },

    themeLightGreyShelftext: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {

                "color": property.$ns_themelightgrey_text_clr,
            };
        return shelfProps;
    },



    themeWhiteShelfanchor: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {

                "color": property.$ns_dwnld_themewhite_anchor_clr,
            };
        return shelfProps;
    },
    themeLightBlueShelfanchor: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {

                "color": property.$ns_dwnld_themelightblue_anchor_clr,
            };
        return shelfProps;
    },

    themeBlueShelfanchor: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themeblue_anchor_clr,
            };
        return shelfProps;
    },


    themeLightGreyShelfanchor: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themelightgrey_anchor_clr,
            };
        return shelfProps;
    },


    themeWhiteShelfspan: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themewhite_span_clr,
            };
        return shelfProps;
    },
    themeLightBlueShelfspan: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themelightblue_span_clr,
            };
        return shelfProps;
    },

    themeBlueShelfspan: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themeblue_span_clr,
            };
        return shelfProps;
    },

    themeLightGreyShelfspan: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$ns_dwnld_themelightgrey_span_clr,
            };
        return shelfProps;
    },


    //Mobile Properties

    headergroupM: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            "margin": property.$ns_header_row_margin_M,
            "float": 'left',
            "position": "relative",
            "font-family": property.$ns_notification_Shelf_font_family_M,
        };
        return shelfProps;
    },
    headergroup_sign_postM: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': property.$ns_header_sign_post_txt_font_size_M,
        };
        return shelfProps;
    },

    headergroup__headlineM: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': property.$ns_header_headline_txt_font_size_M,
            'line-height': property.$ns_header_headline_txt_line_height_M,
            'margin': property.$ns_header_headline_txt_margin_M,
            "font-family": property.$ns_header_headline_txt_font_family,
        };
        return shelfProps;
    },

    MobileText: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': property.$ns_Text_font_size_M,
            'line-height': property.$ns_Text_line_height_M,
            "font-family": property.$ns_notification_Shelf_font_family_M,
        };
        return shelfProps;
    },
    notificationShelfM: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'padding': property.$ns_notification_Shelf_Padding__M,
        };
        return shelfProps;
    },

    notification_shelf_spanM: function (size) {
        var shelfProps = {}, property = brand.props;
        shelfProps = {
            'font-size': '16px',
            'line-height': '16px',
            "font-family": property.$ns_notification_Shelf_font_family_M,
            // "width":property.$ns_dwnld_span_width_M,
            "padding": property.$ns_dwnld_span_padding_M,
            "float": "left",
            // "background-image": 'url(../../designs/dmp/clientlibs_base/images/icons/rte-download.png)',
        };
        return shelfProps;
    },
};

}
