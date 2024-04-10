import { useState } from "react";
import { cn } from "../lib/utils";

export function BotonCardColor(props) {
  const { className, ...rest } = props;
  const [seleccion, setSeleccion] = useState(false);

  const manejarEleccion = () => {
    setSeleccion(!seleccion);

    setSeleccion(false);
  };

  return (
    <button
      className={cn(
        `w-10 md:w-11 h-11 md:rounded-full border-4 border-gray-200 md:m-1 
      hover:border-white ${className}`,
        {
          "border-white": seleccion,
        }
      )}
      onClick={manejarEleccion}
      {...rest}
    ></button>
  );
}
