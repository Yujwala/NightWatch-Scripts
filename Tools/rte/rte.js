var rte_props = require('./rte_props.js');
function globalProps(client){
    callback = client.page.common();
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
        let scr=size,
            callback = client.page.common(),
            UpdatedSel=sel+' .comp-rich-text '+tag;
        //console.log(UpdatedSel);
            client.elements('css selector',UpdatedSel,function(result){
            if(result.value.length>0){
                callback.multiloop(client,UpdatedSel,props,scr);
            }
        });
    },
  }]    
};