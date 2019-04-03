/******************************************
RESPONSIVE CONTAINER CLASSING

simplifies styling for custom offset or 
off-grid placements
*******************************************/

function customResponse() {
    // get lower breakpoints excluding padding
    let deviceArray = {tablet: 992, mobile: 600}
    // get all responsive containers
    let responsiveElements = document.querySelectorAll('[data-device]')
    responsiveElements.forEach( (e) => { 
        let thisWidth = e.offsetWidth
        switch (true) {
            case thisWidth > deviceArray['tablet']: 
                e.setAttribute('data-device', 'desktop')
                break
            case thisWidth > deviceArray['mobile']:
                e.setAttribute('data-device', 'tablet')
                break
            default:
                e.setAttribute('data-device', 'mobile')
        } 
    })
}


/******************************************
BACKGROUND IMAGES

operates on html class "backgrounded-*"
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


/******************************************
MOBILE NAV

enable toggle with nav button
*******************************************/

function mobileNav() {
    // declare button and nav elements
    const nav_btn = document.getElementById('navigation').getElementsByTagName('button')[0]
    const nav_menu = document.getElementById('navigation').getElementsByTagName('nav')[0]
    // toggle active state on click
    nav_btn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            // remove if present
            this.classList.remove('active');
            nav_menu.classList.remove('active');
        } else {
            // else add
            this.classList.add('active');
            nav_menu.classList.add('active');
        }
    })
}


/******************************************
    
        INIT

*******************************************/

function initTheme() {
    backgrounder()
    customResponse()
    mobileNav()
    document.body.setAttribute('data-loaded','true')
}

