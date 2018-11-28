module.exports = {
    elements : {
 //TabItem component selectors
         innershelf:
         {
             selector:'.shelf.theme--light-blue.shelf--first.canvas-shelf .shelf__inner.shelf--padded'
         },
         onewhole:
         {
             selector:'.grid__item.desk--one--whole'
         },
         servicestabwrapper:
         {
             selector:'.services-tab-wrapper'
         },
         tabs:
         {
            selector:'.services-tab-wrapper #tabs'
         },
         tabscontent:
         {
             selector:'.services-tab-wrapper #tabscontent'
         },
         heading:
         {
             selector:'.services-tab-wrapper .text-image-heading'
         },
         richtext:{
             selector:'.services-tab-wrapper .text-image-desc'
         },
         tabseperator:{
             selector:'.services-tab-wrapper .tab-separator'
         },
         Quickcompareleftdiv:{
             selector:'.APRBlockComp_Wrapper.APRBlockComp_vertical' //this class is for both right and left divs
         },
         Understandhowmuchrightdiv:{
             selector:'.services-tab-wrapper .grid .grid__item.desk--one-half'  //this class is for both right and left divs
         },
         inactivetabs:{
             selector:'#tabHeader_2 .tab-heading-wrapper'//#tabHeader_2 .tab-heading-wrapper
         },
         inactiveheaders:{
             selector:'.tab-heading-wrapper h2'
         },
         Activetab:{
             selector:'.tab-heading-wrapper.tab-active-header'
         },
         allTabsHeading:{
             selector:'.text-image-wrapper.no-text-image-image .text-image-heading p'
         },
        commonblockalltabs:{
            selector:'.APRBlockComp_Wrapper.APRBlockComp_horizontal'
        },  
        commonheaderTabTwo:{
            selector:'.fs-16'
        },
        subTabsBlocktext:{
            selector:'#tabpage_1 .fc-purple'//#tabpage_1 .fc-purple
        },
        blockoneCta:{
            selector:'.cta--m.lightbox.rte-cta a'
        },
        taboneleftbutton:{
            selector:'.cta.cta--branded.cta--l.cta-alignment-center.cta--mapp-l a'
        },
        taboneleftbuttonhover:{
            selector:'.cta--l a:hover'
        },
        taboneleftbuttonfocus:{
            selector:'.cta.cta--branded.cta--l a:focus'
        },
        tabtwolinkone:{
            selector:'.cta--m.lightbox.rte-cta a'
        },
        tabtwolinkonehover:{
            selector:'.lightbox a:hover'
        },
        tabttwolinktwo:{
            selector:'.fc-purple a'
        },
        tabthreebuttondesktop:{
            selector:'.cta.cta--branded.cta--l.cta--mapp-l a.overlay-link'
        },
        tabthreebuttonfocus:{
            selector:'.cta.cta--branded.cta--l a:focus' //.cta.cta--branded.cta--l a:focus,
        },
        tabthreedesktop:{
            selector:'#tabHeader_3'
        },
        tabtwodesktop:{
            selector:'#tabHeader_2'
        },
        tabonedivheadingrte:{
            selector:'.APRBlockComp_Wrapper.APRBlockComp_vertical'
        },
        tabdivheadingrte:{
            selector:'.grid .grid__item.desk--one-third .APRBlockComp_Wrapper.APRBlockComp_horizontal'
        },
        tabthreelinks:{
            selector:'.grid__item.desk--one-half .APRBlockComp_Wrapper.APRBlockComp_horizontal .comp-rich-text  p a'
        },
        ctabuttons:{
            selector:'.cta.cta--branded.cta--l.cta--mapp-l a'
        },


        //new mobile selectors
         maintabMob:{
             selector:'.services-tab-wrapper.tab-comp-not-author-mode'
         },
         tabsdivMob:{
             selector:'#services-tabContainer #tabs'
         },
         activeheaderMob:{
             selector:'#tabs .tab-heading-wrapper.tab-active-header'
         },
         inactiveHeaderMob:{
             selector:'#tabs #tabHeader_2 .tab-heading-wrapper'
        },
        tabscontentMob:{
            selector:'.services-tab-wrapper.tab-comp-not-author-mode #tabscontent'
        },
        headingalltabsMob:{
            selector:'.text-image-wrapper.no-text-image-image h2'
        },
        paratextalltabsMob:{
            selector:'.text-image-wrapper.no-text-image-image .text-image-desc'
        },
        tabseperatorMob:{
            selector:'.tab-bottom-content .tab-separator'
        },
        subdivisionblocksMob:{
            selector:'.grid .grid__item.desk--one-half .APRBlockComp_Wrapper.APRBlockComp_vertical'
        },
        subdivblocksHeadingMob:{
            //use with rte remove .comp-r-t
            selector:'.APRBlockComp_Wrapper.APRBlockComp_vertical .comp-rich-text'
        },
        subdivtextMob:{
            //cant use rte as you took class
            selector:'.APRBlockComp_Wrapper.APRBlockComp_vertical .comp-rich-text p .fc-purple'
        },
        buttonsMob:{
            selector:'.APRBlockComp_Wrapper.APRBlockComp_horizontal .cta.cta--branded.cta--l.cta--mapp-l a'
        },
        buttonsMobFocus:{
            selector:'.cta.cta--l.cta--branded a:focus'
        },
        buttonsMobHover:{
            selector:'.cta--l a:hover'
        },
        linksofalltabsMob:{
            selector:'.APRBlockComp_Wrapper.APRBlockComp_horizontal p a'
        },
        functabs1:{
            selector:'.shelf.theme--light-blue.canvas-shelf:nth-of-type(1) #tabs .tabHeader'
        },
        functabs2:{
            selector:'.shelf.theme--light-blue.canvas-shelf:nth-of-type(2) #tabs .tabHeader'
        },
        functabs3:{
            selector:'.shelf.theme--light-blue.canvas-shelf:nth-of-type(3) #tabs .tabHeader'
        },
        parentfunc:{
            selector:'.shelf.theme--light-blue.canvas-shelf'
        }
    }
};