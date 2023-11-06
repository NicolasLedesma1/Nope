import ItemCount from "./ItemCount";
import "./ItemListContainer.module.css"
import PokemonApi from "./Tarjeta";
const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log( 'cantidad agregada ', cantidad)}/>
      <PokemonApi></PokemonApi>
    </div>
  );
};

export default ItemListContainer;
