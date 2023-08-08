import PropTypes from 'prop-types';
import { useState } from 'react';
function ProductItem({ product }) {
  const [readMore, setReadMore] = useState(false);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <li>
      <div className='bg-white shadow-lg rounded-lg h-full flex flex-col '>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-56 object-contain mb-4 border-2 border-gray-200 rounded-lg'
        />
        <div className='h-full flex flex-col p-4'>
          <h2 className='text-xl font-semibold mb-4'>{product.title}</h2>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-gray-500 text-base mb-2 capitalize'>
              {product.category}
            </p>
            <p className='text-gray-900 text-lg font-semibold mb-2'>
              {formatPrice(product.price)}
            </p>
          </div>
          <p className='text-gray-700 text-base mb-4'>
            {readMore
              ? product.description
              : `${product.description.slice(0, 100)}...`}
            <button
              className='text-blue-700 hover:text-blue-600 ml-2'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <div className='mb-4 flex items-center justify-between '>
            <p className='text-gray-900 text-lg font-semibold mr-2'>Rating: </p>
            <p className='text-gray-700 text-lg'>
              <span className='mr-2'>🌟🌟🌟🌟🌟</span>
              <span>
                {product.rating.rate} ({product.rating.count})
              </span>
            </p>
          </div>
          <div className='mt-auto flex gap-2 justify-end'>
            <button className='bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
              Add to cart
            </button>

            <button className='bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
              View details
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
