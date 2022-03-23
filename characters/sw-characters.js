import { people } from '../data/people.js'

const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = "All Characters"
allCharsButton.addEventListener('click', function () {
    console.log('Thanks for clicking')
    populateDOM()
})

header.appendChild(allCharsButton)

function populateDOM(){
// loop through chars & make fig elenents & insert them in DOM
people.forEach((person) => {
    const personFig = document.createElement('figure')
    const personImg = document.createElement('img')

    let charNum = getLastNum(person.url)

    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const personCap = document.createElement('figcaption')
    personCap.textContent = person.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCap)
    main.appendChild(personFig)
});
}


function getLastNum(url){
    const secondToLastLetter = url[url.length -2]
    return secondToLastLetter
}