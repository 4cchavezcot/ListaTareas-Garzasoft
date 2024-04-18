import Tarea from "./componentes/Tarea";
import NuevaTarea from "./componentes/NuevaTarea";
//import { useState } from "react";
import useTareaStorage from "./storages/tareaStorage";

function App() {
  //const [tareas, setTareas] = useState([]);
  const tareas1 = useTareaStorage((state) => state.tareas);
  //const { tareas } = useTareaStorage();
  //Agregar nueva tarea
  const agregarTarea1 = (tarea) => {
    useTareaStorage((state) => state.agregarTarea(tarea));
  };

  //Completar tarea
  const completarTarea1 = (idTarea) => {
    useTareaStorage((state) => state.completarTarea(idTarea));
  };

  //Editar tarea
  const editarTarea1 = (idTarea, nombreNuevo, descripcionNueva) => {
    useTareaStorage((state) =>
      state.editarTarea(idTarea, nombreNuevo, descripcionNueva)
    );
  };

  //Eliminar tarea
  const eliminarTarea1 = (idTarea) => {
    useTareaStorage((state) => state.eliminarTarea(idTarea));
  };

  //Tareas pendientes
  const tareasPendientes1 = () => {
    useTareaStorage((state) => state.tareasPendientes());
  };

  //Tareas completadas
  const tareasCompletadas1 = () => {
    useTareaStorage((state) => state.tareasCompletadas());
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
            <NuevaTarea AgregarTarea={agregarTarea1} />
            <div className="flex justify-center space-x-9">
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">Total pendientes</p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tareasPendientes1()}
                </div>
              </div>
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">
                  Tareas completadas
                </p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tareasCompletadas1()}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start m-5 min-w-96 relative space-y-3">
            {tareas1.map((tarea) => (
              <Tarea
                key={tarea.idTarea}
                idTarea={tarea.idTarea}
                nombreTarea={tarea.nombreTarea}
                descripcionTarea={tarea.descripcionTarea}
                colorSeleccionado={tarea.colorSeleccionado}
                completadaTarea={tarea.completadaTarea}
                editarTarea={editarTarea1}
                completarTarea={completarTarea1}
                eliminarTarea={eliminarTarea1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
