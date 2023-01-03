import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';
import ProductFunc from './ProductFunc';
import ProductFunc2 from './ProductFunc2';
import ProductFunc3 from './ProductFunc3';
import ProductFunc4 from './ProductFunc4';

function App() {
  return (
    <div className="App">
      <h2>Popular Products</h2><hr></hr>
      < Product1 />
      < Product2 />
      < Product3 />
      < Product4 />
      <ProductFunc />
      <ProductFunc2 />
      <ProductFunc3 />
      <ProductFunc4 />

    </div>
  );
}

export default App;
