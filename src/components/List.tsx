// import { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1); // Solo cuando usemos el setIndex es cuando la funcion de List completa se ejecuta y react renderiza de nuevo
  const handleClick = (event: string, indice: number) => { // 
    setIndex(indice);
    onSelect?.(event); //Funcionalidad de TS donde si es que esta funcion se encuentra definida se ejecuta.
    console.log(`Elemento ${event} Indice ${indice}`);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, indice) => (
        <li
          onClick={() => handleClick(elemento, indice)} // onClick es una propiedad de html, las props como esta siempre reciben un evento que a su vez en un objeto
          key={elemento}
          className={`list-group-item ${index == indice ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
