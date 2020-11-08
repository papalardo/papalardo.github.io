export const scroll = function(to, duration) {
    const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    },
    animateScroll = function() {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
    };
    animateScroll();
}

export const getElementOffsetTop = (element) => {
    let scrollTop = window.pageYOffset || element.scrollTop

    // Furthermore, if you have for example a header outside the iframe 
    // you need to factor in its dimensions when calculating the position to scroll to
    // const headerOutsideIframe = document.getElementsByClassName('myHeader')[0].clientHeight
    const headerOutsideIframe = 0

    return element.getBoundingClientRect().top + scrollTop + headerOutsideIframe
}