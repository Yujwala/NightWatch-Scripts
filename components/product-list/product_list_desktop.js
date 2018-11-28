var product_list_props,
    pageurl = require('../../pageurls.js'),
    pageObj,callback,size,brand,rteCallback;    

function globalProps(client){
    pageObj = client.page.product_list_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
	callback.getBrand(client);
	product_list_props = require('./product_list_props.js')(client);
}    

module.exports = {
    '@tags': ['desktop', 'product-list', 'product-list-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_PRODLIST);
            console.log("--Desktop--"+pageurl.NW_PER_PRODLIST); 
    },
  
     "1 Check for Product List Header properties": function(client) {
        productListHeader = pageObj.elements.productListHeader.selector,
        prodListTitle =pageObj.elements.prodListTitle.selector,
        prodListSubTitle = pageObj.elements.prodListSubTitle.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',productListHeader,results=>{
            if(results.value.length>0) { 
            //product list header margin bottom
            Properties = product_list_props.productListHeaderProps('lg');  
            callback.multiloop(client,productListHeader, Properties, 'lg');

            //product list title props
            Properties = product_list_props.prodListTitleProps('lg');  
            callback.multiloop(client,prodListTitle, Properties, 'lg');

            //product list sub title props
            Properties = product_list_props.prodListSubTitleProps('lg');  
            callback.multiloop(client,prodListSubTitle, Properties, 'lg');
            }
        });
        }      
    },
    "2.Check for product wrapper properties": function(client) {
        prodListWrapper = pageObj.elements.prodListWrapper.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListWrapper,results=>{
            if(results.value.length>0) { 
            //product list wrapper properties
            Properties = product_list_props.prodListWrapperProps('lg');  
            callback.multiloop(client,prodListWrapper, Properties, 'lg');

            }
        });
        }      
    },
    "3.Check for product list top properties": function(client) {
        prodListTop = pageObj.elements.prodListTop.selector
        
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListTop,results=>{
            if(results.value.length>0) { 
            //product list top properties
            Properties = product_list_props.prodListTopProps('lg');  
            callback.multiloop(client,prodListTop, Properties, 'lg');

            }
        });
        }      
    },
    "4.Check for prod list list_img properties": function(client) {
        listTopListImg = pageObj.elements.listTopListImg.selector,
        listTopListImgImg= pageObj.elements.listTopListImgImg.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',listTopListImg,results=>{
            if(results.value.length>0) { 
            //product list list_img properties
            Properties = product_list_props.listTopListImgProps('lg');  
            callback.multiloop(client,listTopListImg, Properties, 'lg');

            //product list list_img img properties
            Properties = product_list_props.listTopListImgImgProps('lg');  
            callback.multiloop(client,listTopListImgImg, Properties, 'lg');

            }
        });
        }      
    },
    "5.Check for prod list list_loan properties": function(client) {
        listTopListLoan = pageObj.elements.listTopListLoan.selector
        listLoanSubtitle = pageObj.elements.listLoanSubtitle.selector
        listLoanRteTxt = pageObj.elements.listLoanRteTxt.selector,
        listLoanIconText = pageObj.elements.listLoanIconText.selector,
        listLoanIconTextImg = pageObj.elements.listLoanIconTextImg.selector,
        listLoanIconTextRte = pageObj.elements.listLoanIconTextRte.selector
        listLoanIconTextRteText= pageObj.elements.listLoanIconTextRteText.selector,
        listLoanFee= pageObj.elements.listLoanFee.selector,
        listLoanFeeRteText= pageObj.elements.listLoanFeeRteText.selector,
        listLoanFeeRteFirstChild = pageObj.elements.listLoanFeeRteFirstChild.selector,
        listLoanFeeRteLastChild = pageObj.elements.listLoanFeeRteLastChild.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',listTopListLoan,results=>{
            if(results.value.length>0) { 

            //product list list_loan subtitle properties
            Properties = product_list_props.listLoanSubtitleProps('lg');  
            callback.multiloop(client,listLoanSubtitle, Properties, 'lg');

            //product list list_loan rte text properties
            Properties = product_list_props.listLoanRteTxtProps('lg');  
            callback.multiloop(client,listLoanRteTxt, Properties, 'lg');

            //product list list_loan icon text properties
            Properties = product_list_props.listLoanIconTextProps('lg');  
            callback.multiloop(client,listLoanIconText, Properties, 'lg');

            //product list list_loan icon text img properties
            Properties = product_list_props.listLoanIconTextImgProps('lg');  
            callback.multiloop(client,listLoanIconTextImg, Properties, 'lg');

            //product list list_loan icont text rte properties
            Properties = product_list_props.listLoanIconTextRteProps('lg');  
            callback.multiloop(client,listLoanIconTextRte, Properties, 'lg');

            //product list list_loan icon text rte text properties
            Properties = product_list_props.listLoanIconTextRteTextProps('lg');  
            callback.multiloop(client,listLoanIconTextRteText, Properties, 'lg');

            //product list list_loan Loan fee properties
            Properties = product_list_props.listLoanFeeProps('lg');  
            callback.multiloop(client,listLoanFee, Properties, 'lg');

            //product list list_loan Loan fee rte text properties
            Properties = product_list_props.listLoanFeeRteTextProps('lg');  
            rteCallback.rteElem(client, listLoanFeeRteText, Properties,'p', 'lg');

           // product list list_loan Loan fee rte text first child properties
            Properties = product_list_props.listLoanFeeRteFirstChildProps('lg');  
            callback.multiloop(client,listLoanFeeRteFirstChild, Properties, 'lg');


            //product list list_loan Loan fee rte text last child properties
            Properties = product_list_props.listLoanFeeRteLastChildProps('lg');  
            callback.multiloop(client,listLoanFeeRteLastChild, Properties, 'lg');

                

            }
        });
        }      
    },
    "6.Check for prod list list_apr properties": function(client) {
        listTopListApr = pageObj.elements.listTopListApr.selector,
        listTopListAprRte = pageObj.elements.listTopListAprRte.selector,
        listTopListAprRteText = pageObj.elements.listTopListAprRteText.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',listTopListApr,results=>{
            if(results.value.length>0) { 
            //product list top list Apr properties
            Properties = product_list_props.listTopListAprProps('lg');  
            callback.multiloop(client,listTopListApr, Properties, 'lg');

            //product list top list Apr rte properties
            Properties = product_list_props.listTopListAprRteProps('lg');  
            callback.multiloop(client,listTopListAprRte, Properties, 'lg');

            //product list top list Apr rte p properties
            Properties = product_list_props.listTopListAprRteTextProps('lg');  
            callback.multiloop(client,listTopListAprRteText, Properties, 'lg');

            }
        });
        }      
    },
    "7.Check for prod list list_cta properties": function(client) {
        listTopListCta = pageObj.elements.listTopListCta.selector,
        listCtaInner = pageObj.elements.listCtaInner.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',listTopListCta,results=>{
            if(results.value.length>0) { 
            //product list list_Cta properties
            Properties = product_list_props.listTopListCtaProps('lg');  
            callback.multiloop(client,listTopListCta, Properties, 'lg');

            //product list list_cta CtaInner Properties
            Properties = product_list_props.listCtaInnerProps('lg');  
            callback.multiloop(client,listCtaInner, Properties, 'lg')    
            }
        });
        }      
    },
    "8.Check for prod list bottom properties": function(client) {
        prodListBottom = pageObj.elements.prodListBottom.selector,
        prodListBottomRtaLeft = pageObj.elements.prodListBottomRtaLeft.selector,
        prodListBottomRtaLeftRteText=pageObj.elements.prodListBottomRtaLeftRteText.selector,
        prodListBottomCtaRight = pageObj.elements.prodListBottomCtaRight.selector,
        prodListBottomCtaRightListCta = pageObj.elements.prodListBottomCtaRightListCta.selector,
        prodListBottomListCtaInner= pageObj.elements.prodListBottomListCtaInner.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListBottom,results=>{
            if(results.value.length>0) { 
            //product list bottom  properties
     
            Properties = product_list_props.prodListBottomProps('lg');  
            callback.multiloop(client,prodListBottom, Properties, 'lg');
       

            //product list bottom rta left Properties
            Properties = product_list_props.prodListBottomRtaLeftProps('lg');  
            callback.multiloop(client,prodListBottomRtaLeft, Properties, 'lg');
            
            //product list bottom rta left rte text properties
            Properties = product_list_props.prodListBottomRtaLeftRteTextProps('lg');  
            callback.multiloop(client,prodListBottomRtaLeftRteText, Properties, 'lg');

            //product list bottom cta right Properties
            Properties = product_list_props.prodListBottomCtaRightProps('lg');  
            callback.multiloop(client,prodListBottomCtaRight, Properties, 'lg');

            //product list bottom cta right list cta Properties
            Properties = product_list_props.prodListBottomCtaRightListCtaProps('lg');  
            callback.multiloop(client,prodListBottomCtaRightListCta, Properties, 'lg')
    
            //  product list bottom cta right list cta Properties
            Properties = product_list_props.prodListBottomListCtaInnerProps('lg');  
            callback.multiloop(client,prodListBottomListCtaInner, Properties, 'lg')  
        
            }
        });
        }      
    },
    "9.Check for shortApr properties": function(client) {
        shortAprListBottom = pageObj.elements.shortAprListBottom.selector,
        shortAprListLoan = pageObj.elements.shortAprListLoan.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',shortAprListLoan,results=>{
            if(results.value.length>0) { 
            //product list shortAprListBottom properties
            Properties = product_list_props.shortAprListBottomProps('lg');  
            callback.multiloop(client,shortAprListBottom, Properties, 'lg');
          
            //product list shortAprListLoanproperties
            Properties = product_list_props.shortAprListLoanProps('lg');  
            callback.multiloop(client,shortAprListLoan, Properties, 'lg');
 


   

            }
        });
        }      
    },
    "10.Check for noApr properties": function(client) {
        noAprListLoan = pageObj.elements.noAprListLoan.selector,
        noAprListApr = pageObj.elements.noAprListApr.selector,
        noAprListBottom = pageObj.elements.noAprListBottom.selector


        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',noAprListLoan,results=>{
            if(results.value.length>0) { 
            //product list no apr list loan properties
    
            Properties = product_list_props.noAprListLoanProps('lg');  
            callback.multiloop(client,noAprListLoan, Properties, 'lg');

            //product list no apr list apr properties
            Properties = product_list_props.noAprListAprProps('lg');  
            callback.multiloop(client,noAprListApr, Properties, 'lg');

            //product list no apr list bottom properties
            Properties = product_list_props.noAprListBottomProps('lg');  
            callback.multiloop(client,noAprListBottom, Properties, 'lg');
   

            }
        });
        }      
    },
    "11.Check for longAprWithCta properties":  function(client) {
        longAprWithCtaListLoan = pageObj.elements.longAprWithCtaListLoan.selector,
        longAprWithCtaListApr = pageObj.elements.longAprWithCtaListApr.selector,
        longAprWithCtaListCta = pageObj.elements.longAprWithCtaListCta.selector,
        longAprWithCtaListCtaInner = pageObj.elements.longAprWithCtaListCtaInner.selector,
        longAprWithCtalistBtmRtaLeft = pageObj.elements.longAprWithCtalistBtmRtaLeft.selector,
        longAprWithCtaListBtmRightCta = pageObj.elements.longAprWithCtaListBtmRightCta.selector,
        longAprWithCtaListBtmListCta = pageObj.elements.longAprWithCtaListBtmListCta.selector
         longAprWithCtaListBtmListCtaInner = pageObj.elements.longAprWithCtaListBtmListCtaInner.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',longAprWithCtaListLoan,results=>{
            if(results.value.length>0) { 
           //product list long apr with cta list loan properties

            Properties = product_list_props.longAprWithCtaListLoanProps('lg');  
            callback.multiloop(client,longAprWithCtaListLoan, Properties, 'lg');

            //product list long apr with cta Cta inner properties
            Properties = product_list_props.longAprWithCtaListCtaInnerProps('lg');  
            callback.multiloop(client,longAprWithCtaListCtaInner, Properties, 'lg');

             //product list long apr with cta list btm right cta list-cta properties
             Properties = product_list_props.longAprWithCtaListBtmListCtaProps('lg');  
             callback.multiloop(client,longAprWithCtaListBtmListCta, Properties, 'lg');
 
               //product list long apr with cta list btm right cta list-cta properties
             Properties = product_list_props.longAprWithCtaListBtmListCtaInnerProps('lg');  
             callback.multiloop(client,longAprWithCtaListBtmListCtaInner, Properties, 'lg');

              //product list long apr with cta list btm rta left properties
            Properties = product_list_props.longAprWithCtalistBtmRtaLeftProps('lg');  
            callback.multiloop(client,longAprWithCtalistBtmRtaLeft, Properties, 'lg');

            //product list long apr with cta list btm right list cta properties
            Properties = product_list_props.longAprWithCtaListBtmRightCtaProps('lg');  
            callback.multiloop(client,longAprWithCtaListBtmRightCta, Properties, 'lg');

            //product list long apr with Apr properties
            Properties = product_list_props.longAprWithCtaListAprProps('lg');  
            callback.multiloop(client,longAprWithCtaListApr, Properties, 'lg');

            //product list long apr with cta Cta properties
            Properties = product_list_props.longAprWithCtaListCtaProps('lg');  
            callback.multiloop(client,longAprWithCtaListCta, Properties, 'lg');

            }
        });
        }      
    },
    "12.Check for longAprNoCta properties":  function(client) {
        longAprNoCtaListLoan = pageObj.elements.longAprNoCtaListLoan.selector,
        longAprNoCtaListApr = pageObj.elements.longAprNoCtaListApr.selector,
        longAprNoCtaListCta = pageObj.elements.longAprNoCtaListCta.selector,
        longAprNoCtaListCtaInner = pageObj.elements.longAprNoCtaListCtaInner.selector
        longAprNoCtaListBtmRtaLeft = pageObj.elements.longAprNoCtaListBtmRtaLeft.selector,
        longAprNoCtaListBtmRightCta = pageObj.elements.longAprNoCtaListBtmRightCta.selector,
        longAprNoCtaListBtmListCta = pageObj.elements.longAprNoCtaListBtmListCta.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',longAprNoCtaListLoan,results=>{
            if(results.value.length>0) { 
            //product list long apr no cta list loan properties
            Properties = product_list_props.longAprNoCtaListLoanProps('lg');  
            callback.multiloop(client,longAprNoCtaListLoan, Properties, 'lg');

            //product list long apr no cta list cta inner cta properties
            Properties = product_list_props.longAprNoCtaListCtaInnerProps('lg');  
            callback.multiloop(client,longAprNoCtaListCtaInner, Properties, 'lg');

            //product list long apr no cta list apr properties
            Properties = product_list_props.longAprNoCtaListAprProps('lg');  
            callback.multiloop(client,longAprNoCtaListApr, Properties, 'lg');

            //product list long apr no cta list cta properties
            Properties = product_list_props.longAprNoCtaListCtaProps('lg');  
            callback.multiloop(client,longAprNoCtaListCta, Properties, 'lg');


            //product list long apr no cta list btm rta left properties
            Properties = product_list_props.longAprNoCtaListBtmRtaLeftProps('lg');  
            callback.multiloop(client,longAprNoCtaListBtmRtaLeft, Properties, 'lg');

            //product list long apr no cta list bottom right  cta properties
            Properties = product_list_props.longAprNoCtaListBtmRightCtaProps('lg');  
            callback.multiloop(client,longAprNoCtaListBtmRightCta, Properties, 'lg');

             //product list long apr no cta list bottom right  cta list cta properties
             Properties = product_list_props.longAprNoCtaListBtmListCtaProps('lg');  
             callback.multiloop(client,longAprNoCtaListBtmListCta, Properties, 'lg');
   

            }

    });
        }   
    },
    
    
    
    
    //Closing the browser
    'Closing Browser': function(client){
        client.pause(1000);
        client.end();
      }
    }
