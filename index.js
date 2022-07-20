const toggleBtn = document.getElementsByClassName('navbar-toggle')[0]

const navLinks = document.getElementsByClassName('nav-links')

toggleBtn.addEventListener('click', () => {
    for(var i=0; i<navLinks.length; i++) {
        navLinks[i].classList.toggle('active')
    }
})