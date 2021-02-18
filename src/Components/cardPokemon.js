import React, {useState, useEffect} from 'react';

const CardPokemon = ({pokemon, pokemonType, pokemonWeaknesses}) => { 
  const [backgroundColor, setBackgroundColor] = useState('lightblue');
  const [pokemonInfo, setPokemonInfo] = useState(true);
  //var pokemonInfo = pokemon.type[0];


  useEffect(() => {
    switch (pokemon.type[0]) {
      case 'Normal':
        setBackgroundColor( '#C6C6A7')
        break;
      case 'Fighting':
        setBackgroundColor('#EBD69D')
        break;
      case 'Flying':
        setBackgroundColor('white')
        break;
      case 'Poison':
        setBackgroundColor('#A040A0')
        break;
      case 'Ground':
        setBackgroundColor('#E0C068')
        break;
      case 'Rock':
        setBackgroundColor('#927D44')
        break;
      case 'Bug':
        setBackgroundColor('#A7DB8D')
        break;
      case 'Ghost':
        setBackgroundColor( '#493963')
        break;
      case 'Steel':
        setBackgroundColor( '#B8B8D0')
        break;
      case 'Fire':
        setBackgroundColor( '#e26768')
        break;
      case 'Water':
        setBackgroundColor('#6890F0')
        break;
      case 'Grass':
        setBackgroundColor('#51b6aa')
        break;
      case 'Electric':
        setBackgroundColor( '#f0c44b')
        break;
      case 'Psychic':
        setBackgroundColor('#A13959')
        break;
      case 'Ice':
        setBackgroundColor('#94bcc7')
        break;
      case 'Dragon':
        setBackgroundColor('#7038F8')
        break;
      case 'Fairy':
        setBackgroundColor( '#EE99AC')
        break;
      case 'Dark':
        setBackgroundColor('black')
        break;
      default:
        setBackgroundColor('lightblue')
    }

    
  }, [])

  // function changeInfo(pokemonInfo){
  //   // pokemonInfo === pokemonType ? pokemonWeaknesses : pokemonType
  //   if(pokemonInfo === pokemon.type[0]){
  //     pokemonInfo = pokemon.weaknesses[0]
  //     console.log('weak')
  //     console.log(pokemonInfo)
  //   }
  //   else {
  //     pokemonInfo = pokemon.type[0]
  //     console.log('type')
  //     console.log(pokemonInfo)
  //   }
  //   return pokemonInfo;
  // }

  return (
    <div style={{...styles.container, backgroundColor: backgroundColor}} onClick={() => setPokemonInfo(!pokemonInfo)}>
        <h1>{pokemon.name}</h1>
        {pokemonInfo ? <h4>{'Type:'}</h4>
        : <h4>{'Weakness:'}</h4>}
        {pokemonInfo ? <h4>{pokemon.type[0]}</h4>
        : <h4>{pokemon.weaknesses[0]}</h4>}
        {
          <img src={pokemon.img} style={{width: 100, height: 100}} alt={pokemon.name} />
        }
    </div>
  );
}

const styles = {
    container: {
      display: "flex",
      justifyContent: 'space-around',
      margin: 10,
      width: '30%',
      height: '30%',
      borderRadius: 10
    }
}

export default CardPokemon;