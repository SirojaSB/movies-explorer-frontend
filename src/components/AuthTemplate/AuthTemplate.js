import './AuthTemlate.css'
import {Link, useLocation} from 'react-router-dom';

function AuthTemplate({title, btn, text, link, linktext, children}) {

    const location = useLocation().pathname;
    const isLogin = location === '/signin';

    return (
        <main className='auth'>
            <Link to='/' className='auth__link-logo' />
            <p className='auth__greetings'>{title}</p>
            <form className='auth__form'>
                {children}
                <button className={`auth__btn-submit ${isLogin && 'auth__btn-submit_login'}`}>{btn}</button>
            </form>
            <p className='auth__text-under'>{text} <Link to={link} className='auth__text-under auth__text-under_link'>{linktext}</Link></p>
        </main>
    )
}

export default AuthTemplate
