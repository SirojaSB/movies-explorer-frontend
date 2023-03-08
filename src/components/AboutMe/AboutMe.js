import './AboutMe.css'
import photo from "../../images/photo.jpg";

function AboutMe() {
    return (
        <section className='about-me'>
            <h3 className='about-me__title'>Студент</h3>
            <div className='about-me__line' />
            <div className='about-me__info'>
                <div className='about-me__bio'>
                    <h4 className='about-me__name'>Сергей</h4>
                    <p className='about-me__job'>Фронтенд-разработчик, 23 года</p>
                    <p className='about-me__text'>
                        Я родился в небольшом сибирском городке. Успешно поступив в СГУПС, переехал в Новосибирск. Поняв, что логистика и РЖД не мое, перестал развиваться в этом направлении.
                        Уже год познаю и совершенствую технологии, которые открыл для меня Фронтенд.
                    </p>
                    <a className='about-me__github' href='https://github.com/SirojaSB'>Github</a>
                </div>
                <img className='about-me__img' src={photo} alt="Фотография разработчика"/>
            </div>
        </section>
    )
}

export default AboutMe
