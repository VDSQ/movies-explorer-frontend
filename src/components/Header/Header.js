import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, isMainPage, onClickMobileNavigation }) {
  const logo = <Link to="/" className="link logo" />;

  const navigation = (
    <Navigation
      isLoggedIn={isLoggedIn}
      isMainPage={isMainPage}
      onClickMobileNavigation={onClickMobileNavigation}
    />
  );

  const headerNavyClassName = isMainPage ? " header_navy" : "";

  return (
    <header className={"header" + headerNavyClassName}>
      <div className="container header__container">
        {logo}
        {navigation}
      </div>
    </header>
  );
}

export default Header;
