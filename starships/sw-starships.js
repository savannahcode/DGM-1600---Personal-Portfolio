import { starships } from "../data/starships";

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipViewer')

function populateNav(){
    starships.forEach((starship) => {
        const listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.addEventListener('click', () => populateShipView(starship))

        navList.appendChild(listItem)
    })
} 

function populateShipView(){
    console.log('Thanks for clicking on...', shipData.name)
}