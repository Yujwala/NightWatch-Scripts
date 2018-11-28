module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    canvasShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'padding': "48px 0px 48px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="16px 0px 0px 16px";
            };
        return shelfProps;
        },
        fCanvasShelf: function(size) {   
            property = brand.props;
            let shelfProps = {
                        'padding': "48px 0px 48px 0px",
                };
                if(size=="xs"){
                    shelfProps['padding'] ="16px 0px 0px 16px";
                };
            return shelfProps;
            },        
    iPCanvasShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'padding': "48px 0px 48px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px 16.003px 16.003px 0px";
            };
        return shelfProps;
        },
    iPGOHCanvasShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'padding': "0px 47.996px 0px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px 0px 0px 0px";
            };
        return shelfProps;
        },
    iPGOTCanvasShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'padding': "0px 47.996px 0px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px 0px 0px 0px";
            };
        return shelfProps;
        },
        iPGTTCanvasShelf: function(size) {   
        property = brand.props;
        let shelfProps = {
                    'padding': "0px 47.996px 0px 0px",
            };
            if(size=="xs"){
                shelfProps['padding'] ="0px 0px 0px 0px";
            };
        return shelfProps;
        }, 
	};   
}


