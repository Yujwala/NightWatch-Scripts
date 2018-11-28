var txtimg_props,pageObj,callback,size,rteCallback,
    pageurl = require('../../pageurls.js'),
    pageObj;

function globalProps(client){
    pageObj = client.page.txtimg_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	txtimg_props = require('./txtimg_props.js')(client);	
}

module.exports = {
    '@tags': ['mobile', 'text-image', 'text-image-mobile'],
    //Opens the Mobile Website for the Respective Brand
    "Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();    
        callback.openURL(client,pageurl.RBS_REM_TXTIMG_MOB);
},

    //Resizes the Browser Window for Mobile Website
    "Resize The Window":function(client){
    var  size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(1000);
        client.refresh();
        client.pause(1000);
    },

        // *** Checks for the Shelf Theme Properties *** //
    
        "1. Checks the Shelfs Themes Sections": function(client) {
          lightBlueShelf = pageObj.elements.lightBlueShelf.selector,
          blueShelf = pageObj.elements.blueShelf.selector,
          offWhiteShelf = pageObj.elements.offWhiteShelf.selector,
            globalProps(client);
    
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
    
            //Light Blue Theme Shelf Properties    
            client.elements('css selector',lightBlueShelf,results=>{
              if(results.value.length>0) {
    
                properties = txtimg_props.lightBlueShelf('xs');  
                callback.multiloop(client, lightBlueShelf , properties, 'xs');
                client.source(() => {
                console.log("Light Blue Theme");
              }); 
              }
            });
    
            //Blue Theme Shelf Properties    
            client.elements('css selector',blueShelf,results=>{
               if(results.value.length>0) {
    
                 properties = txtimg_props.blueShelf('xs');  
                 callback.multiloop(client, blueShelf , properties, 'xs');
                 client.source(() => {
                  console.log("Blue Theme"); 
                }); 
                }
            });
            
            //Off White Theme Shelf Properties
            client.elements('css selector',offWhiteShelf,results=>{
               if(results.value.length>0) {
    
                 properties = txtimg_props.offWhiteShelf('xs');  
                 callback.multiloop(client, offWhiteShelf , properties, 'xs');
                 client.source(() => {
                  console.log("Off White Theme"); 
                });
                
                }
            });   
      }  
    },
    
        // *** Checks for the Image-Text Heading, List and Image Properties *** //
    

        "2. Checks the Image-Text Heading, List and Image Sections": function(client) {
          lightBlueShelf = pageObj.elements.lightBlueShelf.selector,
          blueShelf = pageObj.elements.blueShelf.selector,
          offWhiteShelf = pageObj.elements.offWhiteShelf.selector,
          txtImgHead= pageObj.elements.txtImgHead.selector,
          txtImgText1= pageObj.elements.txtImgText1.selector,
          txtImgText2= pageObj.elements.txtImgText2.selector,
          txtImgText3= pageObj.elements.txtImgText3.selector,
          txtImgText4= pageObj.elements.txtImgText4.selector,
          txtImgImage1= pageObj.elements.txtImgImage1.selector,
          txtImgImage2= pageObj.elements.txtImgImage2.selector,
          txtImgImage3= pageObj.elements.txtImgImage3.selector,
          txtImgImage4= pageObj.elements.txtImgImage4.selector,
      
          globalProps(client);
      
        if(client.globals.test_settings.isLocal ||  client.options.desiredCapabilities.isXSDevice){
      
           client.elements('css selector',lightBlueShelf,results=>{
             if(results.value.length>0) {
                properties = txtimg_props.txtImgHead('xs');  
                callback.multiloop(client, txtImgHead , properties, 'xs');
                properties = txtimg_props.txtImgImage1('xs');  
                callback.multiloop(client, txtImgImage1 , properties, 'xs');
                properties = txtimg_props.txtImgImage2('xs');  
                callback.multiloop(client, txtImgImage2 , properties, 'xs');
                properties = txtimg_props.txtImgImage3('xs');  
                callback.multiloop(client, txtImgImage3 , properties, 'xs');
                properties = txtimg_props.txtImgImage4('xs');  
                callback.multiloop(client, txtImgImage4 , properties, 'xs');
      
                props = txtimg_props.txtImgTextp1('xs');
                rteCallback.rteElem(client, txtImgText1, props,'p','xs');
                props = txtimg_props.txtImgTextol1('xs');
                rteCallback.rteElem(client, txtImgText1, props,'ol li','xs');
                props = txtimg_props.txtImgTextp2('xs');
                rteCallback.rteElem(client, txtImgText2, props,'p','xs');
                props = txtimg_props.txtImgTextol2('xs');
                rteCallback.rteElem(client, txtImgText2, props,'ol li','xs');
                props = txtimg_props.txtImgTextp3('xs');
                rteCallback.rteElem(client, txtImgText3, props,'p','xs');
                props = txtimg_props.txtImgTextol3('xs');
                rteCallback.rteElem(client, txtImgText3, props,'ol li','xs');
                props = txtimg_props.txtImgTextp4('xs');
                rteCallback.rteElem(client, txtImgText4, props,'p','xs');
                props = txtimg_props.txtImgTextol4('xs');
                rteCallback.rteElem(client, txtImgText4, props,'ol li','xs');
        
                  client.source(() => {
                console.log("Image Text Container Properties"); 
              }); 
            }
        });
      
        
        client.elements('css selector',blueShelf,results=>{
            if(results.value.length>0) {
              properties = txtimg_props.txtImgHead('xs');  
              callback.multiloop(client, txtImgHead , properties, 'xs');
              properties = txtimg_props.txtImgImage1('xs');  
              callback.multiloop(client, txtImgImage1 , properties, 'xs');
              properties = txtimg_props.txtImgImage2('xs');  
              callback.multiloop(client, txtImgImage2 , properties, 'xs');
              properties = txtimg_props.txtImgImage3('xs');  
              callback.multiloop(client, txtImgImage3 , properties, 'xs');
              properties = txtimg_props.txtImgImage4('xs');  
              callback.multiloop(client, txtImgImage4 , properties, 'xs');
             
              props = txtimg_props.txtImgTextp1('xs');
              rteCallback.rteElem(client, txtImgText1, props,'p','xs');
              props = txtimg_props.txtImgTextol1('xs');
              rteCallback.rteElem(client, txtImgText1, props,'ol li','xs');
              props = txtimg_props.txtImgTextp2('xs');
              rteCallback.rteElem(client, txtImgText2, props,'p','xs');
              props = txtimg_props.txtImgTextol2('xs');
              rteCallback.rteElem(client, txtImgText2, props,'ol li','xs');
              props = txtimg_props.txtImgTextp3('xs');
              rteCallback.rteElem(client, txtImgText3, props,'p','xs');
              props = txtimg_props.txtImgTextol3('xs');
              rteCallback.rteElem(client, txtImgText3, props,'ol li','xs');
              props = txtimg_props.txtImgTextp4('xs');
              rteCallback.rteElem(client, txtImgText4, props,'p','xs');
              props = txtimg_props.txtImgTextol4('xs');
              rteCallback.rteElem(client, txtImgText4, props,'ol li','xs');
      
              client.source(() => {
             console.log("Image Text Container Properties"); 
           }); 
         }
      });
      
        client.elements('css selector',offWhiteShelf,results=>{
            if(results.value.length>0) {
              properties = txtimg_props.txtImgHead('xs');  
              callback.multiloop(client, txtImgHead , properties, 'xs');
              properties = txtimg_props.txtImgImage1('xs');  
              callback.multiloop(client, txtImgImage1 , properties, 'xs');
              properties = txtimg_props.txtImgImage2('xs');  
              callback.multiloop(client, txtImgImage2 , properties, 'xs');
              properties = txtimg_props.txtImgImage3('xs');  
              callback.multiloop(client, txtImgImage3 , properties, 'xs');
              properties = txtimg_props.txtImgImage4('xs');  
              callback.multiloop(client, txtImgImage4 , properties, 'xs');
      
              props = txtimg_props.txtImgTextp1('xs');
                rteCallback.rteElem(client, txtImgText1, props,'p','xs');
                props = txtimg_props.txtImgTextol1('xs');
                rteCallback.rteElem(client, txtImgText1, props,'ol li','xs');
                props = txtimg_props.txtImgTextp2('xs');
                rteCallback.rteElem(client, txtImgText2, props,'p','xs');
                props = txtimg_props.txtImgTextol2('xs');
                rteCallback.rteElem(client, txtImgText2, props,'ol li','xs');
                props = txtimg_props.txtImgTextp3('xs');
                rteCallback.rteElem(client, txtImgText3, props,'p','xs');
                props = txtimg_props.txtImgTextol3('xs');
                rteCallback.rteElem(client, txtImgText3, props,'ol li','xs');
                props = txtimg_props.txtImgTextp4('xs');
                rteCallback.rteElem(client, txtImgText4, props,'p','xs');
                props = txtimg_props.txtImgTextol4('xs');
                rteCallback.rteElem(client, txtImgText4, props,'ol li','xs');
        
              client.source(() => {
            console.log("Image Text Container Properties"); 
          }); 
        }
        });
        }
        },
      
          
      // *** Checks for the Image-Text Color & Background-Color Properties *** //
    
      "3. Checks the Image-Text Color & Background-Color Sections": function(client) {
        lightBlueShelf = pageObj.elements.lightBlueShelf.selector,
        blueShelf = pageObj.elements.blueShelf.selector,
        offWhiteShelf = pageObj.elements.offWhiteShelf.selector,
        txtImgCol1 = pageObj.elements.txtImgCol1.selector,
        txtImgCol2 = pageObj.elements.txtImgCol2.selector,
        txtImgCol3 = pageObj.elements.txtImgCol3.selector,
        txtImgCol4 = pageObj.elements.txtImgCol4.selector,
    
        globalProps(client);
    
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
    
         client.elements('css selector',lightBlueShelf,results=>{
           if(results.value.length>0) {
              properties = txtimg_props.txtImgCol1('xs');  
              callback.multiloop(client, txtImgCol1 , properties, 'xs');
              properties = txtimg_props.txtImgCol2('xs');  
              callback.multiloop(client, txtImgCol2 , properties, 'xs');
              properties = txtimg_props.txtImgCol3('xs');  
              callback.multiloop(client, txtImgCol3 , properties, 'xs');
              properties = txtimg_props.txtImgCol4('xs');  
              callback.multiloop(client, txtImgCol4 , properties, 'xs');
              
              client.source(() => {
              console.log("Image Text Container Properties"); 
            }); 
          }
      });
    
      
      client.elements('css selector',blueShelf,results=>{
        if(results.value.length>0) {
            properties = txtimg_props.txtImgCol1('xs');  
            callback.multiloop(client, txtImgCol1 , properties, 'xs');
            properties = txtimg_props.txtImgCol2('xs');  
            callback.multiloop(client, txtImgCol2 , properties, 'xs');
            properties = txtimg_props.txtImgCol3('xs');  
            callback.multiloop(client, txtImgCol3 , properties, 'xs');
            properties = txtimg_props.txtImgCol4('xs');  
            callback.multiloop(client, txtImgCol4 , properties, 'xs');
       
            client.source(() => {
           console.log("Image Text Container Properties"); 
         }); 
       }
    });
    
      client.elements('css selector',offWhiteShelf,results=>{
        if(results.value.length>0) {
            properties = txtimg_props.txtImgCol1('xs');  
            callback.multiloop(client, txtImgCol1 , properties, 'xs');
            properties = txtimg_props.txtImgCol2('xs');  
            callback.multiloop(client, txtImgCol2 , properties, 'xs');
            properties = txtimg_props.txtImgCol3('xs');  
            callback.multiloop(client, txtImgCol3 , properties, 'xs');
            properties = txtimg_props.txtImgCol4('xs');  
            callback.multiloop(client, txtImgCol4 , properties, 'xs');
       
            client.source(() => {
          console.log("Image Text Container Properties"); 
            }
            )
        }
    }
      );
}
      }
    }
    