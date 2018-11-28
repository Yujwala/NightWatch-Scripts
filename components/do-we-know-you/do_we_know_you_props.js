//do we know you shelf props
module.exports = function(client){
  var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
  return {
   headerTitleProps: function (size) {
         let shelfProps = {
               "margin-bottom":"12.5px",
               "font-family": property.$font_family_regular,
               "font-size": "25px",
               "line-height": "25px",
               "color": property.$dwky_color,
           };
           if(size==="xs"){
               shelfProps['margin-bottom'] ="9px";
               shelfProps['font-size'] ="18px";
               shelfProps['line-height']="22px";
           }
           return shelfProps;
   },

   themeLightBlueProps: function (size) {
         let shelfProps = {
               "background-color": property. $dwky_lightbluebgcolor,
           };
       return shelfProps;
   },
   themeWhiteProps: function (size) {
           let shelfProps = {
               "background-color":  property.$dwky_whitebgcolor,
           };
       return shelfProps;
   },

   themeBlueProps: function (size) {
          let shelfProps = {
               "background-color": property.$dwky_bluebgcolor,
           };
       return shelfProps;
   },

   titleProps: function (size) {
         let shelfProps = {
               "margin-bottom": "27px",
               "font-family": property.$font_family_regular,
               "font-size": "18px",
               "line-height": "18px",
               "color": property.$dwky_color,
           };
           if(size==="xs"){
               shelfProps['margin-bottom'] ="19.5px";
               shelfProps['font-size'] ="13px";
               shelfProps['line-height']="13px";
           }
       return shelfProps;
   },
   
   ulSelProps: function (size) {
         let shelfProps = {
               "margin-top": "4.069px",            
           };
       return shelfProps;
   },

   liSelProps: function (size) {
          let shelfProps = {
               "margin-bottom": "19.5px",            
           };
           if(size==="xs"){
               shelfProps['margin-bottom'] = "6.5px";
           }
       return shelfProps;
   },
   labelRadioProps : function(size){
       let shelfProps = {
           "padding" : "7.2px 0px 7.2px 45px",
           "color" : property.$dwky_color,
           "font-family" : property.$font_family_regular,
           "display" : "block",
           "position" :"relative",
           "font-size" : "18px",
           "line-height": "18px"
       };
       if(size==="xs"){
           shelfProps['padding'] = "6.5px 0px 6.5px 33.319px";
           shelfProps['font-size'] = "13px";
           shelfProps['line-height'] = "13px"
       }
       return shelfProps;
   },
   checkboxProps : function(size){
       let shelfProps = {
           "margin" : "16.25px 0px 32.5px",
           "padding": "19px 20.3125px 20.3125px",
           "display" : "block",
           "position" :"relative",
           "border" :  "1px solid rgb(127, 134, 152)"
       };
       return shelfProps;
   },

   checkboxLabelProps : function(size){
       let shelfProps = {
           "margin" : "-42px 0px 0px -5px",
           "padding": "14.3px 56.069px 9.75px 50.375px",
           "display" : "inline-block",
           "position" : "static",
           "outline-color" : property.$dwky_color,
           "box-sizing" : "border-box",
           "font-size" :"13px",
           "line-height" : "13px",
       };
       return shelfProps;
   },

   checkboxRadioLinkProps : function(size){
       let shelfProps = {
           "left": "22px",
           "top" : "22px",
           "width" : "22.0938px",
           "height" : "22.0938px",
           "position" : "absolute",
           "display" : "block",
       };
       return shelfProps;
   },

   btnProps : function(size){
       let shelfProps = {
           "background-color" : property.$dwky_btn_disabled_bgcolor,
           "color" : property.$dwky_btn_disabled_color,
           "font-size" : "18px",
           "padding" : property. $dwky_btn_padding,
           "text-align" : "left",
       };
       if(size==='xs'){
           shelfProps["background-color"] = property.$dwky_btn_disabled_bgcolor_m;
           shelfProps["padding"] = property.$dwky_btn_padding_m;
           shelfProps["font-size"] = "23px";
           shelfProps["border-radius"] = "7.199px";  
           shelfProps["text-align"] = "center";
       }
       return shelfProps;
   },

   btnEnabledProps : function(size) {
       let shelfProps = {
           "background-color" : property.$dwky_btn_enabled_bgcolor,
           "color" : property.$dwky_btn_enabled_color,
           "font-size" : "18px",
           "padding" : property. $dwky_btn_padding,
           "text-align" : "left",
       };

       if(size==='xs'){
           shelfProps["background-color"] = property.$dwky_btn_enabled_bgcolor_m;
           shelfProps["padding"] = property.$dwky_btn_padding_m;
           shelfProps["font-size"] = "23px";
           shelfProps["border-radius"] = "7.199px";  
           shelfProps["text-align"] = "center";
       }
       return shelfProps;
   },

   btnHoverProps : function(size){
       let shelfProps ={
           "background-color" : property.$dwky_btn_hover,        
       };
       if(size==='xs'){
           shelfProps["background-color"] = property.$dwky_hover_m;
       }
       return shelfProps;
   },

   FocusProps : function(size){
       let shelfProps ={
           "outline-color" : property.$dwky_btn_focus,        
       };
       return shelfProps;
   }
 };
}