import earth from '../../images/Earth.svg'
import './Promo.css'

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__info'>
                <h1 className='promo__title'>Проект по поиску фильмов: Movies-Siroja.</h1>
                <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className='promo__nav' href='#about-project'>Узнать больше</a>
            </div>
            <img className='promo__img' src={earth} alt="Изображение Земли"/>
        </section>
    )
}

export default Promo
