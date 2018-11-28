var pageurl = require('../../pageurls.js'),
    pageObj,merchant_tool_props,callback,size,brand;

function globalProps(client) {
    pageObj = client.page.merchant_tool_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    merchant_tool_props = require('./merchant_tool_props.js')(client);
}

module.exports = {
    '@tags': ['desktop', 'merchant-tool', 'merchant-tool-desktop'],
    " 1 Opening the Desktop URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.NW_PER_MERCHANTTOOL);
        console.log("--Desktop--" + pageurl.NW_PER_MERCHANTTOOL);
    },
    "2.Checking for header properties": function(client) {
        var headerbanner = pageObj.elements.headerbanner.selector,
            bannertitle = pageObj.elements.bannertitle.selector,
            bannerdes = pageObj.elements.bannerdes.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Header Properties
            properties = merchant_tool_props.headerbanner('lg');
            callback.multiloop(client, headerbanner, properties, 'lg');
            //Header Properties
            properties = merchant_tool_props.bannertitle('lg');
            callback.multiloop(client, bannertitle, properties, 'lg');
            //Header Properties
            properties = merchant_tool_props.bannerdes('lg');
            callback.multiloop(client, bannerdes, properties, 'lg');
        }
    },

    "3. Checking the properties of middle wrapper": function(client) {
        var midcontentwrap = pageObj.elements.midcontentwrap.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Header Properties
            properties = merchant_tool_props.midcontentwrap('lg');
            callback.multiloop(client, midcontentwrap, properties, 'lg');
        }


    },

    "4. Checking the properties of search section": function(client) {
        var searchsection = pageObj.elements.searchsection.selector,
            searchtitle = pageObj.elements.searchtitle.selector,
            searchdes = pageObj.elements.searchdes.selector,
            searchbox = pageObj.elements.searchbox.selector,
            searchicon = pageObj.elements.searchicon.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Search section
            properties = merchant_tool_props.searchsection('lg');
            callback.multiloop(client, searchsection, properties, 'lg');
            //Search Title
            properties = merchant_tool_props.searchtitle('lg');
            callback.multiloop(client, searchtitle, properties, 'lg');
            // Search description
            properties = merchant_tool_props.searchdes('lg');
            callback.multiloop(client, searchdes, properties, 'lg');
            // Search Box
            properties = merchant_tool_props.searchbox('lg');
            callback.multiloop(client, searchbox, properties, 'lg');
            // Search Icon
            properties = merchant_tool_props.searchicon('lg');
            callback.multiloop(client, searchicon, properties, 'lg');

        }

    },


    "5. Checking the properties of major suppliers section": function(client) {
        var majorsuppliers = pageObj.elements.majorsuppliers.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //Major Suppliers Properties
            properties = merchant_tool_props.majorsuppliers('lg');
            callback.multiloop(client, majorsuppliers, properties, 'lg');
        }


    },


    "6. Checking the for focus of major supplier UL ": function(client) {
        var supplierulfocus = pageObj.elements.supplierulfocus.selector,
            searchbox = pageObj.elements.searchbox.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {

            client.moveToElement(searchbox, 10, 10);
            client.mouseButtonDown(searchbox);
            client.pause(2000);
            client.moveToElement(supplierulfocus, 10, 10);
            client.pause(2000);
            properties = merchant_tool_props.supplierulfocus('lg');
            callback.multiloop(client, supplierulfocus, properties, 'lg');
        }


    },


    "7. Checking the properties of list items": function(client) {
        var listTitles = pageObj.elements.listTitles.selector,
            listItems = pageObj.elements.listItems.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //List items
            properties = merchant_tool_props.listTitles('lg');
            callback.multiloop(client, listTitles, properties, 'lg');
            properties = merchant_tool_props.listItems('lg');
            callback.multiloop(client, listItems, properties, 'lg');
        }


    },

    "8. Checking the properties of Conditions section": function(client) {
        var conditionsSec = pageObj.elements.conditionsSec.selector,
            firstrte = pageObj.elements.firstrte.selector,
            secondrte = pageObj.elements.secondrte.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //List items
            properties = merchant_tool_props.conditionsSec('lg');
            callback.multiloop(client, conditionsSec, properties, 'lg');
            properties = merchant_tool_props.firstrte('lg');
            callback.multiloop(client, firstrte, properties, 'lg');
            properties = merchant_tool_props.secondrte('lg');
            callback.multiloop(client, secondrte, properties, 'lg');
        }


    },



    "9. Checking the properties of message text": function(client) {

        var searchbox = pageObj.elements.searchbox.selector,
            messagetxt = pageObj.elements.messagetxt.selector;


        client.moveToElement(searchbox, 10, 10);
        client.click(searchbox);
        client.setValue(searchbox, "adfasdfsdf");
        client.pause(1000);
        client.click('#search-form-button');
        client.pause(2000);
        client.expect.element('.success-message').to.have.css('display').which.equals('none');
        client.expect.element('.error-message').to.have.css('display').which.equals('block');
        client.clearValue(searchbox);
        client.pause(5000);
        client.setValue(searchbox, brand.props.$suppliersemi);
        client.pause(5000);
        client.expect.element('.options-list').to.be.visible;
        client.pause(5000);
        client.clearValue(searchbox);
        client.setValue(searchbox, brand.props.$supplierdummy);
        client.pause(4000);
        client.expect.element('.no-match').to.be.visible;
        client.pause(2000);
        client.clearValue(searchbox);
        client.setValue(searchbox, brand.props.$merchant);
        client.pause(1000);
        client.click('#search-form-button');
        client.pause(2000);
        client.expect.element('.success-message').to.have.css('display').which.equals('block');
        client.expect.element('.error-message').to.have.css('display').which.equals('none');

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //message text
            properties = merchant_tool_props.messagetxt('lg');
            callback.multiloop(client, messagetxt, properties, 'lg');
        }


    },

    'Ending the session': function(client) {
        client.end();
    }
}