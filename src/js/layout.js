import { getVh, DOMReady } from './helpers'

const heroSectionEl = document.getElementById('home')

DOMReady(function() {
    const setHeightHeroSection = () => {
        heroSectionEl.style.height = getVh() + 'px'
    }
    setHeightHeroSection()
})
