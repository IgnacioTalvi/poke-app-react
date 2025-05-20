import React, { useState, useRef } from "react";
import PokemonList from "./PokemonList/PokemonList.jsx";
import Search from "./Search/Search.jsx";

const SearchContainer = () => {
 
  // const [value, setValue] = useState("charizard"); // Para guardar el dato a buscar
  
  // Estado inicial del array de pokemons
  // const [pokemon, setPokemon] = useState([]); // Para guardar los pokemon

  // // Estado inicial del formulario
  // const [values, setValues] = useState({
  //   title: "",
  //   description: "",
  //   price: 0,
  //   img_url: ""
  // });

  const inputRef = useRef(""); // esta referencia será un string vacío al principio

  // const paintData = () =>
  //   items.map((item, index) => (
  //     <PokemonList key={index} data={item} remove={() => removeItem(index)} />
  //   ));

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section className="search-container-section">
      {/* <Search /> */}
      <PokemonList />
    </section>
  );
};

export default SearchContainer;
