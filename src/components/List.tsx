import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, indice) => (
        <li onClick={handleClick} key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
