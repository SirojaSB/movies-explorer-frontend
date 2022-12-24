import './SearchForm.css'
import icon from '../../images/Search-icon.svg'
import {useState} from "react";

function SearchForm() {

    const [isCheck, setIsCheck] = useState(false)

    const handleCheckbox = () => {
        if (isCheck) {
            setIsCheck(false)
        } else {
            setIsCheck(true)
        }
    }

    return (
        <form className='search-form'>
            <label className='search-form__input-label'>
                <input className='search-form__input' name='search-films' type="text" placeholder='Фильм' required/>
                <button className='search-form__btn' type='submit'>
                    <img className='search-form__icon' src={icon} alt='Иконка поиска'/>
                </button>
            </label>
            <label className='search-form__checkbox-label'>
                Короткометражки
                <input className='search-form__checkbox' name='short-films' type='checkbox' onChange={handleCheckbox}/>
                <span className={`search-form__checkbox-visible ${isCheck && 'search-form__checkbox-visible_active'}`} />
            </label>
        </form>
    )
}

export default SearchForm
