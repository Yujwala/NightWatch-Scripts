module.exports = {
    elements: {
        toolshelfstart:{
            selector:'.shelf .tool--shelf'
        },
        toolthemewhite: {
            selector: '.shelf.theme--white:not(.shelf--first)',
        },
        toolthemeblue: {
            selector: '.shelf.theme--blue',
        },
        toolthemelightblue: {
            selector: '.shelf.theme--light-blue',
        },
        toolthemeoffwhite: {
            selector: '.shelf.theme--off-white',
        },

         toolgriditem: {
             selector: '.shelf .tool--shelf>.grid>.grid__item'
         },
        toolgriditemonehalf:{
            selector:'.shelf .tool--shelf>.grid>.grid__item.desk--one-half'
        },
        toolgriditemonethird:{
            selector:'.shelf .tool--shelf>.grid>.grid__item.desk--one-third'
        },
        toolgriditemonethirdnext:{
            selector:'.desk--two-thirds+.grid__item.palm--one-half.desk--one-third'
        },
        toolgriditemheader: {
            selector: '.shelf .tool--shelf .header-group'
        },
        toolgriditemheadersignpost: {
            selector: '.shelf .tool--shelf.header-group .header-group__sign-post'
        },
        toolgriditemheaderheadline: {
            selector: '.shelf .tool--shelf .header-group .header-group__headline'
        },
        toolgriditemdesc: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .tool-desc'
        },
        toolgriditemdescrichtxt: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .tool-desc .comp-rich-text'
        },
        toolgriditemdescrichtxtp: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .tool-desc .comp-rich-text p'
        },
        toolgriddesk: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .palm--one-half'
        },

        toolgriddeskanchor: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .palm--one-half a'
        },
        toolgriddeskanchoricon:{
            selector:'.shelf .tool--shelf>.grid>.grid__item .palm--one-half a .tool__icon'
        },
        toolgriddeskanchorcal: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .palm--one-half a .icon-calc'
        },
        toolgriddeskanchorsearch: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .palm--one-half a .icon-search-2'
        },
        toolgriddeskanchorhome: {
            selector: '.shelf .tool--shelf>.grid>.grid__item .palm--one-half a .icon-home'
        },
        toolgriddeskpicon:{
            selector:'.shelf .tool--shelf>.grid>.grid__item .palm--one-half a .tool__inner'
        },

        toolgridonethird:{
            selector:'.shelf .tool--shelf>.grid>.desk--one-third'
        },
        toolgridtwothird:{
            selector:'.shelf .tool--shelf>.grid>.desk--two-thirds'
        }

    }
}