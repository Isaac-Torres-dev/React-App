// import Titulo from './components/Titulo'
// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Buttom from "./components/Buttom";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["Goku", "Tanjiro", "Eren"];
  const list2: string[] = ["Ranma", "Purpura"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("mostrando", elemento);
  };

  const contenido =
    list2.length || list.length ? (
      <>
        <List data={list} onSelect={handleSelect} />
        <List data={list2} onSelect={handleSelect2} />
      </>
    ) : (
      "Sin elementos para mostrar"
    );

  return (
    <Card>
      <CardBody title="Components" text="Este es el parrafo de texto" />
      {contenido}
      <Buttom isLoading={isLoading} onClick={handleClick}>
        Texto del botón
      </Buttom>
    </Card>
  );
}

export default App;
