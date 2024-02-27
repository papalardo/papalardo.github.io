import './form'
import './menu'
import './linkSmooth'
import './iphoneRequestPermissions.js'
import './layout'
import './typed'
import './loadcss'
import './noise'
import './alpine'


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
    document.documentElement.style.setProperty('--recruiter-mode-display', 'block');
}
