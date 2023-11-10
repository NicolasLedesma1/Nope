import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Vos elegis el pokemon nosotros hacemos el cuadro !"} />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
