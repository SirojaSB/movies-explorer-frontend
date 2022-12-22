import './Profile.css'
import {useState} from "react";

function Profile() {

    const [isEdit, setIsEdit] = useState(false)

    const handleEditBtn = () => {
        if (isEdit) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }

    return (
        <main className='profile'>
            <p className='profile__greetings'>Привет, Сергей!</p>
            <form className='profile__form'>
                <label className='profile__input-label'>
                    Имя
                    <input type="text" className='profile__input' placeholder='Сергей' disabled={!isEdit}/>
                </label>
                <label className='profile__input-label'>
                    E-mail
                    <input type="email" className='profile__input' placeholder='pochta@yandex.ru' disabled={!isEdit}/>
                </label>
                {isEdit &&
                    <button className='profile__btn-submit' type='submit' onClick={handleEditBtn}>Сохранить</button>
                }
            </form>
            {!isEdit &&
                <>
                    <button className='profile__btn-edit' type='button' onClick={handleEditBtn}>Редактировать</button>
                    <button className='profile__btn-logout' type='button'>Выйти из аккаунта</button>
                </>
            }
        </main>
    )
}

export default Profile
