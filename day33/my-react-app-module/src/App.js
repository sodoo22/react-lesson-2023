import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductFunc from './ProductFunc';
import products from './Seed';

function App() {
  const productsList = products.map((product => {
    console.log(product);
    return <ProductFunc
      votes={product.votes}
      productImageUrl={product.productImageUrl}
      title={product.title}
      description={product.description}
      submitterAvatarUrl={product.submitterAvatarUrl} />
  }))

  return (
    <div className="App">
      <h2>Popular Products</h2><hr></hr>
      {productsList}
    </div>
  );
}

export default App;
