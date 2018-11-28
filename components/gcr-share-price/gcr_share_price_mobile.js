var pageurl = require('../../pageurls.js'),
    pageObj,share_price_props,callback,size;

function globalProps(client){
    pageObj = client.page.gcr_share_price_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    share_price_props = require('./share_price_props.js')(client);
}

module.exports = {
  '@tags': ['gcr-share-price-mobile','gcr-share-price','mobile'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);  
            callback.openURL(client, pageurl.RBS_COM_GCR_SHARE_PRICE_M);
            console.log("--Desktop--"+pageurl.RBS_COM_GCR_SHARE_PRICE_M); 
            client.pause(2000);
    },
    "1 Resize The Window":function(client){
        var  size = client.globals.size.widths;
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(5000);
             client.refresh();
             client.pause(5000);
    },
    "2 Check for wrapper class properties": function(client) {
      sharePriceWrapper = pageObj.elements.sharePriceWrapper.selector,
      callback.scrollToElement(client, sharePriceWrapper);
      globalProps(client);
      client.elements('css selector',sharePriceWrapper,results=>{
        if(results.value.length>0) {
          //prop of wrapper class
          properties = share_price_props.sharePriceWrapperProp('xs');  
          callback.multiloop(client, sharePriceWrapper , properties, 'xs');
          }
      });
    },
    "3 Check for iFrame properties": function(client) {
      sharePriceiFrame = pageObj.elements.sharePriceiFrame.selector,
      globalProps(client);
      client.elements('css selector',sharePriceiFrame,results=>{
        if(results.value.length>0) {
          properties = share_price_props.sharePriceiFrameProp('xs');  
          callback.multiloop(client, sharePriceiFrame , properties, 'xs');
          }
      });
     
    },
    "4 Check for Text properties": function(client) {
      //text in forlse
      sharePriceText1 = pageObj.elements.sharePriceText1.selector,
      globalProps(client);
      client.waitForElementVisible("#grc_share_price", 1000)
      .pause(1000)
      .frame('grc_share_price')
        .elements('css selector',sharePriceText1,results=>{
        if(results.value.length>0) {
          properties = share_price_props.sharePriceTextProp1('xs');  
          callback.multiloop(client, sharePriceText1 , properties, 'xs');
          }
      });
      //text in price
      sharePriceText2 = pageObj.elements.sharePriceText2.selector,
      globalProps(client);
      client.frame('grc_share_price')
        .elements('css selector',sharePriceText2,results=>{
        if(results.value.length>0) {
          //prop of wrapper class
          properties = share_price_props.sharePriceTextProp2('xs');  
          callback.multiloop(client, sharePriceText2 , properties, 'xs');
          }
      });
      //text in change
      sharePriceText3 = pageObj.elements.sharePriceText3.selector,
      globalProps(client);
      client.frame('grc_share_price')
        .elements('css selector',sharePriceText3,results=>{
        if(results.value.length>0) {
          //prop of wrapper class
          client.expect.element('.change img').to.have.attribute('src').which.contains('i/down11.gif');
          properties = share_price_props.sharePriceTextProp3('xs');  
          callback.multiloop(client, sharePriceText3 , properties, 'xs');
          }
      });
      //text in date
      sharePriceText4 = pageObj.elements.sharePriceText4.selector,
      globalProps(client);
      client.frame('grc_share_price')
        .elements('css selector',sharePriceText4,results=>{
        if(results.value.length>0) {
          //prop of wrapper class
          properties = share_price_props.sharePriceTextProp4('xs');  
          callback.multiloop(client, sharePriceText4 , properties, 'xs');
          }
      });
     
    },
"Ending the session":function(client){
  client.end();
}

}