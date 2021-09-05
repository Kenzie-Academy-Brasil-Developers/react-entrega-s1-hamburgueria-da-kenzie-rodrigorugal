import Product from "../Products";

const ProductsFiltered = ({ filteredProducts, handleClick }) => {
  // const showProducts = () => {
  //   console.log(filteredProducts);
  // };
  // showProducts();

  return (
    <div>
      <ul>
        {filteredProducts.map((item) => (
          <Product item={item} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsFiltered;
