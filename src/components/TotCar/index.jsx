const TotCar = ({ currentSale }) => {
  const valTotal = currentSale.reduce((anterior, atual) => {
    return atual.price + anterior;
  }, 0);

  return (
    <div className="valueCar">
      <p className="valueTot">Valor Total</p>
      <p>
        R$ <span>{valTotal.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default TotCar;
