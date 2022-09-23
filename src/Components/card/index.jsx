import { BsFillTrashFill } from "react-icons/bs";
import "./style.css";

const CardList = ({ element, id }) => {
  const removeItem = () => {};
  return (
    <div id={id} className="card_list_container">
      <div className="card_left">
        <h2 className="title_list">{element.description}</h2>
        <span>{element.type}</span>
      </div>
      <div className="card_right">
        <span>R${element.value}.00</span>
        <button onClick={() => removeItem()} className="btnTrash">
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default CardList;
