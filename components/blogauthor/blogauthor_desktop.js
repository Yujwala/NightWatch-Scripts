var pageurl = require('../../pageurls.js'),
    pageObj,blogauthor_props,callback,size;

function globalProps(client) {
    pageObj = client.page.blogauthor_selectors(),
	callback = client.page.common(),
	size = client.globals.size.widths;
	callback.getBrand(client);
	blogauthor_props = require('./blogauthor_props.js')(client);
}

module.exports = {
    '@tags': ['desktop', 'blogauthor', 'blogauthor-component-desktop'],
    "Opening the Desktop URL": function (client) {
        globalProps(client);
        client.maximizeWindow();
        callback.openURL(client,pageurl.RBSCOM_BLOGAUTHOR);
        console.log("--Desktop--" + pageurl.RBSCOM_BLOGAUTHOR);
       // client.pause(1000)
    },
                        /*  blogauthor COMPONENT Checks */
    "Check for blogauthor section": function (client) {
        blogauthorShelf = pageObj.elements.blogauthorShelf.selector,
        globalProps(client);
        callback.scrollToElement(client, blogauthorShelf);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', blogauthorShelf, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.blogauthorShelf('lg');
                    callback.singleElem(client, blogauthorShelf, Properties, 'lg');
                }
            });
        }
    },


    "Check for blogauthor Header Tile ": function (client) {
        headerTile = pageObj.elements.headerTile.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', headerTile, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.headerTile('lg');
                    callback.singleElem(client, headerTile, Properties, 'lg');
                }
            });
        }
    },

    "Check for blogauthor Header Tile Elements ": function (client) {
        headerTileEle = pageObj.elements.headerTileEle.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', headerTileEle, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.headerTileEle('lg');
                    callback.singleElem(client, headerTileEle, Properties, 'lg');
                }
            });
        }
    },

    "Check for blogauthor Inner Shelf Padding  ": function (client) {
        innerShelf = pageObj.elements.innerShelf.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', innerShelf, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.innerShelf('lg');
                    callback.singleElem(client, innerShelf, Properties, 'lg');
                }
            });
        }
    },

    "Check for blogauthor Avatar Height and Width  ": function (client) {
        blogAvatar = pageObj.elements.blogAvatar.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', blogAvatar, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.blogAvatar('lg');
                    callback.multiloop(client, blogAvatar, Properties, 'lg')
                    client.verify.element('.blog-avatar img').to.have.attribute('src')

                }
            });
        }
    },

    "Check for blog Author name ": function (client) {
        blogAuthorName = pageObj.elements.blogAuthorName.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', blogAuthorName, results => {
                if (results.value.length > 0) {   
                    Properties = blogauthor_props.blogAuthorName('lg');
                    callback.multiloop(client, blogAuthorName, Properties, 'lg');
                
        

                }
            });
        }
    },

    "Check for blogauthor Title  ": function (client) {
        blogAuthorTitle = pageObj.elements.blogAuthorTitle.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', blogAuthorTitle, results => {
                if (results.value.length > 0) {
                    Properties = blogauthor_props.blogAuthorTitle('lg');
                    callback.multiloop(client, blogAuthorTitle, Properties, 'lg');
                }
            });
        }
    },

    "Check for blogauthor Avatar Height and Width  ": function (client) {
        blogAvatar = pageObj.elements.blogAvatar.selector,
        globalProps(client);
        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
            client.elements('css selector', blogAvatar, results => {
                if (results.value.length > 0) {
                   
                    Properties = blogauthor_props.blogAvatar('lg');
                    callback.multiloop(client, blogAvatar, Properties, 'lg');

                }
            });
        }
    },



    'Ending the session': function (client) {
        client.pause(1000);
        client.end();
    }
};



