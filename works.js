document.addEventListener('scroll', () => {
    let header = document.getElementById('navegation')
    let top = window.scrollY
    if (top > 1.5) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})