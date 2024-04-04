import Tarea from './componentes/Tarea';
import NuevaTarea from './componentes/NuevaTarea';

function App() {
  return (
    <div className='w-full h-screen bg-gray-250 flex justify-center'>
      <div className='justify-center content-center w-auto'>
        <h1 className='font-bold text-5xl text-center pb-12'>ToDo List</h1>
        <div className='flex space-x-10'>
          <div className='justify-start m-5 space-y-1'>
            <NuevaTarea />
            <div className='flex justify-center space-x-9'>
              <div className='flex items-center py-2'>
                <p className='text-sm font-bold pr-4 pl-2'>Total pendientes</p>
                <div className='bg-red-500 text-white font-bold px-6 py-4 rounded'>4</div>
              </div>
              <div className='flex items-center py-2'>
                <p className='text-sm font-bold pr-4 pl-2'>Tareas completadas</p>
                <div className='bg-red-500 text-white font-bold px-6 py-4 rounded'>1</div>
              </div>
            </div>
          </div>
          <div className='justify-start m-5 min-w-96'>
            <Tarea />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App
