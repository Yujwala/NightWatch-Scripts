module.exports = function(client){
    var brandFile = client.globals.brand,
      brand = require('../../branding/'+brandFile),
      property = brand.props;
    return {
      mainheader: function(size) {
      let  shelfProps = {
                     "background-color" : property.$supplierbgcolor,
                     "padding" : "10.4px 0px 0px",
                  };
              return shelfProps;
        },
  
      headerimg :function(size) {
          let  shelfProps = {
                         "width" : property.$supplierhdimgwidth,
                         "height" : property.$supplierhdimgheight,
                      };
                  return shelfProps;
            },
      breadcrumb :function(size) {
              let  shelfProps = {
                            "padding" : "10px 0px 35px 48px"
                          };
                      return shelfProps;
                },
      breadcrumblinks :function(size) {
          let  shelfProps = {
                        "padding" : "10px 0px 0px"
                      };
                  return shelfProps;
            }, 
  
      shelfprops : function(size) {
          let  shelfProps = {
                        "padding" : "48px 0px 48px"
                      };
                  return shelfProps;
            },
  
      headerbanner : function(size) {
          let  shelfProps = {
                        "padding" : "0px 118px 0px 48px",
                        "background-image" :property.$merchantTool_headerBanner_Bgimg,
                      };
                      if (size == "xs") {
                          shelfProps['padding'] = "0px 16px";
                          shelfProps['background-image'] = property.$supplierhdimg_mob;
                      }
                  return shelfProps;
            },
  
      bannertitle : function(size) {
          let  shelfProps = {
                        "padding" : "39px 0px 0px",
                        "color" : property.$supplierbantitle,
                        "box-sizing" : "content-box",
                        "font-family" : property.$supplierBoldfontfamily,
                        "font-size" : "36px",
                        "line-height" : "40px",
                      };
  
                      if (size == "xs") {
                          shelfProps['padding'] = "25px 0px 0px";
                          shelfProps['box-sizing'] = "border-box";
                          shelfProps['font-size'] = "32px";
                          shelfProps['line-height'] = "36px"
  
                      }
                  return shelfProps;
            },
  
      bannerdes : function(size) {
          let  shelfProps = {
                        "padding" :"17px 0px 0px",
                        "color" : property.$supplierbantitle,
                        "box-sizing" : "content-box",
                        "font-family" : property.$supplierregfontfamily,
                        "font-size" : "18px",
                        "line-height" : "22px",
  
                      };
  
                  if (size == "xs") {
                          shelfProps['padding'] = "15px 51.875px 0px 0px";
                          shelfProps['box-sizing'] = "border-box";
  
                      }
                  return shelfProps;
            },
      midcontentwrap :  function(size) {
          let  shelfProps = {
                        "background-color" : property.$suppliercontentwrap,
  
                      };
                  return shelfProps;
            },
  
      searchsection : function(size) {
          let  shelfProps = {
                        "padding" : "42px 0px 48px",
                        "margin" : "0px 184px",
                        "font-family" : property.$supplierregfontfamily
  
                      };
  
                      if (size == "xs") {
                          shelfProps['padding'] = "26px 16px 41px";
                          shelfProps['margin'] ="0px";
  
                      }
                  return shelfProps;
            },
  
      searchtitle : function(size) {
          let  shelfProps = {
                      "color" :property.$supplierbantitle,
                      "box-sizing" : "content-box",
                      "font-family" : property.$supplierBoldfontfamily,
                      "font-size" : "24px",
                      "line-height" : "29px",  
      
                      };
                      if (size == "xs") {
                          shelfProps['box-sizing'] = "border-box";
  
                      }
                      return shelfProps;
          },
  
      searchdes : function(size) {
          let  shelfProps = {
                      "color" :"rgba(51, 51, 51, 1)",
                      "box-sizing" : "content-box",
                      "font-family" : property.$supplierregfontfamily,
                      "font-size" : "18px",
                      "line-height" : "24px",  
      
                      };
                      if (size == "xs") {
                          shelfProps['box-sizing'] = "border-box";
  
                      }
                      return shelfProps;
          },
  
      searchbox : function(size) {
          let  shelfProps = {
                     "padding" : "5px 5px 5px 17px",
                     "background-color" : "rgba(0, 0, 0, 0)",
                     "cursor" : "text",
                     "font-size" : "18px",
                     "height" : property.$searchboxheight,
                     "width" :  property.$searchboxwidth,
                     "text-align" : "start",
                      };
                      if (size == "xs") {
                          shelfProps['width'] = "360px";
  
                      }
                      return shelfProps;
          },
      
      searchicon : function(size) {
          let  shelfProps = {
                     "color" : property.$suppliericoncolor,
                     "background-color" : property.$suppliericonbgcolor,
                     "cursor" : "pointer",
                      };
                      return shelfProps;
          },
  
      majorsuppliers : function(size) {
          let  shelfProps = {
                     "padding" : "45px 92px",
                     "background-color" : property.$majorsuppliersbgcolor,
                     "color" : property.$supplierbantitle,
                      };
                      if (size == "xs") {
                          shelfProps['padding'] = "28px 16px 0px";
  
                      }
                      return shelfProps;
          },
  
       majorsupptitle : function(size) {
          let  shelfProps = {
                      "padding" : "0px 0px 32px",
                      "background-color" : property.$majorsuppliersbgcolor,
                      "color" : property.$supplierbantitle,
                      };
                      return shelfProps;
              },
  
      supplierul : function(size) {
          let  shelfProps = {
                      "padding" : "10px 0px",
                      "border-bottom" :property.$supplierborderbtm,
                      };
                      return shelfProps;
              },
      
      supplierulfocus : function(size) {
          let  shelfProps = {
                    "outline-color" : property.$supplieroutline ,
                      };
                      return shelfProps;
              },
  
      listTitles : function(size) {
          let  shelfProps = {
                    "color" : property.$supplierbantitle,
                    "font-size" : "18px",
                    "font-family" : property.$supplierBoldfontfamily,
                    "line-height" : "22px",
                      };
                      if (size == "xs") {
                          shelfProps['line-height'] = "24px";
                          shelfProps['font-size'] = "20px";
                      }
                      return shelfProps;
              },
  
      listItems : function(size) {
          let  shelfProps = {
                    "color" : property.$supplierbantitle,
                    "font-size" : "14px",
                    "font-family" : property.$supplierregfontfamily,
                    "line-height" : "18px",
                    "padding" : "0px 0px 0px 32px"
                      };
  
                      if (size == "xs") {
                          shelfProps['line-height'] = "28px";
                          shelfProps['font-size'] = "18px"
                          shelfProps['padding'] = "0px";
  
                      }
                      return shelfProps;
              },
  
      conditionsSec : function(size) {
          let  shelfProps = {
                    "padding" : "0px 48px 41px",
                      };
                      if (size == "xs") {
                          shelfProps['padding'] = "0px 16px 40px";
  
                      }
                      return shelfProps;
              },
  
      firstrte : function(size) {
          let  shelfProps = {
                    "color" : property.$supplierrtecolor,
                      };
                      return shelfProps;
              },
  
      secondrte : function(size) {
          let  shelfProps = {
                    "color" : property.$supplierbantitle,
                      };
                      return shelfProps;
              },
  
      
  
      messagetxt : function(size) {
          let  shelfProps = {
                    "color" : property.$supplierbantitle,
                    "font-family": property.$supplierregfontfamily,
                    "font-size" : "14px"
                      };
                      return shelfProps;
              },
            };
      }