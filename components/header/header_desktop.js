var pageurl = require('../../pageurls.js'),
    pageObj,header_props,callback,size,brand;    

function globalProps(client){
    pageObj = client.page.header_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    header_props = require('./header_props.js')(client);   
}    

module.exports = {
    '@tags': ['desktop', 'header', 'header-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.NW_PER_HEADER); 
            
    },
    "1 Check for Header Level-1 properties": function(client) {
            headerBgColor = pageObj.elements.headerBgColor.selector,
            headerMargin = pageObj.elements.headerMargin.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',headerBgColor,results=>{
            if(results.value.length>0) { 
            //header background color
            Properties = header_props.headerBgColor('lg');  
            callback.singleElem(client,headerBgColor, Properties, 'lg');

            //header margin
            Properties = header_props.headerMargin('lg');  
            callback.singleElem(client,headerMargin, Properties, 'lg');
            }
        });
        }      
    },
    "2 Check for Header Level-1 list items Active state": function(client) {
            activeState = pageObj.elements.activeState.selector,
            activeStateAnchor = pageObj.elements.activeStateAnchor.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',activeState,results=>{
            if(results.value.length>0) {
            //Header list items Active state Properties
            Properties = header_props.activeState('lg');  
            callback.multiloop(client,activeState, Properties, 'lg');

            //Header list items anchor Active state properties
            Properties = header_props.activeStateAnchor('lg');  
            callback.multiloop(client,activeStateAnchor, Properties, 'lg');
            }
        });

        }    
        
    },
    "3 Check for Header Level-1 list items Inactive state": function(client) {
            InActiveStateAnchor = pageObj.elements.InActiveStateAnchor.selector,
            InActiveState = pageObj.elements.InActiveState.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',InActiveState,results=>{
            if(results.value.length>0) {
            //Header list items InActive state
            Properties = header_props.InActiveState('lg');  
            callback.multiloop(client,InActiveState, Properties, 'lg');

            //Header list items anchor InActive state properties
            Properties = header_props.InActiveStateAnchor('lg');  
            callback.multiloop(client,InActiveStateAnchor, Properties, 'lg');
            }
        });
        }    
    },
    
    "4 Check for Login Button Properties": function(client) {
            loginButton = pageObj.elements.loginButton.selector,
            loginBusiness = pageObj.elements.loginBusiness.selector,
            loginBusinessImg = pageObj.elements.loginBusinessImg.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            //personal
            client.elements('css selector',loginButton,results=>{
               if(results.value.length>0) {
            //Login Button Properties
            Properties = header_props.loginButton('lg');  
            callback.multiloop(client,loginButton, Properties, 'lg');
            
            if(brand.props.$brandName=="natwest-personal"||brand.props.$brandName=="rbs-personal"){
               //login button background-image
               client.expect.element(loginButton).to.have.css('background-image').which.contains('white-lock');                     
            }
            else{
                //Login image Button Properties
                Properties = header_props.loginButtonImg('lg');  
                callback.pseudoSingleElem(client, loginButton,':after',Properties);

                }
               }
            });     
             //natwest business
            if(brand.props.$brandName=="natwest-business"||brand.props.$brandName=="rbs-bussiness"){

                 properties = header_props.loginBusiness('lg');  
                 callback.multiloop(client, loginBusiness , properties, 'lg');

                 client.expect.element(loginBusinessImg).to.have.attribute('src').which.contains(brand.props.$loginbox); 
           }    
        }    
        
    },

    "5 Hover Properties for Header Level-1 ": function(client) {
            headerHoverBg = pageObj.elements.headerHoverBg.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',headerHoverBg,results=>{
            if(results.value.length>0) {
            client.elements('css selector', headerHoverBg, test)
            function test(elems){
            elems.value.forEach(function(element,index) {
            client.moveTo(element.ELEMENT,2,2)
            .pause(4000)
            properties = header_props.headerHoverBg('lg');
            client.moveToElement(headerHoverBg, 10, 10);
            //client.pause(2000);
            callback.singleElem(client, headerHoverBg, properties, 'lg');   
            });
           }
           }
            });
        }     
    },

    "6 Mouse Down Properties for Header Level-1 ": function(client) {
            headerLiMouseDown = pageObj.elements.headerHover.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',headerLiMouseDown,results=>{
            if(results.value.length>0) {
            client.waitForElementVisible(headerLiMouseDown, 6000);
            client.moveToElement(headerLiMouseDown, 5, 5);
            client.mouseButtonDown(0);
            client.pause(2000);
            properties = header_props.headerLiMouseDown('lg');
            callback.singleElem(client, headerLiMouseDown , properties, 'lg');
            client.mouseButtonUp();
            }
            });
        }     
    },

    "7 Check for Header mnav (Level-2) Properties": function(client) {
            headermnav = pageObj.elements.headermnav.selector,
            headermnavbg = pageObj.elements.headermnavbg.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
            client.waitForElementVisible(headermnav, 6000);
            //Header mnav (Level-2) Properties
            Properties = header_props.headermnav('lg');  
            callback.singleElem(client,headermnav, Properties, 'lg'); 

            //Header mnav (Level-2) background color 
            Properties = header_props.headermnavbg('lg');  
            callback.singleElem(client,headermnavbg, Properties, 'lg'); 
        }       
    },

    "8 Check for Logo Properties": function(client) {
            logo = pageObj.elements.logo.selector,
            logoLombard = pageObj.elements.logoLombard.selector,
            whiteLogo = pageObj.elements.whiteLogo.selector,
            whiteLogoProps = pageObj.elements.whiteLogoProps.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',whiteLogo,results=>{
                if(results.value.length>0) {
                  //Negative/White text image
                  client.expect.element(whiteLogo).to.have.attribute('src').which.contains('newLogoRebrand.png');
                  //props of white logo
                  properties = header_props.whiteLogoProps('lg');  
                  callback.multiloop(client, whiteLogoProps , properties, 'lg');   
                 }
                 else {
                    //logo Properties
                    Properties = header_props.logo('lg');  
                    callback.singleElem(client,logo, Properties, 'lg'); 
                    //lombard logo
                    if(brand.props.$brandName=="lombard"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('Lombard_Logo2.png');                     
                    }
                    //RBS logo
                    else if(brand.props.$brandName=="rbs-com"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('r-b-s-logo.png');                     
                    }
                    //RBS-Invoice Finance
                    else if(brand.props.$brandName=="rbs-if"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('logo-rbs-globalnav.png');                     
                    }
                    //Natwest Intermediary
                    else if(brand.props.$brandName=="natwest-intermediary"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('logo.png');                     
                    }
                    //Natwest Business
                    else if(brand.props.$brandName=="natwest-business"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('logo.png');                     
                    }
                    //Natwest personal
                    else if(brand.props.$brandName=="natwest-business"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('logo.png');                     
                    }
                    //Natwest Markets
                    else if(brand.props.$brandName=="natwest-markets"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('NW_MKS_LOGO_HZ_NEG_RGB.PNG');                     
                    }
                    //RBS Remembers
                    else if(brand.props.$brandName=="rbs-remembers"){
                    client.expect.element(logoLombard).to.have.attribute('src').which.contains('r-b-s-logo.png');                     
                    }  
                    else{
                    //logo image
                    client.expect.element(logo).to.have.css('background-image').which.contains('logo');
                    }
                 }
            });           
        }       
    },

    "9 Check for mnav-content(Level-2) Properties": function(client) {
            MnavSnav = pageObj.elements.MnavSnav.selector,
            snavListItem = pageObj.elements.snavListItem.selector,
            snavliLastChild = pageObj.elements.snavliLastChild.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

            //mnav-content Properties
            Properties = header_props.MnavSnav('lg');  
            callback.singleElem(client,MnavSnav, Properties, 'lg'); 

            //snav list item Properties
            Properties = header_props.snavListItem('lg');  
            callback.multiloop(client,snavListItem, Properties, 'lg'); 

            //snav list item last child Properties
            Properties = header_props.snavliLastChild('lg');  
            callback.singleElem(client,snavliLastChild, Properties, 'lg'); 
        }       
    },

    "10  Hover Properties for mnav-content(Level-2) ": function(client) {
            mnavHover = pageObj.elements.mnavliClick.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector', mnavHover, test)
            function test(elems){
            elems.value.forEach(function(element,index) {
            client.moveTo(element.ELEMENT,2,2)
            .pause(4000)
            properties = header_props.mnavHover('lg');
            client.moveToElement(mnavHover, 10, 10);
            client.pause(2000);
            callback.singleElem(client, mnavHover, properties, 'lg');   
            });
           }
        }     
    },

    "11 Level-2 click mnav Content ": function(client) {
            mnavliClick = pageObj.elements.mnavliClick.selector,
            mnavliMouseDown = pageObj.elements.mnavHover.selector,
            mnavContent = pageObj.elements.mnavContent.selector,
            expandedRightNavVisible = pageObj.elements.expandedRightNavVisible.selector,
            expandedNavInActive = pageObj.elements.expandedNavInActive.selector,
            hreflink = pageObj.elements.hreflink.selector,
            snavListItem = pageObj.elements.snavListItem.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){ 
            if(brand.props.$brandName!="natwest-markets"){ 
            if(brand.props.$brandName!="natwest-intermediary"){ 
            if(brand.props.$brandName!="rbs-remembers"){ 
            if(brand.props.$brandName!="rbs-if"){ 
            if(brand.props.$brandName=="lombard"){
            client.click(mnavliClick) 
            .pause(4000);
            client.expect.element(hreflink).to.have.attribute('href'); 
            client.elements('css selector', expandedNavInActive, l3sel);

                function l3sel(elems){
                  
                elems.value.forEach(function(element,index) {
                client.pause(4000)
                //display block for level 4 content
                client.source((result) => {
                    console.log("level 4 Block:"+ index)
                  })
                properties = header_props.mnavContent('lg');
                callback.singleElem(client, expandedRightNavVisible , properties, 'lg');
                client.elementIdClick(element.ELEMENT) 
                .pause(4000)
 
               });
                client.click(mnavliClick);
              }               
            }
            else if(brand.props.$brandName=="rbs-com"){
            client.expect.element(hreflink).to.have.attribute('href');     
            client.elements('css selector', snavListItem, test)
            function test(elems){
            elems.value.forEach(function(element,index) {
            client.pause(4000)
            client.elementIdClick(element.ELEMENT) 
            .pause(4000)
            
            //Mouse down Properties for mnav-content
            properties = header_props.mnavliMouseDown('lg');
            callback.singleElem(client, mnavliMouseDown , properties, 'lg'); 

            //display block for mnav content
            properties = header_props.mnavContent('lg');
            callback.singleElem(client, mnavContent , properties, 'lg'); 

           });
           } 
           }
            else{
            client.expect.element(hreflink).to.have.attribute('href');     
            client.elements('css selector', mnavliClick, test)
            function test(elems){
            elems.value.forEach(function(element,index) {
            client.pause(4000)
            client.elementIdClick(element.ELEMENT) 
            .pause(4000)
            
            //Mouse down Properties for mnav-content
            properties = header_props.mnavliMouseDown('lg');
            callback.singleElem(client, mnavliMouseDown , properties, 'lg'); 

            //display block for mnav content
            properties = header_props.mnavContent('lg');
            callback.singleElem(client, mnavContent , properties, 'lg'); 
            client.elements('css selector', expandedNavInActive, l3sel);

                function l3sel(elems){
                  
                elems.value.forEach(function(element,index) {
                client.pause(4000)
                //display block for level 4 content
                client.source((result) => {
                    console.log("level 4 Block:"+ index)
                })
                properties = header_props.mnavContent('lg');
                callback.singleElem(client, expandedRightNavVisible , properties, 'lg');
                client.elementIdClick(element.ELEMENT) 
                .pause(4000)
 
               });
               } 

           });
           } 
           }
          } 
          }
          }  
          } 
        }     
    },

    "12 Level-3 nav Properties ": function(client) {
            mnavliClick = pageObj.elements.mnavliClick.selector,
            expandedNavActive = pageObj.elements.expandedNavActive.selector,
            expandedNavInActive = pageObj.elements.expandedNavInActive.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){ 
        if(brand.props.$brandName!="natwest-intermediary"){
        if(brand.props.$brandName!="natwest-markets"){ 
            client.click(mnavliClick);
            
            client.pause(5000);
            if(brand.props.$brandName!="rbs-com"){
              if(brand.props.$brandName!="rbs-if"){
            //Level-3 nav expanded (Active) Properties 
            properties = header_props.expandedNavActive('lg');
            callback.singleElem(client, expandedNavActive , properties, 'lg'); 
             }
            }

            //Level-3 nav expanded (InActive) Properties 
            properties = header_props.expandedNavInActive('lg');
            callback.multiloop(client, expandedNavInActive , properties, 'lg'); 
         }   
        } 
        }    
    },

    "13 Level-4 Right nav Properties ": function(client) {
            expandedRightNav = pageObj.elements.expandedRightNav.selector,
            rightNavSignPost = pageObj.elements.rightNavSignPost.selector,
            headline = pageObj.elements.headline.selector,
            ctaTitlePadding = pageObj.elements.ctaTitlePadding.selector,
            ctaTitle = pageObj.elements.ctaTitle.selector,
            cta_mGrey = pageObj.elements.cta_mGrey.selector,
            cta_mGreen = pageObj.elements.cta_mGreen.selector,
            gridPadding = pageObj.elements.gridPadding.selector,
            ctamGreyMargin = pageObj.elements.ctamGreyMargin.selector,
            ctamGreenMargin = pageObj.elements.ctamGreenMargin.selector,
            cta_mGreenlinks = pageObj.elements.cta_mGreenlinks.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){ 
            
            //No Level-4 for RBS-com
            if(brand.props.$brandName!="natwest-intermediary"){
            if(brand.props.$brandName!="natwest-markets"){ 
             if(brand.props.$brandName !="rbs-com"){
              if(brand.props.$brandName !="rbs-if"){
            //Level-4 nav  Properties 
            properties = header_props.expandedRightNav('lg');
            callback.multiloop(client, expandedRightNav , properties, 'lg'); 

            //sign post 
            properties = header_props.rightNavSignPost('lg');
            callback.multiloop(client, rightNavSignPost , properties, 'lg'); 

            //headline 
            properties = header_props.headline('lg');
            callback.multiloop(client, headline , properties, 'lg'); 

            //ctaTitlePadding 
            properties = header_props.ctaTitlePadding('lg');
            callback.multiloop(client, ctaTitlePadding , properties, 'lg'); 

            //gridPadding 
            properties = header_props.gridPadding('lg');
            callback.multiloop(client, gridPadding , properties, 'lg');

            //ctamGreyMargin 
            properties = header_props.ctamGreyMargin('lg');
            callback.multiloop(client, ctamGreyMargin , properties, 'lg');

            //ctamGreenMargin 
            properties = header_props.ctamGreenMargin('lg');
            callback.multiloop(client, ctamGreenMargin , properties, 'lg');

            //cta_mGreenlinks 
            properties = header_props.cta_mGreenlinks('lg');
            callback.multiloop(client, cta_mGreenlinks , properties, 'lg');

            //ctaTitle 
            properties = header_props.ctaTitle('lg');
            callback.multiloop(client, ctaTitle , properties, 'lg'); 

            //cta_mGrey 
            properties = header_props.cta_mGrey('lg');
            callback.multiloop(client, cta_mGrey , properties, 'lg'); 

            //cta_mGreen 
            properties = header_props.cta_mGreen('lg');
            callback.multiloop(client, cta_mGreen , properties, 'lg');
           }  
          } 
         } 
        }
        } 
    },

    "14 Switch to ROI": function(client) {
            swithROI = pageObj.elements.swithROI.selector,
            swithROIa = pageObj.elements.swithROIa.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

           client.elements('css selector',swithROI,results=>{
               if(results.value.length>0) {

                 //ROI 
                 properties = header_props.swithROI('lg');  
                 callback.singleElem(client, swithROI , properties, 'lg');

                 //ROI href
                 properties = header_props.swithROIa('lg');  
                 callback.singleElem(client, swithROIa , properties, 'lg');

                }
            });

        }       
    },

    'Ending the session': function(client){
      client.pause(1000);
      client.end();
    }
};