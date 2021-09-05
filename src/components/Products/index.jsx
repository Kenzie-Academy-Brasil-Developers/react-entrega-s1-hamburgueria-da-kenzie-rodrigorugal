const Product = ({ item, handleClick }) => {
  return (
    <li>
      {/* <img src="#" /> */}
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>R$ {item.price}</p>
      <button className="bntList" onClick={() => handleClick(item.id)}>
        Add Carrinho
      </button>
    </li>
  );
};

export default Product;
