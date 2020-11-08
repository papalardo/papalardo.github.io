import { DOMReady } from './helpers'
import { closeMenu } from './menu'
import { scroll, getElementOffsetTop } from './helpers/scrollTo'

const applySmooth = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            closeMenu()
            
            setTimeout(() => scroll(
                getElementOffsetTop(document.querySelector(anchor.getAttribute('href')))
            , 500), 500)
        });
    });
}

DOMReady(function() {
    applySmooth()
})