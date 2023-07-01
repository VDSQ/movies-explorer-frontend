import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { mainApi } from "../../utils/MainApi";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import NotFoundError from "../NotFoundError/NotFoundError";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState({
    isOpen: false,
    isSuccess: false,
    message: "",
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleBurgerClick() {
    setMobileNavigationOpened(!isMobileNavigationOpened);
  }

  const handleInfoTooltipClose = useCallback(
    () => setInfoTooltip({ ...infoTooltip, isOpen: false }),
    [infoTooltip]
  );

  function handleSignOut() {
    mainApi
      .signout()
      .then((result) => {
        setCurrentUser({});
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Ошибка при выходе из учетной записи",
        });
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);

    mainApi
      .login(email, password)
      .then((result) => {
        if (result.token) {
          localStorage.setItem("jwt", result.token);
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        } else {
          setInfoTooltip({
            isOpen: true,
            isSuccess: false,
            message: "Неверный логин или пароль",
          });
        }
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Ошибка при авторизации",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);

    mainApi
      .createUser(name, email, password)
      .then((result) => {
        if (result.name && result.email) {
          handleLogin({ email, password });
          setInfoTooltip({
            isOpen: true,
            isSuccess: true,
            message: "Вы успешно зарегистрировались!",
          });
        } else {
          setInfoTooltip({
            isOpen: true,
            isSuccess: true,
            message: result.message,
          });
        }
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Ошибка при регистрации",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleProfile({ name, email }) {
    setIsLoading(true);

    mainApi
      .updateUser(name, email)
      .then((result) => {
        setCurrentUser(result);
        setInfoTooltip({
          isOpen: true,
          isSuccess: true,
          message: "Ваши данные обновлены!",
        });
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Не удалось обновить данные пользователя",
        });
      })
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((result) => {
        setSavedMovies([result, ...savedMovies]);
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Не удалось сохранить фильм",
        });
      });
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (m) => m.movieId === movie.id || m.movieId === movie.movieId
    );

    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter((m) => {
          return m.movieId === movie.id || m.movieId === movie.movieId
            ? false
            : true;
        });
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {
        setInfoTooltip({
          isOpen: true,
          isSuccess: false,
          message: "Не удалось удалить фильм",
        });
      });
  }

  useEffect(() => {
    document.documentElement.setAttribute("lang", "ru");
  }, []);

  useEffect(() => {
    function closeByEscape(e) {
      if (e.key === "Escape") {
        handleInfoTooltipClose();
      }
    }

    if (infoTooltip.isOpen) {
      document.addEventListener("keydown", closeByEscape);

      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [infoTooltip, handleInfoTooltipClose]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      setIsLoading(true);

      mainApi
        .getUserInfo()
        .then((result) => {
          if (result._id) {
            setIsLoggedIn(true);
            setCurrentUser(result);
          }
        })
        .catch((error) => {
          setInfoTooltip({
            isOpen: true,
            isSuccess: false,
            message: "Ошибка при верификации токена авторизации",
          });
        })
        .finally(() => {
          setIsLoading(false);
          setIsLoaded(true);
        });
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);

      mainApi
        .getUserInfo()
        .then((result) => setCurrentUser(result))
        .catch((error) => {
          setInfoTooltip({
            isOpen: true,
            isSuccess: false,
            message: "Ошибка при получении пользователя",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      Promise.all([mainApi.getSavedMovies()])
        .then(([movies]) => {
          setSavedMovies(
            movies.filter((movie) => movie.owner === currentUser._id)
          );
        })
        .catch((error) => {
          setInfoTooltip({
            isOpen: true,
            isSuccess: false,
            message: "Данные с сервера не загрузились",
          });
        });
    }
  }, [isLoggedIn, currentUser]);

  if (!isLoaded) {
    return (
      <div className="app app_preloader">
        <Preloader />
      </div>
    );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/signup"
            element={
              !isLoggedIn ? (
                <Register onRegister={handleRegister} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            exact
            path="/signin"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            exact
            path="/"
            element={[
              <Header
                key="header"
                isLoggedIn={isLoggedIn}
                onClickBurger={handleBurgerClick}
              />,
              <Main key="main" />,
              <Footer key="footer" />,
            ]}
          />

          <Route
            path="/movies"
            element={[
              <Header
                key="header"
                isLoggedIn={isLoggedIn}
                onClickBurger={handleBurgerClick}
              />,
              <ProtectedRoute
                key="movies"
                isLoggedIn={isLoggedIn}
                component={Movies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
              />,
              <Footer key="footer" />,
            ]}
          />

          <Route
            exact
            path="/saved-movies"
            element={[
              <Header
                key="header"
                isLoggedIn={isLoggedIn}
                onClickBurger={handleBurgerClick}
              />,
              <ProtectedRoute
                key="saved-movies"
                isLoggedIn={isLoggedIn}
                component={SavedMovies}
                onDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
              />,
              <Footer key="footer" />,
            ]}
          />

          <Route
            exact
            path="/profile"
            element={[
              <Header
                key="header"
                isLoggedIn={isLoggedIn}
                onClickBurger={handleBurgerClick}
              />,
              <ProtectedRoute
                key="profile"
                isLoggedIn={isLoggedIn}
                component={Profile}
                onProfile={handleProfile}
                onSignOut={handleSignOut}
              />,
            ]}
          />

          <Route
            exact
            path="*"
            element={<NotFoundError navigate={navigate} />}
          />
        </Routes>

        <MobileNavigation
          isOpen={isMobileNavigationOpened}
          onClose={handleBurgerClick}
        />

        <InfoTooltip params={infoTooltip} onClose={handleInfoTooltipClose} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
