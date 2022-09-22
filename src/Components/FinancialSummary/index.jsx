import "./style.css";

const FinancialSummary = () => {
  return (
    <div className="containerSummary">
      <h3>Resumo financeiro</h3>
      <div className="container_btns">
        <button className="btn_summary_todos">Todos</button>
        <button className="btn_summary">Entrada</button>
        <button className="btn_summary">Despesas</button>
      </div>
    </div>
  );
};
export default FinancialSummary;
