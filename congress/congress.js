import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const senatorDiv = document.querySelector('.senatorsDiv')

function simplifiedSenators(){
    return senators.map(senator =>{
        const middleName = senator.middle_name ? ` ${senator.middle_name} ` : " "
        return{
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            party: senator.party,
            gender: senator.gender,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg"`,
            seniority: +senator.seniority,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct
        }
    })
}

// make a senator div to hold them all
const simpleSenators = simplifiedSenators()

function populateSenatorDiv(senatorArray){
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)

        // create Figure and image and figcaption elements
        // set the image src to senators imgURL
        //append them to the DOM
    });
}

populateSenatorDiv(simpleSenators);