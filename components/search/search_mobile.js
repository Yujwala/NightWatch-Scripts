var search_props = require('./search_props.js'),
    pageurl = require('../../pageurls.js'),
    pageObj,brand,callback,size;

function globalProps(client){
    pageObj = client.page.search_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths; 
	callback.getBrand(client);
	search_props = require('./search_props.js')(client);
	var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
}

module.exports = {
    '@tags': ['mobile', 'search', 'search-mobile'],
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

    //Check for search bar properties
    "3. Check for search bar properties": function(client) {
          var  searchBar = pageObj.elements.searchBar.selector,
               searchText = pageObj.elements.searchText.selector,
               searchIcon = pageObj.elements.searchIcon.selector,
               searchIconWrap= pageObj.elements.searchIconWrap.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){

            client.click('.header--mobile .header__links .menu-trigger a.link--menu');
            client.pause(1000);

            properties = search_props.searchBarProps('xs');  
            callback.multiloop(client,searchBar, properties, 'xs');

            properties = search_props.searchTextProps('xs');  
            callback.multiloop(client,searchText, properties, 'xs');

            properties = search_props.searchIconProps('xs');  
            callback.multiloop(client,searchIcon, properties, 'xs');
            client.expect.element('.header--mobile .header__nav .search-form .submit-wrap .submit').to.have.css('background-image').which.contains(brand.props.$search_Image);

            properties = search_props.searchIconWrap('xs');  
            callback.multiloop(client,searchIconWrap, properties, 'xs');
        }
    },

    //Check for search functionality and properties on focus
    "4. Check for search functionality": function(client) {
          var  searchText = pageObj.elements.searchText.selector;
               
          if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice){
            client.click(searchText);
            client.setValue(searchText, 'test');
            client.pause(1000);
            properties = search_props.searchInputFocus('xs');  
            callback.singleElem(client,searchText, properties, 'xs');
            client.click('.header--mobile .header__nav .search-form .submit-wrap .submit')

        }
    },

   'Ending the session': function(client){
      client.end();
    }
};