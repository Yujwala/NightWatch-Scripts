var pageurl = require('../../pageurls.js'),
    pageObj,header_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.header_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;   
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    header_props = require('./header_props.js')(client);
}

module.exports = {
    '@tags': ['mobile', 'header', 'header-mobile'],
    //Opening the mobile URL
    "1. Opening the Mobile URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.RBS_BUS_HEADER_MOB);
   },

   //Resize the window for mobile
    "2. Resize The Window":function(client){
      var  size = client.globals.size.widths;
           client.resizeWindow(size['xs'].width, size['xs'].height);
           client.pause(5000);
           client.refresh();
          // client.keys('\ue035');
           client.pause(5000);
    },

     //Check header main properties
    "3. Check for Header main view properties": function(client) {
          var  headerBackground = pageObj.elements.headerBackground.selector,
               headerNavIcon = pageObj.elements.headerNavIcon.selector,
               headerLogo = pageObj.elements.headerLogo.selector,
               headerSignIn = pageObj.elements.headerSignIn.selector;

          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.headerBackgroundProps('xs');  
            callback.multiloop(client,headerBackground, properties, 'xs');

            properties = header_props.headerNavIconProps('xs');  
            callback.multiloop(client,headerNavIcon, properties, 'xs');

            properties = header_props.headerLogoProps('xs');  
            callback.multiloop(client,headerLogo, properties, 'xs');
            //Natwest Business
            if(brand.props.$brandName=="natwest-business"){
            client.expect.element(headerLogo).to.have.attribute('src').which.contains('mlogo.png');                     
            }
            //Natwest personal
            if(brand.props.$brandName=="natwest-personal"){
            client.expect.element(headerLogo).to.have.attribute('src').which.contains('mlogo.png');                     
            }
            //Natwest private
            if(brand.props.$brandName=="natwest-private"){
            client.expect.element(headerLogo).to.have.attribute('src').which.contains('mlogo.png');                     
            }

            properties = header_props.headerSignInProps('xs');  
            callback.multiloop(client,headerSignIn, properties, 'xs');
        }
    },

    //Click on main navigation icon
    "4. Click on main nav icon": function(client) {
         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
          
           client.click('.header--mobile .header__links .menu-trigger a.link--menu');
           client.pause(1000);
           client.assert.cssClassPresent("header", "active");
         
        }
    },

    //Check for main navigation props after clicking icon
    "5. Check for main nav properties after click": function(client) {
          var  headerNavClick = pageObj.elements.headerNavClick.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.headerNavClickProps('xs');  
            callback.multiloop(client,headerNavClick, properties, 'xs');

        }
    },

    //Check for L1 properties
    "6. Check for L1 properties": function(client) {
          var  l1Padding = pageObj.elements.l1Padding.selector;
               l1Heading = pageObj.elements.l1Heading.selector,
               l1MNav = pageObj.elements.l1MNav.selector,
               l1MNavList = pageObj.elements.l1MNavList.selector,
               l1MNavAnchor = pageObj.elements.l1MNavAnchor.selector,
               l1MNavAnchorActive = pageObj.elements.l1MNavAnchorActive.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l1PaddingProps('xs');  
            callback.multiloop(client,l1Padding, properties, 'xs');

            properties = header_props.l1HeadingProps('xs');  
            callback.multiloop(client,l1Heading, properties, 'xs');

            properties = header_props.l1MNavProps('xs');  
            callback.multiloop(client,l1MNav, properties, 'xs');

            properties = header_props.l1MNavListProps('xs');  
            callback.multiloop(client,l1MNavList, properties, 'xs');

            properties = header_props.l1MNavAnchorProps('xs');  
            callback.multiloop(client,l1MNavAnchor, properties, 'xs');

            properties = header_props.l1MNavAnchorActiveProps('xs');  
            callback.multiloop(client,l1MNavAnchorActive, properties, 'xs');

        }
    },

    //Check for L2 properties
    "7. Check for L2 properties": function(client) {
          var  l2Padding = pageObj.elements.l2Padding.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l2PaddingProps('xs');  
            callback.multiloop(client,l2Padding, properties, 'xs');

            properties = header_props.l2IconProps('xs');  
            callback.pseudoSingleElem(client,l2Padding,':before',properties);

        }
    },

    //Check for link back (one that appears for a clicked item)
    "8. Check for link back properties": function(client) {
               
          var  l2LinkBack = pageObj.elements.l2LinkBack.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l2LinkBackProps('xs');  
            callback.multiloop(client,l2LinkBack, properties, 'xs');

            properties = header_props.l2IconProps('xs');  
            callback.pseudoSingleElem(client,'.header--mobile .header__snav .header__snav__second-level li a.link--back span',':before',properties);

        }
    },

    //Check for section heading properties in L3 and L4
    "9. Check for section heading properties": function(client) {
          var  l3SectionHead = pageObj.elements.l3SectionHead.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l3SectionHeadProps('xs');  
            callback.multiloop(client,l3SectionHead, properties, 'xs');

        }
    },

    //Check for links props of L3 along with icon
    "10. Check for links properties in L3": function(client) {
          var  l3Links = pageObj.elements.l3Links.selector,
          l3LinksIcon = pageObj.elements.l3LinksIcon.selector,
          l3Links_nwb = pageObj.elements.l3Links_nwb.selector,
          l3LinksIcon_nwb = pageObj.elements.l3LinksIcon_nwb.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            if(brand.props.$brandName == "natwest-business" || brand.props.$brandName == "rbs-bussiness") {
              properties = header_props.l3LinksProps('xs');  
              callback.multiloop(client,l3Links_nwb, properties, 'xs');

              properties = header_props.l3LinksIconProps('xs');  
              callback.multiloop(client,l3LinksIcon_nwb, properties, 'xs');
            }
            else{
            properties = header_props.l3LinksProps('xs');  
            callback.multiloop(client,l3Links, properties, 'xs');

            properties = header_props.l3LinksIconProps('xs');  
            callback.multiloop(client,l3LinksIcon, properties, 'xs');
          }
        }
    },

    //Check for lead links of L4 along with icon
    "11. Check for lead links properties in L4": function(client) {
          var  l4LeadLinks = pageObj.elements.l4LeadLinks.selector,
          l4LeadLinksIcon = pageObj.elements.l4LeadLinksIcon.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l4LeadLinksProps('xs');  
            callback.multiloop(client,l4LeadLinks, properties, 'xs');

            properties = header_props.l4LeadLinksIconProps('xs');  
            callback.multiloop(client,l4LeadLinksIcon, properties, 'xs');

        }
    },

    //Check for links props of L4
    "12. Check for links properties in L4": function(client) {
          var  l4Links = pageObj.elements.l4Links.selector,
          l4LinksIcon = pageObj.elements.l4LinksIcon.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            properties = header_props.l4LinksProps('xs');  
            callback.multiloop(client,l4Links, properties, 'xs');

            properties = header_props.l4LinksIconProps('xs');  
            callback.multiloop(client,l4LinksIcon, properties, 'xs');

        }
    },

    //Click on each L2 and navigate all L3 inside it
    "13. Click on each L2 and navigate all L3 under each L2": function(client) {
               
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            if(brand.props.$brandName != "natwest-markets" && brand.props.$brandName != "lombard"){
            client
            .elements('css selector','.header--mobile .header__snav>li>a',function(result){
                result.value.forEach(function(element,index){

                //Check if anchor tags have href attribute
                client.expect.element('.header--mobile .header__snav>li a').to.have.attribute('href');

                //Click on each L2 heading
                client.elementIdClick(element.ELEMENT);
                client.pause(1000);
                    if(index==0){
                    client.assert.cssClassPresent("ul.header__snav__second-level", "active");
                    }
            if(brand.props.$brandName == "natwest-personal" || brand.props.$brandName == "rbs-personal" || brand.props.$brandName == "ulster") {
             client
                .elements('css selector','.header--mobile .header__snav .header__snav__second-level.active ul li:not(.hidden-nav-item) a:not(.link--back ):not(.link--lead):not(:last-child)',function(result){
                    result.value.forEach(function(element,index){

                    //Click on each L3 inside the L2
                    client.elementIdClick(element.ELEMENT);
                    client.pause(1000);
                        if(index==0){
                        client.assert.cssClassPresent(".header__snav__second-level.active ul.header__snav__third-level", "active");
                        }

                    //To close each active L3 to open the next L3
                    client.click('.header--mobile .header__snav .header__snav__second-level.active .header__snav__third-level.active li a.link--back');
                    client.pause(1000);
                    })
                })
              }
                //To close each active L2 to open the next L2
                client.click('.header__snav__second-level.active>li:first-child>a'); 
                })
            })  
        }
        if(brand.props.$brandName == "lombard"){
            client
            .elements('css selector','.header--mobile .header__snav>li>a',function(result){
                result.value.forEach(function(element,index){

                //Check if anchor tags have href attribute
                client.expect.element('.header--mobile .header__snav>li a').to.have.attribute('href');

                //Click on each L2 heading
                client.elementIdClick(element.ELEMENT);
                client.pause(1000);
                    if(index==0){
                    client.assert.cssClassPresent("ul.header__snav__second-level", "active");
                    }

            client.elements('css selector','.header--mobile .header__snav .header__snav__second-level.active>li>ul>li:not(.hidden-nav-item)',results=>{
               if(results.value.length>0) {
                 client
                .elements('css selector','.header--mobile .header__snav .header__snav__second-level.active ul li:not(.hidden-nav-item) a:not(.link--back ):not(.link--lead):not(:last-child)',function(result){
                    result.value.forEach(function(element,index){

                    //Click on each L3 inside the L2
                    client.elementIdClick(element.ELEMENT);
                    client.pause(1000);
                        if(index==0){
                        client.assert.cssClassPresent(".header__snav__second-level.active ul.header__snav__third-level", "active");
                        }

                    //To close each active L3 to open the next L3
                    client.click('.header--mobile .header__snav .header__snav__second-level.active .header__snav__third-level.active li a.link--back');
                    client.pause(1000);
                    })
                })
              }
            });
                //To close each active L2 to open the next L2
                client.click('.header__snav__second-level.active>li:first-child>a'); 
                })
            })  
        }
      }
    },

   

    //Closing the browser
    'Closing Browser': function(client){
      client.end();
    }
};