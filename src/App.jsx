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
  const editarTarea = () => {
    console.log("editar");
  };

  //Ver tarea
  const verTarea = () => {
    console.log("ver tarea");
  };

  //Eliminar tarea
  const eliminarTarea = (idTarea) => {
    const actualizarLista = tareas.filter((tarea) => tarea.idTarea !== idTarea);
    setTareas(actualizarLista);
  };

  return (
    <div className="w-full h-screen bg-gray-250 flex justify-center">
      <div className="justify-center content-center">
        <h1 className="font-bold text-5xl text-center pb-6 lg:pb-12">
          ToDo List
        </h1>
        <div className="lg:flex lg:space-x-10">
          <div className="justify-start m-5 space-y-1">
            <NuevaTarea AgregarTarea={agregarTarea} />
            <div className="flex justify-center space-x-9">
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">Total pendientes</p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  4
                </div>
              </div>
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">
                  Tareas completadas
                </p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start m-5 min-w-96">
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.idTarea}
                idTarea={tarea.idTarea}
                nombreTarea={tarea.nombreTarea}
                descripcionTarea={tarea.descripcionTarea}
                cardColor={tarea.cardColor}
                completadaTarea={tarea.completadaTarea}
                editarTarea={editarTarea}
                verTarea={verTarea}
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
