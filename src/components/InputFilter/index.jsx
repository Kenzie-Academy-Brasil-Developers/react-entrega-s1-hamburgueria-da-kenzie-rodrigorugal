import { useState } from "react";

const InputFilter = ({ products, setFilteredProducts, filteredProducts }) => {
  const [valueInput, setValueInput] = useState("");

  const handleFilter = () => {
    const filtName = products.filter((item) => item.name === valueInput);
    const filtCategory = products.filter(
      (item) => item.category === valueInput
    );

    filtName.map((item) =>
      item.name === valueInput ? setFilteredProducts(filtName) : false
    );

    filtCategory.map((item) =>
      item.category === valueInput ? setFilteredProducts(filtCategory) : false
    );

    setValueInput("");
  };

  return (
    <div>
      <input
        className="inputStyle"
        type="text"
        value={valueInput}
        onChange={(event) => setValueInput(event.target.value)}
      />
      <button className="bntInputStyle" onClick={handleFilter}>
        Pesquisar
      </button>
    </div>
  );
};

export default InputFilter;
