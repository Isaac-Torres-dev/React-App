// import Titulo from './components/Titulo'
// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

type Props = {
  array: string[]
}

function App(Props: Props) {
  const { array } = Props;
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("mostrando", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el parrafo de texto" />
      <List data={array} onSelect={handleSelect} />
      {/* <List data={array} onSelect={handleSelect2} /> */}
    </Card>
  );
}

export default App;
