import React from "react";


const PokemonCard = ({ pokemon }) => {
  const {sprites, name, height, weight} = pokemon;
  console.log(pokemon);
  
  return (<>
  <article className="card-container">
    <img src={sprites.front_default} alt="pokemon" />
    <p>Name: {name} </p>
    <p>Height: {height} </p>
    <p>Weight: {weight} </p>
  </article>
  </>
  )};

  export default PokemonCard;
