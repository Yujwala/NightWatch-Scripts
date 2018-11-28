var pageurl = require('../../pageurls.js'),
    pageObj,canvas_props,callback,size;

function globalProps(client){
    pageObj = client.page.canvas_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;  
    callback.getBrand(client);
    canvas_props = require('./canvas_props.js')(client); 
}

module.exports = {
    '@tags': ['desktop', 'canvas', 'canvas-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_VIDEO );
            console.log("--Desktop--"+pageurl.NW_PER_VIDEO );   
    },

    // *** CHECKS FOR THE FIRST SHELF PROPERITES *** //

    "1. Checks the First Shelf Sections": function(client) {
      fCanvasShelf= pageObj.elements.fCanvasShelf.selector,
      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',fCanvasShelf,results=>{
          if(results.value.length>0) {
            
            properties = canvas_props.fCanvasShelf('lg');  
            callback.multiloop(client, fCanvasShelf , properties, 'lg');


        }
      });
    }
 },

  // *** CHECKS FOR THE CANVAS SHELF PROPERITES *** //

  "2. Checks the Canvas Shelf Sections": function(client) {
    canvasShelf= pageObj.elements.canvasShelf.selector,
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

      client.elements('css selector',canvasShelf,results=>{
        if(results.value.length>0) {
          
          properties = canvas_props.canvasShelf('lg');  
          callback.multiloop(client, canvasShelf , properties, 'lg');

         /* properties = canvas_props.iPCanvasShelf('lg');  
          callback.multiloop(client, iPCanvasShelf , properties, 'lg');

          properties = canvas_props.iPGOTCanvasShelf('lg');  
          callback.multiloop(client, iPGOTCanvasShelf , properties, 'lg');

          properties = canvas_props.iPGOHCanvasShelf('lg');  
          callback.multiloop(client, iPGOHCanvasShelf , properties, 'lg');

          properties = canvas_props.iPGTTCanvasShelf('lg');  
          callback.multiloop(client, iPGTTCanvasShelf , properties, 'lg');*/

      }
    });
  }
}
}

              
 
  
    
