import ListItem from './ListItem';

export default function Sidebar() {
  return (
    <div className='h-full w-1/6 bg-orange-300 text-white'>
      <h1 className='text-2xl font-bold text-center border-b-2 border-b-slate-100'>
        Menú
      </h1>
      <ul className='pt-1 px-2'>
        <ListItem icon='home' text='Inicio' link='/' />
        <ListItem icon='inventory_2' text='Productos' link='/productos' />
        <ListItem icon='report' text='Reportes' link='/reportes' />
        <ListItem icon='discount' text='Ofertas' link='/ofertas' />
        <ListItem icon='comment' text='Comentarios' link='/comentarios' />
        <ListItem icon='dangerous' text='Multas' link='/multas' />
      </ul>
    </div>
  );
}
