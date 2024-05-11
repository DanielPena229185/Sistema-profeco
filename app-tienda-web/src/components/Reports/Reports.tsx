import { Product } from '../../types';
import Title from '../styleComponents/Title/Title';

interface Report {
  id: number;
  reason: string;
  status: string;
  dateAttended: Date;
  user: string;
  product: Product;
}

const reports: Report[] = [
  {
    id: 1,
    reason: 'Reason 1',
    status: 'Status 1',
    dateAttended: new Date(),
    user: 'User 1',
    product: { id: 1, brand: 'Brand 1', name: 'Name 1', urlImg: 'image-url-1' },
  },
  {
    id: 2,
    reason: 'Reason 2',
    status: 'Status 2',
    dateAttended: new Date(),
    user: 'User 2',
    product: { id: 2, brand: 'Brand 1', name: 'Name 1', urlImg: 'image-url-2' },
  },
  {
    id: 3,
    reason: 'Reason 3',
    status: 'Status 3',
    dateAttended: new Date(),
    user: 'User 3',
    product: { id: 3, brand: 'Brand 1', name: 'Name 1', urlImg: 'image-url-3' },
  },
];

export default function Reports() {
  return (
    <div className='p-3'>
      <Title>Mis reportes de inconsistencias</Title>
      <div className='flex w-full gap-2 p-3'>
        {reports?.length ? (
          reports.map((report) => (
            <div
              key={report.id}
              className='flex flex-col h-fit gap-2 p-2 border border-gray-300 rounded-xl'
            >
              <div className='flex gap-2'>
                <img
                  src={report.product.urlImg}
                  alt={report.product.name}
                  className='w-16 h-16 object-cover rounded-xl'
                />
                <div className='flex gap-1'>
                  <span>{report.product.name}</span>
                  <span>{report.product.brand}</span>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <span>
                  <strong>Razón:</strong> {report.reason}
                </span>
                <span>
                  <strong>Estado:</strong> {report.status}
                </span>
                <span>
                  <strong>Atendido:</strong>{' '}
                  {report.dateAttended.toDateString()}
                </span>
                <span>
                  <strong>Usuario:</strong> {report.user}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>No hay reportes para mostrar...</div>
        )}
      </div>
    </div>
  );
}
