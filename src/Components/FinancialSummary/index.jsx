import "./style.css";

const FinancialSummary = ({
  listTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  const filter = (type) => {
    const filteredLists = listTransactions.filter(
      (element) => element.type === type
    );
    setFilterTransactions(filteredLists);

    if (type === "todos") {
      setFilterTransactions(listTransactions);
    }
  };

  return (
    <div className="containerSummary">
      <h3>Resumo financeiro</h3>
      <div className="container_btns">
        <button onClick={() => filter("todos")} className="btn_summary_todos">
          Todos
        </button>
        <button onClick={() => filter("entrada")} className="btn_summary">
          Entrada
        </button>
        <button onClick={() => filter("saída")} className="btn_summary">
          Despesas
        </button>
      </div>
    </div>
  );
};
export default FinancialSummary;
