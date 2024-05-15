export function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
      <input
        type='text'
        placeholder='Usuario'
        className='border-2 border-gray-300 rounded-lg p-2 my-2'
      />
      <input
        type='password'
        placeholder='Contraseña'
        className='border-2 border-gray-300 rounded-lg p-2 my-2'
      />
      <button className='bg-green-950 text-white rounded-lg p-2'>
        Iniciar Sesión
      </button>
    </div>
  );
}
