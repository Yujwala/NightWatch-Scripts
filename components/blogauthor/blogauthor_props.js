//blogauthor component Properties 
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {

    blogauthorShelf: function(size) {
           let shelfProps = {
               "background-color" : property.$blogauthor_shelfBGcolor,
               "padding" : property.$blogauthor_section_padding,
               "margin":"0px"
            }
            if(size=="xs"){
                shelfProps['background-color'] = property.$blogauthor_shelfBGcolor,
                shelfProps['padding'] = property.$blogauthor_section_padding_mob
              }

        return shelfProps;
    },
    
    headerTile: function(size) {
        
        
            let shelfProps = {
           
               "padding" : property.$blogauthor_headertile_padding,
               "margin":property.$blogauthor_headertile_margin,
               "color": property.$blogauthor_headertile_color
            }
            if(size=="xs"){
                shelfProps['padding'] =property.$blogauthor_headertile_padding_mob,
                shelfProps['margin']=property.$blogauthor_headertile_margin_mob,
                shelfProps['color']=property.$blogauthor_headertile_color
              }

        return shelfProps;
    },
    
    headerTileEle: function(size) {
        
        
            let shelfProps = {
           
               "font-size" :property.$blogauthor_headertile_ele_fontsize,
               "margin":property.$blogauthor_headertile_ele_margin,
               "color": property.$blogauthor_headertile_ele_color,
               "line-height":property.$blogauthor_headertile_ele_lineheight,
               "font-family":property.$blogauthor_headertile_ele_fontfamily
            }
            if(size=="xs"){
                shelfProps['font-size'] = property.$blogauthor_headertile_ele_fontsize_mob,
                shelfProps['margin']=property.$blogauthor_headertile_ele_margin_mob,
                shelfProps['color'] =property.$blogauthor_headertile_ele_color
                shelfProps['line-height']=property.$blogauthor_headertile_ele_lineheight_mob,
                shelfProps['font-family']=property.$blogauthor_headertile_ele_fontfamily_mob
              }

        return shelfProps;
    },
    
    innerShelf: function(size) {
        
        
            let shelfProps = {
           
               "padding" : property.$blogauthor_innershelfpadding,
             
            }
            if(size=="xs"){
                shelfProps['padding'] = property.$blogauthor_innershelfpadding_mob
                
              }

        return shelfProps;
    },

    blogAvatar: function(size) {
        
        
            let shelfProps = {
               "height" : property.$blogauthor_blogavatar_height ,
               "width":property.$blogauthor_blogavatar_width,
               "border-radius":property.$blogauthor_blogavatar_borderradius
            }
            if(size=="xs"){

                shelfProps['height'] = property.$blogauthor_blogavatar_height_mob,
                shelfProps['width']= property.$blogauthor_blogavatar_width_mob
                shelfProps['border-radius']=property.$blogauthor_blogavatar_borderradius
         }
        return shelfProps;
    },
    
    blogName: function(size) {
        
        
        let shelfProps = {
           
            "font-size" : "32px",
            "margin":"0px",
            "color": property.$blogauthor_headertilecolor,
            "line-height":"39px",
            "font-family":property.$font_family_bold
         }
         if(size=="xs"){
             shelfProps['font-size'] = "13px",
             shelfProps['margin']="0px"
             shelfProps['color'] =property.$blogauthor_headertilecolor,
             shelfProps['line-height']="13px",
             shelfProps['font-family']=property.$font_family_bold
           }
        return shelfProps;
    },

    blogAuthorName: function(size) {
        
        
        let shelfProps = {
           
            "font-size" : property.$blogauthor_blogavatar_authorname_fontsize,
            "margin":property.$blogauthor_blogavatar_authorname_margin,
            "color": property.$blogauthor_nameandtilte_color,
            "line-height": property.$blogauthor_blogavatar_authorname_linehieght,
            "font-family":property.$font_family_regular
         }
         if(size=="xs"){
             shelfProps['font-size'] = property.$blogauthor_blogavatar_authorname_fontsize_mob,
             shelfProps['margin']=property.$blogauthor_blogavatar_authorname_margin_mob
             shelfProps['color'] =property.$blogauthor_nameandtilte_color,
             shelfProps['line-height']= property.$blogauthor_blogavatar_authorname_linehieght_mob,
             shelfProps['font-family']=property.$font_family_regular
           }
        return shelfProps;
    },


    blogAuthorTitle: function(size) { 
        let shelfProps = {
            "font-size" : property.$blogauthor_blogavatar_authortitle_fontsize,
            "margin":"0px",
            "color": property.$blogauthor_nameandtilte_color,
            "line-height":property.$blogauthor_blogavatar_authortitle_linehieght,
            "font-family":property.$font_family_regular
         }
         if(size=="xs"){
             shelfProps['font-size'] = property.$blogauthor_blogavatar_authortitle_fontsize_mob,
             shelfProps['margin']="0px"
             shelfProps['color'] =property.$blogauthor_nameandtilte_color,
             shelfProps['line-height']= property.$blogauthor_blogavatar_authortitle_linehieght_mob,
             shelfProps['font-family']=property.$font_family_regular
           }
        return shelfProps;
    },
  };


}


