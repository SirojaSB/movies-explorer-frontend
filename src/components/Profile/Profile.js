import './Profile.css'
import {useState, useEffect, useContext} from "react";
import useFormWithValidation from "../../utils/useFormWithValidation";
import CurrentUserContext from '../../context/CurrentUserContext';
import {EMAIL_PATTERN} from "../../utils/constants";

function Profile({onLogout, onUpdate, validationMessage, errorMessage, isRequested}) {

    const [isEdit, setIsEdit] = useState(false)
    const [isUserInfoChanged, setIsUserInfoChanged] = useState(false);
    const [isError, setIsError] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    const {
        values,
        isValid,
        errors,
        handleChange,
        resetForm
    } = useFormWithValidation();

    const handleEditBtn = () => {
        setIsEdit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdate(values)
    }

    useEffect(() => {
        if(validationMessage) {
            setIsEdit(false)
            setIsError(false)
        } else {
            setIsError(true)
        }
    }, [validationMessage, errorMessage])

    useEffect(() => {
        if (values.name !== currentUser.name || values.email !== currentUser.email) {
            setIsUserInfoChanged(true);
            setIsError(false)
        } else {
            setIsUserInfoChanged(false);
        }
    }, [values?.name, values?.email]);

    useEffect(() => {
        resetForm({ name: currentUser.name || '', email: currentUser.email || '' });
    }, [currentUser])

    return (
        <main className='profile'>
            <p className='profile__greetings'>Привет, {currentUser?.name}!</p>
            <form className='profile__form' onSubmit={handleSubmit}>
                <label className='profile__input-label'>
                    Имя
                    <input type="text"
                           name='name'
                           className={`profile__input ${errors.name && 'profile__input_error'}`}
                           value={values.name || ''}
                           onChange={handleChange}
                           disabled={!isEdit}
                           required/>
                </label>
                <span className='profile__input-error'>{errors.name}</span>
                <label className='profile__input-label'>
                    E-mail
                    <input type="email"
                           name='email'
                           className={`profile__input ${errors.email && 'profile__input_error'}`}
                           value={values.email || ''}
                           pattern={EMAIL_PATTERN}
                           onChange={handleChange}
                           disabled={!isEdit}
                           required/>
                </label>
                <span className='profile__input-error'>{errors.email}</span>
                <p className={`profile__validation-message ${errorMessage && 'profile__validation-message_error'}`}>
                    {validationMessage || errorMessage}
                </p>
                {isEdit &&
                        <button className={`profile__btn-submit ${!isValid || !isUserInfoChanged || isError ? 'profile__btn-submit_disabled' : ''}`}
                                type='submit'
                                disabled={!isValid || !isUserInfoChanged || isError || isRequested}>
                            Сохранить
                        </button>
                }
            </form>
            {!isEdit &&
                <>
                    <button className='profile__btn-edit' type='button' onClick={handleEditBtn}>Редактировать</button>
                    <button className='profile__btn-logout' type='button' onClick={onLogout}>Выйти из аккаунта</button>
                </>
            }
        </main>
    )
}

export default Profile
