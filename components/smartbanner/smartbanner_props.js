var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
     property = brand.props;

    module.exports = {
        
        smartbannerWrapPropm: function(size) {
        let  shelfProps = {
                
                    "background": "rgb(242, 242, 242)",
                    "left": "0px",
                    "top": "0px",
                    "border-bottom": "1px solid rgb(232, 232, 232)",
                    "width": "100%",
                    "height": "78px",
                    "font-family": "Helvetica Neue, sans-serif",
                    "box-shadow":"rgba(0, 0, 0, 0.5) 0px 1px 2px 0px",
                    "z-index": "9998",
                    "-webkit-font-smoothing": "antialiased",
                    "overflow": "hidden"
                               
                };
            return shelfProps;
       },
       sbcontainerPropm: function(size) {
        let  shelfProps = {
                
              "margin": "0 auto"
                               
                };
            return shelfProps;
       },

       sbclosePropm: function(size) {
        let  shelfProps = {
                
                    "position":"absolute",
                    "left":"5px",
                    "top":"32px",
                    "display":"block",
                    "width":"14px",
                    "height":"14px",
                    "font-family":"Arial",
                    "font-size":"26px",
                    "line-height":"15px",
                    "text-align":"center",
                    "color":"rgba(128, 128, 128, 1)",
                    "text-shadow":"none",
                    "-webkit-font-smoothing":"subpixel-antialiased"
                               
                };
            return shelfProps;
       },

       sbiconPropm: function(size) {
        let  shelfProps = {
                
                "position":"absolute",
                "left":"30px",
                "top":"10px",
                "display":"block",
                "width":"57px",
                "height":"57px",
                "background":"rgba(0,0,0,0.6)",
                "background-size":"cover",
                "border-radius":"10px",
                "box-shadow":"rgba(0, 0, 0, 0.3) 0px 1px 3px 0px"
                               
                };
            return shelfProps;
       },

       sbinfoPropm: function(size) {
        let  shelfProps = {
            "position":"absolute",
            "left":"98px",
            "top":"18px",
            "width":"43%",
            "font-size":"11px",
            "line-height":"13.2px",
            "font-weight":"700",
            "color":"rgba(106, 106, 106, 1)",
            "text-shadow":"rgba(255, 255, 255, 0.8) 0px 1px 0px"
                                            
            };
            return shelfProps;
       },

       sbinfostrongPropm: function(size) {
        let  shelfProps = {
            "display":"block",
            "font-size":"13px",
            "color":"rgba(77, 77, 77, 1)",
            "line-height":"18px"
                   
                };
            return shelfProps;
       },

       sbinfospanPropm: function(size) {
        let  shelfProps = {
                
            "display":"block",
            "text-overflow":"ellipsis",
            "white-space":"nowrap",
            "overflow":"hidden"    
                               
                };
            return shelfProps;
       },
       sbbuttonPropm: function(size) {
        let  shelfProps = {
            "position":"absolute",
            "right":"10px",
            "top":"30px",
            "padding-top":"0px",
            "padding-bottom":"0px",
            "padding-left":"10px",
            "padding-right":"10px",
            "min-width":"10%",
            "height":"24px",
            "font-size":"18px",
            "line-height":"24px",
            "text-align":"center",
            "font-weight":"400",
            "color":"rgba(0, 135, 255, 1)",
            "text-transform":"capitalize",
            "text-shadow":"none"
                   
                };
            return shelfProps;
       },
       


       

     


}