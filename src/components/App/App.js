import './App.css';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from  "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import {moviesApi} from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import {register, authorize} from "../../utils/auth";
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
    EDITING_CONFIRMATION_MESSAGE,
    EDITING_CONFIRMATION_ERROR_MESSAGE,
    VALIDATION_ERROR_MESSAGE,
    REGISTER_ERROR_MESSAGE,
    LOGIN_ERROR_MESSAGE,
    TOKEN_INVALID_MESSAGE,
    DESKTOP_COMPONENT_SIZE,
    TABLET_COMPONENT_SIZE,
    DESKTOP_RESULT_BLOCK_PARAMS,
    TABLET_RESULT_BLOCK_PARAMS,
    MOBILE_RESULT_BLOCK_PARAMS
} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function App() {

    const [foundMovies, setFoundMovies] = useState([])
    const [resultBlock, setResultBlock] = useState([])
    const [foundMoviesWithCheckbox, setFoundMoviesWithCheckbox] = useState([])
    const [cardsParams, setCardsParams] = useState({})
    const [savedMovies, setSavedMovies] = useState([])
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [validationMessage, setValidationMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isRequested, setIsRequested] = useState(false)
    const [isFirstSearch, setIsFirstSearch] = useState(true)

    const withHeaderPages = ['/', '/movies', '/saved-movies', '/profile']
    const withFooterPages = ['/', '/movies', '/saved-movies']
    const redirectPages = ['/signup', '/signin']

    const location = useLocation().pathname

    const isWithHeader = withHeaderPages.includes(location)
    const isWithFooter = withFooterPages.includes(location)
    const isRedirectPages = redirectPages.includes(location)

    const navigate = useNavigate();

    const searchMovies = async (requestedText, isShortMovie) => {
        setIsFirstSearch(false)
        setIsRequested(true)
        try {
            const resMovies = await moviesApi.getMovies()

            const filteredMovies = filterMovies(resMovies, requestedText)
            setFoundMovies(filteredMovies)

            const filteredMoviesWithCheckbox = filterMovies(resMovies, requestedText, isShortMovie)
            setFoundMoviesWithCheckbox(filteredMoviesWithCheckbox)

            sessionStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))

            calculateNumberOfCards()

            setIsRequested(false)
        } catch (err) {
            console.log(err)
            setIsRequested(false)
        }
    }

    const searchSavedMovies = (requestedText, isShortMovie) => {
        const filteredMovies = filterMovies(savedMovies, requestedText, isShortMovie)
        setFilteredSavedMovies(filteredMovies)
    }

    const filterMovies = (movies, requestedText, isShortMovie) => {
        localStorage.setItem('requestedText', requestedText)
        sessionStorage.setItem('checkbox', isShortMovie)
        return movies.filter(({nameRU, nameEN, duration}) => {
            const apiTextToLowerCase = (nameRU + nameEN).toLowerCase()
            const requestedTextToLowerCase = requestedText.toLowerCase()

            const checkbox = isShortMovie ? duration <= 40 : true

            return checkbox && apiTextToLowerCase.includes(requestedTextToLowerCase)
        })
    }

    const filterFoundMoviesWithCheckbox = (requestedText, isShortMovie) => {
        const filteredMovies = filterMovies(foundMovies, requestedText, isShortMovie)
        setFoundMoviesWithCheckbox(filteredMovies)
    }

    useEffect(() => {
        const foundMoviesBefore = sessionStorage.getItem('filteredMovies')
        if (foundMoviesBefore) {
            const parsedFoundMovies = JSON.parse(foundMoviesBefore)
            setFoundMovies(parsedFoundMovies)
        }
    }, [])

    const calculateNumberOfCards = () => {
        const pageWidth = document.documentElement.clientWidth;

        if (pageWidth > DESKTOP_COMPONENT_SIZE) {
            return setCardsParams(DESKTOP_RESULT_BLOCK_PARAMS)
        }
        if (pageWidth > TABLET_COMPONENT_SIZE) {
            return setCardsParams(TABLET_RESULT_BLOCK_PARAMS)
        } else {
            setCardsParams(MOBILE_RESULT_BLOCK_PARAMS)
        }

    }

    const addMoreCards = () => {
        const incompleteRow = (Math.abs(resultBlock.length - cardsParams.numberOfCards)) % cardsParams.addCards
        const additionalMoviesQty = incompleteRow && (cardsParams.addCards - incompleteRow)

        const sliceEnd = resultBlock.length + cardsParams.row + additionalMoviesQty
        const result = foundMovies.slice(0, sliceEnd)
        setResultBlock(result)
    }

    useEffect(() => {
        calculateNumberOfCards()

        const calculateWithTimeout = () => {
            const timer = setTimeout(() => {
                calculateNumberOfCards()
            }, 500);
            return () => clearTimeout(timer);
        }

        window.addEventListener('resize', calculateWithTimeout);

        return () => {
            window.removeEventListener('resize', calculateWithTimeout);
        };
    }, []);

    useEffect(() => {
        const result = foundMoviesWithCheckbox.slice(0, cardsParams.numberOfCards)
        setResultBlock(result)
    }, [cardsParams, foundMoviesWithCheckbox])

    const getSavedMovies = async () => {
        const token = localStorage.getItem('jwt')
        if (token) {
            try {
                const foundUsersMovies = await mainApi.getSavedMovies(token)
                setSavedMovies(foundUsersMovies)
                setFilteredSavedMovies(foundUsersMovies)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const saveMovie = async (id) => {
        try {
            const token = localStorage.getItem('jwt')
            const foundMovie = foundMovies.find(item => item.movieId === id)
            const newMovie = await mainApi.saveMovie(foundMovie, token)
            setSavedMovies(movies => [...movies, newMovie])
            setFilteredSavedMovies(movies => [...movies, newMovie])
        } catch (err) {
            console.log(err)
        }
    }

    const deleteMovie = async (id) => {
        try {
            const token = localStorage.getItem('jwt')
            const movie = savedMovies.find(movie => movie.movieId === id)
            await mainApi.deleteMovie(movie._id, token)
            setSavedMovies((savedMovies) => savedMovies.filter((m) => m.movieId !== id))
            setFilteredSavedMovies((savedMovies) => savedMovies.filter((m) => m.movieId !== id))
        } catch (err) {
            console.log(err)
        }
    }

    const tagMovieWithLike = (movies) => {
        return movies.map(movie => {
            const match = savedMovies.find(({ movieId }) => movieId === movie.movieId)
            return match ? { ...movie, isSaved: true } : { ...movie, isSaved: false }
        })
    }

    const handleRegister = async (data) => {
        setIsRequested(true)
        setErrorMessage('')
        try {
            await register(data.name, data.password, data.email)
            await handleLogin(data)
        } catch (err) {
            if(err.message === VALIDATION_ERROR_MESSAGE) {
                setErrorMessage(REGISTER_ERROR_MESSAGE)
            } else {
                setErrorMessage(err.message)
            }
            console.log(err)
        }
        setIsRequested(false)
    }

    const handleLogin = async (data) => {
        setIsRequested(true)
        setErrorMessage('')
        try {
            const { token } = await authorize(data.password, data.email)
            const user = await mainApi.getUserInfo(token)
            setCurrentUser(user)
            setIsLoggedIn(true)
            localStorage.setItem('jwt', token)
            getSavedMovies()
            navigate('/movies')
        } catch (err) {
            if(err.message === VALIDATION_ERROR_MESSAGE) {
                setErrorMessage(LOGIN_ERROR_MESSAGE)
            } else {
                setErrorMessage(err.message)
            }
            setIsLoggedIn(false)
        }
        setIsRequested(false)
    }

    const getUserInfo = async () => {
        const token = localStorage.getItem('jwt');
        setErrorMessage('')
        if (token) {
            try {
                const user = await mainApi.getUserInfo(token)
                setCurrentUser(user)
                setIsLoggedIn(true)
                if (isRedirectPages) {
                    navigate('/movies')
                }
            } catch (err) {
                setErrorMessage(TOKEN_INVALID_MESSAGE)
                setIsLoggedIn(false)
            }
        }
        setIsLoading(false)
    }

    const updateUserInfo = async (data) => {
        setIsRequested(true)
        const token = localStorage.getItem('jwt');
        setValidationMessage('')
        setErrorMessage('')
        try {
            const user = await mainApi.updateUserInfo(data, token)
            setCurrentUser(user)
            setValidationMessage(EDITING_CONFIRMATION_MESSAGE)
        } catch (err) {
            if(err.message === VALIDATION_ERROR_MESSAGE) {
                setErrorMessage(EDITING_CONFIRMATION_ERROR_MESSAGE)
            } else {
                setErrorMessage(err.message)
            }
        }
        setIsRequested(false)
    }

    useEffect(() => {
        getUserInfo()
        getSavedMovies()
    }, [])

    const clearData = () => {
        setFoundMovies([])
        setResultBlock([])
        setFoundMoviesWithCheckbox([])
        setCardsParams({})
        setSavedMovies([])
        setFilteredSavedMovies([])
        setCurrentUser({})
        setIsLoggedIn(false)
        setValidationMessage('')
        setErrorMessage('')
        setIsFirstSearch(true)

        localStorage.removeItem('jwt')
        localStorage.removeItem('requestedText')
        sessionStorage.removeItem('checkbox')
        sessionStorage.removeItem('filteredMovies')
    }

    const handleLogout = () => {
        clearData()
        navigate('/')
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
              {isLoading ? <Preloader/> : (
                  <>
                      { isWithHeader && <Header isLoggedIn={isLoggedIn}/> }
                      <Routes>
                          <Route path='/' element={<Main />} />
                          <Route path='/movies' element={
                              <ProtectedRoute
                                  movies={tagMovieWithLike(resultBlock)}
                                  searchMovies={searchMovies}
                                  onToggle={filterFoundMoviesWithCheckbox}
                                  addMoreCards={addMoreCards}
                                  hideAddCardsBtn={foundMoviesWithCheckbox.length === resultBlock.length}
                                  isLoggedIn={isLoggedIn}
                                  onSave={saveMovie}
                                  onRemove={deleteMovie}
                                  isRequested={isRequested}
                                  isFirstSearch={isFirstSearch}
                                  Component={Movies} />} />
                          <Route path='/saved-movies' element={<ProtectedRoute
                              savedMovies={filteredSavedMovies}
                              isLoggedIn={isLoggedIn}
                              onRemove={deleteMovie}
                              searchMovies={searchSavedMovies}
                              isRequested={isRequested}
                              Component={SavedMovies} />} />
                          <Route path='/profile' element={<ProtectedRoute
                              onLogout={handleLogout}
                              onUpdate={updateUserInfo}
                              isLoggedIn={isLoggedIn}
                              Component={Profile}
                              errorMessage={errorMessage}
                              validationMessage={validationMessage}
                              isRequested={isRequested}/>} />
                          <Route path='/signup' element={
                              <Register
                                  onRegister={handleRegister}
                                  errorMessage={errorMessage}
                                  isRequested={isRequested}/>} />
                          <Route path='/signin' element={
                              <Login
                                  onLogin={handleLogin}
                                  errorMessage={errorMessage}
                                  isRequested={isRequested}/>} />
                          <Route path='*' element={<NotFoundPage />} />
                      </Routes>
                      { isWithFooter && <Footer /> }
                  </>
              )}
          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
