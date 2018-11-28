var rte_props = require('../../components/rte/rte_props.js');
//article shelf props
module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
 lifestyleonethirdrich: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "padding-bottom" :"5px", 
            };
             if(size==="xs"){
                shelfProps['padding-bottom'] ="6px";
                
            }
        return shelfProps;
    },
     graphicalonethirdrich: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "padding-bottom" :"11px", 
            };
             if(size==="xs"){
                shelfProps['padding-bottom'] ="7px";
                
            }
        return shelfProps;
    },
    lifestyleonehalfrich: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "padding-bottom" :"8px", 
            };
            if(size==="xs"){
                shelfProps['padding-bottom'] ="6px";
                
            }
        return shelfProps;
    },
     rtetitleProps: function (size) {
        let rteprops=rte_props.PropTextfs20(size);
           let shelfProps = {
                
                "color": property.$rtecolor,
                "font-family": property.$rtefontfamily,
            };
             if(size==="xs"){
                shelfProps['font-size'] ="18px";
                shelfProps['line-height'] ="22px";
                
            }
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
     rtebodyProps: function (size) {
        let rteprops=rte_props.PropTextfs12(size);
           let shelfProps = {
                
                "color": property.$rtecolor,
            };
            
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
     rtebodyliProps: function (size) {
        let rteprops=rte_props.PropTextLi(size);
           let shelfProps = {
                
                "color": property.$rtecolor,
            };
            
             shelfProps=Object.assign(rteprops,shelfProps);
        return shelfProps;
    },
    propostioniconProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "font-size":"32px",
               "font-family":"nw-icons" 
            };
            if(size==="xs"){
                shelfProps['font-size'] ="28px";
                
                
            }
        return shelfProps;
    },
     lifestylelargetilepadding: function(size) {
        property = brand.props;
        
           let shelfProps = {
            	"padding": "19px 24px 16px",
               
            };
        return shelfProps;
    },
    lifestylesmalltilepadding: function(size) {
        property = brand.props;
        
           let shelfProps = {
            	"padding": "12px 16px 16px",
               
            };
        return shelfProps;
    },
    graphicallargetilepadding: function(size) {
        property = brand.props;
        
           let shelfProps = {
              "padding": "32px 32px 24px",
               
            };
        return shelfProps;
    },
    graphicalsmalltilepadding: function(size) {
        property = brand.props;
        
           let shelfProps = {
              "padding": "24px 16px 16px",
               
            };
            if(size==="xs"){
                shelfProps['padding'] ="11px 16px 16px";
                
            }
        return shelfProps;
    },
    tileonethirdpadding1: function(size) {
        property = brand.props;
       
           let shelfProps = {
            	"padding": "0px 0px 0px 48px",
              "margin-bottom":"0px",
             
               
            };
            if(size==="xs"){
                shelfProps['margin-bottom'] ="16px";
                shelfProps['padding'] ="0px";
                
            }
        return shelfProps;
    },
    tileonethirdpadding2: function(size) {
        property = brand.props;
        
           let shelfProps = {
            	"padding": "0px 0px 0px 43px",
              "margin-bottom":"0px",
               
            };
            if(size==="xs"){
                shelfProps['margin-bottom'] ="16px";
                shelfProps['padding'] ="0px";
                
            }
        return shelfProps;
    },
    tileonethirdpadding3: function(size) {
        property = brand.props;
        
           let shelfProps = {
            	"padding": "0px 0px 0px 38px",
               
               
            };
            if(size==="xs"){
                //shelfProps['margin-bottom'] ="16px";
                shelfProps['padding'] ="0px";
                
            }
        return shelfProps;
    },
     tileonehalfpadding1: function(size) {
        property = brand.props;
        
          let  shelfProps = {
              "padding": "0px 0px 0px 48px",
              "margin-bottom":"0px",
               
            };
            if(size==="xs"){
                shelfProps['margin-bottom'] ="16px";
                shelfProps['padding'] ="0px";
                
            }
        return shelfProps;
    },
      tileonehalfpadding2: function(size) {
        property = brand.props;
        
          let  shelfProps = {
            	"padding": "0px 0px 0px 40px",
              
               
            };
            if(size==="xs"){
                //shelfProps['margin-bottom'] ="16px";
                shelfProps['padding'] ="0px";
                
            }
        return shelfProps;
    },
     
    propostion2tile1: function(size) {
        property = brand.props;
        
          let  shelfProps = {
            	
               "background-color":property.$propostion2tile1Bg,
            };
        return shelfProps;
    },
    propostion2tile2: function(size) {
        property = brand.props;
       
          let  shelfProps = {
            	
               "background-color":property.$propostion2tile2Bg, 
            };
        return shelfProps;
    },

propostion3tile1: function(size) {
        property = brand.props;
       
          let  shelfProps = {
               "background-color":property.$propostion2tile1Bg,
            };
        return shelfProps;
    },

propostion3tile2: function(size) {
        property = brand.props;
       
          let  shelfProps = {
               "background-color":property.$propostion3tile2Bg,
            };
        return shelfProps;
    },

propostion3tile3: function(size) {
        property = brand.props;
        
          let  shelfProps = {
               "background-color":property.$propostion3tile3Bg,
            };
        return shelfProps;
    },
    propostion4tile1: function(size) {
        property = brand.props;
        
           let shelfProps = {
               "background-color":property.$propostion2tile1Bg, 
            };
        return shelfProps;
    },
    propostion4tile2: function(size) {
        property = brand.props;
       
          let  shelfProps = {
               "background-color":property.$propostion4tile2Bg,
            };
        return shelfProps;
    },
    propostion4tile3: function(size) {
        property = brand.props;
          let  shelfProps = {
               "background-color":property.$propostion4tile3Bg,
            };
        return shelfProps;
    },
    propostion4tile4: function(size) {
        property = brand.props;
       
          let  shelfProps = {
               "background-color":property.$propostion4tile4Bg,
            };
        return shelfProps;
    },
    propostion5tile1: function(size) {
        property = brand.props;
       
          let  shelfProps = {
               "background-color":property.$propostion2tile1Bg,
            };
        return shelfProps;
    },
    propostion5tile2: function(size) {
        property = brand.props;
        
          let  shelfProps = {
               "background-color":property.$propostion5tile2Bg,
            };
        return shelfProps;
    },
    propostion5tile3: function(size) {
        property = brand.props;
       
          let   shelfProps = {
               "background-color":property.$propostion5tile3Bg,
            };
        return shelfProps;
    },
    propostion5tile4: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "background-color":property.$propostion5tile4Bg,
            };
        return shelfProps;
    },
    propostion5tile5: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "background-color":property.$propostion5tile5Bg,
            };
        return shelfProps;
    },
    propostion6tile1: function(size) {
        property = brand.props;
        
            let shelfProps = {
               "background-color":property.$propostion2tile1Bg,
            };
        return shelfProps;
    },
    propostion6tile2: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$propostion6tile2Bg,
            };
        return shelfProps;
    },
    propostion6tile3: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$propostion6tile3Bg,
            };
        return shelfProps;
    },
    propostion6tile4: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$propostion6tile4Bg,
            };
        return shelfProps;
    },
    propostion6tile5: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$propostion6tile5Bg,
            };
        return shelfProps;
    },
    propostion6tile6: function(size) {
        property = brand.props;
        let shelfProps = {
               "background-color":property.$propostion6tile6Bg,
            };
        return shelfProps;
    },
};
}