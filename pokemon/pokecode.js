

const getAPIData = async (url) => {
    try{
        const result = await fetch(url)
        return await result.json()
    } catch(error) {
    console.error(error);
    }
}

async function loadPokemon(offset = 0, limit = 25){
    const pokeData = await getAPIData(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const pokeResults = pokeData.results // this should be an array of name and url key/value pairs
    for ( const nameAndURL of pokeResults){
        const pokemon = await getAPIData(nameAndURL.url)
        populatePokeCard(pokemon)
    }
}

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
    

    pokeCard.appendChild(populateCardFront(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon){
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace'
    const pokeImg = document.createElement('img')
    pokeImg.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    const pokeCaption = document.createElement('figCaption')
    pokeCaption.textContent = pokemon.name

    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}

function populateCardBack(pokemon){

}

loadPokemon()