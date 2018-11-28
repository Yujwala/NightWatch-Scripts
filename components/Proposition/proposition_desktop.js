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
  '@tags': ['proposition','desktop','proposition-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.RBS_PER_PROPOSITION); 
            
    },
    "1 Check for shelf background color and paddings": function(client) {
        var lifestylesmalltilepadding = pageObj.elements.lifestylesmalltilepadding.selector,
        lifestylelargetilepadding = pageObj.elements.lifestylelargetilepadding.selector,
        graphicalsmalltilepadding = pageObj.elements.graphicalsmalltilepadding.selector,
        graphicallargetilepadding = pageObj.elements.graphicallargetilepadding.selector;
         client.elements('css selector',".proposition_comp_tile_col_2",results=>{
               if(results.value.length>0) {
              //For two tiles bg color
                 for(var i=1;i<3;i++){
                    var x="propostion2tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('lg');
                    console.log("prop"+properties);  
                 callback.multiloop(client, proposition , properties, 'lg');
                }
                 
                }
            });
         client.elements('css selector',".proposition_comp_tile_col_3",results=>{
               if(results.value.length>0) {
              //For three tiles bg color
                 for(var i=1;i<4;i++){
                    var x="propostion3tile"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
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
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
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
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
                }



                properties1 = proposition_props.lifestylesmalltilepadding('lg');
                    
                callback.multiloop(client, lifestylesmalltilepadding , properties1, 'lg');
                properties1 = proposition_props.graphicalsmalltilepadding('lg');
                    
                callback.multiloop(client, graphicalsmalltilepadding , properties1, 'lg');
                }
            });
         client.elements('css selector',".desk--one--whole .desk--one-half",results=>{
               if(results.value.length>0) {
              
                 for(var i=1;i<3;i++){
                    //For one half padding
                    var x="tileonehalfpadding"+i;
                     proposition = pageObj["elements"][x]["selector"];
                     
                    properties = proposition_props[x]('lg');
                    
                 callback.multiloop(client, proposition , properties, 'lg');
                }
                 properties = proposition_props.lifestylelargetilepadding('lg');
                 
                 callback.multiloop(client, lifestylelargetilepadding , properties, 'lg');
                 
                 properties = proposition_props.graphicallargetilepadding('lg');
                 
                 callback.multiloop(client, graphicallargetilepadding , properties, 'lg');
                

                }
            });
},

"2.RTE AND ICON PROPS ": function(client) {
var lifestyleonethirdrich = pageObj.elements.lifestyleonethirdrich.selector,
        graphicalonethirdrich = pageObj.elements.graphicalonethirdrich.selector,
        lifestyleonehalfrich = pageObj.elements.lifestyleonehalfrich.selector,
        richtextbody = pageObj.elements.richtextbody.selector,
        propostionicon = pageObj.elements.propostionicon.selector;
if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                   
                    properties = proposition_props.lifestyleonethirdrich('lg');
                    callback.multiloop(client, lifestyleonethirdrich , properties, 'lg');

                     properties = proposition_props.graphicalonethirdrich('lg');
                    callback.multiloop(client, graphicalonethirdrich , properties, 'lg');

                     properties = proposition_props.lifestyleonehalfrich('lg');
                    callback.multiloop(client, lifestyleonehalfrich , properties, 'lg');

                    properties = proposition_props.rtebodyProps('lg');
                    rteCallback.rteElem(client, richtextbody, properties, 'p', 'lg');

                    properties = proposition_props.rtetitleProps('lg');
                    rteCallback.rteElem(client, lifestyleonethirdrich, properties, 'p', 'lg');


                     properties = proposition_props.propostioniconProps('lg');
                    callback.pseudoSingleElem(client, propostionicon,':after',properties);



}

}
    }