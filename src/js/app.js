import './form'

/* ---------------------------------------------- /*
* Typed init
/* ---------------------------------------------- */
import Typed from 'typed.js';
new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    loop: true,
    backDelay: 3000,
    backSpeed: 30,
});


/* ---------------------------------------------- /*
* Parallax init
/* ---------------------------------------------- */
import Parallax from 'parallax-js'
new Parallax(document.getElementById('scene'))

/* ---------------------------------------------- /*
* Particles init
/* ---------------------------------------------- */
// import Particles from './particles';
// import ParticlesConfig from './particles.config';
// window.onload = function() {
// 	Particles.init(ParticlesConfig);
// };

/* ---------------------------------------------- /*
* Ajuste viewHeight inicial
/* ---------------------------------------------- */
import { getVh } from './helpers'
const heroSectionEl = document.getElementById('section-initial')
const setHeightHeroSection = () => {
    heroSectionEl.style.height = getVh() + 'px'
}

setHeightHeroSection()

const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'customer';
if(mode == 'recruiter') {
    const elements = document.getElementsByClassName('recruiter-mode')
    Array.from(elements).forEach(element => {
        element.classList.remove('hidden')
    });
}
