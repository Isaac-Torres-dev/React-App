import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function Buttom({ children, isLoading, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Buttom;
