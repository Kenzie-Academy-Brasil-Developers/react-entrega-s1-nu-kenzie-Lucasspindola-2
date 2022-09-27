import "./style.css";
const Nav = ({ setRedirect }) => {
  const redirectPage = () => {
    setRedirect(true);
  };
  return (
    <div className="container_nav">
      <div className="container_position">
        <img src="/Nu Kenzie.png" alt="logo" />
        <button onClick={redirectPage} className="btn_inicio">
          Inicio
        </button>
      </div>
    </div>
  );
};
export default Nav;
