var pageurl = require('../../pageurls.js'),
    pageObj,brandhighlights_props,callback,size;   

function globalProps(client){
    pageObj = client.page.brandhighlights_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;  
    callback.getBrand(client);
    brandhighlights_props = require('./brandhighlights_props.js')(client); 
}    

module.exports = {
    '@tags': ['mobile', 'brandhighlights', 'brandhighlights-mobile'],
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_COM_BRANDHIGHTLIGHTS_NW_MOB);
            console.log("--Mobile--"+pageurl.RBS_COM_BRANDHIGHTLIGHTS_NW_MOB); 
    },

    "1 Check for brandhighlights Level-1 properties": function(client) {
        brandhighlightShelf = pageObj.elements.brandhighlightShelf.selector,
        globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        
    client.elements('css selector',brandhighlightShelf,results=>{
        if(results.value.length>0) { 
        //brandhightlight Shelf padding and bgColor
        Properties = brandhighlights_props.brandhighlightShelfProps('xs');  
        callback.singleElem(client,brandhighlightShelf, Properties, 'xs');
     
        }
    });
    }      
},
    "2.Check for brand proposition properties":  function(client){
    brandPreposition = pageObj.elements.brandPreposition.selector,
    brandBgimg= pageObj.elements.brandBgimg.selector
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandPreposition,results=>{
        if(results.value.length>0) { 
        //brandpreposition properties
        Properties = brandhighlights_props.brandPrepositionProps('xs');  
        callback.singleElem(client,brandPreposition, Properties, 'xs');

        //brandpreposition bg img
        Properties = brandhighlights_props.brandPrepositionImgProps('xs');  
        callback.singleElem(client,brandBgimg, Properties, 'xs');

    }
});
}
  }, 
  
  
  "3.Check for brand title logo and link properties":  function(client){
    brandLogoTitleLinks = pageObj.elements.brandLogoTitleLinks.selector,
    brandLinksanchor = pageObj.elements.brandLinksanchor.selector,
    brandTitle = pageObj.elements.brandTitle.selector,
    brandLinks = pageObj.elements.brandLinks.selector,

    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandLogoTitleLinks,results=>{
        if(results.value.length>0) { 

        //brandLogoTitleLinks properties
        Properties = brandhighlights_props.brandlogoTitleLinksProps('xs');  
        callback.multiloop(client,brandLogoTitleLinks, Properties, 'xs');

        //brandlinks properties
        Properties = brandhighlights_props.brandLinksProps('xs');  
        callback.multiloop(client,brandLinks, Properties, 'xs');

        //brand links anchor properties
        Properties = brandhighlights_props.brandLinksanchorProps('xs');  
        callback.multiloop(client,brandLinksanchor, Properties, 'xs');

        //brand title properties
        Properties = brandhighlights_props.brandTitleProps('xs');  
        callback.multiloop(client,brandTitle, Properties, 'xs');

    }
});
}
  },
  "4.Check for social wrap properties":  function(client){
    brandSocial = pageObj.elements.brandSocial.selector,
    brandFacebook= pageObj.elements.brandFacebook.selector,
    brandTwitter= pageObj.elements.brandTwitter.selector,
    brandLinkedin= pageObj.elements.brandLinkedin.selector,

    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandSocial,results=>{
        if(results.value.length>0) { 
        //social wrap properties
        Properties = brandhighlights_props.brandSocialProps('xs');  
        callback.multiloop(client,brandSocial, Properties, 'xs');

    }
});
}
  }, 
  "5.Check for brand key benefit properties":  function(client){
    brandKeyBenefitTable= pageObj.elements.brandKeyBenefitTable.selector,
    brandkeyBenefitFirstChild = pageObj.elements.brandkeyBenefitFirstChild.selector,
    brandKeyFirstRowFirstChild = pageObj.elements.brandKeyFirstRowFirstChild.selector,
    brandkeyBenefitRte = pageObj.elements.brandkeyBenefitRte.selector,
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    
    client.elements('css selector',brandKeyBenefitTable,results=>{
        if(results.value.length>0) { 

        //brand key benefit first child properties
        Properties = brandhighlights_props.brandkeyFirstChildProps('xs');  
        callback.multiloop(client,brandkeyBenefitFirstChild, Properties, 'xs');

        //brand key rte properties
        Properties = brandhighlights_props.brandkeyBenefitRteProps('xs');  
        callback.multiloop(client,brandkeyBenefitRte, Properties, 'xs');



    }
});
}
  },
  'Ending the session': function(client){
    client.pause(1000);
    client.end();
  }
  
}
