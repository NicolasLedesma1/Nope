import { pokemonCard } from "./Item.module.css";
import { pokemonImagen } from "./Item.module.css";
import { pokemonTitulo } from "./Item.module.css";


function Pokemon({ id, nombre, imagen }) {
  return (
    <div className={pokemonCard}>
      <img src={imagen} alt={nombre} className={pokemonImagen} />
      <p className={pokemonTitulo}>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
      <button> ver detalle </button>
    </div>
  );
}

export default Pokemon;
