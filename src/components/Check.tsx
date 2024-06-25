import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Check = ({ setIsLoading }: Props) => {
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
  };

  // useEffect para observar cambios en isChecked
  useEffect(() => {
    console.log(
      "Valor del estado del hook check después de actualizar:",
      isChecked
    );

    // Actualiza el estado isLoading en el componente padre basado en el nuevo valor de isChecked
    setIsLoading(isChecked);
  }, [isChecked, setIsLoading]);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={handleCheckboxChange}
        /* Truco para saber que evento se esta ejecutando */
        // onChange={(e) => console.log(e)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  );
};

export default Check;
