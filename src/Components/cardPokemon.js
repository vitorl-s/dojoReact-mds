import React, { useState, useEffect } from 'react';

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

    switch(a){

      case 'grass':
        setShowColor("#7FFF00")
        break;

      case 'Poison':
        setShowColor("#8A2BE2")
        break;

      case 'Flying':
        setShowColor("F0F8FF")
        break;

      case 'Fire':
        setShowColor("#DC143C")
        break;

      case 'Ice':
        setShowColor("#00BFFF")
        break;

      case 'Pychic':
        setShowColor("#FF1493")
        break;

      case 'Water':
        setShowColor("#1E90FF")
        break;

      case 'Electric':
        setShowColor("#FFD700")
        break;

      case 'Bug':
        setShowColor("#F0E68C")
        break;

      case 'Rock':
        setShowColor("#808080")
        break;

      case 'Normal':
        setShowColor("#D2691E")
        break;

      case 'Ground':
        setShowColor("#DEB887")
        break;

      case 'Fighting':
        setShowColor("#A52A2A")
        break;

      case 'Dragon':
        setShowColor("00008B")
        break;

      case 'Ghost':
        setShowColor("#7B68EE")
        break;

      case 'Dark':
        setShowColor("#000000")
        break;

      default:
        setShowColor("lightblue")
        break;

      
    }


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

const Dbutton = () => {
  const onClick = () => console.log('clicked');

  return <div onClick={onClick}>Type</div>
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