import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard/PokemonCard.jsx";
import axios from "axios"

const PokemonList = () => {
  
const [value, setValue] = useState("Charizard"); // Para guardar el dato a buscar
const [pokemon, setPokemon] = useState([]);
  
useEffect(() => {
  async function fetchData() {
    try{
      // Petición HTTP
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
      const json = res.data;

      // Guarda en el array de posts el resultado. Procesa los datos
      setPokemon(prev => [...prev, json]);    
    } catch(e){
      setPokemon(pokemon) 
    }
  }
  fetchData();
}, [value]); // componentDidUpdate
  // const inputRef = useRef(""); // esta referencia será un string vacío al principio
  
  const paintData = () =>
    pokemon.map((item, index) => (
      <PokemonCard key={index} pokemon={item} />
    ));

    const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.topic.value)
      setValue(e.target.topic.value) // Modificando el estado de Value
    };
    

  return <section className="pokemon-list-section">
    
    <h4>Pokemon list</h4>
    <form onSubmit={handleSubmit}>
            <input name="topic"/>
            <button>Buscar</button>
          </form>
    
    {paintData()}
    
</section>
};

export default PokemonList;

