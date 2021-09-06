import { useState } from "react";

const Product = ({ item, handleClick }) => {
  const [fundoProcuts, setFundoProcuts] = useState("");

  return (
    <li className={item.name}>
      <div className="space_Item">
        <p>R$ {item.price}</p>
        <p>{item.category}</p>
      </div>
      <button className="bntList" onClick={() => handleClick(item.id)}>
        {item.name}
      </button>
    </li>
  );
};

export default Product;
