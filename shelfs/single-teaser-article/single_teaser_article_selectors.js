module.exports = {
	elements : {
		singleArticleShelf : {
			selector : '.shelf.single-article'
		},
		themeWhiteShelf : {
			selector : '.shelf.single-article.theme--white'
		},
		themeBlueShelf : {
			selector : '.shelf.single-article.theme--blue'
		},
		themeLightBlue : {
			selector : '.shelf.single-article.theme--light-blue'
		},
		articlePadding : {
			selector : '.shelf.single-article .single-article__content'
		},
		titTextSel : {
			selector : '.shelf.single-article .header-group .header-group__headline'
		},
		titMargin : {
			selector : '.shelf.single-article .header-group'
		},	
		rteText : {
			selector : '.shelf.single-article  .comp-rich-text p'
		},
		rteSel : {
			selector : '.shelf.single-article .comp-rich-text'
		},
		rteIncidentMesSel:{
			selector:'.shelf.single-article .comp-rich-text.incident_message'
		},
		rteTextBlue : {
			selector : '.shelf.single-article.theme--blue  .comp-rich-text p'
		},
		rteTextWhite : {
			selector : '.shelf.single-article.theme--white  .comp-rich-text p'
		},
		rteTextLight : {
			selector : '.shelf.single-article.theme--light-blue  .comp-rich-text p'
		},
		rteTextChild : {
			selector : '.shelf.single-article .comp-rich-text  p:not(:last-child)'
		},
		imgWrap : {
			selector : '.shelf.single-article .float-right  img'
		},
		imgPadding : {
			selector : '.shelf.single-article .grid .grid__item'
		},
		ctaSecondary : {
			selector : '.shelf.single-article .cta.cta--m a'
		},
		ctaIcon : {
			selector : '.shelf.single-article .cta--m a:focus'
		},
		ctahref : {
			selector : '.cta--strap--width a'
		},
		videoheading:{
			selector:'.shelf.single-article .video__heading'
		},
		videoplaythemeWhitebutton:{
			selector:'.shelf.single-article.theme--white  .video__play'
		},
		videoplaythemebluebutton:{
			selector:'.shelf.single-article.theme--blue .video__controls a'
		},
		playbuttonfoucus:{
             selector:".shelf.single-article.theme--blue .video__controls a:focus"
		},

		//Mobile selectors
		articlePaddingMobile : {
			selector : '.single-article .shelf__inner.shelf--padded'
		},
		ctaSarticlePaddingMobile : {
			selector : '.shelf.single-article .cta--m.cta-alignment-left'
		},
	
  }
};
