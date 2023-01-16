import {useNavigate} from 'react-router-dom';
import './NotFoundPage.css'

function NotFoundPage() {
    const navigate = useNavigate();

    return(
        <main className='not-found-page'>
            <p className='not-found-page__error'>404</p>
            <p className='not-found-page__message'>Страница не найдена</p>
            <button type='button' className='not-found-page__back-link' onClick={() => navigate(-1)}>Назад</button>
        </main>
    )
}

export default NotFoundPage
