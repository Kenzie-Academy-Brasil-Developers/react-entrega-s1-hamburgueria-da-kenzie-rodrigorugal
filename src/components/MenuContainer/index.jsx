import Product from "../Products";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="listUl">
      <ul>
        {products.map((item) => (
          <Product item={item} handleClick={handleClick}></Product>
        ))}
      </ul>
    </div>
  );
};

export default MenuContainer;
