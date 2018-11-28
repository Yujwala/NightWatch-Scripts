var proposition_props,
    pageurl = require('../../pageurls.js'),
    pageObj,callback,size,rteCallback;   

function globalProps(client){
    pageObj = client.page.proposition_selectors();
	rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    callback = client.page.common();
    size = client.globals.size.widths;
	callback.getBrand(client);
	proposition_props = require('./proposition_props.js')(client);
}

module.exports = {
  '@tags': ['proposition','mobile','proposition-mobile'],
    //Opening the URL
    "Resize The Window":function(client){
           globalProps(client);
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000) ;
    },
    "Opening the mobile URL": function(client) {
            globalProps(client);
            //client.maximizeWindow();
            callback.openURL(client,pageurl.ulster_proposition_mob); 
            
    },
    "1 mobile Check for shelf background color and paddings": function(client) {
        var lifestylesmalltilepadding = pageObj.elements.lifestylesmalltilepadding.selector,
        lifestylelargetilepadding = pageObj.elements.lifestylelargetilepadding.selector,
        graphicalsmalltilepadding = pageObj.elements.graphicalsmalltilepadding.selector,
        graphicallargetilepadding = pageObj.elements.graphicallargetilepadding.selector;
         globalProps(client);
          if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
         client.elements('css selector',".proposition_comp_tile_col_2",results=>{
               if(results.value.length>0) {
              //For two tiles bg color
                 for(var i=1;i<3;i++){
                    var x="propostion2tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('xs');
                    console.log("prop"+properties);  
                 callback.multiloop(client, proposition , properties, 'xs');
                }
                 
                }
            });
         client.elements('css selector',".proposition_comp_tile_col_3",results=>{
               if(results.value.length>0) {
              //For three tiles bg color
                 for(var i=1;i<4;i++){
                    var x="propostion3tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('xs');
                    
                 callback.multiloop(client, proposition , properties, 'xs');
                }
                 
                }
            });
          client.elements('css selector',".proposition_comp_tile_col_4",results=>{
               if(results.value.length>0) {
              //For three tiles bg color
                 for(var i=1;i<5;i++){
                    var x="propostion4tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
                }
                 
                }
            });
         client.elements('css selector',".proposition_comp_tile_col_5",results=>{
               if(results.value.length>0) {
              //For five tiles bg color
                 for(var i=1;i<6;i++){
                    var x="propostion5tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('xs');
                    
                 callback.multiloop(client, proposition , properties, 'xs');
                }
                 
                }
            });
         client.elements('css selector',".proposition_comp_tile_col_6",results=>{
               if(results.value.length>0) {
              //For five tiles bg color
                 for(var i=1;i<7;i++){
                    var x="propostion6tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
                }
                 
                }
            });
         client.elements('css selector',".desk--one--whole .desk--one-third",results=>{
               if(results.value.length>0) {
              
                 for(var i=1;i<4;i++){
                    //For one third tile padding
                    var x="tileonethirdpadding"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('xs');
                    
                 callback.multiloop(client, proposition , properties, 'xs');
                }



                properties1 = proposition_props.lifestylesmalltilepadding('xs');
                    
                callback.multiloop(client, lifestylesmalltilepadding , properties1, 'xs');
                properties1 = proposition_props.graphicalsmalltilepadding('xs');
                    
                callback.multiloop(client, graphicalsmalltilepadding , properties1, 'xs');
                }
            });
         client.elements('css selector',".desk--one--whole .desk--one-half",results=>{
               if(results.value.length>0) {
              
                 for(var i=1;i<3;i++){
                    //For one half padding
                    var x="tileonehalfpadding"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('xs');
                    
                 callback.multiloop(client, proposition , properties, 'xs');
                }
                 properties = proposition_props.lifestylesmalltilepadding('xs');
                 
                 callback.multiloop(client, lifestylelargetilepadding , properties, 'xs');
                 
                 properties = proposition_props.graphicalsmalltilepadding('xs');
                 
                 callback.multiloop(client, graphicallargetilepadding , properties, 'xs');
                

                }

            });
     }
},

"2.RTE AND ICON PROPS ": function(client) {
var lifestyleonethirdrich = pageObj.elements.lifestyleonethirdrich.selector,
        graphicalonethirdrich = pageObj.elements.graphicalonethirdrich.selector,
        lifestyleonehalfrich = pageObj.elements.lifestyleonehalfrich.selector,
        richtextbody = pageObj.elements.richtextbody.selector,
        propostionicon = pageObj.elements.propostionicon.selector;
        globalProps(client);
if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isxsDevice || client.options.desiredCapabilities.isSMDevice){
                   
                    properties = proposition_props.lifestyleonethirdrich('xs');
                    callback.multiloop(client, lifestyleonethirdrich , properties, 'xs');

                     properties = proposition_props.graphicalonethirdrich('xs');
                    callback.multiloop(client, graphicalonethirdrich , properties, 'xs');

                     properties = proposition_props.lifestyleonehalfrich('xs');
                    callback.multiloop(client, lifestyleonehalfrich , properties, 'xs');

                    properties = proposition_props.rtebodyProps('xs');
                    rteCallback.rteElem(client, richtextbody, properties, 'p', 'xs');

                    properties = proposition_props.rtetitleProps('xs');
                    rteCallback.rteElem(client, lifestyleonethirdrich, properties, 'p', 'xs');


                     properties = proposition_props.propostioniconProps('xs');
                    callback.pseudoSingleElem(client, propostionicon,':after',properties);



}

},
    }