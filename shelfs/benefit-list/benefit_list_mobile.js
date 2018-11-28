var pageurl = require('../../pageurls.js'),
    pageObj,benefit_list_props,callback,size;

function globalProps(client){
    pageObj = client.page.benefit_list_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    benefit_list_props = require('./benefit_list_props.js')(client);  
}

module.exports = {
  '@tags': ['benefit-list','benefit-list-mobile'],
    //Opening the URL
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_PER_BENEFIT_LIST_MOB);
            console.log("--Desktop--"+pageurl.NW_PER_BENEFIT_LIST); 
    },

   "1 Check for benefit list mobile wrapper": function(client) {
            benefitlistShelfCls = pageObj.elements.benefitlistShelf.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitlistShelfCls,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlistShelfPropsm('lg');  
                 callback.multiloop(client, benefitlistShelfCls , properties, 'lg');

                }
            });
           
    }
},
"2 check for benefit list title mobile properities" : function(client) {
            var benefitlisttitleCls = pageObj.elements.benefitlisttitleWhite.selector,
            benefitlisttitleBlueCls = pageObj.elements.benefitlisttitleBlue.selector,
            benefitlistprimarytitletextWhiteCls=pageObj.elements.benefitlistprimarytitletextWhite.selector,
            benefitlistprimarytitletextOffWhiteCls=pageObj.elements.benefitlistprimarytitletextOffWhite.selector,
            benefitlistprimarytitletextLightBlueCls=pageObj.elements.benefitlistprimarytitletextLightBlue.selector,
            benefitlistprimarytitletextBlueCls=pageObj.elements.benefitlistprimarytitletextBlue.selector,
            benefitlistSectionCls=pageObj.elements.benefitlistSection.selector,
            benefitlistprimarytitleCls=pageObj.elements.benefitlistprimarytitle.selector;
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitlisttitleCls,results=>{
                console.log("entered 1");
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlisttitleWhitePropsm('lg');  
                 callback.multiloop(client, benefitlisttitleCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlisttitleBlueCls,results=>{
                console.log("entered 2");
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlisttitleBluePropsm('lg');  
                 callback.multiloop(client, benefitlisttitleBlueCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlistSectionCls,results=>{
               if(results.value.length>0) {
                console.log("entered 3");

                 //shelf bg color
                 properties = benefit_list_props.benefitlistSectionPropsm('lg');  
                 callback.multiloop(client, benefitlistSectionCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlistprimarytitletextWhiteCls,results=>{
               if(results.value.length>0) {
                console.log("entered 4");

                 //shelf bg color
                 properties = benefit_list_props.benefitlistprimarytitletextWhitePropsm('lg');  
                 callback.multiloop(client, benefitlistprimarytitletextWhiteCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlistprimarytitletextOffWhiteCls,results=>{
                if(results.value.length>0) {
                 console.log("entered 5");
 
                  //shelf bg color
                  properties = benefit_list_props.benefitlistprimarytitletextOffWhitePropsm('lg');  
                  callback.multiloop(client, benefitlistprimarytitletextOffWhiteCls , properties, 'lg');
 
                 }
             });

            client.elements('css selector',benefitlistprimarytitletextLightBlueCls,results=>{
                if(results.value.length>0) {
                 console.log("entered 6");
 
                  //shelf bg color
                  properties = benefit_list_props.benefitlistprimarytitletextLightBluePropsm('lg');  
                  callback.multiloop(client, benefitlistprimarytitletextLightBlueCls , properties, 'lg');
 
                 }
             });
             client.elements('css selector',benefitlistprimarytitletextBlueCls,results=>{
                if(results.value.length>0) {
                 console.log("entered 7");
 
                  //shelf bg color
                  properties = benefit_list_props.benefitlistprimarytitletextBluePropsm('lg');  
                  callback.multiloop(client, benefitlistprimarytitletextBlueCls , properties, 'lg');
 
                 }
             });
            client.elements('css selector',benefitlistprimarytitleCls,results=>{
               if(results.value.length>0) {
                   console.log("entered 8");
                 //shelf bg color
                 properties = benefit_list_props.benefitlistprimarytitlePropsm('lg');  
                 callback.multiloop(client, benefitlistprimarytitleCls, properties, 'lg');

                }
            });
            
           
    }
},
"3 Check for benefit list items and rich text mobile properities": function(client) {
            
            var benefitslistrteCls=pageObj.elements.benefitslistrteWhite.selector,
            benefitslistrteBlueCls=pageObj.elements.benefitslistrteBlue.selector,
            benefitslistrteOffWhiteCls=pageObj.elements.benefitslistrteOffWhite.selector,
            benefitslistrteLightBlueCls=pageObj.elements.benefitslistrteLightBlue.selector,
            benefitlisticonCls=pageObj.elements.benefitlisticon.selector
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitslistrteCls,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitslistrteWhitePropsm('lg');  
                 callback.multiloop(client, benefitslistrteCls , properties, 'lg');
                 console.log("entered White 10");

                }
            });
            client.elements('css selector',benefitslistrteBlueCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteBluePropsm('lg');  
                  callback.multiloop(client, benefitslistrteBlueCls , properties, 'lg');
                  console.log("entered Blue 11");
                 }
             });
             client.elements('css selector',benefitslistrteLightBlueCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteLightBluePropsm('lg');  
                  callback.multiloop(client, benefitslistrteLightBlueCls , properties, 'lg');
                  console.log("entered Light Blue 12");
                 }
             });
             client.elements('css selector',benefitslistrteOffWhiteCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteOffWhitePropsm('lg');  
                  callback.multiloop(client, benefitslistrteOffWhiteCls , properties, 'lg');
                  console.log("entered Off White 13");
                 }
             });

           properties = benefit_list_props.benefitlisticonPropsm('lg');
            callback.pseudoSingleElem(client, benefitlisticonCls,':before',properties);
            console.log("entered icon 14");
    }
},


    "Ending the session":function(client){
        client.end();
    }
    
}


