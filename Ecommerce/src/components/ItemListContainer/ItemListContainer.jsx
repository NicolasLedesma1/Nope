
import "./ItemListContainer.module.css"
import PokemonApi from "../ItemList/ItemList"
const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <PokemonApi></PokemonApi>
    </div>
  );
};

export default ItemListContainer;
