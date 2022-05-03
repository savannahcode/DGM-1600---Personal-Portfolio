import { films } from '../data/films.js'

function getLastNumber(url){
    const secondToLastLetter = url[url.length -2]
    return secondToLastLetter
}


let filmList = document.querySelector('#filmList')

for (let i = 0; i < films.length; i++) {

// create elements
let figure = document.createElement('figure')
let figImg = document.createElement('img')
let figCaption = document.createElement('figcaption')
let movieName = document.createElement('figcaption')
let releaseDate = document.createElement('p')
let epidsodeID = document.createElement('p')


// set img's source property to valid url
let filmNum = getLastNumber(films[i].url)
figImg.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

movieName.textContent = films[i].title
releaseDate.textContent = films[i].release_date
epidsodeID.textContent = " Episode " + films[i].episode_id

// modal javascript
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')
const movieInfo = document.querySelector('.shipMessage')

closeButton.addEventListener('click', () => {
    modal.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    modal.classList.toggle("is-active")
})

figure.addEventListener('click', () => {
    console.log("Modal should show!")
    modal.classList.toggle('is-active')
    movieInfo.textContent = `Movie Information: Characters, Location, Synopsis`
})


// append newly created img element as a child of the main element to make it appear in the DOM
figure.appendChild(figImg)
figure.appendChild(figCaption)
figCaption.appendChild(movieName)
figCaption.appendChild(releaseDate)
figCaption.appendChild(epidsodeID)


filmList.appendChild(figure)
}

figure.addEventListener('click', () => {
    modal.classList.toggle("is-active")
})


