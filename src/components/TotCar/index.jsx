const TotCar = ({ currentSale }) => {
  const valTotal = currentSale.reduce((anterior, atual) => {
    return atual.price + anterior;
  }, 0);

  return (
    <div>
      <p>Valor Total</p>
      <p>R$ {valTotal.toFixed(2)}</p>
    </div>
  );
};

export default TotCar;
