import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import List from "./Components/List";
import FinancialSummary from "./Components/FinancialSummary";
import "./style/global.css";
import "./style/colors.css";
import "./style/inputs.css";
import "./style/select.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  return (
    <div className="App">
      <Nav />
      <div className="container_content_page">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <div>
          <FinancialSummary />
          <List listTransactions={listTransactions} />
        </div>
      </div>
    </div>
  );
};

export default App;
