// NAV BUTTONS
let navHome = document.getElementById('nav-home')
let navFavs = document.getElementById('nav-favs')
let navEdits = document.getElementById('nav-edits')
let navPride = document.getElementById('nav-pride')

// PAGES
let home = document.getElementById('home')
let favs = document.getElementById('favs')
let edits = document.getElementById('edits')
let pride = document.getElementById('pride')

navHome.addEventListener('click', () => {
    home.style.display = 'flex'
    favs.style.display = 'none'
    edits.style.display = 'none'
    pride.style.display = 'none'
})
navFavs.addEventListener('click', () => {
    home.style.display = 'none'
    favs.style.display = 'flex'
    edits.style.display = 'none'
    pride.style.display = 'none'
})
navEdits.addEventListener('click', () => {
    home.style.display = 'none'
    favs.style.display = 'none'
    edits.style.display = 'flex'
    pride.style.display = 'none'
})
navPride.addEventListener('click', () => {
    home.style.display = 'none'
    favs.style.display = 'none'
    edits.style.display = 'none'
    pride.style.display = 'flex'
})