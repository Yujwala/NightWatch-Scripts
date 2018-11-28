var comp_props,pageObj,callback,size,
    pageurl = require('../../pageurls.js');

function globalProps(client){
    pageObj = client.page.ourfallen_selectors();
	callback = client.page.common();
	size = client.globals.size.widths;
	callback.getBrand(client);
	comp_props = require('./ourfallen_props.js')(client);
}

module.exports = {
    '@tags': ['mobile', 'our-fallen', 'our-fallen-mobile'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(pageurl.RBS_REM_OUR_FALLEN_MOBILE);
        console.log("--FOR MOBILE--" + pageurl.RBS_REM_OUR_FALLEN_MOBILE);
    },
   
    "1.Checking The Properties of Header": function (client) {
        headerTitleCls = pageObj.elements.headertitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', headerTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.headerTitlePropsMob('xs');
                    callback.multiloop(client, headerTitleCls, Properties, 'xs');
                }
            });
        }
    },
   
    "2.Checking The Properties of Subtitle": function (client) {
        subTitleCls = pageObj.elements.subtitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', subTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.subTitlePropsMob('xs');
                    callback.multiloop(client, subTitleCls, Properties, 'xs');
                }
            });
        }
    },
    
    "3.Checking The Properties of FirstName Input text field": function (client) {
        firstInputCls = pageObj.elements.firstname.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', firstInputCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.firstNamePropsMob('xs');
                    callback.multiloop(client, firstInputCls, Properties, 'xs');
                }
            });
        }
    },
  
    "4.Checking The Properties of LastName Input text field": function (client) {
        lastInputCls = pageObj.elements.lastname.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', lastInputCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.lastNamePropsMob('xs');
                    callback.multiloop(client, lastInputCls, Properties, 'xs');
                }
            });
        }
    },
  
    "5.Checking The Properties of Bank Name Selector": function (client) {
        bankNameCls = pageObj.elements.banknameselector.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', bankNameCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.bankNamePropsMob('xs');
                    callback.multiloop(client, bankNameCls, Properties, 'xs');
                }
            });
        }
    },
    
    "6.Checking The Properties of Date of Death selector": function (client) {
        deathSelectorCls = pageObj.elements.dateofdeathselector.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', deathSelectorCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.dateOfDeathPropsMob('xs');
                    callback.multiloop(client, deathSelectorCls, Properties, 'xs');
                }
            });
        }
    },
  
    "7.Checking The Properties of ResultSearch Button": function (client) {
        searchBtnCls = pageObj.elements.searchbutton.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', searchBtnCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.resSearchButtonPropsMob('xs');
                    callback.multiloop(client, searchBtnCls, Properties, 'xs');
                }
            });
        }
    },
        
    "8.Checking The Properties of Search Results Main Div": function (client) {
        searchResCls = pageObj.elements.searchresultsdiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', searchResCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.searchResultsDivPropsMob('xs');
                    callback.multiloop(client, searchResCls, Properties, 'xs');
                }
            });
        }
    },
    "9.Checking The Properties of Sort Selection Main Div": function (client) {
        sortSelCls = pageObj.elements.sortselectiondiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', sortSelCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.sortSelectionDivPropsMob('xs');
                    callback.multiloop(client, sortSelCls, Properties, 'xs');
                }
            });
        }
    },
    "10.Checking The Properties of Item Count Component": function (client) {
        itemCountCls = pageObj.elements.itemcount.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', itemCountCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.itemCountPropsMob('xs');
                    callback.multiloop(client, itemCountCls, Properties, 'xs');
                }
            });
        }
    },
    
    "11.Checking The Properties of nameblocks division": function (client) {
        nameBlocksCls = pageObj.elements.nameblocks.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlocksPropsMob('xs');
                    callback.singleElem(client, nameBlocksCls, Properties, 'xs');
                }
            });
        }
    },
    "12.Checking The Properties of nameblocks title": function (client) {
        nameBlocksTitleCls = pageObj.elements.nameblocktitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlockTitlePropsMob('xs');
                    callback.singleElem(client, nameBlocksTitleCls, Properties, 'xs');
                }
            });
        }
    },
    "13.Checking The Properties of nameblock text": function (client) {
        nameBlocksTextCls = pageObj.elements.nameblocktext.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksTextCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlockTextPropsMob('xs');
                    callback.singleElem(client, nameBlocksTextCls, Properties, 'xs');
                }
            });
        }
    },
    "14.Checking The Properties of right Arrow in Pagination": function (client) {
        rightarrowCls = pageObj.elements.paginationrightarrow.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', rightarrowCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.rightArrowPropsMob('xs');
                    callback.singleElem(client, rightarrowCls, Properties, 'xs');
                }
            });
        }
    },
    "15.Checking The Properties of left Arrow in Pagination": function (client) {
        leftarrowCls = pageObj.elements.paginationleftarrow.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', leftarrowCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.leftArrowPropsMob('xs');
                    callback.singleElem(client, leftarrowCls, Properties, 'xs');
                }
            });
        }
    },

    "16.Checking The Functionality of the page": function (client) {
        input1Cls = pageObj.elements.firstname.selector,
        input2Cls = pageObj.elements.lastname.selector,
        input3Cls = pageObj.elements.banknameselector.selector,
        input4Cls = pageObj.elements.dateofdeathselector.selector,
        searchbuttonCls = pageObj.elements.searchbutton.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) 
        {
                client.setValue('input[name=firstName]','Alexander');
                client.setValue('input[name=lastName]','Abbot');
                client.setValue('#new_form_bank', 'Commercial Bank of Scotland');
                client.setValue('#new_form_death', '1917 Jul-Sep');
                client.click('.ofs-button-search');
                client.verify.containsText(".ofs-search-item-title a",'ALEXANDER ABBOT');
                client.expect.element('.ofs-search-item-title a').text.to.contain('AL'); 
                client.expect.element('.ofs-search-item-title a').text.to.contain('AB');
                client.pause(2000);
                callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN_MOBILE);
                client.pause(2000);
                client.setValue('input[name=q]','Thomas Adamson');
                client.keys('\uE007'); 
                client.verify.containsText('.goog-trans-section.l','Thomas Adamson');     
                callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN_MOBILE);        
            }
         },
         "17.Checking The Properties of  Active Pagination Component": function (client) {
            paginationButtonCls = pageObj.elements.paginationrightbutton.selector,
            paginationActiveButtonCls = pageObj.elements.paginationactivecomponent.selector,
            callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN_MOBILE);
                globalProps(client);
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice || client.options.desiredCapabilities.isSMDevice) {
                client.click(paginationButtonCls);
                client.expect.element(paginationActiveButtonCls).to.have.css('color').which.equals('rgba(5, 152, 160, 1)');
            }
        },
     //Closing the browser
    'Closing Browser': function(client){
        client.pause(1000);
        client.end();
      }

};




