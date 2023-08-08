import Products from './features/products/Products';

function App() {
  return (
    <main>
      <section className=' py-20'>
        <Products
          title='Products'
          description='A collection of products 
          that are available for purchase.
          Click on a product to see more details.'
        />
      </section>
    </main>
  );
}

export default App;
