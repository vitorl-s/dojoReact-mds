import React from 'react';
import Tipo from './Tipo';


const cardPokemon = ( {pokemon} ) => {
    let color;
    
    switch(pokemon.type[0]) {
        case "Fire":
            color = "#f08030";
            break;
        case "Grass":
            color = "#2dcd45";
            break;
        case "Water":
            color = "#149eff";
            break;
        case "Flying":
            color = "#a890f0";
            break;
        case "Bug":
            color = "#a8b820";
            break;
        case "Poison":
            color = "#883688";
            break;
        case "Normal":
            color = "#a8a878";
            break;
        case "Electric":
            color = "#f8d030";
            break;
        case "Ground":
            color = "#e0c068";
            break;
        case "Fairy":
            color = "#ee99ac";
            break;
        case "Fighting":
            color = "#94352d";
            break;
        case "Psychic":
            color = "#ff6996";
            break;
        case "Steel":
            color = "#b8b8d0";
            break;
        case "Ice":
            color = "#98d8d8";
            break;
        case "Ghost":
            color = "#614c83";
            break;
        case "Dragon":
            color = "#700aee";
            break;
        case "Rock":
            color = "#b8a038";
    }

    const styles = {
        container: {
            backgroundColor: color,
            display: "flex",
            justifyContent: 'space-around',
            margin: 10,
            width: '32%',
            height: '32%',
            borderRadius: 10
        },

        imgStyle: {
            width: 100,
            height: 100,
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={{height: "100%"}}>{pokemon.name}</h2>
            <Tipo tipoPokemon={pokemon.type}></Tipo>
            <img src={pokemon.img} style={styles.imgStyle} alt={pokemon.name}></img>
        </div>
    )
}

export default cardPokemon;
