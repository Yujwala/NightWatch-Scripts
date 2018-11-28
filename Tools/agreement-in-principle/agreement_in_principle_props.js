module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
      
      //PAGE-1 Properties
      heading1: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "font-size": "22px",
                };
           return shelfProps;
      },
      heading2: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
               };
            return shelfProps;
      },
      heading3: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para1: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para2: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "25px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      blockHead: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                   "font-family": property.$font_family_regular,
                   "color": property.$primary_1,
                 };
            return shelfProps;
      },
      checkBoxHead: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size":"16px",
                  "color": property.$checkBoxHeadColor,
                  "margin": "5px 0px",
                  "line-height": "22px",

            };
            return shelfProps;
      },
      messageBoxHead: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                  "font-size" : "13px",
            };
            return shelfProps;
      },
      checkBoxList: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-family": property.$font_family_regular,
                  "color": "rgba(51, 51, 51, 1)",
                  "font-size" : "16px",   
                  "line-height":"22px",           
            };
            return shelfProps;
      },
      dropDownMenuHead: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "color": property.$dropDownHeadColor,
              "font-size" : "32px",   
              "line-height":"39px",           
        };
        return shelfProps;
  },
    dropDownMenuPara: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            "font-family": property.$font_family_regular,
        };
        return shelfProps;
    },
    dropDownMenuBtn: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            "color": property.$dropDownBtnColor,
            "background-color": "rgba(52, 162, 178, 1)",
                };
        return shelfProps;
    },
    dropDownMentuClsBtn: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            "color": property.$dropDownClsBtnColor,
            "background-color": property.$dropDownBtnBgColor,
            "width":"32px",
            "height":"32px",
                };
        return shelfProps;
    },

      //PAGE-2 Properties
      form1iconinfo: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "top":"0px",
                    "right":"0px",
                    "width":"20px",
                    "height":"20px",
                    "margin-left":"8px"
                };
            return shelfProps;
        },    
        iconinfobeforeProps: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "font-size":"20px",
                    "font-family":"nw-icons"           
                };
            return shelfProps;
        },    
      textBoxProps: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "outline":"rgb(255, 191, 71) solid 3px"            
                };
            return shelfProps;
        },    
      heading4: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      heading5: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para3: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "font-family": property.$font_family_regular,
                  "color": "rgba(51, 51, 51, 1)",
                };
            return shelfProps;
      },
      
      //PAGE-3 Properties
      heading6: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      heading7: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      heading8: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para4: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "font-family": property.$font_family_regular,
                  "color": "rgba(51, 51, 51, 1)",
                };
            return shelfProps;
      },
      searchHead: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      buttonTitle: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_bold,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      closeButton: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "height": "32px",
                  "width": "32px",
                  "background-color": property.$closeButtonBackgroundColor,
            };
            return shelfProps;
      },
      anchorLink: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color" : property.$anchorLinkColor,
            };
            return shelfProps;


      },

      //PAGE-4 Properties
      heading9: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },

      heading10: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      heading11: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para5: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "font-family": property.$font_family_regular,
                  "color": "rgba(51, 51, 51, 1)",
                };
            return shelfProps;
      },

      //PAGE-5 Properties
      heading12: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "20px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },

      heading13: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "18px",
                  "font-family": property.$font_family_regular,
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      para6: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "14px",
                  "font-family": property.$font_family_regular,
                  "color": "rgba(51, 51, 51, 1)",
                };
            return shelfProps;
      },

      //PAGE-6 Properties
      resultSuccessFooter: function(size) {
            property = brand.props;
            let shelfProps = {
                  "padding": "30px 124px 44px",
                  "background-color":"rgba(223, 217, 209, 1)",
                };
            return shelfProps;
      },
      resultSuccess: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                  "font-size": "13px",
                  "font-family": property.$font_family_regular,
                  "line-height": "13px",
                  "color": property.$primary_1,
                };
            return shelfProps;
      },
      resultSuccessRecalculate: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "line-height": "24px",
              "font-size": "20px",
            };
        return shelfProps;
  },
    resultFailure: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "color": property.$primary_1,
              "font-family": property.$font_family_regular,
              "margin-bottom": "6px",
              "line-height": "24px",
              "font-size": "20px",
            };
        return shelfProps;
  },
      resultFailureT: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$primary_1,
                "font-family": property.$font_family_bold,
                "margin": "27px 38px 0px 38px",
                "line-height": "24px",
                "font-size": "20px",
              };
        return shelfProps;
  },

      //COMMON Properties
      bannercontent: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "color":property.$bannerContentColor,
                    "font-size":"24px",
                    "font-family":"RNHouseSansBold, sans-serif",
                    "line-height":"28px" ,
                    "padding":"0px 124px"
                    
                };
            return shelfProps;
        },
        banner: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "background-color":"rgba(223, 217, 209, 1)",
                    "padding":"44px 0px 57px"
                };
            return shelfProps;
        },
        errorContainer: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "font-size":"14px",
                    "color":"rgba(51, 51, 51, 1)",
                    "background-color":"rgba(255, 255, 255, 1)",
                    "padding":"24px 16px 20.5px",
                    "margin-top":"10px",
                    "border":"1px solid rgb(215, 0, 40)"
                    
                };
            return shelfProps;
        },
        nextbutton: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "color":property.$nextButtonColor,
                    "background-color": "rgba(255, 191, 71, 1)",        
                };
            return shelfProps;
        },
        callToAction: function(size) {
            property = brand.props;
            var shelfProps = {},
                shelfProps = {
                    "color":"rgba(255, 255, 255, 1)",
                };
            return shelfProps;
        },
      };
    
}