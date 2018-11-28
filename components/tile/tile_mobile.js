var tile_props,pageObj,callback,size,
    pageurl = require('../../pageurls.js');
    
function globalProps(client){
    pageObj = client.page.tile_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	tile_props = require('./tile_props.js')(client);	
}

module.exports = {
    '@tags': ['tile','tile-mobile','mobile'],
      //Opening the URL
    "1. Opening the Mobile URL": function(client) {
              globalProps(client);
              //client.maximizeWindow();    
              callback.openURL(client,pageurl.NW_PER_TILE_M);
              console.log("--Mobile--"+pageurl.NW_PER_TILE_M); 
              //client.pause(2000);
      },

       //Resize the window for Mobile
    "2. Resize The Window":function(client){
        var  size = client.globals.size.widths;
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(5000);
             client.refresh();
             client.pause(5000);
      },

      //Verifying Tile Layout properties 
    "3. Tile Layout Properties":function(client){
        
         tileLayoutselector = pageObj.elements.tileLayout.selector,
         globalProps(client);
         callback.scrollToElement(client, tileLayoutselector);
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            client.elements('css selector',tileLayoutselector,results=>{
                if(results.value.length>0) { 
                    properties = tile_props.tileLayoutProp('xs');
                    callback.multiloop(client, tileLayoutselector , properties, 'xs');
                }

            });
         }
      },

      //Verifying Tile Heading and Text properties 
      "4. Tile Heading Properties":function(client){
        
        tileHeadselector1 = pageObj.elements.tileHead.selector,
        tileHeadselector2 = pageObj.elements.tileHeadText.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){

           client.elements('css selector',tileHeadselector1,results=>{
               if(results.value.length>0) { 
                   properties1 = tile_props.tileHeadProp('xs');
                   properties2 = tile_props.tileHeadTextProp('xs');
                   callback.multiloop(client, tileHeadselector1 , properties1, 'xs');
                   callback.multiloop(client, tileHeadselector2 , properties2, 'xs');
               }

           });
        }
     },

     //Verifying Grid Item  properties 
     "5. Grid Item One half left and right Properties":function(client){
        
        griditemselector=pageObj.elements.griditem.selector,
        gridItemhalfselector1 = pageObj.elements.gridItemLeft.selector,
        gridItemhalfselector2 = pageObj.elements.gridItemRight.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

           client.elements('css selector',griditemselector,results=>{
               if(results.value.length>0) { 
                   properties1 = tile_props.gridItemLeftHalfProp('xs');
                   properties2 = tile_props.gridItemRightHalfProp('xs');
                   callback.multiloop(client, gridItemhalfselector1 , properties1, 'xs');
                   callback.multiloop(client, gridItemhalfselector2 , properties2, 'xs');
               }

           });
        }
     },

       //Verifying text-area properties for all types of tiles
     "6. Text-area text properties ":function(client){
        
       textArea=pageObj.elements.textArea.selector,
        a = [".white-theme",".purple-theme"];
        b = [".tile--large",".tile--horizontal",".tile--vertical",".tile--small"];
        c = ["h3"];
       globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

             client.elements('css selector',textArea,results=>{
                if(results.value.length>0) { 
                   
                    for(i=0; i<a.length; i++){
                        for(j=0; j<b.length; j++){
                            properties = tile_props["tile_type_"+i+j]('xs');
                            tileselector= b[j]+' '+a[i];
                            console.log(i,j)
                            callback.multiloop(client, tileselector , properties, 'xs');
                        }
                    };

                    for(i=0; i<a.length; i++){
                        for(j=0; j<c.length; j++){
                            properties = tile_props["tile_text_"+i+j]('xs');
                            tiletextselector= a[i]+' '+c[j];
                            callback.multiloop(client, tiletextselector , properties, 'xs');
                        }
                    };
                   
           }

       });
    }
 }, 

 //Verifying Large Tile Footer properties for all types of tiles
   
 "7. Large Tile Footer properties ":function(client){
        
    largeTileFootSel=pageObj.elements.largeTileFooter.selector,
     a = [".white-theme",".purple-theme"];
     b = [".anchorForLargeTile",".anchorForLargeTile .rte-top-separator",".anchorForLargeTile p:first-child", ".anchorForLargeTile p:last-child"];
    globalProps(client);
    if(client.globals.test_settings.isLocal ||  client.options.desiredCapabilities.isXSDevice){

          client.elements('css selector',largeTileFootSel,results=>{
             if(results.value.length>0) { 
                
                 for(i=0; i<a.length; i++){
                     for(j=0; j<b.length; j++){
                         //properties = tile_props["large_tile_footer_"+i+j]('lg');
                         properties = tile_props["large_tile_"+i+j]('xs');
                         elementselector= a[i]+' '+b[j];
                         callback.multiloop(client, elementselector , properties, 'xs');
                     }
                 };
            
                
        }

    });
 }
},


 //Verifying Chevron (Arrow)  background-image for tiles 
 "8. Chevron Properties":function(client){
        
    whitethemechevronselector = pageObj.elements.whiteThemeChevron.selector,
    purplethemechevronselector = pageObj.elements.purpleThemeChevron.selector,

    globalProps(client);
    if(client.globals.test_settings.isLocal ||  client.options.desiredCapabilities.isXSDevice){

       client.elements('css selector',whitethemechevronselector,results=>{
           if(results.value.length>0) { 
            client.expect.element('.tile--text-area.white-theme>.chevron').to.have.css('background-image').which.contains('arrow1');
           }
       });

       client.elements('css selector',purplethemechevronselector,results=>{
        if(results.value.length>0) { 
         client.expect.element('.tile--text-area.purple-theme>.chevron').to.have.css('background-image').which.contains('icon1');
        }
      });

    }
 },
 
 //Verifying See More & Less functionalities for tiles 
 "9. See More & Less Focus, click functionality and properties":function(client){
    
    seeMoreLessSel= pageObj.elements.seeMoreLess.selector,
    seeMoreSel = pageObj.elements.seeMore.selector,
    seeMoreFocusSel= pageObj.elements.seeMoreFocus.selector,
    seeLessSel = pageObj.elements.seeLess.selector,
    seeLessFocusSel= pageObj.elements.seeLessFocus.selector,


    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

       client.elements('css selector',seeMoreSel,results=>{
           if(results.value.length>0) { 
            properties = tile_props.seeMoreLessProps('xs');
            properties1 = tile_props.seeMoreProps('xs');
            properties2 = tile_props.seeLessProps('xs');
            properties3 = tile_props.seeMoreFocusProps('xs');
            client.refresh();
            callback.multiloop(client, seeMoreLessSel , properties, 'xs');
            callback.multiloop(client, seeMoreSel , properties1, 'xs');
            client.execute("document.getElementsByClassName('tile--show--hide')[0].setAttribute('style', 'display:block;')") 
            client.moveToElement(seeMoreSel, 15,15)
            client.pause(2000)
            client.mouseButtonDown(0)
            client.pause(2000)
            callback.singleElem(client, seeMoreFocusSel, properties3, 'xs');
            client.pause(2000)
            client.mouseButtonUp(0)
            client.pause(2000)
            client.verify.visible(".tile--hide .cta a");
            callback.multiloop(client, seeLessSel , properties2, 'xs');
            client.pause(2000)
            client.moveToElement(seeLessSel, 10,10)
            client.pause(2000)
            client.mouseButtonDown(0)
            client.pause(2000)
            callback.singleElem(client, seeLessFocusSel, properties3, 'xs');
            client.pause(2000)
            client.mouseButtonUp(0)
           }
       });
    }
 }, 

 // Verifying Image Properties for all types of grids Left, Right, Top positions.

 "10. Image Properties for all kinds ":function(client){
    a = [".tile--large .tile--image img",".imgRight img",".imgLeft img",".imgBottom img",".imgTop img"];
    imgSel= pageObj.elements.img.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isXSDevice){
        
                  client.elements('css selector',imgSel,results=>{
                    if(results.value.length>0) { 
                        for(i=0; i<a.length; i++){
                            console.log(i)
                            client.source(() => {
                                console.log(i); 
                                }); 
                                properties = tile_props["img_type_"+i]('xs');
                                elementselector= a[i];
                                callback.multiloop(client, elementselector , properties, 'xs');
                        };
                   
                    }                        
                  });

 }
 },

     //Ending the browser session
     'Ending Browser Session': function(client){
        client.pause(5000);
        client.end();
      }


}
