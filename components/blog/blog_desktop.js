var pageurl = require('../../pageurls.js'),
    pageObj,blog_props,callback,size,rteCallback;   

function globalProps(client){
    pageObj = client.page.blog_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    blog_props = require('./blog_props.js')(client);   
}

module.exports = {
    '@tags': ['desktop', 'blog', 'blog-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_MARKETS_BLOG );
            console.log("--Desktop--"+pageurl.NW_MARKETS_BLOG );   
    },

    // *** Checks for the Shelf Theme Properties *** //

    "1. Checks the Shelfs Themes Sections": function(client) {
      blogShelfWhiteTheme = pageObj.elements.blogShelfWhiteTheme.selector,
      blogShelfBlueTheme = pageObj.elements.blogShelfBlueTheme.selector,
      blogShelfLightBlueTheme = pageObj.elements.blogShelfLightBlueTheme.selector,
        globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        //White Theme Shelf Properties    
        client.elements('css selector',blogShelfWhiteTheme,results=>{
          if(results.value.length>0) {

            properties = blog_props.blogShelfWhiteTheme('lg');  
            callback.multiloop(client, blogShelfWhiteTheme , properties, 'lg');
            client.source(() => {
            console.log("White Theme");
          }); 
          }
        });

        //Blue Theme Shelf Properties    
        client.elements('css selector',blogShelfBlueTheme,results=>{
           if(results.value.length>0) {

             properties = blog_props.blogShelfBlueTheme('lg');  
             callback.multiloop(client, blogShelfBlueTheme , properties, 'lg');
             client.source(() => {
              console.log("Blue Theme"); 
            }); 
            }
        });
        
        //Light-Blue Theme Shelf Properties
        client.elements('css selector',blogShelfLightBlueTheme,results=>{
           if(results.value.length>0) {

             properties = blog_props.blogShelfLightBlueTheme('lg');  
             callback.multiloop(client, blogShelfLightBlueTheme , properties, 'lg');
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

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

     client.elements('css selector',blogContainer,results=>{
       if(results.value.length>0) {

         properties = blog_props.blogContainer('lg');  
         callback.multiloop(client, blogContainer , properties, 'lg');
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

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){


  //White Theme Video Properties
  client.elements('css selector',blogShelfWhiteTheme,results=>{
    if(results.value.length>0) {
      properties = blog_props.blogVideoContainer('lg');  
      callback.multiloop(client, blogVideoContainer , properties, 'lg');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('lg');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'lg');
      properties = blog_props.blogVideoContainerPlay('lg');  
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage),
      callback.multiloop(client, blogVideoContainerPlay , properties, 'lg');
      client.source(() => {
      console.log("White Theme Shelf Video Properties"); 
      }); 
    }
  });

    //Blue Theme Video Properties
    client.elements('css selector',blogShelfBlueTheme,results=>{
      if(results.value.length>0) {

      properties = blog_props.blogVideoContainer('lg');  
      callback.multiloop(client, blogVideoContainer , properties, 'lg');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('lg');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'lg');
      properties = blog_props.blogVideoContainerPlay('lg');  
      callback.multiloop(client, blogVideoContainerPlay , properties, 'lg');
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage),
      client.source(() => {
       console.log("Blue Theme Shelf Video Properties"); 
      }); 
      }
  });  

    //Light Blue Theme Video Properties
    client.elements('css selector',blogShelfLightBlueTheme,results=>{
    if(results.value.length>0) {

      properties = blog_props.blogVideoContainer('lg');  
      callback.multiloop(client, blogVideoContainer , properties, 'lg');
      client.moveToElement(blogVideoContainerPlay, 30, 30);
      client.mouseButtonDown(0);
      client.pause(3000);         
      properties = blog_props.blogVideoContainerPlayFocus('lg');  
      callback.multiloop(client, blogVideoContainerPlayFocus , properties, 'lg');
      properties = blog_props.blogVideoContainerPlay('lg');  
      callback.multiloop(client, blogVideoContainerPlay , properties, 'lg');
      client.expect.element(blogVideoContainerPlay).to.have.css('background-image').which.contains(property.$blogVideoContainerPlayImage),
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

  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

      //White Theme Left Side Content Properties
     client.elements('css selector',blogShelfWhiteTheme,results=>{
       if(results.value.length>0) {

         properties = blog_props.blogLeftContent('lg');  
         callback.multiloop(client, blogLeftContent , properties, 'lg');
         //.shelf.theme--white .blog-left-content p
         properties = blog_props.whiteBlogLeftContentPara('lg');  
         callback.multiloop(client, whiteBlogLeftContentPara , properties, 'lg');
          //.shelf.theme--white .blog-left-content blockquote
         properties = blog_props.whiteBlogLeftContentBlockQuote('lg');
         callback.pseudoSingleElem(client, whiteBlogLeftContentBlockQuote,':after',properties);

          
          //shelf.theme--white .blog-left-content .comp-rich-text p strong
           props = blog_props.whiteBlogLeftContentps('lg');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'p strong','lg');
          //shelf.theme--white .blog-left-content .comp-rich-text blockquote
            props = blog_props.whiteBlogLeftContentbq('lg');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'blockquote','lg');
          //shelf.theme--white .blog-left-content .comp-rich-text h4 strong
            props = blog_props.whiteBlogLeftContenth4('lg');
          rteCallback.rteElem(client, whiteBlogLeftContent, props,'h4 strong','lg');
          //shelf.theme--white div.shelf__inner.shelf--padded  .comp-rich-text ul li
            props = blog_props.whiteBlogInnerShelfLi('lg');
          rteCallback.rteElem(client, whiteBlogInnerShelf, props,'ul li','lg');
          //shelf.theme--white div.shelf__inner.shelf--padded  .comp-rich-text p strong
          props = blog_props.whiteBlogInnerShelfps('lg');
          rteCallback.rteElem(client, whiteBlogInnerShelf, props,'p strong','lg');
          client.expect.element('.shelf.theme--white div.shelf__inner.shelf--padded .grid .grid__item.desk--two-thirds ul li').to.have.css('background-image').which.contains(property.$WhiteListBG)
 
        }
});  

      //Blue Theme Left Side Content Properties
      client.elements('css selector',blogShelfBlueTheme,results=>{
        if(results.value.length>0) {

        properties = blog_props.blogLeftContent('lg');  
        callback.multiloop(client, blogLeftContent , properties, 'lg'); 
        //.shelf.theme--blue .blog-left-content p
        properties = blog_props.blueBlogLeftContentPara('lg');  
        callback.multiloop(client, blueBlogLeftContentPara , properties, 'lg');
        //.shelf.theme--blue .blog-left-content blockquote
        properties = blog_props.blueBlogLeftContentBlockQuote('lg');
        callback.pseudoSingleElem(client, blueBlogLeftContentBlockQuote,':after',properties);

          //.shelf.theme--blue .blog-left-content .comp-rich-text p strong
          props = blog_props.blueBlogLeftContentps('lg');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'p strong','lg');   
          //.shelf.theme--blue .blog-left-content .comp-rich-text blockquote
          props = blog_props.blueBlogLeftContentbq('lg');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'blockquote','lg');       
         //.shelf.theme--blue .blog-left-content .comp-rich-text h4 strong
          props = blog_props.blueBlogLeftContenth4('lg');
          rteCallback.rteElem(client, blueBlogLeftContent, props,'h4 strong','lg'); 
         //.shelf.theme--blue div.shelf__inner.shelf--padded .comp-rich-text ul li
         props = blog_props.blueBlogInnerShelfLi('lg');
         rteCallback.rteElem(client, blueBlogInnerShelf, props,'ul li','lg');
         //.shelf.theme--blue div.shelf__inner.shelf--padded .comp-rich-text p strong
         props = blog_props.blueBlogInnerShelfps('lg');
          rteCallback.rteElem(client, blueBlogInnerShelf, props,'p strong','lg');
          client.expect.element('.shelf.theme--blue div.shelf__inner.shelf--padded .grid .grid__item.desk--two-thirds ul li').to.have.css('background-image').which.contains(property.$BlueListBG)

       
        }
      });  
      
      //Light Blue Theme Left Side Content Properties
     client.elements('css selector',blogShelfLightBlueTheme,results=>{
       if(results.value.length>0) {
    
       properties = blog_props.blogLeftContent('lg');  
       callback.multiloop(client, blogLeftContent , properties, 'lg');     
       //.shelf.theme--light-blue .blog-left-content p
       properties = blog_props.lightBlueBlogLeftContentPara('lg');  
       callback.multiloop(client, lightBlueBlogLeftContentPara , properties, 'lg');
       //.shelf.theme--light-blue .blog-left-content blockquote
       properties = blog_props.lightBlueBlogLeftContentBlockQuote('lg');
       callback.pseudoSingleElem(client, lightBlueBlogLeftContentBlockQuote,':after',properties);

          //.shelf.theme--light-blue .blog-left-content .comp-rich-text p strong
          props = blog_props.lightBlueBlogLeftContentps('lg');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'p strong','lg');        
          //.shelf.theme--light-blue .blog-left-content .comp-rich-text blockquote
         props = blog_props.lightBlueBlogLeftContentbq('lg');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'blockquote','lg');
         //.shelf.theme--light-blue .blog-left-content .comp-rich-text h4 strong
         props = blog_props.lightBlueBlogLeftContenth4('lg');
         rteCallback.rteElem(client, lightBlueBlogLeftContent, props,'h4 strong','lg');  
         //.shelf.theme--light-blue div.shelf__inner.shelf--padded .comp-rich-text ul li
         props = blog_props.lightBlueBlogInnerShelfLi('lg');
         rteCallback.rteElem(client, lightBlueBlogInnerShelf, props,'ul li','lg');
         //.shelf.theme--light-blue div.shelf__inner.shelf--padded .comp-rich-text p strong
         props = blog_props.lightBlueBlogInnerShelfps('lg');
         rteCallback.rteElem(client, lightBlueBlogInnerShelf, props,'p strong','lg');
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

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
         

        //White Theme Right Side Content Properties
       client.elements('css selector',blogShelfWhiteTheme,results=>{
        if(results.value.length>0) {
 
          properties = blog_props.blogRightContent('lg');  
          callback.multiloop(client, blogRightContent , properties, 'lg');
          properties = blog_props.blogRightContentImage('lg');  
          callback.multiloop(client, blogRightContentImage , properties, 'lg');
         
          props = blog_props.whiteBlogRightContent('lg');
          rteCallback.rteElem(client, whiteBlogRightContent, props,'p','lg');
          
    
         }
     });
 
       //Blue Theme Right Side Content Properties
         client.elements('css selector',blogShelfBlueTheme,results=>{
           if(results.value.length>0) {
    
             properties = blog_props.blogRightContent('lg');  
             callback.multiloop(client, blogRightContent , properties, 'lg');
             properties = blog_props.blogRightContentImage('lg');  
             callback.multiloop(client, blogRightContentImage , properties, 'lg');
       
           props = blog_props.blueBlogRightContent('lg');
           rteCallback.rteElem(client, blueBlogRightContent, props,'p','lg');
             
            }
        });
     
 
       //Light Blue Theme Right Side Content Properties
       client.elements('css selector',blogShelfLightBlueTheme,results=>{
          if(results.value.length>0) {
   
            properties = blog_props.blogRightContent('lg');  
            callback.multiloop(client, blogRightContent , properties, 'lg');
            properties = blog_props.blogRightContentImage('lg');  
            callback.multiloop(client, blogRightContentImage , properties, 'lg');
   
            props = blog_props.lightBlueBlogRightContent('lg');
           rteCallback.rteElem(client, lightBlueBlogRightContent, props,'p','lg');
         

         
           }
       });
            
       
}
  }

}