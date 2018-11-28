module.exports = {
	elements : {
		
		nonHomesliderWrap : {
			selector : '.carousel-slider-non-home-wraper.flexslider_wrap'
		},
		sliderWrap : {
			selector : '.flexslider_wrap .flexslider'
		},
		sliderImg : {
			selector : '.flex-active-slide .js-clickable-area .slider_image img'
		},
		sliderImgMargin : {
			selector : '.flex-active-slide .js-clickable-area .slider_image a'
		},
		flexSliderli : {
			selector : '.flex-active-slide .js-clickable-area:not(:nth-child(2n+3))'
		},
		flexSliderliLastChild : {
			selector : '.flex-active-slide .js-clickable-area:nth-child(2n+3)'
		},
		sliderRteH3 : {
			selector : '.flex-active-slide .js-clickable-area .comp-rich-text h3'
		},
		sliderRteH4 : {
			selector : '.flex-active-slide .js-clickable-area .comp-rich-text h4 a'
		},
		sliderRteP : {
			selector : '.flex-active-slide .js-clickable-area .comp-rich-text p'
		},
		sliderCta_m : {
			selector : '.flex-active-slide .js-clickable-area .cta.cta--branded.cta--m'
		},
		sliderCta_m_a : {
			selector : '.flex-active-slide .js-clickable-area .cta.cta--branded.cta--m a'
		},
		rteUlLi : {
			selector : '.slider_content .comp-rich-text ul li'
		},
		flexPrevArrow : {
			selector : '.flexslider .flex-direction-nav li .flex-prev'
		},
		flexNextArrow : {
			selector : '.flexslider .flex-direction-nav li .flex-next'
		},
		flexNav : {
			selector : '.flex-control-nav.flex-control-paging'
		},
		flexNavLi : {
			selector : '.flex-control-nav li:not(:last-child)'
		},
		flexNavLiAnchor : {
			selector : '.flex-control-nav.flex-control-paging li a:not(.flex-active)'
		},
		flexNavLiAnchorActive : {
			selector : '.flex-control-nav.flex-control-paging li a.flex-active'
		},
			  	  
		//Mobile props

		mobflexslider :{
			selector : '.carousel-slider-non-home-wraper .flexslider'
		},
		mobflexsliderWrap : {
			selector: '.carousel-slider-non-home-wraper.flexslider_wrap'
		},
		mobflexsliderNav :{
			selector : '.carousel-slider-non-home-wraper .flexslider .flex-control-nav'
		},
		mobflexsliderNavLi :{
			selector : '.carousel-slider-non-home-wraper .flexslider .flex-control-nav li:not(:last-child)'
		},
		mobflexsliderNavLiAActive :{
			selector : '.carousel-slider-non-home-wraper .flexslider .flex-control-nav.flex-control-paging li a.flex-active'
		},
		mobflexsliderNavLiA :{
			selector : '.carousel-slider-non-home-wraper .flexslider .flex-control-nav.flex-control-paging li a:not(.flex-active)'
		},
		mobSliderblockLi :{
			selector : '.carousel-slider-non-home-wraper li.slider_block > ul > li'
		},
		mobSliderblock :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_image'
		},
		mobSliderimageAfter :{
			selector : '.flexslider .slider_image:after'
		},
		mobSliderblockImg :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_image img'
		},

		mobSliderblockContent :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_content'
		},
		mobSliderblockContentH4 :{
			selector : '.flexslider .slider_content .comp-rich-text h4'
		},
		mobSliderblockContentH3 :{
			selector : '.flexslider .slider_content .comp-rich-text h3'
		},
		mobSliderblockContentH4A :{
			selector : '.comp-rich-text h4 a'
		},
		mobSlidercomprichText :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_content .comp-rich-text'
		},
		mobSlidercomprichTextLi :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_content .comp-rich-text ul li'
		},
		mobSliderblockContentP :{
			selector : '.carousel-slider-non-home-wraper .comp-rich-text p:not(:nth-child(2))'
		},
		mobSliderblockContentPsecond :{
			selector : '.carousel-slider-non-home-wraper .comp-rich-text p:nth-child(2)'
		},
		mobSliderblockContentCta :{
			selector : '.carousel-slider-non-home-wraper li.slider_block ul li .slider_content .cta--m'
		},
		mobSliderblockContentCtaA :{
			selector : '.slider_content .cta.cta--branded.cta--m a'
		},
		mobSliderblockContentCtaAfter :{
			selector : '.cta.cta--branded.cta--m a:after'
		},
		mobsliderContent :{
			selector : '.slider_content'
		},
		mobsliderContentNav :{
			selector : '.carousel-slider-non-home-wraper .flexslider .flex-control-nav li'
		},

		//Video Carousel
		  flexSlider: {
			  selector: ".flexslider_wrap.carousel-slider-non-home-wraper.carousel-rebrand .flexslider"
		  },
		  flexSliderNext: {
			selector: ".flex-next"
		},
		  video: {
			selector: ".slider_block.flex-active-slide .slider_image" 
		  },
		  videoPlay:{
			  selector: ".video__play"
		  },
		  videoPlayFocus:{
			  selector:".video__play:focus"
		  },
		  videoClose:{
			  selector: ".close"
		  },
		  videoTranscript: {
			  selector:".video__links .video__transcript"
		  },
		  videoHeading: {
			selector :".video__heading",
		  },	  

		
	}
};