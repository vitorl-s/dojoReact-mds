import React from 'react';

const Tipo = ({tipoPokemon}) => {
    
    return (
        tipoPokemon.map(tipo => {
            return (
                <p style={styles.container}>{tipo}</p>
            )
        })
    )
} 

const styles = {
    container: {
        border: "1px solid",
        textAlign: "center",
        height: "5%",
        width: "8%", 
        padding: "3px", 
        height:"100%", 
        position: "relative", 
        top: "48px", 
        right: "92px",
    }
}

export default Tipo;