var pageurl = require('../../pageurls.js'),
    pageObj,productdetails_props,callback,size;

function globalProps(client){
    proSelectors = client.page.productdetails_selectors(),
    callback = client.page.common(),
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    productdetails_props = require('./productdetails_props.js')(client);  
}    

module.exports = {
    '@tags': ['productdetails-desktop', 'productdetails','desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();    
        callback.openURL(client, pageurl.RBS_BUS_PRODUCTDETAILS);
        console.log("--Desktop--"+pageurl.RBS_BUS_PRODUCTDETAILS); 
    },
    "1.prodClrBgClrPadd": function(client) {
        shelfPadding = proSelectors.elements.prodClrBgClrPadd.selector,
        callback.scrollToElement(client, shelfPadding);
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodClrBgClrPadd('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "2.prodInnerPadd": function(client) {
        shelfPadding = proSelectors.elements.prodInnerPadd.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodInnerPadd('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });                
        }
    },
    "3.prodGridItemCont": function(client) {
        shelfPadding = proSelectors.elements.prodGridItemCont.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodGridItemCont('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "4.prodLeft1third": function(client) {
        shelfPadding = proSelectors.elements.prodLeft1third.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodLeft1third('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "5.prodLeftImgprops": function(client) {
        shelfPadding = proSelectors.elements.prodLeftImgprops.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodLeftImgprops('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "6.prodRight2thirds": function(client) {
        shelfPadding = proSelectors.elements.prodRight2thirds.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodRight2thirds('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "7.prodRig23rdsTitle": function(client) {
        shelfPadding = proSelectors.elements.prodRig23rdsTitle.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodRig23rdsTitle('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "8.prodRigh23rdsRTE": function(client) {
        shelfPadding = proSelectors.elements.prodRigh23rdsRTE.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodRigh23rdsRTE('lg');
                    rteCallback.rteElem(client, shelfPadding, properties,'','lg');
                    properties = productdetails_props.prodRig23rdsRTEP('lg');
                    rteCallback.rteElem(client, shelfPadding, properties,'p','lg');
                }
            });
        }
    },
    "10.gridSelBelowProd": function(client) {
        shelfPadding = proSelectors.elements.gridSelBelowProd.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.gridSelBelowProd('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },   
    "11.gridInnerPaddings": function(client) {
        shelfPadding = proSelectors.elements.gridInnerPaddings.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.gridInnerPaddings('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    }, 
    "12.gridInnerMargin": function(client) {
        shelfPadding = proSelectors.elements.gridInnerMargin.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.gridInnerMargin('lg');
                    callback.multiloop(client, shelfPadding, properties,'lg');
                }
            });
        }
    },
    "13.theme Backgrounds": function(client) {
        lightBlueBgGrid = proSelectors.elements.lightBlueBgGrid.selector,
        BlueBgGrid = proSelectors.elements.BlueBgGrid.selector,
        whiteBgGrid = proSelectors.elements.whiteBgGrid.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',lightBlueBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.lightBlueBgGrid('lg');
                    callback.multiloop(client, lightBlueBgGrid, properties,'lg');
                    client.source(() => {
                      console.log("This is Light Blue Background Theme Grid"); 
                    });
                }
            });
            client.elements('css selector',BlueBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueBgGrid('lg');
                    callback.multiloop(client, BlueBgGrid, properties,'lg');
                    client.source(() => {
                      console.log("This is Blue Background Theme Grid"); 
                    });
                }
            });
            client.elements('css selector',whiteBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.whiteBgGrid('lg');
                    callback.multiloop(client, whiteBgGrid, properties,'lg');
                    client.source(() => {
                      console.log("This is White Background Theme Grid"); 
                    });
                }
            });
        }
    },
    "14.Outer padding for all grid types": function(client) {
        allGridsSelectors = proSelectors.elements.allGridsSelectors.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',allGridsSelectors,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.allGridsSelectors('lg');
                    callback.multiloop(client, allGridsSelectors, properties,'lg');
                }
            });            
        }
    },
    "15.White RTE props for the Product Details Shelf": function(client) {
        White23rdRTETitle = proSelectors.elements.White23rdRTETitle.selector,
        Whit13rdtable = proSelectors.elements.Whit13rdtable.selector,
        WhitBlockQuoteText = proSelectors.elements.WhitBlockQuoteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',White23rdRTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.White23rdRTETitle('lg');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'.icon--pd__title','lg');
                    client.source(() => {
                      console.log("1.White23rdRTETitle found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTETitPadd('lg');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>p','lg');
                    client.source(() => {
                      console.log("2.Whit23rdRTETitPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTEULPadd('lg');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>ul','lg');
                    client.source(() => {
                      console.log("3.Whit23rdRTEULPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTELiProps('lg');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>ul li','lg');
                    client.source(() => {
                      console.log("4.Whit23rdRTELiProps found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Whit13rdtable,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Whit13rdtable('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table','lg');
                    client.source(() => {
                      console.log("5.Whit13rdtable found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtab1stRow('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:first-child','lg');
                    client.source(() => {
                      console.log("6.Whit13rdtab1stRow found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtab1stRowTD('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:first-child td','lg');
                    client.source(() => {
                      console.log("7.Whit13rdtab1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdNot1stRowTD('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'tr:not(:nth-child(1)) td','lg');
                    client.source(() => {
                      console.log("8.Whit13rdNot1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtabEveRow('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:nth-child(even)','lg');
                    client.source(() => {
                      console.log("9.Whit13rdtabEveRow found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtableTDFir('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr td:first-child','lg');
                    client.source(() => {
                      console.log("10.Whit13rdtableTDFir found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtableTDLas('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr td:last-child','lg');
                    client.source(() => {
                      console.log("11.Whit13rdtableTDLas found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdPBeltabPadd('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table+p','lg');
                    client.source(() => {
                      console.log("12.Whit13rdPBeltabPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdPBeltabText('lg');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table+p strong','lg');
                    client.source(() => {
                      console.log("13.Whit13rdPBeltabText found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',WhitBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.WhitBlockQuoteText('lg');
                    rteCallback.rteElem(client, WhitBlockQuoteText, properties,'.comp-rich-text blockquote span','lg');
                    client.source(() => {
                      console.log("14.WhitBlockQuoteText found and got executed"); 
                    });
                }
            });          
        }
    },
    "16.Two Third RTE Props on Blue Background": function(client) {
        BlueRTETitle = proSelectors.elements.BlueRTETitle.selector,
        BlueRTETitPadd = proSelectors.elements.BlueRTETitPadd.selector,
        BlueRTE13rdTitPadd = proSelectors.elements.BlueRTE13rdTitPadd.selector,
        BlueBlockQuoteText = proSelectors.elements.BlueBlockQuoteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',BlueRTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTETitle('lg');
                    rteCallback.rteElem(client, BlueRTETitle, properties,'>p .icon--pd__title','lg');
                    client.source(() => {
                      console.log("1. BlueRTETitle found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',BlueRTETitPadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTETitPadd('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>p','lg');
                    client.source(() => {
                      console.log("2. BlueRTETitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEH3TitPadd('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>h3','lg');
                    client.source(() => {
                      console.log("3. BlueRTEH3TitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEH3Title('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>h3 strong','lg');
                    client.source(() => {
                      console.log("4.BlueRTEH3Title found and executed"); 
                    });
                    properties = productdetails_props.BlueAeroIcon('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'~.bl__icon-airplane','lg');
                    client.source(() => {
                      console.log("5.BlueAeroIcon found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextCont('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text','lg');
                    client.source(() => {
                      console.log("6.BlueRTEAeroTextCont found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextTit('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text .benefits-list','lg');
                    client.source(() => {
                      console.log("7.BlueRTEAeroTextTit found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextPara('lg');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text .comp-rich-text p','lg');
                    client.source(() => {
                      console.log("8.BlueRTEAeroTextPara found and executed"); 
                    });
                }
            });  
            client.elements('css selector',BlueRTE13rdTitPadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTE13rdTitPadd('lg');
                    rteCallback.rteElem(client, BlueRTE13rdTitPadd, properties,'h4','lg');
                    client.source(() => {
                      console.log("9.BlueRTE13rdTitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTE13rdTitle('lg');
                    rteCallback.rteElem(client, BlueRTE13rdTitPadd, properties,'h4 strong','lg');
                    client.source(() => {
                      console.log("10.BlueRTE13rdTitPadd found and executed"); 
                    });
                }
            });     
            client.elements('css selector',BlueBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueBlockQuoteText('lg');
                    rteCallback.rteElem(client, BlueBlockQuoteText, properties,'blockquote span','lg');
                    client.source(() => {
                      console.log("11.BlueBlockQuoteText found and executed"); 
                    });
                }
            });       
        }
    },
     "17.Light Blue RTE 50%  Props ": function(client) {
        LytBlue50RTETitle = proSelectors.elements.LytBlue50RTETitle.selector,
        LytBlue50AeroIcon = proSelectors.elements.LytBlue50AeroIcon.selector,
        LytBlue50BLTitle = proSelectors.elements.LytBlue50BLTitle.selector,
        LytBlue50BLpara = proSelectors.elements.LytBlue50BLpara.selector,
        LytBlue50BLUL = proSelectors.elements.LytBlue50BLUL.selector,
        LytBlue50BLLi = proSelectors.elements.LytBlue50BLLi.selector,
        LytBlue50RytH4 = proSelectors.elements.LytBlue50RytH4.selector,
        LytBlue50RytH4padd= proSelectors.elements.LytBlue50RytH4padd.selector,
        LytBlueBlockQuoteText= proSelectors.elements.LytBlueBlockQuoteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',LytBlue50RTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RTETitle('lg');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'p .icon--pd__title','lg');
                    client.source(() => {
                      console.log("1. LytBlue50RTETitle found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTETitpadd('lg');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>p','lg');
                    client.source(() => {
                      console.log("2. LytBlue50RTETitpadd found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTEh3Text('lg');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>h3 strong','lg');
                    client.source(() => {
                      console.log("3. LytBlue50RTEh3Text found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTEh3Padd('lg');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>h3','lg');
                    client.source(() => {
                      console.log("4. LytBlue50RTEh3Padd found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue50AeroIcon,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50AeroIcon('lg');
                    callback.multiloop(client, LytBlue50AeroIcon, properties,'lg');
                    client.source(() => {
                      console.log("5. LytBlue50AeroIcon found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLTitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLTitle('lg');
                    callback.multiloop(client, LytBlue50BLTitle, properties,'lg');
                    client.source(() => {
                      console.log("6. LytBlue50BLTitle found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLpara,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLpara('lg');
                    callback.multiloop(client, LytBlue50BLpara, properties,'lg');
                    client.source(() => {
                      console.log("7. LytBlue50BLpara found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLUL,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLUL('lg');
                    callback.multiloop(client, LytBlue50BLUL, properties,'lg');
                    client.source(() => {
                      console.log("8. LytBlue50BLUL found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue50BLLi,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLLi('lg');
                    callback.multiloop(client, LytBlue50BLLi, properties,'lg');
                    client.source(() => {
                      console.log("9. LytBlue50BLLi found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50RytH4,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RytH4('lg');
                    callback.multiloop(client, LytBlue50RytH4, properties,'lg');
                    client.source(() => {
                      console.log("10. LytBlue50RytH4 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50RytH4padd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RytH4padd('lg');
                    callback.multiloop(client, LytBlue50RytH4padd, properties,'lg');
                    client.source(() => {
                      console.log("11. LytBlue50RytH4padd found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlueBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlueBlockQuoteText('lg');
                    rteCallback.rteElem(client, LytBlueBlockQuoteText, properties,'blockquote span','lg');
                    client.source(() => {
                      console.log("12. LytBlueBlockQuoteText found and got executed"); 
                    });
                }
            });
        }
    },
    "18.100% width RTE Props on Blue Background": function(client) {
        Blue100RTEh3 = proSelectors.elements.Blue100RTEh3.selector,
        Blue100table = proSelectors.elements.Blue100table.selector,
        Blue100tabBody = proSelectors.elements.Blue100tabBody.selector,
        Blue100tab1sttr = proSelectors.elements.Blue100tab1sttr.selector,
        Blue100Not1sttr = proSelectors.elements.Blue100Not1sttr.selector,
        Blue100tableth = proSelectors.elements.Blue100tableth.selector,
        Blue100Not1LastTD = proSelectors.elements.Blue100Not1LastTD.selector,
        Blue100FirstTD = proSelectors.elements.Blue100FirstTD.selector,
        Blue100LastTD = proSelectors.elements.Blue100LastTD.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',Blue100RTEh3,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100RTEh3('lg');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>h3','lg');
                    client.source(() => {
                      console.log("1. Blue100RTEh3 found and got executed"); 
                    });
                    properties = productdetails_props.Blue100RTEPara('lg');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>p','lg');
                    client.source(() => {
                      console.log("2. Blue100RTEPara found and got executed"); 
                    });
                    properties = productdetails_props.Blue100RTEvarText('lg');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>p .white-band__variable-fig','lg');
                    client.source(() => {
                      console.log("3. Blue100RTEvarText found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100table,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100table('lg');
                    callback.multiloop(client, Blue100table, properties,'lg');
                    client.source(() => {
                      console.log("4. Blue100table found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tabBody,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tabBody('lg');
                    callback.multiloop(client, Blue100tabBody, properties,'lg');
                    client.source(() => {
                      console.log("5. Blue100tabBody found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tab1sttr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tab1sttr('lg');
                    callback.multiloop(client, Blue100tab1sttr, properties,'lg');
                    client.source(() => {
                      console.log("6. Blue100tab1sttr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100Not1sttr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100Not1sttr('lg');
                    callback.multiloop(client, Blue100Not1sttr, properties,'lg');
                    client.source(() => {
                      console.log("7. Blue100Not1sttr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tableth,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tableth('lg');
                    callback.multiloop(client, Blue100tableth, properties,'lg');
                    client.source(() => {
                      console.log("8. Blue100tableth found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100Not1LastTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100Not1LastTD('lg');
                    callback.multiloop(client, Blue100Not1LastTD, properties,'lg');
                    client.source(() => {
                      console.log("9. Blue100Not1LastTD found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',Blue100FirstTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100FirstTD('lg');
                    callback.multiloop(client, Blue100FirstTD, properties,'lg');
                    client.source(() => {
                      console.log("10. Blue100FirstTD found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100LastTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100LastTD('lg');
                    callback.multiloop(client, Blue100LastTD, properties,'lg');
                    client.source(() => {
                      console.log("11. Blue100LastTD found and got executed"); 
                    });
                }
            }); 
        }
    },
    "19.100% Heavy Band(HB) RTE Props on Light Blue Background": function(client) {
        LytBlue100HBinnpadd = proSelectors.elements.LytBlue100HBinnpadd.selector,
        LytBlue100HBTabl = proSelectors.elements.LytBlue100HBTabl.selector,
        LytBlue100HBTablRow1 = proSelectors.elements.LytBlue100HBTablRow1.selector,
        LytBlue100HBTablTH = proSelectors.elements.LytBlue100HBTablTH.selector,
        LytBlue100HBTablTH1st = proSelectors.elements.LytBlue100HBTablTH1st.selector,
        LytBlue100HBTablTHLast = proSelectors.elements.LytBlue100HBTablTHLast.selector,
        LytBlue100HBTablTHH2 = proSelectors.elements.LytBlue100HBTablTHH2.selector,
        LytBlue100HBTablEvenTr = proSelectors.elements.LytBlue100HBTablEvenTr.selector,
        LytBlue100HBEvenTd = proSelectors.elements.LytBlue100HBEvenTd.selector,
        LytBlue100HBEven1st = proSelectors.elements.LytBlue100HBEven1st.selector,
        LytBlue100HBEvenLast = proSelectors.elements.LytBlue100HBEvenLast.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',LytBlue100HBinnpadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBinnpadd('lg');
                    callback.multiloop(client, LytBlue100HBinnpadd, properties,'lg');
                    client.source(() => {
                      console.log("1. LytBlue100HBinnpadd found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue100HBH3('lg');
                    rteCallback.rteElem(client, LytBlue100HBinnpadd, properties,'>h3','lg');
                    client.source(() => {
                      console.log("2. LytBlue100HBH3 found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue100HBPara('lg');
                    rteCallback.rteElem(client, LytBlue100HBinnpadd, properties,'>p','lg');
                    client.source(() => {
                      console.log("3. LytBlue100HBPara found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue100HBTabl,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTabl('lg');
                    callback.multiloop(client, LytBlue100HBTabl, properties,'lg');
                    client.source(() => {
                      console.log("4. LytBlue100HBTabl found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablRow1,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablRow1('lg');
                    callback.multiloop(client, LytBlue100HBTablRow1, properties,'lg');
                    client.source(() => {
                      console.log("5. LytBlue100HBTablRow1 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTH,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTH('lg');
                    callback.multiloop(client, LytBlue100HBTablTH, properties,'lg');
                    client.source(() => {
                      console.log("6. LytBlue100HBTablTH found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTH1st,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTH1st('lg');
                    callback.multiloop(client, LytBlue100HBTablTH1st, properties,'lg');
                    client.source(() => {
                      console.log("7. LytBlue100HBTablTH1st found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTHLast,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTHLast('lg');
                    callback.multiloop(client, LytBlue100HBTablTHLast, properties,'lg');
                    client.source(() => {
                      console.log("8. LytBlue100HBTablTHLast found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTHH2,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTHH2('lg');
                    callback.multiloop(client, LytBlue100HBTablTHH2, properties,'lg');
                    client.source(() => {
                      console.log("9. LytBlue100HBTablTHH2 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablEvenTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablEvenTr('lg');
                    callback.multiloop(client, LytBlue100HBTablEvenTr, properties,'lg');
                    client.source(() => {
                      console.log("10. LytBlue100HBTablEvenTr found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEvenTd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEvenTd('lg');
                    callback.multiloop(client, LytBlue100HBEvenTd, properties,'lg');
                    client.source(() => {
                      console.log("11. LytBlue100HBEvenTd found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEven1st,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEven1st('lg');
                    callback.multiloop(client, LytBlue100HBEven1st, properties,'lg');
                    client.source(() => {
                      console.log("12. LytBlue100HBEven1st found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEvenLast,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEvenLast('lg');
                    callback.multiloop(client, LytBlue100HBEvenLast, properties,'lg');
                    client.source(() => {
                      console.log("13. LytBlue100HBEvenLast found and got executed"); 
                    });
                }
            }); 
        }
    },
    "20.100% White Band(HB) RTE Props on Light Blue Background": function(client) {
        LytBlue100WBTabl = proSelectors.elements.LytBlue100WBTabl.selector,
        LytBlue100WBTabl1stTr = proSelectors.elements.LytBlue100WBTabl1stTr.selector,
        LytBlue100WBTablTh = proSelectors.elements.LytBlue100WBTablTh.selector,
        LytBlue100WBEvenTr = proSelectors.elements.LytBlue100WBEvenTr.selector,
        LytBlue100WBEvenTrTh = proSelectors.elements.LytBlue100WBEvenTrTh.selector,
        LytBlue100WBTablTd = proSelectors.elements.LytBlue100WBTablTd.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',LytBlue100WBTabl,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTabl('lg');
                    callback.multiloop(client, LytBlue100WBTabl, properties,'lg');
                    client.source(() => {
                      console.log("1. LytBlue100WBTabl found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTabl1stTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTabl1stTr('lg');
                    callback.multiloop(client, LytBlue100WBTabl1stTr, properties,'lg');
                    client.source(() => {
                      console.log("2. LytBlue100WBTabl1stTr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTablTh,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTablTh('lg');
                    callback.multiloop(client, LytBlue100WBTablTh, properties,'lg');
                    client.source(() => {
                      console.log("3. LytBlue100WBTablTh found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBEvenTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBEvenTr('lg');
                    callback.multiloop(client, LytBlue100WBEvenTr, properties,'lg');
                    client.source(() => {
                      console.log("4. LytBlue100WBEvenTr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBEvenTrTh,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBEvenTrTh('lg');
                    callback.multiloop(client, LytBlue100WBEvenTrTh, properties,'lg');
                    client.source(() => {
                      console.log("5. LytBlue100WBEvenTrTh found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTablTd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTablTd('lg');
                    callback.multiloop(client, LytBlue100WBTablTd, properties,'lg');
                    client.source(() => {
                      console.log("6. LytBlue100WBTablTd found and got executed"); 
                    });
                }
            });
        }
    },
    "21.Two-Third RTE props for the Product Details Shelf": function(client) {
        RTE23rdTitle=proSelectors.elements.RTE23rdTitle.selector,
		tab13rd1stRowTD=proSelectors.elements.tab13rd1stRowTD.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',RTE23rdTitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.RTE23rdTitle('lg');
                    rteCallback.rteElem(client, RTE23rdTitle, properties,'.icon--pd__title','lg');
                    client.source(() => {
                      console.log("1.RTE23rdTitle found and got executed"); 
                    });
                    properties = productdetails_props.RTE23rdTitPadd('lg');
                    rteCallback.rteElem(client, RTE23rdTitle, properties,'>p:not(:first-of-type)','lg');
                    client.source(() => {
                      console.log("2.RTE23rdTitPadd found and got executed"); 
                    });
                    properties = productdetails_props.RTE23rdULPadd('lg');
                    rteCallback.rteElem(client, RTE23rdTitle, properties,'>ul:first-child','lg');
                    client.source(() => {
                      console.log("3.RTE23rdULPadd found and got executed"); 
                    });
                    properties = productdetails_props.RTE23rdLiProps('lg');
                    rteCallback.rteElem(client, RTE23rdTitle, properties,'>ul li','lg');
                    client.source(() => {
                      console.log("4.RTE23rdLiProps found and got executed"); 
                    });
                }
            });
            client.elements('css selector',tab13rd1stRowTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.tab13rd1stRowTD('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table tr:first-child td','lg');
                    client.source(() => {
                      console.log("7.tab13rd1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.Not13rd1stRowTD('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table tr:not(:nth-child(1)) td','lg');
                    client.source(() => {
                      console.log("8.Not13rd1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.table13rdTDFir('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table tr td:first-child','lg');
                    client.source(() => {
                      console.log("10.table13rdTDFir found and got executed"); 
                    });
                    properties = productdetails_props.table13rdTDLas('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table tr td:last-child','lg');
                    client.source(() => {
                      console.log("11.table13rdTDLas found and got executed"); 
                    });
                    properties = productdetails_props.P13rdBeltabPadd('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table+p','lg');
                    client.source(() => {
                      console.log("12.P13rdBeltabPadd found and got executed"); 
                    });
                    properties = productdetails_props.P13rdBeltabText('lg');
                    rteCallback.rteElem(client, tab13rd1stRowTD, properties,'table+p strong','lg');
                    client.source(() => {
                      console.log("13.P13rdBeltabText found and got executed"); 
                    });
                }
            });           
        }
    },
    'Closing the Browser': function(client) {
        client.pause(1000);
        client.end();
    }
}