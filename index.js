const URL = 'https://pokeapi.co/api/v2/pokemon/';
const searchInput = document.getElementById('search');
const pokedexContainer = document.getElementById('pokemon-info');

const searchPokemon = async () => {
    const searchedPokemon = searchInput.value.toLowerCase();
    try {
        const response = await fetch(URL + searchedPokemon);
        if (!response.ok) {
            showError('The pokemon does not exist!!');
            return;
        }
        const data = await response.json();

        pokedexContainer.innerHTML =
            `
            <img src='${data.sprites.front_default}' id='photo-pokemon'>
            <div id='data-container'>
            <h2>${data.name}</h2>
                <p>number: ${data.id}</p>
                <p>height: ${data.height / 10}m</p>
                <p>weight: ${data.weight / 10}kg</p>
            </div>
            `;
    } catch (error) {
        console.error(error);
    }
}

const showError = (msj) =>{
    pokedexContainer.innerHTML = `<p>${msj}</p>`;
}

document.getElementById('btn-search').addEventListener('click', searchPokemon);