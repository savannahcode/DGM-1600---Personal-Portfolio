import { starships } from "../data/starships.js";
import { getLastNum, removeChildren } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipViewer = document.querySelector('.shipViewer')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const shipMessage = document.querySelector('.shipMessage')

closeButton.addEventListener('click', () => {
    modal.classList.toggle("is-active")
})

function populateNav(){
    starships.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        const listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.addEventListener('click', () => populateShipView(starship))
        anchorWrap.appendChild(listItem)

        navList.appendChild(anchorWrap)
    })
} 

populateNav()

function populateShipView(shipData){
    removeChildren(shipViewer)
    const shipFigure = document.createElement('figure')
    const shipImage = document.createElement('img')
    const shipCaption = document.createElement('figcaption')

    let shipNum = getLastNum(shipData.url)
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipCaption.textContent = shipData.name

    //checks for error, creates modal
    shipImage.addEventListener('error', () => {
        console.log("We got an error!")
        shipImage.hidden = true
        modal.classList.toggle('is-active')
        shipMessage.textContent = `The ship known as "${shipData.name}" is in space port for repairs.`
    })

    shipViewer.appendChild(shipFigure)
    shipFigure.appendChild(shipImage)
    shipFigure.appendChild(shipCaption)
}

/* 
add figcaption for ship images that pop up
add border around ship image
add star wars cursor
charge header to look cuter and have some padding
*/

