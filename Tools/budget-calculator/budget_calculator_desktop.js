var pageurl = require('../../pageurls.js'),
    pageObj,budget_calculator_props,callback,size,brand,   
    data = require('./budget_calculator_data.js'),
    property = data.props;
var incomeval = 0, totalval;
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

//to calculate total income and total expense 
function budgetCalc(client, incomeValue, totalIncome, offset) {
    client.mouseButtonDown(incomeValue);
    client.pause(1000);
    client.elements('css selector', incomeValue, results => {
        if (offset == 1) {
            incomeval = 0;
        }
        results.value.forEach(function (element, index) {
            client.elementIdText(element.ELEMENT, function (results1) {
                client.pause(4000);
                incomeval += parseFloat(results1.value.replace(/,/g, ''));
            });
        })
        return incomeval;
    });
    client.getText(totalIncome, function (results) {
        totalval = results.value;
    });
    client.source(() => {
        client.assert.equal("" + incomeval, totalval.replace(/,/g, ''));
    });
}

//to calculate the total savings 
function budgetTotal(client, incomeValue, totalIncome) {
    var savingsTotal, value1 = [],val=0;
    client.mouseButtonDown(incomeValue);
    client.pause(1000);
    client.elements('css selector', incomeValue, results => {
        results.value.forEach(function (element, index) {
            client.elementIdText(element.ELEMENT, function (results1) {
                client.pause(3000);
                value1[index]=parseFloat(results1.value.replace(/,/g, ''));
            });           
        })       
    });
    client.getText(totalIncome, function (results) {
        savingsTotal = results.value;
    });
    client.source(() => {
        val=value1[0]-value1[1];
            client.assert.equal("" +val, savingsTotal.replace(/,/g, ''));
});
}
module.exports = {
    '@tags': ['budget-calculator-desktop', 'desktop', 'budget-calculator'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client, pageurl.RBS_PER_BUDGET_CALC);
        console.log("--Desktop--" + pageurl.RBS_PER_BUDGET_CALC);
    },

    "1  check for budget calculator wrapper properties(get started page)": function (client) {
        var budgetCalcWrap = pageObj.elements.budgetCalcWrap.selector,
            header = pageObj.elements.header.selector,
            banner = pageObj.elements.banner.selector,
            bannerH2 = pageObj.elements.bannerH2.selector,
            middleWrap = pageObj.elements.middleWrap.selector,
            logo = pageObj.elements.logo.selector,
            headerGroup = pageObj.elements.headerGroup.selector,
            headline = pageObj.elements.headline.selector,
            middleCta = pageObj.elements.middleCta.selector,
            middleCtaFocus = pageObj.elements.middleCtaFocus.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //budget calculator get started properities
            client.elements('css selector', budgetCalcWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.budgetCalcWrapProps('lg');
                    callback.multiloop(client, budgetCalcWrap, properties, 'lg');
                }
            });

            client.elements('css selector', header, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headerProps('lg');
                    callback.multiloop(client, header, properties, 'lg');
                    client.expect.element(header).to.have.css('background-image').which.contains('budget-header-banner-bg-d.png');
                }
            });
            client.elements('css selector', banner, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.bannerProps('lg');
                    callback.multiloop(client, banner, properties, 'lg');
                }
            });

            client.elements('css selector', bannerH2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.bannerH2Props('lg');
                    callback.multiloop(client, bannerH2, properties, 'lg');
                }
            });
            //middle wrapper props
            client.elements('css selector', middleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleWrapProps('lg');
                    callback.multiloop(client, middleWrap, properties, 'lg');
                }
            });
            // p props
            client.elements('css selector', middleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middlePProps('lg');
                    rteCallback.rteElem(client, middleWrap, properties, 'p', 'lg');
                }
            });
            //logo props
            client.elements('css selector', logo, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.logoProps('lg');
                    callback.multiloop(client, logo, properties, 'lg');
                }
            });
            //header Group Props
            client.elements('css selector', headerGroup, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headerGroupProps('lg');
                    callback.multiloop(client, headerGroup, properties, 'lg');
                }
            });
            client.elements('css selector', headline, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.headlineProps('lg');
                    callback.multiloop(client, headline, properties, 'lg');
                }
            });
            //cta props         
            client.elements('css selector', middleCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleCtaProps('lg');
                    callback.multiloop(client, middleCta, properties, 'lg');
                }
            });
            //cta Hover 
            client.moveToElement(middleCta, 10, 10);
            client.pause(2000);
            client.elements('css selector', middleCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('lg');
                    callback.multiloop(client, middleCta, properties, 'lg');
                }
            });

            //cta focus 
            client.mouseButtonDown(middleCta);
            client.pause(1000);
            client.moveToElement(middleCtaFocus, 10, 10);
            client.pause(1000);
            client.elements('css selector', middleCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.middleCtaFocusProps('lg');
                    callback.multiloop(client, middleCtaFocus, properties, 'lg');
                }
            });

            //functionality of cta 
            client.click(middleCta);
            client.pause(6000);
        }
    },

    "2  check for questioning component properties(how much do you earn page)": function (client) {
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //q feedback
            client.expect.element(qFeedback).to.be.present;
            client.elements('css selector', qFeedback, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qFeedbackProps('lg');
                    callback.multiloop(client, qFeedback, properties, 'lg');
                }
            });
            // q Banner
            client.elements('css selector', qBanner, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qBannerProps('lg');
                    callback.multiloop(client, qBanner, properties, 'lg');
                }
            });

            // q income
            client.elements('css selector', qIncome, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qIncomeProps('lg');
                    callback.multiloop(client, qIncome, properties, 'lg');
                }
            });

            // q income h3
            client.elements('css selector', qIncomeH3, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qIncomeH3Props('lg');
                    callback.multiloop(client, qIncomeH3, properties, 'lg');
                }
            });
            client.elements('css selector', qMiddleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qMiddleWrapProps('lg');
                    callback.multiloop(client, qMiddleWrap, properties, 'lg');
                }
            });
            client.elements('css selector', qTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qTitleProps('lg');
                    callback.multiloop(client, qTitle, properties, 'lg');
                }
            });

            client.elements('css selector', qIndividual, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qIndividualProps('lg');
                    callback.multiloop(client, qIndividual, properties, 'lg');
                }
            });

            client.elements('css selector', qSliderTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderTitleProps('lg');
                    callback.multiloop(client, qSliderTitle, properties, 'lg');
                }
            });
            client.elements('css selector', qSliderLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderLabelProps('lg');
                    callback.multiloop(client, qSliderLabel, properties, 'lg');
                }
            });
            client.elements('css selector', qSliderH5, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderH5Props('lg');
                    callback.multiloop(client, qSliderH5, properties, 'lg');
                }
            });
            client.elements('css selector', qSliderP, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderPProps('lg');
                    callback.multiloop(client, qSliderP, properties, 'lg');
                }
            });
            client.elements('css selector', qSliderWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderWrapProps('lg');
                    callback.multiloop(client, qSliderWrap, properties, 'lg');
                }
            });

            client.elements('css selector', qSliderSelect, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderSelectProps('lg');
                    callback.multiloop(client, qSliderSelect, properties, 'lg');
                }
            });

            client.elements('css selector', qSliderInput, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSliderInputProps('lg');
                    callback.multiloop(client, qSliderInput, properties, 'lg');
                }
            });
            client.elements('css selector', qBtwText, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qBtwTextProps('lg');
                    callback.multiloop(client, qBtwText, properties, 'lg');
                }
            });
            client.elements('css selector', qSlInput, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSlInputProps('lg');
                    callback.multiloop(client, qSlInput, properties, 'lg');
                }
            });
            client.elements('css selector', qSlInputField, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSlInputFieldProps('lg');
                    callback.multiloop(client, qSlInputField, properties, 'lg');
                }
            });

            client.elements('css selector', qSel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qSelProps('lg');
                    callback.multiloop(client, qSel, properties, 'lg');
                }
            });
        }
    },
    "3 Check for add more cta properties (want to add more income page)": function (client) {
        var ACta = pageObj.elements.ACta.selector,
            Ctaa = pageObj.elements.Ctaa.selector,
            qNav = pageObj.elements.qNav.selector,
            qNextSection = pageObj.elements.qNextSection.selector,
            btnNext = pageObj.elements.btnNext.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            // add more properities
            client.elements('css selector', ACta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ACtaProps('lg');
                    callback.multiloop(client, ACta, properties, 'lg');
                }
            });
            //add more cta
            client.elements('css selector', Ctaa, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.CtaaProps('lg');
                    callback.multiloop(client, Ctaa, properties, 'lg');
                    client.expect.element(Ctaa).to.have.css('background-image').which.contains(brand.props.$bcalc_img);
                }
            });
            //navigation
            client.elements('css selector', qNav, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qNavProps('lg');
                    callback.multiloop(client, qNav, properties, 'lg');
                }
            });
            //next section 
            client.elements('css selector', qNextSection, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qNextSectionProps('lg');
                    callback.multiloop(client, qNextSection, properties, 'lg');
                }
            });
            //button next properities before enabling it 
            client.elements('css selector', btnNext, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.btnNextProps('lg');
                    callback.singleElem(client, btnNext, properties, 'lg');
                }
            });
        }

    },

    "4 functionality of questioning component (want to add more income page) ": function (client) {
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

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

           // select the option 
            client.click(qSel);
            client.pause(1000);
            client.click(qSel1);

            //clicking on the slider 
            client.moveToElement(qSliderWrap, 10, 10);
            client.mouseButtonDown(qSliderWrap);
            client.pause(2000);
            client.moveToElement(qSliderWrap, 200, 300);
            client.mouseButtonUp();
            client.pause(2000);

            //focus of the slider
            client.moveToElement(qSliderWrap, 10, 10);
            client.pause(3000);
            client.mouseButtonDown(qSliderWrap);
            client.elements('css selector', qSliderWrapFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.FocusProps('lg');
                    callback.multiloop(client, qSliderWrapFocus, properties, 'lg');
                }
            });

           // focus of the input field
            client.click(qSlInput);
            client.pause(4000);
            client.elements('css selector', qSlInput, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.FocusProps('lg');
                    callback.multiloop(client, qSlInput, properties, 'lg');
                }
            });
            //add more types of income button 
            client.elements('css selector', Ctaa, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.CtaaProps('lg');
                    callback.multiloop(client, Ctaa, properties, 'lg');
                    client.expect.element(Ctaa).to.have.css('background-image').which.contains(brand.props.$bcalc_img);
                }
            });
            client.click(Ctaa);
            client.pause(1000);
            client.elements('css selector', qTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.qTitleProps('lg');
                    callback.multiloop(client, qTitle, properties, 'lg');
                }
            });
            //after clicking on add more selecting different categories 
            client.elements('css selector', cat, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.catProps('lg');
                    callback.multiloop(client, cat, properties, 'lg');
                }
            });
            client.elements('css selector', catLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.catLabelProps('lg');
                    callback.multiloop(client, catLabel, properties, 'lg');
                }
            });
            //checkboxes properities
            client.elements('css selector', checkboxWrap, results => {
                if (results.value.length > 0) {
                    for (var i = 0; i <= 3; i++) {
                        checkboxWrapcls = pageObj.elements["checkboxWrap" + (i + 1)].selector;
                        console.log(checkboxWrapcls);
                        properties = budget_calculator_props["checkboxWrapProps" + (i + 1)]('lg');
                        callback.multiloop(client, checkboxWrapcls, properties, 'lg');
                    }
                }
            });

            client.elements('css selector', checkboxLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.checkboxLabelProps('lg');
                    callback.multiloop(client, checkboxLabel, properties, 'lg');
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
            backfocus = pageObj.elements.backFocus.selector,
            incomeValue = pageObj.elements.incomeValue.selector,
            totalIncome = pageObj.elements.totalIncome.selector,
            expenseValue = pageObj.elements.expenseValue.selector,
            totalExpense = pageObj.elements.totalExpense.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', btnNext2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.btnNextEnabledProps('lg');
                    callback.singleElem(client, btnNext2, properties, 'lg');
                }
            });


            //properities of next button after enabling
            client.moveToElement(btnNext2, 10, 10);
            client.pause(2000);
            client.elements('css selector', btnNext2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('lg');
                    callback.singleElem(client, btnNext2, properties, 'lg');
                }
            });

            //focus
            client.mouseButtonDown(btnNext2);
            client.pause(1000);
            properties = budget_calculator_props.Focus1Props('lg');
            callback.singleElem(client, btnFocus, properties, 'lg');

            //click on next button to set values for other income
            client.click(btnNext2);
            client.pause(3000);

            //click on next to continue for essentials
            client.elements('css selector', ".budgetCalc-wrapper .income .bc-ie-cat .active .input-select-val .input-field", results => {
                results.value.forEach(function (element, index) {
                    client.elementIdValue(element.ELEMENT, property.$incomedata);
                    client.pause(2000);
                })

            });


            //validating income (adding total income) 

           budgetCalc(client, incomeValue, totalIncome, 1);

            //click on next to continue for essentials
            client.click(btnNext);
            client.pause(3000);

            // clicking on back button 

            client.elements('css selector', btnBack, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backProps('lg');
                    callback.singleElem(client, btnBack, properties, 'lg');
                }
            });

            //focus of back button
            client.moveToElement(btnBack2, 10, 10);
            client.pause(3000);
            client.mouseButtonDown(btnBack2);
            client.elements('css selector', backfocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backFocusProps('lg');
                    callback.singleElem(client, backfocus, properties, 'lg');
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
            client.pause(5000);

            //vaildationg expense(adding total expense)
           budgetCalc(client, expenseValue, totalExpense, 1);
            //click on next to continue for essentials
            client.click(btnNext);
            client.pause(3000);

        }

    },
    "6 Check for other bills properties (other important bills page)": function (client) {
        var commonTitle = pageObj.elements.commonTitle.selector,
            commonIndividual = pageObj.elements.commonIndividual.selector,
            commonItems = pageObj.elements.commonItems.selector,
            commonIcons = pageObj.elements.commonIcons.selector,
            commonTick = pageObj.elements.commonTick.selector,
            commonP = pageObj.elements.commonP.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            //other bills Title props 
            client.elements('css selector', commonTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonTitleProps('lg');
                    callback.multiloop(client, commonTitle, properties, 'lg');
                }
            });
            //other bills margin props 
            client.elements('css selector', commonIndividual, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonIndividualProps('lg');
                    callback.multiloop(client, commonIndividual, properties, 'lg');
                }
            });
            //other bills item clickable properities 
            client.elements('css selector', commonIndividual, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.commonIndividualProps('lg');
                    callback.multiloop(client, commonIndividual, properties, 'lg');
                }
            });
        }

        client.elements('css selector', commonItems, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonItemsProps('lg');
                callback.multiloop(client, commonItems, properties, 'lg');
            }
        });
        client.elements('css selector', commonIcons, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonIconsProps('lg');
                callback.multiloop(client, commonIcons, properties, 'lg');
                client.expect.element(commonIcons).to.have.css('background-image').which.contains(brand.props.$bcalc_img_1);
            }
        });

        client.elements('css selector', commonP, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonPProps('lg');
                callback.multiloop(client, commonP, properties, 'lg');
            }
        });
        client.elements('css selector', commonTick, results => {
            if (results.value.length > 0) {
                properties = budget_calculator_props.commonTickProps('lg');
                callback.multiloop(client, commonTick, properties, 'lg');
                client.expect.element(commonTick).to.have.css('background-image').which.contains('BC-Circle-tick.png');
            }
        });
    },

    "7 Check for other bills functionality (other important bills page)": function (client) {
        var btnNxt4 = pageObj.elements.btnNxt4.selector,
            commonCta = pageObj.elements.commonCta.selector,
            billsChecker1 = pageObj.elements.billsChecker1.selector,
            billsChecker2 = pageObj.elements.billsChecker2.selector,
            btnNext = pageObj.elements.btnNext.selector,
            error = pageObj.elements.error.selector,
            expenseValue1 = pageObj.elements.expenseValue1.selector,
            totalExpense = pageObj.elements.totalExpense.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

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
                    client.elementIdValue(element.ELEMENT, property.$expensedata);
                    client.pause(2000);
                })

            });
            //validating expense (adding the expense)
           budgetCalc(client, expenseValue1, totalExpense, 0);

            //validating error message
            client.elements('css selector', error, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.errorProps('lg');
                    callback.multiloop(client, error, properties, 'lg');
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', editWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editWrapProps('lg');
                    callback.multiloop(client, editWrap, properties, 'lg');
                }
            });
            client.elements('css selector', editIncome, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editIncomeProps('lg');
                    callback.multiloop(client, editIncome, properties, 'lg');
                }
            });

            client.elements('css selector', editLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editLabelProps('lg');
                    callback.multiloop(client, editLabel, properties, 'lg');
                }
            });

            client.elements('css selector', editExpense, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editExpenseProps('lg');
                    callback.multiloop(client, editExpense, properties, 'lg');
                }
            });

            client.elements('css selector', editVol, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.editVolProps('lg');
                    callback.multiloop(client, editVol, properties, 'lg');
                }
            });

            client.elements('css selector', finalResult, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.finalResultProps('lg');
                    callback.multiloop(client, finalResult, properties, 'lg');
                }
            });

            client.elements('css selector', fmiddleWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.fmiddleWrapProps('lg');
                    callback.multiloop(client, fmiddleWrap, properties, 'lg');
                }
            });

            client.elements('css selector', donut, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutProps('lg');
                    callback.multiloop(client, donut, properties, 'lg');
                }
            });

            client.elements('css selector', donutHeading, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutHeadingProps('lg');
                    callback.multiloop(client, donutHeading, properties, 'lg');
                }
            });
            client.elements('css selector', donutSpan, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutSpanProps('lg');
                    callback.multiloop(client, donutSpan, properties, 'lg');
                }
            });
            client.elements('css selector', donutSpan2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.donutSpan2Props('lg');
                    callback.multiloop(client, donutSpan2, properties, 'lg');
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
            incomeValue = pageObj.elements.incomeValue.selector,
            totalIncome = pageObj.elements.totalIncome.selector,
            resultValue = pageObj.elements.resultValue.selector,
            totalResult = pageObj.elements.totalResult.selector,
            billsChecker2 = pageObj.elements.billsChecker2.selector,
            btnExpense = pageObj.elements.btnExpense.selector;
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', chartSlider, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartSliderProps('lg');
                    callback.multiloop(client, chartSlider, properties, 'lg');
                }
            });
            client.elements('css selector', innerCircle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.innerCircleProps('lg');
                    callback.multiloop(client, innerCircle, properties, 'lg');
                }
            });

            client.elements('css selector', chartBudget, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartBudgetProps('lg');
                    callback.multiloop(client, chartBudget, properties, 'lg');
                }
            });

            client.elements('css selector', chartTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartTitleProps('lg');
                    callback.multiloop(client, chartTitle, properties, 'lg');
                }
            });

            client.elements('css selector', chartCost, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.chartCostProps('lg');
                    callback.multiloop(client, chartCost, properties, 'lg');
                }
            });

            client.elements('css selector', barsWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsWrapProps('lg');
                    callback.multiloop(client, barsWrap, properties, 'lg');
                }
            });

            client.elements('css selector', barsCat, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsCatProps('lg');
                    callback.multiloop(client, barsCat, properties, 'lg');
                }
            });

            client.elements('css selector', barsLabelVal, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsLabelValProps('lg');
                    callback.multiloop(client, barsLabelVal, properties, 'lg');
                }
            });

            client.elements('css selector', barsLabel, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsLabelProps('lg');
                    callback.multiloop(client, barsLabel, properties, 'lg');
                }
            });
            client.elements('css selector', barsVal, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.barsValProps('lg');
                    callback.multiloop(client, barsVal, properties, 'lg');
                }
            });
            client.elements('css selector', colorWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.colorWrapProps('lg');
                    callback.multiloop(client, colorWrap, properties, 'lg');
                }
            });
            //functionality of editincome and edit expense
            client.click(btnIncome);
            client.pause(1000);
            client.clearValue(incomeInput);
            client.setValue(incomeInput, property.$incomedata_1);
            client.pause(1000);

            //validating income after changing the values 
            budgetCalc(client, incomeValue, totalIncome, 1);

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

            //validating total results (savings) 
            budgetTotal(client, resultValue, totalResult);

            client.elements('css selector', color, results => {
                console.log("length" + results.value.length);
                results.value.forEach(function (element, index) {
                    console.log("index" + index);
                    properties = budget_calculator_props["colorProps" + (index + 1)]('lg');
                    callback.singleloop(client, element, properties, 'lg');
                    client.pause(1000);
                })
            });

        }
    },

    "10 Results page something ,email properities and its functionality": function (client) {
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', somethingTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingTitleProps('lg');
                    callback.multiloop(client, somethingTitle, properties, 'lg');
                }
            });
            client.elements('css selector', somethingRep, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingRepProps('lg');
                    callback.multiloop(client, somethingRep, properties, 'lg');
                }
            });

            client.elements('css selector', somethingBlock, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.somethingBlockProps('lg');
                    callback.multiloop(client, somethingBlock, properties, 'lg');
                }
            });

            client.elements('css selector', blockH3, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockH3Props('lg');
                    callback.multiloop(client, blockH3, properties, 'lg');
                }
            });

            client.elements('css selector', blockText, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockTextProps('lg');
                    callback.multiloop(client, blockText, properties, 'lg');
                }
            });

            client.elements('css selector', blockCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.blockCtaProps('lg');
                    callback.multiloop(client, blockCta, properties, 'lg');
                }
            });

            client.moveToElement(blockCta, 10, 10);
            client.pause(1000);
            client.elements('css selector', blockCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('lg');
                    callback.multiloop(client, blockCta, properties, 'lg');
                }
            });
            client.mouseButtonDown(blockCta);
            client.pause(2000);
            client.elements('css selector', blockCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.Focus1Props('lg');
                    callback.multiloop(client, blockCtaFocus, properties, 'lg');
                }
            });
            client.elements('css selector', email, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailProps('lg');
                    callback.multiloop(client, email, properties, 'lg');
                }
            });

            client.elements('css selector', emailTitle, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailTitleProps('lg');
                    callback.multiloop(client, emailTitle, properties, 'lg');
                }
            });
            client.elements('css selector', emailLink, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.emailLinkProps('lg');
                    callback.multiloop(client, emailLink, properties, 'lg');
                }
            });
            client.moveToElement(emailLink, 10, 10);
            client.pause(1000);
            client.mouseButtonDown(emailLink);
            client.pause(2000);
            client.elements('css selector', emailLinkFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.backFocusProps('lg');
                    callback.multiloop(client, emailLinkFocus, properties, 'lg');
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
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', popupWrap, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupWrapProps('lg');
                    callback.multiloop(client, popupWrap, properties, 'lg');
                }
            });

            client.elements('css selector', popupH2, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupH2Props('lg');
                    callback.multiloop(client, popupH2, properties, 'lg');
                }
            });
            client.elements('css selector', popupInputField, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupInputFieldProps('lg');
                    callback.multiloop(client, popupInputField, properties, 'lg');
                }
            });
            //focus props
            client.elements('css selector', popupInputField, function (result) {
                result.value.forEach(function (element, index) {
                    client.elementIdClick(element.ELEMENT)
                    properties = budget_calculator_props.fieldFocusProps('lg');
                    callback.singleElem(client, popupInputField + ":focus", properties, 'lg');
                    client.pause(2000)
                })
            });

            client.elements('css selector', popupCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupDisabledProps('lg');
                    callback.singleElem(client, popupCta, properties, 'lg');
                }
            });


            client.elements('css selector', popupClose, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupCloseProps('lg');
                    callback.singleElem(client, popupClose, properties, 'lg');
                }
            });
            //hover props 
            client.moveToElement(popupClose, 10, 10);
            client.pause(1000);
            client.elements('css selector', popupClose, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupCloseHoverProps('lg');
                    callback.singleElem(client, popupClose, properties, 'lg');
                }
            });
            //Focus props
            client.mouseButtonDown(popupClose);
            client.pause(1000);
            client.elements('css selector', popupCloseFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.fieldFocusProps('lg');
                    callback.singleElem(client, popupCloseFocus, properties, 'lg');
                }
            });


            client.elements('css selector', popupContent, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.popupContentProps('lg');
                    callback.singleElem(client, popupContent, properties, 'lg');
                }
            });

            client.elements('css selector', error, results => {
                if (results.value.length > 0) {
                    results.value.forEach(function (element, index) {
                        console.log("entered");
                        client.elementIdClick(element.ELEMENT);
                        properties = budget_calculator_props.errorProps('lg');
                        callback.singleloop(client, element, properties, 'lg');
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
                    properties = budget_calculator_props.popupEnabledProps('lg');
                    callback.singleElem(client, popupCta, properties, 'lg');
                }
            });

            //hover props 
            client.moveToElement(popupCta, 10, 10);
            client.pause(1000);
            client.elements('css selector', popupCta, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.ctaHoverProps('lg');
                    callback.singleElem(client, popupCta, properties, 'lg');
                }
            });
            //Focus props
            client.mouseButtonDown(popupCta);
            client.pause(1000);
            client.elements('css selector', popupCtaFocus, results => {
                if (results.value.length > 0) {
                    properties = budget_calculator_props.Focus1Props('lg');
                    callback.singleElem(client, popupCtaFocus, properties, 'lg');
                }
            });

        }
    },

    "Ending the session": function (client) {
    client.end();
    },

};          