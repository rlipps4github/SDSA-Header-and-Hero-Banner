/******************************************
RESPONSIVE CONTAINER CLASSING

reduces excessive media queries for custom 
offset or off-grid placements by setting device data
*******************************************/

var responseTimer;

function customResponse(init) {
    // test for first run
    init = init || false;
    let timer = init ? 10 : 150
    clearTimeout(responseTimer);
    let deviceSize = ''
    // get lower breakpoints excluding padding
    const deviceArray = {tablet: 992, mobile: 600}
    // get all responsive containers
    const responsiveElements = document.querySelectorAll('[data-device]')
    switch (true) {
        case window.innerWidth > deviceArray['tablet']: 
            deviceSize = 'desktop'
            break
        case window.innerWidth > deviceArray['mobile']:
            deviceSize = 'tablet'
            break
        default:
            deviceSize = 'mobile'
    } 
    // nice long timeout for performance
    responseTimer = setTimeout( () =>  { 
        responsiveElements.forEach( (e) => { 
            e.setAttribute('data-device', deviceSize)
        })
    }, timer);
}

/******************************************
BACKGROUND IMAGES

operates on html class "backgrounded"
and applies direct child image source to it's parents background
*******************************************/

function backgrounder() {
    // find any elements with backgrounded classes
    const elems = document.querySelectorAll('[class*="backgrounded"]') 
    // loop through backgrounded elements
    elems.forEach((elem) => {
        // loop each elements children, find the image and add it to it's parents style as a background image
        let chdrn = elem.children
        for (x=0;x<chdrn.length;x++) {
            if (chdrn[x].tagName == 'IMG') elem.style['backgroundImage'] = 'url('+chdrn[x].src+')'
        }
    })
}