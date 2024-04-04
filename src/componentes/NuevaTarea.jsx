function NuevaTarea(){
    return(
        <form className="bg-purple-200 justify-center p-2 rounded">
            <h1 className="font-bold text-center text-xl py-2">Nueva Tarea</h1>
            <div className="flex pl-2">
                <div className="w-5/6 space-y-2">
                    {/*Primer input para escribir el nombre de la tarea*/}
                    <input class=
                    "placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Nombre de tu nueva tarea" type="text" name="nombreNuevaTarea"
                    />
                    {/*Segundo input para escribir la descripción de la tarea*/}
                    <input class=
                    "placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Descripción de tu nueva tarea" type="text" name="descripcionNuevaTarea"
                    />
                </div>
                <button className="px-3 ml-5 rounded-md bg-purple-400 border-2 border-purple-600 text-3xl font-bold hover:bg-purple-500 hover:text-white">
                    +
                </button>
            </div>
            <h1 className="font-bold m-1 py-1 pl-2 text-base">
                Card Color
            </h1>
            {/*El usuario podrá elegir el color de la tarjeta para la nueva tarea*/}
            <div className="flex justify-between">
                <button className="w-11 h-11 bg-green-200 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-fuchsia-300 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-red-200 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-sky-200 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-yellow-200 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-lime-300 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-cyan-300 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-blue-300 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
                <button className="w-11 h-11 bg-red-300 rounded-full border-4 border-gray-200 m-1 hover:border-white"></button>
            </div>
        </form>
    )
}
export default NuevaTarea;