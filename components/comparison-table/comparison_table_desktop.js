var pageurl = require('../../pageurls.js'),
    pageObj,comp_props,callback,size,brand;    

function globalProps(client){
    pageObj = client.page.comparison_table_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
    rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    comp_props = require('./comparison_table_props.js')(client);
}    

module.exports = {
    '@tags': ['desktop', 'comparison-table', 'comparison-table-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_PER_COMPARISON);
            console.log("--Desktop--"+pageurl.NW_PER_COMPARISON); 
    },
    //    "Set class to component": function(client) {
    //     productTableTable = pageObj.elements.productTableTable.selector,
    //     globalProps(client);
    //     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
    //         client.elements('css selector',productTableTable,results=>{
    //             if(results.value.length>0) { 
    //               client.pause(5000);
    //               client.execute("document.getElementsByClassName('heavy-band')[0].setAttribute('class', 'light-band')")
    //               // client.execute("document.getElementsByClassName('light-band')[0].setAttribute('class', 'heavy-band')")
    //               client.pause(1000);
    //             }
    //         });
    //     }      
    // },
     "1 Check for Comparison table Level-1 properties": function(client) {
            productTable = pageObj.elements.productTable.selector,
            globalProps(client);
            callback.scrollToElement(client,productTable); 

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',productTable,results=>{
            if(results.value.length>0) { 
            //Product table margin and font-family
            Properties = comp_props.comparisonTableProps('lg');  
            callback.singleElem(client,productTable, Properties, 'lg');
         
            }
        });
        }      
    },
    

    "2. Check for comparison table body properties-table header": function(client){
            tableTh = pageObj.elements.tableTh.selector,
            tableThPadding = pageObj.elements.tableThPadding.selector,
            tableThFirstChild = pageObj.elements.tableThFirstChild.selector,
            tableThLastChild = pageObj.elements.tableThLastChild.selector,
            tableHeadingRichText = pageObj.elements.tableHeadingRichText.selector,
            lombardHeavyBrdrBtm = pageObj.elements.lombardHeavyBrdrBtm.selector,
            lombardLightBrdrBtm = pageObj.elements.lombardLightBrdrBtm.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',tableTh,results=>{
            if(results.value.length>0) { 

            //table border-bottom property
            
            if(brand.props.$brandName=="lombard"){
               client.elements('css selector',lombardHeavyBrdrBtm,results=>{
                 if(results.value.length>0) { 
                    client.expect.element(lombardHeavyBrdrBtm).to.have.css('border-bottom-color').which.contains(brand.props.$heavybrdrBtm);
                    }
                });
                    client.elements('css selector',lombardLightBrdrBtm,results=>{
                  if(results.value.length>0){
                    client.expect.element(lombardLightBrdrBtm).to.have.css('border-bottom-color').which.contains(brand.props.$lightbrdrBtm);
                    }

                });
            }

            else{
             Properties = comp_props.TableHeaderProps('lg');  
            callback.multiloop(client,tableTh, Properties, 'lg');
        }

            //table header padding property
            console.log(tableThPadding);
             Properties = comp_props.TableHeaderPaddingProps('lg');  
            callback.multiloop(client,tableThPadding, Properties, 'lg');
        
            //table header first-child padding
             Properties = comp_props.comparisonTableHeaderFirstProps('lg');  
            callback.singleElem(client,tableThFirstChild, Properties, 'lg');

            //table header last-child padding
             Properties = comp_props.comparisonTableHeaderLastProps('lg');  
            callback.singleElem(client,tableThLastChild, Properties, 'lg');  

            //light-band table heading rte properties 
             Properties = comp_props.TableHeaderRteProps('lg');  
            callback.multiloop(client,tableHeadingRichText, Properties, 'lg'); 


            }
        });
        } 

    },

    

    "3.Check for Light-band Dark-theme properties": function(client){
       lightBandDarkTheme = pageObj.elements.lightBandDarkTheme.selector,
       lightBandDarkThemeRte = pageObj.elements.lightBandDarkThemeRte.selector

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',lightBandDarkTheme,results=>{
            if(results.value.length>0) {

          //table header background color,border bottom
            Properties = comp_props.LightBandDarkTheme('lg');  
            callback.multiloop(client,lightBandDarkTheme, Properties, 'lg');

          //table header rte text
            Properties = comp_props.LightBandDarkThemeRte('lg');  
            callback.multiloop(client,lightBandDarkThemeRte, Properties, 'lg');

    }
});
    }
},
  "4.Check for Light-band No theme properties": function(client){
       lightBandNothemeTh = pageObj.elements.lightBandNothemeTh.selector,
       lightBandNothemeRte = pageObj.elements.lightBandNothemeRte.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',lightBandNothemeTh,results=>{
            if(results.value.length>0) {

          //table header background color
            Properties = comp_props.lightBandNothemeTh('lg');  
            callback.multiloop(client,lightBandNothemeTh, Properties, 'lg');

             //table header background color
            Properties = comp_props.lightBandNothemeRte('lg');  
            callback.multiloop(client,lightBandNothemeRte, Properties, 'lg');

    }
});
    }
},
 "5.Check for heavy-band dark-theme properties": function(client){
       heavyBandDarkTheme = pageObj.elements.heavyBandDarkTheme.selector,
       heavyBandDarkThemeRte = pageObj.elements.heavyBandDarkThemeRte.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',heavyBandDarkTheme,results=>{
            if(results.value.length>0) {

          //table header background color
            Properties = comp_props.heavyBandDarkTheme('lg');  
            callback.multiloop(client,heavyBandDarkTheme, Properties, 'lg');

            //table header rte color
              Properties = comp_props.heavyBandDarkThemeRte('lg');  
            callback.multiloop(client,heavyBandDarkThemeRte, Properties, 'lg');

    }
});
    }
},
 "6.Check for heavy-band No theme properties": function(client){
        heavyBandNothemeTh = pageObj.elements.heavyBandNothemeTh.selector,
        heavyBandNothemeRte = pageObj.elements.heavyBandNothemeRte.selector,

        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',heavyBandNothemeTh,results=>{
            if(results.value.length>0) {

            //heavy band no theme table head bg color
              Properties = comp_props.heavyBandNothemeTh('lg');  
            callback.multiloop(client,heavyBandNothemeTh, Properties, 'lg')

            //heavy band no theme table head rte color
              Properties = comp_props.heavyBandNothemeRte('lg');  
            callback.multiloop(client,heavyBandNothemeRte, Properties, 'lg');

    }
});
    }
},





    "7. Check for comparison table body properties-table data": function(client){
          tableTr= pageObj.elements.tableTr.selector,
          heavyBandRowEven = pageObj.elements. heavyBandRowEven.selector,
          heavyBandRowOdd= pageObj.elements.heavyBandRowOdd.selector,
          lightBandRowEven = pageObj.elements.lightBandRowEven.selector,
          lightBandRowOdd = pageObj.elements.lightBandRowOdd.selector,
          tableTd = pageObj.elements.tableTd.selector,
         tableTdFirstChild =pageObj.elements.tableTdFirstChild.selector,
         tableTdLastChild = pageObj.elements.tableTdLastChild.selector,
         WhiteBandVariable =pageObj.elements.WhiteBandVariable.selector
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',tableTr,results=>{
            if(results.value.length>0) { 
            
            //heavy band table row even bg color
            Properties = comp_props.heavyBandRowEvenProps('lg');  
            callback.multiloop(client,heavyBandRowEven, Properties, 'lg');

            //heavy band table row odd bg color

            Properties = comp_props.heavyBandRowOddProps('lg');  
            callback.multiloop(client,heavyBandRowOdd, Properties, 'lg');

            //light band table row even bg Color

            Properties = comp_props.lightBandRowEvenProps('lg');  
            callback.multiloop(client,lightBandRowEven, Properties, 'lg');

            //light band table row odd bg color
            Properties = comp_props.lightBandRowOddProps('lg');  
            callback.multiloop(client,lightBandRowOdd, Properties, 'lg');

            //table data padding

            Properties = comp_props.tableDataProps('lg');  
            callback.multiloop(client,tableTd, Properties, 'lg');

            //table data first child width,padding

            Properties = comp_props.tableDataFirstChild('lg');  
            callback.multiloop(client,tableTdFirstChild, Properties, 'lg');

            //table data last child padding

             Properties = comp_props.tableDataLastChild('lg');  
            callback.multiloop(client,tableTdLastChild, Properties, 'lg');

            //table data text properties(whiteBandVariable)
            Properties = comp_props.WhiteBandTxtProps('lg');  
            callback.multiloop(client,WhiteBandVariable, Properties, 'lg');





}

});

    }
},
"8. Check for comparison table body properties-table data List": function(client){
            productTable = pageObj.elements.productTable.selector,
            tableCellListLi = pageObj.elements.tableCellListLi.selector,
            tableCellListUl = pageObj.elements.tableCellListUl.selector,
            heavyListUlBodyCopy = pageObj.elements.heavyListUlBodyCopy.selector,
            lightListUlBodyCopy = pageObj.elements.lightListUlBodyCopy.selector,
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',tableCellListUl,results=>{
            if(results.value.length>0) { 
            //table List Properties Ul: not body copy
            Properties = comp_props.tableDataListPropsUl('lg');  
            callback.multiloop(client,tableCellListUl, Properties, 'lg');

            //table List Properties ul body copy heavyBand
               Properties = comp_props.HeavyListUlBodyCopy('lg');  
             callback.multiloop(client,heavyListUlBodyCopy, Properties, 'lg');

             //table List Properties ul body copy lightBand
               Properties = comp_props.LightListUlBodyCopy('lg');  
             callback.multiloop(client,lightListUlBodyCopy, Properties, 'lg');

            //table list properties Li using rte 
             properties = comp_props.tableDataListPropsLi('lg');  
             rteCallback.rteElem(client, productTable, properties,'ul li', 'lg');

             //table list Li background-image
            client.elements('css selector', tableCellListLi, test)
             function test(elems){
            elems.value.forEach(function(element,index) {
            client.moveTo(element.ELEMENT,2,2)
            .pause(4000);
             client.expect.element(tableCellListLi).to.have.css('background-image').which.contains('list-blue.png');  

         
            });
           }

            
        }
        
        });
        } 

    },
"9. Check for icon-info properties": function(client){
    tableCellInfoIcon = pageObj.elements.tableCellInfoIcon.selector,
    tableCellInfoIconLink = pageObj.elements.tableCellInfoIconLink.selector
       globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',tableCellInfoIcon,results=>{
            if(results.value.length>0) { 

            //IconInfo properties
             Properties = comp_props.tableDataIconInfoProps('lg');  
             callback.multiloop(client,tableCellInfoIcon, Properties, 'lg');

             // icon info link property
               Properties = comp_props.IconInfoLinkProps('lg');  
             callback.multiloop(client,tableCellInfoIconLink, Properties, 'lg');



        }
        
        });
        }

      },

"10. Check for icon-info focus properties": function(client){
    //tableCellInfoIconLink = pageObj.elements.tableCellInfoIconLink.selector,
    tableCellInfoIconLinkActive = pageObj.elements.tableCellInfoIconLinkActive.selector,
    tableCellInfoIcon= pageObj.elements.tableCellInfoIcon.selector,
    infoIconToolTipArrow = pageObj.elements.infoIconToolTipArrow.selector,
    infoIconToolTip = pageObj.elements.infoIconToolTip.selector
       globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            
        client.elements('css selector',tableCellInfoIcon,results=>{
            if(results.value.length>0) { 

            //IconInfo click
            console.log(tableCellInfoIcon);
             client.waitForElementVisible(tableCellInfoIcon, 6000);
            client.moveToElement(tableCellInfoIcon, 6, 6);
            client.mouseButtonDown(0);
             client.pause(30000);

             //info icon tool tip element visible
             client.waitForElementVisible(infoIconToolTipArrow, 1, 1);
            client.waitForElementVisible(infoIconToolTip, 1, 1);

             // info icon focus outline property
             Properties = comp_props.InfoIconFocusProps('lg');  
             callback.multiloop(client,tableCellInfoIconLinkActive, Properties, 'lg');

            


             //info icon hover tool tip properties
             Properties = comp_props.ToolTipProps('lg');  
             callback.multiloop(client,infoIconToolTip, Properties, 'lg');

        
    }
        
        });
        }

      },



    'Ending the session': function(client){
      client.pause(1000);
      client.end();
    }
};