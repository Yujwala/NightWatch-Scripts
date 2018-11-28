module.exports = function(client){
var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile);
  return {
    inputlabelProps: function(size) {
        property = brand.props;
        var shelfProps = {},
            shelfProps = {
             "color":property.$inputlabel_color,
             "font-family":"RNHouseSansRegular, sans-serif",
             "font-size":"18px",
             "line-height":"18px",
             "padding":"0px 0px 7.2px",
             "margin":"0px"
            }
            
        return shelfProps;
  },
  inputhoverProps:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "background-color":property.$inputtextbox_bgc,
         "outline":property.$inputtextbox_outline,
        }
        if(size=='xs'){
            shelfProps['background-color']=property.$inputtextbox_bgc_mob,
            shelfProps['outline']=property.$inputtextbox_outline
        }
    return shelfProps;
},

Toggle_textprops:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$inputlabel_color,
         "font-family":property.$font_family_regular,
         "font-size":"14px",
         "line-height":"20px"
        }
        if(size=='xs'){
            shelfProps['color']=property.$inputlabel_color.
            shelfProps['font-family']=property.$font_family_regular
            shelfProps['font-size']="14px",
            shelfProps['line-height']="20px"
        }
    return shelfProps;
},

ToggleButtonProps:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$inputlabel_color,
         "font-family":property.$font_family_regular,
         "font-size":"13px",
         "line-height":"13px",
         "background-color":property.$togglebtn_bgclr
        }
        if(size =='xs'){
            shelfProps['color']=property.$inputlabel_color,
            shelfProps['font-family']=property.$font_family_regular,
            shelfProps['font-size']="13px",
            shelfProps['line-height']="13px",
            shelfProps['background-color']=property.$togglebtn_bgclr
        }
    return shelfProps;
},

ToggleButton_uncheckedProps:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$inputlabel_color,
         "font-family":property.$font_family_regular,
         "font-size":"13px",
         "line-height":"13px",
         "background-color":property.$togglebtn_bgclr_un
        }
        if(size=='xs'){
            shelfProps['color']=property.$inputlabel_color
            shelfProps['font-family']=property.$font_family_regular
            shelfProps['font-size']="13px",
            shelfProps['line-height']="13px",
            shelfProps['background-color']=property.$togglebtn_bgclr_un
        }
    return shelfProps;
},



monthly_repayment_header:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$inputlabel_color,
         "font-family":property.$font_family_bold,
         "font-size":"15px",
         "line-height":"20px",
         "background-color":property.$transperent_bg,
         "border-top": property.$repaymentres_bdr_top  ,
         "border-bottom":property.$repaymentres_bdr_btm,
         "padding":"16px 5px 16px 0px"
        }
        if(size=='xs'){
            shelfProps['color']=property.$inputlabel_color
            shelfProps['font-family']=property.$font_family_bold
            shelfProps['font-size']="15px",
            shelfProps['line-height']="20px",
            shelfProps['background-color']=property.$transperent_bg,
            shelfProps['border-top']=property.$repaymentres_bdr_top,
            shelfProps['border-bottom']=property.$repaymentres_bdr_btm,
            shelfProps['padding']="16px 5px 16px 0px"
        }
    return shelfProps;
},

Toggletext_lineabove:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         
         "border-bottom":property.$repaymentres_bdr_btm,
         "padding":"20px 0px 0px"
        }
        if(size=='xs'){
            shelfProps['border-bottom']=property.$repaymentres_bdr_btm,
            shelfProps['padding']="20px 0px 0px"
            
        }
    return shelfProps;
},

overpayment_detail_labels:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$inputlabel_color,
         "font-family":property.$font_family_bold,
         "font-size":"16px",
         "line-height":"16px",
         "background-color":property.$transperent_bg,
        }
        if(size=='xs'){
            shelfProps['color']=property.$inputlabel_color
            shelfProps['font-family']=property.$font_family_bold
            shelfProps['font-size']="16px",
            shelfProps['line-height']="16px",
            shelfProps['background-color']=property.$transperent_bg
        }
    return shelfProps;
},

calculate_btn_props:function(size) {
    property = brand.props;
    var shelfProps = {},
        shelfProps = {
         "color":property.$primary_2,
         "font-family":property.$font_bold,
         "font-size":"18px",
         "line-height":"24px",
         "background-color":property.$calculate_btn_bg,
        }
        if(size=='xs'){
            shelfProps['color']=property.$primary_2
            shelfProps['font-family']=property.$font_bold
            shelfProps['font-size']="18px",
            shelfProps['line-height']="24px",
            shelfProps['background-color']=property.$calculate_btn_bg
        }
    return shelfProps;
},
};


}