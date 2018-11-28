module.exports = {
  elements : {  

    productTable:{
      selector:".product-table"
    },
    heavyBandNothemeTh:{
      selector: ".heavy-band tr:not(.dark-theme) th "
    },
    heavyBandNothemeRte:{
      selector: ".heavy-band tr:not(.dark-theme) th .comp-rich-text p"
    },
    lightBandNothemeTh:{
      selector: ".light-band tr:not(.dark-theme) th"
    },
    lightBandNothemeRte:{
      selector: ".light-band tr:not(.dark-theme) th .comp-rich-text p"
    },
    lightBandNothemeTh:{
      selector:".light-band tr:not(.dark-theme) th"
    },
    darkTheme:{
      selector: ".dark-theme"
    },
    lightBandDarkTheme:{
      selector: ".product-table .light-band .dark-theme th"
    },
    lightBandDarkThemeRte:{
      selector: ".product-table .light-band .dark-theme th .comp-rich-text p"
    },
   
    heavyBandDarkTheme:{
      selector:".product-table .heavy-band .dark-theme th"
    },
     heavyBandDarkThemeRte:{
      selector:".product-table .heavy-band .dark-theme th .comp-rich-text p"
    },
    productTableCellWidth:{
       selector: ".product-table .col4 td"
    },
    productTableTable:{
      selector: ".product-table table"
    },
    lombardHeavyBrdrBtm:{
      selector:".product-table .heavy-band tr:not(.dark-theme) th"
    },
    lombardLightBrdrBtm:{
      selector:".product-table .light-band tr:not(.dark-theme) th"
    },
    tableTr:{
      selector:".product-table table tr"

    },
    heavyBandRowEven:{
      selector:".heavy-band tr:nth-child(even)"
    },
    heavyBandRowOdd:{
      selector:".heavy-band tr:nth-child(odd)"
    },
    lightBandRowEven:{
      selector:".light-band tr:nth-child(even)"
    },
    lightBandRowOdd:{
      selector:".light-band tr:nth-child(odd)"
    },
    tableTh:{
      selector: ".product-table th"
    },
    tableThPadding:{
      selector: ".product-table th:not(:first-child):not(:last-child)"
    },
    tableThFirstChild:{
      selector: ".product-table th:first-child"
    },
    tableThLastChild:{
      selector: ".product-table th:last-child"
    },
    tableTd:{
      selector: ".product-table td:not(:first-child):not(:last-child)"
    },

   tableTdFirstChild:{
      selector: '.product-table td:first-child'
    },
    tableTdLastChild:{
      selector: '.product-table td:last-child'
    },
    WhiteBandVariable:{
      selector:'.product-table .white-band__variable-fig'
    },
    richText:{
      selector:'.product-table td .comp-rich-text'
    },
    tableHeadingRichText:{
      selector:'.product-table th .comp-rich-text p'
    },
    tableCellListUl:{
      selector: '.product-table .comp-rich-text ul:not(.body-copy)'
    },
    heavyListUlBodyCopy:{
      selector:'.product-table .heavy-band .comp-rich-text ul.body-copy'
    },
    lightListUlBodyCopy:{
      selector:'.product-table .light-band .comp-rich-text ul.body-copy'
    },
    tableCellListLi:{
      selector: '.product-table .comp-rich-text ul li'
    },
    tableCellInfoIcon:{
      selector: '.product-table .comp-rich-text ul li .icon-info'
    },
    tableCellInfoIconLink:{
      selector: '.product-table .comp-rich-text ul li .icon-info a'
    },
    tableCellInfoIconLinkActive:{
      selector: '.product-table .comp-rich-text ul li .icon-info a:focus'
    },

    infoIconToolTipArrow: {
      selector: '.icon-info .icon-info__tool-tip-arrow'
    },
     infoIconToolTip: {
      selector: '.icon-info .icon-info__tool-tip'
    }




   
}
}


