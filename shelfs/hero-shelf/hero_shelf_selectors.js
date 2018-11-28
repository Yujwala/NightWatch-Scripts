module.exports = {
	elements : {


		 //*********************** **************************************/
    //              NW_PER_HERO_SHELF1 and NW_PER_HERO_SHELF5  HERO SHELF    //
    //*********************************************************** */

		HeroShelf : {
			selector : '.shelf--hero:not(.homelog_compliance)'
		},

		InnerShelf:{
			selector:".shelf--hero>.shelf__inner"
		},

		shelfHeader:{
		selector:".shelf--hero .hero__copy .hero__heading"
		},

		signPost:{

			selector:".shelf--hero .hero__copy .hero__signpost"
		},

		ButtonCTA:{
		selector:".shelf--hero:not(.homelog_compliance) .cta.cta--branded.cta--l a"
	},
	

	linkCTA:{
		selector:".shelf--hero .hero__copy .cta.cta--branded.cta--m a"
	},

	footlineText:{
		selector:".shelf--hero .hero__footline"
	},
	
	shelfListItems:{
		selector:".breadcrumb .breadcrumb__list li a span"
	},
	shelfListItem:{
		selector:".breadcrumb .breadcrumb__list .last a span"
	},


 //*********************** **************************************/
    //              NW_PER_HERO_SHELF12   Homelog Template   //
    //*********************************************************** */

	HeroShelf12:{
		selector:".shelf--hero.homelog_compliance:not(.shelf--mask)"
	},


	ButtonCTA12:{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .cta.cta--branded.cta--l a"
	},
	
	HeroShelf12HeaderTilte:{
		selector:".homelog_comppcontent .homelog_templates .homelog_headertitle .textcomp p"
	},


	HeroShelf12Logmessage:{
		selector:".homelog_comppcontent .homelog_templates .fullreptext .logmsg .textcomp p"
	},
	

	HeroShelf12WhiteBox:{
		selector:".homelog_comppcontent .homelog_templates .fullreptext .whitebox"
	},

	HeroShelf12WhiteBoxTitle:{
	selector:".homelog_comppcontent .homelog_templates .fullreptext .whitebox .whitebox_title .textcomp p"
	},

	HeroShelf12WhiteBoxContent:{
		selector:".homelog_comppcontent .homelog_templates .fullreptext .whitebox .whitebox_content .textcomp p"
	},

	HeroShelf12BottomText:{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .fullreptext .whitebox .whitebox_content_bottomtext .textcomp p"
	},

	HeroShelf12CTA:{
	selector:".homelog_comppcontent .homelog_templates .cta.cta--branded.cta--l a"
	},


	//*********************** *************************************************/
    //              NW_PER_HERO_SHELF8 and NW_PER_HERO_SHELF9 (SHELF MASK)     //
    //************************************************************************/
	HeroShelf8:{
		selector:".shelf--mask.shelf--hero"
	},

	HeroShelf8Text:{
		selector:".shelf--mask.shelf--hero .hero__copy"
	},
	HeroShelf8Header:{
		selector:".shelf--mask.shelf--hero .hero__copy .hero__heading"
	},

	HeroShelf8Signpost:{
		selector:".shelf--mask.shelf--hero .hero__copy .hero__signpost"
	},

	HeroShelf8Button:{
		selector:".shelf--mask.shelf--hero .hero__copy .cta.cta--branded.cta--l a"
	},

	HeroShelfLink:{
		selector:".shelf--mask.shelf--hero .hero__copy .cta.cta--branded.cta--m a"
	},

	HeroShelf8FooterText:{
		selector:".shelf--mask.shelf--hero .hero__footline"
	},

	  //*********************** *************************************************/
    //              NW_PER_HERO_SHELF3  REBRAND HERO SHELF    //
    //************************************************************************/

	 RebrandHS:{

		selector:".nw_rebrand_hero_shelf"
	 },

	 RebrandInnerShelf:{

		selector:".nw_rebrand_hero_shelf .hero_shelf_inner"
	 },

	 RebrandHSTitle:{
		 selector:".nw_rebrand_hero_shelf .hero_shelf_inner .hero_shelf_content .hero_title"
	 },

	 RebrandHSContent:{
		 selector:".nw_rebrand_hero_shelf .hero_shelf_inner .hero_shelf_content"

	 },

	 RebrandHSButton:{
		 selector:".nw_rebrand_hero_shelf .hero_shelf_inner .hero_shelf_content .cta.cta--branded.cta--l a"
	 },

	 RebrandHSlink:{
		 selector:".nw_rebrand_hero_shelf .hero_shelf_inner .hero_shelf_content .cta.cta--m a"
	 },
	
	 RebrandHSLegalcopy:{

		selector:".nw_rebrand_hero_shelf .hero_shelf_inner .hero_shelf_content .nw-rebrand-legalCopy"
	 },




	//*********************** *************************************************/
    //              NW_PER_HERO_SHELF4 , NW_PER_HERO_SHELF6 ,NW_PER_HERO_SHELF7 REBRAND MAIN SHELF     //
    //************************************************************************/

	 RebrandHS4:{

		selector:".nw_rebrand_hero_shelf_main"
	 },

     RebrandHS4InnerShelf:{

		selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner"
	 },

	 RebrandHS4Title:{
		 selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content .hero_title"
	 },

	 RebrandHS4Content:{
		 selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content"

	 },

	 RebrandHS4Button:{
		 selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content .cta.cta--branded.cta--l a"
	 },

	 RebrandHS4link:{
		 selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content .cta.cta--m a"
	 },
	
	 RebrandHS4Legalcopy:{

		selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content .nw-rebrand-legalCopy"
	 },

	 RebrandHS4listitems:{

      selector:".nw_rebrand_hero_shelf_main .hero_shelf_inner .hero_shelf_content .breadcrumb .breadcrumb__list li a span"
	 },



	//*********************** *************************************************/
    //              NW_PER_HERO_SHELF2 									      //
    //************************************************************************/




	HERO_SHELF2 : {
		selector : '.shelf--hero-no-mask'
	},

	HERO_SHELF2_Innershelf:{
		selector:".shelf--hero-no-mask .shelf__inner"
	},

	HERO_SHELF2_shelfHeader:{
	selector:".shelf--hero-no-mask .shelf__inner .hero__copy .hero__heading"
	},

	HERO_SHELF2_signPost:{

		selector:".shelf--hero-no-mask .shelf__inner .hero__copy .hero__signpost"
	},

	HERO_SHELF2_ButtonCTA:{
	selector:".shelf--hero-no-mask .shelf__inner .hero__copy .cta.cta--branded.cta--l a"
},


HERO_SHELF2_linkCTA:{
	selector:".shelf--hero-no-mask .shelf__inner .hero__copy .cta.cta--branded.cta--m a"
},



	//*********************** *************************************************/
    //              NW_PER_HERO_SHELF10								      //
    //************************************************************************/


	HERO_SHELF10:{
		selector:".shelf--hero.homelog_compliance"
	},

	HERO_SHELF10_LOGMSG:{
		selector:".homelog_templates .riskwarning .logmsg .textcomp p"
	},

	HERO_SHELF10_HEADERTITLE:{
	selector:".shelf--hero.homelog_compliance .homelog_headertitle .textcomp p"

	},
	HERO_SHELF10_BODY:{
	selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .riskwarning .homelog_body .comp-rich-text p"
	},

	HERO_SHELF10_BOX:{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .riskwarning .box"
	},
	HERO_SHELF10_BOXTEXT:{
	selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .riskwarning .box .textcomp p"

	},

	HERO_SHELF10_BOTTOMTITLE :{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .riskwarning .riskbottomblock .riskbottom_title .textcomp p"
	},
	HERO_SHELF10_BOTTOMTEXT :{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .riskbottomblock .riskbottom_text .textcomp p"
	},

	//************************************************************************/
    //              NW_PER_HERO_SHELF11							      //
    //************************************************************************/


	HERO_SHELF11:{
		selector:".shelf--hero.homelog_compliance"
	},

	HERO_SHELF11_LOGMSG:{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .logmsg .textcomp p"
	},

	HERO_SHELF11_HEADERTITLE:{
	selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .legaltext .homelog_headertitle .textcomp p"

	},
	HERO_SHELF11_BOTTOMBLOCK:{
	selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .legaltext .riskbottomblock .riskbottom_title .textcomp span"
	},


	HERO_SHELF11_RISKBOTTOMTEXT:{
	selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .legaltext .riskbottomblock .riskbottom_text .textcomp p"

	},

	HERO_SHELF11_CTA:{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .cta.cta--branded.cta--l a"
	},

	HERO_SHELF11_BOTTOMTITLE :{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .legaltext .riskbottomblock_last .riskbottom_title .textcomp p"
	},
	HERO_SHELF11_BOTTOMTEXT :{
		selector:".shelf--hero.homelog_compliance .homelog_comppcontent .homelog_templates .legaltext .riskbottomblock_last .riskbottom_text .textcomp p"
	}



}

}