var branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/'+branding.getBrand.get());
//Desktop
module.exports = {
    textBoxProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "outline":"rgb(255, 191, 71) solid 3px"            
            };
        return shelfProps;
    },
    formHeaderWrapperProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding":"0px 0px 36px 48px" ,
                "background-color": property.$headerwrappercolor,         
            };
        return shelfProps;
    },
    formHeaderInnerGridProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding-left":"47.996px" ,
                        
            };
        return shelfProps;
    },
    formHeroTitleProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "margin":"44px 36px 19px 0px"
                        
            };
        return shelfProps;
    },
    formHeroTitleSpanProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"25px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"40px"  
                        
            };
        return shelfProps;
    },
    formHeroContentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                 "margin":"0px 36px 7px 0px"
                        
            };
        return shelfProps;
    },
    formHeroContentspanProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":property.$btlherocontent,
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"24px"  
                        
            };
        return shelfProps;
    },
formMiddleWrapperProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                 "margin":"47px 124px 0px"
                        
            };
        return shelfProps;
    },
    aggrementTitleProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"20px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"24px" ,
                "margin-bottom":"4px" 
                        
            };
        return shelfProps;
    },
    aggrementconfirmProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"16px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"22px" ,
                "margin":"5px 0px" 
                        
            };
        return shelfProps;
    },
     aggrementconfirmContentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$confirmcontentcolor,
                "font-size":"16px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "line-height":"22px" ,
                
                        
            };
        return shelfProps;
    },
    aggrementinputlabelProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"18px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "line-height":"22px" ,
                
                        
            };
        return shelfProps;
    },
    aggrementradiocheckProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                 "margin-top":"18px"
                        
            };
        return shelfProps;
    },
    aggrementcheckboxProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"18px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "line-height":"22px" ,
                "margin":"5.6px 0px 4.4px"
                
                        
            };
        return shelfProps;
    },
     aipLandingMessageBoxProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin-bottom":"34px",
                "padding":"20px 75px"
                
                        
            };
        return shelfProps;
    },
    aipLandingMessageBoxSpanProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"13px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"22px" ,
                
            };
        return shelfProps;
    },

formsHeaderWrapperProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin-bottom":"35px",
               
                
                        
            };
        return shelfProps;
    },
    formsbannerProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "background-color":property.$headerwrappercolor,
                
                "padding":"44px 0px 57px"
               
                
                        
            };
        return shelfProps;
    },
    bannercontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"24px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"28px" ,
                "padding":"0px 124px"
                
            };
        return shelfProps;
    },
     iconinfoProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "top":"0px",
                "right":"0px",
                "width":"20px",
                "height":"20px",
                "margin-left":"8px"
                
            };
        return shelfProps;
    },
     iconinfobeforeProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "font-size":"20px",
                "font-family":"nw-icons"
                
            };
        return shelfProps;
    },
    middlewrapperProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "margin":"0px 124px",
                "padding-bottom":"165px"
                
            };
        return shelfProps;
    },
     errorContainerProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "font-size":"14px",
                "color":property.$confirmcontentcolor,
                "background-color":property.$errorcontentbg,
                "padding":"24px 16px 20.5px",
                "margin-top":"10px",
                "border":"1px solid rgb(215, 0, 40)"
                
            };
        return shelfProps;
    },


formtitleprops: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"20px",
                "font-family":"RNHouseSansBold, sans-serif", 
                "line-height":"24px"           
            };
        return shelfProps;
    },
    inputlabelprops: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"18px",
                "font-family":"RNHouseSansRegular, sans-serif", 
                "line-height":"22px",
                "margin-bottom":"12px"          
            };
        return shelfProps;
    },
    form6propetytypeProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "font-size":"18px",
                "font-family":"RNHouseSansRegular, sans-serif", 
                "line-height":"22px",
                "margin-bottom":"14px"          
            };
        return shelfProps;
    },
     richtextProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$confirmcontentcolor,
                "font-size":"14px",
                "font-family":"RNHouseSansRegular, sans-serif", 
                "line-height":"20px",
                          
            };
        return shelfProps;
    },
     richtext1Props: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$confirmcontentcolor,
                "font-size":property.$btlrichtext,
                "font-family":"RNHouseSansRegular, sans-serif", 
                "line-height":"20px",
                          
            };
        return shelfProps;
    },
    nextbuttonprops: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "background-color": property.$nextbuttonbg,        
            };
        return shelfProps;
    },

 resultHeaderProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding":"30px 124px 32px",
                "margin-bottom":"33px"      
            };
        return shelfProps;
    },
    resultHeadercontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":property.$primary_1,
                "margin-bottom":"8px",
                "font-size":"24px",
                "font-family":"RNHouseSansBold, sans-serif",
                "line-height":"28px"

            };
        return shelfProps;
    },
    successresultProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin":"0px 124px"      
            };
        return shelfProps;
    },
    resulttopcontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin":"0px 76px"      
            };
        return shelfProps;
    },
    resultvalueProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "padding-left":"5px" ,
                "color":  property.$primary_1,
                "font-size":"72px",
                "line-height":"72px",
                "font-family":"RNHouseSansBold, sans-serif",

            };
        return shelfProps;
    },
    resultmaxcontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "margin":"0px 136px",
                
                "color":  property.$primary_1,
                "font-size":"14px",
                "line-height":"20px",
                "font-family":"RNHouseSansRegular, sans-serif",

            };
        return shelfProps;
    },
    resultleftcontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding-top":"28px"
                };
        return shelfProps;
    },
    leftcontenttitleProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":  property.$primary_1,
                "font-size":"20px",
                "line-height":"29.3px",
                "font-family":"RNHouseSansBold, sans-serif",
                };
        return shelfProps;
    },
    emailresultProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":  property.$emailresultcolor,
                "margin":"14px 0px",
                "font-size":"14px",
                "line-height":"20px",
                "font-family":"RNHouseSansRegular, sans-serif",
                "padding-left":"35px",
                };
        return shelfProps;
    },
    resultaipLandingMessageBoxProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin-bottom":"28px",
                "padding":"20px 75px"
                
                        
            };
        return shelfProps;
    },
    nextpagecontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":  property.$primary_1,
                "margin-bottom":"15px",
                "font-size":"20px",
                "line-height":"24px",
                "font-family":"RNHouseSansBold, sans-serif",
                
                };
        return shelfProps;
    },
     nextpagectaProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "background-color": property.$nextpagecta,
                "padding":"16px 26px",
                "margin":"27px 21px 28px 0px",
               
                
                };
        return shelfProps;
    },
    startagainctaProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":  property.$emailresultcolor,
                "padding":"4px 42px 6px 0px",
                "margin":"15px 12px 69px 0px",
               
                
                };
        return shelfProps;
    },
    resultfooterProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "background-color":  property.$headerwrappercolor,
                "padding":"30px 124px 44px",
                
            };
                return shelfProps;
    },
    resultfootercontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "color":  property.$primary_1,
                
                "font-size":"14px",
                "line-height":"14px",
                "font-family":"RNHouseSansRegular, sans-serif",
                
            };
                return shelfProps;
    },
     resultfooterbeforeProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "top":"-134px",
                "right":"-532px",
                "padding":"91px 98px",

                
            };
                return shelfProps;
    },
    startagainctafocusProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "background-color": property.$nextbuttonbg,
                
            };
                return shelfProps;
    },
    failresultcontainerProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin":"0px 76px"
                
            };
                return shelfProps;
    },
    failureheadingProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                
                "margin-bottom":"6px",
                "font-size":"20px",
                "line-height":"24px",
                 "color":  property.$primary_1,
                 "font-family":"RNHouseSansRegular, sans-serif",

                };
                return shelfProps;
    },
    failuretitleProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "margin":"27px 38px 0px",
                "font-size":"20px",
                "line-height":"24px",
                 "color":  property.$primary_1,
                 "font-family":"RNHouseSansBold, sans-serif",

                };
                return shelfProps;
    },
    failreasonProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "margin":"15px 38px 0px"
                
            };
                return shelfProps;
    },
    failreasoncontentProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "font-size":"18px",
                "line-height":"22px",
                 "color":  property.$primary_1,
                 "font-family":"RNHouseSansRegular, sans-serif",

                };
                return shelfProps;
    },
recalculateProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding":"27px 0px 48px"
                
            };
                return shelfProps;
    },
    recalculatebuttonProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding":"10px 18px 12px 20px",
                "margin-right":"21px",
                "background-color": property.$nextpagecta,
                
            };
                return shelfProps;
    },
    feedbackcontainerProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "padding":"44px 124px 57px",
               
                "background-color": property.$feedbackcontainer,
                
            };
                return shelfProps;
    },
    feedbackcontainertextProps: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "font-size":"24px",
                "line-height":"28px",
                 "color":  property.$errorcontentbg,
                 "font-family":"RNHouseSansBold, sans-serif",

                };
                return shelfProps;
    },
    icontooltip: function(size) {
        property = brand.props;
        
            let shelfProps = {
                "font-size":"12px",
                "line-height":"14.4px",
                 "color":  property.$primary_1,
                 "font-family":"RNHouseSansRegular, sans-serif",
                 "padding":"9px",
                 "background-color": property.$tooltipbgcolor,

                };
                return shelfProps;
    },










}

