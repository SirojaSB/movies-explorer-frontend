import './AboutMe.css'
import photo from "../../images/photo.jpg";

function AboutMe() {
    return (
        <div className='about-me'>
            <h3 className='about-me__title'>Студент</h3>
            <div className='about-me__line' />
            <div className='about-me__info'>
                <div className='about-me__bio'>
                    <h4 className='about-me__name'>Сергей</h4>
                    <p className='about-me__job'>Фронтенд-разработчик, 23 года</p>
                    <p className='about-me__text'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className='about-me__github' href='https://github.com/SirojaSB'>Github</a>
                </div>
                <img className='about-me__img' src={photo} alt="Фотография разработчика"/>
            </div>
        </div>
    )
}

export default AboutMe
