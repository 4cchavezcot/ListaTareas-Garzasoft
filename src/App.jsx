import Tarea from "./componentes/Tarea";
import NuevaTarea from "./componentes/NuevaTarea";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  //Agregar nueva tarea
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  //Completar tarea
  const completarTarea = (idTarea) => {
    const actualizarLista = tareas.map((tarea) => {
      if (tarea.idTarea === idTarea) {
        tarea.completadaTarea = !tarea.completadaTarea;
      }
      return tarea;
    });
    setTareas(actualizarLista);
  };

  //Editar tarea
  const editarTarea = (idTarea, nombreNuevo, descripcionNueva) => {
    const listaActualizada = tareas.map((tarea) => {
      if (tarea.idTarea === idTarea) {
        tarea.nombreTarea = nombreNuevo;
        tarea.descripcionTarea = descripcionNueva;
      }
      return tarea;
    });
    setTareas(listaActualizada);
  };

  //Eliminar tarea
  const eliminarTarea = (idTarea) => {
    const actualizarLista = tareas.filter((tarea) => tarea.idTarea !== idTarea);
    setTareas(actualizarLista);
  };

  //Tareas pendientes
  const tareasPendientes = (tareas) => {
    const actualizarLista = tareas.filter(
      (tarea) => tarea.completadaTarea === false
    );
    return actualizarLista.length;
  };

  //Tareas completadas
  const tareasCompletadas = (tareas) => {
    const actualizarLista = tareas.filter(
      (tarea) => tarea.completadaTarea === true
    );
    return actualizarLista.length;
  };

  return (
    <div className="w-full h-screen bg-gray-250 flex justify-center bg-imagen-fondo bg-cover">
      <div className="justify-center content-center">
        <h1 className="font-bold font-serif italic text-3xl sm:text-5xl text-center pb-3 lg:pb-6">
          Bienvenida a tu
        </h1>
        <h1 className="font-bold text-4xl sm:text-7xl text-center pb-6 lg:pb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            ToDo List
          </span>
        </h1>
        <div className="lg:flex lg:space-x-10">
          <div className="justify-start m-5 space-y-1">
            <NuevaTarea AgregarTarea={agregarTarea} />
            <div className="flex justify-center space-x-9">
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">Total pendientes</p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tareasPendientes(tareas)}
                </div>
              </div>
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">
                  Tareas completadas
                </p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tareasCompletadas(tareas)}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start m-5 min-w-96 relative space-y-3">
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.idTarea}
                idTarea={tarea.idTarea}
                nombreTarea={tarea.nombreTarea}
                descripcionTarea={tarea.descripcionTarea}
                colorSeleccionado={tarea.colorSeleccionado}
                completadaTarea={tarea.completadaTarea}
                editarTarea={editarTarea}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
