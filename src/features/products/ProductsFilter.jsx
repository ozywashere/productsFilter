import PropTypes from 'prop-types';

function ProductsFilter({
  allCategories,
  filterProducts,
  currentItem,
  setCurrentItem,
  sortBy,
  setSortBy,
}) {
  const handleClick = (category) => {
    filterProducts(category);
    setCurrentItem(category);
  };

  return (
    <div className='my-14 flex justify-between items-center'>
      {/* Category Filter */}

      <div
        className='inline-flex flex-wrap rounded-md shadow-sm gap-4  '
        role='group'
      >
        {allCategories.map((category, index) => {
          return (
            <button
              key={index}
              className='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'
              style={{
                backgroundColor:
                  currentItem === category ? 'rgb(29 78 216) ' : 'transparent',
                color: currentItem === category ? '#fff' : '#000',
              }}
              onClick={handleClick.bind(null, category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      {/* Comes */}
      <div className='flex rounded-md shadow-sm gap-4  ' role='group'>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          id='sort'
          name='sort'
          className='
          px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:outline-none focus:ring-blue-700 focus:text-blue-700
          '
        >
          <option value='input'>Latest</option>
          <option value='p-decrease'>0-9</option>
          <option value='p-increase'>9-0</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div>
    </div>
  );
}

ProductsFilter.propTypes = {
  allCategories: PropTypes.array.isRequired,
  filterProducts: PropTypes.func.isRequired,
  currentItem: PropTypes.string.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default ProductsFilter;
