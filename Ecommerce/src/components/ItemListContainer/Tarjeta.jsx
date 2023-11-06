import { useEffect, useState } from "react";
import './Tarjeta.module.css';

function Pokemon({id , nombre , imagen}) {
  return (
    <div className="pokemon-card" key={id}>
      <img src={imagen} alt={nombre} className="pokemon-imagen"/>
      <p className='pokemon-titulo'>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
    </div>
  );
}
function PokemonApi() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
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
    <section className="pokemon-container">
      <h2>elegir</h2>
      {pokemones.map((pokemon) => <Pokemon {...pokemon} />)}
    </section>
  );
}

export default PokemonApi;
