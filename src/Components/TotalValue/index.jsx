import "./style.css";
const TotalValue = ({ listTransactions }) => {
  const filterValue = listTransactions.reduce(
    (elementoAnterior, elementoAtual) =>
      elementoAnterior + Number(elementoAtual.value),
    0
  );

  return (
    <div className="container_totalValue">
      <div className="container_totalValue_descriptions">
        <h3>Valor Total</h3>
        <span>O valor se refere ao saldo</span>
      </div>
      <span className="total_price">${filterValue}</span>
    </div>
  );
};
export default TotalValue;
