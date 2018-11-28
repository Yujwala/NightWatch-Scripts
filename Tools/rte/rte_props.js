module.exports = function(client){
    var brandFile = client.globals.brand,
    brand = require('../../branding/'+brandFile),
	property = brand.props;
	
	return {
		PropTextH3: function(size) {
			   let shelfProps = {
					"line-height": "24px",
					"font-size":"24px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "26px",
					shelfProps["font-size"] = "22px"
				}
			return shelfProps;
		},
		PropTextH4: function(size) {
			  let shelfProps = {
					"line-height": "22px",
					"font-size":"18px",
					"font-family":property.$font_family_regular,
					"padding":"0px 0px 10px"
				};
			return shelfProps;
		},
		PropTextH5_H6: function(size) {
			  let shelfProps = {
					"line-height": "13px",
					"font-size":"13px",
					"font-family":property.$font_family_regular,
				};
			return shelfProps;
		},
		PropTextfs20: function(size) {
			   let shelfProps = {
					"line-height": "24px",
					"font-size":"20px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "26px",
					shelfProps["font-size"] = "22px"
				}
			return shelfProps;
		},

		PropTextfs18: function(size) {
			  let shelfProps = {
					"line-height": "20px",
					"font-size":"18px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px"
				}
			return shelfProps;
		},
		PropTextfs13: function(size) {
			   let shelfProps = {
					"line-height": "15.6px",
					"font-size":"13px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px"
				}
			return shelfProps;
		},
		PropTextfs12: function(size) {
			  let shelfProps = {
					"line-height": "20px",
					"font-size":"14px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px",
					shelfProps["font-size"] = "16px"
				}
			return shelfProps;
		},
		PropTextfs14: function(size) {
			   let shelfProps = {
					"line-height": "14px",
					"font-size":"14px",
					"font-family":property.$font_family_regular,
				};
			return shelfProps;
		},
		PropTextfs16: function(size) {
			   let shelfProps = {
					"line-height": "22px",
					"font-size":"16px",
					"font-family":property.$font_family_regular,
				};
			return shelfProps;
		},
		Proptextfs16: function(size) {
			let shelfProps = {
				 "line-height": "20px",
				 "font-size":"16px",
				 "font-family":property.$font_family_regular,
			 };
		 return shelfProps;
		},
		PropTextfs24: function(size) {
			   let shelfProps = {
					"line-height": "20px",
					"font-size":"24px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px"
				}
			return shelfProps;
		},
		PropTextfs26: function(size) {
			   let shelfProps = {
					"line-height": "26px",
					"font-size":"22px",
					"font-family":property.$font_family_regular,
				};
			return shelfProps;
		},
		PropTextfs28: function(size) {
			   let shelfProps = {
					"line-height": "26px",
					"font-size":"22px",
					"font-family":property.$font_family_regular,
				};
			return shelfProps;
		},
		PropTextfs32: function(size) {
			   let shelfProps = {
					"line-height": "39px",
					"font-size":"32px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["line-height"] = "30px",
					shelfProps["font-size"] = "26px"
				}
			return shelfProps;
		},
		PropTextLi: function(size) {
			   let shelfProps = {
					"line-height": "20px",
					"font-size":"14px",
					"font-family":property.$font_family_regular,
					"margin":"5px 0px",
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px",
					shelfProps["font-size"] = "16px"
				}
			return shelfProps;
		},
		PropTextTickIcon: function(size) {
			   let shelfProps = {
					"line-height": "18px",
					"font-size":"18px",
				};
			return shelfProps;
		},
		PropTextTickLarge: function(size) {
			   let shelfProps = {
					"line-height": "22px",
					"font-size":"18px",
					"padding":"0px 0px 0px 36px",
					"font-family":property.$font_family_regular,
				};
				if(size=="xs"){
					shelfProps["font-size"] = "16px",
					shelfProps["padding"] = "0px 0px 0px 32px"
				}
			return shelfProps;
		},
		PropTextDownload: function(size) {
			   let shelfProps = {
					"line-height": "16px",
					"font-size":"16px",
					"padding":"0px 0px 0px 31px",
					"font-family":property.$font_family_regular,
					"min-height":"28px",
				};
			return shelfProps;
		},
		PropTextDownloadTray: function(size) {
			   let shelfProps = {
					"line-height": "20px",
					"font-size":"14px",
					"padding":"0px 0px 14px 26px",
					"font-family":property.$font_family_regular,
					"min-height":"20px",
				};
				if(size=="xs"){
					shelfProps["line-height"] = "22px",
					shelfProps["font-size"] = "16px",
					shelfProps["min-height"] = "22px",
					shelfProps["padding"] = "0px 0px 12px 26px"
				}
			return shelfProps;
		},
		PropBlockQuote: function(size) {
			let shelfProps = {
				 "line-height": "27px",
				 "font-size":"25px",
				 "margin":"27px 32px 20px",
				 "font-family":property.$font_family_regular,
			 };
			 if(size=="xs"){
				 shelfProps["line-height"] = "26px",
				 shelfProps["font-size"] = "22px",
				 shelfProps["margin"] = "22px 24px 12px",
				 shelfProps["font-family"] = property.$font_family_regular
			 }
		 return shelfProps;
		},
		PropTextPara: function(size) {
			let shelfProps = {
				 "line-height": "18px",
				 "font-size":"12px",
				 "font-family":property.$font_family_regular,
				}
				if(size=="xs"){
					shelfProps["line-height"] = "22px",
					shelfProps["font-size"] = "16px"
				}
		 return shelfProps;
		},
		PropTextBQ: function(size) {
			let shelfProps = {
				 "line-height": "27px",
				 "font-size":"12px",
				 "font-family":property.$font_family_regular,
				}
				if(size=="xs"){
					shelfProps["line-height"] = "22px",
					shelfProps["font-size"] = "36px"
				}
		 return shelfProps;
		},
	};
}