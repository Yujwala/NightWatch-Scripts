var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get()),
    property = brand.props;
//tool  shelf props
module.exports = {
    toolthemewhite: function (size) {
        let shelfProps = {
            "padding": property.$ts_shelfpadding,
            "color": property.$ts_themewhite_clr,
            "background": property.$ts_themewhite_bg,
            "position": "relative",
            "clear": "both",

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$ts_shelfpadding_M;
        }
        return shelfProps;
    },
    toolthemeblue: function (size) {
        let shelfProps = {
            "padding": property.$ts_shelfpadding,
            "color": property.$ts_themebluee_clr,
            "background": property.$ts_themeblue_bg,
            "position": "relative",
            "clear": "both",

        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$ts_shelfpadding_M
        }
        return shelfProps;
    },
    toolthemelightblue: function (size) {
        let shelfProps = {
            "padding": property.$ts_shelfpadding,
            "color": property.$ts_lightblue_clr,
            "background": property.$ts_lightblue_bg,
            "position": "relative",
            "clear": "both",

        };
        if (size === 'xs') {
            shelfProps['padding'] = "16px 0px";
        }
        return shelfProps;
    },
    toolthemeoffwhite: function (size) {
        let shelfProps = {
            "padding": property.$ts_shelfpadding,
            "color": property.$ts_themeoffwhite_clr,
            "background": property.$ts_themeoffwhite_bg,
            "position": "relative",
            "clear": "both",

        };
        if (size === 'xs') {
            shelfProps['padding'] = "16px 0px";
        }
        return shelfProps;
    },
    toolgriditem: function (size) {
        let shelfProps = {
            "padding-right": property.$ts_griditem_padright,
            "padding-left": property.$ts_griditem_padleft,
        };
        if (size === 'xs') {
            shelfProps['padding-right'] = "0px";
            shelfProps['padding-left'] = "0px";
            shelfProps['font-weight'] = "400";
        }
        return shelfProps;
    },
    toolgriditemonehalf: function (size) {
        let shelfProps = {
            "padding-right": property.$ts_griditem_padright,
            "padding-left": property.$ts_griditem_padleft,
        };
        if (size === 'xs') {
            shelfProps['padding-right'] = "16px";
            shelfProps['padding-left'] = "0px";
        }
        return shelfProps;
    },

    toolgriditemonethirdnext: function (size) {
        let shelfProps = {
            "padding-right": property.$ts_griditem_padright,
            "padding-left": property.$ts_griditem_onethird_padleft,
        };
        if (size === 'xs') {
            shelfProps['padding-right'] = "16px";
            shelfProps['padding-left'] = "10px";
        }
        return shelfProps;
    },
    toolgriditemheader: function (size) {
        let shelfProps = {
            "font-family": property.$ts_headgrp_fontfamily,
            "margin": property.$ts_headgrp_margin,
            "position": "relative",
            "clear": "both",
        };
        if (size === 'xs') {
            shelfProps['margin'] = property.$ts_headgrp_margin_M;

        }
        return shelfProps;
    },
    toolgriditemheadersignpost: function (size) {
        let shelfProps = {
            "font-size": property.$ts_headgrp_sign_font_size
        };
        if (size === 'xs') {
            shelfProps['font-size'] = "14px";

        }
        return shelfProps;
    },
    toolgriditemheaderheadline: function (size) {
        let shelfProps = {
            "font-size": property.$ts_headgrp_headline_font_size,
            "line-height": property.$ts_headgrp_headline_line_height,
            "font-family": property.$ts_headgrp_headline_font_family,
            "margin": property.$ts_headgrp_headline_margin,
        };
        if (size === 'xs') {
            shelfProps['font-size'] = property.$ts_headgrp_headline_font_size_M;
            shelfProps['line-height'] =property.$ts_headgrp_headline_line_height_M;
            shelfProps['margin'] = property.$ts_headgrp_headline_margin_M;

        }
        return shelfProps;
    },

    toolgriditemdescrichtxt: function (size) {
        let shelfProps = {
            "padding-right": property.$ts_tool_comp_richtext_padd_right,
            "font-size": property.$ts_tool_comp_richtext_font_size,
        };
        if (size === 'xs') {
            shelfProps['font-size'] = "13px";
            shelfProps['padding-right'] = "16px";
        }
        return shelfProps;
    },
    toolgriditemdescrichtxtp: function (size) {
        let shelfProps = {
            "line-height": property.$ts_tool_comp_richtextp_line_height,
            "padding-bottom": property.$ts_tool_comp_richtextp_padd_bottom,
            "font-size": property.$ts_tool_comp_richtextp_font_size,

            "font-family": property.$ts_tool_comp_richtextp_fontfamily,
        };
        if (size === 'xs') {
            shelfProps['font-size'] = "16px";
            shelfProps['padding-bottom'] = "16px";
            shelfProps['line-height'] = "22px";
        }
        return shelfProps;
    },
    toolgriddesk: function (size) {
        let shelfProps = {
            "padding-left": property.$ts_tool_griddesk_padleft,
            "padding-right": property.$ts_tool_griddesk_padright,
        };
        if (size === 'xs') {

            shelfProps['padding-left'] = "0px";
            shelfProps['padding-right'] = property.$ts_tool_griddesk_padright_M;

        }
        return shelfProps;
    },
    toolgriddeskanchor: function (size) {
        let shelfProps = {
            "padding": property.$ts_tool_griddeska_padding,
            "margin-bottom": property.$ts_tool_griddeska_margin_bott,
            "background": property.$ts_tool_griddeska_bg,
            "font-size": property.$ts_tool_griddeska_font_size,
            "font-family": property.$ts_tool_griddeska_fontfamily,
            "color": property.$ts_tool_griddeska_clr,
        };
        if (size === 'xs') {

            shelfProps['padding'] = property.$ts_tool_griddeska_padding_M;

        }
        return shelfProps;
    },
    toolgriddeskanchoricon: function (size) {
        let shelfProps = {
            "font-family": property.$ts_tool_griddesk_tool__icon_fontfamily,
        };
        // if(size==='xs'){

        // }
        return shelfProps;
    },
    toolgriddeskpicon: function (size) {
        let shelfProps = {
            "position": 'absolute',
            "bottom": "20px",
            "font-family": property.$ts_tool_griddesk_tool__icon_fontfamily,
            "font-size": "23px",
            "line-height": "1px",
        };
        // if(size==='xs'){

        // }
        return shelfProps;
    },

    toolgridonethird: function (size) {
        let shelfProps = {

        };
        if (size === 'xs') {

            shelfProps['padding-left'] = "0px";
            shelfProps['padding-right'] = "16px";

        }
        return shelfProps;
    },
    toolgridtwothird: function (size) {
        let shelfProps = {

        };
        if (size === 'xs') {

            shelfProps['padding-left'] = "0px";
            shelfProps['padding-right'] = "0px";

        }
        return shelfProps;
    },


}
