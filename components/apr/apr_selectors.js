module.exports = {
	elements: {
		themeLightBlue: {
			selector: '.shelf.theme--light-blue.canvas-shelf'
		},
		themeWhite: {
			selector: '.shelf.theme--white.canvas-shelf'
		},
		themeBlue: {
			selector: '.shelf.theme--blue.canvas-shelf'
        },
        aprWrapper: {
            selector: 'section:not( .theme--blue) .desk--one--whole .APRBlockComp_Wrapper '
		},
		aprWrapper1: {
			selector:' .theme--blue .desk--one--whole .APRBlockComp_Wrapper '
		},
		aprUl: {
			selector: '.APRBlockComp_Wrapper .comp-rich-text ul'
		},
		aprLi: {
			selector: '.APRBlockComp_Wrapper .comp-rich-text ul li'
		},
		grid1: {
			selector : '.theme--blue .desk--one--whole .APRBlockComp_Wrapper .grid__item'
		},
		grid: {
			selector: ' section:not( .theme--blue) .desk--one--whole .APRBlockComp_Wrapper .grid__item'
		},
		ctaM1: {
			selector : '.theme--blue .desk--one--whole .APRBlockComp_Wrapper .cta.cta--branded.cta--m a'
		},
		ctaM: {
			selector : ' section:not( .theme--blue) .desk--one--whole .APRBlockComp_Wrapper .cta.cta--branded.cta--m a'
		},
		ctaMFocus: {
			selector : '.APRBlockComp_Wrapper .cta.cta--branded.cta--m a:focus'
		},
		ctaL : {
			selector : '.APRBlockComp_Wrapper .cta.cta--branded.cta--l a'
		},
		ctaLFocus : {
			selector : '.APRBlockComp_Wrapper .cta.cta--branded.cta--l a:focus'
		}
    }
};