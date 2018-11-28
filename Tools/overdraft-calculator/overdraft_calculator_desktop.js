var overdraft_calculator_props = require('./overdraft_calculator_props.js');
var pageurl = require('../../pageurls.js');
var pageObj;

overdraft_calculator_data = require('./overdraft_calculator_data.js'),
data=overdraft_calculator_data.props;


function globalProps(client) {
    pageObj = client.page.overdraft_calculator_selector(),
        callback = client.page.common(),
        size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['desktop', 'overdraft-calaculator', 'overdraft-calaculator-desktop'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client, pageurl.NW_PER_OVERDRAFT_CAL);
        console.log("--Desktop--" + pageurl.NW_PER_OVERDRAFT_CAL);
        client.pause(6000);
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
            od_offerscontent = pageObj.elements.offerscontent.selector,
            od_tooltipimage = pageObj.elements.tooltipimage.selector,
            od_tooltipdescanchor = pageObj.elements.tooltipdescanchor.selector,
            od_tooltipdesc = pageObj.elements.tooltipdesc.selector,
            od_tooltipdescptext = pageObj.elements.tooltipdescptext.selector,
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


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.elements('css selector', od_contentwrapper, results => {
                if (results.value.length > 0) {
                  /*  properties = overdraft_calculator_props.contentwrapper('lg');
                    callback.multiloop(client, od_contentwrapper, properties, 'lg');

                    properties = overdraft_calculator_props.contentquestion('lg');
                    callback.multiloop(client, od_contentquestion, properties, 'lg');

                    properties = overdraft_calculator_props.headerwrapper('lg');
                    callback.multiloop(client, od_headerwrapper, properties, 'lg');



                    properties = overdraft_calculator_props.headwrapbanner('lg');
                    callback.multiloop(client, od_headwrapbanner, properties, 'lg');

                    properties = overdraft_calculator_props.headwrapbannerhtag('lg');
                    callback.multiloop(client, od_headwrapbannerhtag, properties, 'lg');

                    properties = overdraft_calculator_props.headrichtxtptag('lg');
                    callback.multiloop(client, od_headrichtxtptag, properties, 'lg');

                    properties = overdraft_calculator_props.middlewrapper('lg');
                    callback.multiloop(client, od_middlewrapper, properties, 'lg');

                    // properties = overdraft_calculator_props.questioncanvas('lg');
                    // callback.multiloop(client, od_questioncanvas, properties, 'lg');


                    properties = overdraft_calculator_props.qnav('lg');
                    callback.multiloop(client, od_qnav, properties, 'lg');



                    properties = overdraft_calculator_props.questionfooter('lg');
                    callback.multiloop(client, od_questionfooter, properties, 'lg');


                    properties = overdraft_calculator_props.questionfootertxt('lg');
                    callback.multiloop(client, od_questionfootertxt, properties, 'lg');


                    properties = overdraft_calculator_props.offerscontent('lg');
                    callback.multiloop(client, od_offerscontent, properties, 'lg');

                    properties = overdraft_calculator_props.tooltipimage('lg');
                    callback.multiloop(client, od_tooltipimage, properties, 'lg');


                    properties = overdraft_calculator_props.tooltipdescanchor('lg');
                    callback.multiloop(client, od_tooltipdescanchor, properties, 'lg');

                    properties = overdraft_calculator_props.tooltipdesc('lg');
                    callback.multiloop(client, od_tooltipdesc, properties, 'lg');


                    properties = overdraft_calculator_props.tooltipdescptext('lg');
                    callback.multiloop(client, od_tooltipdescptext, properties, 'lg');


                    properties = overdraft_calculator_props.cardwrapper('lg');
                    callback.multiloop(client, od_cardwrapper, properties, 'lg');

                    // properties = overdraft_calculator_props.cardwrapperimg('lg');
                    // callback.multiloop(client,  od_cardwrapperimg, properties, 'lg');


                    properties = overdraft_calculator_props.questionblock('lg');
                    callback.multiloop(client, od_questionblock, properties, 'lg');

                    properties = overdraft_calculator_props.questionblocklabel('lg');
                    callback.multiloop(client, od_questionblocklabel, properties, 'lg');

                    properties = overdraft_calculator_props.questionblockinput('lg');
                    callback.multiloop(client, od_questionblockinput, properties, 'lg');

                    properties = overdraft_calculator_props.nextbtn('lg');
                    callback.multiloop(client, od_nextbtn, properties, 'lg');



                    properties = overdraft_calculator_props.questionblockselector('lg');
                    callback.multiloop(client, od_questionblockselector, properties, 'lg');*/


                    client.click(".js-custom-select option[value='select_withoutODControl']");
                    client.pause(3000);
                    client.click("#nextCTA");
                    client.pause(3000);

                    client.click('.odc-radio-option');

                    /*properties = overdraft_calculator_props.radiobtnprop('lg');
                    callback.multiloop(client, od_radiobtnprop, properties, 'lg');

                    properties = overdraft_calculator_props.radiobtnsnotactive('lg');
                    callback.multiloop(client, od_radiobtnsnotactive, properties, 'lg');



                    properties = overdraft_calculator_props.radiobtnactive('lg');
                    callback.multiloop(client, od_radiobtnactive, properties, 'lg');*/

                    client.pause(3000);
                    client.click("#nextCTA");

                    properties = overdraft_calculator_props.nextbuttondisable('lg');
                    callback.multiloop(client, od_nextbuttondisable, properties, 'lg');
                    client.pause(3000);
                    properties = overdraft_calculator_props.inputtextfield('lg');
                    callback.multiloop(client, od_inputtextfield, properties, 'lg');
                    var res1 =parseInt((data.$selectarrangedfeemonthly))
                    var result =parseInt(((data.$seleoverdrawnvalue*data.$selectinterest)/365)*(data.$selectdays));
                    var final = res1+result;
                    console.log(final);
                    console.log(result);
                    console.log(res1);
            
                    

                    
                    
                    client.clearValue('#new_form_odlimit,#new_form_debt_amount');
                    client.setValue('#new_form_odlimit',data.$seleoverdrawnvalue);
                    client.setValue('#new_form_debt_amount', data.$seleoverdtvalue);
                    properties = overdraft_calculator_props.nextbtnnotdisable('lg');
                    callback.multiloop(client, od_nextbtnnotdisable, properties, 'lg');
                    client.pause(3000);

                    client.click("#nextCTA");
                    client.pause(3000);
                    client.clearValue('#new_form_no_of_days');
                    client.setValue('#new_form_no_of_days', data.$selectdays);


                    client.click("#nextCTA");
                    client.pause(3000);

                   /* properties = overdraft_calculator_props.resultli('lg');
                    callback.multiloop(client, od_resultli, properties, 'lg');

                    properties = overdraft_calculator_props.resultlispan('lg');
                    callback.multiloop(client, od_resultlispan, properties, 'lg');

                    properties = overdraft_calculator_props.resultlieditvalue('lg');
                    callback.multiloop(client, od_resultlieditvalue, properties, 'lg');

                    properties = overdraft_calculator_props.resulteditvaluespan('lg');
                    callback.multiloop(client, od_resulteditvaluespan, properties, 'lg');



                    properties = overdraft_calculator_props.resulteditvaluespanlast('lg');
                    callback.multiloop(client, od_resulteditvaluespanlast, properties, 'lg');

                    properties = overdraft_calculator_props.resultcontainer('lg');
                    callback.multiloop(client, od_resultcontainer, properties, 'lg');

                    properties = overdraft_calculator_props.donutwrapper('lg');
                    callback.multiloop(client, od_donutwrapper, properties, 'lg');

                    properties = overdraft_calculator_props.donutgraphwrapper('lg');
                    callback.multiloop(client, od_donutgraphwrapper, properties, 'lg');

                    properties = overdraft_calculator_props.donuttext('lg');
                    callback.multiloop(client, od_donuttext, properties, 'lg');

                    properties = overdraft_calculator_props.donuttexttitle('lg');
                    callback.multiloop(client, od_donuttexttitle, properties, 'lg');

                    properties = overdraft_calculator_props.donuttotalcost('lg');
                    callback.multiloop(client, od_donuttotalcost, properties, 'lg');

                    properties = overdraft_calculator_props.donutdecimal('lg');
                    callback.multiloop(client, od_donutdecimal, properties, 'lg');

                    properties = overdraft_calculator_props.donutcontent('lg');
                    callback.multiloop(client, od_donutcontent, properties, 'lg');

                    properties = overdraft_calculator_props.donuttitledesktop('lg');
                    callback.multiloop(client, od_donuttitledesktop, properties, 'lg');

                    properties = overdraft_calculator_props.legendsarranged('lg');
                    callback.multiloop(client, od_legendsarranged, properties, 'lg');

                    properties = overdraft_calculator_props.legendtitle('lg');
                    callback.multiloop(client, od_legendtitle, properties, 'lg');

                    properties = overdraft_calculator_props.legendinterest('lg');
                    callback.multiloop(client, od_legendinterest, properties, 'lg');
                    properties = overdraft_calculator_props.legendmonthly('lg');
                    callback.multiloop(client, od_legendmonthly, properties, 'lg');

                    properties = overdraft_calculator_props.legendtext('lg');
                    callback.multiloop(client, od_legendtext, properties, 'lg');

                    properties = overdraft_calculator_props.legendvalue('lg');
                    callback.multiloop(client, od_legendvalue, properties, 'lg');

                    properties = overdraft_calculator_props.summarywrapper('lg');
                    callback.multiloop(client, od_summarywrapper, properties, 'lg');

                    properties = overdraft_calculator_props.representativesummary('lg');
                    callback.multiloop(client, od_representativesummary, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwo('lg');
                    callback.multiloop(client, od_ODCsummarydesctwo, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwoa('lg');
                    callback.multiloop(client, od_ODCsummarydesctwoa, properties, 'lg');
                    properties = overdraft_calculator_props.ODCsummarydesctwoah2('lg');
                    callback.multiloop(client, od_ODCsummarydesctwoah2, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwoap('lg');
                    callback.multiloop(client, od_ODCsummarydesctwoap, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwob('lg');
                    callback.multiloop(client, od_ODCsummarydesctwob, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwobh2('lg');
                    callback.multiloop(client, od_ODCsummarydesctwobh2, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesctwobp('lg');
                    callback.multiloop(client, od_ODCsummarydesctwobp, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydescone('lg');
                    callback.multiloop(client, od_ODCsummarydescone, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesconeleft('lg');
                    callback.multiloop(client, od_ODCsummarydesconeleft, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesconelefth3('lg');
                    callback.multiloop(client, od_ODCsummarydesconelefth3, properties, 'lg');

                    properties = overdraft_calculator_props.resulteditvaluespanlast('lg');
                    callback.multiloop(client, od_resulteditvaluespanlast, properties, 'lg');

                    properties = overdraft_calculator_props.odcActionDescription('lg');
                    callback.multiloop(client, od_odcActionDescription, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesconeb('lg');
                    callback.multiloop(client, od_ODCsummarydesconeb, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesconebanchor('lg');
                    callback.multiloop(client, od_ODCsummarydesconebanchor, properties, 'lg');

                    properties = overdraft_calculator_props.ODCsummarydesconebanchorcursor('lg');
                    callback.multiloop(client, od_ODCsummarydesconebanchorcursor, properties, 'lg');

                    properties = overdraft_calculator_props.ODCbottomsummary('lg');
                    callback.multiloop(client, od_ODCbottomsummary, properties, 'lg');

                    properties = overdraft_calculator_props.summarygridleft('lg');
                    callback.multiloop(client, od_summarygridleft, properties, 'lg');

                    properties = overdraft_calculator_props.headergroupsign('lg');
                    callback.multiloop(client, od_headergroupsign, properties, 'lg');

                    // properties = overdraft_calculator_props.headergroupheadline('lg');
                    // callback.multiloop(client, od_headergroupheadline, properties, 'lg');

                    properties = overdraft_calculator_props.odcbottomsummaryptag('lg');
                    callback.multiloop(client, od_odcbottomsummaryptag, properties, 'lg');

                    // case second

                    
                        properties = overdraft_calculator_props.odccompareleft('lg');
                    callback.multiloop(client, od_odcarrangedleft, properties, 'lg');

                    properties = overdraft_calculator_props.odccompareright('lg');
                    callback.multiloop(client, od_odcarrangedright, properties, 'lg');

                    properties = overdraft_calculator_props.odccompareleftrightp('lg');
                    callback.multiloop(client, od_odcarrangedrightptag, properties, 'lg');

                    properties = overdraft_calculator_props.odccompareleftrightp('lg');
                    callback.multiloop(client, od_odcarrangedleftptag, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangedcost('lg');
                    callback.multiloop(client, od_odcarrangedcost, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangemainvalue('lg');
                    callback.multiloop(client, od_odcarrangemainvalue, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangegraphlegend('lg');
                    callback.multiloop(client, od_odcarrangegraphlegend, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangedlegendsarranged('lg');
                    callback.multiloop(client, od_odcarrangedlegendsarranged, properties, 'lg');


                    properties = overdraft_calculator_props.odcarrangedlegendtitle('lg');
                    callback.multiloop(client, od_odcarrangedlegendtitle, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangeli('lg');
                    callback.multiloop(client, od_odcarrangeli, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangemonthly('lg');
                    callback.multiloop(client, od_odcarrangemonthly, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangeinterest('lg');
                    callback.multiloop(client, od_odcarrangeinterest, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangelegendmarker('lg');
                    callback.multiloop(client, od_odcarrangelegendmarker, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangelegendmarkerint('lg');
                    callback.multiloop(client, od_odcarrangelegendmarkerint, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangelegendtext('lg');
                    callback.multiloop(client, od_odcarrangelegendtext, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangelegendvalue('lg');
                    callback.multiloop(client, od_odcarrangelegendvalue, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangenoofdays('lg');
                    callback.multiloop(client, od_odcarrangenoofdays, properties, 'lg');


                    properties = overdraft_calculator_props.odcarrangepromobubble('lg');
                    callback.multiloop(client, od_odcarrangepromobubble, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangebubblecontent('lg');
                    callback.multiloop(client, od_odcarrangebubblecontent, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangebubblecontentptag('lg');
                    callback.multiloop(client, od_odcarrangebubblecontentptag, properties, 'lg');


                    properties = overdraft_calculator_props.odcarrangebubbledesc('lg');
                    callback.multiloop(client, od_odcarrangebubbledesc, properties, 'lg');


                    properties = overdraft_calculator_props.odcarrangepoundvalue('lg');
                    callback.multiloop(client, od_odcarrangepoundvalue, properties, 'lg');

                    properties = overdraft_calculator_props.odcarrangedbubbledescstrong('lg');
                    callback.multiloop(client, od_odcarrangedbubbledescstrong, properties, 'lg');*/

                    client.pause(30000);
                }
            });











        }

    },





    "Ending the session": function (client) {
        client.end();
    }

}; 
