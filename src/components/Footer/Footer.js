import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__line'></div>
            <div className='footer__info'>
                <p className='footer__copyright'>&#xa9; 2022</p>
                <nav className='footer__nav-links'>
                    <ul className='footer__links'>
                        <li className='footer__link'>
                            <a className='footer__link-item' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__link'>
                            <a className='footer__link-item' href='https://github.com/SirojaSB'>Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
