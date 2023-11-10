import "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = ({ greeting }) => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"
      );
      const ItemList = await response.json();
      const { results } = ItemList;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          nombre: poke.name,
          imagen: poke.sprites.other.dream_world.front_default,
        };
      });
      setPokemones(await Promise.all(newPokemones));
    };
    getPokemon();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList pokemones={pokemones} />
      <ItemDetailContainer/>

    </div>
  );
};

export default ItemListContainer;
