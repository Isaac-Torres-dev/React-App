// import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: string, indice: number) => {
    console.log(`Elemento ${e} Indice ${indice}`);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, indice) => (
        <li
          onClick={() => handleClick(elemento, indice)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
