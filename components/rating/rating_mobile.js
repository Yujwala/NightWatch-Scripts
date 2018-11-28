var rating_props,callback,size,
    pageurl = require('../../pageurls.js');

function globalProps(client){
    pageObj = client.page.rating_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;  
	callback.getBrand(client);
	rating_props = require('./rating_props.js')(client);	
}

module.exports = {
    '@tags': ['mobile', 'rating', 'rating-mobile'],

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
    /*
    "Set Class to Shelf": function(client) {
        ratingShelfm = pageObj.elements.ratingShelfm.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',ratingShelfm,results=>{
                if(results.value.length>0) { 
                  client.pause(5000);
                // client.execute("document.getElementsByClassName('shelf--first')[0].setAttribute('class', 'shelf theme--blue shelf--white ')")
                  client.execute("document.getElementsByClassName('shelf--first')[0].setAttribute('class', 'shelf theme--blue shelf--first')")
                  client.pause(1000);
                }
            });
        }      
    },
*/
   //Checks for the "Rating-Background Properties"
   "3. Checks for the Rating-Background Section": function(client)  {
        ratingBgColor = pageObj.elements.ratingBgColor.selector,
        ratingMargin = pageObj.elements.ratingMargin.selector,
     
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingBgColor,results=> {
            if(results.value.length>0) {
           
            Properties = rating_props.ratingBgColor('xs');  
            callback.multiloop(client,ratingBgColor, Properties, 'xs');    }
           
            Properties = rating_props.ratingMargin('xs');  
            callback.multiloop(client,ratingMargin, Properties, 'xs');  
         }
            );
        } 
    },

    //Checks for the "Rating-Paragraph Properties"
    "4. Checks for the Rating-Paragraph Section": function(client) 
    {
        ratingParagraph = pageObj.elements.ratingParagraph.selector
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingParagraph,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingParagraph('xs');  
            callback.multiloop(client,ratingParagraph, Properties, 'xs');    }
        }
            );
        } 
    },

      //Checks for the "Rating-Button (Level-1) Properties"
      "5. Checks for the Rating-Button (Level-1) Section": function(client) {
        ratingButton = pageObj.elements.ratingButton.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingButton,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingButton('xs');  
            callback.multiloop(client,ratingButton, Properties, 'xs')
            ;  
      }           
 }
            );
        }
    },
    
    //Checks for the "Rating-Button Hover (Level-1) Properties"
    "6. Checks for the Rating-Button Hover (Level-1) Section": function(client) {
        ratingButtonHover = pageObj.elements.ratingButtonHover.selector,
        ratingBtn = pageObj.elements.ratingBtn.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal){
          
            client.moveToElement(ratingBtn, 5, 5);
            client.mouseButtonDown(0);
            client.pause(5000);
            client.waitForElementVisible(ratingButtonHover,5000);
            Properties = rating_props.ratingButtonHover('xs');  
            callback.multiloop(client,ratingButtonHover, Properties, 'xs') 
        }
    },
    
    //Checks for the "Rating-Button (Level-2) Properties"
    "7. Checks for the Rating-Button (Level-2) Section": function(client) {
        ratingButton = pageObj.elements.ratingButton.selector,
        ratingButtonClick = pageObj.elements.ratingButtonClick.selector,
        ratingBtnClickTextArea = pageObj.elements.ratingBtnClickTextArea.selector,
        ratingBtnClickTextAreaHover = pageObj.elements.ratingBtnClickTextAreaHover.selector,
        ratingButtonClickCta = pageObj.elements.ratingButtonClickCta.selector,
        ratinBtnClickCtaHover = pageObj.elements.ratinBtnClickCtaHover.selector,
        ratingParagraphSub =  pageObj.elements.ratingParagraphSub.selector,
        ratingBtnClickCloseBtn = pageObj.elements.ratingBtnClickCloseBtn.selector
        
        globalProps(client); 
        if(client.globals.test_settings.isLocal){
          
            client.click(ratingBtn);
            client.pause(3000);   
            client.setValue('.ratings--modal-content textarea', 'Good!');
            Properties = rating_props.ratingBtnClickTextArea('xs');  
            callback.multiloop(client,ratingBtnClickTextArea, Properties, 'xs')
            client.pause(3000);   
            client.waitForElementVisible(ratingBtnClickTextAreaHover,5000);
            Properties = rating_props.ratingBtnClickTextAreaHover('xs');  
            callback.multiloop(client,ratingBtnClickTextAreaHover, Properties, 'xs')
            client.pause(3000);

            client.waitForElementVisible(ratingBtnClickCloseBtn,5000);
            Properties = rating_props.ratingBtnClickCloseBtn('lg');  
            callback.multiloop(client,ratingBtnClickCloseBtn, Properties, 'lg')
            client.pause(3000);
       

            client.moveToElement(ratingButtonClickCta, 5, 5);
            client.mouseButtonDown(0);
            client.waitForElementVisible(ratinBtnClickCtaHover,1000);
            client.click(ratingButtonClickCta)
            Properties = rating_props.ratinBtnClickCtaHover('xs');  
            callback.multiloop(client,ratinBtnClickCtaHover, Properties, 'xs') 
            client.pause(3000);
            client.waitForElementVisible(ratingParagraphSub,100);
            Properties = rating_props.ratingParagraphSub('xs');  
            callback.multiloop(client,ratingParagraphSub, Properties, 'xs')
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingButtonClick,results=> {
            Properties = rating_props.ratingButtonClick('xs');  
            callback.multiloop(client,ratingButtonClick, Properties, 'xs');  
            Properties = rating_props.ratingButtonClickCta('xs');  
            callback.multiloop(client,ratingButtonClickCta, Properties, 'xs')
            
        }           
 
            );
        }
    },

    

    //Checks for Rating Share Image Properties
    "8. Checks for Rating Share Image Section": function(client) {
        ratingShareImage = pageObj.elements.ratingShareImage.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingShareImage,results=> {
            if(results.value.length>0) {
           
            Properties = rating_props.ratingShareImage('xs');  
            callback.multiloop(client,ratingShareImage, Properties, 'xs');    }           
         }
            );
        } 
    },

    //Checks for Rating Share Icons and Texts Properties
    "9. Checks for Rating Share Icons and Text Section": function(client) 
    {
        ratingShareIcon = pageObj.elements.ratingShareIcon.selector
        ratingButtonHover = pageObj.elements.ratingButtonHover.selector,
        ratingShareText = pageObj.elements.ratingShareText.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal){
       
            client.moveToElement(ratingShareImage, 1, 1);
            client.mouseButtonDown(0);
            client.pause(3000);
            client.waitForElementVisible(ratingShareImage,1000);
        }

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector',ratingShareIcon,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingShareIcon('xs');  
            callback.multiloop(client,ratingShareIcon, Properties, 'xs'); 
            Properties = rating_props.ratingShareText('xs');  
            callback.multiloop(client,ratingShareText, Properties, 'xs');
          
        }                      
        }
            );
        }
    }
}


