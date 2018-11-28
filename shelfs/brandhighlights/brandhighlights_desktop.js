var pageurl = require('../../pageurls.js'),
    pageObj,brandhighlights_props,callback,size;
      
function globalProps(client){
    pageObj = client.page.brandhighlights_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths,
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    callback.getBrand(client);
    brandhighlights_props = require('./brandhighlights_props.js')(client);
}
    
module.exports = {
    '@tags': ['desktop', 'brandhighlights', 'brandhighlights-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_COM_BRANDHIGHTLIGHTS_NW);
            console.log("--Desktop--"+pageurl.RBS_COM_BRANDHIGHLIGHTS_AUTHORED); 
    },

    "1 Check for brandhighlights Level-1 properties": function(client) {
        brandhighlightShelf = pageObj.elements.brandhighlightShelf.selector;
        // globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
    client.elements('css selector',brandhighlightShelf,results=>{
        if(results.value.length>0) { 
        //brandhighlight Shelf padding and bgColor
        Properties = brandhighlights_props.brandhighlightShelfProps('lg');  
        callback.singleElem(client,brandhighlightShelf, Properties, 'lg');
     
        }
    });
    }      
},
    "2.Check for brand proposition properties":  function(client){
    brandPreposition = pageObj.elements.brandPreposition.selector,
    brandBgimg= pageObj.elements.brandBgimg.selector,
    brandPrepositionImgNw = pageObj.elements.brandPrepositionImgNw.selector,
    brandPrepositionImgRbs = pageObj.elements.brandPrepositionImgRbs.selector,
    brandPrepositionImgUlster= pageObj.elements.brandPrepositionImgUlster.selector;
    // globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandPreposition,results=>{
        if(results.value.length>0) { 
        //brandpreposition properties
        Properties = brandhighlights_props.brandPrepositionProps('lg');  
        callback.singleElem(client,brandPreposition, Properties, 'lg');

        //brandpreposition bg img
        Properties = brandhighlights_props.brandPrepositionImgProps('lg');  
        callback.singleElem(client,brandBgimg, Properties, 'lg');

    }
});
}
  }, 
  
  
  "3.Check for brand title logo and link properties":  function(client){
    brandLogoTitleLinks = pageObj.elements.brandLogoTitleLinks.selector,
    brandLogo = pageObj.elements.brandLogo.selector,
    brandTitle = pageObj.elements.brandTitle.selector,
    brandLinks = pageObj.elements.brandLinks.selector,
    brandLinksLastChild = pageObj.elements.brandLinksLastChild.selector,
    brandLinksanchor = pageObj.elements.brandLinksanchor.selector,
    brandLogoImgRbs = pageObj.elements.brandLogoImgRbs.selector,
    brandLogoImgUlster = pageObj.elements.brandLogoImgUlster.selector;

    // globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandLogoTitleLinks,results=>{
        if(results.value.length>0) { 

        //brandLogoTitleLinks properties
        Properties = brandhighlights_props.brandlogoTitleLinksProps('lg');  
        callback.multiloop(client,brandLogoTitleLinks, Properties, 'lg');
    
        //brand logo properties
        Properties = brandhighlights_props.brandLogoProps('lg');  
        callback.multiloop(client,brandLogo, Properties, 'lg');


        //brand title properties
        Properties = brandhighlights_props.brandTitleProps('lg');  
        callback.multiloop(client,brandTitle, Properties, 'lg');

        //brand links properties
        Properties = brandhighlights_props.brandLinksProps('lg');  
        callback.multiloop(client,brandLinks, Properties, 'lg');

        //brand links last child properties
        Properties = brandhighlights_props.brandLinksLastChildProps('lg');  
        callback.multiloop(client,brandLinksLastChild, Properties, 'lg');

        //brand links anchor properties
        Properties = brandhighlights_props.brandLinksanchorProps('lg');  
        callback.multiloop(client,brandLinksanchor, Properties, 'lg');
    }
});
}
  },
  "4.Check for social wrap properties":  function(client){
    brandSocial = pageObj.elements.brandSocial.selector,
    brandSocialSpan= pageObj.elements.brandSocialSpan.selector,
    brandSocialLinks= pageObj.elements.brandSocialLinks.selector,
    brandFacebook= pageObj.elements.brandFacebook.selector,
    brandTwitter= pageObj.elements.brandTwitter.selector,
    brandLinkedin= pageObj.elements.brandLinkedin.selector;

    // globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandSocial,results=>{
        if(results.value.length>0) { 
        //social wrap properties
        Properties = brandhighlights_props.brandSocialProps('lg');  
        callback.multiloop(client,brandSocial, Properties, 'lg');

        //social span properties
        Properties = brandhighlights_props.brandSocialSpanProps('lg');  
        callback.multiloop(client,brandSocialSpan, Properties, 'lg');

        //social links properties
        Properties = brandhighlights_props.brandSocialLinksProps('lg');  
        callback.multiloop(client,brandSocialLinks, Properties, 'lg');

        //social facebook properties
        Properties = brandhighlights_props.brandFacebookProps('lg');  
        callback.multiloop(client,brandFacebook, Properties, 'lg');

        //social twitter properties
        Properties = brandhighlights_props.brandTwitterProps('lg');  
        callback.multiloop(client,brandTwitter, Properties, 'lg');

        //social linkedin properties
        Properties = brandhighlights_props.brandLinkedinProps('lg');  
        callback.multiloop(client,brandLinkedin, Properties, 'lg');

        //background url for social media icons
        client.expect.element(brandFacebook).to.have.css('background-image').which.contains('facebook-icon.svg');
        client.expect.element(brandTwitter).to.have.css('background-image').which.contains('twitter-icon.svg');
        client.expect.element(brandLinkedin).to.have.css('background-image').which.contains('linked-in.svg');

    }
});
}
  }, 
  "5.Check for brand key benefit properties":  function(client){
    brandKeyBenefitTable= pageObj.elements.brandKeyBenefitTable.selector,
    brandKeyBenefitRow = pageObj.elements.brandKeyBenefitRow.selector,
    brandKeyBenefit=pageObj.elements.brandKeyBenefit.selector,
    brandKeyBenefitRowFirstChild = pageObj.elements.brandKeyBenefitRowFirstChild.selector,
    brandkeyBenefitFirstChild = pageObj.elements.brandkeyBenefitFirstChild.selector,
    brandkeyBenefitRte = pageObj.elements.brandkeyBenefitRte.selector,
    brandkeyBenefitRteWhiteBand = pageObj.elements.brandkeyBenefitRteWhiteBand.selector;

    // globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandKeyBenefitTable,results=>{

        if(results.value.length>0) { 

            //brand key benefit table properties
        Properties = brandhighlights_props.brandKeyBenefitTableProps('lg');  
        callback.multiloop(client,brandKeyBenefitTable, Properties, 'lg');

        //brand key benefit row properties
        Properties = brandhighlights_props.brandKeyBenefitRowProps('lg');  
        callback.multiloop(client,brandKeyBenefitRow, Properties, 'lg');

          //brand key benefit properties
          Properties = brandhighlights_props.brandKeyBenefitProps('lg');  
          callback.multiloop(client,brandKeyBenefit, Properties, 'lg');


        //brand key benefit row first child properties
        Properties = brandhighlights_props.brandKeyBenefitRowFirstChildProps('lg');  
        callback.multiloop(client,brandKeyBenefitRowFirstChild, Properties, 'lg');

        //brand key benefit first child properties
        Properties = brandhighlights_props.brandkeyFirstChildProps('lg');  
        callback.multiloop(client,brandkeyBenefitFirstChild, Properties, 'lg');

        //brand key Benefit Rte properties
        Properties = brandhighlights_props.brandkeyBenefitRteProps('lg');  
        callback.multiloop(client,brandkeyBenefitRte, Properties, 'lg');

        //brand key Benefit Rte Text properties
        Properties = brandhighlights_props.brandkeyBenefitRteTextProps('lg');  
        rteCallback.rteElem(client, brandKeyBenefit, Properties,'p', 'lg');

        //brand key Benefit Rte White Band properties
        Properties = brandhighlights_props.brandkeyBenefitRteWhiteBandProps('lg');  
        callback.multiloop(client,brandkeyBenefitRteWhiteBand, Properties, 'lg');


    }
});
}
  },
  "6. Check for different brand properties": function(client){

   brandhighlightShelf= pageObj.elements.brandhighlightShelf.selector;
    // globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

    client.elements('css selector',brandhighlightShelf,results=>{
        if(results.value.length>0) {
            for(var i=1;i<=11;i++){

               // brand link bg-color property for 3 different brands inside rbs-com(total i=3)
                  var brandLinks = pageObj.elements["brandLinks"+(i)].selector;
                  console.log(brandLinks);
                  properties = brandhighlights_props["brandhighLightBrandLinksProps"+(i)]('lg'); 
                  callback.multiloop(client, brandLinks, properties, 'lg');

                //brand title color property
                var brandTitleColor = pageObj.elements["brandTitleColor"+(i)].selector;
                  console.log(brandTitleColor);
                  properties = brandhighlights_props["brandTitleColorProps"+(i)]('lg'); 
                  callback.multiloop(client, brandTitleColor, properties, 'lg');

                // key benefit background color property for 4 boxes in 3 different brands inside rbs-com(total j=4)
                     for(var j=0;j<=3;j++){
                        var keyBenefitBgColor = pageObj.elements["keyBenefit"+(i)+(j+1)].selector;
                            properties = brandhighlights_props["keyBenefitPropBgColor"+(i)+(j+1)]('lg'); 
                            callback.multiloop(client, keyBenefitBgColor, properties, 'lg');
                        //key benefit rte text color property
                        var keyBenefitRteColor = pageObj.elements["keyBenefitRte"+(i)+(j+1)].selector;
                            properties = brandhighlights_props["keyBenefitRteColor"+(i)+(j+1)]('lg'); 
                            callback.multiloop(client, keyBenefitRteColor, properties, 'lg');

                        }
                    }
                  }
               } );
}
},
  'Ending the session': function(client){
    client.pause(1000);
    client.end();
  }
  
}
