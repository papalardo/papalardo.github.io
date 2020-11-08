import { DOMReady } from './helpers'
import { closeMenu } from './menu'
import { scroll, getElementOffsetTop } from './helpers/scrollTo'

let elements = {}

const applySmooth = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        elements[anchor.getAttribute('href')] = getElementOffsetTop(document.querySelector(anchor.getAttribute('href')))

        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            closeMenu()
            
            setTimeout(() => scroll(elements[this.getAttribute('href')], 500), 500)
        });
    });
}

DOMReady(function() {
    applySmooth()
})