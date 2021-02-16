import React, {useState} from 'react';

const CardPokemon = ({pokemon}) => {
  const [showInfo, setShowInfo] = useState(false); 
  return (
    <div style={styles.container} onClick={() => setShowInfo(!showInfo)}>
        <h1>{pokemon.name}</h1>
        {
          <img src={pokemon.img} style={{width: 100, height: 100}} alt={pokemon.name} />
        }
    </div>
  );
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