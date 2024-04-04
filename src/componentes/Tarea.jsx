import { FaEdit } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";

function Tarea(){
    return(
        <div className="justify-center space-y-3 rounded">
            <div className="bg-green-200 flex py-1 rounded-md">
                {/*Solo aparecerá el titulo de la nueva tarea en este apartado*/}
                <div className="pl-4 w-full py-2">
                    <p className="text-lg font-mono">Tarea 1</p>
                </div>
                <div className="p-2 pl-4 flex space-x-2 justify-end">
                    {/*Boton para editar*/}
                    <button><FaEdit className="size-6 text-gray-500 hover:scale-125"/></button>
                    {/*Boton para ver la tarea*/}
                    <button><FcSearch className="size-6 hover:scale-125"/></button>
                    {/*Boton para eliminar tarea*/}
                    <button><RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125"/></button>
                    {/*Boton para marcar tarea como completada*/}
                    <button><IoCheckbox className="size-6 text-lime-600 hover:scale-125"/></button>
                </div>
            </div>
            <div className="bg-fuchsia-300 flex py-1 rounded-md">
                <div className="pl-4 w-full py-2">
                    <p className="text-lg font-mono">Tarea 2</p>
                </div>
                <div className="p-2 pl-4 flex space-x-2 justify-end">
                    <button><FaEdit className="size-6 text-gray-500 hover:scale-125"/></button>
                    <button><FcSearch className="size-6 hover:scale-125"/></button>
                    <button><RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125"/></button>
                    <button><IoCheckbox className="size-6 text-lime-600 hover:scale-125"/></button>
                </div>
            </div>
            <div className="bg-green-600 flex py-1 rounded-md">
                <div className="pl-4 w-full py-2">
                    <p className="text-lg font-mono line-through">Tarea 3</p>
                </div>
                <div className="p-2 pl-4 flex space-x-2 justify-end">
                    {/*Este ya no será un botón porque solo será un indicador de que es una tarea completada*/}
                    <IoCheckbox className="size-6 text-black"/>
                </div>
            </div>
            <div className="bg-yellow-200 flex py-1 rounded-md">
                <div className="pl-4 w-full py-2">
                    <p className="text-lg font-mono">Tarea 4</p>
                </div>
                <div className="p-2 pl-4 flex space-x-2 justify-end">
                    <button><FaEdit className="size-6 text-gray-500 hover:scale-125"/></button>
                    <button><FcSearch className="size-6 hover:scale-125"/></button>
                    <button><RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125"/></button>
                    <button><IoCheckbox className="size-6 text-lime-600 hover:scale-125"/></button>
                </div>
            </div>
        </div>
    )
}

export default Tarea;