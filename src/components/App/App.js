import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from  "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {

    const withHeaderPages = ['/', '/movies', '/saved-movies', '/profile']
    const withFooterPages = ['/', '/movies', '/saved-movies']

    const location = useLocation().pathname;

    const isWithHeader = withHeaderPages.includes(location);
    const isWithFooter = withFooterPages.includes(location);

  return (
      <div className='page'>
        { isWithHeader && <Header/> }
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        { isWithFooter && <Footer /> }
      </div>
  );
}

export default App;
