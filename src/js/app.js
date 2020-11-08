import './form'
import './menu'
import './linkSmooth'
import './iphoneRequestPermissions.js'
import './layout'
import './typed'

/* ---------------------------------------------- /*
* Particles init
/* ---------------------------------------------- */
// import Particles from './particles';
// import ParticlesConfig from './particles.config';
// window.onload = function() {
// 	Particles.init(ParticlesConfig);
// };

const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'customer';
if(mode == 'recruiter') {
    const elements = document.getElementsByClassName('recruiter-mode')
    Array.from(elements).forEach(element => {
        element.classList.remove('hidden')
    });
}
