import {pokemonCard} from "./Item.module.css";
import {pokemonImagen} from "./Item.module.css";
import {pokemonTitulo} from "./Item.module.css";
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
  
export default Pokemon



