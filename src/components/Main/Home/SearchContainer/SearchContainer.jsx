import React, { useState, useRef } from "react";
import PokemonList from "./PokemonList/PokemonList.jsx";
import Search from "./Search/Search.jsx";

const SearchContainer = () => {
 
const [value, setValue] = useState("charizard"); // Para guardar el dato a buscar
const [pokemon, setPokemon] = useState([]); // Para guardar los pokemon

// const inputRef = useRef(""); // esta referencia será un string vacío al principio

  return (
    <section className="search-container-section">
      <Search value={value} setPokemon={setPokemon} setValue={setValue} />
      <PokemonList pokemon={pokemon}  />
    </section>
  );
};

export default SearchContainer;
