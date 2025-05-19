import React, { useState, useRef } from "react";
import PokemonCard from "./PokemonCard/PokemonCard.jsx";

const PokemonList = () => {
  
  const [pokemon, setPokemon] = useState([]);

  // const inputRef = useRef(""); // esta referencia será un string vacío al principio
  
  const paintData = () =>
    pokemon.map((item, index) => (
      <PokemonCard key={index} data={item} />
    ));

  return <section className="pokemon-list-section">
    <h4>Pokemon list</h4>
    {paintData()}

</section>
};

export default PokemonList;

