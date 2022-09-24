// import { useState } from "react";
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

  // const [btnClick,setBtnClick] = useState(false);

  // const colorChange=()=>{

  // }

  return (
    <div className="containerSummary">
      <h3 className="finances-summary">Resumo financeiro</h3>
      <div className="container_btns">
        <button onClick={() => filter("todos")} className="btn_summary_todos">
          Todos
        </button>
        <button onClick={() => filter("Entrada")} className="btn_summary">
          Entrada
        </button>
        <button onClick={() => filter("Despesa")} className="btn_summary">
          Despesas
        </button>
      </div>
    </div>
  );
};
export default FinancialSummary;
