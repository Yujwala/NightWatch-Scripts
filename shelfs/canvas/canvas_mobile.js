var pageurl = require('../../pageurls.js'),
    pageObj,canvas_props,callback,size;

function globalProps(client){
    pageObj = client.page.canvas_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    canvas_props = require('./canvas_props.js')(client);   
}

module.exports = 
{
    '@tags': ['mobile', 'canvas', 'canvas-mobile'],
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_VIDEO_MOB );
            console.log("--Desktop--"+pageurl.NW_PER_VIDEO_MOB );   
    },


    //Opens the Mobile Website for the Respective Brand
    "1. Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();    
        callback.openURL(client,pageurl.NW_PER_RATING_MOB);
},

    //Resizes the Browser Window for Mobile Website
    "2. Resize The Window":function(client){
    var  size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
        client.refresh();
        client.pause(15000);
    },

    // *** CHECKS FOR THE FIRST SHELF PROPERITES *** //

    "3. Checks the First Shelf Sections": function(client) {
      fCanvasShelf= pageObj.elements.fCanvasShelf.selector,
      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector',fCanvasShelf,results=>{
          if(results.value.length>0) {
            
            properties = canvas_props.fCanvasShelf('xs');  
            callback.multiloop(client, fCanvasShelf , properties, 'xs');


        }
      });
    }
 },

  // *** CHECKS FOR THE CANVAS SHELF PROPERITES *** //

  "4. Checks the Canvas Shelf Sections": function(client) {
    canvasShelf= pageObj.elements.canvasShelf.selector,
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

      client.elements('css selector',canvasShelf,results=>{
        if(results.value.length>0) {
          
          properties = canvas_props.canvasShelf('xs');  
          callback.multiloop(client, canvasShelf , properties, 'xs');

          properties = canvas_props.iPCanvasShelf('xs');  
          callback.multiloop(client, iPCanvasShelf , properties, 'xs');

          properties = canvas_props.iPGOTCanvasShelf('xs');  
          callback.multiloop(client, iPGOTCanvasShelf , properties, 'xs');

          properties = canvas_props.iPGOHCanvasShelf('xs');  
          callback.multiloop(client, iPGOHCanvasShelf , properties, 'xs');

          properties = canvas_props.iPGTTCanvasShelf('xs');  
          callback.multiloop(client, iPGTTCanvasShelf , properties, 'xs');

      }
    });
  }
}
}

              
 
  
    
