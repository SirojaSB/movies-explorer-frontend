import icon from '../../images/link-icon.svg'
import './Portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__projects'>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="https://github.com/SirojaSB/how-to-learn" target='_blank' rel="noreferrer">
                        <h4 className='portfolio__link-title'>Статичный сайт</h4>
                        <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
                    </a>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="https://github.com/SirojaSB/russian-travel" target='_blank' rel="noreferrer">
                        <h4 className='portfolio__link-title'>Адаптивный сайт</h4>
                        <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
                    </a>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="https://github.com/SirojaSB/react-mesto-auth" target='_blank' rel="noreferrer">
                        <h4 className='portfolio__link-title'>Одностраничное приложение</h4>
                        <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio
