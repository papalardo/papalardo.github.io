import { DOMReady } from './helpers'
import { closeMenu } from './menu'

const applySmooth = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            closeMenu()

            setTimeout(() => {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500)
        });
    });
}

DOMReady(function() {
    applySmooth()
})