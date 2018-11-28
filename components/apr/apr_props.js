var rte_props = require('../rte/rte_props.js');
//apr props
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    themeLightBlueProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_lightbluebgcolor,
        };
        return shelfProps;
    },
    themeWhiteProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_whitebgcolor,
        };
        return shelfProps;
    },

    themeBlueProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_bluebgcolor,
        };
        return shelfProps;
    },

    aprWrapperProps: function (size) {
        let shelfProps = {
            "padding": property.$apr_wrapper_padding,
            "background-color": property.$apr_bgcolor,
            "border-top": property.$apr_border_top,
            "margin-bottom": property.$apr_margin,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$apr_wrapper_padding_m;
        }
        return shelfProps;
    },
    aprWrapper1Props: function (size) {
        let shelfProps = {
            "padding": property.$apr_wrapper_padding,
            "background-color": property.$apr_bgcolor,
            "border-top": property.$apr_border_top_1,
            "margin-bottom": property.$apr_margin,
        };
        if (size === 'xs') {
            shelfProps['padding'] = property.$apr_wrapper_padding_m;

        }
        return shelfProps;
    },
    aprPProps: function (size) {
        let rteprops = rte_props.PropTextfs12(size);
        let shelfProps = {
            "padding-bottom": "14px",
            "color": property.$apr_p_bgcolor,
            "line-height" : property.$apr_p_lh,
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$apr_p_lh_m;
            shelfProps['font-size'] = property.$apr_p_fz_m;
            shelfProps['padding-bottom'] = property.$apr_p_padding_m;
        }
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    aprP1Props: function (size) {
        let rteprops = rte_props.PropTextfs12(size);
        let shelfProps = {
            "padding-bottom": "14px",
            "color": property.$apr_grid_bgcolor_1,
            "line-height" : property.$apr_p_lh,
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$apr_p_lh_m;
            shelfProps['font-size'] = property.$apr_p_fz_m;
            shelfProps['padding-bottom'] = property.$apr_p_padding_m;
        }
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    aprH4Props: function (size) {
        let rteprops = rte_props.PropTextH4(size);
        let shelfProps = {
            "color": property.$apr_h4_bgcolor,
        };
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    H4Props: function (size) {
        let rteprops = rte_props.PropTextH4(size);
        let shelfProps = {
            "color": property.$apr_grid_bgcolor_1,
        };
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    aprUlProps: function (size) {
        let shelfProps = {
            "padding-bottom": "13px",
            "list-style": "none outside none"
        };
        return shelfProps;
    },
    aprLiProps: function (size) {
        let rteprops = rte_props.PropTextLi(size);
        let shelfProps = {
            "color": property.$apr_li_bgcolor,
            "padding-left": "9.632px",
            "margin": "5px 0px",
        };
        if (size === 'xs') {
            shelfProps['line-height'] = property.$apr_li_lh_m;
            shelfProps['font-size'] = property.$apr_p_fz_m;
            shelfProps['padding-left'] = property.$apr_li_padding;
        }
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    LiProps: function (size) {
        let rteprops = rte_props.PropTextLi(size);
        let shelfProps = {
            "color": property.$apr_grid_bgcolor_1,
            "padding-left": "9.632px",
            "margin": "5px 0px",
        };
        if (size === 'xs') {
            if (size === 'xs') {
                shelfProps['line-height'] = property.$apr_li_lh_m;
                shelfProps['font-size'] = property.$apr_p_fz_m;
                shelfProps['padding-left'] = property.$apr_li_padding;
            }
        }
        shelfProps = Object.assign(rteprops, shelfProps);
        return shelfProps;
    },
    gridProps: function (size) {
        let shelfProps = {
            "padding-left": "47.996px",
        };
        if (size === 'xs') {
            shelfProps['padding-left'] = "0px";
        }
        return shelfProps;
    },
    ctaMProps: function (size) {
        let shelfProps = {
            "color": property.$apr_ctam_color,
            "margin": property.$apr_ctam_margin,
            "padding": property.$apr_ctam_padding,
            "line-height": property.$apr_ctam_lineheight,
            "font-size": "18px",
            "font-family": "RNHouseSansRegular",
            "max-width": property.$apr_ctam_max,
        };
        if (size === 'xs') {
            shelfProps['padding'] = "5px 42px 5px 0px";
            shelfProps['margin'] = "3px 0px 1px";
            shelfProps['max-width'] = "320px";
            shelfProps['line-height'] = property.$apr_ctam_lineheight_m;
        }
        return shelfProps;
    },
    ctaM1Props: function (size) {
        let shelfProps = {
            "color": property.$apr_ctam_color_1,
            "margin": property.$apr_ctam_margin,
            "padding": property.$apr_ctam_padding,
            "line-height": property.$apr_ctam_lineheight,
            "font-size": "18px",
            "font-family": "RNHouseSansRegular",
            "max-width": property.$apr_ctam_max,
        };
        if (size === 'xs') {
            shelfProps['padding'] = "5px 42px 5px 0px";
            shelfProps['margin'] = "3px 0px 1px";
            shelfProps['max-width'] = "320px";
            shelfProps['line-height'] = property.$apr_ctam_lineheight_m;
        }
        return shelfProps;
    },
    ctaLProps: function (size) {
        let shelfProps = {
            "margin": "10px 21px 16px 0px",
            "padding": "10px 18px 12px 20px",
            "font-family": "RNHouseSansBold",
            "border-top": property.$apr_ctal_border_top,
            "box-shadow": property.$apr_ctal_boxshadow,
            "color": property.$primary_2,
            "cursor": "pointer",
            "font-size": "18px",
            "line-height": "24px",
            "max-width": property.$apr_ctal_max,
            "text-shadow": property.$apr_ctal_textshadow,
            "border-radius": property.$apr_ctal_radius,
            "text-align": "center",
        };
        if (size === 'xs') {
            shelfProps['max-width'] = "none";
            shelfProps['text-shadow'] = property.$apr_ctal_textshadow_m;
        }
        return shelfProps;
    },

    ctaMHoverProps: function (size) {
        let shelfProps = {
            "color": property.$apr_ctam_hover,
        };
        return shelfProps;
    },

    ctaLHoverProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_ctal_hover,
        };
        return shelfProps;
    },
    FocusMProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_focus_bgcolor,
            "border":property.$apr_focus_border,
        };
        if(size==='xs'){
            shelfProps['border'] = property.$apr_focus_border_m;
        }
        return shelfProps;
    },

    FocusLProps: function (size) {
        let shelfProps = {
            "background-color": property.$apr_focus_bgcolor_1,
            "border":property.$apr_focus_border,
        };
        return shelfProps;
    },
};
}