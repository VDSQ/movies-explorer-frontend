import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn, onClickBurger }) {
  const location = useLocation();

  const logo = <Link to="/" className="link logo" />;
  
  const navigation = (
    <Navigation isLoggedIn={isLoggedIn} onClickBurger={onClickBurger} />
  );

  return (
    <header
      className={"header" + (location.pathname === "/" ? " header_navy" : "")}
    >
      <div className="container header__container">
        {logo}
        {navigation}
      </div>
    </header>
  );
}

export default Header;
