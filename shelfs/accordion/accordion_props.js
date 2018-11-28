module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    paddingProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "padding-top" : "26px",
               "padding-bottom" : "19px"
            };
            if(size=="xs"){
                shelfProps["padding-top"] = property.$accpadtop,
                shelfProps["padding-bottom"] = property.$accpadbottom,
                shelfProps["background-color"] = property.$accBg_clr
            }
        return shelfProps;
    },
     themeWhiteShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$canvas_bg_color,
            };
        return shelfProps;
    },
     themeBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$primary_1,
            };
        return shelfProps;
    },
   
    titleWrapProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
                "margin" : "3px 48px 42px",
                "padding" : "0px"
             };
             if(size =="xs"){
                shelfProps["margin"] = property.$acc_titlemar,
                shelfProps["padding"] = "0px 16px"
             }
        return shelfProps;
    },
   
    titleClsProps: function(size) {

        var shelfProps = {},property = brand.props;
            shelfProps = {
               "font-size" : property.$acctitle_fs,
               "line-height" : property.$acctitle_lh,
               "margin" : "0px",
               "font-family" : property.$font_family_title
            };
            if(size=="xs"){
                 shelfProps['font-size'] = property.$acctitle_fsxs,
                 shelfProps["line-height"]=property.$acctitle_lhxs,
                 shelfProps[ "margin"]=property.$acctitle_marxs
             }
        return shelfProps;
    },
    
    accShelfProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "margin" : property.$acc_shelf_mar,
               "padding" :  property.$acc_shelf_pad,
               "width" : "823px",
               "background-color" : property.$acc_bg_color
            };
            if(size=="xs"){
                shelfProps['background-color'] =property.$acc_bg_color,
                shelfProps[ "padding"]=property.$acc_pad,
                shelfProps[ "width"]="426px",
                shelfProps[ "margin"]=  property.$acc_shelf_marxs
            }
        return shelfProps;
    },
    accShelfhalfProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "width" : "359px",
            };
            return shelfProps;
    },
    accShelfonethirdProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "width" : "205px",
            };
            return shelfProps;
    },
    accShelftwothirdProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "width" : "494px",
            };
            return shelfProps;
    },
    accShelftwothirdPropsNWMAR: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "width" : "823px",
            };
            return shelfProps;
    },
    accShelfPropslom: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : property.$whiteSmoke_1
            };
            return shelfProps;
    },
   
    accSectionProps: function(size) {
        var shelfProps = {},
            shelfProps = {
              "margin" : property.$acc_section_mar
            };
            if(size=="xs"){
                shelfProps[ "margin"]=property.$acc_mar
            }
        return shelfProps;
    },
   
    accLastShelfProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
              "margin" : property.$accLast_mar,
              "padding" :  property.$acc_shelf_pad,
              "background-color" : property.$accLast_bg_color,
               "border-bottom-left-radius" : property.$acc_borblr,
               "border-bottom-right-radius" : property.$acc_borbrr
            };
            if(size=="xs"){
                shelfProps["margin"] = "0px 0px 21px",
                shelfProps["padding"] = property. $acc_padxs,
                shelfProps["border-bottom-left-radius"] = property.$acc_borblr,
                shelfProps["border-bottom-right-radius"] =  property.$acc_borbrr
            }
        return shelfProps;
    },
    accFirstShelfProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "border-top-left-radius" : property.$acc_bortlr,
               "border-top-right-radius" : property.$acc_bortrr
            };
        return shelfProps;
    },
    accTitleWrapProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "padding-left" : "44px",
               "padding-right" : "46px",
               "padding-top" : "7px",
            };
            if(size=="xs"){
                shelfProps["padding-left"] = property.$acc_padl
                shelfProps["padding-right"] = property.$acc_padr
                shelfProps["padding-top"] = "0px"
            }
        return shelfProps;
    },
    accTitleProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "font-size" : "24px",
               "line-height" : "24px",
               "font-family" : property.$font_family_regular,
               "color" : property.$primary_1
            };
            if(size=="xs"){
                shelfProps['font-size'] ="22px",
                shelfProps["line-height"]="26px",
                shelfProps["font-family"]=property.$font_family_regular,
                shelfProps[ "color"]=property.$primary_1
            }
        return shelfProps;
    },
   
    iconClsProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "margin-top" : "7px",
               "width" : "23px",
               "height" : "23px",
               "float" : "left"
            };
            if(size=="xs"){
                shelfProps["width"] ="23px",
                shelfProps["height"]="23px",
                shelfProps["margin-top"]="0px",
                shelfProps["float"]="left"
            }
        return shelfProps;
    },
   
    iconImageClsProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "margin-bottom" : "13px"
            };
        return shelfProps;
    },
    rteSeparatorProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "border-top-color" : "rgba(209, 201, 191, 1)",
               "border-top-style" : "solid",
               "border-top-width" : "1px",
               "margin" : "0px auto 19px",
               "width" : "100%"
            };
            if(size=="xs"){
                shelfProps["border-top-color"] ="rgba(209, 201, 191, 1)",
                shelfProps["border-top-style"]="solid",
                shelfProps["border-top-width"]="1px",
                shelfProps[ "margin"]="0px 0px 19px",
                shelfProps[ "width"]="394px"
            }
        return shelfProps;
    },
    
    rteTextProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "line-height" : "18px",
               "font-size" : "14px",
               "font-family" : property.$font_family_regular,
               "color" : property.$accrteclr,
               "padding" :property.$accrtepad,
            };
            if(size=="xs"){
                shelfProps['font-size'] =property.$acc_fs,
                shelfProps["padding"]=property.$accrtepadxs,
                shelfProps["line-height"]=property.$acc_liht
            }
        return shelfProps;
    },
    rteulliprops :function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "margin" : "0px",
               "padding-left" : "15px",
               "color" :  property.$accrteclr
            };
            if(size=="xs"){
                shelfProps["margin"]="7px 0px 0px",
                shelfProps["padding-left"]="5px",
                shelfProps[ "color"]=property.$accrteclr
            }
        return shelfProps;
    },
    rteolliprops :function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "margin" : "5px 0px"
            };
            return shelfProps;
    },
    rteLinkprops :function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "text-decoration":property.$accrte_linku,
               "color" : property.$accrte_linkclr,
            };
            return shelfProps;
    },
    rteTableprops :function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "border-radius": "0px",
               "border-bottom" : property.$accrte_tabbb,
               "color" :property.$accrte_tabclr,
               "line-height" : property.$accrte_tablh,
               "font-size" : property.$accrte_tabfs
            };
            if(size=="xs"){
                shelfProps["border-bottom"]="2px solid rgb(180, 169, 159)"
            }
            return shelfProps;
    },
    ctaPrimaryProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
              "margin" : "10px 21px 16px 0px",
              "padding" : "10px 18px 12px 20px",
               "font-family" : property.$primary_cta_font,
               "background-color" : "rgba(52, 162, 178, 1)",
               "border-bottom-left-radius" : "5px",
               "border-bottom-right-radius" : "5px",
               "border-top-left-radius" : "5px",
               "border-top-right-radius" : "5px",
               "box-shadow" : "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
               "color" : property.$primary_2,
               "font-size" : "18px",
               "line-height" : "24px",
               "text-align" : "center",
               "border-top-color" : "rgba(67, 201, 210, 1)",
               "border-top-style" : "solid",
               "border-top-width" : "1px",
               "text-shadow" : property.$accCtaTextShadow,
               "max-width" : "262px",
               "min-width" : "0px",
               "cursor" : "pointer"
            };
        return shelfProps;
    },
    ctaPrimaryPropsMob: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "margin" : "10px 21px 16px 0px",
               "padding" : "10px 18px 12px 20px",
               "font-family" : property.$primary_cta_font,
               "background-color" : "rgba(52, 162, 178, 1)",
               "border-bottom-left-radius" : "5px",
               "border-bottom-right-radius" : "5px",
               "border-top-left-radius" : "5px",
               "border-top-right-radius" : "5px",
               "box-shadow" : "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
               "color" : property.$primary_2,
               "font-size" : "18px",
               "line-height" : "24px",
               "text-align" : "center",
               "border-top-color" : "rgba(67, 201, 210, 1)",
               "border-top-style" : "solid",
               "border-top-width" : "1px",
               "text-shadow" : "rgb(19, 104, 126) 0px 2px 0px",
               "cursor" : "pointer"
            };
        return shelfProps;
    },
    ctaPrimaryHoverProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : "rgba(48, 144, 158, 1)",
               "color" : property.$primary_2,
               "box-shadow" : "rgb(27, 118, 139) 0px 3px 0px 0px, rgb(67, 201, 210) 0px 1px 0px 0px inset",
            };
        return shelfProps;
    },
    ctaPrimaryFocusProps: function(size) {
        var shelfProps = {},property = brand.props;
            shelfProps = {
               "background-color" : property.$accCtaFocus,
               "padding" : "10px 18px 12px 20px"
            };
        return shelfProps;
    },
   
    arrowActiveProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "top" : "3px",
               "width" : property.$accarrowwid,
               "height" : property.$accarrowht,
               "position" : "absolute",
               "right" : "0px",
               "cursor" : "pointer",
               "background-attachment" : "scroll"
            };
            if(size=="xs"){
                shelfProps["top"] = "0px"
            }
        return shelfProps;
    },
    
    accHighlightProps: function(size) {
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" :  property.$acchighpb,
               "outline-color" : property.$accoutclr,
               "outline-style" : property.$accoutstyle,
               "outline-width" : property.$accoutwid,
            };
            if(size=="xs"){
                shelfProps["padding-bottom"] = property.$acchighpbxs
            }
        return shelfProps;
    },
  };
    
}
