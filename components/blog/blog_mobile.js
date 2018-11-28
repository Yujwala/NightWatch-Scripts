var pageurl = require('../../pageurls.js'),
    pageObj,blog_props,callback,size,rteCallback;  
 
function globalProps(client){
    pageObj = client.page.blog_selectors();
    callback = client.page.common();
    rteCallback = client.page.components.rte.rte();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    blog_props = require('./blog_props.js')(client);  
}

module.exports = {
    '@tags': ['mobile', 'blog', 'blog-mobile'],
    //Opens the Mobile Website for the Respective Brand
    "Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();    
        callback.openURL(client,pageurl.NW_MARKETS_BLOG_MOB);
},

    //Resizes the Browser Window for Mobile Website
    "Resize The Window":function(client){
    var  size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(1000);
        client.refresh();
        client.pause(1000);
    },

    "1. Checks the Shelfs Themes Sections": function(client) {
      blogShelfWhiteTheme = pageObj.elements.blogShelfWhiteTheme.selector,
      blogShelfBlueTheme = pageObj.elements.blogShelfBlueTheme.selector,
      blogShelfLightBlueTheme = pageObj.elements.blogShelfLightBlueTheme.selector,
        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        //White Theme Shelf Properties    
        client.elements('css selector',blogShelfWhiteTheme,results=>{
          if(results.value.length>0) {

            properties = blog_props.blogShelfWhiteTheme('xs');  
            callback.multiloop(client, blogShelfWhiteTheme , properties, 'xs');
            client.source(() => {
            console.log("White Theme");
          }); 
          }
        });

        //Blue Theme Shelf Properties    
        client.elements('css selector',blogShelfBlueTheme,results=>{
           if(results.value.length>0) {

             properties = blog_props.blogShelfBlueTheme('xs');  
             callback.multiloop(client, blogShelfBlueTheme , properties, 'xs');
             client.source(() => {
              console.log("Blue Theme"); 
            }); 
            }
        });
        
        //Light-Blue Theme Shelf Properties
        client.elements('css selector',blogShelfLightBlueTheme,results=>{
           if(results.value.length>0) {

             properties = blog_props.blogShelfLightBlueTheme('xs');  
             callback.multiloop(client, blogShelfLightBlueTheme , properties, 'xs');
             client.source(() => {
              console.log("Light Blue Theme"); 
            });
            
            }
        });   
  }  
},

    // *** Checks for the Shelf Container Properties *** //
  "2. Checks the Shelfs Container Sections": function(client) {
    blogContainer = pageObj.elements.blogContainer.selector,
    globalProps(client);

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

     client.elements('css selector',blogContainer,results=>{
       if(results.value.length>0) {

         properties = blog_props.blogContainer('xs');  
         callback.multiloop(client, blogContainer , properties, 'xs');
          client.source(() => {
          console.log("Shelf Container Properties"); 
        }); 
        }
    });
}  
},

  // *** Checks for the Shelf Video Properties *** //
"3. Checks the Shelf Video Section": function(client) {
  blogShelfWhiteTheme = pageObj.elements.blogShelfWhiteTheme.selector,     
  blogShelfBlueTheme = pageObj.elements.blogShelfBlueTheme.selector,
  blogShelfLightBlueTheme = pageObj.elements.blogShelfLightBlueTheme.selector,
  blogVideoContainer = pageObj.elements.blogVideoContainer.selector,
  blogVideoContainerPlay = pageObj.elements.blogVideoContainerPlay.selector,
  blogVideoContainerPlayFocus = pageObj.elements.blogVideoContainerPlayFocus.selector,
  globalProps(client);

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){


  //White Theme Video Properties
  client.elements('css selector',blogShelfWhiteTheme,results=>{
    if(results.value.length>0) {
      properties = blog_props.blogVideoContainer('xs');  
      callback.multiloop(client, blogVideoContainer , properties, 'xs');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('xs');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'xs');
      properties = blog_props.blogVideoContainerPlay('xs');  
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage_m),
      callback.multiloop(client, blogVideoContainerPlay , properties, 'xs');
      client.source(() => {
      console.log("White Theme Shelf Video Properties"); 
      }); 
    }
  });

    //Blue Theme Video Properties
    client.elements('css selector',blogShelfBlueTheme,results=>{
      if(results.value.length>0) {

      properties = blog_props.blogVideoContainer('xs');  
      callback.multiloop(client, blogVideoContainer , properties, 'xs');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('xs');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'xs');
      properties = blog_props.blogVideoContainerPlay('xs');  
      callback.multiloop(client, blogVideoContainerPlay , properties, 'xs');
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage_m),
      client.source(() => {
       console.log("Blue Theme Shelf Video Properties"); 
      }); 
      }
  });  

    //Light Blue Theme Video Properties
    client.elements('css selector',blogShelfLightBlueTheme,results=>{
    if(results.value.length>0) {

      properties = blog_props.blogVideoContainer('xs');  
      callback.multiloop(client, blogVideoContainer , properties, 'xs');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('xs');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'xs');
      properties = blog_props.blogVideoContainerPlay('xs');  
      callback.multiloop(client, blogVideoContainerPlay , properties, 'xs');
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage_m),
      client.source(() => {
       console.log("Light Blue Theme Shelf Video Properties"); 
      }); 
    }
});  


    }},

    // *** Checks for the Left Side Content Properties *** //
    "4. Checks the Left Side Content Sections": function(client) {
    blogShelfWhiteTheme = pageObj.elements.blogShelfWhiteTheme.selector,
    blogShelfBlueTheme = pageObj.elements.blogShelfBlueTheme.selector,
    blogShelfLightBlueTheme = pageObj.elements.blogShelfLightBlueTheme.selector,
    blogLeftContent = pageObj.elements.blogLeftContent.selector,
    whiteBlogLeftContentPara= pageObj.elements.whiteBlogLeftContentPara.selector,
    blueBlogLeftContentPara= pageObj.elements.blueBlogLeftContentPara.selector,
    lightBlueBlogLeftContentPara= pageObj.elements.lightBlueBlogLeftContentPara.selector,
    whiteBlogLeftContentBlockQuote= pageObj.elements.whiteBlogLeftContentBlockQuote.selector,
    blueBlogLeftContentBlockQuote= pageObj.elements.blueBlogLeftContentBlockQuote.selector,
    lightBlueBlogLeftContentBlockQuote = pageObj.elements.lightBlueBlogLeftContentBlockQuote.selector,
    
    whiteBlogLeftContent= pageObj.elements.whiteBlogLeftContent.selector,
    blueBlogLeftContent= pageObj.elements.blueBlogLeftContent.selector,
    lightBlueBlogLeftContent= pageObj.elements.lightBlueBlogLeftContent.selector,
    whiteBlogInnerShelf= pageObj.elements.whiteBlogInnerShelf.selector,
    blueBlogInnerShelf= pageObj.elements.blueBlogInnerShelf.selector,
    lightBlueBlogInnerShelf= pageObj.elements.lightBlueBlogInnerShelf.selector,

   
    globalProps(client);

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

      //White Theme Left Side Content Properties
     client.elements('css selector',blogShelfWhiteTheme,results=>{
       if(results.value.length>0) {

         properties = blog_props.blogLeftContent('xs');  
         callback.multiloop(client, blogLeftContent , properties, 'xs');
         properties = blog_props.whiteBlogLeftContentPara('xs');  
         callback.multiloop(client, whiteBlogLeftContentPara , properties, 'xs');
         properties = blog_props.whiteBlogLeftContentBlockQuote('xs');
         callback.pseudoSingleElem(client, whiteBlogLeftContentBlockQuote,':after',properties);

          
          props = blog_props.whiteBlogLeftContentps('xs');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'p strong','xs');
          props = blog_props.whiteBlogLeftContentbq('xs');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'blockquote','xs');
          props = blog_props.whiteBlogLeftContenth4('xs');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'h4 strong','xs');
          props = blog_props.whiteBlogInnerShelfLi('xs');
          rteCallback.rteElem(client, whiteBlogInnerShelf, props,'ul li','xs');
          props = blog_props.whiteBlogInnerShelfps('xs');
          rteCallback.rteElem(client, whiteBlogInnerShelf, props,'p strong','xs');
 
          client.expect.element('.shelf.theme--white div.shelf__inner.shelf--padded .grid .grid__item.desk--two-thirds ul li').to.have.css('background-image').which.contains(property.$WhiteListBG)
 
        }
});  

      //Blue Theme Left Side Content Properties
      client.elements('css selector',blogShelfBlueTheme,results=>{
        if(results.value.length>0) {

        properties = blog_props.blogLeftContent('xs');  
        callback.multiloop(client, blogLeftContent , properties, 'xs'); 
        properties = blog_props.blueBlogLeftContentPara('xs');  
        callback.multiloop(client, blueBlogLeftContentPara , properties, 'xs');
        properties = blog_props.blueBlogLeftContentBlockQuote('xs');
        callback.pseudoSingleElem(client, blueBlogLeftContentBlockQuote,':after',properties);

          props = blog_props.blueBlogLeftContentps('xs');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'p strong','xs');   
          props = blog_props.blueBlogLeftContentbq('xs');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'blockquote','xs');       
          props = blog_props.blueBlogLeftContenth4('xs');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'h4 strong','xs'); 
          props = blog_props.blueBlogInnerShelfLi('xs');
          rteCallback.rteElem(client, blueBlogInnerShelf, props,'ul li','xs');
          props = blog_props.blueBlogInnerShelfps('xs');
          rteCallback.rteElem(client, blueBlogInnerShelf, props,'p strong','xs');
          
          client.expect.element('.shelf.theme--blue div.shelf__inner.shelf--padded .grid .grid__item.desk--two-thirds ul li').to.have.css('background-image').which.contains(property.$BlueListBG)

       
        }
      });  
      
      //Light Blue Theme Left Side Content Properties
     client.elements('css selector',blogShelfLightBlueTheme,results=>{
       if(results.value.length>0) {
    
       properties = blog_props.blogLeftContent('xs');  
       callback.multiloop(client, blogLeftContent , properties, 'xs');     
       properties = blog_props.lightBlueBlogLeftContentPara('xs');  
       callback.multiloop(client, lightBlueBlogLeftContentPara , properties, 'xs');
       properties = blog_props.lightBlueBlogLeftContentBlockQuote('xs');
       callback.pseudoSingleElem(client, lightBlueBlogLeftContentBlockQuote,':after',properties);

         props = blog_props.lightBlueBlogLeftContentps('xs');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'p strong','xs');        
         props = blog_props.lightBlueBlogLeftContentbq('xs');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'blockquote','xs');
         props = blog_props.lightBlueBlogLeftContenth4('xs');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'h4 strong','xs');  
         props = blog_props.lightBlueBlogInnerShelfLi('xs');
         rteCallback.rteElem(client, lightBlueBlogInnerShelf, props,'ul li','xs');
         props = blog_props.lightBlueBlogInnerShelfps('xs');
         rteCallback.rteElem(client, lightBlueBlogInnerShelf, props,'p strong','xs');
         client.expect.element('.shelf.theme--light-blue div.shelf__inner.shelf--padded .grid .grid__item.desk--two-thirds ul li').to.have.css('background-image').which.contains(property.$LightBlueListBG)

        }
      });  
    }},      
    
  
    // *** Checks for the Right Side Content Properties *** //
    "5.Checks the Right Side Content Sections": function(client) {
      blogShelfWhiteTheme = pageObj.elements.blogShelfWhiteTheme.selector,
      blogShelfBlueTheme = pageObj.elements.blogShelfBlueTheme.selector,
      blogShelfLightBlueTheme = pageObj.elements.blogShelfLightBlueTheme.selector,
      blogRightContentImage = pageObj.elements.blogRightContentImage.selector,
      blogRightContent= pageObj.elements.blogRightContent.selector,
     
      whiteBlogRightContent= pageObj.elements.whiteBlogRightContent.selector,
      blueBlogRightContent= pageObj.elements.blueBlogRightContent.selector,
      lightBlueBlogRightContent= pageObj.elements.lightBlueBlogRightContent.selector,
  
    
      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
         

        //White Theme Right Side Content Properties
       client.elements('css selector',blogShelfWhiteTheme,results=>{
        if(results.value.length>0) {
 
          properties = blog_props.blogRightContent('xs');  
          callback.multiloop(client, blogRightContent , properties, 'xs');
          properties = blog_props.blogRightContentImage('xs');  
          callback.multiloop(client, blogRightContentImage , properties, 'xs');
         
          props = blog_props.whiteBlogRightContent('xs');
          rteCallback.rteElem(client, whiteBlogRightContent, props,'p','xs');
          
    
         }
     });
 
       //Blue Theme Right Side Content Properties
         client.elements('css selector',blogShelfBlueTheme,results=>{
           if(results.value.length>0) {
    
             properties = blog_props.blogRightContent('xs');  
             callback.multiloop(client, blogRightContent , properties, 'xs');
             properties = blog_props.blogRightContentImage('xs');  
             callback.multiloop(client, blogRightContentImage , properties, 'xs');
       
           props = blog_props.blueBlogRightContent('xs');
           rteCallback.rteElem(client, blueBlogRightContent, props,'p','xs');
             
            }
        });
     
 
       //Light Blue Theme Right Side Content Properties
       client.elements('css selector',blogShelfLightBlueTheme,results=>{
          if(results.value.length>0) {
   
            properties = blog_props.blogRightContent('xs');  
            callback.multiloop(client, blogRightContent , properties, 'xs');
            properties = blog_props.blogRightContentImage('xs');  
            callback.multiloop(client, blogRightContentImage , properties, 'xs');
   
            props = blog_props.lightBlueBlogRightContent('xs');
           rteCallback.rteElem(client, lightBlueBlogRightContent, props,'p','xs');
         

         
           }
       });
            

}
}

}