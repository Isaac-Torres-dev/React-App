import Card from "./components/Card";
import List from "./components/List";
import Buttom from "./components/Buttom";
import { useState } from "react";
import CenteredCard from "./components/CenteredCard";

function App() {
  const [data, setData] = useState(["Goku", "Tanjiro", "Eren"]);

  const addMinium = () => setData([...data, "minium"]);
  const deleteMinium = () => setData(data.slice(0, -1));

  return (
    <CenteredCard>
      <Buttom onClick={addMinium}>Agregar</Buttom>
      <Buttom onClick={deleteMinium}>Eliminar</Buttom>
      <Card>
        <List data={data}></List>
      </Card>
    </CenteredCard>
  );
}

export default App;
