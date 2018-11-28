var pageurl = require('../../pageurls.js'),
    pageObj,budget_calculator_props,callback,size,brand,   
    data = require('./budget_calculator_data.js'),
    property = data.props;
function globalProps(client) {
    pageObj = client.page.budget_calculator_selectors(),
        callback = client.page.common(),
        rteCallback = client.globals.test_settings.isLocal ? client.page.components.rte.rte() : client.page.rte();
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    budget_calculator_props = require('./budget_calculator_props.js')(client);   
}
function budgetTotal(client, incomeValue, totalIncome) {
    var savingsTotal,value1=[],val=0;
    client.mouseButtonDown(incomeValue);
    client.pause(1000);
    client.elements('css selector', incomeValue, results => {
        results.value.forEach(function (element, index) {
            client.elementIdText(element.ELEMENT, function (results1) {
                client.pause(1000);
                value1[index]=parseFloat(results1.value.replace(/,/g, ''));
                console.log("index value",index,value1[index]);
            });         
        })            
    });
    client.getText(totalIncome, function (results) {
        console.log("total value" + results.value);
        savingsTotal = results.value;
    });
    client.source(() => {
        val=value1[0]-value1[1];
        client.assert.equal("" +val, savingsTotal.replace(/,/g, ''));
});
}

module.exports = {
    '@tags': ['mobile', 'budget-calculator', 'budget-calculator-mobile'],
      //Opening the URL
      "Resize The Window":function(client){
             globalProps(client);
             client.resizeWindow(size['xs'].width, size['xs'].height);
             client.pause(5000) ;
      },
  
      "Opening the Mobile URL": function(client) {
             globalProps(client);
             callback.openURL(client,pageurl.RBS_PER_BUDGET_CALC_MOB);
             console.log("--Mobile--"+pageurl.RBS_PER_BUDGET_CALC_MOB);  
      },

      "1  check for budget calculator wrapper properties": function (client) {
        var budgetCalcWrap = pageObj.elements.budgetCalcWrap.selector,
            header = pageObj.elements.header.selector,
            banner = pageObj.elements.banner.selector,
            bannerH2 = pageObj.elements.bannerH2.selector,
            middleWrap = pageObj.elements.middleWrap.selector,
            logoM = pageObj.elements.logoM.selector,
            headerGroup = pageObj.elements.headerGroup.selector,
            headline = pageObj.elements.headline.selector,
            middleCta = pageObj.elements.middleCta.selector,
            middleCtaFocus = pageObj.elements.middleCtaFocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //budget calculator get started properities
            client.elements('css selector', budgetCalcWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.budgetCalcWrapProps('xs');
                    callback.multiloop(client, budgetCalcWrap, properties, 'xs');
                }
            });

            client.elements('css selector', header, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headerProps('xs');
                    callback.multiloop(client, header, properties, 'xs');
                    client.expect.element(header).to.have.css('background-image').which.contains(brand.props.$bcalc_img_m);
                }
            });
            client.elements('css selector', banner, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.bannerProps('xs');
                    callback.multiloop(client, banner, properties, 'xs');
                }
            });

            client.elements('css selector', bannerH2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.bannerH2Props('xs');
                    callback.multiloop(client, bannerH2, properties, 'xs');
                }
            });
            //middle wrapper props
            client.elements('css selector', middleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleWrapProps('xs');
                    callback.multiloop(client, middleWrap, properties, 'xs');
                }
            });
            // p props
            client.elements('css selector', middleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middlePProps('xs');
                    rteCallback.rteElem(client, middleWrap, properties, 'p', 'xs');
                }
            });
            //logo props
            client.elements('css selector', logoM, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.logoMProps('xs');
                    callback.multiloop(client, logoM, properties, 'xs');
                }
            });
            //header Group Props
            client.elements('css selector', headerGroup, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headerGroupProps('xs');
                    callback.multiloop(client, headerGroup, properties, 'xs');
                }
            });
            client.elements('css selector', headline, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headlineProps('xs');
                    callback.multiloop(client, headline, properties, 'xs');
                }
            });
            //cta props         
            client.elements('css selector', middleCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleCtaProps('xs');
                    callback.multiloop(client, middleCta, properties, 'xs');
                }
            });
            //cta Hover 
            client.moveToElement(middleCta, 10, 10);
            client.pause(2000);
            client.elements('css selector', middleCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('xs');
                    callback.multiloop(client, middleCta, properties, 'xs');
                }
            });

            //cta focus 
            client.mouseButtonDown(middleCta);
            client.pause(2000);
            client.moveToElement(middleCtaFocus, 10, 10);
            client.pause(2000);
            client.elements('css selector', middleCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleCtaFocusProps('xs');
                    callback.multiloop(client, middleCtaFocus, properties, 'xs');
                }
            });

            //functionality of cta 
            client.click(middleCta);
            client.pause(3000);
        }
    },

    "2  check for questioning component properties": function (client) {
        var qFeedback = pageObj.elements.qFeedback.selector,
            qBanner = pageObj.elements.qBanner.selector,
            qIncome = pageObj.elements.qIncome.selector,
            qIncomeH3 = pageObj.elements.qIncomeH3.selector,
            qMiddleWrap = pageObj.elements.qMiddleWrap.selector,
            qTitle = pageObj.elements.qTitle.selector,
            qIndividual = pageObj.elements.qIndividual.selector,
            qSliderTitle = pageObj.elements.qSliderTitle.selector,
            qSliderLabel = pageObj.elements.qSliderLabel.selector,
            qSliderH5 = pageObj.elements.qSliderH5.selector,
            qSliderP = pageObj.elements.qSliderP.selector,
            qSliderWrap = pageObj.elements.qSliderWrap.selector,
            qSliderSelect = pageObj.elements.qSliderSelect.selector,
            qSliderInput = pageObj.elements.qSliderInput.selector,
            qBtwText = pageObj.elements.qBtwText.selector,
            qSlInput = pageObj.elements.qSlInput.selector,
            qSlInputField = pageObj.elements.qSlInputField.selector,
            qSel = pageObj.elements.qSel.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
               //q feedback
               client.expect.element(qFeedback).to.be.present;
               client.elements('css selector', qFeedback, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qFeedbackProps('xs');
                       callback.multiloop(client, qFeedback, properties, 'xs');
                   }
               });
               // q Banner
               client.elements('css selector', qBanner, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qBannerProps('xs');
                       callback.multiloop(client, qBanner, properties, 'xs');
                   }
               });
   
               // q income
               client.elements('css selector', qIncome, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qIncomeProps('xs');
                       callback.multiloop(client, qIncome, properties, 'xs');
                   }
               });
   
               // q income h3
               client.elements('css selector', qIncomeH3, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qIncomeH3Props('xs');
                       callback.multiloop(client, qIncomeH3, properties, 'xs');
                   }
               });
               client.elements('css selector', qMiddleWrap, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qMiddleWrapProps('xs');
                       callback.multiloop(client, qMiddleWrap, properties, 'xs');
                   }
               });
               client.elements('css selector', qTitle, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qTitleProps('xs');
                       callback.multiloop(client, qTitle, properties, 'xs');
                   }
               });
   
               client.elements('css selector', qIndividual, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qIndividualProps('xs');
                       callback.multiloop(client, qIndividual, properties, 'xs');
                   }
               });
   
               client.elements('css selector', qSliderTitle, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderTitleProps('xs');
                       callback.multiloop(client, qSliderTitle, properties, 'xs');
                   }
               });
               client.elements('css selector', qSliderLabel, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderLabelProps('xs');
                       callback.multiloop(client, qSliderLabel, properties, 'xs');
                   }
               });
               client.elements('css selector', qSliderH5, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderH5Props('xs');
                       callback.multiloop(client, qSliderH5, properties, 'xs');
                   }
               });
               client.elements('css selector', qSliderP, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderPProps('xs');
                       callback.multiloop(client, qSliderP, properties, 'xs');
                   }
               });
               client.elements('css selector', qSliderWrap, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderWrapProps('xs');
                       callback.multiloop(client, qSliderWrap, properties, 'xs');
                   }
               });
   
               client.elements('css selector', qSliderSelect, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderSelectProps('xs');
                       callback.multiloop(client, qSliderSelect, properties, 'xs');
                   }
               });
   
               client.elements('css selector', qSliderInput, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSliderInputProps('xs');
                       callback.multiloop(client, qSliderInput, properties, 'xs');
                   }
               });
               client.elements('css selector', qBtwText, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qBtwTextProps('xs');
                       callback.multiloop(client, qBtwText, properties, 'xs');
                   }
               });
               client.elements('css selector', qSlInput, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSlInputProps('xs');
                       callback.multiloop(client, qSlInput, properties, 'xs');
                   }
               });
               client.elements('css selector', qSlInputField, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSlInputFieldProps('xs');
                       callback.multiloop(client, qSlInputField, properties, 'xs');
                   }
               });
   
               client.elements('css selector', qSel, results => {
                   if (results.value.length > 0) {
                       properties = budget_calculator_props.qSelProps('xs');
                       callback.multiloop(client, qSel, properties, 'xs');
                   }
               });
        }
    },
    "3 Check for add more cta properties": function (client) {
        var ACta = pageObj.elements.ACta.selector,
            Ctaa = pageObj.elements.Ctaa.selector,
            qNav = pageObj.elements.qNav.selector,
            qNextSection = pageObj.elements.qNextSection.selector,
            btnNext = pageObj.elements.btnNext.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            // add more properities
            client.elements('css selector', ACta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ACtaProps('xs');
                    callback.multiloop(client, ACta, properties, 'xs');
                }
            });
            //add more cta
            client.elements('css selector', Ctaa, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.CtaaProps('xs');
                    callback.multiloop(client, Ctaa, properties, 'xs');
                    client.expect.element(Ctaa).to.have.css('background-image').which.contains(brand.props.$bcalc_bgimg);
                }
            });
            //navigation
            client.elements('css selector', qNav, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qNavProps('xs');
                    callback.multiloop(client, qNav, properties, 'xs');
                }
            });
            //next section 
            client.elements('css selector', qNextSection, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qNextSectionProps('xs');
                    callback.multiloop(client, qNextSection, properties, 'xs');
                }
            });
            //button next properities before enabling it 
            client.elements('css selector', btnNext, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.btnNextProps('xs');
                    callback.singleElem(client, btnNext, properties, 'xs');
                }
            });
        }

    },

    "4 functionality of questioning component": function (client) {
        var qSliderWrap = pageObj.elements.qSliderWrap.selector,
            qSliderWrapFocus = pageObj.elements.qSliderWrapFocus.selector,
            qSel = pageObj.elements.qSel.selector,
            qSlInput = pageObj.elements.qSlInput.selector,
            qSel1 = pageObj.elements.qSel1.selector,
            Ctaa = pageObj.elements.Ctaa.selector,
            qTitle = pageObj.elements.qTitle.selector,
            cat = pageObj.elements.cat.selector,
            catLabel = pageObj.elements.catLabel.selector,
            checkboxWrap = pageObj.elements.checkboxWrap.selector,
            checkboxLabel = pageObj.elements.checkboxLabel.selector,
            checker = pageObj.elements.checker.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            //select the option 
            client.click(qSel);
            client.pause(1000);
            client.click(qSel1);

            //clicking on the slider 
            client.moveToElement(qSliderWrap, 10, 10);
            client.mouseButtonDown(qSliderWrap);
            client.pause(1000);
            client.moveToElement(qSliderWrap, 200, 300);
            client.mouseButtonUp();
            client.pause(1000);

            //focus of the slider
            client.moveToElement(qSliderWrap, 10, 10);
            client.pause(1000);
            client.mouseButtonDown(qSliderWrap);
            client.elements('css selector', qSliderWrapFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.FocusProps('xs');
                    callback.multiloop(client, qSliderWrapFocus, properties, 'xs');
                }
            });

            //focus of the input field
            client.click(qSlInput);
            client.pause(1000);
            client.elements('css selector', qSlInput, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.FocusProps('xs');
                    callback.multiloop(client, qSlInput, properties, 'xs');
                }
            });

            //add more types of income button 
            client.elements('css selector', Ctaa, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.CtaaProps('xs');
                    callback.multiloop(client, Ctaa, properties, 'xs');
                    client.expect.element(Ctaa).to.have.css('background-image').which.contains(brand.props.$bcalc_bgimg);
                }
            });
            client.click(Ctaa);
            client.pause(1000);
            client.elements('css selector', qTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qTitleProps('xs');
                    callback.multiloop(client, qTitle, properties, 'xs');
                }
            });
            //after clicking on add more selecting different categories 
            client.elements('css selector', cat, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.catProps('xs');
                    callback.multiloop(client, cat, properties, 'xs');
                }
            });
            client.elements('css selector', catLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.catLabelProps('xs');
                    callback.multiloop(client, catLabel, properties, 'xs');
                }
            });
            //checkboxes properities
            client.elements('css selector', checkboxWrap, results => {
                if (results.value.length > 0) {
                    for (var i = 0; i <= 3; i++) {
                        checkboxWrapcls = pageObj.elements["checkboxWrap" + (i + 1)].selector;
                        console.log(checkboxWrapcls);
                        properties = budget_calculator_props["checkboxWrapProps" + (i + 1)]('xs');
                        callback.multiloop(client, checkboxWrapcls, properties, 'xs');
                    }
                }
            });

            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.checkboxLabelProps('xs');
                    callback.multiloop(client, checkboxLabel, properties, 'xs');
                }
            });

            client.elements('css selector', checker, results => {
                if (results.value.length > 0) {
                    results.value.forEach(element => {
                        client.elementIdClick(element.ELEMENT);
                        client.pause(1000);
                    });
                }
            });
        }
    },

    "5 Edit or add new source of income": function (client) {
        var btnNext2 = pageObj.elements.btnNext2.selector,
            btnNext = pageObj.elements.btnNext.selector,
            btnFocus = pageObj.elements.btnFocus.selector,
            slider = pageObj.elements.slider.selector,
            btnBack = pageObj.elements.btnBack.selector,
            btnBack2 = pageObj.elements.btnBack2.selector,
            backfocus = pageObj.elements.backFocus.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            client.elements('css selector', btnNext2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.btnNextEnabledProps('xs');
                    callback.singleElem(client, btnNext2, properties, 'xs');
                }
            });
            //properities of next button after enabling
            client.moveToElement(btnNext2, 10, 10);
            client.pause(2000);
            client.elements('css selector', btnNext2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('xs');
                    callback.singleElem(client, btnNext2, properties, 'xs');
                }
            });

            //focus
            client.mouseButtonDown(btnNext2);
            client.pause(1000);
            properties = budget_calculator_props.Focus1Props('xs');
            callback.singleElem(client, btnFocus, properties, 'xs');

            //click on next button to set values for other income
            client.click(btnNext2);
            client.pause(3000);

            //click on next to continue for essentials
            client.elements('css selector', ".budgetCalc-wrapper .income .bc-ie-cat .active .input-select-val .input-field", results => {
                results.value.forEach(function (element, index) {
                    client.elementIdClear(element.ELEMENT);
                    client.elementIdValue(element.ELEMENT, property.$incomedata);
                    client.pause(2000);
                })

            });

            //click on next to continue for essentials
            client.click(btnNext);
            client.pause(3000);

            // clicking on back button 

            client.elements('css selector', btnBack, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backProps('xs');
                    callback.singleElem(client, btnBack, properties, 'xs');
                }
            });

            //focus of back button
            client.moveToElement(btnBack2, 10, 10);
            client.pause(3000);
            client.mouseButtonDown(btnBack2);
            client.elements('css selector', backfocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backFocusProps('xs');
                    callback.singleElem(client, backfocus, properties, 'xs');
                }
            });

            client.click(btnBack2);
            client.pause(2000);

            //click on next to continue for essentials
            client.click(btnNext);
            client.pause(3000);


            //add new source of income 
            client.moveToElement(slider, 10, 10);
            client.mouseButtonDown(slider);
            client.pause(2000);
            client.moveToElement(slider, 200, 300);
            client.mouseButtonUp();
            client.pause(2000);

            //click on next to continue for essentials
            client.click(btnNext);
            client.pause(3000);

        }

    },
    "6 Check for other bills properties": function (client) {
        var commonTitle = pageObj.elements.commonTitle.selector,
            commonIndividual = pageObj.elements.commonIndividual.selector,
            commonItems = pageObj.elements.commonItems.selector,
            commonIcons = pageObj.elements.commonIcons.selector,
            commonTick = pageObj.elements.commonTick.selector,
            commonP = pageObj.elements.commonP.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            //other bills Title props 
            client.elements('css selector', commonTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonTitleProps('xs');
                    callback.multiloop(client, commonTitle, properties, 'xs');
                }
            });
            //other bills margin props 
            client.elements('css selector', commonIndividual, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonIndividualProps('xs');
                    callback.multiloop(client, commonIndividual, properties, 'xs');
                }
            });
            //other bills item clickable properities 
            client.elements('css selector', commonIndividual, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonIndividualProps('xs');
                    callback.multiloop(client, commonIndividual, properties, 'xs');
                }
            });
        }

        client.elements('css selector', commonItems, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonItemsProps('xs');
                callback.multiloop(client, commonItems, properties, 'xs');
            }
        });
        client.elements('css selector', commonIcons, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonIconsProps('xs');
                callback.multiloop(client, commonIcons, properties, 'xs');
                client.expect.element(commonIcons).to.have.css('background-image').which.contains("none");
            }
        });

        client.elements('css selector', commonP, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonPProps('xs');
                callback.multiloop(client, commonP, properties, 'xs');
            }
        });
        client.elements('css selector', commonTick, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonTickProps('xs');
                callback.multiloop(client, commonTick, properties, 'xs');
                client.expect.element(commonTick).to.have.css('background-image').which.contains('BC-Circle-tick.png');
            }
        });
    },

    "7 Check for other bills functionality": function (client) {
        var btnNxt4 = pageObj.elements.btnNxt4.selector,
            commonCta = pageObj.elements.commonCta.selector,
            billsChecker1 = pageObj.elements.billsChecker1.selector,
            billsChecker2 = pageObj.elements.billsChecker2.selector,
            btnNext = pageObj.elements.btnNext.selector,
            error = pageObj.elements.error.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            // clicking on the budget icons
            client.elements('css selector', '.budgetCalc-wrapper .budget-sec-LC', results => {
                if (results.value.length) {
                    for (var i = 0; i <= 4; i++) {
                        budgeticons = pageObj.elements["budgeticons" + (i + 1)].selector;
                        console.log(budgeticons);
                        client.click(budgeticons);
                        client.pause(3000);
                    }
                }
            })

            client.click(commonCta);
            client.pause(3000);

            // adding some more bills after clicking add more bottom
            client.click(billsChecker1);
            client.pause(2000);
            client.click(billsChecker2);
            client.pause(2000);

            //click on next to continue for essentials
            client.click(btnNxt4);
            client.pause(3000);
            client.elements('css selector', ".bc-ie-cat[style*='display: block;'] .bcal-ques-com.active .bcal-sl-input .input-field  ", results => {
                results.value.forEach(function (element, index) {
                    client.elementIdClear(element.ELEMENT);
                    client.elementIdValue(element.ELEMENT, property.$expensedata);
                    client.pause(2000);
                })

            });

            //validating error message
            client.elements('css selector', error, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.errorProps('xs');
                    callback.multiloop(client, error, properties, 'xs');
                    client.getText(error, function (result) {
                        this.assert.equal(result.value, property.$expError);
                    });
                }
            });
            client.click(btnNext);
            client.pause(3000);

        }
    },

    "8 Results page Edit income and edit expense": function (client) {
        var editWrap = pageObj.elements.editWrap.selector,
            editIncome = pageObj.elements.editIncome.selector,
            editExpense = pageObj.elements.editExpense.selector,
            editVol = pageObj.elements.editVol.selector,
            finalResult = pageObj.elements.finalResult.selector,
            fmiddleWrap = pageObj.elements.fmiddleWrap.selector,
            donut = pageObj.elements.donut.selector,
            donutHeading = pageObj.elements.donutHeading.selector,
            donutSpan = pageObj.elements.donutSpan.selector,
            donutSpan2 = pageObj.elements.donutSpan2.selector,
            editLabel = pageObj.elements.editLabel.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.elements('css selector', editWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editWrapProps('xs');
                    callback.multiloop(client, editWrap, properties, 'xs');
                }
            });
            client.elements('css selector', editIncome, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editIncomeProps('xs');
                    callback.multiloop(client, editIncome, properties, 'xs');
                }
            });

            client.elements('css selector', editLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editLabelProps('xs');
                    callback.multiloop(client, editLabel, properties, 'xs');
                }
            });

            client.elements('css selector', editExpense, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editExpenseProps('xs');
                    callback.multiloop(client, editExpense, properties, 'xs');
                }
            });
            client.pause(3000);
            client.elements('css selector', editVol, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editVol1Props('xs');
                    callback.multiloop(client, editVol, properties, 'xs');
                }
            });

            client.elements('css selector', finalResult, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.finalResultProps('xs');
                    callback.multiloop(client, finalResult, properties, 'xs');
                }
            });

            client.elements('css selector', fmiddleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.fmiddleWrapProps('xs');
                    callback.multiloop(client, fmiddleWrap, properties, 'xs');
                }
            });

            client.elements('css selector', donut, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutProps('xs');
                    callback.multiloop(client, donut, properties, 'xs');
                }
            });

            client.elements('css selector', donutHeading, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutHeadingProps('xs');
                    callback.multiloop(client, donutHeading, properties, 'xs');
                }
            });
            client.elements('css selector', donutSpan, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutSpanProps('xs');
                    callback.multiloop(client, donutSpan, properties, 'xs');
                }
            });
            client.elements('css selector', donutSpan2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutSpan2Props('xs');
                    callback.multiloop(client, donutSpan2, properties, 'xs');
                }
            });
        }
    },

    "9 Results page chart and slider": function (client) {
        var chartSlider = pageObj.elements.chartSlider.selector,
            innerCircle = pageObj.elements.innerCircle.selector,
            chartBudget = pageObj.elements.chartBudget.selector,
            chartTitle = pageObj.elements.chartTitle.selector,
            chartCost = pageObj.elements.chartCost.selector,
            barsWrap = pageObj.elements.barsWrap.selector,
            barsCat = pageObj.elements.barsCat.selector,
            barsLabelVal = pageObj.elements.barsLabelVal.selector,
            barsVal = pageObj.elements.barsVal.selector,
            colorWrap = pageObj.elements.colorWrap.selector,
            color = pageObj.elements.color.selector,
            barsLabel = pageObj.elements.barsLabel.selector,
            btnIncome = pageObj.elements.btnIncome.selector,
            incomeInput = pageObj.elements.incomeInput.selector,
            btnNext = pageObj.elements.btnNext.selector,
            resultValue = pageObj.elements.resultValue.selector,
            totalResult = pageObj.elements.totalResult.selector,
            billsChecker2 = pageObj.elements.billsChecker2.selector,
            btnExpense = pageObj.elements.btnExpense.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.elements('css selector', chartSlider, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartSliderProps('xs');
                    callback.multiloop(client, chartSlider, properties, 'xs');
                }
            });
            client.elements('css selector', innerCircle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.innerCircleProps('xs');
                    callback.multiloop(client, innerCircle, properties, 'xs');
                }
            });

            client.elements('css selector', chartBudget, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartBudgetProps('xs');
                    callback.multiloop(client, chartBudget, properties, 'xs');
                }
            });

            client.elements('css selector', chartTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartTitleProps('xs');
                    callback.multiloop(client, chartTitle, properties, 'xs');
                }
            });

            client.elements('css selector', chartCost, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartCostProps('xs');
                    callback.multiloop(client, chartCost, properties, 'xs');
                }
            });

            client.elements('css selector', barsWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsWrapProps('xs');
                    callback.multiloop(client, barsWrap, properties, 'xs');
                }
            });

            client.elements('css selector', barsCat, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsCatProps('xs');
                    callback.multiloop(client, barsCat, properties, 'xs');
                }
            });

            client.elements('css selector', barsLabelVal, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsLabelValProps('xs');
                    callback.multiloop(client, barsLabelVal, properties, 'xs');
                }
            });

            client.elements('css selector', barsLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsLabelProps('xs');
                    callback.multiloop(client, barsLabel, properties, 'xs');
                }
            });
            client.elements('css selector', barsVal, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsValProps('xs');
                    callback.multiloop(client, barsVal, properties, 'xs');
                }
            });
            client.elements('css selector', colorWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.colorWrapProps('xs');
                    callback.multiloop(client, colorWrap, properties, 'xs');
                }
            });
            //functionality of editincome and edit expense
            client.click(btnIncome);
            client.pause(1000);
            client.clearValue(incomeInput);
            client.setValue(incomeInput, property.$incomedata_1);
            client.pause(1000);

            //next button
            client.click(btnNext);
            client.pause(3000);

            //Edit expense 
            client.moveToElement(btnExpense, 10, 10);
            client.pause(2000);
            client.click(btnExpense);
            client.pause(1000);
            client.clearValue(billsChecker2);
            client.setValue(billsChecker2, property.$expense_1);
            client.pause(2000);
            client.click(btnNext);
            client.pause(1000);

             //validating total results 
             budgetTotal(client, resultValue, totalResult);

            client.elements('css selector', color, results => {
                console.log("length" + results.value.length);
                results.value.forEach(function (element, index) {
                    console.log("index" + index);
                    properties = budget_calculator_props["colorProps" + (index + 1)]('xs');
                    callback.singleloop(client, element, properties, 'xs');
                    client.pause(1000);
                })
           });

        }
    },

    "10 Results page something and email properities and functionality": function (client) {
        var somethingTitle = pageObj.elements.somethingTitle.selector,
            somethingRep = pageObj.elements.somethingRep.selector,
            somethingBlock = pageObj.elements.somethingBlock.selector,
            blockH3 = pageObj.elements.blockH3.selector,
            blockText = pageObj.elements.blockText.selector,
            blockCta = pageObj.elements.blockCta.selector,
            blockCtaFocus = pageObj.elements.blockCtaFocus.selector,
            email = pageObj.elements.email.selector,
            emailTitle = pageObj.elements.emailTitle.selector,
            emailLink = pageObj.elements.emailLink.selector,
            emailLinkFocus = pageObj.elements.emailLinkFocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.elements('css selector', somethingTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingTitleProps('xs');
                    callback.multiloop(client, somethingTitle, properties, 'xs');
                }
            });
            client.elements('css selector', somethingRep, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingRepProps('xs');
                    callback.multiloop(client, somethingRep, properties, 'xs');
                }
            });

            client.elements('css selector', somethingBlock, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingBlockProps('xs');
                    callback.multiloop(client, somethingBlock, properties, 'xs');
                }
            });

            client.elements('css selector', blockH3, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockH3Props('xs');
                    callback.multiloop(client, blockH3, properties, 'xs');
                }
            });

            client.elements('css selector', blockText, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockTextProps('xs');
                    callback.multiloop(client, blockText, properties, 'xs');
                }
            });

            client.elements('css selector', blockCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockCtaProps('xs');
                    callback.multiloop(client, blockCta, properties, 'xs');
                }
            });
            client.moveToElement(blockCta, 10, 10);
            client.pause(1000);
            client.mouseButtonDown(blockCta);
            client.pause(2000);
            client.elements('css selector', blockCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.Focus1Props('xs');
                    callback.multiloop(client, blockCtaFocus, properties, 'xs');
                }
            });
            client.elements('css selector', email, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailProps('xs');
                    callback.multiloop(client, email, properties, 'xs');
                }
            });

            client.elements('css selector', emailTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailTitleProps('xs');
                    callback.multiloop(client, emailTitle, properties, 'xs');
                }
            });
            client.elements('css selector', emailLink, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailLinkProps('xs');
                    callback.multiloop(client, emailLink, properties, 'xs');
                }
            });
            client.moveToElement(emailLink, 10, 10);
            client.pause(1000);
            client.mouseButtonDown(emailLink);
            client.pause(1000);
            client.elements('css selector', emailLinkFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backFocusProps('xs');
                    callback.multiloop(client, emailLinkFocus, properties, 'xs');
                }
            });
            client.click(emailLink);
            client.pause(1000);
        }
    },

    "11 popup properities and validations": function (client) {
        var popupWrap = pageObj.elements.popupWrap.selector,
            popupH2 = pageObj.elements.popupH2.selector,
            popupInputField = pageObj.elements.popupInputField.selector,
            popupCta = pageObj.elements.popupCta.selector,
            popupCtaFocus = pageObj.elements.popupCtaFocus.selector,
            popupClose = pageObj.elements.popupClose.selector,
            popupCloseFocus = pageObj.elements.popupCloseFocus.selector,
            error = pageObj.elements.error.selector,
            popupContent = pageObj.elements.popupContent.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.elements('css selector', popupWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupWrapProps('xs');
                    callback.singleElem(client, popupWrap, properties, 'xs');
                }
            });

            client.elements('css selector', popupH2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupH2Props('xs');
                    callback.singleElem(client, popupH2, properties, 'xs');
                }
            });
            client.elements('css selector', popupInputField, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupInputFieldProps('xs');
                    callback.multiloop(client, popupInputField, properties, 'xs');
                }
            });
            //focus props
            client.elements('css selector', popupInputField, function (result) {
                result.value.forEach(function (element, index) {
                    client.elementIdClick(element.ELEMENT)
                    properties = budget_calculator_props.fieldFocusProps('xs');
                    callback.singleElem(client, popupInputField + ":focus", properties, 'xs');
                    client.pause(2000);
                })
            });

            client.elements('css selector', popupCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupDisabledProps('xs');
                    callback.singleElem(client, popupCta, properties, 'xs');
                }
            });


            client.elements('css selector', popupClose, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupCloseProps('xs');
                    callback.singleElem(client, popupClose, properties, 'xs');
                }
            });
           // hover props 
            client.moveToElement(popupClose, 10, 10);
            client.pause(1000);
            client.elements('css selector', popupClose, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupCloseHoverProps('xs');
                    callback.singleElem(client, popupClose, properties, 'xs');
                }
            });
            //Focus props
            client.moveToElement(popupClose,10,10);
            client.pause(1000);
            client.mouseButtonDown(popupClose);
            client.pause(2000);
            client.elements('css selector', popupCloseFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.fieldFocusProps('xs');
                    callback.singleElem(client, popupCloseFocus, properties, 'xs');
                }
            });


            client.elements('css selector', popupContent, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupContentProps('xs');
                    callback.singleElem(client, popupContent, properties, 'xs');
                }
            });

            client.elements('css selector', error, results => {
                if (results.value.length > 0) {
                    results.value.forEach(function (element, index) {
                        client.elementIdClick(element.ELEMENT);
                        properties = budget_calculator_props.errorProps('xs');
                        callback.singleloop(client, element, properties, 'xs');
                        client.pause(2000);
                        client.elementIdText(element.ELEMENT, function (results) {
                            this.assert.equal(results.value, "This field is required");
                        });
                    });
                }
            });

            client.elements('css selector', popupInputField, results => {
                results.value.forEach(function (element, index) {
                    client.elementIdValue(element.ELEMENT, 'abc');
                    client.pause(2000);
                })
            });
            client.click(popupContent);
            client.pause(1000);

            client.getText(error, function (results) {
                this.assert.equal(results.value, "Please enter a valid email address");
            });

            client.elements('css selector', popupInputField, results => {
                results.value.forEach(function (element, index) {
                    if (index === 0) {
                        client.elementIdClear(element.ELEMENT);
                        client.elementIdValue(element.ELEMENT, 'abc');
                        client.pause(2000);
                    }
                    else {
                        client.elementIdClear(element.ELEMENT);
                        client.elementIdValue(element.ELEMENT, 'abc@gmail.com');
                        client.pause(2000);
                    }
                })
            });

            client.elements('css selector', popupCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupEnabledProps('xs');
                    callback.singleElem(client, popupCta, properties, 'xs');
                }
            });

            //hover props 
            client.moveToElement(popupCta, 10, 10);
            client.pause(1000);
            client.elements('css selector', popupCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('xs');
                    callback.singleElem(client, popupCta, properties, 'xs');
                }
            });
            //Focus props
            client.mouseButtonDown(popupCta);
            client.pause(1000);
            client.elements('css selector', popupCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.Focus1Props('xs');
                    callback.singleElem(client, popupCtaFocus, properties, 'xs');
                }
            });

        }
    },
    "Ending the session": function (client) {
        client.end();
    },

};          