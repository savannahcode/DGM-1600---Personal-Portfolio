import { starships } from "../data/starships.js";
import { getLastNum, removeChildren } from "../utils/index.js"

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipViewer = document.querySelector('.shipViewer')

const modal = document.querySelector('.modal')

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
    const shipImage = document.createElement('img')
    let shipNum = getLastNum(shipData.url)
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    
    shipImage.addEventListener('error', () => {
        console.log("We got an error!")
        shipImage.hidden = true
        modal.classList.add('is-active')
    })

    shipViewer.appendChild(shipImage)
}

