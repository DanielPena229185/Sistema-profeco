import logo from '../../assets/logoheader.svg';

export default function Header() {
  return (
    <header className='flex justify-between w-full h-20 bg-green-950 py-3 px-2'>
      <img src={logo} className='w-40' />
      <button className='bg-orange-300 text-white rounded-lg px-2'>
        Cerrar Sesión
      </button>
    </header>
  );
}
