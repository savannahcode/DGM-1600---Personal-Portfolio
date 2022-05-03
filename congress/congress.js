import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";

const allCongressMembers = [...senators, ...representatives] //modern way to combine arrays

const senatorDiv = document.querySelector(".senatorsDiv");
const seniorityHeading = document.querySelector(".seniority");
const loyaltyList = document.querySelector(".loyaltyList");

function simplifiedSenators() {
  return senators.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      gender: senator.gender,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    };
  });
}

// make a senator div to hold them all
const simpleSenators = simplifiedSenators();

function populateSenatorDiv(senatorArray) {
  simpleSenators.forEach((senator) => {
    const senFigure = document.createElement("figure");
    const figImg = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    figImg.src = senator.imgURL;
    figCaption.textContent = senator.name;

    senFigure.style.setProperty('background', getPartyColor(senator.party))


    senFigure.appendChild(figImg);
    senFigure.appendChild(figCaption);
    senatorDiv.appendChild(senFigure);

    // create Figure and image and figcaption elements
    // set the image src to senators imgURL
    //append them to the DOM
  });
}

populateSenatorDiv(simpleSenators);

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator;
});

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) =>
  acc.missedVotesPct > senator.missedVotesPct ? acc : senator
);

const biggestVacationerList = simplifiedSenators().filter(
    (senator) => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct
  ).map(senator => senator.name).join(' and ')

seniorityHeading.textContent = `The most senior member of the senate is ${mostSeniorMember.name} and the biggest vacationers are ${biggestVacationerList}`;

const loyaltyListHeader = document.querySelector("h3.loyaltyListHeader");
loyaltyListHeader.textContent = "When voting, these senators are most loyal to their political party:"
 
simplifiedSenators().forEach(senator => {
  if(senator.loyaltyPct === 100) {
    let listItem = document.createElement('li')
    listItem.textContent = senator.name
    loyaltyList.appendChild(listItem)
  }
})


function getPartyColor(senatorsParty){
  let color 
  switch (senatorsParty){
    case 'R':
      color = '#D2042D'
      break
    case 'D':
      color = '#00008b'
      break
    default:
        color = '#888888'
  }
  return color
}