import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Cart from "./components/Cart";
import TotCar from "./components/TotCar";
import InputFilter from "./components/InputFilter";
import ProductsFiltered from "./components/ProductsFiltered";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      src: "./img/carro-chefe-da-casa-criada.jpg",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      src: "./img/X-Burguer.png",
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      src: "./img/x-salada.jpg",
    },
    {
      id: 4,
      name: "Big_Kenzie",
      category: "Sanduíches",
      price: 16.99,
      src: "./img/X-Tudo.jpeg",
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      src: "./img/guarana.jpg",
    },
    {
      id: 6,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      src: "./img/Coca.jpeg",
    },
    {
      id: 7,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      src: "./img/Fanta.jpeg",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const handleRemove = (productId) => {
    const newCurrentSale = currentSale.filter((item) => item.id !== productId);
    setCurrentSale(newCurrentSale);
  };

  const handleClick = (productId) => {
    const newSale = products.find((products) => products.id === productId);
    currentSale.find((element) => element.id === productId) === undefined
      ? setCurrentSale([...currentSale, newSale])
      : setCurrentSale([...currentSale]);
  };

  return (
    <body className="App_Body">
      <div className="Search_Filter">
        <InputFilter
          products={products}
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
        />
      </div>

      <div className="filterItens">
        <ProductsFiltered
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
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
