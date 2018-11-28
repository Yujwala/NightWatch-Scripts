var pageurl = require('../../pageurls.js'),
    pageObj,contact_details_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.contact_details_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    contact_details_props = require('./contact_details_props.js')(client);  
}

module.exports = {
  '@tags': ['contact-details-desktop','desktop','contact-details'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_CONTACT_DETAILS);
            console.log("--Desktop--"+pageurl.NW_PER_CONTACT_DETAILS); 
    },

    "1 Check for contact details wrapper properities": function(client) {

        var contactdetailsshelfCls = pageObj.elements.contactdetailsshelf.selector,
        contactdetailsshelfcontainerCls=pageObj.elements.contactdetailsshelfcontainer.selector,
        themeBlueShelf = pageObj.elements.themeBlueShelf.selector;
        headergroupCls=pageObj.elements.headergroup.selector,
        headersignpostCls=pageObj.elements.headersignpost.selector;
        headerheadlineCls=pageObj.elements.headerheadline.selector;
        headerheadline2Cls=pageObj.elements.headerheadline2.selector;
        globalProps(client);
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     
        client.elements('css selector',contactdetailsshelfCls,results=>{
           if(results.value.length>0) {
                 
             properties = contact_details_props.contactDetailsShelfProps('lg');  
             callback.singleElem(client, contactdetailsshelfCls , properties, 'lg');

            }
        });
        
        client.elements('css selector',contactdetailsshelfcontainerCls,results=>{
            if(results.value.length>0) {
               
              properties = contact_details_props.cdInnerContainerProps('lg');  
              callback.singleElem(client, contactdetailsshelfcontainerCls , properties, 'lg');
 
             }
         });
            client.elements('css selector',themeBlueShelf,results=>{
               if(results.value.length>0) {

                 //shelf bg color
                 properties = contact_details_props.themeblueShelfProps('lg');  
                 callback.singleElem(client, themeBlueShelf , properties, 'lg');
                 console.log("Blue Theme"); 

                }
            });            
           client.elements('css selector',headergroupCls,results=>{
               if(results.value.length>0) {
                properties = contact_details_props.headergroupProps('lg');  
                 callback.singleElem(client, headergroupCls , properties, 'lg');

                }
            });
           client.elements('css selector',headersignpostCls,results=>{
               //lombard
                if(results.value.length>0){ 
                    if(brand.props.$brandName== "lombard") {
                        client.expect.element(headersignpostCls).to.have.css('display').which.equals('none');
                    }
                    else{                             
                    properties = contact_details_props.headerSignpostProps('lg');  
                    callback.singleElem(client, headersignpostCls , properties, 'lg');
                    }
                }
                
            });
            client.elements('css selector',headerheadlineCls,results=>{
                if(results.value.length>0) {
                  properties = contact_details_props.headerHeadlineProps('lg');  
                  callback.singleElem(client, headerheadlineCls , properties, 'lg');
 
                 }
             });
            client.elements('css selector',headerheadline2Cls,results=>{
                if(results.value.length>0) {
                  properties = contact_details_props.headerHeadline2Props('lg');  
                  callback.singleElem(client, headerheadline2Cls , properties, 'lg');
 
                 }
             });
           
        }
    },
    "2 Check for contact-details shelf grid properities": function(client) {

        var contactdetailsgridItemsCls=pageObj.elements.contactdetailsgridItems.selector,
            contactdetailsgridleftcol1Cls=pageObj.elements.contactdetailsgridleftcol1.selector,
            contactdetailsgridleftcol2Cls=pageObj.elements.contactdetailsgridleftcol2.selector,
            contactdetailsrteHeaderCls=pageObj.elements.contactdetailsrteHeader.selector,
            contactdetailsrteTxtCls=pageObj.elements.contactdetailsrteTxt.selector,
            contactdetailslinktextCls=pageObj.elements.contactdetailslinktext.selector,
            contactDownloadDetailsCls=pageObj.elements.contactDownloadDetails.selector

            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',contactdetailsgridItemsCls,results=>{
            if(results.value.length>0) {
              properties = contact_details_props.cdGridProps('lg');  
              callback.multiloop(client, contactdetailsgridItemsCls , properties, 'lg');
                
             }
         });
         client.elements('css selector',contactdetailsgridleftcol1Cls,results=>{
            if(results.value.length>0) {
              properties = contact_details_props.cdGridCol1Props('lg');  
              callback.singleElem(client, contactdetailsgridleftcol1Cls , properties, 'lg');
                
             }
         });
         client.elements('css selector',contactdetailsgridleftcol2Cls,results=>{
            if(results.value.length>0) {
              properties = contact_details_props.cdGridCol2Props('lg');  
              callback.singleElem(client, contactdetailsgridleftcol2Cls , properties, 'lg');
                
             }
         });
		client.elements('css selector',contactdetailsrteHeaderCls,results=>{
            if(results.value.length>0) {
              properties = contact_details_props.cdRteHeaderProps('lg');  
              callback.multiloop(client, contactdetailsrteHeaderCls , properties, 'lg');
                
             }
         });
		client.elements('css selector',contactdetailsrteTxtCls,results=>{
            if(results.value.length>0) {
              properties = contact_details_props.cdRteTxtProps('lg');  
              callback.multiloop(client, contactdetailsrteTxtCls , properties, 'lg');
                
             }
         });
         client.elements('css selector',contactdetailslinktextCls,results=>{
            if(results.value.length>0) {		
            properties = contact_details_props.cdLinktextProps('lg');  
              callback.singleElem(client, contactdetailslinktextCls , properties, 'lg');
              
             }
         });
         client.elements('css selector',contactDownloadDetailsCls,results=>{
            if(results.value.length>0) {		
            properties = contact_details_props.cdDownloadDetailsProps('lg');  
              callback.singleElem(client, contactDownloadDetailsCls , properties, 'lg');
              
             }
         });  
        }   

         
    
    },
    "3 Check for contact-details find_branch link click and focus properities": function(client) {
        //For FOCUS of branch link
        var contactdetailsBranchLink=pageObj.elements.contactdetailsBranchLink.selector,
        contactdetailsshelfCls = pageObj.elements.contactdetailsshelf.selector
        contactdetailsLinkonFocus=pageObj.elements.contactdetailsLinkonFocus.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',contactdetailsshelfCls,results=>{
            if(results.value.length>0) { 
                 client.source(() => {
                     console.log("--- FOCUS props of element -----");
                 });
                 client.waitForElementVisible(contactdetailsBranchLink, 6000);
                     client.moveToElement(contactdetailsBranchLink, 1, 1);
                     client.pause(1000);
                     client.mouseButtonDown(0);
                     client.pause(5000);
                     Properties = contact_details_props.cdLinkFocusProps('lg');  
                     callback.singleElem(client,contactdetailsLinkonFocus, Properties, 'lg');
                     client.pause(1000);
                     client.click(contactdetailsBranchLink);

             }
         }); 
        }
    },
    


    "Ending the session":function(client){
        client.end();
    }
    
}