// import { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (e: string, indice: number) => {
    setIndex(indice);
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
