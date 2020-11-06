module.exports = {
  // normal options
  selector: '.background',
  // maxParticles: 100,
  // options for breakpoints
  responsive: [
    {
      breakpoint: 5000,
      options: {
        maxParticles: 70,
        color: '#4a4a4a',
        connectParticles: true
      }
    },
    {
      breakpoint: 768,
      options: {
        maxParticles: 50,
        color: '#4a4a4a',
        connectParticles: true
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 40,
        color: '#4a4a4a',
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        color: '#4a4a4a',
        maxParticles: 0
  
// disables particles.js
      }
    }
  ]
}