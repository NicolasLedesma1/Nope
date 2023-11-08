import { useEffect, useState } from "react";
import {pokemonContainer} from "./ItemList.module.css";
import {pokemonCard} from "./ItemList.module.css";
import {pokemonImagen} from "./ItemList.module.css";
import {pokemonTitulo} from "./ItemList.module.css";
import ItemCount from "../ItemCount/ItemCount";

function Pokemon({id , nombre , imagen}) {
  return (
    <div className={pokemonCard}>
      <img src={imagen} alt={nombre} className={pokemonImagen}/>
      <p className={pokemonTitulo}>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
      <ItemCount  inicial={1} stock={10} onAdd={(cantidad) => console.log( 'cantidad agregada ', cantidad) } />
      <button> ver detalle </button>
    </div>
  );
}


function PokemonApi() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=60&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

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
    <section className={pokemonContainer}>
      {pokemones.map((pokemon) => <Pokemon key={pokemon.id}{...pokemon} />)}
    </section>
  );
}



export default PokemonApi;
