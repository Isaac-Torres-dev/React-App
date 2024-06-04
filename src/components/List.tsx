// import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  let index = 1;
  const handleClick = (e: string, indice: number) => {
    index = indice;
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
