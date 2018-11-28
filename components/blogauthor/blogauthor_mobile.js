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
    '@tags': ['Mobile', 'blogauthor', 'blogauthor-component-Mobile'],
    "Opening the Mobile URL": function (client) {
        globalProps(client);
        client.maximizeWindow();

        callback.openURL(client,pageurl.NW_PER_BLOGAUTHOR_MOB);
        console.log("--Mobile--" + pageurl.NW_PER_BLOGAUTHOR_MOB);

    },

    "Resize The Window": function (client) {
        var size = client.globals.size.widths;
        client.resizeWindow(size['xs'].width, size['xs'].height);
        client.pause(500);
        client.refresh();
        client.pause(500)
        
    },


                        
                    /*  blogauthor COMPONENT Checks */

    
                    "Check for blogauthor section": function (client) {
                        blogauthorShelf = pageObj.elements.blogauthorShelf.selector,
                        globalProps(client);
                        callback.scrollToElement(client, blogauthorShelf);
                        if (client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice) {
                            client.elements('css selector', blogauthorShelf, results => {
                                if (results.value.length > 0) {
                                    Properties = blogauthor_props.blogauthorShelf('xs');
                                    callback.singleElem(client, blogauthorShelf, Properties, 'xs');
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
                                    Properties = blogauthor_props.headerTile('xs');
                                    callback.singleElem(client, headerTile, Properties, 'xs');
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
                                    Properties = blogauthor_props.headerTileEle('xs');
                                    callback.singleElem(client, headerTileEle, Properties, 'xs');
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
                                    Properties = blogauthor_props.innerShelf('xs');
                                    callback.singleElem(client, innerShelf, Properties, 'xs');
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
                                    Properties = blogauthor_props.blogAvatar('xs');
                                    callback.singleElem(client, blogAvatar, Properties, 'xs')
                                 //   client.expect.element('.blog-avatar img').to.have.attribute('src').which.equals(brand.props.$blogAvatarImg);
                
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
                                    Properties = blogauthor_props.blogAuthorName('xs');
                                    callback.singleElem(client, blogAuthorName, Properties, 'xs');
                                
                        
                
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
                                    Properties = blogauthor_props.blogAuthorTitle('xs');
                                    callback.singleElem(client, blogAuthorTitle, Properties, 'xs');
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
                                   
                                    Properties = blogauthor_props.blogAvatar('xs');
                                    callback.singleElem(client, blogAvatar, Properties, 'xs');
                
                                }
                            });
                        }
                    },


    'Ending the session': function (client) {
        client.pause(1000);
        client.end();
    }
};





