//tool hero shelf props
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {

    overdraftWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_overdraft_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_overdraft_height_m; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },

    cashbackWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_cashback_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_height_2_m; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },
    
    clearrateWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_clearrate_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property. $tool_hero_clearrate_height_m; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },

    payoffWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_payoff_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_height_2_m; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },

    mortgageWrapProps: function (size) {
        let shelfProps = {
               "background-color": property.$tool_hero_bgcolor,
               "height" : property.$tool_hero_mortgage_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_mortgage_height_m; 
               shelfProps['background-color'] = property.$tool_hero_bgcolor_m;
               shelfProps['padding'] =  "0px";
            }
            return shelfProps;
    },

    mortgageTrackerWrapProps: function (size) {
        let shelfProps = {
               "background-color" :property.$tool_hero_tracker_bgcolor,
               "height" : property.$tool_hero_tracker_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['background-color'] = property.$tool_hero_bgcolor_m;
               shelfProps['height'] = property.$tool_hero_tracker_height_m; 
               shelfProps['padding'] =  "0px";
            }
            return shelfProps;
    },

    hmcibWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$primary_1,
               "height" : property.$tool_hero_hmcib_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_hmcib_height_m; 
               shelfProps['background-color'] = property.$tool_hero_hmcib_bgcolor_m;
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },
    mrfWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property. $tool_hero_mrf_bgcolor,
               "height" : property.$tool_hero_mrf_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['height'] = property.$tool_hero_height_2_m; 
               shelfProps['background-color'] = property. $tool_hero_mrf_bgcolor_m ;
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },
    aipWrapProps: function (size) {
        let shelfProps = {
               "background-color" : property.$tool_hero_bgcolor_2,
               "height" : property.$tool_hero_aip_height,
               "padding": "0px 20px",
               "color" : property.$primary_2,
               "position" : "relative",
               "display" : "block",
               "box-sizing" : "border-box"      
            };
            if(size==='xs'){
               shelfProps['background-color'] = property.$primary_1;
               shelfProps['height'] = property.$tool_hero_aip_height_m; 
               shelfProps['padding'] =  "30px 0px";
            }
            return shelfProps;
    },
    toolHeroInnerShelfWrapProps: function (size) {
          let  shelfProps = {
               "background-color" : property.$tool_hero_wrapper_bgcolor,
               "padding-top": "25px",
               "position" : "relative",
               "display" : "block",  
            };
            if(size==='xs'){
                shelfProps['padding-top'] = "0px";
             }

            return shelfProps;
        },

        toolHeroHeaderTitleProps: function (size) {
            let shelfProps = {
                "font-size" : "32px",
                "font-family" : property.$font_family_bold,
                "line-height" : "36px",
                "color": property.$primary_2,
                "padding" : "0px 10px 10px 26px",
                "display" : "block",
                "font-family" : property.$font_family_bold,
            };
            if(size==='xs'){
                shelfProps['line-height'] = "32px";
                shelfProps['padding'] =property.$tool_hero_paddingheader_m;
             }

            return shelfProps;
        },

        toolHeroTitleProps : function (size) {
            let shelfProps = {
                "font-size" : "18px",
                "font-family" : property.$font_family_regular,
                "line-height" : "22px",
                "color": property.$primary_2,
                "padding" : "0px 10px 20px 26px",
                "display" : "block",
                "font-family" : property.$font_family_regular,
            }; 
            if(size==='xs'){
                shelfProps['font-size'] = "14px";
                shelfProps['padding'] = "0px 10px 30px 26px";
            }
            return shelfProps;
        }
};

}