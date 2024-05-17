import Title from '../styleComponents/Title/Title';
import { Sanction } from '../../types';

export default function Sanctions() {
  const sanctions: Sanction[] = [
    {
      id: '1',
      idMarket: 'market1',
      reports: [
        {
          id: 1,
          reason: 'Violation of pricing regulations',
          status: 'Active',
          dateAttended: new Date('2022-01-01'),
          user: 'John Doe',
          product: {
            id: 1,
            brand: 'Brand A',
            name: 'Product A',
            urlImg: 'image-url',
          },
        },
        {
          id: 2,
          reason: 'Expired products on shelves',
          status: 'Inactive',
          dateAttended: new Date('2022-02-15'),
          user: 'Jane Smith',
          product: {
            id: 2,
            brand: 'Brand B',
            name: 'Product B',
            urlImg: 'image-url',
          },
        },
        {
          id: 3,
          reason: 'Misleading advertising',
          status: 'Active',
          dateAttended: new Date('2022-03-10'),
          user: 'Mike Johnson',
          product: {
            id: 3,
            brand: 'Brand C',
            name: 'Product C',
            urlImg: 'image-url',
          },
        },
      ],
    },
    {
      id: '2',
      idMarket: 'market2',
      reports: [
        {
          id: 4,
          reason: 'Expired products on shelves',
          status: 'Active',
          dateAttended: new Date('2022-04-01'),
          user: 'Sarah Thompson',
          product: {
            id: 4,
            brand: 'Brand D',
            name: 'Product D',
            urlImg: 'image-url',
          },
        },
        {
          id: 5,
          reason: 'Violation of labeling regulations',
          status: 'Inactive',
          dateAttended: new Date('2022-05-15'),
          user: 'Robert Davis',
          product: {
            id: 5,
            brand: 'Brand E',
            name: 'Product E',
            urlImg: 'image-url',
          },
        },
      ],
    },
  ];

  return (
    <div className='p-3'>
      <Title>Lista de multas</Title>
      <ul className='mt-4'>
        {sanctions?.length ? (
          sanctions.map((sanction) => (
            <li key={sanction.id} className='border p-4 mb-4 rounded-lg'>
              <ul className='mt-2'>
                <h2>Reportes: </h2>
                {sanction.reports.map((report, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='mr-2'>
                      Date: {report.dateAttended.toDateString()}
                    </span>
                    <span>Status: {report.status}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>No hay multas</li>
        )}
      </ul>
    </div>
  );
}
