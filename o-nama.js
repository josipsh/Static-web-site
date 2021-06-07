var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navHeaderUl = document.getElementsByClassName('nav-header-ul')[0]

toggleButton.addEventListener('click', () => {
    navHeaderUl.classList.toggle('active')
    // navHeaderUl.style.display = 'none'
})
