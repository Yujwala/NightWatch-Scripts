module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    contactDetailsShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-bottom" : "10.4px",
               "padding-top" : "10.4px" 
            };
        return shelfProps;
    },
    cdInnerContainerProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "padding-left" : property.$cd_padding_top,                             
               "padding-right" : property.$cd_padding_right
               
            };
        return shelfProps;
    },
     themeblueShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "background-color" : property.$cd_themeblue_shelf_bg,
               "color" : property.$cd_themeblue_shelf_clr,
            };
        return shelfProps;
    },
    
    headergroupProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
               "margin-top" : "16.9px",
               "margin-bottom" : property.$cd_margin_bottom
            };
        return shelfProps;
    },
   
    headerSignpostProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color": property.$primary_2,
            	"font-size": "18px",
                "line-height": "18px"
            };
           
        return shelfProps;
    },
    headerHeadlineProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color": property.$primary_2,
                "font-size":property.$headline_font_size,               
               "line-height": property.$headline_line_height,
               "font-family":property.$headline_font_family
            };
        return shelfProps;
    },
    headerHeadline2Props: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"font-size":"13px",               
               "line-height":"15.6px",
            };
        return shelfProps;
    },
    cdGridProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-left": "47.996px",
            };
        return shelfProps;
    },
    cdGridCol1Props:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-right": "23.998px",
            };
        return shelfProps;
    },
    cdGridCol2Props:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-right": "23.998px",
                "padding-top"  : "2.6px"
            };
        return shelfProps;
    },
    cdRteTxtProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": property.$rteText_line_height,
                "font-size": "14px",
                "color": property.$primary_2,
                "font-family":property.$font_family_regular               
            };
        return shelfProps;
    },
    cdRteHeaderProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": property.$rteHeader_line_height,
                "font-size": property.$rteHeader_font_size,
                "color": property.$primary_2,

            };
            //ulster
            if(property.$brandName== 'ulster'||property.$brandName=='ulster-ie')
            {
                shelfProps["font-family"] = property.$font_family_bold
            }
            else
            shelfProps["font-family"]= property.$font_family_regular
        return shelfProps;
    },
    cdrteHeaderStrongProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color":property.$rteHeader_strong_clr
            };
        return shelfProps;
    },
	cdLinktextProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "line-height": "26.25px",
                "font-size": "21px",
                "color": property.$primary_2,
                "float":"left"
            };
        return shelfProps;
    },
	contactdetailsBranchLinkProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$themeBlueShelfColor,
                "font-family":property.$font_family_regular,
                "text-decoration": "none"
            };
        return shelfProps;
    },
    cdDownloadDetailsProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "display": "inline-block",
                "font-family":property.$font_family_regular,
                "font-size":"11px"
            };
        return shelfProps;
    },
    cdLinkFocusProps:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "outline": property.$linkOnFocus_outline
                
            };
        return shelfProps;
    },
    //Mobile Props
    themeblueShelfPropssm:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background": property.$cd_themeblue_shelf_bg_m,
                "color": property.$cd_themeblue_shelf_clr
                
            };
        return shelfProps;
    },
    cdInnerShelfPropssm:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-left": "16.003px",
                "padding-right": "16.003px"
                
            };
        return shelfProps;
    },
    headergroupPropssm:function(size){
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-top": "16.9px",
                "margin-bottom": property.$cd_margin_bottom_m
                
            };
        return shelfProps;
    },
    signpostPropssm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"color": property.$primary_2,
            	"font-size": "14px",
                "line-height": "14px",
                "display":"block",
                "font-family":property.$font_family_regular
            	
            };
        return shelfProps;
    },
    headerPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "color": property.$primary_2,
                "font-size":property.$headline_font_size_m,               
               "line-height": property.$headline_line_height_m,
               "font-family":property.$headline_font_family_m,
               "margin-top":property.$headline_margin_top_m                           
                
            };
        return shelfProps;
    },
    header2Propssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"font-size":"13px",               
                "font-family": property.$font_family_regular
                };
        return shelfProps;
    },
    cdrteHeaderPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
            	"font-size":"22px",      
                              
                "line-height": "26px",
                "color":property.$primary_2
            };
            if(branding.getBrand.get()== 'ulster/ulster.js'||
            branding.getBrand.get()== 'ulster/ulster_mac.js'||
            branding.getBrand.get()== 'ulster/ulster_ie.js'||
            branding.getBrand.get()== 'ulster/ulster_ff.js'||
             branding.getBrand.get()== 'ulster-ie/ulster_ie.js'||
             branding.getBrand.get()== 'ulster-ie/ulster_ie_ie.js'||
             branding.getBrand.get()== 'ulster-ie/ulster_mac_ie.js'||
             branding.getBrand.get()== 'ulster-ie/ulster-ie-ff.js')
            {

              shelfProps["font-family"] = property.$font_family_bold
            }
            else
            shelfProps["font-family"]=property.$font_family_regular
        return shelfProps;
    },
    
    cdrteTxtPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size":property.$rteText_font_size_m,
                "line-height":property.$rteText_line_height_m,
                "color":property.$primary_2,                   
                "font-family": property.$font_family_regular,
                "padding-top":property.$rteText_padding_top_m,
                "padding-bottom":property.$rteText_padding_btm_m

                };
        return shelfProps;
    },
};

    
 }