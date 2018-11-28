module.exports = {
    elements:{

        blogheader : {
            selector : '.blog-header',
        },

        heroHg : {
            selector:'.shelf:not(.theme--blue) .blog-header .hero__heading',
        },

        heroHgbluetheme: {
            selector:'.shelf.theme--blue .blog-header .hero__heading',
        },

        heroHgcenter: {
            selector:'.shelf:not(.theme--blue) .blog-header p.centeralign',
        },

        blueheroHgcenter: {
            selector:'.shelf.theme--blue .blog-header p.centeralign ',
        },

        date:{
            selector:'.shelf:not(.theme--blue) .blog-header .author-date',
        },

        seperatorline:{
            selector:'.blog-header .separator-line',

        }

    }

}