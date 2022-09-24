import "./App.css";
import { useState } from "react";
import "./style/global.css";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import List from "./Components/List";

import FinancialSummary from "./Components/FinancialSummary";

import "./style/colors.css";
import "./style/inputs.css";
import "./style/select.css";
import TotalValue from "./Components/TotalValue/index";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "Entrada", value: 2500 },
    // { description: "Conta de luz", type: "Despesa", value: -150 },
  ]);

  const [filterTransactions, setFilterTransactions] =
    useState(listTransactions);

  const [redirect, setRedirect] = useState(true);

  const redirectDashboard = () => {
    setRedirect(false);
  };

  if (redirect) {
    return (
      <div className="AppPage">
        <div className="container_page">
          <div className="container_entrar">
            <img className="logo_page" src="/Nu Kenzie (1).png" alt="logo" />
            <div className="container_title">
              <h1 className="title_one">
                Centralize o controle das suas finanças
              </h1>
            </div>
            <h3 className="title_two">de forma rápida e segura</h3>
            <button onClick={() => redirectDashboard()} className="btn_open">
              Iniciar
            </button>
          </div>

          <img
            className="img_page_exemple"
            src="/illustration.svg"
            alt="ilustração"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Nav setRedirect={setRedirect} />
        <div className="container_content_page">
          <div className="container_total_price">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              filterTransactions={filterTransactions}
              setFilterTransactions={setFilterTransactions}
            />

            <TotalValue listTransactions={listTransactions} />
          </div>

          {listTransactions.length ? (
            <div className="container_summary_list">
              <FinancialSummary
                listTransactions={listTransactions}
                filterTransactions={filterTransactions}
                setFilterTransactions={setFilterTransactions}
              />
              <List
                listTransactions={listTransactions}
                setFilterTransactions={setFilterTransactions}
                setListTransactions={setListTransactions}
                filterTransactions={filterTransactions}
              />
            </div>
          ) : (
            <div className="container_no_list">
              <img
                className="img_no_list"
                src="/Group 271.png"
                alt="Imagem lista vazia"
              ></img>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default App;
