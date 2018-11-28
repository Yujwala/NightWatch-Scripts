module.exports = {
    elements:{
        alshelfProps :{
            selector: '.shelf.shelf--first',
        },

        themeDarkgreyShelf : {
			selector : '.shelf.theme--dark-grey.shelf--first '
		},
		themeLightgreyShelf : {
			selector : '.shelf.theme--light-grey.shelf--first '
		},
		themeBrownShelf : {
			selector : '.shelf.theme--brown.shelf--first '
		},
		themeBlueShelf : {
            selector : '.shelf.theme--blue '
		},

		themeLightblueShelf :{
			selector :'.shelf.theme--light-blue '
		},
		themeWhiteShelf :{
			selector :'.shelf.theme--white'
		},

		innershelf : {
			selector : '.shelf.shelf--first .shelf__inner.shelf--padded'
		},

		Shelfheading : {
			selector : '.automated-list.alc-horizontal.column-3  h3.automated-list-heading'
		},

		listcomponent : {
			selector : '.automated-list.alc-horizontal.column-3 .automated-list-row .automated-list-item .automated-list-info'
		},

		verticallistcomponent : {
			selector : '.automated-list.alc-vertical.column-2 .automated-list-row .automated-list-info'
		},

		listheading :{
			selector : '.automated-list.alc-horizontal.column-3 .automated-list-row .automated-list-item .automated-list-info a.automated-list-heading'
		},

		verticallistheading :{
			selector : '.automated-list.alc-vertical.column-2 a.automated-list-heading'
		},



		listheadinghover : {
			selector : '.shelf:not(.theme--blue)  .automated-list .automated-list-row .automated-list-item .automated-list-info .automated-list-heading'
		},

		listitem : {
			selector: '.automated-list.alc-horizontal .automated-list-row .automated-list-item:not(:last-child)'
		},

		verticallistitem :{
            selector:'.automated-list.alc-vertical.column-2.automated-list .automated-list-row .automated-list-item .automated-list-info'
		},

		listcontainertext : {
			selector: '.automated-list-desc.elipsis-container'
		},
		listcontainertextafter : {
			selector: '.theme--white .automated-list .automated-list-row .automated-list-item .automated-list-info .automated-list-desc'
		},
        listcontainertextafterblue : {
			selector: '.theme--blue .automated-list .automated-list-row .automated-list-item .automated-list-info .automated-list-desc'
		},

		listitemfocus:{
			selector:'a.automated-list-heading' 
		},

		verticalshelfheading:{
			selector : '.automated-list.alc-vertical.column-2 h3.automated-list-heading'

		}


	

	
    }

}