import './Techs.css'

function Techs() {
    return (
        <div className='techs'>
            <h3 className='techs__title'>Технологии</h3>
            <div className='techs__line' />
            <h4 className='techs__subtitle'>7 технологий</h4>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__items'>
                <li className='techs__item'>HTML</li>
                <li className='techs__item'>CSS</li>
                <li className='techs__item'>JS</li>
                <li className='techs__item'>React</li>
                <li className='techs__item'>Git</li>
                <li className='techs__item'>Express.js</li>
                <li className='techs__item'>mongoDB</li>
            </ul>
        </div>
    )
}

export default Techs