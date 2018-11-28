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
    '@tags': ['tile','tile-desktop', 'desktop'],
      //Opening the URL
      "1. Opening the Desktop URL": function(client) {
              globalProps(client); 
              client.maximizeWindow();
              callback.openURL(client, pageurl.NW_PER_TILE);
              //callback.openURL(client,pageurl.RBS_BUS_TILE);
              console.log("--Desktop--"+pageurl.NW_PER_TILE);
              client.pause(2000);
      },

      //Verifying Tile Layout properties 
      "2. Tile Layout Properties":function(client){
        
         tileLayoutselector = pageObj.elements.tileLayout.selector,
         globalProps(client);
         callback.scrollToElement(client, tileLayoutselector);
         if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){

            client.elements('css selector',tileLayoutselector,results=>{
                if(results.value.length>0) { 
                    properties = tile_props.tileLayoutProp('lg');
                    callback.multiloop(client, tileLayoutselector , properties, 'lg');
                }

            });
         }
      },

     //Verifying Tile Heading and Text properties 
      "3. Tile Heading Properties":function(client){
        
        tileHeadselector1 = pageObj.elements.tileHead.selector,
        tileHeadselector2 = pageObj.elements.tileHeadText.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){

           client.elements('css selector',tileHeadselector1,results=>{
               if(results.value.length>0) { 
                   properties1 = tile_props.tileHeadProp('lg');
                   properties2 = tile_props.tileHeadTextProp('lg');
                   callback.multiloop(client, tileHeadselector1 , properties1, 'lg');
                   callback.multiloop(client, tileHeadselector2 , properties2, 'lg');
               }

           });
        }
     },

      //Verifying Grid Item  properties 
     "4. Grid Item One half left and right Properties":function(client){
        
        griditemselector=pageObj.elements.griditem.selector,
        gridItemhalfselector1 = pageObj.elements.gridItemLeft.selector,
        gridItemhalfselector2 = pageObj.elements.gridItemRight.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){

           client.elements('css selector',griditemselector,results=>{
               if(results.value.length>0) { 
                   properties1 = tile_props.gridItemLeftHalfProp('lg');
                   properties2 = tile_props.gridItemRightHalfProp('lg');
                   callback.multiloop(client, gridItemhalfselector1 , properties1, 'lg');
                   callback.multiloop(client, gridItemhalfselector2 , properties2, 'lg');
               }

           });
        }
     },

       //Verifying text-area properties for all types of tiles
     "5. Text-area text properties ":function(client){
        
       textArea=pageObj.elements.textArea.selector,
        a = [".white-theme",".purple-theme"];
        b = [".tile--large",".tile--horizontal",".tile--vertical",".tile--small"];
        c = ["h3"];
       globalProps(client);
       if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){

             client.elements('css selector',textArea,results=>{
                if(results.value.length>0) { 
                   
                    for(i=0; i<a.length; i++){
                        for(j=0; j<b.length; j++){
                            properties = tile_props["tile_type_"+i+j]('lg');
                            tileselector= b[j]+' '+a[i];
                            console.log(i,j)
                            callback.multiloop(client, tileselector , properties, 'lg');
                        }
                    };

                    for(i=0; i<a.length; i++){
                        for(j=0; j<c.length; j++){
                            properties = tile_props["tile_text_"+i+j]('lg');
                            tiletextselector= a[i]+' '+c[j];
                            callback.multiloop(client, tiletextselector , properties, 'lg');
                        }
                    };
                   
           }

       });
    }
 }, 

 //Verifying Large Tile Footer properties for all types of tiles
 
 "6. Large Tile Footer properties ":function(client){
        
    largeTileFootSel=pageObj.elements.largeTileFooter.selector,
     a = [".white-theme",".purple-theme"];
     b = [".anchorForLargeTile",".anchorForLargeTile .rte-top-separator",".anchorForLargeTile p:first-child", ".anchorForLargeTile p:last-child"];
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){

          client.elements('css selector',largeTileFootSel,results=>{
             if(results.value.length>0) { 
                
                 for(i=0; i<a.length; i++){
                     for(j=0; j<b.length; j++){
                         //properties = tile_props["large_tile_footer_"+i+j]('lg');
                         client.source(() => {
                            console.log(i,j); 
                            }); 
                         properties = tile_props["large_tile_"+i+j]('lg');
                         elementselector= a[i]+' '+b[j];
                         callback.multiloop(client, elementselector , properties, 'lg');
                     }
                 };          
              }
            });
    }
 },


  //Verifying Grid Item  on Hover properties 
     "7. Grid Item On Hover White Theme Properties":function(client){
        articleWhiteSel=pageObj.elements.articleRollOverWhite.selector,
        onHoverWhiteSel = pageObj.elements.onHoverWhite.selector,
        onHoverWhitePSel = pageObj.elements.onHoverWhitePara.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){
             client.elements('css selector',articleWhiteSel,results=>{
                if(results.value.length>0) { 
                    client.refresh();
                    client.moveToElement(articleWhiteSel, 50,50)
                    client.pause(2000)
                    properties1 = tile_props.onHoverWhiteProp('lg');
                    callback.singleElem(client, onHoverWhiteSel, properties1, 'lg'); 
                    properties2= tile_props.onHoverWhiteParaProp('lg');
                    callback.singleElem(client, onHoverWhitePSel, properties2, 'lg'); 
                    }                        
                });
     }
     }, 

     //Verifying Grid Item  on Hover properties 
     "8. Grid Item On Hover Purple Theme Properties":function(client){
        articlePurpleSel=pageObj.elements.articleRollOverPurple.selector,
        onHoverPurpleSel = pageObj.elements.onHoverPurple.selector,
        onHoverPurplePSel = pageObj.elements.onHoverPurplePara.selector,
        
        globalProps(client);
        if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){
            
                      client.elements('css selector',articlePurpleSel,results=>{
                        if(results.value.length>0) { 
                         client.refresh();
                         client.moveToElement(articlePurpleSel, 50,50)
                         client.pause(2000)
                         properties = tile_props.onHoverPurpleProp('lg');
                         callback.singleElem(client, onHoverPurpleSel, properties, 'lg'); 
                         properties2= tile_props.onHoverPurpleParaProp('lg');
                         callback.singleElem(client, onHoverPurplePSel, properties2, 'lg'); 
                        }                        
                      });

     }
     }, 

 //Verifying Chevron (Arrow)  background-image for tiles 
 "9. Chevron Properties":function(client){
        
    whitethemechevronselector = pageObj.elements.whiteThemeChevron.selector,
    purplethemechevronselector = pageObj.elements.purpleThemeChevron.selector,

    globalProps(client);
    if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){

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
 "10. See More & Less Focus, click functionality and properties":function(client){
    
    seeMoreLessSel= pageObj.elements.seeMoreLess.selector,
    seeMoreSel = pageObj.elements.seeMore.selector,
    seeMoreFocusSel= pageObj.elements.seeMoreFocus.selector,
    seeLessSel = pageObj.elements.seeLess.selector,
    seeLessFocusSel= pageObj.elements.seeLessFocus.selector,


    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){

       client.elements('css selector',seeMoreSel,results=>{
           if(results.value.length>0) { 
            properties = tile_props.seeMoreLessProps('lg');
            properties1 = tile_props.seeMoreProps('lg');
            properties2 = tile_props.seeLessProps('lg');
            properties3 = tile_props.seeMoreFocusProps('lg');
            client.refresh();
            callback.multiloop(client, seeMoreLessSel , properties, 'lg');
            callback.multiloop(client, seeMoreSel , properties1, 'lg');
            client.execute("document.getElementsByClassName('tile--show--hide')[0].setAttribute('style', 'display:block;')") 
            client.moveToElement(seeMoreSel, 15,15)
            client.pause(2000)
            client.mouseButtonDown(0)
            client.pause(2000)
            callback.singleElem(client, seeMoreFocusSel, properties3, 'lg');
            client.pause(2000)
            client.mouseButtonUp(0)
            client.pause(2000)
            client.verify.visible(".tile--hide .cta a");
            callback.multiloop(client, seeLessSel , properties2, 'lg');
            client.pause(2000)
            client.moveToElement(seeLessSel, 10,10)
            client.pause(2000)
            client.mouseButtonDown(0)
            client.pause(2000)
            callback.singleElem(client, seeLessFocusSel, properties3, 'lg');
            client.pause(2000)
            client.mouseButtonUp(0)
           }
       });
    }
 },

  // Verifying Image Properties for all types of grids Left, Right, Top positions.

 "11. Image Properties for all kinds ":function(client){
    a = [".tile--large .tile--image img",".imgRight img",".imgLeft img",".imgBottom img",".imgTop img"];
    imgSel= pageObj.elements.img.selector,
    globalProps(client);
    if(client.globals.test_settings.isLocal  || client.options.desiredCapabilities.isLGDevice){
        
                  client.elements('css selector',imgSel,results=>{
                    if(results.value.length>0) { 
                        for(i=0; i<a.length; i++){
                            console.log(i)
                            client.source(() => {
                                console.log(i); 
                                }); 
                                properties = tile_props["img_type_"+i]('lg');
                                elementselector= a[i];
                                callback.multiloop(client, elementselector , properties, 'lg');
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
