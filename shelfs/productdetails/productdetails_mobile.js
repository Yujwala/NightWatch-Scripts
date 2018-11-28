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
    '@tags': ['productdetails-mobile', 'productdetails','desktop'],
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },
    //Opening the URL
    "Opening the Mobile URL": function(client) {
        globalProps(client);    
        callback.openURL(client, pageurl.RBS_BUS_PRODUCTDETAILS_MOB);
        console.log("--Mobile--"+pageurl.RBS_BUS_PRODUCTDETAILS_MOB);
    },
    
    "1.prodClrBgClrPadd": function(client) {
        shelfPadding = proSelectors.elements.prodClrBgClrPadd.selector,
        callback.scrollToElement(client, shelfPadding);
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.prodClrBgClrPadd('xs');
                    callback.multiloop(client, shelfPadding, properties,'xs');
                }
            });
        }
    },
    "2.prodInnerPadd": function(client) {
        shelfPadding = proSelectors.elements.prodInnerPadd.selector,
        globalProps(client);
            
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){   
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {    
                    properties = productdetails_props.prodInnerPadd('xs');
                    callback.multiloop(client, shelfPadding, properties,'xs');
                }
            });             
        }
    },
    "3.proRig23rdsTitlMob": function(client) {
        shelfPadding = proSelectors.elements.proRig23rdsTitlMob.selector,
        globalProps(client);
            
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {   
                    properties = productdetails_props.proRig23rdsTitlMob('xs');
                    callback.multiloop(client, shelfPadding, properties,'xs');
                }
            });
        }
    },   
    "4.imgmobileSel": function(client) {
        shelfPadding = proSelectors.elements.imgmobileSel.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){ 
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {                   
                    properties = productdetails_props.imgmobileSel('xs');
                    callback.multiloop(client, shelfPadding, properties,'xs');
                }
            });
        }
    },   
    "5.righttextContMob": function(client) {
        shelfPadding = proSelectors.elements.righttextContMob.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){ 
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {                    
                    properties = productdetails_props.righttextContMob('xs');
                    callback.multiloop(client, shelfPadding, properties,'xs');
                }
            });
        }
    },  
    "6.rightRTEmob": function(client) {
        shelfPadding = proSelectors.elements.rightRTEmob.selector,
        globalProps(client);                
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){    
            client.elements('css selector',shelfPadding,results=>{
                if(results.value.length>0) {               
                    properties = productdetails_props.rightRTEmob('xs');
                    rteCallback.rteElem(client, shelfPadding, properties,'','xs');
                    properties = productdetails_props.rightRTEmobPara('xs');
                    rteCallback.rteElem(client, shelfPadding, properties,'p','xs');
                }
            });
        }
    },
    //Mobile Selectors for grid
    "8. All grid properties for mobile device": function(client) {
        gridSelBelowProdMob = proSelectors.elements.gridSelBelowProdMob.selector,
        gridInnerPaddings = proSelectors.elements.gridInnerPaddings.selector,
        lightBlueBgGrid = proSelectors.elements.lightBlueBgGrid.selector,
        BlueBgGrid = proSelectors.elements.BlueBgGrid.selector,
        whiteBgGrid = proSelectors.elements.whiteBgGrid.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',gridSelBelowProdMob,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.gridSelBelowProd('xs');
                    callback.multiloop(client, gridSelBelowProdMob, properties,'xs');
                    client.source(() => {
                      console.log("1. gridSelBelowProdMob found and got executed"); 
                    });
                }
            });
            client.elements('css selector',gridInnerPaddings,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.gridInnerPaddings('xs');
                    callback.multiloop(client, gridInnerPaddings, properties,'xs');
                    client.source(() => {
                      console.log("2. gridInnerPaddings found and got executed"); 
                    });
                }
            });
            client.elements('css selector',lightBlueBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.lightBlueBgGrid('xs');
                    callback.multiloop(client, lightBlueBgGrid, properties,'xs');
                    client.source(() => {
                      console.log("3. lightBlueBgGrid found and got executed"); 
                    });
                }
            });
            client.elements('css selector',BlueBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueBgGrid('xs');
                    callback.multiloop(client, BlueBgGrid, properties,'xs');
                    client.source(() => {
                      console.log("4. BlueBgGrid found and got executed"); 
                    });
                }
            });
            client.elements('css selector',whiteBgGrid,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.whiteBgGrid('xs');
                    callback.multiloop(client, whiteBgGrid, properties,'xs');
                    client.source(() => {
                      console.log("5. whiteBgGrid found and got executed"); 
                    });
                }
            });
        }
    },
    "9. White two thirds For Mobile": function(client) {
        White23rdRTETitle = proSelectors.elements.White23rdRTETitle.selector,
        Whit13rdtable = proSelectors.elements.Whit13rdtable.selector,
        WhitBlockQuoteText = proSelectors.elements.WhitBlockQuoteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',White23rdRTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.White23rdRTETitle('xs');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'.icon--pd__title','xs');
                    client.source(() => {
                      console.log("1.White23rdRTETitle found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTETitPadd('xs');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>p','xs');
                    client.source(() => {
                      console.log("2.Whit23rdRTETitPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTEULPadd('xs');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>ul','xs');
                    client.source(() => {
                      console.log("3.Whit23rdRTEULPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit23rdRTELiProps('xs');
                    rteCallback.rteElem(client, White23rdRTETitle, properties,'>ul li','xs');
                    client.source(() => {
                      console.log("4.Whit23rdRTELiProps found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Whit13rdtable,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Whit13rdtable('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table','xs');
                    client.source(() => {
                      console.log("5.Whit13rdtable found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtab1stRow('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:first-child','xs');
                    client.source(() => {
                      console.log("6.Whit13rdtab1stRow found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtab1stRowTD('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:first-child td','xs');
                    client.source(() => {
                      console.log("7.Whit13rdtab1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdNot1stRowTD('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'tr:not(:nth-child(1)) td','xs');
                    client.source(() => {
                      console.log("8.Whit13rdNot1stRowTD found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtabEveRow('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr:nth-child(even)','xs');
                    client.source(() => {
                      console.log("9.Whit13rdtabEveRow found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtableTDFir('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr td:first-child','xs');
                    client.source(() => {
                      console.log("10.Whit13rdtableTDFir found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdtableTDLas('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table tr td:last-child','xs');
                    client.source(() => {
                      console.log("11.Whit13rdtableTDLas found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdPBeltabPadd('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table+p','xs');
                    client.source(() => {
                      console.log("12.Whit13rdPBeltabPadd found and got executed"); 
                    });
                    properties = productdetails_props.Whit13rdPBeltabText('xs');
                    rteCallback.rteElem(client, Whit13rdtable, properties,'table+p strong','xs');
                    client.source(() => {
                      console.log("13.Whit13rdPBeltabText found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',WhitBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.WhitBlockQuoteText('xs');
                    rteCallback.rteElem(client, WhitBlockQuoteText, properties,'.comp-rich-text blockquote span','xs');
                    client.source(() => {
                      console.log("14.WhitBlockQuoteText found and got executed"); 
                    });
                }
            });          
        }
    },
    "10. Blue two thirds For Mobile": function(client) {
        BlueRTETitle = proSelectors.elements.BlueRTETitle.selector,
        BlueRTETitPadd = proSelectors.elements.BlueRTETitPadd.selector,
        BlueRTE13rdTitPadd = proSelectors.elements.BlueRTE13rdTitPadd.selector,
        BlueBlockQuoteText = proSelectors.elements.BlueBlockQuoteText.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',BlueRTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTETitle('xs');
                    rteCallback.rteElem(client, BlueRTETitle, properties,'>p .icon--pd__title','xs');
                    client.source(() => {
                      console.log("1. BlueRTETitle found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',BlueRTETitPadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTETitPadd('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>p','xs');
                    client.source(() => {
                      console.log("2. BlueRTETitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEH3TitPadd('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>h3','xs');
                    client.source(() => {
                      console.log("3. BlueRTEH3TitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEH3Title('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'>h3 strong','xs');
                    client.source(() => {
                      console.log("4.BlueRTEH3Title found and executed"); 
                    });
                    properties = productdetails_props.BlueAeroIcon('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'~.bl__icon-airplane','xs');
                    client.source(() => {
                      console.log("5.BlueAeroIcon found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextCont('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text','xs');
                    client.source(() => {
                      console.log("6.BlueRTEAeroTextCont found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextTit('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text .benefits-list','xs');
                    client.source(() => {
                      console.log("7.BlueRTEAeroTextTit found and executed"); 
                    });
                    properties = productdetails_props.BlueRTEAeroTextPara('xs');
                    rteCallback.rteElem(client, BlueRTETitPadd, properties,'+.bl__icon-airplane~.bl__text .comp-rich-text p','xs');
                    client.source(() => {
                      console.log("8.BlueRTEAeroTextPara found and executed"); 
                    });
                }
            });  
            client.elements('css selector',BlueRTE13rdTitPadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueRTE13rdTitPadd('xs');
                    rteCallback.rteElem(client, BlueRTE13rdTitPadd, properties,'h4','xs');
                    client.source(() => {
                      console.log("9.BlueRTE13rdTitPadd found and executed"); 
                    });
                    properties = productdetails_props.BlueRTE13rdTitle('xs');
                    rteCallback.rteElem(client, BlueRTE13rdTitPadd, properties,'h4 strong','xs');
                    client.source(() => {
                      console.log("10.BlueRTE13rdTitPadd found and executed"); 
                    });
                }
            });     
            client.elements('css selector',BlueBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.BlueBlockQuoteText('xs');
                    rteCallback.rteElem(client, BlueBlockQuoteText, properties,'blockquote span','xs');
                    client.source(() => {
                      console.log("11.BlueBlockQuoteText found and executed"); 
                    });
                }
            });       
        }
    },
    "11. Blue 100% Grid For Mobile": function(client) {
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
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',Blue100RTEh3,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100RTEh3('xs');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>h3','xs');
                    client.source(() => {
                      console.log("1. Blue100RTEh3 found and got executed"); 
                    });
                    properties = productdetails_props.Blue100RTEPara('xs');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>p','xs');
                    client.source(() => {
                      console.log("2. Blue100RTEPara found and got executed"); 
                    });
                    properties = productdetails_props.Blue100RTEvarText('xs');
                    rteCallback.rteElem(client, Blue100RTEh3, properties,'>p .white-band__variable-fig','xs');
                    client.source(() => {
                      console.log("3. Blue100RTEvarText found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100table,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100table('xs');
                    callback.multiloop(client, Blue100table, properties,'xs');
                    client.source(() => {
                      console.log("4. Blue100table found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tabBody,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tabBody('xs');
                    callback.multiloop(client, Blue100tabBody, properties,'xs');
                    client.source(() => {
                      console.log("5. Blue100tabBody found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tab1sttr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tab1sttr('xs');
                    callback.multiloop(client, Blue100tab1sttr, properties,'xs');
                    client.source(() => {
                      console.log("6. Blue100tab1sttr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100Not1sttr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100Not1sttr('xs');
                    callback.multiloop(client, Blue100Not1sttr, properties,'xs');
                    client.source(() => {
                      console.log("7. Blue100Not1sttr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100tableth,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100tableth('xs');
                    callback.multiloop(client, Blue100tableth, properties,'xs');
                    client.source(() => {
                      console.log("8. Blue100tableth found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100Not1LastTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100Not1LastTD('xs');
                    callback.multiloop(client, Blue100Not1LastTD, properties,'xs');
                    client.source(() => {
                      console.log("9. Blue100Not1LastTD found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',Blue100FirstTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100FirstTD('xs');
                    callback.multiloop(client, Blue100FirstTD, properties,'xs');
                    client.source(() => {
                      console.log("10. Blue100FirstTD found and got executed"); 
                    });
                }
            });
            client.elements('css selector',Blue100LastTD,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.Blue100LastTD('xs');
                    callback.multiloop(client, Blue100LastTD, properties,'xs');
                    client.source(() => {
                      console.log("11. Blue100LastTD found and got executed"); 
                    });
                }
            }); 
        }
    },
    "12. Light Blue RTE 50% Grid For Mobile": function(client) {
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
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',LytBlue50RTETitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RTETitle('xs');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'p .icon--pd__title','xs');
                    client.source(() => {
                      console.log("1. LytBlue50RTETitle found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTETitpadd('xs');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>p','xs');
                    client.source(() => {
                      console.log("2. LytBlue50RTETitpadd found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTEh3Text('xs');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>h3 strong','xs');
                    client.source(() => {
                      console.log("3. LytBlue50RTEh3Text found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue50RTEh3Padd('xs');
                    rteCallback.rteElem(client, LytBlue50RTETitle, properties,'>h3','xs');
                    client.source(() => {
                      console.log("4. LytBlue50RTEh3Padd found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue50AeroIcon,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50AeroIcon('xs');
                    callback.multiloop(client, LytBlue50AeroIcon, properties,'xs');
                    client.source(() => {
                      console.log("5. LytBlue50AeroIcon found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLTitle,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLTitle('xs');
                    callback.multiloop(client, LytBlue50BLTitle, properties,'xs');
                    client.source(() => {
                      console.log("6. LytBlue50BLTitle found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLpara,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLpara('xs');
                    callback.multiloop(client, LytBlue50BLpara, properties,'xs');
                    client.source(() => {
                      console.log("7. LytBlue50BLpara found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50BLUL,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLUL('xs');
                    callback.multiloop(client, LytBlue50BLUL, properties,'xs');
                    client.source(() => {
                      console.log("8. LytBlue50BLUL found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue50BLLi,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50BLLi('xs');
                    callback.multiloop(client, LytBlue50BLLi, properties,'xs');
                    client.source(() => {
                      console.log("9. LytBlue50BLLi found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50RytH4,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RytH4('xs');
                    callback.multiloop(client, LytBlue50RytH4, properties,'xs');
                    client.source(() => {
                      console.log("10. LytBlue50RytH4 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue50RytH4padd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue50RytH4padd('xs');
                    callback.multiloop(client, LytBlue50RytH4padd, properties,'xs');
                    client.source(() => {
                      console.log("11. LytBlue50RytH4padd found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlueBlockQuoteText,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlueBlockQuoteText('xs');
                    rteCallback.rteElem(client, LytBlueBlockQuoteText, properties,'blockquote span','xs');
                    client.source(() => {
                      console.log("12. LytBlueBlockQuoteText found and got executed"); 
                    });
                }
            });
        }
    },
    "13.Light Blue 100% Heavy Band(HB) Grid For Mobile": function(client) {     
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
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',LytBlue100HBinnpadd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBH3('xs');
                    rteCallback.rteElem(client, LytBlue100HBinnpadd, properties,'>h3','xs');
                    client.source(() => {
                      console.log("1. LytBlue100HBH3 found and got executed"); 
                    });
                    properties = productdetails_props.LytBlue100HBPara('xs');
                    rteCallback.rteElem(client, LytBlue100HBinnpadd, properties,'>p','xs');
                    client.source(() => {
                      console.log("2. LytBlue100HBPara found and got executed"); 
                    });
                }
            });  
            client.elements('css selector',LytBlue100HBTabl,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTabl('xs');
                    callback.multiloop(client, LytBlue100HBTabl, properties,'xs');
                    client.source(() => {
                      console.log("3. LytBlue100HBTabl found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablRow1,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablRow1('xs');
                    callback.multiloop(client, LytBlue100HBTablRow1, properties,'xs');
                    client.source(() => {
                      console.log("4. LytBlue100HBTablRow1 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTH,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTH('xs');
                    callback.multiloop(client, LytBlue100HBTablTH, properties,'xs');
                    client.source(() => {
                      console.log("5. LytBlue100HBTablTH found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTH1st,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTH1st('xs');
                    callback.multiloop(client, LytBlue100HBTablTH1st, properties,'xs');
                    client.source(() => {
                      console.log("6. LytBlue100HBTablTH1st found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTHLast,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTHLast('xs');
                    callback.multiloop(client, LytBlue100HBTablTHLast, properties,'xs');
                    client.source(() => {
                      console.log("7. LytBlue100HBTablTHLast found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablTHH2,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablTHH2('xs');
                    callback.multiloop(client, LytBlue100HBTablTHH2, properties,'xs');
                    client.source(() => {
                      console.log("8. LytBlue100HBTablTHH2 found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBTablEvenTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBTablEvenTr('xs');
                    callback.multiloop(client, LytBlue100HBTablEvenTr, properties,'xs');
                    client.source(() => {
                      console.log("9. LytBlue100HBTablEvenTr found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEvenTd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEvenTd('xs');
                    callback.multiloop(client, LytBlue100HBEvenTd, properties,'xs');
                    client.source(() => {
                      console.log("10. LytBlue100HBEvenTd found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEven1st,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEven1st('xs');
                    callback.multiloop(client, LytBlue100HBEven1st, properties,'xs');
                    client.source(() => {
                      console.log("11. LytBlue100HBEven1st found and got executed"); 
                    });
                }
            }); 
            client.elements('css selector',LytBlue100HBEvenLast,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100HBEvenLast('xs');
                    callback.multiloop(client, LytBlue100HBEvenLast, properties,'xs');
                    client.source(() => {
                      console.log("12. LytBlue100HBEvenLast found and got executed"); 
                    });
                }
            }); 
        }
    },
    "14.Light Blue 100% White Band Table  Grid For Mobile": function(client) {
        LytBlue100WBTabl= proSelectors.elements.LytBlue100WBTabl.selector,
        LytBlue100WBTabl1stTr= proSelectors.elements.LytBlue100WBTabl1stTr.selector,
        LytBlue100WBTablTh= proSelectors.elements.LytBlue100WBTablTh.selector,
        LytBlue100WBEvenTr= proSelectors.elements.LytBlue100WBEvenTr.selector,
        LytBlue100WBEvenTrTh= proSelectors.elements.LytBlue100WBEvenTrTh.selector,
        LytBlue100WBTablTd= proSelectors.elements.LytBlue100WBTablTd.selector,
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.elements('css selector',LytBlue100WBTabl,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTabl('xs');
                    callback.multiloop(client, LytBlue100WBTabl, properties,'xs');
                    client.source(() => {
                      console.log("1. LytBlue100WBTabl found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTabl1stTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTabl1stTr('xs');
                    callback.multiloop(client, LytBlue100WBTabl1stTr, properties,'xs');
                    client.source(() => {
                      console.log("2. LytBlue100WBTabl1stTr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTablTh,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTablTh('xs');
                    callback.multiloop(client, LytBlue100WBTablTh, properties,'xs');
                    client.source(() => {
                      console.log("3. LytBlue100WBTablTh found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBEvenTr,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBEvenTr('xs');
                    callback.multiloop(client, LytBlue100WBEvenTr, properties,'xs');
                    client.source(() => {
                      console.log("4. LytBlue100WBEvenTr found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBEvenTrTh,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBEvenTrTh('xs');
                    callback.multiloop(client, LytBlue100WBEvenTrTh, properties,'xs');
                    client.source(() => {
                      console.log("5. LytBlue100WBEvenTrTh found and got executed"); 
                    });
                }
            });
            client.elements('css selector',LytBlue100WBTablTd,results=>{
                if(results.value.length>0) {
                    properties = productdetails_props.LytBlue100WBTablTd('xs');
                    callback.multiloop(client, LytBlue100WBTablTd, properties,'xs');
                    client.source(() => {
                      console.log("6. /*LytBlue100WBTablTd*/ found and got executed"); 
                    });
                }
            });
        }
    },
    'Closing Browser': function(client) {
        client.pause(1000);
        client.end();
    }
}

