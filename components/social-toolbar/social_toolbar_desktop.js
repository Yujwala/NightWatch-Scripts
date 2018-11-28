var social_toolbar_props = require('./social_toolbar_props.js'),
    pageurl = require('../../pageurls.js'),
    branding = require('../../branding/getBrand.js'),
    brand = require('../../branding/' + branding.getBrand.get());

function globalProps(client) {
    pageObj = client.page.social_toolbar_selectors(),
        callback = client.page.common(),
        size = client.globals.size.widths;
}

module.exports = {
    '@tags': ['Social Toolbar'],
    //Opening the URL
    "Opening the Desktop URL": function (client) {

        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,client,pageurl.ULSTER_IE_SOCIAL_TOOLBAR);
        console.log("--Desktop--" + pageurl.ULSTER_IE_SOCIAL_TOOLBAR);
        client.pause(2000);

    },





    "1 Check for socialtoolbar present properties": function (client) {
        socialbarmaindivstarts = pageObj.elements.socialbarmaindiv.selector,
            socialbardivonlyshelf = pageObj.elements.socialbaronlyshelf.selector,
            socialbardivrebonlyshelf = pageObj.elements.socialbarrebrandshelf.selector,
            newrebsocialbardivshelf = pageObj.elements.socialbarnewrebrandshelf.selector,
            socialbardivul = pageObj.elements.socialbarul.selector,
            socialbardivli = pageObj.elements.socialbarli.selector,
            socialbardivlink = pageObj.elements.socialbarlink.selector,
            socialbardivspan = pageObj.elements.socialbarspan.selector,
            socialbarfacebookbefore = pageObj.elements.socialbarfacebook.selector,
            socialbartwitterbefore = pageObj.elements.socialbartwitter.selector,
            socialbaremailbefore = pageObj.elements.socialbaremail.selector,
            socialbarprintbefore = pageObj.elements.socialbarprint.selector,
            nwrebsocialbarfacebookspan = pageObj.elements.socialbarfacebook.selector,
            nwrebsocialbartwitterspan = pageObj.elements.socialbartwitter.selector,
            nwrebsocialbaremailspan = pageObj.elements.socialbaremail.selector,
            nwrebsocialbarprintspan = pageObj.elements.socialbarprint.selector,

           
            
            globalProps(client);
        client.elements('css selector', socialbardivonlyshelf, results => {
            if (results.value.length > 0) {
                properties = social_toolbar_props.socialbarmaindiv('lg');
                callback.multiloop(client, socialbarmaindivstarts, properties, 'lg');

                properties = social_toolbar_props.socialbarul('lg');
                callback.multiloop(client, socialbardivul, properties, 'lg');


                properties = social_toolbar_props.socialbarli('lg');
                callback.multiloop(client, socialbardivli, properties, 'lg');


                properties = social_toolbar_props.socialbarlink('lg');
                callback.multiloop(client, socialbardivlink, properties, 'lg');

                properties = social_toolbar_props.socialbarspan('lg');
                callback.multiloop(client, socialbardivspan, properties, 'lg');



                properties = social_toolbar_props.socialbarfacebook('lg');
                callback.pseudoSingleElem(client, socialbarfacebookbefore, ':before', properties);
                console.log(socialbarfacebookbefore);

                properties = social_toolbar_props.socialbartwitter('lg');
                callback.pseudoSingleElem(client, socialbartwitterbefore, ':before', properties);

                properties = social_toolbar_props.socialbaremail('lg');
                callback.pseudoSingleElem(client, socialbaremailbefore, ':before', properties);

                properties = social_toolbar_props.socialbarprint('lg');
                callback.pseudoSingleElem(client, socialbarprintbefore, ':before', properties);


            }


        });

        client.elements('css selector', newrebsocialbardivshelf, results => {
            if (results.value.length > 0) {
                properties = social_toolbar_props.nwrebsocialbarmaindiv('lg');
                callback.multiloop(client, socialbarmaindivstarts, properties, 'lg');

                properties = social_toolbar_props.nwrebsocialbarul('lg');
                callback.multiloop(client, socialbardivul, properties, 'lg');


                properties = social_toolbar_props.nwrebsocialbarli('lg');
                callback.multiloop(client, socialbardivli, properties, 'lg');


                properties = social_toolbar_props.nwrebsocialbarlink('lg');
                callback.multiloop(client, socialbardivlink, properties, 'lg');


                properties = social_toolbar_props.nwrebsocialbarfacebook('lg');
                callback.multiloop(client, nwrebsocialbarfacebookspan, properties, 'lg');
                client.expect.element(nwrebsocialbarfacebookspan).to.have.css('background-image').which.contains('share-facebook-white');


                properties = social_toolbar_props.nwrebsocialbartwitter('lg');
                callback.multiloop(client, nwrebsocialbartwitterspan, properties, 'lg');
                client.expect.element(nwrebsocialbartwitterspan).to.have.css('background-image').which.contains('share-twitter-white');


                properties = social_toolbar_props.nwrebsocialbaremail('lg');
                callback.multiloop(client, nwrebsocialbaremailspan, properties, 'lg');
                client.expect.element(nwrebsocialbaremailspan).to.have.css('background-image').which.contains('share-email-white');


                properties = social_toolbar_props.nwrebsocialbarprint('lg');
                callback.multiloop(client, nwrebsocialbarprintspan, properties, 'lg');
                client.expect.element(nwrebsocialbarprintspan).to.have.css('background-image').which.contains('share-print-white');





            }


        });

        client.elements('css selector', socialbardivrebonlyshelf, results => {
            console.log(socialbardivonlyshelf)
            if (results.value.length > 0) {
                properties = social_toolbar_props.rebsocialbarmaindiv('lg');
                callback.multiloop(client, socialbarmaindivstarts, properties, 'lg');

                properties = social_toolbar_props.rebsocialbarul('lg');
                callback.multiloop(client, socialbardivul, properties, 'lg');


                properties = social_toolbar_props.rebsocialbarli('lg');
                callback.multiloop(client, socialbardivli, properties, 'lg');


                properties = social_toolbar_props.rebsocialbarlink('lg');
                callback.multiloop(client, socialbardivlink, properties, 'lg');

                properties = social_toolbar_props.rebsocialbarspan('lg');
                callback.multiloop(client, socialbardivspan, properties, 'lg');



                properties = social_toolbar_props.rebsocialbarfacebook('lg');
                callback.pseudoSingleElem(client, socialbarfacebookbefore, ':before', properties);
                console.log(socialbarfacebookbefore);

                properties = social_toolbar_props.rebsocialbartwitter('lg');
                callback.pseudoSingleElem(client, socialbartwitterbefore, ':before', properties);

                properties = social_toolbar_props.rebsocialbaremail('lg');
                callback.pseudoSingleElem(client, socialbaremailbefore, ':before', properties);

                properties = social_toolbar_props.rebsocialbarprint('lg');
                callback.pseudoSingleElem(client, socialbarprintbefore, ':before', properties);




            }


        });

    },


   



    "Ending the session": function (client) {
        client.end();
    }

}