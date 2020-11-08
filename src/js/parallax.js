import Parallax from 'parallax-js'

const element = document.getElementById('scene')

export const init = () => {
    new Parallax(element)
}

init()