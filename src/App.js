import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";
import TotCar from "./components/TotCar";
import InputFilter from "./components/InputFilter";
import Product from "./components/Products";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (prod) => {
    setFilteredProducts([...filteredProducts, prod]);
  };

  const handleRemove = (productId) => {
    const newCurrentSale = currentSale.filter((item) => item.id !== productId);
    setCurrentSale(newCurrentSale);
  };

  const handleClick = (productId) => {
    const idProd = products.find((item) => item.id === productId);

    currentSale.length === 0
      ? setCurrentSale([...currentSale, idProd])
      : currentSale.map((item) =>
          item.id !== productId
            ? setCurrentSale([...currentSale, idProd])
            : false
        );
  };

  return (
    <body className="App_Body">
      <div className="Search_Filter">
        <InputFilter products={products} showProducts={showProducts} />
      </div>

      <div className="filterItens">
        <ul className="filterItens_List">
          {filteredProducts.map((item) => {
            <li className="filterItens_List_Itens">
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
            </li>;
          })}
        </ul>
      </div>

      <div className="App_List_Itens">
        <MenuContainer products={products} handleClick={handleClick} />
      </div>

      <div className="App_List_Cart_Box">
        <TotCar currentSale={currentSale} />
        <div className="App_List_Cart">
          <Cart
            currentSale={currentSale}
            handleRemove={handleRemove}
            products={products}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
