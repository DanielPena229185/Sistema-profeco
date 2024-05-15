import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Root() {
  return (
    <>
      <Header />
      <div id='detail' className='flex h-full'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
