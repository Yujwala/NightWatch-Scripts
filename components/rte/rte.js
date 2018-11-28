var rte_props,callback;

function globalProps(client){
    callback = client.page.common();
	callback.getBrand(client);
	rte_props = require('./rte_props.js')(client);
}
module.exports = {
    //rte_props1:rte_props,
   elements: {
      title:{
          selector:'.comp-rich-text'
      }      
  },
  commands:[{
    rteElem:function(client,sel,props,tag,size){
        let scr=size;
            if(tag==="table"){
                var arr=[" tr:nth-child(odd)"," tr:nth-child(even)"," th"," td"];
                        for(let i=0;i<=arr.length;i++){
                            let updatedSelTable=sel+' .comp-rich-text '+tag+arr[i];
                            client.elements('css selector',updatedSelTable,function(result){
                                if(result.value.length){
                                callback.multiloop(client,updatedSelTable,props[i],scr);
                                }
                            });
                        }
            }
               else{
                    let UpdatedSel=sel+' .comp-rich-text '+tag;
               // console.log(UpdatedSel);
                client.elements('css selector',UpdatedSel,function(result){
                    if(result.value.length){
                    callback.multiloop(client,UpdatedSel,props,scr);
                    }
                });
            }
    },
  }]    
};