var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());
//Desktop
module.exports = {

    socialbarmaindiv: function (size) {
        console.log(size)
        property = brand.props;
        var shelfProps = {};



        if (size == "xs") {
            shelfProps["background"] = property.$st_maindiv_bg_M,
                shelfProps["float"] = "left",
                shelfProps["padding"] = "14.001px 0px 16.003px 7.995px",
                shelfProps["border-bottom"] = property.$st_maindiv_border_bottom_M,
                shelfProps["margin"] = "1px 1px 0px 0px"
        }
        else {

            shelfProps = {
                "position": "absolute",
                "top": "0px",
                "right": "0px",
                "padding": "0px",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0px 50% / auto padding-box border-box",
                "z-index": property.$st_maindiv_Zindex,

            };


        }
        return shelfProps;
    },

    socialbarul: function (size) {
        property = brand.props;
        var shelfProps = {};

        if (size == "xs") {
            shelfProps["float"] = "right",
                shelfProps["margin-top"] = "2px"
        }
        else {
            shelfProps = {
                "float": property.$st_ul_float,
                "margin-top": property.$st_ul_margin_top
            };

        }
        return shelfProps;
    },

    socialbarli: function (size) {
        property = brand.props;
        var shelfProps = {};

        if (size == "xs") {

            shelfProps["background"] = "rgb(255, 255, 255) none repeat scroll 0px 0px / auto padding-box border-box",
                shelfProps["float"] = "left",
                shelfProps["border-radius"] = "1px 1px 5px 5px",
                shelfProps["border-bottom"] = property.$st_ul_li_border_bottom_M,
                shelfProps["margin-right"] = "5.395px"

        }
        else {
            shelfProps = {
                "background": property.$st_li_bg,
                "float": property.$st_li_float,
                "margin-right": property.$st_li_margin_right,
                "border-radius": property.$st_li_border_radius,

            };
        }

        return shelfProps;
    },
    socialbarlilastchild: function (size) {
        property = brand.props;
        var shelfProps = {};

        if (size == "xs") {

            shelfProps["background"] = "rgb(255, 255, 255) none repeat scroll 0px 0px / auto padding-box border-box",
                shelfProps["float"] = "left",
                shelfProps["border-radius"] = "1px 1px 5px 5px",
                shelfProps["border-bottom"] = property.$st_ul_li_border_bottom_M,
                shelfProps["margin-right"] = "0px"

        }
        else {
            shelfProps = {
                "background": property.$st_li_bg,
                "float": property.$st_li_float,
                "margin-right": property.$st_li_margin_right,
                "border-radius": property.$st_li_border_radius,

            };
        }

        return shelfProps;
    },
    socialbarlink: function (size) {
        property = brand.props;
        var shelfProps = {};
            shelfProps = {
                "padding": property.$st_li_a_Padding,
                "margin": property.$st_li_a_margin,
                "background-color": property.$st_li_a_bg,
                "line-height": property.$st_li_a_line_height,
                "float": property.$st_li_a_float,
                "cursor": property.$st_li_a_cursor



            };
        return shelfProps;
    },

    socialbarspan: function (size) {
        property = brand.props;
        var shelfProps = {};
            

        if (size == "xs") {

            shelfProps["border-radius"] = "4px"

            }

            else{
                shelfProps = {
                    "position": property.$st_li_a_span_pos,
                    "border-radius": property.$st_li_a_span_border_radius,
                    "height": property.$st_li_a_span_height,
                    "width": property.$st_li_a_span_width,
                    "display": property.$st_li_a_span_display,
                    "background-color": property.$st_li_a_span_bg,
                    "overflow": "hidden"
    
    
                };
            }
        return shelfProps;
    },


    socialbarfacebook: function (size) {
        property = brand.props;
        var shelfProps = {};
           

        if (size == "xs") {

            shelfProps["left"] = "1px",
                shelfProps["top"] = "-22px",
                shelfProps["font-size"] = "30px",
                shelfProps["color"] = property.$st_socialicon_color_M

        }

        else{
            shelfProps = {
                'font-family': property.$st_icon_before_font_family,
                'position': property.$st_icon_before_position,
                'font-size': property.$st_icon_before_font_size,
                'left': property.$st_icon_before_left,
                'top': property.$st_fb_before_top


            };
        }
        return shelfProps;
    },

    socialbartwitter: function (size) {
        property = brand.props;
        var shelfProps = {};
           

        if (size == "xs") {

            shelfProps["left"] = "1px",
                shelfProps["top"] = "-22px",
                shelfProps["font-size"] = "30px",
                shelfProps["color"] = property.$st_socialicon_color_M

        }

        else{
            shelfProps = {
                'font-family': property.$st_icon_before_font_family,
                'position': property.$st_icon_before_position,
                'font-size': property.$st_icon_before_font_size,
                'left': property.$st_icon_before_left,
                'top': property.$st_twitter_before_top


            };
        }
        return shelfProps;
    },

    socialbaremail: function (size) {
        property = brand.props;
        var shelfProps = {};
           

        if (size == "xs") {

            shelfProps["left"] = "1px",
                shelfProps["top"] = "-22px",
                shelfProps["font-size"] = "30px",
                shelfProps["color"] = property.$st_socialicon_color_M

        }

        else{
            shelfProps = {
                'font-family': property.$st_icon_before_font_family,
                'position': property.$st_icon_before_position,
                'font-size': property.$st_icon_before_font_size,
                'left': property.$st_icon_before_left,
                'top': property.$st_email_before_top


            };
        }
        return shelfProps;
    },

    socialbarprint: function (size) {
        property = brand.props;
        var shelfProps = {};
           

        if (size == "xs") {

            shelfProps["left"] = "1px",
                shelfProps["top"] = "-22px",
                shelfProps["font-size"] = "30px",
                shelfProps["color"] = property.$st_socialicon_color_M

        }

        else{
            shelfProps = {
                'font-family': property.$st_icon_before_font_family,
                'position': property.$st_icon_before_position,
                'font-size': property.$st_icon_before_font_size,
                'left': property.$st_icon_before_left,
                'top': property.$st_print_before_top


            };
        }
        return shelfProps;
    },


    //new rebrand

    nwrebsocialbarmaindiv: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "position": "absolute",
                "top": "147px",
                "right": "0px",
                "padding": "0px",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0px 50% / auto padding-box border-box",
                "z-index": property.$st_maindiv_Zindex,
            };


        return shelfProps;
    },

    nwrebsocialbarul: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "float": property.$st_nwrebra_ul_float,
                "margin-top": property.$st_nwrebra_ul_margin_top,
                "margin-right": property.$st_nwrebra_ul_margin_right,
            };
        return shelfProps;
    },

    nwrebsocialbarli: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background": property.$st_nwrebra_li_bg,
                "float": property.$st_nwrebra_li_float,
                "margin-right": property.$st_nwrebra_li_margin_right,
                "border-radius": property.$st_nwrebra_li_border_radius,

            };
        return shelfProps;
    },

    nwrebsocialbarlink: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding": property.$st_nwrebra_li_a_Padding,
                "margin": property.$st_nwrebra_li_a_margin,
                "background-color": property.$st_nwrebra_li_a_bg,
                "line-height": property.$st_nwrebra_li_a_line_height,
                "float": property.$st_nwrebra_li_a_float,
                "cursor": property.$st_nwrebra_li_a_cursor,
                "display": property.$st_nwrebra_li_a_display,
            };
        return shelfProps;
    },




    nwrebsocialbarfacebook: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'position': property.$st_nwrebra_li_a_span_pos,
                'border-radius': property.$st_nwrebra_li_a_span_border_radius,
                'height': property.$st_nwrebra_li_a_span_height,
                'width': property.$st_nwrebra_li_a_span_width,
                'display': property.$st_nwrebra_li_a_span_display,
                'overflow': property.$st_nwrebra_li_a_span_overflow,
                'margin-bottom': property.$st_nwrebra_li_a_span_fb_margin_bottom,



            };
        return shelfProps;
    },

    nwrebsocialbartwitter: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'position': property.$st_nwrebra_li_a_span_pos,
                'border-radius': property.$st_nwrebra_li_a_span_border_radius,
                'height': property.$st_nwrebra_li_a_span_height,
                'width': property.$st_nwrebra_li_a_span_width,
                'display': property.$st_nwrebra_li_a_span_display,
                'overflow': property.$st_nwrebra_li_a_span_overflow,
                'margin-bottom': property.$st_nwrebra_li_a_span_twitter_margin_bottom,



            };
        return shelfProps;
    },

    nwrebsocialbaremail: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'position': property.$st_nwrebra_li_a_span_pos,
                'border-radius': property.$st_nwrebra_li_a_span_border_radius,
                'height': property.$st_nwrebra_li_a_span_height,
                'width': property.$st_nwrebra_li_a_span_width,
                'display': property.$st_nwrebra_li_a_span_display,
                'overflow': property.$st_nwrebra_li_a_span_overflow,
                'margin-bottom': property.$st_nwrebra_li_a_span_email_margin_bottom,



            };
        return shelfProps;
    },

    nwrebsocialbarprint: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'position': property.$st_nwrebra_li_a_span_pos,
                'border-radius': property.$st_nwrebra_li_a_span_border_radius,
                'height': property.$st_nwrebra_li_a_span_height,
                'width': property.$st_nwrebra_li_a_span_width,
                'display': property.$st_nwrebra_li_a_span_display,
                'overflow': property.$st_nwrebra_li_a_span_overflow,
                'margin-bottom': property.$st_nwrebra_li_a_span_print_margin_bottom,


            };
        return shelfProps;
    },


    //rebrand
    rebsocialbarmaindiv: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "position": "absolute",
                "top": "0px",
                "right": "0px",
                "padding": "0px",
                "background": "rgba(0, 0, 0, 0) none repeat scroll 0px 50% / auto padding-box border-box",
                "z-index": property.$st_maindiv_Zindex,
            };
        return shelfProps;
    },

    rebsocialbarul: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "float": property.$st_reb_ul_float,
                "margin-top": property.$st_reb_ul_margin_top,
            };
        return shelfProps;
    },

    rebsocialbarli: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background": property.$st_reb_li_bg,
                "float": property.$st_reb_li_float,
                "margin-right": property.$st_reb_li_margin_right,
                "border-radius": property.$st_reb_li_border_radius,

            };
        return shelfProps;
    },

    rebsocialbarlink: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding": property.$st_reb_li_a_Padding,
                "margin": property.$st_reb_li_a_margin,
                "background-color": property.$st_reb_li_a_bg,
                "line-height": property.$st_reb_li_a_line_height,
                "float": property.$st_reb_li_a_float,
                "cursor": property.$st_reb_li_a_cursor,



            };
        return shelfProps;
    },

    rebsocialbarspan: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "position": property.$st_reb_li_a_span_pos,
                "border-radius": property.$st_reb_li_a_span_border_radius,
                "height": property.$st_reb_li_a_span_height,
                "width": property.$st_reb_li_a_span_width,
                "display": property.$st_reb_li_a_span_display,
                "background-color": property.$st_reb_li_a_span_bg,
                "overflow": "hidden",


            };
        return shelfProps;
    },


    rebsocialbarfacebook: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'font-family': property.$st_reb_icon_before_font_family,
                'position': property.$st_reb_icon_before_position,
                'font-size': property.$st_reb_icon_before_font_size,
                'left': property.$st_reb_icon_before_left,
                'top': property.$st_reb_fb_before_top,


            };
        return shelfProps;
    },

    rebsocialbartwitter: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'font-family': property.$st_reb_icon_before_font_family,
                'position': property.$st_reb_icon_before_position,
                'font-size': property.$st_reb_icon_before_font_size,
                'left': property.$st_reb_icon_before_left,
                'top': property.$st_reb_twitter_before_top,


            };
        return shelfProps;
    },

    rebsocialbaremail: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'font-family': property.$st_reb_icon_before_font_family,
                'position': property.$st_reb_icon_before_position,
                'font-size': property.$st_reb_icon_before_font_size,
                'left': property.$st_reb_icon_before_left,
                'top': property.$st_reb_email_before_top,


            };
        return shelfProps;
    },

    rebsocialbarprint: function (size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                'font-family': property.$st_reb_icon_before_font_family,
                'position': property.$st_reb_icon_before_position,
                'font-size': property.$st_reb_icon_before_font_size,
                'left': property.$st_reb_icon_before_left,
                'top': property.$st_reb_print_before_top,


            };
        return shelfProps;
    },





};
