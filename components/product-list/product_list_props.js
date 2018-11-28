var rte_props = require('../rte/rte_props.js');

module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
    productListHeaderProps:function(size){
        let shelfProps = {
             "margin-bottom":"20px",
          }
          if(size=="xs")
          {
            shelfProps["margin-bottom"]="27px"
          }

      return shelfProps;
    },
    prodListTitleProps:function(size){
        let shelfProps = {
            "font-size": "32px",
            "line-height": "36px",
            "padding-top": "9px",
            "font-family": property.$prodListTitle_fontFamily,
            "color": property.$prodListTitle_color          
          };
          if(size=="xs")
          {
            shelfProps["font-size"]="26px",
            shelfProps["line-height"]="30px",
            shelfProps["padding-top"]="8px"

          }
      return shelfProps;
    },
    prodListSubTitleProps:function(size){
        let shelfProps = {
            "font-size": "18px",
            "line-height": "22px",
            "padding-top": "8px",
            "font-family": property.$prodListSubTitle_fontFamily,
            "color": property.$prodListSubTitle_color
          };
          if(size=="xs")
          {
            shelfProps["padding-top"]="7px",
            shelfProps["font-family"]=property.$prodListSubTitleM_fontFamily

          }

      return shelfProps;
    },
    prodListWrapperProps:function(size){
        let shelfProps = {
            "padding-bottom": "0px",
            "border-width": property.$prodWrapper_bdrWidth,
             "background-color": property.$prodListWrapper_bgColor,
             "-webkit-border-radius": "8px",
        }
         if(brand.props.$brandName=='natwest-personal' || brand.props.$brandName=='rbs-personal'|| brand.props.$brandName=='ulster-ie' || brand.props.$brandName=='ulster'  ){
                 shelfProps["border-color"]= property.$prodListWrapper_bdrColor,
                 shelfProps["border-style"]= property.$prodListWrapper_bdrstyle
        }
      return shelfProps;
    },
    prodListWrapperMobProps: function(size){
        let shelfProps ={
            "padding-bottom":"16px",
            "margin-bottom":"16px",
            "background-color": property.$listApr_bgColor,
            "-webkit-border-radius": "8px",
            "border-width": property.$prodWrapper_bdrWidth
        }
        return shelfProps;
    },
    prodListWrapperLastChildMobProps: function(size){
        let shelfProps ={
            "margin-bottom":"0px",
        }
        return shelfProps;
    },
    prodListTopProps: function(size){
        let shelfProps = {
            "overflow": "hidden",
            "display": "block",
        };
        if(size=="lg"){
           shelfProps["height"]= property.$prodListTop_height
        }
        if(size=="xs")
          {
            shelfProps["overflow"]="hidden",
            shelfProps["display"]="block"

          }

        return shelfProps;
    },
    //list_img props
    listTopListImgProps: function(size){
        let shelfProps = {
            "float": "left",
            "width": "174px",
            "height": "110px",
            "margin": property.$listImg_margin,
            "-webkit-border-radius": "6px",
        };
        if(size=="xs")
          {
            shelfProps["float"]="right",
            shelfProps["width"]="69px",
            shelfProps["height"]="44px",
            shelfProps["-webkit-border-radius"]="8px",
            shelfProps["margin"]="16px 16px 16px 0px",
            shelfProps["overflow"]="hidden"
          }
        return shelfProps;
    },
    listTopListImgImgProps: function(size){
        let shelfProps = {
            "margin": "0px",
        };
        return shelfProps;

    },
    //list_loan props
   
    listLoanSubtitleProps:function(size){
        let shelfProps = {
            "padding": "0px",
            "background-color": property.$listTopListLoan_bgColor,
          };
          if(size =="xs")
          {
            shelfProps["padding"]="16px" 

          }
      return shelfProps;
    },
    listLoanRteTxtProps: function(size){
        let shelfProps = {
            "padding-bottom": "0px",
            "font-family": property.$prodListSubTitle_fontFamily,
            "font-size": "20px",
            "line-height": "24px",
            "color":property.$listLoanRte_color,
        };
        if(size =="xs" )
          {
            shelfProps["font-size"]="18px",
            shelfProps["line-height"]="22px",
            shelfProps["font-family"]= property.$prodListTitle_fontFamily

          }
        
        return shelfProps;
    },
    listLoanIconTextProps: function(size){
        let shelfProps = {
            "border-bottom-width": "0px",
            "border-top-width": "0px",
            "background-color": property.$listTopListLoan_bgColor,
            "padding": property.$listLoanIconText_padding,
        };
        if(size =="xs")
          {
            shelfProps["border-bottom-width"]= "1px",
            shelfProps["border-top-width"]= "1px",
            shelfProps["border-bottom-color"]=property.$prodList_bdrColor,
            shelfProps["background-color"]=property.$listApr_bgColor,
            shelfProps["padding"]="12px 16px"

          }
        return shelfProps;
    },
    listLoanIconTextImgProps: function(size){
        let shelfProps = {
            "width": "16px",
            "height": "16px",
            "margin": "2px 8px 0px 0px",
            "float": "left",
        };
        if(size =="xs")
          {
            shelfProps["width"]="32px",
            shelfProps["height"]="32px"
            shelfProps["margin"]= "6px 16px 0px 0px"

          }
        return shelfProps;
    },
    listLoanIconTextRteProps:function(size){
        let shelfProps = {
            "float": "left",
        };
        if(size =="xs")
          {
            shelfProps["width"]=property.$listLoanIconText_width_M

          }
      return shelfProps;
    },
    listLoanIconTextRteTextProps:function(size){
        let shelfProps = {
            "font-size": "16px",
            "line-height": "20px",
            "top": "0px",
            "display": "inline-block",
            "padding": "0px",
            "position": "relative",
            "color": property.$loanIconTextRte_color,
          };
          if(size =="xs")
          {
            shelfProps["top"]="2px",
            shelfProps["display"]="inline"
            shelfProps["font-size"]= "16px",
            shelfProps["line-height"]="22px" //natwest-markets fails
          }
          if((brand.props.$brandName=='rbs-com' || brand.props.$brandName=="rbs-remembers") && size =="xs"){
              shelfProps["font-size"]="14px",
              shelfProps["line-height"]="20px"
          }
      return shelfProps;
    },
    listLoanFeeProps: function(size){
        let shelfProps = {
            "border-bottom-width": "0px",
            "background-color": property.$listTopListLoan_bgColor,
        };
        return shelfProps;
    },
    listLoanFeeRteTextProps: function(size){
        let rteprops=rte_props.PropTextfs12(size);
        let shelfProps = {
              "padding": "11px 0px 0px 0px",
              "color":property.$loanIconTextRte_color,
            };
            shelfProps=Object.assign(rteprops,shelfProps);
            if(size =="xs")
          {
            shelfProps["padding"]="12px 16px",
            shelfProps["line-height"]="22px"
            shelfProps["font-size"]= "16px"
            shelfProps["border-bottom"]=property.$listLoan_brdrbtm

          }
        return shelfProps;
    },
    listLoanFeeRteFirstChildProps: function(size){
        let shelfProps = {
            "border-top-width": "1px",
            "border-top-color": property.$listTopBdrtop_Color,
            "border-top-style": "solid"
        };
        return shelfProps;
    },
    listLoanFeeRteLastChildProps: function(size){
        let shelfProps = {
            "border-bottom-width":"0px"
        };
        return shelfProps;
    },
    //list_apr props
    listTopListAprProps: function(size){
        let shelfProps = {
            "float": "left",
            "width": "155px",
            "border-bottom-width": "0px",
            "background-color": property.$listApr_bgColor,
            "border-left-width": "1px",
            "border-left-style":"solid",
            "border-left-color":property.$listAprBrdr_color,
        };
        return shelfProps;
    },
    listTopListAprRteProps: function(size){
        let shelfProps = {
            "display": "table-cell",
            "height": property.$listAprRte_height,
            "vertical-align": "middle"
        };
        return shelfProps;
    },
    listTopListAprRteTextProps: function(size){
        let shelfProps = {
            "padding": "0px 16px",
            "border-bottom-width": "0px",
            "font-size": "14px",
            "line-height": "20px",
            "color": property.$listApr_color,
        };
        if(size =="xs")
        {
          shelfProps["padding"]="12px 16px",
          shelfProps["line-height"]="22px",
          shelfProps["font-size"]= "16px",
          shelfProps["border-bottom-width"]= "1px",
          shelfProps["color"]= property.$listApr_color_M
        }
        return shelfProps;
    },
    //list cta props
    listTopListCtaProps: function(size){
        let shelfProps = {
            "float": "right",
            "width": property.$listTopListCta_width,
            "box-sizing": "border-box",
            "background-color": property.$listApr_bgColor,
            "border-left-width": "1px",
            "border-left-style": "solid",
            "border-left-color": property.$prodList_bdrColor,
            "border-radius": "0px 8px 8px 0px",
            "padding": property.$listTopListCta_padding,
            "text-align": "center",
            "overflow": "hidden",
        };
        return shelfProps;
    },
    prodListTopListCtaProps: function(size){
      let shelfProps={
            "overflow": "hidden",
            "padding": "0px 16px"
      };
      return shelfProps;
    },
    listTopListLoanProps: function(size){
        let shelfProps = {
            "-webkit-border-radius":"8px 8px 0px 0px",
            "background-color": property.$listTopListLoan_bgColor
        }
        if(size=="xs"){
            shelfProps["background-color"]= property.$prodListWrapper_bgColor
        }
        return shelfProps;
    },
    listCtaInnerProps: function(size){
        let shelfProps = {
            "height": property.$listCtaInner_height,
            "vertical-align": "middle",
            "display": "table-cell",
            "width": property.$listCta_width
        };
        return shelfProps;
    },
    //prod list bottom
    prodListBottomProps: function(size){
        let shelfProps = {
            "overflow": "hidden",
            "-webkit-border-radius": "0px 0px 8px 8px",
            "border-top-width": "1px",
            "border-top-style":"solid",
            "border-top-color":property.$prodList_bdrColor
        };
        return shelfProps;
    },
    prodListBottomRtaLeftProps: function(size){
        var shelfProps={};
       if(size=="lg") {
           shelfProps["float"]= "left",
           shelfProps["border-bottom-width"]="0px",
           shelfProps["width"]= "664px",
           shelfProps["padding"]= property.$listBtmRtaLeft_padding
    }
    if(size =="xs"){
        shelfProps["border-bottom"]= property.$listLoan_brdrbtm,
        shelfProps["padding"]="12px 16px"
    }
        return shelfProps;
    },
    prodListBottomRtaLeftRteTextProps: function(size){
        let shelfProps = {
            "padding-bottom": "0px",
            "color": property.$listApr_color
        };
        return shelfProps;
    },
    prodListBottomCtaRightProps: function(size){
        let shelfProps = {
            "float": "left",
            "text-align": "center",
            "overflow": "hidden",
        };
        if(size =="xs"){
            shelfProps["float"]= "none",
            shelfProps["padding"]="0px 16px"
        }
        return shelfProps;
    },
    prodListBottomCtaRightListCtaProps: function(size){
        let shelfProps = {
            "padding": property.$listBtmCtaRightListCta_padding,
        };
        if(size=="xs"){
            shelfProps["padding"]= "0px"
        }
        return shelfProps;
    },
    prodListBottomListCtaInnerProps: function(size){
        let shelfProps = {
            "height": property.$listBtmListCtaInner_height,
            "vertical-align": "middle",
            "display": "table-cell",
            "width": "184px",

        };
        return shelfProps;
    },
    //shortApr
    shortAprListBottomProps:function(size){
        let shelfProps = {
           "display": "none",
        };
        return shelfProps;
    },
    shortAprListLoanProps:function(size){
        let shelfProps = {
            "float": "left",
            "width": "320px",
            "background-color": property.$listTopListLoan_bgColor,
            "padding": property.$listLoan_padding,
            "-webkit-border-radius": "0px 0px 8px 8px",
        };
      return shelfProps;
    },
    //noApr props
    noAprListLoanProps:function(size){
        let shelfProps = {
           "width": "468px",
           "float": "left",
           "background-color": property.$listTopListLoan_bgColor,
            "padding": property.$listLoan_padding,
            "-webkit-border-radius": "0px 0px 8px 8px",
        };
        return shelfProps;
    },
    noAprListAprProps:function(size){
        let shelfProps = {
           "display": "none",
        };
        return shelfProps;
    },
    noAprListBottomProps:function(size){
        let shelfProps = {
           "display": "none",
        };
        return shelfProps;
    },
    //longAprWithCta props
    longAprWithCtaListLoanProps:function(size){
        let shelfProps = {
            "width": "657px",
            "padding": property.$longAprWithCtaListLoan_padding,
            "float": "left",
           "background-color": property.$listTopListLoan_bgColor,
            "-webkit-border-radius": "0px 0px 8px 8px",

        };
        return shelfProps;
    },
    longAprWithCtaListAprProps:function(size){
        let shelfProps = {
           "display": "none",
        };
        return shelfProps;
    },
    longAprWithCtaListCtaProps:function(size){
        let shelfProps = {
           "display": "none",
        };
        return shelfProps;
    },
    longAprWithCtaListCtaInnerProps: function(size){
        let shelfProps = {
            "height": property.$listCtaInner_height,
            "vertical-align": "middle",
            "display": "table-cell",
            "width": "184px"
         };
         return shelfProps;
    },
    longAprWithCtalistBtmRtaLeftProps:function(size){
        let shelfProps = {
            "border-right-width": "1px",
            "border-right-style": "solid",
            "border-right-color": property.$prodList_bdrColor,
        };
        return shelfProps;
    },
    longAprWithCtaListBtmRightCtaProps:function(size){
        let shelfProps = {
            "width": property.$longAprWithCta_width,
            "padding": "0px",
            
        };
        return shelfProps;
    },
    longAprWithCtaListBtmListCtaProps:function(size){
        let shelfProps = {
            "width": property.$longAprWithCta_width, 
            "border-left-width": "0px",
            "float": "right",
            "box-sizing": "border-box",
            "background-color": property.$listApr_bgColor,
            "border-radius": "0px 8px 8px 0px",
            "padding": property.$listBtmCtaRightListCta_padding,
            "text-align": "center",
            "overflow": "hidden",
        };
        return shelfProps;
    },
    longAprWithCtaListBtmListCtaInnerProps: function(size){
        let shelfProps = {
            "width": property.$longAprWithCtaInner_width,
            "vertical-align":"middle",
            "display":"table-cell",
            "height": property.$listCtaInner_height
        };
        return shelfProps;

    },
    //longAprNoCta props
    longAprNoCtaListLoanProps:function(size){
        let shelfProps = {
            "width": "657px",
            "padding": property.$longAprWithCtaListLoan_padding,
            "float": "left",
            "background-color": property.$listTopListLoan_bgColor,
            "-webkit-border-radius": "0px 0px 8px 8px",
        };
        return shelfProps;
    },
    longAprNoCtaListAprProps:function(size){
        let shelfProps = {
            "display":"none",
        };
        return shelfProps;
    },
    longAprNoCtaListCtaProps:function(size){
        let shelfProps = {
            "display":"none",
        };
        return shelfProps;
    },
    longAprNoCtaListCtaInnerProps:function(size){
        let shelfProps = {
            "height": property.$listCtaInner_height,
            "vertical-align": "middle",
            "display": "table-cell",
            "width": "184px",
        };
        return shelfProps;
    },
    longAprNoCtaListBtmRtaLeftProps:function(size){
        let shelfProps = {
            "border-bottom-width": "0px",
        };
        if(size=="lg"){
            shelfProps["width"]= "848px",
            shelfProps["border-right-width"]= "0px",
            shelfProps["padding"]=property.$listBtmRtaLeft_padding 
        }
        if(size=="xs"){
           shelfProps["padding"]="12px 16px"
        }
        return shelfProps;
    },
    longAprNoCtaListBtmRightCtaProps:function(size){
        let shelfProps = {
            "display":"none",
        };
        return shelfProps;
    },
    longAprNoCtaListBtmListCtaProps:function(size){
        let shelfProps = {
            "display":"none",
        };
        return shelfProps;
    },
};
}