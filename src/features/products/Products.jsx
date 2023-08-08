import ProductsList from '../../features/products/ProductsList';
import ProductsFilter from '../../features/products/ProductsFilter';
import useAxiosFetch from '../../useAxiosFetch';
import Loading from '../../ui/Loading';
import Error from '../../ui/Error';
import { useEffect, useState } from 'react';

function Products() {
  const { data, loading, error } = useAxiosFetch(
    'https://fakestoreapi.com/products'
  );
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [sortBy, setSortBy] = useState('input');
  const [searchTerm, setSearchTerm] = useState('');
  const allCategories = [
    'all',
    ...new Set(data.map((product) => product.category)),
  ];

  const filterProducts = (category) => {
    if (category === 'all') {
      setProducts(data);
      return;
    }
    const newProducts = data.filter((product) => product.category === category);
    setProducts(newProducts);
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  let sortedProducts;

  if (sortBy === 'input') {
    sortedProducts = products.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
  }
  if (sortBy === 'p-decrease') {
    sortedProducts = products.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (sortBy === 'p-increase') {
    sortedProducts = products.sort((a, b) => {
      return b.price - a.price;
    });
  }

  if (sortBy === 'a-z') {
    sortedProducts = products.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
  if (sortBy === 'z-a') {
    sortedProducts = products.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  }

  useEffect(() => {
    const filterResults = data.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.price.toString().includes(searchTerm) ||
        product.rating.rate.toString().includes(searchTerm) ||
        product.rating.count.toString().includes(searchTerm)
    );

    setProducts(filterResults);
  }, [data, searchTerm]);

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-4'>Products</h2>
        <p className=' text-gray-500 text-lg font-semibold mb-4'>
          A collection of products that are available for purchase. Click on a
          product to see more details.
        </p>
        <form className='flex justify-center items-center'>
          <div className='rounded-full bg-blue-900 max-w-xl w-full flex'>
            <input
              type='search'
              placeholder='Search'
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              className='border flex-1 border-gray-300 focus:outline-blue-700  px-4 py-2 rounded-l-full'
            />
            <button
              className='bg-blue-700 text-white px-5 rounded-r-full hover:bg-blue-800
            '
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <ProductsFilter
        allCategories={allCategories}
        filterProducts={filterProducts}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {loading && <Loading text='loading' />}
      {error && (
        <Error
          title='Error'
          description='There was an error while fetching the products.'
          error={error.message}
        />
      )}
      {products.length !== 0 && !loading && !error && (
        <ProductsList products={sortedProducts} />
      )}
    </div>
  );
}

export default Products;
