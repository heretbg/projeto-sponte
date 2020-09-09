import React, { useState } from "react";

import Container from "./components/Container";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

import GlobalStyle from "./styles/global";

function App() {
  const LISTING = 0;
  const CREATING = 1;
  const UPDATING = 2;

  const [state, setState] = useState(LISTING);
  const [nextId, setNextId] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleCreate = () => {
    setState(CREATING);
  };

  const createProduct = (product) => {
    product.id = nextId;
    setProducts([...products, product]);
    setNextId(nextId + 1);
    setState(LISTING);
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setState(UPDATING);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
    setState(LISTING);
  };

  const handleDelete = (id) => {
    console.log(id);
    console.log(products);
    setProducts(products.filter((product) => product.id !== id));
    setState(LISTING);
  };

  return (
    <>
      <Container>
        {state === LISTING && (
          <ProductList
            data={products}
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
        {state === CREATING && <ProductForm handleSave={createProduct} />}
        {state === UPDATING && (
          <ProductForm data={selectedProduct} handleSave={updateProduct} />
        )}
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
