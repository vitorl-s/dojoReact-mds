import React, { useState, useEffect } from 'react';

const colorType = {
  Grass: '#51b6aa',
  Fire: '#e26768',
  Electric: '#f0c44b',
  Water: '#6890F0',
  Bug: '#A7DB8D',
  Normal: '#C6C6A7',
  Ice: '#94bcc7',
  Dragon: '#7038F8',
  Ground: '#E0C068',
  Fairy: '#EE99AC',
  Steel: '#B8B8D0',
  Psychic: '#A13959',
  Poison: '#A040A0',
  Fighting: '#EBD69D',
  Rock: '#927D44',
  Ghost: '#493963'
};

const CardPokemon = ({ pokemon }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showColor, setShowColor] = useState("lightblue");



  /*
    function showType(pokemon){
  
      faz a mesa coisa que função acima ^^^^
    }
  */

  useEffect(() => {

    var a = pokemon.type[0]

    setShowColor(colorType[a])


  }, [])

  return (

    <div style={{...styles.container, backgroundColor: showColor}} onClick={() => setShowType(!showType)}>
      <h1 style={{color: 'black'}}>{pokemon.name}</h1>



      {showType &&
        <div>
          {
            pokemon.type.map(tipo_do_pokemon => {

              return <h4 style={{color: '#00008B'}}>{tipo_do_pokemon}</h4>

            })
          }
        </div>

      }

      <img src={pokemon.img} style={{ width: 100, height: 100 }} alt={pokemon.name} />

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