import React, { useEffect, useState} from 'react';
import CardPokemon from './Components/cardPokemon';

const Pokedex = () => {
const [pokemons, setPokemons] = useState([]);
const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

useEffect(() => {
  getPokemons();
}, [])
  
function getPokemons() {
  fetch(url)
  .then(response => response.json())
    .then(data => {
      setPokemons(data.pokemon)
    });
}

  return (
    <div style={{flex:1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>    
      {
        pokemons.length === 0 ? <h1>Carregando...</h1>  : 
        pokemons.map( pokemon => {
          return(
            <CardPokemon pokemon={pokemon} pokemonType={pokemon.type[0]} pokemonWeakness={pokemon.weaknesses[0]}/>
          )
        }) 
      }
    </div>
  );
}

export default Pokedex;