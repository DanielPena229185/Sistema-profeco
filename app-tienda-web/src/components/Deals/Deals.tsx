import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../styleComponents/Title/Title';
import FormErrorAlert from '../FormErrorAlert/FormErrorAlert';
import { Deal } from '../../types';

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
];

export default function Deals() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Deal>();
  const [deals, setDeals] = React.useState<Deal[]>([]);

  const handleAddDeal = handleSubmit((data) => {
    setDeals([...deals, data]);
    reset();
  });

  return (
    <div className='p-3'>
      <Title>Ofertas</Title>
      <form className='flex flex-col gap-1' onSubmit={handleAddDeal}>
        <div className='flex flex-col'>
          <select
            className='border border-gray-300 rounded-xl px-4 py-2'
            {...register('product', { required: true })}
          >
            <option disabled value='0'>
              Producto
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          {errors.product && <FormErrorAlert />}
        </div>
        <div className='flex flex-col'>
          <input
            className='border border-gray-300 rounded-xl px-4 py-2'
            type='number'
            min='1'
            max='99'
            placeholder='Cantidad de descuento'
            {...register('discount', { required: true })}
          />
          {errors.discount && <FormErrorAlert />}
        </div>
        <div className='flex flex-col'>
          <input
            className='border border-gray-300 rounded-xl px-4 py-2'
            type='date'
            min={new Date().toISOString().split('T')[0]}
            placeholder='Fecha'
            {...register('date', { required: true })}
          />
          {errors.date && <FormErrorAlert />}
        </div>
        <button
          className='border border-gray-300 rounded-xl h-fit
                px-5 py-2 font-bold  bg-blue-500 text-white hover:bg-blue-700 
                transition duration-300 ease-in-out hover:shadow-md hover:scale-105'
          type='submit'
        >
          Crear oferta
        </button>
      </form>
      <div className='flex border my-4'>
        {deals.length ? (
          deals.map((deal, index) => (
            <div
              key={index}
              className='p-3 my-4 mx-3 border  shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 hover:transform  hover:scale-105'
            >
              <h3>{deal.product.toString()}</h3>
              <p>Descuento: {deal.discount + '%'}</p>
              <p>Vence: {deal.date.toString()}</p>
            </div>
          ))
        ) : (
          <div className='pt-3 px-2'>No hay ofertas para mostrar...</div>
        )}
      </div>
    </div>
  );
}
