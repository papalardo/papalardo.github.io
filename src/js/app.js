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
