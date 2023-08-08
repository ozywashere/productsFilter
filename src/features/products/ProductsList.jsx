import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
function ProductsList({ products }) {
  return (
    <ul
      className='
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'
    >
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ProductsList;
