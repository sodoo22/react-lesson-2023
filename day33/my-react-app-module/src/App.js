import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductFunc from "./ProductFunc";
import products from "./Seed";
import { useState } from "react";

function App() {
  const [productsList, setProductList] = useState(products);

  function handleProductUpVote(productId) {
    console.log(products);
    const newProducts = productsList.map((product) => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    console.log(newProducts);
    setProductList(newProducts);
  }

  function handleProductDownVote(productId) {
    console.log(products);
    const newProducts = productsList.map((product) => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1,
        });
      } else {
        return product;
      }
    });
    console.log(newProducts);
    setProductList(newProducts);
  }

  const productComponents = productsList.map((product) => {
    // console.log(product);
    return (
      <ProductFunc
        id={product.id}
        votes={product.votes}
        productImageUrl={product.productImageUrl}
        title={product.title}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        stars={product.stars}
        onVote={handleProductUpVote}
        downVote={handleProductDownVote}
      />
    );
  });

  return (
    <div className="App">
      <h2>Popular Products</h2>
      <hr></hr>
      {productComponents}
    </div>
  );
}

export default App;
