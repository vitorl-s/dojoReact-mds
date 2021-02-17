import React, {useState} from 'react';

const CardPokemon = ({pokemon}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showType, setShowType] = useState(false);



/*
  function showType(pokemon){

    faz a mesa coisa que função acima ^^^^
  }
*/

  return (
    <div style={styles.container} onClick={() => setShowInfo(!showInfo)}>
        <h1>{pokemon.name}</h1>

        {
          <img src={pokemon.img} style={{width: 100, height: 100}} alt={pokemon.name} />
        }


        <div style={{marginTop: 10}}> 
          <button onClick={() => setShowType(!showType)} >
            Type
          </button>
        </div>


      {showType && 
        <div>
          {
            pokemon.type.map( tipo_do_pokemon => {

              return <h4>{tipo_do_pokemon}</h4>
              
            })
          }
        </div> 
        
        }
    </div>
  );


}

const Dbutton = () => {
  const onClick = () => console.log('clicked');

  return <div onClick={onClick}>Type</div>
}

const styles = {
    container: {
      backgroundColor: "lightblue",
      display: "flex",
      justifyContent: 'space-around',
      margin: 10,
      width: '30%',
      height: '30%',
      borderRadius: 10
    }
}

export default CardPokemon;