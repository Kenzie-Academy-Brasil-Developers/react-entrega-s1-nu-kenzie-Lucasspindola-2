import CardList from "../card/index";
import "./style.css";

const List = ({ filterTransactions }) => {
  return (
    <div>
      <ul className="ul_lists">
        {filterTransactions.map((element, index) => {
          if (element.type === "entrada") {
            return (
              <li className="component_green" key={index}>
                <CardList element={element} />
              </li>
            );
          } else {
            return (
              <li className="component_grey" key={index}>
                <CardList id={index} element={element} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default List;

// {element.type === 'entrada' ?

// <li className="component_green" key={index}>
//   <CardList element={element} />
// </li>
// :
// <li className="component_grey" key={index}>
//   <CardList element={element} />
// </li>
// }
