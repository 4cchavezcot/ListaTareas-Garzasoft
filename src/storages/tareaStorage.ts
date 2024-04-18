import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface PropsTask {
  task: Task;
}
export interface Task {
  idTarea: string;
  nombreTarea: string;
  descripcionTarea: string;
  colorSeleccionado: string;
  completadaTarea: boolean;
}
interface MyState {
  tasks: Task[];
}
interface StateActions {
  addTask: (task: Task) => void;
  deleteTask: (idTarea: string) => void;
  updateTask: (task: Task) => void;
  completeTask: (idTarea: string) => void;
}

export const useTaskStore = create<MyState & StateActions>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) => set({ tasks: [...get().tasks, task] }),
      deleteTask: (idTarea) =>
        set({ tasks: get().tasks.filter((task) => task.idTarea !== idTarea) }),
      updateTask: (task) =>
        set({
          tasks: get().tasks.map((t) =>
            t.idTarea === task.idTarea ? task : t
          ),
        }),
      completeTask: (idTarea) =>
        set({
          tasks: get().tasks.map((t) =>
            t.idTarea === idTarea
              ? { ...t, completadaTarea: !t.completadaTarea }
              : t
          ),
        }),
    }),
    {
      name: "tasks-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
