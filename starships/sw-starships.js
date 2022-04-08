import { starships } from "../data/starships.js";

console.log("Is this working??")
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.shipViewer')

function populateNav(){
    starships.forEach((starship) => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        const listItem = document.createElement('li')
        listItem.textContent = starship.name

        anchorWrap.addEventListener('click', () => populateShipView(starship))

        navList.appendChild(listItem)
    })
} 

function populateShipView(){
    console.log('Thanks for clicking on...', shipData.name)
}

populateNav()