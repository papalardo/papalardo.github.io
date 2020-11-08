import { mobileCheck } from './helpers'
import Tilt from 'vanilla-tilt'

let menuOpened = false;

const menuHamburger = document.getElementsByClassName('hamburger-menu')[0]
const menuWrapper = document.getElementsByClassName('menu-wrapper')[0]
const body = document.getElementsByTagName('body')[0]

export const openMenu = () => {
    menuOpened = true;

    menuHamburger.classList.add("open");
    menuWrapper.classList.add('open');
}

export const closeMenu = () => {
    menuOpened = false;

    menuHamburger.classList.remove("open");
    menuWrapper.classList.remove('open');
}

menuHamburger.addEventListener('click', function(event) {
    menuOpened ? closeMenu() : openMenu();
});


if(! mobileCheck()) {
    Tilt.init(document.querySelector('.ham-tilt'), {
        glare: false,
        perspective: 1000,
        maxTilt: 50,
        scale: 1.2,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    })
}