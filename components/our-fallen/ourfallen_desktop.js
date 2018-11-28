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
    '@tags': ['desktop','our-fallen-desktop','our-fallen'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        //callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN);
        callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN);
        console.log("--For Desktop--" + pageurl.RBS_REM_OUR_FALLEN);
    },
  
    "1.Checking The Properties of Header": function (client) {
        headerTitleCls = pageObj.elements.headertitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', headerTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.headerTitleProps('lg');
                    callback.multiloop(client, headerTitleCls, Properties, 'lg');
                }
            });
        }
    },
    "2.Checking The Properties of Ofs Div section": function (client) {
        ofsTopCls = pageObj.elements.ofstopsection.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', ofsTopCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.ofsTopSectionProps('lg');
                    callback.multiloop(client, ofsTopCls, Properties, 'lg');
                }
            });
        }
    },
   
    "3.Checking The Properties of Subtitle": function (client) {
        subTitleCls = pageObj.elements.subtitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', subTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.subTitleProps('lg');
                    callback.multiloop(client, subTitleCls, Properties, 'lg');
                }
            });
        }
    },
    
    "4.Checking The Properties of FirstName Input text field": function (client) {
        firstInputCls = pageObj.elements.firstname.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', firstInputCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.firstNameProps('lg');
                    callback.multiloop(client, firstInputCls, Properties, 'lg');
                }
            });
        }
    },
  
    "5.Checking The Properties of LastName Input text field": function (client) {
        lastInputCls = pageObj.elements.lastname.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', lastInputCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.lastNameProps('lg');
                    callback.multiloop(client, lastInputCls, Properties, 'lg');
                }
            });
        }
    },
  
    "6.Checking The Properties of Bank Name Selector": function (client) {
        bankNameCls = pageObj.elements.banknameselector.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', bankNameCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.bankNameProps('lg');
                    callback.multiloop(client, bankNameCls, Properties, 'lg');
                }
            });
        }
    },

    "7.Checking The Properties of Bank Name Selector Span element": function (client) {
        bankNamespanCls = pageObj.elements.banknameselectorspan.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', bankNamespanCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.bankNameSpanProps('lg');
                    callback.multiloop(client, bankNamespanCls, Properties, 'lg');
                }
            });
            client.expect.element(bankNamespanCls).to.have.css('background-image').which.contains('expand_chevron_rowitem');

        }
    },
    
    "8.Checking The Properties of Date of Death selector": function (client) {
        deathSelectorCls = pageObj.elements.dateofdeathselector.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', deathSelectorCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.dateOfDeathProps('lg');
                    callback.multiloop(client, deathSelectorCls, Properties, 'lg');
                }
            });
        }
    },

    "9.Checking The Properties of FilterResults title": function (client) {
        filterResCls = pageObj.elements.filterresults.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', filterResCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.filterResultsProps('lg');
                    callback.multiloop(client, filterResCls, Properties, 'lg');
                }
            });
        }
    },


    "10.Checking The Properties of Lastname title in the Results Div": function (client) {
        lasNameCls = pageObj.elements.lastnamefilter.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', lasNameCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.lasNameProps('lg');
                    callback.multiloop(client, lasNameCls, Properties, 'lg');
                }
            });
        }
    },

   
    "11.Checking The Properties of filter Results Div": function (client) {
        filterDivCls = pageObj.elements.filterresultsdiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', filterDivCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.filterDivProps('lg');
                    callback.multiloop(client, filterDivCls, Properties, 'lg');
                }
            });
        }
    },


    "12.Checking The Properties of alphabet rows": function (client) {
        alphRowCls = pageObj.elements.alphabetrow.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', alphRowCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.alphabetRowProps('lg');
                    callback.multiloop(client, alphRowCls, Properties, 'lg');
                }
            });
        }
    },

    "13.Checking The Properties of all alphabets in the rows": function (client) {
        var alphCls = pageObj.elements.buttonSel.selector;
        var alphCls1 = pageObj.elements.buttonSel1.selector;
        var alphClsSel = pageObj.elements.singlealphabethover.selector;
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', alphCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.singleProps('lg');
                    callback.multiloop(client, alphCls, Properties, 'lg');
                
                }
            });
                client.moveToElement(alphCls1,10,10);
                client.mouseButtonDown(alphCls1);   
                client.pause(3000);                 
                client.moveToElement(alphClsSel,10,10);
                client.pause(3000);
                client.elements('css selector', alphClsSel, results => {
                    if (results.value.length > 0) {
                        pro = comp_props.outLineProps('lg');
                        callback.multiloop(client, alphClsSel, pro, 'lg');
                    
                    }
                });
                client.mouseButtonUp(alphCls1); 
             }
    
            },

            
    "14.Checking The Properties of Search Results Main Div": function (client) {
        searchResCls = pageObj.elements.searchresultsdiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', searchResCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.searchResultsDivProps('lg');
                    callback.multiloop(client, searchResCls, Properties, 'lg');
                }
            });
        }
    },
    "15.Checking The Properties of Sort Selection Main Div": function (client) {
        sortSelCls = pageObj.elements.sortselectiondiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', sortSelCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.sortSelectionDivProps('lg');
                    callback.multiloop(client, sortSelCls, Properties, 'lg');
                }
            });
        }
    },
    "16.Checking The Properties of Item Count Component": function (client) {
        itemCountCls = pageObj.elements.itemcount.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', itemCountCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.itemCountProps('lg');
                    callback.multiloop(client, itemCountCls, Properties, 'lg');
                }
            });
        }
    },
    "17.Checking The Properties of last Name Sort Component": function (client) {
        sortLastnameCls = pageObj.elements.sortlastnamecomp.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector',  sortLastnameCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.sortLastNameProps('lg');
                    callback.multiloop(client,  sortLastnameCls, Properties, 'lg');
                }
            });
            client.expect.element(sortLastnameCls).to.have.css('background-image').which.contains('expand_chevron_rowitem');
        }
    },
    "18.Checking The Properties of nameblocks division": function (client) {
        nameBlocksCls = pageObj.elements.nameblocks.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlocksProps('lg');
                    callback.singleElem(client, nameBlocksCls, Properties, 'lg');
                }
            });
        }
    },
    "19.Checking The Properties of nameblocks title": function (client) {
        nameBlocksTitleCls = pageObj.elements.nameblocktitle.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksTitleCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlockTitleProps('lg');
                    callback.singleElem(client, nameBlocksTitleCls, Properties, 'lg');
                }
            });
        }
    },
    "20.Checking The Properties of nameblock text": function (client) {
        nameBlocksTextCls = pageObj.elements.nameblocktext.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', nameBlocksTextCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.nameBlockTextProps('lg');
                    callback.singleElem(client, nameBlocksTextCls, Properties, 'lg');
                }
            });
        }
    },


    "21.Checking The Properties of Right Arrow in main div": function (client) {
        rightarrowCls = pageObj.elements.paginationrightarrow.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', rightarrowCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.rightArrowProps('lg');
                    callback.singleElem(client, rightarrowCls, Properties, 'lg');
                }
            });
        }
    },
    "22.Checking The Properties of main div of Pagination": function (client) {
        mainDivCls = pageObj.elements.paginationmaindiv.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', mainDivCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.paginationMainDivProps('lg');
                    callback.multiloop(client, mainDivCls, Properties, 'lg');
                }
            });
        }
    },
    "23.Checking The Properties of left Arrow in Pagination": function (client) {
        leftarrowCls = pageObj.elements.paginationleftarrow.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', leftarrowCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.leftArrowProps('lg');
                    callback.singleElem(client, leftarrowCls, Properties, 'lg');
                }
            });
        }
    },

    "24.Checking The Functionality of the page": function (client) {
        input1Cls = pageObj.elements.firstname.selector,
        input2Cls = pageObj.elements.lastname.selector,
        input3Cls = pageObj.elements.banknameselector.selector,
        input4Cls = pageObj.elements.dateofdeathselector.selector,
        searchbuttonCls = pageObj.elements.searchbutton.selector,
         ele = '#G';
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) 
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
                callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN);
                client.click(ele);          
                client.pause(5000);

onealpha:{      
    switch(ele){
                    case '#A':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' A');
                        break;
                    case '#B':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' B');
                        break;
                    case '#C':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' C');
                        break;
                    case '#D':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' D');
                        break;
                    case '#E':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' E');
                        break;
                    case '#F':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' F');
                        break;
                    case '#G':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' G');
                        break;
                    case '#H':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' H');
                        break;
                    case '#I':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' I');
                        break;
                    case '#J':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' J');
                        break;
                    case '#K':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' K');
                        break;
                    case '#L':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' L');
                        break;
                    case '#M':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' M');
                        break;
                    case '#N':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' N');
                        break;
                    case '#O':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' O');
                        break;
                    case '#P':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' P');
                        break;
                    case '#Q':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' Q');
                        break;
                    case '#R':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' R');
                        break;
                    case '#S':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' S');
                        break;
                    case '#T':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' T');
                        break;
                    case '#U':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' U');
                        break;
                    case '#V':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' V');
                        break;
                    case '#W':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' W');
                        break;
                    case '#Y':
                        client.expect.element('.ofs-search-item-title a').text.to.contain(' Y');
                        break;
                 }
                callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN);
                ele = '#B';
                client.click(ele);
                client.pause(5000);
                break onealpha;
             }
            }
         },

         "25.Checking The Properties of  Active Pagination Component": function (client) {
            callback.openURL(client,pageurl.RBS_REM_OUR_FALLEN);
            paginationButtonCls = pageObj.elements.paginationrightbutton.selector,
            paginationActiveButtonCls = pageObj.elements.paginationactivecomponent.selector,
                globalProps(client);
            if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                client.click(paginationButtonCls);
                Properties = comp_props.activePaginationProps('lg');
                callback.singleElem(client, paginationActiveButtonCls, Properties, 'lg');

                //client.expect.element(paginationActiveButtonCls).to.have.css('color').which.equals('rgba(5, 152, 160, 1)');
            }
        },

           "26.Checking The Properties of ResultSearch Button": function (client) {
        searchBtnCls = pageObj.elements.searchbutton.selector,
        searchBtnOut = pageObj.elements.searchbuttonoutline.selector,
            globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', searchBtnCls, results => {
                if (results.value.length > 0) {
                    Properties = comp_props.resSearchButtonProps('lg');
                    props = comp_props.searchButtonHoverProps('lg');
                    callback.multiloop(client, searchBtnCls, Properties, 'lg');
                    client.moveToElement(searchBtnCls,10,10);
                    client.pause(5000);
                    callback.singleElem(client, searchBtnCls, props, 'lg');
        }
    });
                    client.moveToElement(searchBtnCls,10,10);
                    client.mouseButtonDown(searchBtnCls);   
                    client.pause(3000);                 
                    client.moveToElement(searchBtnOut,10,10);
                    client.pause(3000);
                    client.elements('css selector', searchBtnOut, results => {
                    if (results.value.length > 0) {
                         pro = comp_props.searchBtnFocusProps('lg');
                        callback.multiloop(client, searchBtnOut, pro, 'lg');
        
                         }
                     });
                        client.mouseButtonUp(searchBtnCls);          
            }
    },
    //Closing the browser
    'Closing Browser': function(client){
        client.pause(1000);
        client.end();
      }

};




