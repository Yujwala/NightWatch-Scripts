var titleCheck = function(res,client,sel,props,scr){
    res.value.forEach(function(element,index){
           for(key in props){
           let currentVal=props[key],test = key;
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+ " Sel "+sel+" Property "+test+" equals to "+currentVal);
            });
          }
    });
};
module.exports = {
    elements: {
    },
  commands:[{
    getBrand : function(client){
		let branding,brandName;
		if(process.argv.indexOf('--brand')>=0){
			branding = require('./branding/newBrand.js');
			brandName = process.argv[process.argv.indexOf('--brand') + 1];
			client.globals.brand = branding[brandName];
		}else{
			branding = require('./branding/getBrand.js');
			brandName = branding.getBrand.get();
			client.globals.brand = brandName;
		}
    },
    openURL : function(client,defaultUrl){
        if(process.argv.indexOf('--url')>=0){
			console.log("URL Opened >>>",process.argv[process.argv.indexOf('--url') + 1]);
            client.url(process.argv[process.argv.indexOf('--url') + 1]);
        }else{
			console.log("URL Opened >>>",defaultUrl);
            client.url(defaultUrl);
        }
    },
    scrollToElement : function(client,targetId){
        client.execute(function (targetId) {
            document.querySelector(targetId).scrollIntoView();
        }, [targetId]); 
    },  
    multiloop:function(client,selector,props,size){
        let scr=size;
                client.elements('css selector',selector,function(result){
                    titleCheck(result,client,selector,props,scr);
                });
    },
    singleloop:function(client,selector,props,size){
        let scr=size;
                for(key in props){
           let currentVal=props[key],test = key;
            client.elementIdCssProperty(selector.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal,"Screen Size "+scr+" Property "+test+" equals to "+currentVal); 
            });
          }
    },
    singleElem:function(client,selector,props,size){
        var sizeLen = Object.keys(props).length;
        for(var i=0;i<sizeLen;i++){
            let currentSize=Object.keys(props)[i];
            client.getCssProperty(selector, currentSize, function(result) {
                this.verify.equal(result.value, props[currentSize],"Property "+currentSize+" equals to "+props[currentSize]);
            });
        }
    },
    pseudoSingleElem: function(client,cssPath, pseudo, props){
      var sizeLen = Object.keys(props).length;
      for(var i=0;i<sizeLen;i++){
          let currentProp=Object.keys(props)[i];
          client.pseudoElement(cssPath,pseudo,currentProp,props[currentProp]);
      }
    }
  }]    
};