import { useState } from "react";
import Product from "../Products";

const MenuContainer = ({ products, handleClick }) => {
  const [busca, setBusca] = useState("");
  const [filtroName, setFiltroName] = useState([]);
  const [filtroCategory, setFiltroCategory] = useState([]);

  const filtro = products.filter(
    (item) =>
      item.name.toLowerCase().includes(busca.toLowerCase()) ||
      item.category.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className=" boxGeral">
      <input
        className="inputStyle"
        type="text"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      <div className="listUl">
        <ul>
          {filtro.map((item) => (
            <Product item={item} handleClick={handleClick}></Product>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuContainer;
