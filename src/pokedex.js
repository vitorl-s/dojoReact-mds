import React, { useEffect, useState} from 'react';
import CardPokemon from './Components/cardPokemon';

const Pokedex = () => {
const [pokemons, setPokemons] = useState([]);

//Minha API
const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

useEffect(() => {
  getPokemons();
}, [])
  
function getPokemons() {

  //chamada da API, faz um get na URL
  fetch(url)
  .then(response => response.json()) // (response) => {}, melhora a formatação da API para json
    .then(data => { //pega todo o conteudo de json e envia para próxima função
      setPokemons(data.pokemon) // pega o array de pokemon
    });
}

  return ( // Tudo que está no return é em HTML
    <body style={{backgroundColor: 'blue'}}>
    <div style={{flex:1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', display: 'flex'}}>    
      {
        pokemons.length === 0 ? <h1>Carregando...</h1>  : 
        pokemons.map( pokemon => { // Vai iterar o array de pokemons e retornar cada objeto pokemon
          return(
            <CardPokemon pokemon={pokemon}/>
          )
        }) 
      }
    </div>
    </body>
  );
}

export default Pokedex;