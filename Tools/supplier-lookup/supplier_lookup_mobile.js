var pageurl = require('../../pageurls.js'),
    pageObj,supplier_lookup_props,callback,size,brand;

function globalProps(client) {
    pageObj = client.page.supplier_lookup_selectors(),
    callback = client.page.common(),
    size = client.globals.size.widths;
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    supplier_lookup_props = require('./supplier_lookup_props.js')(client);
}

module.exports = {
    '@tags': ['mobile', 'supplier-lookup', 'supplier-lookup-mobile'],
    " 1 Opening the Mobile URL": function(client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBS_PER_SUPPLIERLOOKUP_MOB);
        console.log("--Mobile--" + pageurl.RBS_PER_SUPPLIERLOOKUP_MOB);
    },

    //Resize the window for mobile
    "2. Resize The Window": function(client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(500);
        client.refresh();
        client.pause(500);
    },



    "3.Checking for header properties": function(client) {
        var headerbanner = pageObj.elements.headerbanner.selector,
            bannertitle = pageObj.elements.bannertitle.selector,
            bannerdes = pageObj.elements.bannerdes.selector;



        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Header Properties
            properties = supplier_lookup_props.headerbanner('xs');
            callback.multiloop(client, headerbanner, properties, 'xs');
            //Header Properties
            properties = supplier_lookup_props.bannertitle('xs');
            callback.multiloop(client, bannertitle, properties, 'xs');
            //Header Properties
            properties = supplier_lookup_props.bannerdes('xs');
            callback.multiloop(client, bannerdes, properties, 'xs');
        }
    },

    "4. Checking the properties of middle wrapper": function(client) {
        var midcontentwrap = pageObj.elements.midcontentwrap.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Header Properties
            properties = supplier_lookup_props.midcontentwrap('xs');
            callback.multiloop(client, midcontentwrap, properties, 'xs');
        }


    },

    "5. Checking the properties of search section": function(client) {
        var searchsection = pageObj.elements.searchsection.selector,
            searchtitle = pageObj.elements.searchtitle.selector,
            searchdes = pageObj.elements.searchdes.selector,
            searchbox = pageObj.elements.searchbox.selector,
            searchicon = pageObj.elements.searchicon.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Search section
            properties = supplier_lookup_props.searchsection('xs');
            callback.multiloop(client, searchsection, properties, 'xs');
            //Search Title
            properties = supplier_lookup_props.searchtitle('xs');
            callback.multiloop(client, searchtitle, properties, 'xs');
            // Search description
            properties = supplier_lookup_props.searchdes('xs');
            callback.multiloop(client, searchdes, properties, 'xs');
            // Search Box
            properties = supplier_lookup_props.searchbox('xs');
            callback.multiloop(client, searchbox, properties, 'xs');
            // Search Icon
            properties = supplier_lookup_props.searchicon('xs');
            callback.multiloop(client, searchicon, properties, 'xs');
        }


    },


    "6. Checking the properties of major suppliers section": function(client) {
        var majorsuppliers = pageObj.elements.majorsuppliers.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //Major Suppliers Properties
            properties = supplier_lookup_props.majorsuppliers('xs');
            callback.multiloop(client, majorsuppliers, properties, 'xs');
        }


    },


    "7. Checking the for focus of major supplier UL ": function(client) {
        var supplierulfocus = pageObj.elements.supplierulfocus.selector,
            searchbox = pageObj.elements.searchbox.selector;

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {

            client.moveToElement(searchbox, 10, 10);
            client.mouseButtonDown(searchbox);
            client.pause(2000);
            client.moveToElement(supplierulfocus, 10, 10);
            client.pause(2000);
            properties = supplier_lookup_props.supplierulfocus('xs');
            callback.multiloop(client, supplierulfocus, properties, 'xs');
        }


    },


    "8. Checking the properties of list items": function(client) {
        var listTitles = pageObj.elements.listTitles.selector,
            listItems = pageObj.elements.listItems.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //List items
            properties = supplier_lookup_props.listTitles('xs');
            callback.multiloop(client, listTitles, properties, 'xs');
            properties = supplier_lookup_props.listItems('xs');
            callback.multiloop(client, listItems, properties, 'xs');
        }


    },

    "9. Checking the properties of Conditions section": function(client) {
        var conditionsSec = pageObj.elements.conditionsSec.selector,
            firstrte = pageObj.elements.firstrte.selector,
            secondrte = pageObj.elements.secondrte.selector;


        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isXSDevice) {
            //List items
            properties = supplier_lookup_props.conditionsSec('xs');
            callback.multiloop(client, conditionsSec, properties, 'xs');
            properties = supplier_lookup_props.firstrte('xs');
            callback.multiloop(client, firstrte, properties, 'xs');
            properties = supplier_lookup_props.secondrte('xs');
            callback.multiloop(client, secondrte, properties, 'xs');
        }
    },
    "10. Checking the properties of message text": function(client) {
        var searchbox = pageObj.elements.searchbox.selector,
            messagetxt = pageObj.elements.messagetxt.selector;

        client.moveToElement(searchbox, 10, 10);
        client.click(searchbox);
        client.setValue(searchbox, brand.props.$supplier);
        client.pause(1000);
        client.click('#search-form-button');
        client.pause(2000);
        client.expect.element('.success-message').to.have.css('display').which.equals('block');
        client.expect.element('.error-message').to.have.css('display').which.equals('none');
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
        client.setValue(searchbox, "ygqwhsq");
        client.pause(1000);
        client.click('#search-form-button');
        client.pause(2000);
        client.expect.element('.success-message').to.have.css('display').which.equals('none');
        client.expect.element('.error-message').to.have.css('display').which.equals('block');

        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            //message text
            properties = supplier_lookup_props.messagetxt('lg');
            callback.multiloop(client, messagetxt, properties, 'lg');
        }
    },

    'Ending the session': function(client) {
        client.end();
    }
}