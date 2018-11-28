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
    '@tags': ['contact-details-mobile', 'contact-details','mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },

    "Opening the Mobile URL": function(client) {
           globalProps(client);
           callback.openURL(client,pageurl.NW_PER_CONTACT_DETAILS_MOB);
           console.log("--Mobile--"+pageurl.NW_PER_CONTACT_DETAILS_MOB);
           
    },
    
    "1.Verifying contact details shelf Properties": function(client) {
        themeBlueShelf = pageObj.elements.themeBlueShelf.selector
        contactdetailsshelfcontainer=pageObj.elements.contactdetailsshelfcontainer.selector     
        globalProps(client);
                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',themeBlueShelf,results=>{    
                if(results.value.length>0) {
                   //shelf bg color
                  properties = contact_details_props.themeblueShelfPropssm('xs');  
                  callback.singleElem(client, themeBlueShelf , properties, 'xs');
                
                  properties = contact_details_props.cdInnerShelfPropssm('xs');  
                  callback.singleElem(client, contactdetailsshelfcontainer , properties, 'xs');
                  }
            });
        }
        },

    "2.Verifying header group Properties": function(client) {
        headergroup=pageObj.elements.headergroup.selector
        headersignpost=pageObj.elements.headersignpost.selector
        headerheadline=pageObj.elements.headerheadline.selector
        headerheadline2=pageObj.elements.headerheadline2.selector
        cdrteHeader=pageObj.elements.contactdetailsrteHeader.selector
        cdrteTxt=pageObj.elements.contactdetailsrteTxt.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

        client.elements('css selector',headergroup,results=>{    
            if(results.value.length>0) {
               //shelf bg color
              properties = contact_details_props.headergroupPropssm('xs');  
              callback.singleElem(client, headergroup , properties, 'xs');
              //signpost
              if(brand.props.$brandName== "lombard") {
                client.expect.element(headersignpost).to.have.css('display').which.equals('none');
                }
              else{                          
              properties = contact_details_props.signpostPropssm('xs');  
              callback.singleElem(client, headersignpost , properties, 'xs');
              }

              properties = contact_details_props.headerPropssm('xs');  
              callback.singleElem(client, headerheadline , properties, 'xs');

              client.elements('css selector',headerheadline2,results=>{

              if(results.value.length>0){
                properties = contact_details_props.header2Propssm('xs');  
                callback.singleElem(client, headerheadline2, properties, 'xs');
              }
            });

              properties = contact_details_props.cdrteHeaderPropssm('xs');  
              callback.multiloop(client, cdrteHeader, properties, 'xs');

              properties = contact_details_props.cdrteTxtPropssm('xs');  
              callback.multiloop(client, cdrteTxt, properties, 'xs');
              
              }
        });
    }
    },

    'Closing Browser': function(client) {
        client.pause(1000);
        client.end();
    }
    
}
