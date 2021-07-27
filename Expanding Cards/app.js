const divs = document.querySelectorAll('.panel')

divs.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    divs.forEach(panel => {
        panel.classList.remove('active')
    })
}