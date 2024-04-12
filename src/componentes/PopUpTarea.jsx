import { useState } from "react";

function PopUpTarea({
  mostrar,
  cerrar,
  editar,
  idv1,
  nombrev1,
  descripcionv1,
  colorfondo,
}) {
  if (!mostrar) return null;

  const [nombreTarea, setNombreTarea] = useState(nombrev1);
  const [descripcionTarea, setDescripcionTarea] = useState(descripcionv1);

  const manejarEdicion = (evento) => {
    evento.preventDefault();

    if (nombreTarea.trim() !== "" && descripcionTarea.trim() !== "") {
      editar(idv1, nombreTarea, descripcionTarea);
    }
    cerrar();
  };

  return (
    <form
      className={`${colorfondo} border-gray-300 border-2 p-4 rounded fixed inset-x-1/4 inset-y-1/3 shadow-2xl`}
    >
      <h1 className="font-bold text-center text-xl py-2">Actualizar Tarea</h1>
      <div className="space-y-2">
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="nombreTarea"
          value={nombreTarea}
          onChange={(evento) => setNombreTarea(evento.target.value)}
        />
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="descripcionTarea"
          value={descripcionTarea}
          onChange={(evento) => setDescripcionTarea(evento.target.value)}
        />
        <div className="grid">
          <button
            className="px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white"
            type="submit"
            onClick={manejarEdicion}
          >
            Guardar
          </button>
          <button
            className="px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white"
            type="button"
            onClick={cerrar}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export default PopUpTarea;
