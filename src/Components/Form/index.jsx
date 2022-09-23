import { useState } from "react";
import "./style.css";

const Form = ({
  listTransactions,
  setListTransactions,
  filterTransactions,
  setFilterTransactions,
}) => {
  const [newDescription, setNewDescription] = useState("");
  const [newValue, setNewValue] = useState(0);
  const [selectValue, setSelectValue] = useState("entrada");

  const newItem = (event) => {
    event.preventDefault();
    if (!!newValue && !!newDescription) {
      let newObject = {
        description: newDescription,
        type: selectValue,
        value: newValue,
      };

      setListTransactions([...listTransactions, newObject]);
      setFilterTransactions([...filterTransactions, newObject]);
      setNewDescription("");
      setNewValue(0);
    }

    console.log(listTransactions);
    // limpar inputs e select
  };
  return (
    <form className="form_container" onSubmit={newItem}>
      <div className="container_input_description container_input_descriotion_fixed">
        <span>Descrição</span>
        <input
          className="input_card_description"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
      </div>
      <div className="container_select">
        <div className="container_input_value">
          <span>Valor</span>
          <input
            className="inputCard"
            type="number"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </div>
        <div className="container_input_value_type">
          <span>Tipo de valor</span>
          <select
            className="selectCard"
            name=""
            id=""
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn_form">
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;

// Boa tarde, fiz objeto que quero acrescentar no [] pelo useState. Mas sempre quebra, já peguei os valores.
// Codigo como esta

// variavel evento do btn
// const newItem = (event) => {
//   event.preventDefault();

//   let newObject = {
//     description: newDescription,
//     type: selectValue,
//     value: newValue,
//   };

//   // setListTransactions(newObject);
//   console.log(newObject);
//   // limpar inputs e select
// };

// Referente entrega NuKenzie
