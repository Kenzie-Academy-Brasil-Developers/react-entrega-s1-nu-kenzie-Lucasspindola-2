import "./style.css";
const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <form className="form_container" action="">
      <div className="container_input_description container_input_descriotion_fixed">
        <span>Descrição</span>
        <input
          className="input_card_description"
          placeholder="Digite aqui sua descrição"
          type="text"
        />
      </div>
      <div className="container_select">
        <div className="container_input_value">
          <span>Valor</span>
          <input className="inputCard" type="text" />
        </div>
        <div className="container_input_value_type">
          <span>Tipo de valor</span>
          <select className="selectCard" name="" id="">
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="btn_form" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
