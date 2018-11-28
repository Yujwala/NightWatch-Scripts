var pageurl = require('../../pageurls.js'),
    pageObj,subnav_props,callback,size,brand;

function globalProps(client){
    pageObj = client.page.subnav_selectors();
    callback = client.page.common();
    size = client.globals.size.widths; 
    callback.getBrand(client);
    var brandFile = client.globals.brand;
    brand = require('../../branding/'+brandFile);
    subnav_props = require('./subnav_props.js')(client);  
}    

module.exports = {
    '@tags': ['desktop', 'subnav', 'subnav-desktop'],
    "Opening the Desktop URL": function(client) {
            globalProps(client);
            client.maximizeWindow();    
            callback.openURL(client,pageurl.NW_BUS_SUBNAV);
            console.log("--Desktop--"+pageurl.NW_BUS_SUBNAV); 
    },
"1. Checking SUBNAV Shelf padding ": function(client) {
        subnavShelf = pageObj.elements.subnavShelf.selector,
        subnavShelfInner=pageObj.elements.subnavShelfInner.selector
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',subnavShelf,results=>{
                if(results.value.length>0) { 
                    //Shelf paddings
                    console.log("-------Shelf width and paddings------");
                    Properties = subnav_props.subnavShelfProps('lg');  
                    callback.singleElem(client,subnavShelf, Properties, 'lg');
                    Properties = subnav_props.subnavShelfInnerProps('lg');  
                    callback.singleElem(client,subnavShelfInner, Properties, 'lg');                    
                }
            });
        }      
    },
    "2. Checking SUBNAV theme-white props ": function(client) {
        themeWhiteShelf = pageObj.elements.themeWhiteShelf.selector,        
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',themeWhiteShelf,results=>{
                if(results.value.length>0) { 
                    //Theme White
                    console.log("-------Theme White------");
                    Properties = subnav_props.themeWhiteShelfProps('lg');  
                    callback.singleElem(client,themeWhiteShelf, Properties, 'lg');                                     
                }
            });
        }      
    },
    "2a. Checking SUBNAV theme-light-blue props ": function(client) {
        themeLightBlueShelf = pageObj.elements.themeLightBlueShelf.selector,        
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',themeLightBlueShelf,results=>{
                if(results.value.length>0) { 
                    //Theme White
                    console.log("-------Theme White------");
                    Properties = subnav_props.themeLightBlueShelf('lg');  
                    callback.singleElem(client,themeLightBlueShelf, Properties, 'lg');                                     
                }
            });
        }      
    },
    "2b. Checking SUBNAV theme-blue props ": function(client) {
        themeBlueShelf = pageObj.elements.themeBlueShelf.selector,        
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',themeBlueShelf,results=>{
                if(results.value.length>0) { 
                    //Theme White
                    console.log("-------Theme White------");
                    Properties = subnav_props.themeBlueShelf('lg');  
                    callback.singleElem(client,themeBlueShelf, Properties, 'lg');                                     
                }
            });
        }      
    },
    "3. Checking SUBNAV Header-group props ": function(client) {
        headerGroup = pageObj.elements.headerGroup.selector,
        subnavSignPost=pageObj.elements.subnavSignPost.selector,
        subnavHeadline=pageObj.elements.subnavHeadline.selector,
            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',headerGroup,results=>{
                if(results.value.length>0) { 
                    //Header group                   
                    Properties = subnav_props.headerGroupProps('lg');  
                    callback.singleElem(client,headerGroup, Properties, 'lg');
                    //Signpost                   
                     client.expect.element(subnavSignPost).to.have.css('display').which.equals('none');
                                                       
                    //Headline
                    client.elements('css selector',subnavHeadline,results=>{   
                        if(results.value.length>0) {     
                    Properties = subnav_props.headlineProps('lg');  
                    callback.singleElem(client,subnavHeadline, Properties, 'lg');
                        }
                    });
                }
            });
        }      
    },

    "4. Checking SUBNAV grid(with 2 children) props ": function(client) {
        subnav2FirstChild = pageObj.elements.subnav2FirstChild.selector,
        subnav2FirstChildAnchor = pageObj.elements.subnav2FirstChildAnchor.selector,
        subnav2LastChild = pageObj.elements.subnav2LastChild.selector,
        subnav2LastChildAnchor = pageObj.elements.subnav2LastChildAnchor.selector,
        subnav2InsideHeadingText = pageObj.elements.subnav2InsideHeadingText.selector,
        subnav2Chevron = pageObj.elements.subnav2Chevron.selector,
        subnav2Padlock = pageObj.elements.subnav2Padlock.selector,

            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',subnav2FirstChild,results=>{
                if(results.value.length>0) { 
                    //Subnav with 2 children (First Child)                  
                    Properties = subnav_props.subnav2FirstChildProps('lg');  
                    callback.multiloop(client,subnav2FirstChild, Properties, 'lg');
                    //Subnav with 2 children (First Child) Anchor 
                    Properties = subnav_props.subnav2FirstChildAnchorProps('lg');  
                    callback.multiloop(client,subnav2FirstChildAnchor, Properties, 'lg');
                    //Subnav with 2 children (Last Child)
                    Properties = subnav_props.subnav2LastChildProps('lg');  
                    callback.multiloop(client,subnav2LastChild, Properties, 'lg');
                    //Subnav with 2 children (Last Child) Anchor
                    Properties = subnav_props.subnav2FirstChildAnchorProps('lg');  
                    callback.multiloop(client,subnav2LastChildAnchor, Properties, 'lg');
                    //Subnav with 2 children Heading Text Props                 
                    Properties = subnav_props.subnav2InsideHeadingTextProps('lg');  
                    callback.multiloop(client,subnav2InsideHeadingText, Properties, 'lg');
                    //Subnav with 2 children Chevron Props                 
                    Properties = subnav_props.subnav2ChevronProps('lg');  
                    callback.multiloop(client,subnav2Chevron, Properties, 'lg');
                    //Subnav with 2 children Padlock Props                 
                    Properties = subnav_props.subnav2PadlockProps('lg');  
                    callback.multiloop(client,subnav2Padlock, Properties, 'lg');
                }
            });
        }      
    },
    "5. Checking SUBNAV grid(with 3 children) props ": function(client) {
        subnav3FirstChild = pageObj.elements.subnav3FirstChild.selector,
        subnav3FirstChildAnchor = pageObj.elements.subnav3FirstChildAnchor.selector,
        subnav3SecondChild = pageObj.elements.subnav3SecondChild.selector,
        subnav3SecondChildAnchor = pageObj.elements.subnav3SecondChildAnchor.selector,
        subnav3LastChild = pageObj.elements.subnav3LastChild.selector,
        subnav3LastChildAnchor = pageObj.elements.subnav3LastChildAnchor.selector,
        subnav3InsideHeadingText = pageObj.elements.subnav3InsideHeadingText.selector,
        subnav3Chevron = pageObj.elements.subnav3Chevron.selector,
        subnav3Padlock = pageObj.elements.subnav3Padlock.selector,

            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',subnav3FirstChild,results=>{
                if(results.value.length>0) { 
                    //Subnav with 3 children (First Child)                  
                    Properties = subnav_props.subnav3FirstChildProps('lg');  
                    callback.multiloop(client,subnav3FirstChild, Properties, 'lg');
                    //Subnav with 3 children (First Child) Anchor 
                    Properties = subnav_props.subnav3FirstChildAnchorProps('lg');  
                    callback.multiloop(client,subnav3FirstChildAnchor, Properties, 'lg');
                    //Subnav with 3 children (Second Child)                  
                    Properties = subnav_props.subnav3SecondChildProps('lg');  
                    callback.multiloop(client,subnav3SecondChild, Properties, 'lg');
                    //Subnav with 3 children (Second Child) Anchor 
                    Properties = subnav_props.subnav3FirstChildAnchorProps('lg');  
                    callback.multiloop(client,subnav3SecondChildAnchor, Properties, 'lg');
                    //Subnav with 3 children (Last Child)
                    Properties = subnav_props.subnav3LastChildProps('lg');  
                    callback.multiloop(client,subnav3LastChild, Properties, 'lg');
                    //Subnav with 3 children (Last Child) Anchor
                    Properties = subnav_props.subnav3FirstChildAnchorProps('lg');  
                    callback.multiloop(client,subnav3LastChildAnchor, Properties, 'lg');
                    //Subnav with 3 children Heading Text Props                 
                    Properties = subnav_props.subnav2InsideHeadingTextProps('lg');  
                    callback.multiloop(client,subnav3InsideHeadingText, Properties, 'lg');
                    //Subnav with 3 children Chevron Props                 
                    Properties = subnav_props.subnav3ChevronProps('lg');  
                    callback.multiloop(client,subnav3Chevron, Properties, 'lg');
                    //Subnav with 3 children Padlock Props                 
                    Properties = subnav_props.subnav3PadlockProps('lg');  
                    callback.multiloop(client,subnav3Padlock, Properties, 'lg');
                }
            });
        }      
    },
    "6. Checking SUBNAV grid(with 4 children) props ": function(client) {
        subnav4FirstChild = pageObj.elements.subnav4FirstChild.selector,
        subnav4FirstChildAnchor = pageObj.elements.subnav4FirstChildAnchor.selector,
        subnav4SecondChild = pageObj.elements.subnav4SecondChild.selector,
        subnav4SecondChildAnchor = pageObj.elements.subnav4SecondChildAnchor.selector,
        subnav4ThirdChild = pageObj.elements.subnav4ThirdChild.selector,
        subnav4ThirdChildAnchor = pageObj.elements.subnav4ThirdChildAnchor.selector,
        subnav4LastChild = pageObj.elements.subnav4LastChild.selector,
        subnav4LastChildAnchor = pageObj.elements.subnav4LastChildAnchor.selector,
        subnav4InsideHeadingText = pageObj.elements.subnav4InsideHeadingText.selector,
        subnav4Chevron = pageObj.elements.subnav4Chevron.selector,
        subnav4Padlock = pageObj.elements.subnav4Padlock.selector,

            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',subnav4FirstChild,results=>{
                if(results.value.length>0) { 
                    //Subnav with 4 children (First Child)                  
                    Properties = subnav_props.subnav4FirstChildProps('lg');  
                    callback.multiloop(client,subnav4FirstChild, Properties, 'lg');
                    //Subnav with 4 children (First Child) Anchor 
                    Properties = subnav_props.subnav4ChildAnchorProps('lg');  
                    callback.multiloop(client,subnav4FirstChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Second Child)                  
                    Properties = subnav_props.subnav4SecondChildProps('lg');  
                    callback.multiloop(client,subnav4SecondChild, Properties, 'lg');
                    //Subnav with 4 children (Second Child) Anchor 
                    Properties = subnav_props.subnav4ChildAnchorProps('lg');  
                    callback.multiloop(client,subnav4SecondChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Third Child)                  
                    Properties = subnav_props.subnav4ThirdChildProps('lg');  
                    callback.multiloop(client,subnav4ThirdChild, Properties, 'lg');
                    //Subnav with 4 children (Third Child) Anchor 
                    Properties = subnav_props.subnav4ChildAnchorProps('lg');  
                    callback.multiloop(client,subnav4ThirdChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Last Child)
                    Properties = subnav_props.subnav4LastChildProps('lg');  
                    callback.multiloop(client,subnav4LastChild, Properties, 'lg');
                    //Subnav with 4 children (Last Child) Anchor
                    Properties = subnav_props.subnav4ChildAnchorProps('lg');  
                    callback.multiloop(client,subnav4LastChildAnchor, Properties, 'lg');
                    //Subnav with 4 children Heading Text Props                 
                    Properties = subnav_props.subnav4InsideHeadingTextProps('lg');  
                    callback.multiloop(client,subnav4InsideHeadingText, Properties, 'lg');
                    //Subnav with 4 children Chevron Props                 
                    Properties = subnav_props.subnav4ChevronProps('lg');  
                    callback.multiloop(client,subnav4Chevron, Properties, 'lg');
                    //Subnav with 4 children Padlock Props                 
                    Properties = subnav_props.subnav4PadlockProps('lg');  
                    callback.multiloop(client,subnav4Padlock, Properties, 'lg');
                }
            });
        }      
    },
    "7. Checking reward SUBNAV grid(with 4 children) props ": function(client) {
        rewardsubnav4FirstChild = pageObj.elements.rewardsubnav4FirstChild.selector,
        rewardsubnav4FirstChildAnchor = pageObj.elements.rewardsubnav4FirstChildAnchor.selector,
        rewardsubnav4SecondChild = pageObj.elements.rewardsubnav4SecondChild.selector,
        rewardsubnav4SecondChildAnchor = pageObj.elements.rewardsubnav4SecondChildAnchor.selector,
        rewardsubnav4ThirdChild = pageObj.elements.rewardsubnav4ThirdChild.selector,
        rewardsubnav4ThirdChildAnchor = pageObj.elements.rewardsubnav4ThirdChildAnchor.selector,
        rewardsubnav4LastChild = pageObj.elements.rewardsubnav4LastChild.selector,
        rewardsubnav4LastChildAnchor = pageObj.elements.rewardsubnav4LastChildAnchor.selector,
        rewardsubnav4InsideHeadingText = pageObj.elements.rewardsubnav4InsideHeadingText.selector,
        rewardsubnav4Chevron = pageObj.elements.rewardsubnav4Chevron.selector,
        rewardsubnav4Padlock = pageObj.elements.rewardsubnav4Padlock.selector,

            globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',rewardsubnav4FirstChild,results=>{
                if(results.value.length>0) { 
                    //Subnav with 4 children (First Child)                  
                    Properties = subnav_props.rewardsubnav4FirstChildProps('lg');  
                    callback.multiloop(client,rewardsubnav4FirstChild, Properties, 'lg');
                    //Subnav with 4 children (First Child) Anchor 
                    Properties = subnav_props.rewardsubnav4FirstChildAnchorProps('lg');  
                    callback.multiloop(client,rewardsubnav4FirstChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Second Child)                  
                    Properties = subnav_props.rewardsubnav4SecondChildProps('lg');  
                    callback.multiloop(client,rewardsubnav4SecondChild, Properties, 'lg');
                    //Subnav with 4 children (Second Child) Anchor 
                    Properties = subnav_props.rewardsubnav4FirstChildAnchorProps('lg');  
                    callback.multiloop(client,rewardsubnav4SecondChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Third Child)                  
                    Properties = subnav_props.rewardsubnav4ThirdChildProps('lg');  
                    callback.multiloop(client,rewardsubnav4ThirdChild, Properties, 'lg');
                    //Subnav with 4 children (Third Child) Anchor 
                    Properties = subnav_props.rewardsubnav4FirstChildAnchorProps('lg');  
                    callback.multiloop(client,rewardsubnav4ThirdChildAnchor, Properties, 'lg');
                    //Subnav with 4 children (Last Child)
                    Properties = subnav_props.rewardsubnav4LastChildProps('lg');  
                    callback.multiloop(client,rewardsubnav4LastChild, Properties, 'lg');
                    //Subnav with 4 children (Last Child) Anchor
                    Properties = subnav_props.rewardsubnav4FirstChildAnchorProps('lg');  
                    callback.multiloop(client,rewardsubnav4LastChildAnchor, Properties, 'lg');
                    //Subnav with 4 children Heading Text Props                 
                    Properties = subnav_props.rewardsubnav4InsideHeadingTextProps('lg');  
                    callback.multiloop(client,rewardsubnav4InsideHeadingText, Properties, 'lg');
                }
            });
        }      
    },
    "6. Checking SUBNAV grid(with 5 children) props ": function(client) {
            subnav5FirstChild = pageObj.elements.subnav5FirstChild.selector,
            subnav5FirstChildAnchor = pageObj.elements.subnav5FirstChildAnchor.selector,
            subnav5SecondChild = pageObj.elements.subnav5SecondChild.selector,
            subnav5SecondChildAnchor = pageObj.elements.subnav5SecondChildAnchor.selector,
            subnav5ThirdChild = pageObj.elements.subnav5ThirdChild.selector,
            subnav5ThirdChildAnchor = pageObj.elements.subnav5ThirdChildAnchor.selector,
            subnav5FourthChild = pageObj.elements.subnav5FourthChild.selector,
            subnav5FourthChildAnchor = pageObj.elements.subnav5FourthChildAnchor.selector,
            subnav5LastChild = pageObj.elements.subnav5LastChild.selector,
            subnav5LastChildAnchor = pageObj.elements.subnav5LastChildAnchor.selector,
            subnav5InsideHeadingText = pageObj.elements.subnav5InsideHeadingText.selector,
            subnav5Chevron = pageObj.elements.subnav5Chevron.selector,
            subnav5Padlock = pageObj.elements.subnav5Padlock.selector,
    
                globalProps(client);
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                client.elements('css selector',subnav5FirstChild,results=>{
                    if(results.value.length>0) { 
                        //Subnav with 5 children (First Child)                  
                        Properties = subnav_props.subnav5FirstChildProps('lg');  
                        callback.multiloop(client,subnav5FirstChild, Properties, 'lg');
                        //Subnav with 5 children (First Child) Anchor 
                        Properties = subnav_props.subnav5FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav5FirstChildAnchor, Properties, 'lg');
                        //Subnav with 5 children (Second Child)                  
                        Properties = subnav_props.subnav5SecondChildProps('lg');  
                        callback.multiloop(client,subnav5SecondChild, Properties, 'lg');
                        //Subnav with 5 children (Second Child) Anchor 
                        Properties = subnav_props.subnav5FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav5SecondChildAnchor, Properties, 'lg');
                        //Subnav with 5 children (Third Child)                  
                        Properties = subnav_props.subnav5ThirdChildProps('lg');  
                        callback.multiloop(client,subnav5ThirdChild, Properties, 'lg');
                        //Subnav with 5 children (Third Child) Anchor 
                        Properties = subnav_props.subnav5FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav5ThirdChildAnchor, Properties, 'lg');
                        //Subnav with 5 children (Fourth Child)                  
                        Properties = subnav_props.subnav5FourthChildProps('lg');  
                        callback.multiloop(client,subnav5FourthChild, Properties, 'lg');
                        //Subnav with 5 children (Fourth Child) Anchor 
                        Properties = subnav_props.subnav5FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav5FourthChildAnchor, Properties, 'lg');
                        //Subnav with 5 children (Last Child)
                        Properties = subnav_props.subnav5LastChildProps('lg');  
                        callback.multiloop(client,subnav5LastChild, Properties, 'lg');
                        //Subnav with 5 children (Last Child) Anchor
                        Properties = subnav_props.subnav5FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav5LastChildAnchor, Properties, 'lg');
                        //Subnav with 5 children Heading Text Props                 
                        Properties = subnav_props.subnav5InsideHeadingTextProps('lg');  
                        callback.multiloop(client,subnav5InsideHeadingText, Properties, 'lg');
                        //Subnav with 5 children Chevron Props                 
                        Properties = subnav_props.subnav5ChevronProps('lg');  
                        callback.multiloop(client,subnav5Chevron, Properties, 'lg');
                        //Subnav with 5 children Padlock Props                 
                        Properties = subnav_props.subnav5PadlockProps('lg');  
                        callback.multiloop(client,subnav5Padlock, Properties, 'lg');
                    }
                });
            }      
        },
    "6. Checking SUBNAV grid(with 6 children) props ": function(client) {
            subnav6FirstChild = pageObj.elements.subnav6FirstChild.selector,
            subnav6FirstChildAnchor = pageObj.elements.subnav6FirstChildAnchor.selector,
            subnav6SecondChild = pageObj.elements.subnav6SecondChild.selector,
            subnav6SecondChildAnchor = pageObj.elements.subnav6SecondChildAnchor.selector,
            subnav6ThirdChild = pageObj.elements.subnav6ThirdChild.selector,
            subnav6ThirdChildAnchor = pageObj.elements.subnav6ThirdChildAnchor.selector,
            subnav6FourthChild = pageObj.elements.subnav6FourthChild.selector,
            subnav6FourthChildAnchor = pageObj.elements.subnav6FourthChildAnchor.selector,
            subnav6FifthChild = pageObj.elements.subnav6FifthChild.selector,
            subnav6FifthChildAnchor = pageObj.elements.subnav6FifthChildAnchor.selector,
            subnav6LastChild = pageObj.elements.subnav6LastChild.selector,
            subnav6LastChildAnchor = pageObj.elements.subnav6LastChildAnchor.selector,
            subnav6InsideHeadingText = pageObj.elements.subnav6InsideHeadingText.selector,
            subnav6Chevron = pageObj.elements.subnav6Chevron.selector,
            subnav6Padlock = pageObj.elements.subnav6Padlock.selector,
    
                globalProps(client);
            if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
                client.elements('css selector',subnav6FirstChild,results=>{
                    if(results.value.length>0) { 
                        //Subnav with 6 children (First Child)                  
                        Properties = subnav_props.subnav6FirstChildProps('lg');  
                        callback.multiloop(client,subnav6FirstChild, Properties, 'lg');
                        //Subnav with 6 children (First Child) Anchor 
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6FirstChildAnchor, Properties, 'lg');
                        //Subnav with 6 children (Second Child)                  
                        Properties = subnav_props.subnav6SecondChildProps('lg');  
                        callback.multiloop(client,subnav6SecondChild, Properties, 'lg');
                        //Subnav with 6 children (Second Child) Anchor 
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6SecondChildAnchor, Properties, 'lg');
                        //Subnav with 6 children (Third Child)                  
                        Properties = subnav_props.subnav6ThirdChildProps('lg');  
                        callback.multiloop(client,subnav6ThirdChild, Properties, 'lg');
                        //Subnav with 6 children (Third Child) Anchor 
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6ThirdChildAnchor, Properties, 'lg');
                        //Subnav with 6 children (Fourth Child)                  
                        Properties = subnav_props.subnav6FourthChildProps('lg');  
                        callback.multiloop(client,subnav6FourthChild, Properties, 'lg');
                        //Subnav with 6 children (Fourth Child) Anchor 
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6FourthChildAnchor, Properties, 'lg');
                        //Subnav with 6 children (Fifth Child)                  
                        Properties = subnav_props.subnav6FifthChildProps('lg');  
                        callback.multiloop(client,subnav6FifthChild, Properties, 'lg');
                        //Subnav with 6 children (Fifth Child) Anchor 
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6FifthChildAnchor, Properties, 'lg');
                        //Subnav with 6 children (Last Child)
                        Properties = subnav_props.subnav6LastChildProps('lg');  
                        callback.multiloop(client,subnav6LastChild, Properties, 'lg');
                        //Subnav with 6 children (Last Child) Anchor
                        Properties = subnav_props.subnav6FirstChildAnchorProps('lg');  
                        callback.multiloop(client,subnav6LastChildAnchor, Properties, 'lg');
                        //Subnav with 6 children Heading Text Props                 
                        Properties = subnav_props.subnav6InsideHeadingTextProps('lg');  
                        callback.multiloop(client,subnav6InsideHeadingText, Properties, 'lg');
                        //Subnav with 6 children Chevron Props                 
                        Properties = subnav_props.subnav5ChevronProps('lg');  
                        callback.multiloop(client,subnav6Chevron, Properties, 'lg');
                        //Subnav with 6 children Padlock Props                 
                        Properties = subnav_props.subnav3PadlockProps('lg');  
                        callback.multiloop(client,subnav6Padlock, Properties, 'lg');
                    }
                });
            }      
        },
//     "4. Checking SUBNAV grid props ": function(client) {
//         subnavGrid = pageObj.elements.subnavGrid.selector,
//         subnavGridItemCount=pageObj.elements.subnavGridItemCount.selector,        
//         subnavChevron=pageObj.elements.subnavChevron.selector,       
//         subnavHeadingsell=pageObj.elements.subnavHeadingsell.selector,
//         subnavItemSell=pageObj.elements.subnavItemSell.selector

    
//     if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
//         client.elements('css selector',subnavGrid,results=>{
//             if(results.value.length>0) { 
//                 client.elements('css selector',subnavGridItemCount,results=>{                 
                   
//                     for(var i=1;i<=results.value.length;i++){                            
//                         let nextElem=subnavGridItemCount+':nth-child('+(i)+')';
//                         let LinknextElem=nextElem + ' a';
//                         var num = results.value.length.toString();
//                         client.source(() => {
//                             console.log("------------------Each grid Properties------ -------");
//                             });
//                             if(num==6 && i==6&&brand.props.$brandName=='lombard')
//                             client.expect.element(nextElem).to.have.css('margin-right').which.equals('1px');
//                             else if(num==6 && i==6){
//                                 client.expect.element(nextElem).to.have.css('margin-right').which.equals('0px');
//                             }
//                         else{
//                         Properties = subnav_props["subnav"+ num +"GridsProps"]('lg');                      
//                         callback.singleElem(client,nextElem, Properties,'lg'); 
//                         }                           
//                         if(brand.props.$brandName=='lombard'){
//                         client.expect.element(nextElem).to.have.css('background-image').which.contains('images/sub-nav-lombard.svg');
//                         }else
//                         {
//                         client.expect.element(nextElem).to.have.css('background-image').which.contains('images-desktop/subnav-svg.svg');  
//                         }
//                     Link props
//                     client.source(() => {
//                         console.log("--- Link Properties -------");
//                         });
//                         var num = results.value.length.toString(); 
//                         if((num==4&&brand.props.$brandName=='lombard') || num==3||(num==5&&brand.props.$brandName=='rbs-bussiness')){                            
//                         Properties = subnav_props.subnavLinkProps3Grids('lg');
//                         callback.singleElem(client,LinknextElem, Properties,'lg');                        
//                          }
//                         else if((num==4&& brand.props.$brandName=='rbs-personal')||(num==4 && brand.props.$brandName=='rbs-bussiness')||(num==4 && brand.props.$brandName=='rbs-if')||(num==4 && brand.props.$brandName=='ulster')||(num==4 && brand.props.$brandName=='ulster-ie')){
//                             Properties = subnav_props.subnavLinkProps4Grids('lg');
//                             callback.singleElem(client,LinknextElem, Properties,'lg');  
//                         }
//                         else if(num==6 && brand.props.$brandName=='ulster'||num==6 && brand.props.$brandName=='ulster-ie'){
//                             Properties = subnav_props.subnavLinkProps6Grids('lg');
//                             callback.singleElem(client,LinknextElem, Properties,'lg');  
//                         }
//                          else{
//                         Properties = subnav_props.subnavLinkProps('lg');
//                          callback.singleElem(client,LinknextElem, Properties,'lg');
//                         }
                        
                    
//                     Subnav Head props
//                     client.source(() => {
//                         console.log("--- subnav head Properties -------");
//                         });
//                         let HeadnextElem=LinknextElem+ ' .sub-nav-item__head';
//                         let HeadInnernextElem=HeadnextElem+' .sub-nav-item__head__inner';                        
//                         Properties = subnav_props["subnavHeadProps"+num]('lg');
//                         callback.singleElem(client,HeadnextElem, Properties,'lg');

//                     subnav Head Inner properties
//                         Properties = subnav_props['subnavHeadInnerProps'+num]('lg');
//                         callback.singleElem(client,HeadInnernextElem, Properties,'lg');
//                         client.source(() => {
//                             console.log("--- Chevron Properties -------");
//                             });

//                      chevron properties
//                         Properties = subnav_props.subnavChevronProps('lg');
//                         callback.singleElem(client,subnavChevron, Properties,'lg');
//                         Properties = subnav_props['subnavChevronProps'+num]('lg');
//                         callback.singleElem(client,subnavChevron, Properties,'lg');

//                     chevron :after properties
//                     client.source(() => {
//                         console.log("--- Chevron after Properties -------");
//                         });
//                         Properties = subnav_props['subnavChevronAfterProps'+num]('lg');                                 
//                         callback.pseudoSingleElem(client, subnavChevron,':after',Properties);
//                         client.elements('css selector',subnavHeadingsell,results=>{
//                             if(results.value.length>0) { 
                                
//                                 Properties = subnav_props['subnavItemSellProps'+num]('lg');
//                                 callback.singleElem(client,subnavItemSell, Properties,'lg');
//                             }     

//                         });
//                     }                    
//                 });
//             }    
//         });
//     }
// },
// "5. Checking SUBNAV each grid's bg-color ": function(client) {
//     subnavGrid = pageObj.elements.subnavGrid.selector,
//     subnavGridItemCount=pageObj.elements.subnavGridItemCount.selector   

// if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
//         client.elements('css selector',subnavGrid,results=>{
//             if(results.value.length>0) { 
//                 client.elements('css selector',subnavGridItemCount,results=>{                 
                
//                     for(var i=1;i<=results.value.length;i++){                            
//                         let nextElem=subnavGridItemCount+':nth-child('+(i)+')';
//                         if(i==1){                            
//                             Properties =subnav_props['firstChildBgcolorProps']('lg'); 
//                             callback.singleElem(client,nextElem, Properties,'lg');
//                         }
//                         else if(i==results.value.length){                        
//                             Properties =subnav_props['lastChildBgcolorProps']('lg'); 
//                             callback.singleElem(client,nextElem, Properties,'lg');
//                         }
//                         else{
//                         var num = results.value.length.toString();                             
//                         Properties =subnav_props["subnav"+num+"GridBgclr"+i]('lg');  
//                         callback.singleElem(client,nextElem, Properties,'lg');
//                         }
//                     }                    
//                 });
//             }    
//         });
//     }
// },  

// "6. Checking SUBNAV Grid-Item hover props ": function(client) {
//         subnavGrid = pageObj.elements.subnavGrid.selector,
//         subnavGridItemCount=pageObj.elements.subnavGridItemCount.selector,
//         newHover=pageObj.elements.newHover.selector,        
//         subnavGridonHover=pageObj.elements.subnavGridonHover.selector,
       
//         globalProps(client);
//         if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
//          client.elements('css selector',subnavGrid,results=>{
//             if(results.value.length>0) {               
//                 client.elements('css selector',subnavGridItemCount,results=>{                              
//                     for(var i=0; i<results.value.length; i++){
//                         var num = results.value.length.toString();
//                         let nextElem=subnavGridItemCount+':nth-child('+(i+1)+')';
//                         console.log(nextElem);
//                         client.moveToElement(nextElem, 10, 10, function(){
//                         client.pause(1000);
//                         if(num==6 && i==6){
//                         client.expect.element(subnavGridonHover).to.have.css('margin-right','0px');
//                         }
//                         else{
//                             client.expect.element(subnavGridonHover).to.have.css('margin-right','1px');    
//                         }
//                         Properties = subnav_props.subnavGridonHover('lg');  
//                         callback.singleElem(client,subnavGridonHover, Properties, 'lg');
//                         Properties = subnav_props.subnvGridHoverProps('lg');  
//                         callback.singleElem(client,newHover, Properties, 'lg');                      

                     
//                         });    
//                      }
                   
//                 });
//             }
//         });
//     }
// },

"6. Checking 2 SUBNAV Grid-Item hover props ": function(client) {
    subnavhover = pageObj.elements.subnavhover.selector,    
    newHover=pageObj.elements.newHover.selector,        
    subnavGridonHover=pageObj.elements.subnavGridonHover.selector,
   
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     client.elements('css selector',subnavhover,results=>{
        if(results.value.length>0) {               
            client.elements('css selector',subnavhover,results=>{                              
                for(var i=0; i<results.value.length; i++){                               
                    client.moveToElement(subnavhover, 10, 10, function(){
                    client.pause(1000);                  
                    Properties = subnav_props.subnavGridonHover('lg');  
                    callback.singleElem(client,subnavGridonHover, Properties, 'lg');
                    Properties = subnav_props.subnv2GridHoverProps('lg');  
                    callback.singleElem(client,newHover, Properties, 'lg');                  

                 
                    });    
                 }
               
            });
        }
    });
}
},
"6. Checking 3 SUBNAV Grid-Item hover props ": function(client) {
    subnav3hover = pageObj.elements.subnav3hover.selector,    
    newHover3=pageObj.elements.newHover3.selector,        
    subnav3GridonHover=pageObj.elements.subnav3GridonHover.selector,
   
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     client.elements('css selector',subnav3hover,results=>{
        if(results.value.length>0) {               
            client.elements('css selector',subnav3hover,results=>{                              
                for(var i=0; i<results.value.length; i++){                               
                    client.moveToElement(subnav3hover, 10, 10, function(){
                    client.pause(1000);                  
                    Properties = subnav_props.subnavGridonHover('lg');  
                    callback.singleElem(client,subnav3GridonHover, Properties, 'lg');
                    Properties = subnav_props.subnvGridHoverProps('lg');  
                    callback.singleElem(client,newHover3, Properties, 'lg');                  

                 
                    });    
                 }
               
            });
        }
    });
}
},
"6. Checking 4 SUBNAV Grid-Item hover props ": function(client) {
    subnav4hover = pageObj.elements.subnav4hover.selector,    
    newHover4=pageObj.elements.newHover4.selector,        
    subnav4GridonHover=pageObj.elements.subnav4GridonHover.selector,
   
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     client.elements('css selector',subnav4hover,results=>{
        if(results.value.length>0) {               
            client.elements('css selector',subnav4hover,results=>{                              
                for(var i=0; i<results.value.length; i++){                               
                    client.moveToElement(subnav4hover, 10, 10, function(){
                    client.pause(1000);                  
                    Properties = subnav_props.subnavGridonHover('lg');  
                    callback.singleElem(client,subnav4GridonHover, Properties, 'lg');
                    Properties = subnav_props.subnvGridHoverProps('lg');  
                    callback.singleElem(client,newHover4, Properties, 'lg');                  

                 
                    });    
                 }
               
            });
        }
    });
}
},
"6. Checking 5 SUBNAV Grid-Item hover props ": function(client) {
    subnav5hover = pageObj.elements.subnav5hover.selector,    
    newHover5=pageObj.elements.newHover5.selector,        
    subnav5GridonHover=pageObj.elements.subnav5GridonHover.selector,
   
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     client.elements('css selector',subnav5hover,results=>{
        if(results.value.length>0) {               
            client.elements('css selector',subnav5hover,results=>{                              
                for(var i=0; i<results.value.length; i++){                               
                    client.moveToElement(subnav5hover, 10, 10, function(){
                    client.pause(1000);                  
                    Properties = subnav_props.subnavGridonHover('lg');  
                    callback.singleElem(client,subnav5GridonHover, Properties, 'lg');
                    Properties = subnav_props.subnvGridHoverProps('lg');  
                    callback.singleElem(client,newHover5, Properties, 'lg');                  

                 
                    });    
                 }
               
            });
        }
    });
}
},
"6. Checking 6 SUBNAV Grid-Item hover props ": function(client) {
    subnav6hover = pageObj.elements.subnav6hover.selector,    
    newHover6=pageObj.elements.newHover6.selector,        
    subnav6GridonHover=pageObj.elements.subnav6GridonHover.selector,
   
    globalProps(client);
    if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
     client.elements('css selector',subnav6hover,results=>{
        if(results.value.length>0) {               
            client.elements('css selector',subnav6hover,results=>{                              
                for(var i=0; i<results.value.length; i++){                               
                    client.moveToElement(subnav6hover, 10, 10, function(){
                    client.pause(1000);                  
                    Properties = subnav_props.subnavGridonHover('lg');  
                    callback.singleElem(client,subnav6GridonHover, Properties, 'lg');
                    Properties = subnav_props.subnvGridHoverProps('lg');  
                    callback.singleElem(client,newHover6, Properties, 'lg');                  

                 
                    });    
                 }
               
            });
        }
    });
}
},

    "7. Checking SUBNAV RTE props ": function(client) {
        subnavDescription = pageObj.elements.subnavDescription.selector,
        subnavRTE= pageObj.elements.subnavRTE.selector,
        subnavRTEStrong=pageObj.elements.subnavRTEStrong.selector,
        subnavRTELink=pageObj.elements.subnavRTELink.selector 
        globalProps(client);

        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
        client.elements('css selector',subnavDescription,results=>{
            if(results.value.length>0) {
                client.elements('css selector',subnavDescription,results=>{
                    if(results.value.length>0) {
                        client.source(() => {
                            console.log("---RTE  Properties -------");
                                  });
                        Properties = subnav_props.subnavRTEProps('lg');  
                        callback.multiloop(client,subnavRTE, Properties, 'lg'); 
                        client.source(() => {
                            console.log("---RTE Strong Properties -------");
                                  });
                        Properties = subnav_props. subnavRTEStrongProps('lg');  
                        callback.multiloop(client,subnavRTEStrong, Properties, 'lg');
                        client.source(() => {
                            console.log("---RTE link Properties -------");
                                  });
                        
                        Properties = subnav_props. subnavRTELinkProps('lg');  
                        callback.multiloop(client,subnavRTELink, Properties, 'lg');
                    }
                });
            }
        });
    }
    },

    
    "8. Checking SUBNAV Grid-Item Focus props ": function(client) {
        subnavGrid = pageObj.elements.subnavGrid.selector,
        subnavGridItemCount=pageObj.elements.subnavGridItemCount.selector,
        newFocus=pageObj.elements.newFocus.selector,  
        subnavHeadline=pageObj.elements.subnavHeadline.selector,        
    
        globalProps(client);
        if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice || client.options.desiredCapabilities.isSMDevice){
            client.elements('css selector',subnavGrid,results=>{
                if(results.value.length>0) {           
                    client.elements('css selector',subnavGridItemCount,results=>{                      
                       
                            let Elem=subnavGridItemCount+':nth-child(1)';                        
                            client.moveToElement(Elem, 10, 10, function(){
                            client.pause(1000);
                            client.mouseButtonDown(0);                                              
                            Properties = subnav_props.subnvGridFocusProps('lg');
                            callback.singleElem(client,newFocus, Properties, 'lg');
                                               
                            });
                
                           
                     });
                }
            });
    }
},             

 'Ending the session': function(client){
 // client.end();
 }
};
