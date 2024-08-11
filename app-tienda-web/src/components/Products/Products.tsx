import { useState } from 'react';
import Title from '../styleComponents/Title/Title';
import { Product } from '../../types';
import { Link } from 'react-router-dom';

export const mockupProducts = [
  {
    id: 1,
    name: 'Product 1',
    brand: 'Brand 1',
    urlImg: 'https://assets.unileversolutions.com/v1/64546344.png',
  },
  {
    id: 2,
    name: 'Product 2',
    brand: 'Brand 2',
    urlImg: 'https://assets.unileversolutions.com/v1/64546344.png',
  },
  {
    id: 3,
    name: 'Product 3',
    brand: 'Brand 3',
    urlImg: 'https://assets.unileversolutions.com/v1/64546344.png',
  },
];

export default function Products() {
  const [products, setProducts] = useState(mockupProducts);

  return (
    <div className='container p-3 mx-auto text-black'>
      <Title>Productos</Title>

      <ul className='flex gap-4 border-2 p-2 pl-8 rounded-md'>
        {products.length ? (
          products.map((product) => (
            <Link to={`/productos/${product.id}`} key={product.id}>
              <li
                className='border rounded-md max-w-48 hover:shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-gray-100 hover:transform hover:scale-105'
                key={product.id}
              >
                <img
                  src={product.urlImg}
                  className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap border-b-2 border-gray-300'
                />
                <div className='p-2 overflow-hidden overflow-ellipsis whitespace-nowrap'>
                  {product.name}
                </div>
                <div className='p-2 overflow-hidden overflow-ellipsis whitespace-nowrap'>
                  {product.brand}
                </div>
              </li>
            </Link>
          ))
        ) : (
          <div>No hay productos...</div>
        )}
      </ul>
    </div>
  );
}
