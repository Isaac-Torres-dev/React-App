import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Check = ({ isLoading, setIsLoading }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  // Manejador de eventos para el checkbox
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    console.log("Valor del evento del check:", checked);
    console.log(
      "Valor del estado del hook check antes de actualizar:",
      isChecked
    );
    // setIsLoading(!isLoading);
  };
  // useEffect para observar cambios en isChecked
  useEffect(() => {
    console.log(
      "Valor del estado del hook check después de actualizar:",
      isChecked
    );
  }, [isChecked]);
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={handleCheckboxChange}
        /* Truco para saber que evento se esta ejecutando*/
        // onChange={(e) => console.log(e)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  );
};

export default Check;
