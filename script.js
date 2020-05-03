const hero = document.querySelector('.hero');
const slider1 = document.querySelector('.cool-slider');
const logo = document.querySelector('#logo');
const heroImg = document.querySelector('img');
const headline = document.querySelector('.headline');
const scroll = document.querySelector('#scrollMouse');


const tl = new TimelineMax();
tl.fromTo(hero, 1.3, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: '100%' }, { width: "80%", ease: Power2.easeInOut })


    .fromTo(slider1, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")


    .fromTo(headline, 2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
    .fromTo(heroImg, 2, { filter: "brightness(100%)" }, { filter: "brightness(20%)" })
    .fromTo(headline, 2, { top: "50%" }, { top: "70%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(scroll, 2, { width: "0px" }, { width: "100px" }, "-=1.2")
    .fromTo(scroll, 2, { height: "0px" }, { height: "100px" }, "-=1.2");



const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.test',
    triggerHook: 0.5,
    offset: -200,
})
    .setClassToggle(".test", "show")
    .addTo(controller);



const scene2 = new ScrollMagic.Scene({
    triggerElement: '.block-steve',

})
    .setClassToggle(".block-steve", "change")
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.secondBlock',
    offset: -200,
})
    .setClassToggle(".secondBlock", "afterChange")
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.thirdBlock',
    offset: -200,
})
    .setClassToggle(".thirdBlock", "afterThisChange")
    .addTo(controller);


const scene5 = new ScrollMagic.Scene({
    triggerElement: '.fourthBlock',
})
    .setClassToggle(".fourthBlock", "afterAnimate")
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
    triggerElement: '.cool-text',
})
    .setClassToggle(".cool-text", "main")
    .addTo(controller);


