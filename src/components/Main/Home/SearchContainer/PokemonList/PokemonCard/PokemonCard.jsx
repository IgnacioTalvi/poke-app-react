import React from "react";

const PokemonCard = ({ data }) => {
  const { height, weight} = data;
  return (<>
  <article>
  <p>Height: {height}</p>
  <p>Weight: {weight}</p>
  </article>
  </>
  )};

  export default PokemonCard;
