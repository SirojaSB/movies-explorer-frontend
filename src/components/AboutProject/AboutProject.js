import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project' id='about-project'>
            <h3 className='about-project__title'>О проекте</h3>
            <div className='about-project__line' />
            <ul className='about-project__stages'>
                <li className='about-project__stage'>
                    <h3 className='about-project__stage-title'>Проект включал 5 этапов</h3>
                    <p className='about-project__stage-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className='about-project__stage'>
                    <h3 className='about-project__stage-title'>На выполнение ушло 5 недель</h3>
                    <p className='about-project__stage-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className='about-project__weeks'>
                <li className='about-project__week-first'>
                    <p className='about-project__timing about-project__timing_first'>1 неделя</p>
                    <p className='about-project__development'>Back-end</p>
                </li>
                <li className='about-project__week'>
                    <p className='about-project__timing'>4 недели</p>
                    <p className='about-project__development'>Front-end</p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject
