var rating_props = require('./rating_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,brand,callback,size;    

function globalProps(client){
    pageObj = client.page.rating_selectors();
    callback = client.page.common();
    size = client.globals.size.widths;
	callback.getBrand(client);
	rating_props = require('./rating_props.js')(client);
	var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
}    

module.exports = 
{
    '@tags': ['desktop', 'rating', 'rating-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_RATING);
            console.log("--Desktop--"+pageurl.NW_PER_RATING); 
    },

    //Checks for the "Rating-Background Properties"
    "1. Checks for the Rating-Background Section": function(client)  {
        ratingBgColor = pageObj.elements.ratingBgColor.selector,
        ratingMargin = pageObj.elements.ratingMargin.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',ratingBgColor,results=> {
            if(results.value.length>0) {
           
            Properties = rating_props.ratingBgColor('lg');  
            callback.multiloop(client,ratingBgColor, Properties, 'lg');    }
           
            Properties = rating_props.ratingMargin('lg');  
            callback.multiloop(client,ratingMargin, Properties, 'lg');  
         }
            );
        } 
    },

    //Checks for the "Rating-Paragraph Properties"
    "2. Checks for the Rating-Paragraph Section": function(client) 
    {
        ratingParagraph = pageObj.elements.ratingParagraph.selector
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',ratingParagraph,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingParagraph('lg');  
            callback.multiloop(client,ratingParagraph, Properties, 'lg');    }
        }
            );
        } 
    },

    //Checks for the "Rating-Button (Level-1) Properties"
    "3. Checks for the Rating-Button (Level-1) Section": function(client) {
        ratingButton = pageObj.elements.ratingButton.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',ratingButton,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingButton('lg');  
            callback.multiloop(client,ratingButton, Properties, 'lg')
            ;  
      }           
 }
            );
        }
    },
    
    //Checks for the "Rating-Button Hover (Level-1) Properties"
    "4. Checks for the Rating-Button Hover (Level-1) Section": function(client) {
        ratingButtonHover = pageObj.elements.ratingButtonHover.selector,
        ratingBtn = pageObj.elements.ratingBtn.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal){
          
            client.moveToElement(ratingBtn, 5, 5);
            client.mouseButtonDown(0);
            client.pause(3000);
            client.waitForElementVisible(ratingButtonHover,5000);
            Properties = rating_props.ratingButtonHover('lg');  
            callback.multiloop(client,ratingButtonHover, Properties, 'lg') 
        }
    },
    
    //Checks for the "Rating-Button (Level-2) Properties"
    "5. Checks for the Rating-Button (Level-2) Section": function(client) {
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
            Properties = rating_props.ratingBtnClickTextArea('lg');  
            callback.multiloop(client,ratingBtnClickTextArea, Properties, 'lg')
            client.pause(3000);   
            client.waitForElementVisible(ratingBtnClickTextAreaHover,5000);
            Properties = rating_props.ratingBtnClickTextAreaHover('lg');  
            callback.multiloop(client,ratingBtnClickTextAreaHover, Properties, 'lg')
            client.pause(3000);
            
            client.waitForElementVisible(ratingBtnClickCloseBtn,5000);
            Properties = rating_props.ratingBtnClickCloseBtn('lg');  
            callback.multiloop(client,ratingBtnClickCloseBtn, Properties, 'lg')
            client.pause(3000);
            
            client.moveToElement(ratingButtonClickCta, 5, 5);
            client.mouseButtonDown(0);
            client.waitForElementVisible(ratinBtnClickCtaHover,1000);
            client.click(ratingButtonClickCta)
            Properties = rating_props.ratinBtnClickCtaHover('lg');  
            callback.multiloop(client,ratinBtnClickCtaHover, Properties, 'lg') 
            client.pause(3000);
            client.waitForElementVisible(ratingParagraphSub,100);

            Properties = rating_props.ratingParagraphSub('lg');  
            callback.multiloop(client,ratingParagraphSub, Properties, 'lg')
        }

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',ratingButtonClick,results=> {
            Properties = rating_props.ratingButtonClick('lg');  
            callback.multiloop(client,ratingButtonClick, Properties, 'lg');  
            Properties = rating_props.ratingButtonClickCta('lg');  
            callback.multiloop(client,ratingButtonClickCta, Properties, 'lg')
            
        }           
 
            );
        }
    },

     //Checks for Rating Share Image Properties
     "6. Checks for Rating Share Image Section": function(client) {
        if(brand.props.$brandName=="natwest-personal"||brand.props.$brandName=="rbs-personal"){
        ratingShareImage = pageObj.elements.ratingShareImage.selector,
       
       globalProps(client);
       if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) 
       {  
       client.expect.element(ratingShareImage).to.have.css('background-image').which.contains(property.$rating_shareimage_url),
       client.expect.element(ratingShareImage).to.have.css('border-left').which.contains('1px solid rgb(102, 102, 102)'),
       client.expect.element(ratingShareImage).to.have.css('margin-left').which.contains('16px'),
       client.expect.element(ratingShareImage).to.have.css('margin-top').which.contains('6px');
       }    
           
      }
     },

    //Checks for Rating Share Icons and Texts Properties
    "7. Checks for Rating Share Icons and Text Section": function(client) 
    {
        ratingShareIcon = pageObj.elements.ratingShareIcon.selector
        ratingButtonHover = pageObj.elements.ratingButtonHover.selector,
        ratingShareText = pageObj.elements.ratingShareText.selector,
        globalProps(client); 

        if(client.globals.test_settings.isLocal){
       
            client.moveToElement(ratingShareImage, 1, 1);
            client.mouseButtonDown(0);
            client.pause(1000);
            client.waitForElementVisible(ratingShareImage,100);
        }

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',ratingShareIcon,results=> {
            if(results.value.length>0) {
            Properties = rating_props.ratingShareIcon('lg');  
            callback.multiloop(client,ratingShareIcon, Properties, 'lg'); 
            Properties = rating_props.ratingShareText('lg');  
            callback.multiloop(client,ratingShareText, Properties, 'lg');
          
        }                      
        }
            );
        }
    }
}


