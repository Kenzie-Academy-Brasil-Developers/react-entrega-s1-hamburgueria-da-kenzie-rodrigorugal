const Cart = ({ currentSale, handleRemove }) => {
  return (
    <div className="paiListCart">
      <ul className="listCart">
        {currentSale.map((item) => (
          <li className="itemListCart">
            <p>{item.name}</p>
            <p>R$ {item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
