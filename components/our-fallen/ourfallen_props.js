//Desktop
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    headerTitleProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family":property.$font_family_regular,
                "font-size": "28px",
               "line-height" : "36px",
                "margin":"0px 0px 16px",
                "color":property.$rem_header_color,
                "max-width":"576px",
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    headerTitlePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family":property.$font_family_regular,
                "font-size": "28px",
               "line-height" : "36px",
                "margin":"0px 0px 16px",
                "color":property.$rem_header_colorMob,
            };
//console.log("Header properties-----",shelfProps);
        return shelfProps;
    },
    subTitleProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_subtitle_color,
                "font-size": "18px",
                "line-height":"30px",
                "margin":"0px 0px 8px",
                "font-family":property.$font_family_regular,
                "padding":"0px",
            };
//console.log("Subtitle properties-----",shelfProps);
        return shelfProps;
    },
    subTitlePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_subtitle_colorMob,
            };
//console.log("Subtitle properties-----",shelfProps);
        return shelfProps;
    },
    firstNameProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_firstname_color,
                "font-size": "14px",
                "height":"18px",
                "margin":"0px 10px 0px 0px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_firstname_backgroundcolor,
                "border-bottom-color":property.$rem_firstname_borderbottomcolor,
            };
//console.log("FirstName Input properties-----",shelfProps);
        return shelfProps;
    },
    firstNamePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_firstname_colorMob,
                "font-size": "14px",
                "height":property.$rem_firstname_height,
                "margin":"0px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_firstname_backgroundcolorMob,
            };
//console.log("FirstName Input properties-----",shelfProps);
        return shelfProps;
    },
    lastNameProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_lastname_color,
                "font-size": "14px",
                "height":"18px",
                "margin":"0px 10px 0px 0px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_lastname_backgroundcolor,
                "border-bottom-color":property.$rem_lastname_borderbottomcolor,
            };
//console.log("lastName Input properties-----",shelfProps);
        return shelfProps;
    },
    lastNamePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_lastname_colorMob,
                "font-size": "14px",
                "height":property.$rem_lastname_height,
                "margin":"0px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_lastname_backgroundcolorMob,
            };
//console.log("lastName Input properties-----",shelfProps);
        return shelfProps;
    },
    bankNameProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_bankname_color,
                "font-size": "14px",
                "height":"34px",
                "font-family":property.$font_family_regular,
                "background-color":property.$rem_bankname_backgroundcolor,
            };
//console.log("Bank Name Selector properties-----",shelfProps);
        return shelfProps;
    },
    bankNamePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_bankname_colorMob,
                "font-size": "14px",
                "height":"32px",
                "font-family":property.$font_family_regular,
                "background-color":property.$rem_bankname_backgroundcolor,
            };
//console.log("Bank Name Selector properties-----",shelfProps);
        return shelfProps;
    },

    bankNameSpanProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height" : "18px",
                "border-bottom-color": property.$rem_banknamespan_borderbottomcolor,
                "padding":"8px 21px 8px 16px",
                "background-size":"11px",

            };
//console.log("Bank Name Selector properties-----",shelfProps);
        return shelfProps;
    },
    searchButtonHoverProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color":property.$rem_searchbuttonhover_backgroundcolor,
                 };
//console.log("Search Button Hover properties-----",shelfProps);
        return shelfProps;
    },
    dateOfDeathProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_dateofdeath_color,
                "font-size": "14px",
                "height":"34px",
                "font-family":property.$font_family_regular,
                "background-color":property.$rem_dateofdeath_backgroundcolor,
            };
//console.log("Date of Death Properties properties-----",shelfProps);
        return shelfProps;
    },
    dateOfDeathPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_dateofdeath_colorMob,
                "font-size": "14px",
                "height":"32px",
                "font-family":property.$font_family_regular,
                "background-color":property.$rem_dateofdeath_backgroundcolor,
            };
//console.log("date of death properties Mobile-----",shelfProps);
        return shelfProps;
    },
    resSearchButtonProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_searchbutton_color,
                "font-size": "14px",
                "line-height":"18px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_searchbutton_backgroundcolor,
            };
//console.log("Search Button properties-----",shelfProps);
        return shelfProps;
    },
    resSearchButtonPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_searchbutton_colorMob,
                "font-size": "14px",
                "line-height":"18px",
                "font-family":property.$font_family_regular,
                "padding":"8px",
                "background-color":property.$rem_searchbutton_backgroundcolorMob,
            };
//console.log("Search Button properties-----",shelfProps);
        return shelfProps;
    },
    filterResultsProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_filterres_color,
                "font-size": "20px",
                "line-height":"24px",
                "font-family":property.$font_family_regular,
                "margin":"0px 0px 16px",
                "display":"block",
            };
//console.log("Search Button properties-----",shelfProps);
        return shelfProps;
    },
    lasNameProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_lasname_color,
                "font-size": "16px",
                "line-height":"18px",
                "font-family":property.$font_family_regular,
                "display":"block",
                "margin":"0px 0px 16px",
            };
//console.log("Search Button properties-----",shelfProps);
        return shelfProps;
    },
    filterDivProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_resdiv_color,
                "background-color":property.$rem_resdiv_backgroundcolor,
                "line-height":"13px",
                "border-bottom-color":property.$rem_resdiv_bordercolor,
                "padding":"24px 16px 16px",
                "border":"1px solid rgb(212, 212, 212)",
                "height":"375px",
            };
//console.log("Filter results Division properties-----",shelfProps);
        return shelfProps;
    },
    alphabetRowProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_alphrow_color,
                "font-family":property.$font_family_regular,
                "display":"block",
                "margin":"0px 0px 7px",
            };
//console.log("properties of alphabet rows-----",shelfProps);
        return shelfProps;
    },
    singleProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color" : property.$rem_single_color,
                "font-size": "14px",
                "line-height":"18px",
                "font-family":property.$font_family_regular,
                "padding":"8px 22px",
                "border-bottom-color":property.$rem_single_bordercolor,
      };
//console.log("properties of the alphabets in the row-----",shelfProps);
        return shelfProps;
    },

  outLineProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            "outline-color":property.$rem_outlineprops_outlinecolor,
            "width":"8px"
      };
//console.log("properties of alphabets Outline-----",shelfProps);
        return shelfProps;
    },

    searchBtnFocusProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            "background-color":property.$rem_searchbuttonfocus_backgroundcolor,
            "color":property.$rem_searchbuttonfocus_color,
            "border-top-color":property.$rem_searchbuttonfocus_bordertopcolor,

      };
//console.log("properties of alphabets Focus-----",shelfProps);
        return shelfProps;
    },

    searchResultsDivProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "float" : "right",
                "display": "block",
                "line-height":property.$rem_searchresultsdiv_lineheight,
                "color":property.$rem_searchresultsdiv_color,
                "border-bottom-color":property.$rem_searchresultsdiv_borderbottomcolor,
      };
//console.log("properties of search results Division-----",shelfProps);
        return shelfProps;
    },
    searchResultsDivPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "display": "block",
                "line-height":"13px",
                "color":property.$rem_searchresultsdiv_colorMob,
                "border-bottom-color":property.$rem_searchresultsdiv_borderbottomcolorMob,
      };
//console.log("properties of search results Division-----",shelfProps);
        return shelfProps;
    },

    sortSelectionDivProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size" : "13px",
                "display": "block",
                "line-height":property.$rem_sortselectiondiv_lineheight,
                "padding":"0px 0px 24px",
                "margin":"0px 0px 24px",
      };
//console.log("properties of sort Selection Division-----",shelfProps);
        return shelfProps;
    },
    sortSelectionDivPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size" : "13px",
                "display": "block",
                "line-height":"13px",
                "padding":"0px",
                "margin":"0px 0px 24px",
      };
//console.log("properties of sort Selection Division-----",shelfProps);
        return shelfProps;
    },
    itemCountProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "float" : "left",
                "font-size": "16px",
                "line-height":"18px",
                "color":property. $rem_itemcount_color,
      };
//console.log("properties of item count component-----",shelfProps);
        return shelfProps;
    },
    itemCountPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "16px",
                "line-height":"18px",
                "color":property. $rem_itemcount_colorMob,
      };
//console.log("properties of item count component-----",shelfProps);
        return shelfProps;
    },
   
        sortLastNameProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "cursor" : "pointer",
                "font-size": "16px",
                "line-height":"18px",
                "color":property.$rem_sortlastname_color,
                "background-color":property.$rem_sortlastname_backgroundcolor,
                "display":property.$rem_sortlastname_display,
                "float":"right",
                "padding-right":"16px"
      };
//console.log("properties of item count component-----",shelfProps);
        return shelfProps;
    },

    nameBlocksProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "border" : "1px solid rgb(212, 212, 212)",
                "font-size": "13px",
                "line-height":property.$rem_nameblocks_lineheight,
                "margin-bottom":"24px",
                "width":"542px",
                "padding":"16px"
      };
//console.log("properties of name block division-----",shelfProps);
        return shelfProps;
    },
    nameBlocksPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "border" : "0px none rgb(7, 22, 48)",
                "font-size": "13px",
                "line-height":"13px",
                "width":property.$rem_nameblocks_width,
                "padding":"0px"
      };
//console.log("properties of name block division-----",shelfProps);
        return shelfProps;
    },

    nameBlockTitleProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "13px",
                "line-height":property.$rem_nameblocktitle_lineheight,
                "margin-bottom":"8px",
                "color":property.$rem_nameblocktitle_color,
                "display":"block"
      };
//console.log("properties of name block Title-----",shelfProps);
        return shelfProps;
    },

    nameBlockTitlePropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "13px",
                "line-height":"13px",
                "margin-bottom":"8px",
                "color":property.$rem_nameblocktitle_colorMob,
                "display":"block"
      };
//console.log("properties of name block Title-----",shelfProps);
        return shelfProps;
    },

    nameBlockTextProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "14px",
                "line-height":"20px",
                "margin-bottom":"8px",
                "color":property. $rem_nameblocktext_color,
                "max-height":"43px",
                "display":"block"
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },
    nameBlockTextPropsMob: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "14px",
                "margin-bottom":"0px",
                "color":property.$rem_nameblocktext_colorMob,
                "max-height":"43px",
                "display":"block"
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },
    rightArrowProps:function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family": "nw-icons",
                "float":"right",
                "cursor":"pointer",
                "color":property.$rem_rightarrow_color,
                "height":"22px",
                "line-height":"18px",
                "font-size":"13px",
                "width":"23px",
                "display":"block"
      };
//console.log("properties of right Arrow in Pagination-----",shelfProps);
        return shelfProps;
    },
    rightArrowPropsMob:function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family": "nw-icons",
                "float":"right",
                "color":property.$rem_rightarrow_colorMob,
                "height":"22px",
                "line-height":"18px",
                "font-size":"13px",
                "width":"23px",
                "display":"block"
      };
//console.log("properties of right Arrow in Pagination-----",shelfProps);
        return shelfProps;
    },
    leftArrowProps:function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family": "nw-icons",
                "float":"left",
                "cursor":"pointer",
                "color":property.$rem_leftarrow_color,
                "height":"22px",
                "line-height":"18px",
                "font-size":"13px",
                "width":"23px"
      };
//console.log("properties of right Arrow in Pagination-----",shelfProps);
        return shelfProps;
    },
    leftArrowPropsMob:function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-family": "nw-icons",
                "float":"left",
                "color":property.$rem_leftarrow_colorMob,
                "height":"22px",
                "line-height":"18px",
                "font-size":"13px",
                "width":"23px"
      };
//console.log("properties of right Arrow in Pagination-----",shelfProps);
        return shelfProps;
    },

    ofsTopSectionProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding": "40px 48px 18px",
                "background-color": property.$rem_ofstopsection_backgroundcolor
                
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },

    ofsBottomDivProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding": "40px 48px",
                "font-size": "13px",
                "line-height":"13px"
                
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },

    paginationMainDivProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding": "16px 48px",
                "background-color": property.$rem_paginationmaindiv_backgroundcolor,
                "line-height":"13px",
                "height":"22px",
                "border-left-color":property.$rem_paginationmaindiv_borderleftcolor
                
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },
    activePaginationProps: function() {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$rem_activepagination_color
                
      };
//console.log("properties of name block Text-----",shelfProps);
        return shelfProps;
    },
  };
}