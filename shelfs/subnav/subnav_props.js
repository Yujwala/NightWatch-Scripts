//Desktop
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    subnavShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding" :property.$subnv_padding,
                "padding-left":property.$subnv_padding_lft               
            };
        return shelfProps;
    },
    subnavShelfInnerProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "max-width":property.$subnv_max_width,
                "padding": property.$subnv_inner_padding 
            };
        return shelfProps;
    },
    themeWhiteShelfProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background":property.$subnv_theme_bg,
                "color":property.$subnv_theme_white_clr
            };
        return shelfProps;
    },
    themeLightBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background":property.$subnv_theme_bg,
                "color": property.$subnv_theme_light_blue_clr    
            };
        return shelfProps;
    },
    themeBlueShelf: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "background":property.$subnv_theme_blue_bg,
                "color": property.$subnv_theme_blue_clr  
            };
        return shelfProps;
    },
    headerGroupProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding":property.$subnav_header_grp_padding,
                "margin-bottom": property.$subnav_header_grp_mar_btm
            };
        return shelfProps;
    },
    headlineProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": property.$subnav_header_grp_fs,
                "line-height": property.$subnav_header_grp_lh,
                "font-family": property.$font_family_bold,
                "color": property.$primary_1 
            };
        return shelfProps;
    },
    subnav5GridsProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-right": "1px",
                "color":property.$primary_2,
                "background-size":property.$subnv5_bckgrnd_size,
                "min-height": "0px",
                                 
            };
        return shelfProps;
    },
    subnav6GridsProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-right": "1px",
                "color":property.$primary_2,
                "background-size":property.$subnv6_bckgrnd_size,
                "margin-bottom":property.$subnv6_mrgn_btm,
                       
            };  
        return shelfProps;
    },
    subnav3GridsProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-right": property.$subnv3_mrgn_rt,
                "color":property.$primary_2,
                "background-size":property.$subnv3_bckgrnd_size,
                "margin-bottom":property.$subnv3_mrgn_btm,
                                
            };
        return shelfProps;
    },
   
    subnav4GridsProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "margin-right": "1px",
                "color":property.$primary_2,
                "background-size":property.$subnav_4_bckgrnd_size,
                "margin-bottom": property.$subnav_4_margin_btm,
                               
            };
        return shelfProps;
    },
    subnavLinkProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding":property.$subnv_Link_padding,
                "padding-left":property.$subnv_Link_padding_left,                
                "min-height": property.$subnv_Link_height,
                "color":property.$primary_2,
                "background-color": "rgba(0, 0, 0, 0)"                 
            };
        return shelfProps;
    },
    subnavLinkProps6Grids:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding":property.$subnv_Link_padding6,
                "padding-left":property.$subnv_Link_padding_left6,                
                "min-height": property.$subnv_Link_height,
                "color":property.$primary_2,
                "background-color": "rgba(0, 0, 0, 0)"                 
            };
        return shelfProps;
    },
    subnavLinkProps3Grids:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding":property.$subnavLinkProps3Grids,
                "padding-left":property.$subnavLink3_padding_left,
                "min-height": "74px",
                "color":property.$primary_2,
                "background-color": "rgba(0, 0, 0, 0)"                 
            };
        return shelfProps;
    },
    subnavLinkProps4Grids:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "padding":property.$subnv_Link_padding4,
                "padding-left":property.$subnv_Link_padding_left4,
                "min-height": "74px",
                "color":property.$primary_2,
                "background-color": "rgba(0, 0, 0, 0)"
            };
        return shelfProps;
    },
    
    

    subnavHeadProps5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size":property.$subnv5_hd_font_size,
               "line-height": property.$subnv5_hd_Line_height,
               "font-family":  property.$subnv5_hd_font_family,            
                "color":property.$primary_2           
            };
        return shelfProps;
    },
    subnavHeadProps3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "22px",
               "line-height": "26px",
               "font-family":  property.$fontfamily_regular,            
                "color":property.$primary_2               
            };
        return shelfProps;
    },
    subnavHeadProps4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {          
               "font-size": property.$subnv_hd_font_size,
               "line-height": property.$subnv_hd_line_height,
               "font-family":   property.$subnv_hd_font_family,            
               "color":property.$primary_2               
            };
        return shelfProps;
    },
    subnavHeadProps6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": "16px",
               "line-height": "20px",
               "font-family":  property.$subnv_hd_font_family,            
                "color":property.$primary_2               
            };
        return shelfProps;
    },
    subnavHeadInnerProps5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "margin-right":property.$subnv5_hd_margin_right,
            };
        return shelfProps;
    },
    subnavHeadInnerProps3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "margin-right":"14.3px"
            };
        return shelfProps;
    },
    subnavHeadInnerProps4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "margin-right":property.$subnv_hd_margin_right,
            };
        return shelfProps;
    },
    subnavHeadInnerProps6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "margin-right":"10.4px"
            };
        return shelfProps;
    },

    subnavChevronProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {           
              
              "font-size":"16px",
              "background-color": "rgba(0, 0, 0, 0)"
            };
        return shelfProps;
    },
    subnavChevronProps5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":"112px", 
              "right":property.$subnv5_chevron_right,
              
              "bottom":property.$subnv5_chevron_btm,            
            };
        return shelfProps;
    },
    subnavChevronProps3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":property.$subnv3_chevron_left, 
              "right":property.$subnv3_chevron_right,
             
              "bottom":property.$subnv3_chevron_btm,            
            };
        return shelfProps;
    },
    subnavChevronProps4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":property.$subnv4_chevron_left,  
              "right":property.$subnv4_chevron_right,
             
              "bottom":property.$subnv4_chevron_btm,         
            };
        return shelfProps;
    },
    subnavChevronProps6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":property.$subnv6_chevron_left, 
              "right":property.$subnv6_chevron_right,
             
              "bottom":property.$subnv6_chevron_btm,             
            };
        return shelfProps;
    },
    subnavChevronAfterProps5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "right":property.$subnv5_chevron_after_right,
              "top":property.$subnv5_chevron_after_top,
              "z-index":"9",
              "font-size":property.$subnv5_chevron_after_fsize,
              "line-height": "1px",
              "bottom":property.$subnv5_chevron_after_btm
            };
        return shelfProps;
    },
    subnavChevronAfterProps3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "right":property.$subnv3_chevron_after_right,
              "top":property.$subnv3_chevron_after_top,
              "z-index":"9",
              "font-size":property.$subnv3_chevron_after_fsize,
              "line-height": "1px",
              "bottom":property.$subnv3_chevron_after_btm,
            };
        return shelfProps;
    },
    subnavChevronAfterProps4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "right":property.$subnv_chevron_after_right,
              "top":property.$subnv_chevron_after_top,
              "z-index":"9",
              "font-size":property.$subnv_font_size,
              "line-height": "1px",
              "bottom": property.$subnv_btm
            };
        return shelfProps;
    },
    subnavChevronAfterProps6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
             
              "right":property.$subnv6_chevron_after_right,
              "top":property.$subnv6_chevron_after_top,
              "z-index":"9",
              "font-size":property.$subnv6_chevron_after_fsize,
              "line-height": "1px",
              "bottom":property.$subnv6_chevron_after_btm,
            };
        return shelfProps;
    },
    subnavItemSellProps6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "font-size":property.$subnv6_subdesc_fsize,
              "line-height":property.$subnv6_subdesc_lineheight,
              "padding-top":"7px",
              "font-family":  "RNHouseSansRegular",            
              "color":property.$primary_2             
            };
        return shelfProps;
    },
    subnavItemSellProps3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "font-size":"16px",
              "line-height": "22px",
              "padding-top":property.$subnv3_subdesc_padtop,
              "font-family":  "RNHouseSansRegular",            
              "color":property.$primary_2            
            };
        return shelfProps;
    },
    subnavItemSellProps5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "font-size":"16px",
              "line-height": property.$subnv5_subdesc_lineheight,
              "padding-top":property.$subnv5_padding_top,
              "font-family":  "RNHouseSansRegular",            
              "color":property.$primary_2             
            };
        return shelfProps;
    },
    subnavItemSellProps4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "font-size":"16px",
              "line-height": "22px",
              "padding-top":property.$subnv_padding_top,
              "font-family":  "RNHouseSansRegular",            
              "color":property.$primary_2             
            };
        return shelfProps;
    },
    subnavGridonHover:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "color": property.$subnv_hover_clr,
                "background-color":property.$subnv_hover_bgclr              
            };
        return shelfProps;
    },
    subnv2GridHoverProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom":property.$subnv2_padding_bottom,
                "background-color":property.$subnv_hover_bgclr_prop
               
            };
        return shelfProps;
    },
 
    subnvGridHoverProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom":property.$subnv_padding_bottom,
                "background-color":property.$subnv_hover_bgclr_prop
               
            };
        return shelfProps;
    },
    subnvGridFocusProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "background":property.$subnv_focus_bgclr
               
            };
        return shelfProps;
    },
    subnavRTEProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "line-height":"20px",
                "padding-bottom":"14px",
                "margin-bottom":property.$subnv_rte_margin_btm,
                "color":  property.$subnv_rte_clr,
                "font-size":"14px",
                "font-family":  property.$font_family_regular,               
            };
        return shelfProps;
    },
    subnavRTEStrongProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "line-height":"20px",                
                "color":  property.$primary_1,
                "font-size":"14px",
                "font-family":  property.$font_family_regular,
               "font-weight": "700"               
            };
        return shelfProps;
    },
    subnavRTELinkProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "line-height":"20px",                
               //"display": property.$subnv_rte_display,
               "text-decoration":property.$subnv_rte_link_underline, 
               "color":property.$subnv_rte_link_color,          
            };
        return shelfProps;
    },
//5 Grids
       subnav5GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv5_bgclr2              
            };
        return shelfProps;
    },
    subnav5GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv5_bgclr3              
            };
        return shelfProps;
    },
    subnav5GridBgclr4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv5_bgclr4              
            };
        return shelfProps;
    },
//6 grids
    subnav6GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv6_bgclr2               
            };
        return shelfProps;
    },
    subnav6GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv6_bgclr3               
            };
        return shelfProps;
    },
    subnav6GridBgclr4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv6_bgclr4               
            };
        return shelfProps;
    },
    subnav6GridBgclr5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv6_bgclr5               
            };
        return shelfProps;
    },
    //4 Grids

    subnav4GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4_bgclr2               
            };
        return shelfProps;
    },
    subnav4GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4_bgclr3              
            };
        return shelfProps;
    },
    //3 grids
    subnav3GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_3_bgclr2           
            };
        return shelfProps;
    },
    
    //first and last grids
    firstChildBgcolorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_firstchild_bgclr            
            };
        return shelfProps;
    },
    lastChildBgcolorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_lastchild_bgclr   
            };
        return shelfProps;
    },

    //Mobile
    subnavShelfPropssm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding" : property.$subnvpadding,
                "padding-left":"16px"
                            
            };
        return shelfProps;
    },
    subnavShelfInnerPropssm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "max-width":property.$subnvmaxwidth         
            };
        return shelfProps;
    },
    headlinePropssm: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size": property.$hdline_fs_mob,
                "line-height": property.$hdline_lh_mob,
                "font-family": property.$hdline_font_family,
                "color": property.$primary_1,
                "margin":property.$hdline_margin_m,
            };
        return shelfProps;
    },
    subnavLinkProps3Gridssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding":property.$subnv3_link_padding_m,
                "padding-left":"14px"                    
            };
        return shelfProps;
    },
      
    subnavGridsPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "margin-right": "1px",
                "color":property.$primary_2,
                "background-size":property.$subnv_backgrnd_size_m,
                "margin-bottom":property.$subnv_margin_btm_m,                          
            };
        return shelfProps;
    },
    subnavGridsPropssm6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "margin-right": "1px",
                "color":property.$primary_2,
                "background-size":property.$subnv_backgrnd_size_m_6,
                "margin-bottom":property.$subnv_margin_btm_m,                          
            };
        return shelfProps;
    },
   
    
    subnavLinkPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "min-height": "74px",
                "color":property.$primary_2,
                "background-color": "rgba(0, 0, 0, 0)"                 
            };
        return shelfProps;
    },    
    subnavLinkPropssm4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = { 
                "padding":property.$subnv_link_padding_m,               
                               
            };
        return shelfProps;
    },
    subnavLinkPropssm5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {  
                "padding":property.$subnv5_link_padding_m,              
                                  
            };
        return shelfProps;
    },
    subnavLinkPropssm6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                "padding":property.$subnv6_link_padding_m,            
                             
            };
        return shelfProps;
    },
    subnavLinkPropssm3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = { 
                "padding":property.$subnv3_link_padding_m,               
                                
            };
        return shelfProps;
    },
    subnavHeadPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "font-size":property.$subnv_hd_font_size_m,
               "line-height": property.$subnv_hd_line_height_m,
               "font-family":  "RNHouseSansRegular",           
                "color":property.$primary_2               
            };
        return shelfProps;
    },
  
    subnavHeadInnerPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "margin-right":property.$subnv_hd_margin_right_m
            };
        return shelfProps;
    },

    subnavChevronPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "font-size":"16px",
              "background-color": "rgba(0, 0, 0, 0)"
            };
        return shelfProps;
    },
    subnavChevronPropssm4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "bottom":property.$subnv_chevron_btm_m,
              "left":property.$subnv_chevron_left_m,
              
              "right":property.$subnv_chevron_right_m,             
            };
        return shelfProps;
    },
    subnavChevronPropssm5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":"112px",
              "bottom":property.$subnv5_chevron_btm_m,
            };
        return shelfProps;
    },
    subnavChevronPropssm6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
              "left":property.$subnv6_chevron_left_m,  
              "bottom":property.$subnv6_chevron_btm_m,           
            };
        return shelfProps;
    },
    subnavChevronPropssm3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "bottom":property.$subnv_chevron_btm_m,
              "left":property.$subnv3_chevron_left_m,              
              "right":property.$subnv3_chevron_right_m,            
            };
        return shelfProps;
    },   
    subnavChevronAfterPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "right":property.$subnv_chevron_after_right_m,
              "top":property.$subnv_chevron_after_top_m,
              "z-index":"9",
              "font-size":property.$subnv_chevafter_fsize,
              "line-height": "1px",
              "bottom":property.$subnv_chevron_after_btm_m,
            };
        return shelfProps;
    },   
    subnavItemSellPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {             
              "font-size":"16px",
              "line-height": property.$subnv_subtext_lineheight_m,             
              "font-family":  "RNHouseSansRegular",            
              "color":property.$primary_2             
            };
        return shelfProps;
    }, 
     subnavItemSellPropssm4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {            
              "padding-top":"7px",                    
            };
        return shelfProps;
    },
    subnavItemSellPropssm5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {         
              "padding-top":property.$subnv_paddingtop_sm5                       
            };
        return shelfProps;
    },
    subnavItemSellPropssm6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {           
                 "padding-top":"7px",                        
            };
        return shelfProps;
    },
    subnavItemSellPropssm3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {           
                 "padding-top":"7px",                    
            };
        return shelfProps;
    },
      
    subnvGridHoverPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom": property.$subnv_hvr_padding_btm_m,
                "background-color":"rgba(0, 0, 0, 0)"               
            };
        return shelfProps;
    },
    
    subnavRTEPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {               
                "line-height":property.$subnv_rte_line_height_m,
                "padding-bottom":property.$subnv_rte_padding_btm,
                "margin-bottom":"0px",
                "color": property.$subnv_rte_clr,
                "font-size":property.$subnv_rte_fsize_m,
                "font-family":  property.$font_family_regular,               
            };
        return shelfProps;
    },
    subnavRTEStrongPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "line-height":property.$subnv_rte_line_height_m,               
                "color":  property.$subnv_rte_clr,
                "font-size":property.$subnv_rte_fsize_m,
                "font-family":  property.$font_family_regular,
               "font-weight": "700"               
            };
        return shelfProps;
    },
    subnavRTELinkPropssm:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "line-height":property.$subnv_rte_line_height_m,                
              // "display":property.$subnv_rte_display,
               "text-decoration": property.$subnv_rte_link_underline,
               "color":property.$subnv_rte_link_color               
            };
        return shelfProps;
    },
    //4 Grids

    subnavMob4GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_4_bgclr2               
            };
        return shelfProps;
    },
    subnavMob4GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_4_bgclr3              
            };
        return shelfProps;
    },
    firstChildBgcolorPropssm3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_firstbgclr3
            };
        return shelfProps;
    },
    firstChildBgcolorPropssm4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_firstbgclr4             
            };
        return shelfProps;
    },
    firstChildBgcolorPropssm6:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_firstbgclr6            
            };
        return shelfProps;
    },
    firstChildBgcolorPropssm5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_firstbgclr5             
            };
        return shelfProps;
    },
    //3 grids
    subnavMob3GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color": property.$subnv_mob_3_bgclr2        
            };
        return shelfProps;
    },
    subnavMob5GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color": property.$subnv_mob_5_bgclr2        
            };
        return shelfProps;
    },
    subnavMob5GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_5_bgclr3 
            };
        return shelfProps;
    },
    subnavMob5GridBgclr4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_5_bgclr4       
            };
        return shelfProps;
    },
    subnavMob6GridBgclr2:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_6_bgclr2    
            };
        return shelfProps;
    },
    subnavMob6GridBgclr3:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_6_bgclr3   
            };
        return shelfProps;
    },
    subnavMob6GridBgclr4:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_6_bgclr4 
            };
        return shelfProps;
    },
    subnavMob6GridBgclr5:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_mob_6_bgclr5
            };
        return shelfProps;
    },
    subnav2FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "margin-bottom":property.$subnv_2child_margin_bottom,
                 "background-color":property.$subnv_2child_bg_color,
                 "padding":property.$subnv_2child_padding,
                 "margin-right":property.$subnv_2child_margin_right,
                 "background-position":property.$subnv_2child_bg_pos
            };
        return shelfProps;
    },
    subnav2FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "height":property.$subnv_2child_anchor_height,
                 "padding":property.$subnv_2child_anchor_padding,
                 "min-height":property.$subnv_2child_anchor_minheight
            };
        return shelfProps;
    },
    subnav2LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "margin-bottom":property.$subnv_2child_margin_bottom,    
                 "background-color":property.$subnv_2lastchild_bg_color,
                 "padding":property.$subnv_2child_padding,
                 "margin-right":property.$subnv_2child_margin_right,
                 "background-position":property.$subnv_2child_bg_pos
            };
        return shelfProps;
    },
    subnav2InsideHeadingTextProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv2_headingtext_margin_right,
                 "margin":property.$subnv2_headingtext_margin,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv2_headingtext_fs,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav2ChevronProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv2_chevron_right,    
                 "top":property.$subnv2_chevron_top,
                 "bottom":property.$subnv2_chevron_bottom,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav2PadlockProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv2_padlock_right,    
                 "top":property.$subnv2_padlock_top,
                 "bottom":property.$subnv2_chevron_bottom,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav3FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_3child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs,
            };
        return shelfProps;
    },
    subnav3FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "height":property.$subnv_3child_anchor_height,
                 "padding":property.$subnv_3child_anchor_padding,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    subnav3SecondChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_3secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs,
            };
        return shelfProps;
    },
    subnav3LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_3lastchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs,
            };
        return shelfProps;
    },
    subnav3ChevronProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv3_chevron_right,    
                 "top":property.$subnv3_chevron_top,
                 "bottom":property.$subnv2_chevron_bottom,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav3PadlockProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv3_padlock_right,
                 "bottom":property.$subnv2_chevron_bottom,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav4FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav4ChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {   
                 "padding":property.$subnv_4_anchor_padding,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    subnav4FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {   
                 "padding":property.$subnv_4child_anchor_padding,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    subnav4SecondChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav4ThirdChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4thirdchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav4LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4lastchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav4InsideHeadingTextProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv4_headingtext_margin_right,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv4_headingtext_fs,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav4PadlockProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv4_padlock_right,
                 "bottom":property.$subnv4_chevron_bottom,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav4ChevronProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv4_chevron_right,
                 "bottom":property.$subnv4_chevron_bottom,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    rewardsubnav4FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad,
                 "padding":property.$rewardsubnv_4child_padding,
                 "margin-top":property.$rewardsubnv_4child_margin_top,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {  
                 "padding":property.$rewardsubnv_4child_anchor_padding,
                 "margin":property.$rewardsubnv_4child_anchor_margin,
                 "position":property.$rewardsubnv_4child_anchor_pos,
                 "text-decoration":property.$rewardsubnv_4child_text_dec,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    rewardsubnav4SecondChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad,
                 "padding":property.$rewardsubnv_4child_padding,
                 "margin-top":property.$rewardsubnv_4child_margin_top,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4ThirdChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4thirdchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad,
                 "padding":property.$rewardsubnv_4child_padding,
                 "margin-top":property.$rewardsubnv_4child_margin_top,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4lastchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad,
                 "padding":property.$rewardsubnv_4child_padding,
                 "margin-top":property.$rewardsubnv_4child_margin_top,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4InsideHeadingTextProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$rewardsubnv4_headingtext_margin_right,
                 "margin":property.$rewardsubnv4_headingtext_margin,
                 "line-height":property.$rewardsubnv4_headingtext_lh,
                 "height":property.$rewardsubnv4_headingtext_height,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$rewardsubnv4_headingtext_fs,
                 "color":property.$subnv2_headingtext_color
            };
        return shelfProps;
    },
    subnav5FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav5FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_5child_anchor_padding,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    subnav5SecondChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_5secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav5ThirdChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_5thirdchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav5FourthChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_5fourthchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav5LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_5lastchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav5InsideHeadingTextProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv5_headingtext_margin_right,
                 "margin":property.$subnv5_headingtext_margin,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv5_headingtext_fs,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav5ChevronProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv_5_chevron_right,
                 "bottom":property.$subnv_5_chevron_bottom,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav5PadlockProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv5_padlock_right,
                 "bottom":property.$subnv_5_chevron_bottom,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav6FirstChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_4child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6FirstChildAnchorProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_6child_anchor_padding,
                 "min-height":property.$subnv_3child_anchor_minheight
            };
        return shelfProps;
    },
    subnav6SecondChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_6secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6ThirdChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_6thirdchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6FourthChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_6fourthchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6FifthChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_6fifthchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6LastChildProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$subnv_6lastchild_bg_color,
                 "margin-right":property.$subnv_6lastchild_margin_right,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    subnav6InsideHeadingTextProps:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv6_headingtext_margin_right,
                 "margin":property.$subnv6_headingtext_margin,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv6_headingtext_fs,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav2FirstChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "margin-bottom":property.$subnv_2child_margin_bottom_mob,
                 "background-color":property.$subnv_2child_bg_color,
                 "padding":property.$subnv_2child_padding_mob,
                 "background-position":property.$subnv_2child_bg_pos
            };
        return shelfProps;
    },
    subnav2FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_2child_anchor_padding_mob,
                 "min-height":property.$subnv_2child_anchor_minheight
            };
        return shelfProps;
    },
    subnav2LastChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "margin-bottom":property.$subnv_2lastchild_margin_bottom_mob,    
                 "background-color":property.$subnv_2lastchild_bg_color,
                 "padding":property.$subnv_2child_padding_mob,
                 "background-position":property.$subnv_2child_bg_pos
            };
        return shelfProps;
    },
    subnav2ChevronPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv2_chevron_right_mob,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav2PadlockPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv2_padlock_right_mob,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav3FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_3child_anchor_padding_mob,
            };
        return shelfProps;
    },
    subnav3InsideHeadingTextPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv2_headingtext_margin_right_mob,
                 "margin":property.$subnv2_headingtext_margin_mob,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv2_headingtext_fs_mob,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav3ChevronPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv3_chevron_right_mob,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav3PadlockPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "right":property.$subnv3_chevron_right_mob,
                 "position":property.$subnv2_padlock_pos,
                 "font-size":property.$subnv2_chevron_fs,
                 "z-index":property.$subnv2_chevron_zindex,
                 "background-color":property.$subnv2_chevron_bg_color,
                 "margin":property.$subnv2_chevron_margin,
                 "padding":property.$subnv2_chevron_padding
                 
            };
        return shelfProps;
    },
    subnav4FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {   
                 "padding":property.$subnv_4child_anchor_padding_mob,
            };
        return shelfProps;
    },
    subnav5FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_4child_anchor_padding_mob,
            };
        return shelfProps;
    },
    subnav5InsideHeadingTextPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv5_headingtext_margin_right_mob,
                 "margin":property.$subnv5_headingtext_margin_mob,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv5_headingtext_fs_mob,
                 "color":property.$subnv2_headingtext_color
                 
            };
        return shelfProps;
    },
    subnav6FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "padding":property.$subnv_4child_anchor_padding_mob,
            };
        return shelfProps;
    },
    rewardsubnav4FirstChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4child_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad_mob,
                 "padding":property.$rewardsubnv_4child_padding_mob,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4FirstChildAnchorPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {  
                 "padding":property.$rewardsubnv_4child_anchor_padding_mob,
                 "margin":property.$rewardsubnv_4child_anchor_margin,
                 "position":property.$rewardsubnv_4child_anchor_pos,
                 "text-decoration":property.$rewardsubnv_4child_text_dec
            };
        return shelfProps;
    },
    rewardsubnav4SecondChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4secondchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad_mob,
                 "padding":property.$rewardsubnv_4child_padding_mob,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4ThirdChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4thirdchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad_mob,
                 "padding":property.$rewardsubnv_4child_padding_mob,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4LastChildPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {    
                 "background-color":property.$rewardsubnv_4lastchild_bg_color,
                 "margin-right":property.$subnv_3child_margin_right,
                 "border-radius":property.$rewardsubnv_4child_border_rad_mob,
                 "padding":property.$rewardsubnv_4child_padding_mob,
                 "margin-top":property.$rewardsubnv_4child_margin_top,
                 "float":property.$subnv_3child_float,
                 "color":property.$subnv_3child_color,
                 "background-position":property.$subnv_3child_bg_pos,
                 "font-size":property.$subnv_3child_fs
            };
        return shelfProps;
    },
    rewardsubnav4InsideHeadingTextPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                 "display":property.$subnv2_headingtext_display,    
                 "position":property.$subnv2_headingtext_pos,
                 "margin-right":property.$subnv4_headingtext_margin_right_mob,
                 "margin":property.$rewardsubnv4_headingtext_margin_mob,
                 "line-height":property.$rewardsubnv4_headingtext_lh,
                 "height":property.$rewardsubnv4_headingtext_height,
                 "padding":property.$subnv2_headingtext_padding,
                 "font-size":property.$subnv4_headingtext_fs_mob,
                 "color":property.$subnv2_headingtext_color
            };
        return shelfProps;
    },
    subnvGridHoverPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom":property.$subnv_padding_bottom_mob,
                "background-color":"rgba(0, 0, 0, 0)" 
            };
        return shelfProps;
    },
    subnv3GridHoverPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
                "padding-bottom":property.$subnv3_padding_bottom_mob,
                "background-color":"rgba(0, 0, 0, 0)" 
            };
        return shelfProps;
    },
    subnvGridFocusPropsMob:function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {                
                "background":property.$subnv_focus_bgclr_mob
               
            };
        return shelfProps;
    },
};
}