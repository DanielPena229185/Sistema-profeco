import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div
      className='flex flex-col items-center justify-center h-screen'
      id='error-page'
    >
      <h1 className='font-bold text-6xl p-10'>Oops!</h1>
      <p className='text-xl font-light p-6'>
        Disculpa, un error innesperado ha ocurrido.
      </p>
      <p className='font-extralight'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
