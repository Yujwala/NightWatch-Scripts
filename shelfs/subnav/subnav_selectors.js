module.exports = {
    elements : {  
      //Desktop Selectors
      subnavShelf:{
        selector:"section.shelf--first.subnav-items"
      },
      subnavShelfInner:{
        selector:".subnav-items .shelf__inner.shelf--padded"
      },
      themeWhiteShelf:{
        selector:"section.subnav-items.theme--white"
      },
      themeLightBlueShelf:{
        selector:"section.subnav-items.theme--light-blue"
      },
      themeBlueShelf:{
        selector:"section.subnav-items.theme--blue"
      },
      headerGroup:{
        selector:".subnav-items .header-group"
      },
      subnavSignPost:{
        selector:".shelf.subnav-items .header-group .header-group__sign-post"
      },
      subnavHeadline:{
        selector:".subnav-items .header-group .header-group__headline"
      },
      subnavGrid:{
        selector:".shelf.subnav-items .sub-nav"
      },
      subnavGridItemCount:{
        selector:".shelf.subnav-items .sub-nav>div"
      },
      subnavGridonHover:{
        selector:".subnav-items .sub-nav .desk--one-half:hover"
      },
      newHover:{
        selector:'.subnav-items .desk--one-half .sub-nav-item:hover'
      },
      newFocus:{
        selector:'.subnav-items a.sub-nav-item:focus'
      },    
      subnavChevron:{
        selector:".subnav-items .sub-nav-item .sub-nav-item__head .sub-nav-item__sell-arrow"
      },      
      subnavHeadingsell:{
       selector:".subnav--headingAndSell"
      },
      subnavItemSell:{
        selector:".subnav-items .sub-nav-item .sub-nav-item__sell"
      },
      subnavDescription:{
        selector:".sub-nav-item--desc"
      },
      subnavRTE:{
        selector:".shelf.subnav-items .comp-rich-text p"
      },
      subnavRTEStrong:{
         selector:".shelf.subnav-items .comp-rich-text strong"
      },
      subnavRTELink:{
        selector:".shelf.subnav-items .comp-rich-text p a"
      },
      wrapper:{
        selector:".wrapper"
      },
      subnav2FirstChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-half:first-child"
      },
      subnav2FirstChildAnchor:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-half:first-child>a"
      },
      subnav2LastChild:{
        selector:".subnav-items.Default .palm--one-half.desk--one-half:last-child"
      },
      subnav2LastChildAnchor:{
        selector:".subnav-items.Default .palm--one-half.desk--one-half:last-child>a"
      },
      subnav2InsideHeadingText:{
        selector:".subnav-items.Default .desk--one-half .sub-nav-item__head__inner"
      },
      subnav2Chevron:{
        selector:".subnav-items.Default .desk--one-half .sub-nav-item__sell-arrow.cta-chevron"
      },
      subnav2Padlock:{
        selector:".subnav-items.Default .desk--one-half .sub-nav-item__sell-arrow.cta-padlock"
      },
      subnav3FirstChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-third:nth-child(1)"
      },
      subnav3FirstChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .subnav--headingOnly .grid__item.palm--one-half.desk--one-third:nth-child(1)>a"
      },
      subnav3SecondChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-third:nth-child(2)"
      },
      subnav3SecondChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-third:nth-child(2)>a"
      },
      subnav3LastChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-third:nth-child(3)"
      },
      subnav3LastChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-third:nth-child(3)>a"
      },
      subnav3InsideHeadingText:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-third .sub-nav-item__head__inner"
      },
      subnav3Chevron:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-third .sub-nav-item__sell-arrow.cta-chevron"
      },
      subnav3Padlock:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-third .sub-nav-item__sell-arrow.cta-padlock"
      },
      subnav4FirstChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-quarter:nth-child(1)"
      },
      subnav4FirstChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(1)>a"
      },
      subnav4SecondChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-quarter:nth-child(2)"
      },
      subnav4SecondChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(2)>a"
      },
      subnav4ThirdChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-quarter:nth-child(3)"
      },
      subnav4ThirdChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(3)>a"
      },
      subnav4LastChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-quarter:nth-child(4)"
      },
      subnav4LastChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(4)>a"
      },
      subnav4InsideHeadingText:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-quarter .sub-nav-item__head__inner"
      },
      subnav4Chevron:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-quarter .sub-nav-item__sell-arrow.cta-chevron"
      },
      subnav4Padlock:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-quarter .sub-nav-item__sell-arrow.cta-padlock"
      },
      rewardsubnav4FirstChild:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(1)"
      },
      rewardsubnav4FirstChildAnchor:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(1)>a"
      },
      rewardsubnav4SecondChild:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(2)"
      },
      rewardsubnav4SecondChildAnchor:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(2)>a"
      },
      rewardsubnav4ThirdChild:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(3)"
      },
      rewardsubnav4ThirdChildAnchor:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(3)>a"
      },
      rewardsubnav4LastChild:{
        selector:".subnav-items.rewards .subnav--headingOnly .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(4)"
      },
      rewardsubnav4LastChildAnchor:{
        selector:".subnav-items.rewards .subnav--headingOnly .grid__item.palm--one-half.desk--one-quarter:nth-child(4)>a"
      },
      rewardsubnav4InsideHeadingText:{
        selector:".subnav-items.rewards .subnav--headingOnly .desk--one-quarter .sub-nav-item__head__inner"
      },
      rewardsubnav4Chevron:{
        selector:".subnav-items.rewards .subnav--headingOnly .desk--one-quarter .sub-nav-item__sell-arrow.cta-chevron"
      },
      rewardsubnav4Padlock:{
        selector:".subnav-items.rewards .subnav--headingOnly .desk--one-quarter .sub-nav-item__sell-arrow.cta-padlock"
      },
      subnav5FirstChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-fifth:nth-child(1)"
      },
      subnav5FirstChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-fifth:nth-child(1)>a"
      },
      subnav5SecondChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-fifth:nth-child(2)"
      },
      subnav5SecondChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-fifth:nth-child(2)>a"
      },
      subnav5ThirdChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-fifth:nth-child(3)"
      },
      subnav5ThirdChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-fifth:nth-child(3)>a"
      },
      subnav5FourthChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-fifth:nth-child(4)"
      },
      subnav5FourthChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-fifth:nth-child(4)>a"
      },
      subnav5LastChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-fifth:nth-child(5)"
      },
      subnav5LastChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-fifth:nth-child(5)>a"
      },
      subnav5InsideHeadingText:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-fifth .sub-nav-item__head__inner"
      },
      subnav5Chevron:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-fifth .sub-nav-item__sell-arrow.cta-chevron"
      },
      subnav5Padlock:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-fifth .sub-nav-item__sell-arrow.cta-padlock"
      },
      subnav6FirstChild:{
        selector:".subnav-items.Default .grid__item.palm--one-half.desk--one-sixth:nth-child(1)"
      },
      subnav6FirstChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(1)>a"
      },
      subnav6SecondChild:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(2)"
      },
      subnav6SecondChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(2)>a"
      },
      subnav6ThirdChild:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(3)"
      },
      subnav6ThirdChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(3)>a"
      },
      subnav6FourthChild:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(4)"
      },
      subnav6FourthChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(4)>a"
      },
      subnav6FifthChild:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(5)"
      },
      subnav6FifthChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(5)>a"
      },
      subnav6LastChild:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(6)"
      },
      subnav6LastChildAnchor:{
        selector:".subnav-items.Default .subnav--headingOnly .grid__item.palm--one-half.desk--one-sixth:nth-child(6)>a"
      },
      subnav6InsideHeadingText:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-sixth .sub-nav-item__head__inner"
      },
      subnav6Chevron:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-sixth .sub-nav-item__sell-arrow.cta-chevron"
      },
      subnav6Padlock:{
        selector:".subnav-items.Default .subnav--headingOnly .desk--one-sixth .sub-nav-item__sell-arrow.cta-padlock"
      },
      subnavhover:{
        selector:".grid__item.palm--one-half.desk--one-half"
      },
      subnav3hover:{
        selector:".grid__item.palm--one-half.desk--one-third"
      },
      subnav3GridonHover:{
        selector:".subnav-items .sub-nav .desk--one-third:hover"
      },
      newHover3:{
        selector:'.subnav-items .desk--one-third .sub-nav-item:hover'
      },
      subnav4hover:{
        selector:".grid__item.palm--one-half.desk--one-quarter"
      },
      subnav4GridonHover:{
        selector:".subnav-items .sub-nav .desk--one-quarter:hover"
      },
      newHover4:{
        selector:'.subnav-items .desk--one-quarter .sub-nav-item:hover'
      },
      subnav5hover:{
        selector:".grid__item.palm--one-half.desk--one-fifth"
      },
      subnav5GridonHover:{
        selector:".subnav-items .sub-nav .desk--one-fifth:hover"
      },
      newHover5:{
        selector:'.subnav-items .desk--one-fifth .sub-nav-item:hover'
      },
      subnav6hover:{
        selector:".grid__item.palm--one-half.desk--one-sixth"
      },
      subnav6GridonHover:{
        selector:".subnav-items .sub-nav .desk--one-sixth:hover"
      },
      newHover6:{
        selector:'.subnav-items .desk--one-sixth .sub-nav-item:hover'
      },
    }
  };
  
  
  