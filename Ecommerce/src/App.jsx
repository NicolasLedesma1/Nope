import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Fetch from "./components/ItemListContainer/Tarjeta";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Vos elegis el pokemon nosotros hacemos el cuadro !"} />
      <Fetch></Fetch>

    </>
  );
}

export default App;
