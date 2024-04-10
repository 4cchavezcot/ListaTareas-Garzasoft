import { useState } from "react"
import Tarea from "./Tarea"

function ListaTareas(){
  const [tareas, setTareas] = useState([]);

  const AgregarNuevaTarea = tarea =>
  {
    if(tarea.nombreTarea){
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  return(
    <div className='justify-start m-5 min-w-96'>
      {
        tareas.map((tarea)=>
        <Tarea
        
        />
      )
      }
    </div>
  )
}