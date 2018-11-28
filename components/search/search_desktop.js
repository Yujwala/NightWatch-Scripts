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
    '@tags': ['desktop', 'search', 'search-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();
            callback.openURL(client,pageurl.ULSTER_ROI_HEADER); 
            
    },
   "2 Check for Search Box Properties": function(client) {
            SearchWrapper = pageObj.elements.SearchWrapper.selector,
            SearchInput = pageObj.elements.SearchInput.selector,
            SearchBtnImg = pageObj.elements.SearchBtnImg.selector,
            SearchInter = pageObj.elements.SearchInter.selector,
            SearchInterWrapper = pageObj.elements.SearchInterWrapper.selector,
            SearchInterButton = pageObj.elements.SearchInterButton.selector,
            SearchBtn= pageObj.elements.SearchBtn.selector
            globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
           if(brand.props.$brandName=="natwest-intermediary"){

           //Search Wrapper Properties
            Properties = search_props.SearchInter('lg');  
            callback.singleElem(client,SearchInter, Properties, 'lg'); 

            client.expect.element(SearchInter).to.have.css('background').which.contains('search-icon.svg');


            //click on search icon
            client.click(SearchInter);

            //Search Input Properties
            Properties = search_props.SearchInterWrapper('lg');  
            callback.singleElem(client,SearchInterWrapper, Properties, 'lg');

            //Search button Properties
            Properties = search_props.SearchInterButton('lg');  
            callback.singleElem(client,SearchInterButton, Properties, 'lg');


            client.setValue(SearchInterWrapper, 'test');//set input value
            client.keys('\uE007');
           }
           else{
            //Search Wrapper Properties
            Properties = search_props.SearchWrapper('lg');  
            callback.singleElem(client,SearchWrapper, Properties, 'lg'); 

            //Search Input Properties
            Properties = search_props.SearchInput('lg');  
            callback.singleElem(client,SearchInput, Properties, 'lg'); 

            //Search button properties
            Properties = search_props.SearchBtn('lg');  
            callback.singleElem(client,SearchBtn, Properties, 'lg'); 

            //Search icon Properties
            Properties = search_props.SearchBtnImg('lg');  
            callback.singleElem(client,SearchBtnImg, Properties, 'lg'); 

            //search icon
            client.expect.element(SearchBtnImg).to.have.attribute('src').which.contains(brand.props.$SearchIcon);

            client.click(SearchInput);//to focus on search box
            client.pause(1000);
            client.expect.element(SearchBtn).to.have.css('display').which.equals('none');

            //Search focus Properties
            Properties = search_props.SearchBoxFocus('lg');  
            callback.singleElem(client,SearchInput, Properties, 'lg'); 

            client.setValue(SearchInput, 'rbs');//set input value
            client.keys('\uE007');
          }

        }       
    },

    'Ending the session': function(client){
      client.end();
    }
};