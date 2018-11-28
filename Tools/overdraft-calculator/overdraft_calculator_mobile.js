var overdraft_calculator_props = require('./overdraft_calculator_props.js');
var pageurl = require('../../pageurls.js');
var pageObj;

function globalProps(client) {
    pageObj = client.page.overdraft_calculator_selector(),
        callback = client.page.common(),
        size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['desktop', 'overdraft-calaculator', 'overdraft-calaculator-desktop'],
    //Opening the URL
    "Resize The Window": function (client) {
        globalProps(client);
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(5000);
    },
    "Opening the Mobile URL": function (client) {
        globalProps(client);
        callback.openURL(client,pageurl.NW_PER_OVERDRAFT_CAL_MOB);
        console.log("--Mobile--" + pageurl.NW_PER_OVERDRAFT_CAL_MOB);
    },

    "1 Check for shelf properties": function (client) {
        od_contentwrapper = pageObj.elements.contentwrapper.selector,
            od_contentquestion = pageObj.elements.contentquestion.selector,
            od_headerwrapper = pageObj.elements.headerwrapper.selector,
            od_headwrapbanner = pageObj.elements.headwrapbanner.selector,
            od_headwrapbannerhtag = pageObj.elements.headwrapbannerhtag.selector,
            od_headrichtxtptag = pageObj.elements.headrichtxtptag.selector,
            od_middlewrapper = pageObj.elements.middlewrapper.selector,
            od_questioncanvas = pageObj.elements.questioncanvas.selector,
            od_qnav = pageObj.elements.qnav.selector,
            od_questionfooter = pageObj.elements.questionfooter.selector,
            od_questionfootertxt = pageObj.elements.questionfootertxt.selector,
            od_offerscontentMobile = pageObj.elements.offerscontentMobile.selector,
            od_tooltipimagemobile = pageObj.elements.tooltipimagemobile.selector,
            od_tooltipdescanchor = pageObj.elements.tooltipdescanchor.selector,
            od_tooltipdescmobile = pageObj.elements.tooltipdescmobile.selector,
            od_tooltipdescptextmobile = pageObj.elements.tooltipdescptextmobile.selector,
            od_cardwrapper = pageObj.elements.cardwrapper.selector,
            od_cardwrapperimg = pageObj.elements.cardwrapperimg.selector,
            od_questionblock = pageObj.elements.questionblock.selector,
            od_questionblocklabel = pageObj.elements.questionblocklabel.selector,
            od_questionblockinput = pageObj.elements.questionblockinput.selector,
            od_questionblockselector = pageObj.elements.questionblockselector.selector,
            od_questionblockselectordisabled = pageObj.elements.questionblockselectordisabled.selector,
            od_nextbtn = pageObj.elements.nextbtn.selector,

            od_radiobtnprop = pageObj.elements.radiobtnprop.selector,
            od_radiobtnsnotactive = pageObj.elements.radiobtnsnotactive.selector,
            od_radiobtnactive = pageObj.elements.radiobtnactive.selector,
            od_nextbuttondisable = pageObj.elements.nextbuttondisable.selector,
            od_nextbtnnotdisable = pageObj.elements.nextbtnnotdisable.selector,
            od_inputtextfield = pageObj.elements.inputtextfield.selector,
            od_resultli = pageObj.elements.resultli.selector,
            od_resultlispan = pageObj.elements.resultlispan.selector,
            od_resultlieditvalue = pageObj.elements.resultlieditvalue.selector,
            od_resulteditvaluespan = pageObj.elements.resulteditvaluespan.selector,
            od_resulteditvaluespanlast = pageObj.elements.resulteditvaluespanlast.selector,

            od_resultcontainer = pageObj.elements.resultcontainer.selector,
            od_donutwrapper = pageObj.elements.donutwrapper.selector,
            od_donutgraphwrapper = pageObj.elements.donutgraphwrapper.selector,
            od_donuttext = pageObj.elements.donuttext.selector,
            od_donuttexttitle = pageObj.elements.donuttexttitle.selector,
            od_donuttotalcost = pageObj.elements.donuttotalcost.selector,
            od_donutdecimal = pageObj.elements.donutdecimal.selector,
            od_donutcontent = pageObj.elements.donutcontent.selector,
            od_donuttitledesktop = pageObj.elements.donuttitledesktop.selector,

            od_legendsarranged = pageObj.elements.legendsarranged.selector,
            od_legendtitle = pageObj.elements.legendtitle.selector,
            od_legendinterest = pageObj.elements.legendinterest.selector,
            od_legendmonthly = pageObj.elements.legendmonthly.selector,
            od_legendtext = pageObj.elements.legendtext.selector,
            od_legendvalue = pageObj.elements.legendvalue.selector,
            od_summarywrapper = pageObj.elements.summarywrapper.selector,
            od_representativesummary = pageObj.elements.representativesummary.selector,
            od_ODCsummarydesctwo = pageObj.elements.ODCsummarydesctwo.selector,
            od_ODCsummarydesctwoa = pageObj.elements.ODCsummarydesctwoa.selector,

            od_ODCsummarydesctwoah2 = pageObj.elements.ODCsummarydesctwoah2.selector,
            od_ODCsummarydesctwoap = pageObj.elements.ODCsummarydesctwoap.selector,
            od_ODCsummarydesctwob = pageObj.elements.ODCsummarydesctwob.selector,
            od_ODCsummarydesctwobh2 = pageObj.elements.ODCsummarydesctwobh2.selector,
            od_ODCsummarydesctwobp = pageObj.elements.ODCsummarydesctwobp.selector,
            od_ODCsummarydescone = pageObj.elements.ODCsummarydescone.selector,

            od_ODCsummarydesconeleft = pageObj.elements.ODCsummarydesconeleft.selector,
            od_ODCsummarydesconelefth3 = pageObj.elements.ODCsummarydesconelefth3.selector,
            od_odcActionDescription = pageObj.elements.odcActionDescription.selector,
            od_ODCsummarydesconeb = pageObj.elements.ODCsummarydesconeb.selector,
            od_ODCsummarydesconebanchor = pageObj.elements.ODCsummarydesconebanchor.selector,

            od_ODCsummarydesconebanchorcursor = pageObj.elements.ODCsummarydesconebanchorcursor.selector,
            od_ODCbottomsummary = pageObj.elements.ODCbottomsummary.selector,
            od_summarygridleft = pageObj.elements.summarygridleft.selector,
            od_headergroupsign = pageObj.elements.headergroupsign.selector,
            od_headergroupheadline = pageObj.elements.headergroupheadline.selector,
            od_odcbottomsummaryptag = pageObj.elements.odcbottomsummaryptag.selector,


            od_odcarrangedleft = pageObj.elements.odcarrangedleft.selector,
            od_odcarrangedright = pageObj.elements.odcarrangedright.selector,
            od_odcarrangedleftptag = pageObj.elements.odcarrangedleftptag.selector,
            od_odcarrangedrightptag = pageObj.elements.odcarrangedrightptag.selector,
            od_odcarrangedcost = pageObj.elements.odcarrangedcost.selector,
            od_odcarrangemainvalue = pageObj.elements.odcarrangemainvalue.selector,
            od_odcarrangegraphlegend = pageObj.elements.odcarrangegraphlegend.selector,
            od_odcarrangedlegendsarranged = pageObj.elements.odcarrangedlegendsarranged.selector,
            od_odcarrangedlegendtitle = pageObj.elements.odcarrangedlegendtitle.selector,
            od_odcarrangeli = pageObj.elements.odcarrangeli.selector,
            od_odcarrangemonthly = pageObj.elements.odcarrangemonthly.selector,
            od_odcarrangeinterest = pageObj.elements.odcarrangeinterest.selector,
            od_odcarrangelegendmarker = pageObj.elements.odcarrangelegendmarker.selector,
            od_odcarrangelegendmarkerint = pageObj.elements.odcarrangelegendmarkerint.selector,
            od_odcarrangelegendtext = pageObj.elements.odcarrangelegendtext.selector,
            od_odcarrangelegendvalue = pageObj.elements.odcarrangelegendvalue.selector,
            od_odcarrangenoofdays = pageObj.elements.odcarrangenoofdays.selector,
            od_odcarrangepromobubble = pageObj.elements.odcarrangepromobubble.selector,
            od_odcarrangebubblecontent = pageObj.elements.odcarrangebubblecontent.selector,
            od_odcarrangebubblecontentptag = pageObj.elements.odcarrangebubblecontentptag.selector,
            od_odcarrangebubbledesc = pageObj.elements.odcarrangebubbledesc.selector,
            od_odcarrangepoundvalue = pageObj.elements.odcarrangepoundvalue.selector,
            od_odcarrangedbubbledescstrong = pageObj.elements.odcarrangedbubbledescstrong.selector,



            globalProps(client);
        // callback.scrollToElement(client,ts_toolshelfstart); 


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isxsDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', od_contentwrapper, results => {
                if (results.value.length > 0) {
                    properties = overdraft_calculator_props.contentwrapper('xs');
                    callback.multiloop(client, od_contentwrapper, properties, 'xs');
                    console.log(od_contentwrapper);
                    properties = overdraft_calculator_props.contentquestion('xs');
                    callback.multiloop(client, od_contentquestion, properties, 'xs');
                    console.log(od_contentquestion);
                    properties = overdraft_calculator_props.headerwrapper('xs');
                    callback.multiloop(client, od_headerwrapper, properties, 'xs');
                    console.log(od_headerwrapper);


                    properties = overdraft_calculator_props.headwrapbanner('xs');
                    callback.multiloop(client, od_headwrapbanner, properties, 'xs');
                    console.log(od_headwrapbanner);
                    properties = overdraft_calculator_props.headwrapbannerhtag('xs');
                    callback.multiloop(client, od_headwrapbannerhtag, properties, 'xs');
                    console.log(od_headwrapbannerhtag);
                    properties = overdraft_calculator_props.headrichtxtptag('xs');
                    callback.multiloop(client, od_headrichtxtptag, properties, 'xs');
                    console.log(od_headrichtxtptag);
                    properties = overdraft_calculator_props.middlewrapper('xs');
                    callback.multiloop(client, od_middlewrapper, properties, 'xs');
                    console.log(od_middlewrapper);
                    // properties = overdraft_calculator_props.questioncanvas('xs');
                    // callback.multiloop(client, od_questioncanvas, properties, 'xs');


                    properties = overdraft_calculator_props.qnav('xs');
                    callback.multiloop(client, od_qnav, properties, 'xs');
                    console.log(od_qnav);


                    properties = overdraft_calculator_props.questionfooter('xs');
                    callback.multiloop(client, od_questionfooter, properties, 'xs');
                    console.log(od_questionfooter);

                    properties = overdraft_calculator_props.questionfootertxt('xs');
                    callback.multiloop(client, od_questionfootertxt, properties, 'xs');
                    console.log(od_questionfootertxt);

                    properties = overdraft_calculator_props.offerscontentMobile('xs');
                    callback.multiloop(client, od_offerscontentMobile, properties, 'xs');

                    properties = overdraft_calculator_props.tooltipimagemobile('xs');
                    callback.multiloop(client, od_tooltipimagemobile, properties, 'xs');
                    console.log(od_tooltipimagemobile);

                    properties = overdraft_calculator_props.tooltipdescanchor('xs');
                    callback.multiloop(client, od_tooltipdescanchor, properties, 'xs');
                    console.log(od_tooltipdescanchor);

                    properties = overdraft_calculator_props.tooltipdescmobile('xs');
                    callback.multiloop(client, od_tooltipdescmobile, properties, 'xs');
                    console.log(od_tooltipdescmobile);

                    properties = overdraft_calculator_props.tooltipdescptext('xs');
                    callback.multiloop(client, od_tooltipdescptextmobile, properties, 'xs');


                    properties = overdraft_calculator_props.cardwrapper('xs');
                    callback.multiloop(client, od_cardwrapper, properties, 'xs');
                    console.log(od_cardwrapper);
                    // properties = overdraft_calculator_props.cardwrapperimg('xs');
                    // callback.multiloop(client,  od_cardwrapperimg, properties, 'xs');


                    properties = overdraft_calculator_props.questionblock('xs');
                    callback.multiloop(client, od_questionblock, properties, 'xs');
                    console.log(od_questionblock);
                    properties = overdraft_calculator_props.questionblocklabel('xs');
                    callback.multiloop(client, od_questionblocklabel, properties, 'xs');
                    console.log(od_questionblocklabel);
                    properties = overdraft_calculator_props.questionblockinput('xs');
                    callback.multiloop(client, od_questionblockinput, properties, 'xs');
                    console.log(od_questionblockinput);
                    properties = overdraft_calculator_props.nextbtn('xs');
                    callback.multiloop(client, od_nextbtn, properties, 'xs');
                    console.log(od_nextbtn);


                    properties = overdraft_calculator_props.questionblockselector('xs');
                    callback.multiloop(client, od_questionblockselector, properties, 'xs');
                    console.log(od_questionblockselector);

                    client.click(".js-custom-select option[value='select_withoutODControl']");
                    client.pause(3000);
                    client.click("#nextCTA");
                    client.pause(3000);

                    client.click('.odc-radio-option');

                    properties = overdraft_calculator_props.radiobtnprop('xs');
                    callback.multiloop(client, od_radiobtnprop, properties, 'xs');
                    console.log(od_radiobtnprop);
                    properties = overdraft_calculator_props.radiobtnsnotactive('xs');
                    callback.multiloop(client, od_radiobtnsnotactive, properties, 'xs');
                    console.log(od_radiobtnsnotactive);


                    properties = overdraft_calculator_props.radiobtnactive('xs');
                    callback.multiloop(client, od_radiobtnactive, properties, 'xs');
                    console.log(od_radiobtnactive);
                    client.pause(3000);
                    client.click("#nextCTA");

                    properties = overdraft_calculator_props.nextbuttondisable('xs');
                    callback.multiloop(client, od_nextbuttondisable, properties, 'xs');
                    console.log(od_contentwrapper);
                    client.pause(3000);
                    properties = overdraft_calculator_props.inputtextfield('xs');
                    callback.multiloop(client, od_inputtextfield, properties, 'xs');
                    console.log(od_inputtextfield);
                    client.setValue('#new_form_odlimit', 100);
                    client.setValue('#new_form_debt_amount', 300);
                    properties = overdraft_calculator_props.nextbtnnotdisable('xs');
                    callback.multiloop(client, od_nextbtnnotdisable, properties, 'xs');
                    console.log(od_nextbtnnotdisable);
                    client.pause(3000);

                    client.click("#nextCTA");
                    client.pause(3000);
                    client.setValue('#new_form_no_of_days', 10);


                    client.click("#nextCTA");
                    client.pause(3000);

                    properties = overdraft_calculator_props.resultli('xs');
                    callback.multiloop(client, od_resultli, properties, 'xs');
                    console.log(od_resultli);

                    properties = overdraft_calculator_props.resultlispan('xs');
                    callback.multiloop(client, od_resultlispan, properties, 'xs');
                    console.log(od_resultlispan);

                    properties = overdraft_calculator_props.resultlieditvalue('xs');
                    callback.multiloop(client, od_resultlieditvalue, properties, 'xs');
                    console.log(od_resultlieditvalue);

                    properties = overdraft_calculator_props.resulteditvaluespan('xs');
                    callback.multiloop(client, od_resulteditvaluespan, properties, 'xs');
                    console.log(od_resulteditvaluespan);



                    properties = overdraft_calculator_props.resulteditvaluespanlast('xs');
                    callback.multiloop(client, od_resulteditvaluespanlast, properties, 'xs');
                    console.log(od_resulteditvaluespanlast);

                    properties = overdraft_calculator_props.resultcontainer('xs');
                    callback.multiloop(client, od_resultcontainer, properties, 'xs');
                    console.log(od_resultcontainer);

                    properties = overdraft_calculator_props.donutwrapper('xs');
                    callback.multiloop(client, od_donutwrapper, properties, 'xs');
                    console.log(od_donutwrapper);

                    properties = overdraft_calculator_props.donutgraphwrapper('xs');
                    callback.multiloop(client, od_donutgraphwrapper, properties, 'xs');
                    console.log(od_donutgraphwrapper);

                    properties = overdraft_calculator_props.donuttext('xs');
                    callback.multiloop(client, od_donuttext, properties, 'xs');
                    console.log(od_donuttext);

                    properties = overdraft_calculator_props.donuttexttitle('xs');
                    callback.multiloop(client, od_donuttexttitle, properties, 'xs');
                    console.log(od_donuttexttitle);

                    properties = overdraft_calculator_props.donuttotalcost('xs');
                    callback.multiloop(client, od_donuttotalcost, properties, 'xs');
                    console.log(od_donuttotalcost);

                    properties = overdraft_calculator_props.donutdecimal('xs');
                    callback.multiloop(client, od_donutdecimal, properties, 'xs');
                    console.log(od_donutdecimal);

                    properties = overdraft_calculator_props.donutcontent('xs');
                    callback.multiloop(client, od_donutcontent, properties, 'xs');
                    console.log(od_donutcontent);

                    properties = overdraft_calculator_props.donuttitledesktop('xs');
                    callback.multiloop(client, od_donuttitledesktop, properties, 'xs');
                    console.log(od_donuttitledesktop);

                    properties = overdraft_calculator_props.legendsarranged('xs');
                    callback.multiloop(client, od_legendsarranged, properties, 'xs');
                    console.log(od_legendsarranged);

                    properties = overdraft_calculator_props.legendtitle('xs');
                    callback.multiloop(client, od_legendtitle, properties, 'xs');

                    properties = overdraft_calculator_props.legendinterest('xs');
                    callback.multiloop(client, od_legendinterest, properties, 'xs');
                    properties = overdraft_calculator_props.legendmonthly('xs');
                    callback.multiloop(client, od_legendmonthly, properties, 'xs');

                    properties = overdraft_calculator_props.legendtext('xs');
                    callback.multiloop(client, od_legendtext, properties, 'xs');

                    properties = overdraft_calculator_props.legendvalue('xs');
                    callback.multiloop(client, od_legendvalue, properties, 'xs');

                    properties = overdraft_calculator_props.summarywrapper('xs');
                    callback.multiloop(client, od_summarywrapper, properties, 'xs');

                    properties = overdraft_calculator_props.representativesummary('xs');
                    callback.multiloop(client, od_representativesummary, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwo('xs');
                    callback.multiloop(client, od_ODCsummarydesctwo, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwoa('xs');
                    callback.multiloop(client, od_ODCsummarydesctwoa, properties, 'xs');
                    properties = overdraft_calculator_props.ODCsummarydesctwoah2('xs');
                    callback.multiloop(client, od_ODCsummarydesctwoah2, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwoap('xs');
                    callback.multiloop(client, od_ODCsummarydesctwoap, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwob('xs');
                    callback.multiloop(client, od_ODCsummarydesctwob, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwobh2('xs');
                    callback.multiloop(client, od_ODCsummarydesctwobh2, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesctwobp('xs');
                    callback.multiloop(client, od_ODCsummarydesctwobp, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydescone('xs');
                    callback.multiloop(client, od_ODCsummarydescone, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesconeleft('xs');
                    callback.multiloop(client, od_ODCsummarydesconeleft, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesconelefth3('xs');
                    callback.multiloop(client, od_ODCsummarydesconelefth3, properties, 'xs');

                    properties = overdraft_calculator_props.resulteditvaluespanlast('xs');
                    callback.multiloop(client, od_resulteditvaluespanlast, properties, 'xs');

                    properties = overdraft_calculator_props.odcActionDescription('xs');
                    callback.multiloop(client, od_odcActionDescription, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesconeb('xs');
                    callback.multiloop(client, od_ODCsummarydesconeb, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesconebanchor('xs');
                    callback.multiloop(client, od_ODCsummarydesconebanchor, properties, 'xs');

                    properties = overdraft_calculator_props.ODCsummarydesconebanchorcursor('xs');
                    callback.multiloop(client, od_ODCsummarydesconebanchorcursor, properties, 'xs');

                    properties = overdraft_calculator_props.ODCbottomsummary('xs');
                    callback.multiloop(client, od_ODCbottomsummary, properties, 'xs');

                    properties = overdraft_calculator_props.summarygridleft('xs');
                    callback.multiloop(client, od_summarygridleft, properties, 'xs');

                    properties = overdraft_calculator_props.headergroupsign('xs');
                    callback.multiloop(client, od_headergroupsign, properties, 'xs');

                    // properties = overdraft_calculator_props.headergroupheadline('xs');
                    // callback.multiloop(client, od_headergroupheadline, properties, 'xs');

                    properties = overdraft_calculator_props.odcbottomsummaryptag('xs');
                    callback.multiloop(client, od_odcbottomsummaryptag, properties, 'xs');

                    // case second


                    properties = overdraft_calculator_props.odccompareleft('xs');
                    callback.multiloop(client, od_odcarrangedleft, properties, 'xs');

                    properties = overdraft_calculator_props.odccompareright('xs');
                    callback.multiloop(client, od_odcarrangedright, properties, 'xs');

                    properties = overdraft_calculator_props.odccompareleftrightp('xs');
                    callback.multiloop(client, od_odcarrangedrightptag, properties, 'xs');

                    properties = overdraft_calculator_props.odccompareleftrightp('xs');
                    callback.multiloop(client, od_odcarrangedleftptag, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangedcost('xs');
                    callback.multiloop(client, od_odcarrangedcost, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangemainvalue('xs');
                    callback.multiloop(client, od_odcarrangemainvalue, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangegraphlegend('xs');
                    callback.multiloop(client, od_odcarrangegraphlegend, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangedlegendsarranged('xs');
                    callback.multiloop(client, od_odcarrangedlegendsarranged, properties, 'xs');


                    properties = overdraft_calculator_props.odcarrangedlegendtitle('xs');
                    callback.multiloop(client, od_odcarrangedlegendtitle, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangeli('xs');
                    callback.multiloop(client, od_odcarrangeli, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangemonthly('xs');
                    callback.multiloop(client, od_odcarrangemonthly, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangeinterest('xs');
                    callback.multiloop(client, od_odcarrangeinterest, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangelegendmarker('xs');
                    callback.multiloop(client, od_odcarrangelegendmarker, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangelegendmarkerint('xs');
                    callback.multiloop(client, od_odcarrangelegendmarkerint, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangelegendtext('xs');
                    callback.multiloop(client, od_odcarrangelegendtext, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangelegendvalue('xs');
                    callback.multiloop(client, od_odcarrangelegendvalue, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangenoofdays('xs');
                    callback.multiloop(client, od_odcarrangenoofdays, properties, 'xs');


                    properties = overdraft_calculator_props.odcarrangepromobubble('xs');
                    callback.multiloop(client, od_odcarrangepromobubble, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangebubblecontent('xs');
                    callback.multiloop(client, od_odcarrangebubblecontent, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangebubblecontentptag('xs');
                    callback.multiloop(client, od_odcarrangebubblecontentptag, properties, 'xs');


                    properties = overdraft_calculator_props.odcarrangebubbledesc('xs');
                    callback.multiloop(client, od_odcarrangebubbledesc, properties, 'xs');


                    properties = overdraft_calculator_props.odcarrangepoundvalue('xs');
                    callback.multiloop(client, od_odcarrangepoundvalue, properties, 'xs');

                    properties = overdraft_calculator_props.odcarrangedbubbledescstrong('xs');
                    callback.multiloop(client, od_odcarrangedbubbledescstrong, properties, 'xs');

                    client.pause(3000);
                }
            });











        }

    },





    "Ending the session": function (client) {
        client.end();
    }

}; 
