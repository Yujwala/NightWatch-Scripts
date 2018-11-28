var smartbanner_props = require('./smartbanner_props'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());

    
function globalProps(client){
    pageObj = client.page.smartbanner_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['smartbanner-mobile', "Mobile"],
          //Opening the URL
          "1. Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.ULSTER_BENEFIT_LIST_MOB);
            console.log("--Mobile--"+pageurl.ULSTER_BENEFIT_LIST_MOB); 
            client.pause(2000);
            
            
    },
      
       //Resize the window for Mobile
    "2. Resize The Window":function(client){
        var  size = client.globals.size.widths;
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(5000);
             client.refresh();
             client.pause(5000);                             
            
      }, 

      "3 smartbanner mobile smartbannerWrap" : function(client) {
        var smartbannerWrapCls = pageObj.elements.smartbannerWrap.selector,       
        sbcontainerCls = pageObj.elements.sbcontainer.selector,
        sbcloseCls = pageObj.elements.sbclose.selector,
        sbiconCls = pageObj.elements.sbicon.selector,
        sbinfoCls = pageObj.elements.sbinfo.selector,
        sbinfostrongCls = pageObj.elements.sbinfostrong.selector,
        sbinfospanCls = pageObj.elements.sbinfospan.selector,
        
        sbbuttonCls = pageObj.elements.sbbutton.selector;

        globalProps(client);
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
        
        client.elements('css selector',smartbannerWrapCls,results=>{
           if(results.value.length>0) {

             properties = smartbanner_props.smartbannerWrapPropm('xs');  
             callback.multiloop(client, smartbannerWrapCls , properties, 'xs');

            }
        });
        client.elements('css selector',sbcontainerCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbcontainerPropm('xs');  
              callback.multiloop(client, sbcontainerCls , properties, 'xs');
                console.log('3. sbcontainer');
             }
         });
         client.elements('css selector',sbcloseCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbclosePropm('xs');  
              callback.multiloop(client, sbcloseCls , properties, 'xs');
              console.log('4. sbclose');
 
             }
         });
         client.elements('css selector',sbiconCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbiconPropm('xs');  
              callback.multiloop(client, sbiconCls , properties, 'xs');
              console.log('5. sbicon');
 
             }
         });
         client.elements('css selector',sbinfoCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbinfoPropm('xs');  
              callback.multiloop(client, sbinfoCls , properties, 'xs');
              console.log('6. sbinfo');
 
             }
         });
         client.elements('css selector',sbinfostrongCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbinfostrongPropm('xs');  
              callback.multiloop(client, sbinfostrongCls , properties, 'xs');
              console.log('7. sbinfostrong');
 
             }
         });
         client.elements('css selector',sbinfospanCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbinfospanPropm('xs');  
              callback.multiloop(client, sbinfospanCls , properties, 'xs');
              console.log('8. sbinfospan');
 
             }
         });
         client.elements('css selector',sbbuttonCls,results=>{
            if(results.value.length>0) {
 
              properties = smartbanner_props.sbbuttonPropm('xs');  
              callback.multiloop(client, sbbuttonCls , properties, 'xs');
              console.log('9. sbbutton');
 
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
