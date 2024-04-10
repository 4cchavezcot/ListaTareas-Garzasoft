import { FaEdit } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";
import { cn } from "../lib/utils";

function Tarea({
  idTarea,
  nombreTarea,
  descripcionTarea,
  colorSeleccionado,
  completadaTarea,
  editarTarea,
  verTarea,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div className="justify-center space-y-3 rounded">
      <div
        key={idTarea}
        className={cn(`${colorSeleccionado} flex py-1 rounded-md`, {
          "bg-green-600": completadaTarea,
        })}
      >
        {" "}
        {/* El background es depende del color seleccionado de la card color */}
        <div className="pl-4 w-full py-2">
          <p
            className={cn("text-lg font-mono", {
              "line-through": completadaTarea,
            })}
          >
            {nombreTarea}
            {/*Solo aparecerá el titulo de la nueva tarea en este apartado*/}
          </p>
        </div>
        {!completadaTarea && (
          <div className="p-2 pl-4 flex space-x-2 justify-end">
            {/*Boton para editar*/}
            <button onClick={editarTarea()}>
              <FaEdit className="size-6 text-gray-500 hover:scale-125" />
            </button>
            {/*Boton para ver la tarea*/}
            <button onClick={verTarea()}>
              <FcSearch className="size-6 hover:scale-125" />
            </button>
            {/*Boton para eliminar tarea*/}
            <button onClick={eliminarTarea(idTarea)}>
              <RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125" />
            </button>
            {/*Boton para marcar tarea como completada*/}
            <button onClick={completarTarea(idTarea)}>
              <IoCheckbox className="size-6 text-lime-600 hover:scale-125" />
            </button>
          </div>
        )}
        {completadaTarea && (
          <div className="p-2 pl-4 flex space-x-2 justify-end">
            {/*Este ya no será un botón porque solo será un indicador de que es una tarea completada*/}
            <IoCheckbox className="size-6 text-black" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tarea;
