import { useTaskStore } from "@/storages/tareaStorage";
import { BotonCardColor } from "./BotonCardColor";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //Libreria para crear un ID unico

function NuevaTarea() {
  const [nombreTarea, setNombre] = useState("");
  const [descripcionTarea, setDescripcion] = useState("");
  const [colorSeleccionado, setColorSeleccionado] = useState("");
  const { addTask } = useTaskStore();

  const manejarBoton = (evento) => {
    evento.preventDefault(); //Evita que se vuelva a recargar la página
    if (
      nombreTarea.trim() !== "" &&
      descripcionTarea.trim() !== "" &&
      colorSeleccionado !== ""
    ) {
      const idTarea = uuidv4(); // Verificando si no son cadenas vacias
      addTask({
        idTarea,
        nombreTarea,
        descripcionTarea,
        colorSeleccionado,
        completadaTarea: false,
      })

      // Limpiar los campos después de agregar una nueva tarea
      setNombre("");
      setDescripcion("");
      setColorSeleccionado("");
    }
  };
  return (
    <form
      className="bg-purple-200 justify-center p-2 rounded shadow-xl"
      onSubmit={manejarBoton}
    >
      <h1 className="font-bold text-center text-xl py-2">Nueva Tarea</h1>
      <div className="flex">
        <div className="w-5/6 space-y-2 justify-center">
          {/*Primer input para escribir el nombre de la tarea*/}
          <input
            className="placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Nombre de tu nueva tarea"
            type="text"
            name="nombreTarea"
            value={nombreTarea}
            onChange={(evento) => setNombre(evento.target.value)} //Para actualizar el valor del input
          />
          {/*Segundo input para escribir la descripción de la tarea*/}
          <input
            className="placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Descripción de tu nueva tarea"
            type="text"
            name="descripcionTarea"
            value={descripcionTarea}
            onChange={(evento) => setDescripcion(evento.target.value)}
          />
        </div>
        <button
          className="px-3 ml-5 rounded-md bg-purple-400 border-2 border-purple-600 text-3xl font-bold hover:bg-purple-500 hover:text-white"
          type="submit"
        >
          +
        </button>
      </div>
      <h1 className="font-bold m-1 py-1 pl-1 text-base">Card Color</h1>
      {/*El usuario podrá elegir el color de la tarjeta para la nueva tarea*/}
      <div className="justify-center flex">
        <BotonCardColor
          className="bg-green-200"
          onClick={() => setColorSeleccionado("bg-green-200")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-fuchsia-300"
          onClick={() => setColorSeleccionado("bg-fuchsia-300")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-red-200"
          onClick={() => setColorSeleccionado("bg-red-200")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-sky-200"
          onClick={() => setColorSeleccionado("bg-sky-200")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-yellow-200"
          onClick={() => setColorSeleccionado("bg-yellow-200")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-lime-300"
          onClick={() => setColorSeleccionado("bg-lime-300")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-cyan-300"
          onClick={() => setColorSeleccionado("bg-cyan-300")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-blue-300"
          onClick={() => setColorSeleccionado("bg-blue-300")}
          seleccion={colorSeleccionado}
        />

        <BotonCardColor
          className="bg-red-300"
          onClick={() => setColorSeleccionado("bg-red-300")}
          seleccion={colorSeleccionado}
        />
      </div>
    </form>
  );
}
export default NuevaTarea;
