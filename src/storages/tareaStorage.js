import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useTareaStorage = create(
  persist(
    (set) => ({
      tareas: [],
      agregarTarea: (tarea) => 
        set((state) => ({ 
            tareas: [...state.tareas, tarea] 
        })),

      completarTarea: (idTarea) => 
        set((state) => ({
            tareas: state.tareas.map((tarea) => 
                tarea.idTarea === idTarea ? {...tarea, completadaTarea: !tarea.completadaTarea} : tarea)
        })),

      editarTarea: (idTarea, nombreNuevo, descripcionNueva) =>
        set((state) => ({
          tareas: state.tareas.map((tarea) =>
            tarea.idTarea === idTarea ? { ...tarea, nombreTarea: nombreNuevo, descripcionTarea: descripcionNueva } : tarea
          ),
        })),

      eliminarTarea: (idTarea) =>
        set((state) => ({
          tareas: state.tareas.filter((tarea) => tarea.id !== idTarea),
        })),
      
      tareasPendientes: () => 
        set((state) => ({
          numero: state.tareas.filter((tarea) => tarea.completadaTarea === false).length,
        })),
      
      tareasCompletadas: () => 
      set((state) => ({
        numero: state.tareas.filter((tarea) => tarea.completadaTarea === true).length,
      })) 
    }),
    {
      name: 'tarea-storage', // Nombre para identificar la persistencia
      storage: createJSONStorage(()=> localStorage), // Utilizamos localStorage
      partialize: (state) => ({tareas: state.tareas})
    }
  )
);

export default useTareaStorage;

