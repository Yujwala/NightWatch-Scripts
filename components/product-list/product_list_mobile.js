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
    '@tags': ['mobile', 'product-list', 'product-list-mobile'],
    "Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_PRODLIST_M);
            console.log("--Mobile--"+pageurl.NW_PER_PRODLIST_M); 
    },
  
     "1 Check for Product List Header properties": function(client) {
        productListHeader = pageObj.elements.productListHeader.selector,
        prodListTitle =pageObj.elements.prodListTitle.selector,
        prodListSubTitle = pageObj.elements.prodListSubTitle.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',productListHeader,results=>{
            if(results.value.length>0) { 
            //product list header margin bottom
            Properties = product_list_props.productListHeaderProps('xs');  
            callback.multiloop(client,productListHeader, Properties, 'xs');

            //product list title props
            Properties = product_list_props.prodListTitleProps('xs');  
            callback.multiloop(client,prodListTitle, Properties, 'xs');

            //product list sub title props
            Properties = product_list_props.prodListSubTitleProps('xs');  
            callback.multiloop(client,prodListSubTitle, Properties, 'xs');
            }
        });
        }      
    },
    "2.Check for product wrapper properties": function(client) {
        prodListWrapper = pageObj.elements.prodListWrapper.selector,
        prodListWrapperMob = pageObj.elements.prodListWrapperMob.selector,
        prodListWrapperLastchildMob = pageObj.elements.prodListWrapperLastchildMob.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListWrapper,results=>{
            if(results.value.length>0) { 
            //product list wrapper properties
            Properties = product_list_props.prodListWrapperMobProps('xs');  
            callback.multiloop(client,prodListWrapperMob, Properties, 'xs');

            Properties = product_list_props.prodListWrapperLastChildMobProps('xs');  
            callback.multiloop(client,prodListWrapperLastchildMob, Properties, 'xs');

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
            Properties = product_list_props.prodListTopProps('xs');  
            callback.multiloop(client,prodListTop, Properties, 'xs');

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
            Properties = product_list_props.listTopListImgProps('xs');  
            callback.multiloop(client,listTopListImg, Properties, 'xs');


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
    
            Properties = product_list_props.listTopListLoanProps('xs');  
             callback.multiloop(client,listTopListLoan, Properties, 'xs');
    
            //product list list_loan subtitle properties
            Properties = product_list_props.listLoanSubtitleProps('xs');  
            callback.multiloop(client,listLoanSubtitle, Properties, 'xs');

            //product list list_loan rte text properties
            Properties = product_list_props.listLoanRteTxtProps('xs');  
            callback.multiloop(client,listLoanRteTxt, Properties, 'xs');

            //product list list_loan icon text properties
            Properties = product_list_props.listLoanIconTextProps('xs');  
            callback.multiloop(client,listLoanIconText, Properties, 'xs');

            //product list list_loan icon text img properties
            Properties = product_list_props.listLoanIconTextImgProps('xs');  
            callback.multiloop(client,listLoanIconTextImg, Properties, 'xs');

            //product list list_loan icont text rte properties
            Properties = product_list_props.listLoanIconTextRteProps('xs');  
            callback.multiloop(client,listLoanIconTextRte, Properties, 'xs');

            //product list list_loan icon text rte text properties
            Properties = product_list_props.listLoanIconTextRteTextProps('xs');  
            callback.multiloop(client,listLoanIconTextRteText, Properties, 'xs');


            //product list list_loan Loan fee rte text properties
            Properties = product_list_props.listLoanFeeRteTextProps('xs');  
            rteCallback.rteElem(client, listLoanFeeRteText, Properties,'p', 'xs');
                
            

            }
        });
        }      
    },
    "6.Check for prod list list_apr properties": function(client) {
        listTopListApr = pageObj.elements.listTopListApr.selector,
        listTopListAprRteText = pageObj.elements.listTopListAprRteText.selector

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',listTopListApr,results=>{
            if(results.value.length>0) { 
            

            //product list top list Apr rte p properties
            Properties = product_list_props.listTopListAprRteTextProps('xs');  
            callback.multiloop(client,listTopListAprRteText, Properties, 'xs');

            }
        });
        }      
    },
    "7.Check for prod list list_cta properties": function(client) {
        prodListTopListCta = pageObj.elements.prodListTopListCta.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListTopListCta,results=>{
            if(results.value.length>0) { 
            //product list list_Cta properties

            Properties = product_list_props.prodListTopListCtaProps('xs');  
            callback.multiloop(client,prodListTopListCta, Properties, 'xs'); 
            }
        });
        }      
    },
    "8.Check for prod list bottom properties": function(client) {
        prodListBottom = pageObj.elements.prodListBottom.selector,
        prodListBottomRtaLeft = pageObj.elements.prodListBottomRtaLeft.selector,
        prodListBottomCtaRight = pageObj.elements.prodListBottomCtaRight.selector,
        prodListBottomCtaRightListCta = pageObj.elements.prodListBottomCtaRightListCta.selector
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',prodListBottom,results=>{
            if(results.value.length>0) { 
    

            //product list bottom rta left Properties
            Properties = product_list_props.prodListBottomRtaLeftProps('xs');  
            callback.multiloop(client,prodListBottomRtaLeft, Properties, 'xs');
            

            //product list bottom cta right Properties
            Properties = product_list_props.prodListBottomCtaRightProps('xs');  
            callback.multiloop(client,prodListBottomCtaRight, Properties, 'xs');

            //product list bottom cta right list cta Properties
            Properties = product_list_props.prodListBottomCtaRightListCtaProps('xs');  
            callback.multiloop(client,prodListBottomCtaRightListCta, Properties, 'xs');
            
            }
        });
        }      
    },
    "9.Check for longAprNoCta properties":  function(client) {
        longAprNoCtaListBtmRtaLeft = pageObj.elements.longAprNoCtaListBtmRtaLeft.selector
 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',longAprNoCtaListBtmRtaLeft,results=>{
            if(results.value.length>0) {

            //product list long apr no cta list btm rta left properties
            Properties = product_list_props.longAprNoCtaListBtmRtaLeftProps('xs');  
            callback.multiloop(client,longAprNoCtaListBtmRtaLeft, Properties, 'xs');

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
