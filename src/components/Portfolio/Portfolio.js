import icon from '../../images/link-icon.svg'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <a className='portfolio__link' href="https://github.com/SirojaSB/how-to-learn">
                <h4 className='portfolio__link-title'>Статичный сайт</h4>
                <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
            </a>
            <div className='portfolio__line'></div>
            <a className='portfolio__link' href="https://github.com/SirojaSB/russian-travel">
                <h4 className='portfolio__link-title'>Адаптивный сайт</h4>
                <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
            </a>
            <div className='portfolio__line'></div>
            <a className='portfolio__link' href="https://github.com/SirojaSB/react-mesto-auth">
                <h4 className='portfolio__link-title'>Одностраничное приложение</h4>
                <img className='portfolio__link-img' src={icon} alt="Иконка ссылка"/>
            </a>
        </div>
    )
}

export default Portfolio
