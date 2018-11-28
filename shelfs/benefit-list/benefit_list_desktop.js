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
  '@tags': ['benefit-list-desktop','desktop','benefit-list'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_PER_BENEFIT_LIST);
            console.log("--Desktop--"+pageurl.NW_PER_BENEFIT_LIST); 
    },

    "1 Check for benefit list wrapper": function(client) {
            benefitlistShelfCls = pageObj.elements.benefitlistShelf.selector,
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitlistShelfCls,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlistShelfProps('lg');  
                 callback.multiloop(client, benefitlistShelfCls , properties, 'lg');

                }
            });
           
    }
    },
"2 check for benefit list title properities" : function(client) {
            var benefitlisttitleCls = pageObj.elements.benefitlisttitleWhite.selector,
            benefitlisttitleBlueCls = pageObj.elements.benefitlisttitleBlue.selector,
            benefitlistprimarytitletextCls=pageObj.elements.benefitlistprimarytitletextWhite.selector,
            benefitlistSectionCls=pageObj.elements.benefitlistSection.selector,
            benefitlistprimarytitleCls=pageObj.elements.benefitlistprimarytitle.selector;
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitlisttitleCls,results=>{
               
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlisttitleWhiteProps('lg');  
                 callback.multiloop(client, benefitlisttitleCls , properties, 'lg');
                 console.log("entered 1");

                }
            });
            client.elements('css selector',benefitlisttitleBlueCls,results=>{
                console.log("entered 2");
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitlisttitleBlueProps('lg');  
                 callback.multiloop(client, benefitlisttitleBlueCls , properties, 'lg');
                 

                }
            });
            client.elements('css selector',benefitlistSectionCls,results=>{
               if(results.value.length>0) {
                console.log("entered 3");

                 //shelf bg color
                 properties = benefit_list_props.benefitlistSectionProps('lg');  
                 callback.multiloop(client, benefitlistSectionCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlistprimarytitletextCls,results=>{
               if(results.value.length>0) {
                console.log("entered title text 4");

                 //shelf bg color
                 properties = benefit_list_props.benefitlistprimarytitletextWhiteProps('lg');  
                 callback.multiloop(client, benefitlistprimarytitletextCls , properties, 'lg');

                }
            });
            client.elements('css selector',benefitlistprimarytitleCls,results=>{
               if(results.value.length>0) {
                   console.log("entered 5");
                 //shelf bg color
                 properties = benefit_list_props.benefitlistprimarytitleProps('lg');  
                 callback.multiloop(client, benefitlistprimarytitleCls, properties, 'lg');

                }
            });
           
    }
},
"3 Check for benefit list list items and rich text props": function(client) {
            
            var benefitslistrteCls=pageObj.elements.benefitslistrteWhite.selector,
            benefitslistrteBlueCls=pageObj.elements.benefitslistrteBlue.selector,
            benefitslistrteOffWhiteCls=pageObj.elements.benefitslistrteOffWhite.selector,
            benefitslistrteLightBlueCls=pageObj.elements.benefitslistrteLightBlue.selector,
            benefitlisticonCls=pageObj.elements.benefitlisticon.selector
            globalProps(client);
            
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            //check for font-size,line-height,font-family and font-color of title
            client.elements('css selector',benefitslistrteCls,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = benefit_list_props.benefitslistrteWhiteProps('lg');  
                 callback.multiloop(client, benefitslistrteCls , properties, 'lg');
                 console.log("entered White 1");
                }
            });
            client.elements('css selector',benefitslistrteBlueCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteBlueProps('lg');  
                  callback.multiloop(client, benefitslistrteBlueCls , properties, 'lg');
                  console.log("entered Blue 2");
                 }
             });
             client.elements('css selector',benefitslistrteLightBlueCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteLightBlueProps('lg');  
                  callback.multiloop(client, benefitslistrteLightBlueCls , properties, 'lg');
                  console.log("entered Light Blue3");
                 }
             });
             client.elements('css selector',benefitslistrteOffWhiteCls,results=>{
                if(results.value.length>0) {
 
                  //shelf bg color
                  properties = benefit_list_props.benefitslistrteOffWhiteProps('lg');  
                  callback.multiloop(client, benefitslistrteOffWhiteCls , properties, 'lg');
                  console.log("entered White 4");
                 }
             });
            

           properties = benefit_list_props.benefitlisticonProps('lg');
            callback.pseudoSingleElem(client, benefitlisticonCls,':before',properties);

    }
},


    "Ending the session":function(client){
        client.end();
    }
    
}


