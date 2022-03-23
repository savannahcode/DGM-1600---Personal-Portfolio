import { films } from '../data/films.js'

function getLastNumber(url){
    const secondToLastLetter = url[url.length -2]
    return secondToLastLetter
}


let filmList = document.querySelector('#filmList')

for (let i = 0; i < films.length; i++) {

// create element
let figure = document.createElement('figure')
let figImg = document.createElement('img')
let figCaption = document.createElement('figcaption')

// set img's source property to valid url
let filmNum = getLastNumber(films[i].url)
figImg.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

figCaption.textContent = films[i].title


// append newly created img element as a child of the main element to make it appear in the DOM
figure.appendChild(figImg)
figure.appendChild(figCaption)

filmList.appendChild(figure)
}
