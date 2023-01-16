import './AuthTemlate.css'
import {Link, useLocation} from 'react-router-dom';


function AuthTemplate({title, btn, text, link, linktext, children, isValid, onSubmit, errorMessage}) {

    const location = useLocation().pathname;
    const isLogin = location === '/signin';

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <main className='auth'>
            <Link to='/' className='auth__link-logo' />
            <p className='auth__greetings'>{title}</p>
            <form className='auth__form' onSubmit={handleSubmit}>
                {children}
                <p className={`auth__error-message ${isLogin && 'auth__error-message_login'}`}>
                    {errorMessage}
                </p>
                <button className={`auth__btn-submit ${!isValid ? 'profile__btn-submit_disabled' : ''}`} disabled={!isValid}>
                    {btn}
                </button>
            </form>
            <p className='auth__text-under'>{text}
                <Link to={link} className='auth__text-under auth__text-under_link'>
                    {linktext}
                </Link>
            </p>
        </main>
    )
}

export default AuthTemplate
