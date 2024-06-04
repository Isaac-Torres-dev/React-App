// import Titulo from './components/Titulo'
// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ['Goku','Tanjiro','Eren']
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el parrafo de texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
