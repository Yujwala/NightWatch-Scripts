module.exports = {
	elements : {
		//Product testing for all the backgrounds DESKTOP
		prodClrBgClrPadd:{
			selector:".main .shelf--product"
		},
		prodInnerPadd:{
			selector:".main .shelf--product .shelf__inner.shelf--padded"
		},
		prodGridItemCont:{
			selector:".main .shelf--product .teaser--vr"
		},
		prodLeft1third:{
			selector:'.main .shelf--product div.desk--one-third:not([role="contentinfo"])'
		},
		prodLeftImgprops:{
			selector:'.main .shelf--product div.desk--one-third:not([role="contentinfo"]) img'
		},
		prodRight2thirds:{
			selector:'.main .shelf--product div.desk--two-thirds[role="contentinfo"]'
		},
		prodRig23rdsTitle:{
			selector:'.main .shelf--product div.desk--two-thirds[role="contentinfo"] .teaser__head'
		},
		prodRigh23rdsRTE:{
			selector:'.main .shelf--product div.desk--two-thirds[role="contentinfo"]'
		},
		//Desktop Selectors for grid
		gridSelBelowProd:{
			selector:'.main .shelf[class*="theme--"]:not(.shelf--product):not(.shelf--product-detail)'
		},		
		gridInnerPaddings:{
			selector:'.main .shelf[class*="theme--"]:not(.shelf--product) .shelf__inner.shelf--padded'
		},
		gridInnerMargin:{
			selector:'.main .shelf[class*="theme--"]:not(.shelf--product) .shelf__inner.shelf--padded .grid'
		},
		lightBlueBgGrid:{
			selector:".main .shelf.theme--light-blue"
		},
		BlueBgGrid:{
			selector:".main .shelf.theme--blue"
		},
		whiteBgGrid:{
			selector:".main section.shelf.theme--white"
		},
		hundrPercGrid:{
			selector:".main section.shelf .grid .grid__item.desk--one--whole"
		},
		fifty50Grid:{
			selector:".main section.shelf .grid .grid__item.desk--one-half"
		},
		sixtySev33Grid:{
			selector:".main section.shelf:not(.shelf--product) .grid .grid__item.desk--one-third,.main section.shelf:not(.shelf--product) .grid .grid__item.desk--two-thirds"
		},
		allGridsSelectors:{
			selector:".main section.shelf .grid .grid__item.desk--one--whole,.main section.shelf .grid .grid__item.desk--one-half,.main section.shelf:not(.shelf--product) .grid .grid__item.desk--one-third,.main section.shelf:not(.shelf--product) .grid .grid__item.desk--two-thirds"
		},
		//White two third selectors
		White23rdRTETitle:{
			selector:".main section.shelf:not(.shelf--product).theme--white .grid .grid__item.desk--two-thirds"
		},
		Whit13rdtable:{
			selector:".main section.shelf:not(.shelf--product).theme--white .grid .grid__item.desk--one-third"
		},
		WhitBlockQuoteText:{
			selector:".main section.shelf.theme--white .grid .grid__item"
		},
		//Blue two third GRID content selectors
		BlueRTETitle:{
			selector:".main section.shelf:not(.shelf--product).theme--blue"
		},
		BlueRTETitPadd:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--two-thirds>"
		},
		BlueRTE13rdTitPadd:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one-third"
		},
		BlueBlockQuoteText:{
			selector:".main section.shelf.theme--blue .grid .grid__item"
		},
		//Blue 100% Grid Selectors
		Blue100RTEh3:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole>"
		},
		Blue100table:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table"
		},
		Blue100tabBody:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody"
		},
		Blue100tab1sttr:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:first-child"
		},
		Blue100Not1sttr:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:not(:nth-child(1))"
		},		
		Blue100tableth:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:nth-child(1) th:not(:first-child):not(:last-child)"
		},
		Blue100Not1LastTD:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:not(:nth-child(1)) td:not(:first-child):not(:last-child)"
		},
		Blue100FirstTD:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:not(:nth-child(1)) td:first-child"
		},
		Blue100LastTD:{
			selector:".main section.shelf:not(.shelf--product).theme--blue .desk--one--whole table tbody tr:not(:nth-child(1)) td:last-child"
		},
		//Light Blue RTE 50% 
		LytBlue50RTETitle:{
			selector:".theme--light-blue .desk--one-half"
		},
		LytBlue50AeroIcon:{
			selector:".theme--light-blue .desk--one-half .bl__icon-airplane"
		},
		LytBlue50BLTitle:{
			selector:".theme--light-blue .desk--one-half .bl__text .benefits-list"
		},
		LytBlue50BLpara:{
			selector:".theme--light-blue .desk--one-half .bl__text p"
		},
		LytBlue50BLUL:{
			selector:".theme--light-blue .desk--one-half .bl__text ul"
		},
		LytBlue50BLLi:{
			selector:".theme--light-blue .desk--one-half .bl__text ul li"
		},		
		LytBlue50RytH4:{
			selector:".theme--light-blue .desk--one-half h4 strong"
		},		
		LytBlue50RytH4padd:{
			selector:".theme--light-blue .desk--one-half h4"
		},
		LytBlueBlockQuoteText:{
			selector:".theme--light-blue"
		},
		//Light Blue 100% Heavy Band(HB)
		LytBlue100HBinnpadd:{
			selector:".theme--light-blue .desk--one--whole"
		},
		LytBlue100HBTabl:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band"
		},
		LytBlue100HBTablRow1:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:first-child"
		},
		LytBlue100HBTablTH:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:first-child th:not(:first-child):not(:last-child)"
		},
		LytBlue100HBTablTH1st:{
			selector:'.theme--light-blue .desk--one--whole table.heavy-band tr:first-child th:first-child:not([style*="padding-left: 0.3em"])'
		},
		LytBlue100HBTablTHLast:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:first-child th:last-child"
		},
		LytBlue100HBTablTHH2:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:first-child th h2"
		},
		LytBlue100HBTablEvenTr:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:nth-child(even)"
		},
		LytBlue100HBEvenTd:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:nth-child(even) td:not(:first-child):not(:last-child)"
		},
		LytBlue100HBEven1st:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:nth-child(even) td:first-child"
		},
		LytBlue100HBEvenLast:{
			selector:".theme--light-blue .desk--one--whole table.heavy-band tr:nth-child(even) td:last-child"
		},
		//Light Blue 100% White Band Table 
		LytBlue100WBTabl:{
			selector:".theme--light-blue .desk--one--whole table.white-band"
		},
		LytBlue100WBTabl1stTr:{
			selector:".theme--light-blue .desk--one--whole table.white-band tr:first-child"
		},
		LytBlue100WBTablTh:{
			selector:".theme--light-blue .desk--one--whole table.white-band tr:first-child th"
		},
		LytBlue100WBEvenTr:{
			selector:".theme--light-blue .desk--one--whole table.white-band tr:nth-child(even)"
		},
		LytBlue100WBEvenTrTh:{
			selector:".theme--light-blue .desk--one--whole table.white-band tr:nth-child(even) th"
		},
		LytBlue100WBTablTd:{
			selector:".theme--light-blue .desk--one--whole table.white-band tr:nth-child(even) td,.theme--light-blue .desk--one--whole table.white-band tr:nth-child(odd):not(:first-child) td"
		},

		//Product testing for all the backgrounds MOBILE
		proRig23rdsTitlMob:{
			selector:".main .shelf--product .desk--one-full .teaser__head"
		},
		imgmobileSel:{
			selector:".main .shelf--product .desk--one-full img"
		},
		righttextContMob:{
			selector:".main .shelf--product .desk--two-third"
		},
		rightRTEmob:{
			selector:".main .shelf--product"
		},
		//grid Sel Mob
		gridSelBelowProdMob:{
			selector:'.main .shelf[class*="theme--"]:not(.shelf--product-detail):not([style="padding-top: 28px;"])'
		},
		gridBlowProdConf:{
			selector:'.main .shelf[class*="theme--"].shelf--product-detail'
		},
		//Light Blue 100% Heavy Band(HB) MOBILE
		//Light Blue 100% White Band Table MOBILE
		//23rd all coverage
		RTE23rdTitle:{
			selector:".main section.shelf:not(.shelf--product) .grid .grid__item.desk--two-thirds"
		},
		tab13rd1stRowTD:{
			selector:".main section.shelf:not(.shelf--product) .grid .grid__item.desk--one-third"
		},
	}

};

