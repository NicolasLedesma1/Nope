import React from "react";
import { pokemonContainer } from "./ItemList.module.css";
import Pokemon from "../Item/Item";

function ItemList({ pokemones }) {
  return (
    <section className={pokemonContainer}>
      {pokemones.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </section>
  );
}

export default ItemList;
