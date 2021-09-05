import { useState } from "react";
const InputFilter = ({ products, showProducts }) => {
  const [valueInput, setValueInput] = useState("");

  const handleFilter = () => {
    products.map((item) =>
      item.name === valueInput
        ? showProducts(item)
        : item.category === valueInput
        ? showProducts(item)
        : false
    );
  };

  return (
    <>
      <input
        type="text"
        value={valueInput}
        onChange={(event) => setValueInput(event.target.value)}
      />
      <button onClick={handleFilter}>Pesquisar</button>
    </>
  );
};

export default InputFilter;
