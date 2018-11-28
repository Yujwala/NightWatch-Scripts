module.exports = {
	elements : {
		multTeaserShelf : {
			selector : '.shelf.teaser-multiple.horizontal:nth-child(n+10)'//.shelf.teaser-multiple.horizontal
		},
		themeBlueShelf : {
			selector : '.shelf.theme--blue.teaser-multiple.horizontal'
		},
		themeWhiteShelf : {
			selector : '.shelf.theme--white.teaser-multiple.horizontal'
		},
		themeLightBlueShelf : {
			selector : '.shelf.theme--light-blue.teaser-multiple.horizontal'
		},
		titleTextCls : {
			selector : '.shelf.teaser-multiple .header-rte-section .header-group .header-group__headline'
		},
		titleMargin : {
			selector : '.shelf.horizontal .comp-rich-text h3'
		},
		titleHeaderGrp : {
			selector : '.shelf.horizontal .header-group'
		},
		themeBlueTitle : {
			selector : '.shelf.theme--blue.teaser-multiple .header-rte-section .header-group .header-group__headline'
		},
		themeLightBlueTitle : {
			selector : '.shelf.theme--light-blue.teaser-multiple .header-rte-section .header-group .header-group__headline'
		},
		themeWhiteTitle : {
			selector : '.shelf.theme--white.teaser-multiple .header-rte-section .header-group .header-group__headline'
		},
		rteSection : {
			selector : '.shelf.horizontal .header-rte-section .comp-rich-text p'
		},	
		themeBlueRte : {
			selector : '.shelf.theme--blue.horizontal .header-rte-section .comp-rich-text p'
		},
		themeWhiteRte : {
			selector : '.shelf.theme--white.horizontal .header-rte-section .comp-rich-text p'
		},
		themeLightBlueRte : {
			selector : '.shelf.theme--light-blue.horizontal .header-rte-section .comp-rich-text p'
		},
		gridItem : {
			selector : '.shelf.horizontal .grid .grid__item.desk--one-third'
		},
		gridItemTwo : {
			selector : '.shelf.horizontal .grid .grid__item.desk--one-half'
		},
		teaserHead : {
			selector : '.shelf .teaser__head .cta a'
		},
		themeBlueTHead : {
			selector : '.shelf.theme--blue .teaser__head .cta a'
		},
		themeWhiteTHead : {
			selector : '.shelf.theme--white .teaser__head .cta a'
		},
		themeLightBlueTHead : {
			selector : '.shelf.theme--light-blue .teaser__head .cta a'
		},
		imgWrap : {
			selector : '.shelf .teaser__content .imgContainer'
		},
		imgWrapp : {
			selector : '.shelf.theme--white.teaser--3.teaser-multiple.horizontal .image'
		},
		imgCls : {
			selector : '.shelf .teaser__content .imgContainer .image'
		},
		imgClss: {
			selector : '.shelf.theme--light-blue.teaser--2.teaser-multiple.horizontal .image'
		},
		teaserContent : {
			selector : '.shelf .teaser__content .contentContainer .comp-rich-text p'
		},
		themeBlueContent : {
			selector : '.shelf.theme--blue .teaser__content .contentContainer .comp-rich-text p'
		},
		themeWhiteContent : {
			selector : '.shelf.theme--white .teaser__content .contentContainer .comp-rich-text p'
		},
		themeLightBlueContent : {
			selector : '.shelf.theme--light-blue .teaser__content .contentContainer .comp-rich-text p'
		},		
		ctaWrap : {
			selector : '.shelf.horizontal .cta.cta--m a'
		},
		themeBlueCta : {
			selector : '.shelf.theme--blue.horizontal .cta.cta--m a'
		},
		themeBlueCta1 : {
			selector : '.shelf.theme--blue.teaser--2.teaser-multiple.horizontal:nth-child(odd)  .cta.cta--m.cta--mapp-l a'
		}, //we take this selector as the color of cta is different in blue shelf
		themeWhiteCta : {
			selector : '.shelf.theme--white.horizontal .cta.cta--m a'
		},
		themeLightBlueCta : {
			selector : '.shelf.theme--light-blue.horizontal .cta.cta--m a'
		},
		ctaHover : {
			selector : '.shelf.horizontal .cta.cta--m a'
		},
		themeBlueCtaHover : {
			selector : '.shelf.theme--blue.horizontal .cta.cta--m a'
		},
		themeWhiteCtaHover : {
			selector : '.shelf.theme--white.horizontal .cta.cta--m a'
		},
		themeLightBlueCtaHover : {
			selector : '.shelf.theme--light-blue.horizontal .cta.cta--m a'
		},

		//selectors for new configurations
		multipleTeaserShelfVertical:{
			selector:'.shelf.teaser-multiple.vertical'
		},
		themeBlueShelfVertical:{
			selector:'.shelf.theme--blue.teaser-multiple.vertical'
		},
		themeWhiteShelfVertical:{
			selector:'.shelf.theme--white.teaser-multiple.vertical'
		},
		themeLightBlueShelfVertical:{
			selector:'.shelf.theme--light-blue.teaser-multiple.vertical'
		},
		titleHeaderGrpVertical:{
			selector:'.shelf.teaser-multiple.vertical .header-group__headline'
		},
		rteSectionVertical:{
			selector:'.shelf.teaser-multiple.vertical'
		},
		themeBlueRteVer:{
			selector:'.shelf.theme--blue.vertical .header-rte-section'
		},
		themeWhiteRteVer:{
			selector:'.shelf.theme--white.vertical .header-rte-section'
		},
		themeLightBlueRteVer:{
			selector:'.shelf.theme--white.vertical .header-rte-section'
		},
		imgWrapGridTeaser:{
			selector:'.grid .grid__item.lap--one-half.desk--one-third img'
		},
		articleTeaserContent:{
			selector:'.shelf.teaser-multiple.vertical'
		},
		themeBlueContentVertical:{
			selector:'.shelf.theme--blue.teaser-multiple.vertical'
		},
		themeWhiteContentVertical:{
			selector:'.shelf.theme--white.teaser-multiple.vertical'
		},
		themeLightBlueContentVertical:{
			selector:'.shelf.theme--light-blue.teaser-multiple.vertical'
		},
		ctaWrapVertical:{
			selector:'.grid .grid__item.lap--one-half.desk--two-thirds .cta.cta--m.cta--mapp-l a'
		},
		ctaWrapVerticalLom:{
			selector:'.shelf.theme--light-blue.teaser--3.teaser-multiple.vertical .cta a'
		},
		themeBlueCtaVertical:{
			selector:'.shelf.theme--blue.vertical .cta.cta--m a'
		},
		themeWhiteCtaVertical:{
			selector:'.shelf.theme--white.vertical .cta.cta--m a'
		},
		themeLightBlueCtaVertical:{
			selector:'.shelf.theme--light-blue.vertical .cta.cta--m a'
		},
		ctaHoverVertical: {
			selector:'.shelf.vertical .cta.cta--m a'
		},
		ctaHoverVerticalLom: {
			selector:'.shelf.vertical:nth-of-type(2n+7) .cta.cta--m a'
		},
		themeBlueCtaHoverVertical : {
			selector : '.shelf.theme--blue.vertical .cta.cta--m a'
		},
		themeWhiteCtaHoverVertical : {
			selector : '.shelf.theme--white.vertical .article-3 .cta.cta--m a'
		},
		themeLightBlueCtaHoverVertical : {
			selector : '.shelf.theme--light-blue.vertical .article-3 .cta.cta--m a'// .shelf.theme--light-blue.vertical .cta.cta--m a//.shelf.theme--light-blue.vertical .article-3 a
		},
		themeWhiteCtaHoverVerticalNw : {
			selector : '.shelf.theme--white.vertical .cta.cta--m a'
		},
		themeLightBlueCtaHoverVerticalNw : {
			selector : '.shelf.theme--light-blue.vertical .cta.cta--m a'// .shelf.theme--light-blue.vertical .cta.cta--m a//.shelf.theme--light-blue.vertical .article-3 a
		},
		
	}
};
