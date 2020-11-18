import Parallax from 'parallax-js'

window.Parallax = Parallax;

const element = document.getElementById('scene')

export const init = () => {
    Array.from(document.getElementsByClassName('parallax-scene'))
        .forEach(element => {
            new Parallax(element)
        })
        
}

init()