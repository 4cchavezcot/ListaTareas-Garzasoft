import { useState } from "react";
import { cn } from "../lib/utils";

export function BotonCardColor(props) {
  const { className, seleccion, ...rest } = props;

  return (
    <div
      className={cn(
        `w-10 md:w-11 h-11 md:rounded-full border-4 border-gray-200 md:m-1 
      hover:border-white ${className}`,
        seleccion === className && "border-white"
      )}
      {...rest}
    ></div>
  );
}
