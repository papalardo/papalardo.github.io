import 'alpinejs'

import Parallax from 'parallax-js'

window.vm = {
    portfolio: () => {
        return {
            works: [
                {
                    title: 'Café biônico',
                    href: 'http://cafebionico.b-on-nutricao.com.br',
                    image: '/images/portifolio/b-on-cafebionico.jpg',
                    skills: [ 'laravel', 'postgresql', 'rdstation', 'integration', 'cms', 'livewire', 'alpinejs', 'seo optimization' ]
                },
                { 
                    title: 'Guia de instrumentos', 
                    href: 'http://guia.abdi.com.br',
                    image: '/images/portifolio/abdi-guia.jpg',
                    skills: [ 'laravel', 'vuejs', 'postgresql', 'api', 'integration', 'cms' ]
                },
                { 
                    title: 'Brasil Mais', 
                    href: 'https://brasilmais.economia.gov.br',
                    image: '/images/portifolio/abdi-brasil-mais.jpg',
                    skills: [ 'laravel',  'modules',  'postgresql',  'api',  'integration',  'cms',  'sso',  'keycloak' ]
                },
                { 
                    title: 'ABDI Institucional', 
                    href: 'http://abdi.com.br',
                    image: '/images/portifolio/abdi.jpg',
                    skills: [ 'vuejs',  'nuxtjs',  'laravel',  'postgresql',  'api',  'integration',  'cms' ]
                },
                { 
                    title: 'Startup Industria', 
                    href: 'http://startupindustria.com.br',
                    image: '/images/portifolio/abdi-startup-industria.jpg',
                    skills: [ 'vuejs',  'laravel',  'postgresql',  'pagebuilder',  'cms' ]
                },
                { 
                    title: 'Indústria 4.0', 
                    href: 'https://www.industria40.abdi.com.br',
                    image: '/images/portifolio/abdi-industria-40.jpg',
                    skills: [ 'vuejs' ,  'firebase' ,  'firebase functions' ]
                },
                { 
                    title: 'Provalab', 
                    href: 'http://provalab.abdi.com.br',
                    image: '/images/portifolio/abdi-provalab.jpg',
                    skills: [ 'vuejs', 'laravel', 'api', 'cms' ]
                },
            ],
            mounted() {
                setTimeout(() => {
                    Array.from(document.getElementsByClassName('parallax-scene-portfolio'))
                    .forEach(element => new Parallax(element))
                }, 1)
                
            }
        }
    }
}