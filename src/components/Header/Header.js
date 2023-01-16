import "./Header.css";
import profile from '../../images/Profile-icon.svg'
import {Link, NavLink, useLocation} from 'react-router-dom';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useState} from "react";

function Header({isLoggedIn}) {

    const [isBurger, setIsBurger] = useState(false)

    const location = useLocation().pathname;
    const isMain = location === '/';

    const linkClass = (navData) =>
        navData.isActive ?
            'header__nav-link header__nav-link_active' :
            'header__nav-link'

    const handleBurger = () => {
        if (isBurger) {
            setIsBurger(false)
        } else {
            setIsBurger(true)
        }
    }

    return (
        <header className={`header ${isMain && 'header_place_main'}`}>
            <Link to='/' className='header__logo' />
            { !isLoggedIn ? (
                <div className='header__auth'>
                    <Link to='/signup' className='header__register'>Регистрация</Link>
                    <Link to='/signin' className='header__login'>Войти</Link>
                </div>
            ) : (
                <>
                    <button className={`header__burger-btn ${isBurger && 'header__burger-btn_close'}`} type='button' onClick={handleBurger}/>
                    <BurgerMenu isOpen={isBurger} onClose={handleBurger}/>
                    <div className='header__page-nav'>
                        <nav className='header__movies-nav'>
                            <NavLink to='/movies' className={linkClass}>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className={linkClass}>Сохранённые фильмы</NavLink>
                        </nav>
                        <Link to='/profile' className='header__profile-link'>
                            <p className='header__profile-link-text'>Аккаунт</p>
                            <div className='header__container-profile-icon'>
                                <img className='header__profile-icon' src={profile} alt="Иконка профиля"/>
                            </div>
                        </Link>
                    </div>
                </>
            )
            }
        </header>
    )
}

export default Header;
