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
  const [selectValue, setSelectValue] = useState("Entrada");

  const newItem = (event) => {
    event.preventDefault();

    if (!!newValue && !!newDescription && selectValue === "Entrada") {
      let newObject = {
        description: newDescription,
        type: selectValue,
        value: newValue,
      };

      setListTransactions([newObject, ...listTransactions]);
      setFilterTransactions([newObject, ...filterTransactions]);
      setNewDescription("");
      setNewValue(0);
    }
    if (!!newValue && !!newDescription && selectValue === "Despesa") {
      let newObject = {
        description: newDescription,
        type: selectValue,
        value: -newValue,
      };

      setListTransactions([newObject, ...listTransactions]);
      setFilterTransactions([newObject, ...filterTransactions]);
      setNewDescription("");
      setNewValue(0);
    }
  };
  return (
    <form className="form_container" onSubmit={newItem}>
      <div className="container_input_description container_input_descriotion_fixed">
        <span className="informations_form">Descrição</span>
        <input
          className="input_card_description"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
        <span className="exemple_form">Ex: Compra de roupas</span>
      </div>
      <div className="container_select">
        <div className="container_input_value">
          <span className="informations_form">Valor</span>
          <input
            className="inputCard"
            type="number"
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
          />
        </div>
        <div className="container_input_value_type">
          <span className="informations_form">Tipo de valor</span>
          <select
            className="selectCard"
            name=""
            id=""
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
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
