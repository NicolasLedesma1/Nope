import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Vos elegis el pokemon nosotros hacemos el cuadro !"} />

    </>
  );
}

export default App;
