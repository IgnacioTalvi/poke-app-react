import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard/PokemonCard.jsx";

const PokemonList = ({pokemon}) => {
  
  const paintData = () =>
    pokemon.map((item, index) => (
      <PokemonCard key={index} pokemon={item} />
    ));

  return <section className="pokemon-list-section">
    
    {paintData()}
    
</section>
};

export default PokemonList;

