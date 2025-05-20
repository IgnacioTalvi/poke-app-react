import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {

  const [value, setValue] = useState("charizard"); // Para guardar el dato a buscar
  const [pokemon, setPokemon] = useState([]); // Para guardar los pokemon
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        setPokemon(json);
      }catch(e){
        setPokemon([]) // No pintes nada 
      }
    }
    fetchData();
  }, [value]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };


  return <section className="search-form">
          <form onSubmit={handleSubmit}>
            <input name="topic"/>
            <button>Buscar</button>
          </form>
        </section>
};

export default Search;
