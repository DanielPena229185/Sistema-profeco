import logo from '../assets/logoheader.svg';

function Header() {
  return (
    <header className='w-full h-20 bg-green-950 py-3 px-2 top-0 fixed'>
      <img src={logo} className='w-40' />
    </header>
  );
}

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}
