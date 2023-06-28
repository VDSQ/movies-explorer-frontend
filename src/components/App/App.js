import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Виталий",
    email: "test@mygmail.com",
  });
  const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isSuccessStatus, setSuccessStatus] = useState(false);
  const [message, setMessage] = useState(
    "Что-то пошло не так! Попробуйте ещё раз."
  );

  function handleMobileNavigationClick() {
    !isMobileNavigationOpen
      ? setMobileNavigationOpen(true)
      : setMobileNavigationOpen(false);
  }

  function handleCloseInfoTooltipClick() {}

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/signin" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Main
                isMobileNavigationOpen={isMobileNavigationOpen}
                onClickMobileNavigation={handleMobileNavigationClick}
              />
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <Movies
                isMobileNavigationOpen={isMobileNavigationOpen}
                onClickMobileNavigation={handleMobileNavigationClick}
              />
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <SavedMovies
                isMobileNavigationOpen={isMobileNavigationOpen}
                onClickMobileNavigation={handleMobileNavigationClick}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                isMobileNavigationOpen={isMobileNavigationOpen}
                onClickMobileNavigation={handleMobileNavigationClick}
              />
            }
          />
          <Route exact path="/404" element={<NotFoundError />} />
        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={handleCloseInfoTooltipClick}
          isSuccessStatus={isSuccessStatus}
          message={message}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
