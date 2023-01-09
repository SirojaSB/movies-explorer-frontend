import './BurgerMenu.css'
import {Link, NavLink} from "react-router-dom";
import profile from "../../images/Profile-icon.svg";

function BurgerMenu({isOpen, onClose}) {

    const linkClass = (navData) =>
        navData.isActive ?
            'burger-menu__nav-link burger-menu__nav-link_active' :
            'burger-menu__nav-link'

    return (
        <div className={`burger-menu ${ isOpen && 'burger-menu_open'}`}>
            <div className='burger-menu__content'>
                <nav className='burger-menu__nav'>
                    <NavLink to='/' className={linkClass} onClick={onClose}>Главная</NavLink>
                    <NavLink to='/movies' className={linkClass} onClick={onClose}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={linkClass} onClick={onClose}>Сохранённые фильмы</NavLink>
                </nav>
                <Link to='/profile' className='burger-menu__profile-link' onClick={onClose}>
                    <p className='burger-menu__profile-link-text'>Аккаунт</p>
                    <div className='burger-menu__container-profile-icon'>
                        <img className='burger-menu__profile-icon' src={profile} alt="Иконка профиля"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BurgerMenu
