import { useState } from "react";
const InputFilter = ({ products, setFilteredProducts }) => {
  const [valueInput, setValueInput] = useState("");

  const handleFilter = () => {
    const filtName = products.filter((item) => item.name === valueInput);
    const filtCategory = products.filter(
      (item) => item.category === valueInput
    );

    if (filtName.map((item) => item.name === valueInput)) {
      console.log(filtName);
      setFilteredProducts(filtName);
    } else if (filtCategory.map((item) => item.category === valueInput)) {
      console.log(filtCategory);
      setFilteredProducts(filtCategory);
    }

    // if (filtName.map((item) => item.name === valueInput)) {
    //   console.log(filtName);
    //   setFilteredProducts(filtName);
    // } else if (filtCategory.map((item) => item.category === valueInput)) {
    //   console.log(filtCategory);
    //   setFilteredProducts(filtCategory);
    // }
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
