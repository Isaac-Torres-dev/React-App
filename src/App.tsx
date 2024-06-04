// import Titulo from './components/Titulo'
// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  const list2: string[] = [];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("mostrando", elemento);
  };

  return (
    <Card>
      {/* {"" && "string vacio"} //short circuit operator
      {undefined && "indefinido"}
      {null && "nulo"}
      {false && "falso"}
      {0 && "Cero"} debemos evitar evaluar con cero*/}
      {list.length && "mi lista "}
      <br />
      {list2.length !== 0 && "mi lista 2"} {/* evitar hacer esto */}
      <br />
      {"Hola mundo" && "string Hola mundo"}
      <CardBody title="Hola Mundo" text="Este es el parrafo de texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
