import { BsFillTrashFill } from "react-icons/bs";
// import CardList from "../card/index";
import "./style.css";

const List = ({
  filterTransactions,
  setFilterTransactions,
  setListTransactions,
  listTransactions,
}) => {
  const removeItem = (indexBtn) => {
    const filterRemove = listTransactions.filter((item, index) => {
      return indexBtn !== index;
    });
    console.log(filterRemove);
    setFilterTransactions(filterRemove);
    setListTransactions(filterRemove);
  };

  return (
    <div>
      <ul className="ul_lists">
        {filterTransactions.map((element, index) => {
          if (element.type === "entrada") {
            return (
              <li className="component_green" key={index}>
                {/* <CardList element={element} /> */}

                <div className="card_list_container">
                  <div className="card_left">
                    <h2 className="title_list">{element.description}</h2>
                    <span className="type_information">{element.type}</span>
                  </div>
                  <div className="card_right">
                    <span className="value_information">
                      R${element.value}.00
                    </span>
                    <button
                      onClick={() => removeItem(index)}
                      className="btnTrash"
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              </li>
            );
          } else {
            return (
              <li className="component_grey" key={index}>
                {/* <CardList id={index} element={element} /> */}
                {/* aqui */}
                <div className="card_list_container">
                  <div className="card_left">
                    <h2 className="title_list">{element.description}</h2>
                    <span className="type_information">{element.type}</span>
                  </div>
                  <div className="card_right">
                    <span className="value_information">
                      R${element.value}.00
                    </span>
                    <button
                      onClick={() => removeItem(index)}
                      className="btnTrash"
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>

                {/* aqui */}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default List;
