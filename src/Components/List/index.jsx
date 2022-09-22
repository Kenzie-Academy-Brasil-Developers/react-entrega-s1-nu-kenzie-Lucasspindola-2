import CardList from "../card/index";
import "./style.css";

const List = ({ listTransactions }) => {
  return (
    <div>
      <ul className="ul_lists">
        {listTransactions.map((element, index) => {
          return (
            <li key={index}>
              <CardList element={element} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
