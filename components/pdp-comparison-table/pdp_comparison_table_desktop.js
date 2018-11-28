var comparison_table_props = require('./pdp_comparison_table_props.js'),
    pageurl = require('../../pageurls.js');
	
function globalProps(client){
    pageObj = client.page.pdp_comparison_table_selectors(),
    callback = client.page.common(),
    rteCallback = client.page.components.rte.rte(),
    size = client.globals.size.widths;
	callback.getBrand(client);
	comparison_table_props = require('./pdp_comparison_table_props.js')(client);
}

module.exports = {
  '@tags': ['pdp-comparison-table-desktop','pdp-comparison-table','desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client, pageurl.RBS_BUS_TEST_PDP_COMPARISON_TABLE);
            console.log("--Desktop--"+pageurl.RBS_BUS_TEST_PDP_COMPARISON_TABLE); 
            client.pause(2000);
    },
    "1 Check for table wrapper properties": function(client) {
      comparisonTableWrapper = pageObj.elements.comparisonTableWrapper.selector,
      callback.scrollToElement(client, comparisonTableWrapper);
      globalProps(client);
      client.elements('css selector',comparisonTableWrapper,results=>{
        if(results.value.length>0) {
          //prop of wrapper class
          properties = comparison_table_props.comparisonWrapperProp('lg');  
          callback.multiloop(client, comparisonTableWrapper , properties, 'lg');

          }
      });
     
    },
    "2 Check for cell padding and bgcolor properties": function(client) {
      comparisonCellHeader = pageObj.elements.comparisonHeaderCell.selector,
      globalProps(client);
      comparisonHeaderRow = pageObj.elements.comparisonHeaderRow.selector;
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        /*var noOfRows;
        client.elements('css selector',comparisonHeaderRow,result=>{
          result.value.forEach(element => {

          });
        });*/
      client.elements('css selector',comparisonCellHeader,results=>{
        if(results.value.length>0) {
          //padding check
          properties = comparison_table_props.comparisonHeaderProp('lg');  
          callback.multiloop(client, comparisonCellHeader , properties, 'lg');
          //Cell bg color
          for(var i=0;i<5;i++){
            properties = comparison_table_props["comparisonBgCellProp"+(i+1)]('lg'); 
            comparisonCellHeadercls=".comparison-header-cell"+":nth-child("+(i+1)+")";
            callback.multiloop(client, comparisonCellHeadercls, properties, 'lg');
      
            }

          }
      });
     
}
    },
    "3 Check for cell Border properties": function(client) {
      comparisonCellBorderRight = pageObj.elements.comparisonCellBorderRight.selector,
      globalProps(client);

      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        //Cell Border
        client.elements('css selector',comparisonCellBorderRight,results=>{
         if(results.value.length>0) {
              properties = comparison_table_props.comparisonCellBorder('lg');  
              callback.multiloop(client, comparisonCellBorderRight , properties, 'lg');
             }
           });

     }
    },
    "4 Check for cell Title properties": function(client) {
      comparisonCellHeaderTitle = pageObj.elements.comparisonHeaderCellTitle.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonCellHeaderTitle,results=>{
          if(results.value.length>0) {
          //Cell Title
          properties = comparison_table_props.comparisonCellTitleProp('lg');  
          callback.multiloop(client, comparisonCellHeaderTitle , properties, 'lg');

        }
    });
 
  }
    },
    "5 Check for cell text properties": function(client) {
      comparisonCellHeaderText1 = pageObj.elements.comparisonHeaderCellText1.selector,
      comparisonCellHeaderText2 = pageObj.elements.comparisonHeaderCellText2.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonCellHeaderText1,results=>{
        if(results.value.length>0) {
        //Cell Text
        properties = comparison_table_props.comparisonCellText1Prop('lg');
        rteCallback.rteElem(client, comparisonCellHeaderText1, properties,'p:first-child', 'lg');

        }
    });
        client.elements('css selector',comparisonCellHeaderText2,results=>{
        if(results.value.length>0) {
        //Cell Text
        properties = comparison_table_props.comparisonCellText2Prop('lg');  
        callback.multiloop(client, comparisonCellHeaderText2 , properties, 'lg');

        }
    });
 
  }
    },
    "6 Check for cell Button properties": function(client) {
      comparisonCellHeaderButton = pageObj.elements.comparisonHeaderCellButton.selector,
      comparisonHeaderCellButton2 = pageObj.elements.comparisonHeaderCellButton2.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonCellHeaderButton,results=>{
        if(results.value.length>0) {
      //Cell Button
        properties = comparison_table_props.comparisonCellButtonProp('lg');  
        callback.multiloop(client, comparisonCellHeaderButton , properties, 'lg');
        }
      });
      client.elements('css selector',comparisonHeaderCellButton2,results=>{
        if(results.value.length>0) {
      //Cell Button
        properties = comparison_table_props.comparisonCellButton2Prop('lg');  
        callback.multiloop(client, comparisonHeaderCellButton2 , properties, 'lg');
        }
      });
    }
    },
   "7 Check for button hover and focus properties": function(client) {
      comparisonCellHeaderButton = pageObj.elements.comparisonHeaderCellButton.selector,
      comparisonHeaderCellButton2 = pageObj.elements.comparisonHeaderCellButton2.selector,
      comparisonCellHeaderButtonFocus = pageObj.elements.comparisonHeaderCellButtonFocus.selector,
      comparisonCellHeaderButton2Focus = pageObj.elements.comparisonHeaderCellButton2Focus.selector,

      globalProps(client);
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.elements('css selector',comparisonCellHeaderButton,results=>{
        if(results.value.length>0) {
      //cta hover
       properties = comparison_table_props.comparisonCellButtonHoverProp('lg');
          client.moveToElement(comparisonCellHeaderButton, 10, 10);
          client.pause(1000);
        callback.singleElem(client, comparisonCellHeaderButton , properties, 'lg'); 

        //cta focus
        properties = comparison_table_props.comparisonCellButtonFocusProp('lg');
        client.moveToElement(comparisonCellHeaderButton, 10, 10);
            client.mouseButtonDown(0);
            client.pause(1000)
            callback.singleElem(client, comparisonCellHeaderButtonFocus , properties, 'lg');
            client.moveToElement('body', 30,  30);
        }
        
    });
    //type-2 button
      client.elements('css selector',comparisonHeaderCellButton2,results=>{
        if(results.value.length>0) {
      //cta hover
       properties = comparison_table_props.comparisonCellButtonHoverProp('lg');
          client.moveToElement(comparisonHeaderCellButton2, 10, 10);
          client.pause(1000);
        callback.singleElem(client, comparisonHeaderCellButton2 , properties, 'lg'); 

        //cta focus
        properties = comparison_table_props.comparisonCellButtonFocusProp('lg');
        client.moveToElement(comparisonHeaderCellButton2, 10, 10);
            client.mouseButtonDown(0);
            client.pause(1000)
            callback.singleElem(client, comparisonCellHeaderButton2Focus, properties, 'lg');
            client.moveToElement('body', 30,  30);
        }
        
    });
  
    }
   },
    "8 Check for first and last cell Radius properties": function(client) {
      comparisonCellHeader = pageObj.elements.comparisonHeaderCell.selector,
      globalProps(client);
      comparisonHeaderRow = pageObj.elements.comparisonHeaderRow.selector;
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

      var noOfRows;
      client.elements('css selector',comparisonHeaderRow,result=>{
      noOfRows=result.value.length;
      });
      client.elements('css selector',comparisonCellHeader,results=>{
        if(results.value.length>0) {
        //Border radius
        for(var i=0;i<(results.value.length/noOfRows);i++){
          if(i==0||i==((results.value.length/noOfRows)-1)){
            comparisonCellHeadercls = pageObj.elements["comparisonHeaderCell"+(i+1)].selector;
            properties = comparison_table_props["comparisonCellBorderRadius"+(i+1)]('lg'); 
            callback.multiloop(client, comparisonCellHeadercls, properties, 'lg');
          }
          else
            break;
        }
      }
      });
 
    }
    },
    "9 Check for accordion focus properties": function(client) {
      comparisonAccordionTitle = pageObj.elements.comparisonAccordionTitle.selector,
      comparisonAccordionTitleFocus = pageObj.elements.comparisonAccordionTitleFocus.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonAccordionTitle,results=>{
        if(results.value.length>0) {
        //accordion focus
            //client.refresh();
            client.pause(2000);
            client.waitForElementVisible(comparisonAccordionTitle, 6000);
            client.moveToElement(comparisonAccordionTitle, 30,  30);
            client.mouseButtonDown(0);
            client.pause(1000);
            properties = comparison_table_props.comparisonAccordionFocusProp('lg');
            callback.singleElem(client, comparisonAccordionTitleFocus , properties, 'lg');
        }
      });
    }
    },
    "10 Check for accordion title properties": function(client) {
      comparisonAccordionTitle = pageObj.elements.comparisonAccordionTitle.selector,
      comparisonAccordionTitleCls = pageObj.elements.comparisonAccordionTitleCls.selector,
      comparisonAccordionImage=pageObj.elements.comparisonAccordionImage.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonAccordionTitleCls,results=>{
          if(results.value.length>0) {
            //accordion title
            
        properties = comparison_table_props.comparisonAccordionPropTitle('lg');  
        callback.multiloop(client, comparisonAccordionTitleCls, properties, 'lg');

      }
      });
      client.elements('css selector',comparisonAccordionTitle,results=>{
        if(results.value.length>0) {
        // properties = comparison_table_props.comparisonAccordionBackgroundImage('lg');  
          //callback.pseudoSingleElem(client, comparisonAccordionTitle, 'after', properties);
          //client.waitForElementVisible('.comparison-content-row-heading.comparison-is-accordian-h5:after', 500);
          //client.expect.element('.comparison-content-row-heading.comparison-is-accordian-h5:after').to.have.css('background-image').which.contains('chevron_down.png');
          results.value.forEach(function(element,index) {
            client.elementIdClick(element.ELEMENT);
            client.pause(1000);
            client.expect.element('.comparison-content-inner-table-row').to.have.css('display').which.equals('table-row');
      });
         // properties = comparison_table_props.comparisonAccordionBackgroundImageClick('lg'); 
         // callback.pseudoSingleElem(client, comparisonAccordionImage, 'after', properties);
        }
      });
    }
    },
    "11 Check for accordion text properties": function(client) {
      comparisonAccordionText = pageObj.elements.comparisonAccordionText.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',comparisonAccordionText,results=>{
          if(results.value.length>0) {
      //p     
        props = comparison_table_props.comparisonAccordionPropTextP('lg');
        rteCallback.rteElem(client, comparisonAccordionText, props, 'p:only-of-type','lg');
      //li
        props = comparison_table_props.comparisonAccordionPropTextLi('lg');
        rteCallback.rteElem(client, comparisonAccordionText, props, 'li','lg');
      }
      });
    }
    },
    "12 Check for Accordion Alternate background color": function(client) {
      comparisonAccordionOddBgColor = pageObj.elements.comparisonAccordionOddBgColor.selector,
      comparisonAccordionEvenBgColor = pageObj.elements.comparisonAccordionEvenBgColor.selector,
      globalProps(client);
  
      if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){

        client.elements('css selector',comparisonAccordionOddBgColor,results=>{
        if(results.value.length>0) {
      //accordion odd BG Color
        properties = comparison_table_props.comparisonAccordionOddBgProp('lg');  
        callback.multiloop(client, comparisonAccordionOddBgColor , properties, 'lg');
        }
      });
      client.elements('css selector',comparisonAccordionEvenBgColor,results=>{
        if(results.value.length>0) {
      //accordion odd BG Color
        properties = comparison_table_props.comparisonAccordionEvenBgProp('lg');  
        callback.multiloop(client, comparisonAccordionEvenBgColor , properties, 'lg');
        }
      });
    }
  },
  /*"13 Check for accordion Image properties": function(client) {
    comparisonAccordionImage = pageObj.elements.comparisonAccordionImage.selector,
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.elements('css selector',comparisonAccordionImage,results=>{
        if(results.value.length>0) {    
      props = comparison_table_props.comparisonAccordionImage('lg');
      callback.multiloop(client, comparisonAccordionImage, props,'lg');
    }
    });
  }
  },
  "14 Check for accordion CTA properties": function(client) {
    comparisonAccordionCtal = pageObj.elements.comparisonAccordionCtal.selector,
    globalProps(client);

    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
      client.elements('css selector',comparisonAccordionCtal,results=>{
        if(results.value.length>0) {    
      props = comparison_table_props.comparisonAccordionCtal('lg');
      callback.multiloop(client, comparisonAccordionCtal, props,'lg');
    }
    });
  }
  },*/
"Ending the session":function(client){
  client.end();
}

} 