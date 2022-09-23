import "./style.css";
const Nav = ({ setRedirect }) => {
  const redirectPage = () => {
    setRedirect(true);
  };
  return (
    <div className="container_nav">
      <img src="/Nu Kenzie.png" alt="logo" />
      <button onClick={redirectPage} className="btn_inicio">
        Inicio
      </button>
    </div>
  );
};
export default Nav;
