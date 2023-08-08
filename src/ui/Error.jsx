import PropTypes from 'prop-types';
function Error({ title, description, error }) {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
      <div className='mx-auto max-w-screen-sm text-center bg-gray-100 p-8 rounded'>
        <h1 className='mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-blue-600'>
          {title}
        </h1>
        <p className='text-gray-500 sm:text-xl'>{description}</p>
        <p className='text-gray-500 sm:text-xl'>{error}</p>
        <div className='flex justify-center gap-4'>
          <a
            href='/'
            className='mt-8 px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 '
          >
            Go Back Home
          </a>
          <a
            href='/'
            className='mt-8 px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700'
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Error;
