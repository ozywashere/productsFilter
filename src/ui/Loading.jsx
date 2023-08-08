import PropTypes from 'prop-types';
function Loading({ text }) {
  return (
    <div className='flex justify-center items-center h-screen mx-auto relative'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
      <h3 className='ml-4 text-2xl text-gray-900 absolute capitalize'>
        {text}
      </h3>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Loading;
