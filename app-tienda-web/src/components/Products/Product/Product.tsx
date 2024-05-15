import { useParams } from 'react-router-dom';
import { mockupProducts } from '../Products';
import Title from '../../styleComponents/Title/Title';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const currentProduct = mockupProducts.find(
    (product) => product.id === Number(id)
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the product price here
  };

  return (
    <div className='p-4 w-full text-center'>
      <Title>{currentProduct?.name}</Title>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center gap-2'
        >
          <input
            className='mr-2 p-2 border border-gray-300 rounded'
            disabled
            value={currentProduct?.name}
          />
          <input
            type='number'
            step='0.01'
            placeholder='New Price'
            className='mr-2 p-2 border border-gray-300 rounded'
          />
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Update Price
          </button>
        </form>
      </div>
    </div>
  );
}
