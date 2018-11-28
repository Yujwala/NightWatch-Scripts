var pageurl = require('../../pageurls.js'),
    pageObj,download_shelf_props,callback,size;

function globalProps(client){
    pageObj = client.page.download_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;  
    callback.getBrand(client);
    download_shelf_props = require('./download_props.js')(client); 
}

module.exports = {
  '@tags': ['download-shelf-mobile','desktop','download-shelf'],
    //Opening the URL
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.LOM_DOWNLOAD_SHELF_MOB);
            console.log("--Mobile--"+pageurl.LOM_DOWNLOAD_SHELF_MOB); 
    },

    "1 Check for download wrapper properities": function(client) {
            var downloadshelfCls = pageObj.elements.downloadshelf.selector,
            downloadshelfcontainerCls=pageObj.elements.downloadshelfcontainer.selector,
            themeBlueShelf = pageObj.elements.themeBlueShelf.selector,
            themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,
            themeLightBlue = pageObj.elements.themeLightBlue.selector,
            headergroupCls=pageObj.elements.headergroup.selector,
            headersignpostCls=pageObj.elements.headersignpost.selector;
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',downloadshelfCls,results=>{
               if(results.value.length>0) {
                       console.log("entered 1");
                 //shelf bg color
                 properties = download_shelf_props.downloadshelfPropsm('lg');  
                 callback.multiloop(client, downloadshelfCls , properties, 'lg');

                }
            });
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = download_shelf_props.themeBlueShelfProps('lg');  
                 callback.multiloop(client, themeBlueShelf , properties, 'lg');
                 console.log("Blue Theme"); 

                }
            });

            //Light Blue Theme
            client.elements('css selector',themeLightBlue,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = download_shelf_props.themeLightBlueProps('lg');  
                 callback.multiloop(client, themeLightBlue , properties, 'lg');
                 console.log("Light Blue Theme"); 

                }
            });

            //White Theme
            client.elements('css selector',themeWhiteShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = download_shelf_props.themeWhiteShelfProps('lg');  
                 callback.multiloop(client, themeWhiteShelf , properties, 'lg');
                 console.log("White Theme"); 

                }
            });
            client.elements('css selector',downloadshelfcontainerCls,results=>{
               if(results.value.length>0) {
                     console.log("entered 2");
                 //shelf bg color
                 properties = download_shelf_props.downloadshelfcontainerPropsm('lg');  
                 callback.multiloop(client, downloadshelfcontainerCls , properties, 'lg');

                }
            });
            client.elements('css selector',headergroupCls,results=>{
               if(results.value.length>0) {
                console.log("entered 3");

                 //shelf bg color
                 properties = download_shelf_props.headergroupPropsm('lg');  
                 callback.multiloop(client, headergroupCls , properties, 'lg');

                }
            });
            client.elements('css selector',headersignpostCls,results=>{
               if(results.value.length>0) {
                console.log("entered 4");

                 //shelf bg color
                 properties = download_shelf_props.headersignpostPropsm('lg');  
                 callback.multiloop(client, headersignpostCls , properties, 'lg');

                }
            });
           
    }
},
"2 Check for title properities": function(client) {
            var headerheadlineCls = pageObj.elements.headerheadline.selector,
            downloadgriditemsCls=pageObj.elements.downloadgriditems.selector,
            griditemsleftCls=pageObj.elements.griditemsleft.selector,
            downloadtextleftCls=pageObj.elements.downloadtextleft.selector,
            downloadtextrightCls=pageObj.elements.downloadtextright.selector,
            downlaodiconCls=pageObj.elements.downlaodicon.selector,
            downlaodiconrightCls=pageObj.elements.downlaodiconright.selector;
            globalProps(client);
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
              client.elements('css selector',headerheadlineCls,results=>{
               if(results.value.length>0) {
                console.log("entered 5");

                 //shelf bg color
                 properties = download_shelf_props.headerheadlinePropsm('lg');  
                 callback.multiloop(client, headerheadlineCls , properties, 'lg');

                }
            });
         
       client.elements('css selector',downloadgriditemsCls,results=>{
               if(results.value.length>0) {
                console.log("entered 6");

                 //shelf bg color
                 properties = download_shelf_props.downloadgriditemsPropsm('lg');  
                 callback.multiloop(client, downloadgriditemsCls , properties, 'lg');

                }
            });
        client.elements('css selector',griditemsleftCls,results=>{
               if(results.value.length>0) {
                console.log("entered 7");

                 //shelf bg color
                 properties = download_shelf_props.griditemsleftPropsm('lg');  
                 callback.multiloop(client, griditemsleftCls , properties, 'lg');

                }
            });
        client.elements('css selector',downloadtextleftCls,results=>{
               if(results.value.length>0) {
                console.log("entered 8");

                 //shelf bg color
                 properties = download_shelf_props.downloadtextleftPropsm('lg');  
                 callback.multiloop(client, downloadtextleftCls , properties, 'lg');

                }
            });
        client.elements('css selector',downloadtextrightCls,results=>{
               if(results.value.length>0) {
                console.log("entered 9");

                 //shelf bg color
                 properties = download_shelf_props.downloadtextrightPropsm('lg');  
                 callback.multiloop(client, downloadtextrightCls , properties, 'lg');

                }
            });
         client.elements('css selector',downlaodiconCls,results=>{
               if(results.value.length>0) {
                console.log("entered 10");

                 //shelf bg color
                 properties = download_shelf_props.downlaodiconPropsm('lg');  
                 callback.multiloop(client, downlaodiconCls , properties, 'lg');

                }
            });
          client.elements('css selector',downlaodiconrightCls,results=>{
               if(results.value.length>0) {
                console.log("entered 11");

                 //shelf bg color
                 properties = download_shelf_props.downlaodiconrightPropsm('lg');  
                 callback.multiloop(client, downlaodiconrightCls , properties, 'lg');

                }
            });

            }
        },
        

"Ending the session":function(client){
        client.end();
    }
    
}; 
