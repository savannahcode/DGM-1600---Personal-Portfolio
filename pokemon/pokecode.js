

const getAPIData = async (url) => {
    try{
        const result = await fetch(url)
        return await result.json()
    } catch(error) {
    console.error(error);
    }
}

async function loadPokemon(){
    const pokeData = await getAPIData(`https://pokeapi.co/api/v2/pokemon/snorlax`)
    populatepokeGrid(pokeData)
}

loadPokemon();

function populatepokeGrid(pokemonArray) {
    //loop through all of the pokemon and create induvidual pokeCards
    populatePokeCard(pokemon)
}

function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
}