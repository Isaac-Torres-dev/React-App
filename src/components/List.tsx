// import { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (e: string, indice: number) => {
    setIndex(indice);
    onSelect?.(e); //Funcionalidad de TS donde si es que esta funcion se encuentra definida se ejecuta.
    console.log(`Elemento ${e} Indice ${indice}`);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, indice) => (
        <li
          onClick={() => handleClick(elemento, indice)}
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
