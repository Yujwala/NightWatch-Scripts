module.exports = {
	elements: {
		contentwrapper: {
			selector: '.overdraft-calc .content-wrapper',
		},
		contentquestion: {
			selector: '.overdraft-calc .content-wrapper .questions',
		},
		headerwrapper: {
			selector: '.overdraft-calc .content-wrapper .questions .header-wrapper'
		},
		headwrapbanner: {
			selector: '.overdraft-calc .content-wrapper .questions .header-wrapper .banner'
		},
		headwrapbannerhtag: {
			selector: '.overdraft-calc .content-wrapper .questions .header-wrapper .banner h2'
		},
		headrichtxtptag: {
			selector: ".overdraft-calc .content-wrapper .questions .header-wrapper .banner .comp-rich-text p"
		},
		middlewrapper: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper'
		},
		questioncanvas: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .questions-canvas'
		},
		qnav: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .q-nav'
		},
		questionfooter: {
			selector: '.overdraft-calc .content-wrapper .questions .question-footer'
		},
		questionfootertxt: {
			selector: '.overdraft-calc .content-wrapper .questions .question-footer .comp-rich-text p'
		},
		offerscontent: {
			selector: '.offers-content.tooltip-bottom'
		},
		offerscontentMobile: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .questions-canvas .questions-wrapper .question .question-individual .LC-card-wrapper~.tooltip-bottom'
		},
		tooltipimage: {
			selector: '.offers-content.tooltip-bottom>.tooltip-image'
		},
		tooltipimagemobile: {
			selector: '.main--tool-mobile .overdraft-calc .content-wrapper .questions .middle-wrapper .questions-canvas .questions-wrapper .question .question-individual .LC-card-wrapper~.tooltip-bottom .tooltip-image'
		},
		tooltipdescanchor: {
			selector: '.offers-content.tooltip-bottom>.tooltip-description a'
		},
		tooltipdesc: {
			selector: '.offers-content.tooltip-bottom>.tooltip-description'
		},
		tooltipdescmobile: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .questions-canvas .questions-wrapper .question .question-individual .LC-card-wrapper~.tooltip-bottom .tooltip-description'
		},

		tooltipdescptext: {
			selector: '.offers-content.tooltip-bottom>.tooltip-description .comp-rich-text p'
		},
		tooltipdescptextmobile: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .questions-canvas .questions-wrapper .question .question-individual .LC-card-wrapper~.tooltip-bottom .tooltip-description .comp-rich-text p'
		},
		cardwrapper: {
			selector: '.card-wrapper.LC-card-wrapper'
		},
		cardwrapperimg: {
			selector: '.card-wrapper.LC-card-wrapper img'
		},
		questionblock: {
			selector: '.card-wrapper.LC-card-wrapper+.question-block'
		},
		questionblocklabel: {
			selector: '.card-wrapper.LC-card-wrapper+.question-block > label'
		},
		questionblockinput: {
			selector: '.card-wrapper.LC-card-wrapper+.question-block .form-input-row'
		},

		nextbtn: {
			selector: '.q-nav #nextCTA'
		},

		nextbtndisable: {
			selector: '.q-nav>.next.disabled'
		},
		questionblockselector: {
			selector: '.card-wrapper.LC-card-wrapper+.question-block .form-input-row  .selector'
		},
		questionblockselectordisabled: {
			selector: '.card-wrapper.LC-card-wrapper+.question-block .form-input-row  .selector>.disabled'
		},

		radiobtnsnotactive: {
			selector: '.odc-radio-option:not(.active)'
		},
		radiobtnactive: {
			selector: '.odc-radio-option.active'
		},
		radiobtnprop: {
			selector: '.odc-radio-option'
		},

		nextbuttondisable: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .q-nav .next.disabled'
		},
		nextbtnnotdisable: {
			selector: '.overdraft-calc .content-wrapper .questions .middle-wrapper .q-nav .next'
		},

		inputtextfield: {
			selector: '.content-section-rewards.OD-calc-slider-sec .input-field'
		},

		editinputtextfield: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .OD-details-editHide-cont .OD-details-hide-cont ul li .OD-calc-slider-sec .slider-input .input-field'
		},

		resultli: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .OD-details-editHide-cont .OD-details-edit-cont ul li+li'
		},

		resultlispan: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .OD-details-editHide-cont .OD-details-edit-cont ul li .ODC-result-edit-label'
		},

		resultlieditvalue: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .OD-details-editHide-cont .OD-details-edit-cont ul li .ODC-result-edit-value:not(.numberOfDays)'
		},

		resulteditvaluespan: {
			selector: '.ODC-result-edit-label + span > span'
		},

		resulteditvaluespanlast: {
			selector: '.ODC-result-edit-value.numberOfDays'
		},

		resultcontainer: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container'
		},
		donutwrapper: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper'
		},

		donutgraphwrapper: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-graph-wrapper'
		},
		donuttext: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-graph-wrapper .donut-text'
		},
		donuttexttitle: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-graph-wrapper .donut-text .donut-text--title'
		},
		donuttotalcost: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-graph-wrapper .donut-text .total-cost'
		},
		donutdecimal: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-graph-wrapper .donut-text .total-cost .decimal-value'
		},
		donutcontent: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content'
		},
		donuttitledesktop: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner .donut-title-subtitle .donut-title-desktop'
		},
		legendsarranged: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner .legends-arranged'
		},
		legendtitle: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner ul .legend-title'
		},
		legendinterest: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner .legends-arranged .interest'
		},
		legendmonthly: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner .legends-arranged .monthly'
		},
		legendtext: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner ul li .legend-text'
		},
		legendvalue: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-graph-container .donut-wrapper .donut-content .donut-content-aligner ul li .legend-text .legend-value'
		},
		summarywrapper: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper'
		},
		representativesummary: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary'
		},
		ODCsummarydesctwo: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-two'
		},
		ODCsummarydesctwoa: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-two .ODC-summary-desc-two-a'
		},

		ODCsummarydesctwoah2: {
			selector: '.ODC-summary-desc-two-a >  h2'
		},
		ODCsummarydesctwoap: {
			selector: '.ODC-summary-desc-two-a >  p'
		},
		ODCsummarydesctwob: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-two .ODC-summary-desc-two-b'
		},
		ODCsummarydesctwobh2: {
			selector: '.ODC-summary-desc-two-b >  h2'
		},
		ODCsummarydesctwobp: {
			selector: '.ODC-summary-desc-two-b p'
		},
		ODCsummarydescone: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one'
		},
		ODCsummarydesconeleft: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one .ODC-summary-desc-one-left'
		},
		ODCsummarydesconelefth3: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one .ODC-summary-desc-one-left h3'
		},
		odcActionDescription: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one .ODC-summary-desc-one-left .ODC-summary-desc-one-a'
		},
		ODCsummarydesconeb: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one .ODC-summary-desc-one-b'
		},
		ODCsummarydesconebanchor: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .representative-summary-wrapper .representative-summary .ODC-summary-desc-one .ODC-summary-desc-one-b>span span a'
		},
		ODCsummarydesconebanchorcursor: {
			selector: '.ODC-summary-desc-one-b .cursor-default a'
		},
		ODCbottomsummary: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-bottom-summary'
		},
		summarygridleft: {
			selector: '.ODC-bottom-summary .XLEFT'
		},
		headergroupsign: {
			selector: '.ODC-bottom-summary .header-group__sign-post'
		},
		headergroupheadline: {
			selector: '.ODC-bottom-summary .header-group__headline'
		},
		odcbottomsummaryptag: {
			selector: '.ODC-bottom-summary p'
		},

		//second case

		odcwitharrangedwrapper: {
			selector: '.overdraft-calc .content-wrapper .final-result .ODC-result-wrapper .odc-results-container .ODC-compare-wrapper.odc-with-arranged-wrapper'
		},
		odcarrangedleft:{
			selector:'.odc-with-arranged-wrapper .ODC-left-compare'
		},
		odcarrangedright:{
			selector:'.odc-with-arranged-wrapper .ODC-right-compare'
		},
		odcarrangedleftptag:{
			selector:'.odc-with-arranged-wrapper .ODC-left-compare p'
		},
		odcarrangedrightptag:{
			selector:'.odc-with-arranged-wrapper .ODC-right-compare p'
		},
		odcarrangedgraph:{
			selector:'.odc-with-arranged-wrapper .ODC-graph-wrapper'
		},
		odcarrangedcost:{
			selector:'.odc-with-arranged-wrapper .ODC-graph-wrapper .total-cost'
		},
		odcarrangemainvalue:{
			selector:'.odc-with-arranged-wrapper .ODC-graph-wrapper .total-cost .main-value'
		},
		odcarrangedecimalvalue:{
			selector:'.odc-with-arranged-wrapper .ODC-graph-wrapper .total-cost .decimal-value'
		},
		odcarrangegraphlegend:{
			selector:'.odc-with-arranged-wrapper .ODC-graph-legend'
		},
		odcarrangedlegendsarranged:{
			selector:'.odc-with-arranged-wrapper .legends-arranged'
		},
		odcarrangedlegendsunarranged:{
			selector:'.odc-with-arranged-wrapper .legends-unarranged'
		},
		odcarrangedlegendtitle:{
			selector:'.odc-with-arranged-wrapper .legends-arranged .legend-title'
		},
		odcarrangemonthly:{
			selector:'.odc-with-arranged-wrapper .monthly'
		},
		odcarrangeinterest:{
			selector:'.odc-with-arranged-wrapper .interest'
		},
		odcarrangeli:{
			selector:'.odc-with-arranged-wrapper li+li'
		},
		odcarrangelegendmarker:{
			selector:'.odc-with-arranged-wrapper .interest .legend-marker'
		},
		odcarrangelegendmarker:{
			selector:'.odc-with-arranged-wrapper .monthly .legend-marker'
		},
		odcarrangelegendmarkerint:{
			selector:'.odc-with-arranged-wrapper .interest .legend-marker'
		},
		odcarrangelegendtext:{
			selector:'.odc-with-arranged-wrapper .legend-text'
		},
		odcarrangelegendvalue:{
			selector:'.odc-with-arranged-wrapper .legend-value'
		},
		odcarrangenoofdays:{
			selector:'.odc-with-arranged-wrapper .numberOfDays'
		},
		odcarrangepromobubble:{
			selector:'.odc-with-arranged-wrapper .ODC-promo-bubble'
		},
		odcarrangebubblecontent:{
			selector:'.odc-with-arranged-wrapper .bubble-content'
		},
		odcarrangebubblecontentptag:{
			selector:'.odc-with-arranged-wrapper .bubble-content .bubble-title p'
		},
		odcarrangebubbledesc:{
			selector:'.odc-with-arranged-wrapper .bubble-description'
		},
		odcarrangepoundvalue:{
			selector:'.odc-with-arranged-wrapper .bubble-description .ODC-pound-value'
		},
		odcarrangedbubbledescstrong:{
			selector:'.odc-with-arranged-wrapper .bubble-description strong'
		},



	},
};


